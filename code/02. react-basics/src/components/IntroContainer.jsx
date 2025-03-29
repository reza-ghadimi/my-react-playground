const introDescriptions = [
    'Click on the Vite and React logos to learn more',
    'Click the Vite and React logos to dive deeper.',
    'Explore Vite and React by clicking on their logos.',
    'Discover more about Vite and React by clicking the logos.',
    'Want to learn more about Vite and React? Click the logos!'
];

function generateRandomNumber(max) {
    let number = Math.floor(Math.random() * max);

    return number;
}

const description = introDescriptions[
    generateRandomNumber(introDescriptions.length)
];

export default function IntroContainer() {
    return (
        <div>
            <h1>Vite + React</h1>
            <p className='read-the-docs'>
                {description}
            </p>
        </div>
    );
}