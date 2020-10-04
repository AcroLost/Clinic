import React from 'react';
import classnames from 'classnames';

import * as calendar from '.';

import './Calendar.css';

export default class Calendar extends React.Component {
  static defaultProps = {
    date: new Date(2020, 6),
    years: [],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    weekDayNames: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    onChange: Function.prototype
  };

  state = {
    date: this.props.date,
    currentDate: new Date(),
    selectedDate: null
  };

  get year() {
    return this.state.date.getFullYear();
  }

  get month() {
    return this.state.date.getMonth();
  }

  get day() {
    return this.state.date.getDate();
  }

  handlePrevMonthButtonClick = () => {
    const date = new Date(this.year, this.month - 1);

    this.setState({ date });
  };

  handleNextMonthButtonClick = () => {
    const date = new Date(this.year, this.month + 1);

    this.setState({ date });
  };

  handleSelectChange = () => {
    const year = this.yearSelect.value;
    const month = this.monthSelect.value;

    const date = new Date(year, month);

    this.setState({ date });
  };

  handleDayClick = date => {
    this.setState({ selectedDate: date });
  };

  countRecords = (date) => {
    let count = 0;
    this.props.doctors.map(doctor => {
      const newDate = new Date(doctor.date);

      if (newDate.getFullYear() === date.getFullYear() && newDate.getMonth() === date.getMonth() && newDate.getDate() === date.getDate()) {
        count++;
      }
    })
    if (count === 0) {
      return
    }
    return <span>{count}</span>;
  }

  render() {
    const { monthNames, weekDayNames } = this.props;
    const { currentDate, selectedDate } = this.state;

    const monthData = calendar.getMonthData(this.year, this.month, this.state.date.getMonth() - 1, this.state.date.getMonth() + 1);

    return (
      <div className="calendar__wrapper">
        <div className="calendar">
          <div className="calendar__header">
            <img className="calendar__left"
              src={require('../../images/left.png')}
              onClick={this.handlePrevMonthButtonClick} />

            <p>{monthNames[this.month]}, {this.year}</p>

            <img className="calendar__right"
              src={require('../../images/right.png')}
              onClick={this.handleNextMonthButtonClick} />
          </div>

          <table>
            <thead>
              <tr>
                {weekDayNames.map(name =>
                  <th key={name}>{name}</th>
                )}
              </tr>
            </thead>

            <tbody>
              {monthData.map((week, index) =>
                <tr key={index} className="week">
                  {week.map((date, index) => date.getMonth() === this.month ?
                    <td
                      key={index}
                      className={classnames('day', {
                        'today': calendar.areEqual(date, currentDate),
                        'selected': calendar.areEqual(date, selectedDate)
                      })}
                      onClick={() => {
                        this.handleDayClick(date);
                        this.props.filterDoctors(date);
                      }}
                    >{date.getDate()} {this.countRecords(date)}</td>
                    :
                    <td className="dayDisactive" key={index}>{date.getDate()}</td>
                  )}
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}