import { React, useState, useRef } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Card, Row, Col } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../CSS/About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useCommentsContext } from '../context/CommentsContext';
import * as Yup from "yup";
import { Formik, Form } from "formik";
import CustomInput from '../formikElem/CustomInput';
const { Meta } = Card;
function About() {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    const nodeRef = useRef(null);

    const {
        removeComment,
        addComment,
        comments,
    } = useCommentsContext();

    const CommentAddSchema = Yup.object().shape({
        nickname: Yup.string().min(3, "Nickname must be 3 chars or longer").required("Required"),
        comment: Yup.string().max(200, "Comment must be 200 chars or shorter").required("Required"),
    });

    const addNewComment = (values) => {
        console.log('Comment values: ', values);
        const newComment = { id: comments.length + 1, ...values };
        console.log('Created comment: ', newComment);
        addComment(newComment);
        setAddedComment(null);
    };
    const [addedComment, setAddedComment] = useState(null);
    const getColumnSpan = () => {
        const itemCount = comments.length + (addedComment ? 1 : 0);
        if (itemCount >= 4) {
            return 6;
        }
        return 24 / itemCount;
    };
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

            <TransitionGroup className="list">
                <Row gutter={[16, 16]}>
                    {comments.map((comment) => (
                        <CSSTransition key={comment.id} timeout={5000} classNames="item">
                            <Col xs={24} sm={getColumnSpan()} key={comment.id}>
                                <Card
                                    hoverable
                                    style={{ width: '100%' }}
                                    cover={<img alt={comment.nickname} src="https://via.placeholder.com/150" />}
                                    onClick={() => removeComment(comment.id)}
                                >
                                    <Meta title={comment.nickname} description={comment.comment} />
                                </Card>
                            </Col>
                        </CSSTransition>
                    ))}
                    {addedComment && (
                        <CSSTransition key={addedComment.id} timeout={500} classNames="item">
                            <Col xs={24} sm={getColumnSpan()} key={addedComment.id}>
                                <Card
                                    hoverable
                                    style={{ width: '100%' }}
                                    cover={null}
                                    onClick={() => removeComment(addedComment.id)}
                                >
                                    <Meta title={addedComment.nickname} description={addedComment.comment} />
                                </Card>
                            </Col>
                        </CSSTransition>
                    )}
                </Row>
            </TransitionGroup>

            <Formik
                initialValues={{
                    name: "",
                    description: "",
                }}
                validationSchema={CommentAddSchema}
                onSubmit={addNewComment}
            >
                <Form className="registration-form">
                    <CustomInput label="Nickname:" type="text" id="nickname" name="nickname" />
                    <CustomInput label="Comment:" type="text" id="comment" name="comment" />

                    <div className="form-group">
                        <button type="submit">Add new Comment</button>
                    </div>
                </Form>
            </Formik>
        </Container>
    );
}

export default About;