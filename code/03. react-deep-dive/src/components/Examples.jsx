// **************************************************
// B-03: Initial setup for the Examples component using useState to manage the selectedTopic. It updates based on the selected tab button and displays the corresponding content for that topic.
// **************************************************
// import { useState } from 'react';

// import TabButton from './TabButton.jsx';
// import { EXAMPLES } from '../data.js';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <section id="examples">
//       <h2>Examples</h2>
//       <menu>
//         {Object.keys(EXAMPLES).map((key) => (
//           <TabButton
//             key={key}
//             isSelected={selectedTopic === key}
//             onSelect={() => handleSelect(key)}
//           >
//             {EXAMPLES[key].title}
//           </TabButton>
//         ))}
//       </menu>
//       {tabContent}
//     </section>
//   );
// }
// **************************************************



// **************************************************
// B-03.01: Introduced a Section component to wrap the examples section, improving modularity and making it reusable for future sections.
// **************************************************
// Introduced `Section` component to wrap the entire examples section. 
// This makes the code more modular and reusable, as `Section` is a general-purpose wrapper that can be used to wrap other sections in the future.

// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     // id="different-examples" does not work!
//     <Section id="different-examples" title='Examples'>
//       <menu>
//         {Object.keys(EXAMPLES).map((key) => (
//           <TabButton
//             key={key}
//             isSelected={selectedTopic === key}
//             onSelect={() => handleSelect(key)}
//           >
//             {EXAMPLES[key].title}
//           </TabButton>
//         ))}
//       </menu>
//       {tabContent}
//     </Section>
//   );
// }
// **************************************************



// **************************************************
// B-03.02: Simplified the Section component by adding a className prop for better styling customization, allowing for more flexible styling of the section.
// **************************************************
// Further simplification by adding a `className` prop to `Section` for better customization of styles.
// The `Section` component now accepts both `id` and `className`, allowing for easier styling.

// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     // id="different-examples" does work!
//     <Section id="different-examples" className="" title='Examples'>
//       <menu>
//         {Object.keys(EXAMPLES).map((key) => (
//           <TabButton
//             key={key}
//             isSelected={selectedTopic === key}
//             onSelect={() => handleSelect(key)}
//           >
//             {EXAMPLES[key].title}
//           </TabButton>
//         ))}
//       </menu>
//       {tabContent}
//     </Section>
//   );
// }
// **************************************************



// **************************************************
// B-03.03: Using Spread Props for More Flexibility in Section.jsx
/// **************************************************
// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <Section id="examples" title='Examples'>
//       <menu>
//         {Object.keys(EXAMPLES).map((key) => (
//           <TabButton
//             key={key}
//             isSelected={selectedTopic === key}
//             onSelect={() => handleSelect(key)}
//           >
//             {EXAMPLES[key].title}
//           </TabButton>
//         ))}
//       </menu>
//       {tabContent}
//     </Section>
//   );
// }
// **************************************************



// **************************************************
// B-03.04: Introduced the Tabs component to wrap the tab buttons, adding flexibility for rendering the tabs and allowing for future reusability.
// **************************************************
/// Here, we introduce the `Tabs` component to wrap the tab buttons, allowing for more flexibility with how the tabs are displayed.
// This makes the component more modular and reusable for any other tabs you might want to implement in the future.

// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import Tabs from './Tabs.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <Section id="examples" title='Examples'>
//       <Tabs buttons={<>
//         {
//           Object.keys(EXAMPLES).map((key) => (
//             <TabButton
//               key={key}
//               isSelected={selectedTopic === key}
//               onSelect={() => handleSelect(key)}
//             >
//               {EXAMPLES[key].title}
//             </TabButton>
//           ))
//         }
//       </>
//       }>
//         {tabContent}
//       </Tabs>
//     </Section>
//   );
// }
// **************************************************



// **************************************************
// B-03.05: Refactored to generate the buttons array outside the Tabs component, making the button rendering and content display more modular and easier to maintain.
// **************************************************
// Further refactor to generate the `buttons` array outside the `Tabs` component. This keeps the rendering of buttons and the content more modular.

// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import Tabs from './Tabs.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;
//   const buttons = Object.keys(EXAMPLES).map((key) => (
//     <TabButton
//       key={key}
//       isSelected={selectedTopic === key}
//       onSelect={() => handleSelect(key)}
//     >
//       {EXAMPLES[key].title}
//     </TabButton>
//   ));

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <Section id="examples" title='Examples'>
//       <Tabs buttons={<>{buttons}</>}>
//         {tabContent}
//       </Tabs>
//     </Section >
//   );
// }
// **************************************************



