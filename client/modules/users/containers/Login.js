import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Login from '../components/Login.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('USER_LOGIN_ERROR');
  onData(null, {error});
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  loginUser: actions.users.login,
  clearErrors: actions.users.clearLoginErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
