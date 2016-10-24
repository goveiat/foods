import React from 'react';
import Img from '../img/defaultProduct.png';
import FlatButton from 'material-ui/FlatButton';
import estilo from 'material-ui/styles/baseThemes/lightBaseTheme';
import {GridTile} from 'material-ui/GridList';
const { primary1Color, accent4Color } = estilo.palette;
import {Link} from 'react-router';

export default class Product extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {}
    }


    render(){
        const {title, author, img} = this.props.data;
        return (
            <Link to="/tamanho">
             <GridTile
                style={{background: accent4Color}}
                title={title}
                subtitle={<span>by <b>{author}</b></span>}
            >
              <img src={img} />
            </GridTile>
            </Link>
        )
    }


}



