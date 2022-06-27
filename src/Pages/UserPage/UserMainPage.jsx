import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../Contexts/Context';
import { useState, useEffect } from 'react';
import PostService from '../../Services/PostService';
import PostUser from './PostUser';

export default function User() {
    const navigate = useNavigate()
    const { Exit } = useUserContext()
    const {token} = useUserContext();
    const [post, setPost] = useState([]);

    useEffect( () => {
        PostService.showAllPost(token).then( (datos) => {
            setPost(datos.data);
        }).catch( (error) => {
            console.log(error);
        });
    }, [post]);


    const EnterHandler = () => {
        Exit()
        navigate("/Login")
    }

    const EnterFavorite = () => {
        navigate("/userfavorite")
    }

    const like = (id) => {
        PostService.Like(token, id);
    }
    

    return(
        //user and user favorites with tailwind

        <>
            <div className="flex justify-center items-center min-h-screen flex-col bg-gradient-to-r from-gray-300 to-red-200">
                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mb-4" onClick={EnterFavorite}>
                    Favorites
                </button>
                <button className="bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full mb-4" onClick={EnterHandler}>
                    Exit
                </button>
            </div>

            <div class="container my-12 mx-auto px-4 md:px-12">
                <div class="flex flex-wrap -mx-1 lg:-mx-4">
                    {post.map((post , index) => (  <PostUser   props={post}  enterLike={like}/>  ))}
                </div>
            </div>
        </>

    )
}
    