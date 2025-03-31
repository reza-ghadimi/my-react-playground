// **************************************************
// B-03.01: Basic Section Component
// **************************************************
// export default function Section({ title, children }) {
//     return (
//         <section id="examples">
//             <h2>{title}</h2>
//             {children}
//         </section>
//     );
// }
// **************************************************



// **************************************************
// B-03.02: Adding ID and Class Support
// **************************************************
// export default function Section({ id, className, title, children  }) {
//     return (
//         <section id={id} className={className}>
//             <h2>{title}</h2>
//             {children }
//         </section>
//     );
// }
// **************************************************



// **************************************************
// B-03.03: Using Spread Props for More Flexibility
// **************************************************
export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}
// **************************************************
