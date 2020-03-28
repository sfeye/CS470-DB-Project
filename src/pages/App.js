import React from 'react';
import '../App.css';
import { useSelector } from 'react-redux';
import StudentQuery from '../components/student';
import LibrarianQuery from '../components/librarian';
import Tab from '../components/tab'

function App() {
  const currentTab = useSelector((state) => state.tabChangeReducer.currentTab );
  let currentPage;
  if (currentTab === "Student") {
    currentPage = <StudentQuery/>;
  }else if (currentTab === "Librarian") {
    currentPage = <LibrarianQuery/>;
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
