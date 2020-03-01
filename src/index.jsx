
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import reactDom from 'react-dom';

reactDom.render(<BrowserRouter>
                  <App />
                </BrowserRouter>, document.getElementById('root'));
