import React from 'react'
import MyButton from './UI/button/MyButton'
import {useNavigate} from 'react-router-dom'

const PostItem = (props) => {
  // console.log(props);
  const navigate = useNavigate();
  // console.log(router);
  return (
    <div>
        <div className="post">
          <div className="post__content">
            <strong> {props.post.id}. {props.post.title}</strong>
            {/* {console.log(props.post)}; */}
            <div>
              {props.post.body}
            </div>
          </div>
          <div className="post__btns">
            <MyButton onClick={ () => navigate(`/posts/${props.post.id}`)}>Відкрити</MyButton>
            <MyButton onClick={ () => props.remove(props.post)}>Видалити</MyButton>
          </div>
        </div>  
    </div>
  )
}

export default PostItem

       