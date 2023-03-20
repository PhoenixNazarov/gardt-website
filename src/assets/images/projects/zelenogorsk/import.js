import { pImageProcess, pImageScenery, pImageUser } from '@/assets/images/portfolio-principles/import'

import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import image6 from './image6.png'
import image7 from './image7.png'
import image8 from './image8.png'
import image9 from './image9.png'
import image10 from './image10.png'
import image11 from './image11.png'
import image12 from './image12.png'
import image13 from './image13.png'
import video from './video.mp4';

import {translate} from "@/assets/js/i18n";

export const zelenogorskData = [
  {
    animation: 'AnimationNameVideo',
    data: {
      name: [translate('Двухуровневая Загородная Терраса')],
      video: {
          source: video,
          'type:': 'video/mp4'
      }
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: translate('Зеленогорск'),
      description: translate('Уютная загородная терраса, расположенная на кровле жилого дома, недалеко от Финского залива, в окружении соснового леса. Разделена на зоны нижней и верхней террасы, каждая из которой имеет свой характер и тональность.'),
      square: '60 м²',
      year: '2022',
      client: translate('Частное лицо')
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: translate('Зоны разделены таким образом, что функционал нижней террасы плавно переходит в зону отдыха верхней.'),
      name1: translate('Озеленение'),
      description2: translate('Ассортимент растений подобран с учетом особенностей каждой зоны:\n' +
                'на нижней - пряные травы и декоративные цветочные композиции;\n' +
                'на верхней - декоративно лиственные растения, попеременно цветущие в течение весенне-осеннего сезона'),
      image: image1,
      principles: [
        [pImageUser, 'todo', translate('Подобранные растения требуют минимального ухода, не аллергенны, не имеют ярких ароматов. Кашпо с туями и гортензиями создают уединенное пространство на нижней террасе, закрытое от посторонних глаз.')],
        [pImageProcess, 'todo', translate('Подобраны кашпо из облегченного бетона, с длительным сроком эксплуатации и минимальным воздействием на окружающую среду')],
        [pImageScenery, 'todo', translate('Зеленая кровля на верхней террасе обеспечивает регуляцию теплового режима дома, охлаждает и увлажняет окружающую местность, а также удерживает влагу.')]
      ]
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: translate('Нижняя терраса'),
      image: image2,
      bigImage: image3
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image4,
      description: translate('Функциональное пространство с обеденной зоной')
    }
  },
  {
    animation: 'AnimationThreePhotosScroll',
    data: {
      image1: image5,
      description1: translate('Обеденная зона'),
      image2: image6,
      description2: translate('Летняя кухня'),
      image3: image7,
      description3: translate('Лаунж зона')
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: translate('Верхняя терраса'),
      image: image8,
      bigImage: image9
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image10,
      description: translate('Зона отдыха среди крон деревьев')
    }
  },
  {
    animation: 'AnimationThreePhotosDoubleOneScroll',
    data: {
      image1: image11,
      description1: translate('Лежаки на газоне'),
      image3: image12,
      description3: translate('Кресло-кокон под перголой'),
      image2: image13,
      description2: translate('Бетонные кашпо')
    }
  }

]
