import React, { useState, useEffect } from 'react';
import Modal from './Modal';


export default function Navbar ({createPost, Exit}) {    

    const [showModal, setShowModal] = useState(false);  
    
    return(

        <>
            <nav
                class="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
                <div class="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
                    <div class="flex items-center flex-shrink-0 text-gray-800 mr-16">
                        <span class="font-semibold text-xl tracking-tight">Admin Page</span>
                    </div>
                    <div class="block lg:hidden ">
                        <button
                            id="nav"
                            class="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="text-md font-bold text-blue-700 lg:flex-grow">
                        <button href="#responsive-header"
                        class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2" onClick={()=>setShowModal(true)}>
                            Agregar Post
                        </button> 
                       
                        <a href="#responsive-header"
                        class=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                            Buscar
                        </a>           
                </div>
                    
            
                <div class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
                    
                
                    <div class="relative mx-auto text-gray-600 lg:block hidden">
                        <input
                            class="border-2 border-gray-300 bg-white h-10 pl-32 pr-32 rounded-lg text-sm focus:outline-none"
                            type="search" name="search" placeholder="Search" autoComplete="off"/>
                        <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                            
                        </button>
                    </div>
                    <div class="flex ">
                        <button href="#"
                        class="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0" onClick={ () => Exit()}>Cerrar Sesión
                        </button>             
                    </div>
                </div>    
            </nav>

            {showModal ? <Modal setShowModal={setShowModal} createPost={createPost}> </Modal> : null}         
           
        </>
        
        
        
    );
}