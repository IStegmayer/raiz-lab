import 'react-hot-loader';

import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import reactDom from 'react-dom';

const AppWithHotLoader = hot(App);

reactDom.render(<BrowserRouter>
                  <AppWithHotLoader />
                </BrowserRouter>, document.getElementById('root'));
