import { useEffect, useState } from 'react'
import Entry from "./components/Entry"
import Header from "./components/Header.jsx"
import axios from 'axios'
import './App.css'

const BASE_URL = import.meta.env.VITE_STRAPI_URL || "https://besa-the-blog.onrender.com"

const getFullImageUrl = (imagePath) => {
  if (!imagePath) return "";
  const cleanBaseUrl = BASE_URL.endsWith("/") ? BASE_URL.slice(0, -1) : BASE_URL; // Remove trailing slash if it exists
  const cleanImagePath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath; // Remove leading slash if it exists
  return `${cleanBaseUrl}/${cleanImagePath}`;
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
    console.log(fullImageUrl)

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
      <Header />
      {entries}
    </>
  )
}

export default App
