import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { QuizFactory } from "@/models/quiz-factory";
import { Quiz } from "@/models/quiz";

export async function getAllQuizzes(): Promise<Quiz[]> {
  const snapshot = await getDocs(collection(db, "quizzes"));
  return snapshot.docs.map(doc => QuizFactory.fromData(doc.id, doc.data()));
}

export async function getQuizBySlug(id: string) {
  const docSnap = await getDoc(doc(db, "quizzes", id));
  if (!docSnap.exists()) return null;
  return QuizFactory.fromData(docSnap.id, docSnap.data());
}