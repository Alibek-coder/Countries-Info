import { useEffect, useState } from "react"
import './Countries.css'
import { TCountry, TData } from "./Types";
import { Country } from "./Country";

export const Countries = () => {
    const [data, setData] = useState<TData[]>([]);
    const [country, setCountry] = useState<TCountry[]>()

    useEffect(() => {
        const createMessage = async () => {
            const response = await fetch('https://restcountries.com/v2/all?fields');
            const data = await response.json();
            console.log(data);
            setData(data)

        }
        createMessage().catch(e => console.error(e));
    }, []);

    const click = (name: any) => {
        if (name !== '') {
            for (let i = 0; i < data.length; i++) {
                if (data[i].name === name) {
                    const createMessage = async () => {
                        const response = await fetch(`https://restcountries.com/v2/name/${data[i].name}`);
                        const dataRes = await response.json();
                        setCountry(dataRes)
                    }
                    createMessage().catch(e => console.error(e));
                }
            }
        }
    }

    return (
        <>
            <div className="main">
                <div className="allCountry">
                    {data.map((item, index) => (<a key={index} onClick={() => click(item.name)}><div>{item.name} </div></a>))}
                </div>
                <div className="oneCountry">
                    <Country oneCountry={country} />
                </div>
            </div>
        </>
    )
}