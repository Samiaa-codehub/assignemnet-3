import Link from "next/link"

const Box=()=>{
    return(
        <footer className="bg-blue-300 text-pink-700 p-5 text-center mt-auto text-2xl  flex  justify-between">
            <h1 className="text-4xl font-extrabold">My Next.js Website </h1>
            <ul className="flex justify-between gap-5">
                <li className="text-2xl font-bold">
                    <Link href={"/"}>Facebook</Link>
                </li>
                <li className="text-2xl font-bold">
                    <Link href={"/"}>Linkedin</Link>
                </li>
                <li className="text-2xl font-bold">
                    <Link href={"./twitter"}>Twitter</Link>
                </li>
            </ul>

        </footer>
    )
}
export default Box