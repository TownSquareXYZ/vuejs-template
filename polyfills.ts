import { Buffer } from 'buffer';

import { Telegram } from '@twa-dev/types';
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
  interface Window {
    Telegram?: Telegram;
  }
}

if (window && !window.Buffer) {
  window.Buffer = Buffer;
}

