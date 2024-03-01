import {RootStackRoutes} from '@/types/stackRoutes';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

export interface UserEntity {
  id?: string;
  email: string;
  password: string;
}

export const AuthContext = () => {
  const navigation = useNavigation();

  const handleLogin = (
    {email, password}: UserEntity,
    onLogin: (user: UserEntity) => void,
    onError: (error: string) => void,
  ) => {
    auth()
      .createUserWithEmailAndPassword(email, password ?? '')
      .then(response => {
        const uid = response.user.uid;
        const data = {
          id: uid,
          email,
          password,
        };
        navigation.navigate(RootStackRoutes.TABS_HOME);
        const usersRef = firestore().collection('users');
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            onLogin(data);
          })
          .catch((error: string) => {
            onError(error);
          });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  const handleSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate(RootStackRoutes.LOGIN);
      })
      .catch(error => {
        console.error('Error signing out: ', error);
      });
  };

  return {handleLogin, handleSignOut};
};
