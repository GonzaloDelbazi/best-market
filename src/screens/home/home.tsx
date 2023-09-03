import { useState } from 'react';
import Card from '../../components/card/card'

export const Home = () => {

    const [items, setItems] = useState([]);



    return (
        <>
            <h1>Welcome to I'Market</h1>
            <Card></Card>


            {
                items.map(() => {
                    return (
                        <>
                        </>
                    )
                })
            }
        </>

        )
}