const initialState = {
    counter:0
}

const counter = (state=initialState, action) => {
    switch(action.type){
        case 'increment':
            return {...state.counter, counter: state.counter + action.payload}
            // state.counter+=action.payload; //+=1
        case 'decrement':
            return {...state.counter, counter: state.counter - action.payload}
            // return state.counter-=action.payload;
        default :
        return state;
    }
}

export default counter;