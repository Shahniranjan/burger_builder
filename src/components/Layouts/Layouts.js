import React, {Fragment} from 'react';


const layout = (props) => {
    return (
        <Fragment>
            <div>Header, sidebar, nav</div>
            <main>{props.children}</main>
        </Fragment>
    )
};


export default layout;