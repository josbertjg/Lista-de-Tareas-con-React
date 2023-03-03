import ListContainer from './components/ListContainer';
import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <h1>Developed in ReactJS by <a href='https://josbertjg.github.io/' target='_blank'>Josbert Guedez</a></h1>
      <div className='contenedor'>
        <ListContainer/>
      </div>
    </div>
  );
}

export default App;
