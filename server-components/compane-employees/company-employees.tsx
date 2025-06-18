import { EmployeeCard } from "@/client-components/Employee-card/employee-card";
import { IEmployee } from "@/interfaces/employee/IEmployee";
import { GetAllEmployees } from "@/services/Employee-service/employee-service";

export async function CompanyEmployees() {
  const employeesQuerr: IEmployee[] = await GetAllEmployees();

  return (
    <div className="grid">
      {employeesQuerr.map((e) => (
        <EmployeeCard key={e._id.toString()} employee={e} />
      ))}
    </div>
  );
}
