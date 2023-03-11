import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
      
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault();
       const newPost = {
         ...post, id: Date.now()
       }   
        // setPosts([...posts, {...post, id: Date.now()}] )
        create(newPost)
        setPost({title: '', body: ''})
    }

    // const addNewPost = (e) => {
    //     e.preventDefault();
       
    //     const newPost = {
    //         ...post, id: Date.now()
    //     }   
    //     // setPosts([...posts, {...post, id: Date.now()}] )
    //     // console.log(props);
    //     setPosts([...posts, newPost])

    //     setPost({title: '', body: ''})
    // }

    return (
        <form>
            
            {/* Керований компонент */}
            <MyInput 
                value = {post.title}
                onChange = {e => setPost({...post, title: e.target.value })}
                type="text" 
                placeholder='Назва публікації'
            />
            <MyInput 
                value = {post.body}
                onChange = {e => setPost({...post, body: e.target.value})}
                type="text" 
                placeholder='Назва публікації'
            />
            {/* Некерований компонент */}
            {/* <MyInput 
                ref = {bodyInputRef}
                type="text" 
                placeholder='Опис публікації'
            /> */}
            
            <MyButton onClick={addNewPost}>Створити публікацію</MyButton>
        </form>
  )
}

export default PostForm
