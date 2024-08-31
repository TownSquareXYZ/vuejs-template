// buffer-polyfill.js

import { Buffer } from 'buffer';

if (typeof global.Buffer === 'undefined') {
  global.Buffer = Buffer;
  console.log('Buffer polyfill loaded successfully!');
}