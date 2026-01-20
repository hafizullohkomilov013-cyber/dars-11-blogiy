import React from 'react'
import HeroImg from "../assets/img/HeroImg.png"

function Hero() {
  return (
    <section className="flex bg-[#F7F1FD] py-32">
      <div className="container">
        <h1 className="text-[60px] text-[#0F1729] font-bold leading-15 ">
          Create, Read, <br />
          <span className="bg-[linear-gradient(65deg,#4346EF,#8524E5)] bg-clip-text text-transparent">
            Inspire.
          </span>
        </h1>
        <p className="text-[#6B7280] text-[20px] w-full max-w-120 my-6 leading-7">
          Discover stories written by amazing people. Share your knowledge and
          inspire others with your unique perspective.
        </p>
      </div>
      <div>
        <img src={HeroImg} alt="hero-img" />
      </div>
    </section>
  );
}

export default Hero
