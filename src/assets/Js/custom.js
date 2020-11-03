(function ($) {
    "use strict";

    /***********************************************************Start language buttons ******************************* */
  
    var style = document.createElement("style");
    style.innerHTML = `
    
    /* ------------------------------------------------------------------------------
  
    Template Name: Lewis
    Description: Ethant Hunt HTML Template
    Author: Paul
    Author URI: http://themeforest.net/user/paul_tf
  
    1.  Global
  
        1.1 General
        1.2 Typography
  
    2.  Preloader
    3.  Header
    4.  Content
  
        4.1 Slide About
        4.2 Slide Services
        4.3 Slide Skills
        4.4 Slide Resume
        4.5 Slide Portfolio
        4.6 Slide Awards
        4.7 Slide Testimonials
        4.8 Slide Clients
        4.9 Slide Contact
  
    5.  Footer
    6.  Modal
    7.  Dark Theme
    8. Intro
  
  
  
  
  /*-------------------------------------------------------------------------------
    1. Global
  -------------------------------------------------------------------------------*/
  
  /* 1.1 General */
  
  @import url("https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700&display=swap");
  
  @import url("https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap");
  
  html {
    font-size: 12px;
  }
  
  body {
    font-family: "Work Sans", sans-serif;
    color: #1f2044;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  
  ::selection {
    background-color: #fcf1e7;
    color: #1f2044;
    text-shadow: none;
  }
  
  -webkit-::selection {
    background-color: #fcf1e7;
    color: #1f2044;
    text-shadow: none;
  }
  
  ::-moz-selection {
    background-color: #fcf1e7;
    color: #1f2044;
    text-shadow: none;
  }
  
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: #2e2e2e;
  }
  
  img {
    max-width: 100%;
  }
  
  /* 1.2 Typography */
  
  .font-custom {
    font-family: "Libre Baskerville", serif;
  }
  
  .text-primary {
    color: #f79784 !important;
  }
  
  @media (min-width: 1200px) {
    .container {
      max-width: 1200px;
    }
  }
  
  @media (min-width: 1600px) {
    .container-fluid {
      padding-left: 4.375rem;
      padding-right: 4.375rem;
    }
  }
  
  /* 1.3 Animation */
  
  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 160px, 0);
      transform: translate3d(0, 160px, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 160px, 0);
      transform: translate3d(0, 160px, 0);
    }
  
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  
  /* 1.4 Icons */
  
  [class^="icon-"] {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    top: -0.05em;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    letter-spacing: 0;
  }
  
  [class^="icon-"]:before {
    content: "W";
    opacity: 0;
    display: block;
    height: 0;
    padding-bottom: 100%;
    font-style: normal;
    font-weight: normal;
    font-family: Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  .icon-behance {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3e%3cpath fill='%231f2044' d='M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z'/%3e%3c/svg%3e");
  }
  
  a:hover .icon-behance {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3e%3cpath fill='%23ea8f7d' d='M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z'/%3e%3c/svg%3e");
  }
  
  .icon-linkedin {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='%231f2044' d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'/%3e%3c/svg%3e");
  }
  
  a:hover .icon-linkedin {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='%23ea8f7d' d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'/%3e%3c/svg%3e");
  }
  
  .icon-dribbble {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='%231f2044' d='M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z'/%3e%3c/svg%3e");
  }
  
  a:hover .icon-dribbble {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='%23ea8f7d' d='M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z'/%3e%3c/svg%3e");
  }
  
  
  
  /* 1.5 Buttons */
  
  button:focus,
  input:focus {
    outline: none;
  }
  
  .btn {
    padding: 1rem 2.625rem;
    border-radius: 500px;
    font-weight: bold;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
  
  .btn-dark {
    background-color: #1f2044;
  }
  
  /* 1.6 Forms */
  
  #success,
  #error {
    display: none;
  }
  
  .form-group-message {
    display: none;
  }
  
  label.error {
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: #555555;
  }
  
  .form-group {
    margin-bottom: 2rem;
  }
  
  .form-control {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.875rem;
    padding-bottom: 0.9375rem;
    height: calc(1.5em + 1.8125rem + 2px);
  }
  
  /* ------------------------------------------------------------------------------- */
  /*  Preloader
  /* ------------------------------------------------------------------------------- */
  
  .preloader {
    position: fixed;
    overflow: hidden;
    z-index: 999999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    text-align: center;
  }
  
  .three-bounce {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  
  .three-bounce > div {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 100%;
    background-color: #f79784;
    -webkit-animation: bouncedelay 1.4s infinite ease-in-out both;
    animation: bouncedelay 1.4s infinite ease-in-out both;
  }
  
  .three-bounce .one {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  
  .three-bounce .two {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  
  @-webkit-keyframes bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }
  
  @keyframes bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      transform: scale(1);
      -webkit-transform: scale(1);
    }
  }
  
  /*-------------------------------------------------------------------------------
    3. Header
  -------------------------------------------------------------------------------*/
  
  .header {
    padding-top: 3.875rem;
  }
  
  .body-piling .header {
    padding-top: 0;
  }
  
  .header .container-fluid {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  
  
  /**/
  
  .brand-name {
    color: #234969;
    text-decoration: none;
    font-size: 1.375rem;
    letter-spacing: -0.06em;
  }
  
  .brand-name:hover {
    text-decoration: none;
    color: #234969;
  }
  
  .brand-name-s {
    font-weight: 600;
    color: #464989;
  }
  
  @media (min-width: 768px) {
    .body-piling .brand {
      top: 3.875rem;
    }
  }
  
  @media (min-width: 1400px) {
    .body-piling .brand {
      left: 3.375rem;
    }
  }
  
  .nav-toggle-btn {
    margin: 0;
    border: none;
    padding: 0;
    background-color: transparent;
    z-index: 995;
  }
  /**/
  .body-piling .nav-toggle-btn {
    position: fixed;
    right: 15px;
    top: 20px;
  }
  .body-piling .nav-toggle-btn-left {
    position: fixed;
    left: 15px;
    top: 20px;
  }
  /**/
  @media (min-width: 768px) {
    .body-piling .nav-toggle-btn {
      top: 4.1875rem;
    }
  }
  
  @media (min-width: 1400px) {
    .body-piling .nav-toggle-btn {
      right: 4.375rem;
    }
  }
  
  .hamburger {
    display: flex;
    align-self: center;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 24px;
    cursor: pointer;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  
  .hamburger span {
    align-self: flex-end;
    height: 2px;
    width: 83.33333333%;
    background: #3e4651;
    transition: all 400ms ease-in-out;
  }
  
  .hamburger .meat {
    width: 100%;
    transition: all 200ms ease-in-out;
  }
  
  .hamburger .bottom-bun {
    width: 58.33333333%;
    transition: all 400ms ease-in-out;
  }
  
  .hamburger:hover span {
    width: 100%;
  }
  
  
  .dark-mood {
    display: inline-block;
    margin-right: 1.5rem;
    color: #32324c;
    text-decoration: none;
    font-size: 0.95rem;
  }
  
  .dark-mood.active {
    text-decoration: none;
    color: #32324c;
  }
  .dark-mood:hover {
    text-decoration: none;
    color: #32324c;
  }
  
  .menu-lang-item.active,
  .menu-lang-item:hover {
    color: #1f2044;
    text-decoration: none;
  }
  
  .menu-main {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    font-size: 1.375rem;
    font-weight: bold;
  }
  
  .menu-main > ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .menu-main > ul > li {
    margin-bottom: 1.1875rem;
    padding-left: 2px;
  }
  
  .menu-main a,
  .menu-main a:hover {
    color: #1f2044;
    text-decoration: none;
  }
  
  .menu-main .active a,
  .menu-main a:hover {
    background-color: #fcf1e7;
    box-shadow: #fcf1e7 0 0 0 2px;
  }
  
  .menu-main a:after {
    content: ".";
    opacity: 0;
    display: inline-block;
    transform: translate(2rem, 0);
    transition: all 0.3s ease-in-out;
  }
  
  .menu-main .active a:after {
    transform: translate(0, 0);
    opacity: 1;
  }
  
  .menu-footer {
    padding-top: 3rem;
  }
  
  .menu-footer-contacts {
    margin-bottom: 51px;
  }
  
  .menu-footer-phone {
    margin-bottom: 0.25rem;
    font-size: 1.375rem;
    font-weight: 600;
  }
  
  .menu-footer-mail {
    color: #f79784;
    font-weight: 500;
    font-size: 1rem;
  }
  
  .menu-footer-copyright {
    font-size: 0.875rem;
    color: #234969;
  }
  
  .menu-ornament {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.375rem;
    background: #78acd9;
  }
  
  .menu-ornament:before,
  .menu-ornament:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 33.33333333%;
    height: 100%;
  }
  
  .menu-ornament:before {
    background: #464989;
    left: 0;
  }
  
  .menu-ornament:after {
    background: #f79784;
    right: 0;
  }
  /*-------------------------------------------------------------------------------
    4. Content
  -------------------------------------------------------------------------------*/
  
  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  
  .wrapper #content {
    flex: 1 0 auto;
    display: flex;
    flex-wrap: wrap;
  }
  
  .wrapper #footer {
    flex: 0 0 auto;
  }
  
  .full-page {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .section {
    min-height: 100%;
    display: flex;
  }
  
  #pp-nav {
    display: none;
  }
  
  .progress-nav {
    width: 2px;
    position: fixed;
    z-index: 300;
    top: 50%;
    left: 10px;
    transform: translate(0, -50%);
  }
  
  .progress-nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .progress-nav li {
    width: 2px;
    height: 1.625rem;
    background: #464a8a;
    overflow: hidden;
    transition: background 0.5s ease-in-out;
    position: relative;
  }
  
  .progress-nav li:before {
    content: "";
    display: block;
    width: 2px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #464a8a;
  }
  
  .progress-nav li.active:before {
    animation: navHeight 0.5s ease-in-out forwards;
  }
  
  @-webkit-keyframes navHeight {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  
  @keyframes navHeight {
    0% {
      height: 0;
    }
    100% {
      height: 100%;
    }
  }
  
  .progress-nav li.active,
  .progress-nav li.active ~ li {
    background: #cccccc;
  }
  
  .progress-nav li:before {
    height: 100%;
  }
  
  .progress-nav li.active ~ li:before {
    height: 0%;
  }
  /**/
  @media (min-width: 1400px) {
    .progress-nav {
      right: 3.5rem;
    }
    /**/
  }
  
  .pp-scrollable {
    background: #ffffff;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .slide-dark {
    background: #fafafa;
  }
  
  .slide-container {
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    padding-top: 6.25rem;
    padding-bottom: 3.75rem;
    position: relative;
  }
  
  .lines > div {
    display: block;
    width: 1px;
    height: 100%;
    background: #f5f5f5;
    position: absolute;
    left: 20%;
    top: 0;
  }
  
  .lines > div:nth-child(2) {
    left: 40%;
  }
  
  .lines > div:nth-child(3) {
    left: 60%;
  }
  
  .lines > div:nth-child(4) {
    left: 80%;
  }
  
  .slide-dark .lines > div {
    background: #eeeeee;
  }
  
  .parallax {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  
  .shape {
    position: absolute !important;
    background-position: 0% 0%;
  }
  
  .shape > .inside {
    display: block;
    width: 100%;
    height: 0%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  
  .shape1 {
    top: 26.9% !important;
    left: 9.89583333% !important;
    width: 8.64583333%;
  }
  
  .shape1-intro {
    top: 25.7% !important;
    left: 8.80208333% !important;
    width: 8.85416667%;
  }
  
  
  
  .shape2 {
    top: 41.3% !important;
    left: 16.875% !important;
    width: 6.66666667%;
  }
  
  
  
  .shape3 {
    top: 55.1% !important;
    left: 80.3125% !important;
    width: 2.08333333%;
  }
  
  
  .shape3-intro {
    top: 44.9% !important;
    left: 85.72916667% !important;
    width: 1.97916667%;
  }
  
  
  .shape4 {
    top: 47.3% !important;
    left: 81.66666667% !important;
    width: 3.17708333%;
  }
  
  
  .shape4-intro {
    top: 36.1% !important;
    left: 85.57291667% !important;
    width: 3.17708333%;
  }
  
  .shape5 {
    top: 54.9% !important;
    left: 82.34375% !important;
    width: 6.77083333%;
  }
  
  
  .shape5-intro {
    top: 43.1% !important;
    left: 89.63541667% !important;
    width: 5.88541667%;
  }
  
  
  .shape6 {
    top: 52.1% !important;
    left: 54.0625% !important;
    width: 16.25%;
  }
  
  
  .shape7 {
    top: 51.2% !important;
    left: 56.51041667% !important;
    width: 19.0625%;
  }
  
  
  
  .shape7-intro {
    top: 44.9% !important;
    left: 62.96875% !important;
    width: 21.19791667%;
  }
  
  
  .shape8 {
    top: 47.9% !important;
    left: 63.95833333% !important;
    width: 3.33333333%;
  }
  
  
  
  .shape9 {
    top: 52% !important;
    left: 49.27083333% !important;
    width: 0.78125%;
  }
  
  
  
  .shape9-intro {
    top: 60.1% !important;
    left: 51.25% !important;
    width: 0.78125%;
  }
  
  
  
  .shape10 {
    top: 54.8% !important;
    left: 69.89583333% !important;
    width: 0.98958333%;
  }
  
  
  
  .shape10-intro {
    top: 62.1% !important;
    left: 86.14583333% !important;
    width: 0.5rem;
  }
  
  
  
  .shape11 {
    top: 58.8% !important;
    left: 22.86458333% !important;
    width: 0.98958333%;
  }
  
  
  
  .shape11-intro {
    top: 68.6% !important;
    left: 15% !important;
    width: 0.9375%;
  }
  
  
  .shape12 {
    top: 69.3% !important;
    left: 24.11458333% !important;
    width: 1.45833333%;
  }
  
  
  
  .shape12-intro {
    top: 79.9% !important;
    left: 43.4375% !important;
    width: 1.45833333%;
  }
  
  
  
  .shape13 {
    top: 46.7% !important;
    left: 28.38541667% !important;
    width: 1.25%;
  }
  
  .shape14,
  .shape14-intro {
    top: 36.8% !important;
    left: 16.97916667% !important;
    width: 0.72916667%;
  }
  
  
  
  .shape15 {
    top: 38.6% !important;
    left: 82.8125% !important;
    width: 0.83333333%;
  }
  
  
  .shape16 {
    top: 71.2% !important;
    left: 32.29166667% !important;
    width: 0.72916667%;
  }
  
  
  
  
  .slide-ornament > .inside {
    display: block;
    height: 0;
    padding-bottom: 82.35294118%;
  }
  
  /* 4.1 Slide About */
  
  .title-mini {
    margin-bottom: 0.8125rem;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }
  
  .title-mini-margin-lg {
    margin-bottom: 1.25rem;
  }
  
  .slide-title {
    margin-bottom: 1.875rem;
    font-weight: bold;
    font-size: 2.75rem;
    letter-spacing: -0.02em;
    line-height: 1.31818182;
  }
  
  @media (min-width: 768px) {
    .slide-title {
      margin-right: -3.125rem;
    }
  
    .slide-title.text-center,
    .text-center .slide-title {
      margin-right: 0;
    }
  }
  
  h3.slide-title {
    font-size: 2.5rem;
  }
  
  .slide-title-margin-md {
    margin-bottom: 2.25rem;
  }
  
  .slide-title-margin-lg {
    margin-bottom: 4rem;
  }
  
  .slide-title .text-typed {
    background: #fcf1e7;
    box-shadow: #fcf1e7 0 0 0 5px;
    display: inline-block;
    min-height: 0.85em;
    line-height: 0.85;
  }
  
  .slide-descr {
    margin-top: 1.875rem;
    letter-spacing: -0.01em;
    color: #234969;
    font-size: 1rem;
    line-height: 1.625;
  }
  
  .slide-photo {
    position: relative;
    margin-top: 4rem;
  }
  
  @media (min-width: 768px) {
    .slide-photo {
      margin-top: 0;
    }
  }
  
  .slide-photo-about {
    margin-top: 4.375rem;
    position: relative;
    max-width: 43.125rem;
    margin-left: auto;
    margin-right: auto;
  }
  
  .rounded-text {
    width: 8.625rem;
    height: 8.625rem;
    position: absolute;
    right: 50%;
    margin-right: 7.5rem;
    transform: rotate(-103deg);
  }
  
  /* 4.2 Slide Services */
  
  .service-list {
    margin-top: 4.25rem;
  }
  
  .service-list ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  .primary-link {
    position: relative;
    font-size: 1.375rem;
    font-weight: bold;
  }
  
  .service-list li:not(:first-child) {
    margin-top: 1.3125rem;
  }
  
  .primary-link a,
  .primary-link a:hover {
    color: inherit;
    text-decoration: none;
  }
  
  .primary-link a:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 100%;
    margin-top: 0.25rem;
    height: 3px;
    width: 0;
    background-color: #f69683;
    transition: all 0.3s ease-in-out;
  }
  
  .primary-link a:hover:before {
    width: 5rem;
  }
  
  .slide-photo-services > .inside {
    width: 67.19298246%;
    margin-left: 15%;
  }
  
  .image-card {
    position: absolute;
    border-radius: 1.125rem;
    background: #ffffff;
    box-shadow: rgba(18, 42, 78, 0.15) 3.75rem 3.75rem 3.75rem;
  }
  
  .image-card-body {
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
  
  .image-card-body > .inside {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .image-card-dark {
    background: #1f2044;
    box-shadow: none;
  }
  
  .image-card-primary {
    background: #df5647;
    box-shadow: none;
  }
  
  .section:not(.active) .animate-element {
    animation-name: none;
  }
  
  .section.active .animate-element {
    animation-duration: 0.7s;
    animation-fill-mode: both;
  }
  
  .section.active .delay1 {
    animation-delay: 0.1s;
  }
  
  .section.active .delay2 {
    animation-delay: 0.2s;
  }
  
  .section.active .delay3 {
    animation-delay: 0.3s;
  }
  
  .section.active .delay4 {
    animation-delay: 0.4s;
  }
  
  .section.active .delay5 {
    animation-delay: 0.5s;
  }
  
  .section.active .delay6 {
    animation-delay: 0.6s;
  }
  
  .section.active .delay7 {
    animation-delay: 0.7s;
  }
  
  .section.active .delay8 {
    animation-delay: 0.8s;
  }
  
  .section.active .delay9 {
    animation-delay: 0.9s;
  }
  
  .section.active .delay10 {
    animation-delay: 1s;
  }
  
  .section.active .delay11 {
    animation-delay: 1.1s;
  }
  
  .section.active .delay12 {
    animation-delay: 1.2s;
  }
  
  .section.active .delay13 {
    animation-delay: 1.3s;
  }
  
  .section.active .delay14 {
    animation-delay: 1.4s;
  }
  
  .section.active .delay15 {
    animation-delay: 1.5s;
  }
  
  .section.active .delay16 {
    animation-delay: 1.6s;
  }
  
  .card2-1 {
    width: 22.63157895%;
    left: 6.31578947%;
    top: 13.09859155%;
  }
  
  .card2-1 .image-card-body > .inside {
    width: 57.36434109%;
  }
  
  .card2-2 {
    width: 38.59649123%;
    left: -9.64912281%;
    top: 60.56338028%;
  }
  
  .card2-2 .image-card-body > .inside {
    width: 65%;
  }
  
  .card2-3 {
    width: 29.8245614%;
    right: 0%;
    top: 12.81690141%;
  }
  
  .card2-3 .image-card-body > .inside {
    width: 52.94117647%;
  }
  
  .card2-4 {
    width: 17.54385965%;
    right: 6.66666667%;
    top: 71.12676056%;
  }
  
  .card2-4 .image-card-body > .inside {
    width: 71%;
  }
  
  /* 4.3 Slide Skills */
  
  .bar-list {
    margin-top: 3rem;
  }
  
  .bar-item {
    margin-bottom: 1.125rem;
  }
  
  .bar-item-title,
  .bar-item-value {
    margin-bottom: 0.6875rem;
  }
  
  .bar-item-title {
    font-size: 1rem;
    font-weight: bold;
  }
  
  .bar-item-value {
    padding-top: 2px;
    font-size: 0.875rem;
  }
  
  .progress {
    height: 0.875rem;
    border-radius: 0.4375rem;
  }
  
  .progress-bar {
    background-color: #75a9d6;
  }
  
  .progress-bar {
    position: relative;
    width: 0;
    transition: width 1s ease-in-out;
    transition-delay: 1.5s;
  }
  
  .card3-1 {
    position: relative;
    width: 77.89473684%;
  }
  
  .card3-1 .image-card-body > .inside {
    width: 86.71171171%;
  }
  
  .card3-2 {
    width: 18.42105263%;
    left: 18.491228%;
    top: -4px;
  }
  
  .card3-2 .image-card-body > .inside {
    width: 65%;
  }
  
  .card3-3 {
    width: 35.0877193%;
    right: -14.929825%;
    top: -12.16216216%;
    box-shadow: rgba(16, 39, 91, 0.1) 1.375rem 1.375rem 3.75rem;
  }
  
  .card3-3 .image-card-body > .inside {
    width: 52.5%;
  }
  
  .card3-4 {
    width: 20.87719298%;
    right: -17.087719%;
    top: 82.88288288%;
    z-index: -1;
    box-shadow: rgba(11, 53, 92, 0.1) 1.875rem 1.875rem 3.75rem;
  }
  
  .card3-4 .image-card-body > .inside {
    width: 58.82352941%;
  }
  
  /* 4.4 Slide Resume */
  
  .slide-photo-education,
  .slide-photo-experience {
    margin-bottom: 2.1875rem;
  }
  
  .slide-photo-bg-rounded {
    padding: 14.59459459% 14.32432432% 2.7027027%;
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: contain;
  }
  
  .education-image {
    margin-top: 7.1969697%;
    margin-left: 4.16666667%;
    width: 81.43939394%;
  }
  
  
  .experience-image {
    margin-top: 4.92424242%;
    margin-left: 12.5%;
    width: 82.57575758%;
  }
  
  .slide-photo-bg-rounded > .inside {
    display: block;
    height: 0;
    padding-bottom: 100%;
    overflow: hidden;
    border-radius: 100%;
    background-color: #ffffff;
  }
  
  .vacancy-item {
    margin-bottom: 1.75rem;
  }
  
  .vacancy-item-title {
    margin-bottom: 0.8125rem;
    font-size: 1.125rem;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .vacancy-item-title a {
    color: inherit;
  }
  
  .vacancy-item-place,
  .vacancy-item-time {
    line-height: 1.625;
    font-size: 1rem;
  }
  
  .vacancy-item-place {
    font-weight: 600;
  }
  
  .vacancy-item-text {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.71428571;
  }
  
  /* 4.5 Slide Portfolio */
  
  .portfolio-item-photo {
    margin-bottom: 1.75rem;
  }
  
  @media (min-width: 768px) {
    .portfolio-item-detail {
      min-height: 8.75rem;
    }
  }
  
  .portfolio-item-title {
    margin-bottom: 0.625rem;
  }
  
  .portfolio-item-descr {
    font-size: 0.875rem;
  }
  
  .portfolio-carousel.owl-theme .owl-nav.disabled + .owl-dots {
    margin-top: 1.25rem;
  }
  
  .owl-theme .owl-dots .owl-dot span {
    width: 0.75rem;
    height: 0.75rem;
    margin: 5px 0.5rem;
  }
  
  .owl-theme .owl-dots .owl-dot.active span,
  .owl-theme .owl-dots .owl-dot:hover span {
    background: #464989;
  }
  
  /* 4.6 Slide Awards */
  
  .reward-list {
    margin-top: 4.0625rem;
  }
  
  .reward-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 2.5rem;
  }
  
  .reward-item:first-child {
    margin-top: 0;
  }
  
  .reward-item-photo {
    width: 10.5rem;
    flex: 0 0 auto;
    padding-right: 1.875rem;
    text-align: center;
  }
  
  .reward-item-title {
    margin-bottom: 3px;
    margin-right: -1rem;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.125rem;
  }
  
  .reward-item-descr {
    font-size: 0.875rem;
    color: #234969;
  }
  
  .slide-photo6 {
    padding-top: 1.875rem;
  }
  
  .slide-photo6 > .inside {
    width: 93.50877193%;
    margin-left: 3.50877193%;
  }
  
  .card6-1 {
    width: 14.03508772%;
    left: 6.31578947%;
    top: 0;
  }
  
  .card6-1 .image-card-body > .inside {
    width: 45%;
  }
  
  .card6-2 {
    width: 26.31578947%;
    left: 2.63157895%;
    top: 62.59259259%;
    top: 64.34697855%;
  }
  
  .card6-2 .image-card-body > .inside {
    width: 56%;
  }
  
  /* 4.7 Slide Testimonials */
  
  .testimonial-carousel {
    margin-top: 2rem;
  }
  
  .testimonial-item {
    min-height: 18.75rem;
  }
  
  .testimonial-item-text {
    margin-top: 0;
  }
  
  .testimonial-item-author {
    margin-top: 3.25rem;
  }
  
  .testimonial-avatar {
    width: 3.4375rem;
  }
  
  .avatar > .inside {
    display: block;
    height: 0;
    padding-bottom: 100%;
    border-radius: 500px;
    overflow: hidden;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
  }
  
  .testimonial-item-author-name {
    margin-bottom: 3px;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .testimonial-item-author-status {
    font-size: 0.875rem;
    color: #234969;
  }
  
  .testimonial-carousel.owl-theme .owl-dots {
    margin-left: -0.5rem;
    text-align: left;
  }
  
  .slide-photo-testimonials {
    padding-top: 12.28070175%;
    margin-bottom: 1.25rem;
  }
  
  .slide-photo-testimonials > .inside {
    width: 108.77192982%;
    margin-left: -5.26315789%;
  }
  
  .card7-1 {
    width: 12.28070175%;
    right: -5.96491228%;
    top: 24.0917782%;
    z-index: -1;
  }
  
  .card7-1 .image-card-body > .inside {
    width: 48.57142857%;
    top: 46%;
  }
  
  .card7-2 {
    width: 36.84210526%;
    left: -3.50877193%;
    top: 0;
    box-shadow: rgba(18, 42, 78, 0.15) 2.5rem 2.5rem 3.75rem;
  }
  
  .card7-2 .image-card-body {
    padding-bottom: 71.42857143%;
  }
  
  .card7-2 .image-card-body > .inside {
    width: 66.66666667%;
  }
  
  /* 4.8 Slide Clients */
  
  .client-list {
    margin-top: 4.125rem;
  }
  
  .client-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-top: 2.5rem;
  }
  
  .client-item:first-child {
    margin-top: 0;
  }
  
  .client-item-value {
    width: 10.5rem;
    padding-right: 1.875rem;
    font-size: 3.125rem;
    line-height: 1;
    font-weight: 600;
    color: #78acd9;
  }
  
  .client-item-title {
    margin-bottom: 3px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1.125rem;
  }
  
  .client-item-descr {
    font-size: 0.875rem;
    color: #234969;
  }
  
  .slide-photo-clients {
    height: 0;
    padding-bottom: 92.10526316%;
    margin-top: 3.125;
  }
  
  .card8-1 {
    width: 37.19298246%;
    left: 29.8245614%;
    top: 27.04761905%;
    z-index: 100;
    box-shadow: rgba(11, 53, 92, 0.15) 4.375rem 4.375rem 3.75rem;
  }
  
  .card8-1 .image-card-body > .inside {
    width: 55.66037736%;
  }
  
  .card8-2 {
    width: 15.96491228%;
    left: 53.68421053%;
    top: 0%;
    box-shadow: rgba(11, 53, 92, 0.1) 1.375rem 1.375rem 3.75rem;
  }
  
  .card8-2 .image-card-body > .inside {
    width: 54.94505495%;
  }
  
  .card8-3 {
    width: 29.8245614%;
    left: 78.94736842%;
    top: 2.47619048%;
    box-shadow: rgba(11, 53, 92, 0.1) 1.375rem 1.375rem 3.75rem;
  }
  
  .card8-3 .image-card-body > .inside {
    width: 78.82352941%;
  }
  
  .card8-4 {
    width: 19.29824561%;
    left: 8.77192982%;
    top: 6.0952381%;
    box-shadow: rgba(11, 53, 92, 0.1) 2.5rem 2.5rem 3.75rem;
  }
  
  .card8-4 .image-card-body > .inside {
    width: 51.81818182%;
  }
  
  .card8-5 {
    width: 18.77192982%;
    left: 29.8245614%;
    top: 79.61904762%;
    box-shadow: rgba(11, 53, 92, 0.1) 1.875rem 1.875rem 3.75rem;
  }
  
  .card8-5 .image-card-body > .inside {
    width: 72.89719626%;
  }
  
  .card8-6 {
    width: 18.07017544%;
    left: 7.89473684%;
    top: 44.95238095%;
    box-shadow: rgba(11, 53, 92, 0.1) 1.875rem 1.875rem 3.75rem;
  }
  
  .card8-6 .image-card-body > .inside {
    width: 65.04854369%;
  }
  
  .card8-7 {
    width: 20.70175439%;
    left: 70.1754386%;
    top: 67.61904762%;
    box-shadow: rgba(11, 53, 92, 0.1) 1.875rem 1.875rem 3.75rem;
  }
  
  .card8-7 .image-card-body > .inside {
    width: 53.38983051%;
  }
  
  /* 4.9 Slide Contact */
  
  .slide-btn {
    margin-top: 2.5rem;
  }
  
  .contacts {
    margin-top: 2rem;
  }
  
  .contact-item {
    margin-top: 1.5rem;
    font-size: 1.125rem;
    font-weight: 500;
  }
  
  .contact-item-phone {
    font-size: 1.875rem;
    font-weight: 600;
  }
  
  .mail-link,
  .phone-link,
  .phone-link:hover {
    color: inherit;
    text-decoration: none;
  }
  
  .phone-link {
    cursor: default;
    white-space: nowrap;
  }
  
  
  .slide-contacts .slide-container {
    padding-bottom: 7rem;
  }
  
  @media (min-width: 768px) {
    .contact-ornament {
      background-size: contain;
      padding-bottom: 7.03125%;
    }
  
    .slide-contacts .slide-container {
      padding-bottom: 13.75rem;
    }
  
    .contacts {
      margin-top: 4.25rem;
    }
  
    .contact-item {
      margin-top: 2.5rem;
    }
  }
  
  /*-------------------------------------------------------------------------------
    5. Footer
  -------------------------------------------------------------------------------*/
  
  .footer {
    padding-bottom: 4rem;
  }
  
  .body-piling .footer {
    padding-bottom: 0;
  }
  
  .footer .container-fluid {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: flex-end;
  }
  
  .copyright {
    font-size: 0.875rem;
    color: #234969;
  }
  
  .body-piling .copyright {
    position: fixed;
    left: 15px;
    bottom: 15px;
    z-index: 500;
  }
  
  .footer-social {
    padding-bottom: 0.375rem;
    margin-right: -1.25rem;
  }
  
  .body-piling .footer-social {
    position: fixed;
    right: 15px;
    bottom: 20px;
    z-index: 500;
    padding-bottom: 0;
  }
  
  .social {
    margin: 0;
    padding: 0 1.25rem 0 0;
    list-style: none;
    font-size: 1.125rem;
    text-align: left;
  }
  
  .social li {
    margin-bottom: 0.5rem;
  }
  
  .chat {
    position: relative;
    margin-top: 7.75rem;
  }
  
  .chat-title {
    position: absolute;
    white-space: nowrap;
    right: 97.1%;
    bottom: 100%;
    margin-bottom: 0.3125rem;
    transform: rotate(-90deg);
    transform-origin: left center;
    font-size: 0.875rem;
    color: #234969;
  }
  
  .chat-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 98.3%;
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 2.875rem;
    background: #464989;
  }
  
  .chat-btn.has-new:before {
    content: "";
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 1rem;
    background: #5fc515;
    position: absolute;
    top: -3px;
    right: -2px;
  }
  
  @media (min-width: 768px) {
    .body-piling .copyright {
      bottom: 4rem;
    }
  
    .body-piling .footer-social {
      bottom: 4.375rem;
    }
  }
  
  @media (min-width: 1400px) {
    .body-piling .copyright {
      right: 3.375rem;
    }
  
    .body-piling .footer-social {
      left: 1.375rem;
    }
  }
  
  /*-------------------------------------------------------------------------------
    6. Modal
  -------------------------------------------------------------------------------*/
  
  .modal-content {
    border: none;
  }
  
  .modal .close {
    position: absolute;
    right: 0;
    top: 0;
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.75rem;
  }
  
  .modal-body {
    padding: 2.5rem 2rem;
  }
  
  /*-------------------------------------------------------------------------------
    7. Dark Theme
  -------------------------------------------------------------------------------*/
  
  .is-dark::selection,
  .is-dark ::selection {
    background-color: #78acd9;
    color: #ffffff;
  }
  
  .is-dark::-moz-selection,
  .is-dark ::-moz-selection {
    background-color: #78acd9;
    color: #ffffff;
  }
  
  .is-dark,
  .is-dark .pp-scrollable {
    background-color: #3c3c59;
  }
  
  .is-dark .slide-dark {
    background-color: #32324c;
  }
  
  
  .is-dark .hamburger span {
    background: #ffffff;
  }
  
  
  .is-dark a:not(:hover) .icon-behance {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3e%3cpath fill='%23b4b4d5' d='M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z'/%3e%3c/svg%3e");
  }
  
  .is-dark a:not(:hover) .icon-linkedin {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3e%3cpath fill='%23b4b4d5' d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'/%3e%3c/svg%3e");
  }
  
  .is-dark a:not(:hover) .icon-dribbble {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='%23b4b4d5' d='M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z'/%3e%3c/svg%3e");
  }
  
  .is-dark .chat-btn {
    background-color: #2b2b45;
  }
  
  .is-dark .slide-title .text-typed {
    background-color: #78acd9;
    box-shadow: #78acd9 0 0 0 5px;
  }
  
  .is-dark .slide-descr,
  .is-dark .vacancy-item-place,
  .is-dark .vacancy-item-text,
  .is-dark .portfolio-item-descr,
  .is-dark .reward-item-descr,
  .is-dark .testimonial-item-author-status,
  .is-dark .client-item-descr {
    color: #b4b4d5;
  }
  .is-dark,
  .is-dark .header,
  .is-dark .footer,
  .is-dark .brand-name,
  .is-dark .brand-name-s,
  .is-dark .copyright,
  .is-dark .chat-title,
  .is-dark .slide:not(.slide-about) .slide-descr strong,
  .is-dark a:hover,
  .is-dark .menu-main a,
  .is-dark .menu-main a:hover,
  .is-dark .menu-lang-item.active,
  .is-dark .menu-lang-item:hover,
  .is-dark .menu-footer-copyright {
    color: #ffffff;
  }
  
  .is-dark .rounded-text textPath {
    fill: #b4b4d5;
  }
  
  .is-dark .lines > div {
    background-color: #51516d;
  }
  
  .is-dark .progress-nav li:before {
    background-color: #ffffff;
  }
  
  .is-dark .progress-nav li.active,
  .is-dark .progress-nav li.active ~ li {
    background: #51516d;
  }
  
  .is-dark .image-card {
    background-color: #4d4d6c;
  }
  
  .is-dark .image-card-dark {
    background-color: #1f2044;
  }
  
  .is-dark .card3-4 {
    background-color: #32324c;
  }
  
  .is-dark .card6-1,
  .is-dark .card7-1 {
    background-color: #df5647;
  }
  
  
  .is-dark .owl-theme .owl-dots .owl-dot.active span,
  .is-dark .owl-theme .owl-dots .owl-dot:hover span {
    background-color: #e48b79;
  }
  
  .is-dark ::-webkit-scrollbar-thumb {
    cursor: pointer;
    background: rgba(255, 255, 255, 0.1);
  }
  
  /*-------------------------------------------------------------------------------
    8. Intro
  -------------------------------------------------------------------------------*/
  
  .nav-toggle-btn .btn {
    position: relative;
    margin-top: -1rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
  
  
  
  .intro .slide-container {
    padding-bottom: 1rem;
  }
  
  .screen-container {
    margin-top: 5.125rem;
  }
  
  @media (min-width: 768px) {
    .screen-container {
      margin-left: -5rem;
      margin-right: -5rem;
    }
  }
  
  .screen-content {
    margin-left: 0.625rem;
    margin-right: 0.625rem;
  }
  
  
  
  .slide-photo-intro a {
    display: inline-block;
    color: #1f2044;
    text-decoration: none;
  }
  
  .zoom {
    overflow: hidden;
  }
  
  .zoom img {
    transform: scale(1);
    transition: transform 0.5s ease-in-out;
  }
  
  .slide-photo-intro a:hover .zoom img {
    transform: scale(1.05);
  }
  
  .slide-photo-intro .inside {
    padding-left: 12.22222222%;
    padding-right: 12.22222222%;
    padding-top: 3.65079365%;
    padding-bottom: 10.47619048%; /*68*/
  }
  
  .screen-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
  }
  
  @media (min-width: 768px) {
    html {
      font-size: 13px;
    }
  }
  
  @media (min-width: 992px) {
    html {
      font-size: 14px;
    }
  }
  
  @media (min-width: 1280px) {
    html {
      font-size: 15px;
    }
  }
  
  @media (min-width: 1600px) {
    html {
      font-size: 16px;
    }
  }
  
  
    /*------------------------------------Start Bootstrap RTL styles --------------*/
    body {
      direction: rtl;
      text-align: right;
  }
  
  .list-unstyled {
      padding-left: initial !important;
      padding-right: 0;
  }
  
  /* ----------------- List Group ----------------- */
  .list-group {
      padding-right: 0;
  }
  
  /* ---------------- List Inline -------------------- */
  .list-inline {
      padding-right: 0;
  }
  
  .list-inline-item {
      margin-left: .5rem;
      margin-right: auto !important;
  }
  
  /* ------------------ Input Group --------------- */
  
  .input-group > .input-group-append > .btn,
  .input-group > .input-group-append > .input-group-text,
  .input-group > .input-group-prepend:first-child > .btn:not(:first-child),
  .input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child),
  .input-group > .input-group-prepend:not(:first-child) > .btn,
  .input-group > .input-group-prepend:not(:first-child) > .input-group-text {
      border-top-left-radius: .25rem;
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
  }
  
  .input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),
  .input-group > .input-group-append:last-child > .input-group-text:not(:last-child),
  .input-group > .input-group-append:not(:last-child) > .btn,
  .input-group > .input-group-append:not(:last-child) > .input-group-text,
  .input-group > .input-group-prepend > .btn,
  .input-group > .input-group-prepend > .input-group-text {
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .2rem;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
  }
  
  .input-group > .custom-select:not(:first-child),
  .input-group > .form-control:not(:first-child) {
      border-top-left-radius: .25rem;
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
  }
  
  .input-group > .custom-select:not(:last-child),
  .input-group > .form-control:not(:last-child) {
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
  }
  
  .input-group-prepend {
      margin-right: 0;
      margin-left: -1px;
  }
  
  .input-group-append {
      margin-left: 0;
      margin-right: -1px;
  }
  
  .input-group-append .btn + .btn,
  .input-group-append .btn + .input-group-text,
  .input-group-append .input-group-text + .btn,
  .input-group-append .input-group-text + .input-group-text,
  .input-group-prepend .btn + .btn,
  .input-group-prepend .btn + .input-group-text,
  .input-group-prepend .input-group-text + .btn,
  .input-group-prepend .input-group-text + .input-group-text {
      margin-left: 0;
      margin-right: -1px;
  }
  
  .input-group > .custom-file + .custom-file,
  .input-group > .custom-file + .custom-select,
  .input-group > .custom-file + .form-control,
  .input-group > .custom-select + .custom-file,
  .input-group > .custom-select + .custom-select,
  .input-group > .custom-select + .form-control,
  .input-group > .form-control + .custom-file,
  .input-group > .form-control + .custom-select,
  .input-group > .form-control + .form-control {
      margin-left: 0;
      margin-right: -1px;
  }
  
  .input-group > .custom-file:not(:first-child) .custom-file-label,
  .input-group > .custom-file:not(:first-child) .custom-file-label::before {
      border-top-left-radius: .25rem;
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
  }
  
  .input-group > .custom-file:not(:last-child) .custom-file-label,
  .input-group > .custom-file:not(:last-child) .custom-file-label::before {
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
  }
  
  .custom-file-label::after {
      left: 0;
      right: auto;
      border-right: 1px solid #ced4da;
      border-radius: .25rem 0 0 .25rem;
  }
  
  .custom-control, .form-check {
      padding-left: 0;
      padding-right: 1.25rem;
  }
  
  .custom-control-label::before,
  .custom-control-label::after {
      left: auto;
      right: 0;
  }
  
  .form-check-input {
      margin-left: 0;
      margin-right: -1.25rem;
  }
  
  .form-check-inline .form-check-input {
      margin-left: .3125rem;
      margin-right: 0;
  }
  
  /* ------------------ Btn Group ------------------ */
  
  .btn-group > .btn-group:not(:last-child) > .btn,
  .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
  }
  
  .btn-group > .btn-group:not(:first-child) > .btn,
  .btn-group > .btn:not(:first-child) {
      border-top-left-radius: .25rem;
      border-bottom-left-radius: .25rem;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
  }
  
  .btn-group .btn + .btn,
  .btn-group .btn + .btn-group,
  .btn-group .btn-group + .btn,
  .btn-group .btn-group + .btn-group,
  .btn-group-vertical .btn + .btn,
  .btn-group-vertical .btn + .btn-group,
  .btn-group-vertical .btn-group + .btn,
  .btn-group-vertical .btn-group + .btn-group {
      margin-right: -1px;
      margin-left: 0;
  }
  
  /* ----------------- Drop Down ---------------- */
  .dropdown-toggle::after {
      margin-right: .255em;
      margin-left: 0
  }
  
  .dropright {
      direction: ltr;
  }
  
  .dropright > .btn:not(:last-child):not(.dropdown-toggle) {
      border-radius: .25rem 0 0 .25rem !important;
  }
  
  .dropright > .btn:not(:first-child) {
      border-radius: 0 .25rem .25rem 0 !important;
  }
  
  /* ------------------- Pagination ------------------------ */
  .page-item:first-child .page-link {
      margin-right: 0;
      border-top-right-radius: .25rem;
      border-bottom-right-radius: .25rem;
      border-top-left-radius: 0 !important;
      border-bottom-left-radius: 0 !important;
  }
  
  .page-item:last-child .page-link {
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-top-left-radius: .25rem;
      border-bottom-left-radius: .25rem;
  }
  
  /* ------------------- Dismissing ------------------------ */
  .alert-dismissible {
      padding-right: 1.25rem !important;
      padding-left: 4rem;
  }
  
  .alert-dismissible .close {
      left: 0;
      right: auto !important;
  }
  
  /* ------------------- Offsets ------------------------ */
  .offset-1 {
      margin-right: 8.333333%;
      margin-left: unset;
  }
  
  .offset-2 {
      margin-right: 16.666667%;
      margin-left: unset;
  }
  
  .offset-3 {
      margin-right: 25%;
      margin-left: unset;
  }
  
  .offset-4 {
      margin-right: 33.333333%;
      margin-left: unset;
  }
  
  .offset-5 {
      margin-right: 41.666667%;
      margin-left: unset;
  }
  
  .offset-6 {
      margin-right: 50%;
      margin-left: unset;
  }
  
  .offset-7 {
      margin-right: 58.333333%;
      margin-left: unset;
  }
  
  .offset-8 {
      margin-right: 66.666667%;
      margin-left: unset;
  }
  
  .offset-9 {
      margin-right: 75%;
      margin-left: unset;
  }
  
  .offset-10 {
      margin-right: 83.333333%;
      margin-left: unset;
  }
  
  .offset-11 {
      margin-right: 91.666667%;
      margin-left: unset;
  }
  
  @media (min-width: 576px) {
      .offset-sm-0 {
          margin-right: 0;
          margin-left: unset;
      }
  
      .offset-sm-1 {
          margin-right: 8.333333%;
          margin-left: unset;
      }
  
      .offset-sm-2 {
          margin-right: 16.666667%;
          margin-left: unset;
      }
  
      .offset-sm-3 {
          margin-right: 25%;
          margin-left: unset;
      }
  
      .offset-sm-4 {
          margin-right: 33.333333%;
          margin-left: unset;
      }
  
      .offset-sm-5 {
          margin-right: 41.666667%;
          margin-left: unset;
      }
  
      .offset-sm-6 {
          margin-right: 50%;
          margin-left: unset;
      }
  
      .offset-sm-7 {
          margin-right: 58.333333%;
          margin-left: unset;
      }
  
      .offset-sm-8 {
          margin-right: 66.666667%;
          margin-left: unset;
      }
  
      .offset-sm-9 {
          margin-right: 75%;
          margin-left: unset;
      }
  
      .offset-sm-10 {
          margin-right: 83.333333%;
          margin-left: unset;
      }
  
      .offset-sm-11 {
          margin-right: 91.666667%;
          margin-left: unset;
      }
  }
  
  @media (min-width: 768px) {
      .offset-md-0 {
          margin-right: 0;
          margin-left: unset;
      }
  
      .offset-md-1 {
          margin-right: 8.333333%;
          margin-left: unset;
      }
  
      .offset-md-2 {
          margin-right: 16.666667%;
          margin-left: unset;
      }
  
      .offset-md-3 {
          margin-right: 25%;
          margin-left: unset;
      }
  
      .offset-md-4 {
          margin-right: 33.333333%;
          margin-left: unset;
      }
  
      .offset-md-5 {
          margin-right: 41.666667%;
          margin-left: unset;
      }
  
      .offset-md-6 {
          margin-right: 50%;
          margin-left: unset;
      }
  
      .offset-md-7 {
          margin-right: 58.333333%;
          margin-left: unset;
      }
  
      .offset-md-8 {
          margin-right: 66.666667%;
          margin-left: unset;
      }
  
      .offset-md-9 {
          margin-right: 75%;
          margin-left: unset;
      }
  
      .offset-md-10 {
          margin-right: 83.333333%;
          margin-left: unset;
      }
  
      .offset-md-11 {
          margin-right: 91.666667%;
          margin-left: unset;
      }
  }
  
  @media (min-width: 992px) {
      .offset-lg-0 {
          margin-right: 0;
          margin-left: unset;
      }
  
      .offset-lg-1 {
          margin-right: 8.333333%;
          margin-left: unset;
      }
  
      .offset-lg-2 {
          margin-right: 16.666667%;
          margin-left: unset;
      }
  
      .offset-lg-3 {
          margin-right: 25%;
          margin-left: unset;
      }
  
      .offset-lg-4 {
          margin-right: 33.333333%;
          margin-left: unset;
      }
  
      .offset-lg-5 {
          margin-right: 41.666667%;
          margin-left: unset;
      }
  
      .offset-lg-6 {
          margin-right: 50%;
          margin-left: unset;
      }
  
      .offset-lg-7 {
          margin-right: 58.333333%;
          margin-left: unset;
      }
  
      .offset-lg-8 {
          margin-right: 66.666667%;
          margin-left: unset;
      }
  
      .offset-lg-9 {
          margin-right: 75%;
          margin-left: unset;
      }
  
      .offset-lg-10 {
          margin-right: 83.333333%;
          margin-left: unset;
      }
  
      .offset-lg-11 {
          margin-right: 91.666667%;
          margin-left: unset;
      }
  }
  
  @media (min-width: 1200px) {
      .offset-xl-0 {
          margin-right: 0;
          margin-left: unset;
      }
  
      .offset-xl-1 {
          margin-right: 8.333333%;
          margin-left: unset;
      }
  
      .offset-xl-2 {
          margin-right: 16.666667%;
          margin-left: unset;
      }
  
      .offset-xl-3 {
          margin-right: 25%;
          margin-left: unset;
      }
  
      .offset-xl-4 {
          margin-right: 33.333333%;
          margin-left: unset;
      }
  
      .offset-xl-5 {
          margin-right: 41.666667%;
          margin-left: unset;
      }
  
      .offset-xl-6 {
          margin-right: 50%;
          margin-left: unset;
      }
  
      .offset-xl-7 {
          margin-right: 58.333333%;
          margin-left: unset;
      }
  
      .offset-xl-8 {
          margin-right: 66.666667%;
          margin-left: unset;
      }
  
      .offset-xl-9 {
          margin-right: 75%;
          margin-left: unset;
      }
  
      .offset-xl-10 {
          margin-right: 83.333333%;
          margin-left: unset;
      }
  
      .offset-xl-11 {
          margin-right: 91.666667%;
          margin-left: unset;
      }
  }
  
  .table-striped tr td:first-of-type {
      border-radius: 0 5px 5px 0;
  }
  
  .table-striped tr td:last-of-type {
      border-radius: 5px 0 0 5px;
  }
  
      
      }
  
  
  
      /*------------------------------------End Bootstrap RTL styles --------------*/
  
  
      /*------------------------------------start RTL styles -------------------*/
      
  
      `;
  
    function addStyleRTL() {
      document.head.appendChild(style);
    }
    function deleteStyleRTL() {
      document.head.removeChild(style);
    }
  
    $("#arabic").click(function () {
      addStyleRTL();
  
      $("#arabic").addClass("active");
      $("#english").removeClass("active");
    });
  
    $("#english").click(function () {
      deleteStyleRTL();
      $("#english").addClass("active");
      $("#arabic").removeClass("active");
    });
  
  
  })($);
  