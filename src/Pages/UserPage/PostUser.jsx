import React, { useState} from "react";
import Modal from "../AdminPage/Modal";

const Swal = require("sweetalert2");


export default function PostUser({props, enterLike}) {
    
    const {_id, title, description, image, __v } = props;
    const {username} = props.user;   

    const [like, setLike] = useState(0);

    const registerLike = () => {
        if(like === 0)
        {
          enterLike(_id);
          setLike(like + 1);                   
        }
        else{
          
            Swal.fire({
                title: "Ya le has dado like",
                text: "Like dado",
                icon: "info"
            });        
        }            
    }    

    return(
      
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">         
            <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" className="block h-auto w-full" src={image}/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#">
                            {title}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        {description}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <ul class="list-none w-full flex text-center" role="navigation">
                          <li class="inline-block w-1/3">
                            <button class="block w-full p-2 hover:bg-blue-200 text-blue-700 hover:text-pink-600 focus:outline-none focus:bg-pink-100 focus:text-pink-600">
                              <span class="lni-heart"></span>
                              <span class="hidden md:inline" onClick={() => {registerLike()}}> {__v} Likes</span>
                            </button>
                          </li>                     
                          
                        </ul>

                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="block rounded-full" src="https://images.vexels.com/media/users/3/223162/isolated/lists/5e80533c664d40856e255cc8d5c7e00e-diseno-de-icono-de-personas-planas.png" width="32"/>
                        <p className="ml-2 text-sm">
                            {username}
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>                      
                </footer>
            </article>
        </div>      
    )
}
