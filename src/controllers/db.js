const { collection, addDoc }  = require("firebase/firestore" )  
const {db} = require("../config/firebase");

const  addUser =  async (req, res)=>{

    const {first, last} = req.body ;
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: first ,
          last: last
          
        });
        res.json({
            message:"Added successfully"
        })
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}


const getUsers =  async ()=>{
const querySnapshot = await getDocs(collection(db, "users"));
const users = querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
  
});

res.json(users)

}

module.exports = {
    addUser ,
    getUsers
}