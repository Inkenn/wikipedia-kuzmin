import React from 'react';
import request from 'request';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import WikiApp from '../wikiapp';

const wak = require('../wikiapp');

let container = null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Проверка срабатывания рандома (асинхронная проверка)', async () => {
  const WikiAppTest = new WikiApp();
  const up = await WikiAppTest.createRandomPages();
  expect(up).toEqual(true);
});

describe('getFetch() проверка', () => {
  it('загрузка ответа с реального сервера', async () => {
    const wa = new WikiApp();
    const a1 = await wa.getFetch();
    const data = await a1.json();
    expect(data).toBeDefined();
    expect(data.query.random.length).toEqual(5);
  });
});
it('Проверка тайтлера (перевода заголовков)', () => {
  const pgs = [
    { title: 'example 1' },
    { title: 'example 2' },
    { title: 'example 3' },
    { title: 'example 4' },
    { title: 'example 5' },
    { title: 'example 6' },
  ];
  const afterpages = wak.titler(pgs);
  expect(afterpages.length).toEqual(pgs.length);
  for (let i = 0; i < pgs.length; i++) expect(pgs[i].title).toEqual(afterpages[i]);
});

it('Проверка работы с фейковым обращением', async () => {
  const fakeResp = {
    query: {
      random: [
        { title: 'example 1' },
        { title: 'example 2' },
        { title: 'example 3' },
        { title: 'example 4' },
        { title: 'example 5' },
      ],
    },
  };

  const mockJsonPromise = Promise.resolve(fakeResp); // 2
  const mockFetchPromise = Promise.resolve({
    // 3
    json: () => mockJsonPromise,
  });
  jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

  await act(async () => {
    render(<WikiApp />, container);
  });
  for (let i = 0; i < 5; i++) expect(container.querySelectorAll('h3')[i].textContent).toBe(fakeResp.query.random[i].title);
  global.fetch.mockRestore();

  // expect(pretty(container.innerHTML)).toMatchInlineSnapshot();
});
