import {
  pImageProcess,
  pImageScenery,
  pImageUser,
  pImageGrowth,
  pImageTrees,
  pImageLight
} from '@/assets/images/portfolio-principles/import'

import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import image7 from './image7.png'

export const restData = [
  {
    animation: 'AnimationName',
    data: {
      name: ['Озеленение ресторана Мемо']
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: 'Санкт-Петербург',
      description: 'Внутренний дворик ресторана функционирует в летнее время и задает расслабленный тон для вечеров. Также помогает отвлечься от городской суеты в дневное время.',
      square: '200 м²',
      year: '2020',
      client: 'Администрация ресторана'
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: 'Ресторанный дворик - тихий оазис, расположенный в самом центре города.',
      name1: 'Озеленение',
      description2: 'С помощью подбора единого колористического стиля озеленения всех зон ресторана: открытой клумбы, декоративных кашпо, подвесных кашпо с внутренней и внешней стороны, было сформировано комфортное пространство для посетителей.',
      image: image1,
      principles: [
        [pImageGrowth, 'todo', 'Озелененные пространства привлекают на 20% больше посетителей.'],
        [pImageLight, 'todo', 'Единое колористическое решение дополнило уникальный стиль ресторана.'],
        [pImageScenery, 'todo', 'Новый зеленый оазис в центре города улучшает климат, создает дополнительную прохладу, снижает нагреваемость пространства, улучшает качество воздуха.']
      ]
    }
  },
  {
    animation: 'AnimationThreePhotosScroll',
    data: {
      image1: image2,
      description1: 'Бело-розовое сочетание цветущих растений',
      image2: image3,
      description2: 'Кашпо с пальмами и лианами',
      image3: image4,
      description3: 'Листва с белой окантовкой'
    }
  },
  {
    animation: 'AnimationThreePhotosDoubleOneScroll',
    data: {
      image1: image5,
      description1: 'Входная группа',
      image2: image6,
      description2: 'Белые кисти растений',
      image3: image7,
      description3: 'Композиции из кустарников'
    }
  }
]
