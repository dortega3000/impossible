import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Categories, Items} from '../../lib/collections';

export default function () {
  Meteor.methods({
    'categories.create'(name) {
      check(name, String);
      const createdAt = new Date();
      const category = {name, createdAt};
      Categories.insert(category);
    }
  });

  Meteor.methods({
    'items.create'(name, description, due) {
      check(name, String);
      check(description, String);
      check(due, String);
      const createdAt = new Date();
      const item = {name, description, due, createdAt};
      Items.insert(item);
    }
  });

  Meteor.methods({
    'items.markComplete'(id, complete) {
      check(complete, Boolean);
      check(id, String);
      Items.update(id, {
        $set: {complete: complete}
      });
    }
  });
}
