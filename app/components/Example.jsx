var React = require('react');

// var Example = React.createClass({
//     render: function (){
//       return (
//         <h3>Example Component</h3>
//       );
//     }
// });

var Example = (props) => {
  return (
    <h3>Example Component!</h3>
    <p>Welcome to Example's page</p>
  );
}

module.exports = Example;
