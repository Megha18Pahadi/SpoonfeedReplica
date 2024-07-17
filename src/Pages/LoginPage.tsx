import React from 'react'
import { Form, Card, Input, Flex, Button } from 'antd';
import { Link } from 'react-router-dom'
type Props = {}
type FieldType = {
    username?: string;
    password?: string;//remember?: boolean; // Change the type of remember field to boolean
};
const LoginPage = (props: Props) => {
    return (
        <div
            style={{
                width: "400px",
                marginTop: "50px",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <div style={{ display: "flex", marginBottom: "15px" }}>
                <img
                    src="/images/logo.svg"
                    alt="Spoon Feeding"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                />
            </div>
            <Card>
                <Form
                    name="basic"
                    layout="vertical"
                    initialValues={{}}
                // onFinish={onFinish}
                // onFinishFailed={onFinishFailed}




                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please input your username!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item>
                        <Flex>

                            {
                                <Link to={"/forgot-password"} style={{ flexGrow: "1" }}>
                                    Forgot password?
                                </Link>
                            }

                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Flex>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default LoginPage