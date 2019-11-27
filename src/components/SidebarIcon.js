import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SidebarIcon = ({handleClick, isOpen}) => {

  return <div onClick={handleClick}>
    {/* {isOpen ? <FontAwesomeIcon icon="far fa-bars" /> : <FontAwesomeIcon icon="far fa-bars" />} */}
    {
    isOpen 
    ?
    <button class="navbar-toggler navbar-light bg-light m-3" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    :
    <button class="navbar-toggler navbar-light bg-light m-3" type="button">
        <span class="navbar-toggler-icon"></span>
    </button>
    
    }
  </div>
}



export default SidebarIcon