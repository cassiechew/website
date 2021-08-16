import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

import Header from '../components/Header';

const Blog: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.reload();
	});

	return (
		<div><Header /></div>
	);
};

export default Blog;
