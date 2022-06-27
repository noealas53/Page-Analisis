import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useUserContext } from '../../Contexts/Context';


const routes = {
    "admin": "/admin",
    "user": "/user"
}


export default function Login() {
    
    const contexts = useUserContext();
    const navigate = useNavigate(); 
    const { login, token } = useUserContext();
    const [error, setError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onChange = (e, save) => {
        save(e.target.value);
    }

    const onClickHandler = async (e) => {
        e.preventDefault();
        const logged = await login(username, password);

        setError(!logged);
        setUsername("");
        setPassword("");
    }

    useEffect(() => {
        if (contexts.user) {
            navigate(routes[contexts.user.role] ?? "/");
        }
    }, [contexts.user]);

return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-800">
    <div className="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
            <label className="font-light text-4xl mb-4">Lo<span className="font-bold">gin</span></label>
                    <form onSubmit={onClickHandler}>
                    {error && <p className="w-full rounded p-3 text-center text-gray-100 font-roboto bg-red-500 select-none">Error, intente ingresar nuevamente</p>}{/* Si ocurre un error */}

                    <input className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                        type='text'
                        value={username}
                        placeholder='e.g. username'
                        onChange={(e) => onChange(e, setUsername)}
                    />


                    <input className="w-full h-12 rounded-lg px-4 text-lg focus:ring-blue-600 mb-4"
                        type="password"
                        placeholder="e.g password"
                        onChange={(e) => onChange(e, setPassword)}
                        value={password}
                    />
                    <button className="mt-6 w-full transition rounded border border-blue-500 duration-300 ease-in-out text-xl text-extrabold uppercase bg-blue-500 hover:bg-blue-700 py-2 px-4 text-gray-100">Sign In </button>
                </form>
            

    </div>
    </div>
);
}