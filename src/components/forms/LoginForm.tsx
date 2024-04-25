import { useState } from "react";
import { toast } from 'react-toastify';
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Link } from "react-router-dom";
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { reconnect, getAccount, watchAccount } from '@wagmi/core'
import { base, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Setup queryClient and configuration
const queryClient = new QueryClient();

// Get projectId at https://cloud.walletconnect.com
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID as string;

if (!projectId) {
   throw new Error('Project ID not found in environment variables');
}

const config = defaultWagmiConfig({
  chains: [base, sepolia],
  projectId,
  metadata: {
    name: 'PhotoEditor',
    description: 'PhotoEditor Website',
    url: 'https://cyberfishai.com',
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }
});

const modal = createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true,
    enableOnramp: true
});

const LoginForm = () => {
  const [hasConnected, setHasConnected] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent form submission

    // Reconnect to the wallet
    await reconnect(config);
    console.log("Wagmi Config is:", config);

    if (!getAccount(config).isConnected) {
      toast('Waiting for user to connect wallet...', { position: 'top-center' });
    }

    try {
      await modal.open();
    } catch (error) {
      // User closed the modal
      toast('Wallet connection error', { position: 'top-center' });
      return;  // Exit the function
    }
    let previousAddress: string | null | undefined = null;

    watchAccount(config, {
      // Only watch the address changes

      onChange(account) {
        if (account.address !== previousAddress) {
          previousAddress = account.address;
          if (account.isConnected) {
            toast(`Wallet connected: ${account.address}`, { position: 'top-center' });
            console.log("Wallet connected: ", account.address);
            setHasConnected(true);
          } else if (account.isDisconnected && hasConnected) {
            // The following message will be displayed only if the wallet was connected before
            toast('Wallet disconnected', { position: 'top-center' });
            console.log("Wallet disconnected");
            setHasConnected(false);
          }
        }
      }
    })
  };

   // TODO: Switch to the account page 
   return (
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <form onSubmit={onSubmit}>
            <div className="eg-login__input-wrapper" style={{ marginBottom: '50px' }}>
              <div className="eg-login__input-box">
                <div className="eg-login__input">
                  <p>To continue, please connect your Web3 wallet, such as <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">MetaMask</a> or <a href="https://walletconnect.org/" target="_blank" rel="noopener noreferrer">WalletConnect</a>. This allows our website to securely interact with your wallet.</p>
                  <p>By clicking &quot;Accept and Continue&quot;, you agree to our <a href="#" data-toggle="modal" data-target="#termsModal">terms and conditions</a> and <a href="#" data-toggle="modal" data-target="#privacyModal">privacy policy</a>. You will be prompted to connect your wallet via an external link. Ensure you're using a trusted and secure wallet service.</p>
                </div>
              </div>
            </div>
            <div className="eg-login__bottom">
              <button type="submit" className="btn w-100">Connect Your Wallet</button>
            </div>
          </form>
        </QueryClientProvider>
      </WagmiProvider>
   )
}

export default LoginForm
