import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import ContentDivider from './components/ContentDivider';
import Skills from './components/Skills';
import About from './components/About';
import Products from './components/Products';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <ContentDivider className='contentDivider' />
      <Skills />
      <About />
      <Products />
    </div>
  );
}

export default App;
