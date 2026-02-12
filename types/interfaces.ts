// types/interfaces.ts

export interface NavbarItemProps {
  title: string;
  subcategories?: string[];
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export interface CardProps {
  image: string;
  title: string;
  price: number | string;
  children?: React.ReactNode;
  className?: string;
}

export interface InputProps {
  placeholder?: string;
  type?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
