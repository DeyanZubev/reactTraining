import Nav from '../nav/Nav';
import LoginForm from './LoginForm';
import { firebaseAuth } from '../../firebase/firebase';

let enail
function Login() {
    firebaseAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            console.log(`signed in user`);
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default Login;