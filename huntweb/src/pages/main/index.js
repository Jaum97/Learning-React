import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        products: []
    };
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products');

        //console.table(response.data.docs);
        this.setState({ products: response.data.docs });
    };

    render() {
        const {products} = this.state;
        return (
            <div className="product-list">
                {this.state.products.map(products => (
                    <article key={products._id}>
                    <strong>{products.title}</strong>
                    <p>{products.description}</p>
                    <a href="">access</a>
                    </article>
                ))}
            </div>
        );
    }
}