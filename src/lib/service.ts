import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { QuizFactory } from "./models";

export async function getAllQuizzes() {
  const snapshot = await getDocs(collection(db, "quizzes"));
  return snapshot.docs.map(doc => QuizFactory.fromFirebase(doc.data(), doc.id));
}

export async function getQuizBySlug(id: string) {
  const docSnap = await getDoc(doc(db, "quizzes", id));
  if (!docSnap.exists()) return null;
  return QuizFactory.fromFirebase(docSnap.data(), docSnap.id);
}



