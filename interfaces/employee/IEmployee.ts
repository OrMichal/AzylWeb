import { ObjectId } from "mongoose";

export interface IEmployee {
  _id: ObjectId;
  firstname: string;
  middlename: string | null;
  lastname: string;
  role: string;
  telephone_number: string;
}
