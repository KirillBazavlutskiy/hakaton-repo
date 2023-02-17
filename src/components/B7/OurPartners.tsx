import s from './OurPartners.module.scss'

const OurPartners = () => {
    return (
        <div className={s.container}>
            <h1>Our partners</h1>
            <div className={s.block}>
                <div className={s.gridBlock}>
                    {
                        [
                            'UK.MED', 'WCK', 'uklon', 'Нова Пошта', 'reckitt',
                            'Nova Poshta Humanitarian', 'ФСЕ', 'Libero', 'БФ', 'Limak'
                        ].map(res => <p>{res}</p>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurPartners;