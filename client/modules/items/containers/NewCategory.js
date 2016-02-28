import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import NewCategory from '../components/NewCategory.jsx';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('CATEGORY_CREATE_ERROR');
  onData(null, {error});
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.categories.create,
  clearErrors: actions.categories.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewCategory);
