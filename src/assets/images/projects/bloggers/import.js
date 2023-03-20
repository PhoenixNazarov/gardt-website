import { pImageProcess, pImageScenery, pImageUser } from '@/assets/images/portfolio-principles/import'

import image1 from './1.jpeg'
import image2 from './2.jpeg'
import image3 from './3.jpeg'
import image4 from './4.jpeg'
import image5 from './5.jpeg'
import {translate} from "@/assets/js/i18n";

export const bloggersData = [
  {
    animation: 'AnimationName',
    data: {
      name: [translate('Озеленение террасы пентхауса')]
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: translate('Санкт-Петербург'),
      description: translate('Загородная терраса пентхауса, расположенная на территории нового ЖК в городе Санкт-Петербург'),
      square: '18 м²',
      year: '2020',
      client: translate('Частное лицо')
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: translate('Терраса служит местом отдыха и важным дополнением пространст пентхауса.'),
      name1: translate('Сезонность'),
      description2: translate('Особенностью террасы является ее использование круглый год. Высаженные растения подобраны в соответствии с климатическими особенностями разных сезонов.'),
      image: image1,
      principles: [
        [pImageUser, 'todo', translate('Наши решения нацелены на создания комфортной среды для возможности отдыха на этой террасе')]
      ]
    }
  },
  {
    animation: 'AnimationFourPhotosScroll',
    data: {
      image1: image2,
      description1: translate('Пряный сад в обеденной зоне'),
      image2: image3,
      description2: translate('Декоративный сад в зоне отдыха'),
      image3: image4,
      description3: translate('Злаки и лианы'),
      image4: image5,
      description4: translate('Зеленая стена в зоне отдыха')
    }
  }
]
