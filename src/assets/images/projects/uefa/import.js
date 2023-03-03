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
import image6 from './image6.png'
import image7 from './image7.png'
import image8 from './image8.png'
import image9 from './image9.png'
import image10 from './image10.png'
import image11 from './image11.png'
import image13 from './image13.png'
import image14 from './image14.png'
import image15 from './image15.png'
import image16 from './image16.png'
import image17 from './image17.png'

import image18 from './image18.png'
import image19 from './image19.png'
import image20 from './image20.png'

import video1 from './video1.mp4'

export const uefaData = [
    {
        animation: 'AnimationNameVideo',
        data: {
            name: ['Концепция', 'Благоустройства', 'Жилого комплекса'],
            video: {
                source: video1,
                'type:': 'video/mp4'
            }
        }
    },
    {
        animation: 'AnimationDescription',
        data: {
            name: 'Уфа',
            description: 'Природные мотивы республики Башкортостан легли в основу концепции благоустройства. Уникальная природная экосистема созданная рекой и водоемом на территории ЖК вписана в ландшафт.',
            square: '12,5 га',
            year: '2022',
            client: null
        }
    },
    {
        animation: 'AnimationPhotoDescriptionScroll',
        data: {
            description1: 'Территория ЖК разделена на тихие и уютные дворы, пешеходный бульвар, активные общественные пространства (локальная площадь и детская игровая зона) и природные локации для отдыха',
            name1: 'Водоем',
            description2: 'Предложенные решения адаптированы под условия изменения уровня воды в период весеннего половодья и сильных дождей. Корректируем направление воды в ручье создавая пространство для людей, птиц, насекомых.',
            image: image1,
            principles: [
                [pImageUser, 'todo', 'Пространство двора ЖК ориентировано на комфорт пешеходов. Организована комфортная инфраструктура для жителей. Предусмотрено разноплановое освещение для безопасности пешеходов в ночное время.'],
                [pImageGrowth, 'todo', 'Вынесение крупных игровых комплексов на общественные территории позволяет диверсифицировать затраты на оборудование и эффективнее распределять бюджет. Решения регулирования уровня воды позволяет сэкономить на восстановительных работах.'],
                [pImageProcess, 'todo', 'Были подобраны природные материалы для игрового оборудования. Это обеспечивает минимальное влияние на внешнюю среду, а также чистоту материалов.'],
                [pImageTrees, 'todo', 'Предложены локальные растения, произрастающие в данной местности. Сохранен природный ручей, который интегрирован в пространство ЖК. Организован дождевой парк вдоль ручья.'],
                [pImageLight, 'todo', 'Типология дворов опирается на особенности местности: горы,  луга и степи. Использованы уникальные решения в виде цвета плитки, мафов, типологии игрового оборудования, подбора растений и геопластики.'],
                [pImageScenery, 'todo', 'Водоем на территории ЖК создает уникальный микроклимат, улучшая качество почв и воздуха. Повторение ландшафтов местности позволяет выделять сильные стороны климатической зоны.']
            ]
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            name: 'Локальная площадь',
            image: image2,
            bigImage: image3
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            image: image4,
            description: 'Трансформируемое пространство для местного комьюнити'
        }
    },
    {
        animation: 'AnimationFourPhotosScroll',
        data: {
            image1: image5,
            description1: 'Каток и фотозона',
            image2: image6,
            description2: 'Ярмарка',
            image3: image7,
            description3: 'Катальная горка',
            image4: image8,
            description4: 'Сцена для выступлений'
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            name: 'Типология дворов',
            image: image9,
            bigImage: image10
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            image: image11,
            description: 'Решения дворов базируются на природных ландшафтах'
        }
    },
    {
        animation: 'AnimationThreePhotosScroll',
        data: {
            image1: image18,
            description1: 'Открытые дворы',
            image2: image19,
            description2: 'Закрытые дворы',
            image3: image20,
            description3: 'Полузакрытые дворы'
        }
    },
    {
        animation: 'AnimationOpacityScroll',
        data: {
            height: '300',
            images: [
                {
                    image: image13
                },
                {
                    image: image14
                },
                {
                    image: image15
                },
                {
                    image: image16
                },
                {
                    image: image17
                }
            ],
            matrix: [
                [1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1],
                [0, 0, 1, 1, 1],
                [0, 0, 0, 1, 1],
                [0, 0, 0, 0, 1]
            ]
        }
    }

]
