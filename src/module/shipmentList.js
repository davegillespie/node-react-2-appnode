import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

import { Link } from "react-router-dom";

// library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const baseUrl = "http://localhost:3000"

class shipmentListComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      listShipment:[]
    }
  }

    // componentDidMount(){
    //   // const url = "http://192.168.10.1:3000/employee/list"
    //   const url = baseUrl+"/employee/list"
    //   axios.get(url)
    //   .then(res => {
    //     if (res.data.success) {
    //       const data = res.data.data
    //       this.setState({listEmployee:data})
    //     }
    //     else {
    //       alert("Error web service");
    //     }
    //   })
    //   .catch(error => {
    //     alert("Error server" + error);
    //   })
    // }


  componentDidMount() {
    this.loadShip()
  }
    loadShip(){
        const url = baseUrl+"/shipment/shipmentList"
        axios.get(url)
        .then(res => {
          if (res.data.success) {
            const data = res.data.data
            this.setState({listShipment:data})
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
    <div>
      <Link className="btn btn-warning"  to="/">Add Dispatch</Link>
      <table class="table table-hover table-striped table-sm p-4" >
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">#</th>
            <th scope="col">Pickup Facility</th>
            <th scope="col">Pickup Address</th>
            <th scope="col">Pickup City</th>
            <th scope="col">Pickup State</th>
            <th scope="col">Pickup Zip</th>
            <th scope="col">Pickup Phone</th>
            <th scope="col">Pickup Email</th>

            <th scope="col">Pickup Date</th>
            <th scope="col">Delivery Date</th>
            <th scope="col">PO#</th>
            <th scope="col">Quantity</th>
            <th scope="col">Freight Type</th>
            <th scope="col">Weight</th>
            <th scope="col">Load Size</th>
            <th scope="col">Temperature</th>
            
            <th scope="col">Delivery Facility</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Delivery City</th>
            <th scope="col">Delivery State</th>
            <th scope="col">Delivery Zip</th>
            <th scope="col">Delivery Phone</th>
            <th scope="col">Delivery Email</th>
            <th scope="col">Carrier</th>
            <th scope="col">Rate</th>

            <th colspan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {this.loadFillData()}
        </tbody>
      </table>
    </div>
    );
  }

  loadFillData(){

    return this.state.listShipment.map((data)=>{
      return(
        <tr>
          <td><button className="btn btn-outline-info" onClick={()=>this.onDispatch(data)}>Dispatch</button></td>
          <td>{data.id}</td>
          <td>{data.pickupFacility}</td>
          <td>{data.pickupAddress}</td>
          <td>{data.pickupCity}</td>
          <td>{data.pickupState}</td>
          <td>{data.pickupZip}</td>
          <td>{data.pickupPhone}</td>
          <td>{data.pickupEmail}</td>

          <td>{data.pickupDate}</td>
          <td>{data.deliveryDate}</td>
          <td>{data.poNumber}</td>
          <td>{data.quantity}</td>
          <td>{data.freightType}</td>
          <td>{data.weight}</td>
          <td>{data.loadSize}</td>
          <td>{data.temperature}</td>
          
          <td>{data.deliveryFacility}</td>
          <td>{data.deliveryAddress}</td>
          <td>{data.deliveryFacility}</td>
          <td>{data.deliveryState}</td>
          <td>{data.deliveryZip}</td>
          <td>{data.deliveryPhone}</td>
          <td>{data.deliveryEmail}</td>
          <td>{data.carrier}</td>
          <td>{data.rate}</td>



            <td>
            <Link class="btn btn-outline-info "  to={"/edit/"+data.id} >Edit</Link>
            </td>
            <td>
            <button class="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Delete </button>
            </td>
          </tr>
      )
    })
  }

  onDelete(id){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.sendDelete(id)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  sendDelete(shipId)
  {
    // url de backend
    const baseUrl = "http://localhost:3000/shipment/delete"    // parameter data post
    // network
    axios.post(baseUrl,{
      id:shipId
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Deleted!',
          'Your shipment has been deleted.',
          'success'
        )
        this.loadShipment()
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }




  

  onDispatch(data) {
    Swal.fire({
      title: 'Are you sure?',
      text: '',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, stage in shipments!',
      cancelButtonText: 'No, not yet.'
    }).then((result) => {
      console.log('result', result);
      if (result.value) {
        this.sendShip(data)
        console.log('result.value', result.value);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  sendShip(data)
  {
    // url the backend
    const baseUrl = "http://localhost:3000/shipment/create"    // parameter data post
    // network
    axios.post(baseUrl,{
      id: data.id,
      pickupFacility : data.pickupFacility,
      pickupAddress : data.pickupAddress,
      pickupCity : data.pickupCity,
      pickupState : data.pickupState,
      pickupZip : data.pickupZip,
      pickupPhone : data.pickupPhone, 
      pickupEmail : data.pickupEmail,

      pickupDate : data.pickupDate,
      deliveryDate : data.deliveryDate,
      poNumber : data.poNumber,
      quantity : data.quantity, 
      freighType : data.freightType,
      weight : data.weight,
      loadSize : data.loadSize,
      temperature : data.temperature,
      
      deliveryFacility : data.deliveryFacility, 
      deliveryAddress : data.deliveryAddress,
      deliveryCity : data.deliveryCity,
      deliveryState : data.deliveryState,
      deliveryZip : data.deliveryZip,
      deliveryPhone : data.deliveryPhone, 
      deliveryEmail : data.deliveryEmail,

    })
    .then(response =>{
      console.log('response', response);
      if (response.data.success) {
        Swal.fire(
          'Staged!',
          'Your Shipment has been Dispatched!',
          'success'
        )
        this.loadShipment()
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }







}

export default shipmentListComponent;