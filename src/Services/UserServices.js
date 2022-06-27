const BASE_URL = "https://posts-pw2021.herokuapp.com/api/v1"

const Services = {};



Services.loginAdmin = async (User, Pass) => {

    const Response = await fetch(`${BASE_URL}/auth/signin`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            username: `${User}`,
            password: `${Pass}`
        })
    })
    if (Response.ok) {
        const Token = await Response.json()
        return Token
    }
    return {};
}


Services.createPost = async (Token, role, Title, Description, Imagen) => {
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
                })
            })
            const data = await Response.json()
            console.log(data)
            return data
        }
    } catch (error) {/* Si nos da error */
        console.log(error)
    }
}


Services.verifyToken = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/whoami`, {
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

Services.Owned = async (Token, role, limit, page) => {
    try {
        if (role === "admin") {
            const Response = await fetch(`${BASE_URL}/post/owned?limit=${limit}&page=${page}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${Token}`,
                }
            })
            const data = await Response.json()
            console.log(data)
            return data
        }
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
            return data
        }
    } catch (error) {
        console.log()
    }
}

Services.Update = async (Token, role, id, Title = "", Description = "", Imagen = "") => {
    try {                       
        if (role === "admin") {
            const Response = await fetch(`${BASE_URL}/post/update/${id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${Token}`,
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    title: `${Title}`,
                    description: `${Description}`,
                    image: `${Imagen}`,
                })
            })
            const data = await Response.json()
            console.log(data)
            return data

        }
    } catch (error) {
        console.log(error)
    }
}



Services.Commet = async (Token, id, text) => {
    try {
        if (text = "") {
            return {} 
        }else{
        const Response = await fetch(`${BASE_URL}/post/comment/${id}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${Token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                description: `${text}`,
            })
        })
        const data = await Response.json()
        console.log(data)
        return data
    }
    } catch (error) {
        console.log()
    }
}

Services.GetAll = async (token, limit, page) => {
    try {
        const Response = await fetch(`${BASE_URL}/post/all?limit=${limit}&page=${page}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        const data = await Response.json()
        console.log(data)
        return data
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
        return data
    } catch (error) {
        console.log()
    }
}


export default Services;