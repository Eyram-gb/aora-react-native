import { Account, Client, ID } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.eyram.aora",
  projectId: "66772e730003cc180f47",
  databaseId: "66773083001c6bf20a89",
  userCollectionId: "667730ba002bb995e298",
  videoCollectionId: "66773137001eec6adae6",
  storageBucketId: "66773761001c868450df",
};

// Init your React Native SDK
const client = new Client();

const account = new Account(client);

export function createUser() {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
}

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.
