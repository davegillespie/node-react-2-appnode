import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Form from '../module/form';
import List from '../module/list';
import Edit from '../module/edit';
import CarrierEdit from '../module/carrierEdit';
import CarrierForm from '../module/carrierForm';
import WarehouseEdit from '../module/warehouseEdit';
import WarehouseForm from '../module/warehouseForm';

import ShipmentList from '../module/shipmentList';
import DispatchList from '../module/dispatchList';
import CarrierList from '../module/carrierList';
import WarehouseList from '../module/warehouseList';
import Sidebar from './Sidebar';


class Dashboard extends React.Component {
  render() {
  return (
      <Fragment>
        <Router >
          <Sidebar />
          <Switch>
            <Route path="/list" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/carrier-edit/:id" component={CarrierEdit} />
            <Route path="/carrier-form" component={CarrierForm} />
            <Route path="/warehouse-edit/:id" component={WarehouseEdit} />
            <Route path="/warehouse-form" component={WarehouseForm} />
            <Route path="/shipment-list" component={ShipmentList} />
            <Route path="/dispatch-list" component={DispatchList} />
            <Route path="/carrier-list" component={CarrierList} />
            <Route path="/warehouse-list" component={WarehouseList} />
            <Route exact path="*" component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default Dashboard;