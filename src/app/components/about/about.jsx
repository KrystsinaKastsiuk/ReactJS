import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './about.css';

class About extends Component {
    static propTypes = {
      fetchUserById: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      user: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        description: PropTypes.string,
        img: PropTypes.string,
        short: PropTypes.string,
      }),
    };

    static defaultProps = {
      user: {
        id: undefined, name: undefined, description: undefined, img: undefined, short: undefined,
      },
    };

    componentDidMount() {
      this.props.fetchUserById(this.props.id);
    }

    render() {
      const { loading, user } = this.props;

      return (
        <div className={styles.containerMovie}>
            <div className={styles.imageMovies}>
                <img src={user.img} alt={user.short} />
            </div>
            <div className={styles.informationAboutMovies}>
                <h1 className={styles.titleMovies}>Title: {user.name}</h1>
                <div className={styles.descriptionMovie}>
                    <p>{user.description}</p>
                </div>
            </div>
        </div>
      );
    }
}

export default About;
