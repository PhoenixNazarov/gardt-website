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
import image8 from './image8.png';
import image9 from './image9.png';
import image10 from './image10.png';
import image11 from './image11.png';
import image12 from './image12.png';
import image13 from './image13.png';
import image14 from './image14.png';
import image15 from './image15.png';

export const cherryGardenData = [
    {
        animation: 'AnimationName',
        data: {
            'name': ['Детская и', 'Спортивная', 'Площадка']
        }
    },
    {
        animation: 'AnimationDescription',
        data: {
            'name': 'Калужская область',
            'description': 'Созданное общественное пространство объединяет жителей коттеджного поселка "Вишневый сад 2". Обустройство площадки позволяет вести активный образ жизни в рамках ограниченного пространства поселка.',
            'square': '700 м²',
            'year': '2020',
            'client': 'Администрация коттеджного поселка'
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
                [pImageUser, 'todo', 'Пространство площадки позволяет больше взаимодействовать жителей коттеджного поселка. Это важно для сохранения общения в условиях изолированности от городской среды'],
                [pImageProcess, 'todo', 'В данном проекте была использована преимущественно древесина.'],
            ]
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            'name': 'Детская площадка',
            'image': image2,
            'bigImage': image3,
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            'image': image4,
            'description': 'Пространства для детей и их родителей',
        }
    },
    {
        'animation': 'AnimationFourPhotosScroll',
        data: {
            'image1': image5,
            'description1': 'Каток и фотозона',
            'image2': image6,
            'description2': 'Ярмарка',
            'image3': image7,
            'description3': 'Катальная горка',
            'image4': image8,
            'description4': 'Сцена для выступлений',
        }
    },
    {
        animation: 'AnimationMagnifierStatic',
        data: {
            'name': 'Спортивная площадка',
            'image': image9,
            'bigImage': image10,
        }
    },
    {
        animation: 'AnimationDropPhotoScroll',
        data: {
            'image': image11,
            'description': 'Пространства для занятия спортом и игры в баскетбол',
        }
    },
    {
        'animation': 'AnimationFourPhotosScroll',
        data: {
            'image1': image12,
            'description1': 'Каток и фотозона',
            'image2': image13,
            'description2': 'Ярмарка',
            'image3': image14,
            'description3': 'Катальная горка',
            'image4': image15,
            'description4': 'Сцена для выступлений',
        }
    },

]