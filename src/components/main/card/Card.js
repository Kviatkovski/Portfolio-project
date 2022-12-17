import styles from "./Card.module.css";

const Card = ({ project }) => {
  const { url, name, id } = project;
  let Image = require(`../../../assets/images/img-${id}.jpg`);
  return (
    <div className={styles.div}>
      <a className={styles.a} href={url}>
        <img className={styles.img} src={Image} alt={name} />
        <span className={styles.span}>{`${name}`}</span>
      </a>
    </div>
  );
};

export default Card;
