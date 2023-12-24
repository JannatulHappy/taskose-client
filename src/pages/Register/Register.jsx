import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import SocialLogin from '../Login/SocialLogin';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import { imageUpload } from '../../api/utilities';
import { saveUser } from '../../api/auth';

const Register = () => {
	const [loading, setLoading] = useState(false);
	const { createUser, updateUserProfile } = useAuth();
	const navigate = useNavigate();
	const [passwordError, setPasswordError] = useState('');
	const { register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		const image = data.image[0];
		const { name, email, password, profession } = data;

		const lengthError = /^.{6,}$/;
		const spError = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/;
		const capitalError = /^[^A-Z]*$/;

		if (!lengthError.test(password)) {
			setPasswordError('Password is less than 6 characters.');
			return;
		} else if (capitalError.test(password)) {
			setPasswordError('Password has no Capital Letter.');
			return;
		} else if (!spError.test(password)) {
			setPasswordError('Password has no special characters.');
			return;
		}
		setLoading(true);
		try {
			// Upload image
			const imageData = await imageUpload(image);
			// User Registration
			const result = await createUser(email, password);

			await updateUserProfile(name, imageData?.data?.display_url);

			//  save user Data in database
			await saveUser(result?.user, name, imageData?.data?.display_url, profession);

			navigate('/dashboard');
			toast.success('Sign up Successfull');
			setLoading(false);
		} catch (error) {
			if (error.message) {
				toast.error('Email Already in Use.');
				setLoading(false);
			}
		}
	};

	return (
    <div className="flex items-center justify-center min-h-screen px-3 py-5 min-w-screen bg-base-100">
      <div
        className="w-full overflow-hidden text-gray-500 bg-gray-100 shadow-2xl lg:w-1/2 rounded-3xl drop-shadow-2xl"
        style={{ maxWidth: "1000px" }}
      >
        <div className="flex items-center justify-center">
          <div className="w-full px-5 py-20 md:w-3/4">
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold text-gray-900">REGISTER</h1>
              <p>Enter your information to register</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="-mx-3">
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="px-1 text-xs font-semibold">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <i className="text-lg text-gray-400 mdi mdi-account-outline"></i>
                    </div>
                    <input
                      type="text"
                      {...register("name")}
                      className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                      placeholder="Enter Full Name"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="px-1 text-xs font-semibold">
                    {" "}
                    Profession{" "}
                  </label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <i className="text-lg text-gray-400 mdi mdi-account-outline"></i>
                    </div>
                    <input
                      type="text"
                      {...register("profession")}
                      className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                      placeholder="Enter Your Profession"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-3 mb-2">
                  <label htmlFor="" className="px-1 text-xs font-semibold">
                    {" "}
                    Profile Picture{" "}
                  </label>
                  <div className="flex">
                    <div className="z-10 flex items-center justify-center w-10 pl-1 text-center pointer-events-none">
                      <i className="text-lg text-gray-400 mdi mdi-image-outline"></i>
                    </div>
                    <input
                      type="file"
                      {...register("image")}
                      className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                      placeholder="Enter Image Url"
                      required
                    />
                  </div>
                </div>
              </div>
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
                  <label htmlFor="" className="px-1 text-xs font-semibold">
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
                      className="w-full py-2 pl-10 pr-3 -ml-10 border-2 border-gray-200 rounded-lg outline-none focus:border-indigo-500"
                      placeholder="************"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="h-10">
                <p className="text-red-500">{passwordError}</p>
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mb-2">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-[20px] px-3 py-3 font-semibold">
                    {loading ? (
                      <TbFidgetSpinner className="mx-auto animate-spin" />
                    ) : (
                      "REGISTER NOW"
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
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-bold border-b pb-[2px] text-blue-600 border-b-black"
                  >
                    Login
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

export default Register;
