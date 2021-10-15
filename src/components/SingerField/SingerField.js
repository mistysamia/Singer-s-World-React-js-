import React, { useState, useEffect } from 'react';
import Singer from '../Singer/Singer'
import Budget from '../Budget/Budget'
import './SingerField.css'
import singerInfo from '../../SingerData/SingerInfo.json';

const SingerField = () => {

    const [singer, setSinger] = useState([]);
    const [budget, setBudget] = useState([]);

    const handleAddSinger = (Singer) => {
        const newBudget = [...budget, Singer];
        setBudget(newBudget);
    }

    useEffect(() => {
        setSinger(singerInfo);
    }, [singer]);

    return (

        <div className='singer-field'>
            <div className='each-singerField'>
                <div className='each-singer'>
                    {
                        singer.map(eachSinger => <Singer
                            id={eachSinger.id}
                            singer={eachSinger}
                            handleAddSinger={handleAddSinger}
                        ></Singer>)
                    }
                </div>

            </div>
            <div className='budget-field'>
                <Budget budget={budget}></Budget>
            </div>
        </div>
    );
};

export default SingerField;