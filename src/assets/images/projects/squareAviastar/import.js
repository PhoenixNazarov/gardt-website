import {
  pImageProcess,
  pImageScenery,
  pImageUser,
  pImageGrowth,
  pImageTrees,
  pImageLight
} from '@/assets/images/portfolio-principles/import'

import image1 from './1.jpg'
import image2 from './7.jpg'
import image31 from './31.jpg'
import image32 from './32.jpg'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import image7 from './7.jpg'
import image8 from './image8.png'
import image9 from './image9.png'
import image10 from './image10.png'
import image11 from './image11.png'

export const squareAviastarData = [
  {
    animation: 'AnimationName',
    data: {
      name: ['РЕДИЗАЙН ПРОХОДНОЙ', '"АВИАСТАР"']
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: 'Ульяновск',
      description: 'Редизайн фасада здания проходной "Авиастар" подчеркивает элементы конструкции самолета, сохраняя при этом инновационность и технологичность в дизайне внешних деталей, придавая ему лаконичность и строгость.',
      year: '2022',
      client: '1 место в конкурсе инновационных проектов Дизайн Акт'
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: 'Здание проходной "Авиастар" является представителем архитектуры конструктивизма. Внешне редизайн подчеркивает элементы конструкции самолета.',
      name1: 'Строение',
      description2: 'Строение проходной имеет сложную форму и ярусные фасады. С целью сохранения преемственности и архитектурной ценности белый цвет фасадов остался основным. К нему добавились черные и серые цвета для создания акцента.',
      image: image1,
      principles: [
        [pImageTrees, 'todo', 'В проектировании мы подбирали материалы лаконично вписанные в структуру окружающего ландшафта. На площади перед проходной распологаются дождевые сады.'],
        [pImageLight, 'todo', 'Уникальное решение использования элементов конструкции самолета создает дополнительную архитектурную ценность, учитывая историческое прошлое здания.'],
        [pImageScenery, 'todo', 'Мы использовали только современные материалы со сниженным уровнем воздействия на окружающую среду.']
      ]
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: 'Редизайн фасада',
      image: image2,
      bigImage: image31
    }
  },
  // {
  //   animation: 'AnimationMagnifierStatic',
  //   data: {
  //     name: 'Редизайн фасада',
  //     image: image2,
  //     bigImage: image32
  //   }
  // },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image4,
      description: 'В отделке фасадов применяются современные материалы локальных производителей'
    }
  },
  {
    animation: 'AnimationOpacityScroll',
    data: {
      height: '100',
      images: [
        {
          image: image5
        }
      ],
      matrix: [
        [1]
      ]
    }
  },
  {
    animation: 'AnimationOpacityScroll',
    data: {
      name: 'Площадь',
      height: '100',
      images: [
        {
          image: image6
        }
      ],
      matrix: [
        [1]
      ]
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image7,
      description: 'Благоустройство площади перед проходной продолжает инновационный подход объекта'
    }
  },
  {
    animation: 'AnimationFourPhotosScroll',
    data: {
      image1: image8,
      description1: 'Уникальные мафы',
      image2: image9,
      description2: 'Дождевой сад',
      image3: image10,
      description3: 'Входная аллея',
      image4: image11,
      description4: ''
    }
  }
]
