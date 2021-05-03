const students = [
  {
    studentID: '1000',
    firstName: 'Robert',
    lastName: 'Cole',
    isDead: false,
  },
  {
    studentID: '1001',
    firstName: 'Sara',
    lastName: 'Schoonover',
    isDead: false,
  },
  {
    studentID: '1002',
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false,
  },
  {
    studentID: '1003',
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
  },
  {
    studentID: '1004',
    firstName: 'Lindsey',
    lastName: 'Satterfield',
    isDead: false,
  },
  {
    studentID: '1005',
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false,
  },
  {
    studentID: '1006',
    firstName: 'John',
    lastName: 'Maple',
    isDead: false,
  },
  {
    studentID: '1007',
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false,
  },
  {
    studentID: '1008',
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false,
  },
  {
    studentID: '1009',
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false,
  },
  {
    studentID: '1010',
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false,
  },
  {
    studentID: '1011',
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
  },
  {
    studentID: '1012',
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false,
  },
  {
    studentID: '1013',
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false,
  },
  {
    studentID: '1014',
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false,
  },
  {
    studentID: '1015',
    firstName: 'Nathan',
    lastName: 'Keith',
    isDead: false,
  },
  {
    studentID: '1016',
    firstName: 'Honey-Rae Swan',
    lastName: 'Swan',
    isDead: false,
  },
  {
    studentID: '1017',
    firstName: 'Jim',
    lastName: 'Conner',
    isDead: false,
  },
  {
    studentID: '1018',
    firstName: 'Chris',
    lastName: 'Meffley',
    isDead: false,
  },
  {
    studentID: '1019',
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false,
  },
  {
    studentID: '1020',
    firstName: 'Sean',
    lastName: 'Rossetie',
    isDead: false,
  },
  {
    studentID: '1021',
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false,
  },
  {
    studentID: '1022',
    firstName: 'Mitchell',
    lastName: 'Crumbley',
    isDead: false,
  },
  {
    studentID: '1023',
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false,
  },
];

const getLiveStudents = () => students.filter((student) => !student.isDead);
const getDeadStudents = () => students.filter((student) => student.isDead);

const killRandomStudent = () => {
  const currentLiveStudents = getLiveStudents();
  const randomStudent = currentLiveStudents[Math.floor(Math.random() * students.length)];
  const index = students.indexOf(randomStudent);
  if (index > 0) {
    students[index].isDead = true;
  }

  return [getLiveStudents(), getDeadStudents()];
};

const undeadTheStudents = () => {
  for (let i = 0; i < students.length; i += 1) {
    students[i].isDead = false;
  }
};

export {
  getLiveStudents, getDeadStudents, killRandomStudent, undeadTheStudents, students
};
