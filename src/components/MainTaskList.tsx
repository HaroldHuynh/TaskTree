import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MainTaskList = ({ children }: Props) => {
  return <ul className="list-group">{children}</ul>;
};

export default MainTaskList;
