import React from 'react'
import "../scss/P5.scss"
const P5 = () => {
  return (
    <div className='signIn'>
        <h1>Sign in</h1>
        <div className='sign-inner'>
            <input type='button' value={"Sign in with Google"}/>
            <input type='email'/>
            <input type='password'/>
            <input type='checkbox'/> Remember me for 30 defineAsyncComponent
            <input type='submit' value={"Sign in"}/>
        </div>
    </div>
  )
}

export default P5