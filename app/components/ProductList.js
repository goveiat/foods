import React from 'react';
import Product from './Product';
import {GridList, GridTile} from 'material-ui/GridList';
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
  },
  {
    img: Img,
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: Img,
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: Img,
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: Img,
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: Img,
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: Img,
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: Img,
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
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
                    <GridTile
                        style={{background: accent4Color}}
                      title={tile.title}
                      subtitle={<span>by <b>{tile.author}</b></span>}
                    >
                      <img src={tile.img} />
                    </GridTile>
                  ))}
                </GridList>
              </article>
        )
    }


}



