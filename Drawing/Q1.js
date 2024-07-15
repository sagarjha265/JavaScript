function drawRectangle(width, height) {
    // Iterate through each row (height)
    for (let i = 0; i < height; i++) {
        let row = '';
        // Iterate through each column (width)
        for (let j = 0; j < width; j++) {
            // Add asterisks to form the rectangle
            row += '* ';
        }
        // Print each row
        console.log(row);
    }
}

// Define the dimensions of the rectangle
const width = 6;
const height = 4;

// Call the function to draw the rectangle
drawRectangle(width, height);
