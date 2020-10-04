import React, { useEffect, useState } from 'react';
import ProfileRecordsList from './ProfileRecordsList';

const ProfileRecordsListContainer = ({ history, doctors }) => {

  const [filter, setFilter] = useState(false),
    [doctorsElements, setDoctorsElements] = useState([]);

  useEffect(() => {
    setDoctorsList()
  }, [doctors])

  const setDoctorsList = () => {
    setDoctorsElements(doctors);
  }

  const filterDoctors = (date) => {
    setDoctorsList();
    setFilter(true);

    setDoctorsElements((prev) => {
      return prev.filter(doctor => {
        const newDate = new Date(doctor.date);
        if (newDate.getFullYear() === date.getFullYear() && newDate.getMonth() === date.getMonth() && newDate.getDate() === date.getDate()) {
          return doctor;
        }
      })
    })
  }

  const showAllRecords = () => {
    setDoctorsList();
    setFilter(false);
  }

  const goBack = () => {
    history.goBack()
  }

  return <ProfileRecordsList goBack={goBack}
    doctors={doctors}
    filter={filter}
    doctorsElements={doctorsElements}
    filterDoctors={filterDoctors}
    showAllRecords={showAllRecords} />
}

export default ProfileRecordsListContainer;