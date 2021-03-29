import './Entete.scss';
import { Avatar } from '@material-ui/core'; 
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';
import Grid from '@material-ui/core/Grid';
import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";

export default function Entete() {


  return (
    <header className="Entete">
    <Grid container>
        <Grid container item xs={8} spacing={0}>
          <div className="navigation"> 
            <ul>
                <li><img src="images/Logo.png" className="logo"/></li>
                <li><NavLink to="/" activeClassName="navActive" exact><p className='liNorm'>Accueil</p></NavLink></li>
                <li><NavLink to="/realisations" activeClassName="navActive"><p className='liNorm'>Réalisations</p></NavLink></li>
                <li><NavLink to="/aPropos" activeClassName="navActive"><p className='liNorm'>À propos</p></NavLink></li>
                <li><NavLink to="/meContacter" activeClassName="navActive"><p className='liNorm'>Me contacter</p></NavLink></li>
            </ul>
          </div>
        </Grid>
      </Grid>   
      </header>

   
     
        
       
 
  );

 
}
