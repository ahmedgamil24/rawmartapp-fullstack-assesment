import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen '>
    <form className="fieldset bg-base-200 border-base-300 rounded-box max-w-md w-full border p-4">
  <fieldset  className="fieldset w-full">
    <label className="label">Email</label>
    <input type="email" className="input validator w-full" placeholder="Email" required />
    <p className="validator-hint hidden">Required</p>
  </fieldset>

  <label className="fieldset w-full">
    <span className="label">Password</span>
    <input type="password" className="input validator w-full" placeholder="Password" required />
    <span className="validator-hint hidden">Required</span>
  </label>

  <button className="btn btn-neutral mt-4" type="submit">Login</button>
  <button className="btn btn-ghost mt-1" type="reset">Reset</button>
</form>
</div>
  )
}

export default Login