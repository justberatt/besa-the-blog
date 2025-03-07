import { useEffect, useState } from 'react'
import Entry from "./components/Entry"
import axios from 'axios'
import './App.css'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('https://besa-the-blog.onrender.com/api/blog-posts?populate=*')
      .then(res => setPosts(res.data.data))
      .catch(error => console.error(error))
  }, [])
  
  const entries = posts.map(post => {
    return (
      <div key={post.id}>
        <Entry 
          title={post.title}
          author={post.author}
          excerpt={post.excerpt}
          coverImage={post.coverImage?.url}   
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
