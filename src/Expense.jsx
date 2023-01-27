import React,{useState} from 'react'

const Expense = (props) => {
    const handleClick = (e) => {
        alert(props.name + " is priced " + props.price)
    }

    return (
        <div className="container">
            <div className="box">
            <div>
                <b>{props.name}</b> - Php{props.price}
            </div>
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
        </div>
  )
}

export default Expense