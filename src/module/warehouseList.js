import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

import { Link } from "react-router-dom";

// library sweetalert
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const baseUrl = "http://localhost:3000"

class warehouseListComponent extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      listWarehouse:[]
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
    this.loadWarehouse()
  }
    loadWarehouse(){
        const url = baseUrl+"/warehouse/list"
        axios.get(url)
        .then(res => {
          if (res.data.success) {
            const data = res.data.data
            this.setState({listWarehouse:data})
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
      <h4 className="text-info">Warehouses</h4>
      <Link className="btn btn-info"  to="/warehouse-form">Add Warehouse</Link>
      <table class="table table-hover table-striped table-sm p-4" >
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Warehouse Code</th>
            <th scope="col">Warehouse Name</th>
            <th scope="col">Warehouse Address</th>
            <th scope="col">Warehouse City</th>
            <th scope="col">Warehouse State</th>
            <th scope="col">Warehouse Zip</th>
            <th scope="col">Warehouse Phone</th>
            <th scope="col">Warehouse Email</th>
            <th scope="col">Warehouse Contact</th>
            <th scope="col">Warehouse Notes</th>

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

    return this.state.listWarehouse.map((data)=>{
      
      return(
        <tr>
          <td>{data.id}</td>
          <td>{data.warehouseCode}</td>
          <td>{data.warehouseName}</td>
          <td>{data.warehouseAddress}</td>
          <td>{data.warehouseCity}</td>
          <td>{data.warehouseState}</td>
          <td>{data.warehouseZip}</td>
          <td>{data.warehousePhone}</td>
          <td>{data.warehouseEmail}</td>
          <td>{data.warehouseContact}</td>
          <td>{data.warehouseNotes}</td>

          
        <td>
            <Link class="btn btn-outline-info "  to={"/warehouse-edit/"+data.id} >Edit</Link>
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

  sendDelete(warehouseId)
  {
    // url de backend
    const baseUrl = "http://localhost:3000/warehouse/delete"    // parameter data post
    // network
    axios.post(baseUrl,{
      id:warehouseId
    })
    .then(response =>{
      if (response.data.success) {
        Swal.fire(
          'Deleted!',
          'Your warehouse has been deleted.',
          'success'
        )
        this.loadWarehouse()
      }
    })
    .catch ( error => {
      alert("Error 325 ")
    })
  }




  

  // onCarrier(data) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: '',
  //     type: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, stage in Carrier!',
  //     cancelButtonText: 'No, not yet.'
  //   }).then((result) => {
  //     console.log('result', result);
  //     if (result.value) {
  //       this.sendShip(data)
  //       console.log('result.value', result.value);
  //     } else if (result.dismiss === Swal.DismissReason.cancel) {
  //       Swal.fire(
  //         'Cancelled',
  //         'Your imaginary file is safe :)',
  //         'error'
  //       )
  //     }
  //   })
  // }

  // sendCarrier(data)
  // {
  //   // url the backend
  //   const baseUrl = "http://localhost:3000/carrier/create"    // parameter data post
  //   // network
  //   axios.post(baseUrl,{
  //     id: data.id,
  //     pickupFacility : data.pickupFacility,
  //     pickupAddress : data.pickupAddress,
  //     pickupCity : data.pickupCity,
  //     pickupState : data.pickupState,
  //     pickupZip : data.pickupZip,
  //     pickupPhone : data.pickupPhone, 
  //     pickupEmail : data.pickupEmail,


  //   })
  //   .then(response =>{
  //     console.log('response', response);
  //     if (response.data.success) {
  //       Swal.fire(
  //         'Staged!',
  //         'Carrier has been added.',
  //         'success'
  //       )
  //       this.loadCarrier()
  //     }
  //   })
  //   .catch ( error => {
  //     alert("Error 325 ")
  //   })
  // }







}

export default warehouseListComponent;