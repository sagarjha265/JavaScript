function drawRectangles() {
    const width = 20; // Width of each rectangle
    const height = 10; // Height of each rectangle

    // Function to draw a single rectangle
    function drawRectangle(x, y, w, h, fillChar) {
        let rect = [];
        for (let i = 0; i < h; i++) {
            let row = '';
            for (let j = 0; j < w; j++) {
                if (i === 0 || i === h - 1 || j === 0 || j === w - 1) {
                    row += fillChar; // Draw border
                } else {
                    row += ' '; // Draw empty space inside
                }
            }
            rect.push(row);
        }
        return rect;
    }

    // Draw first rectangle
    const rect1 = drawRectangle(0, 0, width, height, '*');
    console.log('Rectangle 1:');
    rect1.forEach(row => console.log(row));

    // Draw second rectangle with alpha transparency
    const rect2 = drawRectangle(width / 2, height / 2, width, height, '.');
    console.log('\nRectangle 2 with Alpha Transparency:');
    rect2.forEach((row, index) => {
        if (index === 0 || index === rect2.length - 1) {
            console.log(row);
        } else {
            console.log(row.substring(0, width / 2) + '*'.repeat(width / 2));
        }
    });
}

// Call the function to draw rectangles
drawRectangles();
