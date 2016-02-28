import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../core/components/MainLayout.jsx';
import ItemList from './components/ItemList.jsx';
import EditItem from './components/EditItem.jsx';
import CategoryList from './containers/CategoryList.js';
import NewCategory from './containers/NewCategory.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);

  FlowRouter.route('/', {
    name: 'items.list',
    action() {
      if (!Meteor.user()){
          FlowRouter.go('/login');
          return;
      }
      mount(MainLayoutCtx, {
        content: () => (<ItemList />)
      });
    }
  });

  FlowRouter.route('/edit', {
    name: 'items.edit',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EditItem />)
      });
    }
  });

  FlowRouter.route('/categories', {
    name: 'categories.list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<CategoryList />)
      });
    }
  });

  FlowRouter.route('/categories/new/', {
    name: 'categories.new',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewCategory />)
      });
    }
  });
}
