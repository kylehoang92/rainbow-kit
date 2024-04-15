import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { Chain } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const carbon = {
  id: 9791,
  name: 'Carbon EVM Devnet',
  nativeCurrency: { name: 'Carbon', symbol: 'SWTH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://evm-scan.carbon.network'] },
  },
  blockExplorers: {
    default: { name: 'carbonscan', url: 'https://evm-scan.carbon.network' },
  },
} as const satisfies Chain;

const config = getDefaultConfig({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [carbon],
  ssr: false,
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
