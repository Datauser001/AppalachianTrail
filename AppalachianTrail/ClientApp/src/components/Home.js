import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

constructor(props) {
    super(props);
    this.state = { products: [{ title: "Some Product1", description: "interesting1" }, {title: "Another Product", description: "Another Desc"}]};
}

  render () {
    return (
        <div className="row">
        {this.state.products.map(product => 
            <div className="col-4">
                <div className="card product-card">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                </div>
            </div>
    )}
        </div>

        );
    }
}
