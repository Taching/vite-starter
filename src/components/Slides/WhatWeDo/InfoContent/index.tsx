/* eslint-disable react/prop-types */
/* eslint-disable no-return-assign */
import { useEffect } from 'react';
import './style.scss';

// eslint-disable-next-line react/prop-types
export default function ContentInfo({ timeLine }) {
  useEffect(() => {
    timeLine
      .from(
        ['.h1', '.py-6', '.columns-2'],
        {
          opacity: 0,
          y: 200,
          skewY: 20,
          ease: 'back(1.2).out',
          duration: 0.6,
        },
        'Start'
      )
      .to(
        ['.h1', '.py-6', '.columns-2'],
        {
          opacity: 1,
          y: 10,
          skewY: 0,
          ease: 'power4.out',
          duration: 0.8,
        },
        0.4
      );
  });
  return (
    <div className="hero content-style">
      <div className="content-style_container">
        <div>
          <h1 className="text-5xl  h1 font-bold content-style_text">
            What We Do
          </h1>
          <p className="py-6 content-style_subtext">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        <div className="columns-2">
          <img
            src="https://placeimg.com/260/400/arch"
            className="w-full  shadow-2xl content-style_img"
            alt=""
          />
          <img
            src="https://placeimg.com/260/400/arch"
            className="w-full shadow-2xl content-style_img"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
