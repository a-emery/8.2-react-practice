var RootElement = React.createClass({
  render() {
    return(
      <div>
        <h1>Contacts</h1>
        <ul>
          <li>
            <h2>James Nelson</h2>
            <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>
          </li>
          <li>
            <h2>Joe Citizen</h2>
            <a href="joe@example.com">joe@example.com</a>
          </li>
        </ul>
      </div>
    )
  }
})

ReactDOM.render(<RootElement />, document.getElementById('react-app'))

// var rootElement =
//   React.createElement('div', {},
//     React.createElement('h1', {}, "Contacts"),
//     React.createElement('ul', {},
//       React.createElement('li', {},
//         React.createElement('h2', {}, "James Nelson"),
//         React.createElement('a', {href: 'mailto:james@jamesknelson.com'}, 'james@jamesknelson.com')
//       ),
//       React.createElement('li', {},
//         React.createElement('h2', {}, "Joe Citizen"),
//         React.createElement('a', {href: 'mailto:joe@example.com'}, 'joe@example.com')
//       )
//     )
//   )
//
// ReactDOM.render(rootElement, document.getElementById('container'))
