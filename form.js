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

        // Initialisez Firebase
        firebase.initializeApp(firebaseConfig);

        // Obtenez une référence à la base de données
        var database = firebase.database().ref("inscriptionForm");
        

        // Gérez la soumission du formulaire
        document.getElementById('inscriptionForm').addEventListener("submit", inscriptionForm);
        function inscriptionForm(e){
            e.preventDefault();

            var num = getElementVal('num');

            saveMsg(num);

            // afficher alerte
            document.querySelector(".alert").style.display = "block";

            // supprimer alerte
            setTimeout (() => {
                document.querySelector(".alert").style.display = "none";
            },3000 );

            // renisialiser le formulaire
            document.getElementById("inscriptionForm").reset()


        }
        const saveMsg = (num) => {
            var newNumForm = database.push();
            
            newNumForm.set({
                num : num,
            });
        }

        const getElementVal = (id) => {
            return document.getElementById(id).value;
        }

