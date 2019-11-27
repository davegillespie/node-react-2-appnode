import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class FormComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      campPickupFacility: "",
      campPickupAddress: "",
      campPickupCity: "",
      campPickupState: "",
      campPickupZip: "",
      campPickupPhone: "",
      campPickupEmail: "",

      campPickupDate: "",
      campDeliveryDate: "",
      campPoNumber: "",
      campQuantity: "",
      selectFreightType: 0,
      campWeight: "",
      selectLoadSize: 0,
      campTemperature: "",

      campDeliveryFacility: "",
      campDeliveryAddress: "",
      campDeliveryCity: "",
      campDeliveryState: "",
      campDeliveryZip: "",
      campDeliveryPhone: "",
      campDeliveryEmail: ""
    }
  }

 render(){
  // let userId = 0;
  // let userId = this.props.match.params.employeeId;
   return (
      <div>
      <h4>Pickup Details:</h4>
       <div class="form-row">
         <div class="form-group ">
           <label for="inputPickupFacility4"> Pickup Facility </label>
           <input type="text" class="form-control"  placeholder="Pickup Facility" value={this.state.campPickupFacility} onChange={(value)=> this.setState({campPickupFacility:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputPickupAddress4"> Pickup Address </label>
           <input type="text" class="form-control"  placeholder="Pickup Address" value={this.state.campPickupAddress} onChange={(value)=> this.setState({campPickupAddress:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputPickupCity4"> Pickup City </label>
           <input type="text" class="form-control"  placeholder="City" value={this.state.campPickupCity} onChange={(value)=> this.setState({campPickupCity:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputPickupState4"> Pickup State </label>
           <input type="text" class="form-control"  placeholder="State" value={this.state.campPickupState} onChange={(value)=> this.setState({campPickupState:value.target.value})}/>
         </div>
         <div class="form-group ">
          <label for="inputZip4">Zip</label>
          <input type="number" class="form-control" placeholder="Zip" value={this.state.campPickupZip} onChange={(value)=> this.setState({campPickupZip:value.target.value})}/>
        </div>
       </div>

       <div class="form-row">
        <div class="form-group">
          <label for="inputPhone">Phone</label>
          <input type="text" class="form-control" id="inputPhone" placeholder="123-456-7890" value={this.state.campPickupPhone} onChange={(value)=> this.setState({campPickupPhone:value.target.value})}/>
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.campPickupEmail} onChange={(value)=> this.setState({campPickupEmail:value.target.value})}/>
        </div>
       </div>
       <br/>
       <br/>
      <h4>Order Details:</h4>
       <div class="form-row">
         <div class="form-group ">
           <label for="inputPickupDate4"> Pickup Date </label>
           <input type="date" class="form-control"  placeholder="Pickup Date" value={this.state.campPickupDate} onChange={(value)=> this.setState({campPickupDate:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputDeliveryDate"> Delivery Date </label>
           <input type="date" class="form-control"  placeholder="Delivery Date" value={this.state.campDeliveryDate} onChange={(value)=> this.setState({campDeliveryDate:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputPoNumber4"> PO# </label>
           <input type="text" class="form-control"  placeholder="PO#" value={this.state.campPoNumber} onChange={(value)=> this.setState({campPoNumber:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputQuantity4"> Quantity </label>
           <input type="number" class="form-control"  placeholder="Quantity" value={this.state.campQuantity} onChange={(value)=> this.setState({campQuantity:value.target.value})}/>
         </div>
        <div class="form-group ">
           <label for="inputFreightType">Freight Type</label>
           <select id="inputFreightType" class="form-control" onChange={(value)=> this.setState({selectFreightType:value.target.value})}>
             <option selected>Choose...</option>
             {/* <option selected value={this.state.dataEmployee.roleId}>{this.state.stringRole}</option> */}
             <option value="1">Cases</option>
             <option value="2">Pallets</option>
             <option value="3">MODs</option>
           </select>
         </div>
         <div class="form-group ">
          <label for="inputWeight4">Weight</label>
          <input type="number" class="form-control" placeholder="Weight" value={this.state.campWeight} onChange={(value)=> this.setState({campWeight:value.target.value})}/>
        </div>
         <div class="form-group ">
           <label for="inputLoadSize">Load Size</label>
           <select id="inputLoadSize" class="form-control" onChange={(value)=> this.setState({selectLoadSize:value.target.value})}>
             <option selected>Choose...</option>
             {/* <option selected value={this.state.dataEmployee.roleId}>{this.state.stringRole}</option> */}
             <option value="1">FTL</option>
             <option value="2">LTL</option>
             <option value="3">Partial</option>
           </select>
         </div>
         <div class="form-group ">
          <label for="inputTemperature4">Temperature</label>
          <input type="number" class="form-control" placeholder="Temperature" value={this.state.campTemperature} onChange={(value)=> this.setState({campTemperature:value.target.value})}/>
        </div>
       </div>
        <br/>
        <br/>

       <h4>Delivery Details:</h4>
       <div class="form-row ">
         <div class="form-group ">
           <label for="inputDeliveryFacility4"> Delivery Facility </label>
           <input type="text" class="form-control"  placeholder="Delivery Facility" value={this.state.campDeliveryFacility} onChange={(value)=> this.setState({campDeliveryFacility:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputDeliveryAddress4"> Delivery Address </label>
           <input type="text" class="form-control"  placeholder="Delivery Address" value={this.state.campDeliveryAddress} onChange={(value)=> this.setState({campDeliveryAddress:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputDeliveryCity4"> Delivery City </label>
           <input type="text" class="form-control"  placeholder="City" value={this.state.campDeliveryCity} onChange={(value)=> this.setState({campDeliveryCity:value.target.value})}/>
         </div>
         <div class="form-group ">
           <label for="inputDeliveryState4"> Delivery State </label>
           <input type="text" class="form-control"  placeholder="State" value={this.state.campDeliveryState} onChange={(value)=> this.setState({campDeliveryState:value.target.value})}/>
         </div>
         <div class="form-group ">
          <label for="inputZip4">Zip</label>
          <input type="number" class="form-control" placeholder="Zip" value={this.state.campDeliveryZip} onChange={(value)=> this.setState({campDeliveryZip:value.target.value})}/>
        </div>
       </div>
       <div class="form-row">
        <div class="form-group">
          <label for="inputPhone">Phone</label>
          <input type="text" class="form-control" id="inputPhone" placeholder="123-456-7890" value={this.state.campDeliveryPhone} onChange={(value)=> this.setState({campDeliveryPhone:value.target.value})}/>
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.campDeliveryEmail} onChange={(value)=> this.setState({campDeliveryEmail:value.target.value})}/>
        </div>
       </div>

       <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
    </div>
    
   );
 }

    sendSave(){

      if (this.state.campPickupFacility=="") {
        alert("Enter Pickup Facility")
      }
      else if (this.state.campPickupAddress=="") {
        alert("Enter Pickup Address")
      }
      else if (this.state.campPickupCity=="") {
        alert("Enter Pickup City")
      }
      else if (this.state.campPickupState=="") {
        alert("Enter Pickup State")
      }
      else if (this.state.campPickupZip=="") {   // this was added
        alert("Enter Pickup Zip")
      }
      else if (this.state.campPickupPhone=="") {   // this was added
        alert("Enter Pickup Phone")
      }
      else if (this.state.campPickupEmail=="") {
        alert("Enter Pickup Email")
      }
      
      
      else if (this.state.campPickupDate=="") {
        alert("Enter Pickup Date")
      }
      else if (this.state.campDeliveryDate=="") {
        alert("Enter Delivery Date")
      }
      else if (this.state.campPoNumber=="") {
        alert("Enter PO#")
      }
      else if (this.state.campQuantity=="") {   // this was added
        alert("Enter Order Quantity")
      }
      else if (this.state.selectFreightType=="") {   // this was added
        alert("Select Freight Type")
      }
      else if (this.state.campWeight=="") {
        alert("Enter Order Weight")
      }
      else if (this.state.selectLoadSize=="") {
        alert("Select Load Size")
      }
      else if (this.state.campTemperature=="") {
        alert("Enter Freight Temperature")
      }
      
      else if (this.state.campDeliveryFacility=="") {
        alert("Enter Delivery Facility")
      }
      else if (this.state.campDeliveryAddress=="") {
        alert("Enter Delivery Address")
      }
      else if (this.state.campDeliveryCity=="") {
        alert("Enter Delivery City")
      }
      else if (this.state.campDeliveryState=="") {
        alert("Enter Delivery State")
      }
      else if (this.state.campDeliveryZip=="") {   // this was added
        alert("Enter Delivery Zip")
      }
      else if (this.state.campDeliveryPhone=="") {   // this was added
        alert("Enter Delivery Phone")
      }
      else if (this.state.campDeliveryEmail=="") {
        alert("Enter Delivery Email")
      }
      else {

        const baseUrl = "http://localhost:3000/order/create"

        const datapost = {
          pickupFacility : this.state.campPickupFacility, 
          pickupAddress : this.state.campPickupAddress,
          pickupCity : this.state.campPickupCity,
          pickupState : this.state.campPickupState,
          pickupZip : this.state.campPickupZip,
          pickupPhone : this.state.campPickupPhone, 
          pickupEmail : this.state.campPickupEmail,

          pickupDate : this.state.campPickupDate,
          deliveryDate : this.state.campDeliveryDate,
          poNumber : this.state.campPoNumber,
          quantity : this.state.campQuantity, 
          freighType : this.state.campFreightType,
          weight : this.state.campWeight,
          loadSize : this.state.campLoadSize,
          temperature : this.state.campTemperature,
          
          deliveryFacility : this.state.campDeliveryFacility, 
          deliveryAddress : this.state.campDeliveryAddress,
          deliveryCity : this.state.campDeliveryCity,
          deliveryState : this.state.campDeliveryState,
          deliveryZip : this.state.campDeliveryZip,
          deliveryPhone : this.state.campDeliveryPhone, 
          deliveryEmail : this.state.campDeliveryEmail
        }

        axios.post(baseUrl, datapost)
        .then(response=>{
          if (response.data.success===true) {
            alert(response.data.message)
          }
          else {
            alert(response.data.message)
          }
        }).catch(error=>{
          alert("Error 34 "+error)
        })

      }

    }
}


export default FormComponent;