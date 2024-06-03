import Header from "./header";

export default function Hero() {
  return (
    <section className="relative h-96 flex flex-col items-center justify-center text-center text-white ">
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="trailer.mp4" 
          autoPlay
          muted
          loop 
        ></video >
      </div>
      <div className="video-content space-y-2 z-10">
        <h1 className=" text-6xl font-bold">Welcome To</h1>
        <div className="flex justify-center bg-clip-content">
          <img
            src="/logo2.png"
            height="auto"
            width="300"
            className="bg-clip-content"
          />
        </div>
        {/* <h3 className="font-light text-3xl">Thilohub</h3> */}
      </div>
    </section>
  );
}
