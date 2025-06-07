// **************************************************
// A-02: Provides a context for managing and updating the global state of user opinions, including fetch, add, upvote, and downvote operations.
// **************************************************
import { createContext, useEffect, useState } from 'react';

const baseUrl = "http://localhost:3000";

export const OpinionsContext = createContext({
  opinions: null,
  addOpinion: (opinion) => { },
  upvoteOpinion: (id) => { },
  downvoteOpinion: (id) => { },
});

export function OpinionsContextProvider({ children }) {
  const [opinions, setOpinions] = useState();

  useEffect(() => {
    async function loadOpinions() {
      const response = await fetch(`${baseUrl}/opinions`);
      const opinions = await response.json();
      setOpinions(opinions);
    }

    loadOpinions();
  }, []);

  async function addOpinion(enteredOpinionData) {
    const response = await fetch(`${baseUrl}/opinions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enteredOpinionData),
    });

    if (!response.ok) {
      return;
    }

    const savedOpinion = await response.json();
    setOpinions((prevOpinions) => [savedOpinion, ...prevOpinions]);
  }

  function upvoteOpinion(id) {
    setOpinions((prevOpinions) => {
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes + 1 };
        }
        return opinion;
      });
    });
  }

  function downvoteOpinion(id) {
    setOpinions((prevOpinions) => {
      return prevOpinions.map((opinion) => {
        if (opinion.id === id) {
          return { ...opinion, votes: opinion.votes - 1 };
        }
        return opinion;
      });
    });
  }

  const contextValue = {
    opinions: opinions,
    addOpinion,
    upvoteOpinion,
    downvoteOpinion,
  };

  return <OpinionsContext value={contextValue}>{children}</OpinionsContext>;
}
// **************************************************