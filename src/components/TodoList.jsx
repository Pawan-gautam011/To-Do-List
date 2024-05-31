import React from 'react'

function Todolist(props) {
  return (
    <div className="content">
    <li className="list-item">
        {props.item}
        <span className='icons'>
        <i className="bx bxs-trash icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
        </span>
    </li>
    </div>
  )
}

export default Todolist