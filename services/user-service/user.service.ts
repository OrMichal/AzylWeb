import { IUser, UserModel } from "@/models/User/user-model";
import { IRegistrationData } from "@/client-components/registration-form/registration-form";
import { MongoConnect } from "@/lib/mongoose/mongoose";
import { genSalt, hash } from "bcrypt";

export async function GetUserByEmail(email: string): Promise<IUser> {
  const user: IUser | null = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("Could not find user");
  }

  return user;
}

export async function RegisterUser(
  registerData: IRegistrationData,
): Promise<void> {
  try {
    await MongoConnect();
    console.log("haha");
    const salt = await genSalt(10);
    console.log(salt);
    console.log(registerData.password);
    const saltedPw: string = await hash(registerData.password, salt);
    console.log(salt);
    await UserModel.insertOne<IUser>({ ...registerData, password: saltedPw });
  } catch (e) {
    console.log("register user error: ", e);
  }
}
