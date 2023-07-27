import React from 'react'
import RegistroCensistaEmail from './RegistroCensistaEmail'
import RegistroCensistaPassword from './RegistroCensistaPassword'

const Login = () => {


  return (
    <main class="form-signin w-100 m-auto">
      <form>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <RegistroCensistaEmail></RegistroCensistaEmail>
        <RegistroCensistaPassword />
        <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
      </form>
    </main>
  )
}

export default Login