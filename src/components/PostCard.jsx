import React from "react";
import { Link } from "react-router-dom";

function PostCard({post}) {
  return (
    <div
      className="border-2 group cursor-pointer rounded-2xl border-gray-200  duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
      key={post.id}
    >
      <div className="relative rounded-t-2xl overflow-hidden">
        <h2 className="bg-[#4346EF] z-2 py-0.5 px-2.5 rounded-2xl text-white absolute top-5 left-4">
          {post.category?.name}
        </h2>
        <img
          className="rounded-t-2xl z-1 w-full h-full object-cover  transition-transform duration-500 group-hover:scale-110 "
          src={post.image}
          alt="catagory-img"
        />
      </div>
      <div className="p-6 ">
        <div className="text-[#6B7280] mb-3 flex gap-2 items-center">
          <i className="text-[19px] fa-regular fa-calendar"></i>
          <span>{post.created_at.slice(0, 10)}</span>
        </div>
        <h2 className="group-hover:text-[#4346EF] transition text-[20px] font-semibold mb-2">
          {post.title}
        </h2>
        <p className="text-[14px] text-[#6B7280] mb-4">{post.content}</p>
        <Link
          className="flex justify-start items-center gap-1 group-hover:gap-2.5 text-blue-700"
          to={`/PostDetailsPages/${post.id}`}
        >
          Read more
          <i className="group-hover:mr-10px fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;
