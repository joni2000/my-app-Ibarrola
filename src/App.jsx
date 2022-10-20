import { AppTheme } from './theme/AppTheme';
import { AppRouter } from './routes/AppRouter';
import { CartProvider } from './context/cart/CartProvider';

import './app.css';
 
export const App = ()=> {
  return (
      <CartProvider>
        <AppTheme>
          
          <AppRouter />

        </AppTheme>
      </CartProvider>
  );
}

