import Card from "../main/card/Card";

const AllProjects = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return <Card project={project} key={project.id} />;
      })}
    </>
  );
};

export default AllProjects;
