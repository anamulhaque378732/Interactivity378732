import { useState } from 'react';

const UpdatingObjectInState = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });



    return (
        <div>
            <div
                onPointerMove={(e) => {
                    const newPosition = {};
                    newPosition.x = e.clientX;
                    newPosition.y = e.clientY;
                    setPosition(newPosition);
                    // setPosition({
                    //     x: e.clientX,
                    //     y: e.clientY
                    // });
                }}

                style={{
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                }}>
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }} />
            </div>
        </div>
    );
};

export default UpdatingObjectInState;