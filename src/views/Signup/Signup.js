import { ChevronDownIcon, GlobeIcon } from '@heroicons/react/solid';
import signupSvg_1 from 'assets/signup_vector_1.svg';
import signupSvg_2 from 'assets/signup_vector_2.svg';
import typeform_logo from 'assets/typeform_logo.svg';
import google_icon from 'assets/google_icon.svg';
import microsoft_icon from 'assets/microsoft_icon.svg';
import AuthTile from 'components/Auth/AuthTile';
import TextField from 'components/TextField';
import React from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from 'services/firebase/firebase';
import {
	TYPE_EMAIL,
	TYPE_PASSWORD
} from 'utils/constants/INPUT_TYPE.constant';
import {
	PATH_HOME,
	PATH_LOGIN
} from 'utils/constants/ROUTING_PATHS.constant';

const Signup = () => {
	return (
		<div className="bg-template-black flex overflow-hidden">
			{/* Left Image Part */}
			<div className="relative hidden h-screen lg:block flex-1 px-4 py-8">
				<div className="h-full">
					<img
						src={signupSvg_1}
						alt="signup svg"
						className="-bottom-[10%] -left-[2%] w-full absolute"
					/>
					<img
						src={signupSvg_2}
						alt="signup svg"
						className="h-150% -bottom-40 left-28 absolute"
					/>
					<img
						src="https://public-assets.typeform.com/bouncer/bouncer.037ef56b8203e10d37902ff7fb06fd55.png"
						alt="signup"
						className="absolute right-0 h-3/5 bottom-[20%]"
					/>
				</div>
			</div>
			{/* Right Sign up Module */}
			<div className="flex relative flex-col flex-1 basis-1/3 w-full h-full max-h-full bg-white text-template-signup-text">
				{/* Login Navigation */}
				<div className="flex items-center justify-between px-6 py-2">
					<span className="flex items-center p-2 border-0 cursor-pointer text-sm">
						<GlobeIcon className="h-6 w-6" />
						English
						<ChevronDownIcon className="h-4 w-4" />
					</span>
					<span className="ml-auto pr-2 text-sm">
						Already have an account?
					</span>
					<Link
						to={PATH_LOGIN}
						className="text-xs px-2 py-1 border text-template-black border-template-black hover:opacity-80"
					>
						Log in
					</Link>
				</div>
				{/* Content Container */}
				<div className="relative overflow-y-auto w-full h-full mt-6">
					<div className="box-inherit">
						{/* Logo */}
						<div className="flex items-center justify-center mt-20 h-20">
							<Link to={PATH_HOME}>
								<img src={typeform_logo} alt="Logo" />
							</Link>
						</div>
						{/* Signup Module */}
						<div className="box-inherit">
							<main className="w-96 h-auto mx-auto mb-2">
								{/* Auth Content */}
								<div className="px-2 py-5">
									<div className="relative flex flex-col items-center">
										<div>
											<h2 className="text-left font-extralight text-xl text-template-signup-text mb-6">
												Get better data with
												conversational forms,
												surveys, quizzes &
												more.
											</h2>
											{/* Signup Fields */}
											<div>
												<TextField
													type={TYPE_EMAIL}
													placeholder="Email"
												/>
												<TextField
													type={
														TYPE_PASSWORD
													}
													placeholder="Password"
												/>
											</div>
										</div>
										<div className="pb-6 flex flex-col items-center">
											<button
												// type={TYPE_SUBMIT}
												// value="Create my free account"
												className="w-56 h-10 bg-template-black text-white text-sm rounded cursor-pointer btn hover:opacity-90"
												onClick={
													signInWithGoogle
												}
											>
												Create my free account
											</button>
										</div>
										{/* Auth Container */}
										<div className="w-60">
											{/* Auth Divder */}
											<div className="bg-gray-500 h-1px text-center mb-6">
												<span className="relative px-4 text-sm text-gray-500 bg-white -top-[0.7rem]">
													OR
												</span>
											</div>
											{/* Auth Modules */}
											<div>
												<AuthTile
													title="Sign up with Google"
													imgSrc={
														google_icon
													}
													onClick={
														signInWithGoogle
													}
												/>
												<AuthTile
													title="Sign up with Microsoft"
													imgSrc={
														microsoft_icon
													}
													onClick={
														signInWithGoogle
													}
												/>
											</div>
										</div>
									</div>
								</div>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Signup;
