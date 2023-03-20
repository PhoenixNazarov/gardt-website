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
import image6 from './6.jpg'
import image7 from './image7.png'
import image8 from './image8.png'
import image9 from './image9.png'
import image10 from './image10.png'
import image11 from './image11.png'
import image12 from './image12.png'
import image13 from './image13.png'
import image14 from './image14.png'
import image15 from './image15.png'
import image16 from './image16.png'
import image17 from './image17.png'

import image18 from './18.jpg'
import image19 from './19.jpg'
import image20 from './20.jpg'
import {translate} from "@/assets/js/i18n";

export const hotelData = [
  {
    animation: 'AnimationName',
    data: {
      name: [translate('Благоустройство территории гостиницы')]
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: translate('Краснодарский край'),
      description: translate('Разработанная концепция территории гостиничного комплекса состоит из единства системы пространств, объединенных общей навигацией.'),
      square: '8400 м²',
      year: '2022',
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: translate('Территория гостиницы ориентирована на отдых семей с детьми, поэтому решения создавались именно для них.'),
      name1: translate('Пространство'),
      description2: translate('Пространство гостиницы разделено на определенные зоны, позволяющие гостям пользоваться всеми видами отдыха на территории комплекса.'),
      image: image1,
      principles: [
        [pImageUser, 'todo', translate('Планировка дорожек позволяет распределить потоки людей, направляющихся на море, бассейн, спортивную или игровые зоны')],
        [pImageGrowth, 'todo', translate('В проекте предусмотрены взаимосвязанные разноплановые локации, таким образом посетители могут провести целый день на территории отеля')],
        [pImageLight, 'todo', translate('Уникальные решения создают узнаваемый стиль бренда и отеля')],
        [pImageScenery, 'todo', translate('В нижней части территории расположен ландшафтный парк с системой ручьев, которые выполняют функцию сбора и фильтрации дождевой воды')]
      ]
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: translate('Группа бассейнов'),
      image: image2,
      bigImage: image3
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image4,
      description: translate('Группа бассейнов для отдыхающих всех возрастов')
    }
  },
  {
    animation: 'AnimationThreePhotosScroll',
    data: {
      image1: image5,
      description1: translate('Вид на бассейны'),
      image2: null,
      description2: translate(''),
      image3: image7,
      description3: translate('Пергола в зоне бассейнов')
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: translate('Ландшафтный парк'),
      image: image8,
      bigImage: image9
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image10,
      description: translate('Система ручьев выполняет функцию сбора и фильтрации воды')
    }
  },
  {
    animation: 'AnimationFourPhotosScroll',
    data: {
      image1: image11,
      description1: translate('Зона отдыха'),
      image2: image12,
      description2: translate('Вид на бассейн'),
      image3: image13,
      description3: translate('Снек бар'),
      image4: image14,
      description4: translate('Ландшафтный парк')
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: translate('Детский тематический парк'),
      image: image15,
      bigImage: image16
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image17,
      description: translate('Парк разделен на 4 зоны: океан, море, горы и пустыня')
    }
  },
  {
    animation: 'AnimationThreePhotosDoubleOneScroll',
    data: {
      image1: image18,
      description1: translate('Маяк в "Океане"'),
      image2: image19,
      description2: translate('Канатный парк в "Пустыне"'),
      image3: image20,
      description3: translate('"Пустыня" для детей 7-14')
    }
  }
]
