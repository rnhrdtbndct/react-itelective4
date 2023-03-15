import './App.css';
import Post from './components/Post';
import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json()
      }).then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <div>
      <div>
        {posts.map(post => (
          <Post key={post.id} post={post.title} body={post.body}/>
        ))
        }
      </div>
    </div>
  );
}

export default App;