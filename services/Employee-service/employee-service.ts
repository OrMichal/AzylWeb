import { IEmployee } from "@/interfaces/employee/IEmployee";
import { MongoConnect } from "@/lib/mongoose/mongoose";
import { EmployeeModel } from "@/models/employees/employee-model";

export async function GetAllEmployees(): Promise<IEmployee[]> {
  await MongoConnect();
  const querr: IEmployee[] = await EmployeeModel.find();

  return querr;
}
