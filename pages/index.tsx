// Pages/index.tsx

import type {NextPage} from 'next';

import Bar from '../components/Bar';
import Header from '../components/Header';
import To from '../components/To';

import AboutMe from '../containers/AboutMe';
import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';

import animate from '../util/animations';
import {useEffect} from 'react';

// ANIMEJS I NEED TO ADD
// . for class
// # for id
const Home: NextPage = () => {
	useEffect(() => {
		animate('pink');
	}, []);

	return (
		<div className="flex flex-col h-screen bg-gray-900 text-gray-300">
			<div className="container flex flex-col justify-center">
				<Header />
				<Navbar id="navbar" />
				<br />
				<main className="flex flex-row justify-center">
					{/* Uncomment for spicy boxes */}
					{/* <div className="flex flex-row-reverse justify-center items-center">
						<div className="flex flex-col pr-10 items-baseline">
							<img className="pink-box-1 pb-1" src="/pink_square.svg" alt="Pink Square" width="50" height="50" />
							<img className="down-pink-box-1 pt-1" src="/pink_square.svg" alt="Pink Square" width="50" height="50" />
						</div>
					</div> */}

					<div className="flex flex-col justify-center max-w-screen-lg">
						<div className="flex justify-center max-w-screen-lg">
							<AboutMe />
						</div>
						<br />
						<div>
							<ul>
								<To name="github" />
							</ul>
						</div>
						<br />
						
					</div>
					{/* Uncomment for spicy boxes */}
					{/* <div className="flex flex-row-reverse justify-center items-center">
						<div className="flex flex-col pl-10 items-baseline">
							<img className="pink-box-2 pb-1" src="/pink_square.svg" alt="Pink Square" width="50" height="50" />
							<img className="down-pink-box-2 pt-1" src="/pink_square.svg" alt="Pink Square" width="50" height="50" />
						</div>
					</div> */}
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Home;

