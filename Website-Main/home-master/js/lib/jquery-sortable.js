!function(r){"use strict";var o,i;if("function"==typeof define&&define.amd)try{define(["sortablejs","jquery"],function(e,t){o=e,i=t,n(),r(e,t)})}catch(e){n()}else{if("object"==typeof exports)try{o=require("sortablejs"),i=require("jquery")}catch(e){}"function"!=typeof jQuery&&"function"!=typeof $||(i=jQuery||$),"undefined"!=typeof Sortable&&(o=Sortable),n(),r(o,i)}function n(){if(!i)throw new Error("jQuery is required for jquery-sortablejs");if(!o)throw new Error("SortableJS is required for jquery-sortablejs (https://github.com/SortableJS/Sortable)")}}(function(n,a){"use strict";a.fn.sortable=function(r){var o,i=arguments;return this.each(function(){var e=a(this),t=e.data("sortable");t||!(r instanceof Object)&&r?t&&("destroy"===r?(t.destroy(),e.removeData("sortable")):"widget"===r?o=t:"function"==typeof t[r]?o=t[r].apply(t,[].slice.call(i,1)):r in t.options&&(o=t.option.apply(t,i))):(t=new n(this,r),e.data("sortable",t))}),void 0===o?this:o}});