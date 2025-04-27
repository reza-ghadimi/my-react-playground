const BrokenComponent = () => {
    throw new Error('Broken during render!');

    return <div>Broken</div>;
};

export default BrokenComponent;
