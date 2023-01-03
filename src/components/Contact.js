import React from 'react'



const Contact = (props) => {
    console.log(props)
    return(
        <>
            <h1>My address is {props.city}</h1>
        </>
    )
}

export default Contact