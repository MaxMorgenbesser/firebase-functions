const functions = require("firebase-functions");

//exports.helloThere=functions.https.onRequest


    exports.helloThere=functions.https.onRequest((req,res) =>
    {res.send('Hello there Firebase cloud user')
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


