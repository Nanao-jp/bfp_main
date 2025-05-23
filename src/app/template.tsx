'use client';

import styles from './template.module.css'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div 
      className={styles.pageWrapper}
      data-modal-open="false"
    >
      {children}
    </div>
  )
} 