
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const Readbook = () => {
    let para=useParams()
    console.log(para.id)
    let[book,setBook]=useState({})
        useEffect(()=>
        {
            let a= fetch(`http://localhost:4000/books/${para.id}`)
           let b= a.then((x)=>
            {
                return x.json()
            })
            b.then((y)=>
            {
                setBook(y)
            })
        },[book]
        )
        console.log(book)
        let loc=useLocation()
        let currentpath=loc.pathname.startsWith('adminportal')
        let move=useNavigate()
        //going back
        function f1()
        {
            if(currentpath){
                 move('/adminportal/books')
             }
             else{
                 move('/userportal/books')
             }
         }
         function addtocart(id,title,image)
         {
           let booktocart={
            cartid:id,
            cartimage:image,
            carttitle:title
           }
           fetch('http://localhost:4000/cart',{method:"post",body:JSON.stringify(booktocart)})
           alert("book added to cart")
           move('/userportal/cart')
         }
         
    return (
        <div>
            <h1>hello</h1>
            <h3>id:{book.id}</h3>
            <h3>title:{book.title}</h3>
            <img src={book.thumbnailUrl} alt="" />
            <h2>Desc:</h2>
            <p>{book.longDescription}</p>
            <button onClick={f1}>go back</button>
            <button onClick={()=>
                {
                    addtocart(book.id,book.title,book.thumbnailUrl)
                }
            } >add to cart</button>
        </div>
    )
}

export default Readbook
