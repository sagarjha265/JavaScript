function drawRightTriangle(height) {
    let triangle = '';
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '*';
        }
        triangle += row + '\n';
    }
    return triangle;
}

// Define the height of the triangle
const triangleHeight = 5;

// Draw the triangle and log the output
const triangleOutput = drawRightTriangle(triangleHeight);
console.log(triangleOutput);
