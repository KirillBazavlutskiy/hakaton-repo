import styles from './AboutUs.module.scss';
const AboutUs = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.aboutUs}>
                    <h1>About us</h1>
                    <p>
                        We are a team of volunteer friends who have
                        united all our efforts and capabilities to
                        support the volunteer front. We started our
                        volunteer activity by creating a community on
                        Telegram on the third day of the war. Our goal
                        was to simplify communication between volunteers
                        for quick exchange of information - who needs what
                        kind of help, where to find the necessary
                        resources, and how to deliver and close the need.
                        Within just a few days, hundreds of concerned citizens
                        joined us not only from Dnipropetrovsk region but
                        from all over Ukraine, and friends from abroad also
                        joined us. Today our volunteer community continues to
                        grow. In addition to a large number of volunteers,
                        there is a core team of the foundation that directs
                        the vector of development, manages the daily activities
                        of the foundation, and negotiates new partnerships
                        and opportunities. There is a lot of management work
                        to ensure the foundation operates and grows.
                        Each of us does what we do best. But the most
                        important thing is that we have known each other
                        for a long time, many of us are close friends -
                        which gives us a great advantage and trust in each
                        other. We are growing and modernizing our work every
                        month, despite the fact that we all come from
                    </p>
                </div>
                <div className={styles.mission}>
                    <h1>Mission</h1>
                    <p>
                        To maintain the volunteer front of Ukraine.
                        Carry humanitarian mission to ensure the
                        necessary: Ukrainian military, forced migrants,
                         children, hospitals, shelters
                    </p>
                </div>
                <div className={styles.value}>
                    <h1>Value</h1>
                    <p>
                        Equality and mutual respect, professionalism and
                        transparency in activity, ethics and
                        partnership A person, his life and health,
                        honor and dignity, inviolability and security
                        - the highest social value.
                    </p>
                </div>
                <div className={styles.emptyBlock}></div>
            </div>
        </div>
    );
};

export default AboutUs;