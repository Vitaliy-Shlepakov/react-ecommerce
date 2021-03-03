import './App.scss';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainSection from './components/main-section';
import ProductsContextProvider from './context/products-context'

function App() {
    return (
        <ProductsContextProvider>
            <div className="App">
                <Header/>
                <Hero/>
                <MainSection/>
            </div>
        </ProductsContextProvider>
    );
}

export default App;
