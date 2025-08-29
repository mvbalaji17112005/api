const express = require("express");
const app = express();

app.use(express.json());

// 👉 Update with your details
const FULL_NAME = "balaji_muppidi"; 
const DOB = "01012000"; // format ddmmyyyy
const EMAIL = "your_email@vitap.ac.in";
const ROLL_NUMBER = "22BBSXXXX"; // your roll no.

function alternatingCaps(str) {
  let result = "";
  let upper = true;
  for (let ch of str.split("").reverse()) {
    if (/[a-zA-Z]/.test(ch)) {
      result += upper ? ch.toUpperCase() : ch.toLowerCase();
      upper = !upper;
    } else {
      result += ch;
    }
  }
  return result;
}

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data || [];

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;

    data.forEach((item) => {
      if (!isNaN(item)) {
        let num = parseInt(item, 10);
        if (!isNaN(num)) {
          if (num % 2 === 0) evenNumbers.push(item.toString());
          else oddNumbers.push(item.toString());
          sum += num;
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        specialChars.push(item);
      }
    });

    const concatString = alternatingCaps(alphabets.join(""));

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: concatString,
    });
  } catch (error) {
    res.status(500).json({ is_success: false, error: error.message });
  }
});

// For local testing
app.listen(3000, () => console.log("Server running on port 3000"));
