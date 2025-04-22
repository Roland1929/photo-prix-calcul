
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Désactiver le rechargement automatique en production pour améliorer l'expérience PWA
if (import.meta.env.PROD) {
  window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    return (event.returnValue = '');
  });
}

createRoot(document.getElementById("root")!).render(<App />);
