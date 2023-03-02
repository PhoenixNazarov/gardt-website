import {pImageProcess, pImageScenery, pImageUser} from "@/assets/images/portfolio-principles/import";

import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';
import image5 from './image5.png';

export const bloggersData = [
    {
        animation: 'AnimationName',
        data: {
            'name': ['Озеленение', 'террасы', 'пентхауса']
        }
    },
    {
        animation: 'AnimationDescription',
        data: {
            'name': 'Санкт-Петербург',
            'description': 'Пентхаус',
            'square': '',
            'year': '2020',
            'client': 'Частное лицо'
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
                [pImageUser, 'todo', ''],
            ]
        }
    },
    {
        'animation': 'AnimationFourPhotosScroll',
        data: {
            'image1': image2,
            'description1': '',
            'image2': image3,
            'description2': '',
            'image3': image4,
            'description3': '',
            'image4': image5,
            'description4': '',
        }
    },
]