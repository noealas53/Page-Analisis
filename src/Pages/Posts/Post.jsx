import React, { useState } from "react";
import Modal from "../AdminPage/Modal";

const Swal = require("sweetalert2");


export default function Post({props, deleteData, enterLike}) {
    
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
                    <img alt="Placeholder" className="block h-auto w-full" src={"https://w7.pngwing.com/pngs/957/974/png-transparent-hospital-logo-clinic-health-care-physician-business.png"}/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <ul class="list-none w-full flex text-center" role="navigation">
                         
                          <li class="inline-block w-1/3">
                            <button class="block w-full p-2 hover:bg-yellow-200 text-yellow-700 hover:text-yellow-600 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600">
                              <span class="lni-comment-reply"></span>
                              <span class="hidden md:inline">Modficar</span>
                            </button>
                          </li>

                          <li class="inline-block w-1/3">
                            <button class="block w-full p-2 hover:bg-red-200 text-red-700 hover:text-red-600 focus:outline-none focus:bg-indigo-100 focus:text-indigo-600">
                              <span class="lni-comment-reply"></span>
                              <span class="hidden md:inline" onClick={()=> deleteData(_id)}>Deshabilitar</span>
                            </button>
                          </li>
                          
                        </ul>

                    
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>                      
                </footer>
            </article>
        </div>      
    )
}
