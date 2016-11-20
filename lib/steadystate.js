//import {SVG} from 'wout/svg.js';
//import {Plotly} from 'plotly.js';

const l = 1;
const rp = 0.5;
const g = 9.81;

const xMin = -l - rp;
const xMax = l - rp;
const yMax = 10;
const yMin = 0;
const samples = 600;
const xStep = (xMax - xMin) / samples;

function w(rb) {
  return Math.sqrt(g/rb*(rb+rp)/Math.sqrt(l*l-(rb+rp)*(rb+rp)));
}

export function PlotSteadyState(thatDiv) {
  let trace = {
    x: [],
    y: [],
    mode: 'line'
  };
  for (var x = xMin; x <= xMax; x += xStep) {
    let y = w(x);
    if (y < yMin || y > yMax) continue;
    trace.x.push(x);
    trace.y.push(w(x));
  }
  let data = [trace];
  let layout = {
    title: 'Steady State'
  };
  Plotly.newPlot(thatDiv, data, layout);
}


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
