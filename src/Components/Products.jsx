import React from 'react';
import Productbox from'./Productbox';
import pimage1 from'../images/s1.png';
import pimage2 from'../images/s1.png';


function Products() {
    return(
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>HEYYY...</p>
            <div className='a-container'>
                <Productbox image={pimage1} title="Beef Burger"/>
                <Productbox image={pimage2} title="Loaded Cheese Burger"/>
                <Productbox image={pimage1} title="Chicken Burger"/>
            </div>
        </div>
    )
}

export default Products;