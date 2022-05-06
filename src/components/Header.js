import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


//rfce
function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
  return (
    <Container>
        <a>
            <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
            {cars && cars.map((car, index)=> ( 
                <a key={index} href="#">{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <div class="menu-icon" onClick={()=>setBurgerStatus(true)}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            {/*<CustomMenu />*/}
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <div class="close-menu" onClick={()=>setBurgerStatus(false)}>
            <FontAwesomeIcon icon={faXmark} />
            </div>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <BottomBurgerNav>
                <FontAwesomeIcon icon={faGlobe} />
                <span>United States</span>
            </BottomBurgerNav>
            <Language>
            <span>English</span>
            </Language>
        </BurgerNav>

    </Container>
  )
}

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        height: 16px;
        width: 130px;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
display: flex;
align-items: center;
a {
    font-weight: 600;
    font-size: 13px;
    text-transform: uppercase;
    margin-right: 10px
}
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${ props => props.show ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 0.2sec;

    li {
        padding: 15px 0 15px 20px;
        a {
            font-weight: 600;
            font-size: 14px;
            color: #686868;
        }
    }
`

const BottomBurgerNav = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;
    padding-top: 15px;
    padding-bottom: 5px;

    span {
        padding-left: 10px;
        font-size: 14px;
        color: #686868;
        font-weight: 600;
    }
`

const Language = styled.div`
    display: flex;
    padding-left: 47px;
    font-size: 12px;

    span {
    color: #909090;
    }
`

export default Header