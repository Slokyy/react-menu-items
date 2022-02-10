import "./App.css";
import data from "./data.json";
import MenuItems from "./components/MenuItems/MenuItems";

function App() {


  return (
    <main>
      <section className="section menu">
        <h2>Our Menu</h2>
        <MenuItems data={data} />
      </section>
    </main>
  );
}

export default App;
