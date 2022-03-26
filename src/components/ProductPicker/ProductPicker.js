import React from 'react';
import AddedItem from '../AddedItem/AddedItem';
import './ProductPicker.css';
const ProductPicker = ({pickedLaptops, choseAgain, deleteItem, choseOne, finalSelect}) => {

    let {name, image, price} = finalSelect;
    
    return (
        <div className='pd-picker-area'>          
            <h3>Selected Laptop</h3>
            {
                pickedLaptops.map(laptop=><AddedItem deleteItem={deleteItem} selected={laptop} key={laptop.id}></AddedItem>)
            }
            <div className="chose-btn">
                <button onClick={choseOne} className='chose chose-one'>Choose One</button>
                <button onClick={choseAgain} className='chose chose-again'>Choose Again</button>
            </div>
            {/* <FinalOne winner={winner}></FinalOne> */}
            <div>
                <h3>Final Selected Item:</h3>
                <div className='final-election'>
                    <div>
                        <img src={image} alt="" />
                    </div>
                    <h4>{name? name.slice(0,35)+'...' :''}</h4>
                    <p>{price? '$' + price : ''}</p>
                </div>
            </div>
        </div>
    );
};

// const FinalOne = () => {
//     return(
//         <div>
//             <h2>Selected Product Is:</h2>
//         </div>
//     );
// }


export default ProductPicker;