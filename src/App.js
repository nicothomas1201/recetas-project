import './css/index.css'
import { Header } from './components/header'
import { Hero } from './components/hero'
import { SectionWhy } from './components/sectionWhy';
import { SectionPreparation } from './components/Section-preparation';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SectionWhy />
      <SectionPreparation />
    </div>
  );
}

export default App;
