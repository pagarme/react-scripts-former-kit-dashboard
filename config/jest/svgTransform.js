// @remove-on-eject-begin
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * Copyright (c) 2018-present, Pagar.me Pagamentos, S/A.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end

// This is a custom Jest transformer turning SVG imports into empty SVG tags.
// http://facebook.github.io/jest/docs/en/webpack.html

module.exports = {
  process() {
    return 'module.exports = "svg"'
  },
  getCacheKey() {
    // The output is always the same.
    return 'svgTransform'
  },
}
