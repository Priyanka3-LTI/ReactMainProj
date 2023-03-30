import React, { Component } from 'react';

import Flow from '../../asset/flow.png';

import { theme as scania } from '@scania/theme-light';


class Response extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <c-theme name="scania" global="true">
                <div class="sdds-container">
                    <div class="sdds-row">
                        <div class="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-8 sdds-col-md-8 sdds-col-sm-4">




                            <h2 id="response">RESPONSE STRUCTURE</h2>
                            <p>All api request parameters go as query parameters, and POST and PUT parameters as form-encoded parameters, responses from the API are always JSON.</p>
                            <h3 id="successful-request">Entity</h3>
                            <div class="codehilite">
                                <p className="sdds-body-01 sdds-text-blue-700"> Purchase Order</p>
                            </div>
                            <h3>Purchasing Information Flow</h3>
                            <p><img alt="Purchasing Api" src={Flow} length="360px" width="380px" /></p>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Output Attribute Name</th>
                                        <th>Output Attribute Path</th>
                                        <th>Discription</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td><a href="#placing-orders">/purchaseOrders?purchaseOrderNumber=purchaseOrderNumber</a></td>
                                        <td>Gets the matching purchase order for the given purchase order number</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><a href="#modifying-orders">/purchaseOrders?purchaseRequisitionNumber</a></td>
                                        <td>Gets those purchase orders which have atleast one purchase order line with the given purchase requisition number</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><a href="#cancelling-orders">/purchaseOrders?sourceRequisitionNumber=sourceRequisitionNumber</a></td>
                                        <td>Gets those purchase orders which have atleast one purchase order line with the given source requisition number</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><a href="#retrieving-orders">/purchaseOrders?startAttestDate=startAttestDate & endAttestDate=endAttestDate</a></td>
                                        <td>Gets those purchase orders which have their attest date between the given start and end dates. Start and End dates are included</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><a href="#retrieving-an-orders-history">/purchaseOrders?startAttestDate= startAttestDate & endAttestDate= endAttestDate & orderType=orderType</a></td>
                                        <td>Gets those purchase orders which have their attest date between the given start and end dates and is of the given order type. Start and End dates are included</td>
                                    </tr>

                                </tbody>
                            </table>
                            <h3>Response Attribute</h3>
                            <div class="md-typeset__table"><table>
                                <thead>
                                    <tr>
                                        <th>attribute</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><code>purchase_order_id</code><span>string</span></td>
                                        <td>PurchaseOrder[]</td>
                                    </tr>
                                </tbody>
                            </table></div>


                        </div>
                    </div>

                </div>
            </c-theme>

        );
    }
}

export default Response;
