// Components/ALink/ALink.tsx

import Link from 'next/link';

declare type Props = {
    name : string
}

export const To = (props: Props) : JSX.Element => (
	<>
		<Link href={'/' + props.name}>
			<a className="underline
				text-pink-600
				hover:text-white
				hover:bg-pink-600"
			>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</a>
		</Link>
	</>
);
