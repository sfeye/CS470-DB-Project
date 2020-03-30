import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import StudentQuery from '../components/student';
import LibrarianQuery from '../components/librarian';
import CheckOut from '../components/checkOut';
import Tab from '../components/tabs';
import StudentResult from '../components/bookResults';
import LibrarianResult from '../components/userResults';
import {renderResults, fetchBooks, fetchUsers} from '../rstore/actions'

function App() {
  const axios= require('axios');
  const dispatch= useDispatch();
  const currentTab = useSelector((state) => state.tabChangeReducer.currentTab );
  const currentPage = useSelector((state) => state.tabChangeReducer.currentPage);
  let displayTab;
  if (currentTab === "Student") {
    displayTab = <StudentQuery onSubmit={values=> {
      axios.get("/book?ISBN=" + values.ISBN + "&author=" + values.author + "&bookname=" + values.bookname)
      .then(function(response) {
        console.log(response.data);
        dispatch(fetchBooks(response.data))
        dispatch(renderResults("Student"));
      })
      .catch(function(error) {
        console.log(error);
      });
    }}/>;
  }else if (currentTab === "Librarian") {
    displayTab = <LibrarianQuery onSubmit={values=> {
      axios.get("/users?employeeID=" + values.employeeID + "&phone_number=" + values.phonenumber + "&email=" + values.email)
      .then(function(response) {
        console.log(response.data);
        dispatch(fetchUsers(response.data))
        dispatch(renderResults("Librarian"));
      })
      .catch(function(error) {
        console.log(error);
      });
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
