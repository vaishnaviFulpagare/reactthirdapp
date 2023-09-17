import React from 'react'
import { useNavigate } from 'react-router-dom'

 export const OrderSummary = () => {
  const navigate = useNavigate()
  return (
    <>
      <h3 className='container'>OrderSummary</h3>
      <button type="button" class="btn btn-info" onClick={()=>navigate(-1)}>Black</button>
    </>
  )
}

export default OrderSummary
