import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FontIcon from 'material-ui/FontIcon';
import ProductList from './ProductList';

export default class ContainerShop extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {
            floatBtn: {
                position: 'fixed',
                bottom: '10px',
                right: '10px'
            }
        }
    }


    render(){
        return (
            <section>
                <ProductList />
                <FloatingActionButton secondary={true} style={this.styles.floatBtn} >
                        <FontIcon className="material-icons">shopping_cart</FontIcon>
                </FloatingActionButton>
            </section>
        )
    }


}



