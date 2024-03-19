function solveEquations() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var b1 = parseFloat(document.getElementById('b1').value);
    var c1 = parseFloat(document.getElementById('c1').value);
    var a2 = parseFloat(document.getElementById('a2').value);
    var b2 = parseFloat(document.getElementById('b2').value);
    var c2 = parseFloat(document.getElementById('c2').value);

    // Solve the equations (Assuming a1b2 - a2b1 ≠ 0 for a unique solution)
    var determinant = a1 * b2 - a2 * b1;
    if (determinant !== 0) {
        var x = (c1 * b2 - c2 * b1) / determinant;
        var y = (a1 * c2 - a2 * c1) / determinant;
        document.getElementById('result').innerHTML = "Solution: x = " + x + ", y = " + y;
        document.getElementById('result').style.display = 'block';
        document.getElementById('goBackBtn').style.display = 'block';

        // Hide all other elements
        document.getElementById('inputs').style.display = 'none';
        document.querySelectorAll('button').forEach(function(element) {
            if (element.id !== 'goBackBtn') {
                element.style.display = 'none';
            }
        });
    } else {
        document.getElementById('result').innerHTML = "The equations have no unique solution.";
        document.getElementById('result').style.display = 'block';
        document.getElementById('goBackBtn').style.display = 'block';
        document.getElementById('inputs').style.display = 'none';
        document.querySelectorAll('button').forEach(function(element) {
            if (element.id !== 'goBackBtn') {
                element.style.display = 'none';
            }
        });
    }
}
function clearInputs() {
    document.getElementById('a1').value = '';
    document.getElementById('b1').value = '';
    document.getElementById('c1').value = '';
    document.getElementById('a2').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('c2').value = '';
    document.getElementById('result').style.display = 'none';
    document.getElementById('goBackBtn').style.display = 'none';
}

function goBack() {
    document.getElementById('inputs').style.display = 'block';
    document.querySelectorAll('button').forEach(function(element) {
        element.style.display = 'inline-block';
    });
    document.getElementById('result').style.display = 'none';
    document.getElementById('goBackBtn').style.display = 'none';
}
