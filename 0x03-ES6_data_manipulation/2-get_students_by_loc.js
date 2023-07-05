export default function getStudentByLocation(list, city) {
  return list.filter((obj) => obj.location === city);
}
