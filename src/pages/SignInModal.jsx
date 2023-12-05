import React, { useState } from 'react';
import { Modal, Button, Form, Input, Spin } from 'antd';
import { MailOutlined, KeyOutlined } from '@ant-design/icons';

const SignInModal = ({ visible, onCancel, onLogin }) => {
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleLogin = (values) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            console.log('Logged in with:', values);
            onLogin();
            onCancel();
        }, 1000);
    };

    return (
        <Modal
            visible={visible}
            title="Login"
            onCancel={onCancel}
            footer={[
                <Button key="back" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    loading={loading}
                    onClick={() => form.submit()}
                >
                    Login
                </Button>,
            ]}
        >
            <Spin indicator={<KeyOutlined />} spinning={loading} tip="Logging in...">
                <Form onFinish={handleLogin} form={form} initialValues={{ remember: true }}>
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username!' }]}
                    >
                        <Input prefix={<MailOutlined />} placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password prefix={<KeyOutlined />} placeholder="Password" />
                    </Form.Item>
                </Form>
            </Spin>
        </Modal>
    );
};

export default SignInModal;
