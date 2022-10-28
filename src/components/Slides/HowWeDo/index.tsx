import './style.scss';
import SlideContainer from '../SlideContainer';
import InfoContent from './InfoContent';
import StepsContent from './StepsContent';

export default function HowWeDo() {
  return (
    <SlideContainer>
      <div className="w-full">
        <div className="hwd-style h-[100vh] w-screen">
          <div className="hwd-style_flex">
            <div className="hwd-style_content hwd-style_info">
              <InfoContent />
            </div>

            <div className="hwd-style_content hwd-style_steps">
              <StepsContent />
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
