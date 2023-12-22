import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";


const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <body className="md:bg-gray-100 min-h-screen">
                <div className="min-h-full">
                    <div className="bg-blue-300 flex justify-between">
                        <div className=" max-w-7xl px-4 py-6 bg-blue-300 sm:px-6 lg:px-8 hidden lg:block md:block">

                            <img className=" flex-1 w-48 h-48 rounded-full shadow-lg" src="https://static.independent.co.uk/2023/09/14/15/WOLFPACK_Gallery_Kristin_10232022_FO_0064_aprRT.jpg?width=1200&height=1200&fit=crop" alt="" />
                        </div>
                        <div className="bg-blue-300 hidden md:block max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                            <h1 className=" text-3xl font-sans tracking-tight text-gray-900">
                                Charlot Daniel Abbot
                            </h1>
                        </div>

                        <div className="bg-blue-300 mx-auto max-w-7xl px-4 hidden md:block py-6 sm:px-6 lg:px-8">

                            <div className="flex justify-between">

                                <div className="flex-1">
                                </div>

                                <div className="flex space-x-4 hidden lg:block md:block">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md">Request a Change</button>
                                    <button className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded-md">Settings</button>
                                </div>

                            </div>

                        </div>

                    </div>
                    <main className="min-h-96">
                        <div className="md:flex no-wrap md:-mx-2 w-full  ">

                            <div className=" hidden md:block w-full md:w-[20%] min-h-96 bg-white">

                                <div className=" p-3 ">

                                    <ul className="-mt-3 text-sm font-semibold text-gray-500 hover:text-gray-700 py-2 px-3 mt-3 divide-y rounded bg-white ">
                                        <li className="items-center py-3">
                                            <span>801-724-6600 Ext.1272</span><br />
                                            <span className="ml-auto">415-555-8965</span>

                                        </li>
                                        <li className="items-center py-3">
                                            <h1>Hire date</h1>
                                            <span>Jan 19 2017</span><br />
                                            <span className="ml-auto">10m - 15d</span>
                                        </li>

                                        <li className=" items-center py-3">
                                            <span>Full-time</span><br />
                                            <span className="ml-auto">Human Resources</span>
                                            <span className="ml-auto">North America</span>
                                            <span className="ml-auto">Lindon , Utah</span>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className=" min-h-96 md:block lg:block ml-2">
                                <ul className="flex  ">
                                    <li className="mr-1 flex md:hidden">
                                        <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Add </a>
                                    </li>
                                    <li className="mr-1 hidden md:flex">
                                        <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Add Todo</a>
                                    </li>
                                    <li className="mr-1">
                                        <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Todo</a>
                                    </li>
                                    <li className="mr-1">
                                        <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Ongoing</a>
                                    </li>

                                    <li className="mr-1">
                                        <a className="bg-white inline-block py-2 px-4 border-l border-t border-r rounded-t text-blue-500 hover:text-blue-800 font-semibold" href="#">Completed</a>
                                    </li>

                                </ul>
                                <div className="mt-5 ml-5">
                                    <p className="text-3xl">vvvvvvv</p>
                                    <p className="text-3xl">vvvvvvv</p>
                                    <p className="text-3xl">vvvvvvv</p>
                                    <p className="text-3xl">vvvvvvv</p>
                                    <p className="text-3xl">vvvvvvv</p>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </body>
            <Footer />
        </div>
    );
};

export default Dashboard;