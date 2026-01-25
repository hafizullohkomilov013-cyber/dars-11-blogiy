import React from 'react'
import Button from './BUtton';
import { Link } from 'react-router-dom';
import PostCard from './PostCard';

function LatestPosts() {
  return (
    <section className="container py-32">
      <div className='flex justify-between items-center'>
        <div>
          <h2 className="text-[36px] text-[#0F1729] font-bold">Latest Posts</h2>
          <p className='text-[18px] text-[#6B7280] '>Check out our most recent articles</p>
        </div>
        <Button variant={"secendary"}>
            <Link to={"/PostPage"} className='flex items-center gap-3'>Wiew All <i className ="fa-solid fa-arrow-right"></i></Link>
        </Button>
      </div>
      <div className="mt-12  grid  grid-cols-[repeat(auto-fit,minmax(293px,1fr))]  gap-8">
        <PostCard/>
      </div>
    </section>
  );
}

export default LatestPosts
