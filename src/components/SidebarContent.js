import React, { Component } from 'react'
import { Transition } from 'react-transition-group'


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


        <div className="sidebar-link"><a href="#!/orders-list"> Orders</a></div>
        <div className="sidebar-link"><a href="#!/shipments-list">Shipments</a></div>
        <div className="sidebar-link"><a href="#!/dispatches">Dispatches</a></div>
                  
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MacroView</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">        
            <div className="sidebar-link"><a class="dropdown-item" href="#">Inbounds</a></div>
            <div className="sidebar-link"><a class="dropdown-item" href="#">Outbounds</a></div>
            <div className="sidebar-link"><a class="dropdown-item" href="#">Warehouses</a></div>
          </div>
                  
        <div className="sidebar-link"><a href="#!/analytics">Analytics</a></div>
        <div className="sidebar-link"><a href="#!/locations">Locations</a></div>
        <div className="sidebar-link"><a href="#!/carriers">Carriers</a></div>
        
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"> 
            <div className="sidebar-link"><a href="#!/employees">Employees</a></div>
            <div className="sidebar-link"><a href="#!/equipment">Equipment</a></div>
            <div className="sidebar-link"><a href="#!/accountspay">Accounts Pay</a></div>
            <div className="sidebar-link"><a href="#!/accountsrec">Accounts Rec</a></div>
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