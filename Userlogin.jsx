import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'


export const Userlogin = () => {
     let email=useRef()
     let psd=useRef()
     let nav=useNavigate()
         
        function f1(e)
        {   e.preventDefault()
            if(email.current.value===''||psd.current.value===''){
                window.alert("it is mandatory")
            }
            else if(email.current.value==='user@gmail.com' && psd.current.value==='user123'){
                nav('/userportal')
         
            }
            else{
                window.alert("invalid credentials")
            }
           
        }
    return (
        <div>
             <form className='ip'>
                <input type="text"  placeholder='enter email' ref={email}/><br /><br />
                <input type="password" placeholder='enter pwd' ref={psd} /><br /><br />
                <button onClick={f1} className='ulal'>login</button>
            </form>
        </div>
    )
}
