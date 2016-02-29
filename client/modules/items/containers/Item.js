import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

import Item from '../components/Item.jsx';

export const composer = ({context}, onData) => {
    onData(null,{});
};

export const depsMapper = (context, actions) => ({
  markComplete: actions.items.markComplete,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Item);
