import ContentInfo from './InfoContent';
import ContentSteps from './StepsContent';
import SlideContainer from '../SlideContainer';
import Hero from './Hero';
import './style.scss';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="flex flex-col w-full ">
        <div className="hero__container h-[40vh] w-screen">
          <Hero />
        </div>
        <div className="wwd-style h-[60vh] w-screen">
          <div className="flex place-items-center">
            <div className="wwd-style_content wwd-style_info">
              <ContentInfo />
            </div>

            <div className="wwd-style_content wwd-style_steps">
              <ContentSteps />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="wwd-style_hero">
        <Hero />
      </div>
      <div className="flex place-items-center wwd-style">
        <div className="wwd-style_content wwd-style_info">
          <ContentInfo />
        </div>

        <div className="wwd-style_content wwd-style_steps">
          <ContentSteps />
        </div>
      </div> */}
    </SlideContainer>
  );
}
