import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './Singer.css'

const Singer = (props) => {
    const { name, born, birthdate, image, award, fare } = props.singer;

    return (
        <div className="singer-info">
            <div className="latest-notice">
                <div className="imgPart">
                    <img src={image} alt="" />
                </div>

                <h3>{name}</h3>
                <div className="singer-PersonalInfo">
                    <p><strong>Born: </strong>{born}</p>
                    <p><strong>Birth Date: </strong>{birthdate}</p>
                    <p><strong>Award: </strong>{award}</p>
                </div>
                <div className=" billing-Portion">

                    <p><strong>Fare: </strong>TK. {fare}</p>

                    <Button className="btn" onClick={() => props.handleAddSinger(props.singer)}><FontAwesomeIcon icon={ faCartPlus} /> Add</Button>
                </div>

            </div>
        </div>
    );
};

export default Singer;