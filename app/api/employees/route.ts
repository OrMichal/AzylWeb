import { IEmployee } from "@/interfaces/employee/IEmployee";
import { GetAllEmployees } from "@/services/Employee-service/employee-service";
import { NextResponse } from "next/server";

export async function GET() {
  const employees: IEmployee[] = await GetAllEmployees();
  NextResponse.json(employees);
}
