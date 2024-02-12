import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, LinearProgress } from '@mui/material';

const PrivateRoute: FC = () => {
	// TODO User permission logic

	return (
		<Box>
			<Suspense fallback={<LinearProgress />}>
				<Outlet />
			</Suspense>
		</Box>
	);
};

export default PrivateRoute;
