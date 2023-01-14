import {useEffect} from 'react';
import {BrowserRouter, useLocation} from 'react-router-dom';

import 'normalize.css';
import './styles/App.scss';

import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import AppRouter from './components/AppRouter';

function App() {
  const handleScroll = () => {
    const header = document.querySelector('.js-header');
    
    if (window.scrollY) {
      header.style.boxShadow = '0 0 10px rgb(25 25 25 / 10%)';
      header.style.backgroundColor = '#fff';
    } else {
      header.removeAttribute('style');
    }
  };
  
  const AppWrapper = ({children}) => {
    const location = useLocation();

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
  };

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <AppRouter />
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
