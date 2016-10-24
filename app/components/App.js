import React from 'react';
import ContainerShop from './ContainerShop';
import ContainerFooter from './ContainerFooter';
import ContainerHeader from './ContainerHeader';
import Banner from '../img/defaultBanner.jpg';

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
            <article style={{overflowX : 'hidden'}}>
                <header>
                    <ContainerHeader />
                </header>
                <main>
                    <ContainerShop />
                    <footer>
                        <ContainerFooter />
                    </footer>
                </main>
            </article>
        )
    }


}



