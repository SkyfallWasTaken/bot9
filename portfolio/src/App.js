import './App.css';
import Navbar from './Navbar';
import TypeWrite from './TypeWrite';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <TypeWrite text={[
            "Hello, I am a student!",
            "I am an engineer!",
            "Welcome to my Portfolio!",
          ]}
          typingSpeed={100}
        deletingSpeed={50}
        duration={1000}
        
        />
    </div>
  );
}



export default App;
