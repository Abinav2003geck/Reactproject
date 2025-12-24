import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
    let[cart,setCart]=useState([])
    useEffect(()=>{
        let a=fetch("http://localhost:4000/cart")

      let b= a.then((x)=>
                    {
                        return x.json()
                    })
                    b.then((y)=>
                    {
                        setCart(y)
                    })
                },[cart]
                )
    



    let path=useLocation()
    console.log(path)
   let x= path.pathname.startsWith("/adminportal")
   console.log(x)
    return (
        <div>
            {x?(<div className="a">
            
           <NavLink to='/adminportal/' className='li'>HOME</NavLink>
            <NavLink to='/adminportal/about' className='li'>ABOUT</NavLink>
            <NavLink to='/adminportal/books' className='li'>BOOKS</NavLink>
            <NavLink to='/adminportal/adduser' className='li'>ADD USERS</NavLink>
            <NavLink to='/adminportal/addbooks' className='li'>ADD BOOKS</NavLink>
             <NavLink to='/adminportal/users' className='li'> USERS</NavLink>
            <NavLink to='/' className='li'>LOG OUT</NavLink></div>):(<div className='a'> <NavLink to='/userportal/'>HOME</NavLink>
            <NavLink to='/userportal/about' className='li'>ABOUT</NavLink>
            <NavLink to='/userportal/books' className='li'>BOOKS</NavLink>
            <NavLink to='/userportal/cart' className='li'>cart <sup>{cart.length}</sup></NavLink>
           
            <NavLink to='/'>LOG OUT</NavLink></div>)}
        </div>
        
    )
}

export default Navbar
