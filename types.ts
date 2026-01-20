import React from 'react';

export type ViewState = 'HOME' | 'SIGNUP' | 'PAYMENT' | 'SUCCESS';

export interface UserData {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  price?: string;
  icon?: React.ReactNode;
  image?: string;
  reverse?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}