/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import STEPS_TEXT from '../../../../assets/constants/steps';
import './style.scss';

export default function ContentSteps({ timeLine }) {
  useEffect(() => {
    timeLine
      .from(
        '.steps-vertical',
        {
          opacity: 0,
          y: 200,
          ease: 'back(1.4).out',
          duration: 1,
        },
        'Start'
      )
      .to(
        '.steps-vertical',
        { opacity: 1, y: 0, ease: 'back(1.4).out', duration: 1 },
        '.5'
      );
  });

  return (
    <div className="steps steps-style">
      <ul className="steps steps-vertical">
        {STEPS_TEXT.map(({ id, title, description }) => (
          <li
            key={id}
            className={
              id === 1
                ? 'step step-secondary steps-style_list'
                : 'step step-neutral steps-style_list'
            }
          >
            <div className="steps-style_text">
              <div className="steps-style_title">
                <h1>{title}</h1>
              </div>
              <span className="steps-style_desc">
                <p>{description}</p>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
