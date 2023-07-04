import React from 'react';
import './style.css';
import mountains from './mountains.jpg';

export const Floats = () => {
  return (
    <>
      <div style={{ position: 'relative' }}></div>
      <img
        style={{ position: 'absolute', width: '200px', float: 'left' }}
        src={mountains}
        alt="mountain (d) view"
      />
      <img
        style={{
          width: '400px',
          float: 'left',
          left: '0',
          top: '0',
          zIndex: '1',
        }}
        src={mountains}
        alt="mountain (d) view"
      />
      <div
        style={{
          width: '200px',
          height: '500px',
          background: 'gray',
          float: 'right',
        }}
      ></div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae adipisci
        dolorum natus at exercitationem harum illo expedita corrupti debitis
        eveniet. Recusandae architecto harum similique atque consequatur
        molestiae optio ab voluptatum?
      </p>
    </>
  );
};
export default Floats;

// import { Link } from 'react-router-dom';

// import { blockRouterMetaData } from './view-router-data';

// export const ExerciseLinks = () => {
//   return (
//     <ul>
//       {blockRouterMetaData.map((blockMetaData) => (
//         <li key={blockMetaData.path}>
//           <Link to={blockMetaData.path}>{blockMetaData.linkLabel}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };
