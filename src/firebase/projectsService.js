import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./config";

// Récupérer tous les projets
export const getAllProjects = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projects = [];
    querySnapshot.forEach((doc) => {
      projects.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return projects;
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    return [];
  }
};

// Récupérer un projet par ID
export const getProjectById = async (id) => {
  try {
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      console.log("Projet non trouvé");
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du projet:", error);
    return null;
  }
};

// Ajouter un projet (pour plus tard)
export const addProject = async (projectData) => {
  try {
    const docRef = await addDoc(collection(db, "projects"), projectData);
    return docRef.id;
  } catch (error) {
    console.error("Erreur lors de l'ajout du projet:", error);
    return null;
  }
};

// Mettre à jour un projet
export const updateProject = async (id, projectData) => {
  try {
    const docRef = doc(db, "projects", id);
    await updateDoc(docRef, projectData);
    return true;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet:", error);
    return false;
  }
};

// Supprimer un projet
export const deleteProject = async (id) => {
  try {
    await deleteDoc(doc(db, "projects", id));
    return true;
  } catch (error) {
    console.error("Erreur lors de la suppression du projet:", error);
    return false;
  }
};
