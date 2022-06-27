import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const EnterHandler = () => {
        navigate("/Login");
    }

    return(
        <div className ="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-red-100">
            <h1 className="uppercase text-gray-800 font-monserrat font-black text-4xl mb-4 text-center">Welcome to the Homepage</h1>
            
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " onClick={EnterHandler}>
                Iniciar Sesion
            </button>
        </div>
    )
}
        