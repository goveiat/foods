import React from 'react';
import Product from './Product';
import {GridList} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import Img from '../img/defaultProduct.png';

import estilo from 'material-ui/styles/baseThemes/lightBaseTheme';
const { primary1Color, accent4Color } = estilo.palette;

const tilesData = [
  {
    img: Img,
    title: 'Breakfast',
    author: 'jill111',
    key: 2
  },
  {
    img: Img,
    title: 'Tasty burger',
    author: 'pashminu',
    key: 3
  },
  {
    img: Img,
    title: 'Camera',
    author: 'Danson67',
    key: 4
  },
  {
    img: Img,
    title: 'Morning',
    author: 'fancycrave1',
    key: 5
  },
  {
    img: Img,
    title: 'Hats',
    author: 'Hans',
    key: 6
  },
  {
    img: Img,
    title: 'Honey',
    author: 'fancycravel',
    key: 7
  },
  {
    img: Img,
    title: 'Vegetables',
    author: 'jill111',
    key: 8
  },
  {
    img: Img,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
    key: 1
  },
];

export default class ProductList extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {
          root: {
            display: 'flex',
            flexWrap: 'wrap',
            fontFamily: 'Roboto, sans-serif',
            justifyContent: 'space-around',
          },
          gridList: {
            width: 500,
            height: 450,
            overflowY: 'auto',
            height: '100%'
          },
        };
    }


    render(){
        return (
             <article style={this.styles.root}>
                <GridList
                  cellHeight={160}
                  style={this.styles.gridList}
                >
                  <Subheader>December</Subheader>
                  {tilesData.map((tile) => (
                    <Product data={tile} key={tile.key} />
                  ))}
                </GridList>
              </article>
        )
    }


}



