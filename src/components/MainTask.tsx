interface Props {
  title: string;
  description: string;
}

const MainTask = ({ title, description }: Props) => {
  return (
    <li className="list-group-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default MainTask;
