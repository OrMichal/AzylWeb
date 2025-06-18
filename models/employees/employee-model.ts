import { IEmployee } from "@/interfaces/employee/IEmployee";
import { model, models, Schema } from "mongoose";

const EmployeeSchema = new Schema<IEmployee>(
  {
    firstname: { type: String, required: true },
    middlename: { type: String, required: true },
    lastname: { type: String, required: true },
    role: { type: String, required: true },
    telephone_number: { type: String, required: true },
  },
  { collection: "employees" },
);

export const EmployeeModel =
  models.employee || model<IEmployee>("employee", EmployeeSchema);
