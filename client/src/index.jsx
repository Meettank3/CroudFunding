import ReactDOM from 'react-dom/client';
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';

import App from './App';
// creating root element   
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <ThirdwebProvider desiredChainId={ChainId.Sepolia}>
      <Router>
         <App />
      </Router>
   </ThirdwebProvider>
)

/*
   contract address which is deployed on sepolia testnet 0xe95744c61584B4C01ca2D3a2f466CB3c4f79b3FD
   for deploy use below command:
   npx hardhat run ignition/scripts/deploy.js --network sepolia

*/
