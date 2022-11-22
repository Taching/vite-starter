/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-useless-fragment */
import gsap from 'gsap';
import { useEffect, useCallback, useContext } from 'react';
import { ThemeContextType } from '../../@types/theme';
import { ThemeContext } from '../../context/themeContext';
import './style.scss';

type ModalProps = {
  show: boolean;
  setShow: (value: boolean) => void;
  project: {
    name: string;
    solution: string;
    tech: string;
    id: number;
    releaseDate: string;
    imageUrl: string;
    description: string;
  };
};

export default function Modal({ show, project, setShow }: ModalProps) {
  const { changeScroll, scroll } = useContext(ThemeContext) as ThemeContextType;
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShow(false);
    },
    [setShow]
  );
  function handleCloseModal() {
    setShow(!show);
    changeScroll(!show);
  }
  const tl = gsap.timeline();
  useEffect(() => {
    if (show) {
      changeScroll(show);
      gsap.set('.modal-style', { scale: 0, opacity: 0 });
      tl.to('.modal-style', {
        scale: 1,
        opacity: 1,
        ease: 'back.out(1.1)',
        duration: 0.7,
      });
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [handleKeyPress, scroll, changeScroll, show, tl]);
  return (
    <>
      {show && (
        <div
          className="modal-style fixed inset-x-0 top-0 z-10"
          onClick={() => handleCloseModal()}
          role="button"
          tabIndex={0}
          onKeyDown={null}
        >
          <div className="flex flex-col relative my-6 mx-auto max-w-6xl">
            <div className="modal-style_container border-4 border-secondary rounded-lg shadow-lg bg-neutral outline-none focus:outline-none">
              <button
                className="p-1 ml-auto bg-transparent border-0 opacity-1 float-right leading-none font-semibold"
                onClick={() => handleCloseModal()}
                type="button"
              >
                <span className="modal-close bg-transparent opacity-9 block outline-none">
                  ×
                </span>
              </button>
              <div className="modal-header p-5">
                <h3 className="modal-header_name text-3xl font-semibold">
                  {project.name}
                </h3>
                <h5 className="modal-header_rDate text-1l p-1">
                  {project.releaseDate}
                </h5>
                <img
                  src={project.imageUrl}
                  alt=""
                  className="modal-header_image"
                />
                <ul className="modal-header_tech">
                  <li>Tech Stack: {show}</li>
                  <li>Frontend: React/TypeScript</li>
                  <li>Backend: Nextjs/TypeScript</li>
                </ul>
              </div>

              <div className="description p-6">
                <p className="description_p my-2 text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
