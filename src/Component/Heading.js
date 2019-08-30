import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

  const Top = styled.nav`
  font-size: 3em;
  text-align: center;
  color: #0049CC;
  font-weight: Bold;
`;




function Heading(props) {
   
    
    return( 
    <div>
    <div>
    <Top><img ClassName="logo" src="https://scontent.fewr1-1.fna.fbcdn.net/v/t34.0-12/38977775_628329111025331_748131677_n.jpg?_nc_cat=1&_nc_oc=AQk6wx8_SGHU2BvmntdTESQiZpt78nUmizbA6aK0B_wq3-awoFE3lv2He_vpUfEzkFw&_nc_ht=scontent.fewr1-1.fna&oh=5783569da90a7fb6bad23567f12cf31e&oe=5D6ABE8B"/>Welcome to NASA Image Gallery</Top>
    
    </div>

    </div>
    )
}

export default Heading;