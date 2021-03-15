import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import { json, urlencoded } from "body-parser";
import * as dotenv from "dotenv";
import * as compress from "compression";
import sirv from "sirv";
import path from "path";
import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2020-08-27",
});

const app = new App();
const port = +process.env.PORT || 5000;

app.use(logger());
app.use(json());
app.use(urlencoded({ extended: true }));

const assets = sirv("client/dist", {
  maxAge: 31536000, // 1Y
  immutable: true,
});

app.use(assets);

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

app.post("/payment", async (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd",
  };

  const chargeResponse = await stripe.charges.create(body);

  if (chargeResponse.status === "failed") {
    res.status(500).send({ error: chargeResponse.statement_descriptor_suffix });
  } else {
    res.status(200).send({ success: chargeResponse });
  }
});

app.listen(port, () =>
  console.log(`Now listening on http://localhost:${port}`)
);
