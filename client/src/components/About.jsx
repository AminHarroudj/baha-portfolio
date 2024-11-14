import bahaImg from "../assets/baha.png";

function About() {
  return (
    <>
      <div className="flex items-center justify-around py-10 md:py-28 px-2 max-md:flex-col max-md:justify-center max-md:text-center max-md:gap-10">
        <div className="flex justify-center items-center">
          <img src={bahaImg} alt="" className="w-96" />
        </div>
        <div className="md:w-3/5 flex flex-col gap-4 md:gap-6">
          <h1 className="text-4xl md:text-5xl font-medium text-black">
            <span className="text-[#006d77]">I&apos;am</span> Elelmi Baha Eddine Abdelqudus
          </h1>
          <h2 className="text-3xl text-[#006d77]">Presentation Specialist</h2>
          <p>
            This portfolio showcases my expertise in Presentation. It highlights
            my skills, knowledge, and practical experience in All of Kinds of
            Presentaions
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
