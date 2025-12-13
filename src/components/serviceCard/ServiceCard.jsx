
import './serviceCard.css';

const ServicesCard = ({ service }) => {
    return (
        <div className='serviceCard'>
            <div className='serviceCardFront'>
                <img src={service.icon} alt={service.title} />
                <h2>{service.title}</h2>
                <span>{service.phrase}</span>
            </div>
            <div className='serviceCardBack'>
                <p>{service.description}</p>
            </div>
        </div>
    )
}

export default ServicesCard
