import { buffer } from "micro";
const admin = require("firebase-admin");
const FieldValue = admin.firestore.FieldValue;

//secure connection to firebase from the backend
const serviceAccount = require("../../artlines-579f5-firebase-adminsdk-b5r6a-fbd6955569.json");
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fullfillOrder = async (session) => {
  console.log("fulfilling order", session);
  const imageUrlsArray = session.metadata.images.split(",");
  const itemsTitleArray = session.metadata.title.split(",");

  return app
    .firestore()
    .collection("users")
    .doc(session.metadata.email)
    .collection("orders")
    .doc(session.id)
    .set({
      title: itemsTitleArray,
      amount: session.amount_total / 100,
      images: imageUrlsArray,
      timestamp: FieldValue.serverTimestamp(),
      // amount: session.amount_total / 100,
      // images: JSON.parse(session.metadata.images),
      // timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} has been added to the DB`);
    });
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    //verify that the event posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (error) {
      console.log("Error", error.message);
      return res.status(400).send(`Webhook error: ${error.message}`);
    }

    // Log the entire event object for inspection
    //console.log("Stripe Webhook Event:", event);

    //handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //fullfill the order push the order to firebase database
      return fullfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
