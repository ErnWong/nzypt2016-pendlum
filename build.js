!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1","1"], [], function($__System) {

!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = IntegratorFactory;
  var Integrator = function Integrator(y0, deriv, t, dt) {
    this.deriv = deriv;
    this.y = y0;
    this.n = this.y.length;
    this.dt = dt;
    this.t = t;
    this._ctor = this.y.constructor;
    this._w = new this._ctor(this.n);
    this._k1 = new this._ctor(this.n);
    this._k2 = new this._ctor(this.n);
    this._k3 = new this._ctor(this.n);
    this._k4 = new this._ctor(this.n);
  };
  Integrator.prototype.step = function() {
    this.deriv(this._k1, this.y, this.t);
    for (var i = 0; i < this.n; i++) {
      this._w[i] = this.y[i] + this._k1[i] * this.dt * 0.5;
    }
    this.deriv(this._k2, this._w, this.t + this.dt * 0.5);
    for (var i = 0; i < this.n; i++) {
      this._w[i] = this.y[i] + this._k2[i] * this.dt * 0.5;
    }
    this.deriv(this._k3, this._w, this.t + this.dt * 0.5);
    for (var i = 0; i < this.n; i++) {
      this._w[i] = this.y[i] + this._k3[i] * this.dt;
    }
    this.deriv(this._k4, this._w, this.t + this.dt);
    var dto6 = this.dt / 6.0;
    for (var i = 0; i < this.n; i++) {
      this.y[i] += dto6 * (this._k1[i] + 2 * this._k2[i] + 2 * this._k3[i] + this._k4[i]);
    }
    this.t += this.dt;
    return this;
  };
  Integrator.prototype.steps = function(n) {
    for (var step = 0; step < n; step++) {
      this.step();
    }
    return this;
  };
  function IntegratorFactory(y0, deriv, t, dt) {
    return new Integrator(y0, deriv, t, dt);
  }
  return module.exports;
});

$__System.registerDynamic("3", ["2"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('2');
  return module.exports;
});

