// https://www.youtube.com/watch?v=GNrdg3PzpJQ
// 01:30:23 ➝ Анимации. React transition group
import React, { useEffect, useState } from 'react';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import "./styles/App.css"
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
// import axios from 'axios';
import PostService from './API/PostService';
import Loader from './Components/UI/loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {
  const [posts, setPosts] = useState ([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError ] = useFetching(async() => {
      const posts = await PostService.getAll();
      setPosts(posts);
  })

  useEffect( () => {
    fetchPosts();
  }, [] )

  const createPost = (newPost) => {
    setPosts ([...posts, newPost]);
    setModal(false);
  }
  
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
        
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
          Створити публікацію
        </MyButton>
        
        <MyModal visible={modal} setVisible={setModal} >
            <PostForm create={createPost}/>
        </MyModal>
                
        <hr style={{margin: '15px 0'}}/>
        
        <PostFilter 
            filter={filter} 
            setFilter={setFilter}
        />
        {postError && 
            <h1>Виникла помилка: ${postError}</h1>}
        {isPostsLoading 
        ? <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список публікацій"}/>
        }
            
    </div>
  );
}

export default App;
