import React from 'react';
import './SelectedSinger.css'

const SelectedSinger = (props) => {
    const { name, born, birthdate, image, award, fare } = props.singer;
    return (
        <div className="Added-singers">
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p>
                    <strong>{name}  </strong>
                    <br />Fare: ${fare}
                </p>
            </div>

        </div>
    );
};

export default SelectedSinger;