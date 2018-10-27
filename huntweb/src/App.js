// eslint-disable-next-line
import React, { Component } from 'react';
import Header from './components/Header';
import './styles.css';
import api from './services/api';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Main from './pages/main';
import Routes from './routes'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);


export default App;
