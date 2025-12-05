import type { JSX } from "react";

export interface TechStackItem {
    name: string;
    level: number; // 0-100
    icon: string | JSX.Element;
    category: 'expert' | 'advanced' | 'familiar';
  }
  
  export interface Project {
    name: string;
    description: string;
    stack?: string[];
    link?: string;
  }
  
  export interface Experience {
    company: string;
    role: string;
    period: string;
    location: string;
    achievements: string[];
    stack: string[];
    projects?: Project[];
    highlight?: boolean; // для особо важных позиций
  }
  
  export interface Education {
    institution: string;
    degree: string;
    expectedGraduation?: string;
    graduation?: string;
    status: 'completed' | 'learning' | 'paused';
  }
  
  export interface Metric {
    label: string;
    value: string | number;
    icon: string;
    animated?: boolean;
  }
  
  export type Theme = 'light' | 'dark';
  
  export interface AnimationConfig {
    duration: number;
    delay?: number;
    ease?: number[];
  }