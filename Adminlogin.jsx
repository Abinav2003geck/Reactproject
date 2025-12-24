import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


export const Adminlogin = () => {
     let ema=useRef()
     let pwd=useRef()
     let nav=useNavigate()
     
    function f1(e)
    {   e.preventDefault()
        if(ema.current.value===''||pwd.current.value===''){
            window.alert("it is mandatory")
        }
        else if(ema.current.value==='admin@gmail.com' && pwd.current.value==='admin123'){
            nav('/adminportal')
        
        }
        else{
            window.alert("invalid credentials")
        }
       
    }
    return (
        <div className='log'>
            <form className='ip'>
                <input type="text"  placeholder='enter email' ref={ema}/><br /><br />
                <input type="password" placeholder='enter pwd' ref={pwd} /><br /><br />
                <button onClick={f1} className='ulal'>login</button>
            </form>
        </div>
    )
}
