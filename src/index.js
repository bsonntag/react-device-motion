import { Component } from 'react';
import PropTypes from 'prop-types';

export default class DeviceMotion extends Component {

  static propTypes = {
    children: PropTypes.func,
  };

  static defaultProps = {
    children: () => null,
  };

  state = {
    acceleration: {
      x: 0,
      y: 0,
      z: 0,
    },
    accelerationIncludingGravity: {
      x: 0,
      y: 0,
      z: 0,
    },
    interval: 0,
    rotationRate: {
      alpha: 0,
      beta: 0,
      gamma: 0,
    },
  };

  handleDeviceMotion = event => {
    const { acceleration, accelerationIncludingGravity, interval, rotationRate } = event;

    this.setState({ acceleration, accelerationIncludingGravity, interval, rotationRate });
  };

  componentDidMount() {
    window.addEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  componentWillUnmount() {
    window.removeEventListener('devicemotion', this.handleDeviceMotion, true);
  }

  render() {
    return this.props.children(this.state);
  }

}
