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

export const mafAviastarData = [
  {
    animation: 'AnimationName',
    data: {
      name: ['ДИЗАЙН ЛИНЕЙКИ', 'МАЛЫХ АРХИТЕКТУРНЫХ', 'ФОРМ ДЛЯ ТЕРРИТОРИИ', 'ПРЕДПРИЯТИЯ ОАК']
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: 'Ульяновск',
      description: 'Образ летящего самолета воссозан через элементы внешней среды территории предприятия. Это становится новым дизайн-кодом для сотрудников и приезжающих гостей(?)',
      square: null,
      year: '2022',
      client: '2 место в конкурсе проектов Дизайн Акт'
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: 'Пространство площадки позволяет проявлять активность разных возрастных групп: детей младшего возраста, подростков и пенсионеров.',
      name1: 'Комьюнити',
      description2: 'Территория площадки является единственным пространством для объединения жителей, детей, подростков. По итогам реализации проекта местные жители стали больше коммуницировать друг с другом.',
      image: image1,
      principles: [
        [pImageProcess, 'todo', 'Металл, бетон и дерево - основной материал'],
        [pImageLight, 'todo', 'Озеленение включено в айдентику элементов в виде зеленых крыш, вертикального озеленения и дождевых садов.']
      ]
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      name: 'МАФ',
      image: image2,
      description: 'Уникальный паттерн в виде летящих самолетов встречается в покрытиях, освещении и малых архитектурных формах. Таким образом передается основной род занятий предприятия'
    }
  },
  {
    animation: 'AnimationOpacityScroll',
    data: {
      height: '100',
      images: [
        {
          image: image3
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
      name: 'Освещение',
      image: image4,
      description: 'Разносценарное освещение создает безопасную и комфортную среду'
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
  }

]
