import React from 'react';
import AppBar from 'material-ui/AppBar';
import Logo from '../img/defaultLogo.jpg';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Drawer from 'material-ui/Drawer';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Link, IndexLink} from 'react-router';

import estilo from 'material-ui/styles/baseThemes/lightBaseTheme';
const { primary1Color, accent1Color } = estilo.palette;

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
                    title={<IndexLink to="/">Tsuru</IndexLink>}
                    onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}
                    iconElementRight={
                            <IconMenu
                                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                  targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                >
                                  <MenuItem primaryText="Refresh" />
                                  <MenuItem primaryText="Send feedback" />
                                  <MenuItem primaryText="Settings" />
                                  <MenuItem primaryText="Help" />
                                  <MenuItem primaryText="Sign out" />
                                </IconMenu>
                    }
                  />
                    <Drawer
                      docked={false}
                      width={240}
                      open={this.state.open}
                      onRequestChange={(open) => this.setState({open})}
                    >

                              <div style={{background: primary1Color, height: '160px', textAlign: 'center'}} >
                                <img src={Logo} style={{width: '90px', marginTop: '35px'}} />
                              </div>

                        <Link to="/carrinho"><MenuItem onTouchTap={this.closeDrawer.bind(this)}>Carrinho</MenuItem></Link>
                        <IndexLink to="/"><MenuItem onTouchTap={this.closeDrawer.bind(this)}>Cardápio</MenuItem></IndexLink>
                        <Link to="/promocoes"><MenuItem onTouchTap={this.closeDrawer.bind(this)}>Promoções</MenuItem></Link>
                        <Link to="/areaEntrega"><MenuItem onTouchTap={this.closeDrawer.bind(this)}>Locais de Entrega</MenuItem></Link>
                        <Link to="/entrar"><MenuItem onTouchTap={this.closeDrawer.bind(this)}>Entrar</MenuItem></Link>
                        <Link to="/sobre"><MenuItem onTouchTap={this.closeDrawer.bind(this)}>Quem Somos</MenuItem></Link>
                    </Drawer>
            </section>
        )
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
