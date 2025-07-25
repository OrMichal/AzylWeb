import { model, models, ObjectId, Document, Schema } from "mongoose";

export interface IUser extends Document {
  username: string;
  password: string;
  firstname: string;
  middlename: string | null;
  lastname: string;
  email: string;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    middlename: { type: String },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: "users" },
);

export const UserModel = models.user || model<IUser>("user", userSchema);