$__System.register('4', ['3'], function (_export) {
  'use strict';

  var rk4, _angle1, _angle2, _dangle1, _dangle2;

  _export('Pendulum', Pendulum);

  function diff(f, x) {
    var dx = 1e-6;
    var x1 = x - dx;
    var x2 = x + dx;
    var y1 = f(x1);
    var y2 = f(x2);
    return (y2 - y1) / (x2 - x1);
  }

  function Pendulum(_ref) {
    var g = _ref.g;
    var l = _ref.l;
    var pivotAngVel = _ref.pivotAngVel;
    var pivotRadius = _ref.pivotRadius;
    var damp1 = _ref.damp1;
    var damp2 = _ref.damp2;
    var initialAngle1 = _ref.initialAngle1;
    var initialAngle2 = _ref.initialAngle2;
    var initialDangle1 = _ref.initialDangle1;
    var initialDangle2 = _ref.initialDangle2;
    var initialTime = _ref.initialTime;
    var dt = _ref.dt;
    var stepsPerTick = _ref.stepsPerTick;

    var phase = function phase(t) {
      return pivotAngVel * t;
    };
    var pivotX = function pivotX(t) {
      return pivotRadius * Math.cos(phase(t));
    };
    var pivotY = function pivotY(t) {
      return pivotRadius * Math.sin(phase(t));
    };
    var pivotZ = function pivotZ(t) {
      return 0;
    };
    var pivotVelX = function pivotVelX(t) {
      return diff(pivotX, t);
    };
    var pivotVelY = function pivotVelY(t) {
      return diff(pivotY, t);
    };
    var pivotVelZ = function pivotVelZ(t) {
      return diff(pivotZ, t);
    };
    var accelX = function accelX(t) {
      return diff(pivotVelX, t);
    };
    var accelY = function accelY(t) {
      return diff(pivotVelY, t);
    };
    var accelZ = function accelZ(t) {
      return diff(pivotVelZ, t);
    };

    var initial = [];
    initial[_angle1] = initialAngle1;
    initial[_angle2] = initialAngle2;
    initial[_dangle1] = initialDangle1;
    initial[_dangle2] = initialDangle2;

    function derivative(dydt, y, t) {
      var th1 = y[_angle1];
      var th2 = y[_angle2];
      var dth1 = y[_dangle1];
      var dth2 = y[_dangle2];
      var c1 = Math.cos(th1);
      var c2 = Math.cos(th2);
      var s1 = Math.sin(th1);
      var s2 = Math.sin(th2);
      var ax = accelX(t);
      var ay = accelY(t);
      var az = accelZ(t);

      dydt[_dangle1] = dth2 * dth2 * s1 * c1 - (ax * c1 * c2 + ay * c1 * s2 + (az + g) * s1) / l;
      dydt[_dangle2] = (ax * s2 - ay * c2) / (l * s1) - 2 * dth1 * dth2 * c1 / s1;
      dydt[_dangle1] -= damp1 * dth1;
      dydt[_dangle2] -= damp2 * dth2;
      dydt[_angle1] = dth1;
      dydt[_angle2] = dth2;
    }

    var integrator = rk4(initial, derivative, initialTime, dt);

    return {
      step: function step() {
        return integrator.steps(stepsPerTick);
      },
      angle1: function angle1() {
        return integrator.y[_angle1];
      },
      angle2: function angle2() {
        return integrator.y[_angle2];
      },
      dangle1: function dangle1() {
        return integrator.y[_dangle1];
      },
      dangle2: function dangle2() {
        return integrator.y[_dangle2];
      },
      pos: function getPos() {
        var t = integrator.t;
        var px = pivotX(t);
        var py = pivotY(t);
        var pz = pivotZ(t);
        var curr = integrator.y;
        return {
          pivot: {
            x: px,
            y: py,
            z: pz
          },
          bob: {
            x: px + l * Math.sin(curr[_angle1]) * Math.cos(curr[_angle2]),
            y: py + l * Math.sin(curr[_angle1]) * Math.sin(curr[_angle2]),
            z: pz + l * Math.cos(curr[_angle1])
          }
        };
      },
      time: function time() {
        return integrator.t;
      },
      phasediff: function phasediff() {
        return integrator.y[_angle2] - phase(integrator.t);
      }
    };
  }

  return {
    setters: [function (_) {
      rk4 = _['default'];
    }],
    execute: function () {
      _angle1 = 0;
      _angle2 = 1;
      _dangle1 = 2;
      _dangle2 = 3;
    }
  };
});
$__System.register('5', ['4', '6'], function (_export) {
  'use strict';

  var Pendulum, SVG, g, l, pivotRadius, predictedAngle, predictedRadius, predictedHeight, pivotAngVel, damp1, damp2, initialAngle1, initialAngle2, initialDangle1, initialDangle2, initialTime, dt, stepsPerTick, sqrt2, sqrt3, sqrt2th, sqrt3th, sqrt6th, scale, canvasWidth, canvasHeight, originX, originY, camAngle, colorPlot, colorAxis, plotTimeScale, plotWidth, plotHeight, plotTicks, plotPhasediff, plotAngle1, plotDangle2, visualScale, visualPad, visualMaxRadius, visualOffsetX, visualOffsetY, visualWidth, visualHeight;

  _export('Showcase', Showcase);

  function vec3(x, y, z) {
    return { x: x, y: y, z: z };
  }

  function transform(_ref) {
    var x = _ref.x;
    var y = _ref.y;
    var z = _ref.z;

    return {
      x: originX + scale * x,
      y: originY + scale * (Math.sin(camAngle) * y + Math.cos(camAngle) * z)
    };
  }

  function xyEllipseWidth(r) {
    return scale * 2 * r;
  }
  function xyEllipseHeight(r) {
    return scale * 2 * r * Math.abs(Math.sin(camAngle));
  }

  function Showcase(svgMain, svgPhaseDiff, svgAngle1, svgDangle2, svgPhaseVisual) {
    var draw = SVG(svgMain).size(canvasWidth, canvasHeight);
    var drawPhasediff = SVG(svgPhaseDiff).size(plotWidth, plotHeight);
    var drawAngle1 = SVG(svgAngle1).size(plotWidth, plotHeight);
    var drawDangle2 = SVG(svgDangle2).size(plotWidth, plotHeight);
    var drawVisual = SVG(svgPhaseVisual).size(visualWidth, visualHeight).viewbox(visualOffsetX, visualOffsetY, visualWidth, visualHeight);

    var pivotPathW = xyEllipseWidth(pivotRadius);
    var pivotPathH = xyEllipseHeight(pivotRadius);
    var pivotPath = draw.ellipse(pivotPathW, pivotPathH).fill('none').stroke({ width: 1 }).attr({
      cx: originX,
      cy: originY
    });

    var predictedPathW = xyEllipseWidth(predictedRadius);
    var predictedPathH = xyEllipseHeight(predictedRadius);

    var _transform = transform(vec3(0, 0, predictedHeight));

    var predictedPathX = _transform.x;
    var predictedPathY = _transform.y;

    var predictedPath = draw.ellipse(predictedPathW, predictedPathH).fill('none').stroke({ width: 1 }).attr({
      cx: predictedPathX,
      cy: predictedPathY
    });

    var pivotPoint = draw.circle(4).fill('none').stroke({ width: 1 });

    var bobPoint = draw.circle(6).fill('#000');

    var thread = draw.line(0, 0, 0, 0).stroke({ width: 1 });

    for (var i = 0; i < plotTicks; i++) {
      plotPhasediff.push([0, 0]);
      plotAngle1.push([0, 0]);
      plotDangle2.push([0, 0]);
    }

    drawPhasediff.line(0, plotHeight / 2, plotWidth, plotHeight / 2).stroke({
      color: colorAxis,
      width: 1
    });
    drawAngle1.line(0, plotHeight / 2, plotWidth, plotHeight / 2).stroke({
      color: colorAxis,
      width: 1
    });
    drawDangle2.line(0, plotHeight / 2, plotWidth, plotHeight / 2).stroke({
      color: colorAxis,
      width: 1
    });
    var linePhasediff = drawPhasediff.polyline(plotPhasediff).fill('none').stroke({
      color: colorPlot,
      width: 1
    });
    var lineAngle1 = drawAngle1.polyline(plotAngle1).fill('none').stroke({
      color: colorPlot,
      width: 1
    });
    var lineDangle2 = drawDangle2.polyline(plotDangle2).fill('none').stroke({
      color: colorPlot,
      width: 1
    });

    drawVisual.circle(visualScale * pivotRadius * 2).fill('none').stroke({ width: 1, color: '#AAA' }).attr({ cx: 0, cy: 0 });
    var visualBobRadius = drawVisual.circle(0).fill('none').stroke({ width: 1, color: '#AAA' }).attr({ cx: 0, cy: 0 });
    drawVisual.circle(4).fill('#555').attr({
      cx: 0,
      cy: -visualScale * pivotRadius
    });
    var visualBobPoint = drawVisual.circle(6).fill('#05F').attr({
      cx: 0,
      cy: visualScale * pivotRadius
    });
    var visualLine = drawVisual.line(0, 0, 0, 0).stroke({ width: 1, color: '#AAA' });

    var pendulum = Pendulum({
      g: g,
      l: l,
      pivotAngVel: pivotAngVel,
      pivotRadius: pivotRadius,
      damp1: damp1,
      damp2: damp2,
      initialAngle1: initialAngle1,
      initialAngle2: initialAngle2,
      initialDangle1: initialDangle1,
      initialDangle2: initialDangle2,
      initialTime: initialTime,
      dt: dt,
      stepsPerTick: stepsPerTick
    });

    function tick() {
      pendulum.step();

      var t = pendulum.time();

      var _pendulum$pos = pendulum.pos();

      var pivotPos = _pendulum$pos.pivot;
      var bobPos = _pendulum$pos.bob;

      var pivotPointPos = transform(pivotPos);
      var bobPointPos = transform(bobPos);

      // update points
      thread.plot(pivotPointPos.x, pivotPointPos.y, bobPointPos.x, bobPointPos.y);
      bobPoint.attr({
        cx: bobPointPos.x,
        cy: bobPointPos.y
      });
      pivotPoint.attr({
        cx: pivotPointPos.x,
        cy: pivotPointPos.y
      });

      // update phase visuals
      var stickThingy = -Math.sin(pendulum.angle1()) * l;

      // let rb = stickThingy + pivotRadius;
      var phasediff = pendulum.phasediff();
      // rb *= -visualScale;
      var bx = stickThingy * Math.sin(phasediff);
      var by = -pivotRadius + stickThingy * Math.cos(phasediff);
      var rb = Math.sqrt(bx * bx + by * by);
      rb *= visualScale;
      bx *= visualScale;
      by *= visualScale;
      // let bx = rb * Math.sin(phasediff);
      // let by = rb * Math.cos(phasediff);
      visualBobRadius.radius(Math.abs(rb));
      visualBobPoint.attr({
        cx: bx,
        cy: by
      });
      visualLine.plot(0, -visualScale * pivotRadius, bx, by);

      // update plots
      var tPos = t * plotTimeScale;
      plotPhasediff.push([tPos, pendulum.phasediff() * 500 + 50]);
      plotAngle1.push([tPos, (-pendulum.angle1() - predictedAngle) * 500 + 50]);
      plotDangle2.push([tPos, (pendulum.dangle2() - pivotAngVel) * 80 + 50]);
      plotPhasediff.shift();
      plotAngle1.shift();
      plotDangle2.shift();
      linePhasediff.plot(plotPhasediff);
      lineAngle1.plot(plotAngle1);
      lineDangle2.plot(plotDangle2);
      linePhasediff.transform({ x: plotWidth - tPos });
      lineAngle1.transform({ x: plotWidth - tPos });
      lineDangle2.transform({ x: plotWidth - tPos });

      setTimeout(tick, 0);
    }
    tick();
  }

  return {
    setters: [function (_) {
      Pendulum = _.Pendulum;
    }, function (_2) {
      SVG = _2.SVG;
    }],
    execute: function () {
      g = 9.81;
      l = 1.0;
      pivotRadius = 0.5;
      predictedAngle = 0.66;
      predictedRadius = l * Math.sin(predictedAngle) - pivotRadius;
      predictedHeight = l * Math.cos(predictedAngle);
      pivotAngVel = Math.sqrt(g * Math.tan(predictedAngle) / predictedRadius);
      damp1 = 0.01;
      damp2 = 0.01;
      initialAngle1 = -predictedAngle - 0.01;
      initialAngle2 = 0.0;
      initialDangle1 = 0.0;
      initialDangle2 = pivotAngVel;
      initialTime = 0.0;
      dt = 0.0002;
      stepsPerTick = 100;
      sqrt2 = Math.sqrt(2);
      sqrt3 = Math.sqrt(3);
      sqrt2th = 1 / Math.sqrt(2);
      sqrt3th = 1 / Math.sqrt(3);
      sqrt6th = 1 / Math.sqrt(6);
      scale = 200;
      canvasWidth = 300;
      canvasHeight = 300;
      originX = 150;
      originY = 80;
      camAngle = -0.2;
      colorPlot = '#05F';
      colorAxis = '#CCC';
      plotTimeScale = 25;
      plotWidth = 200;
      plotHeight = 100;
      plotTicks = plotWidth / (plotTimeScale * dt * stepsPerTick);
      plotPhasediff = [];
      plotAngle1 = [];
      plotDangle2 = [];
      visualScale = 100;
      visualPad = 10;
      visualMaxRadius = visualScale * Math.max(pivotRadius, l - pivotRadius);
      visualOffsetX = -(visualMaxRadius + visualPad);
      visualOffsetY = visualOffsetX;
      visualWidth = -2 * visualOffsetX;
      visualHeight = visualWidth;
    }
  };
});
$__System.registerDynamic("7", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);
  (function() {
    "format global";
    ;
    !function(t, e) {
      "function" == typeof define && define.amd ? define(function() {
        return e(t, t.document);
      }) : "object" == typeof exports ? module.exports = t.document ? e(t, t.document) : function(t) {
        return e(t, t.document);
      } : t.SVG = e(t, t.document);
    }("undefined" != typeof window ? window : this, function(t, e) {
      function n(t, e) {
        return (t.matches || t.matchesSelector || t.msMatchesSelector || t.mozMatchesSelector || t.webkitMatchesSelector || t.oMatchesSelector).call(t, e);
      }
      function i(t) {
        return t.toLowerCase().replace(/-(.)/g, function(t, e) {
          return e.toUpperCase();
        });
      }
      function r(t) {
        return t.charAt(0).toUpperCase() + t.slice(1);
      }
      function s(t) {
        return 4 == t.length ? ["#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4)].join("") : t;
      }
      function o(t) {
        var e = t.toString(16);
        return 1 == e.length ? "0" + e : e;
      }
      function a(t, e, n) {
        return null == n ? n = t.height / t.width * e : null == e && (e = t.width / t.height * n), {
          width: e,
          height: n
        };
      }
      function h(t, e, n) {
        return {
          x: e * t.a + n * t.c + 0,
          y: e * t.b + n * t.d + 0
        };
      }
      function u(t) {
        return {
          a: t[0],
          b: t[1],
          c: t[2],
          d: t[3],
          e: t[4],
          f: t[5]
        };
      }
      function l(t) {
        return t instanceof y.Matrix || (t = new y.Matrix(t)), t;
      }
      function c(t, e) {
        t.cx = null == t.cx ? e.bbox().cx : t.cx, t.cy = null == t.cy ? e.bbox().cy : t.cy;
      }
      function f(t) {
        return t = t.replace(y.regex.whitespace, "").replace(y.regex.matrix, "").split(y.regex.matrixElements), u(y.utils.map(t, function(t) {
          return parseFloat(t);
        }));
      }
      function d(t, e) {
        return "number" == typeof t.from ? t.from + (t.to - t.from) * e : t instanceof y.Color || t instanceof y.Number || t instanceof y.Matrix ? t.at(e) : 1 > e ? t.from : t.to;
      }
      function p(t) {
        for (var e = 0,
            n = t.length,
            i = ""; n > e; e++)
          i += t[e][0], null != t[e][1] && (i += t[e][1], null != t[e][2] && (i += " ", i += t[e][2], null != t[e][3] && (i += " ", i += t[e][3], i += " ", i += t[e][4], null != t[e][5] && (i += " ", i += t[e][5], i += " ", i += t[e][6], null != t[e][7] && (i += " ", i += t[e][7])))));
        return i + " ";
      }
      function m(t) {
        for (var e = t.childNodes.length - 1; e >= 0; e--)
          t.childNodes[e] instanceof SVGElement && m(t.childNodes[e]);
        return y.adopt(t).id(y.eid(t.nodeName));
      }
      function x(t) {
        return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t;
      }
      function g(t) {
        var e = t.toString().match(y.regex.reference);
        return e ? e[1] : void 0;
      }
      var y = this.SVG = function(t) {
        return y.supported ? (t = new y.Doc(t), y.parser || y.prepare(t), t) : void 0;
      };
      if (y.ns = "http://www.w3.org/2000/svg", y.xmlns = "http://www.w3.org/2000/xmlns/", y.xlink = "http://www.w3.org/1999/xlink", y.svgjs = "http://svgjs.com/svgjs", y.supported = function() {
        return !!e.createElementNS && !!e.createElementNS(y.ns, "svg").createSVGRect;
      }(), !y.supported)
        return !1;
      y.did = 1e3, y.eid = function(t) {
        return "Svgjs" + r(t) + y.did++;
      }, y.create = function(t) {
        var n = e.createElementNS(this.ns, t);
        return n.setAttribute("id", this.eid(t)), n;
      }, y.extend = function() {
        var t,
            e,
            n,
            i;
        for (t = [].slice.call(arguments), e = t.pop(), i = t.length - 1; i >= 0; i--)
          if (t[i])
            for (n in e)
              t[i].prototype[n] = e[n];
        y.Set && y.Set.inherit && y.Set.inherit();
      }, y.invent = function(t) {
        var e = "function" == typeof t.create ? t.create : function() {
          this.constructor.call(this, y.create(t.create));
        };
        return t.inherit && (e.prototype = new t.inherit), t.extend && y.extend(e, t.extend), t.construct && y.extend(t.parent || y.Container, t.construct), e;
      }, y.adopt = function(t) {
        if (!t)
          return null;
        if (t.instance)
          return t.instance;
        var e;
        return e = "svg" == t.nodeName ? t.parentNode instanceof SVGElement ? new y.Nested : new y.Doc : "linearGradient" == t.nodeName ? new y.Gradient("linear") : "radialGradient" == t.nodeName ? new y.Gradient("radial") : y[r(t.nodeName)] ? new (y[r(t.nodeName)]) : new y.Element(t), e.type = t.nodeName, e.node = t, t.instance = e, e instanceof y.Doc && e.namespace().defs(), e.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), e;
      }, y.prepare = function(t) {
        var n = e.getElementsByTagName("body")[0],
            i = (n ? new y.Doc(n) : t.nested()).size(2, 0),
            r = y.create("path");
        i.node.appendChild(r), y.parser = {
          body: n || t.parent(),
          draw: i.style("opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"),
          poly: i.polyline().node,
          path: r
        };
      }, y.regex = {
        unit: /^(-?[\d\.]+)([a-z%]{0,2})$/,
        hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
        rgb: /rgb\((\d+),(\d+),(\d+)\)/,
        reference: /#([a-z0-9\-_]+)/i,
        matrix: /matrix\(|\)/g,
        matrixElements: /,*\s+|,/,
        whitespace: /\s/g,
        isHex: /^#[a-f0-9]{3,6}$/i,
        isRgb: /^rgb\(/,
        isCss: /[^:]+:[^;]+;?/,
        isBlank: /^(\s+)?$/,
        isNumber: /^-?[\d\.]+$/,
        isPercent: /^-?[\d\.]+%$/,
        isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
        negExp: /e\-/gi,
        comma: /,/g,
        hyphen: /\-/g,
        pathLetters: /[MLHVCSQTAZ]/gi,
        isPathLetter: /[MLHVCSQTAZ]/i,
        whitespaces: /\s+/,
        X: /X/g
      }, y.utils = {
        map: function(t, e) {
          var n,
              i = t.length,
              r = [];
          for (n = 0; i > n; n++)
            r.push(e(t[n]));
          return r;
        },
        radians: function(t) {
          return t % 360 * Math.PI / 180;
        },
        degrees: function(t) {
          return 180 * t / Math.PI % 360;
        },
        filterSVGElements: function(t) {
          return [].filter.call(t, function(t) {
            return t instanceof SVGElement;
          });
        }
      }, y.defaults = {attrs: {
          "fill-opacity": 1,
          "stroke-opacity": 1,
          "stroke-width": 0,
          "stroke-linejoin": "miter",
          "stroke-linecap": "butt",
          fill: "#000000",
          stroke: "#000000",
          opacity: 1,
          x: 0,
          y: 0,
          cx: 0,
          cy: 0,
          width: 0,
          height: 0,
          r: 0,
          rx: 0,
          ry: 0,
          offset: 0,
          "stop-opacity": 1,
          "stop-color": "#000000",
          "font-size": 16,
          "font-family": "Helvetica, Arial, sans-serif",
          "text-anchor": "start"
        }}, y.Color = function(t) {
        var e;
        this.r = 0, this.g = 0, this.b = 0, "string" == typeof t ? y.regex.isRgb.test(t) ? (e = y.regex.rgb.exec(t.replace(/\s/g, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : y.regex.isHex.test(t) && (e = y.regex.hex.exec(s(t)), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" == typeof t && (this.r = t.r, this.g = t.g, this.b = t.b);
      }, y.extend(y.Color, {
        toString: function() {
          return this.toHex();
        },
        toHex: function() {
          return "#" + o(this.r) + o(this.g) + o(this.b);
        },
        toRgb: function() {
          return "rgb(" + [this.r, this.g, this.b].join() + ")";
        },
        brightness: function() {
          return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11;
        },
        morph: function(t) {
          return this.destination = new y.Color(t), this;
        },
        at: function(t) {
          return this.destination ? (t = 0 > t ? 0 : t > 1 ? 1 : t, new y.Color({
            r: ~~(this.r + (this.destination.r - this.r) * t),
            g: ~~(this.g + (this.destination.g - this.g) * t),
            b: ~~(this.b + (this.destination.b - this.b) * t)
          })) : this;
        }
      }), y.Color.test = function(t) {
        return t += "", y.regex.isHex.test(t) || y.regex.isRgb.test(t);
      }, y.Color.isRgb = function(t) {
        return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b;
      }, y.Color.isColor = function(t) {
        return y.Color.isRgb(t) || y.Color.test(t);
      }, y.Array = function(t, e) {
        t = (t || []).valueOf(), 0 == t.length && e && (t = e.valueOf()), this.value = this.parse(t);
      }, y.extend(y.Array, {
        morph: function(t) {
          if (this.destination = this.parse(t), this.value.length != this.destination.length) {
            for (var e = this.value[this.value.length - 1],
                n = this.destination[this.destination.length - 1]; this.value.length > this.destination.length; )
              this.destination.push(n);
            for (; this.value.length < this.destination.length; )
              this.value.push(e);
          }
          return this;
        },
        settle: function() {
          for (var t = 0,
              e = this.value.length,
              n = []; e > t; t++)
            -1 == n.indexOf(this.value[t]) && n.push(this.value[t]);
          return this.value = n;
        },
        at: function(t) {
          if (!this.destination)
            return this;
          for (var e = 0,
              n = this.value.length,
              i = []; n > e; e++)
            i.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
          return new y.Array(i);
        },
        toString: function() {
          return this.value.join(" ");
        },
        valueOf: function() {
          return this.value;
        },
        parse: function(t) {
          return t = t.valueOf(), Array.isArray(t) ? t : this.split(t);
        },
        split: function(t) {
          return t.trim().split(/\s+/);
        },
        reverse: function() {
          return this.value.reverse(), this;
        }
      }), y.PointArray = function(t, e) {
        this.constructor.call(this, t, e || [[0, 0]]);
      }, y.PointArray.prototype = new y.Array, y.extend(y.PointArray, {
        toString: function() {
          for (var t = 0,
              e = this.value.length,
              n = []; e > t; t++)
            n.push(this.value[t].join(","));
          return n.join(" ");
        },
        toLine: function() {
          return {
            x1: this.value[0][0],
            y1: this.value[0][1],
            x2: this.value[1][0],
            y2: this.value[1][1]
          };
        },
        at: function(t) {
          if (!this.destination)
            return this;
          for (var e = 0,
              n = this.value.length,
              i = []; n > e; e++)
            i.push([this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t]);
          return new y.PointArray(i);
        },
        parse: function(t) {
          if (t = t.valueOf(), Array.isArray(t))
            return t;
          t = this.split(t);
          for (var e,
              n = 0,
              i = t.length,
              r = []; i > n; n++)
            e = t[n].split(","), r.push([parseFloat(e[0]), parseFloat(e[1])]);
          return r;
        },
        move: function(t, e) {
          var n = this.bbox();
          if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e))
            for (var i = this.value.length - 1; i >= 0; i--)
              this.value[i] = [this.value[i][0] + t, this.value[i][1] + e];
          return this;
        },
        size: function(t, e) {
          var n,
              i = this.bbox();
          for (n = this.value.length - 1; n >= 0; n--)
            this.value[n][0] = (this.value[n][0] - i.x) * t / i.width + i.x, this.value[n][1] = (this.value[n][1] - i.y) * e / i.height + i.y;
          return this;
        },
        bbox: function() {
          return y.parser.poly.setAttribute("points", this.toString()), y.parser.poly.getBBox();
        }
      }), y.PathArray = function(t, e) {
        this.constructor.call(this, t, e || [["M", 0, 0]]);
      }, y.PathArray.prototype = new y.Array, y.extend(y.PathArray, {
        toString: function() {
          return p(this.value);
        },
        move: function(t, e) {
          var n = this.bbox();
          if (t -= n.x, e -= n.y, !isNaN(t) && !isNaN(e))
            for (var i,
                r = this.value.length - 1; r >= 0; r--)
              i = this.value[r][0], "M" == i || "L" == i || "T" == i ? (this.value[r][1] += t, this.value[r][2] += e) : "H" == i ? this.value[r][1] += t : "V" == i ? this.value[r][1] += e : "C" == i || "S" == i || "Q" == i ? (this.value[r][1] += t, this.value[r][2] += e, this.value[r][3] += t, this.value[r][4] += e, "C" == i && (this.value[r][5] += t, this.value[r][6] += e)) : "A" == i && (this.value[r][6] += t, this.value[r][7] += e);
          return this;
        },
        size: function(t, e) {
          var n,
              i,
              r = this.bbox();
          for (n = this.value.length - 1; n >= 0; n--)
            i = this.value[n][0], "M" == i || "L" == i || "T" == i ? (this.value[n][1] = (this.value[n][1] - r.x) * t / r.width + r.x, this.value[n][2] = (this.value[n][2] - r.y) * e / r.height + r.y) : "H" == i ? this.value[n][1] = (this.value[n][1] - r.x) * t / r.width + r.x : "V" == i ? this.value[n][1] = (this.value[n][1] - r.y) * e / r.height + r.y : "C" == i || "S" == i || "Q" == i ? (this.value[n][1] = (this.value[n][1] - r.x) * t / r.width + r.x, this.value[n][2] = (this.value[n][2] - r.y) * e / r.height + r.y, this.value[n][3] = (this.value[n][3] - r.x) * t / r.width + r.x, this.value[n][4] = (this.value[n][4] - r.y) * e / r.height + r.y, "C" == i && (this.value[n][5] = (this.value[n][5] - r.x) * t / r.width + r.x, this.value[n][6] = (this.value[n][6] - r.y) * e / r.height + r.y)) : "A" == i && (this.value[n][1] = this.value[n][1] * t / r.width, this.value[n][2] = this.value[n][2] * e / r.height, this.value[n][6] = (this.value[n][6] - r.x) * t / r.width + r.x, this.value[n][7] = (this.value[n][7] - r.y) * e / r.height + r.y);
          return this;
        },
        parse: function(t) {
          if (t instanceof y.PathArray)
            return t.valueOf();
          var e,
              n,
              i,
              r,
              s,
              o,
              a = 0,
              h = 0,
              u = {
                M: 2,
                L: 2,
                H: 1,
                V: 1,
                C: 6,
                S: 4,
                Q: 4,
                T: 2,
                A: 7
              };
          if ("string" == typeof t) {
            for (t = t.replace(y.regex.negExp, "X").replace(y.regex.pathLetters, " $& ").replace(y.regex.hyphen, " -").replace(y.regex.comma, " ").replace(y.regex.X, "e-").trim().split(y.regex.whitespaces), e = t.length; --e; )
              if (t[e].indexOf(".") != t[e].lastIndexOf(".")) {
                var l = t[e].split("."),
                    c = [l.shift(), l.shift()].join(".");
                t.splice.apply(t, [e, 1].concat(c, l.map(function(t) {
                  return "." + t;
                })));
              }
          } else
            t = t.reduce(function(t, e) {
              return [].concat.apply(t, e);
            }, []);
          var o = [];
          do {
            for (y.regex.isPathLetter.test(t[0]) ? (r = t[0], t.shift()) : "M" == r ? r = "L" : "m" == r && (r = "l"), s = [r.toUpperCase()], e = 0; e < u[s[0]]; ++e)
              s.push(parseFloat(t.shift()));
            r == s[0] ? "M" == r || "L" == r || "C" == r || "Q" == r ? (a = s[u[s[0]] - 1], h = s[u[s[0]]]) : "V" == r ? h = s[1] : "H" == r ? a = s[1] : "A" == r && (a = s[6], h = s[7]) : "m" == r || "l" == r || "c" == r || "s" == r || "q" == r || "t" == r ? (s[1] += a, s[2] += h, null != s[3] && (s[3] += a, s[4] += h), null != s[5] && (s[5] += a, s[6] += h), a = s[u[s[0]] - 1], h = s[u[s[0]]]) : "v" == r ? (s[1] += h, h = s[1]) : "h" == r ? (s[1] += a, a = s[1]) : "a" == r && (s[6] += a, s[7] += h, a = s[6], h = s[7]), "M" == s[0] && (n = a, i = h), "Z" == s[0] && (a = n, h = i), o.push(s);
          } while (t.length);
          return o;
        },
        bbox: function() {
          return y.parser.path.setAttribute("d", this.toString()), y.parser.path.getBBox();
        }
      }), y.Number = y.invent({
        create: function(t, e) {
          this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : 0 > t ? -3.4e38 : 3.4e38 : "string" == typeof t ? (e = t.match(y.regex.unit), e && (this.value = parseFloat(e[1]), "%" == e[2] ? this.value /= 100 : "s" == e[2] && (this.value *= 1e3), this.unit = e[2])) : t instanceof y.Number && (this.value = t.valueOf(), this.unit = t.unit);
        },
        extend: {
          toString: function() {
            return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit;
          },
          valueOf: function() {
            return this.value;
          },
          plus: function(t) {
            return new y.Number(this + new y.Number(t), this.unit);
          },
          minus: function(t) {
            return this.plus(-new y.Number(t));
          },
          times: function(t) {
            return new y.Number(this * new y.Number(t), this.unit);
          },
          divide: function(t) {
            return new y.Number(this / new y.Number(t), this.unit);
          },
          to: function(t) {
            var e = new y.Number(this);
            return "string" == typeof t && (e.unit = t), e;
          },
          morph: function(t) {
            return this.destination = new y.Number(t), this;
          },
          at: function(t) {
            return this.destination ? new y.Number(this.destination).minus(this).times(t).plus(this) : this;
          }
        }
      }), y.ViewBox = function(t) {
        var e,
            n,
            i,
            r,
            s = 1,
            o = 1,
            a = t.bbox(),
            h = (t.attr("viewBox") || "").match(/-?[\d\.]+/g),
            u = t,
            l = t;
        for (i = new y.Number(t.width()), r = new y.Number(t.height()); "%" == i.unit; )
          s *= i.value, i = new y.Number(u instanceof y.Doc ? u.parent().offsetWidth : u.parent().width()), u = u.parent();
        for (; "%" == r.unit; )
          o *= r.value, r = new y.Number(l instanceof y.Doc ? l.parent().offsetHeight : l.parent().height()), l = l.parent();
        this.x = a.x, this.y = a.y, this.width = i * s, this.height = r * o, this.zoom = 1, h && (e = parseFloat(h[0]), n = parseFloat(h[1]), i = parseFloat(h[2]), r = parseFloat(h[3]), this.zoom = this.width / this.height > i / r ? this.height / r : this.width / i, this.x = e, this.y = n, this.width = i, this.height = r);
      }, y.extend(y.ViewBox, {toString: function() {
          return this.x + " " + this.y + " " + this.width + " " + this.height;
        }}), y.Element = y.invent({
        create: function(t) {
          this._stroke = y.defaults.attrs.stroke, this.dom = {}, (this.node = t) && (this.type = t.nodeName, this.node.instance = this, this._stroke = t.getAttribute("stroke") || this._stroke);
        },
        extend: {
          x: function(t) {
            return this.attr("x", t);
          },
          y: function(t) {
            return this.attr("y", t);
          },
          cx: function(t) {
            return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2);
          },
          cy: function(t) {
            return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2);
          },
          move: function(t, e) {
            return this.x(t).y(e);
          },
          center: function(t, e) {
            return this.cx(t).cy(e);
          },
          width: function(t) {
            return this.attr("width", t);
          },
          height: function(t) {
            return this.attr("height", t);
          },
          size: function(t, e) {
            var n = a(this.bbox(), t, e);
            return this.width(new y.Number(n.width)).height(new y.Number(n.height));
          },
          clone: function() {
            var t = m(this.node.cloneNode(!0));
            return this.after(t), t;
          },
          remove: function() {
            return this.parent() && this.parent().removeElement(this), this;
          },
          replace: function(t) {
            return this.after(t).remove(), t;
          },
          addTo: function(t) {
            return t.put(this);
          },
          putIn: function(t) {
            return t.add(this);
          },
          id: function(t) {
            return this.attr("id", t);
          },
          inside: function(t, e) {
            var n = this.bbox();
            return t > n.x && e > n.y && t < n.x + n.width && e < n.y + n.height;
          },
          show: function() {
            return this.style("display", "");
          },
          hide: function() {
            return this.style("display", "none");
          },
          visible: function() {
            return "none" != this.style("display");
          },
          toString: function() {
            return this.attr("id");
          },
          classes: function() {
            var t = this.attr("class");
            return null == t ? [] : t.trim().split(/\s+/);
          },
          hasClass: function(t) {
            return -1 != this.classes().indexOf(t);
          },
          addClass: function(t) {
            if (!this.hasClass(t)) {
              var e = this.classes();
              e.push(t), this.attr("class", e.join(" "));
            }
            return this;
          },
          removeClass: function(t) {
            return this.hasClass(t) && this.attr("class", this.classes().filter(function(e) {
              return e != t;
            }).join(" ")), this;
          },
          toggleClass: function(t) {
            return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
          },
          reference: function(t) {
            return y.get(this.attr(t));
          },
          parent: function(t) {
            var e = this;
            if (!e.node.parentNode)
              return null;
            if (e = y.adopt(e.node.parentNode), !t)
              return e;
            for (; e.node instanceof SVGElement; ) {
              if ("string" == typeof t ? e.matches(t) : e instanceof t)
                return e;
              e = y.adopt(e.node.parentNode);
            }
          },
          doc: function() {
            return this instanceof y.Doc ? this : this.parent(y.Doc);
          },
          parents: function(t) {
            var e = [],
                n = this;
            do {
              if (n = n.parent(t), !n || !n.node)
                break;
              e.push(n);
            } while (n.parent);
            return e;
          },
          matches: function(t) {
            return n(this.node, t);
          },
          "native": function() {
            return this.node;
          },
          svg: function(t) {
            var n = e.createElement("svg");
            if (!(t && this instanceof y.Parent))
              return n.appendChild(t = e.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), n.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
            n.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<(\w+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
            for (var i = 0,
                r = n.firstChild.childNodes.length; r > i; i++)
              this.node.appendChild(n.firstChild.firstChild);
            return this;
          },
          writeDataToDom: function() {
            if (this.each || this.lines) {
              var t = this.each ? this : this.lines();
              t.each(function() {
                this.writeDataToDom();
              });
            }
            return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttributeNS(y.svgjs, "svgjs:data", JSON.stringify(this.dom)), this;
          },
          setData: function(t) {
            return this.dom = t, this;
          }
        }
      }), y.FX = y.invent({
        create: function(t) {
          this.target = t;
        },
        extend: {
          animate: function(t, e, n) {
            var i,
                r,
                s,
                o = this.target,
                a = this;
            return "object" == typeof t && (n = t.delay, e = t.ease, t = t.duration), t = "=" == t ? t : null == t ? 1e3 : new y.Number(t).valueOf(), e = e || "<>", a.at = function(t) {
              var n;
              if (t = 0 > t ? 0 : t > 1 ? 1 : t, null == i) {
                i = [];
                for (s in a.attrs)
                  i.push(s);
                if (o.morphArray && (a.destination.plot || i.indexOf("points") > -1)) {
                  var h,
                      u = new o.morphArray(a.destination.plot || a.attrs.points || o.array());
                  a.destination.size && u.size(a.destination.size.width.to, a.destination.size.height.to), h = u.bbox(), a.destination.x ? u.move(a.destination.x.to, h.y) : a.destination.cx && u.move(a.destination.cx.to - h.width / 2, h.y), h = u.bbox(), a.destination.y ? u.move(h.x, a.destination.y.to) : a.destination.cy && u.move(h.x, a.destination.cy.to - h.height / 2), a.destination = {plot: o.array().morph(u)};
                }
              }
              if (null == r) {
                r = [];
                for (s in a.styles)
                  r.push(s);
              }
              for (t = "<>" == e ? -Math.cos(t * Math.PI) / 2 + .5 : ">" == e ? Math.sin(t * Math.PI / 2) : "<" == e ? -Math.cos(t * Math.PI / 2) + 1 : "-" == e ? t : "function" == typeof e ? e(t) : t, a.destination.plot ? o.plot(a.destination.plot.at(t)) : (a.destination.x ? o.x(a.destination.x.at(t)) : a.destination.cx && o.cx(a.destination.cx.at(t)), a.destination.y ? o.y(a.destination.y.at(t)) : a.destination.cy && o.cy(a.destination.cy.at(t)), a.destination.size && o.size(a.destination.size.width.at(t), a.destination.size.height.at(t))), a.destination.viewbox && o.viewbox(a.destination.viewbox.x.at(t), a.destination.viewbox.y.at(t), a.destination.viewbox.width.at(t), a.destination.viewbox.height.at(t)), a.destination.leading && o.leading(a.destination.leading.at(t)), n = i.length - 1; n >= 0; n--)
                o.attr(i[n], d(a.attrs[i[n]], t));
              for (n = r.length - 1; n >= 0; n--)
                o.style(r[n], d(a.styles[r[n]], t));
              a.situation.during && a.situation.during.call(o, t, function(e, n) {
                return d({
                  from: e,
                  to: n
                }, t);
              });
            }, "number" == typeof t && (this.timeout = setTimeout(function() {
              var i = (new Date).getTime();
              a.situation.start = i, a.situation.play = !0, a.situation.finish = i + t, a.situation.duration = t, a.situation.ease = e, a.render = function() {
                if (a.situation.play === !0) {
                  var i = (new Date).getTime(),
                      r = i > a.situation.finish ? 1 : (i - a.situation.start) / t;
                  a.situation.reversing && (r = -r + 1), a.at(r), i > a.situation.finish ? (a.destination.plot && o.plot(new y.PointArray(a.destination.plot.destination).settle()), a.situation.loop === !0 || "number" == typeof a.situation.loop && a.situation.loop > 0 ? (a.situation.reverse && (a.situation.reversing = !a.situation.reversing), "number" == typeof a.situation.loop && ((!a.situation.reverse || a.situation.reversing) && --a.situation.loop, a.situation.reverse || 1 != a.situation.loop || --a.situation.loop), a.animate(t, e, n)) : a.situation.after ? a.situation.after.apply(o, [a]) : a.stop()) : a.animationFrame = requestAnimationFrame(a.render);
                } else
                  a.animationFrame = requestAnimationFrame(a.render);
              }, a.render();
            }, new y.Number(n).valueOf())), this;
          },
          bbox: function() {
            return this.target.bbox();
          },
          attr: function(t, e) {
            if ("object" == typeof t)
              for (var n in t)
                this.attr(n, t[n]);
            else {
              var i = this.target.attr(t);
              "transform" == t ? (this.attrs[t] && (e = this.attrs[t].destination.multiply(e)), this.attrs[t] = new y.Matrix(this.target).morph(e), this.param && (e = this.target.transform("rotation"), this.attrs[t].param = {
                from: this.target.param || {
                  rotation: e,
                  cx: this.param.cx,
                  cy: this.param.cy
                },
                to: this.param
              })) : this.attrs[t] = y.Color.isColor(e) ? new y.Color(i).morph(e) : y.regex.unit.test(e) ? new y.Number(i).morph(e) : {
                from: i,
                to: e
              };
            }
            return this;
          },
          style: function(t, e) {
            if ("object" == typeof t)
              for (var n in t)
                this.style(n, t[n]);
            else
              this.styles[t] = {
                from: this.target.style(t),
                to: e
              };
            return this;
          },
          x: function(t) {
            return this.destination.x = new y.Number(this.target.x()).morph(t), this;
          },
          y: function(t) {
            return this.destination.y = new y.Number(this.target.y()).morph(t), this;
          },
          cx: function(t) {
            return this.destination.cx = new y.Number(this.target.cx()).morph(t), this;
          },
          cy: function(t) {
            return this.destination.cy = new y.Number(this.target.cy()).morph(t), this;
          },
          move: function(t, e) {
            return this.x(t).y(e);
          },
          center: function(t, e) {
            return this.cx(t).cy(e);
          },
          size: function(t, e) {
            if (this.target instanceof y.Text)
              this.attr("font-size", t);
            else {
              var n = this.target.bbox();
              this.destination.size = {
                width: new y.Number(n.width).morph(t),
                height: new y.Number(n.height).morph(e)
              };
            }
            return this;
          },
          plot: function(t) {
            return this.destination.plot = t, this;
          },
          leading: function(t) {
            return this.target.destination.leading && (this.destination.leading = new y.Number(this.target.destination.leading).morph(t)), this;
          },
          viewbox: function(t, e, n, i) {
            if (this.target instanceof y.Container) {
              var r = this.target.viewbox();
              this.destination.viewbox = {
                x: new y.Number(r.x).morph(t),
                y: new y.Number(r.y).morph(e),
                width: new y.Number(r.width).morph(n),
                height: new y.Number(r.height).morph(i)
              };
            }
            return this;
          },
          update: function(t) {
            return this.target instanceof y.Stop && (null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new y.Number(t.offset))), this;
          },
          during: function(t) {
            return this.situation.during = t, this;
          },
          after: function(t) {
            return this.situation.after = t, this;
          },
          loop: function(t, e) {
            return this.situation.loop = this.situation.loops = t || !0, this.situation.reverse = !!e, this;
          },
          stop: function(t) {
            return t === !0 ? (this.animate(0), this.situation.after && this.situation.after.apply(this.target, [this])) : (clearTimeout(this.timeout), cancelAnimationFrame(this.animationFrame), this.attrs = {}, this.styles = {}, this.situation = {}, this.destination = {}), this;
          },
          pause: function() {
            return this.situation.play === !0 && (this.situation.play = !1, this.situation.pause = (new Date).getTime()), this;
          },
          play: function() {
            if (this.situation.play === !1) {
              var t = (new Date).getTime() - this.situation.pause;
              this.situation.finish += t, this.situation.start += t, this.situation.play = !0;
            }
            return this;
          }
        },
        parent: y.Element,
        construct: {
          animate: function(t, e, n) {
            return (this.fx || (this.fx = new y.FX(this))).stop().animate(t, e, n);
          },
          stop: function(t) {
            return this.fx && this.fx.stop(t), this;
          },
          pause: function() {
            return this.fx && this.fx.pause(), this;
          },
          play: function() {
            return this.fx && this.fx.play(), this;
          }
        }
      }), y.BBox = y.invent({
        create: function(t) {
          if (t) {
            var e;
            try {
              e = t.node.getBBox();
            } catch (n) {
              if (t instanceof y.Shape) {
                var i = t.clone().addTo(y.parser.draw);
                e = i.bbox(), i.remove();
              } else
                e = {
                  x: t.node.clientLeft,
                  y: t.node.clientTop,
                  width: t.node.clientWidth,
                  height: t.node.clientHeight
                };
            }
            this.x = e.x, this.y = e.y, this.width = e.width, this.height = e.height;
          }
          x(this);
        },
        parent: y.Element,
        construct: {bbox: function() {
            return new y.BBox(this);
          }}
      }), y.TBox = y.invent({
        create: function(t) {
          if (t) {
            var e = t.ctm().extract(),
                n = t.bbox();
            this.width = n.width * e.scaleX, this.height = n.height * e.scaleY, this.x = n.x + e.x, this.y = n.y + e.y;
          }
          x(this);
        },
        parent: y.Element,
        construct: {tbox: function() {
            return new y.TBox(this);
          }}
      }), y.RBox = y.invent({
        create: function(e) {
          if (e) {
            var n = e.doc().parent(),
                i = e.node.getBoundingClientRect(),
                r = 1;
            for (this.x = i.left, this.y = i.top, this.x -= n.offsetLeft, this.y -= n.offsetTop; n = n.offsetParent; )
              this.x -= n.offsetLeft, this.y -= n.offsetTop;
            for (n = e; n.parent && (n = n.parent()); )
              n.viewbox && (r *= n.viewbox().zoom, this.x -= n.x() || 0, this.y -= n.y() || 0);
            this.width = i.width /= r, this.height = i.height /= r;
          }
          x(this), this.x += t.pageXOffset, this.y += t.pageYOffset;
        },
        parent: y.Element,
        construct: {rbox: function() {
            return new y.RBox(this);
          }}
      }), [y.BBox, y.TBox, y.RBox].forEach(function(t) {
        y.extend(t, {merge: function(e) {
            var n = new t;
            return n.x = Math.min(this.x, e.x), n.y = Math.min(this.y, e.y), n.width = Math.max(this.x + this.width, e.x + e.width) - n.x, n.height = Math.max(this.y + this.height, e.y + e.height) - n.y, x(n);
          }});
      }), y.Matrix = y.invent({
        create: function(t) {
          var e,
              n = u([1, 0, 0, 1, 0, 0]);
          for (t = t instanceof y.Element ? t.matrixify() : "string" == typeof t ? f(t) : 6 == arguments.length ? u([].slice.call(arguments)) : "object" == typeof t ? t : n, e = b.length - 1; e >= 0; e--)
            this[b[e]] = t && "number" == typeof t[b[e]] ? t[b[e]] : n[b[e]];
        },
        extend: {
          extract: function() {
            var t = h(this, 0, 1),
                e = h(this, 1, 0),
                n = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
            return {
              x: this.e,
              y: this.f,
              skewX: -n,
              skewY: 180 / Math.PI * Math.atan2(e.y, e.x),
              scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
              scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
              rotation: n,
              a: this.a,
              b: this.b,
              c: this.c,
              d: this.d,
              e: this.e,
              f: this.f
            };
          },
          clone: function() {
            return new y.Matrix(this);
          },
          morph: function(t) {
            return this.destination = new y.Matrix(t), this;
          },
          at: function(t) {
            if (!this.destination)
              return this;
            var e = new y.Matrix({
              a: this.a + (this.destination.a - this.a) * t,
              b: this.b + (this.destination.b - this.b) * t,
              c: this.c + (this.destination.c - this.c) * t,
              d: this.d + (this.destination.d - this.d) * t,
              e: this.e + (this.destination.e - this.e) * t,
              f: this.f + (this.destination.f - this.f) * t
            });
            if (this.param && this.param.to) {
              var n = {
                rotation: this.param.from.rotation + (this.param.to.rotation - this.param.from.rotation) * t,
                cx: this.param.from.cx,
                cy: this.param.from.cy
              };
              e = e.rotate((this.param.to.rotation - 2 * this.param.from.rotation) * t, n.cx, n.cy), e.param = n;
            }
            return e;
          },
          multiply: function(t) {
            return new y.Matrix(this.native().multiply(l(t).native()));
          },
          inverse: function() {
            return new y.Matrix(this.native().inverse());
          },
          translate: function(t, e) {
            return new y.Matrix(this.native().translate(t || 0, e || 0));
          },
          scale: function(t, e, n, i) {
            return (1 == arguments.length || 3 == arguments.length) && (e = t), 3 == arguments.length && (i = n, n = e), this.around(n, i, new y.Matrix(t, 0, 0, e, 0, 0));
          },
          rotate: function(t, e, n) {
            return t = y.utils.radians(t), this.around(e, n, new y.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0));
          },
          flip: function(t, e) {
            return "x" == t ? this.scale(-1, 1, e, 0) : this.scale(1, -1, 0, e);
          },
          skew: function(t, e, n, i) {
            return this.around(n, i, this.native().skewX(t || 0).skewY(e || 0));
          },
          skewX: function(t, e, n) {
            return this.around(e, n, this.native().skewX(t || 0));
          },
          skewY: function(t, e, n) {
            return this.around(e, n, this.native().skewY(t || 0));
          },
          around: function(t, e, n) {
            return this.multiply(new y.Matrix(1, 0, 0, 1, t || 0, e || 0)).multiply(n).multiply(new y.Matrix(1, 0, 0, 1, -t || 0, -e || 0));
          },
          "native": function() {
            for (var t = y.parser.draw.node.createSVGMatrix(),
                e = b.length - 1; e >= 0; e--)
              t[b[e]] = this[b[e]];
            return t;
          },
          toString: function() {
            return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
          }
        },
        parent: y.Element,
        construct: {
          ctm: function() {
            return new y.Matrix(this.node.getCTM());
          },
          screenCTM: function() {
            return new y.Matrix(this.node.getScreenCTM());
          }
        }
      }), y.extend(y.Element, {attr: function(t, e, n) {
          if (null == t) {
            for (t = {}, e = this.node.attributes, n = e.length - 1; n >= 0; n--)
              t[e[n].nodeName] = y.regex.isNumber.test(e[n].nodeValue) ? parseFloat(e[n].nodeValue) : e[n].nodeValue;
            return t;
          }
          if ("object" == typeof t)
            for (e in t)
              this.attr(e, t[e]);
          else if (null === e)
            this.node.removeAttribute(t);
          else {
            if (null == e)
              return e = this.node.getAttribute(t), null == e ? y.defaults.attrs[t] : y.regex.isNumber.test(e) ? parseFloat(e) : e;
            "stroke-width" == t ? this.attr("stroke", parseFloat(e) > 0 ? this._stroke : null) : "stroke" == t && (this._stroke = e), ("fill" == t || "stroke" == t) && (y.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof y.Image && (e = this.doc().defs().pattern(0, 0, function() {
              this.add(e);
            }))), "number" == typeof e ? e = new y.Number(e) : y.Color.isColor(e) ? e = new y.Color(e) : Array.isArray(e) ? e = new y.Array(e) : e instanceof y.Matrix && e.param && (this.param = e.param), "leading" == t ? this.leading && this.leading(e) : "string" == typeof n ? this.node.setAttributeNS(n, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e);
          }
          return this;
        }}), y.extend(y.Element, y.FX, {transform: function(t, e) {
          var n,
              i = this.target || this;
          if ("object" != typeof t)
            return n = new y.Matrix(i).extract(), "object" == typeof this.param && (n.rotation = this.param.rotation, n.cx = this.param.cx, n.cy = this.param.cy), "string" == typeof t ? n[t] : n;
          if (n = this instanceof y.FX && this.attrs.transform ? this.attrs.transform : new y.Matrix(i), e = !!e || !!t.relative, null != t.a)
            n = e ? n.multiply(new y.Matrix(t)) : new y.Matrix(t);
          else if (null != t.rotation)
            c(t, i), e && (t.rotation += this.param && null != this.param.rotation ? this.param.rotation : n.extract().rotation), this.param = t, this instanceof y.Element && (n = e ? n.rotate(t.rotation, t.cx, t.cy) : n.rotate(t.rotation - n.extract().rotation, t.cx, t.cy));
          else if (null != t.scale || null != t.scaleX || null != t.scaleY) {
            if (c(t, i), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1, !e) {
              var r = n.extract();
              t.scaleX = 1 * t.scaleX / r.scaleX, t.scaleY = 1 * t.scaleY / r.scaleY;
            }
            n = n.scale(t.scaleX, t.scaleY, t.cx, t.cy);
          } else if (null != t.skewX || null != t.skewY) {
            if (c(t, i), t.skewX = null != t.skewX ? t.skewX : 0, t.skewY = null != t.skewY ? t.skewY : 0, !e) {
              var r = n.extract();
              n = n.multiply((new y.Matrix).skew(r.skewX, r.skewY, t.cx, t.cy).inverse());
            }
            n = n.skew(t.skewX, t.skewY, t.cx, t.cy);
          } else
            t.flip ? n = n.flip(t.flip, null == t.offset ? i.bbox()["c" + t.flip] : t.offset) : (null != t.x || null != t.y) && (e ? n = n.translate(t.x, t.y) : (null != t.x && (n.e = t.x), null != t.y && (n.f = t.y)));
          return this.attr(this instanceof y.Pattern ? "patternTransform" : this instanceof y.Gradient ? "gradientTransform" : "transform", n);
        }}), y.extend(y.Element, {
        untransform: function() {
          return this.attr("transform", null);
        },
        matrixify: function() {
          var t = (this.attr("transform") || "").split(/\)\s*/).slice(0, -1).map(function(t) {
            var e = t.trim().split("(");
            return [e[0], e[1].split(y.regex.matrixElements).map(function(t) {
              return parseFloat(t);
            })];
          }).reduce(function(t, e) {
            return "matrix" == e[0] ? t.multiply(u(e[1])) : t[e[0]].apply(t, e[1]);
          }, new y.Matrix);
          return t;
        },
        toParent: function(t) {
          if (this == t)
            return this;
          var e = this.screenCTM(),
              n = t.rect(1, 1),
              i = n.screenCTM().inverse();
          return n.remove(), this.addTo(t).untransform().transform(i.multiply(e)), this;
        },
        toDoc: function() {
          return this.toParent(this.doc());
        }
      }), y.extend(y.Element, {style: function(t, e) {
          if (0 == arguments.length)
            return this.node.style.cssText || "";
          if (arguments.length < 2)
            if ("object" == typeof t)
              for (e in t)
                this.style(e, t[e]);
            else {
              if (!y.regex.isCss.test(t))
                return this.node.style[i(t)];
              t = t.split(";");
              for (var n = 0; n < t.length; n++)
                e = t[n].split(":"), this.style(e[0].replace(/\s+/g, ""), e[1]);
            }
          else
            this.node.style[i(t)] = null === e || y.regex.isBlank.test(e) ? "" : e;
          return this;
        }}), y.Parent = y.invent({
        create: function(t) {
          this.constructor.call(this, t);
        },
        inherit: y.Element,
        extend: {
          children: function() {
            return y.utils.map(y.utils.filterSVGElements(this.node.childNodes), function(t) {
              return y.adopt(t);
            });
          },
          add: function(t, e) {
            return this.has(t) || (e = null == e ? this.children().length : e, this.node.insertBefore(t.node, this.node.childNodes[e] || null)), this;
          },
          put: function(t, e) {
            return this.add(t, e), t;
          },
          has: function(t) {
            return this.index(t) >= 0;
          },
          index: function(t) {
            return this.children().indexOf(t);
          },
          get: function(t) {
            return this.children()[t];
          },
          first: function() {
            return this.children()[0];
          },
          last: function() {
            return this.children()[this.children().length - 1];
          },
          each: function(t, e) {
            var n,
                i,
                r = this.children();
            for (n = 0, i = r.length; i > n; n++)
              r[n] instanceof y.Element && t.apply(r[n], [n, r]), e && r[n] instanceof y.Container && r[n].each(t, e);
            return this;
          },
          removeElement: function(t) {
            return this.node.removeChild(t.node), this;
          },
          clear: function() {
            for (; this.node.hasChildNodes(); )
              this.node.removeChild(this.node.lastChild);
            return delete this._defs, this;
          },
          defs: function() {
            return this.doc().defs();
          }
        }
      }), y.extend(y.Parent, {
        ungroup: function(t, e) {
          return 0 === e || this instanceof y.Defs ? this : (t = t || (this instanceof y.Doc ? this : this.parent(y.Parent)), e = e || 1 / 0, this.each(function() {
            return this instanceof y.Defs ? this : this instanceof y.Parent ? this.ungroup(t, e - 1) : this.toParent(t);
          }), this.node.firstChild || this.remove(), this);
        },
        flatten: function(t, e) {
          return this.ungroup(t, e);
        }
      }), y.Container = y.invent({
        create: function(t) {
          this.constructor.call(this, t);
        },
        inherit: y.Parent,
        extend: {viewbox: function(t) {
            return 0 == arguments.length ? new y.ViewBox(this) : (t = 1 == arguments.length ? [t.x, t.y, t.width, t.height] : [].slice.call(arguments), this.attr("viewBox", t));
          }}
      }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(t) {
        y.Element.prototype[t] = function(e) {
          var n = this;
          return this.node["on" + t] = "function" == typeof e ? function() {
            return e.apply(n, arguments);
          } : null, this;
        };
      }), y.listeners = [], y.handlerMap = [], y.on = function(t, e, n, i) {
        var r = n.bind(i || t.instance || t),
            s = (y.handlerMap.indexOf(t) + 1 || y.handlerMap.push(t)) - 1,
            o = e.split(".")[0],
            a = e.split(".")[1] || "*";
        y.listeners[s] = y.listeners[s] || {}, y.listeners[s][o] = y.listeners[s][o] || {}, y.listeners[s][o][a] = y.listeners[s][o][a] || {}, y.listeners[s][o][a][n] = r, t.addEventListener(o, r, !1);
      }, y.off = function(t, e, n) {
        var i = y.handlerMap.indexOf(t),
            r = e && e.split(".")[0],
            s = e && e.split(".")[1];
        if (-1 != i)
          if (n)
            y.listeners[i][r] && y.listeners[i][r][s || "*"] && (t.removeEventListener(r, y.listeners[i][r][s || "*"][n], !1), delete y.listeners[i][r][s || "*"][n]);
          else if (s && r) {
            if (y.listeners[i][r] && y.listeners[i][r][s]) {
              for (n in y.listeners[i][r][s])
                y.off(t, [r, s].join("."), n);
              delete y.listeners[i][r][s];
            }
          } else if (s)
            for (e in y.listeners[i])
              for (namespace in y.listeners[i][e])
                s === namespace && y.off(t, [e, s].join("."));
          else if (r) {
            if (y.listeners[i][r]) {
              for (namespace in y.listeners[i][r])
                y.off(t, [r, namespace].join("."));
              delete y.listeners[i][r];
            }
          } else {
            for (e in y.listeners[i])
              y.off(t, e);
            delete y.listeners[i];
          }
      }, y.extend(y.Element, {
        on: function(t, e, n) {
          return y.on(this.node, t, e, n), this;
        },
        off: function(t, e) {
          return y.off(this.node, t, e), this;
        },
        fire: function(t, e) {
          return t instanceof Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(new w(t, {detail: e})), this;
        }
      }), y.Defs = y.invent({
        create: "defs",
        inherit: y.Container
      }), y.G = y.invent({
        create: "g",
        inherit: y.Container,
        extend: {
          x: function(t) {
            return null == t ? this.transform("x") : this.transform({x: t - this.x()}, !0);
          },
          y: function(t) {
            return null == t ? this.transform("y") : this.transform({y: t - this.y()}, !0);
          },
          cx: function(t) {
            return null == t ? this.tbox().cx : this.x(t - this.tbox().width / 2);
          },
          cy: function(t) {
            return null == t ? this.tbox().cy : this.y(t - this.tbox().height / 2);
          },
          gbox: function() {
            var t = this.bbox(),
                e = this.transform();
            return t.x += e.x, t.x2 += e.x, t.cx += e.x, t.y += e.y, t.y2 += e.y, t.cy += e.y, t;
          }
        },
        construct: {group: function() {
            return this.put(new y.G);
          }}
      }), y.extend(y.Element, {
        siblings: function() {
          return this.parent().children();
        },
        position: function() {
          return this.parent().index(this);
        },
        next: function() {
          return this.siblings()[this.position() + 1];
        },
        previous: function() {
          return this.siblings()[this.position() - 1];
        },
        forward: function() {
          var t = this.position() + 1,
              e = this.parent();
          return e.removeElement(this).add(this, t), e instanceof y.Doc && e.node.appendChild(e.defs().node), this;
        },
        backward: function() {
          var t = this.position();
          return t > 0 && this.parent().removeElement(this).add(this, t - 1), this;
        },
        front: function() {
          var t = this.parent();
          return t.node.appendChild(this.node), t instanceof y.Doc && t.node.appendChild(t.defs().node), this;
        },
        back: function() {
          return this.position() > 0 && this.parent().removeElement(this).add(this, 0), this;
        },
        before: function(t) {
          t.remove();
          var e = this.position();
          return this.parent().add(t, e), this;
        },
        after: function(t) {
          t.remove();
          var e = this.position();
          return this.parent().add(t, e + 1), this;
        }
      }), y.Mask = y.invent({
        create: function() {
          this.constructor.call(this, y.create("mask")), this.targets = [];
        },
        inherit: y.Container,
        extend: {remove: function() {
            for (var t = this.targets.length - 1; t >= 0; t--)
              this.targets[t] && this.targets[t].unmask();
            return this.targets = [], this.parent().removeElement(this), this;
          }},
        construct: {mask: function() {
            return this.defs().put(new y.Mask);
          }}
      }), y.extend(y.Element, {
        maskWith: function(t) {
          return this.masker = t instanceof y.Mask ? t : this.parent().mask().add(t), this.masker.targets.push(this), this.attr("mask", 'url("#' + this.masker.attr("id") + '")');
        },
        unmask: function() {
          return delete this.masker, this.attr("mask", null);
        }
      }), y.ClipPath = y.invent({
        create: function() {
          this.constructor.call(this, y.create("clipPath")), this.targets = [];
        },
        inherit: y.Container,
        extend: {remove: function() {
            for (var t = this.targets.length - 1; t >= 0; t--)
              this.targets[t] && this.targets[t].unclip();
            return this.targets = [], this.parent().removeElement(this), this;
          }},
        construct: {clip: function() {
            return this.defs().put(new y.ClipPath);
          }}
      }), y.extend(y.Element, {
        clipWith: function(t) {
          return this.clipper = t instanceof y.ClipPath ? t : this.parent().clip().add(t), this.clipper.targets.push(this), this.attr("clip-path", 'url("#' + this.clipper.attr("id") + '")');
        },
        unclip: function() {
          return delete this.clipper, this.attr("clip-path", null);
        }
      }), y.Gradient = y.invent({
        create: function(t) {
          this.constructor.call(this, y.create(t + "Gradient")), this.type = t;
        },
        inherit: y.Container,
        extend: {
          at: function(t, e, n) {
            return this.put(new y.Stop).update(t, e, n);
          },
          update: function(t) {
            return this.clear(), "function" == typeof t && t.call(this, this), this;
          },
          fill: function() {
            return "url(#" + this.id() + ")";
          },
          toString: function() {
            return this.fill();
          },
          attr: function(t, e, n) {
            return "transform" == t && (t = "gradientTransform"), y.Container.prototype.attr.call(this, t, e, n);
          }
        },
        construct: {gradient: function(t, e) {
            return this.defs().gradient(t, e);
          }}
      }), y.extend(y.Gradient, y.FX, {
        from: function(t, e) {
          return "radial" == (this.target || this).type ? this.attr({
            fx: new y.Number(t),
            fy: new y.Number(e)
          }) : this.attr({
            x1: new y.Number(t),
            y1: new y.Number(e)
          });
        },
        to: function(t, e) {
          return "radial" == (this.target || this).type ? this.attr({
            cx: new y.Number(t),
            cy: new y.Number(e)
          }) : this.attr({
            x2: new y.Number(t),
            y2: new y.Number(e)
          });
        }
      }), y.extend(y.Defs, {gradient: function(t, e) {
          return this.put(new y.Gradient(t)).update(e);
        }}), y.Stop = y.invent({
        create: "stop",
        inherit: y.Element,
        extend: {update: function(t) {
            return ("number" == typeof t || t instanceof y.Number) && (t = {
              offset: arguments[0],
              color: arguments[1],
              opacity: arguments[2]
            }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new y.Number(t.offset)), this;
          }}
      }), y.Pattern = y.invent({
        create: "pattern",
        inherit: y.Container,
        extend: {
          fill: function() {
            return "url(#" + this.id() + ")";
          },
          update: function(t) {
            return this.clear(), "function" == typeof t && t.call(this, this), this;
          },
          toString: function() {
            return this.fill();
          },
          attr: function(t, e, n) {
            return "transform" == t && (t = "patternTransform"), y.Container.prototype.attr.call(this, t, e, n);
          }
        },
        construct: {pattern: function(t, e, n) {
            return this.defs().pattern(t, e, n);
          }}
      }), y.extend(y.Defs, {pattern: function(t, e, n) {
          return this.put(new y.Pattern).update(n).attr({
            x: 0,
            y: 0,
            width: t,
            height: e,
            patternUnits: "userSpaceOnUse"
          });
        }}), y.Doc = y.invent({
        create: function(t) {
          t && (t = "string" == typeof t ? e.getElementById(t) : t, "svg" == t.nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, y.create("svg")), t.appendChild(this.node)), this.namespace().size("100%", "100%").defs());
        },
        inherit: y.Container,
        extend: {
          namespace: function() {
            return this.attr({
              xmlns: y.ns,
              version: "1.1"
            }).attr("xmlns:xlink", y.xlink, y.xmlns).attr("xmlns:svgjs", y.svgjs, y.xmlns);
          },
          defs: function() {
            if (!this._defs) {
              var t;
              this._defs = (t = this.node.getElementsByTagName("defs")[0]) ? y.adopt(t) : new y.Defs, this.node.appendChild(this._defs.node);
            }
            return this._defs;
          },
          parent: function() {
            return "#document" == this.node.parentNode.nodeName ? null : this.node.parentNode;
          },
          spof: function() {
            var t = this.node.getScreenCTM();
            return t && this.style("left", -t.e % 1 + "px").style("top", -t.f % 1 + "px"), this;
          },
          remove: function() {
            return this.parent() && this.parent().removeChild(this.node), this;
          }
        }
      }), y.Shape = y.invent({
        create: function(t) {
          this.constructor.call(this, t);
        },
        inherit: y.Element
      }), y.Bare = y.invent({
        create: function(t, e) {
          if (this.constructor.call(this, y.create(t)), e)
            for (var n in e.prototype)
              "function" == typeof e.prototype[n] && (this[n] = e.prototype[n]);
        },
        inherit: y.Element,
        extend: {words: function(t) {
            for (; this.node.hasChildNodes(); )
              this.node.removeChild(this.node.lastChild);
            return this.node.appendChild(e.createTextNode(t)), this;
          }}
      }), y.extend(y.Parent, {
        element: function(t, e) {
          return this.put(new y.Bare(t, e));
        },
        symbol: function() {
          return this.defs().element("symbol", y.Container);
        }
      }), y.Use = y.invent({
        create: "use",
        inherit: y.Shape,
        extend: {element: function(t, e) {
            return this.attr("href", (e || "") + "#" + t, y.xlink);
          }},
        construct: {use: function(t, e) {
            return this.put(new y.Use).element(t, e);
          }}
      }), y.Rect = y.invent({
        create: "rect",
        inherit: y.Shape,
        construct: {rect: function(t, e) {
            return this.put(new y.Rect).size(t, e);
          }}
      }), y.Circle = y.invent({
        create: "circle",
        inherit: y.Shape,
        construct: {circle: function(t) {
            return this.put(new y.Circle).rx(new y.Number(t).divide(2)).move(0, 0);
          }}
      }), y.extend(y.Circle, y.FX, {
        rx: function(t) {
          return this.attr("r", t);
        },
        ry: function(t) {
          return this.rx(t);
        }
      }), y.Ellipse = y.invent({
        create: "ellipse",
        inherit: y.Shape,
        construct: {ellipse: function(t, e) {
            return this.put(new y.Ellipse).size(t, e).move(0, 0);
          }}
      }), y.extend(y.Ellipse, y.Rect, y.FX, {
        rx: function(t) {
          return this.attr("rx", t);
        },
        ry: function(t) {
          return this.attr("ry", t);
        }
      }), y.extend(y.Circle, y.Ellipse, {
        x: function(t) {
          return null == t ? this.cx() - this.rx() : this.cx(t + this.rx());
        },
        y: function(t) {
          return null == t ? this.cy() - this.ry() : this.cy(t + this.ry());
        },
        cx: function(t) {
          return null == t ? this.attr("cx") : this.attr("cx", t);
        },
        cy: function(t) {
          return null == t ? this.attr("cy") : this.attr("cy", t);
        },
        width: function(t) {
          return null == t ? 2 * this.rx() : this.rx(new y.Number(t).divide(2));
        },
        height: function(t) {
          return null == t ? 2 * this.ry() : this.ry(new y.Number(t).divide(2));
        },
        size: function(t, e) {
          var n = a(this.bbox(), t, e);
          return this.rx(new y.Number(n.width).divide(2)).ry(new y.Number(n.height).divide(2));
        }
      }), y.Line = y.invent({
        create: "line",
        inherit: y.Shape,
        extend: {
          array: function() {
            return new y.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
          },
          plot: function(t, e, n, i) {
            return t = 4 == arguments.length ? {
              x1: t,
              y1: e,
              x2: n,
              y2: i
            } : new y.PointArray(t).toLine(), this.attr(t);
          },
          move: function(t, e) {
            return this.attr(this.array().move(t, e).toLine());
          },
          size: function(t, e) {
            var n = a(this.bbox(), t, e);
            return this.attr(this.array().size(n.width, n.height).toLine());
          }
        },
        construct: {line: function(t, e, n, i) {
            return this.put(new y.Line).plot(t, e, n, i);
          }}
      }), y.Polyline = y.invent({
        create: "polyline",
        inherit: y.Shape,
        construct: {polyline: function(t) {
            return this.put(new y.Polyline).plot(t);
          }}
      }), y.Polygon = y.invent({
        create: "polygon",
        inherit: y.Shape,
        construct: {polygon: function(t) {
            return this.put(new y.Polygon).plot(t);
          }}
      }), y.extend(y.Polyline, y.Polygon, {
        array: function() {
          return this._array || (this._array = new y.PointArray(this.attr("points")));
        },
        plot: function(t) {
          return this.attr("points", this._array = new y.PointArray(t));
        },
        move: function(t, e) {
          return this.attr("points", this.array().move(t, e));
        },
        size: function(t, e) {
          var n = a(this.bbox(), t, e);
          return this.attr("points", this.array().size(n.width, n.height));
        }
      }), y.extend(y.Line, y.Polyline, y.Polygon, {
        morphArray: y.PointArray,
        x: function(t) {
          return null == t ? this.bbox().x : this.move(t, this.bbox().y);
        },
        y: function(t) {
          return null == t ? this.bbox().y : this.move(this.bbox().x, t);
        },
        width: function(t) {
          var e = this.bbox();
          return null == t ? e.width : this.size(t, e.height);
        },
        height: function(t) {
          var e = this.bbox();
          return null == t ? e.height : this.size(e.width, t);
        }
      }), y.Path = y.invent({
        create: "path",
        inherit: y.Shape,
        extend: {
          morphArray: y.PathArray,
          array: function() {
            return this._array || (this._array = new y.PathArray(this.attr("d")));
          },
          plot: function(t) {
            return this.attr("d", this._array = new y.PathArray(t));
          },
          move: function(t, e) {
            return this.attr("d", this.array().move(t, e));
          },
          x: function(t) {
            return null == t ? this.bbox().x : this.move(t, this.bbox().y);
          },
          y: function(t) {
            return null == t ? this.bbox().y : this.move(this.bbox().x, t);
          },
          size: function(t, e) {
            var n = a(this.bbox(), t, e);
            return this.attr("d", this.array().size(n.width, n.height));
          },
          width: function(t) {
            return null == t ? this.bbox().width : this.size(t, this.bbox().height);
          },
          height: function(t) {
            return null == t ? this.bbox().height : this.size(this.bbox().width, t);
          }
        },
        construct: {path: function(t) {
            return this.put(new y.Path).plot(t);
          }}
      }), y.Image = y.invent({
        create: "image",
        inherit: y.Shape,
        extend: {
          load: function(t) {
            if (!t)
              return this;
            var n = this,
                i = e.createElement("img");
            return i.onload = function() {
              var e = n.parent(y.Pattern);
              null !== e && (0 == n.width() && 0 == n.height() && n.size(i.width, i.height), e && 0 == e.width() && 0 == e.height() && e.size(n.width(), n.height()), "function" == typeof n._loaded && n._loaded.call(n, {
                width: i.width,
                height: i.height,
                ratio: i.width / i.height,
                url: t
              }));
            }, this.attr("href", i.src = this.src = t, y.xlink);
          },
          loaded: function(t) {
            return this._loaded = t, this;
          }
        },
        construct: {image: function(t, e, n) {
            return this.put(new y.Image).load(t).size(e || 0, n || e || 0);
          }}
      }), y.Text = y.invent({
        create: function() {
          this.constructor.call(this, y.create("text")), this.dom.leading = new y.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", y.defaults.attrs["font-family"]);
        },
        inherit: y.Shape,
        extend: {
          clone: function() {
            var t = m(this.node.cloneNode(!0));
            return this.after(t), t;
          },
          x: function(t) {
            return null == t ? this.attr("x") : (this.textPath || this.lines().each(function() {
              this.dom.newLined && this.x(t);
            }), this.attr("x", t));
          },
          y: function(t) {
            var e = this.attr("y"),
                n = "number" == typeof e ? e - this.bbox().y : 0;
            return null == t ? "number" == typeof e ? e - n : e : this.attr("y", "number" == typeof t ? t + n : t);
          },
          cx: function(t) {
            return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2);
          },
          cy: function(t) {
            return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2);
          },
          text: function(t) {
            if ("undefined" == typeof t) {
              for (var t = "",
                  e = this.node.childNodes,
                  n = 0,
                  i = e.length; i > n; ++n)
                0 != n && 3 != e[n].nodeType && 1 == y.adopt(e[n]).dom.newLined && (t += "\n"), t += e[n].textContent;
              return t;
            }
            if (this.clear().build(!0), "function" == typeof t)
              t.call(this, this);
            else {
              t = t.split("\n");
              for (var n = 0,
                  r = t.length; r > n; n++)
                this.tspan(t[n]).newLine();
            }
            return this.build(!1).rebuild();
          },
          size: function(t) {
            return this.attr("font-size", t).rebuild();
          },
          leading: function(t) {
            return null == t ? this.dom.leading : (this.dom.leading = new y.Number(t), this.rebuild());
          },
          lines: function() {
            var t = y.utils.map(y.utils.filterSVGElements(this.node.childNodes), function(t) {
              return y.adopt(t);
            });
            return new y.Set(t);
          },
          rebuild: function(t) {
            if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
              var e = this,
                  n = 0,
                  i = this.dom.leading * new y.Number(this.attr("font-size"));
              this.lines().each(function() {
                this.dom.newLined && (this.textPath || this.attr("x", e.attr("x")), "\n" == this.text() ? n += i : (this.attr("dy", i + n), n = 0));
              }), this.fire("rebuild");
            }
            return this;
          },
          build: function(t) {
            return this._build = !!t, this;
          },
          setData: function(t) {
            return this.dom = t, this.dom.leading = t.leading ? new y.Number(t.leading.value, t.leading.unit) : new y.Number(1.3), this;
          }
        },
        construct: {
          text: function(t) {
            return this.put(new y.Text).text(t);
          },
          plain: function(t) {
            return this.put(new y.Text).plain(t);
          }
        }
      }), y.Tspan = y.invent({
        create: "tspan",
        inherit: y.Shape,
        extend: {
          text: function(t) {
            return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this);
          },
          dx: function(t) {
            return this.attr("dx", t);
          },
          dy: function(t) {
            return this.attr("dy", t);
          },
          newLine: function() {
            var t = this.parent(y.Text);
            return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x());
          }
        }
      }), y.extend(y.Text, y.Tspan, {
        plain: function(t) {
          return this._build === !1 && this.clear(), this.node.appendChild(e.createTextNode(t)), this;
        },
        tspan: function(t) {
          var e = (this.textPath && this.textPath() || this).node,
              n = new y.Tspan;
          return this._build === !1 && this.clear(), e.appendChild(n.node), n.text(t);
        },
        clear: function() {
          for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes(); )
            t.removeChild(t.lastChild);
          return this;
        },
        length: function() {
          return this.node.getComputedTextLength();
        }
      }), y.TextPath = y.invent({
        create: "textPath",
        inherit: y.Element,
        parent: y.Text,
        construct: {
          path: function(t) {
            for (var e = new y.TextPath,
                n = this.doc().defs().path(t); this.node.hasChildNodes(); )
              e.node.appendChild(this.node.firstChild);
            return this.node.appendChild(e.node), e.attr("href", "#" + n, y.xlink), this;
          },
          plot: function(t) {
            var e = this.track();
            return e && e.plot(t), this;
          },
          track: function() {
            var t = this.textPath();
            return t ? t.reference("href") : void 0;
          },
          textPath: function() {
            return this.node.firstChild && "textPath" == this.node.firstChild.nodeName ? y.adopt(this.node.firstChild) : void 0;
          }
        }
      }), y.Nested = y.invent({
        create: function() {
          this.constructor.call(this, y.create("svg")), this.style("overflow", "visible");
        },
        inherit: y.Container,
        construct: {nested: function() {
            return this.put(new y.Nested);
          }}
      }), y.A = y.invent({
        create: "a",
        inherit: y.Container,
        extend: {
          to: function(t) {
            return this.attr("href", t, y.xlink);
          },
          show: function(t) {
            return this.attr("show", t, y.xlink);
          },
          target: function(t) {
            return this.attr("target", t);
          }
        },
        construct: {link: function(t) {
            return this.put(new y.A).to(t);
          }}
      }), y.extend(y.Element, {linkTo: function(t) {
          var e = new y.A;
          return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this);
        }}), y.Marker = y.invent({
        create: "marker",
        inherit: y.Container,
        extend: {
          width: function(t) {
            return this.attr("markerWidth", t);
          },
          height: function(t) {
            return this.attr("markerHeight", t);
          },
          ref: function(t, e) {
            return this.attr("refX", t).attr("refY", e);
          },
          update: function(t) {
            return this.clear(), "function" == typeof t && t.call(this, this), this;
          },
          toString: function() {
            return "url(#" + this.id() + ")";
          }
        },
        construct: {marker: function(t, e, n) {
            return this.defs().marker(t, e, n);
          }}
      }), y.extend(y.Defs, {marker: function(t, e, n) {
          return this.put(new y.Marker).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(n);
        }}), y.extend(y.Line, y.Polyline, y.Polygon, y.Path, {marker: function(t, e, n, i) {
          var r = ["marker"];
          return "all" != t && r.push(t), r = r.join("-"), t = arguments[1] instanceof y.Marker ? arguments[1] : this.doc().marker(e, n, i), this.attr(r, t);
        }});
      var v = {
        stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
        fill: ["color", "opacity", "rule"],
        prefix: function(t, e) {
          return "color" == e ? t : t + "-" + e;
        }
      };
      ["fill", "stroke"].forEach(function(t) {
        var e,
            n = {};
        n[t] = function(n) {
          if ("string" == typeof n || y.Color.isRgb(n) || n && "function" == typeof n.fill)
            this.attr(t, n);
          else
            for (e = v[t].length - 1; e >= 0; e--)
              null != n[v[t][e]] && this.attr(v.prefix(t, v[t][e]), n[v[t][e]]);
          return this;
        }, y.extend(y.Element, y.FX, n);
      }), y.extend(y.Element, y.FX, {
        rotate: function(t, e, n) {
          return this.transform({
            rotation: t,
            cx: e,
            cy: n
          });
        },
        skew: function(t, e, n, i) {
          return this.transform({
            skewX: t,
            skewY: e,
            cx: n,
            cy: i
          });
        },
        scale: function(t, e, n, i) {
          return 1 == arguments.length || 3 == arguments.length ? this.transform({
            scale: t,
            cx: e,
            cy: n
          }) : this.transform({
            scaleX: t,
            scaleY: e,
            cx: n,
            cy: i
          });
        },
        translate: function(t, e) {
          return this.transform({
            x: t,
            y: e
          });
        },
        flip: function(t, e) {
          return this.transform({
            flip: t,
            offset: e
          });
        },
        matrix: function(t) {
          return this.attr("transform", new y.Matrix(t));
        },
        opacity: function(t) {
          return this.attr("opacity", t);
        },
        dx: function(t) {
          return this.x((this.target || this).x() + t);
        },
        dy: function(t) {
          return this.y((this.target || this).y() + t);
        },
        dmove: function(t, e) {
          return this.dx(t).dy(e);
        }
      }), y.extend(y.Rect, y.Ellipse, y.Circle, y.Gradient, y.FX, {radius: function(t, e) {
          var n = (this.target || this).type;
          return "radial" == n || "circle" == n ? this.attr({r: new y.Number(t)}) : this.rx(t).ry(null == e ? t : e);
        }}), y.extend(y.Path, {
        length: function() {
          return this.node.getTotalLength();
        },
        pointAt: function(t) {
          return this.node.getPointAtLength(t);
        }
      }), y.extend(y.Parent, y.Text, y.FX, {font: function(t) {
          for (var e in t)
            "leading" == e ? this.leading(t[e]) : "anchor" == e ? this.attr("text-anchor", t[e]) : "size" == e || "family" == e || "weight" == e || "stretch" == e || "variant" == e || "style" == e ? this.attr("font-" + e, t[e]) : this.attr(e, t[e]);
          return this;
        }}), y.Set = y.invent({
        create: function(t) {
          Array.isArray(t) ? this.members = t : this.clear();
        },
        extend: {
          add: function() {
            var t,
                e,
                n = [].slice.call(arguments);
            for (t = 0, e = n.length; e > t; t++)
              this.members.push(n[t]);
            return this;
          },
          remove: function(t) {
            var e = this.index(t);
            return e > -1 && this.members.splice(e, 1), this;
          },
          each: function(t) {
            for (var e = 0,
                n = this.members.length; n > e; e++)
              t.apply(this.members[e], [e, this.members]);
            return this;
          },
          clear: function() {
            return this.members = [], this;
          },
          length: function() {
            return this.members.length;
          },
          has: function(t) {
            return this.index(t) >= 0;
          },
          index: function(t) {
            return this.members.indexOf(t);
          },
          get: function(t) {
            return this.members[t];
          },
          first: function() {
            return this.get(0);
          },
          last: function() {
            return this.get(this.members.length - 1);
          },
          valueOf: function() {
            return this.members;
          },
          bbox: function() {
            var t = new y.BBox;
            if (0 == this.members.length)
              return t;
            var e = this.members[0].rbox();
            return t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height, this.each(function() {
              t = t.merge(this.rbox());
            }), t;
          }
        },
        construct: {set: function(t) {
            return new y.Set(t);
          }}
      }), y.FX.Set = y.invent({create: function(t) {
          this.set = t;
        }}), y.Set.inherit = function() {
        var t,
            e = [];
        for (var t in y.Shape.prototype)
          "function" == typeof y.Shape.prototype[t] && "function" != typeof y.Set.prototype[t] && e.push(t);
        e.forEach(function(t) {
          y.Set.prototype[t] = function() {
            for (var e = 0,
                n = this.members.length; n > e; e++)
              this.members[e] && "function" == typeof this.members[e][t] && this.members[e][t].apply(this.members[e], arguments);
            return "animate" == t ? this.fx || (this.fx = new y.FX.Set(this)) : this;
          };
        }), e = [];
        for (var t in y.FX.prototype)
          "function" == typeof y.FX.prototype[t] && "function" != typeof y.FX.Set.prototype[t] && e.push(t);
        e.forEach(function(t) {
          y.FX.Set.prototype[t] = function() {
            for (var e = 0,
                n = this.set.members.length; n > e; e++)
              this.set.members[e].fx[t].apply(this.set.members[e].fx, arguments);
            return this;
          };
        });
      }, y.extend(y.Element, {data: function(t, e, n) {
          if ("object" == typeof t)
            for (e in t)
              this.data(e, t[e]);
          else if (arguments.length < 2)
            try {
              return JSON.parse(this.attr("data-" + t));
            } catch (i) {
              return this.attr("data-" + t);
            }
          else
            this.attr("data-" + t, null === e ? null : n === !0 || "string" == typeof e || "number" == typeof e ? e : JSON.stringify(e));
          return this;
        }}), y.extend(y.Element, {
        remember: function(t, e) {
          if ("object" == typeof arguments[0])
            for (var e in t)
              this.remember(e, t[e]);
          else {
            if (1 == arguments.length)
              return this.memory()[t];
            this.memory()[t] = e;
          }
          return this;
        },
        forget: function() {
          if (0 == arguments.length)
            this._memory = {};
          else
            for (var t = arguments.length - 1; t >= 0; t--)
              delete this.memory()[arguments[t]];
          return this;
        },
        memory: function() {
          return this._memory || (this._memory = {});
        }
      }), y.get = function(t) {
        var n = e.getElementById(g(t) || t);
        return y.adopt(n);
      }, y.select = function(t, n) {
        return new y.Set(y.utils.map((n || e).querySelectorAll(t), function(t) {
          return y.adopt(t);
        }));
      }, y.extend(y.Parent, {select: function(t) {
          return y.select(t, this.node);
        }});
      var b = "abcdef".split("");
      if ("function" != typeof w) {
        var w = function(t, n) {
          n = n || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
          };
          var i = e.createEvent("CustomEvent");
          return i.initCustomEvent(t, n.bubbles, n.cancelable, n.detail), i;
        };
        w.prototype = t.Event.prototype, t.CustomEvent = w;
      }
      return function(e) {
        for (var n = 0,
            i = ["moz", "webkit"],
            r = 0; r < i.length && !t.requestAnimationFrame; ++r)
          e.requestAnimationFrame = e[i[r] + "RequestAnimationFrame"], e.cancelAnimationFrame = e[i[r] + "CancelAnimationFrame"] || e[i[r] + "CancelRequestAnimationFrame"];
        e.requestAnimationFrame = e.requestAnimationFrame || function(t) {
          var i = (new Date).getTime(),
              r = Math.max(0, 16 - (i - n)),
              s = e.setTimeout(function() {
                t(i + r);
              }, r);
          return n = i + r, s;
        }, e.cancelAnimationFrame = e.cancelAnimationFrame || e.clearTimeout;
      }(t), y;
    });
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("6", ["7"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('7');
  return module.exports;
});

