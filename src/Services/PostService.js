
const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1"

const Services = {};

const Swal = require("sweetalert2");

const message = (title, text, icon) => {
    Swal.fire({
        title: title,
        text: text,
        icon: icon
    });
}

Services.showAllPost  =  async ( token ) => {

    const response = await fetch(`${BASE_URL}/post/all?limit=10&page=0`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    if (response.ok) {
        const data = await response.json();
        return data;
    }
    return {};
}

Services.createPost = async (Token, role, Title, Description, Imagen, username) => {
    try {                                                                  
        if (role === "admin") {
            const Response = await fetch(`${BASE_URL}/post/create`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${Token}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title: `${Title}`,
                    description: `${Description}`,
                    image: `${Imagen}`,
                    username: `${username}`,
                })
            })
            const data = await Response.json()
            console.log(data)

            if(Response.ok)
                message("Post Creado", "Post creado", "success");
            else
                message("Error", "Error al crear post", "error");

            return data;
        }
    } catch (error) {
        console.log(error)
    }
}

Services.Like = async (Token, id) => {
    try {
        const Response = await fetch(`${BASE_URL}/post/like/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${Token}`,
            }
        })
        const data = await Response.json()
        
        if(Response.ok)
            message("Like dado", "", "info");
       

        return data
    } catch (error) {
        console.log(error)
    }
}

Services.Toggle = async (Token, role, id) => {
    try {
        if (role === "admin") {
            const Response = await fetch(`${BASE_URL}/post/toggle/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            
            const data = await Response.json()
            console.log(data);

            if(Response.ok)
                message("Post Deshabilitado", "Post eliminado", "warning");
            else
                message("Error", "No se logro deshabilitar el Post", "error");
            
        }
    } catch (error) {
        console.log(error);
    }
}
export default Services;