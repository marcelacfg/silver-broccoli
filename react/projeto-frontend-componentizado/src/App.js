import Layout from "./components/layout";
import Profile from "./components/profile";
import Abas from "./components/abas";
import useCelebrity from "./hooks/celebrity-hooks";
import NoSearch from "./components/no-search";

function App() {
  const { celebrityState } = useCelebrity();

  return (
    // <Layout>
    //   {celebrityState.hasCelebrity ? (
    //     <>
    //       {celebrityState.loading ? (
    //         <p>Loading...</p>
    //       ) : (
    //         <>
    //           <Profile />
    //           <Abas />
    //         </>
    //       )}
    //     </>
    //   ) : (
    //     <NoSearch />
    //   )}
    // </Layout>
    <Layout>
      {celebrityState.loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {celebrityState.hasCelebrity ? (
            <>
              <Profile />
              <Abas />
            </>
          ) : (
            <NoSearch />
          )}
        </>
      )}
    </Layout>
  );
}

export default App;
