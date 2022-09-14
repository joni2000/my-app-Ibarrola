import { AppTheme } from './theme/AppTheme';
import { AppRouter } from './routes/AppRouter';
import { CartProvider } from './context/cart/CartProvider';
import { ProductProvider } from './context/products/ProductProvider';
import './app.css';
 
export const App = ()=> {
  return (
    <ProductProvider>
      <CartProvider>
        <AppTheme>
          
          <AppRouter />

        </AppTheme>
      </CartProvider>
    </ProductProvider>
  );
}

