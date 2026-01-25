
import PostCard from './PostCard';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Button from './BUtton';

let Base = import.meta.env.VITE_BASE_URL;

function LatestPosts() {

let [posts, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch(`${Base}api/v1/articles/`);
        console.log(res);

        if (!res.ok) {
          throw new Error("Xatolik");
        }
        let data = await res.json();
        setPost(data);
      } catch (error) {
        toast(error.message);
      }
    }
    getPost();
  }, []);


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
        {posts.slice(0, 3).map((post) => {
            return <PostCard key={post.id} post={post} />
        })}
      </div>
    </section>
  );
}

export default LatestPosts
