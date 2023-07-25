/* global document, window */

import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './components/App.jsx';


const container = document.getElementById('app-client');
hydrateRoot(container, <App str='222222' />);
