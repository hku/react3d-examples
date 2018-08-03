webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(38);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _react3d = __webpack_require__(185);

	var _Cube = __webpack_require__(196);

	var _Cube2 = _interopRequireDefault(_Cube);

	var _Dodecahedron = __webpack_require__(197);

	var _Dodecahedron2 = _interopRequireDefault(_Dodecahedron);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Root = function (_React$Component) {
		_inherits(Root, _React$Component);

		function Root(props) {
			_classCallCheck(this, Root);

			var _this = _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));

			_this.state = { x: -10, y: -15 };
			_this.onClickBtn = _this.onClickBtn.bind(_this);
			return _this;
		}

		_createClass(Root, [{
			key: "onClickBtn",
			value: function onClickBtn() {
				var x = this.state.x;
				if (x == -10) {
					this.setState({ x: 10, y: -15 });
				} else {
					this.setState({ x: -10, y: -15 });
				}
			}
		}, {
			key: "render",
			value: function render() {
				var width = 500,
				    height = 500;

				return _react2.default.createElement(
					_react3d.Scene,
					{ width: width, height: height, style: { display: "block", margin: 0, cursor: "pointer" } },
					_react2.default.createElement(
						"button",
						{ onClick: this.onClickBtn },
						"tween animation"
					),
					_react2.default.createElement(
						_react3d.Camera,
						{ fov: 80, aspect: width / height, near: 0.1, far: 50, z: 30 },
						_react2.default.createElement(_react3d.OrbitControls, null)
					),
					_react2.default.createElement(_react3d.PointLight, { y: 200 }),
					_react2.default.createElement(_react3d.PointLight, { x: 100, y: 200, z: 100 }),
					_react2.default.createElement(_react3d.PointLight, { x: -100, y: -200, z: -100 }),
					_react2.default.createElement(
						_react3d.Object3D,
						{ update: function update(obj) {
								obj.rotation.x += 0.005;
								obj.rotation.y += 0.005;
							} },
						_react2.default.createElement(_Cube2.default, null),
						_react2.default.createElement(_Cube2.default, { wireframe: true })
					),
					_react2.default.createElement(_react3d.Tween, { data: this.state, view: function view(v) {
							return _react2.default.createElement(_Dodecahedron2.default, { x: v.x, y: v.y });
						} })
				);
			}
		}]);

		return Root;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Root, null), document.getElementById('content'));

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Component = exports.OrbitControls = exports.Tween = exports.PointLight = exports.Camera = exports.Scene = exports.Object3D = undefined;

	var _react = __webpack_require__(2);

	var _Object3D = __webpack_require__(186);

	var _Object3D2 = _interopRequireDefault(_Object3D);

	var _Scene = __webpack_require__(189);

	var _Scene2 = _interopRequireDefault(_Scene);

	var _Camera = __webpack_require__(190);

	var _Camera2 = _interopRequireDefault(_Camera);

	var _PointLight = __webpack_require__(192);

	var _PointLight2 = _interopRequireDefault(_PointLight);

	var _Tween = __webpack_require__(193);

	var _Tween2 = _interopRequireDefault(_Tween);

	var _OrbitControls = __webpack_require__(194);

	var _OrbitControls2 = _interopRequireDefault(_OrbitControls);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Object3D = _Object3D2.default;
	exports.Scene = _Scene2.default;
	exports.Camera = _Camera2.default;
	exports.PointLight = _PointLight2.default;
	exports.Tween = _Tween2.default;
	exports.OrbitControls = _OrbitControls2.default;
	exports.Component = _react.Component;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _three = __webpack_require__(187);

	var _Animations = __webpack_require__(188);

	var _Animations2 = _interopRequireDefault(_Animations);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Object3D = function (_React$Component) {
		_inherits(Object3D, _React$Component);

		function Object3D(props) {
			_classCallCheck(this, Object3D);

			var _this = _possibleConstructorReturn(this, (Object3D.__proto__ || Object.getPrototypeOf(Object3D)).call(this, props));

			var _update = props.update;

			_this.obj = _this.objContructor(props);

			if (_update instanceof Function) {
				_this.updateObj = { update: function update() {
						return _update(_this.obj);
					} };
			}
			return _this;
		}

		_createClass(Object3D, [{
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				this.objWillReceiveProps(nextProps);
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var parent = this.context.parent;
				parent.add(this.obj);

				if (this.updateObj) {
					_Animations2.default.add(this.updateObj);
				} else {
					_Animations2.default.add(this);
				}

				this.objDidMount();
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				var parent = this.context.parent;
				parent.remove(this.obj);

				if (this.updateObj) {
					_Animations2.default.remove(this.updateObj);
				} else {
					_Animations2.default.remove(this);
				}

				this.objWillUnmount();
			}
		}, {
			key: "componentDidUpdate",
			value: function componentDidUpdate(prevProps) {
				this.objDidUpdate(prevProps);
			}
		}, {
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"span",
					null,
					this.props.children
				);
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				return {
					parent: this.obj
				};
			}
		}, {
			key: "update",
			value: function update() {}
		}, {
			key: "objContructor",
			value: function objContructor(props) {
				var x = props.x,
				    y = props.y,
				    z = props.z,
				    rx = props.rx,
				    ry = props.ry,
				    rz = props.rz;

				var obj = new _three.Object3D();
				obj.position.set(x, y, z);
				obj.rotation.set(rx, ry, rz);
				return obj;
			}
		}, {
			key: "objWillReceiveProps",
			value: function objWillReceiveProps(nextProps) {}
		}, {
			key: "objDidUpdate",
			value: function objDidUpdate(prevProps) {}
		}, {
			key: "objDidMount",
			value: function objDidMount() {}
		}, {
			key: "objWillUnmount",
			value: function objWillUnmount() {}
		}]);

		return Object3D;
	}(_react2.default.Component);

	Object3D.setTypes = function (obj, opt) {
		opt = opt || {};
		if (opt.hasChild) {
			obj.childContextTypes = {
				parent: _react2.default.PropTypes.object
			};
		}
		obj.contextTypes = { parent: _react2.default.PropTypes.object };
	};

	Object3D.propTypes = {
		x: _react2.default.PropTypes.number,
		y: _react2.default.PropTypes.number,
		z: _react2.default.PropTypes.number,
		rx: _react2.default.PropTypes.number,
		ry: _react2.default.PropTypes.number,
		rz: _react2.default.PropTypes.number
	};

	Object3D.defaultProps = { x: 0, y: 0, z: 0, rx: 0, ry: 0, rz: 0 };

	Object3D.setTypes(Object3D, { hasChild: true });

	exports.default = Object3D;

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Animations = function () {
	  var _realtimes = [];
	  return {
	    add: function add(obj) {

	      var fresh = obj.tag ? _realtimes.map(function (o) {
	        return o.tag || "";
	      }).indexOf(obj.tag) == -1 : true;
	      if (fresh) {
	        _realtimes.push(obj);
	      }
	    },
	    remove: function remove(obj) {
	      var i;
	      if (typeof obj == "string") {
	        i = _realtimes.map(function (o) {
	          return o.tag || "";
	        }).indexOf(obj);
	      } else {
	        i = _realtimes.indexOf(obj);
	      }
	      if (i !== -1) {
	        _realtimes.splice(i, 1);
	      }
	    },
	    update: function update() {
	      _realtimes.forEach(function (obj) {
	        obj.update();
	      });
	    }
	  };
	}();

	exports.default = Animations;

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _three = __webpack_require__(187);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Scene = function (_React$Component) {
		_inherits(Scene, _React$Component);

		function Scene(props) {
			_classCallCheck(this, Scene);

			var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this, props));

			var width = props.width,
			    height = props.height,
			    style = props.style;

			_this.obj = new _three.Scene();
			_this.canvas = document.createElement("canvas");
			_this.canvas.width = width;
			_this.canvas.height = height;
			for (var k in style) {
				_this.canvas.style[k] = style[k];
			}
			return _this;
		}

		_createClass(Scene, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				this.box.appendChild(this.canvas);
			}
		}, {
			key: "componentWillUnmount",
			value: function componentWillUnmount() {
				var box = this.refs.container3d;
				box.removeChild(this.canvas);
			}
		}, {
			key: "render",
			value: function render() {
				var _this2 = this;

				var _props = this.props,
				    width = _props.width,
				    height = _props.height,
				    style = _props.style;

				return _react2.default.createElement(
					"div",
					{ ref: function ref(inst) {
							_this2.box = inst;
						} },
					this.props.children
				);
			}
		}, {
			key: "getChildContext",
			value: function getChildContext() {
				return {
					parent: this.obj,
					canvas: this.canvas
				};
			}
		}]);

		return Scene;
	}(_react2.default.Component);

	Scene.childContextTypes = {
		parent: _react2.default.PropTypes.object,
		canvas: _react2.default.PropTypes.object
	};
	exports.default = Scene;

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _tween = __webpack_require__(191);

	var _tween2 = _interopRequireDefault(_tween);

	var _three = __webpack_require__(187);

	var _Object3D2 = __webpack_require__(186);

	var _Object3D3 = _interopRequireDefault(_Object3D2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Animations = __webpack_require__(188);

	var _Animations2 = _interopRequireDefault(_Animations);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Camera = function (_Object3D) {
		_inherits(Camera, _Object3D);

		function Camera() {
			_classCallCheck(this, Camera);

			return _possibleConstructorReturn(this, (Camera.__proto__ || Object.getPrototypeOf(Camera)).apply(this, arguments));
		}

		_createClass(Camera, [{
			key: "objContructor",
			value: function objContructor(props) {
				var fov = props.fov,
				    aspect = props.aspect,
				    near = props.near,
				    far = props.far,
				    x = props.x,
				    y = props.y,
				    z = props.z;

				var camera = new _three.PerspectiveCamera(fov, aspect, near, far);

				camera.position.x = x;
				camera.position.y = y;
				camera.position.z = z;

				this.frameId = null;
				this.renderFrames = this.renderFrames.bind(this);
				return camera;
			}
		}, {
			key: "objDidMount",
			value: function objDidMount() {
				var canvas = this.context.canvas;
				this.scene = this.context.parent;
				this.webGLRenderer = new _three.WebGLRenderer({ antialias: true, canvas: canvas });
				this.renderFrames();
			}
		}, {
			key: "objWillUnmount",
			value: function objWillUnmount() {
				cancelAnimationFrame(this.frameId);
			}
		}, {
			key: "renderFrames",
			value: function renderFrames() {
				var camera = this.obj;
				var scene = this.scene;
				var webGLRenderer = this.webGLRenderer;
				_tween2.default.update();
				_Animations2.default.update();

				webGLRenderer.render(scene, camera);
				this.frameId = requestAnimationFrame(this.renderFrames);
			}
		}]);

		return Camera;
	}(_Object3D3.default);

	Camera.propTypes = {
		fov: _react2.default.PropTypes.number.isRequired,
		aspect: _react2.default.PropTypes.number.isRequired,
		near: _react2.default.PropTypes.number.isRequired,
		far: _react2.default.PropTypes.number.isRequired,
		x: _react2.default.PropTypes.number,
		y: _react2.default.PropTypes.number,
		z: _react2.default.PropTypes.number
	};

	Camera.defaultProps = { x: 0, y: 0, z: 0 };

	Camera.childContextTypes = {
		parent: _react2.default.PropTypes.object
	};

	Camera.contextTypes = {
		parent: _react2.default.PropTypes.object,
		canvas: _react2.default.PropTypes.object
	};

	exports.default = Camera;

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

	/**
	 * @author sole / http://soledadpenades.com
	 * @author mrdoob / http://mrdoob.com
	 * @author Robert Eisele / http://www.xarg.org
	 * @author Philippe / http://philippe.elsass.me
	 * @author Robert Penner / http://www.robertpenner.com/easing_terms_of_use.html
	 * @author Paul Lewis / http://www.aerotwist.com/
	 * @author lechecacharro
	 * @author Josh Faul / http://jocafa.com/
	 * @author egraether / http://egraether.com/
	 */

	if ( Date.now === undefined ) {

	  Date.now = function () {

	    return new Date().valueOf();

	  }

	}

	var TWEEN = TWEEN || ( function () {

	  var _tweens = [];

	  return {

	    REVISION: '8',

	    getAll: function () {

	      return _tweens;

	    },

	    removeAll: function () {

	      _tweens = [];

	    },

	    add: function ( tween ) {

	      _tweens.push( tween );

	    },

	    remove: function ( tween ) {

	      var i = _tweens.indexOf( tween );

	      if ( i !== -1 ) {

	        _tweens.splice( i, 1 );

	      }

	    },

	    update: function ( time ) {

	      if ( _tweens.length === 0 ) return false;

	      var i = 0, numTweens = _tweens.length;

	      time = time !== undefined ? time : Date.now();

	      while ( i < numTweens ) {

	        if ( _tweens[ i ].update( time ) ) {

	          i ++;

	        } else {

	          _tweens.splice( i, 1 );

	          numTweens --;

	        }

	      }

	      return true;

	    }

	  };

	} )();

	TWEEN.Tween = function ( object ) {

	  var _object = object;
	  var _valuesStart = {};
	  var _valuesEnd = {};
	  var _duration = 1000;
	  var _delayTime = 0;
	  var _startTime = null;
	  var _easingFunction = TWEEN.Easing.Linear.None;
	  var _interpolationFunction = TWEEN.Interpolation.Linear;
	  var _chainedTweens = [];
	  var _onStartCallback = null;
	  var _onStartCallbackFired = false;
	  var _onUpdateCallback = null;
	  var _onCompleteCallback = null;

	  this.to = function ( properties, duration ) {

	    if ( duration !== undefined ) {

	      _duration = duration;

	    }

	    _valuesEnd = properties;

	    return this;

	  };

	  this.start = function ( time ) {

	    TWEEN.add( this );

	    _onStartCallbackFired = false;

	    _startTime = time !== undefined ? time : Date.now();
	    _startTime += _delayTime;

	    for ( var property in _valuesEnd ) {

	      // This prevents the interpolation of null values or of non-existing properties
	      if( _object[ property ] === null || !(property in _object) ) {

	        continue;

	      }

	      // check if an Array was provided as property value
	      if ( _valuesEnd[ property ] instanceof Array ) {

	        if ( _valuesEnd[ property ].length === 0 ) {

	          continue;

	        }

	        // create a local copy of the Array with the start value at the front
	        _valuesEnd[ property ] = [ _object[ property ] ].concat( _valuesEnd[ property ] );

	      }

	      _valuesStart[ property ] = _object[ property ];

	    }

	    return this;

	  };

	  this.stop = function () {

	    TWEEN.remove( this );
	    return this;

	  };

	  this.delay = function ( amount ) {

	    _delayTime = amount;
	    return this;

	  };

	  this.easing = function ( easing ) {

	    _easingFunction = easing;
	    return this;

	  };

	  this.interpolation = function ( interpolation ) {

	    _interpolationFunction = interpolation;
	    return this;

	  };

	  this.chain = function () {

	    _chainedTweens = arguments;
	    return this;

	  };

	  this.onStart = function ( callback ) {

	    _onStartCallback = callback;
	    return this;

	  };

	  this.onUpdate = function ( callback ) {

	    _onUpdateCallback = callback;
	    return this;

	  };

	  this.onComplete = function ( callback ) {

	    _onCompleteCallback = callback;
	    return this;

	  };

	  this.update = function ( time ) {

	    if ( time < _startTime ) {

	      return true;

	    }

	    if ( _onStartCallbackFired === false ) {

	      if ( _onStartCallback !== null ) {

	        _onStartCallback.call( _object );

	      }

	      _onStartCallbackFired = true;

	    }

	    var elapsed = ( time - _startTime ) / _duration;
	    elapsed = elapsed > 1 ? 1 : elapsed;

	    var value = _easingFunction( elapsed );

	    for ( var property in _valuesStart ) {

	      var start = _valuesStart[ property ];
	      var end = _valuesEnd[ property ];

	      if ( end instanceof Array ) {

	        _object[ property ] = _interpolationFunction( end, value );

	      } else {

	        _object[ property ] = start + ( end - start ) * value;

	      }

	    }

	    if ( _onUpdateCallback !== null ) {

	      _onUpdateCallback.call( _object, value );

	    }

	    if ( elapsed == 1 ) {

	      if ( _onCompleteCallback !== null ) {

	        _onCompleteCallback.call( _object );

	      }

	      for ( var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i ++ ) {

	        _chainedTweens[ i ].start( time );

	      }

	      return false;

	    }

	    return true;

	  };

	};

	TWEEN.Easing = {

	  Linear: {

	    None: function ( k ) {

	      return k;

	    }

	  },

	  Quadratic: {

	    In: function ( k ) {

	      return k * k;

	    },

	    Out: function ( k ) {

	      return k * ( 2 - k );

	    },

	    InOut: function ( k ) {

	      if ( ( k *= 2 ) < 1 ) return 0.5 * k * k;
	      return - 0.5 * ( --k * ( k - 2 ) - 1 );

	    }

	  },

	  Cubic: {

	    In: function ( k ) {

	      return k * k * k;

	    },

	    Out: function ( k ) {

	      return --k * k * k + 1;

	    },

	    InOut: function ( k ) {

	      if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k;
	      return 0.5 * ( ( k -= 2 ) * k * k + 2 );

	    }

	  },

	  Quartic: {

	    In: function ( k ) {

	      return k * k * k * k;

	    },

	    Out: function ( k ) {

	      return 1 - ( --k * k * k * k );

	    },

	    InOut: function ( k ) {

	      if ( ( k *= 2 ) < 1) return 0.5 * k * k * k * k;
	      return - 0.5 * ( ( k -= 2 ) * k * k * k - 2 );

	    }

	  },

	  Quintic: {

	    In: function ( k ) {

	      return k * k * k * k * k;

	    },

	    Out: function ( k ) {

	      return --k * k * k * k * k + 1;

	    },

	    InOut: function ( k ) {

	      if ( ( k *= 2 ) < 1 ) return 0.5 * k * k * k * k * k;
	      return 0.5 * ( ( k -= 2 ) * k * k * k * k + 2 );

	    }

	  },

	  Sinusoidal: {

	    In: function ( k ) {

	      return 1 - Math.cos( k * Math.PI / 2 );

	    },

	    Out: function ( k ) {

	      return Math.sin( k * Math.PI / 2 );

	    },

	    InOut: function ( k ) {

	      return 0.5 * ( 1 - Math.cos( Math.PI * k ) );

	    }

	  },

	  Exponential: {

	    In: function ( k ) {

	      return k === 0 ? 0 : Math.pow( 1024, k - 1 );

	    },

	    Out: function ( k ) {

	      return k === 1 ? 1 : 1 - Math.pow( 2, - 10 * k );

	    },

	    InOut: function ( k ) {

	      if ( k === 0 ) return 0;
	      if ( k === 1 ) return 1;
	      if ( ( k *= 2 ) < 1 ) return 0.5 * Math.pow( 1024, k - 1 );
	      return 0.5 * ( - Math.pow( 2, - 10 * ( k - 1 ) ) + 2 );

	    }

	  },

	  Circular: {

	    In: function ( k ) {

	      return 1 - Math.sqrt( 1 - k * k );

	    },

	    Out: function ( k ) {

	      return Math.sqrt( 1 - ( --k * k ) );

	    },

	    InOut: function ( k ) {

	      if ( ( k *= 2 ) < 1) return - 0.5 * ( Math.sqrt( 1 - k * k) - 1);
	      return 0.5 * ( Math.sqrt( 1 - ( k -= 2) * k) + 1);

	    }

	  },

	  Elastic: {

	    In: function ( k ) {

	      var s, a = 0.1, p = 0.4;
	      if ( k === 0 ) return 0;
	      if ( k === 1 ) return 1;
	      if ( !a || a < 1 ) { a = 1; s = p / 4; }
	      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
	      return - ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );

	    },

	    Out: function ( k ) {

	      var s, a = 0.1, p = 0.4;
	      if ( k === 0 ) return 0;
	      if ( k === 1 ) return 1;
	      if ( !a || a < 1 ) { a = 1; s = p / 4; }
	      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
	      return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

	    },

	    InOut: function ( k ) {

	      var s, a = 0.1, p = 0.4;
	      if ( k === 0 ) return 0;
	      if ( k === 1 ) return 1;
	      if ( !a || a < 1 ) { a = 1; s = p / 4; }
	      else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
	      if ( ( k *= 2 ) < 1 ) return - 0.5 * ( a * Math.pow( 2, 10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) );
	      return a * Math.pow( 2, -10 * ( k -= 1 ) ) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) * 0.5 + 1;

	    }

	  },

	  Back: {

	    In: function ( k ) {

	      var s = 1.70158;
	      return k * k * ( ( s + 1 ) * k - s );

	    },

	    Out: function ( k ) {

	      var s = 1.70158;
	      return --k * k * ( ( s + 1 ) * k + s ) + 1;

	    },

	    InOut: function ( k ) {

	      var s = 1.70158 * 1.525;
	      if ( ( k *= 2 ) < 1 ) return 0.5 * ( k * k * ( ( s + 1 ) * k - s ) );
	      return 0.5 * ( ( k -= 2 ) * k * ( ( s + 1 ) * k + s ) + 2 );

	    }

	  },

	  Bounce: {

	    In: function ( k ) {

	      return 1 - TWEEN.Easing.Bounce.Out( 1 - k );

	    },

	    Out: function ( k ) {

	      if ( k < ( 1 / 2.75 ) ) {

	        return 7.5625 * k * k;

	      } else if ( k < ( 2 / 2.75 ) ) {

	        return 7.5625 * ( k -= ( 1.5 / 2.75 ) ) * k + 0.75;

	      } else if ( k < ( 2.5 / 2.75 ) ) {

	        return 7.5625 * ( k -= ( 2.25 / 2.75 ) ) * k + 0.9375;

	      } else {

	        return 7.5625 * ( k -= ( 2.625 / 2.75 ) ) * k + 0.984375;

	      }

	    },

	    InOut: function ( k ) {

	      if ( k < 0.5 ) return TWEEN.Easing.Bounce.In( k * 2 ) * 0.5;
	      return TWEEN.Easing.Bounce.Out( k * 2 - 1 ) * 0.5 + 0.5;

	    }

	  }

	};

	TWEEN.Interpolation = {

	  Linear: function ( v, k ) {

	    var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.Linear;

	    if ( k < 0 ) return fn( v[ 0 ], v[ 1 ], f );
	    if ( k > 1 ) return fn( v[ m ], v[ m - 1 ], m - f );

	    return fn( v[ i ], v[ i + 1 > m ? m : i + 1 ], f - i );

	  },

	  Bezier: function ( v, k ) {

	    var b = 0, n = v.length - 1, pw = Math.pow, bn = TWEEN.Interpolation.Utils.Bernstein, i;

	    for ( i = 0; i <= n; i++ ) {
	      b += pw( 1 - k, n - i ) * pw( k, i ) * v[ i ] * bn( n, i );
	    }

	    return b;

	  },

	  CatmullRom: function ( v, k ) {

	    var m = v.length - 1, f = m * k, i = Math.floor( f ), fn = TWEEN.Interpolation.Utils.CatmullRom;

	    if ( v[ 0 ] === v[ m ] ) {

	      if ( k < 0 ) i = Math.floor( f = m * ( 1 + k ) );

	      return fn( v[ ( i - 1 + m ) % m ], v[ i ], v[ ( i + 1 ) % m ], v[ ( i + 2 ) % m ], f - i );

	    } else {

	      if ( k < 0 ) return v[ 0 ] - ( fn( v[ 0 ], v[ 0 ], v[ 1 ], v[ 1 ], -f ) - v[ 0 ] );
	      if ( k > 1 ) return v[ m ] - ( fn( v[ m ], v[ m ], v[ m - 1 ], v[ m - 1 ], f - m ) - v[ m ] );

	      return fn( v[ i ? i - 1 : 0 ], v[ i ], v[ m < i + 1 ? m : i + 1 ], v[ m < i + 2 ? m : i + 2 ], f - i );

	    }

	  },

	  Utils: {

	    Linear: function ( p0, p1, t ) {

	      return ( p1 - p0 ) * t + p0;

	    },

	    Bernstein: function ( n , i ) {

	      var fc = TWEEN.Interpolation.Utils.Factorial;
	      return fc( n ) / fc( i ) / fc( n - i );

	    },

	    Factorial: ( function () {

	      var a = [ 1 ];

	      return function ( n ) {

	        var s = 1, i;
	        if ( a[ n ] ) return a[ n ];
	        for ( i = n; i > 1; i-- ) s *= i;
	        return a[ n ] = s;

	      };

	    } )(),

	    CatmullRom: function ( p0, p1, p2, p3, t ) {

	      var v0 = ( p2 - p0 ) * 0.5, v1 = ( p3 - p1 ) * 0.5, t2 = t * t, t3 = t * t2;
	      return ( 2 * p1 - 2 * p2 + v0 + v1 ) * t3 + ( - 3 * p1 + 3 * p2 - 2 * v0 - v1 ) * t2 + v0 * t + p1;

	    }

	  }

	};

	module.exports = TWEEN;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Object3D2 = __webpack_require__(186);

	var _Object3D3 = _interopRequireDefault(_Object3D2);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _three = __webpack_require__(187);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var PointLight = function (_Object3D) {
		_inherits(PointLight, _Object3D);

		function PointLight() {
			_classCallCheck(this, PointLight);

			return _possibleConstructorReturn(this, (PointLight.__proto__ || Object.getPrototypeOf(PointLight)).apply(this, arguments));
		}

		_createClass(PointLight, [{
			key: "objContructor",
			value: function objContructor(props) {
				var color = props.color,
				    intensity = props.intensity,
				    distance = props.distance,
				    decay = props.decay,
				    x = props.x,
				    y = props.y,
				    z = props.z;

				var light = new _three.PointLight(color, intensity, distance, decay);
				light.position.set(x, y, z);
				return light;
			}
		}]);

		return PointLight;
	}(_Object3D3.default);

	PointLight.propTypes = {
		color: _react2.default.PropTypes.number,
		intensity: _react2.default.PropTypes.number,
		distance: _react2.default.PropTypes.number,
		decay: _react2.default.PropTypes.number,
		x: _react2.default.PropTypes.number,
		y: _react2.default.PropTypes.number,
		z: _react2.default.PropTypes.number
	};

	PointLight.defaultProps = {
		color: 0xffffff,
		intensity: 1,
		distance: 0,
		decay: 1,
		x: 0, y: 0, z: 0
	};

	_Object3D3.default.setTypes(PointLight, { hasChild: false });

	exports.default = PointLight;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _tween = __webpack_require__(191);

	var _tween2 = _interopRequireDefault(_tween);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Tween = function (_React$Component) {
		_inherits(Tween, _React$Component);

		function Tween(props) {
			_classCallCheck(this, Tween);

			var _this = _possibleConstructorReturn(this, (Tween.__proto__ || Object.getPrototypeOf(Tween)).call(this, props));

			var data = props.data;

			_this.state = Object.assign({}, data);
			_this.tween = null;
			_this.fireTween = _this.fireTween.bind(_this);
			return _this;
		}

		_createClass(Tween, [{
			key: "componentWillReceiveProps",
			value: function componentWillReceiveProps(nextProps) {
				var data = nextProps.data;
				var preData = this.props.data;

				for (var k in data) {
					if (preData[k] != data[k]) {
						this.fireTween(data);
						break;
					}
				}
			}
		}, {
			key: "fireTween",
			value: function fireTween(data) {
				var newData = Object.assign({}, this.state);
				var me = this;
				me.tween = new _tween2.default.Tween(newData).to(data, 1000).easing(_tween2.default.Easing.Quadratic.Out).onUpdate(function () {
					me.setState(newData);
				}).start();
			}
		}, {
			key: "render",
			value: function render() {
				var _props = this.props,
				    data = _props.data,
				    view = _props.view;

				return view(this.state);
			}
		}]);

		return Tween;
	}(_react2.default.Component);

	exports.default = Tween;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _three = __webpack_require__(187);

	var _three2 = _interopRequireDefault(_three);

	var _threeOrbitcontrols = __webpack_require__(195);

	var _threeOrbitcontrols2 = _interopRequireDefault(_threeOrbitcontrols);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var OrbitControls = function (_React$Component) {
		_inherits(OrbitControls, _React$Component);

		function OrbitControls(props) {
			_classCallCheck(this, OrbitControls);

			return _possibleConstructorReturn(this, (OrbitControls.__proto__ || Object.getPrototypeOf(OrbitControls)).call(this, props));
		}

		_createClass(OrbitControls, [{
			key: "componentDidMount",
			value: function componentDidMount() {
				var canvas = this.context.canvas;
				var camera = this.context.parent;
				var controls = new _threeOrbitcontrols2.default(camera, canvas);
			}
		}, {
			key: "render",
			value: function render() {
				return null;
			}
		}]);

		return OrbitControls;
	}(_react2.default.Component);

	OrbitControls.contextTypes = {
		parent: _react2.default.PropTypes.object,
		canvas: _react2.default.PropTypes.object
	};

	exports.default = OrbitControls;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

	var THREE = __webpack_require__(187)

	/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 * @author erich666 / http://erichaines.com
	 */

	// This set of controls performs orbiting, dollying (zooming), and panning.
	// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
	//
	//    Orbit - left mouse / touch: one-finger move
	//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
	//    Pan - right mouse, or arrow keys / touch: two-finger move

	THREE.OrbitControls = function ( object, domElement ) {

		this.object = object;

		this.domElement = ( domElement !== undefined ) ? domElement : document;

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();

		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = - Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;

		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.panSpeed = 1.0;
		this.screenSpacePanning = false; // if true, pan in screen-space
		this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// Set to false to disable use of the keys
		this.enableKeys = true;

		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		//
		// public methods
		//

		this.getPolarAngle = function () {

			return spherical.phi;

		};

		this.getAzimuthalAngle = function () {

			return spherical.theta;

		};

		this.saveState = function () {

			scope.target0.copy( scope.target );
			scope.position0.copy( scope.object.position );
			scope.zoom0 = scope.object.zoom;

		};

		this.reset = function () {

			scope.target.copy( scope.target0 );
			scope.object.position.copy( scope.position0 );
			scope.object.zoom = scope.zoom0;

			scope.object.updateProjectionMatrix();
			scope.dispatchEvent( changeEvent );

			scope.update();

			state = STATE.NONE;

		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = function () {

			var offset = new THREE.Vector3();

			// so camera.up is the orbit axis
			var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
			var quatInverse = quat.clone().inverse();

			var lastPosition = new THREE.Vector3();
			var lastQuaternion = new THREE.Quaternion();

			return function update() {

				var position = scope.object.position;

				offset.copy( position ).sub( scope.target );

				// rotate offset to "y-axis-is-up" space
				offset.applyQuaternion( quat );

				// angle from z-axis around y-axis
				spherical.setFromVector3( offset );

				if ( scope.autoRotate && state === STATE.NONE ) {

					rotateLeft( getAutoRotationAngle() );

				}

				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;

				// restrict theta to be between desired limits
				spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

				// restrict phi to be between desired limits
				spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

				spherical.makeSafe();


				spherical.radius *= scale;

				// restrict radius to be between desired limits
				spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

				// move target to panned location
				scope.target.add( panOffset );

				offset.setFromSpherical( spherical );

				// rotate offset back to "camera-up-vector-is-up" space
				offset.applyQuaternion( quatInverse );

				position.copy( scope.target ).add( offset );

				scope.object.lookAt( scope.target );

				if ( scope.enableDamping === true ) {

					sphericalDelta.theta *= ( 1 - scope.dampingFactor );
					sphericalDelta.phi *= ( 1 - scope.dampingFactor );

					panOffset.multiplyScalar( 1 - scope.dampingFactor );

				} else {

					sphericalDelta.set( 0, 0, 0 );

					panOffset.set( 0, 0, 0 );

				}

				scale = 1;

				// update condition is:
				// min(camera displacement, camera rotation in radians)^2 > EPS
				// using small-angle approximation cos(x/2) = 1 - x^2 / 8

				if ( zoomChanged ||
					lastPosition.distanceToSquared( scope.object.position ) > EPS ||
					8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

					scope.dispatchEvent( changeEvent );

					lastPosition.copy( scope.object.position );
					lastQuaternion.copy( scope.object.quaternion );
					zoomChanged = false;

					return true;

				}

				return false;

			};

		}();

		this.dispose = function () {

			scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
			scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
			scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

			scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
			scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
			scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );

			window.removeEventListener( 'keydown', onKeyDown, false );

			//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

		};

		//
		// internals
		//

		var scope = this;

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		var STATE = { NONE: - 1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY_PAN: 4 };

		var state = STATE.NONE;

		var EPS = 0.000001;

		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();

		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		function getAutoRotationAngle() {

			return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

		}

		function getZoomScale() {

			return Math.pow( 0.95, scope.zoomSpeed );

		}

		function rotateLeft( angle ) {

			sphericalDelta.theta -= angle;

		}

		function rotateUp( angle ) {

			sphericalDelta.phi -= angle;

		}

		var panLeft = function () {

			var v = new THREE.Vector3();

			return function panLeft( distance, objectMatrix ) {

				v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
				v.multiplyScalar( - distance );

				panOffset.add( v );

			};

		}();

		var panUp = function () {

			var v = new THREE.Vector3();

			return function panUp( distance, objectMatrix ) {

				if ( scope.screenSpacePanning === true ) {

					v.setFromMatrixColumn( objectMatrix, 1 );

				} else {

					v.setFromMatrixColumn( objectMatrix, 0 );
					v.crossVectors( scope.object.up, v );

				}

				v.multiplyScalar( distance );

				panOffset.add( v );

			};

		}();

		// deltaX and deltaY are in pixels; right and down are positive
		var pan = function () {

			var offset = new THREE.Vector3();

			return function pan( deltaX, deltaY ) {

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				if ( scope.object.isPerspectiveCamera ) {

					// perspective
					var position = scope.object.position;
					offset.copy( position ).sub( scope.target );
					var targetDistance = offset.length();

					// half of the fov is center to top of screen
					targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

					// we use only clientHeight here so aspect ratio does not distort speed
					panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
					panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

				} else if ( scope.object.isOrthographicCamera ) {

					// orthographic
					panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
					panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

				} else {

					// camera neither orthographic nor perspective
					console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
					scope.enablePan = false;

				}

			};

		}();

		function dollyIn( dollyScale ) {

			if ( scope.object.isPerspectiveCamera ) {

				scale /= dollyScale;

			} else if ( scope.object.isOrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		function dollyOut( dollyScale ) {

			if ( scope.object.isPerspectiveCamera ) {

				scale *= dollyScale;

			} else if ( scope.object.isOrthographicCamera ) {

				scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
				scope.object.updateProjectionMatrix();
				zoomChanged = true;

			} else {

				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
				scope.enableZoom = false;

			}

		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate( event ) {

			//console.log( 'handleMouseDownRotate' );

			rotateStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownDolly( event ) {

			//console.log( 'handleMouseDownDolly' );

			dollyStart.set( event.clientX, event.clientY );

		}

		function handleMouseDownPan( event ) {

			//console.log( 'handleMouseDownPan' );

			panStart.set( event.clientX, event.clientY );

		}

		function handleMouseMoveRotate( event ) {

			//console.log( 'handleMouseMoveRotate' );

			rotateEnd.set( event.clientX, event.clientY );

			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			// rotating across whole screen goes 360 degrees around
			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth );

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleMouseMoveDolly( event ) {

			//console.log( 'handleMouseMoveDolly' );

			dollyEnd.set( event.clientX, event.clientY );

			dollyDelta.subVectors( dollyEnd, dollyStart );

			if ( dollyDelta.y > 0 ) {

				dollyIn( getZoomScale() );

			} else if ( dollyDelta.y < 0 ) {

				dollyOut( getZoomScale() );

			}

			dollyStart.copy( dollyEnd );

			scope.update();

		}

		function handleMouseMovePan( event ) {

			//console.log( 'handleMouseMovePan' );

			panEnd.set( event.clientX, event.clientY );

			panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

			pan( panDelta.x, panDelta.y );

			panStart.copy( panEnd );

			scope.update();

		}

		function handleMouseUp( event ) {

			// console.log( 'handleMouseUp' );

		}

		function handleMouseWheel( event ) {

			// console.log( 'handleMouseWheel' );

			if ( event.deltaY < 0 ) {

				dollyOut( getZoomScale() );

			} else if ( event.deltaY > 0 ) {

				dollyIn( getZoomScale() );

			}

			scope.update();

		}

		function handleKeyDown( event ) {

			//console.log( 'handleKeyDown' );

			switch ( event.keyCode ) {

				case scope.keys.UP:
					pan( 0, scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.BOTTOM:
					pan( 0, - scope.keyPanSpeed );
					scope.update();
					break;

				case scope.keys.LEFT:
					pan( scope.keyPanSpeed, 0 );
					scope.update();
					break;

				case scope.keys.RIGHT:
					pan( - scope.keyPanSpeed, 0 );
					scope.update();
					break;

			}

		}

		function handleTouchStartRotate( event ) {

			//console.log( 'handleTouchStartRotate' );

			rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		}

		function handleTouchStartDollyPan( event ) {

			//console.log( 'handleTouchStartDollyPan' );

			if ( scope.enableZoom ) {

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

				var distance = Math.sqrt( dx * dx + dy * dy );

				dollyStart.set( 0, distance );

			}

			if ( scope.enablePan ) {

				var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
				var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

				panStart.set( x, y );

			}

		}

		function handleTouchMoveRotate( event ) {

			//console.log( 'handleTouchMoveRotate' );

			rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

			rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

			var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

			// rotating across whole screen goes 360 degrees around
			rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientWidth );

			// rotating up and down along whole screen attempts to go 360, but limited to 180
			rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

			rotateStart.copy( rotateEnd );

			scope.update();

		}

		function handleTouchMoveDollyPan( event ) {

			//console.log( 'handleTouchMoveDollyPan' );

			if ( scope.enableZoom ) {

				var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
				var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

				var distance = Math.sqrt( dx * dx + dy * dy );

				dollyEnd.set( 0, distance );

				dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

				dollyIn( dollyDelta.y );

				dollyStart.copy( dollyEnd );

			}

			if ( scope.enablePan ) {

				var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
				var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

				panEnd.set( x, y );

				panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

				pan( panDelta.x, panDelta.y );

				panStart.copy( panEnd );

			}

			scope.update();

		}

		function handleTouchEnd( event ) {

			//console.log( 'handleTouchEnd' );

		}

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onMouseDown( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			switch ( event.button ) {

				case scope.mouseButtons.ORBIT:

					if ( scope.enableRotate === false ) return;

					handleMouseDownRotate( event );

					state = STATE.ROTATE;

					break;

				case scope.mouseButtons.ZOOM:

					if ( scope.enableZoom === false ) return;

					handleMouseDownDolly( event );

					state = STATE.DOLLY;

					break;

				case scope.mouseButtons.PAN:

					if ( scope.enablePan === false ) return;

					handleMouseDownPan( event );

					state = STATE.PAN;

					break;

			}

			if ( state !== STATE.NONE ) {

				document.addEventListener( 'mousemove', onMouseMove, false );
				document.addEventListener( 'mouseup', onMouseUp, false );

				scope.dispatchEvent( startEvent );

			}

		}

		function onMouseMove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			switch ( state ) {

				case STATE.ROTATE:

					if ( scope.enableRotate === false ) return;

					handleMouseMoveRotate( event );

					break;

				case STATE.DOLLY:

					if ( scope.enableZoom === false ) return;

					handleMouseMoveDolly( event );

					break;

				case STATE.PAN:

					if ( scope.enablePan === false ) return;

					handleMouseMovePan( event );

					break;

			}

		}

		function onMouseUp( event ) {

			if ( scope.enabled === false ) return;

			handleMouseUp( event );

			document.removeEventListener( 'mousemove', onMouseMove, false );
			document.removeEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( endEvent );

			state = STATE.NONE;

		}

		function onMouseWheel( event ) {

			if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

			event.preventDefault();
			event.stopPropagation();

			scope.dispatchEvent( startEvent );

			handleMouseWheel( event );

			scope.dispatchEvent( endEvent );

		}

		function onKeyDown( event ) {

			if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

			handleKeyDown( event );

		}

		function onTouchStart( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

			switch ( event.touches.length ) {

				case 1:	// one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;

					handleTouchStartRotate( event );

					state = STATE.TOUCH_ROTATE;

					break;

				case 2:	// two-fingered touch: dolly-pan

					if ( scope.enableZoom === false && scope.enablePan === false ) return;

					handleTouchStartDollyPan( event );

					state = STATE.TOUCH_DOLLY_PAN;

					break;

				default:

					state = STATE.NONE;

			}

			if ( state !== STATE.NONE ) {

				scope.dispatchEvent( startEvent );

			}

		}

		function onTouchMove( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();
			event.stopPropagation();

			switch ( event.touches.length ) {

				case 1: // one-fingered touch: rotate

					if ( scope.enableRotate === false ) return;
					if ( state !== STATE.TOUCH_ROTATE ) return; // is this needed?

					handleTouchMoveRotate( event );

					break;

				case 2: // two-fingered touch: dolly-pan

					if ( scope.enableZoom === false && scope.enablePan === false ) return;
					if ( state !== STATE.TOUCH_DOLLY_PAN ) return; // is this needed?

					handleTouchMoveDollyPan( event );

					break;

				default:

					state = STATE.NONE;

			}

		}

		function onTouchEnd( event ) {

			if ( scope.enabled === false ) return;

			handleTouchEnd( event );

			scope.dispatchEvent( endEvent );

			state = STATE.NONE;

		}

		function onContextMenu( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

		}

		//

		scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

		scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

		window.addEventListener( 'keydown', onKeyDown, false );

		// force an update at start

		this.update();

	};

	THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
	THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;

	Object.defineProperties( THREE.OrbitControls.prototype, {

		center: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .center has been renamed to .target' );
				return this.target;

			}

		},

		// backward compatibility

		noZoom: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				return ! this.enableZoom;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.' );
				this.enableZoom = ! value;

			}

		},

		noRotate: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				return ! this.enableRotate;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.' );
				this.enableRotate = ! value;

			}

		},

		noPan: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				return ! this.enablePan;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.' );
				this.enablePan = ! value;

			}

		},

		noKeys: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				return ! this.enableKeys;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.' );
				this.enableKeys = ! value;

			}

		},

		staticMoving: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				return ! this.enableDamping;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.' );
				this.enableDamping = ! value;

			}

		},

		dynamicDampingFactor: {

			get: function () {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				return this.dampingFactor;

			},

			set: function ( value ) {

				console.warn( 'THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.' );
				this.dampingFactor = value;

			}

		}

	} );

	module.exports = exports.default = THREE.OrbitControls


