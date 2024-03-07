const {Firestore} = require("@google-cloud/firestore");  
const db = new Firestore();

async function createCollection(name) {
    // Membuat Collection root-level
    const collection = db.collection(name);
    return collection
}

async function addPrediction(prediction){
    collection = createCollection('predictions')
    await collection.doc(prediction.id).set(prediction)
}
