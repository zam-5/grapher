export default function stringToDataPoints(expr, xMin, xMax) {
    const Parser = require('expr-eval').Parser;

    const parser = new Parser({
        operators: {
            concatenate: false,
            conditional: false,
            logical: false,
            comparison: false,
            in: false,
            assignment: false,
        },
    });

    const parsedExpr = parser.parse(expr);

    let dataArray = [];

    for (let xx = xMin; xx < xMax; xx += (xMax - xMin) / 100) {
        dataArray.push({ x: xx, y: parsedExpr.evaluate({ x: xx }) });
    }
    return dataArray;
}
