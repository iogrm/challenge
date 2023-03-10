import { match, P } from 'ts-pattern';

type Data = { type: 'text'; content: string } | { type: 'img'; src: string };

type Result = { type: 'ok'; data: Data } | { type: 'error'; error: Error };

const result: Result = {
  type: 'ok',
  data: { type: 'text', content: 'asdfdsf' },
};

const f = (result: Result) => {
  return match(result)
    .with({ type: 'error' }, () => `<p>Oups! An error occured</p>`)
    .with(
      { type: 'ok', data: { type: 'text' } },
      (res) => `<p>${res.data.content}</p>`
    )
    .with(
      { type: 'ok', data: { type: 'img', src: P.select() } },
      (src) => `<img src=${src} />`
    )
    .exhaustive();
};

console.log(f(result));
