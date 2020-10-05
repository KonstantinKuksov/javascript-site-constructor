import image from './assets/img.png';

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на JavaScript',
    options: {
      tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem',
      },
    },
  },
  { type: 'text', value: 'This is some text from javascript' },
  {
    type: 'columns',
    value: [
      '1111111111111111111',
      '2222222222222222222',
      '3333333333333333333',
    ],
  },
  { type: 'image', value: image },
];
