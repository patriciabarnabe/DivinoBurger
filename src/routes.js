import React from 'react';
import { Switch, Route, BrowserRouter, useHistory } from 'react-router-dom';

import Login from './pages/Login';
import Hall from './pages/Hall';
import Register from './pages/Register';

// import { history } from './utils/history';
import PrivateRoute from './utils/PrivateRoute';
import PublicRoute from './utils/PublicRoute';
import NotFound from './components/NotFound';
import OrdersPanel from './pages/OrdersPanel';


const Routes = () => {
	const history = useHistory()
	return (
		<BrowserRouter history={history}>
			<Switch>
				<PublicRoute path="/" component={Login} exact />
				<Route path="/cadastro" component={Register} />
				<PrivateRoute path="/salao" component={Hall} />
				<PrivateRoute path="/salao-pedidos" component={OrdersPanel} />
				<PrivateRoute path="/cozinha" component={OrdersPanel} />

				<Route
					component={() => (
						<NotFound />
					)}
				/>
			</Switch>

		</BrowserRouter>
	)
}
	;

export default Routes;
