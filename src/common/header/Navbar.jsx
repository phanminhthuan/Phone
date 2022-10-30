import React, { Component } from 'react'
import { Link } from "react-router-dom"
import LoginRegister from '../../components/loginRegisterModal'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      login: true
    };
  }
  showHideModal = () => {
    this.setState({ modalShow: !this.state.modalShow });
  };

  loginClicked = () => {
    this.setState({ modalShow: true, login: true });
  };

  registerClicked = () => {
    this.setState({ modalShow: true, login: false });
  };

  render() {
    return (
      <>
        <header className='header'>
          <div className="container d_flex">
            <div className="categories d_flex">
              <span className='fa-solid fa-border-all'></span>
              {/* <h4>
              <div className='category'> Danh mục <i className='fa fa-chevron-down'></i></div>
            </h4> */}
            </div>

            <div className="navlink">
              <ul className={false ? "nav-links-MobileMenu" : "link f_flex capitalize"}>
                <li>
                  <Link to='/'>Trang Chủ</Link>
                </li>
                <li>
                  <Link to='/admin'>Admin</Link>
                </li>
                <li>
                  <Link to='/track'>Kiểm tra đơn hàng</Link>
                </li>
                <li>
                  <a href="#" onClick={() => this.loginClicked()}>
                    <i
                      className="fas fa-sign-in-alt"
                      aria-hidden="true"
                    ></i>
                    Đăng Nhập
                  </a>
                </li>
                <li>
                  <a href="#" onClick={() => this.registerClicked()}>
                    <i
                      className="fa fa-user-plus"
                      aria-hidden="true"
                    ></i>
                    Đăng Ký
                  </a>
                </li>
                <li>
                  <Link to='/contact'>Liên hệ</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <LoginRegister
          show={this.state.modalShow}
          login={this.state.login}
          registerClicked={() => this.registerClicked()}
          loginClicked={() => this.loginClicked()}
          onHide={() => this.showHideModal()}
        />
      </>
    )
  }
}

export default NavBar