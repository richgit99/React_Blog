// import logo from './logo.svg';
import taj from './taj.jpg';
import great_wall_of_china from './great_wall_of_china.jpg';
import petra from './petra.jpg';
import macchu from './machu.jpg';
import red_wave from './red_wave.svg';
import jesus from './jesus.jpg';
import Clossium from './Clossium.jpg';
import Chicken_itza from './Chicken_Itza.jpg';
import './App.css';
import React, { useState } from 'react';


function RealApp() {

  const [infoShow_1, setInfoShow_1] = useState(false);
  const [buttonText_1, setButtonText_1] = useState('Read More');

  const [infoShow_2, setInfoShow_2] = useState(false);
  const [buttonText_2, setButtonText_2] = useState('Read More');

  const [infoShow_3, setInfoShow_3] = useState(false);
  const [buttonText_3, setButtonText_3] = useState('Read More');

  const [infoShow_4, setInfoShow_4] = useState(false);
  const [buttonText_4, setButtonText_4] = useState('Read More');

  const [infoShow_5, setInfoShow_5] = useState(false);
  const [buttonText_5, setButtonText_5] = useState('Read More');

  const [infoShow_6, setInfoShow_6] = useState(false);
  const [buttonText_6, setButtonText_6] = useState('Read More');

  const [infoShow_7, setInfoShow_7] = useState(false);
  const [buttonText_7, setButtonText_7] = useState('Read More');

  function infoShowFunction_1() {

    infoShow_1 == false ? setInfoShow_1(true) : setInfoShow_1(false);
    infoShow_1 == true ? setButtonText_1("Read More") : setButtonText_1("Close Reading");

  }

  function infoShowFunction_2() {

    infoShow_2 == false ? setInfoShow_2(true) : setInfoShow_2(false);
    infoShow_2 == true ? setButtonText_2("Read More") : setButtonText_2("Close Reading");

  }

  function infoShowFunction_3() {

    infoShow_3 == false ? setInfoShow_3(true) : setInfoShow_3(false);
    infoShow_3 == true ? setButtonText_3("Read More") : setButtonText_3("Close Reading");

  }

  function infoShowFunction_4() {

    infoShow_4 == false ? setInfoShow_4(true) : setInfoShow_4(false);
    infoShow_4 == true ? setButtonText_4("Read More") : setButtonText_4("Close Reading");

  }

  function infoShowFunction_5() {

    infoShow_5 == false ? setInfoShow_5(true) : setInfoShow_5(false);
    infoShow_5 == true ? setButtonText_5("Read More") : setButtonText_5("Close Reading");

  }

  function infoShowFunction_6() {

    infoShow_6 == false ? setInfoShow_6(true) : setInfoShow_6(false);
    infoShow_6 == true ? setButtonText_6("Read More") : setButtonText_6("Close Reading");

  }

  function infoShowFunction_7() {

    infoShow_7 == false ? setInfoShow_7(true) : setInfoShow_7(false);
    infoShow_7 == true ? setButtonText_7("Read More") : setButtonText_7("Close Reading");

  }


  return (
    <>
      <header>
        <h1 className='title_of_site'>
          Seven Wonders of the World

        </h1>
      </header>

      <div className="container">

        {/* <img src={red_wave} alt='taj mahel picture' /> */}
        {/* Taj mehal */}

        <div>

          <img src={taj} alt='taj mahel picture' />

          <h2>Taj Mahel (India) </h2>

          <button onClick={infoShowFunction_1} style={{ fontSize: "large", display: "block", margin: "0 auto", padding: "0.3em 1em" }}>
            {buttonText_1} </button>

          {infoShow_1 && <p>The Taj Mahal, located in Agra, India, is an iconic
            masterpiece and one of the Seven Wonders of the World.
            Built by Emperor Shah Jahan in the 17th century as a
            mausoleum for his beloved wife Mumtaz Mahal, it is
            renowned for its stunning white marble architecture,
            intricate carvings, and symmetrical design.
          </p>}

        </div>


        <br /><br />

        {/* Great wall of china */}

        <div>

          <img src={petra} alt='Picture of Petra' />

          <h2>Petra (Jordan) </h2>

          <button onClick={infoShowFunction_2} style={{ fontSize: "large", display: "block", margin: "0 auto", padding: "0.3em 1em " }}>
            {buttonText_2} </button>

          {infoShow_2 && <p>Nestled in the southwestern desert of Jordan, Petra is an ancient city carved into the rose-red sandstone cliffs. Known as the "Rose City," Petra was a bustling trade center in ancient times and is renowned for its magnificent facades and intricate rock-cut architecture, including the iconic Treasury, Al-Khazneh.


          </p>}

        </div>

        <br /><br />

        <div>

          <img src={great_wall_of_china} alt='Graet wall of china picture' />

          <h2>Great Wall of China (China) </h2>

          <button onClick={infoShowFunction_7} style={{ fontSize: "large", display: "block", margin: "0 auto", padding: "0.3em 1em " }}>
            {buttonText_7} </button>

          {infoShow_7 && <p>The Great Wall of China is an awe-inspiring feat of engineering and one of the most iconic landmarks in the world. Stretching over 13,000 miles, it was constructed as a defense system to protect China from invasions. This remarkable structure is a UNESCO World Heritage site and offers breathtaking views of the surrounding landscapes.
          </p>}

        </div>


        <br /><br />

        {/* Chicken Itza */}

        <div>

          <img src={Chicken_itza} alt='Chicken itza picture' />

          <h2>Chicken Itza (Mexico) </h2>

          <button onClick={infoShowFunction_3} style={{ fontSize: "large", display: "block", margin: "0 auto", padding: "0.3em 1em " }}>
            {buttonText_3} </button>

          {infoShow_3 && <p> Located in Mexico's Yucatan Peninsula, Chichen Itza
            is an extraordinary archaeological site that was once a major Mayan city. The centerpiece of Chichen Itza is the impressive El Castillo pyramid, known as the Temple of Kukulcan,
            which demonstrates advanced astronomical and architectural knowledge of the Mayan civilization.
          </p>}

        </div>


        <br /><br />


        {/* Machu Picchu */}

        <div>

          <img src={macchu} alt='Picture Machu Picchu' />

          <h2>Machu Picchu (Mexico) </h2>

          <button onClick={infoShowFunction_4} style={{ fontSize: "large", display: "block", margin: "0 auto", padding: "0.3em 1em " }}>
            {buttonText_4} </button>

          {infoShow_4 && <p> Situated high in the Andes Mountains of Peru, Machu Picchu is an ancient Inca citadel dating back to the 15th century. Known for its remarkable architecture and breathtaking mountain vistas, this archaeological marvel was rediscovered in 1911 and is now a UNESCO World Heritage site and a popular tourist destination.
          </p>}

        </div>


        <br /><br />

        {/* Colosseum */}

        <div>

          <img src={Clossium} alt='Picture of Colosseum' />

          <h2>Colosseum (Italy) </h2>

          <button onClick={infoShowFunction_5} style={{ fontSize: "large", display: "block", margin: "0 auto", padding: "0.3em 1em " }}>
            {buttonText_5} </button>

          {infoShow_5 && <p> The Colosseum in Rome, Italy, is a colossal amphitheater that dates back to the first century AD. This grand structure was used for gladiatorial contests, public spectacles, and theatrical performances. Despite its partial ruin, the Colosseum stands as a remarkable testament to Roman engineering and is an enduring symbol of ancient Rome's grandeur.


          </p>}

        </div>

        <br /><br />
        {/* Great wall of china */}

        <div>

          <img src={jesus} alt='Picture of Christ the Redeemer' />

          <h2>Christ the Redeemer (Brazil) </h2>

          <button onClick={infoShowFunction_6} style={{ fontSize: "large", display: "block", margin: "0 auto", padding: "0.3em 1em " }}>
            {buttonText_6} </button>

          {infoShow_6 && <p> Located in Rio de Janeiro, Brazil, Christ the Redeemer is a colossal statue standing atop the Corcovado mountain. Symbolizing Brazil's cultural and religious heritage, this 125-foot-tall statue of Jesus Christ welcomes visitors with outstretched arms and provides panoramic views of the vibrant city below.


          </p>}

        </div>
        <br /><br />
      </div>

      <footer>
        <h3>Copyright © Richard Mascarenhas 2023. All rights reserved.</h3>
      </footer>

    </>
  );
}

export default RealApp;
