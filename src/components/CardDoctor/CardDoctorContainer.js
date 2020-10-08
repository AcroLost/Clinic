import React, { useEffect, useState } from 'react';
import CardDoctor from './CardDoctor';

const CardDoctorContainer = (props) => {

    const [dateTime, setDateTime] = useState(''),
        [weekDay, setWeekDay] = useState('');

    useEffect(() => {
        dateDefinition();
    }, []);

    const dateDefinition = () => {
        const newDate = new Date(props.date),
            dd = ('0' + newDate.getDate()).slice(-2),
            mm = ('0' + (newDate.getMonth() + 1)).slice(-2),
            yy = newDate.getFullYear().toString().substr(-2),
            hours = ('0' + newDate.getHours()).slice(-2),
            minutes = ('0' + newDate.getMinutes()).slice(-2),
            days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

        setDateTime(`${dd}.${mm}.${yy} | ${hours}:${minutes}`);
        setWeekDay(days[newDate.getDay()]);
    }

    return <CardDoctor {...props} dateTime={dateTime} weekDay={weekDay} cancelRecord={props.cancelRecord} />
}

export default CardDoctorContainer;