import React, { useState } from 'react';
import './App.css';
import hikingTrailsHeader from './assets/hh.png';
import trailImage1 from './assets/trail1.jpg';
import trailImage2 from './assets/trail2.jpeg';
import trailImage3 from './assets/trail3.jpg';
import trailImage4 from './assets/trail4.jpg';
import trailImage5 from './assets/trail5.JPG';
import expandedImage1 from './assets/expanded1.png';
import expandedImage2 from './assets/expanded2.png';
import expandedImage3 from './assets/expanded3.png';
import expandedImage4 from './assets/expanded4.png';
import expandedImage5 from './assets/expanded5.png';

const trails = [
  { 
    id: 1, 
    name: 'Trilha das Cachoeiras', 
    description: 'Explore uma série de cachoeiras pitorescas ao longo do caminho.', 
    fullDescription: 'Descubra a beleza natural de várias cachoeiras ao longo desta trilha. Aprecie a serenidade da água fluindo e a vista exuberante ao redor.',
    image: trailImage2,
    expandedImage: expandedImage2,
    expandedDescription: 'Rota da Trilha das Cachoeiras.'
  },
  { 
    id: 2, 
    name: 'Trilha da Montanha', 
    description: 'Desafie-se com vistas panorâmicas deslumbrantes no topo da montanha.', 
    fullDescription: 'Suba ao topo desta montanha e desfrute de vistas panorâmicas deslumbrantes que vão deixar você sem fôlego.',
    image: trailImage1,
    expandedImage: expandedImage1,
    expandedDescription: 'Rota da Trilha da Montanha.'
  },
  { 
    id: 3, 
    name: 'Trilha do Bosque', 
    description: 'Caminhe por uma densa floresta de árvores centenárias e vida selvagem.', 
    fullDescription: 'Explore uma floresta densa cheia de árvores majestosas e vida selvagem fascinante. Descubra o encanto natural desta trilha única.',
    image: trailImage4,
    expandedImage: expandedImage4,
    expandedDescription: 'Rota da Trilha do Bosque.'
  },
  { 
    id: 4, 
    name: 'Trilha do Vale', 
    description: 'Descubra um vale tranquilo com riachos serenos e vegetação exuberante.', 
    fullDescription: 'Passeie por um vale sereno, onde riachos suaves fluem e a vegetação exuberante cria um ambiente tranquilo e relaxante.',
    image: trailImage3,
    expandedImage: expandedImage3,
    expandedDescription: 'Rota da Trilha do Vale.'
  },
  { 
    id: 5, 
    name: 'Trilha do Lago', 
    description: 'Contorne um lago sereno com oportunidades para natação e piqueniques.', 
    fullDescription: 'Caminhe ao redor de um lago sereno, onde você pode nadar em águas claras e aproveitar um piquenique à sombra de árvores maduras.',
    image: trailImage5,
    expandedImage: expandedImage5,
    expandedDescription: 'Rota da Trilha do Lago.'
  },
];

const TrailSquare = ({ trail, expanded, onClick }) => {
  return (
    <div className={`trail-square ${expanded ? 'expanded' : ''}`} onClick={() => onClick(trail.id)}>
      <img src={trail.image} alt={trail.name} className="trail-image" />
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">{trail.name}</h2>
        <p className="text-sm">{trail.description}</p>
        {expanded && <p className="text-sm">{trail.fullDescription}</p>}
      </div>
      {expanded && (
        <div className="expanded-content">
          <img src={trail.expandedImage} alt={trail.name} className="expanded-image" />
          <p className="expanded-description">{trail.expandedDescription}</p>
        </div>
      )}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#495636', color: '#ffffff', textAlign: 'center', padding: '20px 0', width: '100%' }}>
       <p className="text-xs">Programação para Dispositivos Móveis - UNIVALI</p>
       <p className="text-xs">Deborah Regina Heinig, Emmanuelle Benedett e Laura Sanches</p>
    </footer>
  );
};

function App() {
  const [expandedTrail, setExpandedTrail] = useState(null);

  const handleTrailClick = (trailId) => {
    if (expandedTrail === trailId) {
      setExpandedTrail(null);
    } else {
      setExpandedTrail(trailId);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: '#5f6f3a' }}>
      <header className="App-header">
        <div className="header-image" style={{ backgroundImage: `url(${hikingTrailsHeader})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      </header>
      <div className="flex justify-center">
        <nav className="flex flex-wrap justify-center">
          <div>
          <hr className="my-8 w-full" />
            <h2 className="text-2xl mb-4 white-text h2-center">Trilhas localizadas em Botuverá</h2>
            <hr className="my-8 w-full" />
            {trails.slice(0, 2).map(trail => (
              <TrailSquare
                key={trail.id}
                trail={trail}
                expanded={trail.id === expandedTrail}
                onClick={handleTrailClick}
              />
            ))}
          </div>
          
          <div>
          <hr className="my-8 w-full" />
            <h2 className="text-2xl mb-4 white-text h2-center">Trilhas localizadas em Bombinhas</h2>
            <hr className="my-8 w-full" />
            {trails.slice(2).map(trail => (
              <TrailSquare
                key={trail.id}
                trail={trail}
                expanded={trail.id === expandedTrail}
                onClick={handleTrailClick}
              />
            ))}
          </div>
        </nav>
      </div>
      <Footer />
    </div>
  );
}

export default App;
