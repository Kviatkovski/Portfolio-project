import Card from "../main/card/Card";

const React = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return <Card project={project} key={project.id} />;
      })}
    </>
  );
};

export default React;
