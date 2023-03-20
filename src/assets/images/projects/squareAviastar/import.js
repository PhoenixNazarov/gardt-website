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
import image31 from './image31.png'
import image32 from './32.jpg'
import image4 from './image4.png'
import image5 from './image5.png'
import image51 from './image51.png'
import image52 from './image52.png'
import image53 from './image53.png'
import image54 from './image54.png'
import image55 from './image56.png'
import image56 from './image57.png'

import image6 from './image6.png'
import image61 from './image61.svg'
import image62 from './image62.svg'
import image63 from './image63.svg'
import image64 from './image64.svg'

import image7 from './image7.png'
import image8 from './image8.png'
import image9 from './image9.png'
import image10 from './image10.png'
import image11 from './image11.png'
import video from './video.mp4';
import {translate} from "@/assets/js/i18n";

export const squareAviastarData = [
    {
        animation: 'AnimationNameVideo',
        data: {
            name: [translate('РЕДИЗАЙН ПРОХОДНОЙ "АВИАСТАР"')],
            video: {
                source: video,
                'type:': 'video/mp4'
            }
        }
    },
    {
        animation: 'AnimationDescription',
        data: {
            name: translate('Ульяновск'),
            description: translate('Редизайн фасада здания проходной "Авиастар" подчеркивает элементы конструкции самолета, сохраняя при этом инновационность и технологичность в дизайне внешних деталей, придавая ему лаконичность и строгость.'),
            year: '2022',
            client: translate('1 место в конкурсе инновационных проектов Дизайн Акт')
        }
    },
    {
        animation: 'AnimationPhotoDescriptionScroll',
        data: {
            description1: translate('Здание проходной "Авиастар" является представителем архитектуры конструктивизма. Внешне редизайн подчеркивает элементы конструкции самолета.'),
            name1: translate('Строение'),
            description2: translate('Строение проходной имеет сложную форму и ярусные фасады. С целью сохранения преемственности и архитектурной ценности белый цвет фасадов остался основным. К нему добавились черные и серые цвета для создания акцента.'),
            image: image1,
            principles: [
                [pImageTrees, 'todo', translate('В проектировании мы подбирали материалы лаконично вписанные в структуру окружающего ландшафта. На площади перед проходной распологаются дождевые сады.')],
                [pImageLight, 'todo', translate('Уникальное решение использования элементов конструкции самолета создает дополнительную архитектурную ценность, учитывая историческое прошлое здания.')],
                [pImageScenery, 'todo', translate('Мы использовали только современные материалы со сниженным уровнем воздействия на окружающую среду.')]
            ]
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            name: translate('Редизайн фасада'),
            image: image2,
            bigImage: image31
        }
    },
    // {
    //   animation: 'AnimationMagnifierStatic',
    //   data: {
    //     name: 'Редизайн фасада',
    //     image: image2,
    //     bigImage: image32
    //   }
    // },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            image: image4,
            description: translate('В отделке фасадов применяются современные материалы локальных производителей')
        }
    },
    {
        animation: 'AnimationAviastarFacade',
        data: {
            image: image5,
            materials: [
                {
                    name: translate('Фиброцементные плиты LATONUT'),
                    description: translate('Цвет: серый\nRAL 7035'),
                    image: image51
                },
                {
                    name: translate('Пластины с паттерном и встроенной подсветкой'),
                    description: translate('Материал: алюминий'),
                    image: image54
                },
                {
                    name: translate('Фиброцементные плиты LATONUT'),
                    description: translate('Цвет: сигнально-\nчерный\nRAL 9004'),
                    image: image52
                },
                {
                    name: translate('Фиброцементные плиты LATONUT'),
                    description: translate('Цвет: сигнально-\nбелый\nRAL 9003'),
                    image: image53
                },
                {
                    name: translate('Реечные фасадные системы GIPCA'),
                    description: translate('Материал: алюминий'),
                    image: image56
                },
                {
                    name: translate('Керамогранит УГ 126, антискользящий'),
                    description: translate('Цвет: серо-бежевый'),
                    image: image55
                },
            ]
        }
    },
    {
        animation: 'AnimationOpacityScroll',
        data: {
            name: translate('Площадь'),
            description: translate('Основной функцией площади является комфортный транзит от остановочных павильонов, парковок до проходной и обратно. Организованы места отдыха под кронами деревьев и в окружении цветников'),
            height: '300',
            images: [
                {
                    image: image61
                },
                {
                    image: image62
                },
                {
                    image: image63
                },
                {
                    image: image64
                }
            ],
            matrix: [
                [1, 1, 1, 1],
                [0, 1, 1, 1],
                [0, 0, 1, 1],
                [0, 0, 0, 1],
            ]
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            image: image7,
            description: translate('Благоустройство площади перед проходной продолжает инновационный подход объекта')
        }
    },
    {
        animation: 'AnimationFourPhotosScroll',
        data: {
            image1: image8,
            description1: translate('Уникальные мафы'),
            image2: image9,
            description2: translate('Дождевой сад'),
            image3: image10,
            description3: translate('Входная аллея'),
            image4: image11,
            description4: translate('')
        }
    }
]
