import React from 'react';
import s from './Section.module.css';

function Section({ title, children }) {
  return (
    <div className={s.section}>
      <p>{title}</p>
      {children}
    </div>
  );
}

export default Section;
