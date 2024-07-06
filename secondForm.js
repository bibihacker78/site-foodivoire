const firebaseConfig2 = {
    apiKey: "AIzaSyAy1x4zyGDUzPKECW0P_BPtTaRIhNcdLDI",
    authDomain: "foodivoire-3c180.firebaseapp.com",
    databaseURL: "https://foodivoire-3c180-default-rtdb.firebaseio.com",
    projectId: "foodivoire-3c180",
    storageBucket: "foodivoire-3c180.appspot.com",
    messagingSenderId: "866690321880",
    appId: "1:866690321880:web:52daa1fad641cb48ccf6ad"
  };
        // Initialisez Firebase
        firebase.initializeApp(firebaseConfig);

        // Obtenez une référence à la base de données
        var secondFormdb = firebase2.database().ref("secondForm");
        

        // Gérez la soumission du formulaire
        document.getElementById('secondForm').addEventListener("submit", secondForm);
        function secondForm(e){
            e.preventDefault();

            var num = getElementVal2('num');

            saveMsg2(num);

            // afficher alerte
            document.querySelector(".alert").style.display = "block";

            // supprimer alerte
            setTimeout (() => {
                document.querySelector(".alert").style.display = "none";
            },3000 );

            // renisialiser le formulaire
            document.getElementById("secondForm").reset()


        }
        const saveMsg2 = (num) => {
            var newNumForm = secondFormdb.push();
            
            newNumForm.set({
                num : num,
            });
        }

        const getElementVal2 = (id) => {
            return document.getElementById(id).value;
        }

// Initialisez Firebase (si ce n'est pas déjà fait)
var firebaseConfig = {
    apiKey: "VOTRE_API_KEY",
    authDomain: "VOTRE_AUTH_DOMAIN",
    projectId: "VOTRE_PROJECT_ID",
    storageBucket: "VOTRE_STORAGE_BUCKET",
    messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",
    appId: "VOTRE_APP_ID"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Fonction pour envoyer les données à Firebase
  function envoyerDonneesAuFirebase(formulaireId, collectionNom) {
    var formulaire = document.getElementById(formulaireId);
    formulaire.addEventListener('submit', function (e) {
      e.preventDefault();
  
      var formData = new FormData(formulaire);
      var data = {};
      formData.forEach(function (value, key) {
        data[key] = value;
      });
  
      // Ajoutez les données à la collection correspondante dans Firestore
      var db = firebase.firestore();
      db.collection(collectionNom).add(data)
        .then(function (docRef) {
          console.log("Document ajouté avec l'ID : ", docRef.id);
        })
        .catch(function (error) {
          console.error("Erreur lors de l'ajout du document : ", error);
        });
    });
  }
  
  // Appelez la fonction pour chaque formulaire
  envoyerDonneesAuFirebase('formulaire1', 'collection_formulaire1');
  envoyerDonneesAuFirebase('formulaire2', 'collection_formulaire2');
  

  /*const firebaseConfig = {
    apiKey: "AIzaSyB0hWQI2SO1gLpP4eLPba2U8BIGHAXOzA4",
    authDomain: "foodivoire-form.firebaseapp.com",
    databaseURL: "https://foodivoire-form-default-rtdb.firebaseio.com",
    projectId: "foodivoire-form",
    storageBucket: "foodivoire-form.appspot.com",
    messagingSenderId: "884341854129",
    appId: "1:884341854129:web:a4e6577e554458d20cb790",
    measurementId: "G-KQRV6S3W1T"
};


firebase.initializeApp(firebaseConfig);

// Fonction pour envoyer les données à Firebase
function envoyerDonneesAuFirebase(formulaireId, collectionNom) {
  var formulaire = document.getElementById(formulaireId);
  formulaire.addEventListener("submit", function (e) {
    e.preventDefault();

 /*  var formData = new FormData(formulaire);
    var data = {};
    formData.forEach(function (value, key) {
      data[key] = value;
    });
    var num = document.getElementById('num').value;

    var db = firebase.firestore();
    db.collection(collectionNom).add({
      num: num
    })
      .then(function (docRef) {
        console.log("Document ajouté avec l'ID : ", docRef.id);
      })
      .catch(function (error) {
        console.error("Erreur lors de l'ajout du document : ", error);
      });
  });
}


// Appelez la fonction pour chaque formulaire
envoyerDonneesAuFirebase('firstForm', 'form1');
envoyerDonneesAuFirebase('secondForm', 'form2');


*/

// Configuration Firebase
/*const firebaseConfig = {
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
  
      // var formData = new FormData(formulaire);
      // var data = {};
      // formData.forEach(function (value, key) {
      //   data[key] = value;
      // });
      var num1 = document.querySelector('.num1').value;
      var num2 = document.querySelector('.num2').value;

  
      var db = firebase.firestore();
      db.collection(collectionNom).add({
        num1: num1,
        
        num2: num2

        
        
      })
      var num1 = getElementVal('num1');
      var num2 = getElementVal('num2');
      saveMsg(num1);
      saveMsg(num2)
      
            // afficher alerte
      document.querySelector(".alert").style.display = "block";

            // supprimer alerte
      setTimeout (() => {

        document.querySelector(".alert").style.display = "none";
      },3000 )
      

        .then(function (docRef) {
          console.log("Document ajouté avec l'ID : ", docRef.id);
  
          // Une fois que les données sont envoyées, récupérez les données pour vérification
          lireDonneesDeFirebase(collectionNom);
        })
        .catch(function (error) {
          console.error("Erreur lors de l'ajout du document : ", error);
        });
    });



           
  }
          // renisialiser les formulaire
          document.getElementById("firstForm").reset();
          document.getElementById("secondForm").reset();

          const saveMsg = (num1, num2) => {
            var newNumForm = database.push();
            
            newNumForm.set({
              num1: num1,
              num2: num2
            });
        }

        const getElementVal = (id) => {
            return document.getElementById(id).value;
        }

  
  // Appelez la fonction pour chaque formulaire
  envoyerDonneesAuFirebase('firstForm', 'form1');
  envoyerDonneesAuFirebase('secondForm', 'form2');
  */

  // Configuration Firebase