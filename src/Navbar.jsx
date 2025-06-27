export default function Navbar() {
    return (
        <nav className="bg-white/85 shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-3 py-2 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Adhan</h1>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#home" className="text-red-600 hover:underline">Home</a></li>
                    <li><a href="#aboutme" className="">About Me</a></li>
                </ul>
            </div>
        </nav>
    ); 
}