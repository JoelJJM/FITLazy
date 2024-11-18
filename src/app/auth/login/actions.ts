"use server"

import { z } from "zod";
import { deleteSession, getSession } from "@/lib/session";
import { redirect } from "next/navigation";

//Test user to test code
const testUser = {
    id: "1",
    email: "contact@cosdensolutions.io",
    password: "12345678",
  };
  
  //Using zod to create a schema for my users
  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }).trim(),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .trim(),
  });
  


export async function login(prevState: any, formData: FormData) {
  //Parsing my formData to zod to check if it matches the zod schema. (result contained in variable "result")
  const result = loginSchema.safeParse(Object.fromEntries(formData));

  //Error checking the result variable through an if statement 
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  const {email, password} = result.data;

  //Checking if the data matches our test data (alternative for now to a mongoDB database.)
  if(email !== testUser.email || password !== testUser.password) {
    return {
      errors: {
        email: ["Invalid email or password"],
      }
    }
  }

  let session = await getSession();
  session.userId = testUser.id;
  session.save();

  redirect("/dashboard")
  
}

export async function logout() {
  await deleteSession();
  redirect("/login")
}