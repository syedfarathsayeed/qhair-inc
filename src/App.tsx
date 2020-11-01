import { SignIn, SignUp } from "components";
import { createUserProfileDocument, useFirebase } from "firebase/firebaseUtils";
import QhairShopping from "pages";
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";
import { userActions } from "redux/actions/user";
import { selectUser } from "redux/reducers/user";
import { AppThunkDispatch } from "redux/store";

const App: React.FunctionComponent<{}> = () => {

  const { authUser } = useFirebase()

  const dispatch = useDispatch<AppThunkDispatch>();

  const fetchUser = React.useCallback(async (authUser: firebase.User) => {
    const userRef = await createUserProfileDocument(authUser)
    if (userRef) {
      userRef.onSnapshot((snapshot: firebase.firestore.DocumentData) => {
        const user = {
          id: snapshot.id,
          ...snapshot.data()
        }
        dispatch(userActions.fetchUser(user))
      })
    }
  }, [dispatch])

  React.useEffect(() => {
    if (authUser) {
      fetchUser(authUser)
    }
  }, [authUser, fetchUser])

  const loggedUser = useSelector(selectUser)

  return (
    <Switch>
      <Route exact path={"/sign-up"} component={SignUp} />
      <Route exact path={"/sign-in"} render={() =>
        loggedUser
          ? <Redirect to="/home" />
          : <SignIn />} />
      <Route path={"/"} render={() => <QhairShopping />} />
    </Switch>
  )
}

export default App;
