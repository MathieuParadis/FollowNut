import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import { Link } from 'react-router-dom';

// ASSETS IMPORTS
import appointement from 'assets/images/appointement.png';
import calendar from 'assets/images/online_calendar.png';
import doctors from 'assets/images/doctors.png';
import dashboard from 'assets/images/dashboard.png';
import data from 'assets/images/data.png';
import app from 'assets/images/app.png';
import notebook from 'assets/images/notebook.png';
import article from 'assets/images/article.png';
import PwaModal from 'components/PwaModal';
import Cookies from 'js-cookie';

const Home = () => {

  return (
    <div className="home page-padding">
      {!window.matchMedia("(display-mode: standalone)").matches && <PwaModal />}
      <section className="section bg-blue px-5 align-items-center">
        <div className="section1-left">
          <h1 className="text-white">
            Le suivi parfait entre patient et nutritioniste
          </h1>
          <h5 className="text-white pt-2 pb-4 text-justify">
            De la prise de rendez-vous, au suivi des patients, FollowNut offre
            une solution gratuite, simple et efficace. Inscrivez-vous !
          </h5>
          {Cookies.get("patient_token_cookie") === undefined && 
            Cookies.get("nutritionist_token_cookie") === undefined &&
            <div className="d-flex row">
              {/* <Link to="/signup-nutritionist" className=" my-1 primary-button btn-lg btn-primary text-white">
                Je suis un nutritioniste
              </Link>
              <Link to="/signup-nutritionist" className=" my-1 primary-button btn-lg btn-primary text-white">
                Je suis un patient
              </Link> */}
              <div className=" my-2 d-flex col-sm-12 col-md-12 col-lg-5">
                <Link to="/signup-nutritionist" className="primary-button btn-lg btn-primary text-white ">
                  Je suis un nutritioniste
                </Link>
              </div>
              <div className=" my-2 d-flex col-12 col-md-12 col-lg-5">
                <Link to="/signup-nutritionist" className="primary-button btn-lg btn-primary text-white">
                  Je suis un patient
                </Link>
              </div>
            </div>}
        </div>
        <div className="section1-right">
          <img
            className="appointement"
            src={appointement}
            alt="Calendar illustration"
          />
        </div>
      </section>

      <section className="section">
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={data} alt="Data illustration" />
            </div>
            <h4>Données sécurisées</h4>
            <p>
              Avec notre solution basée sur le Web, vos données sont en sécurité
              et accessibles de n'importe où.
            </p>
          </div>
          {/* <Link to="/" className="link">
            <span>En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </Link> */}
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={doctors} alt="Docs illustration" />
            </div>
            <h4>Gestion simplifiée</h4>
            <p>
              Des indicateurs sante developpés en collaboration avec des
              nutritionistes pour vous permettre un meilleur suivi de vos
              patients
            </p>
          </div>
          {/* <Link to="/" className="link">
            <span>En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </Link> */}
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img className="calendar" src={calendar} alt="Calendar illustration"/>
            </div>
            <h4>Prise de rendez-vous en ligne</h4>
            <p>
            Gagnez du temps grâce à notre plateforme de réservation en ligne.
            Cette fonctionalité permettra à vos patients, nouveaux et actuels,
            de prendre rendez-vous en un clic.
            </p>
          </div>
          {/* <Link to="/" className="link">
            <span>En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </Link> */}
        </div>
      </section>

      <section className="section bg-blue align-items-center">
        <div className="section3-left">
          <img className="img-container" src={dashboard} alt="Dashboard illustration" />
        </div>
        <div className="section3-right">
          <h2 className="text-white">Tableau de bord</h2>
          <h6 className="pt-4 text-justified text-white">
            Tous vos clients au même endroit et gérables en quelques clics sur
            votre tableau de bord.
          </h6>
          <Link to="/" className="link">
            <span>En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </Link>
        </div>
      </section>

      <section className="section align-items-center">
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={notebook} alt="Notebook illustration" />
            </div>
            <h4>Journal personnel</h4>
            <p>
              Permettez à vos patients de noter leurs progrès dans un espace
              dédié, et ainsi faciliter leur suivi.
            </p>
          </div>
          {/* <Link to="/" className="link">
            <span>En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </Link> */}
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={app} alt="Web app illustration" />
            </div>
            <h4>Application web</h4>
            <p>
              Une application disponible sur mobile et tablette pour rester en
              contact avec vos clients.
            </p>
          </div>
          {/* <Link to="/" className="link">
            <span>En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </Link> */}
        </div>
        <div className="sub-section d-flex flex-column justify-content-between">
          <div>
            <div className="img-box mb-3">
              <img src={article} alt="Article illustration" />
            </div>
            <h4>Développer une audience</h4>
            <p>
              Partagez vos recettes, astuces nutrition, sport et santé afin de
              pouvoir toucher plus de clients.
            </p>
          </div>
          {/* <Link to="/" className="link">
            <span>En savoir plus</span>
            <FontAwesomeIcon icon={faArrowRight} className="mx-2" />
          </Link> */}
        </div>
      </section>
    </div>
  );
};

export default Home;