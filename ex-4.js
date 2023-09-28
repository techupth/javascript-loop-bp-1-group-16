// Exercise #4: Reverse Strings
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for (let i=companyName.length-1; i>=0; i--) {
    reversedCompanyName += companyName[i];
}

console.log(` companyName: "${companyName}"`);
console.log(` reversedCompanyName: "${reversedCompanyName}"`);

/*
ให้ companyName เก็บชื่อบริษัทไว้
ให้สร้าง String อันใหม่จาก Variable companyName 
โดยที่ String ค่าใหม่ต้องเรียงตัวอักษรกลับด้านกันจาก String อันเก่า 
และนำ Value ที่ได้มาเก็บไว้ใน Variable reversedCompanyName
เมื่อโปรแกรมทำงานจะแสดงผลลัพธ์ทางหน้าจอแบบนี้

// companyName: "TechUp Thailand"
// reversedCompanyName: "dnaliahT pUhceT"
*/

