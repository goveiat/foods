import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import ProductList from './ProductList';
import {Link, IndexLink} from 'react-router';

export default class ContainerShop extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {
            floatBtn: {
                position: 'fixed',
                bottom: '10px',
                right: '10px',
            }
        }
    }


    render(){
        return (
            <section>
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



