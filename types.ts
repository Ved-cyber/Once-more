import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface IngredientProps {
  name: string;
  origin: string;
  benefit: string;
}