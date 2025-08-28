
import React from 'react';

export const BitcoinIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.84 13.38h-1.42v2.36h-2.1v-2.36H9.58v-1.79h1.74v-2.82c0-1.14.5-2.23 1.58-2.58l.84-.28v1.65l-.3.08c-.37.1-.6.38-.6.78v2.17h2.08l-.28 1.79z"/>
  </svg>
);

export const EthereumIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L3 11.5l9 9.5 9-9.5L12 2zm0 2.69L18.31 11.5 12 16.57 5.69 11.5 12 4.69zM12 17.63l-6.31-4.96L12 20.19l6.31-7.52L12 17.63z"/>
  </svg>
);

export const SolanaIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.69 4.69a1.5 1.5 0 00-2.12 0L.19 7.07a1.5 1.5 0 000 2.12l4.5 4.5a1.5 1.5 0 002.12 0L9.19 11.3a1.5 1.5 0 000-2.12l-4.5-4.5zm0 9.62a1.5 1.5 0 00-2.12 0l-2.38 2.38a1.5 1.5 0 000 2.12L2.57 21.2a1.5 1.5 0 002.12 0l2.38-2.38a1.5 1.5 0 000-2.12l-2.38-2.38zm9.62-9.62a1.5 1.5 0 00-2.12 0L9.81 7.07a1.5 1.5 0 000 2.12l4.5 4.5a1.5 1.5 0 002.12 0L18.81 11.3a1.5 1.5 0 000-2.12l-4.5-4.5zm4.81 9.62a1.5 1.5 0 00-2.12 0l-2.38 2.38a1.5 1.5 0 000 2.12L14.38 21.2a1.5 1.5 0 002.12 0l2.38-2.38a1.5 1.5 0 000-2.12l-2.38-2.38z"/>
  </svg>
);
