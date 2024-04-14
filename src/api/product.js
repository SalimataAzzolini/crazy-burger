import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

//Fonction mise à jour des menus de l'utilisateur
export const syncBothMenus = (userId, menuUpdated) => {
  const cachette = doc(db, "users", userId);

  const nourriture = {
    username: userId,
    menu: menuUpdated,
  };
  setDoc(cachette, nourriture);
};

//Fonction récupération du menu de l'utilisateur et si il n'existe pas, on le crée
export const getMenu = async (idUser) => {
  //const docRef = doc(CHEMIN)
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists()) {
    const { menu } = docSnapshot.data();

    return menu;
  }
};
