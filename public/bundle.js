/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@k2works/full-stack-lab/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@k2works/full-stack-lab/src/index.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./node_modules/@k2works/full-stack-lab/src/style.css");
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib */ "./node_modules/@k2works/full-stack-lab/src/lib.js");


/* harmony default export */ __webpack_exports__["default"] = (_lib__WEBPACK_IMPORTED_MODULE_1__.render);

/***/ }),

/***/ "./node_modules/@k2works/full-stack-lab/src/lib.js":
/*!*********************************************************!*\
  !*** ./node_modules/@k2works/full-stack-lab/src/lib.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: function() { return /* binding */ render; },
/* harmony export */   style: function() { return /* binding */ style; }
/* harmony export */ });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);

var style = {
  APP: 'APP',
  UI: 'UI',
  API: 'API',
  DOC: 'DOC'
};
var render = function render(params) {
  var contents = params.contents,
    mindmap = params.mindmap,
    usecase = params.usecase,
    ui = params.ui,
    uiModel = params.uiModel,
    uiInteraction = params.uiInteraction,
    uml = params.uml,
    erd = params.erd,
    mode = params.mode;
  init(mode);
  documents(contents);
  diagrams(mindmap, usecase, ui, uiModel, uiInteraction, uml, erd, mode);
};
var init = function init(style) {
  document.addEventListener('DOMContentLoaded', function () {
    var dev = document.querySelector('#app-dev');
    if (dev !== null) {
      switch (style) {
        case "UI":
          dev.innerHTML = "\n            <div class=\"container\">\n              <h1>\u958B\u767A</h1>\n              <div class=\"py-3\">\n                <div id=\"app\"></div>\n                <!--<div id=\"mocha\"></div>-->\n              </div>\n              <h2>\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7</h2>\n              <div class=\"row p-3\">\n                <img id=\"mindmap-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <div class=\"row p-3\">\n                <div id=\"spec\"></div>\n              </div>\n              <h2>\u30E6\u30FC\u30B9\u30B1\u30FC\u30B9</h2>\n              <div class=\"row p-3\">\n                <img id=\"usecae-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h2>\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9</h2>\n              <h3>\u30D3\u30E5\u30FC</h3>\n              <div class=\"row p-3\">\n                <img id=\"ui-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h3>\u30E2\u30C7\u30EB</h3>\n              <div class=\"row p-3\">\n                <img id=\"ui-model-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h3>\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3</h3>\n              <div class=\"row p-3\">\n                <img id=\"ui-interaction-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n            </div> ";
          break;
        case "API":
          dev.innerHTML = "\n            <div class=\"container\">\n              <h1>\u958B\u767A</h1>\n              <div class=\"py-3\">\n                <div id=\"app\"></div>\n                <!--<div id=\"mocha\"></div>-->\n              </div>\n              <h2>\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7</h2>\n              <div class=\"row p-3\">\n                <img id=\"mindmap-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <div class=\"row p-3\">\n                <div id=\"spec\"></div>\n              </div>\n              <h2>\u30E6\u30FC\u30B9\u30B1\u30FC\u30B9</h2>\n              <div class=\"row p-3\">\n                <img id=\"usecae-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h2>\u30C9\u30E1\u30A4\u30F3\u30E2\u30C7\u30EB</h2>\n              <div class=\"row p-3\">\n                <img id=\"class-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h2>\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB</h2>\n              <div class=\"row p-3\">\n                <img id=\"er-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n            </div> ";
          break;
        case "DOC":
          dev.innerHTML = "\n            <div class=\"container\">\n              <h1>\u958B\u767A</h1>\n              <div class=\"py-3\">\n                <div id=\"app\"></div>\n                <!--<div id=\"mocha\"></div>-->\n              </div>\n              <h2>\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7</h2>\n              <div class=\"row p-3\">\n                <img id=\"mindmap-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <div class=\"row p-3\">\n                <div id=\"spec\"></div>\n              </div>\n            </div> ";
          break;
        default:
          dev.innerHTML = "\n            <div class=\"container\">\n              <h1>\u958B\u767A</h1>\n              <div class=\"py-3\">\n                <div id=\"app\"></div>\n                <!--<div id=\"mocha\"></div>-->\n              </div>\n              <h2>\u30DE\u30A4\u30F3\u30C9\u30DE\u30C3\u30D7</h2>\n              <div class=\"row p-3\">\n                <img id=\"mindmap-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <div class=\"row p-3\">\n                <div id=\"spec\"></div>\n              </div>\n              <h2>\u30E6\u30FC\u30B9\u30B1\u30FC\u30B9</h2>\n              <div class=\"row p-3\">\n                <img id=\"usecae-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h2>\u30C9\u30E1\u30A4\u30F3\u30E2\u30C7\u30EB</h2>\n              <div class=\"row p-3\">\n                <img id=\"class-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h2>\u30C7\u30FC\u30BF\u30E2\u30C7\u30EB</h2>\n              <div class=\"row p-3\">\n                <img id=\"er-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h2>\u30E6\u30FC\u30B6\u30FC\u30A4\u30F3\u30BF\u30FC\u30D5\u30A7\u30FC\u30B9</h2>\n              <h3>\u30D3\u30E5\u30FC</h3>\n              <div class=\"row p-3\">\n                <img id=\"ui-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h3>\u30E2\u30C7\u30EB</h3>\n              <div class=\"row p-3\">\n                <img id=\"ui-model-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n              <h3>\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3</h3>\n              <div class=\"row p-3\">\n                <img id=\"ui-interaction-im\"\n                src=http://www.plantuml.com/plantuml/img/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000>\n              </div>\n            </div> ";
      }
    }
  });
};
var documents = function documents(contents) {
  document.addEventListener('DOMContentLoaded', function () {
    var spec = document.getElementById('spec');
    if (spec) {
      // eslint-disable-next-line no-undef
      spec.innerHTML = marked__WEBPACK_IMPORTED_MODULE_0___default()(contents);
    }
  });
};
var diagrams = function diagrams(mindmap, usecase, ui, uiModel, uiInteraction, uml, erd, mode) {
  if (mode === style.UI) {
    (function (mindmap) {
      var outputId = 'mindmap-im';
      var source = mindmap;
      compress(source, outputId);
    })(mindmap);
    (function (usecae) {
      var outputId = 'usecae-im';
      var source = usecae;
      compress(source, outputId);
    })(usecase);
    (function (ui) {
      var outputId = 'ui-im';
      var source = ui;
      compress(source, outputId);
    })(ui);
    (function (uiModel) {
      var outputId = 'ui-model-im';
      var source = uiModel;
      compress(source, outputId);
    })(uiModel);
    (function (uiInteraction) {
      var outputId = 'ui-interaction-im';
      var source = uiInteraction;
      compress(source, outputId);
    })(uiInteraction);
  } else if (mode === style.API) {
    (function (mindmap) {
      var outputId = 'mindmap-im';
      var source = mindmap;
      compress(source, outputId);
    })(mindmap);
    (function (usecae) {
      var outputId = 'usecae-im';
      var source = usecae;
      compress(source, outputId);
    })(usecase);
    (function (uml) {
      var outputId = 'class-im';
      var source = uml;
      compress(source, outputId);
    })(uml);
    (function (erd) {
      var outputId = 'er-im';
      var source = erd;
      compress(source, outputId);
    })(erd);
  } else if (mode === style.DOC) {
    (function (mindmap) {
      var outputId = 'mindmap-im';
      var source = mindmap;
      compress(source, outputId);
    })(mindmap);
  } else {
    (function (mindmap) {
      var outputId = 'mindmap-im';
      var source = mindmap;
      compress(source, outputId);
    })(mindmap);
    (function (usecae) {
      var outputId = 'usecae-im';
      var source = usecae;
      compress(source, outputId);
    })(usecase);
    (function (ui) {
      var outputId = 'ui-im';
      var source = ui;
      compress(source, outputId);
    })(ui);
    (function (uiModel) {
      var outputId = 'ui-model-im';
      var source = uiModel;
      compress(source, outputId);
    })(uiModel);
    (function (uiInteraction) {
      var outputId = 'ui-interaction-im';
      var source = uiInteraction;
      compress(source, outputId);
    })(uiInteraction);
    (function (uml) {
      var outputId = 'class-im';
      var source = uml;
      compress(source, outputId);
    })(uml);
    (function (erd) {
      var outputId = 'er-im';
      var source = erd;
      compress(source, outputId);
    })(erd);
  }
  function encode64(data) {
    var r = '';
    for (var i = 0; i < data.length; i += 3) {
      if (i + 2 == data.length) {
        r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), 0);
      } else if (i + 1 == data.length) {
        r += append3bytes(data.charCodeAt(i), 0, 0);
      } else {
        r += append3bytes(data.charCodeAt(i), data.charCodeAt(i + 1), data.charCodeAt(i + 2));
      }
    }
    return r;
  }
  function append3bytes(b1, b2, b3) {
    var c1 = b1 >> 2;
    var c2 = (b1 & 0x3) << 4 | b2 >> 4;
    var c3 = (b2 & 0xf) << 2 | b3 >> 6;
    var c4 = b3 & 0x3f;
    var r = '';
    r += encode6bit(c1 & 0x3f);
    r += encode6bit(c2 & 0x3f);
    r += encode6bit(c3 & 0x3f);
    r += encode6bit(c4 & 0x3f);
    return r;
  }
  function encode6bit(b) {
    if (b < 10) {
      return String.fromCharCode(48 + b);
    }
    b -= 10;
    if (b < 26) {
      return String.fromCharCode(65 + b);
    }
    b -= 26;
    if (b < 26) {
      return String.fromCharCode(97 + b);
    }
    b -= 26;
    if (b == 0) {
      return '-';
    }
    if (b == 1) {
      return '_';
    }
    return '?';
  }
  var deflater = window.SharedWorker && new SharedWorker('rawdeflate.js');
  if (deflater) {
    deflater.port.addEventListener('message', done_deflating, false);
    deflater.port.start();
  } else if (window.Worker) {
    deflater = new Worker('rawdeflate.js');
    deflater.onmessage = done_deflating;
  }
  function done_deflating(e, id) {
    document.getElementById(id).src = 'http://www.plantuml.com/plantuml/img/' + encode64(e.data);
  }
  function compress(s, id) {
    //UTF8
    s = unescape(encodeURIComponent(s));
    if (deflater) {
      if (deflater.port && deflater.port.postMessage) {
        deflater.port.postMessage(s);
      } else {
        deflater.postMessage(s);
      }
    } else {
      setTimeout(function () {
        done_deflating({
          data: deflate(s)
        }, id);
      }, 100);
    }
  }
};

