import React from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import StudentQuery from '../components/student';
import LibrarianQuery from '../components/librarian';
import CheckOut from '../components/checkOut';
import CheckIn from '../components/checkIn';
import Tab from '../components/tabs';
import StudentResult from '../components/bookResults';
import LibrarianResult from '../components/userResults';
import CreateUser from '../components/createUser';
import {renderStudentTab, renderResults, fetchBooks, fetchUsers, userCreated, createUser} from '../rstore/actions';

function App() {
  const axios= require('axios');
  const dispatch= useDispatch();
  const currentTab = useSelector((state) => state.tabChangeReducer.currentTab );
  const currentPage = useSelector((state) => state.tabChangeReducer.currentPage);
  const create = useSelector((state) => state.createUserReducer.create);
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
      axios.get("/users?employeeID=" + values.employeeID + "&phone_number=" + values.phonenumber + "&email_address=" + values.email)
      .then(function(response) {
        if(response.data === "Invalid eployee ID..." || response.data === "User not found...") {
          window.alert(JSON.stringify(response.data))
        } else {
          dispatch(fetchUsers(response.data))
          dispatch(renderResults("Librarian"));
        }
      })
      .catch(function(error) {
        console.log(error);
      });
    }}/>;
  }else if (currentTab === "Check Out") {
    displayTab = <CheckOut onSubmit={values=> {
      axios.get("/checkOut?employeeID=" + values.employeeID + "&phone_number=" + values.phonenumber + "&email_address=" + values.email + "&ISBN=" + values.ISBN)
      .then(function(response) {
        if(response.data === "User not found") {
          window.alert(response.data + "... Please create a new account.")
          dispatch(createUser(values))
        } else {
          // this is to imitate a receipt
          window.alert(JSON.stringify(response.data))
        }
        dispatch(renderStudentTab());
      })
      .catch(function(error) {
        console.log(error);
      });
    }}/>;
  }else if (currentTab === "Check In") {
    displayTab = <CheckIn onSubmit={values=> {
      axios.get("/checkIn?employeeID=" + values.employeeID + "&ISBN=" + values.ISBN)
      .then(function(response) {
        // this is to imitate a receipt
        window.alert(JSON.stringify(response.data))
        dispatch(renderStudentTab());
      })
      .catch(function(error) {
        console.log(error);
      });
    }}/>;
  }
  if(create === true) {
    displayTab = <CreateUser onSubmit={values=> {
      axios.get("/createUser?firstname=" + values.firstname + "&lastname=" + values.lastname 
      + "&phone_number=" + values.phonenumber + "&email_address=" + values.email)
      .then(function(response) {
        window.alert(JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
      dispatch(userCreated());
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
