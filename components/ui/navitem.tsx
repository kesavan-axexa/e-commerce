"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { NavbarItemProps } from "@/types/interfaces";

const NavbarItem: React.FC<NavbarItemProps> = ({
  title,
  subcategories = [],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center space-x-1 font-medium text-foreground hover:text-primary-foreground transition">
        <span>{title}</span>
        {subcategories.length > 0 && <ChevronDown size={16} />}
      </button>

      {subcategories.length > 0 && open && (
        <div className="absolute top-full left-0 mt-2 w-44 bg-card text-card-foreground border border-border rounded shadow-lg flex flex-col z-50">
          {subcategories.map((sub, index) => (
            <a
              key={index}
              href={`#${sub.toLowerCase()}`}
              className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition"
            >
              {sub}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavbarItem;
