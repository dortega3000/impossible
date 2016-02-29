import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

import {Categories, Items} from '../../lib/collections';

export default function () {
  Meteor.publish('items.list', function () {
    Counts.publish(this, 'items.complete', Items.find({complete: true}), { noReady: true });
    Counts.publish(this, 'items.total', Items.find(), { noReady: true });
    return Items.find();
  });

  Meteor.publish('items.single', function(itemId) {
    check(itemId, String);
    const selector = {_id: itemId};
    return Items.find(selector);
  });

  Meteor.publish('categories.list', function () {
    return Categories.find();
  });

}
