import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ProductPicker from '../ProductPicker/ProductPicker';
import './Shop.css';
const Shop = () => {
    const [laptops, setLaptops] = useState([]);
    const [picked, setPicked] = useState([]);
    // console.log(picked);
    useEffect(()=>{
        fetch('laptops.json')
        .then(response=>response.json())
        .then(data=>setLaptops(data))
    }, []);

    // add to cart handler
    const selectLaptop = (laptop) =>{
        const{id} = laptop;
        console.log(id);
        const exist = picked.find(p => p.id === id);

        if(!exist){
            const selectedCart = [...picked, laptop];
            setPicked(selectedCart);

        }
       
    }

    // chose again handler
    const choseAgain = () => {
        const removeAll = [];
        if(picked.length>0){
            setPicked(removeAll);
        }
    }

    return (
        <div>
            <div className="shop-container">
                <div className="product-area">
                    {
                        laptops.map(laptop=><Product key={laptop.id} laptop={laptop} slectBtn={selectLaptop}></Product>)
                    }
                </div>
                <div className="picker-area">
                    {
                        <ProductPicker pickedLaptops={picked} choseAgain={choseAgain}></ProductPicker>
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;