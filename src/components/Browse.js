import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Browse = () => {
    useNowPlayingMovies();

return ( <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
       
        {/*
        Main Container
        - VideoBackground
        - VideoTitle
        Secondary Container
        - MovieList * N
         - cards * n
        */}

        </div>
) };
export default Browse;
