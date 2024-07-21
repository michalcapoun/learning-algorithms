// Create function called removeInvalidTriangles that takes and array of triangles (triangles) as input,
// (triangle is represented by array with 3 integers which are length of its sides) and removes invalid
// triangles from array. It returns and array / list with only valid triangles.

function removeInvalidTriangles(triangles) {
    return triangles.filter(triangle => {
        const [a, b, c] = triangle;

        return a + b > c && b + c > a && c + a > b;
    })
}

module.exports = {removeInvalidTriangles};