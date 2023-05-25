import { auth, googleAuthProvider, firestore } from "@/lib/firebase";
import { SignInMethod } from "firebase/auth";
import { UserContext } from '@/lib/context';
import { useEffect, useState, useCallback, useContext } from 'react';
import debounce from 'lodash.debounce';
import toast from 'react-hot-toast'
import Image from 'next/image';
import Link from "next/link";

export default function EnterPage({}) {
  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  // <button onClick={() => console.log(auth.currentUser.email)} />
  const { user, username } = useContext(UserContext);
  return (
    <>
    <p>hi</p>
    <main>
      <div className="page-content">
        <p>hi</p>
        {!user && <p>what</p>}
      { user ? !username ? <UsernameForm /> : <LoggedInScreen /> : <SignInButton /> }
      </div>
    </main>
    </>
  )
}

function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider)
  }
  return (
    <button className="btn-brand" onClick={signInWithGoogle}>
      <div className="simple-flex2"><Image height='30' width='30' alt='google' src={'/google.png'}/> Sign in with Google</div>
    </button>
  )
}

function LoggedInScreen() {
  return (
    <div className="down-flex">
            <Link href='/upload'>
              <button className="btn-brand">New post</button>
            </Link>
            <Link href='/'>
              <button className="btn-brand">Go home</button>
            </Link>
              <button onClick={() => auth.signOut()} className="btn-brand">Sign out</button>
    </div>
  )

}

function UsernameForm() {
  const [formValue, setFormValue] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useContext(UserContext);

  const onSubmit = async (e) => {
    e.preventDefault();

    // Create refs for both documents
    const userDoc = firestore.doc(`users/${user.uid}`);
    const usernameDoc = firestore.doc(`usernames/${formValue}`);

    // Commit both docs together as a batch write.
    const batch = firestore.batch();
    batch.set(userDoc, { username: formValue, photoURL: user.photoURL, email: user.email, displayName: user.displayName });
    batch.set(usernameDoc, { uid: user.uid });

    try {await batch.commit()}
    catch (error) {console.log(error)}

  };
  
  const checkUsername = useCallback(debounce(async (username) => {
    if (username.length >= 3) {
      const ref = firestore.doc(`usernames/${username}`);
      const { exists } = await ref.get();
      console.log('Checking firestore to see if username exists');
      setIsValid(!exists)
      setLoading(false)
    }
  }, 500),[])
  
  useEffect(() => {
    checkUsername(formValue)
  }, [formValue]);

  const onChange = (e) => {
    // Force formatting
    const val = e.target.value.toLowerCase();
    const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    // Only set form value if length is < 3 OR it passes regex
    if (val.length < 3) {
      setFormValue(val);
      setLoading(false);
      setIsValid(false);
    }

    if (re.test(val)) {
      setFormValue(val);
      setLoading(true);
      setIsValid(false);
    }
  };


  return (
    !username && (
      <section>
        <h3>Choose username</h3>
        <form onSubmit={onSubmit}>

          <input name="username" placeholder="username" value={formValue} onChange={onChange} />
          
          <UserNameMessage username={formValue} isValid={isValid} loading={loading} />
          
          <button type="submit" className="btn-green" disabled={!isValid}>
            Choose
          </button>

          <h3>Debug State</h3>
          <div>
            Username: {formValue}
            <br />
            Loading: {loading.toString()}
            <br />
            Username Valid: {isValid.toString()}
          </div>
        </form>
      </section>
    )
  )
}

function UserNameMessage({ username, isValid, loading }) {
  if (loading) {
    return <p>Checking...</p>
  } else if (isValid) {
    return <p className="text-success">{username} is available!</p>
  } else if (username.length >= 3 && !isValid) {
    return <p className="text-success">{username} is not available!</p>
  } else {
    return <p className="text-invis">_</p>
  }
}