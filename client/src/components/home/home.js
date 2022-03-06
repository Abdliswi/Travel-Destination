import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Tours from '../tours/tours'; 
import data from '../../data/db.json';

class Home extends Component {
    render() { 
        return (
            <div>
                <Header />
                <Tours tours={data} />
                <Footer />
            </div>
        );
    }
}
export default Home;