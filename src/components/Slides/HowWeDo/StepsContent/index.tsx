/* eslint-disable jsx-a11y/click-events-have-key-events */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import STEPS_TEXT from '../../../../assets/constants/steps';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ContentSteps() {
  // const [mouseEnter, setMouseEnter] = useState(false);
  const listClassActive = 'step step-secondary steps-style_list';
  const listClassNeutral = 'step step-neutral steps-style_list';

  const listRef = useRef(null);
  // const arr: string[] = [];
  // const revealsRef = useRef(arr);
  // revealsRef.current = arr;

  useEffect(() => {
    const ul = listRef.current;
    gsap.fromTo(
      ul,
      {
        opacity: 0,
        y: 200,
        scrollTrigger: {
          trigger: ul,
          start: 'top center +100',
          end: 'bottom top',
        },
      },
      {
        opacity: 1,
        y: 0,
        ease: 'back(1.4).out',
        duration: 1.5,
      }
    );

    // eslint-disable-next-line array-callback-return
    // revealsRef?.current.map((el, index) => {
    //   if (mouseEnter === true) {
    //     gsap.fromTo(
    //       el,
    //       {
    //         autoAlpha: 0,
    //       },
    //       {
    //         duration: 1,
    //         autoAlpha: 1,
    //         ease: 'power2',
    //         scrollTrigger: {
    //           trigger: el,
    //           start: 'top top+=100',
    //           end: 'bottom top',
    //           toggleActions: 'restart none none reverse',
    //           // markers: "true",
    //           scrub: true,
    //         },
    //       }
    //     );
    //   }
    // });
  });

  // const addToRefs = (el) => {
  //   if (el && !revealsRef.current.includes(el)) {
  //     revealsRef.current.push(el);
  //   }
  // };

  // const handleMouseEnter = () => {
  //   setMouseEnter(!mouseEnter);
  // };

  return (
    <div className="steps steps-style">
      <ul className="steps steps-vertical" ref={listRef}>
        {STEPS_TEXT.map(({ id, title, description }) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            // onScroll={handleMouseEnter}
            // ref={addToRefs}
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
