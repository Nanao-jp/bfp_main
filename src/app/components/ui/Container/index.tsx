import { ReactNode } from 'react';
import { styles } from '../../../styles/constants';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`${styles.layout.container} ${className}`}>
      {children}
    </div>
  );
} 