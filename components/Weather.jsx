import Image from 'next/image'
import React from 'react'

const Weather = ({data}) => {

    return (
        <div>
            <div>
                <div>
                    <Image 
                    width='100'
                    height='100'
                    src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
                    alt='/'
                    />
                    <p>{data.weather[0].main}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather