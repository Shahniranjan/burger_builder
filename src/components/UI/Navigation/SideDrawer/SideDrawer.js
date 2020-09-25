import React,{Fragment} from "react";
import Logo from "../../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Classes from "./SideDrawer.css"
import Backdrop from "../../Backdrop/Backdrop";

const SideDrawer = (props) =>{
    let attachedClasses = [ Classes.SideDrawer , Classes.Close ];
    if(props.open){
      attachedClasses = [ Classes.SideDrawer , Classes.Open ];
    }
   return(
       <Fragment >
       <Backdrop show={props.open} close={props.closed} />
       <div className={attachedClasses.join(' ')}>
           <div className={Classes.Logo}>
               <Logo/>
           </div>

           <nav>
           <NavigationItems/>
           </nav>
       </div>
       </Fragment>
   );
};


export default SideDrawer;