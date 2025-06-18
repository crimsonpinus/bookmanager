import { NavLink } from "react-router";
function BasicMenu() {
    return (
        <nav id='navbar' className=" flex bg-blue-300">
            <div className="w-4/5 bg-gray-500" >

                <ul className="flex p-4 text-white font-bold">
                    <li className="pr-6 text-2xl">
                        <NavLink to='/book/'>도서관리 시스템</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default BasicMenu
