'use client'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../GlobalRedux/Features/cartSlice'

const Success = () => {
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(clearCart())
    },[])



  return (
    <div>Success Page
        <h1>Thank you for your order</h1>
        <p>Below are the links where you can download your purchased files</p>

    </div>
  )
}

export default Success