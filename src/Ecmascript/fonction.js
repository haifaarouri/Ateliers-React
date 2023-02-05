let searchById = (tab, id) => {
    return tab.reduce((obj, currentItem)=>{
        if(currentItem.ID===id){
            obj=currentItem
        }
        return obj
    }, {})
}

export default searchById