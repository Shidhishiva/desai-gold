import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Input, Container, Row, Form, Label ,Col} from 'reactstrap';
import {useForm} from "react-hook-form"

// import { prisma } from "../../server/db/client"

const Register = () => {
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    return (
        <CommonLayout parent="home" title="register">
            <section className="register-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h3>create account</h3>
                            <div className="theme-card">
                                <Form className="theme-form" action="/api/auth/register" method="POST">
                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="email">First Name</Label>
                                            <Input type="text" className="form-control" name="fname" id="fname" placeholder="First Name" required/>
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="review">Last Name</Label>
                                            <Input type="text" className="form-control" name="lname" id="lname" placeholder="Last Name" required/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="fmobile">Mobile No</Label>
                                            <Input type="number" className="form-control" name="fmobile" id="fmobile" placeholder="Mobile Number" required />
                                        </Col>
                                        <Col md="6">
                                            <Label className="form-label" for="email">email</Label>
                                            <Input type="email" className="form-control" name="email" id="email" placeholder="Email" required/>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col md="6">
                                            <Label className="form-label" for="fpassword">Password</Label>
                                            <Input type="password" className="form-control" name="fpassword" id="fpassword"
                                                placeholder="Enter your password" required/>
                                        </Col>
                                        <Col md="12">
                                            <input href="#" type="submit" className="btn btn-solid w-auto"/>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </CommonLayout>
    )
}
function Error({ message }) {
    return (
        <div style={{color:"red",borderRadius:"10px",height:"30px",textAlign:"center"}}>
            {message}
        </div>
    );
}
export default Register