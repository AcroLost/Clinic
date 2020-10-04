import React from 'react';
import Calendar from '../Calendar/Calendar';
import CardDoctorContainer from '../CardDoctor/CardDoctorContainer';

const ProfileRecordsList = ({ goBack, doctors, filter, doctorsElements, filterDoctors, showAllRecords }) => {

  const doctorsList = doctorsElements.map(doctor => <CardDoctorContainer key={doctor.id} {...doctor} />)

  return (
    <div className="content">
      <div className="content__title">
        <img src={require('../../images/back.png')}
          alt="back"
          onClick={goBack} />
        <p>Мои записи</p>
      </div>

      <div className="records__wrapper">
        <div className="records">
          {filter &&
            <p className="records__show"
              onClick={showAllRecords}>Показать все записи
            </p>}

          {doctorsList.length
            ? doctorsList
            : <p className="records__message">На выбранный день записи отсутствуют</p>
          }
        </div>
        <Calendar doctors={doctors} filterDoctors={filterDoctors} />
      </div>
    </div>
  );
}

export default ProfileRecordsList;