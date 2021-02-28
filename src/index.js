import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = {
    ltt: null,
    errorMessage: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ltt: position.coords.latitude}),
      error => this.setState({errorMessage: error.message})
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.ltt) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.ltt) {
      return <SeasonDisplay ltt={this.state.ltt}/>
    }
    return <Spinner message='Please accept location request'/>
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
