import {Showcase} from './showcase.js';
import {DrawStability} from './stability.js';
import {PlotSteadyState} from './steadystate.js';

window.onload = function() {
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
}
