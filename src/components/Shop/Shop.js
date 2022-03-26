import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ProductPicker from '../ProductPicker/ProductPicker';
import './Shop.css';
const Shop = () => {
    const [laptops, setLaptops] = useState([]);
    const [picked, setPicked] = useState([]);
    useEffect(()=>{
        fetch('laptops.json')
        .then(response=>response.json())
        .then(data=>setLaptops(data))
    }, []);

    // add to cart handler
    const selectLaptop = (laptop) =>{
        const{id} = laptop;
        const exist = picked.find(p => p.id === id);

        if(picked.length<=3){
            if(!exist){
                const selectedCart = [...picked, laptop];
                setPicked(selectedCart);
            }
        }
       
    }

    // delete item
    const deleteItem = (product) =>{
        const filter = picked.filter(p => p.id !== product.id);
        setPicked(filter);
    }

    // Chose One 
    const [finalSelect, setFinalSelect] = useState({});
    const choseOne = () =>{
        if(picked.length>0){
            const randomNumber = Math.floor(Math.random() * picked.length);
            const data = picked[randomNumber];
            setFinalSelect(data);
        }     
    }



    // chose again handler
    const choseAgain = () => {
        const removeAll = [];
        const objValidation = Object.keys(finalSelect).length === 0;
        if(picked.length>0){
            setPicked(removeAll);
        }
        if(!objValidation){
            setFinalSelect({});
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
                        <ProductPicker pickedLaptops={picked} choseOne={choseOne} choseAgain={choseAgain} deleteItem={deleteItem} final={choseOne} finalSelect={finalSelect}></ProductPicker>
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;