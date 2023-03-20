import AppleGarden1 from './1-apple-garden.jpg'
import AviastarMaf1 from './1-aviastar-maf.jpg'
import AviastarPlace1 from './1-aviastar-place.jpg'
import Uefa1 from './1-uefa.jpg'
import Garden1 from './1-garden.jpg'
import Hotel1 from './1-hotel.jpg'

import Rest2 from './2-rest.jpg'

import Zelenogorsk3 from './3-zelenogorsk.jpg'
import Blog3 from './3-bloggers.jpg'
import {translate} from "@/assets/js/i18n";

// 1,2,3,4,5,6 = ['user', 'growth', 'process', 'trees', 'light', 'scenery']

export const portfolioItemData = [
  // Благоустройство
  [
    {
      name: translate('Концепция благоустройства ЖК'),
      place: translate('г. Уфа, Россия'),
      principles: ['user', 'growth', 'process', 'trees', 'light', 'scenery'],
      image: Uefa1,
      nameProject: 'ProjectUefa'
    },
    {
      name: translate('Гостиничный комплекс'),
      place: translate('Краснодарский край, Россия'),
      principles: ['user', 'growth', 'light', 'scenery'],
      image: Hotel1,
      nameProject: 'ProjectHotel'
    },
    {
      name: translate('Вишневый сад'),
      place: translate('Калужская область, Россия'),
      principles: ['user', 'process'],
      image: Garden1,
      nameProject: 'ProjectCherryGarden'
    },
    {
      name: translate('Площадь авиастар'),
      place: translate('г. Ульяновск, Россия'),
      principles: ['trees', 'light', 'scenery'],
      image: AviastarPlace1,
      nameProject: 'ProjectSquareAviastart'
    },
    {
      name: translate('Маф авиастар'),
      place: translate('г. Ульяновск, Россия'),
      principles: ['process', 'light'],
      image: AviastarMaf1,
      nameProject: 'ProjectMafAviastar'
    }
  ],
  // Комерческое озеленение
  [
    {
      name: translate('Ресторанный дворик'),
      place: translate('г. Санкт-Петербург, Россия'),
      principles: ['growth', 'light', 'scenery'],
      image: Rest2,
      nameProject: 'ProjectRest'
    }
  ],
  // Частные объекты
  [

    {
      name: translate('Двухуровневая загородная терраса'),
      place: translate('г. Зеленогорск, Россия'),
      principles: ['user', 'process', 'scenery'],
      image: Zelenogorsk3,
      nameProject: 'ProjectZelenogorsk'
    },
    {
      name: translate('Терраса для блогеров'),
      place: translate('г. Санкт-Петербург, Россия'),
      principles: ['user'],
      image: Blog3,
      nameProject: 'ProjectBloggers'
    }
  ]
]
