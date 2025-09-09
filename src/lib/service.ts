import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { Quiz } from "./models";

export async function getAllQuizzes() {
  const snapshot = await getDocs(collection(db, "quizzes"));
  return snapshot.docs.map(doc => Quiz.fromFirebase(doc.data(), doc.id));
}

export async function getQuizBySlug(id: string) {
  const docSnap = await getDoc(doc(db, "quizzes", id));
  if (!docSnap.exists()) return null;
  return Quiz.fromFirebase(docSnap.data(), docSnap.id);
}



