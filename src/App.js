import React from 'react';
import Student from './Student';
import studentsdata from './data.js';

function App() {
  const students = studentsdata.map((ele, index) => {
    return(
      <Student
        name={ele.name}
        bio={ele.bio}
        scores={ele.scores}
        key={index}
      />
    )
  })

  return (
    <div className="App">
      {students}
    </div>
  );
}

export default App;
