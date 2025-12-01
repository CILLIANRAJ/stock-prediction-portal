import React from 'react'
import Button from './Button'

const Main = () => {
  return (
    <>
      <div className="container">
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction Portal</h1>
          <p className='text-light lead'>Our Stock Prediction Portal helps users make smarter investment decisions with data-driven insights. The platform analyzes market trends, historical data, and performance indicators to generate reliable stock predictions. With an intuitive dashboard and real-time updates, users can easily track stocks, compare patterns, and plan their next move with confidence.</p>
          <Button text="Login" class="btn-outline-info"/>
        </div>
      </div>
    </>
  )
}

export default Main