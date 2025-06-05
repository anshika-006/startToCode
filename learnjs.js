window.onload = function() {
    var num1 = document.getElementById("num1");
    var num2 = document.getElementById("num2");
    var answer = document.getElementById("answer");
    var form = document.getElementById("xy");

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent form from submitting

        if (!num1.value || !num2.value) {
            alert("Values not entered");
        } else {
            var x = parseFloat(num1.value);
            var y = parseFloat(num2.value);

            if (y === 0) {
                alert("Cannot divide by zero");
                return;
            }

            var r = x / y;
            var p = r * 100;
            answer.innerText = "ANSWER: " + p.toFixed(2) + "%";
        }
    });
};
