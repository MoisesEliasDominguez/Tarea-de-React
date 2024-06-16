import Header from './components/Header/Header.jsx';
import Coraje from './components/MyPerfil/Coraje.jsx';
import { FACTIONS_DATA } from './data.js';

function App() {
  return (
    <div>
      
      <Header />

      <main>
          
          <section id="core-concepts">

            <h2>Lista de videojuegos</h2>
            
            <ul>
              <Coraje 
              {... FACTIONS_DATA[0]}
              />

              <Coraje
              {... FACTIONS_DATA[1]}
              />

              <Coraje
              {... FACTIONS_DATA[2]}
              />

              <Coraje
              image={FACTIONS_DATA[3].image}
              title={FACTIONS_DATA[3].title}
              description={FACTIONS_DATA[3].description}
              />
            </ul>

          </section>

      </main>

    </div>
  );
}

export default App;