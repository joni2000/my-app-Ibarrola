import { AppTheme } from './theme/AppTheme';
import { AppRouter } from './routes/AppRouter';

import './app.css';
import { CartProvider } from './context/CartProvider';
 
export const App = ()=> {
  return (
    <CartProvider>
      <AppTheme>
        
        <AppRouter />

      </AppTheme>
    </CartProvider>
  );
}

