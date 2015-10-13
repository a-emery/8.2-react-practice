require.register('main', function (exports, require, module) {
    'use strict';
    var RootElement = React.createClass({
        displayName: 'RootElement',
        render: function render() {
            return React.createElement('div', null, React.createElement('h1', null, 'Contacts'), React.createElement('ul', null, React.createElement('li', null, React.createElement('h2', null, 'James Nelson'), React.createElement('a', { href: 'mailto:james@jamesknelson.com' }, 'james@jamesknelson.com')), React.createElement('li', null, React.createElement('h2', null, 'Joe Citizen'), React.createElement('a', { href: 'joe@example.com' }, 'joe@example.com'))));
        }
    });
    ReactDOM.render(React.createElement(RootElement, null), document.getElementById('react-app'));    // var rootElement =
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
});
//# sourceMappingURL=app.js.map
