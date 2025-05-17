// **************************************************
// A-01: 
// **************************************************
// import { log } from '../../log.js';

// export default function IconButton({ children, icon, ...props }) {
//   log('<IconButton /> rendered', 2);

//   const Icon = icon;
//   return (
//     <button {...props} className="button">
//       <Icon className="button-icon" />
//       <span className="button-text">{children}</span>
//     </button>
//   );
// }
// **************************************************

// **************************************************
// A-02: Introduced memo and onClick prop to optimize re-renders and serve reusable UI logic for counter control buttons.
// **************************************************
import { memo } from 'react';

import { log } from '../../log.js';

const IconButton = memo(function IconButton({ children, icon, onClick }) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button onClick={onClick} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;
// **************************************************