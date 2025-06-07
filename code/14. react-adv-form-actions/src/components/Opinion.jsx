// **************************************************
// A-01: Displays an individual opinion with static voting UI lacking interactivity.
// **************************************************
// export function Opinion({ opinion: { id, title, body, userName, votes } }) {
//   return (
//     <article>
//       <header>
//         <h3>{title}</h3>
//         <p>Shared by {userName}</p>
//       </header>
//       <p>{body}</p>
//       <form className="votes">
//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect width="18" height="18" x="3" y="3" rx="2" />
//             <path d="m16 12-4-4-4 4" />
//             <path d="M12 16V8" />
//           </svg>
//         </button>

//         <span>{votes}</span>

//         <button>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect width="18" height="18" x="3" y="3" rx="2" />
//             <path d="M12 8v8" />
//             <path d="m8 12 4 4 4-4" />
//           </svg>
//         </button>
//       </form>
//     </article>
//   );
// }
// **************************************************

// **************************************************
// A-02: Interactive opinion card using context-based upvote and downvote actions.
// **************************************************
// import { use } from 'react';
// import { OpinionsContext } from "../store/opinions-context";

// export function Opinion({ opinion: { id, title, body, userName, votes } }) {

//   const [upvoteOpinion, downvoteOpinion] = use(OpinionsContext);


//   async function upvoteAction() {
//     await upvoteOpinion(id);
//   }

//   async function downvoteAction() {
//     await downvoteOpinion(id);
//   }

//   return (
//     <article>
//       <header>
//         <h3>{title}</h3>
//         <p>Shared by {userName}</p>
//       </header>
//       <p>{body}</p>
//       <form className="votes">
//         <button formAction={upvoteAction}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect width="18" height="18" x="3" y="3" rx="2" />
//             <path d="m16 12-4-4-4 4" />
//             <path d="M12 16V8" />
//           </svg>
//         </button>

//         <span>{votes}</span>

//         <button formAction={downvoteAction}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect width="18" height="18" x="3" y="3" rx="2" />
//             <path d="M12 8v8" />
//             <path d="m8 12 4 4 4-4" />
//           </svg>
//         </button>
//       </form>
//     </article>
//   );
// }
// **************************************************

// **************************************************
// A-03: Interactive opinion card with asynchronous vote actions and UI disabled during pending requests.
// **************************************************
// import { use, useActionState } from 'react';
// import { OpinionsContext } from "../store/opinions-context";

// export function Opinion({ opinion: { id, title, body, userName, votes } }) {

//   const [upvoteOpinion, downvoteOpinion] = use(OpinionsContext);
//   const [upvoteFormState, upvoteFormAction, upvotePending] = useActionState(upvoteAction);
//   const [downvoteFormState, downvoteFormAction, downvotePending] = useActionState(downvoteAction);

//   const pendingRequest = upvotePending || downvotePending;

//   async function upvoteAction() {
//     await upvoteOpinion(id);
//   }

//   async function downvoteAction() {
//     await downvoteOpinion(id);
//   }

//   return (
//     <article>
//       <header>
//         <h3>{title}</h3>
//         <p>Shared by {userName}</p>
//       </header>
//       <p>{body}</p>
//       <form className="votes">
//         <button formAction={upvoteFormAction} disabled={pendingRequest}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect width="18" height="18" x="3" y="3" rx="2" />
//             <path d="m16 12-4-4-4 4" />
//             <path d="M12 16V8" />
//           </svg>
//         </button>

//         <span>{votes}</span>

//         <button formAction={downvoteFormAction} disabled={pendingRequest}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <rect width="18" height="18" x="3" y="3" rx="2" />
//             <path d="M12 8v8" />
//             <path d="m8 12 4 4 4-4" />
//           </svg>
//         </button>
//       </form>
//     </article>
//   );
// }
// **************************************************

// **************************************************
// A-04: Optimistically handles upvote/downvote actions with React Server Actions, updating UI instantly while managing pending states.
// **************************************************
import { use, useOptimistic, useActionState } from 'react';
import { OpinionsContext } from "../store/opinions-context";

export function Opinion({ opinion: { id, title, body, userName, votes } }) {

  const [upvoteOpinion, downvoteOpinion] = use(OpinionsContext);
  const [upvoteFormState, upvoteFormAction, upvotePending] = useActionState(upvoteAction);
  const [downvoteFormState, downvoteFormAction, downvotePending] = useActionState(downvoteAction);

  const pendingRequest = upvotePending || downvotePending;
  const [optimisticVotes, setVotesOptimistically] = useOptimistic(votes, (prevVotes, mode) =>
    (mode == 'up' ? prevVotes + 1 : prevVotes - 1)
  );

  async function upvoteAction() {
    setVotesOptimistically('up');

    await upvoteOpinion(id);
  }

  async function downvoteAction() {
    setVotesOptimistically('down');

    await downvoteOpinion(id);
  }

  return (
    <article>
      <header>
        <h3>{title}</h3>
        <p>Shared by {userName}</p>
      </header>
      <p>{body}</p>
      <form className="votes">
        <button formAction={upvoteFormAction} disabled={pendingRequest}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="m16 12-4-4-4 4" />
            <path d="M12 16V8" />
          </svg>
        </button>

        <span>{optimisticVotes}</span>

        <button formAction={downvoteFormAction} disabled={pendingRequest}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M12 8v8" />
            <path d="m8 12 4 4 4-4" />
          </svg>
        </button>
      </form>
    </article>
  );
}
// **************************************************