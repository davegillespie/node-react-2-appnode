import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

class carrierFormComponent extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      campCarrierCode: "",
      campCarrierName: "",
      campCarrierAddress: "",
      campCarrierCity: "",
      campCarrierState: "",
      campCarrierZip: "",
      campCarrierContact: "",
      campCarrierPhone: "",
      campCarrierEmail: "",
      campCarrierNotes: "",
      campCarrierW2: "",
      campCarrierInsurance: "",
      campCarrierAuthority: ""
    
    }
  }

 render(){
  // let userId = 0;
  // let userId = this.props.match.params.employeeId;
   return (
      <div class="container px-4">
      <h4>Carrier Details:</h4>
      <div class="form-row">
         <div class="form-group ">          
           <input type="text" class="form-control"  placeholder="Carrier Code" value={this.state.campCarrierCode} onChange={(value)=> this.setState({campCarrierCode:value.target.value})}/>
         </div>
         <div class="form-group ">          
           <input type="text" class="form-control"  placeholder="Carrier Name" value={this.state.campCarrierName} onChange={(value)=> this.setState({campCarrierName:value.target.value})}/>
         </div>
         <div class="form-group ">          
           <input type="text" class="form-control"  placeholder="Carrier Address" value={this.state.campCarrierAddress} onChange={(value)=> this.setState({campCarrierAddress:value.target.value})}/>
         </div>
         <div class="form-group ">          
           <input type="text" class="form-control"  placeholder="City" value={this.state.campCarrierCity} onChange={(value)=> this.setState({campCarrierCity:value.target.value})}/>
         </div>
         <div class="form-group ">          
           <input type="text" class="form-control"  placeholder="State" value={this.state.campCarrierState} onChange={(value)=> this.setState({campCarrierState:value.target.value})}/>
         </div>
         <div class="form-group ">          
          <input type="number" class="form-control" placeholder="Zip" value={this.state.campCarrierZip} onChange={(value)=> this.setState({campCarrierZip:value.target.value})}/>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="inputPhone" placeholder="Contact" value={this.state.campCarrierContact} onChange={(value)=> this.setState({campCarrierContact:value.target.value})}/>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="inputPhone" placeholder="Phone" value={this.state.campCarrierPhone} onChange={(value)=> this.setState({campCarrierPhone:value.target.value})}/>
        </div>
        <div class="form-group">
          <input type="email" class="form-control" id="inputEmail" placeholder="Email" value={this.state.campCarrierEmail} onChange={(value)=> this.setState({campCarrierEmail:value.target.value})}/>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" id="inputNotes" placeholder="Notes" value={this.state.campCarrierNotes} onChange={(value)=> this.setState({campCarrierNotes:value.target.value})}/>
        </div>
        <div class="form-group pr-4">
          <input type="text" class="form-control" id="inputW2" placeholder="W2" value={this.state.campCarrierW2} onChange={(value)=> this.setState({campCarrierW2:value.target.value})}/>
        </div>
        <div class="form-group pr-4">
          <input type="text" class="form-control" id="inputInsurance" placeholder="Insurance" value={this.state.campCarrierInsurance} onChange={(value)=> this.setState({campCarrierInsurance:value.target.value})}/>
        </div>
        <div class="form-group pr-4">
          <input type="text" class="form-control" id="inputAuthority" placeholder="Authority" value={this.state.campCarrierAuthority} onChange={(value)=> this.setState({campCarrierAuthority:value.target.value})}/>
        </div>
    </div>
       <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
    </div>
    
   );
 }

    sendSave(){

      if (this.state.campCarrierCode=="") {
        alert("Enter Carrier Code")
      }
      else if (this.state.campCarrierName=="") {
        alert("Enter Carrier Name")
      }
      else if (this.state.campCarrierAddress=="") {
        alert("Enter Carrier Address")
      }
      else if (this.state.campCarrierCity=="") {
        alert("Enter Carrier City")
      }
      else if (this.state.campCarrierState=="") {
        alert("Enter Carrier State")
      }
      else if (this.state.campCarrierZip=="") {   // this was added
        alert("Enter Carrier Zip")
      }
      else if (this.state.campCarrierContact=="") {   // this was added
        alert("Enter Carrier Contact")
      }
      else if (this.state.campCarrierPhone=="") {   // this was added
        alert("Enter Carrier Phone")
      }
      else if (this.state.campCarrierEmail=="") {
        alert("Enter Carrier Email")
      } 
    //   else if (this.state.campCarrierNotes=="") {
    //     alert("Enter Carrier Notes")
    //   }
    //   else if (this.state.campCarrierW2=="") {
    //     alert("Carrier does not have W2?")
    //   }
    //   else if (this.state.campCarrierInsurance=="") {
    //     alert("Carrier does not have Insurance?")
    //   }
    //   else if (this.state.campCarrierAuthority=="") {   // this was added
    //     alert("Carrier does not have Authority?")
    //   }
      else {

        const baseUrl = "http://localhost:3000/carrier/create"

        const datapost = {
          carrierCode : this.state.campCarrierCode, 
          carrierName : this.state.campCarrierName,
          carrierAddress : this.state.campCarrierAddress,
          carrierCity : this.state.campCarrierCity,
          carrierState : this.state.campCarrierState,
          carrierZip : this.state.campCarrierZip,
          carrierContact : this.state.campCarrierContact,
          carrierPhone : this.state.campCarrierPhone, 
          carrierEmail : this.state.campCarrierEmail,
          carrierNotes : this.state.campCarrierNotes,
          carrierW2 : this.state.campCarrierW2,
          carrierInsurance : this.state.campCarrierInsurance,
          carrierAuthority : this.state.campCarrierAuthority
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


export default carrierFormComponent;