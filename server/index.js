const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { sendEmail } = require("./email");
const { checkIfEmailExists, addEmailIfNew } = require("./databaseFunctions");
const { isValidEmail } = require("./inputControl");

app.get("/", (req, res) => {
  res.end("listenning!");
});

app.post("/get-early-access", async (req, res) => {
  const { email } = req.body;
  //Check if email passes the requirement
  if (!isValidEmail(email)) {
    return res.status(400).send("Invalid email address");
  }
  try {
    //Check if email already in DB
    const emailExists = await checkIfEmailExists(email);
    //Already exists
    if (emailExists.length > 0) {
      return res.status(400).send(`Offer already redeemed!`);
    } else {
      // does not exist, so add to DB and send email
      await addEmailIfNew(email);
      await sendEmail(email);
      return res.send(`Email sent to ${email}`);
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send("Error processing request");
  }
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
