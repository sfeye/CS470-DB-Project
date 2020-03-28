import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import StudentQuery from '../components/student';
import LibrarianQuery from '../components/librarian';
import CheckOut from '../components/checkOut'
import Tab from '../components/tab'

function App() {
  const axios= require('axios');
  const currentTab = useSelector((state) => state.tabChangeReducer.currentTab );
  let currentPage;
  if (currentTab === "Student") {
    currentPage = <StudentQuery onSubmit={values=> {
    }}/>;
  }else if (currentTab === "Librarian") {
    currentPage = <LibrarianQuery onSubmit={values=> {
    }}/>;
  }else if (currentTab === "Check Out") {
    currentPage = <CheckOut onSubmit={values=> {
    }}/>;
  }
    return (
      <div className="App">
        <h1>{currentTab}</h1>
        <Tab/>
        {currentPage}
      </div>
    );
  }
  
  export default App;
