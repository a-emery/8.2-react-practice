/*
Data
*/

var newContact = {name: "", email: "", description: ""};

var contacts = [
    {key: 1, name: "James K Nelson", email: "james@jamesknelson.com", description: "Front-end Unicorn"},
    {key: 2, name: "Jim", email: "jim@example.com"},
    {key: 3, name: "Joe"},
];

/*
Components
*/

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },
  render() {
    return (
      <li className="ContactItem">
        <h2 className="ContactItem-name">{this.props.name}</h2>
        <a href={'mailto:' + this.props.email} className="ContactItem-email">{this.props.email}</a>
        <div className="ContactItem-description">{this.props.description}</div>
      </li>
    )
  }
});

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render() {
    return(
      <form className="ContactForm">
        <input type="text" placeholder="Name (required)" value={this.props.contact.name} />
        <input type="text" placeholder="Email" value={this.props.contact.email} />
        <textarea placeholder="Description" value={this.props.contact.description} />
        <button type="submit">Add Contact</button>
      </form>
    )
  }
});

/*
Render
*/

var listElements = contacts
  .filter(function(contact){
    return contact.email;
  })
  .map(function(contact){
    return <ContactItem {...contact} />;
  });




var RootElement = React.createClass({
  render() {
    return(
      <div className="ContactView">
        <h1 className="ContactView-title">Contacts</h1>
        <ul className="ContactView-list">
          {listElements}
        </ul>
        <ContactForm contact={this.props.contact}></ContactForm>
      </div>
    )
  }
})

ReactDOM.render(<RootElement contact={newContact}/>, document.getElementById('react-app'));
