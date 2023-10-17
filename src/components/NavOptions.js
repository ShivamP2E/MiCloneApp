import React,{useState, useEffect} from 'react'
import NavCard from './NavCard' 
import { useLocation } from 'react-router-dom' 

import '../styles/NavOptions.css'



const NavOptions = ({miPhones, redmiPhones,tv,laptop, fitnessAndLifeStyle, home, audio, accessories}) => { 
    const location = useLocation();
    const [miPhoneToggle,setmiPhoneToggle]=useState(false);
    const [redmiPhonesToggle, setredmiPhonesToggle]=useState(false);
    const [tvToggle,settvToggle]=useState(false);
    const [ laptopToggle,setlaptopToggle]=useState(false);
    const [ fitnessAndLifeStyleToggle,setfitnessAndLifeStyleToggle]=useState(false);
    const [ homeToggle,sethomeToggle]=useState(false);
    const [ audioToggle,setaudioToggle]=useState(false);
    const [ accessoriesToggle,setaccessoriesToggle]=useState(false);
  
    
    useEffect(()=>{
        if(window.location.pathname ==="/miphones"){
            return setmiPhoneToggle(true)
        }
        else{
            setmiPhoneToggle(false)
        }
        if(window.location.pathname ==="/redmiphones"){
            return setredmiPhonesToggle(true)
        }else{
             setredmiPhonesToggle(false)
        }
        if(window.location.pathname ==="/tv"){
            return settvToggle(true)
        }else{
            settvToggle(false)
       }
        if(window.location.pathname ==="/laptop"){
            return setlaptopToggle(true)
        }else{
            setlaptopToggle(false)
       }
        if(window.location.pathname ==="/lifestyle"){
            return setfitnessAndLifeStyleToggle(true)
        }else{
            setfitnessAndLifeStyleToggle(false)
       }
        if(window.location.pathname ==="/home"){
            return sethomeToggle(true)
        }else{
            sethomeToggle(false)
       }
        if(window.location.pathname ==="/audio"){
            return setaudioToggle(true)
        }else{
            setaudioToggle(false)
       }
        if(window.location.pathname ==="/accessories"){
            return setaccessoriesToggle(true)
        }else{
            setaccessoriesToggle(false)
       }
    },[location.pathname])
    return (
    <div className='navOptions'>
        {miPhoneToggle ? miPhones.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {redmiPhonesToggle? redmiPhones.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {tvToggle? tv.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {laptopToggle? laptop.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {fitnessAndLifeStyleToggle? fitnessAndLifeStyle.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {homeToggle? home.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {audioToggle? audio.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
        {accessoriesToggle? accessories.map((item)=>(
        <NavCard name={item.name} price={item.price} image={item.image} key={item.image}/>
        )) : null}
    </div>
  )
}

export default NavOptions;