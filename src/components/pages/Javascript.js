import Card from "../main/card/Card";

const Javascript = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return <Card project={project} key={project.id} />;
      })}
    </>
  );
};

export default Javascript;
