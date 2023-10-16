import React from 'react'
import data from '../data/data.json'
import Offer from "./Offer.js"
import "../styles/Offers.css"


const Offers = ({offer}) => {
    return (
        <div className="offersSection"> 
        {data.offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    )
}

export default Offers