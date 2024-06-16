import Header from './components/Header/Header.jsx';
import StarCraftFactions from './components/StarCraftFactions/StarCraftFactions.jsx';
import { FACTIONS_DATA } from './data.js';

function App() {
  return (
    <div>
      
      <Header />

      <main>

        <h2>Time to get Started!</h2>
          
          <section id="core-concepts">

            <h2>Facciones de StarCraft</h2>
            
            <ul>
              <StarCraftFactions 
              {... FACTIONS_DATA[0]}
              />

              <StarCraftFactions 
              {... FACTIONS_DATA[1]}
              />

              <StarCraftFactions 
              {... FACTIONS_DATA[2]}
              />

              <StarCraftFactions 
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