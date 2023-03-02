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
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';
import image6 from './image6.png';
import image7 from './image7.png';

export const restData = [
    {
        animation: 'AnimationName',
        data: {
            'name': ['Озеленение внутреннего двора ресторана Мемо'],
        }
    },
    {
        animation: 'AnimationDescription',
        data: {
            'name': 'Санкт-Петербург',
            'description': 'Внутренний дворик ресторана функционирует в летнее время и задает расслабленный тон для вечеров. Также помогает отвлечься от городской суеты в дневное время',
            'square': '700 м²',
            'year': '2020',
            'client': 'Администрация ресторана'
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
                [pImageGrowth, 'todo', ''],
                [pImageLight, 'todo', ''],
                [pImageScenery, 'todo', '']
            ]
        }
    },
    {
        'animation': 'AnimationThreePhotosScroll',
        data: {
            'image1': image2,
            'description1': 'Каток и фотозона',
            'image2': image3,
            'description2': 'Ярмарка',
            'image3': image4,
            'description3': 'Катальная горка',
        }
    },
    {
        'animation': 'AnimationThreePhotosDoubleOneScroll',
        data: {
            'image1': image5,
            'description1': 'Каток и фотозона',
            'image2': image6,
            'description2': 'Ярмарка',
            'image3': image7,
            'description3': 'Катальная горка',
        }
    },
]