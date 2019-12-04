import React from 'react';
// import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
// import WarehouseFill from './warehouseFill'

const baseUrl = "http://localhost:3000";


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
      campDeliveryEmail: "",
      selected: "",
      selectedDelivery: "",
      listWarehouse: []
    }
  }



componentDidMount() {
  const url = baseUrl+"/warehouse/list"
  axios.get(url)
  .then(res => {
    if (res.data.success) {
      const warehouse = res.data.data;
      this.setState({    
        listWarehouse : warehouse
      })
      console.log("warehouse", warehouse);
      // console.log("res.data", res.data)
    } 
    else {
      alert("Error web service");
    }
  })
  .catch(error => {
    alert("Error server" + error);
  })
}

  // componentDidMount() {
  //   this.loadWarehouse()
  // }
  //   loadWarehouse(){
  //       const url = baseUrl+"/warehouse/list"
  //       axios.get(url)
  //       .then(res => {
  //         if (res.data.success) {
  //           const warehouse = res.data.data;
  //           this.setState({    
  //             listWarehouse : warehouse
  //           })
  //           console.log("warehouse", warehouse);
  //         } 
  //         else {
  //           alert("Error web service");
  //         }
  //       })
  //       .catch(error => {
  //         alert("Error server" + error);
  //       })
  //     }
  
    // loadFillWarehouse(){
      
    //   return this.state.listWarehouse.map((warehouse, index, arr) => {
     
    //     console.log("warehouse", warehouse);
    //     console.log("index", index);
    //     console.log("arr", arr);
        
    //     return(
    //       <Fragment>
    //         <select key={warehouse.id}>
    //         <option key={warehouse.id}>{warehouse.warehouseName}</option>
    //         </select>
    //       </Fragment>
    //     )
       
    //   })
    // }



async handleChange(event) {
  const selectedItem = event.target.value;
    this.setState({
      selected: selectedItem
    });
 
  this.state.listWarehouse.map((item, idx) => {
    console.log("item", item)
    // console.log("this.state.listWarehouse", this.state.listWarehouse)
    console.log("selectedItem", selectedItem)
    
    const index = idx + 1;
    // let check = -1
    for (var i = 0; i < this.state.listWarehouse.length; i++){
      // console.log("this.state.listWarehouse[check].warehouseAddress", this.state.listWarehouse[index].warehouseAddress)
      if (selectedItem == index) {
      this.setState({ 
        campPickupFacility: this.state.listWarehouse[idx].warehouseName,
        campPickupAddress: this.state.listWarehouse[idx].warehouseAddress,
        campPickupCity: this.state.listWarehouse[idx].warehouseCity,
        campPickupState: this.state.listWarehouse[idx].warehouseState,
        campPickupZip: this.state.listWarehouse[idx].warehouseZip,
        campPickupPhone: this.state.listWarehouse[idx].warehousePhone,
        campPickupEmail: this.state.listWarehouse[idx].warehouseEmail 
      });
      
      console.log("this.state.listWarehouse[idx].warehouseAddress", this.state.listWarehouse[idx].warehouseAddress)
      } 
      else if (selectedItem == 0) {
        this.setState({ 
          campPickupFacility: "",
          campPickupAddress: "",
          campPickupCity: "",
          campPickupState: "",
          campPickupZip: "",
          campPickupPhone: "",
          campPickupEmail: "",
        });
        return console.log('just hoping it works and doesnt forever loop')
      } 
    }  
  })
}





async handleChangeDelivery(event) {
  const selectedItem = event.target.value;
    this.setState({
      selectedDelivery: selectedItem
    });
 
  this.state.listWarehouse.map((item, idx) => {
    console.log("item", item)
    // console.log("this.state.listWarehouse", this.state.listWarehouse)
    console.log("selectedItem", selectedItem)
    
    const index = idx + 1;
    // let check = -1
    for (var i = 0; i < this.state.listWarehouse.length; i++){
      // console.log("this.state.listWarehouse[check].warehouseAddress", this.state.listWarehouse[index].warehouseAddress)
      if (selectedItem == index) {
      this.setState({ 
        campDeliveryFacility: this.state.listWarehouse[idx].warehouseName,
        campDeliveryAddress: this.state.listWarehouse[idx].warehouseAddress,
        campDeliveryCity: this.state.listWarehouse[idx].warehouseCity,
        campDeliveryState: this.state.listWarehouse[idx].warehouseState,
        campDeliveryZip: this.state.listWarehouse[idx].warehouseZip,
        campDeliveryPhone: this.state.listWarehouse[idx].warehousePhone,
        campDeliveryEmail: this.state.listWarehouse[idx].warehouseEmail 
      });
      
      console.log("this.state.listWarehouse[idx].warehouseAddress", this.state.listWarehouse[idx].warehouseAddress)
      } 
      else if (selectedItem == 0) {
        this.setState({ 
          campDeliveryFacility: "",
          campDeliveryAddress: "",
          campDeliveryCity: "",
          campDeliveryState: "",
          campDeliveryZip: "",
          campDeliveryPhone: "",
          campDeliveryEmail: "",
        });
        return console.log('just hoping it works and doesnt forever loop')
      } 
    }  
  })
}


