export default [
    {
        name: 'Lion',
        scientificName: 'Panthero leo',
        size: 140,
        diet: ['meat'],
        img: 'lion.jpg'
    },
    {
        name: 'Gorilla',
        scientificName: 'Gorilla beringei',
        size: 205,
        diet: ['plants', 'insects'],
        img: 'gorilla.jpg',
        additional: {
            notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.'
        }
    },
    {
        name: 'Zebra',
        scientificName: 'Equus quagga',
        size: 322,
        diet: ['plants'],
        img: 'zebra.jpg',
        additional: {
            notes: 'There are three different species of zebra.',
            link: 'https://en.wikipedia.org/wiki/Zebra'
        }
    }
]
