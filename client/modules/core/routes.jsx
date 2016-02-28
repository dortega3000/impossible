import React from 'react';
import {mount} from 'react-mounter';

import Layout from './components/MainLayout.jsx';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(Layout);


}
