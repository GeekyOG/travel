import { useState } from "react";
import Cookies from "../cookies";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  const pathname = "";

  const [activeNavLink, setActiveLink] = useState("");
  const [openCookiesModal, setCookiesModal] = useState(false);

  return (
    <footer className="mx-5 md:mx-[20px] xl:mx-[100px] pt-16 md:pt-20 pb-8 mt-[50px]">
      <section className=" flex justify-between flex-wrap ">
        <Grid
          container
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Grid item xs={12} md={3}>
            <div className="mdMax:col-span-2 sm:w">
              <img
                src="/image/logo.svg"
                alt="wakapadi logo"
                className="mdMax:scale-90 mdMax:-ml-3"
              />
              <p className=" pt-4 w-full text-gray smMax:text-sm lg:w-4/5 intro">
                Creating an unforgettable and safe travel experience
                <div className="pb-1 font-sans text-gray lgMax:text-sm space-y-3 md:space-y-5">
                  <p className="pt-5">
                    <div>
                      <b>Mailing Address</b>
                    </div>
                    <p className="address">
                      WakaPadi, Inc. <br /> 9450 SW Gemini Dr <br /> PMB 51255{" "}
                      <br />
                      Beaverton, Oregon, USA <br /> Phone: +15033886887 <br />
                      <p className="smMax:text-base" style={{ fontSize: 16 }}>
                        Email: admin@wakapadi.io
                      </p>
                    </p>
                  </p>
                </div>
                <div className="flex py-4">
                  <Link
                    href="https://www.instagram.com/wakapadi_io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/image/insta.svg"
                      alt="instagram"
                      className="w-6 h-6"
                    />
                  </Link>
                  <Link
                    href="https://m.facebook.com/wakapadi.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/image/facebook.svg"
                      alt="facebook"
                      className="w-6 h-6 ml-4"
                    />
                  </Link>
                  <Link
                    href="https://twitter.com/wakapadi_"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/image/twitter.svg"
                      alt="twitter"
                      className="w-6 h-6 ml-4"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/wakapadi/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/image/linkedin.svg"
                      alt="linkedin"
                      className="w-6 h-6 ml-4"
                    />
                  </Link>
                </div>
              </p>
            </div>
          </Grid>
          <Grid item xs={6} md={2} className="mt-[50px] md:mt-0">
            <h3>Our Users</h3>
            <Link className="mt-4" href="https://wakapadi.io" target="_blank">
              {" "}
              Traveller
            </Link>
            <Link className="mt-4" href="https://wakapadi.io" target="_blank">
              Become a Guide
            </Link>
          </Grid>
          <Grid item xs={6} md={2} className="mt-[50px] md:mt-0">
            <h3>Help and Support</h3>
            <Link className="mt-4" href="https://wakapadi.io" target="_blank">
              Help Centre
            </Link>
            <Link href="https://wakapadi.io" target="_blank" className="mt-4">
              Contacts
            </Link>
            {/* <a className="mt-4">Support</a> */}
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <div className="mt-[50px] md:mt-0">
              <h3>About</h3>
              <Link href="https://wakapadi.io" target="_blank" className="mt-4">
                About Guide
              </Link>
              <Link href="https://wakapadi.io" target="_blank" className="mt-4">
                Brand Guidelines
              </Link>
              <Link href="https://wakapadi.io" target="_blank" className="mt-4">
                Security
              </Link>

              <Link href="https://wakapadi.io" target="_blank" className="mt-4">
                Terms & Conditions
              </Link>
            </div>
          </Grid>
        </Grid>
      </section>
      <p className="text-gray smMax:text-sm mt-10 md:mt-12 text-center intro">
        © {new Date().getFullYear()} WakaPadi, Inc. Trademarks and brands are
        the property of their respective owners.
      </p>
      <div
        className={` ${
          openCookiesModal ? "" : "hidden"
        }  top-0  w-full  z-[100]  `}
      >
        <Cookies
          openCookiesModal={openCookiesModal}
          setCookiesModal={setCookiesModal}
        />
      </div>
    </footer>
  );
}
