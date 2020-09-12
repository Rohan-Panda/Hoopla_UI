import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Redirect from "../../node_modules/react-router-dom/Redirect"
import withStyles from '@material-ui/core/styles/withStyles';
import LoginComponent from "./Login"

import StyledBadge from '@material-ui/core/Badge';
// import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const styles = (theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
        badge: {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        }
    }
})
class CartI extends Component {
constructor(){
    super()
    this.state={
        yes:false
    }
}

    // render() {
    //     var up = null
    //     var ret = null
    //     if (this.state.yes) {
    //         window.location.reload(false)
    //         ret = <Redirect to="/cartI" />
    //     }
    //     if (this.props.num >= 0) {
    //         if (localStorage.getItem("objs") >= 0) {
    //             up = localStorage.getItem("objs")

    //             return (

    //                 <React.Fragment>
    //                     {ret}
    //                     <Toolbar>
    //                         <IconButton aria-label="cart" onClick={() => this.setState({ yes: true })}>
    //                             <StyledBadge badgeContent={localStorage.getItem("objs")} color="secondary">
    //                                 <ShoppingCartIcon />
    //                             </StyledBadge>
    //                         </IconButton>
    //                     </Toolbar>
    //                 </React.Fragment>
    //             )
    //         }
    //         else {
    //             return (
    //                 <React.Fragment>
    //                     {ret}
    //                     <Toolbar>
    //                         <IconButton aria-label="cart" onClick={() => this.setState({ yes: true })}>
    //                             <StyledBadge badgeContent={this.props.num} color="secondary">
    //                                 <ShoppingCartIcon />
    //                             </StyledBadge>
    //                         </IconButton>
    //                     </Toolbar>
    //                 </React.Fragment>
    //             )
    //         }

    //     }
    // }
    render() {
            var up=null
            var ret=null
            if(this.state.yes){
                window.location.reload(false)
                ret=<Redirect to="/cartI"/>
            }
            up=localStorage.getItem("cartItems")
            return (
                        <React.Fragment>
                            {ret}
                            <Toolbar>
                    <IconButton aria-label="cart" onClick={()=>this.setState({yes:true})}>
                                    <StyledBadge badgeContent={up} color="secondary">
                                        <ShoppingCartIcon />
                                    </StyledBadge>
                                </IconButton>
                            </Toolbar>
                        </React.Fragment>
                    )
}
}
export default withStyles(styles)(CartI)