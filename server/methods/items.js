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
}
