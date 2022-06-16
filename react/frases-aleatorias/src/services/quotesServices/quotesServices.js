// export const getQuote = () =>
//   fetch(
//     "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
//   ).then((response) => response.json());
//fetch(process.env.REACT_APP_API).then((response) => response.json());

// export const getQuote = () =>
//   '{"quoteText":"Heaven, in the production of things, is sure to be bountiful to them, according to their qualities. Hence the tree that is flourishing, it nourishes, while that which is ready to fall, it overthrows. ", "quoteAuthor":"Confucius"}';

export const getQuote = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "28287e0b04mshd345577db422f35p1bfe9fjsnd9dda821acc9",
      "X-RapidAPI-Host": "marvel-quote-api.p.rapidapi.com",
    },
  };

  return fetch(process.env.REACT_APP_API, options).then((response) =>
    response.json()
  );
  // .then((response) => console.log(response))
  // .catch((err) => console.error(err));
};
