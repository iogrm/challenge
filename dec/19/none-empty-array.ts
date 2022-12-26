import z, { ZodTypeAny } from 'zod';
import { MyError } from './my-error';

export type NonEmptyArray<T> = [T, ...T[]];

export module NonEmptyArray {
  export const is = <T>(arr: T[]): arr is NonEmptyArray<T> => arr.length > 0;

  export const zod = <T extends ZodTypeAny>(value: T) =>
    z.array(value).nonempty();

  export const mkUnSafe = <T>(array: T[]): NonEmptyArray<T> => {
    if (is(array)) {
      return array;
    } else {
      throw new MyError(1, 'string', 'message', { errorData: undefined });
    }
  };

  export const head = <T>([t]: NonEmptyArray<T>) => t;

  export const map = <T, A>(
    [t, ...as]: NonEmptyArray<T>,
    fn: (t: T) => A
  ): NonEmptyArray<A> => [fn(t), ...as.map(fn)];
}
