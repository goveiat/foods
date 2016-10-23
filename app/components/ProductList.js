import React from 'react';
import Product from './Product';

export default class ProductList extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {}
    }


    render(){
        return (
            <section>
                <Product />
            </section>
        )
    }


}



