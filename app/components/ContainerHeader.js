import React from 'react';
import AppBar from 'material-ui/AppBar';
import Banner from '../img/defaultBanner.jpg';
import Logo from '../img/defaultLogo.jpg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class ContainerHeader extends React.Component{

    constructor(){
        super();
        this.state = {
            open : false
        }
    }


    render(){
        return (
            <section>
                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title={<span>Foods</span>}
                    onTitleTouchTap={this.gotoHome.bind(this)}
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                  />
                    <Card>
                        <CardMedia overlay={<CardTitle title="Aberto Hoje" subtitle="De 18:00 às 22:00 | De 18:00 às 22:00 (Entrega)" />}>
                            <img src={Banner} />
                        </CardMedia>
                    </Card>
                    <Drawer
                      docked={false}
                      width={240}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}
                    >
                        <Card>
                            <CardMedia>
                              <img src={Logo} />
                            </CardMedia>
                        </Card>
                        <MenuItem onTouchTap={this.closeDrawer.bind(this)}>Carrinho</MenuItem>
                        <MenuItem onTouchTap={this.closeDrawer.bind(this)}>Promoções</MenuItem>
                        <MenuItem onTouchTap={this.closeDrawer.bind(this)}>Locais de Entrega</MenuItem>
                        <MenuItem onTouchTap={this.closeDrawer.bind(this)}>Entrar</MenuItem>
                        <MenuItem onTouchTap={this.closeDrawer.bind(this)}>Quem Somos</MenuItem>
                    </Drawer>
            </section>
        )
    }

    gotoHome(e) {
        e.preventDefault();
        alert('Setar a rota para home');
    }

    toggleDrawer(e) {
        e.preventDefault();
        this.setState(
            {open: !this.state.open}
        );
    }


    closeDrawer() {
        this.setState(
            {open: false}
        );
    }



}
