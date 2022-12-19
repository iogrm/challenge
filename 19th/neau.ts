import { NonEmptyArray } from './none-empty-array';

const dard = [1, 2, 3].map((x) => x + 1);

declare const m: NonEmptyArray<number>;
NonEmptyArray.map(m, (x) => x + 1);
