



const Counter = ({count, decrement, increment}) => {
    return(
        <>
            <h1>My counter</h1>
            {count}
            <button onClick={() => increment()} >+ 1</button>
            <button onClick={() => decrement()} >- 1</button>

        </>
    )
}


export default Counter