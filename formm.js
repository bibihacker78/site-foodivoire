
const firebaseConfig = {
  apiKey: "AIzaSyB0hWQI2SO1gLpP4eLPba2U8BIGHAXOzA4",
  authDomain: "foodivoire-form.firebaseapp.com",
  databaseURL: "https://foodivoire-form-default-rtdb.firebaseio.com",
  projectId: "foodivoire-form",
  storageBucket: "foodivoire-form.appspot.com",
  messagingSenderId: "884341854129",
  appId: "1:884341854129:web:a4e6577e554458d20cb790",
  measurementId: "G-KQRV6S3W1T"
};

// Initialisation Firebase
firebase.initializeApp(firebaseConfig);

// Fonction pour récupérer les données de Firebase
function lireDonneesDeFirebase(collectionNom) {
  var db = firebase.firestore();
  var collectionRef = db.collection(collectionNom);

  // Récupérer tous les documents dans la collection
  collectionRef.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.id contient l'ID du document
        // doc.data() contient les données du document
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Erreur lors de la récupération des documents : ", error);
    });
}

// Fonction pour envoyer les données à Firebase
function envoyerDonneesAuFirebase(formulaireId, collectionNom) {
  var formulaire = document.getElementById(formulaireId);
  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

    var num1 = document.querySelector('.num1').value;
    var num2 = document.querySelector('.num2').value;

    var db = firebase.firestore();
    db.collection(collectionNom).add({
      num1: num1,
      num2: num2
    })
    .then(function (docRef) {
      console.log("Document ajouté avec l'ID : ", docRef.id);

      // Une fois que les données sont envoyées, récupérez les données pour vérification
      lireDonneesDeFirebase(collectionNom);
      
      // renisialiser les formulaires après l'envoi
      document.getElementById("firstForm").reset();
      document.getElementById("secondForm").reset();
      
     // afficher alerte
      document.querySelector(".alert").style.display = "block";

      // supprimer alerte après 3 secondes
      setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
      }, 3000);

      document.querySelector(".alert2").style.display = "block";

      // supprimer alerte après 3 secondes
      setTimeout(() => {
        document.querySelector(".alert2").style.display = "none";
      }, 3000);
    })
    .catch(function (error) {
      console.error("Erreur lors de l'ajout du document : ", error);
    });
  });
}

// Appelez la fonction pour chaque formulaire
envoyerDonneesAuFirebase('firstForm', 'form1');
envoyerDonneesAuFirebase('secondForm', 'form2');
