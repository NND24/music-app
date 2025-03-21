"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = "PLAYER";
const App = $(".app");
const appContainers = Array.from($$(".app__container"));
const audio = $("#audio");
const authors = Array.from($$(".player__song-author"));
const header = $(".header");
const navSettingBtn = $(".header__nav-btn.btn--nav-setting");
const navSettingMenu = $(".setting__menu");
const logOutBtn = $(".btn--nav-log");
const logMenu = $(".log__menu");
const navbarItems = Array.from($$(".content__navbar-item"));
const containerTabs = $$(".container__tab");
const headerNavTitles = $$(".tab-home .container__header-title");
const sidebarNavItems = Array.from($$(".sidebar__nav .sidebar__nav-item"));
const slideImgs = $$(".container__slide-item");
const playBtns = Array.from($$(".btn-toggle-play.btn--play-song"));
const playAllBtns = $$(".btn--play-all");
const player = $(".player");
const playerContainer = $(".player__container");
const playerInfos = Array.from($$(".player__song-info"));
const nextBtns = Array.from($$(".btn-next"));
const prevBtns = Array.from($$(".btn-prev"));
const randomBtns = Array.from($$(".btn-random"));
const repeatBtns = Array.from($$(".btn-repeat"));
const cdThumb = $(".player__song-thump");
const cdThumbs = Array.from($$(".player__song-thump"));
const songTitles = Array.from($$(".player__song-title"));
const durationTimes = Array.from($$(".durationtime"));
const playlistScrollBtns = $$(".container__move-btn.move-btn--playlist");
const themeContainer = $(".theme__container");
const modalTheme = $(".modal-theme");
const navThemeBtn = $(".header__nav-btn.nav-btn--theme");
const closeModalBtn = $(".modal__close-btn");
const playerPopUp = $(".player .player__popup");
const playerPopUpFooter = $(".player .player__popup .player__popup-footer");
const singerSlideContainers = Array.from($$(".singer-slide--container"));
const newPlaylistMoveBtns = Array.from($$(".move-btn--new-playlist"));
const favArtistMoveBtns = Array.from($$(".move-btn--fav-artist"));
const sidebar = $(".app__sidebar");
const playlistSidebarBtn = $(".player__list-icon");
const playlistSidebar = $(".app__playlsit-sidebar");
const progress = Array.from($$(".progress"));
const progressBlocks = Array.from($$(".progress-block"));
const progressTracks = Array.from($$(".progress__track.song--track .progress__track-update"));
const trackTimes = Array.from($$(".tracktime"));
const volumes = Array.from($$(".volume__range"));
const volumeBtns = Array.from($$(".player__options-btn.volume.option-btn"));
const volumeTracks = Array.from($$(".progress__track.volume--track .progress__track-update"));
const volumeIcons = Array.from($$(".volume .btn--icon"));
const songLists = Array.from($$(".playlist__list"));
const tapsongLists = Array.from($$(".playlist__lis-tap-song"));
const playlistLists = Array.from($$(".playlist--container"));

