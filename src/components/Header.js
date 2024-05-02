import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () =>{
const Navigate= useNavigate();
const user= useSelector(store=>store.user);
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            Navigate("/");
          }).catch((error) => {
            Navigate("/error");
        });
    }
    return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
<img  className="w-44" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo here"/>
    
<div className="flex p-2 ">
        <img className="w-12 h-12" 
        alt="123" src="https://occ-0-4773-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201"/>
    <button  onClick={handleSignOut}  className="font-bold text-white"> (Sign out) </button>
    </div>
    </div>
    )}
    export default Header;