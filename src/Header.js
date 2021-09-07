import React from 'react';
import PortalDemo from './PortalDemo';  
class Header extends React.Component {
    render() {
       return (
          <div >
             <h2>Header</h2>
             <PortalDemo />  
          </div>
       );
    }
 }
 export default Header;