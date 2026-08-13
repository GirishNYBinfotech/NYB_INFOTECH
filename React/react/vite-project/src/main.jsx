import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from "../src/components_09-07-2026/Redux_14-07-2026/Redux/Store.jsx";
import CounterProvider from './components_09-07-2026/Redux_14-07-2026/Contextapi/ProviderCounter.jsx';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//      <Provider store={store}>
//       <CounterProvider>
//         <App />
//       </CounterProvider>
//     </Provider>
//   </React.StrictMode>
// )

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <CounterProvider>
      <App />
    </CounterProvider>
  </Provider>
);