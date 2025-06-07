// **************************************************
// A-01: Form with local validation to collect user opinions, without integrating context or backend submission.
// **************************************************
// import { useActionState } from 'react';

// export function NewOpinion() {

//   function shareOpinionAction(prevState, formData) {
//     const title = formData.get('title');
//     const body = formData.get('body');
//     const userName = formData.get('userName');

//     const errors = [];

//     if (title.trim().length < 5) {
//       errors.push('Title must be at least five characters long.');
//     }

//     if (body.trim().length < 10 || body.trim().length > 300) {
//       errors.push('Opinion must be between 10 and 300 characters long.');
//     }

//     if (!userName.trim()) {
//       errors.push('Please provide your name.');
//     }

//     if (errors.length > 0) {
//       return {
//         errors,
//         data: {
//           title,
//           body,
//           userName,
//         },
//       };
//     }

//     // submit to backend

//     return { errors: null };
//   }

//   const [formState, formAction] = useActionState(shareOpinionAction, {
//     errors: null,
//   });

//   return (
//     <div id="new-opinion">
//       <h2>Share your opinion!</h2>
//       <form action={formAction}>
//         <div className="control-row">
//           <p className="control">
//             <label htmlFor="userName">Your Name</label>
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               defaultValue={formState.data?.userName}
//             />
//           </p>

//           <p className="control">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               defaultValue={formState.data?.title}
//             />
//           </p>
//         </div>
//         <p className="control">
//           <label htmlFor="body">Your Opinion</label>
//           <textarea
//             id="body"
//             name="body"
//             rows={5}
//             defaultValue={formState.data?.body}
//           ></textarea>
//         </p>

//         {formState.errors && (
//           <ul className="errors">
//             {formState.errors.map((error) => (
//               <li key={error}>{error}</li>
//             ))}
//           </ul>
//         )}

//         <p className="actions">
//           <button type="submit">Submit</button>
//         </p>
//       </form>
//     </div>
//   );
// }
// **************************************************

// **************************************************
// A-02: Improved form with validation and integration to context for submitting new opinions asynchronously.
// **************************************************
// import { use, useActionState } from 'react';
// import { OpinionsContext } from '../store/opinions-context';

// export function NewOpinion() {

//   const { addOpinion } = use(OpinionsContext);

//   //form actions could be sync or async
//   async function shareOpinionAction(prevState, formData) {
//     const title = formData.get('title');
//     const body = formData.get('body');
//     const userName = formData.get('userName');

//     const errors = [];

//     if (title.trim().length < 5) {
//       errors.push('Title must be at least five characters long.');
//     }

//     if (body.trim().length < 10 || body.trim().length > 300) {
//       errors.push('Opinion must be between 10 and 300 characters long.');
//     }

//     if (!userName.trim()) {
//       errors.push('Please provide your name.');
//     }

//     if (errors.length > 0) {
//       return {
//         errors,
//         data: {
//           title,
//           body,
//           userName,
//         },
//       };
//     }

//     await addOpinion({
//       title,
//       body,
//       userName
//     });

//     return { errors: null };
//   }

//   const [formState, formAction] = useActionState(shareOpinionAction, {
//     errors: null,
//   });

//   return (
//     <div id="new-opinion">
//       <h2>Share your opinion!</h2>
//       <form action={formAction}>
//         <div className="control-row">
//           <p className="control">
//             <label htmlFor="userName">Your Name</label>
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               defaultValue={formState.data?.userName}
//             />
//           </p>

//           <p className="control">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               defaultValue={formState.data?.title}
//             />
//           </p>
//         </div>
//         <p className="control">
//           <label htmlFor="body">Your Opinion</label>
//           <textarea
//             id="body"
//             name="body"
//             rows={5}
//             defaultValue={formState.data?.body}
//           ></textarea>
//         </p>

//         {formState.errors && (
//           <ul className="errors">
//             {formState.errors.map((error) => (
//               <li key={error}>{error}</li>
//             ))}
//           </ul>
//         )}

//         <p className="actions">
//           <button type="submit">Submit</button>
//         </p>
//       </form>
//     </div>
//   );
// }

// **************************************************

// **************************************************
// A-03: Adds form pending state handling to the opinion submission form using useActionState.
// **************************************************
// import { use, useActionState } from 'react';
// import { OpinionsContext } from '../store/opinions-context';

// export function NewOpinion() {

//   const { addOpinion } = use(OpinionsContext);

//   //form actions could be sync or async
//   async function shareOpinionAction(prevState, formData) {
//     const title = formData.get('title');
//     const body = formData.get('body');
//     const userName = formData.get('userName');

//     const errors = [];

//     if (title.trim().length < 5) {
//       errors.push('Title must be at least five characters long.');
//     }

//     if (body.trim().length < 10 || body.trim().length > 300) {
//       errors.push('Opinion must be between 10 and 300 characters long.');
//     }

//     if (!userName.trim()) {
//       errors.push('Please provide your name.');
//     }

//     if (errors.length > 0) {
//       return {
//         errors,
//         data: {
//           title,
//           body,
//           userName,
//         },
//       };
//     }

//     await addOpinion({
//       title,
//       body,
//       userName
//     });

//     return { errors: null };
//   }

//   const [formState, formAction, pending] = useActionState(shareOpinionAction, {
//     errors: null,
//   });

//   return (
//     <div id="new-opinion">
//       <h2>Share your opinion!</h2>
//       <form action={formAction}>
//         <div className="control-row">
//           <p className="control">
//             <label htmlFor="userName">Your Name</label>
//             <input
//               type="text"
//               id="userName"
//               name="userName"
//               defaultValue={formState.data?.userName}
//             />
//           </p>

//           <p className="control">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               id="title"
//               name="title"
//               defaultValue={formState.data?.title}
//             />
//           </p>
//         </div>
//         <p className="control">
//           <label htmlFor="body">Your Opinion</label>
//           <textarea
//             id="body"
//             name="body"
//             rows={5}
//             defaultValue={formState.data?.body}
//           ></textarea>
//         </p>

//         {formState.errors && (
//           <ul className="errors">
//             {formState.errors.map((error) => (
//               <li key={error}>{error}</li>
//             ))}
//           </ul>
//         )}

//         <p className="actions">
//           <button type="submit" disabled={pending}>Submit</button>
//         </p>
//       </form>
//     </div>
//   );
// }

// **************************************************

// **************************************************
// A-04: Optimized opinion form with external Submit button component, separating logic and UI concerns.
// **************************************************
import { use, useActionState } from 'react';
// import { useFormStatus } from 'react-dom'; // Does not work in Form itself!

import Submit from './Submit.jsx';
import { OpinionsContext } from '../store/opinions-context';

export function NewOpinion() {

  const { addOpinion } = use(OpinionsContext);

  //form actions could be sync or async
  async function shareOpinionAction(prevState, formData) {
    const title = formData.get('title');
    const body = formData.get('body');
    const userName = formData.get('userName');

    const errors = [];

    if (title.trim().length < 5) {
      errors.push('Title must be at least five characters long.');
    }

    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push('Opinion must be between 10 and 300 characters long.');
    }

    if (!userName.trim()) {
      errors.push('Please provide your name.');
    }

    if (errors.length > 0) {
      return {
        errors,
        data: {
          title,
          body,
          userName,
        },
      };
    }

    await addOpinion({
      title,
      body,
      userName
    });

    return { errors: null };
  }

  const [formState, formAction, pending] = useActionState(shareOpinionAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.data?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.data?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.data?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
// **************************************************
