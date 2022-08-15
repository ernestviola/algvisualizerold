import React, { useEffect, useState } from 'react'

import '../css/Search.css'

const ArraySearch = () => {
    const [size, setSize] = useState(0)
    const [listItems, setListItems] = useState([])

    const startSearch = (e) => {
        e.preventDefault()
    }

    const createArray = (e) => {
        e.preventDefault()
        let a = []
        for (let i = 0; i <= size; i++) {
            a.push(i)
        }
        setListItems(a)
    }

    return (
        <div>
            <h1>Search algorithms</h1>
            <form onSubmit={startSearch}>
                <label>Items: </label>
                <input min="0" max="1000" value={size} type="number" name='items' onChange={(e) => setSize(e.target.value)} />
                <button onClick={createArray}>Create Array</button>
                {/* <button onClick={randomizeArray}>Randomize Array</button> */}
            </form>
            <div className='itemContainer'>
                {listItems.map(item =>
                    <div key={item} className='item'>{item}</div>
                )}
            </div>
            
            
        </div>
    )
}

export default ArraySearch