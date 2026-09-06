/* ============================================================
   CONFIGURACIÓN DE FIREBASE
   ------------------------------------------------------------
   1. Ve a https://console.firebase.google.com y crea un proyecto.
   2. En "Build > Authentication" activa "Correo electrónico/Contraseña".
   3. En "Build > Firestore Database" crea la base de datos.
   4. En "Build > Storage" activa el almacenamiento.
   5. En "Configuración del proyecto > Mis aplicaciones" agrega una
      aplicación Web y copia aquí el objeto "firebaseConfig".
   6. Mientras dejes los valores "PEGA_TU_...", el sistema funciona
      en MODO DEMO (datos locales del navegador).
   ============================================================ */
window.FIREBASE_CONFIG = {
  apiKey: "PEGA_TU_API_KEY",
  authDomain: "PEGA_TU_PROJECT_ID.firebaseapp.com",
  projectId: "PEGA_TU_PROJECT_ID",
  storageBucket: "PEGA_TU_PROJECT_ID.appspot.com",
  messagingSenderId: "PEGA_TU_SENDER_ID",
  appId: "PEGA_TU_APP_ID"
};
