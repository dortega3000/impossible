import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import EditItem from '../components/EditItem.jsx';

export const composer = ({context, itemId, clearErrors}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  const error = LocalState.get('ITEM_SAVE_ERROR');
  if (itemId !== undefined) {
    if (Meteor.subscribe('items.single', itemId).ready()) {
      const item = Collections.Items.findOne(itemId);
      onData(null, {item, error});
    } else {
      const item = Collections.Items.findOne(itemId);
      if (item) {
        onData(null, {item});
      } else {
        onData();
      }
    }
  } else {
    onData(null, {error});
  }
  // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  createItem: actions.items.create,
  editItem: actions.items.edit,
  clearErrors: actions.items.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(EditItem);
