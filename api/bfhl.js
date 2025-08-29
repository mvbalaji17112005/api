export default function handler(req, res) {
    if (req.method === "POST") {
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
  
      let concatString = "";
      let upper = true;
      for (let ch of alphabets.join("").split("").reverse()) {
        concatString += upper ? ch.toUpperCase() : ch.toLowerCase();
        upper = !upper;
      }
  
      return res.status(200).json({
        is_success: true,
        user_id: "mvbalaji17112005",
        email: "balaji123@vitap.ac.in",
        roll_number: "22BCB7289",
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: alphabets,
        special_characters: specialChars,
        sum: sum.toString(),
        concat_string: concatString,
      });
    } else {
      return res.status(200).json({ operation_code: 1 });
    }
  }
  