export default {
  create({Meteor, LocalState}, email, password) {
    if (!email) {
      return LocalState.set('USER_REGISTER_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('USER_REGISTER_ERROR', 'Password is required.');
    }
    LocalState.set('USER_REGISTER_ERROR', null);
    Accounts.createUser({email, password});
    FlowRouter.go('/');
  },

  clearRegisterErrors({LocalState}) {
    return LocalState.set('USER_REGISTER_ERROR', null);
  },

  login({Meteor, LocalState, FlowRouter}, email, password) {
    if (!email) {
      return LocalState.set('USER_LOGIN_ERROR', 'Email is required.');
    }
    if (!password) {
      return LocalState.set('USER_LOGIN_ERROR', 'Password is required.');
    }
    LocalState.set('USER_LOGIN_ERROR', null);
    Meteor.loginWithPassword(email, password);
    FlowRouter.go('/');
  },

  clearLoginErrors({LocalState}) {
    return LocalState.set('USER_LOGIN_ERROR', null);
  }

};
