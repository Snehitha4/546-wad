import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form";
function Register() {
  let {register,handleSubmit,formState:{errors}} =useForm()
  function handleFormSubmit(userobj){
    console.log(userobj)
  }
  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form  className="register-form m-auto w-25"onSubmit={handleSubmit(handleFormSubmit)}>
        <input type="text" name="firstname" placeholder="First Name" {...register("firstname",{required:true})} />
        {errors.firstname?.type==='required' && <p className='text-danger '>Firstname is required</p>}
        <input type="text" placeholder="Last Name"/>
        <input type="email" placeholder="Email" {...register("email",{required:true})}/>
        {errors.email?.type==='required' && <p className='text-danger '>Email is required</p>}
        <input type="password" placeholder="Password" {...register("password",{required:true})} />
        {errors.password?.type==='required' && <p className='text-danger '>Password is required</p>}
        <input type="password" placeholder="Confirm Password"  {...register("confirmpassword",{required:true})} />
        {errors.confirmpassword?.type==='required' && <p className='text-danger '>Confirm-Password is required</p>}
        <input type="text" placeholder="Address"  {...register("address",{required:true})} />
        {errors.address?.type==='required' && <p className='text-danger '>Address is required</p>}
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State"  />
        
        <input type="text" placeholder="Pin Code"  />
        <input type="text" placeholder="Phone Number"  {...register("phone",{required:true})} />
        {errors.phone?.type==='required' && <p className='text-danger '>Phone number is required</p>}
        <input type="date" placeholder="Date of Birth" />
       
        <button type="submit" className='reg-button'>Register</button>
        <p>Already registered?</p>
        <Link to="/login" className='loginlink'>Login</Link>
      </form>
    </div>
  );
}

export default Register;
