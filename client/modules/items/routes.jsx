import React from 'react';
import {mount} from 'react-mounter';

import Layout from '../core/components/MainLayout.jsx';
import ItemList from './containers/ItemList';
import EditItem from './containers/EditItem.js';
import CategoryList from './containers/CategoryList';
import NewCategory from './containers/NewCategory';

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

  FlowRouter.route('/edit/:itemId', {
    name: 'items.edit',
    action({itemId}) {
      mount(MainLayoutCtx, {
        content: () => (<EditItem itemId={itemId} />)
      });
    }
  });

  FlowRouter.route('/new/', {
    name: 'items.new',
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
