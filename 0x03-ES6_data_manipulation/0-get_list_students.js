/**
 * Retrieves a list of students.
 * @author Olusegun Emmanuel <https://github.com/codewithsegnet>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  const studentData = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];

  return studentData.map((student) => ({
    id: student.id,
    firstName: student.firstName,
    location: student.location,
  }));
}
