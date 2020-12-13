import './App.css';
import themeButton from "./components/themeButton";
import themes from './themeOptions.json';

function App() {
  state = {
    themes: themes,
    chosenTheme: 'Acting'
  };

  getRandomWords = (theme) => {
    theme.arrays.forEach((array) => {
      getRandomWordFromArray(array);
    });
  };

  getRandomWordFromArray = (themeArray) = {
    const randomIndex = Math.random() * themeArray.length;
    return themeArray[randomIndex];
  };

  selectTheme = (name) => {
    this.state.chosenTheme = name;
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Words in Action!
        </p>
          <p>Select your theme:</p>
          {this.state.themes.map(theme => (
            <themeButton
                id={theme.id}
                key={theme.id}
                name={theme.name}
                selectAlbum={this.selectTheme}
            />
           ))}
          <themeButton>Acting</themeButton>
      </header>
    </div>
  );
}

export default App;
