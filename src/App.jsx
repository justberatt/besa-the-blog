import { useEffect, useState } from 'react'
import Entry from "./components/Entry"
import Header from "./components/Header.jsx"
import axios from 'axios'

const getFullImageUrl = (imagePath) => {
  if (!imagePath) return '';
  return imagePath.startsWith('http') 
    ? imagePath 
    : `http://localhost:1337${imagePath}`;
};


const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:1337/api/blog-posts?populate=*')
      .then(res => setPosts(res.data.data))
      .catch(error => console.error(error))
  }, [])
  
  const entries = posts.map(post => {
    const imagePath = post.coverImage.url; // Adjust this based on actual API response
    console.log("Path: ", imagePath)
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
