import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinusSm } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

import Pic4 from "../../image/pic4.jpg";
import { Table } from "react-bootstrap";
import OrderForm from "./OrderForm";

const Product = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const products = [
    {
      productId: 1,
      productTitle: "Premium Necklace",
      productImg: Pic4,
      productPrice: Number(productQuantity) * 500,
      productQuantity: productQuantity,
    },
  ];

  return (
    <div className="mt-3">
      <div className="d-flex ">
        <h5
          className="py-2 fw-bold"
          style={{
            borderBottom: "1px solid #701d68",
          }}
        >
          আপনার প্রডাক্ট
        </h5>
      </div>

      <div className="mt-2">
        {products?.map((data) => (
          <Table key={data?.productId} bordered responsive variant="#701d68">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="d-flex gap-2">
                  {" "}
                  <img
                    style={{
                      width: "80px",
                      height: "80px",
                      border: "1px solid rgb(198, 198, 198)",
                      borderRadius: "5px",
                    }}
                    src={data?.productImg}
                    alt=""
                  />
                  <p className="mt-lg-4 ">
                    {data?.productTitle}
                    <MdOutlineClose />
                    {data?.productQuantity}
                  </p>
                </td>
                <td>
                  {" "}
                  <div className="d-flex mt-4">
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "rgb(255, 153, 0)",
                        color: "white",
                        cursor: "pointer",
                      }}
                      disabled={productQuantity === 1 ? true : false}
                    >
                      <HiOutlineMinusSm
                        onClick={() => setProductQuantity(productQuantity - 1)}
                      />
                    </button>
                    <div>
                      <input
                        className="ps-2"
                        style={{
                          width: "40px",
                          height: "25px",
                        }}
                        type="text"
                        name=""
                        id=""
                        value={data?.productQuantity}
                        disabled
                      />
                    </div>

                    <button
                      style={{
                        border: "none",
                        backgroundColor: "rgb(255, 153, 0)",
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      <FiPlus
                        onClick={() => setProductQuantity(productQuantity + 1)}
                      />
                    </button>
                  </div>
                </td>
                <td>
                  <p className="mt-4 product-price">{data?.productPrice} ৳</p>
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
      {/* Order Section */}
      <div className="mt-4">
        <h4 className="fw-bold mb-4">অর্ডার ফর্ম | Order Form</h4>
        <hr />
        <OrderForm data={products[0]} />
      </div>
    </div>
  );
};

export default Product;
