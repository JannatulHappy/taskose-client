import { FaLaptopCode } from "react-icons/fa";
import { RiBankCardFill } from "react-icons/ri";
import { GrUserManager } from "react-icons/gr";
import Testimonial from "../components/Testimonial";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            {/* banner */}
           <Banner></Banner>
            <div className="my-20">
                <h1 className="text-2xl md:text-3xl uppercase text-center font-bold">What type of people are <br /> using Task<span className="text-red-600">Forge</span> ?</h1>
                <div className="mt-10">
                    <div className="max-w-6xl mx-auto font-[sans-serif] text-[#333]">
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                            <div className="p-4 text-center">
                                <FaLaptopCode className="inline-block w-10 h-10" />

                                <h3 className="text-xl font-semibold mb-2">Developers</h3>
                                <p className="text-gray-500 text-sm">TaskForge help developers organize their projects by breaking them down into manageable tasks. This ensures that each aspect of a project is clearly defined and progress can be tracked effectively.</p>
                            </div>
                            <div className="p-4 text-center">
                                <RiBankCardFill className="inline-block w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Bankers</h3>
                                <p className="text-gray-500 text-sm">Bankers often have multiple responsibilities and tasks to juggle, from client meetings to financial analysis. TaskForge help them prioritize tasks, set deadlines, and allocate time effectively.</p>
                            </div>
                            <div className="p-4 text-center">
                                <GrUserManager className="inline-block w-10 h-10" />
                                <h3 className="text-xl font-semibold mb-2">Corporate Professionals</h3>
                                <p className="text-gray-500 text-sm">Many corporate roles involve project-based work. TaskForge provide features for project planning, task assignment, progress tracking, and collaboration, facilitating effective project management.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
         <Testimonial/>
            </div>
        </div>
    );
};

export default Home;