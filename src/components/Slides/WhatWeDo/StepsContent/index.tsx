import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import STEPS_TEXT from '../../../../assets/constants/steps';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ContentSteps() {
  const listClassActive = 'step step-secondary steps-style_list';
  const listClassNeutral = 'step step-neutral steps-style_list';

  const listRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const AddToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };
  useEffect(() => {
    const ul = listRef.current;
    gsap.fromTo(
      ul,
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        ease: 'back(1.4).out',
        duration: 1.5,
      }
    );
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          autoAlpha: 1,
          duration: 1,
          ease: 'back(1.6).out',
          ScrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: 'top center=+100',
            toggleActions: 'play none none reverse',
            markers: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="steps steps-style">
      <ul className="steps steps-vertical" ref={listRef}>
        {STEPS_TEXT.map(({ id, title, description }) => (
          <li
            ref={AddToRefs}
            key={id}
            className={id === 1 ? listClassActive : listClassNeutral}
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
