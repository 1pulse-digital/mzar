import React from "react";
import Image from "next/image";
import circle from "../images/full-circle.png";
import design from "../images/left-design.png";

export const About = () => {
  return (
    <div id="about" className={"mt-28 lg:mt-32"}>
      <div
        className={
          "-ml-5 w-60 animate-blob pt-14 sm:w-[350px] md:-ml-0 md:w-[380px] lg:absolute  lg:w-[450px] 2xl:w-[600px]  4xl:w-[700px] 5xl:w-[800px] "
        }
      >
        <Image src={design} className="" alt="Mesh-loop" />
      </div>
      <div className={"px-8"}>
        <h1
          className={
            "flex  justify-center pb-4 text-4xl font-bold tracking-wide text-primary lg:justify-center"
          }
        >
          About
        </h1>

        <div className={"flex justify-center pb-5 lg:justify-center"}>
          <div
            className={
              " flex justify-center pb-8 text-2xl font-light text-primary lg:justify-center"
            }
          >
            <p>
              What is
              <strong className="pl-2 text-2xl font-bold">mZAR</strong>?
            </p>
          </div>
        </div>

        <div className={"grid lg:grid-cols-4"}>
          <div></div>
          <div></div>
          <div className={"col-span-2 lg:pr-32"}>
            <p
              className={
                "flex py-2 pt-4 font-roboto  text-lg font-normal text-text "
              }
            >
              We have created mZAR to bridge the gap between TradFi and DeFi, to
              bring the power of blockchain to ZAR. Creating a movement towards
              a more transparent and open financial market.
            </p>
            <p
              className={"py-2 pt-4 font-roboto text-lg font-normal text-text "}
            >
              mZAR is a fully collateralised South African ZAR stablecoin, based
              on the open fiat stablecoin framework of Mesh. mZAR is fully
              redeemable for ZAR held in an account managed by Mesh.
            </p>
            <h2 className={"py-2 font-poppins text-lg font-semibold text-text"}>
              1 mZAR equals 1 ZAR. At all times
            </h2>
            <a
              href="assets/mZAR-whitepaper.pdf"
              target={"_blank"}
              rel="noopener noreferrer"
              className="text-lg underline pointer text-secondary"
            >
              Access the mZAR whitepaper here
            </a>
          </div>
        </div>
        <div
          className={
            "visible flex animate-blob items-center justify-center pt-10 md:flex lg:hidden "
          }
        >
          <Image
            src={circle}
            alt="full-circle"
            width={"200px"}
            height={"200px"}
          />
        </div>
      </div>
    </div>
  );
};
