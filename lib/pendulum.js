import rk4 from 'ode-rk4';

const angle1 = 0;
const angle2 = 1;
const dangle1 = 2;
const dangle2 = 3;

function diff(f, x) {
  const dx = 1e-6;
  let x1 = x - dx;
  let x2 = x + dx;
  let y1 = f(x1);
  let y2 = f(x2);
  return (y2 - y1) / (x2 - x1);
}

export function Pendulum({
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
}) {

  let phase = (t) => pivotAngVel * t;
  let pivotX = (t) => pivotRadius * Math.cos(phase(t));
  let pivotY = (t) => pivotRadius * Math.sin(phase(t));
  let pivotZ = (t) => 0;
  let pivotVelX = (t) => diff(pivotX, t);
  let pivotVelY = (t) => diff(pivotY, t);
  let pivotVelZ = (t) => diff(pivotZ, t);
  let accelX = (t) => diff(pivotVelX, t);
  let accelY = (t) => diff(pivotVelY, t);
  let accelZ = (t) => diff(pivotVelZ, t);

  let initial = [];
  initial[angle1] = initialAngle1;
  initial[angle2] = initialAngle2;
  initial[dangle1] = initialDangle1;
  initial[dangle2] = initialDangle2;

  function derivative(dydt, y, t) {
    let th1 = y[angle1];
    let th2 = y[angle2];
    let dth1 = y[dangle1];
    let dth2 = y[dangle2];
    let c1 = Math.cos(th1);
    let c2 = Math.cos(th2);
    let s1 = Math.sin(th1);
    let s2 = Math.sin(th2);
    let ax = accelX(t);
    let ay = accelY(t);
    let az = accelZ(t);

    dydt[dangle1] = dth2*dth2*s1*c1 - (ax*c1*c2 + ay*c1*s2 + (az + g)*s1) / l;
    dydt[dangle2] = (ax*s2 - ay*c2) / (l * s1) - 2*dth1*dth2 * c1/s1;
    dydt[dangle1] -= damp1 * dth1;
    dydt[dangle2] -= damp2 * dth2;
    dydt[angle1] = dth1;
    dydt[angle2] = dth2;
  }

  let integrator = rk4(initial, derivative, initialTime, dt);

  return {
    step: () => integrator.steps(stepsPerTick),
    angle1: () => integrator.y[angle1],
    angle2: () => integrator.y[angle2],
    dangle1: () => integrator.y[dangle1],
    dangle2: () => integrator.y[dangle2],
    pos: function getPos() {
      let t = integrator.t;
      let px = pivotX(t);
      let py = pivotY(t);
      let pz = pivotZ(t);
      let curr = integrator.y;
      return {
        pivot: {
          x: px,
          y: py,
          z: pz
        },
        bob: {
          x: px + l * Math.sin(curr[angle1]) * Math.cos(curr[angle2]),
          y: py + l * Math.sin(curr[angle1]) * Math.sin(curr[angle2]),
          z: pz + l * Math.cos(curr[angle1])
        }
      };
    },
    time: () => integrator.t,
    phasediff: () => integrator.y[angle2] - phase(integrator.t)
  };
}
