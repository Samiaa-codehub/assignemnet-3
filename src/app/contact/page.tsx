import Box from "../components/footer/footer"
import Main from "../components/header/header"

const Contact=()=>{
    return(
        <div className="flex flex-col min-h-screen">
            <Main/>
            <section className="bg-yellow-400 m-20 p-20  items-center ">               
                      <h1 className="text-6xl font-extrabold text-center">Contact Details</h1>
                      <br></br>
                <form className="bg-green-200 p-5 m-5">
                    <label className="text-2xl mt-5 p-2 mb-5 m-2">Your Name:</label>
                    <br>
                    </br>
                    <input
                    className="mt-2 p-2 border-2 border-gray-500 rounded-lg mb-5 m-2"
                    placeholder="Enter your name"></input>
                    <br>
                    </br>
                    <label  className="text-2xl mt-2 p-2 mb-5 m-2">
                        Phone Number:
                    </label>
                    <br>
                    </br>
                    <input
                    className="mt-2 p-2 m-5 border-2  border-gray-500 rounded-lg "
                    placeholder="Enter your number"></input>
                    <br></br>
                    <label className="text-2xl m-5 p-5 ">Message:</label>
                    <br></br>
                    <textarea
                    className=" p-2  m-2  mt-2  ml-5 border-2  border-gray-500 rounded-lg"
                    rows={4}
                    placeholder="enter your message"></textarea>
                    <br>
                    </br>
                    <button className="bg-yellow-300 border-2 border-gray-500 rounded-lg mt-2 py-2 px-8 p-5 m-8 text-normal hover:bg-green-400">Send message</button>
                </form>
                
            </section>
            <Box/>
        </div>
    )
} 
export default Contact