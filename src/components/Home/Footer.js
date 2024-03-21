import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { FaSquareFacebook } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="text-center mt-4"
      style={{
        backgroundColor: "yellow",
        padding: "25px 0",
        color: "black",
      }}
    >
      <h4>যে কোন প্রয়োজনে কল করুন</h4>
      <div className="d-flex justify-content-center justify-items-center gap-3">
        {" "}
        <IoCallOutline style={{ width: "30px", height: "30px" }} />
        <p
          style={{
            fontSize: "20px",
          }}
        >
          01887136715
        </p>
      </div>
      <Link
        href="https://www.facebook.com/NigarFashionWorld"
        style={{
          textDecoration: "none",
          color: "black",
        }}
        target="_blank"
      >
        <p>
          {" "}
          Our Facebook Page
          <FaSquareFacebook
            className="ms-2"
            style={{ width: "24px", height: "24px" }}
          />
        </p>
      </Link>
    </div>
  );
};

export default Footer;
