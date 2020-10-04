import React from 'react';
import { NavLink } from 'react-router-dom';
import { Service } from '../ui-components/Service';
import CardDoctorContainer from './CardDoctor/CardDoctorContainer';

const ProfileMain = ({ doctors }) => {

  const doctorsList = doctors.map(doctor => <CardDoctorContainer key={doctor.id} {...doctor} />)

  return (
    <div className="content">
      <p className="content__title">Записи на прием</p>

      <div className="content__cards">
        {doctorsList.slice(0, 2)}

        <div className="content__more">
          <p>Еще {doctors.length - 2} записи</p>
          <NavLink to="/profile/records">Подробнее</NavLink>
        </div>
      </div>

      <div className="services">
        <p className="services__title">Электронная карта</p>

        <div className="services__list">
          <Service image="report">
            <p className="service__title">Информация о пациенте</p>
            <ul>
              <li className="service__list_item"><span>Ваши личные данные</span></li>
              <li className="service__list_item"><span>Рекомендации врачей</span></li>
              <li className="service__list_item"><span>История болезней</span></li>
            </ul>
          </Service>

          <Service image="lab">
            <p className="service__title">Результаты анализов</p>
            <p className="service__text">Вы можете узнать здесь результаты своих анализов</p>
          </Service>

          <Service image="add">
            <p className="service__title">Добавить информацию</p>
            <p className="service__text">Добавляйте в свою электронную медицинскую карту новые данные</p>
          </Service>

          <Service image="clock">
            <p className="service__title">История приемов</p>
            <p className="service__text">Вся информация о полученных услугах за все время хранится здесь</p>
          </Service>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;