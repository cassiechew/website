// Components/Footer/Footer.tsx

import Image from 'next/image';

export const Footer = () : JSX.Element => (
	<>
		<footer className="flex flex-col max-w-screen-lg items-center flex-wrap p-3">
			<div>・・・・・・・・・・・・・・・・・・・・・・・・・・・・</div>
			<br />
			Written in NextJS
			<br />
			<span>
				<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
			</span>
		</footer>
	</>
);
