import React, { useState } from 'react'
import { Adminlogin } from './Adminlogin'
import { Userlogin } from './Userlogin'
import './Loginpage.css'

export const Loginpage = ()=>{
let[t1,sett1]=useState(true)
function f1()
{
sett1(!t1)
}

    return (
        
        <div className='lo'>
            <center>
                <h1 className='header'> <nav className='nav'>{t1?"Welcome to Admin page":"Welcome to User page"}</nav> </h1>
            <button onClick={f1} className='bu'>{t1?"User Login":"Admin login"}</button><br /><br /><br />
            {t1?<Adminlogin></Adminlogin>:<Userlogin></Userlogin>}
            
            </center>
        </div>
        
    )
}
