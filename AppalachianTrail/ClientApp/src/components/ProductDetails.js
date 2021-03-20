import React, { Component } from 'react';

export default class ProductDetails extends Component {

    constructor(props) {
        super(props);

        this.state = { name: 'Some interesting product', description: 'this is the product', price: 130 };
    }

    render() {
        return <div className="row">
            <div className="col-12">
                <div className="media">
                    <img src="https://via.placeholder.com/600" className="mr-3" alt="Product" />
                    <div className="media-body">
                        <h1>{this.state.name}</h1>
                        <p>{this.state.description}!!!!</p>
                        <p>£{this.state.price}</p>
                    </div>
                </div>
            </div>
        </div>
    }

}
