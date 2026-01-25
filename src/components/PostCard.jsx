import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

let Base = import.meta.env.VITE_BASE_URL;

function PostCard() {
  let [post, setPost] = useState([]);

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
  console.log(post);
  return (
    <>
      {post.map((item, index) => (
        <div className="border-2 group border-gray-200  duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl" key={index}>
          <div className="relative rounded-t-2xl overflow-hidden">
            <h2 className="bg-[#4346EF] z-2 py-0.5 px-2.5 rounded-2xl text-white absolute top-5 left-4">{item.category?.name}</h2>
             <img className="rounded-t-2xl z-1 w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110 " src={item.image} alt="catagory-img" />
          </div>
          <div className="p-6 ">
            <div className="text-[#6B7280] mb-3 flex gap-2 items-center">
              <i className="text-[19px] fa-regular fa-calendar"></i>
              <span>{item.created_at.slice(0, 10)}</span>
            </div>
            <h2 className="group-hover:text-[#4346EF] transition text-[20px] font-semibold mb-2">{item.title}</h2>
            <p className="text-[14px] text-[#6B7280] mb-4">{item.content}</p>
            <Link className="text-[#4346EF] gap-2 group-hover:gap-4">
              Read more <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default PostCard;
