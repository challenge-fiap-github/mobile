
import { auth } from '../config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export async function cadastrar(email: string, senha: string) {
  return await createUserWithEmailAndPassword(auth, email, senha);
}
