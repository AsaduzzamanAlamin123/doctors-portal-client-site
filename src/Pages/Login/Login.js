import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Log in!</h2>
    <form action="">
    <input type="email" name='email' placeholder="Type here" class="input input-bordered input-error w-full max-w-xs mb-5" />
    <input type="password" name='password' placeholder="Type here" class="input input-bordered input-error w-full max-w-xs mb-5" />
    <button class="btn btn-md w-full">Log in</button>
    </form>

    <div class="divider">OR</div>

    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue With Google</button>
    
  </div>
</div>
        </div>
    );
};

export default Login;