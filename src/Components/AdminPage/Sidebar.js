import { useState } from "react";
import { NavLink } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import Icon from "../../../node_modules/@material-tailwind/react/Icon";
import H6 from "@material-tailwind/react/Heading6";
import { MdAccountCircle, MdDescription, MdArticle } from "react-icons/md";

export default function Sidebar() {
	const [showSidebar, setShowSidebar] = useState("-left-64");
	return (
		<>
			<div
				className={`mt-16  h-screen bg-gray-200 fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300 z-1`}
			>
				<div className="flex-col  items-stretch min-h-full flex-nowrap px-0 relative">
					<a href="/admin" target="_blank" rel="noreferrer" className="mt-2 text-center w-full inline-block">
						<H6 color="gray">Page Admin</H6>
					</a>
					<div className="flex flex-col">
						<hr className="my-4 min-w-full" />

						<ul className="flex-col min-w-full flex list-none">
							<li className="rounded-lg mb-4 hover:bg-blue-300">
								<NavLink
									to="/add-admin"
									exact
									className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg font-black"
									activeClassName="bg-gradient-to-tr bg-green-500 from-light-blue-500 to-light-blue-700 text-white shadow-md bg-blue-300"
								>
									{/* <Icon name="dashboard" size="2xl" /> */}
									<MdAccountCircle />
									Ajouter un Admin
								</NavLink>
							</li>
							<li className="rounded-lg mb-2 hover:bg-blue-300">
								<NavLink
									to="/add-adrticle"
									className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg font-black"
									activeClassName="bg-gradient-to-tr bg-green-500 from-light-blue-500 to-light-blue-700 text-white shadow-md bg-blue-300"
								>
									{/* <Icon name="settings" size="2xl" /> */}
									<MdDescription />
									Ajouter article
								</NavLink>
							</li>
							<li className="rounded-lg mb-2 hover:bg-blue-300">
								<NavLink
									to="/add-subarticle"
									className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg font-black"
									activeClassName="bg-gradient-to-tr bg-green-500 from-light-blue-500 to-light-blue-700 text-white shadow-md bg-blue-300"
								>
									{/* <Icon name="toc" size="2xl" /> */}
									<MdArticle />
									Ajouter un sous article
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
