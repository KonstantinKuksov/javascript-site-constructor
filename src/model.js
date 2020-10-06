import {
  TitleBlock,
  TextBlock,
  ImageBlock,
  ColumnsBlock,
} from './classes/blocks';
import image from './assets/img.png';

export const model = [
  new TitleBlock('Так может выглядеть Ваш заголовок', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'white',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
    },
    alt: 'Это картинка',
  }),
  new TextBlock(`Это пример обычного текста: 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta at nisi dictum tristique. Sed consectetur blandit risus vel egestas. Sed eu eros lorem. Nunc sed dignissim ante, ac luctus tortor. Mauris quis tortor sit amet tellus fringilla fermentum. Curabitur eget aliquam ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros risus, blandit non felis ut, lobortis viverra mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam malesuada suscipit ultricies. Vivamus eu euismod leo, vel sodales arcu. Mauris vitae laoreet felis. Etiam felis elit, luctus ut vestibulum in, porta at risus. Nulla tortor nisi, vestibulum at elit at, fringilla ultrices sapien. Maecenas et magna ac nisl luctus ultricies.`, {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold',
    },
  }),
  new ColumnsBlock(
    ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta at nisi dictum tristique. Sed consectetur blandit risus vel egestas. Sed eu eros lorem. Nunc sed dignissim ante, ac luctus tortor. Mauris quis tortor sit amet tellus fringilla fermentum. Curabitur eget aliquam ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros risus, blandit non felis ut, lobortis viverra mauris.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta at nisi dictum tristique. Sed consectetur blandit risus vel egestas. Sed eu eros lorem. Nunc sed dignissim ante, ac luctus tortor. Mauris quis tortor sit amet tellus fringilla fermentum. Curabitur eget aliquam ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros risus, blandit non felis ut, lobortis viverra mauris.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta at nisi dictum tristique. Sed consectetur blandit risus vel egestas. Sed eu eros lorem. Nunc sed dignissim ante, ac luctus tortor. Mauris quis tortor sit amet tellus fringilla fermentum. Curabitur eget aliquam ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eros risus, blandit non felis ut, lobortis viverra mauris.'],
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold',
      },
    }
  ),
];
