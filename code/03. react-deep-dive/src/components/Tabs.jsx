// **************************************************
// B-03.04: Basic Tabs component using a static <menu> element to wrap the tab buttons.
// **************************************************
// export default function Tabs({ children, buttons }) {
//   return (
//     <>
//       <menu>{buttons}</menu>
//       {children}
//     </>
//   );
// }
// **************************************************



// **************************************************
// B-03.05: Attempt to dynamically render the buttons container by passing a component, but this approach does not work as expected.
// **************************************************
// export default function Tabs({ children, buttons, buttonsContainer }) {
//   return (
//     <>
//       {/* does not work */}
//       <buttonsContainer>{buttons}</buttonsContainer>
//       {children}
//     </>
//   );
// }
// **************************************************



// **************************************************
// B-03.06: Fix the issue by dynamically rendering the buttons container using the ButtonsContainer component, which works as intended.
// **************************************************
// export default function Tabs({ children, buttons, buttonsContainer }) {
//   const ButtonsContainer = buttonsContainer;
//   return (
//     <>
//       {/* does  work */}
//       <ButtonsContainer>{buttons}</ButtonsContainer>
//       {children}
//     </>
//   );
// }
// **************************************************



// **************************************************
// B-03.07: Refactor Tabs to allow the Buttons Container (Pascal Case) to be passed as a prop, and it now correctly renders the container.
// **************************************************
// export default function Tabs({ children, buttons, ButtonsContainer }) {
//   return (
//     <>
//       {/* does  work */}
//       <ButtonsContainer>{buttons}</ButtonsContainer>
//       {children}
//     </>
//   );
// }
// **************************************************



// **************************************************
// B-03.08: Provide a default value for the ButtonsContainer prop ("menu") to ensure it works even if no container is specified.
// **************************************************
// export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
//   return (
//     <>
//       {/* does  work */}
//       <ButtonsContainer>{buttons}</ButtonsContainer>
//       {children}
//     </>
//   );
// }
// **************************************************