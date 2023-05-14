import { useState } from "react";
import { Modal, Slide } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  showInline = false,
}: {
  showInline?: boolean;
}) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeNavLink, setActiveNavLink] = useState("");
  const setActiveLink = (name: string) => {
    setActiveNavLink(name);
  };

  return (
    <header
      className={`  md:top-0 z-[100]  px-[20px] md:px-[50px]  lg:px-[100px] bg-white outline-none ${
        isMenuOpen ? "invisible" : " visible"
      }`}
      style={{
        boxShadow: "0 5px 5px -5px #00000029",
        position: "relative",
      }}
    >
      <div
        className={` h-[89px]  mdMax:px-5 w-full lg:w-4/5 xl:w-[70%] grid grid-cols-2 md:flex  md:justify-between items-center`}
      >
        <div className="flex items-center  ">
          <div className="/">
            <img
              src="/image/logo.svg"
              alt="wakapadi logo"
              className="mdMax:scale-90 -ml-3"
            />
          </div>
        </div>
        <div className="flex nav z-50 font-medium  xl:pl-0 smMax:space-x-5 md:space-x-6 lg:space-x-8 mdMax:hidden">
          <Link href="https://wakapadi.io" target="_blank" className="/">
            <span>Home</span>
          </Link>
          <>
            <Link href="https://wakapadi.io" target="_blank">
              <span>Ask for guide</span>
            </Link>
            <Link href="https://wakapadi.io" target="_blank">
              <span>Become a guide</span>
            </Link>
          </>
          <Link href="/" className="text-primary">
            <span>Blog</span>
          </Link>
          <Link href="https://wakapadi.io" target="_blank">
            <span>About</span>
          </Link>
          <Link href="https://wakapadi.io" target="_blank">
            <span>Support</span>
          </Link>
        </div>
        <div className=" text-end">
          <button
            className="text-primary h-6 w-6 md:hidden outline-none"
            onClick={() => setMenuOpen(!isMenuOpen)}
          >
            <svg
              id="Component_18_1"
              data-name="Component 18 – 1"
              xmlns="http://www.w3.org/2000/svg"
              width="34.547"
              height="34.547"
              viewBox="0 0 34.547 34.547"
            >
              <path
                id="Path_68077"
                data-name="Path 68077"
                d="M0,0H34.547V34.547H0Z"
                fill="none"
              />
              <path
                id="Path_68078"
                data-name="Path 68078"
                d="M21.713,24.153v2.879H5.879V24.153Zm7.2-10.076v2.879H3V14.076ZM26.031,4V6.879H10.2V4Z"
                transform="translate(1.318 1.758)"
                fill="#1a76d2"
              />
            </svg>

            <span className="sr-only">open menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        showInline={showInline}
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
      />
    </header>
  );
}

interface Props {
  isMenuOpen: boolean;
  setMenuOpen: (arg: boolean) => void;
  showInline?: boolean;
}

const MobileMenu = (props: Props) => {
  const [activeNavLink, setActiveNavLink] = useState("splitLocation[1]");

  return (
    <Modal open={props.isMenuOpen ? true : false} hideBackdrop={true}>
      <Slide
        in={props.isMenuOpen ? true : false}
        timeout={700}
        direction="down"
        className=" bg-[rgba(0,0,0,0.8)] h-screen outline-none"
      >
        <div>
          <div className="h-[89px] px-5 bg-white  flex  justify-between items-center drop-shadow-lg">
            <div className="/">
              <img
                src="/image/logo.svg"
                alt="wakapadi logo"
                className="mdMax:scale-90 mdMax:-ml-3"
              />
            </div>
            <button
              className="text-primary h-6 w-6 outline-none"
              onClick={() => props.setMenuOpen(!props.isMenuOpen)}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.46585 8.01314L15.6959 1.78287C16.1014 1.37762 16.1014 0.722377 15.6959 0.317124C15.2907 -0.0881297 14.6354 -0.0881297 14.2302 0.317124L7.99992 6.54739L1.76983 0.317124C1.36439 -0.0881297 0.709336 -0.0881297 0.304083 0.317124C-0.101361 0.722377 -0.101361 1.37762 0.304083 1.78287L6.53417 8.01314L0.304083 14.2434C-0.101361 14.6487 -0.101361 15.3039 0.304083 15.7092C0.506045 15.9113 0.771595 16.0129 1.03696 16.0129C1.30232 16.0129 1.56768 15.9113 1.76983 15.7092L7.99992 9.47889L14.2302 15.7092C14.4323 15.9113 14.6977 16.0129 14.9631 16.0129C15.2284 16.0129 15.4938 15.9113 15.6959 15.7092C16.1014 15.3039 16.1014 14.6487 15.6959 14.2434L9.46585 8.01314Z"
                  fill="currentColor"
                />
              </svg>
              <span className="sr-only">close menu</span>
            </button>
          </div>
          <div className=" flex flex-col px-5 bg-white rounded-b-3xl  text-center ">
            <Link
              href="https://wakapadi.io"
              target="_blank"
              className={` border-b border-lightGray cursor-pointer py-5 `}
              onClick={() => {
                props.setMenuOpen(!props.isMenuOpen);
                setActiveNavLink("home-page");
              }}
            >
              <div className="">Home</div>
            </Link>
            <>
              {" "}
              <Link
                href="https://wakapadi.io"
                target="_blank"
                className={` border-b border-lightGray cursor-pointer py-5 `}
                onClick={() => {
                  props.setMenuOpen(!props.isMenuOpen);
                  setActiveNavLink("ask-for-guide");
                }}
              >
                Ask for guide
              </Link>
              <Link
                href="https://wakapadi.io"
                target="_blank"
                className={` border-b border-lightGray cursor-pointer py-5 `}
                onClick={() => {
                  props.setMenuOpen(!props.isMenuOpen);
                  setActiveNavLink("become-a-guide");
                }}
              >
                Become a guide
              </Link>
            </>
            <Link
              href="/"
              target="_blank"
              className={`border-b border-lightGray cursor-pointer py-5 `}
            >
              <span>Blog</span>
            </Link>
            <Link
              href="https://wakapadi.io"
              className={` border-b border-lightGray py-5 `}
              onClick={() => {
                props.setMenuOpen(!props.isMenuOpen);
                setActiveNavLink("about");
              }}
            >
              About
            </Link>
            <Link
              href="https://wakapadi.io"
              target="_blank"
              className={`py-4 `}
              onClick={() => {
                props.setMenuOpen(!props.isMenuOpen);
                setActiveNavLink("support");
              }}
            >
              Support
            </Link>
          </div>
        </div>
      </Slide>
    </Modal>
  );
};
