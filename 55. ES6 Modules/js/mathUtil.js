
/* To be able to use it in another file we must USE EXPORT! */
export const PI = 3.14;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}

export function getVolume(radius) {
    return 4 * PI * radius * radius;
}