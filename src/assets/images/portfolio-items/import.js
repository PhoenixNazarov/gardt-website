import AppleGarden1 from './1-apple-garden.jpg'
import AviastarMaf1 from './1-aviastar-maf.jpg'
import AviastarPlace1 from './1-aviastar-place.jpg'
import Uefa1 from './1-uefa.jpg'
import Garden1 from './1-garden.jpg'
import Hotel1 from './1-hotel.jpg'

import Rest2 from './2-rest.jpg'

import Zelenogorsk3 from './3-zelenogorsk.jpg'
import Blog3 from './3-bloggers.jpg'

// 1,2,3,4,5,6 = ['user', 'growth', 'process', 'trees', 'light', 'scenery']

export const portfolioItemData = [
  // Благоустройство
  [
    {
      name: 'Концепция благоустройства ЖК',
      place: 'г. Уфа, Россия',
      principles: ['user', 'growth', 'process', 'trees', 'light', 'scenery'],
      image: Uefa1,
      nameProject: 'ProjectUefa'
    },
    {
      name: 'Гостиничный комплекс',
      place: 'Краснодарский край, Россия',
      principles: ['user', 'growth', 'light', 'scenery'],
      image: Hotel1,
      nameProject: 'ProjectHotel'
    },
    {
      name: 'Вишневый сад',
      place: 'Калужская область, Россия',
      principles: ['user', 'process'],
      image: Garden1,
      nameProject: 'ProjectCherryGarden'
    },
    {
      name: 'Площадь авиастар',
      place: 'г. Ульяновск, Россия',
      principles: ['trees', 'light', 'scenery'],
      image: AviastarPlace1,
      nameProject: 'ProjectSquareAviastart'
    },
    {
      name: 'Маф авиастар',
      place: 'г. Ульяновск, Россия',
      principles: ['process', 'light'],
      image: AviastarMaf1,
      nameProject: 'ProjectMafAviastar'
    }
  ],
  // Комерческое озеленение
  [
    {
      name: 'Ресторанный дворик',
      place: 'г. Санкт-Петербург, Россия',
      principles: ['growth', 'light', 'scenery'],
      image: Rest2,
      nameProject: 'ProjectRest'
    }
  ],
  // Частные объекты
  [

    {
      name: 'Двухуровневая загородная терраса',
      place: 'г. Зеленогорск, Россия',
      principles: ['user', 'process', 'scenery'],
      image: Zelenogorsk3,
      nameProject: 'ProjectZelenogorsk'
    },
    {
      name: 'Терраса для блогеров',
      place: 'г. Санкт-Петербург, Россия',
      principles: ['user'],
      image: Blog3,
      nameProject: 'ProjectBloggers'
    }
  ]
]
