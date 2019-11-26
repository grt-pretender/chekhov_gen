/**
Task

1) Declare a constant variable, PI, and assign it the value Math.PI.
2) Read a number, r, denoting the radius of a circle from stdin.
3) Use PI and r to calculate the area and perimeter of a circle having radius r.
4) Print area as the first line of output and print perimeter as the second line of output.
**/

function main() {
    const PI = Math.PI;
    let r = parseFloat(readLine());


    const area = PI * r * r;
    const perimeter = 2 * PI * r;

    console.log(area);
    console.log(perimeter);
		}
