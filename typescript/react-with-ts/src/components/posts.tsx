import React from 'react'
import { StateInterface } from '../App'

interface IProps {
    posts: StateInterface['postsArray']
}

const Posts: React.FC<IProps> = ({ posts }) => {

    const renderList = (): JSX.Element[] => {

        return posts.map((post) => {
            return (
                <div className="individual-post">
                    <div className="post-heading">
                        <p>Author: {post.author}</p>
                        <p>Location: {post.location}</p>
                        <p>Age: {post.age}</p>
                    </div>
                    <div>
                        <p>Title: {post.title}</p>
                        <p>Post: {post.post}</p>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="posts-displayer">
            {renderList()}
        </div>
    )
}

export default Posts