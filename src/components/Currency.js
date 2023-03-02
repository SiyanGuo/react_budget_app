import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { MdArrowDropDown } from 'react-icons/md';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const currencies = [
        {
            sign: '$',
            name: 'Dollar'
        },
        {
            sign: '£',
            name: 'Pound'
        },
        {
            sign: '€',
            name: 'Europe'
        },
        {
            sign: '₹',
            name: 'Rupee'
        },
    ];

    const handleBudgetChange = (e) => {
        const currencySelected = e.target.dataset.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencySelected,
        });
    }
    return (
        <div className='dropdown'>

            <button className='dropbtn alert alert-info' style={{ paddingRight: '1rem', disply:'block', backgroundColor: '#b2f3b4' }}>
                Currency ( {currency} )
                <MdArrowDropDown></MdArrowDropDown>
            </button>
            <div
                className='dropdown-content'
                style={{ width: '8rem' }}
            >
                {currencies.map((item) => {
                    return <p key={item.sign} data-value={item.sign} onClick={handleBudgetChange}> {item.sign} {item.name} </p>
                })}
            </div>

        </div>
    );
};
export default Currency;