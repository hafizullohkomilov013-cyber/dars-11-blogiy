import React from 'react'
import HeroImg from "../assets/img/HeroImg.png"
import Button from './BUtton';

function Hero() {
  return (
    <section className="py-20  bg-[#F7F1FD] md:py-32">
      <div className="container justify-between flex">
        <div className="">
          <h1 className="text-[36px] md:text-[60px] text-[#0F1729] font-bold leading-15 ">
            Create, Read, <br />
            <span className="bg-[linear-gradient(65deg,#4346EF,#8524E5)] bg-clip-text text-transparent">
              Inspire.
            </span>
          </h1>
          <p className="text-[#6B7280] text-[18px] md:text-[20px] w-full max-w-120 my-6 leading-7">
            Discover stories written by amazing people. Share your knowledge and
            inspire others with your unique perspective.
          </p>
          <div className="w-full flex flex-col sm:flex-row gap-4">
            <Button variant={"primary"}>
              Explore Posts <i className ="fa-solid fa-arrow-right"></i>
            </Button>
            <Button variant={"secendary"}>Get Started </Button>
          </div>
        </div>
        <div className='hidden lg:flex'>
          <img src={HeroImg} alt="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero
