import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () =>{
    const dispatch= useDispatch();
const navigate= useNavigate();
        const user= useSelector(store=>store.user);
        const handleSignOut = () =>{
          signOut(auth)
          .then(() => {
}).catch((error) => {
  navigate("/error");
});
};

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
          const { uid,email,displayName, photoURL} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL:photoURL}));
          navigate("/browse");
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
        // unsubscribe when component unmounts
        return () => unsubscribe();
    },[]);

    return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
<img  className="w-44" src={LOGO} alt="logo here"/>
    
<div className="flex p-2 ">
        <img className="w-12 h-12" 
        alt="123" src="https://occ-0-4773-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201"/>
    <button  onClick={handleSignOut}  className="font-bold text-white"> (Sign out) </button>
    </div>
    </div>
    )}
    export default Header;