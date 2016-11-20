import {SVG} from 'wout/svg.js'

const pivotRadius = 50;
const bobRadius = 30;
const tensionDist = 50;
const pivotPhase = dtor(-40);
const pad = 10;

const phaseW = 2 * (pivotRadius + pad);
const phaseH = phaseW;

const camAngle = -0.2;
const scale = 20;

function sqr(x) { return x * x; }

function rtod(a) { return a / Math.PI * 180; }
function dtor(a) { return a * Math.PI / 180; }

function drawArrow(draw, x1, y1, x2, y2, width, color) {
  let headHeight =  (1 + width) * 1.5;
  let headWidth = headHeight * 2;
  let angle = rtod(Math.atan2((y2 - y1), (x2 - x1)));
  draw
    .polygon([
        [-headWidth, headHeight / 2],
        [0, 0],
        [-headWidth, -headHeight / 2]
      ])
    .fill(color)
    .rotate(angle, 0, 0)
    .translate(x2, y2);

  angle = dtor(angle);

  let endx = x2 - 0.9 * headWidth * Math.cos(angle);
  let endy = y2 - 0.9 * headWidth * Math.sin(angle);

  draw
    .line(x1, y1, endx, endy)
    .stroke({ width, color });
}

function drawPhase(draw, phasediff) {
  draw
    .size(phaseW, phaseH)
    .viewbox(-phaseW / 2, -phaseH / 2, phaseW, phaseH);
  draw
    .circle(pivotRadius * 2)
    .fill('none')
    .stroke({ width: 1, color: '#AAA' })
    .attr({ cx: 0, cy: 0 });
  draw
    .circle(bobRadius * 2)
    .fill('none')
    .stroke({ width: 1, color: '#AAA' })
    .attr({ cx: 0, cy: 0 });

  let bobPhase = pivotPhase + phasediff;

  let px = pivotRadius * Math.cos(pivotPhase);
  let py = pivotRadius * Math.sin(pivotPhase);
  let bx = -bobRadius * Math.cos(bobPhase);
  let by = -bobRadius * Math.sin(bobPhase);

  draw
    .circle(4)
    .fill('#555')
    .attr({
      cx: px,
      cy: py
    });
  draw
    .circle(10)
    .fill('#333')
    .attr({
      cx: bx,
      cy: by
    });
  draw
    .line(px, py, bx, by)
    .stroke({ width: 1, color: '#555' });

  let tAngle = Math.atan2(py - by, px - bx);
  let tx = tensionDist * Math.cos(tAngle) + bx;
  let ty = tensionDist * Math.sin(tAngle) + by;

  drawArrow(draw, bx, by, tx, ty, 2.5, '#05F');

  if (phasediff == 0) return;

  let anglediff = bobPhase - pivotPhase;
  let tperp = tensionDist * Math.cos(anglediff);
  let ttang = tensionDist * Math.sin(anglediff);
  let tperpx = bx + tperp * Math.cos(bobPhase);
  let tperpy = by + tperp * Math.sin(bobPhase);
  let ttangx = bx + ttang * Math.sin(bobPhase);
  let ttangy = by - ttang * Math.cos(bobPhase);

  drawArrow(draw, bx, by, ttangx, ttangy, 2, '#05F');
  drawArrow(draw, bx, by, tperpx, tperpy, 2, '#05F');
}

function drawAngle1(draw, direction) {
  draw
    .size(100, 100)
    .viewbox(-50, -20, 100, 100);

  draw
    .ellipse(40, 10)
    .attr({
      cx: 0,
      cy: 0
    })
    .fill('none')
    .stroke({ width: 1, color: '#555' });

  draw
    .circle(4)
    .fill('#555')
    .attr({
      cx: 20,
      cy: 0
    });

  let bx1 = 20 - 60 * Math.sin(dtor(40));
  let by1 = 60 * Math.cos(dtor(40));
  let a = direction < 0? 45 : 35;
  let b = direction < 0? 50 : 30;
  let bx2 = 20 - 60 * Math.sin(dtor(a));
  let by2 = 60 * Math.cos(dtor(a));
  let bx3 = 20 - 60 * Math.sin(dtor(b));
  let by3 = 60 * Math.cos(dtor(b));
  draw
    .circle(10)
    .fill('#EEE')
    .attr({
      cx: bx1,
      cy: by1
    });
  draw
    .line(20, 0, bx1, by1)
    .stroke({ width: 1, color: '#EEE' });
  draw
    .circle(10)
    .fill('#CCC')
    .attr({
      cx: bx2,
      cy: by2
    });
  draw
    .line(20, 0, bx2, by2)
    .stroke({ width: 1, color: '#CCC' });
  draw
    .circle(10)
    .fill('#333')
    .attr({
      cx: bx3,
      cy: by3
    });
  draw
    .line(20, 0, bx3, by3)
    .stroke({ width: 1, color: '#333' });
  let arrowx1 = -40;
  let arrowx2 = -40;
  let arrowy1 = direction > 0? 30 : 55;
  let arrowy2 = direction > 0? 55 : 30;
  drawArrow(draw, arrowx1, arrowy1, arrowx2, arrowy2, 3, '#05F');
}

export function DrawStability({
  svgLagPhase,
  svgLagAngle1,
  svgLagDangle2Inc,
  svgLagPhaseInc,
  svgLeadPhase,
  svgLeadAngle1,
  svgLeadDangle2Dec,
  svgLeadPhaseDec
}) {
  drawPhase(SVG(svgLagPhase), dtor(+20));
  drawPhase(SVG(svgLeadPhase), dtor(-20));
  drawAngle1(SVG(svgLagAngle1), 1);
  drawAngle1(SVG(svgLeadAngle1), -1);
}
