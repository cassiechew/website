import type {NextPage} from 'next';

import Header from '../components/Header';

import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';

const Resume: NextPage = () => (
	<div className="container flex flex-col justify-center min-h-screen bg-gray-900 text-gray-300">
		<Header />
		<Navbar id="navbar" />
		<br />
		<main className="flex flex-col justify-center items-center">
			<div className="flex flex-col justify-center max-w-screen-lg">
				<h1>ø Cassie Chew ø</h1>
                    -.-.-.-.-.-.-.-.-.-.-.-.-.-.-
				<br />
				<h4>øøøø Associate Product Engineer</h4>
				<br />
				<h5>øøøøø Melbourne, Vic</h5>
				<br />
				<code>Go, Docker, JSON, Javascript, TypeScript, SQL, Yaml, MongoDB, CLI, C</code>
				<br />
				<h2>øø Experience</h2>
				<br />
				<div className="" >
					<div>
						<h3>øøø Software Engineer @ANZ Australia : 2020 Feb - Present</h3>
						<br />

						<p>・ ANZ is one of the large Banks in Australia</p>
						<p>・ Was focused on Backend Software Engineering</p>

						<br />
						<h4>øøøø Highlights</h4>
						<br />
						<ul>
							<li>- Conducting preliminary research into performance testing for APIs</li>
							<li>- Extending API that handles and manipuilates large volumes of financial data</li>
							<li>- Extending CLI testing tool for wider teams' usage in testing our API</li>
							<li>- Creating serverless application in GCP using Go</li>
							<li>- Creating an end-to-end testing suite for the cloud function</li>
						</ul>
						<br />
					</div>
					<div>
						<h3>øø Software Developer Internship @Aiculus : 2019 Mar - 2019 Nov</h3>
						<br />
						<p>
							<p>・ Aiculus was at the time an API security company focused on using Artificial Intelligence.</p>
							<p>・ to provide security overwatch on API calls.</p>
							<p>・ Interned on two occassions, one as a software developer and one as a project manager of a</p>
							<p>・ on a small team.</p>
						</p>
						<br />
						<h4>øøøø Highlights</h4>
						<br />
						<ul>
							<li>
								<p>- Leading a team in building a web application end to end with an Etherium smart contract</p>
								<p>| generator using ExpressJS, PostgreSQL, and PugJS templating.</p>
							</li>
							<li>- Presenting application to CEO and key stakeholders within the organization</li>
							<li>
								<p>- Managing a different rotaion of interns to take over the above application to improve</p>
								<p>| with React and extending API</p>
							</li>
							<li>- Team conflict management during project management</li>
						</ul>
						<br />
					</div>
				</div>
				<h2>øø Volunteering</h2>
				<br />
				<h3>øøø Events Manager and Coordinator @University of Melbourne Japanese Club : 2014 Aug - 2015 Jan</h3>
				<br />
				<p>・ Was responsible for coordinating with external vendors and restaurants to arrange events and </p>
				<p>・ outside meetups for the club.</p>
			</div>
			<Footer />
		</main>

	</div>
);

export default Resume;
