import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Contexts/Context';
import PostService  from '../../Services/PostService';
import Post from '../Posts/Post';
import Navbar from './Navbar';


export default function Admin() {
    const navigate = useNavigate();
    const { Exit } = useUserContext();
    const {token, user} = useUserContext();
    const [posts , setPosts] =  useState([]);//posts
    

    useEffect( () => {
        
        PostService.showAllPost(token).then((datos) => {        
        setPosts(datos.data)            
        }).catch( (err) => {
             console.log(err);
        })

    } , [posts]);

    const createPost = (data) => {
        PostService.createPost(token, "admin", data.title, data.description, data.image, data.username);
    }

    const deleteData = (id) => {
        PostService.Toggle(token, "admin", id);    
    }

    const like = (id) => {
        PostService.Like(token, id);
    }

    const EnterHandler = () => {        
        Exit()
        navigate("/Login")
    }

    return(

        <>
            
            <Navbar createPost={createPost} Exit={EnterHandler}> </Navbar>
             
            <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    {posts.map((post , index) => (  <Post   props={post}  deleteData={deleteData}  enterLike={like}/>  ))}
                </div>
            </div>
        </>           
    )
}
