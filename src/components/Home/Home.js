import React from "react";

import Pic1 from "../../image/pic1.jpg";
import Pic2 from "../../image/pic2.jpg";

import Pic4 from "../../image/pic4.jpg";

import { TiTick } from "react-icons/ti";

// import Reivew from "./Reivew";

import Product from "./Product";
import Slider from "react-slick";
import Image from "next/image";

const HomePageMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <div className="home_page">
      <div>
        <div className="container mt-4 ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <iframe
                style={{ borderRadius: "20px", width: "100%", height: "500px" }}
                className="video"
                src="https://www.youtube.com/embed/oJ7eUPwHp2U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullscreen
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 product-crousel ">
              <Slider {...settings}>
                <div>
                  <Image src={Pic1} alt="" />
                </div>

                <div>
                  <Image src={Pic2} alt="" />
                </div>

                <div>
                  <Image src={Pic4} alt="" />
                </div>
              </Slider>
            </div>
          </div>
          <div className="d-flex justify-content-center order-button">
            <a href="#orderNow">
              <button
                style={{
                  backgroundColor: "yellow",
                  border: "none",
                  padding: "5px 25px",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "black",
                  borderRadius: "5px",
                }}
              >
                অর্ডার করুন
              </button>
            </a>
          </div>
          <div className="d-flex justify-content-center mt-4 ">
            {/* <div className="col-lg-6 col-md-6 col-sm-12 product-crousel">
              <Image src={Pic1} style={{ width: "100%" }} alt="" />
            </div> */}
            <div
              style={{
                marginTop: "20px",
              }}
            >
              <h4 className="fw-bold mb-2">আমাদের থেকে নেকলেসটি কেন কিনবেন?</h4>
              <hr />
              <ul>
                <li>
                  {" "}
                  <TiTick
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#701d68",
                    }}
                  />
                  এটি অরিজিনাল Bluefin ব্র্যান্ডের নেকলেস।
                </li>
                <li>
                  {" "}
                  <TiTick
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#701d68",
                    }}
                  />
                  আমরা নিজেরা নেকলেসটির প্রোডাকশন করি।
                </li>
                <li>
                  {" "}
                  <TiTick
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#701d68",
                    }}
                  />
                  এটি অথেনটিক 24k গোল্ড প্লেটেড নেকলেস।
                </li>
                <li>
                  {" "}
                  <TiTick
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#701d68",
                    }}
                  />
                  নেকলেসের সাথে থাকছে Bluefin Authenticity Card
                </li>
                <li>
                  {" "}
                  <TiTick
                    style={{
                      width: "24px",
                      height: "24px",
                      color: "#701d68",
                    }}
                  />
                  প্রিমিয়াম Bluefin Box প্যাকেজিং।
                </li>
              </ul>
            </div>
          </div>
          {/* Product */}
          {/* <Product /> */}

          {/* Customer Review */}
          <div className="mt-4">
            <h4 className="fw-bold mb-4">আমাদের কাস্টমার রিভিউ</h4>
            <hr />
            {/* <Reivew /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageMain;
