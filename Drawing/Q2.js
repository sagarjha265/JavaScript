function drawCircle(radius) {
    const diameter = radius * 2;
    const center = radius;

    // Iterate through each row
    for (let y = 0; y <= diameter; y++) {
        let row = '';
        // Iterate through each column
        for (let x = 0; x <= diameter; x++) {
            // Calculate the distance from the center
            const distance = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
            // If distance is close to radius, draw '*'
            if (distance > radius - 0.5 && distance < radius + 0.5) {
                row += '* ';
            } else {
                row += '  '; // spaces to maintain circular shape
            }
        }
        console.log(row); // Print each row
    }
}

// Define the radius of the circle
const radius = 10;

// Call the function to draw the circle
drawCircle(radius);
