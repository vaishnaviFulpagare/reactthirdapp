import React from 'react'
import { useNavigate } from 'react-router-dom'

 export const Home = () => {
  const navigate =useNavigate()
  return (
    <>
    <section className='container'>
    <h1 className='container'>Home-page </h1>
    <button type="button" class="btn btn-info" onClick={()=>navigate('order-summary')}>place order</button>
    </section>
    </>
  )
}
export default Home