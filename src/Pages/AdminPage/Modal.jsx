import React, {useState, useEffect} from "react";


const initialForm = {
    id: null,
    username: "gp39_admin",
    title: "",
    description: "",
    image: ""
}


export default function Modal({setShowModal, createPost}) {

    const [form, setForm] = useState(initialForm);

    const handelChange = (e) => {
        setForm({
            ...form, [e.target.name]: e.target.value
        }   
        );
    }

    const handelSubmit = (e) => {

        e.preventDefault();

        if(!form.title || !form.image || !form.description)
        {
            alert("datos incompletos");
            return;
        } else {
            createPost(form);
            handelReset();    
        }    

    }

    const handelReset = (e) => {
        setForm(initialForm);    
    }

    
  
  return (
    <>    
        
      {setShowModal ? (
        
          
        <div class="flex justify-center h-screen items-center bg-gray-200 antialiased">
            <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
                    <div
                    class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
                    >
                        <p class="font-semibold text-gray-800">Agregar Post</p>
                        
                            
                        </div>
                        <div class="flex flex-col px-6 py-5 bg-gray-50">     
                            <form onSubmit={handelSubmit} className="flex flex-col px-6 py-5 bg-gray-50">
                                <p class="mb-2 font-semibold text-gray-700">Escirbir mensaje</p>
                                    <textarea
                                        type="text"
                                        name="description"
                                        placeholder="Escribir mensaje..."
                                        class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
                                        id="description" onChange={handelChange}
                                    ></textarea>
                                    <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
                                        <div class="w-full sm:w-1/2">
                                        <p class="mb-2 font-semibold text-gray-700">Titulo</p>
                                        <input type="text" name="title" id="title" placeholder="Titulo" class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-12 w-56"
                                        onChange={handelChange}/>
                                        </div>
                                        <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                                        <p class="mb-2 font-semibold text-gray-700">Link de la Imagen</p>
                                        <input type="text" name="image" id="image" placeholder="Link de la imagen" class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-12 w-80" onChange={handelChange}/>
                                        </div>
                                    </div>     
                                    <button class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
                                    Save
                                    </button>  

                            </form>
                                
                        </div>
                                   
                              
                          
                        <hr />          
                        
                        <div
                        class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
                        >
                        <button class="font-semibold text-gray-600" onClick={ () => setShowModal(false)}>Cancelar</button>
                    
                        </div>
                    </div>
                </div>      
        
       
      ) : null}
    </>
  );
}