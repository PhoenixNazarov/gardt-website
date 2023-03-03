# gardt-website

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Добавление проекта

### [AnimationBackground.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationBackground.vue)
Задний фон с градиентом для страниц

### [AnimationName.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationName.vue)
Имя для проектов

```js
const animation = {
    animation: 'AnimationName',
    data: {
      name: ['Двухуровневая', 'Загородная', 'Терраса']
    }
  }
```

### [AnimationNameVideo.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationNameVideo.vue)
Имя для проектов с видео на заднем фоне

```js
const animation = {
    animation: 'AnimationNameVideo',
    data: {
        name: ['Концепция', 'Благоустройства', 'Жилого комплекса'],
        video: {
            source: video1,
            'type:': 'video/mp4'
        }
    }
}
```

### [AnimationDescription.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationDescription.vue)
Описание проектов

```js
const animation = {
    animation: 'AnimationDescription',
    data: {
        name: 'Зеленогорск',
        description: 'Описание',
        square: '60 м²',
        year: '2022',
        client: 'Частное лицо'
    }
}
```

### [AnimationPhotoDescription.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationPhotoDescription.vue)
Анимация с принцыпами в конце

```js
const animation = {
    animation: 'AnimationPhotoDescriptionScroll',
    data: {
        description1: 'Зоны разделены таким образом, что функционал нижней террасы плавно переходит в зону отдыха верхней.',
        name1: 'Озеленение',
        description2: 'Ассортимент растений подобран с учетом особенностей каждой зоны:\n' +
            'на нижней - пряные травы и декоративные цветочные композиции;\n' +
            'на верхней - декоративно лиственные растения, попеременно цветущие в течение весенне-осеннего сезона',
        image: image1,
        principles: [
            [pImageUser, 'todo', 'Подобранные растения требуют минимального ухода, не аллергенны.'],
            [pImageProcess, 'todo', 'Подобраны кашпо из облегченного бетона, с длительным сроком эксплуатации и минимальным.'],
            [pImageScenery, 'todo', 'Зеленая кровля на верхней террасе обеспечивает регуляцию теплового режима дома, охлаждает.']
        ]
    }
}
```


### [AnimationMagnifierStatic.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationMagnifierStatic.vue)
Анимация с принцыпами в конце

```js
const animation = {
    animation: 'AnimationMagnifierStatic',
    data: {
        name: 'Нижняя терраса',
        image: image2,
        bigImage: image3
    }
}
```

### [AnimationMagnifierStatic.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationMagnifierStatic.vue)
Анимация с уменьшающейся фотографией и текстом

```js
const animation = {
    animation: 'AnimationDropPhotoScroll',
    data: {
        image: image4,
        description: 'Функциональное пространство с обеденной зоной'
    }
}
```

### [AnimationThreePhotosScroll.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationThreePhotosScroll.vue)
Коллаж с 3 фотографиями

```js
const animation = {
    animation: 'AnimationThreePhotosScroll',
    data: {
        image1: image5,
        description1: 'Обеденная зона',
        image2: image6,
        description2: 'Летняя кухня',
        image3: image7,
        description3: 'Лаунж зона'
    }
}
```

### [AnimationThreePhotosDoubleOneScroll.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationThreePhotosDoubleOneScroll.vue)
Второй коллаж с 3 фотографиями

```js
const animation = {
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
```

### [AnimationFourPhotosScroll.vue](src%2Fcomponents%2FprojectAnimations%2FAnimationFourPhotosScroll.vue)
Коллаж с 4 фотографиями

```js
const animation = {
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
}
```