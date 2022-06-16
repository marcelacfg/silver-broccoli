import { createContext, useCallback, useState } from "react";
import { api, tmdb } from "../services/api";

export const CelebrityContext = createContext({
  celebrity: {},
  facts: [],
  knownfor: [],
});

const CelebrityProvider = ({ children }) => {
  const [celebrityState, setCelebrityState] = useState({
    loading: false,
    teste: false,
    celebrity: {
      name: "Teste",
      category: "undefined",
      birthday: undefined,
      birthplace: undefined,
      age: undefined,
      birthsign: undefined,
      avatar: undefined,
    },
    facts: [],
    knownfor: [],
  });

  // const getCelebrity = async (celebrityName) => {
  //   api.get(`search/${celebrityName}`).then(({ data: { celebrity } }) => {
  //     setCelebrityState((prevState) => ({
  //        ...prevState,
  //        celebrity: {
  //          name: celebrity.name,
  //          category: celebrity.category,
  //          birthday: celebrity.birthday,
  //          birthplace: celebrity.birthplace,
  //          age: celebrity.age,
  //          birthsign: celebrity.birthsign,
  //       //facts: [],
  //       },
  //     }));
  //   });
  // };

  const getCelebrity = (celebrityName) => {
    setCelebrityState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`search/${celebrityName}`)
      .then(function (response) {
        setCelebrityState((prevState) => ({
          ...prevState,
          hasCelebrity: true,
          celebrity: {
            name: response.data.name,
            category: response.data.category,
            birthday: response.data.birthday,
            birthplace: response.data.birthplace,
            age: response.data.age,
            birthsign: response.data.birthsign,
            avatar: response.data.base64Images[0],
          },
          facts: response.data.moreFacts,
        }));
      })
      .finally(() => {
        setCelebrityState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getCelebrityKnownFor = (celebrityName) => {
    console.log("metodo getCelebrityKnownFor: ", celebrityName);

    tmdb
      .get(
        `person?api_key=4e1cf355e12df1a9d31c99490f8cc7e7&query=${celebrityName}`
      )
      .then(function (response) {
        console.log("teste", response.data);
        setCelebrityState((prevState) => ({
          ...prevState,
          knownfor: response.data.results[0].known_for,
        }));
      });
  };

  const contextValue = {
    celebrityState,
    getCelebrity: useCallback(
      (celebrityName) => getCelebrity(celebrityName),
      []
    ),
    getCelebrityKnownFor: useCallback(
      (celebrityName) => getCelebrityKnownFor(celebrityName),
      []
    ),
  };

  return (
    <CelebrityContext.Provider value={contextValue}>
      {children}
    </CelebrityContext.Provider>
  );
};

export default CelebrityProvider;
