import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

const tabs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About us",
    link: "/about",
  },
  {
    title: "Products",
    link: "/product",
  },
  {
    title: "Why us",
    link: "/why-us",
  },
  {
    title: "Contact us",
    link: "/contact",
  },
];

const ChipTabs = () => {
  const [selected, setSelected] = useState(tabs[0].link);

  return (
    <div className="px-4 py-14 bg-slate-900 flex items-center flex-wrap gap-2">
      {tabs.map((tab) => (
        <Chip
          text={tab.title}
          selected={selected === tab.link}
          setSelected={setSelected}
          key={tab.link}
        />
      ))}
    </div>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default ChipTabs;
