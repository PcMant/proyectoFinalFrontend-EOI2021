export interface User {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
    username?: string;//para guardar en una vble el cambio del nombre de usuario
    
  }
  