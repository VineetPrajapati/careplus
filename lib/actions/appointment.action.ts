"use server"

import { ID } from "node-appwrite";
import { APPOINTMENT_COLLECTION_ID, databases, DATABSE_ID } from "../appwrite.config";
import { parseStringify } from "../utils";

export const  createAppointment = async (appointment:  CreateAppointmentParams) => {
    try {
        const newAppointment = await databases.createDocument(
            DATABSE_ID!,
            APPOINTMENT_COLLECTION_ID!,
            ID.unique(),
            appointment,
          );
    
          return parseStringify(newAppointment);
        
    } catch (error) {
        console.log(error)
        
    }
}