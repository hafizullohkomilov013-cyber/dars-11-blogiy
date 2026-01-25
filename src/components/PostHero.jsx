import React from 'react'

function PostHero({setInputValue}) {
  return (
    <section className="mt-16 py-24 bg-[#F7F1FD]">
      <div className="container flex flex-col justify-center items-center text-center">
        <h1 className="text-[60px] text-[#0F1729] font-bold">
          Explore Our Posts
        </h1>
        <p className="text-[20px] text-[#6B7280] mb-8">
          Discover amazing content from talented writers across various topics
        </p>
        <div className="flex items-center text-[#6B7280] gap-3 py-[15.5px] px-3.5 rounded-2xl bg-white w-full max-w-xl">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input onInput={(e) => setInputValue(e.target.value)} className='outline-none text-5' type="text" placeholder="Search posts ... " />
        </div>
      </div>
    </section>
  );
}

export default PostHero
