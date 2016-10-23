import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class App extends React.Component{



    constructor(){
        super();
        this.state = {
            click: 'Login'
        }

        this.styles = {
          title: {
            cursor: 'pointer',
          },
        }
    }


    decrementar(){
        this.setState({});
    }

    render(){
        return (
            <article>
                <header>
                    <AppBar
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        title={<span style={this.styles.title}>Foods</span>}
                        onTitleTouchTap={this.gotoHome.bind(this)}
                      />
                </header>
            </article>
        )
    }

    gotoHome(e) {
        e.preventDefault();
        alert('Setar a rota para home');
    }

}



