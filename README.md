# BookHive - A Book Management Web App

Bookish is a web application designed for managing and storing book information, including the book's name, ISBN number, price, and cover image. This project utilizes modern web technologies like React, Bootstrap, and Firebase for a seamless and efficient user experience.

## Table of Contents
- [Features](#features)
- [Project Architecture](#architecture)
- [Installation](#installation)
- [Usage](#usage)
- [Firebase Configuration](#firebase-configuration)
- [License](#license)

## Features
- User Authentication with Firebase
- Store book information (name, ISBN number, price, and cover image)
- View list of stored books

## Features

## Project Architecture
- Frontend
   1.  React Components: Structured using functional components with hooks (useState, useEffect) for state management and lifecycle methods.
   2.  React Context API: Manages global state, particularly for user authentication and Firebase interactions.
   3.  Bootstrap Integration: Ensures rapid UI development, responsiveness, and a modern aesthetic.

- Backend (Firebase)

    1. Firebase Authentication: Handles user sign-up and sign-in with email/password and Google OAuth providers. Monitors authentication state with onAuthStateChanged.
    2. Firestore Database: NoSQL database for storing book information with real-time capabilities.
    3. Firebase Storage: Uploads and stores cover images using uploadBytes, with file references stored in Firestore.

### Prerequisites
- Node.js and npm installed on your machine
- Firebase project set up

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/ArshitaKango/bookish.git
    cd bookish
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up Firebase:
    - Go to the Firebase Console and create a new project.
    - Create a Firestore database and storage bucket.
    - Enable Authentication with Email/Password and Google Sign-In.

4. Create a `firebaseConfig.js` file in the `src` directory and add your Firebase configuration:
    ```js
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    import { getStorage } from "firebase/storage";

    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const firestore = getFirestore(app);
    const storage = getStorage(app);

    export { auth, firestore, storage };
    ```

5. Start the development server:
    ```sh
    npm start
    ```

## Usage

### Running the App
After starting the development server, open [http://localhost:3000](http://localhost:3000) in your browser. You can sign up, sign in, and start adding books.

### Adding a Book
- Click on the "Add Book" button.
- Fill in the details: name, ISBN number, price, and upload the cover image.
- Click "Save" to store the book information in Firebase.

### Viewing Books
- The list of books will be displayed on the main page.
- Each book will show its name, ISBN number, price, and cover image.

## Firebase Configuration

To configure Firebase, follow these steps:
1. Create a Firebase project in the Firebase Console.
2. Set up Firestore and Storage.
3. Enable Email/Password and Google Sign-In authentication.
4. Update the `firebaseConfig.js` file with your Firebase project's configuration details.



## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

