import React, { Component } from 'react';
import './styles.css';
import Navbar from '../../components/navbar/index';
import Premiere from '../../components/premiere/index';
import Ranked from '../../components/ranked/index';
// import Favs from '../../components/favs/index';
import Search from '../../components/search/index';

const url = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-22&endtime=2019-01-24';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      quakes: [],
      error: false
    };
  }

  async componentDidMount() {
    try {
      this.setState({loading: true, error: false });
      const response = await fetch(url);
      const responseJson = await response.json();
      const quakes = responseJson.features;
      this.setState({quakes, loading: false, error: false });
    } catch(e) {
      this.setState({ loading: false, error: true })
    }
  }

  render() {
    const { quakes, loading, error } = this.state;
    return (
      <div className="Home">
        <div className="container">
           <Navbar />
           <div className="premiere">
            <h1>Estrenos</h1>
            {!loading && quakes.filter(quake => quake.properties.mag > 5).map(quake =>
              <Premiere quake={quake} />
            )}
            {loading && <p>Cargando información...</p> }
            {!loading && !error && !quakes.length && <h2>No hay información disponible</h2>}
            {!loading && error && <h2>Ocurrió un error</h2>}
          </div>
          <div className="ranked">
            <h1>Mejor Rankeadas</h1>
            {!loading && quakes.filter(quake => quake.properties.mag > 9).map(quake =>
              <Ranked quake={quake} />
            )}
            {loading && <p>Cargando información...</p> }
            {!loading && !error && !quakes.length && <h2>No hay información disponible</h2>}
            {!loading && error && <h2>Ocurrió un error</h2>}
          </div>
            <Search />
        </div>
          
      </div>
    );
  }
}

export default Home;

