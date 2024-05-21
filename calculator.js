let display = document.querySelector('.ans');
let expression = '';
const maxLimit =10;

function appendToDisplay(value) {
    if(expression.length < maxLimit) {
  expression += value;
  display.textContent = expression;
}
}
function clearDisplay() {
  expression = '';
  display.textContent = '';
}

function calculateResult() {
  try {
    expression = eval(expression).toString();
    display.textContent = expression;
  } catch (error) {
    display.textContent = 'Error';
  }
}
/*$(document).ready(function() {
  // You can attach event handlers and manipulate the DOM with jQuery here.
  // For example:
  
  // Clear the display
  $(".clearbtn").click(function() {
      $(".ans").text("");
  });

  // Append numbers and operators to the display
  $(".calculator div[class^='num']").click(function() {
      var value = $(this).text();
      $(".ans").append(value);
  });

  // Calculate the result
  $(".numequal").click(function() {
      var expression = $(".ans").text();
      var result = eval(expression);
      $(".ans").text(result);
  });
});
</script>
</body>
</html>
*/




