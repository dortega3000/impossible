import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import ItemList from '../components/ItemList.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('items.list').ready()) {
    const items = Collections.Items.find({}, {sort: {due: -1}}).fetch();
    const totalItems = Collections.Items.find().count();
    const completedItems = Collections.Items.find({complete: true}).count() | 0;
    const percentage = Math.round((completedItems / totalItems) * 100);
    onData(null, {items, percentage});
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(ItemList);
