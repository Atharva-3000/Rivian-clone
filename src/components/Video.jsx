import "./video.css";
const Video = () => {
  return (
    <div className="containerVideo relative">
    <div className="flex justify-around absolute w-full top-0">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
    <h3 className="absolute top-24  uppercase text-white" style={{left:'20%'}}>Our Contribution To <br />the Planet</h3>
    <h1 className="text-white absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 font-extrabold text-8xl">Forever .</h1>
    <div
        style={{ width: "907px", height: "510px" }}
        className="bg-gray-200 z-10 text-center"
    >
        <iframe
            width="907"
            height="510"
            src="https://www.youtube.com/embed/NmnImLJWioE?autoplay=1"
            title="Forever | Rivian"
            allow=" clipboard-write; encrypted-media; web-share"
            allowfullscreen
        ></iframe>
    </div>
</div>

  );
};

export default Video;