// **************************************************
// B-03.06: Refined the code further for readability by simplifying the JSX. The buttons and content are both dynamically generated for better clarity and maintainability.
// **************************************************
// Final refinements, simplifying the JSX code for better readability, ensuring that the buttons and content are both dynamically generated.

// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import Tabs from './Tabs.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;
//   const buttons = Object.keys(EXAMPLES).map((key) => (
//     <TabButton
//       key={key}
//       isSelected={selectedTopic === key}
//       onSelect={() => handleSelect(key)}
//     >
//       {EXAMPLES[key].title}
//     </TabButton>
//   ));

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <Section id="examples" title='Examples'>
//       {/* OK */}
//       <Tabs buttons={<>{buttons}</>} buttonsContainer='menu'>
//         {tabContent}
//       </Tabs>

//       {/* OK */}
//       {/* 
//       <Tabs buttons={<>{buttons}</>} buttonsContainer={Section}>
//         {tabContent}
//       </Tabs> */}

//       {/* NOK */}
//       {/* 
//       <Tabs buttons={<>{buttons}</>} buttonsContainer={menu}>
//         {tabContent}
//       </Tabs> */}

//       {/* NOK */}
//       {/* <Tabs buttons={<>{buttons}</>} buttonsContainer='Section'>
//         {tabContent}
//       </Tabs> */}
//     </Section >
//   );
// }
// **************************************************

// **************************************************
// B-03.07: Final refinements for the Tabs component, with proper handling of the buttonsContainer prop to ensure dynamic rendering works for different use cases (like menu).
// **************************************************
// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import Tabs from './Tabs.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;
//   const buttons = Object.keys(EXAMPLES).map((key) => (
//     <TabButton
//       key={key}
//       isSelected={selectedTopic === key}
//       onSelect={() => handleSelect(key)}
//     >
//       {EXAMPLES[key].title}
//     </TabButton>
//   ));

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <Section id="examples" title='Examples'>
//       <Tabs buttons={<>{buttons}</>} buttonsContainer='menu'>
//         {tabContent}
//       </Tabs>
//     </Section >
//   );
// }
// **************************************************

// **************************************************
// B-03.08/01: Added flexibility for the ButtonsContainer prop in the Tabs component, ensuring it can accept dynamic values like "menu" for improved modularity.
// **************************************************
// import { useState } from 'react';

// import { EXAMPLES } from '../data.js';

// import Section from './Section.jsx';
// import Tabs from './Tabs.jsx';
// import TabButton from './TabButton.jsx';

// export default function Examples() {
//   const [selectedTopic, setSelectedTopic] = useState();

//   function handleSelect(selectedButton) {
//     setSelectedTopic(selectedButton);
//   }

//   let tabContent = <p>Please select a topic.</p>;
//   const buttons = Object.keys(EXAMPLES).map((key) => (
//     <TabButton
//       key={key}
//       isSelected={selectedTopic === key}
//       onSelect={() => handleSelect(key)}
//     >
//       {EXAMPLES[key].title}
//     </TabButton>
//   ));

//   if (selectedTopic) {
//     tabContent = (
//       <div id="tab-content">
//         <h3>{EXAMPLES[selectedTopic].title}</h3>
//         <p>{EXAMPLES[selectedTopic].description}</p>
//         <pre>
//           <code>{EXAMPLES[selectedTopic].code}</code>
//         </pre>
//       </div>
//     );
//   }

//   return (
//     <Section id="examples" title='Examples'>
//       <Tabs buttons={<>{buttons}</>} ButtonsContainer='menu'>
//         {tabContent}
//       </Tabs>
//     </Section >
//   );
// }
// **************************************************

// **************************************************
// B-03.08/02: Final version of Examples, using the Tabs component with dynamic button rendering and making sure the content is correctly displayed within the Tabs component.
// **************************************************
import { useState } from 'react';

import { EXAMPLES } from '../data.js';

import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  const buttons = Object.keys(EXAMPLES).map((key) => (
    <TabButton
      key={key}
      isSelected={selectedTopic === key}
      onSelect={() => handleSelect(key)}
    >
      {EXAMPLES[key].title}
    </TabButton>
  ));

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section id="examples" title='Examples'>
      <Tabs buttons={<>{buttons}</>}>
        {tabContent}
      </Tabs>
    </Section >
  );
}
// **************************************************