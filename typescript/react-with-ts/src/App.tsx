import React from 'react';
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
  },
  inputs: {
    author: string,
    location: string,
    age: string,
    title: string,
    post: string
  }
}

function App() {
  return (
    <>
      <div className="posts-page">
        <Posts />
        <PostForm />
      </div>
    </>
  );
}

export default App;
