import {
    pImageProcess,
    pImageScenery,
    pImageUser,
    pImageGrowth,
    pImageTrees,
    pImageLight
} from "@/assets/images/portfolio-principles/import";

import image1 from './image1.png';
import image2 from './image2.png';
import image31 from './image31.png';
import image32 from './image32.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';
import image8 from './image7.png';
import image9 from './image8.png';
import image10 from './image9.png';
import image11 from './image10.png';


export const squareAviastarData = [
    {
        animation: 'AnimationName',
        data: {
            'name': ['РЕДИЗАЙН ФАСАДА', 'ПРОХОДНОЙ ЗАВОДА "АВИАСТАР"', 'И БЛАГОУСТРОЙСТВО', 'ПРИЛЕГАЮЩЕЙ ПЛОЩАДИ'],
        }
    },
    {
        animation: 'AnimationDescription',
        data: {
            'name': 'Ульяновск',
            'description': 'Редизайн фасада здания проходной "Авиастар" подчеркивает элементы конструкции самолета, сохраняя при этом инновационность и технологичность в дизайне внешних деталей, придавая ему лаконичность и строгость.',
            'year': '2022',
            'client': '1 место в конкурсе проектов Дизайн Акт'
        }
    },
    {
        animation: 'AnimationPhotoDescriptionScroll',
        data: {
            'description1': 'Пространство площадки позволяет проявлять активность разных возрастных групп: детей младшего возраста, подростков и пенсионеров.',
            'name1': 'Комьюнити',
            'description2': 'Территория площадки является единственным пространством для объединения жителей, детей, подростков. По итогам реализации проекта местные жители стали больше коммуницировать друг с другом.',
            'image': image1,
            'principles': [
                [pImageTrees, 'todo', ''],
                [pImageLight, 'todo', ''],
                [pImageScenery, 'todo', ''],
            ]
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            'name': 'Редизайн фасада',
            'image': image2,
            'bigImage': image31,
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            'name': 'Редизайн фасада',
            'image': image2,
            'bigImage': image32,
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            'image': image4,
            'description': 'В отделке фасадов применяются современные материалы локальных производителей',
        }
    },
    {
        animation: 'AnimationOpacityScroll',
        data: {
            'height': '100',
            images: [
                {
                    'image': image5,
                },
            ],
            'matrix': [
                [1],
            ],
        }
    },
    {
        animation: 'AnimationOpacityScroll',
        data: {
            'name': 'Площадь',
            'height': '100',
            images: [
                {
                    'image': image6,
                },
            ],
            'matrix': [
                [1],
            ],
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            'image': image7,
            'description': 'Благоустройство площади перед проходной продолжает инновационный подход',
        }
    },
    {
        'animation': 'AnimationFourPhotosScroll',
        data: {
            'image1': image8,
            'description1': '',
            'image2': image9,
            'description2': '',
            'image3': image10,
            'description3': '',
            'image4': image11,
            'description4': '',
        }
    },
]