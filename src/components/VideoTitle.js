const VideoTitle = ({ title, overview }) =>{
    return( 
        <div className=" w-screen aspect-video pt-[17%] px-24 absolute text-white">
            <h1 className=" text-4xl font-bold text-yellow-600">{title}</h1>
            <p className="py-6 text-2xl w-1/4 ">{overview}</p>
            <div className="">
                <button className="p-4 bg-white text-xl  text-black px-10 rounded-lg hover:bg-opacity-80 ">  ▶ Play </button>
                <button className=" mx-2 p-4 bg-gray-500 text-xl bg-opacity-50 text-white px-10 rounded-lg ">  More Info</button>
            </div>
        </div>
    )
};
export default VideoTitle;