<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="./assets/image/favicon/icon_zing_mp3.png" type="image/x-icon" />
        <title>Nhạc cá nhân | Xem bài hát, MV, MV đang hot nhất hiện tại</title>
        <!-- Link Icon -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
        <!-- Link Bootstrap -->
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
            crossorigin="anonymous"
            />
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
            crossorigin="anonymous"
        ></script>
        <!-- Link Font -->
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <!-- Link CSS -->
        <link rel="stylesheet" href="./assets/css/base.css?version=2" />
        <link rel="stylesheet" href="./assets/css/main.css?version=2" />
        <link rel="stylesheet" href="./assets/css/responsive.css" />
    </head>
    <body>
        <div class="app">
            <!-- Header -->
            <header class="header">
                <div class="header__width-search">
                    <!--                    <button class="header__button">
                                            <i class="bi bi-arrow-left"></i>
                                        </button>
                                        <button class="header__button button--disabled">
                                            <i class="bi bi-arrow-right"></i>
                                        </button>-->
                    <!--                    <div class="header__search">
                                            <div class="header__search-btn"><i class="bi bi-search"></i></div>
                                            <input type="text" placeholder="Nhập tên bài hát, nghệ sĩ hoặc MV..." class="header__search-input" />
                                            <div class="header__search-history">
                                                <ul class="header__search-list">
                                                    <li class="header__search-item">
                                                        <i class="bi bi-search"></i>
                                                        <div class="header__item-link">Sơn Tùng MTP</div>
                                                    </li>
                                                    <li class="header__search-item">
                                                        <i class="bi bi-search"></i>
                                                        <div class="header__item-link">Nhạc lofi</div>
                                                    </li>
                                                    <li class="header__search-item">
                                                        <i class="bi bi-search"></i>
                                                        <div class="header__item-link">Hongkong1</div>
                                                    </li>
                                                    <li class="header__search-item">
                                                        <i class="bi bi-search"></i>
                                                        <div class="header__item-link">Soobin Hoàng Sơn</div>
                                                    </li>
                                                    <li class="header__search-item">
                                                        <i class="bi bi-search"></i>
                                                        <div class="header__item-link">Tháng 4</div>
                                                    </li>
                                                    <li class="header__search-item">
                                                        <i class="bi bi-search"></i>
                                                        <div class="header__item-link">Bông hoa đẹp nhất</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>-->
                    <div class="header__nav">
                        <ul class="header__nav-list">
                            <li class="header__nav-item">
                                <div class="header__nav-btn nav-btn--theme">
                                    <svg width="20" height="20" class="header__nav-icon" viewBox="0 0 20 20">
                                    <defs>
                                    <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
                                    <stop offset="0%" stop-color="#F81212"></stop>
                                    <stop offset="100%" stop-color="red"></stop>
                                    </linearGradient>
                                    <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
                                    <stop offset="0%" stop-color="#00F"></stop>
                                    <stop offset="100%" stop-color="#0031FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
                                    <stop offset="0%" stop-color="#FFA600"></stop>
                                    <stop offset="100%" stop-color="orange"></stop>
                                    </linearGradient>
                                    <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
                                    <stop offset="0%" stop-color="#13EFEC"></stop>
                                    <stop offset="100%" stop-color="#00E8DF"></stop>
                                    </linearGradient>
                                    <filter
                                        id="4a7imk8mze"
                                        width="230%"
                                        height="230%"
                                        x="-65%"
                                        y="-65%"
                                        filterUnits="objectBoundingBox"
                                        >
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                    </filter>
                                    <filter
                                        id="301mo6jeah"
                                        width="312.7%"
                                        height="312.7%"
                                        x="-106.4%"
                                        y="-106.4%"
                                        filterUnits="objectBoundingBox"
                                        >
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                    </filter>
                                    <filter
                                        id="b2zvzgq7fj"
                                        width="295%"
                                        height="295%"
                                        x="-97.5%"
                                        y="-97.5%"
                                        filterUnits="objectBoundingBox"
                                        >
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                    </filter>
                                    <filter
                                        id="a1wq161tvl"
                                        width="256%"
                                        height="256%"
                                        x="-78%"
                                        y="-78%"
                                        filterUnits="objectBoundingBox"
                                        >
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
                                    </filter>
                                    <path
                                        id="qtpqrj1oda"
                                        d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                                        ></path>
                                    <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
                                    <path
                                        id="2eiwxjmc7m"
                                        d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
                                        ></path>
                                    </defs>
                                    <g fill="none" fill-rule="evenodd" transform="translate(2 3)">
                                    <mask id="tinejqaasb" fill="#fff">
                                        <use xlink:href="#qtpqrj1oda"></use>
                                    </mask>
                                    <use fill="#FFF" fill-opacity="0" xlink:href="#qtpqrj1oda"></use>
                                    <g mask="url(#tinejqaasb)">
                                    <g transform="translate(-2 -3)">
                                    <mask id="uf3ckvfvpf" fill="#fff">
                                        <use xlink:href="#jggzvnjgfc"></use>
                                    </mask>
                                    <use fill="#D8D8D8" xlink:href="#jggzvnjgfc"></use>
                                    <circle
                                        cx="8.9"
                                        cy="6.8"
                                        r="9"
                                        fill="url(#j32lhg93hd)"
                                        filter="url(#4a7imk8mze)"
                                        mask="url(#uf3ckvfvpf)"
                                        ></circle>
                                    <circle
                                        cx="9.3"
                                        cy="13.7"
                                        r="5.5"
                                        fill="url(#hjoavsus6g)"
                                        filter="url(#301mo6jeah)"
                                        mask="url(#uf3ckvfvpf)"
                                        ></circle>
                                    <circle
                                        cx="15.9"
                                        cy="6.9"
                                        r="6"
                                        fill="url(#la1y5u3dvi)"
                                        filter="url(#b2zvzgq7fj)"
                                        mask="url(#uf3ckvfvpf)"
                                        ></circle>
                                    <circle
                                        cx="16.4"
                                        cy="17.7"
                                        r="7.5"
                                        fill="url(#2dsmrlvdik)"
                                        filter="url(#a1wq161tvl)"
                                        mask="url(#uf3ckvfvpf)"
                                        ></circle>
                                    </g>
                                    </g>
                                    <use fill="#FFF" fill-opacity="0.05" xlink:href="#2eiwxjmc7m"></use>
                                    </g>
                                    </svg>
                                </div>
                            </li>
                            <li class="header__nav-item hide-on-mobile">
                                <div class="header__nav-btn header__nav-icon upload-button">
                                    <i class="bi bi-upload"></i>
                                </div>
                            </li>
                            <li class="header__nav-item hide-on-mobile">
                                <div class="header__nav-btn btn--nav-setting">
                                    <i class="bi bi-gear"></i>
                                    <div class="setting__menu">
                                        <div class="setting__nav">
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-slash-circle"></i>
                                                    <span>Danh sách chặn</span>
                                                </div>
                                            </div>
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-badge-hd"></i>
                                                    <span>Chất lượng nhạc</span>
                                                </div>
                                                <i class="bi bi-chevron-right"></i>
                                            </div>
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-play-circle"></i>
                                                    <span>Giao diện</span>
                                                </div>
                                                <i class="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                        <div class="setting__subnav">
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-exclamation-circle"></i>
                                                    <span>Giới thiệu</span>
                                                </div>
                                            </div>
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-telephone"></i>
                                                    <span>Liên hệ</span>
                                                </div>
                                            </div>
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-badge-ad"></i>
                                                    <span>Quảng cáo</span>
                                                </div>
                                            </div>
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-file-earmark-text"></i>
                                                    <span>Thỏa thuận sử dụng</span>
                                                </div>
                                            </div>
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-shield-check"></i>
                                                    <span>Chính sách bảo mật</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="header__nav-item">
                                <div class="header__nav-btn btn--nav-log">
                                    <img src="./assets/image/avatar/avatar.jpg" alt="" />
                                    <div class="log__menu">
                                        <div class="setting__nav">
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-gem"></i>
                                                    <span>Nâng cấp vip</span>
                                                </div>
                                            </div>
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-credit-card"></i>
                                                    <span>Mua code vip</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="setting__subnav">
                                            <div class="setting__item">
                                                <div class="setting__item-content">
                                                    <i class="bi bi-box-arrow-right"></i>
                                                    <span>Đăng suất</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </header>

            <!-- Playlist sidebar -->
            <div class="app__playlsit-sidebar">
                <div class="playlist__sidebar-header">
                    <div class="header__navbar-container">
                        <ul class="header__navbar-menu">
                            <li class="header__navbar-item active">
                                <span>Danh sách phát</span>
                            </li>
                            <li class="header__navbar-item">
                                <span>Nghe gần đây</span>
                            </li>
                        </ul>
                    </div>
                    <div class="header__btn-container">
                        <div class="option-btn">
                            <i class="bi bi-alarm btn--icon"></i>
                        </div>
                        <div class="option-btn">
                            <i class="bi bi-three-dots btn--icon"></i>
                        </div>
                    </div>
                </div>
                <div class="playlist__sidebar-scroll">
                    <div class="container__list">
                        <div class="playlist__list"></div>
                    </div>
                </div>
            </div>

            <!-- Tap Personal -->
            <div class="app__container tab--personal active">
                <div class="personal__header">
                    <div class="personal__header-container">
                        <div class="personal__header-user">
                            <div class="personal__user-avatar">
                                <img src="./assets/image/avatar/avatar.jpg" alt="" />
                            </div>
                            <span class="personal__user-name">Nguyễn Ngọc Đạt</span>
                        </div>
                    </div>
                </div>
                <div class="personal__content">
                    <div class="content__navbar">
                        <div class="content__navbar-container">
                            <ul class="content__navbar-menu">
                                <li class="content__navbar-item active">
                                    <span>TỔNG QUAN</span>
                                </li>
                                <li class="content__navbar-item"><span>BÀI HÁT</span></li>
                                <li class="content__navbar-item"><span>PLAYLIST</span></li>
                            </ul>
                        </div>
                    </div>

                    <div class="content__container">
                        <!-- Tap home -->
                        <div class="container__tab tab-home active">
                            <!-- Play music -->
                            <div class="container__control row">
                                <div class="col col-lg-12 col-md-12 col-12">
                                    <div class="container__header">
                                        <a href="#" class="container__header-title">
                                            <h3>Bài Hát</h3>
                                            <i class="bi bi-chevron-right"></i>
                                        </a>
                                        <h3 class="container__header-subtitle">Bài Hát</h3>
                                        <div class="container__header-actions">
                                            <div class="button container__header-btn upload-button hide-on-mobile">
                                                <i class="bi bi-upload"></i>
                                                <span>Tải lên bài hát</span>
                                            </div>
                                            <div class="button container__header-btn button-primary btn--play-all">
                                                <i class="bi bi-play-fill"></i>
                                                <span>Phát tất cả</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-lg-12 col-md-12 col-12">
                                    <div class="container-music">
                                        <div class="container__slide hide-on-mobile">
                                            <div class="container__slide-show">
                                                <div class="container__slide-item first">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide1.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item second">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide2.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item third">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide3.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item fourth">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide4.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item fourth">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide5.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item fourth">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide6.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item fourth">
                                                    <div class="container__slide-img">
                                                        <img src="	./assets/image/slides/slide7.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item fourth">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide8.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item fourth">
                                                    <div class="container__slide-img">
                                                        <img src="	./assets/image/slides/slide9.jpg" />
                                                    </div>
                                                </div>
                                                <div class="container__slide-item fourth">
                                                    <div class="container__slide-img">
                                                        <img src="./assets/image/slides/slide10.jpg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container__list">
                                            <div class="playlist__list"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Playlist -->
                            <div class="container__section row">
                                <div class="col col-lg-12 col-md-12 col-12">
                                    <div class="container__header">
                                        <a href="#" class="container__header-title">
                                            <h3>Playlist</h3>
                                            <i class="bi bi-chevron-right"></i>
                                        </a>
                                        <h3 class="container__header-subtitle">Playlist</h3>
                                        <div class="container__header-actions hide-on-tablet-mobile">
                                            <div class="container__move-btn move-btn--playlist button--disabled prev">
                                                <i class="bi bi-chevron-left"></i>
                                            </div>
                                            <div class="container__move-btn move-btn--playlist next">
                                                <i class="bi bi-chevron-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-lg-12 col-md-12 col-12">
                                    <div class="row no-wrap playlist--container"></div>
                                </div>
                            </div>
                        </div>

                        <!-- Tap song -->
                        <div class="container__tab tab-song">
                            <div class="container__control row">
                                <div class="col col-lg-12 col-md-12 col-12">
                                    <div class="container__header">
                                        <a href="#" class="container__header-title">
                                            <h3>Bài Hát</h3>
                                        </a>
                                        <h3 class="container__header-subtitle">Bài Hát</h3>
                                        <div class="container__header-actions">
                                            <div class="button container__header-btn hide-on-mobile">
                                                <input type="file" name="upload song" id="home__upload-input" class="container__header-input" />
                                                <label for="home__upload-input">
                                                    <i class="bi bi-upload"></i>
                                                    Tải lên
                                                </label>
                                            </div>
                                            <div class="button container__header-btn button-primary btn--play-all">
                                                <i class="bi bi-play-fill"></i>
                                                <span>Phát tất cả</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col col-lg-12 col-md-12 col-12">
                                    <div class="container__list song--container-list">
                                        <div class="playlist__header">
                                            <span class="playlist__header-title">BÀI HÁT</span>
                                            <span class="playlist__header-time"></span>
                                        </div>
                                        <div class="playlist__lis-tap-song"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Tap playlist-->
                        <div class="container__tab tab-playlist">
                            <div class="container__section row">
                                <div class="col col-lg-12 col-md-12 col-12">
                                    <div class="container__header">
                                        <a href="#" class="container__header-title">
                                            <h3>Playlist</h3>
                                        </a>
                                        <h3 class="container__header-subtitle">Playlist</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row playlist--container"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="song-form-container" class="form-container" style="display: none">
                    <form class="song-form" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="song-name">Tên Bài Hát:</label>
                            <input type="text" class="song-name" name="song-name" placeholder="Nhập tên bài hát" required />
                        </div>

                        <div class="form-group">
                            <label for="singers">Ca Sĩ:</label>
                            <input
                                type="text"
                                class="singers"
                                name="singers"
                                placeholder="Nhập tên ca sĩ, cách nhau bằng dấu phẩy"
                                required
                                />
                        </div>

                        <div class="form-group">
                            <label for="song-image">Hình Ảnh Bài Hát:</label>
                            <img class="current-song-image" src="" alt="Ảnh bài hát" style="max-width: 100px; display: none;" />
                            <input type="file" class="song-image" name="song-image" accept="image/*" required />
                        </div>

                        <div class="form-group">
                            <label for="song-file">Tải Lên Bài Hát (MP3):</label>
                            <audio class="current-song-audio" controls style="display: none;"></audio>
                            <input type="file" class="song-file" name="song-file" accept="audio/mp3" required />
                        </div>

                        <button type="submit" class="btn-submit">Lưu Bài Hát</button>
                        <i class="fa-solid fa-xmark btn-close close-form"></i>
                    </form>
                </div>

                <div id="song-form-edit-container" class="form-container" style="display: none">
                    <form class="song-form" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="song-name">Tên Bài Hát:</label>
                            <input type="text" class="song-name" name="song-name" placeholder="Nhập tên bài hát" required />
                        </div>

                        <div class="form-group">
                            <label for="singers">Ca Sĩ:</label>
                            <input
                                type="text"
                                class="singers"
                                name="singers"
                                placeholder="Nhập tên ca sĩ, cách nhau bằng dấu phẩy"
                                required
                                />
                        </div>

                        <div class="form-group">
                            <label for="song-image">Hình Ảnh Bài Hát:</label>
                            <img class="current-song-image" src="" alt="Ảnh bài hát" style="max-width: 100px; display: none;" />
                            <input type="file" class="song-image" name="song-image" accept="image/*" />
                        </div>

                        <div class="form-group">
                            <label for="song-file">Tải Lên Bài Hát (MP3):</label>
                            <audio class="current-song-audio" controls style="display: none;"></audio>
                            <input type="file" class="song-file" name="song-file" accept="audio/mp3" />
                        </div>

                        <button type="submit" class="btn-submit">Cập nhật Bài Hát</button>
                        <i class="fa-solid fa-xmark btn-close close-form"></i>
                    </form>
                </div>
            </div>

            <!-- Tap explore -->
            <div class="app__container tab--explore">
                <div class="app__container-content">
                    <div class="explore__container">
                        <!-- Slide -->
                        <div class="row container__section">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row explore__slide--container"></div>
                            </div>
                        </div>

                        <!-- Playlists -->
                        <div class="row container__section normal-playlist--section"></div>
                        <div class="row container__section normal-playlist--section"></div>
                        <div class="row container__section normal-playlist--section mt-30"></div>
                        <div class="row container__section special-playlist--section"></div>

                        <!-- Radio -->
                        <div class="row container__section">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="container__header">
                                    <a href="#" class="container__header-title">
                                        <h3>Radio Nổi Bật</h3>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                    <h3 class="container__header-subtitle">Radio Nổi Bật</h3>
                                    <div class="container__header-actions hide-on-tablet-mobile">
                                        <div class="container__move-btn move-btn--radio button--disabled">
                                            <i class="bi bi-chevron-left container__move-btn-icon"></i>
                                        </div>
                                        <div class="container__move-btn move-btn--radio">
                                            <i class="bi bi-chevron-right container__move-btn-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row no-wrap radio--container"></div>
                            </div>
                        </div>

                        <!-- Playlists -->
                        <div class="row container__section normal-playlist--section mt-30"></div>
                        <div class="row container__section normal-playlist--section"></div>

                        <!-- Label -->
                        <div class="row container__section mt-30">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row no-wrap label--container"></div>
                            </div>
                        </div>

                        <!-- Singer slide -->
                        <div class="row container__section">
                            <div class="col col-lg-12 col-md-12 col-12 singer__slide-row">
                                <div class="row no-wrap singer-slide--container"></div>
                            </div>
                        </div>

                        <!-- Playlist -->
                        <div class="row container__section normal-playlist--section mt-30"></div>

                        <!-- Event -->
                        <div class="row container__section mt-30">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="container__header">
                                    <a href="#" class="container__header-title">
                                        <h3>Sự Kiện</h3>
                                    </a>
                                    <h3 class="container__header-subtitle">Sự Kiện</h3>
                                </div>
                            </div>
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row no-wrap event--container"></div>
                            </div>
                        </div>

                        <!-- Playlist -->
                        <div class="row container__section special-playlist--section"></div>

                        <!-- New playlist -->
                        <div class="row container__section">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="container__header">
                                    <a href="#" class="container__header-title">
                                        <h3>Mới Phát Hành</h3>
                                    </a>
                                    <h3 class="container__header-subtitle">Mới Phát Hành</h3>
                                    <div class="container__header-actions new-playlist--move hide-on-tablet-mobile">
                                        <div class="container__move-btn move-btn--new-playlist btn--prev">
                                            <i class="bi bi-chevron-left container__move-btn-icon"></i>
                                        </div>
                                        <div class="container__move-btn move-btn--new-playlist btn--next">
                                            <i class="bi bi-chevron-right container__move-btn-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row no-wrap new-playlist--container"></div>
                            </div>
                        </div>
                        <div class="row container__section normal-playlist--section mt-30"></div>

                        <!-- Favorite artist -->
                        <div class="row container__section mt-30">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="container__header">
                                    <a href="#" class="container__header-title">
                                        <h3>Nghệ Sĩ Yêu Thích</h3>
                                    </a>
                                    <h3 class="container__header-subtitle">Nghệ Sĩ Yêu Thích</h3>
                                    <div class="container__header-actions fav-artist--move hide-on-tablet-mobile">
                                        <div class="container__move-btn move-btn--fav-artist btn--prev">
                                            <i class="bi bi-chevron-left container__move-btn-icon"></i>
                                        </div>
                                        <div class="container__move-btn move-btn--fav-artist btn--next">
                                            <i class="bi bi-chevron-right container__move-btn-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row no-wrap fav-artist--container"></div>
                            </div>
                        </div>
                    </div>

                    <!-- Brand -->
                    <footer class="container__footer">
                        <div class="col col-lg-12 col-md-12 col-12 container__footer-header">
                            <span>Đối Tác Âm Nhạc</span>
                        </div>
                        <div class="col col-lg-12 col-md-12 col-12 container__footer-brand">
                            <div class="row brand--container"></div>
                        </div>
                    </footer>
                </div>
            </div>

            <!-- Tap charts -->
            <div class="app__container tab--charts">
                <div class="app__container-content">
                    <div class="charts__container">
                        <div class="chart__container-header">
                            <h3 class="chart__header-name">#zingchart</h3>
                            <div class="chart__header-btn">
                                <i class="bi bi-play-fill"></i>
                            </div>
                        </div>
                        <div class="row chart--container">]</div>
                        <div class="charts__expand">
                            <button class="button charts__expand-btn">Xem top 100</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tab radio -->
            <div class="app__container tab--radio">
                <div class="app__container-content">
                    <div class="radio__container">
                        <!-- Radio list -->
                        <div class="row container__section">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="container__header">
                                    <a href="#" class="container__header-title">
                                        <h3>Radio Nổi Bật</h3>
                                        <i class="bi bi-chevron-right"></i>
                                    </a>
                                    <h3 class="container__header-subtitle">Radio Nổi Bật</h3>
                                    <div class="container__header-actions hide-on-tablet-mobile">
                                        <div class="container__move-btn move-btn--radio button--disabled">
                                            <i class="bi bi-chevron-left container__move-btn-icon"></i>
                                        </div>
                                        <div class="container__move-btn move-btn--radio">
                                            <i class="bi bi-chevron-right container__move-btn-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row no-wrap radio--container"></div>
                            </div>
                        </div>

                        <!-- Playlist -->
                        <div class="row container__section special-playlist--section mt-30"></div>
                        <div class="row container__section special-playlist--section mt-30"></div>
                        <div class="row container__section special-playlist--section mt-30"></div>

                        <div class="row container__section normal-playlist--section mt-30"></div>
                    </div>
                </div>
            </div>

            <!-- Tap following -->
            <div class="app__container tab--following">
                <div class="app__container-content">
                    <div class="following__container">
                        <!-- Following navbar -->
                        <div class="following__navbar">
                            <div class="following__navbar-container">
                                <ul class="following__navbar-menu">
                                    <li class="following__navbar-item active hide-on-tablet">
                                        <span>Việt Nam</span>
                                    </li>
                                    <li class="following__navbar-item">
                                        <span>US-UK</span>
                                    </li>
                                    <li class="following__navbar-item">
                                        <span>K-Pop</span>
                                    </li>
                                    <li class="following__navbar-item">
                                        <span>Hoa Ngữ</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Singer slide -->
                        <div class="row container__section mb-50">
                            <div class="col col-lg-12 col-md-12 col-12 singer__slide-row">
                                <div class="row no-wrap singer-slide--container">
                                    <div class="singer__slide-move hide-on-mobile">
                                        <div class="slide__move-btn btn--prev">
                                            <i class="bi bi-chevron-left"></i>
                                        </div>
                                        <div class="slide__move-btn btn--next">
                                            <i class="bi bi-chevron-right"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Story post -->
                        <div class="row container__section">
                            <div class="col col-lg-12 col-md-12 col-12">
                                <div class="row">
                                    <div class="col col-lg-6 col-md-6 col-12 story--container"></div>
                                    <div class="col col-lg-6 col-md-6 col-12 story--container"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Player -->
            <div class="player">
                <div class="player__container">
                    <div class="player__container-song">
                        <div class="player__song-info media">
                            <div class="media__left">
                                <div class="player__song-thump"></div>
                            </div>
                            <div class="media__content">
                                <div class="meadia__info">
                                    <div class="info__title">
                                        <h3 class="title__item player__song-title is-oneline"></h3>
                                    </div>
                                    <div class="info__author player__song-author"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="player__control">
                        <div class="player__control-btn">
                            <div class="control-btn btn-random">
                                <i class="bi bi-shuffle"></i>
                            </div>
                            <div class="control-btn btn-prev">
                                <i class="bi bi-skip-start-fill"></i>
                            </div>
                            <div class="control-btn btn-toggle-play btn--play-song">
                                <i class="bi bi-play-circle icon-play"></i>
                                <i class="bi bi-pause-circle icon-pause"></i>
                            </div>
                            <div class="control-btn btn-next">
                                <i class="bi bi-skip-end-fill"></i>
                            </div>
                            <div class="control-btn btn-repeat">
                                <i class="bi bi-arrow-repeat"></i>
                            </div>
                        </div>
                        <div class="progress-block hide-on-mobile">
                            <span class="tracktime">00:00</span>
                            <input id="progress--main" class="progress" type="range" value="0" step="1" min="0" max="100" />
                            <div class="progress__track song--track">
                                <div class="progress__track-update"></div>
                            </div>
                            <span class="durationtime">00:00</span>
                        </div>
                    </div>
                    <div class="player__options hide-on-mobile">
                        <div class="player__options-container">
                            <div class="player__options-btn option-btn volume">
                                <i class="bi bi-volume-up btn--icon"></i>
                            </div>
                            <div class="player__volume-progress">
                                <input type="range" class="volume__range" value="100" step="1" min="0" max="100" />
                                <div class="progress__track volume--track">
                                    <div class="progress__track-update"></div>
                                </div>
                            </div>
                            <div class="player__list-icon">
                                <i class="bi bi-music-note-list"></i>
                            </div>
                        </div>
                    </div>
                    <audio src="" id="audio"></audio>
                </div>

                <div class="player__popup" style="background-image: none">
                    <div class="player__popup-header">
                        <div class="player__popup-logo"></div>
                        <div class="player__popup-container">
                            <ul class="player__popup-menu">
                                <li class="player__popup-item active">
                                    <a href="#">Danh Sách Phát</a>
                                </li>
                                <li class="player__popup-item">
                                    <a href="#">Karaoke</a>
                                </li>
                                <li class="player__popup-item hide-on-mobile">
                                    <a href="#">Lời Bài Hát</a>
                                </li>
                            </ul>
                        </div>
                        <div class="player__popup-action">
                            <ul class="popup__action-menu">
                                <li class="popup__action-btn hide-on-tablet-mobile">
                                    <i class="bi bi-arrows-angle-expand popup__action-btn-icon"></i>
                                </li>
                                <li class="popup__action-btn hide-on-tablet-mobile">
                                    <i class="bi bi-gear popup__action-btn-icon"></i>
                                </li>
                                <li class="popup__action-btn btn--pop-down">
                                    <i class="bi bi-chevron-down popup__action-btn-icon"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="player__popup-cd-display player__song-thump">
                        <img src="" class="player__popup-cd-img" alt="" />
                    </div>
                    <div class="player__popup-cd-info">
                        <h4>Now playing</h4>
                        <h2 class="is-twoline player__song-title"></h2>
                        <h3 class="player__song-author"></h3>
                    </div>
                    <div class="player__popup-footer" style="background-image: none">
                        <div class="player__container-song hide-on-mobile">
                            <div class="player__song-info media">
                                <div class="media__left">
                                    <div class="player__song-thump"></div>
                                </div>
                                <div class="media__content">
                                    <div class="player__song-body media__info">
                                        <div class="player__song-title info__title" style="width: 158px">
                                            <div class="player__title-animate">
                                                <div class="title__item"></div>
                                            </div>
                                        </div>
                                        <div class="player__song-author info__author is-oneline"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="player__control">
                            <div class="player__control-btn">
                                <div class="control-btn btn-random">
                                    <i class="bi bi-shuffle"></i>
                                </div>
                                <div class="control-btn btn-prev">
                                    <i class="bi bi-skip-start-fill"></i>
                                </div>
                                <div class="control-btn btn-toggle-play btn--play-song">
                                    <i class="bi bi-play-circle icon-play"></i>
                                    <i class="bi bi-pause-circle icon-pause"></i>
                                </div>
                                <div class="control-btn btn-next">
                                    <i class="bi bi-skip-end-fill"></i>
                                </div>
                                <div class="control-btn btn-repeat">
                                    <i class="bi bi-arrow-repeat"></i>
                                </div>
                            </div>
                            <div class="progress-block hide-on-mobile">
                                <span class="tracktime">00:00</span>
                                <input id="progress--main" class="progress" type="range" value="0" step="1" min="0" max="100" />
                                <div class="progress__track song--track">
                                    <div class="progress__track-update"></div>
                                </div>
                                <span class="durationtime">04:13</span>
                            </div>
                        </div>
                        <div class="player__options hide-on-mobile">
                            <div class="player__options-container">
                                <div class="player__options-btn volume option-btn">
                                    <i class="bi bi-volume-up btn--icon"></i>
                                </div>
                                <div class="player__volume-progress">
                                    <input type="range" class="volume__range" value="100" step="1" min="0" max="100" />
                                    <div class="progress__track volume--track">
                                        <div class="progress__track-update" style="width: 67%"></div>
                                    </div>
                                    <span class="volume__background"></span>
                                </div>
                                <div class="player__list-icon">
                                    <i class="bi bi-music-note-list"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Theme -->
        <div class="modal-theme grid">
            <div class="modal-container">
                <div class="modal__close-btn">
                    <i class="bi bi-x-lg close close__btn-icon"></i>
                </div>
                <div class="theme__header">
                    <h3 class="theme__header-title">Giao Diện</h3>
                </div>
                <div class="theme__content">
                    <div class="grid theme__container"></div>
                </div>
            </div>
        </div>

        <script src="main.js"></script>
    </body>
</html>
