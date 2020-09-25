import React, {Component, Fragment} from 'react';
import Toolbar from "../../components/UI/Navigation/Toolbar/Toolbar";
import Classes from "./Layout.css"
import SideDrawer from "../../components/UI/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false
    };
    sideDrawerClosedHandler = () => {
        this.setState(prev =>({showSideDrawer: false}))
    };

    toggleSidebarHandler = ()=>{
        this.setState(prev=>({showSideDrawer: !prev.showSideDrawer}))
    };

    render() {
        return (
            <Fragment>
                <Toolbar toggleSidebar={this.toggleSidebarHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler}/>
                <main className={Classes.Content}>{this.props.children}</main>
            </Fragment>
        )
    }
}


export default Layout;