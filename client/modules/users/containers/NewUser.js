import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import NewUser from '../components/NewUser.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('USER_REGISTER_ERROR');
  onData(null, {error});
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.users.create,
  clearErrors: actions.users.clearRegisterErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewUser);
