import { pImageProcess, pImageScenery, pImageUser } from '@/assets/images/portfolio-principles/import'

import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './image3.png'
import image4 from './4.jpg'
import image5 from './5.jpg'
import image6 from './6.jpg'
import image7 from './7.jpg'
import image8 from './8.jpg'
import image9 from './image9.png'
import image10 from './10.jpg'
import image11 from './11.jpg'
import image12 from './12.jpg'
import image13 from './13.jpg'

export const zelenogorskData = [
  {
    animation: 'AnimationName',
    data: {
      name: ['Двухуровневая', 'Загородная', 'Терраса']
    }
  },
  {
    animation: 'AnimationDescription',
    data: {
      name: 'Зеленогорск',
      description: 'Уютная загородная терраса, расположенная на кровле жилого дома, недалеко от Финского залива, в окружении соснового леса. Разделена на зоны нижней и верхней террасы, каждая из которой имеет свой характер и тональность.',
      square: '60 м²',
      year: '2022',
      client: 'Частное лицо'
    }
  },
  {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
      description1: 'Зоны разделены таким образом, что функционал нижней террасы плавно переходит в зону отдыха верхней.',
      name1: 'Озеленение',
      description2: 'Ассортимент растений подобран с учетом особенностей каждой зоны:\n' +
                'на нижней - пряные травы и декоративные цветочные композиции;\n' +
                'на верхней - декоративно лиственные растения, попеременно цветущие в течение весенне-осеннего сезона',
      image: image1,
      principles: [
        [pImageUser, 'todo', 'Подобранные растения требуют минимального ухода, не аллергенны, не имеют ярких ароматов. Кашпо с туями и гортензиями создают уединенное пространство на нижней террасе, закрытое от посторонних глаз.'],
        [pImageProcess, 'todo', 'Подобраны кашпо из облегченного бетона, с длительным сроком эксплуатации и минимальным воздействием на окружающую среду'],
        [pImageScenery, 'todo', 'Зеленая кровля на верхней террасе обеспечивает регуляцию теплового режима дома, охлаждает и увлажняет окружающую местность, а также удерживает влагу.']
      ]
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: 'Нижняя терраса',
      image: image2,
      bigImage: image3
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image4,
      description: 'Функциональное пространство с обеденной зоной'
    }
  },
  {
    animation: 'AnimationThreePhotosScroll',
    data: {
      image1: image5,
      description1: 'Обеденная зона',
      image2: image6,
      description2: 'Летняя кухня',
      image3: image7,
      description3: 'Лаунж зона'
    }
  },
  {
    animation: 'AnimationMagnifierStatic',
    data: {
      name: 'Верхняя терраса',
      image: image8,
      bigImage: image9
    }
  },
  {
    animation: 'AnimationDropPhotoScroll',
    data: {
      image: image10,
      description: 'Зона отдыха среди крон деревьев'
    }
  },
  {
    animation: 'AnimationThreePhotosDoubleOneScroll',
    data: {
      image1: image11,
      description1: 'Лежаки на газоне',
      image3: image12,
      description3: 'Кресло-кокон под перголой',
      image2: image13,
      description2: 'Бетонные кашпо'
    }
  }

]
