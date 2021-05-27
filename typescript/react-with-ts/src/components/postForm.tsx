import React, { useState } from 'react'
import { StateInterface } from '../App'


interface IProps {
    posts: StateInterface['post'][]
    setPosts: React.Dispatch<React.SetStateAction<StateInterface["post"][]>>
}

const PostForm: React.FC<IProps> = ({ posts, setPosts }) => {

    const [input, setInput] = useState<StateInterface["inputs"]>({
        author: '',
        location: '',
        age: '',
        title: '',
        post: ''
    })

    const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {

        const newValue = e.target.value
        const helper = { ...input }
        const key = e.target.name as keyof typeof input
        helper[key] = newValue
        setInput(helper)
    }

    const makePost = (): StateInterface["post"] => {
        const post = {
            author: input.author,
            location: input.location,
            age: +input.age,
            title: input.title,
            post: input.post
        }
        return post
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = Object.values(input).every((element) => element.length > 0)
        if (isValid) {
            const post = makePost()
            const helper = [...posts]
            helper.push(post)
            setPosts(helper)
        }
    }

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <label htmlFor="author-input">Author: </label>
                <input name="author" onChange={(e) => inputChange(e)} type="text" value={input.author} id="author-input" />

                <label htmlFor="location-input">Location: </label>
                <input name="location" onChange={(e) => inputChange(e)} type="text" value={input.location} id="location-input" />

                <label htmlFor="age-input">Age: </label>
                <input name="age" onChange={(e) => inputChange(e)} type="number" value={input.age} id="age-input" />

                <label htmlFor="title-input">Title: </label>
                <input name="title" onChange={(e) => inputChange(e)} type="text" value={input.title} id="title-input" />

                <label htmlFor="post-textarea">Post: </label>
                <textarea name="post" id="post-textarea" value={input.post} onChange={(e) => inputChange(e)} cols={50} rows={5}></textarea>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default PostForm