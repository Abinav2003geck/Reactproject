import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Books = () => {
    let[kitab,setKitab]=useState([])
    useEffect(()=>
    {
        let a= fetch('http://localhost:4000/books')
       let b= a.then((x)=>
        {
            return x.json()
        })
        b.then((y)=>
        {
            setKitab(y)
        })
    },[kitab]
    )
    console.log(kitab)
    //navigating to read book component
    let x=useLocation()
    let nav=useNavigate()
    let y=x.pathname.startsWith('/adminportal')
    function f1(id)
    {
        if(y)
        {
            nav(`/adminportal/readbook/${id}`)
        }
        else{
            nav(`/userportal/readbook/${id}`)
        }
    }
    
    return (
        <div >
            <h1>books</h1>
            <div className='books'>
            {kitab.map((ele)=>
            {
                return(
                <div className="z">
                    <h2>id:{ele.id}</h2>
                    <h2>Title:{ele.title}</h2>
                    
                    <img src={ele.thumbnailUrl} alt="" />
                    <button onClick={()=>
                        {
                            f1(ele.id)
                        }
                    } className='zbt'>Read book</button>
                </div>
    
                )
                    
            })}
            </div>
        </div>
    )
}

export default Books
 