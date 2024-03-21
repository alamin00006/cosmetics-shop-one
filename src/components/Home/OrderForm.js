import { MdOutlineClose } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";

import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import LoadingModal from "./LoadingModal";
import { useRouter } from "next/router";

const OrderForms = () => {
  const [deliverCharge, setDeliverCharge] = useState(70);
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const orderSubmit = async (e) => {
    e.preventDefault();
    const customerPhone = e.target.customerPhone.value;
    const orderData = {
      customerName: e.target.customerName.value,
      customerPhone: customerPhone,
      customerAddress: e.target.customerAddress.value,
      productId: data?.productId,
      productTitle: data?.productTitle,
      // productImg: data?.productImg,
      productPrice: data?.productPrice + Number(deliverCharge),
      productQuantity: data?.productQuantity,
    };

    if (
      customerPhone?.length !== 11 ||
      customerPhone?.substring(0, 2) !== "01"
    ) {
      return toast.error("Sorry! you gave me wrong phone number");
    }

    try {
      handleShow();
      await axios.post(
        "https://cosmetics-server-single-page.onrender.com/api/order",
        orderData
      );

      toast.success("Thanks For Order");
      handleClose();
      router.push("/thank-you");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      id="orderNow"
      style={{
        backgroundColor: "yellow",
        padding: "15px",
        borderRadius: "10px",
        color: "black",
      }}
    >
      <h5
        style={{
          borderBottom: "1px dotted #701d68",
          paddingBottom: "15px",
        }}
      >
        অর্ডারটি কনফার্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার, লিখে অর্ডার
        বাটনে ক্লিক করুন
      </h5>

      <form onSubmit={orderSubmit}>
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div>
              <label htmlFor="" className="mb-1">
                আপনার নাম *
              </label>
              <br />
              <input
                className="ps-2"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  borderColor: "rgb(255, 153, 0)",
                }}
                type="text"
                placeholder="আপনার নাম *"
                name="customerName"
                id=""
                required
              />
            </div>
            <div>
              <label htmlFor="" className="mb-1 mt-2">
                মোবাইল নাম্বার *{" "}
              </label>
              <br />
              <input
                className="ps-2"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  borderColor: "rgb(255, 153, 0)",
                }}
                type="text"
                placeholder="মোবাইল নাম্বার *"
                name="customerPhone"
                id=""
                required
              />
            </div>

            <div className="mt-2">
              <label htmlFor="" className="mb-1">
                সম্পূর্ণ ঠিকানা *
              </label>
              <br />
              <input
                className="ps-2"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "5px",
                  borderColor: "rgb(255, 153, 0)",
                }}
                type="text"
                placeholder="সম্পূর্ণ ঠিকানা *"
                name="customerAddress"
                id=""
                required
              />
            </div>
          </div>
          {/* Order Information */}
          <div className="col-lg-6 col-md-6 col-sm-12 order-information">
            <h4>Your Order Information</h4>
            <div className="d-flex justify-content-between mt-3">
              <p>Product</p>
              <p>Sub-Total</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
              <p>{data?.productTitle}</p>
              <p>
                {" "}
                {data?.productQuantity}
                <MdOutlineClose />
                {data?.productPrice} ৳
              </p>
            </div>

            <div className="d-flex justify-content-between">
              <p>Sub-Total</p>
              <p> {data?.productPrice} ৳</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping Cost</p>
              <div>
                <div onClick={() => setDeliverCharge(70)}>
                  <input defaultChecked type="radio" name="charge" id="" />

                  <span className="ms-3">ঢাকা সিটিতে 70 ৳ </span>
                </div>

                <div onClick={() => setDeliverCharge(130)} className="my-2 ">
                  <input type="radio" name="charge" id="" />
                  <span className="ms-2">সিটির বাহিরে 130 ৳</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-between mt-3">
              <p>Total Amount</p>
              <p>{data?.productPrice + Number(deliverCharge)} ৳</p>
            </div>
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                position: "relative",
              }}
            >
              <p>Cash On Delivery</p>
              <IoMdArrowDropup
                style={{
                  color: "#f3efef",
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  top: "20px",
                  left: "30px",
                }}
              />

              <p
                style={{
                  backgroundColor: "#f3efef",
                  color: "black",
                  padding: "10px",
                }}
              >
                Pay with cash upon delivery.
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center order-confirm-button my-4">
          <button
            style={{
              backgroundColor: "green",
              border: "none",
              padding: "10px 25px",
              fontSize: "20px",
              fontWeight: "700",
              color: "white",
              borderRadius: "5px",
            }}
          >
            অর্ডার কনফার্ম করুন
            {data?.productPrice + Number(deliverCharge)} ৳
          </button>
        </div>
      </form>

      <LoadingModal show={show} setShow={setShow} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default OrderForms;
