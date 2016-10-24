import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CSS from './main.css';
import App from './components/App';
import NotFound from './components/NotFound';
import ContainerCart from './components/ContainerCart';
import ContainerSale from './components/ContainerSale';
import ContainerLogin from './components/ContainerLogin';
import ContainerAbout from './components/ContainerAbout';
import ContainerShop from './components/ContainerShop';
import ContainerDeliveryArea from './components/ContainerDeliveryArea';





injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ContainerShop} />
                <Route path="/carrinho" component={ContainerCart} />
                <Route path="/promocoes" component={ContainerSale} />
                <Route path="/areaEntrega" component={ContainerDeliveryArea} />
                <Route path="/entrar" component={ContainerLogin} />
                <Route path="/sobre" component={ContainerAbout} />
                <Route path="*" component={NotFound} />
            </Route>
        </Router>
    </MuiThemeProvider>, document.getElementById('app'));