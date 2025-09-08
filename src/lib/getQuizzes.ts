import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function getQuizzes() {
  const docRef = doc(db, "quizzes", "trivia"); 
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return [docSnap.data()]; 
  } else {
    console.log("No such document!");
    return [];
  }
}
