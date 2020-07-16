const functions = require('firebase-functions');
const cors = require("cors");
const express = require("express");
const stripe = require("stripe")("sk_test_51H5TONDloTph5relPle8FAjS6XAupLCacktFzIWpUYJaRDyUUjNtJytUVMNNVqSdKgrRjL6kjGEIf89HjIr90vGV00mCow7kA7");
const uuid = require("uuid/v4");
const app = express();
app.use(express.json());
app.use(cors());
app.get('/timestamp', (req, res)=>{
        res.send(`${Date.now()}`);
})
app.post("/checkout", async (req, res) => {
        console.log("Request:", req.body);
      
        let error;
        let status;
        try {
          const { product, token } = req.body;
      
          const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
          });
      
          const idempotency_key = uuid();
          const charge = await stripe.charges.create(
            {
              amount: product.price * 100,
              currency: "usd",
              customer: customer.id,
              receipt_email: token.email,
              description: `Purchased the ${product.name}`,
              shipping: {
                name: token.card.name,
                address: {
                  line1: token.card.address_line1,
                  line2: token.card.address_line2,
                  city: token.card.address_city,
                  country: token.card.address_country,
                  postal_code: token.card.address_zip
                }
              }
            },
            {
              idempotency_key
            }
          );
          console.log("Charge:", { charge });
          status = "success";
        } catch (error) {
          console.error("Error:", error);
          status = "failure";
        }
      
        res.json({ error, status });
      });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app);
