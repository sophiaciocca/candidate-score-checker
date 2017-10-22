import React from 'react'
import LookupForm from './LookupForm.jsx'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
const Main = props => {
  const { children, handleClick } = props

  return (
    <div>
      <h1>Candidate Code Checker</h1>
      <div>
        <LookupForm />
      </div>

      <hr />
      {children}
    </div>
  )
}

export default Main;