const app = {
    currentIndex: 0,
    currentPlaylist: 1,
    themeList: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    isSeeking: false,
    isChangeVolume: false,
    volume: 100,
    slideIndexs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scrollToRight: [true, true, true, true, true, true, true, true, true, true],
    slideSelectors: [".tab-home .playlist--container .row__item.item--playlist"],
    themes: [
        [
            {
                image: "./assets/image/themeBgs/listTheme1/theme1.svg",
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#37075d",
                    linkTextHover: "#fe63da",
                    modalScrollbar: "rgba(16,31,63,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#ed2b91",
                    primaryBg: "#6a39af",
                    sidebarPopupBg: "#572f90",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
                playerImage: "./assets/image/themeBgs/listTheme1/playerThemes/theme1.png",
            },
            {
                image: "./assets/image/themeBgs/listTheme1/theme2.jpg",
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#282828",
                    linkTextHover: "#c662ef",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#7200a1",
                    primaryBg: "#3d3d3d",
                    sidebarPopupBg: "#292929",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#a0a0a0",
                    placeholderText: "#757575",
                },
            },
        ],
        [
            {
                image: "./assets/image/themeBgs/listTheme2/theme1.jpg",
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#061d50",
                    linkTextHover: "#6e8ffb",
                    modalScrollbar: "rgba(16,31,63,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#3460f5",
                    primaryBg: "#192f60",
                    sidebarPopupBg: "#1d2a49",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
            {
                image: "./assets/image/themeBgs/listTheme2/theme2.jpg",
                colors: {
                    bgContentColor: "rgba(0,0,0,0.05)",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#e7dfdd",
                    linkTextHover: "#8c8471",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#d0ccc5",
                    purplePrimary: "#409abc",
                    primaryBg: "#fffffe",
                    sidebarPopupBg: "#f2f2f2",
                    textColor: "#32323d",
                    textItemHover: "#409abc",
                    textSecondary: "#696969",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
            {
                image: "./assets/image/themeBgs/listTheme2/theme3.jpg",
                colors: {
                    bgContentColor: "#ffffff4d",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#b2d8db",
                    linkTextHover: "#239292",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#b4d0d0",
                    purplePrimary: "#239292",
                    primaryBg: "#e1e8e8",
                    sidebarPopupBg: "#cce0e0",
                    textColor: "#32323d",
                    textItemHover: "#239292",
                    textSecondary: "#696969",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
            {
                image: "./assets/image/themeBgs/listTheme2/theme4.jpg",
                colors: {
                    bgContentColor: "rgba(0,0,0,0.05)",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#f9dbdb",
                    linkTextHover: "#ea7aa0",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#f9c6c5",
                    purplePrimary: "#ea7aa0",
                    primaryBg: "#fff8f8",
                    sidebarPopupBg: "#fbd3d2",
                    textColor: "#32323d",
                    textItemHover: "#ea7aa0",
                    textSecondary: "#696969",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
            {
                image: "./assets/image/themeBgs/listTheme2/theme5.jpg",
                colors: {
                    bgContentColor: "rgba(0,0,0,0.05)",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#bab8c3",
                    linkTextHover: "#8c8471",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#c6c4d1",
                    purplePrimary: "#346875",
                    primaryBg: "#e2e7f5",
                    sidebarPopupBg: "#f2f2f2",
                    textColor: "#32323d",
                    textItemHover: "#2a5e6b",
                    textSecondary: "#696969",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
            {
                image: "./assets/image/themeBgs/listTheme2/theme6.jpg",
                colors: {
                    bgContentColor: "rgba(0,0,0,0.05)",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#fff",
                    linkTextHover: "#9c32ca",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#fff",
                    purplePrimary: "#6b3483",
                    primaryBg: "#fff",
                    sidebarPopupBg: "#f2f2f2",
                    textColor: "#32323d",
                    textItemHover: "#6b3483",
                    textSecondary: "rgba(0,0,0,0.6)",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
        ],
        [
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#1e1e1e",
                    linkTextHover: "#c662ef",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#7200a1",
                    primaryBg: "#282828",
                    sidebarPopupBg: "#292929",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#a0a0a0",
                    placeholderText: "#757575",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#170f23",
                    linkTextHover: "#c662ef",
                    modalScrollbar: "rgba(41,21,71,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#7200a1",
                    primaryBg: "#432275",
                    sidebarPopupBg: "#2a213a",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#101f3f",
                    linkTextHover: "#6e8ffb",
                    modalScrollbar: "rgba(16,31,63,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#3460f5",
                    primaryBg: "#192f60",
                    sidebarPopupBg: "#1d2a49",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#1d375a",
                    linkTextHover: "#6e8ffb",
                    modalScrollbar: "rgba(29,55,90,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#3460f5",
                    primaryBg: "#274a78",
                    sidebarPopupBg: "#2a4162",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#124534",
                    linkTextHover: "#309785",
                    modalScrollbar: "rgba(18,69,52,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#309785",
                    primaryBg: "#126e54",
                    sidebarPopupBg: "#244f3f",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#57403b",
                    linkTextHover: "#d8987f",
                    modalScrollbar: "rgba(87,64,59,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#986d5c",
                    primaryBg: "#6f514c",
                    sidebarPopupBg: "#604a45",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#800064",
                    linkTextHover: "#fe63da",
                    modalScrollbar: "rgba(128,0,100,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#d820b0",
                    primaryBg: "#a22687",
                    sidebarPopupBg: "#883c6c",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff1a",
                    borderBox: "rgb(255 255 255 / 20%)",
                    borderPrimary: "rgb(255 255 255 / 10%)",
                    layoutBg: "#731717",
                    linkTextHover: "#f36565",
                    modalScrollbar: "rgba(115,23,23,0.8)",
                    playerBg: "rgba(0,0,0,0.2)",
                    purplePrimary: "#aa1c1c",
                    primaryBg: "#883236",
                    sidebarPopupBg: "#7a2922",
                    textColor: "#fff",
                    textItemHover: "#fff",
                    textSecondary: "rgb(255 255 255 / 50%)",
                    navigationText: "#dadada",
                    placeholderText: "#dadada",
                },
            },
        ],
        [
            {
                colors: {
                    bgContentColor: "rgba(0,0,0,0.05)",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#fff",
                    linkTextHover: "#9c32ca",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#fff",
                    purplePrimary: "#6b3483",
                    primaryBg: "#fff",
                    sidebarPopupBg: "#f2f2f2",
                    textColor: "#32323d",
                    textItemHover: "#6b3483",
                    textSecondary: "rgba(0,0,0,0.6)",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
            {
                colors: {
                    bgContentColor: "rgba(0,0,0,0.05)",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#e5e3df",
                    linkTextHover: "#8c8471",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#d0ccc5",
                    purplePrimary: "#8c8471",
                    primaryBg: "#fffffe",
                    sidebarPopupBg: "#f2f2f2",
                    textColor: "#32323d",
                    textItemHover: "#8c8471",
                    textSecondary: "#696969",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
            {
                colors: {
                    bgContentColor: "#ffffff4d",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#ced9d9",
                    linkTextHover: "#239292",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#b4d0d0",
                    purplePrimary: "#239292",
                    primaryBg: "#e1e8e8",
                    sidebarPopupBg: "#cce0e0",
                    textColor: "#32323d",
                    textItemHover: "#239292",
                    textSecondary: "#696969",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
            {
                colors: {
                    bgContentColor: "rgba(0,0,0,0.05)",
                    borderBox: "rgba(0,0,0,0.2)",
                    borderPrimary: "rgba(0,0,0,0.1)",
                    layoutBg: "#f9dbdb",
                    linkTextHover: "#ea7aa0",
                    modalScrollbar: "rgba(12,3,3,0.8)",
                    playerBg: "#f9c6c5",
                    purplePrimary: "#ea7aa0",
                    primaryBg: "#fff8f8",
                    sidebarPopupBg: "#fbd3d2",
                    textColor: "#32323d",
                    textItemHover: "#ea7aa0",
                    textSecondary: "#696969",
                    navigationText: "#32323d",
                    placeholderText: "#757575",
                },
            },
        ],
    ],
    themeLists: [
        {
            type: "Chủ đề",
            themes: [
                {
                    name: "Zing Music Awards",
                    image: "./assets/image/modalThemes/modalTheme1/theme1.jpg",
                },
                {
                    name: "Tháp Eiffel",
                    image: "./assets/image/modalThemes/modalTheme1/theme2.jpg",
                },
            ],
        },
        {
            type: "Nghệ Sĩ",
            themes: [
                {
                    name: "Rosé",
                    image: "./assets/image/modalThemes/modalTheme2/theme1.jpg",
                },
                {
                    name: "IU",
                    image: "./assets/image/modalThemes/modalTheme2/theme2.jpg",
                },
                {
                    name: "Ji Chang Wook",
                    image: "./assets/image/modalThemes/modalTheme2/theme3.jpg",
                },
                {
                    name: "Lisa",
                    image: "./assets/image/modalThemes/modalTheme2/theme4.jpg",
                },
                {
                    name: "Jennie Kim",
                    image: "./assets/image/modalThemes/modalTheme2/theme5.jpg",
                },
                {
                    name: "Jisoo",
                    image: "./assets/image/modalThemes/modalTheme2/theme6.jpg",
                },
            ],
        },
        {
            type: "Màu Tối",
            themes: [
                {
                    name: "Tối",
                    image: "./assets/image/modalThemes/modalTheme3/theme1.jpg",
                },
                {
                    name: "Tím",
                    image: "./assets/image/modalThemes/modalTheme3/theme2.jpg",
                },
                {
                    name: "Xanh Đậm",
                    image: "./assets/image/modalThemes/modalTheme3/theme3.jpg",
                },
                {
                    name: "Xanh Biển",
                    image: "./assets/image/modalThemes/modalTheme3/theme4.jpg",
                },
                {
                    name: "Xanh Lá",
                    image: "./assets/image/modalThemes/modalTheme3/theme5.jpg",
                },
                {
                    name: "Nâu",
                    image: "./assets/image/modalThemes/modalTheme3/theme6.jpg",
                },
                {
                    name: "Hồng",
                    image: "./assets/image/modalThemes/modalTheme3/theme7.jpg",
                },
                {
                    name: "Đỏ",
                    image: "./assets/image/modalThemes/modalTheme3/theme8.jpg",
                },
            ],
        },
        {
            type: "Màu Sáng",
            themes: [
                {
                    name: "Sáng",
                    image: "./assets/image/modalThemes/modalTheme4/theme1.jpg",
                },
                {
                    name: "Xám",
                    image: "./assets/image/modalThemes/modalTheme4/theme2.jpg",
                },
                {
                    name: "Xanh Nhạt",
                    image: "./assets/image/modalThemes/modalTheme4/theme3.jpg",
                },
                {
                    name: "Hồng Cánh Sen",
                    image: "./assets/image/modalThemes/modalTheme4/theme4.jpg",
                },
            ],
        },
    ],
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY) || "{}"),
    setConfig: function (key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    // Render
    renderSong() {
        const _this = this;
        fetch(`/musicapp/song?playlistId=${_this.currentPlaylist}`)
                .then(response => response.json())
                .then(data => {
                    _this.songs = data;

                    const loadDurations = _this.songs.map(song => {
                        return new Promise(resolve => {
                            const audio = new Audio(song.path);
                            audio.addEventListener("loadedmetadata", () => {
                                const minutes = Math.floor(audio.duration / 60);
                                const seconds = Math.floor(audio.duration % 60);
                                song.duration = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
                                resolve();
                            });
                        });
                    });

                    Promise.all(loadDurations).then(() => {
                        songLists.forEach((songList, songIndex) => {
                            const songListHTML = _this.songs.map((song, index) => {
                                return `
                <div class="playlist__list-song ${this.currentIndex === index ? "active" : ""}" data-index="${index}">
                <div class="playlist__song-info">
                  <div class="playlist__song-thumb">
                    <img src="${song.image}"/>
                    <div class="thumb-animate">
                      <div class="thumb--animate-img" style="background: url('./assets/image/SongActiveAnimation/icon-playing.gif') no-repeat 50% / contain"></div>
                    </div>
                    <div class="play-song--action">
                      <div class="control-btn btn-toggle-play btn--play-song">
                        <i class="bi bi-play-fill"></i>
                    </div>
                    </div>
                  </div>
                  <div class="playlist__song-body">
                    <span class="playlist__song-title">${song.name}</span>
                    <p class="playlist__song-author">
                        ${song.singer}
                        </p>
                                </div>
                                </div>
                                <span class="playlist__song-time"></span>
                                <div class="playlist__song-option ${songIndex === 1 && "song--tab"
                                        }">
    <div class="playlist__song-btn option-btn ${
                                        songIndex === 0 && "hide-on-tablet"

                                        }" data-id=${song.id}>
         <i class="btn--icon bi bi-three-dots"></i>
    </div>
    <!-- Options Menu -->
    <div class="options-menu" style="display: none;">
        <ul>
            <li class="edit-song">Chỉnh sửa</li>
            <li class="delete-song">Xóa</li>
        </ul>
    </div>
</div>
</div>
                                `;
                            });
                            songList.innerHTML = songListHTML.join("");
                            const optionBtns = songList.querySelectorAll(".option-btn");
                            const allOptionMenus = songList.querySelectorAll(".options-menu");
                            // Add event listeners for the option button
                            optionBtns.forEach((btn, index) => {
                                btn.addEventListener("click", (e) => {
                                    // Close all other options menus
                                    allOptionMenus.forEach((menu) => {
                                        if (menu !== e.target.closest(".playlist__song-option").querySelector(".options-menu")) {
                                            menu.style.display = "none";
                                        }
                                    });
                                    const optionsMenu = e.target.closest(".playlist__song-option").querySelector(".options-menu");
                                    optionsMenu.style.display =
                                            optionsMenu.style.display === "none" || optionsMenu.style.display === "" ? "block" : "none";
                                    // Get the songId from data-id attribute
                                    const songId = e.target.closest(".playlist__song-btn").getAttribute("data-id");
                                    // Add event listeners for edit and delete actions
                                    const editBtn = optionsMenu.querySelector(".edit-song");
                                    const deleteBtn = optionsMenu.querySelector(".delete-song");
                                    editBtn.addEventListener("click", () => {
                                        allOptionMenus.forEach((menu) => {
                                            menu.style.display = "none";
                                        });
                                        try {
                                            fetch(`/musicapp/song?songId=${songId}`, {
                                                method: "GET",
                                            })
                                                    .then(response => {
                                                        return response.json();
                                                    })
                                                    .then(songData => {
                                                        const formEditContainer = $("#song-form-edit-container");
                                                        const closeEditFormButton = $("#song-form-edit-container .close-form");
                                                        const songForm = $("#song-form-edit-container .song-form");
                                                        const songEditName = $("#song-form-edit-container .song-name");
                                                        const singersEdit = $("#song-form-edit-container .singers");
                                                        const songEditImage = $("#song-form-edit-container .song-image");
                                                        const songEditImagePreview = $("#song-form-edit-container .current-song-image");
                                                        const songEditFile = $("#song-form-edit-container .song-file");
                                                        const songEditAudioPreview = $("#song-form-edit-container .current-song-audio");

                                                        songEditName.value = songData[0].name;
                                                        singersEdit.value = songData[0].singer;
                                                        // Hiển thị ảnh hiện tại nếu có
                                                        if (songData[0].image) {
                                                            songEditImagePreview.src = songData[0].image;
                                                            songEditImagePreview.style.display = "block";
                                                        }

                                                        // Hiển thị file nhạc hiện tại nếu có
                                                        if (songData[0].path) {
                                                            songEditAudioPreview.src = songData[0].path;
                                                            songEditAudioPreview.style.display = "block";
                                                        }

                                                        // Hiển thị form
                                                        formEditContainer.style.display = "block";

                                                        // Đóng form khi nhấn nút "Đóng"
                                                        closeEditFormButton.addEventListener("click", function () {
                                                            formEditContainer.style.display = "none";
                                                        });
                                                        // Đảm bảo form ẩn mặc định khi tải trang
                                                        window.addEventListener("load", function () {
                                                            formEditContainer.style.display = "none";
                                                        });
                                                        songForm.addEventListener("submit", function (e) {
                                                            e.preventDefault();
                                                            if (!songEditName.value || !singersEdit.value) {
                                                                alert("Vui lòng nhập tên bài hát và ca sĩ.");
                                                                return;
                                                            }

                                                            // Tạo FormData để gửi dữ liệu
                                                            const formData = new FormData();
                                                            formData.append("name", songEditName.value);
                                                            formData.append("singer", singersEdit.value);
                                                            formData.append("song-image", songEditImage.files[0] || "");
                                                            formData.append("song-file", songEditFile.files[0] || "");
                                                            // Gửi request đến API
                                                            fetch(`/musicapp/song?songId=${songId}`, {
                                                                method: "PUT",
                                                                body: formData,
                                                                headers: {
                                                                    "Accept": "application/json",
                                                                },
                                                            })
                                                                    .then((response) => {
                                                                        if (response.ok) {
                                                                            alert("Cập nhật bài hát thành công!");
                                                                            songForm.reset();
                                                                            formEditContainer.style.display = "none";
                                                                            _this.renderSong();
                                                                        }
                                                                        return response.json();
                                                                    })
                                                                    .then((data) => {
                                                                        console.log("Success:", data);

                                                                    })
                                                                    .catch((error) => {
                                                                        console.error("Error:", error);
                                                                    });
                                                        });
                                                        // Preview hình ảnh bài hát khi chọn file
                                                        songEditImage.addEventListener("change", (event) => {
                                                            const file = event.target.files[0];
                                                            if (file) {
                                                                const reader = new FileReader();
                                                                reader.onload = function (e) {
                                                                    songEditImagePreview.src = e.target.result;
                                                                    songEditImagePreview.style.display = "block";
                                                                };
                                                                reader.readAsDataURL(file);
                                                            }
                                                        });
                                                        // Preview nhạc khi chọn file
                                                        songEditFile.addEventListener("change", (event) => {
                                                            const file = event.target.files[0];
                                                            if (file) {
                                                                const audioURL = URL.createObjectURL(file);
                                                                songEditAudioPreview.src = audioURL;
                                                                songEditAudioPreview.style.display = "block";
                                                            }
                                                        });
                                                    })
                                                    .catch(error => {
                                                        console.error("Lỗi khi cập nhật bài hát:", error);
                                                    });
                                        } catch (error) {
                                            alert("Lỗi khi lấy dữ liệu bài hát: " + error.message);
                                        }
                                        ;
                                    });
                                    deleteBtn.addEventListener("click", () => {
                                        if (confirm(`Bạn có chắc chắn muốn xóa bài hát này không?`)) {
                                            fetch(`/musicapp/song?songId=${songId}`, {
                                                method: "DELETE",
                                            })
                                                    .then(response => {
                                                        if (!response.ok) {
                                                            throw new Error("Xóa bài hát thất bại!");
                                                        }
                                                        return response.json();
                                                    })
                                                    .then(data => {
                                                        alert("Bài hát đã được xóa thành công!");
                                                        _this.renderTapSong();
                                                    })
                                                    .catch(error => {
                                                        console.error("Lỗi khi xóa bài hát:", error);
                                                    });
                                        }
                                    });
                                });
                            });
                        });
                    });
                })
                .catch(error => console.error("Lỗi khi gọi API:", error));
    },
    renderTapSong() {
        const _this = this;
        fetch("/musicapp/song")
                .then(response => response.json())
                .then(data => {
                    _this.songs = data;
                    tapsongLists.forEach((songList, songIndex) => {
                        const songListHTML = _this.songs.map((song, index) => {
                            return `
                                <div class="playlist__list-song ${this.currentIndex === index ? "active" : ""
                                    }" data-index="${index}">
    <div class="playlist__song-info">
        <i class="bi bi-music-note-beamed mr-10"></i>
        <div class="playlist__song-thumb">
            <img src="${song.image}"/>
            <div class="thumb-animate">
                <div class="thumb--animate-img" style="background: url('./assets/image/SongActiveAnimation/icon-playing.gif') no-repeat 50% / contain"></div>
            </div>
            <div class="play-song--action">
                <div class="control-btn btn-toggle-play btn--play-song">
                    <i class="bi bi-play-fill"></i>
                </div>
            </div>
        </div>
        <div class="playlist__song-body">
            <span class="playlist__song-title">${song.name}</span>
            <p class="playlist__song-author">
                        ${song.singer}
                        </p>
        </div>
    </div>
    <span class="playlist__song-time"></span>
    <div class="playlist__song-option song--tab">
        <div class="playlist__song-btn option-btn" data-id=${song.id}>
            <i class="btn--icon bi bi-three-dots"></i>
        </div>
        <!-- Options Menu -->
        <div class="options-menu" style="display: none;">
            <ul>
                <li class="edit-song">Chỉnh sửa</li>
                <li class="delete-song">Xóa</li>
            </ul>
        </div>
    </div>
</div>
`;
                        });
                        songList.innerHTML = songListHTML.join("");
                        const optionBtns = songList.querySelectorAll(".option-btn");
                        const allOptionMenus = songList.querySelectorAll(".options-menu");
// Add event listeners for the option button
                        optionBtns.forEach((btn, index) => {
                            btn.addEventListener("click", (e) => {
                                // Close all other options menus
                                allOptionMenus.forEach((menu) => {
                                    if (menu !== e.target.closest(".playlist__song-option").querySelector(".options-menu")) {
                                        menu.style.display = "none";
                                    }
                                });
                                const optionsMenu = e.target.closest(".playlist__song-option").querySelector(".options-menu");
                                optionsMenu.style.display =
                                        optionsMenu.style.display === "none" || optionsMenu.style.display === "" ? "block" : "none";
                                // Get the songId from data-id attribute
                                const songId = e.target.closest(".playlist__song-btn").getAttribute("data-id");
                                // Add event listeners for edit and delete actions
                                const editBtn = optionsMenu.querySelector(".edit-song");
                                const deleteBtn = optionsMenu.querySelector(".delete-song");
                                editBtn.addEventListener("click", () => {
                                    allOptionMenus.forEach((menu) => {
                                        menu.style.display = "none";
                                    });
                                    try {
                                        fetch(`/musicapp/song?songId=${songId}`, {
                                            method: "GET",
                                        })
                                                .then(response => {
                                                    return response.json();
                                                })
                                                .then(songData => {
                                                    const formEditContainer = $("#song-form-edit-container");
                                                    const closeEditFormButton = $("#song-form-edit-container .close-form");
                                                    const songForm = $("#song-form-edit-container .song-form");
                                                    const songEditName = $("#song-form-edit-container .song-name");
                                                    const singersEdit = $("#song-form-edit-container .singers");
                                                    const songEditImage = $("#song-form-edit-container .song-image");
                                                    const songEditImagePreview = $("#song-form-edit-container .current-song-image");
                                                    const songEditFile = $("#song-form-edit-container .song-file");
                                                    const songEditAudioPreview = $("#song-form-edit-container .current-song-audio");

                                                    songEditName.value = songData[0].name;
                                                    singersEdit.value = songData[0].singer;
                                                    // Hiển thị ảnh hiện tại nếu có
                                                    if (songData[0].image) {
                                                        songEditImagePreview.src = songData[0].image;
                                                        songEditImagePreview.style.display = "block";
                                                    }

                                                    // Hiển thị file nhạc hiện tại nếu có
                                                    if (songData[0].path) {
                                                        songEditAudioPreview.src = songData[0].path;
                                                        songEditAudioPreview.style.display = "block";
                                                    }

                                                    // Hiển thị form
                                                    formEditContainer.style.display = "block";

                                                    // Đóng form khi nhấn nút "Đóng"
                                                    closeEditFormButton.addEventListener("click", function () {
                                                        formEditContainer.style.display = "none";
                                                    });
                                                    // Đảm bảo form ẩn mặc định khi tải trang
                                                    window.addEventListener("load", function () {
                                                        formEditContainer.style.display = "none";
                                                    });
                                                    songForm.addEventListener("submit", function (e) {
                                                        e.preventDefault();
                                                        if (!songEditName.value || !singersEdit.value) {
                                                            alert("Vui lòng nhập tên bài hát và ca sĩ.");
                                                            return;
                                                        }

                                                        // Tạo FormData để gửi dữ liệu
                                                        const formData = new FormData();
                                                        formData.append("name", songEditName.value);
                                                        formData.append("singer", singersEdit.value);
                                                        formData.append("song-image", songEditImage.files[0] || "");
                                                        formData.append("song-file", songEditFile.files[0] || "");
                                                        // Gửi request đến API
                                                        fetch(`/musicapp/song?songId=${songId}`, {
                                                            method: "PUT",
                                                            body: formData,
                                                            headers: {
                                                                "Accept": "application/json",
                                                            },
                                                        })
                                                                .then((response) => {
                                                                    if (response.ok) {
                                                                        alert("Cập nhật bài hát thành công!");
                                                                        songForm.reset();
                                                                        formEditContainer.style.display = "none";
                                                                        _this.renderTapSong();
                                                                    }
                                                                    return response.json();
                                                                })
                                                                .then((data) => {
                                                                    console.log("Success:", data);

                                                                })
                                                                .catch((error) => {
                                                                    console.error("Error:", error);
                                                                });
                                                    });
                                                    // Preview hình ảnh bài hát khi chọn file
                                                    songEditImage.addEventListener("change", (event) => {
                                                        const file = event.target.files[0];
                                                        if (file) {
                                                            const reader = new FileReader();
                                                            reader.onload = function (e) {
                                                                songEditImagePreview.src = e.target.result;
                                                                songEditImagePreview.style.display = "block";
                                                            };
                                                            reader.readAsDataURL(file);
                                                        }
                                                    });
                                                    // Preview nhạc khi chọn file
                                                    songEditFile.addEventListener("change", (event) => {
                                                        const file = event.target.files[0];
                                                        if (file) {
                                                            const audioURL = URL.createObjectURL(file);
                                                            songEditAudioPreview.src = audioURL;
                                                            songEditAudioPreview.style.display = "block";
                                                        }
                                                    });
                                                })
                                                .catch(error => {
                                                    console.error("Lỗi khi cập nhật bài hát:", error);
                                                });
                                    } catch (error) {
                                        alert("Lỗi khi lấy dữ liệu bài hát: " + error.message);
                                    }
                                    ;
                                });
                                deleteBtn.addEventListener("click", () => {
                                    allOptionMenus.forEach((menu) => {
                                        menu.style.display = "none";
                                    });
                                    if (confirm(`Bạn có chắc chắn muốn xóa bài hát này không?`)) {
                                        fetch(`/musicapp/song?songId=${songId}`, {
                                            method: "DELETE",
                                        })
                                                .then(response => {
                                                    if (response.ok) {
                                                        alert("Bài hát đã được xóa thành công!");
                                                        const activeTab = document.querySelector(".content__navbar-item.active");
                                                        if (activeTab && activeTab.innerText.trim() === "BÀI HÁT") {
                                                            _this.renderTapSong();
                                                        } else {
                                                            _this.renderSong();
                                                        }
                                                    }
                                                    return response.json();
                                                })
                                                .then(data => {
                                                })
                                                .catch(error => {
                                                    console.error("Lỗi khi xóa bài hát:", error);
                                                });
                                    }
                                });
                            });
                        });
                    });
                })
                .catch(error => console.error("Lỗi khi gọi API:", error));
    },
    renderPlaylist() {
        const _this = this;
        fetch("/musicapp/playlist")
                .then(response => response.json())
                .then(data => {
                    playlistLists.forEach((playlistList, playlistIndex) => {
                        const playlistHTML = data.map((playlist) => {
                            return `
                <div class="col col-lg-2-4 col-md-3 col-4 mb-30">
                    <div class="row__item item--playlist" data-playlist-id=${playlist.id}>
                        <div class="row__item-container">
                            <div class="row__item-display br-5">
                            <div class="row__item-img" style="background: url('${playlist.image}') no-repeat center center / cover"></div>
                            <div class="row__item-actions">
                                <div class="btn--play-playlist">
                                <div class="control-btn btn-toggle-play">
                                    <i class="bi bi-play-circle"></i>
                                </div>
                                </div>
                                <div class="action-btn">
                                <i class="bi bi-three-dots btn--icon"></i>
                                </div>
                            </div>
                            <div class="overlay"></div>
                            </div>
                            <div class="row__item-info">
                            <a href="#" class="row__info-name is-active">${playlist.name}</a>
                            <h3 class="row__info-creator">${playlist.creator}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                        });
                        playlistList.innerHTML = playlistHTML.join("");
                    });
                    const playlistItems = $$(".playlist--container .row__item.item--playlist");
                    Array.from(playlistItems).forEach((playlist) => {
                        playlist.onclick = function (e) {
                            const playlistBtn = e.target.closest(".btn--play-playlist");
                            const playlistId = playlist.getAttribute("data-playlist-id");
                            _this.currentPlaylist = playlistId;
                            _this.loadCurrentSongPlaylist(_this.currentPlaylist);
                            _this.setConfig("currentPlaylist", _this.currentPlaylist);
                            _this.scrollUpActiveSong();
                        };
                    }
                    );
                })
                .catch(error => console.error("Lỗi khi gọi API:", error));
    },
    renderModalTheme() {
        const themeContainerHTML = `
          ${this.themeLists.map((themeList, themeIndex) => {
            return `
                  <div class="row sm-gutter theme__list">
                      <div class="col-lg-12 col-md-12 col-12">
                          <div class="theme__container-info">
                              <h3 class="theme__info-name">${themeList.type}</h3>
                          </div>
                      </div>
                      ${themeList.themes.map((theme, index) => {
                return `
                              <div class="col-lg-2 col-md-4 col-6 mb-20">
                                  <div class="theme__container-item" data-index="${index}">
                                      <div class="theme__item-display row__item-display br-5">
                                          <div class="theme__item-img row__item-img" style="background: url('${theme.image}') no-repeat center center / cover"></div>
                                          <div class="overlay"></div>
                                          <div class="theme__item-actions row__item-actions">
                                              <button class="button theme__actions-btn btn--apply-theme button-primary">
                                                  <span class="theme__btn-title">Áp dụng</span>
                                              </button>
                                              <button class="button theme__actions-btn btn--preview hide-on-mobile">
                                                  <span class="theme__btn-title">Xem trước</span>
                                              </button>
                                          </div>
                                      </div>
                                      <div class="theme__item-info">
                                          <div class="theme__item-name">${theme.name}</div>
                                      </div>
                                  </div>
                              </div>
                          `;
            })}
                  </div>
              `;
        })}

        `;
        themeContainer.innerHTML = themeContainerHTML;
    },
    defineProperties: function () {
        const _this = this;
        if (!this.songs) {
            fetch(`/musicapp/song`)
                    .then(response => response.json())
                    .then(data => {
                        _this.songs = data;
                        // Chỉ định nghĩa currentSong sau khi đã có songs
                        Object.defineProperty(_this, "currentSong", {
                            get: function () {
                                return _this.songs?.[_this.currentIndex] || null;
                            },
                        });
                    })
                    .catch(error => console.error("Lỗi khi gọi API:", error));
        } else {
            // Nếu đã có sẵn songs, định nghĩa luôn currentSong
            Object.defineProperty(this, "currentSong", {
                get: function () {
                    return this.songs[this.currentIndex];
                },
            });
        }
    },
    render: function () {
        this.renderSong();
        this.renderTapSong();
        this.renderPlaylist();
        this.renderModalTheme();
    },
    handleEvents: function () {
        const _this = this;
        const playBtns = Array.from($$(".btn-toggle-play.btn--play-song"));
        const listThemes = Array.from($$(".theme__container .theme__list"));
        const uploadButtons = Array.from($$(".upload-button"));

        const formContainer = $("#song-form-container");
        const closeFormButton = $("#song-form-container .close-form");
        const songForm = $("#song-form-container .song-form");
        const songName = $("#song-form-container .song-name");
        const singers = $("#song-form-container .singers");
        const songImage = $("#song-form-container .song-image");
        const songImagePreview = $("#song-form-container .current-song-image");
        const songFile = $("#song-form-container .song-file");
        const songAudioPreview = $("#song-form-container .current-song-audio");

        // Form và nút đóng
        uploadButtons.forEach((uploadButton) => {
            // Hiện form khi nhấn nút "Upload" hoặc "Chỉnh sửa"
            uploadButton.addEventListener("click", function () {
                //formContainer.style.display === "none" || formContainer.style.display === "" ? "block" : "none";
                formContainer.style.display = "block";
            });
        });
        // Đóng form khi nhấn nút "Đóng"
        closeFormButton.addEventListener("click", function () {
            formContainer.style.display = "none";
        });
        // Đảm bảo form ẩn mặc định khi tải trang
        window.addEventListener("load", function () {
            formContainer.style.display = "none";
        });
        songForm.addEventListener("submit", function (e) {
            e.preventDefault();
            if (!songName.value || !singers.value) {
                alert("Vui lòng nhập tên bài hát và ca sĩ.");
                return;
            }

            if (!songImage.files[0]) {
                alert("Vui lòng chọn một file hình ảnh bài hát.");
                return;
            }

            if (!songFile.files[0]) {
                alert("Vui lòng chọn một file bài hát.");
                return;
            }
            // Tạo FormData để gửi dữ liệu
            const formData = new FormData();
            formData.append("name", songName.value);
            formData.append("singer", singers.value);
            formData.append("song-image", songImage.files[0]);
            formData.append("song-file", songFile.files[0]);
            // Gửi request đến API
            fetch("/musicapp/song", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json",
                },
            })
                    .then((response) => {
                        if (response.ok) {
                            alert("Bài hát đã được thêm thành công!");
                            songForm.reset();
                            const activeTab = document.querySelector(".content__navbar-item.active");
                            if (activeTab && activeTab.innerText.trim() === "BÀI HÁT") {
                                _this.renderTapSong();
                            } else {
                                _this.renderSong();
                            }
                        }
                        return response.json();
                    })
                    .then((data) => {
                        console.log("Success:", data);

                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
        });
        // Preview hình ảnh bài hát khi chọn file
        songImage.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    songImagePreview.src = e.target.result;
                    songImagePreview.style.display = "block";
                };
                reader.readAsDataURL(file);
            }
        });
        // Preview nhạc khi chọn file
        songFile.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (file) {
                const audioURL = URL.createObjectURL(file);
                songAudioPreview.src = audioURL;
                songAudioPreview.style.display = "block";
            }
        });
        // Handle header background when scroll
        appContainers.forEach((appContainer) => {
            appContainer.onscroll = function () {
                const scrollTop = appContainer.scrollY || appContainer.scrollTop;
                if (scrollTop > 5) {
                    Object.assign(header.style, {
                        backgroundColor: "var(--layout-bg)",
                        boxShadow: "0 1px 1px rgba(0, 0, 0, 0.08)",
                    });
                } else {
                    Object.assign(header.style, {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                    });
                }
            };
        });
        // Handle when click play
        playBtns.forEach((playBtn) => {
            playBtn.onclick = function () {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            };
        });
        // Handle when click play all
        playAllBtns.forEach((playAllBtn) => {
            playAllBtn.onclick = function () {
                _this.currentIndex = 0;
                const songActives = $$(`.playlist__list-song[data-index="${_this.currentIndex}"]`);
                _this.loadCurrentSong();
                Array.from($$(".playlist__list-song.active")).forEach((songActive) => {
                    songActive.classList.remove("active");
                });
                Array.from(songActives).forEach((songActive) => {
                    songActive.classList.add("active");
                });
                _this.loadCurrentSong();
                _this.scrollDownActiveSong();
                audio.play();
            };
        });
        // Handle when song is played
        audio.onplay = function () {
            const songActives = Array.from($$(".playlist__list-song.active"));
            _this.isPlaying = true;
            songActives.forEach((songActive) => {
                songActive.classList.add("playing");
            });
            player.classList.add("playing");
            playerInfos.forEach((playerInfo) => {
                playerInfo.classList.add("playing");
            });
            cdThumbAnimate.play();
        };
        // Handle when song is paused
        audio.onpause = function () {
            const songActives = Array.from($$(".playlist__list-song.active"));
            _this.isPlaying = false;
            songActives.forEach((songActive) => {
                songActive.classList.remove("playing");
            });
            player.classList.remove("playing");
            cdThumbAnimate.pause();
        };
        // Handle next song when song end
        audio.onended = function () {
            if (_this.isRepeat) {
            } else {
                nextBtns[0].click();
            }
            audio.play();
        };
        // Handle when click next song
        nextBtns.forEach((nextBtn) => {
            nextBtn.onclick = function (e) {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.nextSong();
                }
                audio.play();
                const activeTab = document.querySelector(".content__navbar-item.active");
                if (activeTab && activeTab.innerText.trim() === "BÀI HÁT") {
                    _this.renderTapSong();
                } else {
                    _this.renderSong();
                }
                _this.scrollDownActiveSong();
            };
        });
        // Handle when click prev song
        prevBtns.forEach((prevBtn) => {
            prevBtn.onclick = function (e) {
                if (_this.isRandom) {
                    _this.playRandomSong();
                } else {
                    _this.prevSong();
                }
                audio.play();
                const activeTab = document.querySelector(".content__navbar-item.active");
                if (activeTab && activeTab.innerText.trim() === "BÀI HÁT") {
                    _this.renderTapSong();
                } else {
                    _this.renderSong();
                }
                _this.scrollUpActiveSong();
            };
        });
        // Handle on/off random song
        randomBtns.forEach((randomBtn) => {
            randomBtn.onclick = function () {
                _this.isRandom = !_this.isRandom;
                _this.setConfig("isRandom", _this.isRandom);
                randomBtns.forEach((randomBtn) => {
                    randomBtn.classList.toggle("active", _this.isRandom);
                });
            };
        });
        // Handel on/off repeat song
        repeatBtns.forEach((repeatBtn) => {
            repeatBtn.onclick = function () {
                _this.isRepeat = !_this.isRepeat;
                _this.setConfig("isRepeat", _this.isRepeat);
                repeatBtns.forEach((repeatBtn) => {
                    repeatBtn.classList.toggle("active", _this.isRepeat);
                });
            };
        });
        // Handle CD spin/stop
        const cdThumbAnimate = cdThumb.animate([{transform: "rotate(360deg)"}], {
            duration: 10000, // 10 seconds
            iterations: Infinity,
        });
        cdThumbAnimate.pause();
        // Handle the song progress change
        audio.ontimeupdate = function (e) {
            if (audio.duration) {
                if (!_this.isSeeking) {
                    const listDurationTime = $(".playlist__list-song.active .playlist__song-time");
                    trackTimes.forEach((trackTime) => {
                        trackTime.innerHTML = _this.audioCalTime(audio.currentTime);
                    });
                    progress.forEach((progressChild) => {
                        progressChild.value = Math.round((audio.currentTime / audio.duration) * 100);
                    });
                    progressTracks.forEach((progressTrack) => {
                        progressTrack.style.width = Math.round((audio.currentTime / audio.duration) * 100) + "%";
                    });
                }
            } else {
                // Handling when seek
                progress.forEach((progressChild) => {
                    progressChild.onchange = function (e) {
                        const seekTime = (e.target.value * audio.duration) / 100;
                        audio.currentTime = seekTime;
                    };
                });
            }
        };
        //Handle adjust volume change
        function changeVolume(index) {
            if (audio.volume * 100 != volumes[index].value) {
                audio.volume = volumes[index].value / 100;
                volumeTracks.forEach((volumeTrack) => {
                    volumeTrack.style.width = volumes[index].value + "%";
                });
                _this.setConfig("currentVolume", volumes[index].value);
                if (!audio.volume) {
                    volumeIcons.forEach((volumeIcon) => {
                        volumeIcon.classList.replace("bi-volume-up", "bi-volume-mute");
                    });
                } else {
                    volumeIcons.forEach((volumeIcon) => {
                        volumeIcon.classList.replace("bi-volume-mute", "bi-volume-up");
                    });
                }
            }
        }

        volumeBtns.forEach((volumeBtn, index) => {
            volumeBtn.onclick = (e) => {
                let currentVolume;
                if (audio.volume > 0) {
                    currentVolume = 0;
                } else {
                    if (volumes[index].value > 0) {
                        currentVolume = volumes[index].value;
                    } else {
                        currentVolume = 100;
                        volumes.forEach((volume) => {
                            volume.value = 100;
                        });
                    }
                }
                audio.volume = currentVolume / 100;
                volumeTracks.forEach((volumeTrack) => {
                    volumeTrack.style.width = currentVolume + "%";
                });
                _this.setConfig("currentVolume", currentVolume);
                if (!audio.volume) {
                    volumeIcons.forEach((volumeIcon) => {
                        volumeIcon.classList.replace("bi-volume-up", "bi-volume-mute");
                    });
                } else {
                    volumeIcons.forEach((volumeIcon) => {
                        volumeIcon.classList.replace("bi-volume-mute", "bi-volume-up");
                    });
                }
            };
        });
        volumes.forEach((volume, index) => {
            volume.onchange = function (e) {
                changeVolume(index);
            };
            volume.onmousedown = (e) => {
                _this.isChangeVolume = true;
            };
            volume.onmouseup = () => {
                _this.isChangeVolume = false;
            };
            volume.onmousemove = function (e) {
                if (_this.isChangeVolume === true) {
                    changeVolume(index);
                    e.stopPropagation();
                }
            };
            // Use addEventListener to fix the bug when the first loading
            volume.addEventListener("touchstart", function (e) {
                _this.isChangeVolume = true;
            });
            volume.addEventListener("touchend", function (e) {
                _this.isChangeVolume = false;
            });
            volume.addEventListener("touchmove", function (e) {
                if (_this.isChangeVolume === true) {
                    changeVolume(index);
                    e.stopPropagation();
                }
            });
        });
        // Method 2 to seek
        function currentTime() {
            if (_this.isSeeking) {
                let seekTime;
                progress.forEach((progressChild) => {
                    progressChild.oninput = (e) => {
                        seekTime = (e.target.value * audio.duration) / 100;
                        progressTracks.forEach((progressTrack) => {
                            progressTrack.style.width = e.target.value + "%";
                        });
                        trackTimes.forEach((trackTime) => {
                            trackTime.innerHTML = _this.audioCalTime(seekTime);
                        });
                    };
                });
            }
        }

        progress.forEach((progressChild) => {
            progressChild.onmousemove = currentTime;
            progressChild.addEventListener("touchmove", currentTime);
        });
        function seekStart() {
            if (audio.duration) {
                _this.isSeeking = true;
            }
        }

        function seekEnd() {
            _this.isSeeking = false;
        }

        // progressBlock.addEventListener('touchstart', seekStart);
        progress.forEach((progressChild) => {
            progressChild.onmousedown = seekStart;
            progressChild.ontouchstart = seekStart;
        });
        progress.forEach((progressChild) => {
            progressChild.onmouseup = seekEnd;
            progressChild.ontouchend = seekEnd;
        });
        // Listen to playlist clicks
        songLists.forEach((songList) => {
            songList.onclick = function (e) {
                const checkNode = e.target.closest(".playlist__list-song:not(.active) .playlist__song-check");
                const songNode = e.target.closest(".playlist__list-song:not(.active)");
                const optionNode = e.target.closest(".playlist__song-option");
                if (songNode && !optionNode && !checkNode) {
                    if (songNode) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        const songActives = $$(`.playlist__list-song[data-index="${_this.currentIndex}"]`);
                        _this.loadCurrentSong();
                        Array.from($$(".playlist__list-song.active")).forEach((songActive) => {
                            songActive.classList.remove("playing");
                            songActive.classList.remove("active");
                        });
                        Array.from(songActives).forEach((songActive) => {
                            songActive.classList.add("active");
                        });
                        audio.play();
                    }
                }

                //Handle when click on song checkbox
                if (checkNode) {
                    checkNode.onclick = function (e) {
                        const inputCheck = e.target.closest(".playlist__song-check").querySelector(".mr-10");
                        e.target.closest(".playlist__list-song").classList.toggle("active", inputCheck.checked);
                    };
                }
            };
        });
        tapsongLists.forEach((songList) => {
            songList.onclick = function (e) {
                const checkNode = e.target.closest(".playlist__list-song:not(.active) .playlist__song-check");
                const songNode = e.target.closest(".playlist__list-song:not(.active)");
                const optionNode = e.target.closest(".playlist__song-option");
                if (songNode && !optionNode && !checkNode) {
                    if (songNode) {
                        _this.currentIndex = Number(songNode.dataset.index);
                        const songActives = $$(`.playlist__list-song[data-index="${_this.currentIndex}"]`);
                        console.log("this.currentSong: ", _this.currentSong)
                        _this.loadCurrentSong();
                        Array.from($$(".playlist__list-song.active")).forEach((songActive) => {
                            songActive.classList.remove("playing");
                            songActive.classList.remove("active");
                        });
                        Array.from(songActives).forEach((songActive) => {
                            songActive.classList.add("active");
                        });
                        audio.play();
                    }
                }

                //Handle when click on song checkbox
                if (checkNode) {
                    checkNode.onclick = function (e) {
                        const inputCheck = e.target.closest(".playlist__song-check").querySelector(".mr-10");
                        e.target.closest(".playlist__list-song").classList.toggle("active", inputCheck.checked);
                    };
                }
            };
        });
        // Handle click on player
        player.onclick = function (e) {
            const authorNode = e.target.closest(
                    ".player__container .player__song-info.media .player__song-author.info__author"
                    );
            const actionNode = e.target.closest(".player__container .player__song-info");
            const controlNode = e.target.closest(".player__container .player__control-btn");
            const progressNode = e.target.closest(".player__container .progress-block");
            const optionNode = e.target.closest(".player__container .player__options-container");
            const popUpNode = e.target.closest(".player .player__popup");
            const popDownBtn = e.target.closest(".popup__action-btn.btn--pop-down");
            if (
                    !player.classList.contains("open-popup") &&
                    !actionNode &&
                    !authorNode &&
                    !controlNode &&
                    !progressNode &&
                    !optionNode &&
                    !popUpNode
                    ) {
                player.classList.add("open-popup");
            }
            // Handle close pop-up window
            if (popUpNode) {
                if (popDownBtn) {
                    player.classList.remove("open-popup");
                }
            }
        };
        // Handle slide show
        let imgIndex = 2;
        function slideShow() {
            const slideImgFirst = $(".container__slide-item.first");
            const slideImgSecond = $(".container__slide-item.second");
            const slideImgThird = slideImgs[imgIndex];
            const slideImgFourth = slideImgs[imgIndex === slideImgs.length - 1 ? 0 : imgIndex + 1];
            slideImgFourth.classList.replace("fourth", "third");
            slideImgThird.classList.replace("third", "second");
            slideImgSecond.classList.replace("second", "first");
            slideImgFirst.classList.replace("first", "fourth");
            imgIndex++;
            if (imgIndex >= slideImgs.length) {
                imgIndex = 0;
            }
            setTimeout(slideShow, 2000);
        }
        slideShow();
        // Handle when click on sidebar item
        sidebarNavItems.forEach((sidebarNavItem, index) => {
            sidebarNavItem.onclick = function () {
                $(".app__container.active").classList.remove("active");
                appContainers[index].classList.add("active");
                $(".sidebar__nav .sidebar__nav-item.active").classList.remove("active");
                sidebarNavItem.classList.add("active");
                appContainers[index].scrollTop = 0;
            };
        });
        document.onclick = function (e) {
            navSettingMenu.classList.remove("open");
            logMenu.classList.remove("open");
        };
        // Handle when click on setting button
        navSettingBtn.onclick = function (e) {
            e.stopPropagation();
            navSettingMenu.classList.toggle("open");
            logMenu.classList.remove("open");
        };
        // Handle when click on setting menu
        navSettingMenu.onclick = (e) => {
            e.stopPropagation();
        };
        // Handle when click on log button
        logOutBtn.onclick = function (e) {
            e.stopPropagation();
            logMenu.classList.toggle("open");
            navSettingMenu.classList.remove("open");
        };
        // Handle when click on log menu
        logMenu.onclick = (e) => {
            e.stopPropagation();
        };
        // Handle when click navbar
        navbarItems.forEach((navbarItem, index) => {
            navbarItem.onclick = function () {
                $(".content__navbar-item.active").classList.remove("active");
                navbarItem.classList.add("active");
                $(".container__tab.active").classList.remove("active");
                containerTabs[index].classList.add("active");
                if (navbarItem.innerText.trim() === "BÀI HÁT") {
                    _this.renderTapSong();
                } else {
                    _this.renderSong();
                }
            };
        });
        Array.from(headerNavTitles).forEach((headerNavTitle, index) => {
            headerNavTitle.onclick = function () {
                appContainers[0].scrollTop = 0;
                $(".content__navbar-item.active").classList.remove("active");
                navbarItems[index + 1].classList.add("active");
                $(".container__tab.active").classList.remove("active");
                containerTabs[index + 1].classList.add("active");
            };
        });
        // Handle when click button move Playlist, Album, Mv, Artist on tab Home
        // Playlist
        playlistScrollBtns[0].onclick = function () {
            _this.showSlides(-5, 0, playlistLists[0], playlistScrollBtns);
        };
        playlistScrollBtns[1].onclick = function () {
            _this.showSlides(5, 0, playlistLists[0], playlistScrollBtns);
        };
        // Handle when click on playlist item
        const playlistItems = $$(".tab-home .playlist--container .row__item.item--playlist");
        Array.from(playlistItems).forEach((playlist) => {
            playlist.onclick = function (e) {
                const playlistBtn = e.target.closest(".btn--play-playlist");
                const playlistId = playlist.getAttribute("data-playlist-id");
                console.log("Playlist ID:", playlistId);
                _this.loadCurrentPlaylist(playlistBtn, playlistId);
            };
        });
        const tabPlaylistItems = $$(".tab-playlist .playlist--container .row__item.item--playlist");
        Array.from(tabPlaylistItems).forEach((playlist) => {
            playlist.onclick = (e) => {
                const playlistBtn = e.target.closest(".btn--play-playlist");
                const playlistId = playlist.getAttribute("data-playlist-id");
                _this.loadCurrentPlaylist(playlistBtn, playlistId);
            };
        }
        );
        // Handle open playlist sidebar
        playlistSidebarBtn.onclick = function () {
            playlistSidebar.classList.toggle("open");
            playlistSidebarBtn.classList.toggle("open");
        };
        // Open and close modal theme
        navThemeBtn.onclick = function () {
            modalTheme.classList.add("open");
        };
        modalTheme.onclick = function (e) {
            const themeContainer = e.target.closest(".modal-theme .modal-container");
            if (themeContainer) {
                e.stopPropagation();
            } else {
                modalTheme.classList.remove("open");
            }
        };
        closeModalBtn.onclick = (e) => {
            modalTheme.classList.remove("open");
        };
        // Handle change theme method
        listThemes.forEach((listTheme, themeIndex) => {
            listTheme.onclick = (e) => {
                const applyThemeBtn = e.target.closest(".theme__actions-btn.btn--apply-theme");
                const previewBtn = e.target.closest(".theme__actions-btn.btn--preview");
                const themeItem = e.target.closest(".theme__container-item");
                if (themeItem && (applyThemeBtn || previewBtn)) {
                    const currentTheme = Number(themeItem.dataset.index);
                    if (applyThemeBtn) {
                        _this.loadThemeBg(themeIndex, currentTheme);
                        _this.setConfig("themeList", themeIndex);
                        _this.setConfig("currentTheme", currentTheme);
                        closeModalBtn.onclick();
                    }
                    if (previewBtn) {
                        _this.loadThemeBg(themeIndex, currentTheme);
                    }
                }
            };
        });
    },
    loadCurrentSong: function () {
        if (this.currentSong) {
            songTitles.forEach((songTitle) => {
                songTitle.textContent = this.currentSong?.name;
            });

            cdThumbs.forEach((cdThumb) => {
                cdThumb.innerHTML = `
                <img src="${this.currentSong?.image}" class="thump-img" alt="">
            `;
            });
            authors.forEach((author) => {
                author.innerHTML = `
                <a href="#" class="is-ghost">${this.currentSong?.singer}</a>
            `;
            });
            audio.src = this.currentSong?.path;

            audio.addEventListener("loadedmetadata", () => {
                const minutes = Math.floor(audio.duration / 60);
                const seconds = Math.floor(audio.duration % 60);
                const formattedDuration = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

                durationTimes.forEach((durationTime) => {
                    durationTime.textContent = formattedDuration;
                });
            });

            this.setConfig("currentIndex", this.currentIndex);
        }
    },
    async loadCurrentSongPlaylist(playlistId)
    {
        try {
            const response = await fetch(`/musicapp/song?playlistId=${playlistId}`);
            if (!response.ok)
                throw new Error("Lỗi khi lấy danh sách bài hát!");
            const data = await response.json(); // Chuyển dữ liệu thành JSON
            this.songs = data; // Gán danh sách bài hát từ API vào `this.songs`
            this.currentIndex = 0;
            this.loadCurrentSong();
            this.renderSong();
            audio.play();
        } catch (error) {
            console.error("Lỗi khi tải danh sách bài hát:", error);
        }
    },
    loadCurrentPlaylist(playlistBtn, playlistId) {
        if (playlistBtn) {
            this.currentPlaylist = playlistId;
            this.loadCurrentSongPlaylist(this.currentPlaylist);
            this.setConfig("currentPlaylist", this.currentPlaylist);
            this.scrollUpActiveSong();
        }
    },
    audioCalTime: function (time) {
        let minute;
        let second;
        if (time) {
            minute = Math.floor(time / 60).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
            second = Math.floor(time % 60).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
        } else {
            minute = (0).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
            second = (0).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
            });
        }
        return `${minute}:${second}`;
    },
    nextSong: function () {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function () {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        this.loadCurrentSong();
    },
    scrollDownActiveSong: function () {
        setTimeout(function () {
            Array.from($$(".playlist__list-song.active")).forEach((songActive) => {
                songActive.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            });
        }, 200);
    },
    scrollUpActiveSong: function () {
        setTimeout(function () {
            Array.from($$(".playlist__list-song.active")).forEach((songActive) => {
                songActive.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            });
        }, 200);
    },
    getSlideIndex(step, slideOrder, listItems, listBtn) {
        this.slideIndexs[slideOrder] += step;
        if (this.slideIndexs[slideOrder] + step > listItems.length - 1) {
            this.slideIndexs[slideOrder] = listItems.length - 1;
            listBtn[1].classList.add("button--disabled");
            listBtn[0].classList.remove("button--disabled");
            this.scrollToRight[slideOrder] = false;
        } else if (this.slideIndexs[slideOrder] + step < 0) {
            this.slideIndexs[slideOrder] = 0;
            listBtn[0].classList.add("button--disabled");
            listBtn[1].classList.remove("button--disabled");
            this.scrollToRight[slideOrder] = true;
        } else {
            listBtn[0].classList.remove("button--disabled");
            listBtn[1].classList.remove("button--disabled");
        }
    },
    showSlides(step, slideOrder, listContainer, listBtn) {
        const listItems = $$(this.slideSelectors[slideOrder]);
        this.getSlideIndex(step, slideOrder, listItems, listBtn);
        const currentIndex = Math.floor(this.slideIndexs[slideOrder] / Math.abs(step));
        // Scroll Into View
        listContainer.scrollLeft = listContainer.offsetWidth * currentIndex;
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom || false;
        this.isRepeat = this.config.isRepeat || false;
        this.currentIndex = this.config.currentIndex || 0;
        this.currentPlaylist = this.config.currentPlaylist || 1;
        this.themeList = this.config.themeList || 0;
        this.currentTheme = this.config.currentTheme || 0;
        this.loadThemeBg(this.themeList, this.currentTheme);
        audio.volume = this.config.currentVolume == 0 ? 0 : this.config.currentVolume / 100 || 1;
        if (!audio.volume) {
            volumeIcons.forEach((volumeIcon) => {
                volumeIcon.classList.replace("bi-volume-up", "bi-volume-mute");
            });
        }
        volumes.forEach((volume) => {
            volume.value = this.config.currentVolume == 0 ? 0 : this.config.currentVolume || 100;
        });
        volumeTracks.forEach((volumeTrack) => {
            volumeTrack.style.width = (this.config.currentVolume == 0 ? 0 : this.config.currentVolume || 100) + "%";
        });
        durationTimes.forEach((durationTime) => {
            durationTime.textContent = this.audioCalTime(this.durationList[this.currentPlaylist][this.currentIndex]);
        });
        randomBtns.forEach((randomBtn) => {
            randomBtn.classList.toggle("active", this.isRandom);
        });
        repeatBtns.forEach((repeatBtn) => {
            repeatBtn.classList.toggle("active", this.isRepeat);
        });
    },
    loadThemeBg(themeListIndex, currentTheme) {
        const currentThemeColor = this.themes[themeListIndex][currentTheme].colors;
        document.documentElement.style.setProperty("--bg-content-color", currentThemeColor.bgContentColor);
        document.documentElement.style.setProperty("--border-box", currentThemeColor.borderBox);
        document.documentElement.style.setProperty("--border-primary", currentThemeColor.borderPrimary);
        document.documentElement.style.setProperty("--layout-bg", currentThemeColor.layoutBg);
        document.documentElement.style.setProperty("--link-text-hover", currentThemeColor.linkTextHover);
        document.documentElement.style.setProperty("--modal-scrollbar", currentThemeColor.modalScrollbar);
        document.documentElement.style.setProperty("--player-bg", currentThemeColor.playerBg);
        document.documentElement.style.setProperty("--purple-primary", currentThemeColor.purplePrimary);
        document.documentElement.style.setProperty("--primary-bg", currentThemeColor.primaryBg);
        document.documentElement.style.setProperty("--sidebar-popup-bg", currentThemeColor.sidebarPopupBg);
        document.documentElement.style.setProperty("--text-color", currentThemeColor.textColor);
        document.documentElement.style.setProperty("--text-item-hover", currentThemeColor.textItemHover);
        document.documentElement.style.setProperty("--text-secondary", currentThemeColor.textSecondary);
        document.documentElement.style.setProperty("--navigation-text", currentThemeColor.navigationText);
        document.documentElement.style.setProperty("--placeholder-text", currentThemeColor.placeholderText);
        if (this.themes[themeListIndex][currentTheme].image) {
            App.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].image}')`;
            playerPopUp.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].image}')`;
            App.classList.add("has__theme-img");
        } else {
            App.style.backgroundImage = "none";
            playerPopUp.style.backgroundImage = "none";
            App.classList.remove("has__theme-img");
        }
        if (this.themes[themeListIndex][currentTheme].playerImage) {
            player.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].playerImage}')`;
            playerPopUpFooter.style.backgroundImage = `url('${this.themes[themeListIndex][currentTheme].playerImage}')`;
        } else {
            player.style.backgroundImage = "none";
            playerPopUpFooter.style.backgroundImage = "none";
        }
    },
    start: function () {
        // Render playlist
        this.render();
        // Define properties for the object
        this.defineProperties();
        // Listening / handling event
        this.handleEvents();
        // Load the first song information into the UI when running the app
        this.loadCurrentSong();
        // Assign configuration from config to application
        this.loadConfig();
    },
};
app.start();
