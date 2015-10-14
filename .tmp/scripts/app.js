require.register('main', function (exports, require, module) {
    'use strict';
    var newContact = {
        name: '',
        email: '',
        description: ''
    };
    var contacts = [
        {
            key: 1,
            name: 'James K Nelson',
            email: 'james@jamesknelson.com',
            description: 'Front-end Unicorn'
        },
        {
            key: 2,
            name: 'Jim',
            email: 'jim@example.com'
        },
        {
            key: 3,
            name: 'Joe'
        }
    ];
    /*
Components
*/
    var ContactItem = React.createClass({
        displayName: 'ContactItem',
        propTypes: {
            name: React.PropTypes.string.isRequired,
            email: React.PropTypes.string.isRequired,
            description: React.PropTypes.string
        },
        render: function render() {
            return React.createElement('li', { className: 'ContactItem' }, React.createElement('h2', { className: 'ContactItem-name' }, this.props.name), React.createElement('a', {
                href: 'mailto:' + this.props.email,
                className: 'ContactItem-email'
            }, this.props.email), React.createElement('div', { className: 'ContactItem-description' }, this.props.description));
        }
    });
    var ContactForm = React.createClass({
        displayName: 'ContactForm',
        propTypes: { contact: React.PropTypes.object.isRequired },
        render: function render() {
            return React.createElement('form', { className: 'ContactForm' }, React.createElement('input', {
                type: 'text',
                placeholder: 'Name (required)',
                value: this.props.contact.name
            }), React.createElement('input', {
                type: 'text',
                placeholder: 'Email',
                value: this.props.contact.email
            }), React.createElement('textarea', {
                placeholder: 'Description',
                value: this.props.contact.description
            }), React.createElement('button', { type: 'submit' }, 'Add Contact'));
        }
    });
    /*
Render
*/
    var listElements = contacts.filter(function (contact) {
        return contact.email;
    }).map(function (contact) {
        return React.createElement(ContactItem, contact);
    });
    var RootElement = React.createClass({
        displayName: 'RootElement',
        render: function render() {
            return React.createElement('div', { className: 'ContactView' }, React.createElement('h1', { className: 'ContactView-title' }, 'Contacts'), React.createElement('ul', { className: 'ContactView-list' }, listElements), React.createElement(ContactForm, { contact: this.props.contact }));
        }
    });
    ReactDOM.render(React.createElement(RootElement, { contact: newContact }), document.getElementById('react-app'));
});
//# sourceMappingURL=app.js.map
