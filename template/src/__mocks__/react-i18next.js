const React = require('react')
const reactI18next = require('react-i18next')

const hasChildren = node => node
  && (
    node.children
    || (node.props && node.props.children)
  )

const getChildren = node => (
  (node && node.children)
    ? node.children
    : (node.props && node.props.children)
)

const renderNodes = (reactNodes) => {
  if (typeof reactNodes === 'string') {
    return reactNodes
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key]
    const isElement = React.isValidElement(child)

    if (typeof child === 'string') {
      return child
    }
    if (hasChildren(child)) {
      const inner = renderNodes(getChildren(child))
      const childKey = `child_${i}`
      return React.cloneElement(child, { ...child.props, key: childKey }, inner)
    }
    if (typeof child === 'object' && !isElement) {
      return Object.keys(child).reduce(
        (str, childKey) => `${str}${child[childKey]}`,
        ''
      )
    }

    return child
  })
}

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  getDefaults: reactI18next.getDefaults,
  getI18n: reactI18next.getI18n,
  I18n: ({ children }) => children(k => k, { i18n: {} }),
  I18nextProvider: reactI18next.I18nextProvider,
  Interpolate: reactI18next.Interpolate,
  loadNamespaces: reactI18next.loadNamespaces,
  reactI18nextModule: reactI18next.reactI18nextModule,
  setDefaults: reactI18next.setDefaults,
  setI18n: reactI18next.setI18n,
  Trans: ({ children }) => renderNodes(children),
  translate: () => Component => props => (
    <Component
      t={k => k}
      i18n={{
        changeLanguage: l => l,
        language: 'en-US',
        languages: ['en-US', 'pt'],
      }}
      {...props}
    />
  ),
}
