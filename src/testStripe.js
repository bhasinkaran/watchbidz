import React from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

const TestStripe = () => {
        const [product] = React.useState({
                name: "WatchBidz",
                price: 500.00,
                description: "Please renew your WatchBidz monthly subscription"
              });
            
              async function handleToken(token, addresses) {
                // console.log(token,address)
                const response = await axios.post(
                        "http://localhost:3000/checkout",
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
                    stripeKey="pk_test_51H73o1DdNi861xSpjAOt3cYsuvw8NxrKiOQ4cCHMU6qoCbkAJ9YcoQsN6rMc6EvL364r7NaQQSeGpFyusGCgVaHc00T8nI9B43"
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