$__System.register('8', ['6'], function (_export) {
  'use strict';

  var SVG, pivotRadius, bobRadius, tensionDist, pivotPhase, pad, phaseW, phaseH, camAngle, scale;

  _export('DrawStability', DrawStability);

  function sqr(x) {
    return x * x;
  }

  function rtod(a) {
    return a / Math.PI * 180;
  }
  function dtor(a) {
    return a * Math.PI / 180;
  }

  function drawArrow(draw, x1, y1, x2, y2, width, color) {
    var headHeight = (1 + width) * 1.5;
    var headWidth = headHeight * 2;
    var angle = rtod(Math.atan2(y2 - y1, x2 - x1));
    draw.polygon([[-headWidth, headHeight / 2], [0, 0], [-headWidth, -headHeight / 2]]).fill(color).rotate(angle, 0, 0).translate(x2, y2);

    angle = dtor(angle);

    var endx = x2 - 0.9 * headWidth * Math.cos(angle);
    var endy = y2 - 0.9 * headWidth * Math.sin(angle);

    draw.line(x1, y1, endx, endy).stroke({ width: width, color: color });
  }

  function drawPhase(draw, phasediff) {
    draw.size(phaseW, phaseH).viewbox(-phaseW / 2, -phaseH / 2, phaseW, phaseH);
    draw.circle(pivotRadius * 2).fill('none').stroke({ width: 1, color: '#AAA' }).attr({ cx: 0, cy: 0 });
    draw.circle(bobRadius * 2).fill('none').stroke({ width: 1, color: '#AAA' }).attr({ cx: 0, cy: 0 });

    var bobPhase = pivotPhase + phasediff;

    var px = pivotRadius * Math.cos(pivotPhase);
    var py = pivotRadius * Math.sin(pivotPhase);
    var bx = -bobRadius * Math.cos(bobPhase);
    var by = -bobRadius * Math.sin(bobPhase);

    draw.circle(4).fill('#555').attr({
      cx: px,
      cy: py
    });
    draw.circle(10).fill('#333').attr({
      cx: bx,
      cy: by
    });
    draw.line(px, py, bx, by).stroke({ width: 1, color: '#555' });

    var tAngle = Math.atan2(py - by, px - bx);
    var tx = tensionDist * Math.cos(tAngle) + bx;
    var ty = tensionDist * Math.sin(tAngle) + by;

    drawArrow(draw, bx, by, tx, ty, 2.5, '#05F');

    if (phasediff == 0) return;

    var anglediff = bobPhase - pivotPhase;
    var tperp = tensionDist * Math.cos(anglediff);
    var ttang = tensionDist * Math.sin(anglediff);
    var tperpx = bx + tperp * Math.cos(bobPhase);
    var tperpy = by + tperp * Math.sin(bobPhase);
    var ttangx = bx + ttang * Math.sin(bobPhase);
    var ttangy = by - ttang * Math.cos(bobPhase);

    drawArrow(draw, bx, by, ttangx, ttangy, 2, '#05F');
    drawArrow(draw, bx, by, tperpx, tperpy, 2, '#05F');
  }

  function drawAngle1(draw, direction) {
    draw.size(100, 100).viewbox(-50, -20, 100, 100);

    draw.ellipse(40, 10).attr({
      cx: 0,
      cy: 0
    }).fill('none').stroke({ width: 1, color: '#555' });

    draw.circle(4).fill('#555').attr({
      cx: 20,
      cy: 0
    });

    var bx1 = 20 - 60 * Math.sin(dtor(40));
    var by1 = 60 * Math.cos(dtor(40));
    var a = direction < 0 ? 45 : 35;
    var b = direction < 0 ? 50 : 30;
    var bx2 = 20 - 60 * Math.sin(dtor(a));
    var by2 = 60 * Math.cos(dtor(a));
    var bx3 = 20 - 60 * Math.sin(dtor(b));
    var by3 = 60 * Math.cos(dtor(b));
    draw.circle(10).fill('#EEE').attr({
      cx: bx1,
      cy: by1
    });
    draw.line(20, 0, bx1, by1).stroke({ width: 1, color: '#EEE' });
    draw.circle(10).fill('#CCC').attr({
      cx: bx2,
      cy: by2
    });
    draw.line(20, 0, bx2, by2).stroke({ width: 1, color: '#CCC' });
    draw.circle(10).fill('#333').attr({
      cx: bx3,
      cy: by3
    });
    draw.line(20, 0, bx3, by3).stroke({ width: 1, color: '#333' });
    var arrowx1 = -40;
    var arrowx2 = -40;
    var arrowy1 = direction > 0 ? 30 : 55;
    var arrowy2 = direction > 0 ? 55 : 30;
    drawArrow(draw, arrowx1, arrowy1, arrowx2, arrowy2, 3, '#05F');
  }

  function DrawStability(_ref) {
    var svgLagPhase = _ref.svgLagPhase;
    var svgLagAngle1 = _ref.svgLagAngle1;
    var svgLagDangle2Inc = _ref.svgLagDangle2Inc;
    var svgLagPhaseInc = _ref.svgLagPhaseInc;
    var svgLeadPhase = _ref.svgLeadPhase;
    var svgLeadAngle1 = _ref.svgLeadAngle1;
    var svgLeadDangle2Dec = _ref.svgLeadDangle2Dec;
    var svgLeadPhaseDec = _ref.svgLeadPhaseDec;

    drawPhase(SVG(svgLagPhase), dtor(+20));
    drawPhase(SVG(svgLeadPhase), dtor(-20));
    drawAngle1(SVG(svgLagAngle1), 1);
    drawAngle1(SVG(svgLeadAngle1), -1);
  }

  return {
    setters: [function (_) {
      SVG = _.SVG;
    }],
    execute: function () {
      pivotRadius = 50;
      bobRadius = 30;
      tensionDist = 50;
      pivotPhase = dtor(-40);
      pad = 10;
      phaseW = 2 * (pivotRadius + pad);
      phaseH = phaseW;
      camAngle = -0.2;
      scale = 20;
    }
  };
});
$__System.register('9', [], function (_export) {
  //import {SVG} from 'wout/svg.js';
  //import {Plotly} from 'plotly.js';

  'use strict';

  var l, rp, g, xMin, xMax, yMax, yMin, samples, xStep;

  /*
  const plotW = 500;
  const plotH = 300;
  const xPad = 10;
  const yPad = 10;
  const xMin = -l - rp;
  const xMax = l - rp;
  const yMax = 10;
  const yMin = 0;
  const samples = 600;
  
  const width = plotW + xPad * 2;
  const height = plotH + yPad * 2;
  const xStep = (xMax - xMin) / samples;
  const xScale = plotW / (xMax - xMin);
  const xOffset = -xMin * xScale + xPad;
  const yScale = -plotH / (yMax - yMin);
  const yOffset = yMin * yScale - yPad + height;
  
  export function PlotSteadyState(container) {
    let draw = SVG(container);
    draw
      .size(width, height);
  
    let xAxisY = yOffset + yScale * Math.max(yMin, 0);
    draw
      .line(0, xAxisY, width, xAxisY)
      .stroke({ width: 1, color: '#333' });
    let yAxisX = xOffset + xScale * Math.max(xMin, 0);
    draw
      .line(yAxisX, 0, yAxisX, height)
      .stroke({ width: 1, color: '#333' });
  
    let plot = [];
    for (let x = xMin; x <= xMax; x += xStep) {
      let px = xOffset + xScale * x;
      let py = yOffset + yScale * w(x);
      if (isFinite(py) && yPad <= py && py <= yPad + plotH) plot.push([px, py]);
      else if (plot.length) {
        draw
          .polyline(plot)
          .fill('none')
          .stroke({ width: 1, color: '#05F' });
        plot = [];
      }
    }
    if (plot.length) {
      draw
        .polyline(plot)
        .fill('none')
        .stroke({ width: 1, color: '#05F' });
    }
  }*/

  _export('PlotSteadyState', PlotSteadyState);

  function w(rb) {
    return Math.sqrt(g / rb * (rb + rp) / Math.sqrt(l * l - (rb + rp) * (rb + rp)));
  }

  function PlotSteadyState(thatDiv) {
    var trace = {
      x: [],
      y: [],
      mode: 'line'
    };
    for (var x = xMin; x <= xMax; x += xStep) {
      var y = w(x);
      if (y < yMin || y > yMax) continue;
      trace.x.push(x);
      trace.y.push(w(x));
    }
    var data = [trace];
    var layout = {
      title: 'Steady State'
    };
    Plotly.newPlot(thatDiv, data, layout);
  }

  return {
    setters: [],
    execute: function () {
      l = 1;
      rp = 0.5;
      g = 9.81;
      xMin = -l - rp;
      xMax = l - rp;
      yMax = 10;
      yMin = 0;
      samples = 600;
      xStep = (xMax - xMin) / samples;
    }
  };
});
$__System.register('1', ['5', '8', '9'], function (_export) {
  'use strict';

  var Showcase, DrawStability, PlotSteadyState;
  return {
    setters: [function (_) {
      Showcase = _.Showcase;
    }, function (_2) {
      DrawStability = _2.DrawStability;
    }, function (_3) {
      PlotSteadyState = _3.PlotSteadyState;
    }],
    execute: function () {

      window.onload = function () {
        Showcase('showcase', 'showcase-phasediff', 'showcase-angle1', 'showcase-dangle2', 'showcase-phasevisual');
        DrawStability({
          svgLagPhase: 'stable-lag-phase',
          svgLagAngle1: 'stable-lag-angle1',
          svgLagDangle2Inc: 'stable-lag-dangle2inc',
          svgLagPhaseInc: 'stable-lag-phaseinc',
          svgLeadPhase: 'stable-lead-phase',
          svgLeadAngle1: 'stable-lead-angle1',
          svgLeadDangle2Dec: 'stable-lead-dangle2dec',
          svgLeadPhaseDec: 'stable-lead-phasedec'
        });
        PlotSteadyState('steadystate-plot');
      };
    }
  };
});
})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map