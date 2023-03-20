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

import yard1 from './yard1.svg'
import yard2 from './yard2.svg'
import yard3 from './yard3.svg'

import image21 from './image21.png'
import image21_1 from './image21_1.png'
import image21_2 from './image21_2.png'

import image22 from './image22.png'
import image22_1 from './image22_1.png'
import image22_2 from './image22_2.png'
import image22_3 from './image22_3.png'
import image22_4 from './image22_4.png'

import image23 from './image23.png'
import image23_1 from './image23_1.png'
import image23_2 from './image23_2.png'
import image23_3 from './image23_3.png'
import image23_4 from './image23_4.png'

import image24 from './image24.png'
import image24_1 from './image24_1.png'
import image24_2 from './image24_2.png'
import image24_3 from './image24_3.png'

import image25 from './image25.png'
import image26 from './image26.png'
import image27 from './image27.png'
import image28 from './image28.png'

import image29 from './image29.png'
import image30 from './image30.png'
import image31 from './image31.png'
import image32 from './image32.png'

import image26_4 from './image26_4.png'
import image29_2 from './image29_2.png'
import image30_4 from './image30_4.png'

import image31_1 from './image31_1.png'
import image31_2 from './image31_2.png'
import image31_3 from './image31_3.png'


import video1 from './video1.mp4'
import {translate} from "@/assets/js/i18n";

