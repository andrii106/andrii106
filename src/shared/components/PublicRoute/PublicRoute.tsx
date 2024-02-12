import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LinearProgress } from '@mui/material';

const PublicRoute: FC = () => {
	return (
		<Suspense fallback={<LinearProgress />}>
			<Outlet />
		</Suspense>
	);
};

export default PublicRoute;
