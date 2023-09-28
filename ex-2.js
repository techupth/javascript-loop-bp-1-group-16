// Exercise #2: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];

// Start coding here
for (let i=0; i<restaurants.length; i++) {
    newRestaurants[i] = `Restaurant Name: ${restaurants[i]}`;   
}

console.log(newRestaurants);
/*
ให้ restaurants เป็น Array ที่เก็บชื่อร้านอาหาร
ให้ใช้ While Loop ในการแสดงชื่อร้านอาหารทั้งหมดที่อยู่ใน restaurants 
ในข้อความรูปแบบนี้

"Restaurant Name: <restaurant-name>";
<restaurant-name> คือ ชื่อร้านอาหาร
นำข้อความใหม่ไปเก็บไว้ใน Array ใหม่ ที่มีชื่อว่า newRestaurants
ทำการแสดงผลค่าของ newRestaurants ออกมาดูทางหน้าจอด้วย console.log()

// Exercise #2: Displaying Restaurant Name
let restaurants = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here

console.log(newRestaurants);
เมื่อโปรแกรมทำงาน ผลลัพธ์ทางหน้าจอจะเป็นแบบนี้

[
  "Restaurant Name: KFC",
  "Restaurant Name: MOMO PARADISE",
  "Restaurant Name: Nabezo",
];
*/
