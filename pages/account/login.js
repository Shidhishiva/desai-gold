import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import { Container, Row, Form, Label, Input, Col } from 'reactstrap';
// import { providers, signIn, getSession, csrfToken } from "next-auth";
import { signIn, getSession, getProviders } from "next-auth/react";


const Login = ({ providers,csrfToken }) => {
    return (
        <CommonLayout parent="home" title="login">
            <section className="login-page section-b-space">
                <Container>
                    <Row>
                        <Col lg="6">
                            <h3>Login</h3>
                            <div className="theme-card">
                                <Form className="theme-form">
                                    <div className="form-group">
                                        <Label className="form-label" for="email">Email</Label>
                                        <Input type="text" className="form-control" id="email" placeholder="Email" required="" />
                                    </div>
                                    <div className="form-group">
                                        <Label className="form-label" for="review">Password</Label>
                                        <Input type="password" className="form-control" id="review"
                                            placeholder="Enter your password" required="" />
                                    </div><a href="#" className="btn btn-solid">Login</a>
                                    <br/>
                                    {/*{Object.values(providers).map((provider) => {
                                        return (
                                          <div key={provider.name}>
                                            <button className="btn btn-solid" onClick={() => signIn(provider.id)}>
                                              Sign in with {provider.name}
                                            </button>
                                          </div>
                                        );
                                      })
                                    }*/}
                                </Form>
                            </div>
                        </Col>
                        <Col lg="6" className="right-login">
                            <h3>New Customer</h3>
                            <div className="theme-card authentication-right">
                                <h6 className="title-font">Create A Account</h6>
                                <p>Sign up for a free account at our store. Registration is quick and easy. It allows you to be
                                    able to order from our shop. To start shopping click register.</p><a href="#"
                                        className="btn btn-solid">Create an Account</a>
                            </div>
                        </Col>
                    </Row>
                     
                </Container>
            </section>
        </CommonLayout>
    )
}

export async function getServerSideProps(context) {
  const { query, req, res } = context;
  var error = ''
  if(Boolean(query.error)) {
    error = query.error
  }
  
  try {    
    const secret = process.env.NEXTAUTH_SECRET
    const token = await getToken({ req, secret })   
    return { props: { providers: await getProviders(), loginError: error } };
  } catch (e) {
    return { props: { providers: await getProviders(), loginError: error } };
  }
  
}

export default Login;