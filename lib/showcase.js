import {Pendulum} from './pendulum.js'
import {SVG} from 'wout/svg.js'

const g = 9.81;
const l = 1.0;
const pivotRadius = 0.5;

const predictedAngle = 0.66;
const predictedRadius = l * Math.sin(predictedAngle) - pivotRadius;
const predictedHeight = l * Math.cos(predictedAngle);

const pivotAngVel = Math.sqrt(g * Math.tan(predictedAngle) / predictedRadius);
const damp1 = 0.01;
const damp2 = 0.01;
const initialAngle1 = -predictedAngle - 0.01;
const initialAngle2 = 0.0;
const initialDangle1 = 0.0;
const initialDangle2 = pivotAngVel;
const initialTime = 0.0;
const dt = 0.0002;
const stepsPerTick = 100;

const sqrt2 = Math.sqrt(2);
const sqrt3 = Math.sqrt(3);
const sqrt2th = 1 / Math.sqrt(2);
const sqrt3th = 1 / Math.sqrt(3);
const sqrt6th = 1 / Math.sqrt(6);
const scale = 200;
const canvasWidth = 300;
const canvasHeight = 300;
const originX = 150;
const originY = 80;
const camAngle = -0.2;
const colorPlot = '#05F';
const colorAxis = '#CCC';

const plotTimeScale = 25;
const plotWidth = 200;
const plotHeight = 100;
const plotTicks = plotWidth / (plotTimeScale * dt * stepsPerTick);
let plotPhasediff = [];
let plotAngle1 = [];
let plotDangle2 = [];

const visualScale = 100;
const visualPad = 10;
const visualMaxRadius = visualScale * Math.max(pivotRadius, l - pivotRadius);
const visualOffsetX = -(visualMaxRadius + visualPad);
const visualOffsetY = visualOffsetX;
const visualWidth = -2 * visualOffsetX;
const visualHeight = visualWidth;

function vec3(x, y, z) {
  return { x, y, z };
}

function transform({x, y, z}) {
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

export function Showcase(svgMain, svgPhaseDiff, svgAngle1, svgDangle2, svgPhaseVisual) {
  let draw = SVG(svgMain).size(canvasWidth, canvasHeight);
  let drawPhasediff = SVG(svgPhaseDiff).size(plotWidth, plotHeight);
  let drawAngle1 = SVG(svgAngle1).size(plotWidth, plotHeight);
  let drawDangle2 = SVG(svgDangle2).size(plotWidth, plotHeight);
  let drawVisual = SVG(svgPhaseVisual).size(visualWidth, visualHeight)
    .viewbox(visualOffsetX, visualOffsetY, visualWidth, visualHeight);

  let pivotPathW = xyEllipseWidth(pivotRadius);
  let pivotPathH = xyEllipseHeight(pivotRadius);
  let pivotPath = draw
    .ellipse(pivotPathW, pivotPathH)
    .fill('none')
    .stroke({ width: 1 })
    .attr({
      cx: originX,
      cy: originY
    });

  let predictedPathW = xyEllipseWidth(predictedRadius);
  let predictedPathH = xyEllipseHeight(predictedRadius);
  let { x: predictedPathX, y: predictedPathY } = transform(vec3(0, 0, predictedHeight));
  let predictedPath = draw
    .ellipse(predictedPathW, predictedPathH)
    .fill('none')
    .stroke({ width: 1 })
    .attr({
      cx: predictedPathX,
      cy: predictedPathY,
    });

  let pivotPoint = draw
    .circle(4)
    .fill('none')
    .stroke({ width: 1 });

  let bobPoint = draw
    .circle(6)
    .fill('#000');

  let thread = draw
    .line(0, 0, 0, 0)
    .stroke({ width: 1 });

  for (let i = 0; i < plotTicks; i++) {
    plotPhasediff.push([0,0]);
    plotAngle1.push([0,0]);
    plotDangle2.push([0,0]);
  }

  drawPhasediff
    .line(0, plotHeight / 2, plotWidth, plotHeight / 2)
    .stroke({
      color: colorAxis,
      width: 1
    });
  drawAngle1
    .line(0, plotHeight / 2, plotWidth, plotHeight / 2)
    .stroke({
      color: colorAxis,
      width: 1
    });
  drawDangle2
    .line(0, plotHeight / 2, plotWidth, plotHeight / 2)
    .stroke({
      color: colorAxis,
      width: 1
    });
  let linePhasediff = drawPhasediff
    .polyline(plotPhasediff)
    .fill('none')
    .stroke({
      color: colorPlot,
      width: 1
    });
  let lineAngle1 = drawAngle1
    .polyline(plotAngle1)
    .fill('none')
    .stroke({
      color: colorPlot,
      width: 1
    });
  let lineDangle2 = drawDangle2
    .polyline(plotDangle2)
    .fill('none')
    .stroke({
      color: colorPlot,
      width: 1
    });

  drawVisual
    .circle(visualScale * pivotRadius * 2)
    .fill('none')
    .stroke({ width: 1, color: '#AAA' })
    .attr({ cx: 0, cy: 0 });
  let visualBobRadius = drawVisual
    .circle(0)
    .fill('none')
    .stroke({ width: 1, color: '#AAA' })
    .attr({ cx: 0, cy: 0 });
  drawVisual
    .circle(4)
    .fill('#555')
    .attr({
      cx: 0,
      cy: -visualScale * pivotRadius
    });
  let visualBobPoint = drawVisual
    .circle(6)
    .fill('#05F')
    .attr({
      cx: 0,
      cy: visualScale * pivotRadius
    });
  let visualLine = drawVisual
    .line(0, 0, 0, 0)
    .stroke({ width: 1, color: '#AAA' });

  let pendulum = Pendulum({
    g,
    l,
    pivotAngVel,
    pivotRadius,
    damp1,
    damp2,
    initialAngle1,
    initialAngle2,
    initialDangle1,
    initialDangle2,
    initialTime,
    dt,
    stepsPerTick
  });

  function tick() {
    pendulum.step();

    let t = pendulum.time();
    let {pivot: pivotPos, bob: bobPos} = pendulum.pos();
    let pivotPointPos = transform(pivotPos);
    let bobPointPos = transform(bobPos);

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
    let stickThingy = -Math.sin(pendulum.angle1()) * l;

    // let rb = stickThingy + pivotRadius;
    let phasediff = pendulum.phasediff();
    // rb *= -visualScale;
    let bx = stickThingy * Math.sin(phasediff);
    let by = -pivotRadius + stickThingy * Math.cos(phasediff);
    let rb = Math.sqrt(bx*bx + by*by);
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
    let tPos = t * plotTimeScale;
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
