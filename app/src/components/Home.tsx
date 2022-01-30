import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Home: FunctionComponent = () => {
  return (
    <>
      <p className="text-xl font-bold">Home</p>
      <Link to="/profile">Check my profil</Link>
    </>
  )
}
export default Home
