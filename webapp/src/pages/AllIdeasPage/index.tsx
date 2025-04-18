import { trpc } from "../../lib/trpc"


export const AllIdeasPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getIdeas.useQuery()
    if (isLoading || isFetching) {
      return <span>Loading...</span>
    }

    if (isError) {
      return <span>Error: {error.message}</span>
    }
    
     return (
      <div>
        <h1>All Ideas</h1>
        {data.ideas.map((ideas) => {
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