const path = require('path')
const { normalize } = require('postcss-url/src/lib/paths')

// This is necessary because postcss-url doesn't add a trailing ./ to
// rebased URLs, causing relative imports to fail resolving.
function postcssUrlRebase(asset, dir) {
  const rebasedUrl = normalize(path.relative(dir.to, asset.absolutePath))
  return `./${rebasedUrl}${asset.search}${asset.hash}`
}

// Options for PostCSS as we reference these options multiple times.
module.exports = {
  // Necessary for external CSS imports to work
  // https://github.com/facebookincubator/create-react-app/issues/2677
  ident: 'postcss',
  importLoaders: 1,
  plugins: [
    require('postcss-sass-each'),
    require('postcss-import'),
    require('postcss-url')({ url: postcssUrlRebase }),
    require('postcss-cssnext'),
    require('postcss-hexrgba'),
  ],
}
