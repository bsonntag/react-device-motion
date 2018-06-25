'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeviceMotion = function (_Component) {
  _inherits(DeviceMotion, _Component);

  function DeviceMotion() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DeviceMotion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeviceMotion.__proto__ || Object.getPrototypeOf(DeviceMotion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      acceleration: {
        x: 0,
        y: 0,
        z: 0
      },
      accelerationIncludingGravity: {
        x: 0,
        y: 0,
        z: 0
      },
      interval: 0,
      rotationRate: {
        alpha: 0,
        beta: 0,
        gamma: 0
      }
    }, _this.handleDeviceMotion = function (event) {
      var acceleration = event.acceleration,
          accelerationIncludingGravity = event.accelerationIncludingGravity,
          interval = event.interval,
          rotationRate = event.rotationRate;


      _this.setState({ acceleration: acceleration, accelerationIncludingGravity: accelerationIncludingGravity, interval: interval, rotationRate: rotationRate });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DeviceMotion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.addEventListener('devicemotion', this.handleDeviceMotion, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('devicemotion', this.handleDeviceMotion, true);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children(this.state);
    }
  }]);

  return DeviceMotion;
}(_react.Component);

DeviceMotion.propTypes = {
  children: _propTypes2.default.func
};
DeviceMotion.defaultProps = {
  children: function children() {
    return null;
  }
};
exports.default = DeviceMotion;