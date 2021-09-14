// Components/AboutMe/AboutMe.tsx

import { useEffect } from 'react';
import animate from '../../util/animations';
import Polygon from '../../components/Polygon';

export const AboutMe = () : JSX.Element => {
    useEffect(() => {
        // Too slow
		// animate('about');
	}, []);

    return(
    <div className='flex flex-col justify-center'>
        <div className='flex flex-row'>
            <div>
                <h1 className='justify-center underline title'>
                    Hi I'm Cassie!
                </h1>
                <br />
                <p className='justify-center job'>
                    {'> '} Software Engineer
                </p>
                <p className='justify-center lang'>
                    {'> '} Language Learner
                </p>
                <p className='justify-center game'>
                    {'> '} Gamer
                </p>
                <p className='justify-center hobb'>
                    {'> '} Coffee Drinker
                </p>
            </div>
            <div className="pl-6">
                <h1 id="tech" className='underline'>Tech</h1>
                <br />
                <p id="proglang">・TypeScript, JavaScript, NodeJs, GraphQL, Go, C</p>
                <p id="frames">・React, NextJS, ExpressJS, Apollo, TailwindCSS, ChakraUI</p>
                <p id="db">・MongoDB, PostgreSQL, MySQL</p>
                <p id="tools">・urql, TypeORM, type-graphql, pg</p>
                <br />
                <br />
            </div>
        </div>
        <Polygon />
    </div>
)}
