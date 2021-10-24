import ButtonTest3 from "./components/ButtonTest3";
import FormTest from "./components/FormTest";
import FormTest2 from "./components/FormTest2";
import LifeCycle from "./components/LifeCycle";
import LifeCycleNew from "./components/LifeCycleNew";
import Person from "./components/Person";
import Weather2 from "./components/Weather2";
import PubSub from "pubsub-js";
import PubSubTest from "./components/PubSubTest";

function App2() {
    const param = { name: "Corey", age: 20 };
    const param2 = { name: "Doreen" };
    return (
        <div className="App2">
            <ButtonTest3 />
            <Person {...param} />
            <Person {...param2} />
            <Weather2 />
            <FormTest2 />
            <LifeCycleNew />
        </div>
    );
}

export default App2;
