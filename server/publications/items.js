import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Categories} from '../../lib/collections';

export default function () {
  Meteor.publish('categories.list', function () {
    return Categories.find();
  });
}
