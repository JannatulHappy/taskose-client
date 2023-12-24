import { Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
const Banner = () => {
	const { scrollYProgress } = useScroll();
	return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <div className="relative flex items-center bg-blue-400 bg-center bg-cover h-[83vh]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto text-center text-white">
          <h1 className="pt-10 mb-4 text-4xl font-bold lg:text-6xl">
            Effortless Task Management
          </h1>
          <p className="mb-12 text-lg mt-9 lg:text-xl">
            Streamline your workflow and boost productivity with our intuitive
            task management platform. Stay organized, collaborate seamlessly,
            and accomplish more with ease.
          </p>
          <Link
            to="/dashboard"
            className="px-8 py-3 text-lg font-bold text-black bg-white rounded-lg hover:py-5 hover:bg-black hover:text-white"
          >
           Let's Explore
          </Link>
        </div>
      </div>
    </>
  );
};

export default Banner;