/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react3d = __webpack_require__(185);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _three = __webpack_require__(187);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createCube = function createCube(wireframe, size) {
		var geometry = new _three.BoxGeometry(size, size, size);
		var material = wireframe ? new _three.MeshBasicMaterial({ color: 0xffffff, wireframe: true }) : new _three.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, side: _three.DoubleSide, flatShading: true });
		var cube = new _three.Mesh(geometry, material);
		cube.name = "cube";
		return cube;
	};

	var Cube = function (_Object3D) {
		_inherits(Cube, _Object3D);

		function Cube() {
			_classCallCheck(this, Cube);

			return _possibleConstructorReturn(this, (Cube.__proto__ || Object.getPrototypeOf(Cube)).apply(this, arguments));
		}

		_createClass(Cube, [{
			key: "objContructor",
			value: function objContructor(props) {
				this.id = "cube";
				var wireframe = props.wireframe,
				    size = props.size;

				return createCube(wireframe, size);
			}
		}]);

		return Cube;
	}(_react3d.Object3D);

	;

	Cube.propTypes = {
		wireframe: _react2.default.PropTypes.bool,
		size: _react2.default.PropTypes.number
	};
	Cube.defaultProps = {
		wireframe: false,
		size: 10
	};

	_react3d.Object3D.setTypes(Cube, { hasChild: true });

	exports.default = Cube;

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react3d = __webpack_require__(185);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _three = __webpack_require__(187);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var createDodecahedron = function createDodecahedron(wireframe, radius) {
		var geometry = new _three.DodecahedronGeometry(radius);
		var material = wireframe ? new _three.MeshBasicMaterial({ color: 0xffffff, wireframe: true }) : new _three.MeshPhongMaterial({ color: 0x156289, emissive: 0x072534, side: _three.DoubleSide, flatShading: true });
		var cube = new _three.Mesh(geometry, material);
		cube.name = "dodecahedron";
		return cube;
	};

	var Dodecahedron = function (_Object3D) {
		_inherits(Dodecahedron, _Object3D);

		function Dodecahedron() {
			_classCallCheck(this, Dodecahedron);

			return _possibleConstructorReturn(this, (Dodecahedron.__proto__ || Object.getPrototypeOf(Dodecahedron)).apply(this, arguments));
		}

		_createClass(Dodecahedron, [{
			key: "objContructor",
			value: function objContructor(props) {
				this.id = "dodecahedron";
				var wireframe = props.wireframe,
				    radius = props.radius,
				    x = props.x,
				    y = props.y;

				var obj = createDodecahedron(wireframe, radius);
				obj.position.set(x, y, 0);
				return obj;
			}
		}, {
			key: "objDidUpdate",
			value: function objDidUpdate(preProps) {
				var _props = this.props,
				    x = _props.x,
				    y = _props.y;
				var _x = preProps.x,
				    _y = preProps.y;

				this.obj.position.x = x;
				this.obj.position.y = y;
			}
		}]);

		return Dodecahedron;
	}(_react3d.Object3D);

	;

	Dodecahedron.propTypes = {
		wireframe: _react2.default.PropTypes.bool,
		radius: _react2.default.PropTypes.number
	};

	Dodecahedron.defaultProps = {
		wireframe: false,
		radius: 2
	};

	_react3d.Object3D.setTypes(Dodecahedron, { hasChild: true });

	exports.default = Dodecahedron;

/***/ })

});