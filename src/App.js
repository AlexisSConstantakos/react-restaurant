import React, { Component } from 'react';
// import './App.css';
import Hero from './components/hero/Hero';
import Navigation from './components/navigation/Navigation';
import Cards from './components/cards/Cards';
import Table from './components/table/Table';
import Footer from './components/footer/Footer';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Navigation /> 
          <Hero />

          <br/>
          <h1 className="App-title text-center">One Girl's Guide</h1>

        </header>
          
        <h2 className="text-center">...to the best dining in Portsmouth, NH!</h2>
        <br/>
        <br/>

        <div id="eat">
          <Cards src="http://3.bp.blogspot.com/-oZF8f5hs4Hw/TlWmQfZNRGI/AAAAAAAAJ6Y/U5TSfBRzsp8/s1600/DSC05482.JPG" id="Surf" name="Surf" title="Surf Website" link="http://surfseafood.com/menu/portsmouth/" />
          <Cards src="https://portsmouthbrewery.com/wp-content/themes/portsbrew/images/portsmouth-brewery-logo.png" id="Portsmouth"
          name="Portsmouth Brewery" title="Portsmouth Brewery Website" link="https://portsmouthbrewery.com/" />
          <Cards src="https://static1.squarespace.com/static/50c7626ae4b012358d46277b/t/5177d294e4b0cb77c3ff5ef6/1423071734122/IMG_2111.JPG" name="Martingale Wharf" id="Wharf" title="Martingale Wharf Website" link="http://www.martingalewharf.com/" />
          <Cards src="https://igx.4sqi.net/img/general/266x200/ME5COWYXECRB5KQHLNDLCJEBMT3LDIJW4TFCQYWMKGISOH52.jpg" id="Pocos" name="Poco's Bow Street Cantina" title="Pocos Website" link="https://pocosbowstreetcantina.com/" />
        </div>

        <br/>
        <br/>
        <br/>
        <Table />
        <br/>
        <Footer />

      </div>
    );
  }
}

export default App;
