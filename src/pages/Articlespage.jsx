import React from "react";

const ArticlesPage = ({match}) => {
    const name=match.params.name;
  return (
    <>
      <h1>This is the {name} article</h1>    
    </>
  );
};

export default ArticlesPage;
