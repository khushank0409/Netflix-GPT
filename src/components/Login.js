import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInForm]= useState(true);
    
    const toggleSigninForm = () =>{
setIsSignInForm(!isSignInForm);
    };

return  (
<div>
    <Header/>
<div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"
    alt="logo" />
</div>

<form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80">
    <h1 className="font bold text-3xl py-4">{isSignInForm ?  "Sign In" : "Sign Up"} </h1>
   { !isSignInForm && (
    <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700"/> )}
    <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700"/>
    <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700"/>
    <button className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer">{isSignInForm ?  "Sign In" : "Sign Up"}</button>
    <p className="py-4 cursor-pointer" onClick={toggleSigninForm}> {isSignInForm ? "New to Netflix? Sign Up Now." : "Already Registered? Sign In Now."}</p>
</form>

</div>
);
};
export default Login;