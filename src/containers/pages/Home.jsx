function Home(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen relative">
            <div className="absolute inset-0">
            <div className="bg-red-700" style={{height: '49%'}}></div>
            <div className=" bg-black" style={{height:'1%'}}></div>
            <div className="bg-white" style={{height:'49%'}}></div>
            </div>

            <div className="relative z-10 text-center">
                    <h1 className="text-7xl text-white">PocketApi</h1>
                    <p className="text-gray-900 text-2xl mb-9 ">Bienvenido a PocketApi</p>
                <button className="rounded-full h-12 w-28 bg-gray-400 hover:bg-red-800 text-black mb-20 border-2 border-black ">
                   <a href="Menu">comenzar</a>
                </button>
            </div>
        </div>
    );
}
export default Home;