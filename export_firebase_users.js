const admin = require('firebase-admin');
const fs = require('fs');

// Fetch the service account key JSON file contents
// You must provide the path to your service account key file here
const serviceAccount = require('./service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const auth = admin.auth();

async function exportUsers() {
  console.log("Starting user export...");
  const users = [];
  
  try {
    // List batch of users, 1000 at a time.
    let listUsersResult = await auth.listUsers(1000);
    
    while (listUsersResult.users.length > 0) {
      listUsersResult.users.forEach((userRecord) => {
        users.push({
          uid: userRecord.uid,
          email: userRecord.email,
          emailVerified: userRecord.emailVerified,
          displayName: userRecord.displayName,
          disabled: userRecord.disabled,
          lastSignInTime: userRecord.metadata.lastSignInTime,
          creationTime: userRecord.metadata.creationTime,
          passwordHash: userRecord.passwordHash ? userRecord.passwordHash.toString('base64') : undefined,
          passwordSalt: userRecord.passwordSalt ? userRecord.passwordSalt.toString('base64') : undefined,
        });
      });
      console.log(`Fetched ${users.length} users so far...`);
      
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listUsersResult = await auth.listUsers(1000, listUsersResult.pageToken);
      } else {
        break; // No more users
      }
    }
    
    // Save to JSON file
    fs.writeFileSync('firebase_users_export.json', JSON.stringify(users, null, 2), 'utf8');
    console.log(`Successfully exported ${users.length} users to firebase_users_export.json`);
    
  } catch (error) {
    console.error('Error listing users:', error);
  }
}

exportUsers();
