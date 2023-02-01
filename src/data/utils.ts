export const makeArray = (length: number) => Array(length).fill(null);
export const range = (min: number, max: number): number[] => makeArray(max - min).map((notUsed, i) => index + min);


export const random = (min: number, max: number) : number => Math.floor(Math.random() * (max - min)) + min;
