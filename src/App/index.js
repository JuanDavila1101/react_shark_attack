import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import {
  getLiveStudents, getDeadStudents, killRandomStudent, undeadTheStudents
} from '../helpers/data/studentsData';
import GraveYard from '../components/GraveYard';
import SharkTank from '../components/SharkTank';

function App() {
  const [livinStudents, setLivinStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);

  useEffect(() => {
    setLivinStudents(getLiveStudents());
    setDeadStudents(getDeadStudents());
  }, []);

  const killEmDead = () => {
    const [living, dead] = killRandomStudent();
    setLivinStudents(living);
    setDeadStudents(dead);
  };

  const reviveStudent = () => {
    undeadTheStudents();
    setLivinStudents(getLiveStudents());
    setDeadStudents(getDeadStudents());
  };

  return (
    <div className='App'>
      <Button
        color='danger'
        onClick={killEmDead}
        disabled={livinStudents.length <= 0}
      >
        Killing a student
      </Button>
      <h2>Living Students</h2>
      <SharkTank livinStudents={livinStudents} />
      <Button
        color='danger'
        onClick={reviveStudent}
        disabled={livinStudents.length <= 0}
      >
        Killing a student
      </Button>
      <h2>Dead Students</h2>
      <GraveYard deadStudents={deadStudents}/>
    </div>
  );
}

export default App;
