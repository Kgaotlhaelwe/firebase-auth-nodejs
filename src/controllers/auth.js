const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  signInWithCredential,
} = require("firebase/auth");

const { auth, db } = require("../config/firebase");

const signUp = (req, res) => {
  const { email, password } = req.body;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      res.json({
        message: "User successfully added",
        user: userCredential.user,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Log the error or handle it as needed
      res.status(400).json({ error: errorCode, message: errorMessage });
    });
};

const signIn = (req, res) => {
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      res.json({
        message: "User successfully lgged",
        user: userCredential.user,
      });

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};


const forgotPassword = (req, res)=>{
  const {email} = req.body ;
  sendPasswordResetEmail(auth, email)
  .then(() => {
     res.json ({
      message:"Please check your email"
     })
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}

const logOut =  (()=>{
  
})

module.exports = {
  signUp,
  signIn,
  forgotPassword
};
