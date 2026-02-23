// Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}