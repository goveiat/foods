import React from 'react';
import ContainerShop from './ContainerShop';
import ContainerFooter from './ContainerFooter';
import ContainerHeader from './ContainerHeader';

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
                    <ContainerHeader />
                </header>
                <main>
                    <ContainerShop />
                </main>
                <footer>
                    <ContainerFooter />
                </footer>
            </article>
        )
    }


}



