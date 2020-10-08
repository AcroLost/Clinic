import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import ProfileMain from './components/ProfileMain';
import ProfileRecordsListContainer from './components/ProfileRecordsList/ProfileRecordsListContainer';

const App = ({ history, doctors, cancelRecord }) => {

  return (
    <div className="wrapper">
      <Menu />
      <div className="main">
        <Header />
        <Switch>
          <Route exact path="/profile" render={() => <ProfileMain doctors={doctors} cancelRecord={cancelRecord} />} />
          <Route path="/profile/records"
            render={() => <ProfileRecordsListContainer history={history} doctors={doctors} cancelRecord={cancelRecord} />}
          />
          <Route exact path="/" render={() => <Redirect to='/profile' />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
