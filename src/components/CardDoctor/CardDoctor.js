import React from 'react';

const CardDoctor = ({ id, name, address, speciality, image, dateTime, weekDay, cancelRecord }) => {
    return (
        <div className="card">
            <p className="card__date">{weekDay} {dateTime}</p>
            <p className="card__clinic"></p>
            <p className="card__address">{address}</p>
            <div className="card__doctor">
                <div className="card__wrapper">
                    <img src={require(`../../images/${image}.png`)} alt="doctor_photo" />

                    <div className="card__info">
                        <p className="card__name">{name}</p>
                        <p className="card__speciality">{speciality}</p>
                    </div>
                </div>
                <p className="card__button" onClick={() => cancelRecord(id)}>Отменить</p>
            </div>
        </div>
    );
}

export default CardDoctor;