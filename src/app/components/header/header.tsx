import Link from "next/link"



const  Main=()=>{
    return(
                <header className="flex  justify-between  bg-yellow-200 text-gray-700 h-20">
                    <h1 className="text-4xl ml-5 items-center mt-3 font-bold py-2 px-8">Clothes Home</h1>
                    <ul className="text-2xl mr-5  flex gap-6 mt-2">
                        <li className=" hover:bg-gray-300 border-3 py-2 px-8 mb-2 rounded-lg dark:text-blue-500 mt-2  font-bold">
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li className=" hover:bg-gray-300 border-3 py-2 px-8 mb-2 rounded-lg mt-2  font-bold">
                        <Link href={"/about"}>About</Link>
                        </li>
                        <li className="hover:bg-gray-300 border-3 py-2 px-8 rounded-lg dark:text-blue-500 mt-2 font-bold mb-2">
                            <Link href={"/services"}>Services</Link>
                        </li>
                        <li className=" hover:bg-gray-300 border-3 py-2 px-8  mb-2 rounded-lg  mt-2 font-bold ">
                        <Link href={"/contact"}>Contact</Link>
                        </li>
                        <li className="mt-2 font-bold hover:bg-gray-300 border-3 rounded-lg py-2 px-8 mb-2">
                            <Link href={"/sign"}>sign in</Link>
                        </li>
                    </ul>
                </header>
                
    )
}
export default Main