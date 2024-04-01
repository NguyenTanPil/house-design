import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootApp from '../components/RootApp';
import Home from '../views/Home';
import Popular from '../views/Popular';
import Details from '../views/Details';
import Category from '../views/Category';
import IntroduceCompany from '../components/IntroduceCompany';

const Routers = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <RootApp />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/details/:detailId',
					element: <Details />,
				},
				{
					path: ':category',
					element: <Category />,
				},
				{
					path: '/popular/:popularId',
					element: <Popular />,
				},
				{
					path: '/introduce',
					element: <IntroduceCompany/>,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routers;
