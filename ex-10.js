//Exercise #10 Debugging (Conditional Logic + Function + If Else)

//Start coding here
function calculateTax(income) {
    let taxPercentage;  // const taxPercentage;
    let taxAmount;   //const taxAmount;
  
    if (income > 50000) {
      taxPercentage = 0.3;
      taxAmount = income * taxPercentage;
      return taxAmount    //return taxAmoun
    } else {
      taxPercentage = 0.2;
      taxAmount = income * taxPercentage;
      return taxAmount  //taxAmount
    }
  }
  
  const result1 = calculateTax(60000);
  console.log("Tax to be paid: $" + result1);
  
  const result2 = calculateTax(30000);
  console.log("Tax to be paid: $" + result2);


/*ให้แก้ไข Error ที่เกิดจาก JavaScript โค้ดที่กำหนดให้ 
ให้โปรแกรมสามารถทำงานได้อย่างถูกต้อง
โค้ดที่กำหนดให้เป็นโปรแกรมที่คำนวนภาษีด้วย Function calculateTax
*/