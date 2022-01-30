import React, { useState } from 'react';
import user_icon from 'assets/user_icon.png';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { signoutWithGoogle } from 'services/firebase/firebase';
import { useSelector } from 'react-redux';

const UserMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const user = useSelector((state) => state.auth);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<div className="flex items-center">
				<button className="btn bg-template-green text-white mx-2">
					View Plans
				</button>
				<div className="">
					<button
						className="cursor-pointer flex items-center"
						onClick={toggleMenu}
					>
						{/* Circle Icon */}
						<div className="relative">
							<img
								src={user_icon}
								alt={`${user.name} Icon`}
								className="h-8 w-8"
							/>
							<span className="absolute top-1 left-3 text-white font-semibold">
								{user.name[0]}
							</span>
						</div>
						{/* Name */}
						<div className="text-sm pl-2">
							{user.name.split(' ')[0]}
						</div>
						<div className="h-5 w-5 text-template-auth-text">
							<ChevronDownIcon />
						</div>
					</button>
				</div>
			</div>
			{/* Menu */}
			<section
				className={`${
					isMenuOpen ? 'block' : 'hidden'
				} absolute right-3 top-12`}
			>
				<div className="shadow-md w-64 rounded-lg text-template-black py-2">
					<header className="border-b pb-2 mb-2">
						<div className="flex items-center px-4 gap-3">
							{/* Circle Icon */}
							<div className="relative">
								<img
									src={user_icon}
									alt={`${user.name} Icon`}
									className="h-8 w-8"
								/>
								<span className="absolute top-1 left-3 text-white font-semibold">
									{user.name[0]}
								</span>
							</div>
							{/* Name */}
							<div className="flex flex-col items-start text-sm">
								<span>{user.name.split(' ')[0]}</span>
								<span>Settings</span>
							</div>
						</div>
					</header>
					<section></section>
					<footer>
						<div className="py-2">
							<button
								onClick={signoutWithGoogle}
								className="w-full text-left px-2 hover:bg-template-hover-color"
							>
								<span className="text-red-600 text-sm ">
									Log out
								</span>
							</button>
						</div>
					</footer>
				</div>
			</section>
		</div>
	);
};

export default UserMenu;
