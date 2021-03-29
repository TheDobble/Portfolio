import './Accueil.scss';
import firebase from 'firebase/app';
import { instanceFirebaseUI } from '../firebase';
import 'firebaseui/dist/firebaseui.css';
import { useEffect } from 'react';


export default function Accueil() {
  /*useEffect(
    () => instanceFirebaseUI.start("#firebaseui-widget", {
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID
      ],
      signInFlow: 'popup'
    }, [])
  )*/

  return (
    <div className="contenu acceuil_contenu">
             <h1>Je m'appelle Daniel et voici mon portfolio!</h1>
            <img src="../images/Logo.png" className="logoAcc"/>
    </div>
  )
}