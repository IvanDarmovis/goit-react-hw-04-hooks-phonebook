import React from 'react';
import s from './Section.module.css';

function Section({ title }) {
  return (
    <div className={s.section}>
      <p>{title}</p>
    </div>
  );
}

export default Section;
