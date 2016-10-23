import React from 'react';
import Img from '../img/defaultProduct.png';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class Product extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {}
    }


    render(){
        return (
             <Card style={{margin: '20px'}}>
                <CardMedia>
                  <img src={Img} />
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
        )
    }


}



