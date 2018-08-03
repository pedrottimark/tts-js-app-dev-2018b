import React, {Component} from 'react';
import {connect} from 'react-redux';

import Aside from './Aside';
import Foods from './Foods';
import Portions from './Portions';

import {getFoodsPortions} from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getFoodsPortions();
  }

  render() {
    const {message} = this.props;
    return (
        <main>
          <Aside/>
          <section>
            <p>{message}</p>
            <Portions/>
            <Foods/>
          </section>
        </main>
    );
  }
}

const mapStateToProps = ({message}) => ({message});
const mapDispatchToProps = {getFoodsPortions};

export default connect(mapStateToProps, mapDispatchToProps)(App);
