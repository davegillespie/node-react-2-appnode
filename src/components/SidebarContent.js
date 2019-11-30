import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { Link } from "react-router-dom";

const duration = 1000
const sidebarStyle = {
  transition: `width ${duration}ms`
}
const sidebarTransitionStyles = {
  entering: { width: 0 },
  entered: { width: '175px' },
  exiting: { width: '175px' },
  exited: { width: 0 }
}
const linkStyle = {
  transition: `opacity ${duration}ms`
}
const linkTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 }
}
export default class SidebarContent extends Component {
  renderLinks = () => {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div style={{
          ...linkStyle,
          ...linkTransitionStyles[state]
        }}>
          {/* <div className="sidebar-link">Home</div>
          <div className="sidebar-link">About</div>
          <div className="sidebar-link">Contact</div> */}


        <div className="sidebar-link"><Link className="sidebarbtn" to="/list">Orders</Link></div>
        <div className="sidebar-link"><Link className="sidebarbtn" to="/shipment-list">Shipments</Link></div>
        <div className="sidebar-link"><Link className="sidebarbtn" to="/dispatch-list">Dispatches</Link></div>

        <div className="dropdown">
        <button className="sidebar-link dropdown-toggle bg-light" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MacroView</button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">       
            <div className="sidebar-link"><a href="#" className="sidebarbtn">Inbounds</a></div>
            <div className="sidebar-link"><a href="#" className="sidebarbtn">Outbounds</a></div>
            <div className="sidebar-link"><a href="#" className="sidebarbtn">Warehouses</a></div>
          </div>
        </div>
                  
        <div className="sidebar-link"><a href="#!/analytics" className="sidebarbtn">Analytics</a></div>
        <div className="sidebar-link"><a href="#!/locations" className="sidebarbtn">Locations</a></div>
        <div className="sidebar-link"><Link className="sidebarbtn" to="/carrier-list">Carriers</Link></div>
        
        <div class="dropdown">
          <button className="sidebar-link dropdown-toggle bg-light" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
            <div className="sidebar-link"><a href="#!/employees" className="sidebarbtn">Employees</a></div>
            <div className="sidebar-link"><a href="#!/equipment" className="sidebarbtn">Equipment</a></div>
            <div className="sidebar-link"><a href="#!/accountspay" className="sidebarbtn">Accounts Pay</a></div>
            <div className="sidebar-link"><a href="#!/accountsrec" className="sidebarbtn">Accounts Rec</a></div>
          </div>
        </div>
        
        </div>
       
      )}
    </Transition>
    
  }
  
  render() {
    return <Transition in={this.props.isOpen} timeout={duration}>
      {(state) => (
        <div className="sidebar" style={{
          ...sidebarStyle,
          ...sidebarTransitionStyles[state]
        }}>
          {this.renderLinks()}
        </div>
      )}
    </Transition>
  }
}