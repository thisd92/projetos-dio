import React from "react";
import { Layout } from "./components/Layout";
import NoSearch from "./components/NoSearch";
import { Profile } from "./components/Profile";
import { Repos } from "./components/Repos";
import useGithub from "./hooks/github-hooks";

const App = () => {
  const { githubState } = useGithub();
  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
              <Repos />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;