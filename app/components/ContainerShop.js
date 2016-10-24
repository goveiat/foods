import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ProductList from './ProductList';
import {Link, IndexLink} from 'react-router';
import Banner from '../img/defaultBanner.jpg';
import Logo from '../img/defaultLogo.jpg';

export default class ContainerShop extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {
            floatBtn: {
                position: 'fixed',
                bottom: '10px',
                right: '10px',
            },
            logo: {
                width: '90px',
                marginTop: '55px',
                boxShadow: '2px 2px 2px #000'

            },
            topo: {
                height: '200px',
                background : 'url('+Banner+') no-repeat',
                backgroundSize : 'cover',
                textAlign: 'center'

            }

        }
    }


    render(){
        return (
            <section>
            <div style={this.styles.topo} >
                <img src={Logo} style={this.styles.logo} />
            </div>
                <ProductList />
                <Link to="/carrinho">
                    <FloatingActionButton secondary={true} style={this.styles.floatBtn} >
                        <ActionShoppingCart  />
                    </FloatingActionButton>
                </Link>
            </section>
        )
    }


}



