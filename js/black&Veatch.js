'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//Scale Names
var scaleNames = {
    a: 'MMSCFD',
    b: 'USGPD',
    c: 'MMTPA',
    d:  'TPD',
    e:'m^3/day'
};

//MMSCFD to others
function aToB(a) {
    return (12111.4)*(a);
}

//aToC
function aToC(a) {
    return (0.0074)*(a);
}
//aToD
function aToD(a) {
    return (20.08)*(a);
}

//aToE
function aToE(a) {
    return (45.8)*(a);
}




//USGPD to others
function bToA(b) {
    return (0.000082566837)*(b);
}

//aToC
function bToC(b) {
    return (0.0000006109946)*(b);
}
//aToD
function bToD(b) {
    return (0.001657942104133)*(b);
}

//aToE
function bToE(b) {
    return (0.00378156117377)*(b);
}




//MMTPA to others
function cToA(c) {
    return (135.135135)*(c);
}

//aToC
function cToB(c) {
    return (1636675.6756756)*(c);
}
//aToD
function cToD(c) {
    return (2713.513513)*(c);
}

//aToE
function cToE(c) {
    return (6189.189)*(c);
}


//////TPD to others
function dToA(d) {
    return (0.04980079)*(d);
}

//aToC
function dToB(d) {
    return (603.157370517)*(d);
}
//aToD
function dToC(d) {
    return (0.000368525)*(d);
}

//aToE
function dToE(e) {
    return (2.280876)*(e);
}


////m^3 /day
function eToA(e) {
    return (0.0218340611)*(e);
}

//aToC
function eToB(e) {
    return (264.44104803493)*(e);
}
//aToD
function eToC(e) {
    return (0.000161572052402)*(e);
}

//aToE
function eToD(e) {
    return (0.438427947)*(e);
}





//try Convert
function tryConvert(value, convert) {
    var input = parseFloat(value);
    if (Number.isNaN(input)) {
        return '';
    }
    var output = convert(input);
    return output.toFixed(2).toString();
}


//Gas Input
var GasInput = function (_React$Component) {
    _inherits(GasInput, _React$Component);

    function GasInput(props) {
        _classCallCheck(this, GasInput);

        var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    GasInput.prototype.handleChange = function handleChange(e) {
        this.props.onChange(e.target.value);
    };

    GasInput.prototype.render = function render() {
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
                            'Enter Value in ',
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

    return GasInput;
}(React.Component);







var Calculator = function (_React$Component2) {
    _inherits(Calculator, _React$Component2);

    function Calculator(props) {
        _classCallCheck(this, Calculator);

        var _this2 = _possibleConstructorReturn(this, _React$Component2.call(this, props));

        _this2.handleAChange = _this2.handleAChange.bind(_this2);
        _this2.handleBChange = _this2.handleBChange.bind(_this2);
        _this2.handleCChange = _this2.handleCChange.bind(_this2);
        _this2.handleDChange = _this2.handleDChange.bind(_this2);
        _this2.handleEChange = _this2.handleEChange.bind(_this2);

        _this2.state = { value: '', scale: 'a' };
        _this2.state = { value: '', scale: 'b' };
        _this2.state = { value: '', scale: 'c' };
        _this2.state = { value: '', scale: 'd' };
        _this2.state = { value: '', scale: 'e' };
        return _this2;
    }

    Calculator.prototype.handleAChange = function handleAChange(value) {
        this.setState({ scale: 'a', value: value });
    };

    Calculator.prototype.handleBChange = function handleBChange(value) {
        //this.setState({ scale: 'f', value: value });
        this.setState({ scale: 'b', value: value });
    };

    Calculator.prototype.handleCChange = function handleCChange(value) {
        //this.setState({ scale: 'f', value: value });
        this.setState({ scale: 'c', value: value });
    };
    Calculator.prototype.handleDChange = function handleDChange(value) {
        //this.setState({ scale: 'f', value: value });
        this.setState({ scale: 'd', value: value });
    };
    Calculator.prototype.handleEChange = function handleEChange(value) {
        //this.setState({ scale: 'f', value: value });
        this.setState({ scale: 'e', value: value });
    };



    Calculator.prototype.render = function render() {
        var scale = this.state.scale;
        var value = this.state.value;

        var  A =  value;
        var  B =  value;
        var  C =  value;
        var  D =  value;
        var  E = value;


            if(scale === 'a'){
                B  = tryConvert(value, aToB)
                C  =  tryConvert(value, aToC)
                D = tryConvert(value, aToD)
                E = tryConvert(value, aToE)
            }else if(scale === 'b'){
                A  = tryConvert(value, bToA)
                C  =  tryConvert(value, bToC)
                D = tryConvert(value, bToD)
                E = tryConvert(value, bToE)


            }else if(scale === 'c'){
                A  = tryConvert(value, cToA)
                B  =  tryConvert(value, cToB)
                D = tryConvert(value, cToD)
                E = tryConvert(value, cToE)
            }else if(scale === 'd'){

                A  = tryConvert(value, dToA)
                C  =  tryConvert(value, dToC)
                B = tryConvert(value, dToB)
                E = tryConvert(value, dToE)
            }else if(scale === 'e'){
                A  = tryConvert(value, eToA)
                B  =  tryConvert(value, eToB)
                C = tryConvert(value, eToC)
                D = tryConvert(value,eToD)
            }



        console.log(tryConvert(value,aToB))
        console.log(B)

        return React.createElement(
            'div',
            { className: 'text-center container-fluid' },
            React.createElement(GasInput, {
                scale: 'a',
                value: A,
                onChange: this.handleAChange}),
            React.createElement(GasInput, {
            scale: 'b',
            value: B,
                onChange: this.handleBChange}),
            React.createElement(GasInput, {
                scale: 'c',
                value: C,
                onChange: this.handleCChange
                }),
            React.createElement(GasInput, {
                scale: 'd',
                value: D,
                onChange: this.handleDChange
                }),
            React.createElement(GasInput, {
                scale: 'e',
                value: E,
                onChange: this.handleEChange
                 }),
            React.createElement(
                'h5',
                { className: 'hot' },
                'LNG Used for table '
            ),
            React.createElement(
            'h5',
            { className: 'cold' },
            '438.0 kg/m^3 and 16.76 mol weight '
         )
        );
    };

    return Calculator;
}(React.Component);

ReactDOM.render(React.createElement(Calculator, null), document.getElementById('root'));