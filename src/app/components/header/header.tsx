import Link from "next/link"


const  Main=()=>{
    return(
                <header className="flex  justify-between  bg-blue-300 text-pink-700 h-20">
                    <h1 className="text-4xl ml-5 items-center mt-3 font-bold">Samia Ali </h1>
                    <ul className="text-2xl mr-5  flex gap-6 mt-2">
                        <li className="hover:text-blue-800 dark:text-blue-500 mt-2  font-bold">
                        <Link href={"./about"}>About</Link>
                        </li>
                        <li className="hover:text-blue-800 mt-2 font-bold ">
                        <Link href={"./contact"}>Contact</Link>
                        </li>
                        <li className="hover:text-blue-800 mt-2 font-bold"> <Link href={"./services"}>Services</Link>
                        </li>
                        <div>
                            <button className="text-2xl  mt-2 hover:text-blue-800 font-bold">sign in</button>
                        </div>
                    </ul>
                </header>
                
    )
}
export default Main