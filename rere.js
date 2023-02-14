document.write(
    '<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.3.min.js"></script>',
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />',
    '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>'
  );
  
  // get the textarea id
  const text = document.getElementById("textarea");
  
  // get the font style buttons id
  const bold = document.getElementById("bold");
  const italic = document.getElementById("italic");
  const underline = document.getElementById("underline");
  
  // font style control
  function fontStyle(type) {
    if (type === "bold") {
      text.classList.toggle("font-bold");
  
      bold.classList.toggle("bg-indigo-500");
      bold.classList.toggle("text-white");
    } else if (type === "italic") {
      text.classList.toggle("italic");
      italic.classList.toggle("bg-indigo-500");
      italic.classList.toggle("text-white");
    } else if (type === "underline") {
      text.classList.toggle("underline");
      underline.classList.toggle("bg-indigo-500");
      underline.classList.toggle("text-white");
    }
  }
  
  // get the all align buttons id
  const left = document.getElementById("left");
  const center = document.getElementById("center");
  const right = document.getElementById("right");
  const justify = document.getElementById("justify");
  
  // text align control
  function alignStyle(type) {
    if (type === "left") {
      left.classList.add("bg-indigo-500");
      left.classList.add("text-white");
      text.classList.add("text-left");
      // remove the align button
      text.classList.remove("text-center");
      text.classList.remove("text-right");
      text.classList.remove("text-justify");
      // remove the active color
      right.classList.remove("bg-indigo-500");
      right.classList.remove("text-white");
      center.classList.remove("bg-indigo-500");
      center.classList.remove("text-white");
      justify.classList.remove("bg-indigo-500");
      justify.classList.remove("text-white");
    } else if (type === "center") {
      center.classList.add("bg-indigo-500");
      center.classList.add("text-white");
      text.classList.add("text-center");
      // remove the align button
      text.classList.remove("text-left");
      text.classList.remove("text-right");
      text.classList.remove("text-justify");
  
      // remove the active color
      right.classList.remove("bg-indigo-500");
      right.classList.remove("text-white");
      left.classList.remove("bg-indigo-500");
      left.classList.remove("text-white");
      justify.classList.remove("bg-indigo-500");
      justify.classList.remove("text-white");
    } else if (type === "right") {
      right.classList.add("bg-indigo-500");
      right.classList.add("text-white");
      text.classList.add("text-right");
  
      // remove the align button
      text.classList.remove("text-left");
      text.classList.remove("text-center");
      text.classList.remove("text-justify");
  
      // remove the active color
      center.classList.remove("bg-indigo-500");
      center.classList.remove("text-white");
      left.classList.remove("bg-indigo-500");
      left.classList.remove("text-white");
      justify.classList.remove("bg-indigo-500");
      justify.classList.remove("text-white");
    } else if (type === "justify") {
      justify.classList.add("bg-indigo-500");
      justify.classList.add("text-white");
      text.classList.add("text-justify");
  
      // remove the align button
      text.classList.remove("text-left");
      text.classList.remove("text-center");
      text.classList.remove("text-right");
  
      // remove the active color
      center.classList.remove("bg-indigo-500");
      center.classList.remove("text-white");
      left.classList.remove("bg-indigo-500");
      left.classList.remove("text-white");
      right.classList.remove("bg-indigo-500");
      right.classList.remove("text-white");
    }
  }
  
  // control the font size
  document.getElementById("number").addEventListener("input", () => {
    text.style.fontSize = number.value + "px";
  });
  
  // control the text color
  document.getElementById("color").addEventListener("input", () => {
    text.style.color = color.value;
  });
  
  // control upper and lower case
  function textTransForm() {
    if (text.style.textTransform !== "uppercase") {
      text.style.textTransform = "uppercase";
    } else {
      text.style.textTransform = "none";
    }
  }
  
  // right click disabled
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return $(function () {
      toastr.warning("Do you try to copy my Code? correct?");
    });
  });