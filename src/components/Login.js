import React from 'react';
import './Login.css';
import {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
function Login() {
  let {register,handleSubmit,formState:{errors}} =useForm()
  function handleFormSubmit(userobj){
    console.log(userobj)
  }
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form " onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="email" name="email" className="mt-2" placeholder='Email'{...register("email",{required:true})} />
        {errors.email?.type==='required' && <p className='text-danger'>Email is required</p>}
        <input type="password" placeholder="Password" className="mt-2" {...register("password",{required:true})} />
        {errors.password?.type==='required' && <p className='text-danger'>Password is required</p>}
        <button className="login-btn" type="submit">Login</button>
        <p className=' loginp mt-3'>New to the website?</p>
         <Link to="/register" className='registerlink'>Register</Link>
      </form>
    </div>
  );
}

export default Login;
