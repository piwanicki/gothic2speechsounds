import React, { Component } from 'react';
import classes from './Layout.module.css';
import Controls from '../../Components/Controls/Controls'
import RightsAdnotation from '../../Components/RightsAdnotation/rightsAdnotation';


class Layout extends Component { 

  render() {
    return (
      <div className={classes.Layout}>

        <Controls />
        <RightsAdnotation />
        {this.props.children}
      </div>
    )
  }


}

export default Layout;