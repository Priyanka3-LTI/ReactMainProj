import React, { Component } from 'react';
import One from '../../asset/one.png';
import Two from "../../asset/two.png";
import Three from "../../asset/three.png";
import Four from "../../asset/four.png";
import bg from "../../asset/bg.png";
import M from "materialize-css";
// import "materialize-css/dist/css/materialize.min.css";


class Home extends Component {
  componentDidMount() {
    M.Modal.init(this.Modal);
  }
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <c-theme name="scania" global="true">
        <div className="sdds-container mt-5">
          <div className='row'>
            <div className='col s12 m6'>
              <img className='responsive-img' src={bg} length="800px" width="1000px" />
            </div>

            
            <div>
              <div className="sdds-row">
                <div className="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-4">
                  <h2 className='font'>
                    <b>The future of API is here!</b>
                  </h2><br></br>
                  <h1 className='title cyan-blue-text sdds-text-blue-900'>
                    PURCHASING API
                    {/* <u>
                      <span className='teal-text text-accent-3 i-line'></span>
                    </u>{" "} */}
                  </h1>
                  <p className='para'>
                    Applications in Scania have integrations with a range of other applications/clients that need access to database.<br></br>
                    These applications interface with other applications using different techniques which are prone to error due to a variety of reasons.<br></br>
                    Purchasing API eliminates the errors caused due to these techniques as the API offers uniform way of accessing the data.<br></br>
                    The APIs are built on top of database and are exposed using WSO2.<br></br>
                    The clients can then access these APIs to get the desired data.<br></br>

                  </p>
                  {/* <h6 className='font'>
                    <b>Join Us Today</b>
                  </h6> */}
                  <p className='para'>
                    We have many such APIs.
                  </p>
                  <a
                    href='#get'
                    className='btn center white-text text-darken-4 blue accent-3 modal-trigger'
                    data-target='modal1'
                  >
                    Know About It.
                  </a>
                </div>

                <div>
                  <div
                    ref={(Modal) => {
                      this.Modal = Modal;
                    }}
                    id='modal1'
                    className='modal'
                  >
                    <div className='modal-content'>
                      <h4 className='font'>The Offer Is Coming Soon!</h4>
                      <p className='para'>
                        Thanks For You Concern, but we're under development!
                      </p>
                    </div>
                    <div className='modal-footer'>
                      <a
                        href='#close'
                        className='btn btn-header modal-close white-text blue accent-3'
                      >
                        Close
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* copy till here */}
          
          <div className='about hide-on-small-only'>
            <h2 className='col m12 m3'>
              <br></br>
              <b>KNOW ABOUT MY FEATURES.</b>
              <br></br>
              <br></br>
            </h2>
            <div className='row'>

              <div className='col s12 m3'>
                <img className='responsive-img' src={One} width='120px' />
                <h5 className='font'>Best Experience</h5>
                <p className='para'>
                 Purchasing API eliminates the errors caused due to these techniques
                 as the API offers uniform way of accessing the data.
                </p>
                <h6>
                  <b>Check up.</b>
                </h6>
              </div>
              <div className='col s12 m3'>
                <img className='responsive-img' src={Two} alt='bg' width='120px' />
                <h5 className='font'>Ability</h5>
                <p className='para'>
                 This API offers uniform way of accessing the data
                  <br /> but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
                <h6>
                  <b>Level Up.</b>
                </h6>
              </div>
              <div className='col s12 m3'>
                <img className='responsive-img' src={Three} alt='bg' width='120px' />
                <h5 className='font'>Easy Access</h5>
                <p className='para'>
                  There are many variations of passages of Lorem Ipsum available,
                  <br /> but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
                <h6>
                  <b>Rise Up.</b>
                </h6>
              </div>
              <div className='col s12 m3'>
                <img className='responsive-img' src={Four} alt='bg' width='120px' />
                <h5 className='font'>Great Experience</h5>
                <p className='para'>
                  There are many variations of passages of Lorem Ipsum available,
                  <br /> but the majority have suffered alteration in some form, bys
                  injected humour.
                </p>
                <h6>
                  <b>Cash Up.</b>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </c-theme>

    );
  }
}

export default Home;
