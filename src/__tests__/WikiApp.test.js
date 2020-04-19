import React from 'react'
import WikiApp from '../wikiapp'

it('Проверка количества задаваемого рендера двух различных страниц', () => {
    expect(new WikiApp().state.rp).toEqual(new WikiApp().state.rp);
  });

test('Проверка срабатывания рандома (асинхронная проверка)', async () => {
  var WikiAppTest = new WikiApp();
  var up = await WikiAppTest.createRandomPages();
  expect(up).toEqual(true);
  });

