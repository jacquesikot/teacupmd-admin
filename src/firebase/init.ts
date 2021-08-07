import firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBzw0EAvAbdydNELokO76CLCwIVDVAjUzw',
  authDomain: 'epharma-mobile-apps.firebaseapp.com',
  databaseURL: 'https://epharma-mobile-apps-default-rtdb.firebaseio.com/',
  projectId: 'epharma-mobile-apps',
  storageBucket: 'epharma-mobile-apps.appspot.com',
  messagingSenderId: '54083160986',
  //   appId: 'app-id',
  //   measurementId: 'G-measurement-id',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

const registerUser = async (
  email: string,
  password: string,
  displayName: string
) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = firebase.auth().currentUser;
    if (user) {
      await user.updateProfile({
        displayName,
      });
    }
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const signInUser = async (email: string, password: string) => {
  try {
    const signedUser = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    const user = signedUser.user;
    return user;
  } catch (error) {
    console.log(error.message);
  }
};

const logOutUser = async () => {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error.message);
  }
};

const uploadImgs = async (file: any) => {
  try {
    const imgs = [];
    const storageRef = firebase.storage().ref();
    var i;
    for (i = 0; i < file.length; i++) {
      const fileRef = storageRef.child(file[i].name);
      await fileRef.put(file[i]);
      const url = await fileRef.getDownloadURL();
      imgs.push(url);
    }
    return imgs;
  } catch (error) {
    console.log(error.message);
  }
};

const addCategory = async (title: string, imgUrl: string) => {
  await db.collection('categories').add({
    name: title,
    imgUrl: imgUrl,
  });
};

const getCategories = async () => {
  const data = [];
  const querySnapshot = await db.collection('categories').get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

const deleteCategory = async (id: string) => {
  await db.collection('categories').doc(id).delete();
};

const addDepartment = async (name: string, img_url: string) => {
  await db.collection('departments').add({
    name,
    img_url,
  });
};

const getDepartments = async () => {
  const data = [];
  const querySnapshot = await db.collection('departments').get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

const deleteDepartment = async (id: string) => {
  await db.collection('departments').doc(id).delete();
};

interface ProductProps {
  title: string;
  details: string;
  nutrition_details: string;
  price: string;
  sale_price: string;
  category: string[];
  images: string[];
}

const addProduct = async ({
  title,
  details,
  nutrition_details,
  price,
  sale_price,
  category,
  images,
}: ProductProps) => {
  await db.collection('products').add({
    title,
    details,
    nutrition_details,
    price,
    sale_price,
    category,
    images,
  });
};

const getProducts = async () => {
  const data = [];
  const querySnapshot = await db.collection('products').get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

const deleteProduct = async (id: string) => {
  await db.collection('products').doc(id).delete();
};

const getOrders = async () => {
  const data = [];
  const querySnapshot = await db.collection('orders').get();
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return data;
};

export default {
  registerUser,
  signInUser,
  logOutUser,
  uploadImgs,
  addCategory,
  getCategories,
  deleteCategory,
  addDepartment,
  getDepartments,
  deleteDepartment,
  addProduct,
  getProducts,
  deleteProduct,
  getOrders,
};
