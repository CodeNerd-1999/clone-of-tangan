import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import Btn from "../../components/Btn";

let slider = [
  {
    number: 1,
    title: "SARAH",
    desc: "I consulted Didier Martin in reflexology plantar and Abhyanga massage. It is a very attentive and passionate person by his profession. Two sessions were enough to solve my problem.",
  },
  {
    number: 2,
    title: "FRANCIS",
    desc: `The Abhyanga massage was a
    real feel-good break that got me
    allowed to regain energy
    this period of confinement.`,
  },
  {
    number: 3,
    title: "VALERIE",
    desc: `Thank you for your very approach.
    body wellness professional
    respecting the person. good touch,
    nice energy, good massage. That
    ask for more?`,
  },
  {
    number: 4,
    title: "PATRICIA",
    desc: `A moment when I found peace,
    tranquility to drop me in
    a warm setting. Didier Martin knows
    take care with gentleness and harmony.`,
  },
];

export default function MyPatients() {
  let DescRef1 = useRef(null);
  let NumberRef1 = useRef(null);
  let sarahTitleRef = useRef(null);
  let MyPatientsRef = useRef(null);
  let wrapperdescRef = useRef(null);

  useLayoutEffect(() => {
    let techniquessSection = document.querySelector(".techniquess");
    let hiddenTechniques = () => {
      gsap.to(document.body, {
        backgroundColor: "#f5f5f5",
        duration: 0.35,
        ease: "ease",
      });
      gsap.to(techniquessSection, {
        opacity: 0,
        ease: "Expo.easeOut",
        duration: 0.7,
      });
    };
    let showTechniques = () => {
      gsap.to(document.body, {
        backgroundColor: "#000",
        duration: 0.35,
        ease: "ease",
      });
      gsap.to(techniquessSection, {
        opacity: 1,
        duration: 0.7,
        ease: "Expo.easeOut",
      });
    };
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(MyPatientsRef.current, {
      duration: 0.5,
      ease: "Expo.easeOut",
      scrollTrigger: {
        trigger: MyPatientsRef.current,
        start: "top 80%",
        end: "bottom 5%",
        markers: true,
        onEnter: hiddenTechniques,
        onEnterBack: hiddenTechniques,
        onLeave: showTechniques,
        onLeaveBack: showTechniques,
      },
    });
  });

  return (
    <>
      <div ref={MyPatientsRef} className="container-fluid MyPatients">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="wrapper_MyPatients_title">
              <p className="title_myPatients">
                My Patients <br />
                are talking about it
              </p>
              <div className="border_b_myPatients"></div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="wrapper_MyPatients_btn">
              <Btn
                borderColor={"#000"}
                firstText="makean appointment"
                secondText="takea break"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4">
            <div className="wrapper_number_slider">
              <span ref={NumberRef1} className="current_slider_number">
                01
              </span>
              <span className="between_line"></span>
              <span className="constant_number">04</span>
            </div>
            <div className="wrapper_title_slider">
              <p ref={sarahTitleRef} className="current_title_slider">
                SARAH
              </p>
            </div>
            <div className="wrapper_slider_btns">
              <div className="prev_btn">
                <span>&#x2303;</span>
              </div>
              <div className="next_btn">
                <span>&#x2303;</span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div ref={wrapperdescRef} className="wrapper_desc_slider">
              <p ref={DescRef1} className="current_desc_slider">
                {slider[0].desc}
              </p>
              <div className="border_desc_slider"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
