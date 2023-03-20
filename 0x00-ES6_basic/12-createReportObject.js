export default function createReportObject(employees) {
  const report = { allEmployees: employees };
  report.getNumberOfDepartments = () => Object.values(employees).length;
  return report;
}
