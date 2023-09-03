import { useState, useEffect } from 'react';
import './buttonSearch.scss'

interface Props {
    search: (value: string) => void;
}

const ButtonSearch = ({search} : Props) => {

    const [value, setValue] = useState("")

    return (
        <div className="container">
            <input className="" type="text" onChange={({target}) =>  setValue(target.value)} />
            <button onClick={() => search(value)}><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}

export default ButtonSearch;