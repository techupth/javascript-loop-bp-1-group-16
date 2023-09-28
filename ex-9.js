// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};


//for loop method
let totalScoreForloop = 0;
let countstudentForloop = 0;
let highestScoreForloop = -1;
let lowestScoreForloop = Infinity;
let highestScorerForloop;
let lowestScorerForloop;

for (let student in studentsScore) {
  totalScoreForloop += studentsScore[student];
  countstudentForloop += 1;
  if(studentsScore[student]>highestScoreForloop) {
    highestScoreForloop = studentsScore[student];
    highestScorerForloop = student;
  }
  if(studentsScore[student]<lowestScoreForloop) {
    lowestScoreForloop = studentsScore[student];
    lowestScorerForloop = student;
  }
}


const averageStudentForloop = totalScoreForloop/countstudentForloop;
//console.log(averageStudentForloop);

console.log(`Average score is ${averageStudentForloop}`);
console.log(`${highestScorerForloop} has the highest score, which is ${highestScoreForloop} points.`);
console.log(`${lowestScorerForloop} has lowest score, which is ${lowestScoreForloop} points`);



/*
ให้เขียนโปรแกรมตามโจทย์ดังนี้
หาค่าเฉลี่ยของคะแนนของนักเรียนในห้องทั้งหมดรวมกัน 
เมื่อหาได้แล้วให้ทำการแสดงผลค่าออกมาดูทางหน้าจอด้วย console.log() 
ตามรูปแบบนี้

"Average score is <average-score>";

<average-score> คือ ค่าเฉลี่ยของคะแนนของนักเรียนในห้องทั้งหมดรวมกัน


หาชื่อของคนที่ได้คะแนนมากที่สุดและคะแนนที่เขาได้รับ 
เมื่อหาได้แล้วให้ทำการแสดงผลค่าออกมาดูทางหน้าจอด้วย console.log() 

ตามรูปแบบนี้
"<highest-score-name> has the highest score, which is <highest-score> points.";
<highest-score-name> คือ ชื่อของคนที่ได้คะแนนมากที่สุด
<highest-score> คือ จำนวนคะแนนของคนที่ได้คะแนนมากที่สุด


หาคนที่ได้คะแนนที่น้อยที่สุดและ คะแนนที่เขาได้รับ 
เมื่อหาได้แล้วให้ทำการแสดงผลค่าออกมาดูทางหน้าจอด้วย console.log() ตามรูปแบบนี้
"<lowest-score-name> has lowest score, which is <lowest-score> points";
<lowest-score-name> คือ ชื่อของคนที่ได้คะแนนน้อยที่สุด
<lowest-score> คือ จำนวนคะแนนของคนที่ได้คะแนนน้อยที่สุด

Hint🕵🏼‍♀️ : Loop the Object
*/