import React from 'react'
import { whyChooseData } from '../data/WhyChooseCard';
import WhyChooseCard from './WhyChooseCard';

function WhyChoose() {
  return (
    <section  className='container py-20 md:py-32'>
      <div className='mb-16 text-center flex flex-col justify-center items-center'>
        <h2 className="text-[30px] md:text-[36px] mb-4 text-[#0F1729] font-bold ">Why Choose Blogify?</h2>
        <p className='text-[18px] text-[#6B7280] w-full max-w-2xl'>
          Built with modern technologies and best practices to provide the best
          blogging experience.
        </p>
      </div>
      <div className=' grid  grid-cols-[repeat(auto-fit,minmax(293px,1fr))]  gap-8'>
        {whyChooseData.map((item) => {
            return<WhyChooseCard key={item.id} item={item} className="bg-amber-300"/>
        })}
      </div>
    </section>
  );
}

export default WhyChoose
