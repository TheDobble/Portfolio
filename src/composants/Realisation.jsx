import './Realisation.scss'; 
 
export default function Realisation({id, nom, details, techs}) {

  return (
    <article className="Realisation" style={{backgroundColor: "grey"}}>
      <div className="couverture">
        <img src={'Portfolio/images/' + id} alt={nom}/>
      </div>
      <div className="info">
        <h2>{nom}</h2>
        <h3>{techs}</h3>
        <p>{details}</p>
      </div>
    </article>
  );
}
