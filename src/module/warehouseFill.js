import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

// import { Link } from "react-router-dom";

// library sweetalert
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'

const baseUrl = "http://localhost:3000"

class warehouseFillComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      listWarehouse:[]
    }
  }

  async componentDidMount() {
        const url = baseUrl+"/warehouse/list"
        axios.get(url)
        .then(res => {
          if (res.data.success) {
            const data = res.data.data
            this.setState({ listWarehouse : data })
          }
          else {
            alert("Error web service");
          }
        })
        .catch(error => {
          alert("Error server" + error);
        })
      }

  render()
  {
    return (
   
        <select>
          {this.loadFillData()}
        </select>
     
    );
  }

  loadFillData(){

    return this.state.listWarehouse.map((data)=>{
      
      return(
     <Fragment>




        <div class="form-group ">  
          <input 
            ref="name" 
            id="pickup-data" 
            type="text" 
            class="form-control" 
            placeholder="Pickup Facility" 
            value={this.state.campPickupFacility} 
            onChange={(value)=> this.setState({campPickupFacility:value.target.value})}
          />  
          <option>{data.warehouseName}</option>


        </div>
        <div class="form-group ">          
          <input 
            ref="address" 
            list="pickup-data" 
            type="text" 
            class="form-control"  
            placeholder="Pickup Address" 
            value={this.state.campPickupAddress} 
            onChange={(value)=> this.setState({campPickupAddress:value.target.value})}
          /> 
          {data.warehouseAddress}
          
        </div>  
        <div class="form-group ">          
          <input 
            id="input3" 
            type="text" 
            class="form-control"  
            placeholder="City" 
            value={this.state.campPickupCity} 
            onChange={(value)=> this.setState({campPickupCity:value.target.value})}
          />
        </div>        





          {/* <option>{data.id}</option> */}
          {/* <option>{data.warehouseCode}</option> */}
          <option>{data.warehouseName}</option>
          {/* <option>{data.warehouseAddress}</option>
          <td>{data.warehouseCity}</td>
          <td>{data.warehouseState}</td>
          <td>{data.warehouseZip}</td>
          <td>{data.warehousePhone}</td>
          <td>{data.warehouseEmail}</td>
          <td>{data.warehouseContact}</td>
          <td>{data.warehouseNotes}</td> */}

        </Fragment>   
       
           
      )
    })
  }
}

export default warehouseFillComponent;