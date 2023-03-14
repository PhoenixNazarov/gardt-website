import { pImageProcess, pImageScenery, pImageUser } from '@/assets/images/portfolio-principles/import'

import image1 from './1.jpeg'
import image2 from './2.jpeg'
import image3 from './3.jpeg'
import image4 from './4.jpeg'
import image5 from './5.jpeg'

export const bloggersData = [
  {
    animation: 'AnimationName',
    data: {
      name: ['Озеленение', 'террасы', 'пентхауса']
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: 'Санкт-Петербург',
      description: 'Загородная терраса пентхауса, расположенная на территории нового ЖК в городе Санкт-Петербург   ',
      square: '18 м²',
      year: '2020',
      client: 'Частное лицо'
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: 'Терраса служит местом отдыха и важным дополнением пространст пентхауса.',
      name1: 'Сезонность',
      description2: 'Особенностью террасы является ее использование круглый год. Высаженные растения подобраны в соответствии с климатическими особенностями разных сезонов.',
      image: image1,
      principles: [
        [pImageUser, 'todo', 'Наши решения нацелены на создания комфортной среды для возможности отдыха на этой террасе']
      ]
    }
  },
  {
    animation: 'AnimationFourPhotosScroll',
    data: {
      image1: image2,
      description1: 'Пряный сад в обеденной зоне',
      image2: image3,
      description2: 'Декоративный сад в зоне отдыха',
      image3: image4,
      description3: 'Злаки и лианы',
      image4: image5,
      description4: 'Зеленая стена в зоне отдыха'
    }
  }
]
