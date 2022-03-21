import React from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

import App from './components/App';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<App />, root);
}

// const root = document.querySelector("#root");
// console.log(root);

// const Hello = (props) => {
//   const { name, flag } = props;
//   return (
//     <div>
//       <h1>Hello {name}!!!{flag}</h1>
//     </div>
//   );
// };

// class Hello extends React.Component {
//   render() {
//     const { name, flag } = this.props;
//     return (
//         <div>
//           <h1>Hello {name}!!!{flag}</h1>
//         </div>
//         );
//   }
// }

// ReactDOM.render(<Hello name="Gary" flag="eng" />, root);
