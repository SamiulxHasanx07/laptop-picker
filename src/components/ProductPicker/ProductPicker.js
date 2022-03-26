import React from 'react';
import AddedItem from './AddedItem';
import './ProductPicker.css';

const ProductPicker = ({pickedLaptops, choseAgain}) => {

    return (
        <div className='pd-picker-area'>          
            <h3>Selected Laptop</h3>
            {
                pickedLaptops.map(laptop=><AddedItem selected={laptop} key={laptop.id}></AddedItem>)
            }
            <div className="chose-btn">
                <button className='chose chose-one'>Chose One</button>
                <button onClick={choseAgain} className='chose chose-again'>Chose Again</button>
            </div>
        </div>
    );
};

export default ProductPicker;