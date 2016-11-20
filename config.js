System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.35",
    "babel-runtime": "npm:babel-runtime@5.8.35",
    "core-js": "npm:core-js@1.2.6",
    "ode-rk4": "npm:ode-rk4@1.1.3",
    "plotly.js": "npm:plotly.js@1.7.0",
    "wout/svg.js": "github:wout/svg.js@2.2.5",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:3d-view-controls@2.1.1": {
      "3d-view": "npm:3d-view@2.0.0",
      "mouse-change": "npm:mouse-change@1.2.1",
      "mouse-wheel": "npm:mouse-wheel@1.1.0",
      "right-now": "npm:right-now@1.0.0"
    },
    "npm:3d-view@2.0.0": {
      "matrix-camera-controller": "npm:matrix-camera-controller@2.1.1",
      "orbit-camera-controller": "npm:orbit-camera-controller@4.0.0",
      "turntable-camera-controller": "npm:turntable-camera-controller@3.0.1"
    },
    "npm:a-big-triangle@1.0.2": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-vao": "npm:gl-vao@1.2.1",
      "weak-map": "npm:weak-map@1.0.5"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:add-line-numbers@1.0.1": {
      "pad-left": "npm:pad-left@1.0.2"
    },
    "npm:affine-hull@1.0.0": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:align-text@0.1.4": {
      "kind-of": "npm:kind-of@3.0.2",
      "longest": "npm:longest@1.0.1",
      "repeat-string": "npm:repeat-string@1.5.4"
    },
    "npm:alpha-complex@1.0.0": {
      "circumradius": "npm:circumradius@1.0.0",
      "delaunay-triangulate": "npm:delaunay-triangulate@1.1.6"
    },
    "npm:alpha-shape@1.0.0": {
      "alpha-complex": "npm:alpha-complex@1.0.0",
      "simplicial-complex-boundary": "npm:simplicial-complex-boundary@1.0.1"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:atob-lite@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:babel-runtime@5.8.35": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:barycentric@1.0.1": {
      "robust-linear-solve": "npm:robust-linear-solve@1.0.0"
    },
    "npm:big-rat@1.0.2": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "bn.js": "npm:bn.js@2.2.0",
      "double-bits": "npm:double-bits@1.1.1"
    },
    "npm:bl@0.9.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:boundary-cells@2.0.0": {
      "tape": "npm:tape@4.5.1"
    },
    "npm:box-intersect@1.0.1": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:brace-expansion@1.1.3": {
      "balanced-match": "npm:balanced-match@0.3.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:brfs@1.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "quote-stream": "npm:quote-stream@1.0.2",
      "resolve": "npm:resolve@1.1.7",
      "static-module": "npm:static-module@1.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "through2": "npm:through2@2.0.1"
    },
    "npm:buffer-equal@0.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:cdt2d@1.0.0": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "robust-in-sphere": "npm:robust-in-sphere@1.1.3",
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:center-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4",
      "lazy-cache": "npm:lazy-cache@1.0.3"
    },
    "npm:circumcenter@1.0.0": {
      "dup": "npm:dup@1.0.0",
      "robust-linear-solve": "npm:robust-linear-solve@1.0.0"
    },
    "npm:circumradius@1.0.0": {
      "circumcenter": "npm:circumcenter@1.0.0"
    },
    "npm:clean-pslg@1.1.0": {
      "big-rat": "npm:big-rat@1.0.2",
      "box-intersect": "npm:box-intersect@1.0.1",
      "compare-cell": "npm:compare-cell@1.0.0",
      "nextafter": "npm:nextafter@1.0.0",
      "rat-vec": "npm:rat-vec@1.1.0",
      "robust-segment-intersect": "npm:robust-segment-intersect@1.0.1",
      "union-find": "npm:union-find@1.0.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:cliui@2.1.0": {
      "center-align": "npm:center-align@0.1.3",
      "right-align": "npm:right-align@0.1.3",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:colormap@2.1.2": {
      "arraytools": "npm:arraytools@1.1.2",
      "clone": "npm:clone@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:colors@0.6.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:commander@2.1.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:compare-angle@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "robust-product": "npm:robust-product@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "signum": "npm:signum@0.0.0",
      "two-sum": "npm:two-sum@1.0.0"
    },
    "npm:compare-oriented-cell@1.0.1": {
      "cell-orientation": "npm:cell-orientation@1.0.1",
      "compare-cell": "npm:compare-cell@1.0.0"
    },
    "npm:concat-stream@1.4.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "typedarray": "npm:typedarray@0.0.6"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convex-hull@1.0.3": {
      "affine-hull": "npm:affine-hull@1.0.0",
      "incremental-convex-hull": "npm:incremental-convex-hull@1.0.1",
      "monotone-convex-hull-2d": "npm:monotone-convex-hull-2d@1.0.1"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:cwise-compiler@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:cwise-parser@1.0.2": {
      "esprima": "npm:esprima@1.1.1",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:cwise@1.0.9": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2",
      "cwise-parser": "npm:cwise-parser@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "static-module": "npm:static-module@1.3.0",
      "uglify-js": "npm:uglify-js@2.6.2"
    },
    "npm:d3-geo-projection@0.2.16": {
      "brfs": "npm:brfs@1.4.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:define-properties@1.1.2": {
      "foreach": "npm:foreach@2.0.5",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:delaunay-triangulate@1.1.6": {
      "incremental-convex-hull": "npm:incremental-convex-hull@1.0.1",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:double-bits@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:edges-to-adjacency-list@1.0.0": {
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:es-abstract@1.5.0": {
      "es-to-primitive": "npm:es-to-primitive@1.1.1",
      "function-bind": "npm:function-bind@1.1.0",
      "is-callable": "npm:is-callable@1.1.3",
      "is-regex": "npm:is-regex@1.0.3"
    },
    "npm:es-to-primitive@1.1.1": {
      "is-callable": "npm:is-callable@1.1.3",
      "is-date-object": "npm:is-date-object@1.0.1",
      "is-symbol": "npm:is-symbol@1.0.1"
    },
    "npm:es6-promise@3.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:escodegen@0.0.28": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.3.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:escodegen@1.3.3": {
      "esprima": "npm:esprima@1.1.1",
      "estraverse": "npm:estraverse@1.5.1",
      "esutils": "npm:esutils@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:esprima@1.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.9"
    },
    "npm:fast-isnumeric@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:filtered-vector@1.2.4": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "cubic-hermite": "npm:cubic-hermite@1.0.0"
    },
    "npm:findup@0.1.5": {
      "colors": "npm:colors@0.6.2",
      "commander": "npm:commander@2.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:fs-extra@0.26.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "jsonfile": "npm:jsonfile@2.2.3",
      "klaw": "npm:klaw@1.1.3",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rimraf": "npm:rimraf@2.5.2"
    },
    "npm:gl-axes3d@1.2.4": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "dup": "npm:dup@1.0.0",
      "extract-frustum-planes": "npm:extract-frustum-planes@1.0.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-state": "npm:gl-state@1.0.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "gl-vec4": "npm:gl-vec4@1.0.1",
      "glslify": "npm:glslify@2.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "split-polygon": "npm:split-polygon@1.0.0",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:gl-buffer@2.1.2": {
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-error2d@1.1.0": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-error3d@1.0.4": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glslify": "npm:glslify@2.3.1"
    },
    "npm:gl-fbo@2.0.5": {
      "gl-texture2d": "npm:gl-texture2d@2.0.10"
    },
    "npm:gl-format-compiler-error@1.0.2": {
      "add-line-numbers": "npm:add-line-numbers@1.0.1",
      "gl-constants": "npm:gl-constants@1.0.0",
      "glsl-shader-name": "npm:glsl-shader-name@1.0.0",
      "sprintf-js": "npm:sprintf-js@1.0.3"
    },
    "npm:gl-line2d@1.2.2": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "glsl-inverse": "npm:glsl-inverse@1.0.0",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18",
      "snap-points-2d": "npm:snap-points-2d@1.0.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-line3d@1.1.0": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glsl-read-float": "npm:glsl-read-float@1.1.0",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18"
    },
    "npm:gl-matrix-invert@1.0.0": {
      "gl-mat2": "npm:gl-mat2@1.0.0",
      "gl-mat3": "npm:gl-mat3@1.0.0",
      "gl-mat4": "npm:gl-mat4@1.1.4"
    },
    "npm:gl-mesh3d@1.0.7": {
      "barycentric": "npm:barycentric@1.0.1",
      "colormap": "npm:colormap@2.1.2",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glsl-specular-cook-torrance": "npm:glsl-specular-cook-torrance@2.0.1",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18",
      "normals": "npm:normals@1.0.1",
      "polytope-closest-point": "npm:polytope-closest-point@1.0.0",
      "simplicial-complex-contour": "npm:simplicial-complex-contour@1.0.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-plot2d@1.1.7": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-select-static": "npm:gl-select-static@2.0.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glsl-inverse": "npm:glsl-inverse@1.0.0",
      "glslify": "npm:glslify@2.3.1",
      "text-cache": "npm:text-cache@4.0.0"
    },
    "npm:gl-plot3d@1.5.0": {
      "3d-view-controls": "npm:3d-view-controls@2.1.1",
      "a-big-triangle": "npm:a-big-triangle@1.0.2",
      "gl-axes3d": "npm:gl-axes3d@1.2.4",
      "gl-fbo": "npm:gl-fbo@2.0.5",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-select-static": "npm:gl-select-static@2.0.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-spikes3d": "npm:gl-spikes3d@1.0.5",
      "glslify": "npm:glslify@2.3.1",
      "mouse-change": "npm:mouse-change@1.2.1",
      "ndarray": "npm:ndarray@1.0.18"
    },
    "npm:gl-quat@1.0.0": {
      "gl-mat3": "npm:gl-mat3@1.0.0",
      "gl-vec3": "npm:gl-vec3@1.0.3",
      "gl-vec4": "npm:gl-vec4@1.0.1"
    },
    "npm:gl-scatter2d-fancy@1.1.2": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1",
      "text-cache": "npm:text-cache@4.0.0",
      "typedarray-pool": "npm:typedarray-pool@1.1.0",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:gl-scatter2d@1.0.6": {
      "binary-search-bounds": "npm:binary-search-bounds@2.0.3",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1",
      "snap-points-2d": "npm:snap-points-2d@3.1.0",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-scatter3d@1.0.10": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glslify": "npm:glslify@2.3.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:gl-select-box@1.0.1": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "glslify": "npm:glslify@2.3.1"
    },
    "npm:gl-select-static@2.0.2": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "cwise": "npm:cwise@1.0.9",
      "gl-fbo": "npm:gl-fbo@2.0.5",
      "ndarray": "npm:ndarray@1.0.18",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-shader@4.2.0": {
      "gl-format-compiler-error": "npm:gl-format-compiler-error@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "weakmap-shim": "npm:weakmap-shim@1.1.0"
    },
    "npm:gl-spikes3d@1.0.5": {
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glslify": "npm:glslify@2.3.1"
    },
    "npm:gl-state@1.0.0": {
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:gl-surface3d@1.2.3": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "colormap": "npm:colormap@2.1.2",
      "dup": "npm:dup@1.0.0",
      "gl-buffer": "npm:gl-buffer@2.1.2",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-shader": "npm:gl-shader@4.2.0",
      "gl-texture2d": "npm:gl-texture2d@2.0.10",
      "gl-vao": "npm:gl-vao@1.2.1",
      "glsl-specular-beckmann": "npm:glsl-specular-beckmann@1.1.2",
      "glslify": "npm:glslify@2.3.1",
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-gradient": "npm:ndarray-gradient@1.0.0",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "ndarray-pack": "npm:ndarray-pack@1.2.0",
      "ndarray-scratch": "npm:ndarray-scratch@1.2.0",
      "surface-nets": "npm:surface-nets@1.0.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:gl-texture2d@2.0.10": {
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:glob@7.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@3.0.0",
      "once": "npm:once@1.3.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:glsl-inject-defines@1.0.3": {
      "glsl-token-inject-block": "npm:glsl-token-inject-block@1.1.0",
      "glsl-token-string": "npm:glsl-token-string@1.0.1",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.1"
    },
    "npm:glsl-resolve@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "resolve": "npm:resolve@0.6.3",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:glsl-shader-name@1.0.0": {
      "atob-lite": "npm:atob-lite@1.0.0",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.1"
    },
    "npm:glsl-specular-cook-torrance@2.0.1": {
      "glsl-specular-beckmann": "npm:glsl-specular-beckmann@1.1.2"
    },
    "npm:glsl-token-defines@1.0.0": {
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.1"
    },
    "npm:glsl-token-descope@1.0.2": {
      "glsl-token-assignments": "npm:glsl-token-assignments@2.0.1",
      "glsl-token-depth": "npm:glsl-token-depth@1.1.2",
      "glsl-token-properties": "npm:glsl-token-properties@1.0.1",
      "glsl-token-scope": "npm:glsl-token-scope@1.1.2"
    },
    "npm:glsl-tokenizer@2.1.1": {
      "through2": "npm:through2@0.6.5"
    },
    "npm:glslify-bundle@2.0.4": {
      "glsl-inject-defines": "npm:glsl-inject-defines@1.0.3",
      "glsl-token-defines": "npm:glsl-token-defines@1.0.0",
      "glsl-token-depth": "npm:glsl-token-depth@1.1.2",
      "glsl-token-descope": "npm:glsl-token-descope@1.0.2",
      "glsl-token-scope": "npm:glsl-token-scope@1.1.2",
      "glsl-token-string": "npm:glsl-token-string@1.0.1",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.1"
    },
    "npm:glslify-deps@1.2.5": {
      "events": "npm:events@1.0.2",
      "findup": "npm:findup@0.1.5",
      "glsl-resolve": "npm:glsl-resolve@0.0.1",
      "glsl-tokenizer": "npm:glsl-tokenizer@2.1.1",
      "graceful-fs": "npm:graceful-fs@4.1.3",
      "inherits": "npm:inherits@2.0.1",
      "map-limit": "npm:map-limit@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7"
    },
    "npm:glslify@2.3.1": {
      "bl": "npm:bl@0.9.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glsl-resolve": "npm:glsl-resolve@0.0.1",
      "glslify-bundle": "npm:glslify-bundle@2.0.4",
      "glslify-deps": "npm:glslify-deps@1.2.5",
      "minimist": "npm:minimist@1.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7",
      "static-module": "npm:static-module@1.3.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "through2": "npm:through2@0.6.5",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:graceful-fs@4.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:iconv-lite@0.2.11": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:incremental-convex-hull@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "simplicial-complex": "npm:simplicial-complex@1.0.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:interval-tree-1d@1.0.3": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0"
    },
    "npm:is-buffer@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jsonfile@2.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:kind-of@3.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "is-buffer": "npm:is-buffer@1.1.3"
    },
    "npm:klaw@1.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lazy-cache@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:map-limit@0.0.1": {
      "once": "npm:once@1.3.3"
    },
    "npm:marching-simplex-table@1.0.0": {
      "convex-hull": "npm:convex-hull@1.0.3"
    },
    "npm:mat4-decompose@1.0.4": {
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3"
    },
    "npm:mat4-interpolate@1.0.4": {
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3",
      "mat4-decompose": "npm:mat4-decompose@1.0.4",
      "mat4-recompose": "npm:mat4-recompose@1.0.4",
      "quat-slerp": "npm:quat-slerp@1.0.1"
    },
    "npm:mat4-recompose@1.0.4": {
      "gl-mat4": "npm:gl-mat4@1.1.4"
    },
    "npm:matrix-camera-controller@2.1.1": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3",
      "mat4-interpolate": "npm:mat4-interpolate@1.0.4"
    },
    "npm:minimatch@3.0.0": {
      "brace-expansion": "npm:brace-expansion@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:monotone-convex-hull-2d@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:mouse-change@1.2.1": {
      "mouse-event": "npm:mouse-event@1.0.5"
    },
    "npm:mouse-wheel@1.1.0": {
      "right-now": "npm:right-now@1.0.0",
      "signum": "npm:signum@1.0.0",
      "to-px": "npm:to-px@1.0.1"
    },
    "npm:ndarray-extract-contour@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:ndarray-fill@1.0.1": {
      "cwise": "npm:cwise@1.0.9"
    },
    "npm:ndarray-gradient@1.0.0": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2",
      "dup": "npm:dup@1.0.0"
    },
    "npm:ndarray-homography@1.0.0": {
      "gl-matrix-invert": "npm:gl-matrix-invert@1.0.0",
      "ndarray-warp": "npm:ndarray-warp@1.0.1"
    },
    "npm:ndarray-ops@1.2.2": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2"
    },
    "npm:ndarray-pack@1.2.0": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2",
      "ndarray": "npm:ndarray@1.0.18"
    },
    "npm:ndarray-scratch@1.2.0": {
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:ndarray-sort@1.0.1": {
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:ndarray-warp@1.0.1": {
      "cwise": "npm:cwise@1.0.9",
      "ndarray-linear-interpolate": "npm:ndarray-linear-interpolate@1.0.0"
    },
    "npm:ndarray@1.0.18": {
      "iota-array": "npm:iota-array@1.0.0",
      "is-buffer": "npm:is-buffer@1.1.3"
    },
    "npm:nextafter@1.0.0": {
      "double-bits": "npm:double-bits@1.1.1"
    },
    "npm:once@1.3.3": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:orbit-camera-controller@4.0.0": {
      "filtered-vector": "npm:filtered-vector@1.2.4",
      "gl-mat4": "npm:gl-mat4@1.1.4"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pad-left@1.0.2": {
      "repeat-string": "npm:repeat-string@1.5.4"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:permutation-parity@1.0.0": {
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:permutation-rank@1.0.0": {
      "invert-permutation": "npm:invert-permutation@1.0.0",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:planar-dual@1.0.2": {
      "compare-angle": "npm:compare-angle@1.0.1",
      "dup": "npm:dup@1.0.0"
    },
    "npm:planar-graph-to-polyline@1.0.5": {
      "edges-to-adjacency-list": "npm:edges-to-adjacency-list@1.0.0",
      "planar-dual": "npm:planar-dual@1.0.2",
      "point-in-big-polygon": "npm:point-in-big-polygon@2.0.0",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "robust-sum": "npm:robust-sum@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "two-product": "npm:two-product@1.0.2",
      "uniq": "npm:uniq@1.0.1"
    },
    "npm:plotly.js@1.7.0": {
      "3d-view": "npm:3d-view@2.0.0",
      "alpha-shape": "npm:alpha-shape@1.0.0",
      "arraytools": "npm:arraytools@1.1.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "convex-hull": "npm:convex-hull@1.0.3",
      "d3": "npm:d3@3.5.16",
      "delaunay-triangulate": "npm:delaunay-triangulate@1.1.6",
      "es6-promise": "npm:es6-promise@3.1.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fast-isnumeric": "npm:fast-isnumeric@1.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "fs-extra": "npm:fs-extra@0.26.7",
      "gl-error2d": "npm:gl-error2d@1.1.0",
      "gl-error3d": "npm:gl-error3d@1.0.4",
      "gl-line2d": "npm:gl-line2d@1.2.2",
      "gl-line3d": "npm:gl-line3d@1.1.0",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-mesh3d": "npm:gl-mesh3d@1.0.7",
      "gl-plot2d": "npm:gl-plot2d@1.1.7",
      "gl-plot3d": "npm:gl-plot3d@1.5.0",
      "gl-scatter2d": "npm:gl-scatter2d@1.0.6",
      "gl-scatter2d-fancy": "npm:gl-scatter2d-fancy@1.1.2",
      "gl-scatter3d": "npm:gl-scatter3d@1.0.10",
      "gl-select-box": "npm:gl-select-box@1.0.1",
      "gl-spikes2d": "npm:gl-spikes2d@1.0.1",
      "gl-surface3d": "npm:gl-surface3d@1.2.3",
      "mouse-change": "npm:mouse-change@1.2.1",
      "mouse-wheel": "npm:mouse-wheel@1.1.0",
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-fill": "npm:ndarray-fill@1.0.1",
      "ndarray-homography": "npm:ndarray-homography@1.0.0",
      "ndarray-ops": "npm:ndarray-ops@1.2.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "right-now": "npm:right-now@1.0.0",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "sane-topojson": "npm:sane-topojson@1.2.3",
      "superscript-text": "npm:superscript-text@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "tinycolor2": "npm:tinycolor2@1.3.0",
      "topojson": "npm:topojson@1.6.24"
    },
    "npm:point-in-big-polygon@2.0.0": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "interval-tree-1d": "npm:interval-tree-1d@1.0.3",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "slab-decomposition": "npm:slab-decomposition@1.0.2"
    },
    "npm:polytope-closest-point@1.0.0": {
      "numeric": "npm:numeric@1.2.6"
    },
    "npm:process-nextick-args@1.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:quat-slerp@1.0.1": {
      "gl-quat": "npm:gl-quat@1.0.0"
    },
    "npm:quote-stream@0.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@0.4.2"
    },
    "npm:quote-stream@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-equal": "npm:buffer-equal@0.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through2": "npm:through2@2.0.1"
    },
    "npm:rat-vec@1.1.0": {
      "big-rat": "npm:big-rat@1.0.2"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.6",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:reduce-simplicial-complex@1.0.0": {
      "cell-orientation": "npm:cell-orientation@1.0.1",
      "compare-cell": "npm:compare-cell@1.0.0",
      "compare-oriented-cell": "npm:compare-oriented-cell@1.0.1"
    },
    "npm:resolve@0.6.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@1.1.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resumer@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:right-align@0.1.3": {
      "align-text": "npm:align-text@0.1.4"
    },
    "npm:right-now@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:rimraf@2.5.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@7.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:robust-determinant@1.1.0": {
      "robust-compress": "npm:robust-compress@1.0.0",
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-dot-product@1.0.0": {
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-in-sphere@1.1.3": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-subtract": "npm:robust-subtract@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-linear-solve@1.0.0": {
      "robust-determinant": "npm:robust-determinant@1.1.0"
    },
    "npm:robust-orientation@1.1.3": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-subtract": "npm:robust-subtract@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-product@1.0.0": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-sum": "npm:robust-sum@1.0.0"
    },
    "npm:robust-scale@1.0.2": {
      "two-product": "npm:two-product@1.0.2",
      "two-sum": "npm:two-sum@1.0.0"
    },
    "npm:robust-segment-intersect@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:rw@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sane-topojson@1.2.3": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:shapefile@0.3.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "d3-queue": "npm:d3-queue@1.2.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "iconv-lite": "npm:iconv-lite@0.2.11",
      "optimist": "npm:optimist@0.3.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:simplicial-complex-boundary@1.0.1": {
      "boundary-cells": "npm:boundary-cells@2.0.0",
      "reduce-simplicial-complex": "npm:reduce-simplicial-complex@1.0.0"
    },
    "npm:simplicial-complex-contour@1.0.2": {
      "marching-simplex-table": "npm:marching-simplex-table@1.0.0",
      "ndarray": "npm:ndarray@1.0.18",
      "ndarray-sort": "npm:ndarray-sort@1.0.1",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:simplicial-complex@0.3.3": {
      "bit-twiddle": "npm:bit-twiddle@0.0.2",
      "union-find": "npm:union-find@0.0.4"
    },
    "npm:simplicial-complex@1.0.0": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "union-find": "npm:union-find@1.0.2"
    },
    "npm:simplify-planar-graph@2.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "simplicial-complex": "npm:simplicial-complex@0.3.3"
    },
    "npm:slab-decomposition@1.0.2": {
      "binary-search-bounds": "npm:binary-search-bounds@1.0.0",
      "functional-red-black-tree": "npm:functional-red-black-tree@1.0.1",
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:snap-points-2d@1.0.1": {
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:snap-points-2d@3.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "typedarray-pool": "npm:typedarray-pool@1.1.0"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.5.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:split-polygon@1.0.0": {
      "robust-dot-product": "npm:robust-dot-product@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0"
    },
    "npm:static-eval@0.2.4": {
      "escodegen": "npm:escodegen@0.0.28"
    },
    "npm:static-module@1.3.0": {
      "concat-stream": "npm:concat-stream@1.4.10",
      "duplexer2": "npm:duplexer2@0.0.2",
      "escodegen": "npm:escodegen@1.3.3",
      "falafel": "npm:falafel@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "has": "npm:has@1.0.1",
      "object-inspect": "npm:object-inspect@0.4.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "quote-stream": "npm:quote-stream@0.0.0",
      "readable-stream": "npm:readable-stream@1.0.33",
      "shallow-copy": "npm:shallow-copy@0.0.1",
      "static-eval": "npm:static-eval@0.2.4",
      "through2": "npm:through2@0.4.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:string.prototype.trim@1.1.2": {
      "define-properties": "npm:define-properties@1.1.2",
      "es-abstract": "npm:es-abstract@1.5.0",
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:surface-nets@1.0.2": {
      "ndarray-extract-contour": "npm:ndarray-extract-contour@1.0.1",
      "triangulate-hypercube": "npm:triangulate-hypercube@1.0.1",
      "zero-crossings": "npm:zero-crossings@1.0.1"
    },
    "npm:tape@4.5.1": {
      "deep-equal": "npm:deep-equal@1.0.1",
      "defined": "npm:defined@1.0.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "function-bind": "npm:function-bind@1.1.0",
      "glob": "npm:glob@7.0.3",
      "has": "npm:has@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimist": "npm:minimist@1.2.0",
      "object-inspect": "npm:object-inspect@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "resolve": "npm:resolve@1.1.7",
      "resumer": "npm:resumer@0.0.0",
      "string.prototype.trim": "npm:string.prototype.trim@1.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:text-cache@4.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "vectorize-text": "npm:vectorize-text@3.0.2"
    },
    "npm:through2@0.4.2": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@2.1.2"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through2@2.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.0.6",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.1"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:tinycolor2@1.3.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:to-px@1.0.1": {
      "parse-unit": "npm:parse-unit@1.0.1"
    },
    "npm:topojson@1.6.24": {
      "d3": "npm:d3@3.5.16",
      "d3-geo-projection": "npm:d3-geo-projection@0.2.16",
      "d3-queue": "npm:d3-queue@2.0.3",
      "optimist": "npm:optimist@0.3.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "rw": "npm:rw@1.3.2",
      "shapefile": "npm:shapefile@0.3.1"
    },
    "npm:triangulate-hypercube@1.0.1": {
      "gamma": "npm:gamma@0.1.0",
      "permutation-parity": "npm:permutation-parity@1.0.0",
      "permutation-rank": "npm:permutation-rank@1.0.0"
    },
    "npm:triangulate-polyline@1.0.3": {
      "cdt2d": "npm:cdt2d@1.0.0"
    },
    "npm:turntable-camera-controller@3.0.1": {
      "filtered-vector": "npm:filtered-vector@1.2.4",
      "gl-mat4": "npm:gl-mat4@1.1.4",
      "gl-vec3": "npm:gl-vec3@1.0.3"
    },
    "npm:typedarray-pool@1.1.0": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dup": "npm:dup@1.0.0"
    },
    "npm:uglify-js@2.6.2": {
      "async": "npm:async@0.2.10",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.3",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "yargs": "npm:yargs@3.10.0"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vectorize-text@3.0.2": {
      "cdt2d": "npm:cdt2d@1.0.0",
      "clean-pslg": "npm:clean-pslg@1.1.0",
      "ndarray": "npm:ndarray@1.0.18",
      "planar-graph-to-polyline": "npm:planar-graph-to-polyline@1.0.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "simplify-planar-graph": "npm:simplify-planar-graph@2.0.1",
      "surface-nets": "npm:surface-nets@1.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "triangulate-polyline": "npm:triangulate-polyline@1.0.3"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:xtend@2.1.2": {
      "object-keys": "npm:object-keys@0.4.0"
    },
    "npm:yargs@3.10.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.2.1",
      "cliui": "npm:cliui@2.1.0",
      "decamelize": "npm:decamelize@1.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "window-size": "npm:window-size@0.1.0"
    },
    "npm:zero-crossings@1.0.1": {
      "cwise-compiler": "npm:cwise-compiler@1.1.2"
    }
  }
});
