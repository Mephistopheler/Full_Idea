export const App = () => {
  const ideas = [
    { nick: 'cool-idea-nick', name: 'Idea 1', description: 'Description od idea 1...' },
    { nick: 'cool-idea-nick', name: 'Idea 2', description: 'Description od idea 2...' },
    { nick: 'cool-idea-nick', name: 'Idea 3', description: 'Description od idea 3...' },
    { nick: 'cool-idea-nick', name: 'Idea 4', description: 'Description od idea 4...' },
    { nick: 'cool-idea-nick', name: 'Idea 5', description: 'Description od idea 5...' },
  ];
  return (
    <div>
      <h1>GreatIdeas!</h1>
      {ideas.map((ideas) => {
        return (
          <div key={ideas.nick}>
            <h2>{ideas.name}</h2>
            <p>{ideas.description}</p>
          </div>
        );
      })}
    </div>
  );
};
