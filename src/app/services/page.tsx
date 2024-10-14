import Box from "../components/footer/footer"
import Main from "../components/header/header"

const About=()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Main/>
            <section className="bg-yellow-400 m-20 p-20 flex justify-center items-center text-2xl">
                <div className="bg-gray-300 rounded-lg shadow-lg p-8 max-w-2xl text-center">
                    <h2 className="text-extrabold text-3xl text-pink-700">Welcome to the  services page</h2>
                    <p></p>
                </div>
            </section>
            <Box/>
        </div>
    )
}
export default About