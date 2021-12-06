export function stringToDataPoints(expr, xMin, xMax) {
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

    for (let xx = xMin; xx < xMax; xx += 0.1) {
        dataArray.push({ x: xx, y: parsedExpr.evaluate({ x: xx }) });
    }
    return dataArray;
}

export function testEqString(expr) {
    try {
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

        let parsedExpr = parser.parse(expr);
        let calcedVal = parsedExpr.evaluate({ x: 1 });
        if (typeof calcedVal !== 'number') {
            throw new Error();
        }
        return true;
    } catch (e) {
        return false;
    }
}
