import {
  pImageProcess,
  pImageScenery,
  pImageUser,
  pImageGrowth,
  pImageTrees,
  pImageLight
} from '@/assets/images/portfolio-principles/import'
import {translate} from "@/assets/js/i18n";

import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'

import image61 from './image61.png'
import image62 from './image62.png'
import image63 from './image63.png'
import image64 from './image64.png'
import image65 from './image65.png'
import image66 from './image66.png'
import image67 from './image67.png'
import image68 from './image68.png'
import image69 from './image69.png'
import image610 from './image610.png'
import image611 from './image611.png'

import image71 from './image71.png'
import image72 from './image72.png'
import image73 from './image73.png'
import image74 from './image74.png'

import image75 from './image79.png'
import image76 from './image710.png'
import image77 from './image711.png'

import image78 from './image75.png'
import image79 from './image76.png'
import image710 from './image77.png'
import image711 from './image78.png'



export const mafAviastarData = [
  {
    animation: 'AnimationName',
    data: {
      name: [translate("ДИЗАЙН МАФ ДЛЯ ПРЕДПРИЯТИЯ ОАК")]
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: translate('Ульяновск'),
      description: translate('Образ летящего самолета воссозан через элементы внешней среды территории предприятия. Это становится новым дизайн-кодом для сотрудников и приезжающих гостей.'),
      square: null,
      year: '2022',
      client: translate('2 место в конкурсе проектов Дизайн Акт')
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: translate('Благоустройство площади перед проходной авиастар дополняется выбором оборудования и элементов освещения.'),
      name1: translate('Площадь'),
      description2: translate('Территория площади продолжает основной подход создания образа самолета. Это отражается в выборе инновационных технологий.'),
      image: image1,
      principles: [
        [pImageProcess, 'todo', translate('В работе были использованы материалы из металла, бетона и дерева.')],
        [pImageLight, 'todo', translate('Озеленение элементов проявляется в виде зеленых крыш, вертикального озеленения и дождевых садов.')]
      ]
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      name: translate('МАФ'),
      image: image2,
      description: translate('Уникальный паттерн в виде летящих самолетов')
    }
  },
  {
    animation: 'AnimationMafAviastar1',
    data: {
      name: translate('Дизайн среды и айдентика'),
      slide1: {
        name: translate('Паттерн и подсветка в плитке'),
        image1: image61,
        description1: translate('Очертания летящих самолетов стало основным уникальным паттерном, который встречается в покрытии, в малых архитектурных формах и в освещении. Озеленение всех элементов является неотъемлемой айдентикой.'),
        image2: image62,
        description2: translate('Бетон, металл и дерево - основные материалы для оборудования. Озеленение включено в айдентику элементов в виде зеленых крыш, вертикального озеленения и дождевых садов.')
      },
      slide2: {
        image1: image63,
        description1: translate('Основная зона отдыха'),
        image2: image64,
        description2: translate('Место для курения'),
        image3: image65,
        description3: translate('Скамья в форме паттерна летящего самолета с дождевым садом'),
        image4: image66,
        description4: translate('Парклет'),
      },
      slide3: {
        image1: image67,
        description1: translate('Навигационный стенд'),
        image2: image68,
        description2: translate('Точка питания'),
        image3: image69,
        description3: translate('Арт объект на подиуме с подсветкой'),
        image4: image610,
        description4: translate('Велопарковка с уникальным паттерном'),
        image5: image611,
        description5: translate('Скамья со встроенным озеленением'),
      }
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      name: translate('Освещение'),
      image: image4,
      description: translate('Разносценарное освещение создает безопасную и комфортную среду')
    }
  },
  {
    animation: 'AnimationMafAviastar2',
    data: {
      name: translate('Освещение МАФ'),
      slide1: {
        image1: image71,
        description1: translate('Основная зона отдыха'),
        image2: image72,
        description2: translate('Место для курения'),
        image3: image73,
        description3: translate('Скамья в форме паттерна летящего самолета с дождевым садом'),
        image4: image74,
        description4: translate('Парклет'),
      },
      slide2: {
        image1: image76,
        description1: translate('Навигационный стенд'),
        image2: image77,
        description2: translate('Точка питания'),
        image3: image75,
        description3: translate('Арт объект на подиуме с подсветкой'),
      },
      slide3: {
        desc: translate('Разносценарное освещение создает безопасную комфортную среду. Уникальный дизайн и использование элементов паттерна создает идентичность'),
        image1: image78,
        description1: translate('Светящаяся плитка'),
        image2: image79,
        description2: translate('Подсветка деревьев'),
        image3: image710,
        description3: translate('Подсветка остановки'),
        image4: image711,
        description4: translate('Основное освещение'),
      }
    }
  },

]
