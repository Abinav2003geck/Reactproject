import React, { useEffect, useState } from 'react'
import "./Cart.css"

const Cart = () => {
    
    let[book,setBook]=useState([]);
    useEffect(()=>
    {
        let api=fetch(`http://localhost:4000/cart`)
         let x=api.then((first)=>
            {
                return first.json()
            })
            x.then((second)=>{
                setBook(second)
            })
    },[book])
    function removeofrowCart(id,name)
    {
        let y=window.confirm(`do you want to delete ${name}`)
        if(y)
        {
            fetch(`http://localhost:4000/cart/${id}`,{method:"DELETE"})
            alert("book got deleted")
        }
    }
    return (
        <div class="div1">
            <br /><br /><br /><br />
        
                <table rules='all' className='t1'>
        <tr>
            <td>id</td>
            <td>cartid</td>
            <td>carttitle</td>
            <td>cartImage</td>
            <td>remove</td>
        </tr>
        {book.map((ele)=>{
            return(
                <tr>
                    <td>{ele.id}</td>
                    <td>{ele.cart}</td>
                    <td className='titletab'>{ele.carttitle}</td>
                    <td><img src={ele.cartimage} className='cartimg'></img></td>
                    <td><button onClick={()=>{removeofrowCart(ele.id)}} className='tb'>REMOVE</button></td>
                </tr>
            )
        })}
      </table>
        </div>
    )
}

export default Cart
