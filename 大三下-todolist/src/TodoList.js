import React, { Component } from 'react';
// import store from './store';
import {add_todo} from './actions/index.js'
import {del_todo} from './actions/index.js'
import {connect} from 'react-redux';

let TodoList=({dispatch,list})=>{
    let handleAdd=(e)=>{
        if(e.keyCode===13){
            dispatch(add_todo(e.target.value));
            e.target.value='';
        } 
    }

    let handleDel=(index)=>{
        dispatch(del_todo(index))
    }
    return (
        <div>
            <input type="text" onKeyDown={handleAdd}/><br/>
            <ul>
                {
                    list.map(
                        (item,index)=>(
                            <li key={index}>
                                {item}
                                <button onClick={handleDel.bind(index)}>删除</button>
                                {/* <button onClick={()=>handleDel(index)}>删除</button> */}
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    );
}


//mapStateToProps返回props对象
let mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
//connect 返回一个高阶组件函数   就会拿到提供器传的store
export default connect (mapStateToProps)(TodoList);
