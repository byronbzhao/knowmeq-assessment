import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='absolute top-[50%] left-[50%] tranform translate-x-[-50%] translate-y-[-50%]'>
        <Link to="/quiz" className=' border bg-lime-600 rounded-md text-white p-[20px]'>Examination One</Link>
    </div>
  )
}

export default Home