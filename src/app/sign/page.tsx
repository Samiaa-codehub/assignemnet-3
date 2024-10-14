
import Box from "../components/footer/footer"
import Main from "../components/header/header"

const Sign=()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Main/>
            <section className="bg-yellow-300  m-10 p-10">
                <h1 className="text-center font-exrabold text-6xl mb-5 ">Sign in Form </h1>
                <form className=" font-bold p-10 m-10 bg-green-100 ml-20 mr-20 mt-5 items-center">
                    <label className="mb-5 mr-5 mt-10 p-2 text-2xl">User Name:</label>
                    <br></br>
                    <input
                    className="mt-2 border-2 border-gray-500 rounded-lg text-2xl p-2"
                    placeholder="Enter your name"></input>
                    <br>
                    </br>
                    <label className="mt-10 p-2  text-2xl ">
                        Email:
                    </label>
                    <br></br>
                    <input
                    className="mt-2 border-2  border-gray-500 rounded-lg text-2xl p-2"
                    placeholder="Enter your email"></input>
                    <br></br>
                    <button className="mt-10 rounded-lg bg-yellow-200  py-2 px-8 hover:bg-gray-300 text-3xl  border-2 border-gray-500">sign in</button>
                </form>
            </section>
            <Box/>
        </div>
    )
}
export default Sign