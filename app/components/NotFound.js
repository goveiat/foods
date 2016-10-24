// components/NotFound.js
import React from 'react';
import Img from '../img/404.jpg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const NotFound = () =>

<Card>
    <CardTitle style={{textAlign: 'center'}} title="Bem, isso é embaraçoso..." />
    <CardMedia>
      <img src={Img} />
    </CardMedia>
    <CardTitle style={{textAlign: 'center'}} title="Mas a página procurada não foi encontrada..." subtitle="Se ela for muito importante para você, por favor, entre em contato com a nossa equipe."/>
  </Card>

export default NotFound;