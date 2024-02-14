import { ProductsPage } from "./pages/products-page/component.jsx";
import './App.css'

export const App = ( {products} ) => {
    return <ProductsPage products={ products }/>
}