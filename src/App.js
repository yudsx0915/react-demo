import logo from "./logo.svg";
import "./App.css";
import Person from "./components/Person";
import Weather2 from "./components/Weather2";
import ButtonTest3 from "./components/ButtonTest3";
import ButtonTest2 from "./components/ButtonTest2";

function App() {
    const param = { name: "Corey", age: 20 };
    const param2 = { name: "Doreen" };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ButtonTest3 />
                <Person {...param} />
                <Person {...param2} />
                <Weather2 />
            </header>
        </div>
    );
}

export default App;
