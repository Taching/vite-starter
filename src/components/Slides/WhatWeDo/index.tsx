import ContentInfo from './InfoContent';
import ContentSteps from './StepsContent';
import SlideContainer from '../SlideContainer';
import './style.scss';

export default function WhatWeDo() {
  return (
    <SlideContainer>
      <div className="w-full">
        <div className="wwd-style h-[100vh] w-screen">
          <div className="wwd-style_flex">
            <div className="wwd-style_content wwd-style_info">
              <ContentInfo />
            </div>

            <div className="wwd-style_content wwd-style_steps">
              <ContentSteps />
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
