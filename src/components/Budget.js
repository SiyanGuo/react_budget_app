import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (value) => {
        if (value > 20000) {
            alert('You cannot set the budget value higher than 20,000');

        } else if (value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');

        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    style={{ paddingLeft: '0.5rem' }}
                    defaultValue={budget}
                    type="number"
                    min={totalExpenses}
                    max="20000"
                    step="10"
                    onBlur={(event) => handleBudgetChange(event.target.value)}
                />
            </span>
        </div>
    );
};
export default Budget;
