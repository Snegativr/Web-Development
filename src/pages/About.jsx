import { React, useState, useRef } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../CSS/About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function About() {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const nodeRef = useRef(null);

    return (
        <Container className={styles.container}>
            {showButton && (
                <Button
                    className={styles.button}
                    onClick={() => setShowMessage(true)}
                    size="1g"
                >
                    Show Message
                </Button>
            )}
            <CSSTransition
                in={showMessage}
                nodeRef={nodeRef}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => setShowButton(false)}
                onExited={() => setShowButton(true)}
            >
                <Alert
                    ref={nodeRef}
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage(false)}
                    className={styles.alertContainer}
                >
                    <Alert.Heading>Welcome to our About Us page!</Alert.Heading>
                    <p>
                        We are a dedicated team working towards creating amazing experiences for our users.
                    </p>
                    <p>
                        Thank you for visiting our website!
                    </p>

                    <div className={styles.socialLinks}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>

                    <Button
                        variant="primary"
                        onClick={() => setShowMessage(false)}
                    >
                        Close
                    </Button>
                </Alert>
            </CSSTransition>
        </Container>
    );
}

export default About;