import { IEmployee } from "@/interfaces/employee/IEmployee";
import { IEmployeeDTO } from "@/interfaces/employee/IEmployeeDTO";
import { MongoConnect } from "@/lib/mongoose/mongoose";
import { EmployeeModel } from "@/models/employees/employee-model";
import { isValidObjectId, Types } from "mongoose";

export async function GetAllEmployees(): Promise<IEmployee[]> {
  await MongoConnect();

  const employees = await EmployeeModel.find();
  return employees;
}

export async function GetEmployeeById(id: string): Promise<IEmployee> {
  await MongoConnect();

  if (!isValidObjectId(id)) {
    throw new Error("Invalid objectid");
  }

  const employeeQuerr: IEmployee | null = await EmployeeModel.findOne({
    _id: new Types.ObjectId(id),
  });

  if (!employeeQuerr) {
    throw new Error("Could not find employee");
  }

  return employeeQuerr;
}

export function GetEmployeeDTO(employee: IEmployee): IEmployeeDTO {
  return {
    firstname: employee.firstname,
    middlename: employee.middlename,
    lastname: employee.lastname,
    role: employee.role,
    image_guid: employee.image_guid,
    telephone_number: employee.telephone_number,
  } as IEmployeeDTO;
}
