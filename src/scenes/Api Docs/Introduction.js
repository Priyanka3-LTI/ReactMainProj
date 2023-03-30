import React, { Component } from 'react';
import Api from '../../asset/api.png';
import { defineCustomElements, addTheme } from '@scania/components';
import { theme as scania } from '@scania/theme-light';
import '../../index.scss'; 



class Introduction extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (

<c-theme name="scania" global="true">
            <div className="sdds-container">
                <div className="sdds-row">
                    <div className="sdds-col-xxlg-16 sdds-col-xlg-16 sdds-col-lg-16 sdds-col-md-8 sdds-col-sm-4">
                        <article class="md-content__inner md-typeset">

                            <h2 id="/introduction" target="_self">INTRODUCTION</h2>
                            <p>Purchasing Api is an api which acts as an interface between all the purchasing orders and the whole application.
                             It lets you execute orders in real time, manage user portfolios, and more.</p>
                             <h3>Information Flow</h3>
                            <p><img alt="Purchasing Api" src={Api} length="360px" width="380px" /></p>
                            <p>All inputs are form-encoded parameters and responses are JSON. Standard HTTP codes are used to indicate success and error states with accompanying JSON data. The API endpoints are <em>not</em> cross site request enabled, hence cannot be called directly from browsers.</p>
                            <p>An <code>api_key</code> + <code>api_secret</code> pair is issued and you have to register a redirect url where a user is sent after the login flow. For mobile and desktop applications, there has to be a remote backend which does the handshake on behalf of the mobile app and the <code>api_secret</code> should never be embedded in the app.</p>

                            <h3 id="version-and-api-endpoint">API endpoint</h3>
                            <p>
                            There are many variations of passages of Lorem Ipsum available,
                            but the majority have suffered alteration in some form, by
                            injected humour.. All requests go to it by default. It is recommended that a specific version be requested explicity for production applications as major releases may break older implementations.</p>
                            <h3>Root API endpoint</h3>
                            <p><strong><code>https://api.integration.devtest.aws.scania.com</code></strong></p>
                            <br></br>

                        </article>

                    </div>
                </div>
                {/* <footer class="md-footer">


                    <a id="/response" title="Response structure" class="md-flex md-footer-nav__link md-footer-nav__link--next" rel="next">
                        <div align='right'>
                            <span class="md-flex__ellipsis">
                                <span class="md-footer-nav__direction">

                                </span>
                                <h5> <b> Response structure</b> </h5>
                            </span>
                        </div>


                    </a>



                </footer> */}
            </div>
            </c-theme>


        );
    }
}

export default Introduction;