// if run as a web worker, respond to messages by deflating them
var deflate = function () {
  /* Copyright (C) 1999 Masanao Izumo <iz@onicos.co.jp>
   * Version: 1.0.1
   * LastModified: Dec 25 1999
   */

  /* Interface:
   * data = deflate(src);
   */

  /* constant parameters */
  var zip_WSIZE = 32768; // Sliding Window size
  var zip_STORED_BLOCK = 0;
  var zip_STATIC_TREES = 1;
  var zip_DYN_TREES = 2;

  /* for deflate */
  var zip_DEFAULT_LEVEL = 6;
  var zip_FULL_SEARCH = true;
  var zip_INBUFSIZ = 32768; // Input buffer size
  var zip_INBUF_EXTRA = 64; // Extra buffer
  var zip_OUTBUFSIZ = 1024 * 8;
  var zip_window_size = 2 * zip_WSIZE;
  var zip_MIN_MATCH = 3;
  var zip_MAX_MATCH = 258;
  var zip_BITS = 16;
  // for SMALL_MEM
  var zip_LIT_BUFSIZE = 0x2000;
  var zip_HASH_BITS = 13;
  // for MEDIUM_MEM
  // var zip_LIT_BUFSIZE = 0x4000;
  // var zip_HASH_BITS = 14;
  // for BIG_MEM
  // var zip_LIT_BUFSIZE = 0x8000;
  // var zip_HASH_BITS = 15;
  //if(zip_LIT_BUFSIZE > zip_INBUFSIZ)
  //    alert("error: zip_INBUFSIZ is too small");
  //if((zip_WSIZE<<1) > (1<<zip_BITS))
  //    alert("error: zip_WSIZE is too large");
  //if(zip_HASH_BITS > zip_BITS-1)
  //    alert("error: zip_HASH_BITS is too large");
  //if(zip_HASH_BITS < 8 || zip_MAX_MATCH != 258)
  //    alert("error: Code too clever");
  var zip_DIST_BUFSIZE = zip_LIT_BUFSIZE;
  var zip_HASH_SIZE = 1 << zip_HASH_BITS;
  var zip_HASH_MASK = zip_HASH_SIZE - 1;
  var zip_WMASK = zip_WSIZE - 1;
  var zip_NIL = 0; // Tail of hash chains
  var zip_TOO_FAR = 4096;
  var zip_MIN_LOOKAHEAD = zip_MAX_MATCH + zip_MIN_MATCH + 1;
  var zip_MAX_DIST = zip_WSIZE - zip_MIN_LOOKAHEAD;
  var zip_SMALLEST = 1;
  var zip_MAX_BITS = 15;
  var zip_MAX_BL_BITS = 7;
  var zip_LENGTH_CODES = 29;
  var zip_LITERALS = 256;
  var zip_END_BLOCK = 256;
  var zip_L_CODES = zip_LITERALS + 1 + zip_LENGTH_CODES;
  var zip_D_CODES = 30;
  var zip_BL_CODES = 19;
  var zip_REP_3_6 = 16;
  var zip_REPZ_3_10 = 17;
  var zip_REPZ_11_138 = 18;
  var zip_HEAP_SIZE = 2 * zip_L_CODES + 1;
  var zip_H_SHIFT = parseInt((zip_HASH_BITS + zip_MIN_MATCH - 1) / zip_MIN_MATCH);

  /* variables */
  var zip_free_queue;
  var zip_qhead, zip_qtail;
  var zip_initflag;
  var zip_outbuf = null;
  var zip_outcnt, zip_outoff;
  var zip_complete;
  var zip_window;
  var zip_d_buf;
  var zip_l_buf;
  var zip_prev;
  var zip_bi_buf;
  var zip_bi_valid;
  var zip_block_start;
  var zip_ins_h;
  var zip_hash_head;
  var zip_prev_match;
  var zip_match_available;
  var zip_match_length;
  var zip_prev_length;
  var zip_strstart;
  var zip_match_start;
  var zip_eofile;
  var zip_lookahead;
  var zip_max_chain_length;
  var zip_max_lazy_match;
  var zip_compr_level;
  var zip_good_match;
  var zip_nice_match;
  var zip_dyn_ltree;
  var zip_dyn_dtree;
  var zip_static_ltree;
  var zip_static_dtree;
  var zip_bl_tree;
  var zip_l_desc;
  var zip_d_desc;
  var zip_bl_desc;
  var zip_bl_count;
  var zip_heap;
  var zip_heap_len;
  var zip_heap_max;
  var zip_depth;
  var zip_length_code;
  var zip_dist_code;
  var zip_base_length;
  var zip_base_dist;
  var zip_flag_buf;
  var zip_last_lit;
  var zip_last_dist;
  var zip_last_flags;
  var zip_flags;
  var zip_flag_bit;
  var zip_opt_len;
  var zip_static_len;
  var zip_deflate_data;
  var zip_deflate_pos;

  /* objects (deflate) */

  function zip_DeflateCT() {
    this.fc = 0; // frequency count or bit string
    this.dl = 0; // father node in Huffman tree or length of bit string
  }
  function zip_DeflateTreeDesc() {
    this.dyn_tree = null; // the dynamic tree
    this.static_tree = null; // corresponding static tree or NULL
    this.extra_bits = null; // extra bits for each code or NULL
    this.extra_base = 0; // base index for extra_bits
    this.elems = 0; // max number of elements in the tree
    this.max_length = 0; // max bit length for the codes
    this.max_code = 0; // largest code with non zero frequency
  }

  /* Values for max_lazy_match, good_match and max_chain_length, depending on
   * the desired pack level (0..9). The values given below have been tuned to
   * exclude worst case performance for pathological files. Better values may be
   * found for specific files.
   */
  function zip_DeflateConfiguration(a, b, c, d) {
    this.good_length = a; // reduce lazy search above this match length
    this.max_lazy = b; // do not perform lazy search above this match length
    this.nice_length = c; // quit search above this match length
    this.max_chain = d;
  }
  function zip_DeflateBuffer() {
    this.next = null;
    this.len = 0;
    this.ptr = new Array(zip_OUTBUFSIZ);
    this.off = 0;
  }

  /* constant tables */
  var zip_extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  var zip_extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  var zip_extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
  var zip_bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
  var zip_configuration_table = [new zip_DeflateConfiguration(0, 0, 0, 0), new zip_DeflateConfiguration(4, 4, 8, 4), new zip_DeflateConfiguration(4, 5, 16, 8), new zip_DeflateConfiguration(4, 6, 32, 32), new zip_DeflateConfiguration(4, 4, 16, 16), new zip_DeflateConfiguration(8, 16, 32, 32), new zip_DeflateConfiguration(8, 16, 128, 128), new zip_DeflateConfiguration(8, 32, 128, 256), new zip_DeflateConfiguration(32, 128, 258, 1024), new zip_DeflateConfiguration(32, 258, 258, 4096)];

  /* routines (deflate) */

  function zip_deflate_start(level) {
    var i;
    if (!level) level = zip_DEFAULT_LEVEL;else if (level < 1) level = 1;else if (level > 9) level = 9;
    zip_compr_level = level;
    zip_initflag = false;
    zip_eofile = false;
    if (zip_outbuf != null) return;
    zip_free_queue = zip_qhead = zip_qtail = null;
    zip_outbuf = new Array(zip_OUTBUFSIZ);
    zip_window = new Array(zip_window_size);
    zip_d_buf = new Array(zip_DIST_BUFSIZE);
    zip_l_buf = new Array(zip_INBUFSIZ + zip_INBUF_EXTRA);
    zip_prev = new Array(1 << zip_BITS);
    zip_dyn_ltree = new Array(zip_HEAP_SIZE);
    for (i = 0; i < zip_HEAP_SIZE; i++) zip_dyn_ltree[i] = new zip_DeflateCT();
    zip_dyn_dtree = new Array(2 * zip_D_CODES + 1);
    for (i = 0; i < 2 * zip_D_CODES + 1; i++) zip_dyn_dtree[i] = new zip_DeflateCT();
    zip_static_ltree = new Array(zip_L_CODES + 2);
    for (i = 0; i < zip_L_CODES + 2; i++) zip_static_ltree[i] = new zip_DeflateCT();
    zip_static_dtree = new Array(zip_D_CODES);
    for (i = 0; i < zip_D_CODES; i++) zip_static_dtree[i] = new zip_DeflateCT();
    zip_bl_tree = new Array(2 * zip_BL_CODES + 1);
    for (i = 0; i < 2 * zip_BL_CODES + 1; i++) zip_bl_tree[i] = new zip_DeflateCT();
    zip_l_desc = new zip_DeflateTreeDesc();
    zip_d_desc = new zip_DeflateTreeDesc();
    zip_bl_desc = new zip_DeflateTreeDesc();
    zip_bl_count = new Array(zip_MAX_BITS + 1);
    zip_heap = new Array(2 * zip_L_CODES + 1);
    zip_depth = new Array(2 * zip_L_CODES + 1);
    zip_length_code = new Array(zip_MAX_MATCH - zip_MIN_MATCH + 1);
    zip_dist_code = new Array(512);
    zip_base_length = new Array(zip_LENGTH_CODES);
    zip_base_dist = new Array(zip_D_CODES);
    zip_flag_buf = new Array(parseInt(zip_LIT_BUFSIZE / 8));
  }
  function zip_deflate_end() {
    zip_free_queue = zip_qhead = zip_qtail = null;
    zip_outbuf = null;
    zip_window = null;
    zip_d_buf = null;
    zip_l_buf = null;
    zip_prev = null;
    zip_dyn_ltree = null;
    zip_dyn_dtree = null;
    zip_static_ltree = null;
    zip_static_dtree = null;
    zip_bl_tree = null;
    zip_l_desc = null;
    zip_d_desc = null;
    zip_bl_desc = null;
    zip_bl_count = null;
    zip_heap = null;
    zip_depth = null;
    zip_length_code = null;
    zip_dist_code = null;
    zip_base_length = null;
    zip_base_dist = null;
    zip_flag_buf = null;
  }
  function zip_reuse_queue(p) {
    p.next = zip_free_queue;
    zip_free_queue = p;
  }
  function zip_new_queue() {
    var p;
    if (zip_free_queue != null) {
      p = zip_free_queue;
      zip_free_queue = zip_free_queue.next;
    } else p = new zip_DeflateBuffer();
    p.next = null;
    p.len = p.off = 0;
    return p;
  }
  function zip_head1(i) {
    return zip_prev[zip_WSIZE + i];
  }
  function zip_head2(i, val) {
    return zip_prev[zip_WSIZE + i] = val;
  }

  /* put_byte is used for the compressed output, put_ubyte for the
   * uncompressed output. However unlzw() uses window for its
   * suffix table instead of its output buffer, so it does not use put_ubyte
   * (to be cleaned up).
   */
  function zip_put_byte(c) {
    zip_outbuf[zip_outoff + zip_outcnt++] = c;
    if (zip_outoff + zip_outcnt == zip_OUTBUFSIZ) zip_qoutbuf();
  }

  /* Output a 16 bit value, lsb first */
  function zip_put_short(w) {
    w &= 0xffff;
    if (zip_outoff + zip_outcnt < zip_OUTBUFSIZ - 2) {
      zip_outbuf[zip_outoff + zip_outcnt++] = w & 0xff;
      zip_outbuf[zip_outoff + zip_outcnt++] = w >>> 8;
    } else {
      zip_put_byte(w & 0xff);
      zip_put_byte(w >>> 8);
    }
  }

  /* ==========================================================================
   * Insert string s in the dictionary and set match_head to the previous head
   * of the hash chain (the most recent string with same hash key). Return
   * the previous length of the hash chain.
   * IN  assertion: all calls to to INSERT_STRING are made with consecutive
   *    input characters and the first MIN_MATCH bytes of s are valid
   *    (except for the last MIN_MATCH-1 bytes of the input file).
   */
  function zip_INSERT_STRING() {
    zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[zip_strstart + zip_MIN_MATCH - 1] & 0xff) & zip_HASH_MASK;
    zip_hash_head = zip_head1(zip_ins_h);
    zip_prev[zip_strstart & zip_WMASK] = zip_hash_head;
    zip_head2(zip_ins_h, zip_strstart);
  }

  /* Send a code of the given tree. c and tree must not have side effects */
  function zip_SEND_CODE(c, tree) {
    zip_send_bits(tree[c].fc, tree[c].dl);
  }

  /* Mapping from a distance to a distance code. dist is the distance - 1 and
   * must not have side effects. dist_code[256] and dist_code[257] are never
   * used.
   */
  function zip_D_CODE(dist) {
    return (dist < 256 ? zip_dist_code[dist] : zip_dist_code[256 + (dist >> 7)]) & 0xff;
  }

  /* ==========================================================================
   * Compares to subtrees, using the tree depth as tie breaker when
   * the subtrees have equal frequency. This minimizes the worst case length.
   */
  function zip_SMALLER(tree, n, m) {
    return tree[n].fc < tree[m].fc || tree[n].fc == tree[m].fc && zip_depth[n] <= zip_depth[m];
  }

  /* ==========================================================================
   * read string data
   */
  function zip_read_buff(buff, offset, n) {
    var i;
    for (i = 0; i < n && zip_deflate_pos < zip_deflate_data.length; i++) buff[offset + i] = zip_deflate_data.charCodeAt(zip_deflate_pos++) & 0xff;
    return i;
  }

  /* ==========================================================================
   * Initialize the "longest match" routines for a new file
   */
  function zip_lm_init() {
    var j;

    /* Initialize the hash table. */
    for (j = 0; j < zip_HASH_SIZE; j++)
    //	zip_head2(j, zip_NIL);
    zip_prev[zip_WSIZE + j] = 0;
    /* prev will be initialized on the fly */

    /* Set the default configuration parameters:
     */
    zip_max_lazy_match = zip_configuration_table[zip_compr_level].max_lazy;
    zip_good_match = zip_configuration_table[zip_compr_level].good_length;
    if (!zip_FULL_SEARCH) zip_nice_match = zip_configuration_table[zip_compr_level].nice_length;
    zip_max_chain_length = zip_configuration_table[zip_compr_level].max_chain;
    zip_strstart = 0;
    zip_block_start = 0;
    zip_lookahead = zip_read_buff(zip_window, 0, 2 * zip_WSIZE);
    if (zip_lookahead <= 0) {
      zip_eofile = true;
      zip_lookahead = 0;
      return;
    }
    zip_eofile = false;
    /* Make sure that we always have enough lookahead. This is important
     * if input comes from a device such as a tty.
     */
    while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();

    /* If lookahead < MIN_MATCH, ins_h is garbage, but this is
     * not important since only literal bytes will be emitted.
     */
    zip_ins_h = 0;
    for (j = 0; j < zip_MIN_MATCH - 1; j++) {
      //      UPDATE_HASH(ins_h, window[j]);
      zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[j] & 0xff) & zip_HASH_MASK;
    }
  }

  /* ==========================================================================
   * Set match_start to the longest match starting at the given string and
   * return its length. Matches shorter or equal to prev_length are discarded,
   * in which case the result is equal to prev_length and match_start is
   * garbage.
   * IN assertions: cur_match is the head of the hash chain for the current
   *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
   */
  function zip_longest_match(cur_match) {
    var chain_length = zip_max_chain_length; // max hash chain length
    var scanp = zip_strstart; // current string
    var matchp; // matched string
    var len; // length of current match
    var best_len = zip_prev_length; // best match length so far

    /* Stop when cur_match becomes <= limit. To simplify the code,
     * we prevent matches with the string of window index 0.
     */
    var limit = zip_strstart > zip_MAX_DIST ? zip_strstart - zip_MAX_DIST : zip_NIL;
    var strendp = zip_strstart + zip_MAX_MATCH;
    var scan_end1 = zip_window[scanp + best_len - 1];
    var scan_end = zip_window[scanp + best_len];

    /* Do not waste too much time if we already have a good match: */
    if (zip_prev_length >= zip_good_match) chain_length >>= 2;

    //  Assert(encoder->strstart <= window_size-MIN_LOOKAHEAD, "insufficient lookahead");

    do {
      //    Assert(cur_match < encoder->strstart, "no future");
      matchp = cur_match;

      /* Skip to next match if the match length cannot increase
       * or if the match length is less than 2:
       */
      if (zip_window[matchp + best_len] != scan_end || zip_window[matchp + best_len - 1] != scan_end1 || zip_window[matchp] != zip_window[scanp] || zip_window[++matchp] != zip_window[scanp + 1]) {
        continue;
      }

      /* The check at best_len-1 can be removed because it will be made
       * again later. (This heuristic is not always a win.)
       * It is not necessary to compare scan[2] and match[2] since they
       * are always equal when the other bytes match, given that
       * the hash keys are equal and that HASH_BITS >= 8.
       */
      scanp += 2;
      matchp++;

      /* We check for insufficient lookahead only every 8th comparison;
       * the 256th check will be made at strstart+258.
       */
      do {} while (zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && zip_window[++scanp] == zip_window[++matchp] && scanp < strendp);
      len = zip_MAX_MATCH - (strendp - scanp);
      scanp = strendp - zip_MAX_MATCH;
      if (len > best_len) {
        zip_match_start = cur_match;
        best_len = len;
        if (zip_FULL_SEARCH) {
          if (len >= zip_MAX_MATCH) break;
        } else {
          if (len >= zip_nice_match) break;
        }
        scan_end1 = zip_window[scanp + best_len - 1];
        scan_end = zip_window[scanp + best_len];
      }
    } while ((cur_match = zip_prev[cur_match & zip_WMASK]) > limit && --chain_length != 0);
    return best_len;
  }

  /* ==========================================================================
   * Fill the window when the lookahead becomes insufficient.
   * Updates strstart and lookahead, and sets eofile if end of input file.
   * IN assertion: lookahead < MIN_LOOKAHEAD && strstart + lookahead > 0
   * OUT assertions: at least one byte has been read, or eofile is set;
   *    file reads are performed for at least two bytes (required for the
   *    translate_eol option).
   */
  function zip_fill_window() {
    var n, m;

    // Amount of free space at the end of the window.
    var more = zip_window_size - zip_lookahead - zip_strstart;

    /* If the window is almost full and there is insufficient lookahead,
     * move the upper half to the lower one to make room in the upper half.
     */
    if (more == -1) {
      /* Very unlikely, but possible on 16 bit machine if strstart == 0
       * and lookahead == 1 (input done one byte at time)
       */
      more--;
    } else if (zip_strstart >= zip_WSIZE + zip_MAX_DIST) {
      /* By the IN assertion, the window is not empty so we can't confuse
       * more == 0 with more == 64K on a 16 bit machine.
       */
      //	Assert(window_size == (ulg)2*WSIZE, "no sliding with BIG_MEM");

      //	System.arraycopy(window, WSIZE, window, 0, WSIZE);
      for (n = 0; n < zip_WSIZE; n++) zip_window[n] = zip_window[n + zip_WSIZE];
      zip_match_start -= zip_WSIZE;
      zip_strstart -= zip_WSIZE; /* we now have strstart >= MAX_DIST: */
      zip_block_start -= zip_WSIZE;
      for (n = 0; n < zip_HASH_SIZE; n++) {
        m = zip_head1(n);
        zip_head2(n, m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL);
      }
      for (n = 0; n < zip_WSIZE; n++) {
        /* If n is not on any hash chain, prev[n] is garbage but
         * its value will never be used.
         */
        m = zip_prev[n];
        zip_prev[n] = m >= zip_WSIZE ? m - zip_WSIZE : zip_NIL;
      }
      more += zip_WSIZE;
    }
    // At this point, more >= 2
    if (!zip_eofile) {
      n = zip_read_buff(zip_window, zip_strstart + zip_lookahead, more);
      if (n <= 0) zip_eofile = true;else zip_lookahead += n;
    }
  }

  /* ==========================================================================
   * Processes a new input file and return its compressed length. This
   * function does not perform lazy evaluationof matches and inserts
   * new strings in the dictionary only for unmatched strings or for short
   * matches. It is used only for the fast compression options.
   */
  function zip_deflate_fast() {
    while (zip_lookahead != 0 && zip_qhead == null) {
      var flush; // set if current block must be flushed

      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */
      zip_INSERT_STRING();

      /* Find the longest match, discarding those <= prev_length.
       * At this point we have always match_length < MIN_MATCH
       */
      if (zip_hash_head != zip_NIL && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        zip_match_length = zip_longest_match(zip_hash_head);
        /* longest_match() sets match_start */
        if (zip_match_length > zip_lookahead) zip_match_length = zip_lookahead;
      }
      if (zip_match_length >= zip_MIN_MATCH) {
        //	    check_match(strstart, match_start, match_length);

        flush = zip_ct_tally(zip_strstart - zip_match_start, zip_match_length - zip_MIN_MATCH);
        zip_lookahead -= zip_match_length;

        /* Insert new strings in the hash table only if the match length
         * is not too large. This saves time but degrades compression.
         */
        if (zip_match_length <= zip_max_lazy_match) {
          zip_match_length--; // string at strstart already in hash table
          do {
            zip_strstart++;
            zip_INSERT_STRING();
            /* strstart never exceeds WSIZE-MAX_MATCH, so there are
             * always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
             * these bytes are garbage, but it does not matter since
             * the next lookahead bytes will be emitted as literals.
             */
          } while (--zip_match_length != 0);
          zip_strstart++;
        } else {
          zip_strstart += zip_match_length;
          zip_match_length = 0;
          zip_ins_h = zip_window[zip_strstart] & 0xff;
          //		UPDATE_HASH(ins_h, window[strstart + 1]);
          zip_ins_h = (zip_ins_h << zip_H_SHIFT ^ zip_window[zip_strstart + 1] & 0xff) & zip_HASH_MASK;

          //#if MIN_MATCH != 3
          //		Call UPDATE_HASH() MIN_MATCH-3 more times
          //#endif
        }
      } else {
        /* No match, output a literal byte */
        flush = zip_ct_tally(0, zip_window[zip_strstart] & 0xff);
        zip_lookahead--;
        zip_strstart++;
      }
      if (flush) {
        zip_flush_block(0);
        zip_block_start = zip_strstart;
      }

      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
    }
  }
  function zip_deflate_better() {
    /* Process the input block. */
    while (zip_lookahead != 0 && zip_qhead == null) {
      /* Insert the string window[strstart .. strstart+2] in the
       * dictionary, and set hash_head to the head of the hash chain:
       */
      zip_INSERT_STRING();

      /* Find the longest match, discarding those <= prev_length.
       */
      zip_prev_length = zip_match_length;
      zip_prev_match = zip_match_start;
      zip_match_length = zip_MIN_MATCH - 1;
      if (zip_hash_head != zip_NIL && zip_prev_length < zip_max_lazy_match && zip_strstart - zip_hash_head <= zip_MAX_DIST) {
        /* To simplify the code, we prevent matches with the string
         * of window index 0 (in particular we have to avoid a match
         * of the string with itself at the start of the input file).
         */
        zip_match_length = zip_longest_match(zip_hash_head);
        /* longest_match() sets match_start */
        if (zip_match_length > zip_lookahead) zip_match_length = zip_lookahead;

        /* Ignore a length 3 match if it is too distant: */
        if (zip_match_length == zip_MIN_MATCH && zip_strstart - zip_match_start > zip_TOO_FAR) {
          /* If prev_match is also MIN_MATCH, match_start is garbage
           * but we will ignore the current match anyway.
           */
          zip_match_length--;
        }
      }
      /* If there was a match at the previous step and the current
       * match is not better, output the previous match:
       */
      if (zip_prev_length >= zip_MIN_MATCH && zip_match_length <= zip_prev_length) {
        var flush; // set if current block must be flushed

        //	    check_match(strstart - 1, prev_match, prev_length);
        flush = zip_ct_tally(zip_strstart - 1 - zip_prev_match, zip_prev_length - zip_MIN_MATCH);

        /* Insert in hash table all strings up to the end of the match.
         * strstart-1 and strstart are already inserted.
         */
        zip_lookahead -= zip_prev_length - 1;
        zip_prev_length -= 2;
        do {
          zip_strstart++;
          zip_INSERT_STRING();
          /* strstart never exceeds WSIZE-MAX_MATCH, so there are
           * always MIN_MATCH bytes ahead. If lookahead < MIN_MATCH
           * these bytes are garbage, but it does not matter since the
           * next lookahead bytes will always be emitted as literals.
           */
        } while (--zip_prev_length != 0);
        zip_match_available = 0;
        zip_match_length = zip_MIN_MATCH - 1;
        zip_strstart++;
        if (flush) {
          zip_flush_block(0);
          zip_block_start = zip_strstart;
        }
      } else if (zip_match_available != 0) {
        /* If there was no match at the previous position, output a
         * single literal. If there was a match but the current match
         * is longer, truncate the previous match to a single literal.
         */
        if (zip_ct_tally(0, zip_window[zip_strstart - 1] & 0xff)) {
          zip_flush_block(0);
          zip_block_start = zip_strstart;
        }
        zip_strstart++;
        zip_lookahead--;
      } else {
        /* There is no previous match to compare with, wait for
         * the next step to decide.
         */
        zip_match_available = 1;
        zip_strstart++;
        zip_lookahead--;
      }

      /* Make sure that we always have enough lookahead, except
       * at the end of the input file. We need MAX_MATCH bytes
       * for the next match, plus MIN_MATCH bytes to insert the
       * string following the next match.
       */
      while (zip_lookahead < zip_MIN_LOOKAHEAD && !zip_eofile) zip_fill_window();
    }
  }
  function zip_init_deflate() {
    if (zip_eofile) return;
    zip_bi_buf = 0;
    zip_bi_valid = 0;
    zip_ct_init();
    zip_lm_init();
    zip_qhead = null;
    zip_outcnt = 0;
    zip_outoff = 0;
    if (zip_compr_level <= 3) {
      zip_prev_length = zip_MIN_MATCH - 1;
      zip_match_length = 0;
    } else {
      zip_match_length = zip_MIN_MATCH - 1;
      zip_match_available = 0;
    }
    zip_complete = false;
  }

  /* ==========================================================================
   * Same as above, but achieves better compression. We use a lazy
   * evaluation for matches: a match is finally adopted only if there is
   * no better match at the next window position.
   */
  function zip_deflate_internal(buff, off, buff_size) {
    var n;
    if (!zip_initflag) {
      zip_init_deflate();
      zip_initflag = true;
      if (zip_lookahead == 0) {
        // empty
        zip_complete = true;
        return 0;
      }
    }
    if ((n = zip_qcopy(buff, off, buff_size)) == buff_size) return buff_size;
    if (zip_complete) return n;
    if (zip_compr_level <= 3)
      // optimized for speed
      zip_deflate_fast();else zip_deflate_better();
    if (zip_lookahead == 0) {
      if (zip_match_available != 0) zip_ct_tally(0, zip_window[zip_strstart - 1] & 0xff);
      zip_flush_block(1);
      zip_complete = true;
    }
    return n + zip_qcopy(buff, n + off, buff_size - n);
  }
  function zip_qcopy(buff, off, buff_size) {
    var n, i, j;
    n = 0;
    while (zip_qhead != null && n < buff_size) {
      i = buff_size - n;
      if (i > zip_qhead.len) i = zip_qhead.len;
      //      System.arraycopy(qhead.ptr, qhead.off, buff, off + n, i);
      for (j = 0; j < i; j++) buff[off + n + j] = zip_qhead.ptr[zip_qhead.off + j];
      zip_qhead.off += i;
      zip_qhead.len -= i;
      n += i;
      if (zip_qhead.len == 0) {
        var p;
        p = zip_qhead;
        zip_qhead = zip_qhead.next;
        zip_reuse_queue(p);
      }
    }
    if (n == buff_size) return n;
    if (zip_outoff < zip_outcnt) {
      i = buff_size - n;
      if (i > zip_outcnt - zip_outoff) i = zip_outcnt - zip_outoff;
      // System.arraycopy(outbuf, outoff, buff, off + n, i);
      for (j = 0; j < i; j++) buff[off + n + j] = zip_outbuf[zip_outoff + j];
      zip_outoff += i;
      n += i;
      if (zip_outcnt == zip_outoff) zip_outcnt = zip_outoff = 0;
    }
    return n;
  }

  /* ==========================================================================
   * Allocate the match buffer, initialize the various tables and save the
   * location of the internal file attribute (ascii/binary) and method
   * (DEFLATE/STORE).
   */
  function zip_ct_init() {
    var n; // iterates over tree elements
    var bits; // bit counter
    var length; // length value
    var code; // code value
    var dist; // distance index

    if (zip_static_dtree[0].dl != 0) return; // ct_init already called

    zip_l_desc.dyn_tree = zip_dyn_ltree;
    zip_l_desc.static_tree = zip_static_ltree;
    zip_l_desc.extra_bits = zip_extra_lbits;
    zip_l_desc.extra_base = zip_LITERALS + 1;
    zip_l_desc.elems = zip_L_CODES;
    zip_l_desc.max_length = zip_MAX_BITS;
    zip_l_desc.max_code = 0;
    zip_d_desc.dyn_tree = zip_dyn_dtree;
    zip_d_desc.static_tree = zip_static_dtree;
    zip_d_desc.extra_bits = zip_extra_dbits;
    zip_d_desc.extra_base = 0;
    zip_d_desc.elems = zip_D_CODES;
    zip_d_desc.max_length = zip_MAX_BITS;
    zip_d_desc.max_code = 0;
    zip_bl_desc.dyn_tree = zip_bl_tree;
    zip_bl_desc.static_tree = null;
    zip_bl_desc.extra_bits = zip_extra_blbits;
    zip_bl_desc.extra_base = 0;
    zip_bl_desc.elems = zip_BL_CODES;
    zip_bl_desc.max_length = zip_MAX_BL_BITS;
    zip_bl_desc.max_code = 0;

    // Initialize the mapping length (0..255) -> length code (0..28)
    length = 0;
    for (code = 0; code < zip_LENGTH_CODES - 1; code++) {
      zip_base_length[code] = length;
      for (n = 0; n < 1 << zip_extra_lbits[code]; n++) zip_length_code[length++] = code;
    }
    // Assert (length == 256, "ct_init: length != 256");

    /* Note that the length 255 (match length 258) can be represented
     * in two different ways: code 284 + 5 bits or code 285, so we
     * overwrite length_code[255] to use the best encoding:
     */
    zip_length_code[length - 1] = code;

    /* Initialize the mapping dist (0..32K) -> dist code (0..29) */
    dist = 0;
    for (code = 0; code < 16; code++) {
      zip_base_dist[code] = dist;
      for (n = 0; n < 1 << zip_extra_dbits[code]; n++) {
        zip_dist_code[dist++] = code;
      }
    }
    // Assert (dist == 256, "ct_init: dist != 256");
    dist >>= 7; // from now on, all distances are divided by 128
    for (; code < zip_D_CODES; code++) {
      zip_base_dist[code] = dist << 7;
      for (n = 0; n < 1 << zip_extra_dbits[code] - 7; n++) zip_dist_code[256 + dist++] = code;
    }
    // Assert (dist == 256, "ct_init: 256+dist != 512");

    // Construct the codes of the static literal tree
    for (bits = 0; bits <= zip_MAX_BITS; bits++) zip_bl_count[bits] = 0;
    n = 0;
    while (n <= 143) {
      zip_static_ltree[n++].dl = 8;
      zip_bl_count[8]++;
    }
    while (n <= 255) {
      zip_static_ltree[n++].dl = 9;
      zip_bl_count[9]++;
    }
    while (n <= 279) {
      zip_static_ltree[n++].dl = 7;
      zip_bl_count[7]++;
    }
    while (n <= 287) {
      zip_static_ltree[n++].dl = 8;
      zip_bl_count[8]++;
    }
    /* Codes 286 and 287 do not exist, but we must include them in the
     * tree construction to get a canonical Huffman tree (longest code
     * all ones)
     */
    zip_gen_codes(zip_static_ltree, zip_L_CODES + 1);

    /* The static distance tree is trivial: */
    for (n = 0; n < zip_D_CODES; n++) {
      zip_static_dtree[n].dl = 5;
      zip_static_dtree[n].fc = zip_bi_reverse(n, 5);
    }

    // Initialize the first block of the first file:
    zip_init_block();
  }

  /* ==========================================================================
   * Initialize a new block.
   */
  function zip_init_block() {
    var n; // iterates over tree elements

    // Initialize the trees.
    for (n = 0; n < zip_L_CODES; n++) zip_dyn_ltree[n].fc = 0;
    for (n = 0; n < zip_D_CODES; n++) zip_dyn_dtree[n].fc = 0;
    for (n = 0; n < zip_BL_CODES; n++) zip_bl_tree[n].fc = 0;
    zip_dyn_ltree[zip_END_BLOCK].fc = 1;
    zip_opt_len = zip_static_len = 0;
    zip_last_lit = zip_last_dist = zip_last_flags = 0;
    zip_flags = 0;
    zip_flag_bit = 1;
  }

  /* ==========================================================================
   * Restore the heap property by moving down the tree starting at node k,
   * exchanging a node with the smallest of its two sons if necessary, stopping
   * when the heap property is re-established (each father smaller than its
   * two sons).
   */
  function zip_pqdownheap(tree,
  // the tree to restore
  k) {
    // node to move down
    var v = zip_heap[k];
    var j = k << 1; // left son of k

    while (j <= zip_heap_len) {
      // Set j to the smallest of the two sons:
      if (j < zip_heap_len && zip_SMALLER(tree, zip_heap[j + 1], zip_heap[j])) j++;

      // Exit if v is smaller than both sons
      if (zip_SMALLER(tree, v, zip_heap[j])) break;

      // Exchange v with the smallest son
      zip_heap[k] = zip_heap[j];
      k = j;

      // And continue down the tree, setting j to the left son of k
      j <<= 1;
    }
    zip_heap[k] = v;
  }

  /* ==========================================================================
   * Compute the optimal bit lengths for a tree and update the total bit length
   * for the current block.
   * IN assertion: the fields freq and dad are set, heap[heap_max] and
   *    above are the tree nodes sorted by increasing frequency.
   * OUT assertions: the field len is set to the optimal bit length, the
   *     array bl_count contains the frequencies for each bit length.
   *     The length opt_len is updated; static_len is also updated if stree is
   *     not null.
   */
  function zip_gen_bitlen(desc) {
    // the tree descriptor
    var tree = desc.dyn_tree;
    var extra = desc.extra_bits;
    var base = desc.extra_base;
    var max_code = desc.max_code;
    var max_length = desc.max_length;
    var stree = desc.static_tree;
    var h; // heap index
    var n, m; // iterate over the tree elements
    var bits; // bit length
    var xbits; // extra bits
    var f; // frequency
    var overflow = 0; // number of elements with bit length too large

    for (bits = 0; bits <= zip_MAX_BITS; bits++) zip_bl_count[bits] = 0;

    /* In a first pass, compute the optimal bit lengths (which may
     * overflow in the case of the bit length tree).
     */
    tree[zip_heap[zip_heap_max]].dl = 0; // root of the heap

    for (h = zip_heap_max + 1; h < zip_HEAP_SIZE; h++) {
      n = zip_heap[h];
      bits = tree[tree[n].dl].dl + 1;
      if (bits > max_length) {
        bits = max_length;
        overflow++;
      }
      tree[n].dl = bits;
      // We overwrite tree[n].dl which is no longer needed

      if (n > max_code) continue; // not a leaf node

      zip_bl_count[bits]++;
      xbits = 0;
      if (n >= base) xbits = extra[n - base];
      f = tree[n].fc;
      zip_opt_len += f * (bits + xbits);
      if (stree != null) zip_static_len += f * (stree[n].dl + xbits);
    }
    if (overflow == 0) return;

    // This happens for example on obj2 and pic of the Calgary corpus

    // Find the first bit length which could increase:
    do {
      bits = max_length - 1;
      while (zip_bl_count[bits] == 0) bits--;
      zip_bl_count[bits]--; // move one leaf down the tree
      zip_bl_count[bits + 1] += 2; // move one overflow item as its brother
      zip_bl_count[max_length]--;
      /* The brother of the overflow item also moves one step up,
       * but this does not affect bl_count[max_length]
       */
      overflow -= 2;
    } while (overflow > 0);

    /* Now recompute all bit lengths, scanning in increasing frequency.
     * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
     * lengths instead of fixing only the wrong ones. This idea is taken
     * from 'ar' written by Haruhiko Okumura.)
     */
    for (bits = max_length; bits != 0; bits--) {
      n = zip_bl_count[bits];
      while (n != 0) {
        m = zip_heap[--h];
        if (m > max_code) continue;
        if (tree[m].dl != bits) {
          zip_opt_len += (bits - tree[m].dl) * tree[m].fc;
          tree[m].fc = bits;
        }
        n--;
      }
    }
  }

  /* ==========================================================================
   * Generate the codes for a given tree and bit counts (which need not be
   * optimal).
   * IN assertion: the array bl_count contains the bit length statistics for
   * the given tree and the field len is set for all tree elements.
   * OUT assertion: the field code is set for all tree elements of non
   *     zero code length.
   */
  function zip_gen_codes(tree,
  // the tree to decorate
  max_code) {
    // largest code with non zero frequency
    var next_code = new Array(zip_MAX_BITS + 1); // next code value for each bit length
    var code = 0; // running code value
    var bits; // bit index
    var n; // code index

    /* The distribution counts are first used to generate the code values
     * without bit reversal.
     */
    for (bits = 1; bits <= zip_MAX_BITS; bits++) {
      code = code + zip_bl_count[bits - 1] << 1;
      next_code[bits] = code;
    }

    /* Check that the bit counts in bl_count are consistent. The last code
     * must be all ones.
     */
    //    Assert (code + encoder->bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
    //	    "inconsistent bit counts");
    //    Tracev((stderr,"\ngen_codes: max_code %d ", max_code));

    for (n = 0; n <= max_code; n++) {
      var len = tree[n].dl;
      if (len == 0) continue;
      // Now reverse the bits
      tree[n].fc = zip_bi_reverse(next_code[len]++, len);

      //      Tracec(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
      //	  n, (isgraph(n) ? n : ' '), len, tree[n].fc, next_code[len]-1));
    }
  }

  /* ==========================================================================
   * Construct one Huffman tree and assigns the code bit strings and lengths.
   * Update the total bit length for the current block.
   * IN assertion: the field freq is set for all tree elements.
   * OUT assertions: the fields len and code are set to the optimal bit length
   *     and corresponding code. The length opt_len is updated; static_len is
   *     also updated if stree is not null. The field max_code is set.
   */
  function zip_build_tree(desc) {
    // the tree descriptor
    var tree = desc.dyn_tree;
    var stree = desc.static_tree;
    var elems = desc.elems;
    var n, m; // iterate over heap elements
    var max_code = -1; // largest code with non zero frequency
    var node = elems; // next internal node of the tree

    /* Construct the initial heap, with least frequent element in
     * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
     * heap[0] is not used.
     */
    zip_heap_len = 0;
    zip_heap_max = zip_HEAP_SIZE;
    for (n = 0; n < elems; n++) {
      if (tree[n].fc != 0) {
        zip_heap[++zip_heap_len] = max_code = n;
        zip_depth[n] = 0;
      } else tree[n].dl = 0;
    }

    /* The pkzip format requires that at least one distance code exists,
     * and that at least one bit should be sent even if there is only one
     * possible code. So to avoid special checks later on we force at least
     * two codes of non zero frequency.
     */
    while (zip_heap_len < 2) {
      var xnew = zip_heap[++zip_heap_len] = max_code < 2 ? ++max_code : 0;
      tree[xnew].fc = 1;
      zip_depth[xnew] = 0;
      zip_opt_len--;
      if (stree != null) zip_static_len -= stree[xnew].dl;
      // new is 0 or 1 so it does not have extra bits
    }
    desc.max_code = max_code;

    /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
     * establish sub-heaps of increasing lengths:
     */
    for (n = zip_heap_len >> 1; n >= 1; n--) zip_pqdownheap(tree, n);

    /* Construct the Huffman tree by repeatedly combining the least two
     * frequent nodes.
     */
    do {
      n = zip_heap[zip_SMALLEST];
      zip_heap[zip_SMALLEST] = zip_heap[zip_heap_len--];
      zip_pqdownheap(tree, zip_SMALLEST);
      m = zip_heap[zip_SMALLEST]; // m = node of next least frequency

      // keep the nodes sorted by frequency
      zip_heap[--zip_heap_max] = n;
      zip_heap[--zip_heap_max] = m;

      // Create a new node father of n and m
      tree[node].fc = tree[n].fc + tree[m].fc;
      //	depth[node] = (char)(MAX(depth[n], depth[m]) + 1);
      if (zip_depth[n] > zip_depth[m] + 1) zip_depth[node] = zip_depth[n];else zip_depth[node] = zip_depth[m] + 1;
      tree[n].dl = tree[m].dl = node;

      // and insert the new node in the heap
      zip_heap[zip_SMALLEST] = node++;
      zip_pqdownheap(tree, zip_SMALLEST);
    } while (zip_heap_len >= 2);
    zip_heap[--zip_heap_max] = zip_heap[zip_SMALLEST];

    /* At this point, the fields freq and dad are set. We can now
     * generate the bit lengths.
     */
    zip_gen_bitlen(desc);

    // The field len is now set, we can generate the bit codes
    zip_gen_codes(tree, max_code);
  }

  /* ==========================================================================
   * Scan a literal or distance tree to determine the frequencies of the codes
   * in the bit length tree. Updates opt_len to take into account the repeat
   * counts. (The contribution of the bit length codes will be added later
   * during the construction of bl_tree.)
   */
  function zip_scan_tree(tree,
  // the tree to be scanned
  max_code) {
    // and its largest code of non zero frequency
    var n; // iterates over all tree elements
    var prevlen = -1; // last emitted length
    var curlen; // length of current code
    var nextlen = tree[0].dl; // length of next code
    var count = 0; // repeat count of the current code
    var max_count = 7; // max repeat count
    var min_count = 4; // min repeat count

    if (nextlen == 0) {
      max_count = 138;
      min_count = 3;
    }
    tree[max_code + 1].dl = 0xffff; // guard

    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[n + 1].dl;
      if (++count < max_count && curlen == nextlen) continue;else if (count < min_count) zip_bl_tree[curlen].fc += count;else if (curlen != 0) {
        if (curlen != prevlen) zip_bl_tree[curlen].fc++;
        zip_bl_tree[zip_REP_3_6].fc++;
      } else if (count <= 10) zip_bl_tree[zip_REPZ_3_10].fc++;else zip_bl_tree[zip_REPZ_11_138].fc++;
      count = 0;
      prevlen = curlen;
      if (nextlen == 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }

  /* ==========================================================================
   * Send a literal or distance tree in compressed form, using the codes in
   * bl_tree.
   */
  function zip_send_tree(tree,
  // the tree to be scanned
  max_code) {
    // and its largest code of non zero frequency
    var n; // iterates over all tree elements
    var prevlen = -1; // last emitted length
    var curlen; // length of current code
    var nextlen = tree[0].dl; // length of next code
    var count = 0; // repeat count of the current code
    var max_count = 7; // max repeat count
    var min_count = 4; /* guard already set */ // min repeat count

    /* tree[max_code+1].dl = -1; */
    if (nextlen == 0) {
      max_count = 138;
      min_count = 3;
    }
    for (n = 0; n <= max_code; n++) {
      curlen = nextlen;
      nextlen = tree[n + 1].dl;
      if (++count < max_count && curlen == nextlen) {
        continue;
      } else if (count < min_count) {
        do {
          zip_SEND_CODE(curlen, zip_bl_tree);
        } while (--count != 0);
      } else if (curlen != 0) {
        if (curlen != prevlen) {
          zip_SEND_CODE(curlen, zip_bl_tree);
          count--;
        }
        // Assert(count >= 3 && count <= 6, " 3_6?");
        zip_SEND_CODE(zip_REP_3_6, zip_bl_tree);
        zip_send_bits(count - 3, 2);
      } else if (count <= 10) {
        zip_SEND_CODE(zip_REPZ_3_10, zip_bl_tree);
        zip_send_bits(count - 3, 3);
      } else {
        zip_SEND_CODE(zip_REPZ_11_138, zip_bl_tree);
        zip_send_bits(count - 11, 7);
      }
      count = 0;
      prevlen = curlen;
      if (nextlen == 0) {
        max_count = 138;
        min_count = 3;
      } else if (curlen == nextlen) {
        max_count = 6;
        min_count = 3;
      } else {
        max_count = 7;
        min_count = 4;
      }
    }
  }

  /* ==========================================================================
   * Construct the Huffman tree for the bit lengths and return the index in
   * bl_order of the last bit length code to send.
   */
  function zip_build_bl_tree() {
    var max_blindex; // index of last bit length code of non zero freq

    // Determine the bit length frequencies for literal and distance trees
    zip_scan_tree(zip_dyn_ltree, zip_l_desc.max_code);
    zip_scan_tree(zip_dyn_dtree, zip_d_desc.max_code);

    // Build the bit length tree:
    zip_build_tree(zip_bl_desc);
    /* opt_len now includes the length of the tree representations, except
     * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
     */

    /* Determine the number of bit length codes to send. The pkzip format
     * requires that at least 4 bit length codes be sent. (appnote.txt says
     * 3 but the actual value used is 4.)
     */
    for (max_blindex = zip_BL_CODES - 1; max_blindex >= 3; max_blindex--) {
      if (zip_bl_tree[zip_bl_order[max_blindex]].dl != 0) break;
    }
    /* Update opt_len to include the bit length tree and counts */
    zip_opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
    //    Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
    //	    encoder->opt_len, encoder->static_len));

    return max_blindex;
  }

  /* ==========================================================================
   * Send the header for a block using dynamic Huffman trees: the counts, the
   * lengths of the bit length codes, the literal tree and the distance tree.
   * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
   */
  function zip_send_all_trees(lcodes, dcodes, blcodes) {
    // number of codes for each tree
    var rank; // index in bl_order

    //    Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
    //    Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
    //	    "too many codes");
    //    Tracev((stderr, "\nbl counts: "));
    zip_send_bits(lcodes - 257, 5); // not +255 as stated in appnote.txt
    zip_send_bits(dcodes - 1, 5);
    zip_send_bits(blcodes - 4, 4); // not -3 as stated in appnote.txt
    for (rank = 0; rank < blcodes; rank++) {
      //      Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
      zip_send_bits(zip_bl_tree[zip_bl_order[rank]].dl, 3);
    }

    // send the literal tree
    zip_send_tree(zip_dyn_ltree, lcodes - 1);

    // send the distance tree
    zip_send_tree(zip_dyn_dtree, dcodes - 1);
  }

  /* ==========================================================================
   * Determine the best encoding for the current block: dynamic trees, static
   * trees or store, and output the encoded block to the zip file.
   */
  function zip_flush_block(eof) {
    // true if this is the last block for a file
    var opt_lenb, static_lenb; // opt_len and static_len in bytes
    var max_blindex; // index of last bit length code of non zero freq
    var stored_len; // length of input block

    stored_len = zip_strstart - zip_block_start;
    zip_flag_buf[zip_last_flags] = zip_flags; // Save the flags for the last 8 items

    // Construct the literal and distance trees
    zip_build_tree(zip_l_desc);
    //    Tracev((stderr, "\nlit data: dyn %ld, stat %ld",
    //	    encoder->opt_len, encoder->static_len));

    zip_build_tree(zip_d_desc);
    //    Tracev((stderr, "\ndist data: dyn %ld, stat %ld",
    //	    encoder->opt_len, encoder->static_len));
    /* At this point, opt_len and static_len are the total bit lengths of
     * the compressed block data, excluding the tree representations.
     */

    /* Build the bit length tree for the above two trees, and get the index
     * in bl_order of the last bit length code to send.
     */
    max_blindex = zip_build_bl_tree();

    // Determine the best encoding. Compute first the block length in bytes
    opt_lenb = zip_opt_len + 3 + 7 >> 3;
    static_lenb = zip_static_len + 3 + 7 >> 3;

    //    Trace((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u dist %u ",
    //	   opt_lenb, encoder->opt_len,
    //	   static_lenb, encoder->static_len, stored_len,
    //	   encoder->last_lit, encoder->last_dist));

    if (static_lenb <= opt_lenb) opt_lenb = static_lenb;
    if (stored_len + 4 <= opt_lenb &&
    // 4: two words for the lengths
    zip_block_start >= 0) {
      var i;

      /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
       * Otherwise we can't have processed more than WSIZE input bytes since
       * the last block flush, because compression would have been
       * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
       * transform a block into a stored block.
       */
      zip_send_bits((zip_STORED_BLOCK << 1) + eof, 3); /* send block type */
      zip_bi_windup(); /* align on byte boundary */
      zip_put_short(stored_len);
      zip_put_short(~stored_len);

      // copy block
      /*
            p = &window[block_start];
            for(i = 0; i < stored_len; i++)
        put_byte(p[i]);
      */
      for (i = 0; i < stored_len; i++) zip_put_byte(zip_window[zip_block_start + i]);
    } else if (static_lenb == opt_lenb) {
      zip_send_bits((zip_STATIC_TREES << 1) + eof, 3);
      zip_compress_block(zip_static_ltree, zip_static_dtree);
    } else {
      zip_send_bits((zip_DYN_TREES << 1) + eof, 3);
      zip_send_all_trees(zip_l_desc.max_code + 1, zip_d_desc.max_code + 1, max_blindex + 1);
      zip_compress_block(zip_dyn_ltree, zip_dyn_dtree);
    }
    zip_init_block();
    if (eof != 0) zip_bi_windup();
  }

  /* ==========================================================================
   * Save the match info and tally the frequency counts. Return true if
   * the current block must be flushed.
   */
  function zip_ct_tally(dist,
  // distance of matched string
  lc) {
    // match length-MIN_MATCH or unmatched char (if dist==0)
    zip_l_buf[zip_last_lit++] = lc;
    if (dist == 0) {
      // lc is the unmatched char
      zip_dyn_ltree[lc].fc++;
    } else {
      // Here, lc is the match length - MIN_MATCH
      dist--; // dist = match distance - 1
      //      Assert((ush)dist < (ush)MAX_DIST &&
      //	     (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
      //	     (ush)D_CODE(dist) < (ush)D_CODES,  "ct_tally: bad match");

      zip_dyn_ltree[zip_length_code[lc] + zip_LITERALS + 1].fc++;
      zip_dyn_dtree[zip_D_CODE(dist)].fc++;
      zip_d_buf[zip_last_dist++] = dist;
      zip_flags |= zip_flag_bit;
    }
    zip_flag_bit <<= 1;

    // Output the flags if they fill a byte
    if ((zip_last_lit & 7) == 0) {
      zip_flag_buf[zip_last_flags++] = zip_flags;
      zip_flags = 0;
      zip_flag_bit = 1;
    }
    // Try to guess if it is profitable to stop the current block here
    if (zip_compr_level > 2 && (zip_last_lit & 0xfff) == 0) {
      // Compute an upper bound for the compressed length
      var out_length = zip_last_lit * 8;
      var in_length = zip_strstart - zip_block_start;
      var dcode;
      for (dcode = 0; dcode < zip_D_CODES; dcode++) {
        out_length += zip_dyn_dtree[dcode].fc * (5 + zip_extra_dbits[dcode]);
      }
      out_length >>= 3;
      //      Trace((stderr,"\nlast_lit %u, last_dist %u, in %ld, out ~%ld(%ld%%) ",
      //	     encoder->last_lit, encoder->last_dist, in_length, out_length,
      //	     100L - out_length*100L/in_length));
      if (zip_last_dist < parseInt(zip_last_lit / 2) && out_length < parseInt(in_length / 2)) return true;
    }
    return zip_last_lit == zip_LIT_BUFSIZE - 1 || zip_last_dist == zip_DIST_BUFSIZE;
    /* We avoid equality with LIT_BUFSIZE because of wraparound at 64K
     * on 16 bit machines and because stored blocks are restricted to
     * 64K-1 bytes.
     */
  }

  /* ==========================================================================
   * Send the block data compressed using the given Huffman trees
   */
  function zip_compress_block(ltree,
  // literal tree
  dtree) {
    // distance tree
    var dist; // distance of matched string
    var lc; // match length or unmatched char (if dist == 0)
    var lx = 0; // running index in l_buf
    var dx = 0; // running index in d_buf
    var fx = 0; // running index in flag_buf
    var flag = 0; // current flags
    var code; // the code to send
    var extra; // number of extra bits to send

    if (zip_last_lit != 0) do {
      if ((lx & 7) == 0) flag = zip_flag_buf[fx++];
      lc = zip_l_buf[lx++] & 0xff;
      if ((flag & 1) == 0) {
        zip_SEND_CODE(lc, ltree); /* send a literal byte */
        //	Tracecv(isgraph(lc), (stderr," '%c' ", lc));
      } else {
        // Here, lc is the match length - MIN_MATCH
        code = zip_length_code[lc];
        zip_SEND_CODE(code + zip_LITERALS + 1, ltree); // send the length code
        extra = zip_extra_lbits[code];
        if (extra != 0) {
          lc -= zip_base_length[code];
          zip_send_bits(lc, extra); // send the extra length bits
        }
        dist = zip_d_buf[dx++];
        // Here, dist is the match distance - 1
        code = zip_D_CODE(dist);
        //	Assert (code < D_CODES, "bad d_code");

        zip_SEND_CODE(code, dtree); // send the distance code
        extra = zip_extra_dbits[code];
        if (extra != 0) {
          dist -= zip_base_dist[code];
          zip_send_bits(dist, extra); // send the extra distance bits
        }
      } // literal or match pair ?
      flag >>= 1;
    } while (lx < zip_last_lit);
    zip_SEND_CODE(zip_END_BLOCK, ltree);
  }

  /* ==========================================================================
   * Send a value on a given number of bits.
   * IN assertion: length <= 16 and value fits in length bits.
   */
  var zip_Buf_size = 16; // bit size of bi_buf
  function zip_send_bits(value,
  // value to send
  length) {
    // number of bits
    /* If not enough room in bi_buf, use (valid) bits from bi_buf and
     * (16 - bi_valid) bits from value, leaving (width - (16-bi_valid))
     * unused bits in value.
     */
    if (zip_bi_valid > zip_Buf_size - length) {
      zip_bi_buf |= value << zip_bi_valid;
      zip_put_short(zip_bi_buf);
      zip_bi_buf = value >> zip_Buf_size - zip_bi_valid;
      zip_bi_valid += length - zip_Buf_size;
    } else {
      zip_bi_buf |= value << zip_bi_valid;
      zip_bi_valid += length;
    }
  }

  /* ==========================================================================
   * Reverse the first len bits of a code, using straightforward code (a faster
   * method would use a table)
   * IN assertion: 1 <= len <= 15
   */
  function zip_bi_reverse(code,
  // the value to invert
  len) {
    // its bit length
    var res = 0;
    do {
      res |= code & 1;
      code >>= 1;
      res <<= 1;
    } while (--len > 0);
    return res >> 1;
  }

  /* ==========================================================================
   * Write out any remaining bits in an incomplete byte.
   */
  function zip_bi_windup() {
    if (zip_bi_valid > 8) {
      zip_put_short(zip_bi_buf);
    } else if (zip_bi_valid > 0) {
      zip_put_byte(zip_bi_buf);
    }
    zip_bi_buf = 0;
    zip_bi_valid = 0;
  }
  function zip_qoutbuf() {
    if (zip_outcnt != 0) {
      var q, i;
      q = zip_new_queue();
      if (zip_qhead == null) zip_qhead = zip_qtail = q;else zip_qtail = zip_qtail.next = q;
      q.len = zip_outcnt - zip_outoff;
      //      System.arraycopy(zip_outbuf, zip_outoff, q.ptr, 0, q.len);
      for (i = 0; i < q.len; i++) q.ptr[i] = zip_outbuf[zip_outoff + i];
      zip_outcnt = zip_outoff = 0;
    }
  }
  return function deflate(str, level) {
    var i, j;
    zip_deflate_data = str;
    zip_deflate_pos = 0;
    if (typeof level == 'undefined') level = zip_DEFAULT_LEVEL;
    zip_deflate_start(level);
    var buff = new Array(1024);
    var aout = [];
    while ((i = zip_deflate_internal(buff, 0, buff.length)) > 0) {
      var cbuf = new Array(i);
      for (j = 0; j < i; j++) {
        cbuf[j] = String.fromCharCode(buff[j]);
      }
      aout[aout.length] = cbuf.join('');
    }
    zip_deflate_data = null; // G.C.
    return aout.join('');
  };
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/lib/marked.js ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2021, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

(function (global, factory) {
  ( false ? 0 : _typeof(exports)) === 'object' && "object" !== 'undefined' ? module.exports = factory() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (0);
})(this, function () {
  'use strict';

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    it = o[Symbol.iterator]();
    return it.next.bind(it);
  }
  function createCommonjsModule(fn) {
    var module = {
      exports: {}
    };
    return fn(module, module.exports), module.exports;
  }
  var defaults = createCommonjsModule(function (module) {
    function getDefaults() {
      return {
        baseUrl: null,
        breaks: false,
        gfm: true,
        headerIds: true,
        headerPrefix: '',
        highlight: null,
        langPrefix: 'language-',
        mangle: true,
        pedantic: false,
        renderer: null,
        sanitize: false,
        sanitizer: null,
        silent: false,
        smartLists: false,
        smartypants: false,
        tokenizer: null,
        walkTokens: null,
        xhtml: false
      };
    }
    function changeDefaults(newDefaults) {
      module.exports.defaults = newDefaults;
    }
    module.exports = {
      defaults: getDefaults(),
      getDefaults: getDefaults,
      changeDefaults: changeDefaults
    };
  });

  /**
   * Helpers
   */
  var escapeTest = /[&<>"']/;
  var escapeReplace = /[&<>"']/g;
  var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
  var escapeReplacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  var getEscapeReplacement = function getEscapeReplacement(ch) {
    return escapeReplacements[ch];
  };
  function escape(html, encode) {
    if (encode) {
      if (escapeTest.test(html)) {
        return html.replace(escapeReplace, getEscapeReplacement);
      }
    } else {
      if (escapeTestNoEncode.test(html)) {
        return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
      }
    }
    return html;
  }
  var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(unescapeTest, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';
      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }
      return '';
    });
  }
  var caret = /(^|[^\[])\^/g;
  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    var obj = {
      replace: function replace(name, val) {
        val = val.source || val;
        val = val.replace(caret, '$1');
        regex = regex.replace(name, val);
        return obj;
      },
      getRegex: function getRegex() {
        return new RegExp(regex, opt);
      }
    };
    return obj;
  }
  var nonWordAndColonTest = /[^\w:]/g;
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      var prot;
      try {
        prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
      } catch (e) {
        return null;
      }
      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }
    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }
    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }
    return href;
  }
  var baseUrls = {};
  var justDomain = /^[^:]+:\/*[^/]*$/;
  var protocol = /^([^:]+:)[\s\S]*$/;
  var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (justDomain.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }
    base = baseUrls[' ' + base];
    var relativeBase = base.indexOf(':') === -1;
    if (href.substring(0, 2) === '//') {
      if (relativeBase) {
        return href;
      }
      return base.replace(protocol, '$1') + href;
    } else if (href.charAt(0) === '/') {
      if (relativeBase) {
        return href;
      }
      return base.replace(domain, '$1') + href;
    } else {
      return base + href;
    }
  }
  var noopTest = {
    exec: function noopTest() {}
  };
  function merge(obj) {
    var i = 1,
      target,
      key;
    for (; i < arguments.length; i++) {
      target = arguments[i];
      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }
    return obj;
  }
  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
        var escaped = false,
          curr = offset;
        while (--curr >= 0 && str[curr] === '\\') {
          escaped = !escaped;
        }
        if (escaped) {
          // odd number of slashes means | is escaped
          // so we leave it alone
          return '|';
        } else {
          // add space before unescaped |
          return ' |';
        }
      }),
      cells = row.split(/ \|/);
    var i = 0;
    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) {
        cells.push('');
      }
    }
    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }
    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.

  function rtrim(str, c, invert) {
    var l = str.length;
    if (l === 0) {
      return '';
    } // Length of suffix matching the invert condition.

    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < l) {
      var currChar = str.charAt(l - suffLen - 1);
      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }
    return str.substr(0, l - suffLen);
  }
  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }
    var l = str.length;
    var level = 0,
      i = 0;
    for (; i < l; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;
        if (level < 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function checkSanitizeDeprecation(opt) {
    if (opt && opt.sanitize && !opt.silent) {
      console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
    }
  } // copied from https://stackoverflow.com/a/5450113/806777

  function repeatString(pattern, count) {
    if (count < 1) {
      return '';
    }
    var result = '';
    while (count > 1) {
      if (count & 1) {
        result += pattern;
      }
      count >>= 1;
      pattern += pattern;
    }
    return result + pattern;
  }
  var helpers = {
    escape: escape,
    unescape: unescape,
    edit: edit,
    cleanUrl: cleanUrl,
    resolveUrl: resolveUrl,
    noopTest: noopTest,
    merge: merge,
    splitCells: splitCells,
    rtrim: rtrim,
    findClosingBracket: findClosingBracket,
    checkSanitizeDeprecation: checkSanitizeDeprecation,
    repeatString: repeatString
  };
  var defaults$1 = defaults.defaults;
  var rtrim$1 = helpers.rtrim,
    splitCells$1 = helpers.splitCells,
    _escape = helpers.escape,
    findClosingBracket$1 = helpers.findClosingBracket;
  function outputLink(cap, link, raw) {
    var href = link.href;
    var title = link.title ? _escape(link.title) : null;
    var text = cap[1].replace(/\\([\[\]])/g, '$1');
    if (cap[0].charAt(0) !== '!') {
      return {
        type: 'link',
        raw: raw,
        href: href,
        title: title,
        text: text
      };
    } else {
      return {
        type: 'image',
        raw: raw,
        href: href,
        title: title,
        text: _escape(text)
      };
    }
  }
  function indentCodeCompensation(raw, text) {
    var matchIndentToCode = raw.match(/^(\s+)(?:```)/);
    if (matchIndentToCode === null) {
      return text;
    }
    var indentToCode = matchIndentToCode[1];
    return text.split('\n').map(function (node) {
      var matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }
      var indentInNode = matchIndentInNode[0];
      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }
      return node;
    }).join('\n');
  }
  /**
   * Tokenizer
   */

  var Tokenizer_1 = /*#__PURE__*/function () {
    function Tokenizer(options) {
      this.options = options || defaults$1;
    }
    var _proto = Tokenizer.prototype;
    _proto.space = function space(src) {
      var cap = this.rules.block.newline.exec(src);
      if (cap) {
        if (cap[0].length > 1) {
          return {
            type: 'space',
            raw: cap[0]
          };
        }
        return {
          raw: '\n'
        };
      }
    };
    _proto.code = function code(src, tokens) {
      var cap = this.rules.block.code.exec(src);
      if (cap) {
        var lastToken = tokens[tokens.length - 1]; // An indented code block cannot interrupt a paragraph.

        if (lastToken && lastToken.type === 'paragraph') {
          return {
            raw: cap[0],
            text: cap[0].trimRight()
          };
        }
        var text = cap[0].replace(/^ {1,4}/gm, '');
        return {
          type: 'code',
          raw: cap[0],
          codeBlockStyle: 'indented',
          text: !this.options.pedantic ? rtrim$1(text, '\n') : text
        };
      }
    };
    _proto.fences = function fences(src) {
      var cap = this.rules.block.fences.exec(src);
      if (cap) {
        var raw = cap[0];
        var text = indentCodeCompensation(raw, cap[3] || '');
        return {
          type: 'code',
          raw: raw,
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: text
        };
      }
    };
    _proto.heading = function heading(src) {
      var cap = this.rules.block.heading.exec(src);
      if (cap) {
        var text = cap[2].trim(); // remove trailing #s

        if (/#$/.test(text)) {
          var trimmed = rtrim$1(text, '#');
          if (this.options.pedantic) {
            text = trimmed.trim();
          } else if (!trimmed || / $/.test(trimmed)) {
            // CommonMark requires space before trailing #s
            text = trimmed.trim();
          }
        }
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[1].length,
          text: text
        };
      }
    };
    _proto.nptable = function nptable(src) {
      var cap = this.rules.block.nptable.exec(src);
      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : [],
          raw: cap[0]
        };
        if (item.header.length === item.align.length) {
          var l = item.align.length;
          var i;
          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }
          l = item.cells.length;
          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i], item.header.length);
          }
          return item;
        }
      }
    };
    _proto.hr = function hr(src) {
      var cap = this.rules.block.hr.exec(src);
      if (cap) {
        return {
          type: 'hr',
          raw: cap[0]
        };
      }
    };
    _proto.blockquote = function blockquote(src) {
      var cap = this.rules.block.blockquote.exec(src);
      if (cap) {
        var text = cap[0].replace(/^ *> ?/gm, '');
        return {
          type: 'blockquote',
          raw: cap[0],
          text: text
        };
      }
    };
    _proto.list = function list(src) {
      var cap = this.rules.block.list.exec(src);
      if (cap) {
        var raw = cap[0];
        var bull = cap[2];
        var isordered = bull.length > 1;
        var list = {
          type: 'list',
          raw: raw,
          ordered: isordered,
          start: isordered ? +bull.slice(0, -1) : '',
          loose: false,
          items: []
        }; // Get each top-level item.

        var itemMatch = cap[0].match(this.rules.block.item);
        var next = false,
          item,
          space,
          bcurr,
          bnext,
          addBack,
          loose,
          istask,
          ischecked;
        var l = itemMatch.length;
        bcurr = this.rules.block.listItemStart.exec(itemMatch[0]);
        for (var i = 0; i < l; i++) {
          item = itemMatch[i];
          raw = item; // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.

          if (i !== l - 1) {
            bnext = this.rules.block.listItemStart.exec(itemMatch[i + 1]);
            if (!this.options.pedantic ? bnext[1].length > bcurr[0].length || bnext[1].length > 3 : bnext[1].length > bcurr[1].length) {
              // nested list
              itemMatch.splice(i, 2, itemMatch[i] + '\n' + itemMatch[i + 1]);
              i--;
              l--;
              continue;
            } else {
              if (
              // different bullet style
              !this.options.pedantic || this.options.smartLists ? bnext[2][bnext[2].length - 1] !== bull[bull.length - 1] : isordered === (bnext[2].length === 1)) {
                addBack = itemMatch.slice(i + 1).join('\n');
                list.raw = list.raw.substring(0, list.raw.length - addBack.length);
                i = l - 1;
              }
            }
            bcurr = bnext;
          } // Remove the list item's bullet
          // so it is seen as the next token.

          space = item.length;
          item = item.replace(/^ *([*+-]|\d+[.)]) ?/, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.

          loose = next || /\n\n(?!\s*$)/.test(item);
          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }
          if (loose) {
            list.loose = true;
          } // Check for task list items

          if (this.options.gfm) {
            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;
            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }
          }
          list.items.push({
            type: 'list_item',
            raw: raw,
            task: istask,
            checked: ischecked,
            loose: loose,
            text: item
          });
        }
        return list;
      }
    };
    _proto.html = function html(src) {
      var cap = this.rules.block.html.exec(src);
      if (cap) {
        return {
          type: this.options.sanitize ? 'paragraph' : 'html',
          raw: cap[0],
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };
    _proto.def = function def(src) {
      var cap = this.rules.block.def.exec(src);
      if (cap) {
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        var tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
        return {
          tag: tag,
          raw: cap[0],
          href: cap[2],
          title: cap[3]
        };
      }
    };
    _proto.table = function table(src) {
      var cap = this.rules.block.table.exec(src);
      if (cap) {
        var item = {
          type: 'table',
          header: splitCells$1(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };
        if (item.header.length === item.align.length) {
          item.raw = cap[0];
          var l = item.align.length;
          var i;
          for (i = 0; i < l; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }
          l = item.cells.length;
          for (i = 0; i < l; i++) {
            item.cells[i] = splitCells$1(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }
          return item;
        }
      }
    };
    _proto.lheading = function lheading(src) {
      var cap = this.rules.block.lheading.exec(src);
      if (cap) {
        return {
          type: 'heading',
          raw: cap[0],
          depth: cap[2].charAt(0) === '=' ? 1 : 2,
          text: cap[1]
        };
      }
    };
    _proto.paragraph = function paragraph(src) {
      var cap = this.rules.block.paragraph.exec(src);
      if (cap) {
        return {
          type: 'paragraph',
          raw: cap[0],
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        };
      }
    };
    _proto.text = function text(src, tokens) {
      var cap = this.rules.block.text.exec(src);
      if (cap) {
        var lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          return {
            raw: cap[0],
            text: cap[0]
          };
        }
        return {
          type: 'text',
          raw: cap[0],
          text: cap[0]
        };
      }
    };
    _proto.escape = function escape(src) {
      var cap = this.rules.inline.escape.exec(src);
      if (cap) {
        return {
          type: 'escape',
          raw: cap[0],
          text: _escape(cap[1])
        };
      }
    };
    _proto.tag = function tag(src, inLink, inRawBlock) {
      var cap = this.rules.inline.tag.exec(src);
      if (cap) {
        if (!inLink && /^<a /i.test(cap[0])) {
          inLink = true;
        } else if (inLink && /^<\/a>/i.test(cap[0])) {
          inLink = false;
        }
        if (!inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = true;
        } else if (inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          inRawBlock = false;
        }
        return {
          type: this.options.sanitize ? 'text' : 'html',
          raw: cap[0],
          inLink: inLink,
          inRawBlock: inRawBlock,
          text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0]
        };
      }
    };
    _proto.link = function link(src) {
      var cap = this.rules.inline.link.exec(src);
      if (cap) {
        var trimmedUrl = cap[2].trim();
        if (!this.options.pedantic && /^</.test(trimmedUrl)) {
          // commonmark requires matching angle brackets
          if (!/>$/.test(trimmedUrl)) {
            return;
          } // ending angle bracket cannot be escaped

          var rtrimSlash = rtrim$1(trimmedUrl.slice(0, -1), '\\');
          if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
            return;
          }
        } else {
          // find closing parenthesis
          var lastParenIndex = findClosingBracket$1(cap[2], '()');
          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }
        }
        var href = cap[2];
        var title = '';
        if (this.options.pedantic) {
          // split pedantic href and title
          var link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
          if (link) {
            href = link[1];
            title = link[3];
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }
        href = href.trim();
        if (/^</.test(href)) {
          if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
            // pedantic allows starting angle bracket without ending angle bracket
            href = href.slice(1);
          } else {
            href = href.slice(1, -1);
          }
        }
        return outputLink(cap, {
          href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
          title: title ? title.replace(this.rules.inline._escapes, '$1') : title
        }, cap[0]);
      }
    };
    _proto.reflink = function reflink(src, links) {
      var cap;
      if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
        var link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = links[link.toLowerCase()];
        if (!link || !link.href) {
          var text = cap[0].charAt(0);
          return {
            type: 'text',
            raw: text,
            text: text
          };
        }
        return outputLink(cap, link, cap[0]);
      }
    };
    _proto.strong = function strong(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }
      var match = this.rules.inline.strong.start.exec(src);
      if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
        maskedSrc = maskedSrc.slice(-1 * src.length);
        var endReg = match[0] === '**' ? this.rules.inline.strong.endAst : this.rules.inline.strong.endUnd;
        endReg.lastIndex = 0;
        var cap;
        while ((match = endReg.exec(maskedSrc)) != null) {
          cap = this.rules.inline.strong.middle.exec(maskedSrc.slice(0, match.index + 3));
          if (cap) {
            return {
              type: 'strong',
              raw: src.slice(0, cap[0].length),
              text: src.slice(2, cap[0].length - 2)
            };
          }
        }
      }
    };
    _proto.em = function em(src, maskedSrc, prevChar) {
      if (prevChar === void 0) {
        prevChar = '';
      }
      var match = this.rules.inline.em.start.exec(src);
      if (match && (!match[1] || match[1] && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
        maskedSrc = maskedSrc.slice(-1 * src.length);
        var endReg = match[0] === '*' ? this.rules.inline.em.endAst : this.rules.inline.em.endUnd;
        endReg.lastIndex = 0;
        var cap;
        while ((match = endReg.exec(maskedSrc)) != null) {
          cap = this.rules.inline.em.middle.exec(maskedSrc.slice(0, match.index + 2));
          if (cap) {
            return {
              type: 'em',
              raw: src.slice(0, cap[0].length),
              text: src.slice(1, cap[0].length - 1)
            };
          }
        }
      }
    };
    _proto.codespan = function codespan(src) {
      var cap = this.rules.inline.code.exec(src);
      if (cap) {
        var text = cap[2].replace(/\n/g, ' ');
        var hasNonSpaceChars = /[^ ]/.test(text);
        var hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
        if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
          text = text.substring(1, text.length - 1);
        }
        text = _escape(text, true);
        return {
          type: 'codespan',
          raw: cap[0],
          text: text
        };
      }
    };
    _proto.br = function br(src) {
      var cap = this.rules.inline.br.exec(src);
      if (cap) {
        return {
          type: 'br',
          raw: cap[0]
        };
      }
    };
    _proto.del = function del(src) {
      var cap = this.rules.inline.del.exec(src);
      if (cap) {
        return {
          type: 'del',
          raw: cap[0],
          text: cap[2]
        };
      }
    };
    _proto.autolink = function autolink(src, mangle) {
      var cap = this.rules.inline.autolink.exec(src);
      if (cap) {
        var text, href;
        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
          href = 'mailto:' + text;
        } else {
          text = _escape(cap[1]);
          href = text;
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };
    _proto.url = function url(src, mangle) {
      var cap;
      if (cap = this.rules.inline.url.exec(src)) {
        var text, href;
        if (cap[2] === '@') {
          text = _escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          var prevCapZero;
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);
          text = _escape(cap[0]);
          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }
        return {
          type: 'link',
          raw: cap[0],
          text: text,
          href: href,
          tokens: [{
            type: 'text',
            raw: text,
            text: text
          }]
        };
      }
    };
    _proto.inlineText = function inlineText(src, inRawBlock, smartypants) {
      var cap = this.rules.inline.text.exec(src);
      if (cap) {
        var text;
        if (inRawBlock) {
          text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : _escape(cap[0]) : cap[0];
        } else {
          text = _escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
        }
        return {
          type: 'text',
          raw: cap[0],
          text: text
        };
      }
    };
    return Tokenizer;
  }();
  var noopTest$1 = helpers.noopTest,
    edit$1 = helpers.edit,
    merge$1 = helpers.merge;
  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: noopTest$1,
    table: noopTest$1,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    // regex template, placeholders will be replaced according to different paragraph
    // interruption rules of commonmark and the original markdown spec:
    _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit$1(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/;
  block.item = edit$1(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
  block.listItemStart = edit$1(/^( *)(bull)/).replace('bull', block.bullet).getRegex();
  block.list = edit$1(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
  block.html = edit$1(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit$1(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit$1(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block.normal = merge$1({}, block);
  /**
   * GFM Block Grammar
   */

  block.gfm = merge$1({}, block.normal, {
    nptable: '^ *([^|\\n ].*\\|.*)\\n' // Header
    + ' {0,3}([-:]+ *\\|[-| :]*)' // Align
    + '(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    // Cells
    table: '^ *\\|(.+)\\n' // Header
    + ' {0,3}\\|?( *[-:]+[-| :]*)' // Align
    + '(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
  });
  block.gfm.nptable = edit$1(block.gfm.nptable).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  block.gfm.table = edit$1(block.gfm.table).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} ').replace('blockquote', ' {0,3}>').replace('code', ' {4}[^\\n]').replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();
  /**
   * Pedantic grammar (original John Gruber's loose markdown specification)
   */

  block.pedantic = merge$1({}, block.normal, {
    html: edit$1('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
    heading: /^(#{1,6})(.*)(?:\n+|$)/,
    fences: noopTest$1,
    // fences not supported
    paragraph: edit$1(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
  });
  /**
   * Inline-Level Grammar
   */

  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noopTest$1,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    strong: {
      start: /^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,
      // (1) returns if starts w/ punctuation
      middle: /^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,
      endAst: /[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,
      // last char can't be punct, or final * must also be followed by punct (or endline)
      endUnd: /[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)
    },
    em: {
      start: /^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,
      // (1) returns if starts w/ punctuation
      middle: /^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,
      endAst: /[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,
      // last char can't be punct, or final * must also be followed by punct (or endline)
      endUnd: /[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/ // last char can't be a space, and final _ must preceed punct or \s (or endline)
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noopTest$1,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\s*punctuation])/
  }; // list of punctuation marks from common mark spec
  // without * and _ to workaround cases with double emphasis

  inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
  inline.punctuation = edit$1(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex(); // sequences em should skip over [title](link), `code`, <html>

  inline._blockSkip = '\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>';
  inline._overlapSkip = '__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*';
  inline._comment = edit$1(block._comment).replace('(?:-->|$)', '-->').getRegex();
  inline.em.start = edit$1(inline.em.start).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.em.middle = edit$1(inline.em.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
  inline.em.endAst = edit$1(inline.em.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.em.endUnd = edit$1(inline.em.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.start = edit$1(inline.strong.start).replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.middle = edit$1(inline.strong.middle).replace(/punctuation/g, inline._punctuation).replace(/overlapSkip/g, inline._overlapSkip).getRegex();
  inline.strong.endAst = edit$1(inline.strong.endAst, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.strong.endUnd = edit$1(inline.strong.endUnd, 'g').replace(/punctuation/g, inline._punctuation).getRegex();
  inline.blockSkip = edit$1(inline._blockSkip, 'g').getRegex();
  inline.overlapSkip = edit$1(inline._overlapSkip, 'g').getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit$1(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit$1(inline.tag).replace('comment', inline._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
  inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit$1(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit$1(inline.reflink).replace('label', inline._label).getRegex();
  inline.reflinkSearch = edit$1(inline.reflinkSearch, 'g').replace('reflink', inline.reflink).replace('nolink', inline.nolink).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline.normal = merge$1({}, inline);
  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge$1({}, inline.normal, {
    strong: {
      start: /^__|\*\*/,
      middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
      endAst: /\*\*(?!\*)/g,
      endUnd: /__(?!_)/g
    },
    em: {
      start: /^_|\*/,
      middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
      endAst: /\*(?!\*)/g,
      endUnd: /_(?!_)/g
    },
    link: edit$1(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit$1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge$1({}, inline.normal, {
    escape: edit$1(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
    text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });
  inline.gfm.url = edit$1(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge$1({}, inline.gfm, {
    br: edit$1(inline.br).replace('{2,}', '*').getRegex(),
    text: edit$1(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
  });
  var rules = {
    block: block,
    inline: inline
  };
  var defaults$2 = defaults.defaults;
  var block$1 = rules.block,
    inline$1 = rules.inline;
  var repeatString$1 = helpers.repeatString;
  /**
   * smartypants text replacement
   */

  function smartypants(text) {
    return text // em-dashes
    .replace(/---/g, "\u2014") // en-dashes
    .replace(/--/g, "\u2013") // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
    .replace(/'/g, "\u2019") // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
    .replace(/"/g, "\u201D") // ellipses
    .replace(/\.{3}/g, "\u2026");
  }
  /**
   * mangle email addresses
   */

  function mangle(text) {
    var out = '',
      i,
      ch;
    var l = text.length;
    for (i = 0; i < l; i++) {
      ch = text.charCodeAt(i);
      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }
      out += '&#' + ch + ';';
    }
    return out;
  }
  /**
   * Block Lexer
   */

  var Lexer_1 = /*#__PURE__*/function () {
    function Lexer(options) {
      this.tokens = [];
      this.tokens.links = Object.create(null);
      this.options = options || defaults$2;
      this.options.tokenizer = this.options.tokenizer || new Tokenizer_1();
      this.tokenizer = this.options.tokenizer;
      this.tokenizer.options = this.options;
      var rules = {
        block: block$1.normal,
        inline: inline$1.normal
      };
      if (this.options.pedantic) {
        rules.block = block$1.pedantic;
        rules.inline = inline$1.pedantic;
      } else if (this.options.gfm) {
        rules.block = block$1.gfm;
        if (this.options.breaks) {
          rules.inline = inline$1.breaks;
        } else {
          rules.inline = inline$1.gfm;
        }
      }
      this.tokenizer.rules = rules;
    }
    /**
     * Expose Rules
     */

    /**
     * Static Lex Method
     */
    Lexer.lex = function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
    /**
     * Static Lex Inline Method
     */;
    Lexer.lexInline = function lexInline(src, options) {
      var lexer = new Lexer(options);
      return lexer.inlineTokens(src);
    }
    /**
     * Preprocessing
     */;
    var _proto = Lexer.prototype;
    _proto.lex = function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      this.blockTokens(src, this.tokens, true);
      this.inline(this.tokens);
      return this.tokens;
    }
    /**
     * Lexing
     */;
    _proto.blockTokens = function blockTokens(src, tokens, top) {
      if (tokens === void 0) {
        tokens = [];
      }
      if (top === void 0) {
        top = true;
      }
      if (this.options.pedantic) {
        src = src.replace(/^ +$/gm, '');
      }
      var token, i, l, lastToken;
      while (src) {
        // newline
        if (token = this.tokenizer.space(src)) {
          src = src.substring(token.raw.length);
          if (token.type) {
            tokens.push(token);
          }
          continue;
        } // code

        if (token = this.tokenizer.code(src, tokens)) {
          src = src.substring(token.raw.length);
          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }
          continue;
        } // fences

        if (token = this.tokenizer.fences(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // heading

        if (token = this.tokenizer.heading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // table no leading pipe (gfm)

        if (token = this.tokenizer.nptable(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // hr

        if (token = this.tokenizer.hr(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // blockquote

        if (token = this.tokenizer.blockquote(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.blockTokens(token.text, [], top);
          tokens.push(token);
          continue;
        } // list

        if (token = this.tokenizer.list(src)) {
          src = src.substring(token.raw.length);
          l = token.items.length;
          for (i = 0; i < l; i++) {
            token.items[i].tokens = this.blockTokens(token.items[i].text, [], false);
          }
          tokens.push(token);
          continue;
        } // html

        if (token = this.tokenizer.html(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // def

        if (top && (token = this.tokenizer.def(src))) {
          src = src.substring(token.raw.length);
          if (!this.tokens.links[token.tag]) {
            this.tokens.links[token.tag] = {
              href: token.href,
              title: token.title
            };
          }
          continue;
        } // table (gfm)

        if (token = this.tokenizer.table(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // lheading

        if (token = this.tokenizer.lheading(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // top-level paragraph

        if (top && (token = this.tokenizer.paragraph(src))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text

        if (token = this.tokenizer.text(src, tokens)) {
          src = src.substring(token.raw.length);
          if (token.type) {
            tokens.push(token);
          } else {
            lastToken = tokens[tokens.length - 1];
            lastToken.raw += '\n' + token.raw;
            lastToken.text += '\n' + token.text;
          }
          continue;
        }
        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    };
    _proto.inline = function inline(tokens) {
      var i, j, k, l2, row, token;
      var l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];
        switch (token.type) {
          case 'paragraph':
          case 'text':
          case 'heading':
            {
              token.tokens = [];
              this.inlineTokens(token.text, token.tokens);
              break;
            }
          case 'table':
            {
              token.tokens = {
                header: [],
                cells: []
              }; // header

              l2 = token.header.length;
              for (j = 0; j < l2; j++) {
                token.tokens.header[j] = [];
                this.inlineTokens(token.header[j], token.tokens.header[j]);
              } // cells

              l2 = token.cells.length;
              for (j = 0; j < l2; j++) {
                row = token.cells[j];
                token.tokens.cells[j] = [];
                for (k = 0; k < row.length; k++) {
                  token.tokens.cells[j][k] = [];
                  this.inlineTokens(row[k], token.tokens.cells[j][k]);
                }
              }
              break;
            }
          case 'blockquote':
            {
              this.inline(token.tokens);
              break;
            }
          case 'list':
            {
              l2 = token.items.length;
              for (j = 0; j < l2; j++) {
                this.inline(token.items[j].tokens);
              }
              break;
            }
        }
      }
      return tokens;
    }
    /**
     * Lexing/Compiling
     */;
    _proto.inlineTokens = function inlineTokens(src, tokens, inLink, inRawBlock) {
      if (tokens === void 0) {
        tokens = [];
      }
      if (inLink === void 0) {
        inLink = false;
      }
      if (inRawBlock === void 0) {
        inRawBlock = false;
      }
      var token; // String with links masked to avoid interference with em and strong

      var maskedSrc = src;
      var match;
      var keepPrevChar, prevChar; // Mask out reflinks

      if (this.tokens.links) {
        var links = Object.keys(this.tokens.links);
        if (links.length > 0) {
          while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
            if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
              maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString$1('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
            }
          }
        }
      } // Mask out other blocks

      while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
        maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString$1('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
      }
      while (src) {
        if (!keepPrevChar) {
          prevChar = '';
        }
        keepPrevChar = false; // escape

        if (token = this.tokenizer.escape(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // tag

        if (token = this.tokenizer.tag(src, inLink, inRawBlock)) {
          src = src.substring(token.raw.length);
          inLink = token.inLink;
          inRawBlock = token.inRawBlock;
          tokens.push(token);
          continue;
        } // link

        if (token = this.tokenizer.link(src)) {
          src = src.substring(token.raw.length);
          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }
          tokens.push(token);
          continue;
        } // reflink, nolink

        if (token = this.tokenizer.reflink(src, this.tokens.links)) {
          src = src.substring(token.raw.length);
          if (token.type === 'link') {
            token.tokens = this.inlineTokens(token.text, [], true, inRawBlock);
          }
          tokens.push(token);
          continue;
        } // strong

        if (token = this.tokenizer.strong(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // em

        if (token = this.tokenizer.em(src, maskedSrc, prevChar)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // code

        if (token = this.tokenizer.codespan(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // br

        if (token = this.tokenizer.br(src)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // del (gfm)

        if (token = this.tokenizer.del(src)) {
          src = src.substring(token.raw.length);
          token.tokens = this.inlineTokens(token.text, [], inLink, inRawBlock);
          tokens.push(token);
          continue;
        } // autolink

        if (token = this.tokenizer.autolink(src, mangle)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // url (gfm)

        if (!inLink && (token = this.tokenizer.url(src, mangle))) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          continue;
        } // text

        if (token = this.tokenizer.inlineText(src, inRawBlock, smartypants)) {
          src = src.substring(token.raw.length);
          prevChar = token.raw.slice(-1);
          keepPrevChar = true;
          tokens.push(token);
          continue;
        }
        if (src) {
          var errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
          if (this.options.silent) {
            console.error(errMsg);
            break;
          } else {
            throw new Error(errMsg);
          }
        }
      }
      return tokens;
    };
    _createClass(Lexer, null, [{
      key: "rules",
      get: function get() {
        return {
          block: block$1,
          inline: inline$1
        };
      }
    }]);
    return Lexer;
  }();
  var defaults$3 = defaults.defaults;
  var cleanUrl$1 = helpers.cleanUrl,
    escape$1 = helpers.escape;
  /**
   * Renderer
   */

  var Renderer_1 = /*#__PURE__*/function () {
    function Renderer(options) {
      this.options = options || defaults$3;
    }
    var _proto = Renderer.prototype;
    _proto.code = function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];
      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);
        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }
      _code = _code.replace(/\n$/, '') + '\n';
      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
      }
      return '<pre><code class="' + this.options.langPrefix + escape$1(lang, true) + '">' + (escaped ? _code : escape$1(_code, true)) + '</code></pre>\n';
    };
    _proto.blockquote = function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    };
    _proto.html = function html(_html) {
      return _html;
    };
    _proto.heading = function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs

      return '<h' + level + '>' + text + '</h' + level + '>\n';
    };
    _proto.hr = function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    };
    _proto.list = function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    };
    _proto.listitem = function listitem(text) {
      return '<li>' + text + '</li>\n';
    };
    _proto.checkbox = function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    };
    _proto.paragraph = function paragraph(text) {
      return '<p>' + text + '</p>\n';
    };
    _proto.table = function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    };
    _proto.tablerow = function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    };
    _proto.tablecell = function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    } // span level renderer
    ;
    _proto.strong = function strong(text) {
      return '<strong>' + text + '</strong>';
    };
    _proto.em = function em(text) {
      return '<em>' + text + '</em>';
    };
    _proto.codespan = function codespan(text) {
      return '<code>' + text + '</code>';
    };
    _proto.br = function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    };
    _proto.del = function del(text) {
      return '<del>' + text + '</del>';
    };
    _proto.link = function link(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      var out = '<a href="' + escape$1(href) + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</a>';
      return out;
    };
    _proto.image = function image(href, title, text) {
      href = cleanUrl$1(this.options.sanitize, this.options.baseUrl, href);
      if (href === null) {
        return text;
      }
      var out = '<img src="' + href + '" alt="' + text + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += this.options.xhtml ? '/>' : '>';
      return out;
    };
    _proto.text = function text(_text) {
      return _text;
    };
    return Renderer;
  }();

  /**
   * TextRenderer
   * returns only the textual part of the token
   */
  var TextRenderer_1 = /*#__PURE__*/function () {
    function TextRenderer() {}
    var _proto = TextRenderer.prototype;

    // no need for block level renderers
    _proto.strong = function strong(text) {
      return text;
    };
    _proto.em = function em(text) {
      return text;
    };
    _proto.codespan = function codespan(text) {
      return text;
    };
    _proto.del = function del(text) {
      return text;
    };
    _proto.html = function html(text) {
      return text;
    };
    _proto.text = function text(_text) {
      return _text;
    };
    _proto.link = function link(href, title, text) {
      return '' + text;
    };
    _proto.image = function image(href, title, text) {
      return '' + text;
    };
    _proto.br = function br() {
      return '';
    };
    return TextRenderer;
  }();

  /**
   * Slugger generates header id
   */
  var Slugger_1 = /*#__PURE__*/function () {
    function Slugger() {
      this.seen = {};
    }
    var _proto = Slugger.prototype;
    _proto.serialize = function serialize(value) {
      return value.toLowerCase().trim() // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '') // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');
    }
    /**
     * Finds the next safe (unique) slug to use
     */;
    _proto.getNextSafeSlug = function getNextSafeSlug(originalSlug, isDryRun) {
      var slug = originalSlug;
      var occurenceAccumulator = 0;
      if (this.seen.hasOwnProperty(slug)) {
        occurenceAccumulator = this.seen[originalSlug];
        do {
          occurenceAccumulator++;
          slug = originalSlug + '-' + occurenceAccumulator;
        } while (this.seen.hasOwnProperty(slug));
      }
      if (!isDryRun) {
        this.seen[originalSlug] = occurenceAccumulator;
        this.seen[slug] = 0;
      }
      return slug;
    }
    /**
     * Convert string to unique id
     * @param {object} options
     * @param {boolean} options.dryrun Generates the next unique slug without updating the internal accumulator.
     */;
    _proto.slug = function slug(value, options) {
      if (options === void 0) {
        options = {};
      }
      var slug = this.serialize(value);
      return this.getNextSafeSlug(slug, options.dryrun);
    };
    return Slugger;
  }();
  var defaults$4 = defaults.defaults;
  var unescape$1 = helpers.unescape;
  /**
   * Parsing & Compiling
   */

  var Parser_1 = /*#__PURE__*/function () {
    function Parser(options) {
      this.options = options || defaults$4;
      this.options.renderer = this.options.renderer || new Renderer_1();
      this.renderer = this.options.renderer;
      this.renderer.options = this.options;
      this.textRenderer = new TextRenderer_1();
      this.slugger = new Slugger_1();
    }
    /**
     * Static Parse Method
     */

    Parser.parse = function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
    /**
     * Static Parse Inline Method
     */;
    Parser.parseInline = function parseInline(tokens, options) {
      var parser = new Parser(options);
      return parser.parseInline(tokens);
    }
    /**
     * Parse Loop
     */;
    var _proto = Parser.prototype;
    _proto.parse = function parse(tokens, top) {
      if (top === void 0) {
        top = true;
      }
      var out = '',
        i,
        j,
        k,
        l2,
        l3,
        row,
        cell,
        header,
        body,
        token,
        ordered,
        start,
        loose,
        itemBody,
        item,
        checked,
        task,
        checkbox;
      var l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];
        switch (token.type) {
          case 'space':
            {
              continue;
            }
          case 'hr':
            {
              out += this.renderer.hr();
              continue;
            }
          case 'heading':
            {
              out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape$1(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
              continue;
            }
          case 'code':
            {
              out += this.renderer.code(token.text, token.lang, token.escaped);
              continue;
            }
          case 'table':
            {
              header = ''; // header

              cell = '';
              l2 = token.header.length;
              for (j = 0; j < l2; j++) {
                cell += this.renderer.tablecell(this.parseInline(token.tokens.header[j]), {
                  header: true,
                  align: token.align[j]
                });
              }
              header += this.renderer.tablerow(cell);
              body = '';
              l2 = token.cells.length;
              for (j = 0; j < l2; j++) {
                row = token.tokens.cells[j];
                cell = '';
                l3 = row.length;
                for (k = 0; k < l3; k++) {
                  cell += this.renderer.tablecell(this.parseInline(row[k]), {
                    header: false,
                    align: token.align[k]
                  });
                }
                body += this.renderer.tablerow(cell);
              }
              out += this.renderer.table(header, body);
              continue;
            }
          case 'blockquote':
            {
              body = this.parse(token.tokens);
              out += this.renderer.blockquote(body);
              continue;
            }
          case 'list':
            {
              ordered = token.ordered;
              start = token.start;
              loose = token.loose;
              l2 = token.items.length;
              body = '';
              for (j = 0; j < l2; j++) {
                item = token.items[j];
                checked = item.checked;
                task = item.task;
                itemBody = '';
                if (item.task) {
                  checkbox = this.renderer.checkbox(checked);
                  if (loose) {
                    if (item.tokens.length > 0 && item.tokens[0].type === 'text') {
                      item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                      if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                        item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                      }
                    } else {
                      item.tokens.unshift({
                        type: 'text',
                        text: checkbox
                      });
                    }
                  } else {
                    itemBody += checkbox;
                  }
                }
                itemBody += this.parse(item.tokens, loose);
                body += this.renderer.listitem(itemBody, task, checked);
              }
              out += this.renderer.list(body, ordered, start);
              continue;
            }
          case 'html':
            {
              // TODO parse inline content if parameter markdown=1
              out += this.renderer.html(token.text);
              continue;
            }
          case 'paragraph':
            {
              out += this.renderer.paragraph(this.parseInline(token.tokens));
              continue;
            }
          case 'text':
            {
              body = token.tokens ? this.parseInline(token.tokens) : token.text;
              while (i + 1 < l && tokens[i + 1].type === 'text') {
                token = tokens[++i];
                body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
              }
              out += top ? this.renderer.paragraph(body) : body;
              continue;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    }
    /**
     * Parse Inline Tokens
     */;
    _proto.parseInline = function parseInline(tokens, renderer) {
      renderer = renderer || this.renderer;
      var out = '',
        i,
        token;
      var l = tokens.length;
      for (i = 0; i < l; i++) {
        token = tokens[i];
        switch (token.type) {
          case 'escape':
            {
              out += renderer.text(token.text);
              break;
            }
          case 'html':
            {
              out += renderer.html(token.text);
              break;
            }
          case 'link':
            {
              out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
              break;
            }
          case 'image':
            {
              out += renderer.image(token.href, token.title, token.text);
              break;
            }
          case 'strong':
            {
              out += renderer.strong(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'em':
            {
              out += renderer.em(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'codespan':
            {
              out += renderer.codespan(token.text);
              break;
            }
          case 'br':
            {
              out += renderer.br();
              break;
            }
          case 'del':
            {
              out += renderer.del(this.parseInline(token.tokens, renderer));
              break;
            }
          case 'text':
            {
              out += renderer.text(token.text);
              break;
            }
          default:
            {
              var errMsg = 'Token with "' + token.type + '" type was not found.';
              if (this.options.silent) {
                console.error(errMsg);
                return;
              } else {
                throw new Error(errMsg);
              }
            }
        }
      }
      return out;
    };
    return Parser;
  }();
  var merge$2 = helpers.merge,
    checkSanitizeDeprecation$1 = helpers.checkSanitizeDeprecation,
    escape$2 = helpers.escape;
  var getDefaults = defaults.getDefaults,
    changeDefaults = defaults.changeDefaults,
    defaults$5 = defaults.defaults;
  /**
   * Marked
   */

  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }
    if (typeof opt === 'function') {
      callback = opt;
      opt = null;
    }
    opt = merge$2({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);
    if (callback) {
      var highlight = opt.highlight;
      var tokens;
      try {
        tokens = Lexer_1.lex(src, opt);
      } catch (e) {
        return callback(e);
      }
      var done = function done(err) {
        var out;
        if (!err) {
          try {
            out = Parser_1.parse(tokens, opt);
          } catch (e) {
            err = e;
          }
        }
        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };
      if (!highlight || highlight.length < 3) {
        return done();
      }
      delete opt.highlight;
      if (!tokens.length) return done();
      var pending = 0;
      marked.walkTokens(tokens, function (token) {
        if (token.type === 'code') {
          pending++;
          setTimeout(function () {
            highlight(token.text, token.lang, function (err, code) {
              if (err) {
                return done(err);
              }
              if (code != null && code !== token.text) {
                token.text = code;
                token.escaped = true;
              }
              pending--;
              if (pending === 0) {
                done();
              }
            });
          }, 0);
        }
      });
      if (pending === 0) {
        done();
      }
      return;
    }
    try {
      var _tokens = Lexer_1.lex(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(_tokens, opt.walkTokens);
      }
      return Parser_1.parse(_tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';
      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
      }
      throw e;
    }
  }
  /**
   * Options
   */

  marked.options = marked.setOptions = function (opt) {
    merge$2(marked.defaults, opt);
    changeDefaults(marked.defaults);
    return marked;
  };
  marked.getDefaults = getDefaults;
  marked.defaults = defaults$5;
  /**
   * Use Extension
   */

  marked.use = function (extension) {
    var opts = merge$2({}, extension);
    if (extension.renderer) {
      (function () {
        var renderer = marked.defaults.renderer || new Renderer_1();
        var _loop = function _loop(prop) {
          var prevRenderer = renderer[prop];
          renderer[prop] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var ret = extension.renderer[prop].apply(renderer, args);
            if (ret === false) {
              ret = prevRenderer.apply(renderer, args);
            }
            return ret;
          };
        };
        for (var prop in extension.renderer) {
          _loop(prop);
        }
        opts.renderer = renderer;
      })();
    }
    if (extension.tokenizer) {
      (function () {
        var tokenizer = marked.defaults.tokenizer || new Tokenizer_1();
        var _loop2 = function _loop2(prop) {
          var prevTokenizer = tokenizer[prop];
          tokenizer[prop] = function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            var ret = extension.tokenizer[prop].apply(tokenizer, args);
            if (ret === false) {
              ret = prevTokenizer.apply(tokenizer, args);
            }
            return ret;
          };
        };
        for (var prop in extension.tokenizer) {
          _loop2(prop);
        }
        opts.tokenizer = tokenizer;
      })();
    }
    if (extension.walkTokens) {
      var walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function (token) {
        extension.walkTokens(token);
        if (walkTokens) {
          walkTokens(token);
        }
      };
    }
    marked.setOptions(opts);
  };
  /**
   * Run callback for every token
   */

  marked.walkTokens = function (tokens, callback) {
    for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done;) {
      var token = _step.value;
      callback(token);
      switch (token.type) {
        case 'table':
          {
            for (var _iterator2 = _createForOfIteratorHelperLoose(token.tokens.header), _step2; !(_step2 = _iterator2()).done;) {
              var cell = _step2.value;
              marked.walkTokens(cell, callback);
            }
            for (var _iterator3 = _createForOfIteratorHelperLoose(token.tokens.cells), _step3; !(_step3 = _iterator3()).done;) {
              var row = _step3.value;
              for (var _iterator4 = _createForOfIteratorHelperLoose(row), _step4; !(_step4 = _iterator4()).done;) {
                var _cell = _step4.value;
                marked.walkTokens(_cell, callback);
              }
            }
            break;
          }
        case 'list':
          {
            marked.walkTokens(token.items, callback);
            break;
          }
        default:
          {
            if (token.tokens) {
              marked.walkTokens(token.tokens, callback);
            }
          }
      }
    }
  };
  /**
   * Parse Inline
   */

  marked.parseInline = function (src, opt) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked.parseInline(): input parameter is undefined or null');
    }
    if (typeof src !== 'string') {
      throw new Error('marked.parseInline(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }
    opt = merge$2({}, marked.defaults, opt || {});
    checkSanitizeDeprecation$1(opt);
    try {
      var tokens = Lexer_1.lexInline(src, opt);
      if (opt.walkTokens) {
        marked.walkTokens(tokens, opt.walkTokens);
      }
      return Parser_1.parseInline(tokens, opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';
      if (opt.silent) {
        return '<p>An error occurred:</p><pre>' + escape$2(e.message + '', true) + '</pre>';
      }
      throw e;
    }
  };
  /**
   * Expose
   */

  marked.Parser = Parser_1;
  marked.parser = Parser_1.parse;
  marked.Renderer = Renderer_1;
  marked.TextRenderer = TextRenderer_1;
  marked.Lexer = Lexer_1;
  marked.lexer = Lexer_1.lex;
  marked.Tokenizer = Tokenizer_1;
  marked.Slugger = Slugger_1;
  marked.parse = marked;
  var marked_1 = marked;
  return marked_1;
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/@k2works/full-stack-lab/src/style.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/@k2works/full-stack-lab/src/style.css ***!
  \******************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 10;\r\n  padding: 10;\r\n  font-family: -apple-system, \"游ゴシック Medium\", \"Yu Gothic Medium\",\r\n    \"游ゴシック体\", YuGothic, \"ヒラギノ角ゴ Pro W3\", \"Hiragino Kaku Gothic ProN\",\r\n    \"メイリオ\", Meiryo, sans-serif;\r\n  font-feature-settings: \"palt\"; /* プロポーショナルメトリクスを有効に */\r\n}", "",{"version":3,"sources":["webpack://./node_modules/@k2works/full-stack-lab/src/style.css"],"names":[],"mappings":"AAAA;;EAEE,YAAY;AACd;;AAEA;EACE,UAAU;EACV,WAAW;EACX;;8BAE4B;EAC5B,6BAA6B,EAAE,sBAAsB;AACvD","sourcesContent":["html,\r\nbody {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 10;\r\n  padding: 10;\r\n  font-family: -apple-system, \"游ゴシック Medium\", \"Yu Gothic Medium\",\r\n    \"游ゴシック体\", YuGothic, \"ヒラギノ角ゴ Pro W3\", \"Hiragino Kaku Gothic ProN\",\r\n    \"メイリオ\", Meiryo, sans-serif;\r\n  font-feature-settings: \"palt\"; /* プロポーショナルメトリクスを有効に */\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css ***!
  \*************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* スタイルシート */\nbody {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\";\n  grid-template-columns: 1fr 3fr; /* 左のナビゲーションが1、メインが3 */\n  grid-template-rows: auto 1fr; /* 上のヘッダーが自動高さ、残りは1fr */\n  height: 100vh;\n  margin: 0;\n  font-family: -apple-system, \"游ゴシック Medium\", \"Yu Gothic Medium\",\n  \"游ゴシック体\", YuGothic, \"ヒラギノ角ゴ Pro W3\", \"Hiragino Kaku Gothic ProN\",\n  \"メイリオ\", Meiryo, sans-serif;\n  font-feature-settings: \"palt\"; /* プロポーショナルメトリクスを有効に */\n}\n\n#header {\n  grid-area: header;\n  background: #f8f9fa;\n  padding: 1em;\n}\n\n#nav {\n  grid-area: nav;\n  background: #343a40;\n  color: #fff;\n  padding: 1em;\n}\n\n#main {\n  grid-area: main;\n  background: #fff;\n  padding: 1em;\n  overflow: auto;\n}\n\n.nav-sub-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  color: #fff;\n}\n\n.nav-sub-item a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.nav-sub-item a:hover {\n  text-decoration: underline;\n}\n", "",{"version":3,"sources":["webpack://./style.css"],"names":[],"mappings":"AAAA,YAAY;AACZ;EACE,aAAa;EACb;;cAEY;EACZ,8BAA8B,EAAE,sBAAsB;EACtD,4BAA4B,EAAE,uBAAuB;EACrD,aAAa;EACb,SAAS;EACT;;4BAE0B;EAC1B,6BAA6B,EAAE,sBAAsB;AACvD;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["/* スタイルシート */\nbody {\n  display: grid;\n  grid-template-areas:\n    \"header header\"\n    \"nav main\";\n  grid-template-columns: 1fr 3fr; /* 左のナビゲーションが1、メインが3 */\n  grid-template-rows: auto 1fr; /* 上のヘッダーが自動高さ、残りは1fr */\n  height: 100vh;\n  margin: 0;\n  font-family: -apple-system, \"游ゴシック Medium\", \"Yu Gothic Medium\",\n  \"游ゴシック体\", YuGothic, \"ヒラギノ角ゴ Pro W3\", \"Hiragino Kaku Gothic ProN\",\n  \"メイリオ\", Meiryo, sans-serif;\n  font-feature-settings: \"palt\"; /* プロポーショナルメトリクスを有効に */\n}\n\n#header {\n  grid-area: header;\n  background: #f8f9fa;\n  padding: 1em;\n}\n\n#nav {\n  grid-area: nav;\n  background: #343a40;\n  color: #fff;\n  padding: 1em;\n}\n\n#main {\n  grid-area: main;\n  background: #fff;\n  padding: 1em;\n  overflow: auto;\n}\n\n.nav-sub-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  color: #fff;\n}\n\n.nav-sub-item a {\n  color: #fff;\n  text-decoration: none;\n}\n\n.nav-sub-item a:hover {\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/@k2works/full-stack-lab/src/style.css":
/*!************************************************************!*\
  !*** ./node_modules/@k2works/full-stack-lab/src/style.css ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/@k2works/full-stack-lab/src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _k2works_full_stack_lab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @k2works/full-stack-lab */ "./node_modules/@k2works/full-stack-lab/src/index.js");


var contents = "\n## \u6A5F\u80FD\u540D\n## \u4ED5\u69D8\n## TODO\u30EA\u30B9\u30C8\n";
var mindmap = "\n@startmindmap\n+ root\n++ right\n+++ right right\n*** right2\n-- left\n--- left left\n-- left2\n\n@endmindmap\n";
var usecase = "\n@startuml\nleft to right direction\nactor \"Actor\" as ac\nrectangle Application {\n  usecase \"UseCase1\" as UC1\n  usecase \"UseCase2\" as UC2\n  usecase \"UseCase3\" as UC3\n}\nac --> UC1\nac --> UC2\nac --> UC3\n@enduml\n";
var ui = "\n@startsalt\n{+\n  \u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\u753B\u9762\n  {+\n  {\n  \u751F\u5F92\n  \u6559\u54E1\n  \u7D44\n  \u90E8\n  \u30A4\u30D9\u30F3\u30C8\n  } |\n  {\n    == \u751F\u5F92\n    { + <&zoom-in> (          )}\n    {T#\n    + \u7530\u5C3B\u3000\u667A\u88D5  | 3\u5E74B\u7D44    | \u91CE\u7403\u90E8 \u5199\u771F\u90E8\n    + \u5C71\u7530\u3000\u592A\u90CE  | 3\u5E74A\u7D44    | \u91CE\u7403\u90E8\n    + \u9234\u6728\u3000\u82B1\u5B50  | 3\u5E74A\u7D44    | \u5199\u771F\u90E8\n    }\n  }\n  }\n----------------\n  \u30B7\u30F3\u30B0\u30EB\u753B\u9762\n  {+\n  {\n  \u751F\u5F92\n  \u6559\u54E1\n  \u7D44\n  \u90E8\n  \u30A4\u30D9\u30F3\u30C8\n  } |\n  {\n    {\n      <&person> <b>\u7530\u5C3B \u667A\u88D5\n    }\n    {\n      \u540D\u524D\n      \u7530\u5C3B\u3000\u667A\u88D5\n      \u7D44\n      3\u5E74B\u7D44\n      \u90E8\n      \u91CE\u7403\u90E8 \u5199\u771F\u90E8\n      \u95A2\u9023\u3059\u308B\u751F\u5F92\n      \u7530\u5C3B\u3000\u667A\u88D5 \u5C71\u7530\u3000\u592A\u90CE\u3000\u9234\u6728\u3000\u82B1\u5B50\n    }\n  }\n  }\n}\n@endsalt\n";
var uiModel = "\n@startuml\n  class \u90E8 {\n    \u540D\u79F0\n    \u30AB\u30C6\u30B4\u30EA\u30FC\n    \u751F\u5F92\u6570\n    \u5370\u5237()\n    \u65B0\u898F()\n    \u524A\u9664()\n  }\n  class \u751F\u5F92 {\n    \u6C0F\u540D\n    \u6210\u7E3E\n    \u5370\u5237()\n    \u65B0\u898F()\n    \u524A\u9664()\n  }\n  class \u7D44 {\n    \u540D\u79F0\n    \u5370\u5237()\n    \u65B0\u898F()\n    \u524A\u9664()\n  }\n  class \u6559\u54E1 {\n    \u6C0F\u540D\n    \u96FB\u8A71\u756A\u53F7\n    \u5370\u5237()\n    \u65B0\u898F()\n    \u524A\u9664()\n  }\n  class \u30A4\u30D9\u30F3\u30C8 {\n    \u540D\u79F0\n    \u65E5\u4ED8\n    \u5370\u5237()\n    \u65B0\u898F()\n    \u524A\u9664()\n  }\n  \u90E8 *-* \u751F\u5F92\n  \u90E8 *-- \u6559\u54E1\n  \u30A4\u30D9\u30F3\u30C8 *- \u6559\u54E1\n  \u751F\u5F92 --* \u7D44\n";
var uiInteraction = "\n@startuml\n  \u30A4\u30D9\u30F3\u30C8_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3 --> \u30A4\u30D9\u30F3\u30C8_\u30B7\u30F3\u30B0\u30EB\n  \u30A4\u30D9\u30F3\u30C8_\u30B7\u30F3\u30B0\u30EB --> \u6559\u54E1_\u30B7\u30F3\u30B0\u30EB\n  \u6559\u54E1_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3 --> \u6559\u54E1_\u30B7\u30F3\u30B0\u30EB\n  \u6559\u54E1_\u30B7\u30F3\u30B0\u30EB --> \u90E8_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\n  \u6559\u54E1_\u30B7\u30F3\u30B0\u30EB <-> \u7D44_\u30B7\u30F3\u30B0\u30EB\n  \u7D44_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3 --> \u7D44_\u30B7\u30F3\u30B0\u30EB\n  \u7D44_\u30B7\u30F3\u30B0\u30EB --> \u751F\u5F92_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\n  \u751F\u5F92_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3 --> \u751F\u5F92_\u30B7\u30F3\u30B0\u30EB\n  \u751F\u5F92_\u30B7\u30F3\u30B0\u30EB -> \u7D44_\u30B7\u30F3\u30B0\u30EB\n  \u751F\u5F92_\u30B7\u30F3\u30B0\u30EB --> \u90E8_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\n  \u90E8_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3 --> \u90E8_\u30B7\u30F3\u30B0\u30EB\n  \u90E8_\u30B7\u30F3\u30B0\u30EB --> \u751F\u5F92_\u30B3\u30EC\u30AF\u30B7\u30E7\u30F3\n@enduml\n";
var uml = "\n@startuml\nabstract class AbstractList\nabstract AbstractCollection\ninterface List\ninterface Collection\nList <|-- AbstractList\nCollection <|-- AbstractCollection\nCollection <|- List\nAbstractCollection <|- AbstractList\nAbstractList <|-- ArrayList\nclass ArrayList {\n  Object[] elementData\n  size()\n}\nenum TimeUnit {\n  DAYS\n  HOURS\n  MINUTES\n}\nannotation SuppressWarnings\n@enduml\n";
var erd = "\n@startuml\n' hide the spot\nhide circle\n' avoid problems with angled crows feet\nskinparam linetype ortho\nentity \"Entity01\" as e01 {\n  *e1_id : number <<generated>>\n  --\n  *name : text\n  description : text\n}\nentity \"Entity02\" as e02 {\n  *e2_id : number <<generated>>\n  --\n  *e1_id : number <<FK>>\n  other_details : text\n}\nentity \"Entity03\" as e03 {\n  *e3_id : number <<generated>>\n  --\n  e1_id : number <<FK>>\n  other_details : text\n}\ne01 ||..o{ e02\ne01 |o..o{ e03\n@enduml\n";
var mode = "API"; // "UI" or "API" or "DOC"
(0,_k2works_full_stack_lab__WEBPACK_IMPORTED_MODULE_1__["default"])({
  mindmap: mindmap,
  contents: contents,
  ui: ui,
  uiModel: uiModel,
  uiInteraction: uiInteraction,
  usecase: usecase,
  uml: uml,
  erd: erd,
  mode: mode
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map