import React from 'react';

const Count = (props) => {
    const count = props.count;
    const total = count.reduce((sum,totalSalary)=> sum + totalSalary.salary,0)
    // let total = 0;
    // for(let i = 0 ;i < count.length; i++){
    //     const totalSalary = count[i];
    //     total = total + totalSalary.salary;
    // }
    return (
        <div>
            <h4>count:{count.length}</h4>
            <h4>Salary:{total}</h4>
        </div>
    );
};

export default Count;