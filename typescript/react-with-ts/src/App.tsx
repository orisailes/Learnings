import React, { useState } from 'react';
import './app.css'
import PostForm from './components/postForm';
import Posts from './components/posts';


export interface StateInterface {
  post: {
    author: string,
    location: string,
    age: number,
    title: string,
    post: string
  }
  postsArray:{
    author: string,
    location: string,
    age: number,
    title: string,
    post: string
  }[]
  inputs: {
    author: string,
    location: string,
    age: string,
    title: string,
    post: string
  }
}

function App() {

  const [posts, setPosts] = useState<StateInterface["postsArray"]>([])

  return (
    <>
      <div className="posts-page">
        <Posts posts={posts} />
        <PostForm posts={posts} setPosts={setPosts} />
      </div>
    </>
  );
}

export default App;
