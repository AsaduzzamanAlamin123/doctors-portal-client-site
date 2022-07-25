import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle,  } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      
      let signinError;

      const [userInfo , setUserInfo] = useState({
          email:'',
          password:'',
          general:'',
      })
      const [errors , setErrors] = useState({
          emailError:'',
          passwordError:'',
          generalError:''
      });
      if(error || gError){
          signinError = <p className='text-red-900'>{gError?.message || error?.message}</p>
      }
  
      const handleEmailChange = event =>{
          const emailRegex =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;
          const validEmail = emailRegex.test(event.target.value);
          if(validEmail){
              setUserInfo({...userInfo  , email:event.target.value})
              setErrors({...errors , emailError:''})
  
          }
          else{
              setErrors({...errors , emailError:'Please Enter Valid Email'})
              setUserInfo({...userInfo , email:''});
          }
      }
      if(loading || gLoading){
          return <Loading></Loading>
        }
  
  
      const handlePasswordChange = event =>{
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
          const validPassword = passwordRegex.test(event.target.value);
          if(validPassword){
              setUserInfo({...userInfo , password:event.target.value});
              setErrors({...errors , passwordError:''});
          }
          else{
              setErrors({...errors , passwordError:'enter valid and strong pasword'});
              setUserInfo({...userInfo , password:''});
  
          }
      }
      const submitForm =(event)=>{
        event.preventDefault();
        navigate('/appoinment') 
      }
      if(user || gUser){
          console.log(user);
          console.log(gUser);
      }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">SignUp!</h2>
    <form className='' onSubmit={submitForm}>
    <input  type="text" name='name' placeholder="Enter Your Name" class="input input-bordered input-success w-full max-w-xs mb-5"required />
    <input onChange={handleEmailChange} type="email" name='email' placeholder="Enter Your Email" class="input input-bordered input-success w-full max-w-xs mb-5"required />
    {errors?.emailError && <p className='text-red-700 font-bold font-mono'>{errors.emailError}</p>}
    <input onChange={handlePasswordChange} type="password" placeholder="Enter Your Password" class="input input-bordered input-success w-full max-w-xs mb-5" required/>
    {errors?.passwordError && <p className='text-red-700 font-bold font-mono'>{errors.passwordError}</p>}
    {signinError}
    <input onClick={() => createUserWithEmailAndPassword(userInfo.email, userInfo.password)} className='btn btn-primary w-full btn-md font-bold font-mono text-gray-500' type="button" value="SignUp" />
    <p>Already Have An Account <Link to='/login' className='text-primary font-bold font-mono'>please log in</Link></p>

    </form>

    <div class="divider">OR</div>
    <button onClick={() => signInWithGoogle()} class="btn btn-outline font-bold">Continue with Google</button>
   
  </div>
</div>
        </div>
    );
};

export default SignUp;