import { Link, useLocation } from "react-router-dom";

export type TLink = {
  text: string;
  linkTo: string;
  icon?: JSX.Element;
  notShow?: boolean;
  handleClose: () => void;
};

export default function SidebarLink(props: TLink) {
  const location = useLocation();
  return (
    <Link
      onClick={props.handleClose}
      to={props.linkTo}
      className={`flex items-center ${
        location.pathname == props.linkTo
          ? "bg-yellow-300 text-yellow-900"
          : "text-amber-100"
      } hover:bg-yellow-300 transition-colors duration-150 ease-in-out hover:text-yellow-900 px-4 py-2 rounded-md font-semibold`}
    >
      <span className="mr-3">{props.icon}</span>
      <span>{props.text}</span>
    </Link>
  );
}
