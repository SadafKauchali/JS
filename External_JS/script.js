function changeTextColor() {
  const colors = ["red", "blue", "green", "purple", "orange", "teal", "brown"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const textElement = document.getElementById("myText");
  textElement.style.color = colors[randomIndex];
}
