import Header from "./Header";
import { useState } from "react";
const Login = () => {

  const [isSignInForm, setIsSignInForm]= useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };

return  (
<div>
    <Header/>
<div className="absolute">
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_small.jpg"/>
</div>

<form className=" w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

    <h1 className="font-bold text-2xl">{isSignInForm ? "Sign IN" :"Sign Up"}</h1>

    {!isSignInForm && ( <input type= "text" placeholder="Full Name" className="p-4 my-4 w-full bg-transparent bg-gray-700"/> )} 


    <input type= "text" placeholder="Email Address" className="p-4 my-4 w-full bg-transparent bg-gray-700"/>


    <input type= "Pass" placeholder="Password" className="p-4 my-4 w-full bg-transparent bg-gray-700"/>

<button className="p-4 my-6 cursor-pointer w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign IN" :"Sign Up"}</button>

<p className= "py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up now." :"Already Registered? Sign In now."}</p>
</form>
</div>
)
};
export default Login;