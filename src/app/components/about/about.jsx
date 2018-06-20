import * as React from 'react';
import styles from './about.css';
import meet_the_parents from '../images/meet_the_parents.jpg';

class About extends React.Component {

    render() {
        return (
            <div className={styles.containerMovie}>
                <div className={styles.imageMovies}>
                    <img src={meet_the_parents} alt="parents" />
                </div>
                <div className={styles.informationAboutMovies}>
                    <h1 className={styles.titleMovies}>Title {this.props.match.params.name}</h1>
                    <div className={styles.descriptionMovie}>
                        <p>A small group of former classmates organize an elaborate, annual game of tag that requires some to travel all over the country.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
