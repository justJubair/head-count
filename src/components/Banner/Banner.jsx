// import banner video
import bannerVideo from "../../assets/videos/banner.mp4";
import CustomButton from "../../utils/Button/CustomButton";
const Banner = () => {
  return (
    <div className="relative">
      <video
        className="w-full object-cover h-screen"
        src={bannerVideo}
        muted
        loop
        autoPlay
      ></video>
      {/* overlay */}
      <div className="absolute w-full h-screen top-0 left-0 bg-black/80"></div>

      {/* banner text */}
      <div className="absolute top-1/2 text-center left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-10/12 lg:w-1/2 px-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold md:leading-normal  lg:leading-snug bg-gradient-to-r from-amber-200 to-lime-500 text-transparent bg-clip-text mb-6">
          Empowering Connections, Simplifying Control.
        </h1>
        <CustomButton ButtonText="Explore" />
      </div>
    </div>
  );
};
export default Banner;
