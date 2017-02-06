'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

function tryConvert(value, convert) {
  var input = parseFloat(value);
  if (Number.isNaN(input)) {
    return '';
  }
  var output = convert(input);
  var rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function TempZones(props) {
  if (props.celsius >= 100) {
    return React.createElement(
      'h5',
      { className: 'hot' },
      'It\'s getting Hot in here!'
    );
  } else if (props.celsius >= 36.5 && props.celsius <= 37.5) {
    return React.createElement(
      'h5',
      { className: 'normal' },
      'This is the normal temperature of the human body!'
    );
  } else if (props.celsius <= 0) {
    return React.createElement(
      'h5',
      { className: 'cold' },
      'Brr...Freezing!'
    );
  }
  return null;
}

var TemperatureInput = function (_React$Component) {
  _inherits(TemperatureInput, _React$Component);

  function TemperatureInput(props) {
    _classCallCheck(this, TemperatureInput);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  TemperatureInput.prototype.handleChange = function handleChange(e) {
    this.props.onChange(e.target.value);
  };

  TemperatureInput.prototype.render = function render() {
    var value = this.props.value;
    var scale = this.props.scale;
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'form',
        null,
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'lable',
            null,
            React.createElement(
              'h3',
              null,
              'Enter Temperature in ',
              scaleNames[scale],
              ': '
            )
          ),
          React.createElement('input', { className: 'form-control container text-center', id: 'focusedInputed', type: 'text', value: value,
            onChange: this.handleChange })
        )
      )
    );
  };

  return TemperatureInput;
}(React.Component);

var Calculator = function (_React$Component2) {
  _inherits(Calculator, _React$Component2);

  function Calculator(props) {
    _classCallCheck(this, Calculator);

    var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

    _this2.handleCelsiusChange = _this2.handleCelsiusChange.bind(_this2);
    _this2.handleFahrenheitChange = _this2.handleFahrenheitChange.bind(_this2);
    _this2.state = { value: '', scale: 'c' };
    return _this2;
  }

  Calculator.prototype.handleCelsiusChange = function handleCelsiusChange(value) {
    this.setState({ scale: 'c', value: value });
  };

  Calculator.prototype.handleFahrenheitChange = function handleFahrenheitChange(value) {
    this.setState({ scale: 'f', value: value });
  };

  Calculator.prototype.render = function render() {
    var scale = this.state.scale;
    var value = this.state.value;
    var celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    var fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return React.createElement(
      'div',
      { className: 'text-center container-fluid' },
      React.createElement(TemperatureInput, {
        scale: 'c',
        value: celsius,
        onChange: this.handleCelsiusChange }),
      React.createElement(TemperatureInput, {
        scale: 'f',
        value: fahrenheit,
        onChange: this.handleFahrenheitChange }),
      React.createElement(TempZones, {
        celsius: parseFloat(celsius) })
    );
  };

  return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));