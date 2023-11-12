import './Country.css'
export const Country = ({ oneCountry }: any) => {
    return (
        <>
            {oneCountry ?
                <>
                    <div className='info'>
                        <div>Country: {oneCountry[0].name}</div>
                        <div>Capital: {oneCountry[0].capital}</div>
                        <div>Region: {oneCountry[0].region}</div>
                        <div>Population: {oneCountry[0].population}</div>
                        <div>Area: {oneCountry[0].area}</div>
                        <div>Borders:</div>
                        {oneCountry[0].borders ? oneCountry[0].borders.map((item: any, index: any) => (<div key={index}> {item}</div>)) : <div>No border</div>}                        
                    </div>
                    <div className='flag'>
                        <div>Flag:</div>
                        <img src={oneCountry[0].flag}></img>
                    </div>
                </>
                : <div>Chouse Country</div>}
        </>
    )
}