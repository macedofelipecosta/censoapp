import React from 'react'
import LoginEmail from './LoginEmail'
import LoginPassword from './LoginPassword'

const Login = () => {

    
  return (
    <main class="form-signin w-100 m-auto">
        <form>
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          <LoginEmail></LoginEmail>
          <LoginPassword></LoginPassword>
          <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
        </form>
      </main>
  )
}

export default Login