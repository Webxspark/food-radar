import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import IncidentForm from './pages/incident-form';
import ReportedCases from './pages/reported-cases';
import ReportPreview from './pages/report-preview';
import Admin from './pages/admin';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { Chain, configureChains, createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { AnonAadhaarProvider } from 'anon-aadhaar-react';

const customChain = {
  name: 'Hedera Testnet',
  chainId: 296,
  rpcUrls: {
    public: { http: ['https://testnet.hashio.io/api'] },
    default: { http: ['https://testnet.hashio.io/api'] },
  },
  nativeCurrency: { name: 'HBAR', symbol: 'HBAR', decimals: 8 },
}
const { chains, publicClient } = configureChains(
  [customChain],
  [
    alchemyProvider({ apiKey: process.env.REACT_APP_ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

function App() {
  const app_id = process.env.REACT_APP_ID || "";
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <AnonAadhaarProvider _appId={app_id} _isWeb={false}>
        <div>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/incident-form" element={<IncidentForm />} />
            <Route path="/reported-cases" element={<ReportedCases />} />
            <Route path="/report-preview" element={<ReportPreview />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        </AnonAadhaarProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
