import './ListeRea.scss';
import Realisation from './Realisation';
import tabRea from '../data/realisations.json';

export default function ListeRea() {
  // État des dossiers (notez que cet état est défini dans le composant parent "Appli", et passé ici dans les props)
    return (

      <ul>
       {
         tabRea.map((prd) =>
         
          <Realisation 
                  key={prd.id}
                  id={prd.id} 
                  nom={prd.nom} 
                  details={prd.details}
                  techs={prd.techs}/>
         )
        }
      </ul>
    );
  }
