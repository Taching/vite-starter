import gsap from 'gsap';
import ContentInfo from './InfoContent';
import ContentSteps from './StepsContent';
import SlideContainer from '../SlideContainer';
import './style.scss';

export default function WhatWeDo() {
  const tl = gsap.timeline();
  return (
    <SlideContainer>
      <div className="flex flex-col w-full ">
        <div className="wwd-style h-[100vh] w-screen">
          <div className="flex">
            <div className="wwd-style_content wwd-style_info">
              <ContentInfo timeLine={tl} />
            </div>

            <div className="wwd-style_content wwd-style_steps">
              <ContentSteps timeLine={tl} />
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
