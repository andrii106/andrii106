import { FC } from 'react';
import { RoutesEnum } from 'shared/enums/RoutesEnum';
import { Outlet, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from 'shared/components/PrivateRoute';
import { PublicRoute } from 'shared/components/PublicRoute';

import { Login, Signup } from 'app/auth';

const App: FC = () => {
	return (
		<Routes>
			<Route element={<Outlet />}>
				<Route element={<PublicRoute />}>
					<Route path={RoutesEnum.LOGIN} element={<Login />} />
					<Route path={RoutesEnum.SIGNUP} element={<Signup />} />
					{/* {Auth routes} */}
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path={RoutesEnum.HOME} element={<>Home works!</>} />
					{/* {Private routes} */}
				</Route>
				<Route path="*" element={<>404!</>} />
			</Route>
		</Routes>
	);
};

export default App;
