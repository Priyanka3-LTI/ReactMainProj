import React, { Component } from 'react';
import GetApi from "../Test/GetApi";
import ReactDOM from 'react-dom';
import './test.scss';


class Test extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <div id = 'test-api'></div>
      <div>
        <div class="method-summary"></div>
        <h4><a>COMMODITY GROUPS</a></h4>
        <h5>List Of APIs</h5>
        <ul>
        <li><a href="#GetAllCommodityGroupV1"><code>1. Get All Commodity Groups(Version1)</code></a></li>
          <li><a href="#GetAllCommodityGroupV2"><code>2. Get All Commodity Groups(Version2)</code></a></li>
          <li><a href="#GetCommodityGroupByCodeV1"><code>3. Get Commodity Group By Code(Version1)</code></a></li>
          <li><a href="#GetCommodityGroupByCodeV2"><code>4. Get Commodity Group By Code(Version2)</code></a></li>
          
        </ul><br />
        {/* <h4><a>PURCHASE ORDER</a></h4>
        <h5>List Of APIs</h5>
        <ul>
          <li><a href="#findOrdersByOrderNumber"><code>1. By Purchase Order Number</code></a></li>
          <li><a href="#findOrdersByReqNumber"><code>2. By Purchase Requisition Number</code></a></li>
          <li><a href="#findOrdersBySouceReqNumber"><code>3. By Source Requisition Number</code></a></li>
          <li><a href="#findOrdersBySADateandEADate"><code>4. By Start_Attest_Date and End_Attest_Date</code></a></li>
          <li><a href="#findOrdersBySADateandEADateandOType"><code>5. By Start Attest Date and End Attest Date and Order Type</code></a></li>
        </ul><br /> */}

        {/* Details about all api */}
        <h4><a name="Commodity Group"> Get All Commodity Groups(Version1)</a></h4>
        <div class="method"><a name="GetAllCommodityGroupV1"></a>
          <div class="method-path">
            <div><b>Description: Gets All the Commodity Group</b></div>
            <a class="up" href="#__Methods"></a>
            <code className="huge"><b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing/dev/commodity-groups/{'{'}version{'}'}</code>
          </div>
          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header">
              <div class="tab-header">
              <h5>Click the button to test the API</h5></div>
              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/t3.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets All the commodity group for the given Commodity Group for version1</div>
                      <div>Commodity Group[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <br></br>

        <h4><a name="Commodity Group"> Get All Commodity Group(Version2)</a></h4>
        <div class="method"><a name="GetAllCommodityGroupV2"></a>
          <div class="method-path">
            <div><b>Description: Gets All the Commodity Group for the given Commodity Group of version2</b></div>
            <a class="up" href="#__Methods"></a>
            <code className="huge"><b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing/dev/commodity-groups/{'{'}version{'}'}</code>
          </div>
          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header">
              <div class="tab-header">
              <h5>Click the button to test the API</h5></div>
              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/t4.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets All the Commodity Group for the given Commodity Group of version2</div>
                      <div>Commodity Group[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <br></br>

        <h4><a name="Commodity Group"> Get Commodity Group By Code(v1)</a></h4>
        <div class="method"><a name="GetCommodityGroupByCodeV1"></a>
          <div class="method-path">
            <div><b>Description: Gets the matching Commodity Group for the given Commodity Group By Code</b></div>
            <a class="up" href="#__Methods"></a>
            <code className="huge"><b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing/dev/commodity-groups/getCommodityGroupByCode/{'{'}version{'}'}</code>
          </div>
          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header">
              <div class="tab-header">
              <h5>Click the button to test the API</h5></div>
              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/t1.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets the matching commodity group for the given Commodity Group By Code</div>
                      <div>Commodity Group[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <br></br>

        <h4><a name="Commodity Group"> Get Commodity Group By Code(v2)</a></h4>
        <div class="method"><a name="GetCommodityGroupByCodeV2"></a>
          <div class="method-path">
            <div><b>Description: Gets the matching Commodity Group for the given Commodity Group By Code of Version2</b></div>
            <a class="up" href="#__Methods"></a>
            <code className="huge"><b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing/dev/commodity-groups/getCommodityGroupByCode/{'{'}version{'}'}</code>
          </div>
          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header">
              <div class="tab-header">
              <h5>Click the button to test the API</h5></div>
              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/test5.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets the matching commodity group for the given Commodity Group By Code of version2</div>
                      <div>Commodity Group[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <br></br>


        

        {/* <h4><a name="Purchase Order"> By Purchase Order Number</a></h4>
        <div class="method"><a name="findOrdersByOrderNumber"></a>
          <div class="method-path">
            <div><b>Description: Gets the matching purchase order for the given purchase order number</b></div>
            <a class="up" href="#__Methods"></a>
            <code className="huge"><b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing_dev/v1/purchase-orders?purchase_order_number={'{'}purchase_order_number{'}'}</code>
          </div>


          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header">
              <div class="tab-header">
              <h5>Click the button to test the API</h5></div>
              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/test.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets the matching purchase order for the given purchase order number</div>
                      <div>Purchase Order[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
        <br></br>

        <h4><a name="Purchase Order"> By Purchase Requisition Number</a></h4>
        <div class="method"><a name="findOrdersByReqNumber"></a>
          <div class="method-path">
            <div><b>Description: Gets those purchase orders which have atleast one purchase order line with the given purchase requisition number</b></div>
            <a class="up" href="#__Methods"></a>
            <code className="huge"><b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing_dev/v1/purchase-orders?purchase_requisition_number={'{'}purchase_requisition_number{'}'}</code>
          </div>


          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header"><div class="tab-header">
              <h5>Click the button to test the API</h5></div>
              <button type="button" className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/index..html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets those purchase orders which have atleast one purchase order line with the given purchase requisition number
                    </div>
                      <div>Purchase Order[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>

            </div>
          </div>
          </div>
        </div>
        <br></br>

        <h4><a name="Purchase Order"> By Source Requisition Number</a></h4>
        <div class="method"><a name="findOrdersBySouceReqNumber"></a>
          <div class="method-path">
            <div><b>Description: Gets those purchase orders which have atleast one purchase order line with the given source requisition number</b></div>
            <a class="up" href="#__Methods"></a>
            <code className="huge"><b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing_dev/v1/purchase-orders?source_requisition_number={'{'}source_requisition_number{'}'}</code>

          </div>


          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header"><div class="tab-header">
              <h5>Click the button to test the API</h5></div>

              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/test3.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets those purchase orders which have atleast one purchase order line with the given source requisition number</div>
                      <div>Purchase Order[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table></div></div></div>


            </div></div>
          </div>
        </div>
        <br></br> */}

        {/* <h4><a name="Purchase Order"> By Start_Attest_Date and End_Attest_Date</a></h4>
        <div class="method"><a name="findOrdersBySADateandEADate"></a>
          <div class="method-path">
            <div><b>Description: Gets those purchase orders which have their attest date between the given start and end dates. Start and End dates are included</b></div>

            <code className="huge">
              <b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing_dev/v1/purchase-orders?start_attest_date={'{'}start_attest_date{'}'}&amp;end_attest_date={'{'}end_attest_date{'}'}</code>
          </div>
          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header"><div class="tab-header">
              <h5>Click the button to test the API</h5></div>

              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/test4.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets those purchase orders which have their attest date between the given start and end dates. Start and End dates are included</div>
                      <div>Purchase Order[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table></div></div></div>


            </div></div>
          </div>
        </div>
        <br></br>


        <h4><a name="Purchase Order"> By Start Attest Date and End Attest Date and Order Type</a></h4>
        <div class="method"><a name="findOrdersBySADateandEADateandOType"></a>
          <div class="method-path">
            <div><b>Description: Gets those purchase orders which have their attest date between the given start and end dates and is of the given order type. Start and End dates are included</b></div>

            <code classname="huge">
  <b>Request URL: </b>https://apim.devtest.aws.scania.com/purchasing_dev/v1/purchase-orders?start_attest_date={'{'}start_attest_date{'}'}&amp;end_attest_date={'{'}end_attest_date{'}'}&amp;order_type={'{'}order_type{'}'}</code>

          </div>
          <div class="no-margin"><div class="opblock-body">
            <div class="opblock-section"><div class="opblock-section-header"><div class="tab-header">
              <h5>Click the button to test the API</h5></div>

              <button className='btn center white-text text-darken-4 blue accent-3 modal-trigger'>
                <a href="http://127.0.0.1:5500/src/scenes/Test/test5.html">Try Me</a></button>
              <div class="parameters-container"><div class="table-container">
                <table class="parameters"><thead><tr><th class="col_header parameters-col_name">Name</th>
                  <th class="col_header parameters-col_description">Description</th></tr></thead>
                  <tbody><tr data-param-name="body" data-param-in="body">
                    <td class="parameters-col_name">
                      <div >Request Body</div>
                      <div >Details</div>
                      <div >Output</div>
                      <div >HTTP Method</div></td>
                    <td class="parameters-col_description">
                      <div>NA</div>
                      <div>Gets those purchase orders which have their attest date between the given start and end dates and is of the given order type. Start and End dates are included</div>
                      <div>Purchase Order[]</div>
                      <div>GET</div>
                    </td>
                  </tr>
                  </tbody>
                </table></div></div></div>


            </div></div>
          </div>
        </div>
        <br></br> */}























      </div>

    );
  }
}
//ReactDOM.render(<p>Hello</p>,document.getElementById('test-api'));
export default Test;