export const uefaData = [
    {
        animation: 'AnimationName',
        data: {
            name: [translate('Концепция Благоустройства Жилого комплекса')],
            // video: {
            //     source: video1,
            //     'type:': 'video/mp4'
            // }
        }
    },
    {
        animation: 'AnimationDescription',
        data: {
            name: 'Уфа',
            description: translate('Природные мотивы республики Башкортостан легли в основу концепции благоустройства. Уникальная природная экосистема созданная рекой и водоемом на территории ЖК вписана в ландшафт.'),
            square: '12,5 га',
            year: '2022',
            client: null
        }
    },
    {
        animation: 'AnimationPhotoDescriptionScroll',
        data: {
            description1: translate('Территория ЖК разделена на тихие и уютные дворы, пешеходный бульвар, активные общественные пространства (локальная площадь и детская игровая зона) и природные локации для отдыха'),
            name1: translate('Водоем'),
            description2: translate('Предложенные решения адаптированы под условия изменения уровня воды в период весеннего половодья и сильных дождей. Корректируем направление воды в ручье создавая пространство для людей, птиц, насекомых.'),
            image: image1,
            principles: [
                [pImageUser, 'todo', translate('Пространство двора ЖК ориентировано на комфорт пешеходов. Организована комфортная инфраструктура для жителей. Предусмотрено разноплановое освещение для безопасности пешеходов в ночное время.')],
                [pImageGrowth, 'todo', translate('Вынесение крупных игровых комплексов на общественные территории позволяет диверсифицировать затраты на оборудование и эффективнее распределять бюджет. Решения регулирования уровня воды позволяет сэкономить на восстановительных работах.')],
                [pImageProcess, 'todo', translate('Были подобраны природные материалы для игрового оборудования. Это обеспечивает минимальное влияние на внешнюю среду, а также чистоту материалов.')],
                [pImageTrees, 'todo', translate('Предложены локальные растения, произрастающие в данной местности. Сохранен природный ручей, который интегрирован в пространство ЖК. Организован дождевой парк вдоль ручья.')],
                [pImageLight, 'todo', translate('Типология дворов опирается на особенности местности: горы,  луга и степи. Использованы уникальные решения в виде цвета плитки, мафов, типологии игрового оборудования, подбора растений и геопластики.')],
                [pImageScenery, 'todo', translate('Водоем на территории ЖК создает уникальный микроклимат, улучшая качество почв и воздуха. Повторение ландшафтов местности позволяет выделять сильные стороны климатической зоны.')]
            ]
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            name: translate('Локальная площадь'),
            image: image2,
            bigImage: image3
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            image: image4,
            description: translate('Трансформируемое пространство для местного комьюнити')
        }
    },
    {
        animation: 'AnimationFourPhotosScroll',
        data: {
            image1: image5,
            description1: translate('Каток и фотозона'),
            image2: image6,
            description2: translate('Ярмарка'),
            image3: image7,
            description3: translate('Катальная горка'),
            image4: image8,
            description4: translate('Сцена для выступлений')
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            name: translate('Типология дворов'),
            image: image9,
            bigImage: image10
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            image: image11,
            description: translate('Решения дворов базируются на природных ландшафтах')
        }
    },
    // {
    //     animation: 'AnimationThreePhotosScroll',
    //     data: {
    //         image1: image18,
    //         description1: translate('Открытые дворы'),
    //         image2: image19,
    //         description2: translate('Закрытые дворы'),
    //         image3: image20,
    //         description3: translate('Полузакрытые дворы')
    //     }
    // },
    {
        animation: 'AnimationYard',
        data: {
            name: translate('Открытые дворы'),
            image: yard1,
            components: [
                {
                    name: translate('Покрытия'),
                    image: image21,
                    subImages: [image21_1, image21_2],
                    description: translate('Материалы: серая бетонная плитка, отсев\n\nСглаженные/размытые прямые формы\n\nАкценты: подсветка, металлические профили')
                },
                {
                    name: translate('Спортивные площадки'),
                    image: image22,
                    subImages: [image22_1, image22_2, image22_3, image22_4],
                    description: translate('Материалы: металл, бетон, дерево, резиновая крошка\n\nСглаженные/размытые прямые формы\n\nАкценты: подсветка, металлические профили')
                },
                {
                    name: translate('Детские площадки'),
                    image: image23,
                    subImages: [image22_3, image23_2, image23_3, image23_4],
                    description: translate('Материалы: металл, брус, резиновая крошка\n\nТематика транзитов, поездов, трубы\n\nАкценты: красные оттенки')
                },
                {
                    name: translate('Мафы'),
                    image: image24,
                    subImages: [image22_1, image23_2, image22_3],
                    description: translate('Материалы: металл, бетон, дерево\n\nЛоманные форма\n\nАкценты: подсветка, брус')
                }
            ]
        }
    },
    {
        animation: 'AnimationYard',
        data: {
            name: translate('Закрытые дворы'),
            image: yard2,
            components: [
                {
                    name: translate('Покрытия'),
                    image: image25,
                    subImages: [image21_1, image21_2],
                    description: translate('Материалы: темно-серая бетоная плитка, отсев\n\nПрямые формы, геометрия линий\n\nАкценты: различная кладка')
                },
                {
                    name: translate('Спортивные площадки'),
                    image: image26,
                    subImages: [image22_4, image21_2, image22_3, image26_4],
                    description: translate('Материалы: красная резиновая крошка, отсев, бетон\n\nПрямые формы \n\nАкценты: подсветка, металлические профили')
                },
                {
                    name: translate('Детские площадки'),
                    image: image27,
                    subImages: [image21_2, image22_4, image22_3],
                    description: translate('Материалы: серая и акцентная красная резиновая крошка, отсев, дерево\n\nПрямоугольные линии\n\nАкценты: яркие красные элемен')
                },
                {
                    name: translate('Мафы'),
                    image: image28,
                    subImages: [image26_4, image22_3, image23_3, image23_2],
                    description: translate('Материалы: бетон, дерево,\n\nПрямые, линейные формы\n\nАкценты: металл, ярко-красные акценты')
                }
            ]
        }
    },
    {
        animation: 'AnimationYard',
        data: {
            name: translate('Полузакрытые дворы'),
            image: yard3,
            components: [
                {
                    name: translate('Покрытия'),
                    image: image29,
                    subImages: [image21_1, image29_2, image21_2],
                    description: translate('Материалы: светлая бетонная плитка, отсев\n\nОрганические формы\n\nАкценты: подсветка, метал')
                },
                {
                    name: translate('Спортивные площадки'),
                    image: image30,
                    subImages: [image26_4, image21_2, image22_4, image30_4],
                    description: translate('Материалы: бетон, отсев, резиновая крошка\n\nМягкие пейзажные формы\n\nАкценты: элементы стритарта, дерево тёплых оттенков')
                },
                {
                    name: translate('Детские площадки'),
                    image: image31,
                    subImages: [image31_1, image31_2, image31_3],
                    description: translate('Материалы: песок, резиновая крошка, дерево\n\nКруглые формы, геопластика\n\nАкценты: яркие тёплые элементы')
                },
                {
                    name: translate('Мафы'),
                    image: image32,
                    subImages: [image30_4, image23_3, image26_4],
                    description: translate('Материалы: дерево, светлый бетон\n\nОкруглые, природные формы, плавные линии\n\nАкценты: дерево тёплых оттенков')
                }
            ]
        }
    },
]
