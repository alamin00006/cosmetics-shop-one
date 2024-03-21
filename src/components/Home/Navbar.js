import React from "react";
import logo from "../../image/pic3.png";

import Image from "next/image";
import Link from "next/link";
const Navber = () => {
  return (
    <div className="home_page">
      <div className="d-flex justify-content-center mt-2">
        <Link href="https://www.facebook.com/NigarFashionWorld" target="_blank">
          <Image
            src={logo}
            style={{ width: "100px", height: "100px" }}
            alt=""
          />
        </Link>
      </div>
      <div
        className="py-3 d-flex justify-content-center mt-3"
        style={{
          backgroundColor: "yellow",
          color: "black",
        }}
      >
        <h4 className="px-3">
          স্মার্ট নেস ফিরিয়ে আনুন খুব অল্প সময়ে এবং ন্যাচারাল উপায়ে
        </h4>
      </div>
    </div>
  );
};

export default Navber;
