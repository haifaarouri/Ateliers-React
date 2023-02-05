import searchById from './fonction'

let findLongestWord = (tab) => {
    let mapTab = tab.map(item => {
        let obj = {
            mot: item, 
            longueur: item.length
        }
        return obj
    })

    console.log(mapTab)

    let max = mapTab[0]
    let reduceTab = mapTab.reduce((returnArr, currentItem) => {
        if(currentItem.longueur>max.longueur){
            max=currentItem
            returnArr.shift()
            returnArr.push(max)
        }
        return returnArr
    }, [])

    return reduceTab
}

let [...t] = ["haifa","arouri","azertyuodfghjjksdfghjjkk","4èmetwin4"]
console.log(t)
console.log(findLongestWord(t))
export default findLongestWord


export let occElements = (tab) => {

    let t = tab.flat()
    console.log(t)

    let reduceTab = t.reduce((obj, currentItem)=> {
        let occE = 0
        for(let e of t){
            if(e===currentItem){
                occE++
                Object.defineProperty(obj, e, {value:occE, configurable: true})
            }
        }
        occE = 0
        return obj
    }, {})

    return reduceTab
}

let [...t2] = [["a","b","c"], ["c","d","f"], ["d","f","g"]]
console.log(t2)
console.log(occElements(t2))


export let totalNotes = (tab) => {
    return (tab
    .map(student => {
        if(student.marks<50){
            student.marks+=15
        }
        return student
    })
    .filter(item => item.marks>50)
    .reduce((total, currentItem)=> total+currentItem.marks, 0))
}

let students = [
    {name: 'John', id:123, marks:98},
    {name: 'Baba', id:101, marks:23},
    {name: 'John', id:200, marks:45},
    {name: 'Wick', id:115, marks:75},
]
console.log(students)
console.log(totalNotes(students))

export let func4 = (tab) => {
    let id = 1
        
    tab.push({nom: "Salhi", prenom: "Rahil", classe:"4SAE1"})
    tab.unshift({nom: "Kouki", prenom: "Samar", classe:"4DS5"})
    
    return tab.map(item=>{
        Object.defineProperty(item, 'ID', {value: id})
        id++
        return item
    })
}

let Tab = [
    {nom: "Arouri", prenom: "Haifa", classe:"4twin4"},
    {nom: "Makhloufi", prenom: "Rim", classe:"4SE5"}
]
console.log(func4(Tab))
console.log(Tab)

console.log(searchById(Tab, 2))