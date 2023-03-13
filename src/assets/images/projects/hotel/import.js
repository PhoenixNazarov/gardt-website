import {
  pImageProcess,
  pImageScenery,
  pImageUser,
  pImageGrowth,
  pImageTrees,
  pImageLight
} from '@/assets/images/portfolio-principles/import'

import image1 from './1.jpg'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './4.jpg'
import image5 from './5.jpg'
import image6 from './6.jpg'
import image7 from './7.jpg'
import image8 from './image8.png'
import image9 from './image9.png'
import image10 from './10.jpg'
import image11 from './11.jpg'
import image12 from './12.jpg'
import image13 from './13.jpg'
import image14 from './14.jpg'
import image15 from './image15.png'
import image16 from './image16.png'
import image17 from './17.jpg'

import image18 from './18.jpg'
import image19 from './19.jpg'
import image20 from './19.jpg'

export const hotelData = [
  {
    animation: 'AnimationName',
    data: {
      name: ['Благоустройство территории гостиницы']
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: 'Краснодарский край',
      description: 'Созданное общественное пространство объединяет жителей коттеджного поселка "Вишневый сад 2". Обустройство площадки позволяет вести активный образ жизни в рамках ограниченного пространства поселка.',
      square: '700 м²',
      year: '2020',
      client: 'Администрация коттеджного посёлка'
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: 'Пространство площадки позволяет проявлять активность разных возрастных групп: детей младшего возраста, подростков и пенсионеров.',
      name1: 'Водоем',
      description2: 'Предложенные решения адаптированы под условия изменения уровня воды в период весеннего половодья и сильных дождей. Корректируем направление воды в ручье создавая пространство для людей, птиц, насекомых.',
      image: image1,
      principles: [
        [pImageUser, 'todo', ''],
        [pImageGrowth, 'todo', ''],
        [pImageLight, 'todo', ''],
        [pImageScenery, 'todo', '']
      ]
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: 'Группа бассейнов',
      image: image2,
      bigImage: image3
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image4,
      description: 'Текст'
    }
  },
  {
    animation: 'AnimationThreePhotosScroll',
    data: {
      image1: image5,
      description1: 'Открытые дворы',
      image2: image6,
      description2: 'Закрытые дворы',
      image3: image7,
      description3: 'Полузакрытые дворы'
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: 'Ландшафтный парк',
      image: image8,
      bigImage: image9
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image10,
      description: 'Текст'
    }
  },
  {
    animation: 'AnimationFourPhotosScroll',
    data: {
      image1: image11,
      description1: '',
      image2: image12,
      description2: '',
      image3: image13,
      description3: '',
      image4: image14,
      description4: ''
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: 'Детский тематический парк',
      image: image15,
      bigImage: image16
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image17,
      description: 'Текст'
    }
  },
  {
    animation: 'AnimationThreePhotosDoubleOneScroll',
    data: {
      image1: image18,
      description1: '',
      image2: image19,
      description2: '',
      image3: image20,
      description3: ''
    }
  }
]
