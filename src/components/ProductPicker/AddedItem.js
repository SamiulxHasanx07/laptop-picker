import React from 'react';
import './AddedItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const AddedItem = ({selected}) => {
    return (
        <div>  
             <div className="display-selected-product">
                 <div className="dsp-img">
                    <img src={selected.image} alt="" />
                 </div>
                 <h4 className='selected-title'>{selected.name.slice(0, 38)}...</h4>
                 <button className='delete-pd'><FontAwesomeIcon icon={faTrashCan}/></button>
                 
             </div>
        </div>
    );
};

export default AddedItem;