import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Photos = () => {
    const photoName = [
        {
            id: '1',
            name: "Note Taker",
            link: "https://github.com/ehajek/NoteTaker"
        },
        {
            id: '2',
            name: "Weather Dashboard",
            link: "https://github.com/ehajek/WeatherDashboard"
        },
        {
            id: '3',
            name: "Portfolio Generator",
            link: "https://github.com/ehajek/portfolio-generator"
        }, {
            id: '4',
            name: "Work Day Scheduler",
            link: "https://github.com/ehajek/WorkDayScheduler"
        },
        {
            id: '5',
            name: "10Speed",
            link: "https://github.com/ehajek/10Speed"
        },
        {
            id: '6',
            name: "Stock Watch Live",
            link: "http://www.stockwatch.life/"
        }
    ];

    return (
        <div className="photoBackdrop">
            <div className="photoContainer">
                {photoName.map(photo => (
                    <div className="img__wrap">
                        <img 
                        // src={'../../../src/assets/images/1.jpg'}
                        src={`./assets/images/${photo.id}.jpg`} 
                        alt={photo.name} 
                        className="img-fluid photoEdits "
                        key={photo.id}
                        ></img>
                        <p class="img__description">{photo.name} &nbsp; 
                        <a href={photo.link}>
                        <FontAwesomeIcon icon={['fab', 'github']} size={['4x']} /> </a> &nbsp;
                        </p>
                        <p></p>
                    </div>
                ))}
                <p></p>
            </div>
        </div>
    );
};

export default Photos;