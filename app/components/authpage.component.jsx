import React from 'react';
import { withRouter } from 'react-router-dom';

// import CustomButton from './custom-button.component';
import Join from './join.component';

import { signInWithGooglePopUp } from '../firebase/firebase.utils';
import firebase from '../firebase/firebase.utils';

const AuthPage = ( props ) => {
    console.log(firebase);
    return (< >
        <h1>AUTH PAGE!</h1>
        <Join />
    </>);
}

export default withRouter(AuthPage);