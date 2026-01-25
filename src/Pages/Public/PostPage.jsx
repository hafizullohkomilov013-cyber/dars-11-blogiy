import React from 'react'
import PostHero from '../../components/PostHero'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import PostCard from '../../components/PostCard';

let Base = import.meta.env.VITE_BASE_URL;

function PostPage() {
  let [inputValue, setInputValue] = useState('')
  let [post, setPost] = useState([])

  useEffect(() => {
    async function getPost() {
      try {
        let res = await fetch(`${Base}api/v1/articles/`);
        if(!res.ok){
          throw new Error("Xatolik !")
        }
        let data = await res.json()
        setPost(data)
      } catch (error) {
        toast(error.message)
      }
    }
    getPost()
  },[])

  let filtr = post.filter((item) => {
    return item.content.toLowerCase().includes(inputValue.trim().toLowerCase());
  })

  return (
    <>
    <PostHero inputValue={inputValue} setInputValue={setInputValue} />
    <div className='container'>
      <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtr.map((post) => {
          return(<PostCard key={post.id} post={post}/>)
        })}
      </div>
    </div>
    </>
  );
}

export default PostPage
