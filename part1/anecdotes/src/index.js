import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const [best, setBest] = useState(0);

  const randomHandler = () => {
    const indexOfRandAnecdote = anecdotes.indexOf(
      anecdotes[Math.floor(Math.random() * anecdotes.length)]
    );
    setSelected(indexOfRandAnecdote);
  };

  const voteHandler = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);

    if (votesCopy[best] < votesCopy[selected]) {
      setBest(selected);
    }

    console.log(votes);
    console.log(anecdotes[best]);
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <h3>{anecdotes[selected]}</h3>
      <Button onClick={voteHandler} text="vote" />
      <Button onClick={randomHandler} text="next anecdote" />

      <h1>Anecdote with most votes</h1>
      <h3>{anecdotes[best]}</h3>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
