import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootApp from '../components/RootApp';
import Home from '../views/Home';
import Popular from '../views/Popular';
import Details from '../views/Details';

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
					path: '/details/:id',
					element: <Details />,
				},
				{
					path: ':category',
					element: <Home />,
				},
				{
					path: '/popular/:popularId',
					element: <Popular />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routers;
