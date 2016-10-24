import React from 'react';
import estilo from 'material-ui/styles/baseThemes/lightBaseTheme';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconA2 from 'material-ui/svg-icons/social/people';
import IconFavorite from 'material-ui/svg-icons/action/favorite';
import IconRate from 'material-ui/svg-icons/toggle/star';
const { accent1Color, accent2Color } = estilo.palette;

export default class ContainerFooter extends React.Component{

    constructor(){
        super();
        this.state = {}
        this.styles = {
            container: {
                padding: '10px',
                fontFamily: 'Roboto, sans-serif',
                textAlign: 'center',
                background: accent2Color,
                marginTop: '5px',
                fontSize: '10pt'
            },
            link: {
                fontWeight: 'bold',
                color: accent1Color
            }
        }
    }


    render(){
        return (
<Paper zDepth={3}>
        <BottomNavigation >
          <BottomNavigationItem label="Favoritar" icon={<IconFavorite />} />
          <BottomNavigationItem label="Avaliar" icon={<IconRate />} />
          <BottomNavigationItem label="A A2Portais" icon={<IconA2 />} />
        </BottomNavigation>
      </Paper>
        )
    }


}



