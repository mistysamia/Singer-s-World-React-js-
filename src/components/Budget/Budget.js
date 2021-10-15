import React from 'react';
import './Budget.css'
import SelectedSinger from '../SelectedSinger/SelectedSinger';

const Budget = (props) => {
    const singer = props.budget;
    const { name, born, birthdate, image, award, fare } = singer;
    let totalFare = 0;
    for (let i = 0; i < singer.length; i++) {
        const p = singer[i];
        totalFare += p.fare;
    }
    return (
        <div className="Budget-Field">
            <p className="Budget-headings">Selected Singers</p>
            <hr></hr>
            <p className="tot-Singers">No of Singers: {props.budget.length}</p>
            <p className="tot-Fare">Total Fare: $ {totalFare}</p>
            {
                singer.map(eachSinger => <SelectedSinger singer={eachSinger}></SelectedSinger>)
            }
        </div>
    );
};

export default Budget;