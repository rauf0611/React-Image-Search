import React, { Component } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { ReactComponent as Logo } from './svg/Logo.svg';
import { ReactComponent as Heart } from './svg/Heart.svg';
import { ReactComponent as Sebet } from './svg/Sebet.svg';
import { ReactComponent as User } from './svg/User.svg';
import { ReactComponent as Vector } from './svg/Vector.svg';










class Header extends Component {
    render() {
        return (
            <div>
                <div className="firsth-header">
                    <Navbar className="firsth" variant="dark">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Haqqımızda</Nav.Link>
                            <Nav.Link href="#features">Brendlər</Nav.Link>
                            <Nav.Link href="#pricing">Kampaniyalar</Nav.Link>
                            <Nav.Link href="#features">Xidmət şəbəkələrimiz</Nav.Link>
                            <Nav.Link href="#pricing">Bizimlə əlaqə</Nav.Link>
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home"> <i class="phone volume icon"></i> (012) 954  </Nav.Link>
                            <Vector />
                            <Nav.Link href="#features">Hər gün 09:00 – 21:00</Nav.Link>
                            <Vector />
                            <Nav.Link href="#pricing">
                                <button className="btn-az-lan" >AZ</button>
                                <button className="btn-ru-lan">RU </button>
                            </Nav.Link>
                        </Nav>
                    </Navbar>
                </div>
                <div className="second-header">
                    <Navbar className="second" >
                        <Navbar.Brand href="#home">
                            <Logo />
                        </Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">
                                <div class="ui right action  input">
                                    <div class="ui basic floating  dropdown border button">
                                        <div class="text">Hər yerdə</div>
                                        <i class="dropdown icon"></i>
                                        <div class="menu">
                                            <div class="item">Some</div>
                                            <div class="item">Some</div>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="10000 – dən çox məhsulu kəşf edin"></input>
                                    <button class="ui icon button">
                                        <i class="search icon"></i>
                                    </button>

                                </div>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <Heart />
                                <h6> Seçilmişlərim</h6>
                            </Nav.Link>
                            <Vector />
                            <Nav.Link href="#pricing">
                                <Sebet />
                                <h6> Səbətim</h6>
                            </Nav.Link>
                            <Vector />

                            <Nav.Link href="#pricing">
                                <User />
                                <h6> Daxil ol</h6>
                            </Nav.Link>


                        </Nav>
                    </Navbar>
                </div>
            </div>
        )
    }
}


export default Header;