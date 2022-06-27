import { Link } from 'react-router-dom';

export default function Error() {

    return(
        <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
            <div className="lg:gap-4 lg:flex">
                <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                    <h1 className="font-bold text-blue-600 text-9xl">404</h1>
                        <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                            <span className="text-red-500">Oops!</span> Page not found
                        </p>
                        <p className="mb-8 text-center text-gray-500 md:text-lg">
                            The page you’re looking for doesn’t exist.
                        </p>
                            <Link to="/" className="border border-gray-500 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                                Back to Home
                            </Link>
                </div>
                    <div className="mt-4">
                        <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/12/40/abort-146096_960_720.png"
                        alt="img"
                        className="object-cover w-full h-full"
                        />
                    </div>
            </div>
        </div>
    </div>
    )
}
    
