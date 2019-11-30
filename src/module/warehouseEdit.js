import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

const baseUrl = "http://localhost:3000"

class WarehouseEditComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dataWarehouse: {},
      campWarehouseCode: "",
      campWarehouseName: "",
      campWarehouseAddress: "",
      campWarehouseCity: "",
      campWarehouseState: "",
      campWarehouseZip: "",
      campWarehousePhone: "",
      campWarehouseEmail: "",
      campWarehouseContact: "",
      campWarehouseNotes: ""
    }
  }

  componentDidMount(){
    let warehouseId = this.props.match.params.id;
    const url = baseUrl+"/warehouse/get/"+warehouseId
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        this.setState({

         dataWarehouse: data,
         campWarehouseCode: data.warehouseCode,
         campWarehouseName: data.warehouseName,
         campWarehouseAddress: data.warehouseAddress,
         campWarehouseCity: data.warehouseCity,
         campWarehouseState: data.warehouseState,
         campWarehouseZip: data.warehouseZip,
         campWarehousePhone: data.warehousePhone,
         campWarehouseEmail: data.warehouseEmail,
         campWarehouseContact: data.warehouseContact,
         campWarehouseNotes: data.warehouseNotes

        })
        // console.log(JSON.stringify(data.role.role))
      }
      else {
        alert("Error web service")
      }
    })
    .catch(error=>{
      alert("Error server "+error)
    })
  }

 render(){
  //  let orderId = 0;
  //  let orderId = this.props.match.params.employeeId;
   return (
    <div class="container px-4">
    <h4>Warehouse Details:</h4>
    <div class="form-row">
       <div class="form-group ">          
         <input type="text" class="form-control"  placeholder="Warehouse Code" value={this.state.campWarehouseCode} onChange={(value)=> this.setState({campWarehouseCode:value.target.value})}/>
       </div>
       <div class="form-group ">          
         <input type="text" class="form-control"  placeholder="Warehouse Name" value={this.state.campWarehouseName} onChange={(value)=> this.setState({campWarehouseName:value.target.value})}/>
       </div>
       <div class="form-group ">          
         <input type="text" class="form-control"  placeholder="Warehouse Address" value={this.state.campWarehouseAddress} onChange={(value)=> this.setState({campWarehouseAddress:value.target.value})}/>
       </div>
       <div class="form-group ">          
         <input type="text" class="form-control"  placeholder="City" value={this.state.campWarehouseCity} onChange={(value)=> this.setState({campWarehouseCity:value.target.value})}/>
       </div>
       <div class="form-group ">          
         <input type="text" class="form-control"  placeholder="State" value={this.state.campWarehouseState} onChange={(value)=> this.setState({campWarehouseState:value.target.value})}/>
       </div>
       <div class="form-group ">          
        <input type="number" class="form-control" placeholder="Zip" value={this.state.campWarehouseZip} onChange={(value)=> this.setState({campWarehouseZip:value.target.value})}/>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="inputPhone" placeholder="Phone" value={this.state.campWarehousePhone} onChange={(value)=> this.setState({campWarehousePhone:value.target.value})}/>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.campWarehouseEmail} onChange={(value)=> this.setState({campWarehouseEmail:value.target.value})}/>
      </div>
      <div class="form-group">
          <input type="text" class="form-control" id="inputPhone" placeholder="Contact" value={this.state.campWarehouseContact} onChange={(value)=> this.setState({campWarehouseContact:value.target.value})}/>
      </div>
      <div class="form-group">
        <input type="text" class="form-control" id="inputNotes" placeholder="Notes" value={this.state.campWarehouseNotes} onChange={(value)=> this.setState({campWarehouseNotes:value.target.value})}/>
      </div>
  </div>
     <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Update</button>
  </div>
  );
 }

 sendUpdate(){
  //  get parameter id
  let warehouseId = this.props.match.params.id;
  // url de backend
  const baseUrl = "http://localhost:3000/warehouse/update/"+warehouseId
  // parametros de datos post
  const datapost = {
    warehouseCode : this.state.campWarehouseCode, 
    warehouseName : this.state.campWarehouseName,
    warehouseAddress : this.state.campWarehouseAddress,
    warehouseCity : this.state.campWarehouseCity,
    warehouseState : this.state.campWarehouseState,
    warehouseZip : this.state.campWarehouseZip,
    warehousePhone : this.state.campWarehousePhone, 
    warehouseEmail : this.state.campWarehouseEmail,
    warehouseContact: this.state.campWarehouseContact,
    warehouseNotes : this.state.campWarehouseNotes
  }

  axios.post(baseUrl, datapost)
  .then(response => {
    if (response.data.success === true) {
      alert(response.data.message)
    }
    else {
      alert("Error")
    }
  }).catch(error => {
    alert("Error 34 "+error)
  })

 }
}


export default WarehouseEditComponent;