import React, { useState } from 'react';
import { Button } from 'antd';
import SignInModal from './SignInModal';

const Home = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleLogin = () => {
        console.log('Login successful!');
    };

    return (
        <div>
            <Button type="primary" onClick={() => setModalVisible(true)}>
                Open Login Modal
            </Button>
            <SignInModal
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                onLogin={handleLogin}
            />
        </div>
    );
};

export default Home;
