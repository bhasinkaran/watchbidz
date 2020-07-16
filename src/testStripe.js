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
                const response = await axios.post(
                        "http://localhost:5000/app",
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
                    stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
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