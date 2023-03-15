import React from 'react'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
  // console.log(props);
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
            <MyButton onClick={ () => props.remove(props.post)}>Видалити</MyButton>
          </div>
        </div>  
    </div>
  )
}

export default PostItem

       