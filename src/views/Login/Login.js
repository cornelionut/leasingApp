import React, { Component } from "react";
import { Link } from "react-router-dom";
import loginImg from "./login.svg";
import "../../Main.scss";
import "./style.scss";

// import {
//   Button,
//   Card,
//   CardBody,
//   CardGroup,
//   Col,
//   Container,
//   Form,
//   Input,
//   InputGroup,
//   InputGroupAddon,
//   InputGroupText,
//   Row,
// } from "reactstrap";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: "",
      Password: "",
      UsernameErrors: "",
      PasswordErrors: "",
      isLogginActive: true,
    };

    this.Password = this.Password.bind(this);
    this.Username = this.Username.bind(this);
    this.login = this.login.bind(this);
  }

  validateForm() {
    return this.Username.length > 0 && this.Password.length > 0;
  }

  Username(event) {
    this.setState({ Username: event.target.value });
  }

  Password(event) {
    this.setState({ Password: event.target.value });
  }

  login(event) {
    fetch("http://localhost:51044/api/Login/Login", {
      method: "post",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        Username: this.state.Username,
        Password: this.state.Password,
      }),
    })
      .then((Response) => Response.json())
      .then((result) => {
        console.log(result);

        if (result.status === "Invalid") alert("Invalid User");
        else this.props.history.push("/admin/dashboard");
      });
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState((prevState) => ({
      isLogginActive: !prevState.isLogginActive,
    }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Admin" : "Dealer";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={(ref) => (this.container = ref)}>
            {isLogginActive && (
              <div className="base-container" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <div className="content">
                  <div className="image">
                    <img src={loginImg} alt="isn't available" />
                  </div>

                  <div className="form">
                    <div className="form-group">
                      <label className="usernameText" htmlFor="username">
                        Username
                      </label>
                      <input
                        onChange={this.Username}
                        type="text"
                        name="username"
                        placeholder="username"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        onChange={this.Password}
                        type="password"
                        name="password"
                        placeholder="password"
                      />
                    </div>

                    <div>
                      <Link className="forgotPassword" to="/login/reset">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="footer">
                  <button
                    onClick={this.login}
                    disabled={!this.validateForm}
                    type="button"
                    className="btn"
                  >
                    Login
                  </button>
                </div>
              </div>
            )}
          </div>

          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={(ref) => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
      //   <div className="app flex-row align-items-center">
      //     <Container>
      //       <Row className="justify-content-center">
      //         <Col md="9" lg="7" xl="6">
      //           <CardGroup>
      //             <Card className="p-2">
      //               <CardBody>
      //                 <Form>
      //                   <div class="row" className="mb-2 pageheading">
      //                     <div class="col-sm-12 btn btn-primary">Login</div>
      //                   </div>

      //                   <InputGroup className="mb-3">
      //                     <Input
      //                       type="text"
      //                       onChange={this.Username}
      //                       placeholder="Enter Username"
      //                     />
      //                   </InputGroup>

      //                   <InputGroup className="mb-4">
      //                     <Input
      //                       type="password"
      //                       onChange={this.Password}
      //                       placeholder="Enter Password"
      //                     />
      //                   </InputGroup>

      //                   <Button onClick={this.login} color="success" block>
      //                     Login
      //                   </Button>

      //                   <Link to={"/Signup"} className="nav-link">
      //                     <Button onClick={this.signup} color="success" block>
      //                       Signup
      //                     </Button>
      //                   </Link>
      //                 </Form>
      //               </CardBody>
      //             </Card>
      //           </CardGroup>
      //         </Col>
      //       </Row>
      //     </Container>
      //   </div>
    );
  }
}

const RightSide = (props) => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};
