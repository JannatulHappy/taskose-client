import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb'

const Login = () => {
   const [loading, setLoading] = useState(false)
   const { signIn } = useAuth();
   const navigate = useNavigate();
   const location = useLocation()
   const { register, handleSubmit } = useForm();
   const onSubmit = async (data) => {
      const { email, password } = data;
      setLoading(true)
      try {
         signIn(email, password)
         toast.success('Successfully Login');
         navigate(location?.state ? location?.state : '/')
         setLoading(false)
      } catch (error) {
         toast.error(error.message);
         setLoading(false)
         return;
      } finally {
         setLoading(false)
      }
   };
   return (
     <div className="flex items-center justify-center min-h-screen px-5 py-5 min-w-screen bg-base-100">
       <div
         className="w-full px-5 overflow-hidden text-gray-500 shadow-2xl lg:w-1/2 rounded-3xl shadow-blue-400/50 drop-shadow-2xl"
         style={{ maxWidth: "1000px" }}
       >
         <div className="flex items-center justify-center">
           {/* <div className="hidden w-1/2 px-10 py-10 text-white bg-indigo-500 md:block ">
                  <div className="flex flex-col justify-center items-center h-[60vh]">
                     <h1 className="text-4xl font-bold">Hello, Friend!</h1>
                     <p className="py-10 text-center w-80">
                        Enter your personal details and start journey with us
                     </p>
                     <Link to="/register">
                        <button className="text-lg capitalize btn">
                           Register
                        </button>
                     </Link>
                  </div>
               </div> */}
           <div className="w-full py-20 md:w-3/4 ">
             <div className="mb-6 text-center">
               <h1 className="text-3xl font-bold text-gray-900">LOGIN</h1>
               <p>Enter your information to login</p>
             </div>
             <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex -mx-3">
                 <div className="w-full px-3 mb-2">
                   <label htmlFor="" className="px-1 text-xs font-semibold">
                     {" "}
                     Email{" "}
                   </label>
                   <div className="flex">
                     <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                       <i className="text-lg text-gray-400 mdi mdi-email-outline"></i>
                     </div>
                     <input
                       type="email"
                       {...register("email")}
                       className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                       placeholder="Enter Email"
                       required
                     />
                   </div>
                 </div>
               </div>
               <div className="flex -mx-3">
                 <div className="w-full px-3 mb-2">
                   <label
                     htmlFor="password"
                     className="px-1 text-xs font-semibold"
                   >
                     {" "}
                     Password{" "}
                   </label>
                   <div className="flex">
                     <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                       <i className="text-lg text-gray-400 mdi mdi-lock-outline"></i>
                     </div>
                     <input
                       type="password"
                       {...register("password")}
                       id="password"
                       className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                       placeholder="************"
                       required
                     />
                   </div>
                 </div>
               </div>
               <div className="h-10">
                 <p></p>
               </div>
               <div className="flex -mx-3">
                 <div className="w-full px-3 mb-2">
                   <button
                     type="submit"
                     className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-[20px] px-3 py-3 font-semibold"
                   >
                     {loading ? (
                       <TbFidgetSpinner className="mx-auto animate-spin" />
                     ) : (
                       "LOGIN NOW"
                     )}
                   </button>
                 </div>
               </div>
             </form>
             <div>
               <div className="flex items-center mx-3">
                 <hr className="w-full border-black border-1" />
                 <p className="mx-5">OR</p>
                 <hr className="w-full border-black border-1" />
               </div>
               <SocialLogin></SocialLogin>
               <div className="flex justify-center mt-5 ">
                 <p>
                   Not have an account?{" "}
                   <Link
                     to="/register"
                     className="font-bold text-blue-400 border-b border-b-black"
                   >
                     Register
                   </Link>
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   );
};

export default Login;