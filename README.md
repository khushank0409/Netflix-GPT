# Netflix project
- Create React App
- Configure TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account
- Implement Sign IN user Api
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: If the user is not logged in Redirect/browse to Login Page and vice-versa 
- unsubscribe to the onAuthStateChanged callback
- Add hardcoded values to the Constants file.
- Register TMDB API & Create an app & get access token
- Get data from TMDB  now playing movie list API
- Custom Hook for Now Playing Movie
- Create movieSlice
- Update Store with movie Data
- Planning for Main Container & Secondary Container
- Fetch Data for Trailer Video
- update Store with Trailer Video Data
- Embedded the Youtube Video and make it autoplay and mute // for autoplay & mute = "?&autoplay=1&mute=1"
- Tailwind Classes to make Main Conatiner look awesome  
- 



# Redux toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store                    // appStore khud se litha dont told to write by akshay  // copy from swiggy
- Connect our store to app            // provider use in app.js  // copy from swiggy
- Slice (cardSlice)                   // cartSlice.js check      // copy from swiggy
- dispatch(action)                    // itemList.js check       // copy from swiggy
- reducer function                    // cartSlice.js check      // copy from swiggy
- Selector                            // in header.js     selector is a hook useselector hook    // copy from swiggy

# Features
- Login/Sign Up
        - Sign In/Sign Up Form
        - Redirect to Browse Page
- Browse (after authenction)
        - Header
        - Main Movie
            - Trailor in Background
            - Title & Description
            - MovieSuggestion
               - MovieList * N
- Netflix GPT
       - Search Bar
       - Movie Suggestion