import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import * as nearAPI from 'near-api-js';
import getConfig from './config'
import reportWebVitals from './reportWebVitals';

async function initContract() {
  const nearConfig = getConfig(process.env.NODE_ENV || 'development');
  // Initializing connection to the NEAR TestNet
  const near = await nearAPI.connect({
    deps: {
      keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
    },
    ...nearConfig,
  });

  // Needed to access wallet
  const walletConnection = new nearAPI.WalletConnection(near);

  // Load in account data
  let currentUser;
  if (walletConnection.getAccountId()) {
    currentUser = {
      accountId: walletConnection.getAccountId(),
      balance: (await walletConnection.account().state()).amount,
    };
  }

  // Initializing our contract APIs by contract name and configuration
  const contract = await new nearAPI.Contract(
    walletConnection.account(),
    nearConfig.contractName,
    {
      // View methods are read-only – they don't modify the state, but usually return some value
      viewMethods: ['get_book', 'get_books'],
      // Change methods can modify the state, but you don't receive the returned value when called
      changeMethods: ['add_book', 'update_book', 'delete_book'],
      // Sender is the account ID to initialize transactions.
      // getAccountId() will return empty string if user is still unauthorized
      sender: walletConnection.account(),
    }
  );

  return { contract, currentUser, nearConfig, walletConnection };
}

window.nearInitPromise = initContract().then(({ contract, currentUser, nearConfig, walletConnection }) => {
  ReactDOM.render(
    // <React.StrictMode>
    <App
      contract={contract}
      currentUser={currentUser}
      nearConfig={nearConfig}
      wallet={walletConnection}
    />,
    // {/* </React.StrictMode>, */ }
    document.getElementById('root')
  );
})

// reportWebVitals();