render(){

// var filteredWarehouses = this.props.listWarehouse.filter();

  return (
    
    <div class="container px-4">

      <h4>Pickup Details:</h4>
      <div class="form-row">

          <div class="form-group">
            <input 
                list="pickup-data" 
                type="text" 
                class="form-control" 
                placeholder="Pickup Code"
                name={this.state.name} 
                value={this.state.selected} 
                // onChange={(value)=> this.setState({campPickupFacility:value.target.value})}
                onChange={this.handleChange.bind(this)}
                // onKeyDown={this.handleChange.bind(this)}
              /> 

            <datalist id="pickup-data">
                {
                  this.state.listWarehouse.map((warehouse) => {
                    // console.log(warehouse.warehouseName)
                    // console.log("warehouse", warehouse)
                    console.log("ind", warehouse)
                    // return <WarehouseFill key={i} value={warehouse.warehouseName}/>
                    return  <select>
                              <option value={warehouse.id} name={warehouse.id} >{warehouse.id}-{warehouse.warehouseCode}</option>
                            </select>
                  })
                } 
            </datalist>
            </div>

        <div class="form-group">
        <input 
            // list="pickup-data" 
            type="text" 
            class="form-control" 
            placeholder="Pickup Facility"
            // name={this.state.name} 
            value={this.state.campPickupFacility} 
            onChange={(value)=> this.setState({campPickupFacility:value.target.value})}
            // onChange={this.handleChange.bind(this)}
            // onKeyDown={this.onKeyDown}
          /> 
        </div>
      
        <div class="form-group ">          
          <input 
            ref="address" 
            // key={`${index}`}
            type="text" 
            class="form-control"  
            placeholder="Pickup Address" 
            value={this.state.campPickupAddress} 
            onChange={(value)=> this.setState({campPickupAddress:value.target.value})}
          /> 
          
          
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
        <div class="form-group ">          
          <input 
            id="input4" 
            type="text" 
            class="form-control"  
            placeholder="State" 
            value={this.state.campPickupState} 
            onChange={(value)=> this.setState({campPickupState:value.target.value})}
          />
        </div>
        <div class="form-group ">          
          <input 
            id="input5" 
            type="number" 
            class="form-control" 
            placeholder="Zip" 
            value={this.state.campPickupZip} 
            onChange={(value)=> this.setState({campPickupZip:value.target.value})}
          />
        </div>
        <div class="form-group">
          <input 
            id="input6" 
            type="text" 
            class="form-control" 
            id="inputPhone" 
            placeholder="Phone" 
            value={this.state.campPickupPhone} 
            onChange={(value)=> this.setState({campPickupPhone:value.target.value})}
          />
        </div>
        <div class="form-group">
          <input 
            id="input7" 
            type="email" 
            class="form-control" 
            id="inputEmail" 
            placeholder="Email" 
            value={this.state.campPickupEmail} 
            onChange={(value)=> this.setState({campPickupEmail:value.target.value})}
          />
        </div>
      </div>

      <br/>
      <br/>

      <h4>Order Details:</h4>
      <div class="form-row">
        <div class="form-group ">
          <input 
            type="date" 
            class="form-control"  
            placeholder="Pickup Date" 
            value={this.state.campPickupDate} 
            onChange={(value)=> this.setState({campPickupDate:value.target.value})}
          />
        </div>
        <div class="form-group ">
          <input 
            type="date" 
            class="form-control" 
            placeholder="Delivery Date" 
            value={this.state.campDeliveryDate} 
            onChange={(value)=> this.setState({campDeliveryDate:value.target.value})}
          />
        </div>
        <div class="form-group ">
          <input 
            type="text" 
            class="form-control"  
            placeholder="PO#" 
            value={this.state.campPoNumber} 
            onChange={(value)=> this.setState({campPoNumber:value.target.value})}
          />
        </div>
        <div class="form-group ">
          <input 
            type="number" 
            class="form-control" 
            placeholder="Quantity" 
            value={this.state.campQuantity} 
            onChange={(value)=> this.setState({campQuantity:value.target.value})}
          />
        </div>
        <div class="form-group ">
          <select 
            id="inputFreightType" 
            class="form-control" 
            onChange={(value)=> this.setState({selectFreightType:value.target.value})}>
              <option selected>Type</option>
             {/* <option selected value={this.state.dataEmployee.roleId}>{this.state.stringRole}</option> */}
              <option value="1">Cases</option>
              <option value="2">Pallets</option>
              <option value="3">MODs</option>
          </select>
        </div>
        <div class="form-group ">
          <input 
            type="number" 
            class="form-control" 
            placeholder="Weight" 
            value={this.state.campWeight} 
            onChange={(value)=> this.setState({campWeight:value.target.value})}
          />
        </div>

        <div class="form-group ">
          <select 
            id="inputLoadSize" 
            class="form-control" 
            onChange={(value)=> this.setState({selectLoadSize:value.target.value})}>
              <option selected>Size</option>
              {/* <option selected value={this.state.dataEmployee.roleId}>{this.state.stringRole}</option> */}
              <option value="1">FTL</option>
              <option value="2">LTL</option>
              <option value="3">Partial</option>
          </select>
        </div>
        <div class="form-group ">
          <input 
            type="number" 
            class="form-control" 
            placeholder="Temperature" 
            value={this.state.campTemperature} 
            onChange={(value)=> this.setState({campTemperature:value.target.value})}
          />
        </div>
      </div>

      <br/>
      <br/>

      <h4>Delivery Details:</h4>
      <div class="form-row ">


      <div class="form-group">
            <input 
                list="delivery-data" 
                type="text" 
                class="form-control" 
                placeholder="Delivery Code"
                value={this.state.selectedDelivery} 
                // onChange={(value)=> this.setState({campPickupFacility:value.target.value})}
                onChange={this.handleChangeDelivery.bind(this)}
                // onKeyDown={this.handleChange.bind(this)}
              /> 

            <datalist id="delivery-data">
                {
                  this.state.listWarehouse.map((warehouse) => {
                    console.log("ind", warehouse)
                    // return <WarehouseFill key={i} value={warehouse.warehouseName}/>
                    return  <select>
                              <option value={warehouse.id} name={warehouse.id} >{warehouse.id}-{warehouse.warehouseCode}</option>
                            </select>
                  })
                } 
            </datalist>
            </div>


        <div class="form-group ">
          <input 
            type="text" 
            class="form-control"  
            placeholder="Delivery Facility" 
            value={this.state.campDeliveryFacility} 
            onChange={(value)=> this.setState({campDeliveryFacility:value.target.value})}
          />
        </div>
        <div class="form-group ">
          <input 
            type="text" 
            class="form-control"  
            placeholder="Delivery Address" 
            value={this.state.campDeliveryAddress} 
            onChange={(value)=> this.setState({campDeliveryAddress:value.target.value})}
          />
        </div>
        <div class="form-group ">
          <input 
            type="text" 
            class="form-control"  
            placeholder="City" 
            value={this.state.campDeliveryCity} 
            onChange={(value)=> this.setState({campDeliveryCity:value.target.value})}
          />
        </div>

        <div class="form-group ">
          <input 
            type="text" 
            class="form-control"  
            placeholder="State" 
            value={this.state.campDeliveryState} 
            onChange={(value)=> this.setState({campDeliveryState:value.target.value})}
          />
         </div>
        <div class="form-group ">
          <input 
            type="number" 
            class="form-control" 
            placeholder="Zip" 
            value={this.state.campDeliveryZip} 
            onChange={(value)=> this.setState({campDeliveryZip:value.target.value})}
          />
        </div>
        <div class="form-group">
          <input 
            type="text" 
            class="form-control" 
            id="inputPhone" 
            placeholder="Phone" 
            value={this.state.campDeliveryPhone} 
            onChange={(value)=> this.setState({campDeliveryPhone:value.target.value})}
          />
        </div>
        <div class="form-group">
          <input 
            type="email" 
            class="form-control" 
            id="inputEmail" 
            placeholder="Email" 
            value={this.state.campDeliveryEmail} 
            onChange={(value)=> this.setState({campDeliveryEmail:value.target.value})}
          />
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