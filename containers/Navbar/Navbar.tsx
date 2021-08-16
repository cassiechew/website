// Components/Navbar/Navbar.tsx

import To from '../../components/To';

import Bar from '../../components/Bar';

declare type Props = {
    id: string,
}

export const Navbar = (props : Props) : JSX.Element => (
    <div className="container flex flex-col justify-center">
        <Bar />
        <div id={props.id} className="
            container
            flex
            align-center
            justify-center">
            <To name='cassie' />&nbsp;-&nbsp;
            <To name='resume' />&nbsp;-&nbsp;
            <To name='blog' />
        </div>
    </div>
)
