import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

const Home: FunctionComponent = () => {
  return (
    <>
      <div className="flex items-end mb-24">
        <img
          className="h-24"
          src="https://uploads-ssl.webflow.com/5fbc0d068c247eca8397bc5c/5fca95db787b885c5acf722f_comet-logo-light.svg"
          alt="comet"
        />
        <p className="text-4xl font-bold text-center">Home</p>
      </div>
      <div className="text-center text-lg">
        <Link
          className=" border border-neutral-600 rounded-xl shadow-lg px-5 py-2 hover:bg-neutral-600 hover:text-neutral-100"
          to="/profile"
        >
          Check my profil
        </Link>
      </div>
    </>
  )
}
export default Home
