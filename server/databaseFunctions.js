const db = require("./database");

async function addEmailIfNew(email) {
  try {
    const existingEmail = await db.execute(
      "SELECT * FROM early_access WHERE email = ?",
      [email]
    );
    if (existingEmail[0].length > 0) {
      throw new Error("User already got the early access...");
    } else {
      await db.execute("INSERT INTO early_access (email) VALUES (?)", [email]);
      return "New user, the early access can be granted!";
    }
  } catch (err) {
    console.log(err);
    return {
      status: 400,
      message: "An error occurred while processing your request.",
    };
  }
}

async function checkIfEmailExists(email) {
  try {
    const isNewEmail = await db.execute(
      "SELECT * FROM early_access WHERE email = ?",
      [email]
    );
    if (isNewEmail.length === 0) {
      throw new Error("Early access not redeemed yet...");
    }
    return isNewEmail[0];
  } catch (err) {
    throw err;
  }
}

module.exports = { addEmailIfNew, checkIfEmailExists };
