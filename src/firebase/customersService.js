import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

// Récupérer tous les clients
export const getAllCustomers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "customers"));
    const customers = [];
    querySnapshot.forEach((doc) => {
      customers.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return customers;
  } catch (error) {
    console.error("Erreur lors de la récupération des clients:", error);
    return [];
  }
};
