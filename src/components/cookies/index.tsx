import CloseIcon from '@mui/icons-material/Close';
import { Modal, Slide } from '@mui/material';
import { AnalyticsSwitch, MarketingSwitch } from './switch'

interface Props {
  openCookiesModal: boolean;
  setCookiesModal: (arg: boolean) => void;
}

export default function Cookies(props: Props) {
  return (
    <>
      <Modal open={props.openCookiesModal ? true : false}>
        <Slide
          in={props.openCookiesModal ? true : false}
          timeout={700}
          direction="left"
        >
          <section className="bg-transparent h-[100vh] ">
            <div className="w-full md:w-[80%]  lg:w-1/2 text-black bg-white absolute right-0 px-5 md:px-10 font-sans h-full overflow-y-scroll">
              <h3 className="font-bold font-sans text-xl sm:text-2xl pt-8 pb-6 flex justify-between items-start">
                Cookies on the Wakapadi website
                <button
                  onClick={() => {
                    props.setCookiesModal(false);
                    localStorage.setItem('isCookieBannerSeen', 'true');
                  }}
                  className="bg-primary flex p-2 items-center rounded-full"
                >
                  <CloseIcon className="text-white" />
                </button>
              </h3>
              <p className="text-sm ">
                We’ve put some small files called “cookies” on your device to
                make our website work
              </p>
              <p className="text-sm mt-4">
                We&apos;d also like to use analytics cookies. These send information
                about how our site is used to Google Analytics, and we use this
                information to improve our website for you
              </p>
              <p className="text-sm mt-4">
                We won’t use other “optional cookies” unless you enable them
              </p>
              <p className="text-sm mt-4">
                Let us know if you are happy with this, and we’ll use a cookie
                to save your choice. You can read more about the cookies that we
                use here.
              </p>
              <button className="cookies-button w-[90%] md:w-96 py-3 border-2 hover:bg-green hover:border-green hover:text-white font-semibold sm:text-lg rounded-full my-8  text-primary border-primary">
                Accept Recommended Settings
              </button>
              <hr className="border mt-2 mb-8 border-lightGray border-opacity-60" />
              <p className="font-semibold text-black font-sans  text-lg">
                Necessary cookies
              </p>
              <p className="text-black text-sm mt-2 mb-8">
                Necessary cookies help the website to work. You may disable
                these by changing your browser settings, but this may affect how
                the website functions.
              </p>
              <hr className="border mt-2 mb-8 border-lightGray border-opacity-60" />
              <p className="font-semibold flex justify-between items-center text-black font-sans text-lg">
                Analytics
                <AnalyticsSwitch />
              </p>
              <p className="text-black text-sm mt-2 mb-8">
                We’d like to set Google Analytics cookies to help us improve our
                website by collecting information on how you use it. These
                cookies collect information in a way that does not directly
                identify you.
              </p>
              <hr className="border mt-2 mb-8 border-lightGray border-opacity-60" />
              <p className="font-semibold flex justify-between items-center text-black font-sans text-lg">
                Marketing
                <MarketingSwitch />
              </p>
              <p className="text-black text-sm mt-2 mb-16">
                Marketing cookies are used to display advertisements that are
                relevant to you. They are often used by third-party companies,
                and may be used to track you across other websites.
              </p>
            </div>
          </section>
        </Slide>
      </Modal>
      <style>
        {`
          .cookies-button:hover{
            opacity: 1;
            transition: 0.3s ease-in;
          }
          .cookies-button,
          {
            transition: 0.4s;
          }
        `}
      </style>
    </>
  );
}