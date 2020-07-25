import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import liveKey from './stripeKey'
// import "./styles.css";

const TestStripe = () => {
        const [product] = React.useState({
                name: "WatchBidz",
                price: 0.50,
                description: "Please renew your WatchBidz monthly subscription"
              });
            
              async function handleToken(token, addresses) {
                // console.log(token,address)
                const response = await axios.post(
                        "https://watchbidz-10820.firebaseapp.com/checkout",
                //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
                  { token, product }
                );
                const { status } = response.data;
                console.log("Response:", response.data);
                if (status === "success") {
                  toast("Success! Check email for details", { type: "success" });
                } else {
                  toast("Something went wrong", { type: "error" });
                }
              }
            
              return (
                <div className="container">
                  <div className="product">
                    <h1>{product.name}</h1>
                    <h3>Standard monthly subscription - ${product.price}</h3>
                    
                  </div>
                  <StripeCheckout
                    stripeKey={liveKey}
                    token={handleToken}
                    amount={product.price * 100}
                    name="Monthly Subcription"
                    billingAddress
                    shippingAddress
                  />
                </div>
              );

}

export default TestStripe;