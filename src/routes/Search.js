import React, { useEffect, useState } from 'react'

const Search = () => {
    const [size, setSize] = useState(0)
    const [listItems, setListItems] = useState([])

    const arrSizeUpdate = (e) => {
        setSize(e.target.value)
        let a = []
        for (let i = 0; i <= size; i++) {
            a.push(i)
        }
        setListItems(a)
        console.log(e.target.value)
        console.log(listItems)
    }

    const startSearch = (e) => {
        e.preventDefault()
    }




    return (
        <div>
            <h1>Search algorithms</h1>
            <form onSubmit={startSearch}>
                <label>Items: </label>
                <input min="0" max="1000" value={size} type="number" name='items' onChange={(e) => arrSizeUpdate(e)} />
                <button >Search</button>
            </form>
            <div>
                {size}
            </div>
            <div>
                {listItems.map(item =>
                    <div key={item}>{item}</div>
                )}
            </div>
            
            
        </div>
    )
}

export default Search