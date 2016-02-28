export default {
  create({Meteor, LocalState, FlowRouter}, name) {
    if (!name) {
      return LocalState.set('CATEGORY_CREATE_ERROR', 'Category name is required.');
    }
    LocalState.set('CATEGORY_CREATE_ERROR', null);
    Meteor.call('categories.create', name, (err) => {
      if (err) {
        return LocalState.set('CATEGORY_CREATE_ERROR', err.message);
      }
    });
    FlowRouter.go('/categories');
  },
  clearErrors({LocalState}) {
    return LocalState.set('CATEGORY_CREATE_ERROR', null);
  }
};
