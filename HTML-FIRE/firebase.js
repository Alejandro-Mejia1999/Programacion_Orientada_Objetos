
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";


const firebaseConfig = {
    
    apiKey: "AIzaSyBXu7bR4bgG9HOft7mGdtoYH_e5BuHR_bM",
    authDomain: "fir-1-815e4.firebaseapp.com",
    projectId: "fir-1-815e4",
    storageBucket: "fir-1-815e4.appspot.com",
    messagingSenderId: "570682269377",
    appId: "1:570682269377:web:1c5d0de8a8a197b9493e40"
   
};                          

// firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
           
 * @param {string} cuenta           
 * @param {string} nombre
 * @param {string} carrera
 */
export const saveTask = (cuenta, nombre, carrera) =>                         //Agrega una nueva tarea a la colección "tasks" en Firestore.
  addDoc(collection(db, "datos"), { cuenta, nombre,carrera });

export const onGetTasks = (callback) =>                                 //esta función se encarga de agregar los datos como un nuevo documento en la colección "tasks" de la base de datos Firestore.
  onSnapshot(collection(db, "datos"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "datos", id));     //Elimina una tarea de la colección "tasks" basada en su ID.

export const getTask = (id) => getDoc(doc(db, "datos", id));          //Obtiene una tarea específica de la colección "tasks" basada en su ID.

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);                         //Actualiza una tarea existente en la colección "tasks" con nuevos campos.

export const getTasks = () => getDocs(collection(db, "datos"));       //Obtiene todas las tareas de la colección "tasks".