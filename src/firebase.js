import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  // Populate your firebase configuration data here.
  apiKey: 'AIzaSyAJ_jNAgADr3jIR6XOR8DCqb6jg9Cxi3aY',
  authDomain: 'bitcoined-aca6e.firebaseapp.com',
  databaseURL: 'https://bitcoined-aca6e.firebaseio.com',
  projectId: 'bitcoined-aca6e',
  storageBucket: 'bitcoined-aca6e.appspot.com',
  messagingSenderId: '990168430872'
})

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database()
