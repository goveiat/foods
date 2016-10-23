import React from 'react';
import ReactDOM from 'react-dom';
import revert from 'material-ui/styles/baseThemes/revert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CSS from './main.css';
import App from './components/App';
import {palette} from 'material-ui/styles/baseThemes/revert';
console.log(palette)

injectTapEventPlugin();

ReactDOM.render(<MuiThemeProvider muiTheme={getMuiTheme(revert)}><App /></MuiThemeProvider>, document.getElementById('app'));