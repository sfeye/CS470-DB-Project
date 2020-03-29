import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import StudentQuery from '../components/student';
import LibrarianQuery from '../components/librarian';
import CheckOut from '../components/checkOut';
import Tab from '../components/tab';
import StudentResult from '../components/bookResults';
import LibrarianResult from '../components/userResults';
import {renderResults} from '../rstore/actions'

function App() {
  const axios= require('axios');
  const instance = axios.create({baseURL: 'http://localhost:3001'})
  const dispatch= useDispatch();
  const currentTab = useSelector((state) => state.tabChangeReducer.currentTab );
  const currentPage = useSelector((state) => state.tabChangeReducer.currentPage);
  let displayTab;
  if (currentTab === "Student") {
    displayTab = <StudentQuery onSubmit={values=> {
      instance.get("/book?ISBN=" + values.ISBN)
      .then(function(response) {
        console.log(response);
        dispatch(renderResults("Student"));
      })
      .catch(function(error) {
        console.log(error);
      });
    }}/>;
  }else if (currentTab === "Librarian") {
    displayTab = <LibrarianQuery onSubmit={values=> {
      dispatch(renderResults("Librarian"));
    }}/>;
  }else if (currentTab === "Check Out") {
    displayTab = <CheckOut onSubmit={values=> {
    }}/>;
  }
  if(currentPage === "Results") {
    if (currentTab === "Student") {
      displayTab = <StudentResult/>;
    }else if (currentTab === "Librarian") {
      displayTab = <LibrarianResult/>;
    }
  }
    return (
      <div className="App">
        <h1>{currentTab}</h1>
        <Tab/>
        {displayTab}
      </div>
    );
  }
  
  export default App;
