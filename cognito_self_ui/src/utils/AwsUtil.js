import Amplify, {
  Auth,
  API,
} from 'aws-amplify';

Amplify.Logger.LOG_LEVEL = 'DEBUG';
Amplify.configure({
  Auth: {
    region: process.env.VUE_APP_AWS_REGION,
    identityPoolId: process.env.VUE_APP_AWS_COGNITO_ID_POOL_ID,
    userPoolId: process.env.VUE_APP_AWS_COGNITO_USERPOOL_ID,
    userPoolWebClientId: process.env.VUE_APP_AWS_COGNITO_USERPOOL_CLIENT_ID,
  },
  API: {
    endpoints: [{
      name: process.env.VUE_APP_API_NAME,
      endpoint: process.env.VUE_APP_API_ENDPOINT,
      region: process.env.VUE_APP_AWS_REGION,
    }]
  },
});

export function signUp(username, password) {
  return Auth.signUp({
    username,
    password,
  });
}

export function signIn(username, password) {
  return Auth.signIn(username, password);
}

export function signOut() {
  return Auth.signOut();
}

export function get(api, path) {
  const myInit = {
    headers: {},
    response: true,
  };
  return API.get(api, path, myInit);
}
