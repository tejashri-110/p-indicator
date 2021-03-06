import React from 'react';
import firebase from "../config";

class AuthServices {
    constructor() {
    }

    signUp(email, password) {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    signIn(email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    logOut() {
        return firebase.auth().signOut();
    }

    Current() {
        return firebase.auth().currentUser;
    }
    ForgotPassword(email) {
        return firebase.auth().sendPasswordResetEmail(email);
    }
}

export default As = new AuthServices();