import * as AwsUtil from './AwsUtil';

export function signUp(email, password) {
  return AwsUtil.signUp(email, password);
}

export function signIn(email, password) {
  return AwsUtil.signIn(email, password);
}

export function signOut() {
  return AwsUtil.signOut();
}
