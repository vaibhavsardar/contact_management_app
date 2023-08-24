import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { BiSolidContact,BiLineChart } from "react-icons/bi"
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2  ">
            <div className="flex  flex-col h-screen p-3 bg-slate-100  shadow w-60">
                <div className="space-y-3">
                    <div className=" ">
                        <h2 className="text-xl font-semibold ">Dashboard</h2>
                    </div>
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/contacts"
                                    className=" items-center space-x-3  text-lg  flex border-2 border-slate-300 p-2 rounded-md "
                                >
                                    <BiSolidContact/>
                                    <span>Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/chart"
                                    className="items-center space-x-3  text-lg  flex border-2 border-slate-300  p-2 rounded-md">
                                    <BiLineChart />
                                    <span>Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}