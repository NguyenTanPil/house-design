import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootApp from '../components/RootApp';
import Home from '../views/Home';
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
					path: ':id',
					element: <Details />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Routers;
