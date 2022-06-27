import { useNavigate } from 'react-router-dom';

export default function UserFavorite() {
    const navigate = useNavigate()


    const EnterHandler = () => {
        navigate("/user")
    }

    return(
        //favorites from user with tailwind
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
                <h1 className="text-2xl text-gray-700 font-bold">Favorites</h1>
                
                <h1 className="text-2xl text-gray-700 font-bold">No hay favoritos</h1>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={EnterHandler}>
                    Go Back
                </button>
            </div>
        </div>
    );
}
