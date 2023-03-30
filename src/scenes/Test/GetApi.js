
import React, {Component} from 'react';
// import { Player } from 'video-react';

class GetApi extends Component{
    constructor() {
        super();
        this.state = {
            data: { }
        }
    }

    componentDidMount() {
        fetch('https://apim.devtest.aws.scania.com/purchasing_dev/v1/purchase-orders?purchase_order_number=0839891')
            .then( resp => resp.json())
            .then((data)=> {
                this.setState({
                    data: data.url
                })
            })
    }

    render() {
        return(
            <div>
                playsInline
                src={ this.state.data }
            </div>
        )
    }
}

export default GetApi;