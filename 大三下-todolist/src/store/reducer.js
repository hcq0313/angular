import {ADD_TODO_ITEM,DEL_TODO_ITEM} from '../actions/ActionTypes'
let initValue={  
    list:[1,2,3]
}
export default (state=initValue,action)=>{
    switch(action.type){
        case ADD_TODO_ITEM:
            // let newState=JSON.parse(JSON.stringify(state));
            // newState.list.push(action.value);
            // return newState;
            return [...state,action.value];
        case DEL_TODO_ITEM:
            let newState1=JSON.parse(JSON.stringify(state));
            newState1.list.splice(action.index,1);
            return newState1;
            // return state.filter((item,index)=>{
            //     return index!==action.index;
            // });
        default:
            return state;
    }
}
