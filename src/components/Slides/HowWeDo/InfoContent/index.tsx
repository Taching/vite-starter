import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

export default function ContentInfo() {
  useEffect(() => {
    gsap.fromTo(
      ['.h1', '.py-6', '.columns-2'],
      {
        opacity: 0,
        y: 200,
        skewY: 20,
        scrollTrigger: {
          trigger: ['.h1', '.py-6', '.columns-2'],
          start: 'top top+=500',
          toggleActions: 'restart none none reverse',
        },
      },
      {
        opacity: 1,
        y: 10,
        skewY: 0,
        ease: 'power4.out',
        duration: 1.5,
      }
    );
  }, []);
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
