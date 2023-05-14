import { useState, useEffect } from 'react';
import Cookies from '.';
import CloseIcon from '@mui/icons-material/Close';

export default function CookieBanner() {
  const [openCookiesModal, setCookiesModal] = useState(false);
  const [openCookieBanner, setCookieBanner] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('isCookieBannerSeen')) {
      setCookieBanner(false);
    }
  }, []);

  return (
    <div
      className={`${
        openCookieBanner ? '' : 'hidden'
      } fixed cookie-banner bottom-0  bg-white z-[2300000001] w-full py-8 px-5 md:px-10 xl:pl-20 text-black shadow-2xl flex justify-between items-start`}
    >
      <p className="text-sm md:text-base md:w-[90%] xl:w-4/5">
        We use cookies on our website to improve your user experience. By using
        Wakapadi, you consent to our use of cookies. To learn more about our use
        of cookies,{' '}
        <button
          className="underline"
          onClick={() => {
            setCookiesModal(true);
            setCookieBanner(false);
          }}
        >
          view our detailed Cookie Policy.
        </button>
      </p>
      <button
        onClick={() => {
          localStorage.setItem('isCookieBannerSeen', 'true');
          setCookieBanner(false);
        }}
        className="bg-primary flex p-2 items-center rounded-full"
      >
        <CloseIcon className="text-white" />
      </button>
      <div
        className={` ${
          openCookiesModal ? '' : 'hidden'
        } fixed top-0  w-full  z-[100]  `}
      >
        <Cookies
          openCookiesModal={openCookiesModal}
          setCookiesModal={setCookiesModal}
        />
      </div>
      <style>
        {`
          @-webkit-keyframes slidein {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          
          @-moz-keyframes slidein {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          
          @keyframes slidein {
            0% {
              opacity: 0;
              bottom: -200px;
            }
            100% {
              opacity: 1;
              bottom: 0px;
            }
          }
          .cookie-banner {
            -webkit-animation: slidein 1s ease-in alternate;
            -moz-animation: slidein 1s ease-in alternate;
            animation: slidein 1s ease-in alternate;
          }
          `}
      </style>
    </div>
  );
}