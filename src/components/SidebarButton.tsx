import { TLink } from "./SidebarLink";

export type TButton = TLink & {
  action: () => void;
};

export default function SidebarButton({ text, icon, linkTo, action }: TButton) {
  return (
    <button
      onClick={action}
      className={`flex items-center w-full text-amber-100 hover:bg-yellow-300 transition-colors duration-150 ease-in-out hover:text-yellow-900 px-4 py-2 rounded-md font-semibold`}
    >
      <span className="mr-3">{icon}</span>
      <span>{text}</span>
    </button>
  );
}
