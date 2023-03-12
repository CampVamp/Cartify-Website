import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center w-full h-1/2 gap-10 bg-neutral-100 py-10">
      <div className="basis-1/2 flex flex-col justify-center gap-4">
        <div className=" text-6xl font-semibold text-blue-800 font-mono">
          Providing Services <br /> at your Doorstep
        </div>
        <div className=" w-3/5 text-xl">
          MACC Essentials has an important role in making supplies and services
          available to customers and their patients during this critical time.
          This includes services from various domains. Our aim is to aid you. As
          much we can.
        </div>
        <div className=" bg-orange-600 w-fit px-6 py-2 font-medium text-white z-10 drop-shadow-md">
          LEARN MORE
        </div>
      </div>
      <div>
        <img src="/assets/cover_img.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
