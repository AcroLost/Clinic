import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { getHospitalRecords } from './api/api';
import App from './App';

const AppContainer = ({ history }) => {

    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        getHospitalRecords()
            .then((data) => {
                setDoctors(data);
            }).catch(() => {
                alert('Что-то пошло не так');
            })
    }, []);

    const cancelRecord = (id) => {
        setDoctors(doctors.filter(doctor => doctor.id !== id));
    }

    return <App doctors={doctors} history={history} cancelRecord={cancelRecord} />
}

export default withRouter(AppContainer);
