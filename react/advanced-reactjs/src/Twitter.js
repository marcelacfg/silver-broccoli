import { useEffect, memo, useState } from "react";

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
};

function Twitter(props) {
  const { loading } = props;
  const [tweet, setTweet] = useState("title");
  useEffect(() => {
    const { posts } = props;
    console.log("teste", { posts });
  }); //componentDidMount se passar o array vazio. Só passa 1x

  useEffect(() => {
    console.log("componentDidUpdate", { loading });
  }, [loading]); //componentDidUpdate passa toda vez que loading for alterado

  useEffect(() => {
    return () => {
      console.log("Fui removido");
    };
  }); //componentWillUnmount com um return

  const handleTweet = () => {
    setTweet("Tweet atualizado");
  };

  console.log("Tweet Atualizado", tweet);

  const { posts } = props;
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      {posts[0].description}
    </div>
  );
}

export default memo(Twitter, areEqual);
