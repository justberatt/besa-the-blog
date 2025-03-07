import { useEffect, useState } from 'react'
import Entry from "./components/Entry"
import axios from 'axios'
import './App.css'

const BASE_URL = import.meta.env.VITE_STRAPI_URL || "https://besa-the-blog.onrender.com"

const getFullImageUrl = (imagePath) => {
  if (!imagePath) return "";
  const cleanImagePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${BASE_URL}${cleanImagePath}`;
};


const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://besa-the-blog.onrender.com/api/blog-posts?populate=*')
      .then(res => setPosts(res.data.data))
      .catch(error => console.error(error))
  }, [])
  
  const entries = posts.map(post => {

    const imagePath = post.coverImage.url; // Adjust this based on actual API response
    const fullImageUrl = getFullImageUrl(imagePath);

    return (
      <div key={post.id}>
        <Entry 
          title={post.title}
          author={post.author}
          excerpt={post.excerpt}
          coverImage={fullImageUrl}   
          createdAt={post.createdAt}
          readingTime={post.readingTime}
          />

      </div>
    )
  })

  return (
    <>
      <h1>Besa Blog</h1>
      {entries}
    </>
  )
}

export default App
