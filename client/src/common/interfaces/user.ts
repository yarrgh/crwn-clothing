export interface User {
  displayName: string;
  email: string;
  uid: string;
}

export interface SignInCredentials {
  email: string;
  password: string;
}
export interface SignUpCredentials extends SignInCredentials {
  displayName: string;
}

export interface SignUpSuccessCredentials {
  user: User;
  additionalData?: { [key: string]: any };
}
