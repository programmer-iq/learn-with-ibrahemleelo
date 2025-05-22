function checkAnswers() {
  let score = 0;
  if (document.getElementById("q1").value === "شرط") score++;
  if (document.getElementById("q2").value === "تكرار") score++;
  if (document.getElementById("q3").value === "غيرمحددة") score++;
  if (document.getElementById("q4").value === "اختيار") score++;

  document.getElementById("result").innerText =
    "عدد الإجابات الصحيحة: " + score + " من 4";
}