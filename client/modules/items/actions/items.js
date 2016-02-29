export default {

  create({Meteor, LocalState, FlowRouter}, name, description, due) {
    if (!name) {
      return LocalState.set('ITEM_SAVE_ERROR', 'Item name is required.');
    }
    if (!description) {
      return LocalState.set('ITEM_SAVE_ERROR', 'Item description is required.');
    }
    LocalState.set('ITEM_SAVE_ERROR', null);
    Meteor.call('items.create', name, description, due, (err) => {
      if (err) {
        return LocalState.set('ITEM_SAVE_ERROR', err.message);
      }
      else{
        FlowRouter.go('/');
      }
    });
  },

  edit({Meteor, LocalState, FlowRouter}, id, name, description) {
    if (!id) {
      return LocalState.set('ITEM_SAVE_ERROR', 'Item is required.');
    }
    if (!name) {
      return LocalState.set('ITEM_SAVE_ERROR', 'Item name is required.');
    }
    if (!description) {
      return LocalState.set('ITEM_SAVE_ERROR', 'Item description is required.');
    }
    LocalState.set('ITEM_SAVE_ERROR', null);
    Meteor.call('categories.edit', id, name, description, (err) => {
      if (err) {
        return LocalState.set('ITEM_SAVE_ERROR', err.message);
      }
    });
    FlowRouter.go('/');
  },

  markComplete({Meteor, LocalState, FlowRouter}, id, complete) {
      Meteor.call('items.markComplete', id, complete);
  },

  clearErrors({LocalState}) {
    return LocalState.set('ITEM_SAVE_ERROR', null);
  }
};
