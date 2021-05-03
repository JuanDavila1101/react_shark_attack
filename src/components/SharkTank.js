import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudents';

const SharkTank = ({ livinStudents }) => (
<ul>
  {livinStudents.map((student) => (
    <LiveStudent key={student.studentID} student={student} />
  ))}
</ul>);

SharkTank.propTypes = {
  livinStudents: PropTypes.array.isRequired
};

export default SharkTank;
