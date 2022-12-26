type State =
  | { status: 'idle' }
  | { status: 'loading'; startTime: number }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };

type Events =
  | { type: 'fetch' }
  | { type: 'success'; data: string }
  | { type: 'error'; error: Error }
  | { type: 'cancel' };

import { match, P } from 'ts-pattern';

const reducer = (state: State, event: Events): State =>
  match<[State, Events], State>([state, event])
    .with([{ status: 'loading' }, { type: 'success' }], ([, event]) => ({
      status: 'success',
      data: event.data,
    }))
    .with(
      [{ status: 'loading' }, { type: 'error', error: P.select() }],
      (error) => ({
        status: 'error',
        error,
      })
    )
    .with([{ status: P.not('loading') }, { type: 'fetch' }], () => ({
      status: 'loading',
      startTime: Date.now(),
    }))
    .with(
      [
        {
          status: 'loading',
          startTime: P.when((t) => t + 2000 < Date.now()),
        },
        { type: 'cancel' },
      ],
      () => ({
        status: 'idle',
      })
    )
    .with(P._, () => state)
    .exhaustive();

console.log(reducer({ status: 'idle' }, { type: 'fetch' }));
