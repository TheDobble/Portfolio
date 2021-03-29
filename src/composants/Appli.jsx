import './Appli.scss';
import Entete from './Entete';
import Accueil from './Accueil';
import Apropos from './Apropos';
import MeContacter from './meContacter';
import ListeRea from './ListeRea';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {Switch, BrowserRouter} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function Appli() {

  return (
    <div className="Appli">
      <Grid container justify="space-evenly" alignItems="flex-start" spacing={0}>
        <Grid container item xs={3} spacing={0}>
            <Entete/>
        </Grid>
        <Grid item xs={6}>
          <section className="contenu-principal">
            <Switch>
            <BrowserRouter path="/" exact><Accueil/></BrowserRouter>
            <BrowserRouter path="/realisations" exact>
              <ListeRea/>
            </BrowserRouter>
            <BrowserRouter path="/aPropos" exact><Apropos/></BrowserRouter>
            <BrowserRouter path="/meContacter" exact><MeContacter/></BrowserRouter>
          </Switch>
          </section>
        </Grid>
        <Switch>
            <BrowserRouter path={["/", "/aPropos", "/meContacter"]} exact>
                <Grid item xs={2}>
                  <section className="sideShow">
                    <h1>Meilleur projets!</h1>
                <Carousel axis ={'vertical'} autoPlay={true} interval={3000} 
                          infiniteLoop={true} showArrows={false} width={'100%'} 
                          showStatus={false} showThumbs={false} showIndicators ={false}>

                        <div className="CarouselContainer">
                            <img src="images/SlimeyEats.png" />
                        </div>
                        <div>
                            <img src="images/Cadenas.png"/>
                        </div>
                        <div>
                            <img src="images/Dietetique.png" />
                        </div>
                    </Carousel>
                    </section>
                </Grid>
            </BrowserRouter>
        </Switch>
      </Grid>      
    </div>
  );
}
