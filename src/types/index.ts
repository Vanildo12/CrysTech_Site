import { ReactNode } from "react";

export interface NavLink {
  name: string;
  href: string;
  icon?: ReactNode;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  benefits?: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  results: string[];
}

export interface Category {
  id: string;
  label: string;
}
