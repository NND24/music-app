"use strict";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = "PLAYER";

const App = $(".app");
const appContainers = Array.from($$(".app__container"));
const audio = $("#audio");
const authors = Array.from($$(".player__song-author"));
const header = $(".header");
const searchHistory = $(".header__search-history");
const navSettingBtn = $(".header__nav-btn.btn--nav-setting");
const navSettingMenu = $(".setting__menu");
const logOutBtn = $(".btn--nav-log");
const logMenu = $(".log__menu");
const sidebarSubnav = $(".sidebar__subnav");
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
const albumScrollBtns = $$(".container__move-btn.move-btn--album");
const mvScrollBtns = $$(".container__move-btn.move-btn--mv");
const artistScrollBtns = $$(".container__move-btn.move-btn--artist");
const exploreRadioMoveBtns = Array.from($$(".tab--explore .container__move-btn.move-btn--radio"));
const radioTabMoveBtns = Array.from($$(".tab--radio .container__move-btn.move-btn--radio"));
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
const sidebarExpandBtn = $(".sidebar__expand-btn.btn--expand");
const sidebarShrinkBtn = $(".sidebar__expand-btn.btn--shrink");
const sidebarSubnavItems = Array.from($$(".sidebar__subnav .subnab--item"));
const progress = Array.from($$(".progress"));
const progressBlocks = Array.from($$(".progress-block"));
const progressTracks = Array.from($$(".progress__track.song--track .progress__track-update"));
const trackTimes = Array.from($$(".tracktime"));
const volumes = Array.from($$(".volume__range"));
const volumeBtns = Array.from($$(".player__options-btn.volume.option-btn"));
const volumeTracks = Array.from($$(".progress__track.volume--track .progress__track-update"));
const volumeIcons = Array.from($$(".volume .btn--icon"));
const songLists = Array.from($$(".playlist__list"));
const tapsongLists = Array.from($$(".playlist__list.playlist__lis-tap-song"));
const playlistLists = Array.from($$(".playlist--container"));
const albumLists = Array.from($$(".album--container"));
const mvLists = Array.from($$(".mv--container"));
const artistLists = Array.from($$(".artist--container"));
const radioLists = Array.from($$(".radio--container"));
const labelLists = Array.from($$(".label--container"));
const exploreSlideLists = Array.from($$(".explore__slide--container"));
const singerLists = Array.from($$(".singer-slide--container"));
const eventLists = Array.from($$(".event--container"));
const newPlaylistLists = Array.from($$(".new-playlist--container"));
const favArtistLists = Array.from($$(".fav-artist--container"));
const brandLists = Array.from($$(".brand--container"));
const specialPlaylistLists = Array.from($$(".special-playlist--section"));
const normalPlaylistLists = Array.from($$(".normal-playlist--section"));
const tabChartLists = $(".chart--container");
const postLists = Array.from($$(".story--container"));

const app = {
    currentIndex: 0,
    currentPlaylist: 0,
    themeList: 0,
    currentPlaylist: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    isSeeking: false,
    isChangeVolume: false,
    volume: 100,
    slideIndexs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    scrollToRight: [true, true, true, true, true, true, true, true, true, true],
    slideSelectors: [
        ".tab-home .playlist--container .row__item.item--playlist",
        ".tab-home .album--container .row__item.item--album",
        ".tab-home .mv--container .row__item.item--mv",
        ".tab-home .artist--container .row__item.item--artist",
        ".tab--explore .radio--container .row__item.item--radio",
        ".tab--explore .singer-slide--container .singer__slide-item",
        ".tab--explore .new-playlist--container .row__item.item--new-playlist",
        ".tab--explore .fav-artist--container .row__item.item--fav-artist",
        ".tab--radio .radio--container .row__item.item--radio",
        ".tab--following .singer-slide--container .singer__slide-item",
    ],

    listPlaylist: [
        {
            name: "V-Pop: The A-List",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist1.jpg",
        },
        {
            name: "Rồi Tới Luôn",
            creator: "Nal",
            image: "./assets/image/playlists/playlist2.jpg",
        },
        {
            name: "Nhạc Q.Tế",
            creator: "Lạc Trôi",
            image: "./assets/image/playlists/playlist3.jpg",
        },
        {
            name: "Những bản hit của Rap Việt",
            creator: "Bigcityboi",
            image: "./assets/image/playlists/playlist4.jpg",
        },
        {
            name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist5.jpg",
        },
        {
            name: "Những bản nhạc Dance hay nhất",
            creator: "Đạt Tấn",
            image: "./assets/image/playlists/playlist6.jpg",
        },
        {
            name: "Em Hát Ai Nghe",
            creator: "Ngọc Trâm",
            image: "./assets/image/playlists/playlist7.jpg",
        },
        {
            name: "Chill cùng Đen Vâu",
            creator: "Trà My",
            image: "./assets/image/playlists/playlist8.jpg",
        },
        {
            name: "Những bản hit hay nhất của Sơn Tùng MTP",
            creator: "Nguyễn Thành Công",
            image: "./assets/image/playlists/playlist9.jpg",
        },
        {
            name: "Thế Giới V-Pop Vol. 3",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist10.jpg",
        },
        {
            name: "BodyTalk",
            creator: "Lâm Huy",
            image: "./assets/image/playlists/playlist11.jpg",
        },
        {
            name: "Playlist Này Chill Phết",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist12.jpg",
        },
        {
            name: "BlackJack",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist13.jpg",
        },
        {
            name: "4U - On Repeat",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist14.jpg",
        },
        {
            name: "Những Bài Hát Hay Nhất Của Mr. Siro",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist15.jpg",
        },
        {
            name: "Top EDM Songs Of 2018",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist16.jpg",
        },
        {
            name: "Giai Điệu Và Trào Lưu Gây Sốt",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist17.jpg",
        },
        {
            name: "Những Bài Hát Hay Nhất Của HKT",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist18.jpg",
        },
        {
            name: "100% Gây Nghiện",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist19.jpg",
        },
        {
            name: "Nhạc Việt Được Nghe Nhiều Nhất",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist20.jpg",
        },
        {
            name: "Dance Việt Hay Nhất",
            creator: "Zing MP3",
            image: "./assets/image/playlists/playlist21.jpg",
        },
    ],

    listSong: [
        [
            {
                name: "Cứ Chill Thôi",
                singer: ["Chillies", "Suni Hạ Linh", "Rhymastic"],
                path: "./assets/music/listSong1/song1.mp3",
                image: "./assets/image/music/listSong1/song1.jpg",
                duration: "04:30",
            },
            {
                name: "Crush",
                singer: ["WN", "Vani", "An An"],
                path: "./assets/music/listSong1/song2.mp3",
                image: "./assets/image/music/listSong1/song2.jpg",
                duration: "03:18",
            },
            {
                name: "Vô Tình",
                singer: ["Xesi", "Hoaprox"],
                path: "./assets/music/listSong1/song3.mp3",
                image: "./assets/image/music/listSong1/song3.jpg",
                duration: "04:33",
            },
            {
                name: "Because I'm Stupid",
                singer: ["SS501"],
                path: "./assets/music/listSong1/song4.flac",
                image: "./assets/image/music/listSong1/song4.jpg",
                duration: "04:20",
            },
            {
                name: "Mama Boy",
                singer: ["AMEE"],
                path: "./assets/music/listSong1/song5.mp3",
                image: "./assets/image/music/listSong1/song5.jpg",
                duration: "03:24",
            },
            {
                name: "Cửu Vĩ Hồ",
                singer: ["Yun", "Dr A"],
                path: "./assets/music/listSong1/song6.mp3",
                image: "./assets/image/music/listSong1/song6.jpg",
                duration: "06:05",
            },
            {
                name: "Anh Đã Quen Với Cô Đơn",
                singer: ["Soobin Hoàng Sơn"],
                path: "./assets/music/listSong1/song7.mp3",
                image: "./assets/image/music/listSong1/song7.jpg",
                duration: "03:55",
            },
            {
                name: "Túy Âm",
                singer: ["Xesi", "Masew", "Nhật Nguyễn"],
                path: "./assets/music/listSong1/song8.mp3",
                image: "./assets/image/music/listSong1/song8.jpg",
                duration: "03:22",
            },
            {
                name: "Kém Duyên",
                singer: ["Rum", "NIT", "Masew"],
                path: "./assets/music/listSong1/song9.mp3",
                image: "./assets/image/music/listSong1/song9.jpg",
                duration: "03:44",
            },
            {
                name: "Tình Bạn Diệu Kì",
                singer: ["AMEE", "Ricky Star", "Lăng LD"],
                path: "./assets/music/listSong1/song10.flac",
                image: "./assets/image/music/listSong1/song10.jpg",
                duration: "03:08",
            },
            {
                name: "Em Có Nghe",
                singer: ["Kha"],
                path: "./assets/music/listSong1/song11.mp3",
                image: "./assets/image/music/listSong1/song11.jpg",
                duration: "04:15",
            },
            {
                name: "Lạc Trôi",
                singer: ["Sơn Tùng M-TP"],
                path: "./assets/music/listSong1/song12.mp3",
                image: "./assets/image/music/listSong1/song12.jpg",
                duration: "03:53",
            },
            {
                name: "Một Năm Mới Bình An",
                singer: ["Sơn Tùng MTP"],
                path: "./assets/music/listSong1/song13.mp3",
                image: "./assets/image/music/listSong1/song13.jpg",
                duration: "04:07",
            },
            {
                name: "Hongkong1 (Official Version)",
                singer: ["Nguyễn Trọng Tài", "San Ji", "Double X"],
                path: "./assets/music/listSong1/song14.mp3",
                image: "./assets/image/music/listSong1/song14.jpg",
                duration: "04:13",
            },
            {
                name: "Gác Lại Âu Lo",
                singer: ["Da LAB", "Miu Lê"],
                path: "./assets/music/listSong1/song15.mp3",
                image: "./assets/image/music/listSong1/song15.jpg",
                duration: "04:42",
            },
            {
                name: "Chạy Ngay Đi",
                singer: ["Sơn Tùng MTP"],
                path: "./assets/music/listSong1/song16.mp3",
                image: "./assets/image/music/listSong1/song16.jpg",
                duration: "04:08",
            },
            {
                name: "Cùng Anh",
                singer: ["Ngọc Dolil", "Hagi", "STee"],
                path: "./assets/music/listSong1/song17.mp3",
                image: "./assets/image/music/listSong1/song17.jpg",
                duration: "03:17",
            },
            {
                name: "Hãy Trao Cho Anh",
                singer: ["Sơn Tùng MTP"],
                path: "./assets/music/listSong1/song18.mp3",
                image: "./assets/image/music/listSong1/song18.jpg",
                duration: "04:05",
            },
            {
                name: "Tộc Ca",
                singer: ["Phúc Du", "SONBEAT"],
                path: "./assets/music/listSong1/song19.mp3",
                image: "./assets/image/music/listSong1/song19.jpg",
                duration: "03:11",
            },
            {
                name: "Thiên Lý Ơi",
                singer: ["Jack", "Bikay"],
                path: "./assets/music/listSong1/song20.mp3",
                image: "./assets/image/music/listSong1/song20.jpg",
                duration: "04:16",
            },
            {
                name: "Phố Đã Lên Đèn",
                singer: ["Phố Đã Lên Đèn"],
                path: "./assets/music/listSong1/song21.mp3",
                image: "./assets/image/music/listSong1/song21.jpg",
                duration: "04:04",
            },
        ],
        [
            {
                name: "Rồi Tới Luôn",
                singer: ["Nal"],
                path: "./assets/music/listSong2/song1.mp3",
                image: "./assets/image/music/listSong2/song1.jpg",
                duration: "04:02",
            },
            {
                name: "Yêu Là Cưới",
                singer: ["PHÁT HỒ X2X"],
                path: "./assets/music/listSong2/song2.mp3",
                image: "./assets/image/music/listSong2/song2.jpg",
                duration: "02:57",
            },
            {
                name: "Độ Tộc 2",
                singer: ["Masew", "Độ Mixi", "Phúc Du", "Pháo"],
                path: "./assets/music/listSong2/song3.mp3",
                image: "./assets/image/music/listSong2/song3.jpg",
                duration: "03:21",
            },
            {
                name: "Chúng Ta Của Hiện Tại",
                singer: ["Sơn Tùng M-TP"],
                path: "./assets/music/listSong2/song4.mp3",
                image: "./assets/image/music/listSong2/song4.jpg",
                duration: "14:50",
            },
            {
                name: "Em Không Hiểu",
                singer: ["Changg", "Minh Huy"],
                path: "./assets/music/listSong2/song5.mp3",
                image: "./assets/image/music/listSong2/song5.jpg",
                duration: "03:57",
            },
            {
                name: "Đã Lỡ Yêu Em Nhiều",
                singer: ["JustaTee"],
                path: "./assets/music/listSong2/song6.mp3",
                image: "./assets/image/music/listSong2/song6.jpg",
                duration: "04:21",
            },
            {
                name: "Cưới Đi",
                singer: ["2T", "ChangC"],
                path: "./assets/music/listSong2/song7.mp3",
                image: "./assets/image/music/listSong2/song7.jpg",
                duration: "04:45",
            },
            {
                name: "Ái Nộ",
                singer: ["Masew", "Khoi Vu"],
                path: "./assets/music/listSong2/song8.mp3",
                image: "./assets/image/music/listSong2/song8.jpg",
                duration: "03:06",
            },
            {
                name: "Thằng Điên",
                singer: ["JustaTee", "Phương Ly"],
                path: "./assets/music/listSong2/song9.mp3",
                image: "./assets/image/music/listSong2/song9.jpg",
                duration: "04:46",
            },
            {
                name: "Yêu Đơn Phương",
                singer: ["OnlyC", "Karik"],
                path: "./assets/music/listSong2/song10.mp3",
                image: "./assets/image/music/listSong2/song10.jpg",
                duration: "05:02",
            },
            {
                name: "Trời Giấu Trời Mang Đi",
                singer: ["AMEE", "VIRUSS"],
                path: "./assets/music/listSong2/song11.mp3",
                image: "./assets/image/music/listSong2/song11.jpg",
                duration: "04:24",
            },
            {
                name: "Ex's Hate Me",
                singer: ["B Ray", "Masew", "AMEE"],
                path: "./assets/music/listSong2/song12.mp3",
                image: "./assets/image/music/listSong2/song12.jpg",
                duration: "04:27",
            },
            {
                name: "The PlayAh(Special Performance / Official Music Video)",
                singer: ["Soobin", "SlimV"],
                path: "./assets/music/listSong2/song13.mp3",
                image: "./assets/image/music/listSong2/song13.jpg",
                duration: "08:26",
            },
            {
                name: "Muộn Rồi Mà Sao Còn",
                singer: ["Sơn Tùng MTP"],
                path: "./assets/music/listSong2/song14.mp3",
                image: "./assets/image/music/listSong2/song14.jpg",
                duration: "04:48",
            },
            {
                name: "Cưới Thôi",
                singer: ["Masew", "B Ray", "TAP"],
                path: "./assets/music/listSong2/song15.mp3",
                image: "./assets/image/music/listSong2/song15.jpg",
                duration: "03:01",
            },
            {
                name: "Mượn Rượu Tỏ Tình",
                singer: ["Big Daddy", "Emily"],
                path: "./assets/music/listSong2/song16.mp3",
                image: "./assets/image/music/listSong2/song16.jpg",
                duration: "03:25",
            },
            {
                name: "Yêu Một Người Có Lẽ",
                singer: ["Lou Hoàng", "Miu Lê"],
                path: "./assets/music/listSong2/song17.mp3",
                image: "./assets/image/music/listSong2/song17.jpg",
                duration: "04:24",
            },
            {
                name: "Anh Không Đòi Quà",
                singer: ["OnlyC", "Karik"],
                path: "./assets/music/listSong2/song18.mp3",
                image: "./assets/image/music/listSong2/song18.jpg",
                duration: "03:19",
            },
            {
                name: "Đi Đu Đưa Đi",
                singer: ["Bích Phương"],
                path: "./assets/music/listSong2/song19.mp3",
                image: "./assets/image/music/listSong2/song19.jpg",
                duration: "03:43",
            },
            {
                name: "BlackJack",
                singer: ["Soobin", "Binz"],
                path: "./assets/music/listSong2/song20.webm",
                image: "./assets/image/music/listSong2/song20.jpg",
                duration: "03:34",
            },
        ],
        [
            {
                name: "Cheating On You",
                singer: ["Charlie Puth"],
                path: "./assets/music/listSong3/song1.mp3",
                image: "./assets/image/music/listSong3/song1.jpg",
                duration: "03:16",
            },
            {
                name: "I Do",
                singer: ["911"],
                path: "./assets/music/listSong3/song2.mp3",
                image: "./assets/image/music/listSong3/song2.jpg",
                duration: "03:21",
            },
            {
                name: "Reality",
                singer: ["Lost Frequencies", "Janieck Devy"],
                path: "./assets/music/listSong3/song3.mp3",
                image: "./assets/image/music/listSong3/song3.jpg",
                duration: "02:38",
            },
            {
                name: "Attention",
                singer: ["Charlie Puth"],
                path: "./assets/music/listSong3/song4.mp3",
                image: "./assets/image/music/listSong3/song4.jpg",
                duration: "03:28",
            },
            {
                name: "Monster",
                singer: ["Katie Sky"],
                path: "./assets/music/listSong3/song5.mp3",
                image: "./assets/image/music/listSong3/song5.jpg",
                duration: "03:48",
            },

            {
                name: "Faded",
                singer: ["Alan Walker"],
                path: "./assets/music/listSong3/song6.mp3",
                image: "./assets/image/music/listSong3/song6.jpg",
                duration: "03:32",
            },
            {
                name: "Save Me",
                singer: ["DEAMN"],
                path: "./assets/music/listSong3/song7.mp3",
                image: "./assets/image/music/listSong3/song7.jpg",
                duration: "03:04",
            },
            {
                name: "Havana",
                singer: ["Camila Cabello", "Young Thug"],
                path: "./assets/music/listSong3/song8.mp3",
                image: "./assets/image/music/listSong3/song8.jpg",
                duration: "03:37",
            },
            {
                name: "The River",
                singer: ["Axel Johansson"],
                path: "./assets/music/listSong3/song9.mp3",
                image: "./assets/image/music/listSong3/song9.jpg",
                duration: "03:31",
            },
            {
                name: "Rendezvous",
                singer: ["Deamn"],
                path: "./assets/music/listSong3/song10.mp3",
                image: "./assets/image/music/listSong3/song10.jpg",
                duration: "03:11",
            },
            {
                name: "Way Back",
                singer: ["Vicetone", "Cozi Zuehlsdorff"],
                path: "./assets/music/listSong3/song11.mp3",
                image: "./assets/image/music/listSong3/song11.jpg",
                duration: "03:28",
            },
            {
                name: "Peaches",
                singer: ["Justin Bieber", "Daniel Caesar", "Giveon"],
                path: "./assets/music/listSong3/song12.mp3",
                image: "./assets/image/music/listSong3/song12.jpg",
                duration: "03:17",
            },
            {
                name: "Stay",
                singer: ["The Kid LAROI", "Justin Bieber"],
                path: "./assets/music/listSong3/song13.mp3",
                image: "./assets/image/music/listSong3/song13.jpg",
                duration: "02:37",
            },
            {
                name: "Nevada",
                singer: ["Vicetone"],
                path: "./assets/music/listSong3/song14.mp3",
                image: "./assets/image/music/listSong3/song14.jpg",
                duration: "03:28",
            },
            {
                name: "Hero",
                singer: ["Cash Cash", "Christina Perri"],
                path: "./assets/music/listSong3/song15.mp3",
                image: "./assets/image/music/listSong3/song15.jpg",
                duration: "03:16",
            },
            {
                name: "Mood",
                singer: ["24Kgoldn"],
                path: "./assets/music/listSong3/song16.mp3",
                image: "./assets/image/music/listSong3/song16.jpg",
                duration: "05:32",
            },
        ],
        [
            {
                name: "Eyes - Đôi mắt",
                singer: ["G.Ducky"],
                path: "./assets/music/listSong4/song1.mp3",
                image: "./assets/image/music/listSong4/song1.jpg",
                duration: "03:25",
            },
            {
                name: "Giàu Vì Bạn Sang Vì Vợ",
                singer: ["RPT MCK"],
                path: "./assets/music/listSong4/song2.mp3",
                image: "./assets/image/music/listSong4/song2.jpg",
                duration: "04:45",
            },
            {
                name: "Walk On Da Street",
                singer: ["16 Typh", "16 BrT"],
                path: "./assets/music/listSong4/song3.mp3",
                image: "./assets/image/music/listSong4/song3.jpg",
                duration: "03:14",
            },
            {
                name: "CHƠI",
                singer: ["HIEUTHUHAI", "MANBO"],
                path: "./assets/music/listSong4/song4.mp3",
                image: "./assets/image/music/listSong4/song4.jpg",
                duration: "04:15",
            },
            {
                name: "Thủ Đô Cypher",
                singer: ["RPT Orijinn", "LOW G", "RZMas", "RPT MCK"],
                path: "./assets/music/listSong4/song5.mp3",
                image: "./assets/image/music/listSong4/song5.jpg",
                duration: "02:54",
            },

            {
                name: "Buông Hàng",
                singer: ["Young Milo"],
                path: "./assets/music/listSong4/song6.mp3",
                image: "./assets/image/music/listSong4/song6.jpg",
                duration: "02:51",
            },
            {
                name: "Người Chơi Hệ Đẹp",
                singer: ["16 Typh"],
                path: "./assets/music/listSong4/song7.mp3",
                image: "./assets/image/music/listSong4/song7.jpg",
                duration: "02:01",
            },
            {
                name: "Ghé Qua",
                singer: ["Dick ", "PC", "Tofu"],
                path: "./assets/music/listSong4/song8.mp3",
                image: "./assets/image/music/listSong4/song8.jpg",
                duration: "04:28",
            },
            {
                name: "Đìu Anh Luôn Giữ Kín Trong Tym",
                singer: ["RPT MCK", "tlinh", "2pillz "],
                path: "./assets/music/listSong4/song9.mp3",
                image: "./assets/image/music/listSong4/song9.jpg",
                duration: "03:23",
            },
            {
                name: "Xích Thêm Chút",
                singer: ["RPT Groovie", "TLinh", "RPT MCK"],
                path: "./assets/music/listSong4/song10.mp3",
                image: "./assets/image/music/listSong4/song10.jpg",
                duration: "04:04",
            },
            {
                name: "Tay To",
                singer: ["RPT MCK", "RPT PhongKhin"],
                path: "./assets/music/listSong4/song11.mp3",
                image: "./assets/image/music/listSong4/song11.jpg",
                duration: "02:45",
            },
            {
                name: "SIMPLE LOVE",
                singer: ["Obito", "Seachains", "Davis", "Lena"],
                path: "./assets/music/listSong4/song12.mp3",
                image: "./assets/image/music/listSong4/song12.jpg",
                duration: "03:57",
            },
            {
                name: "Va Vào Giai Điệu Này",
                singer: ["RPT MCK"],
                path: "./assets/music/listSong4/song13.mp3",
                image: "./assets/image/music/listSong4/song13.jpg",
                duration: "03:21",
            },
            {
                name: "Em Gái",
                singer: ["Blaise", "Low G"],
                path: "./assets/music/listSong4/song14.mp3",
                image: "./assets/image/music/listSong4/song14.jpg",
                duration: "02:28",
            },
            {
                name: "OK",
                singer: ["Binz"],
                path: "./assets/music/listSong4/song15.mp3",
                image: "./assets/image/music/listSong4/song15.jpg",
                duration: "02:34",
            },
            {
                name: "Gene",
                singer: ["Binz"],
                path: "./assets/music/listSong4/song16.mp3",
                image: "./assets/image/music/listSong4/song16.jpg",
                duration: "04:03",
            },
            {
                name: "They Said",
                singer: ["Binz"],
                path: "./assets/music/listSong4/song17.mp3",
                image: "./assets/image/music/listSong4/song17.jpg",
                duration: "03:56",
            },
        ],
    ],

    listAlbum: [
        {
            name: "Golden Hour",
            image: "./assets/image/albums/album1.jpg",
        },
        {
            name: "Boycold (Mini Album)",
            image: "./assets/image/albums/album2.jpg",
        },
        {
            name: "Red",
            image: "./assets/image/albums/album3.jpg",
        },
        {
            name: "Người Yêu Cũ (Gửi Cho Anh 2) (Mini Album)",
            image: "./assets/image/albums/album4.jpg",
        },
        {
            name: "Querencia (Mini Album)",
            image: "./assets/image/albums/album5.jpg",
        },
        {
            name: "Justice (Mini Album)",
            image: "./assets/image/albums/album6.jpg",
        },
        {
            name: "Teenage Dream",
            image: "./assets/image/albums/album7.jpg",
        },
        {
            name: "The Off Season",
            image: "./assets/image/albums/album8.jpg",
        },
        {
            name: "The Album",
            image: "./assets/image/albums/album9.jpg",
        },
        {
            name: "Random Access Memories",
            image: "./assets/image/albums/album10.jpg",
        },
        {
            name: "Map of the Soul: 7",
            image: "./assets/image/albums/album11.jpg",
        },
        {
            name: "Chromatica",
            image: "./assets/image/albums/album12.jpg",
        },
        {
            name: "My Turn",
            image: "./assets/image/albums/album13.jpg",
        },
        {
            name: "Meet the Woo 2",
            image: "./assets/image/albums/album14.jpg",
        },
        {
            name: "Lemonade",
            image: "./assets/image/albums/album15.jpg",
        },
    ],

    listMV: [
        {
            name: "Một Bước Yêu Vạn Dặm Đau",
            author: ["Mr. Siro"],
            time: "11:54",
            authorAvatar: "./assets/image/mvArtists/artist1.jpg",
            image: "./assets/image/MVs/mv1.jpg",
        },
        {
            name: "Simple Love",
            author: ["Obito", "Seachains", "Davis"],
            time: "03:54",
            authorAvatar: "./assets/image/mvArtists/artist2.jpg",
            image: "./assets/image/MVs/mv2.jpg",
        },
        {
            name: "Lời Yêu Ngây Dại",
            author: ["Kha"],
            time: "04:33",
            authorAvatar: "./assets/image/mvArtists/artist3.jpg",
            image: "./assets/image/MVs/mv3.jpg",
        },
        {
            name: "24H",
            author: ["LyLy", "Magazine"],
            time: "04:18",
            authorAvatar: "./assets/image/mvArtists/artist4.jpg",
            image: "./assets/image/MVs/mv4.jpg",
        },
        {
            name: "Nước Mắt Em Lau Bằng Tình Yêu Mới",
            author: ["Da LAB", "Tóc Tiên"],
            time: "05:45",
            authorAvatar: "./assets/image/mvArtists/artist5.jpg",
            image: "./assets/image/MVs/mv5.jpg",
        },

        {
            name: "Yêu Đơn Phương",
            author: ["OnlyC", "Karik"],
            time: "05:02",
            authorAvatar: "./assets/image/mvArtists/artist6.jpg",
            image: "./assets/image/MVs/mv6.jpg",
        },
        {
            name: "Phía Sau Em",
            author: ["Kay Trần", "Binz"],
            time: "04:06",
            authorAvatar: "./assets/image/mvArtists/artist7.jpg",
            image: "./assets/image/MVs/mv7.jpg",
        },
        {
            name: "Mình Yêu nhau đi",
            author: ["Bích Phương"],
            time: "03:52",
            authorAvatar: "./assets/image/mvArtists/artist8.jpg",
            image: "./assets/image/MVs/mv8.jpg",
        },
        {
            name: "Đừng Về Trễ (Acoustic Version)",
            author: ["Sơn Tùng MTP"],
            time: "04:41",
            authorAvatar: "./assets/image/mvArtists/artist9.jpg",
            image: "./assets/image/MVs/mv9.jpg",
        },
        {
            name: "Hơn Cả Yêu",
            author: ["Đức Phúc"],
            time: "05:43",
            authorAvatar: "./assets/image/mvArtists/artist10.jpg",
            image: "./assets/image/MVs/mv10.jpg",
        },
        {
            name: "Vì Yêu Cứ Đâm Đầu",
            author: ["MIN", "Đen", "JustaTee"],
            time: "04:01",
            authorAvatar: "./assets/image/mvArtists/artist11.jpg",
            image: "./assets/image/MVs/mv11.jpg",
        },
        {
            name: "Sao Anh Chưa Về Nhà",
            author: ["AMEE", "Ricky Star"],
            time: "04:36",
            authorAvatar: "./assets/image/mvArtists/artist12.jpg",
            image: "./assets/image/MVs/mv12.jpg",
        },
        {
            name: "Bigcityboi",
            author: ["Binz", "Touliver"],
            time: "03:43",
            authorAvatar: "./assets/image/mvArtists/artist13.jpg",
            image: "./assets/image/MVs/mv13.jpg",
        },
        {
            name: "Em Không Sai Chúng Ta Sai",
            author: ["ERIK"],
            time: "06:28",
            authorAvatar: "./assets/image/mvArtists/artist14.jpg",
            image: "./assets/image/MVs/mv14.jpg",
        },
    ],

    listArtist: [
        {
            name: "Binz",
            followers: "265K",
            image: "./assets/image/artists/artist1.jpg",
        },
        {
            name: "Phương Ly",
            followers: "77K",
            image: "./assets/image/artists/artist2.jpg",
        },
        {
            name: "AMEE",
            followers: "317K",
            image: "./assets/image/artists/artist3.jpg",
        },
        {
            name: "MCK",
            followers: "52K",
            image: "./assets/image/artists/artist4.jpg",
        },
        {
            name: "Sơn Tùng M-TP",
            followers: "2.1M",
            image: "./assets/image/artists/artist5.jpg",
        },

        {
            name: "Mr. Siro",
            followers: "735K",
            image: "./assets/image/artists/artist6.jpg",
        },
        {
            name: "Han Sara",
            followers: "158K",
            image: "./assets/image/artists/artist7.jpg",
        },
        {
            name: "Bích Phương",
            followers: "368K",
            image: "./assets/image/artists/artist8.jpg",
        },
        {
            name: "Soobin",
            followers: "435K",
            image: "./assets/image/artists/artist9.jpg",
        },
        {
            name: "Chi Dân",
            followers: "516K",
            image: "./assets/image/artists/artist10.jpg",
        },
    ],

    listRadio: [
        {
            name: "Xone Radio",
            viewers: "476",
            image: "./assets/image/tabExplore/radios/radio1.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach1.jpg",
        },
        {
            name: "On Air",
            viewers: "143",
            image: "./assets/image/tabExplore/radios/radio2.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach2.jpg",
        },
        {
            name: "Chạm",
            viewers: "323",
            image: "./assets/image/tabExplore/radios/radio3.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach3.jpg",
        },
        {
            name: "Acoustic",
            viewers: "665",
            image: "./assets/image/tabExplore/radios/radio4.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach4.jpg",
        },
        {
            name: "Rap Việt",
            viewers: "257",
            image: "./assets/image/tabExplore/radios/radio5.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach5.jpg",
        },

        {
            name: "US-UK",
            viewers: "116",
            image: "./assets/image/tabExplore/radios/radio6.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach6.jpg",
        },
        {
            name: "K-POP",
            viewers: "80",
            image: "./assets/image/tabExplore/radios/radio7.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach7.jpg",
        },
        {
            name: "V-POP",
            viewers: "50",
            image: "./assets/image/tabExplore/radios/radio8.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach8.jpg",
        },
        {
            name: "Bolero",
            viewers: "59",
            image: "./assets/image/tabExplore/radios/radio9.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach9.jpg",
        },
        {
            name: "The One Radio",
            viewers: "44",
            image: "./assets/image/tabExplore/radios/radio10.jpg",
            logo: "./assets/image/tabExplore/radios/attachs/attach10.jpg",
        },
    ],

    listLabel: [
        {
            image: "./assets/image/tabExplore/labels/label1.jpg",
        },
        {
            image: "./assets/image/tabExplore/labels/label2.jpg",
        },
        {
            image: "./assets/image/tabExplore/labels/label3.jpg",
        },
    ],

    listSingerSlide: [
        {
            image: "./assets/image/tabExplore/singerSlides/singer1.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer2.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer3.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer4.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer5.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer6.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer7.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer8.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer9.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer10.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer11.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer12.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer13.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer14.png",
        },
        {
            image: "./assets/image/tabExplore/singerSlides/singer15.png",
        },
    ],

    listEvent: [
        {
            name: "Sinh Nhật Sao x B Ray",
            time: "00:00 Thứ Hai, 11 tháng 10",
            fans: [
                "./assets/image/tabExplore/events/fans/singer1/fan1.jpg",
                "./assets/image/tabExplore/events/fans/singer1/fan2.jpg",
                "./assets/image/tabExplore/events/fans/singer1/fan3.jpg",
                "./assets/image/tabExplore/events/fans/singer1/fan4.jpg",
                "./assets/image/tabExplore/events/fans/singer1/fan5.jpg",
            ],
            fanAmount: "1K",
            image: "./assets/image/tabExplore/events/event1.jpg",
            action: "Mở RADIO",
        },
        {
            name: "Sinh Nhật Sao x ERIK",
            time: "00:00 Thứ Tư, 13 tháng 10",
            fans: [
                "./assets/image/tabExplore/events/fans/singer2/fan1.jpg",
                "./assets/image/tabExplore/events/fans/singer2/fan2.jpg",
                "./assets/image/tabExplore/events/fans/singer2/fan3.jpg",
                "./assets/image/tabExplore/events/fans/singer2/fan4.jpg",
                "./assets/image/tabExplore/events/fans/singer2/fan5.jpg",
            ],
            fanAmount: "330",
            image: "./assets/image/tabExplore/events/event2.jpg",
            action: "Chúc Mừng",
        },
        {
            name: "Sinh Nhật Sao x Đông Nhi",
            time: "00:00 Thứ Tư, 13 tháng 10",
            fans: [
                "./assets/image/tabExplore/events/fans/singer3/fan1.jpg",
                "./assets/image/tabExplore/events/fans/singer3/fan2.jpg",
                "./assets/image/tabExplore/events/fans/singer3/fan3.jpg",
                "./assets/image/tabExplore/events/fans/singer3/fan4.jpg",
                "./assets/image/tabExplore/events/fans/singer3/fan5.jpg",
                "./assets/image/tabExplore/events/fans/singer3/fan6.jpg",
            ],
            fanAmount: "361",
            image: "./assets/image/tabExplore/events/event3.jpg",
            action: "Chúc Mừng",
        },
    ],

    listBrand: [
        {
            image: "./assets/image/tabExplore/brands/brand1.png",
        },
        {
            image: "./assets/image/tabExplore/brands/brand2.png",
        },
        {
            image: "./assets/image/tabExplore/brands/brand3.png",
        },
        {
            image: "./assets/image/tabExplore/brands/brand4.png",
        },
        {
            image: "./assets/image/tabExplore/brands/brand5.png",
        },
        {
            image: "./assets/image/tabExplore/brands/brand6.png",
        },
        {
            image: "./assets/image/tabExplore/brands/brand7.png",
        },
        {
            image: "./assets/image/tabExplore/brands/brand8.png",
        },
    ],

    listFavArtist: [
        {
            explication: "Từ thư viện của bạn",
            name: "Chi Dân",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist1/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist1/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist1/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist1/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist1.jpg",
        },
        {
            explication: "Vì bạn nghe nhiều",
            name: "Binz",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist2/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist2/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist2/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist2/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist2.jpg",
        },
        {
            explication: "Từ thư viện của bạn",
            name: "Sơn Tùng M-TP",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist3/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist3/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist3/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist3/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist3.jpg",
        },
        {
            explication: "Có thể bạn thích",
            name: "Hương Ly",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist4/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist4/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist4/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist4/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist4.jpg",
        },
        {
            explication: "Bạn đã quan tâm",
            name: "AMEE",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist5/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist5/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist5/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist5/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist5.jpg",
        },
        {
            explication: "Vì bạn nghe nhiều",
            name: "Bích Phương",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist6/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist6/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist6/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist6/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist6.jpg",
        },
        {
            explication: "Vì bạn yêu thích",
            name: "Han Sara",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist7/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist7/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist7/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist7/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist7.jpg",
        },
        {
            explication: "Bạn nghe gần đây",
            name: "SOOBIN",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist8/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist8/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist8/song3.png",
                "./assets/image/tabExplore/favArtists/artistSongs/artist8/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist8.jpg",
        },
        {
            explication: "Có thể bạn thích",
            name: "Tlinh",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist9/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist9/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist9/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist9/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist9.jpg",
        },
        {
            explication: "Vì bạn yêu thích",
            name: "Mamamoo",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist10/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist10/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist10/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist10/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist10.jpg",
        },
        {
            explication: "Bạn nghe gần đây",
            name: "Mr. Siro",
            songs: [
                "./assets/image/tabExplore/favArtists/artistSongs/artist11/song1.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist11/song2.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist11/song3.jpg",
                "./assets/image/tabExplore/favArtists/artistSongs/artist11/song4.jpg",
            ],
            image: "./assets/image/tabExplore/favArtists/artist11.jpg",
        },
    ],

    listNewPlaylist: [
        {
            name: "Chưa Bao Giờ Em Quên",
            singer: ["Hương Ly"],
            order: "1",
            time: "01.10.2021",
            image: "./assets/image/tabExplore/newPlaylists/newPlaylist1.jpg",
        },
        {
            name: "Có Một Tình Yêu Gọi Là Chia Tay",
            singer: ["Tăng Phúc", "Trương Thảo Nhi"],
            order: "2",
            time: "06.10.2021",
            image: "./assets/image/tabExplore/newPlaylists/newPlaylist2.jpg",
        },
        {
            name: "vâng anh đi đi (liu riu version)",
            singer: ["Bích Phương"],
            order: "3",
            time: "07.10.2021",
            image: "./assets/image/tabExplore/newPlaylists/newPlaylist3.jpg",
        },
        {
            name: "Vậy Là Ta Mất Nhau",
            singer: ["Khải Đăng"],
            order: "4",
            time: "04.10.2021",
            image: "./assets/image/tabExplore/newPlaylists/newPlaylist4.jpg",
        },
        {
            name: "Bao Lâu Ta Lại Yêu Một Người",
            singer: ["Doãn Hiếu", "B."],
            order: "5",
            time: "02.10.2021",
            image: "./assets/image/tabExplore/newPlaylists/newPlaylist5.jpg",
        },
        {
            name: "Anh Biết Em Không Tin",
            singer: ["Kidz"],
            order: "6",
            time: "07.10.2021",
            image: "./assets/image/tabExplore/newPlaylists/newPlaylist6.jpg",
        },
    ],

    specialPlaylists: [
        {
            header: {
                explication: "Vì bạn đã nghe",
                topicName: "Nguyễn Trọng Tài",
                image: "./assets/image/tabExplore/specialPlaylists/headerAvatars/playlistList1.jpg",
            },
            playlists: [
                {
                    name: "Những Bài Hát Hay Nhất Của Nguyễn Trọng Tài",
                    artists: ["Nguyễn Trọng Tài"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist1.jpg",
                },
                {
                    name: "Cớ Sao Em Buồn (Single)",
                    artists: ["Nguyễn Trọng Tài"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist2.jpg",
                },
                {
                    name: "Ngừng Mơ (Single)",
                    artists: ["Nguyễn Trọng Tài"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist3.jpg",
                },
                {
                    name: "Hongkong1 (Single)",
                    artists: ["Nguyễn Trọng Tài"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist4.jpg",
                },
                {
                    name: "Cớ Sao Em Buồn (Remixes EP)",
                    artists: ["Nguyễn Trọng Tài"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList1/playlist5.jpg",
                },
            ],
        },
        {
            header: {
                explication: "Bạn đã nghe nhiều",
                topicName: "Hip-Hop",
                image: "./assets/image/tabExplore/specialPlaylists/headerAvatars/playlistList2.jpg",
            },
            playlists: [
                {
                    name: "Today's Rap Hits",
                    artists: ["Drake", "Kanye West", "Lil Nas X"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist1.jpg",
                },
                {
                    name: "Rap Việt Cũ Mà Hay",
                    artists: ["Rhymastic", "LK", "Yanbi"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist2.jpg",
                },
                {
                    name: "Rap Việt Cực Chất",
                    artists: ["16 Typh", "Tage", "ICD"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist3.jpg",
                },
                {
                    name: "Rap Việt Kết Hợp Cực Chất",
                    artists: ["G5R Squad", "Phan Ann", "Tlinh"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist4.jpg",
                },
                {
                    name: "Rap Việt Thả Thính Hay Nhất",
                    artists: ["OSAD", "HIEUTHUHAI", "Obito"],
                    image: "./assets/image/tabExplore/specialPlaylists/playlistSongs/playlistList2/playlist5.jpg",
                },
            ],
        },

        // Tab Radio
        {
            header: {
                explication: "Nghe lại",
                topicName: "Xone Radio",
                image: "./assets/image/tabRadio/specialPlaylists/headerAvatars/playlistList1.jpg",
            },
            playlists: [
                {
                    name: "XONE with Stars",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist1.jpg",
                },
                {
                    name: "BREAKFAST XONE",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist2.jpg",
                },
                {
                    name: "DRIVEXONE",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist3.jpg",
                },
                {
                    name: "XONE REWIND",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist4.jpg",
                },
                {
                    name: "The Daily XONE",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist5.jpg",
                },
            ],
        },
        {
            header: {
                explication: "Podcast",
                topicName: "Vietcetera",
                image: "./assets/image/tabRadio/specialPlaylists/headerAvatars/playlistList2.jpg",
            },
            playlists: [
                {
                    name: "Have A Sip",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist1.jpg",
                },
                {
                    name: "Vietnam Innovators",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist2.jpg",
                },
                {
                    name: "Bít Tất",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist3.jpg",
                },
                {
                    name: "M.A.D",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist4.jpg",
                },
                {
                    name: "Tóm Lại Là",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList2/playlist5.jpg",
                },
            ],
        },
        {
            header: {
                explication: "Nghe lại",
                topicName: "On Air",
                image: "./assets/image/tabRadio/specialPlaylists/headerAvatars/playlistList3.jpg",
            },
            playlists: [
                {
                    name: "Nhạc Mới Mỗi Ngày",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList3/playlist1.jpg",
                },
                {
                    name: "Chạm x Sao",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList3/playlist2.jpg",
                },
                {
                    name: "Chạm x Bạn",
                    artists: [],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList3/playlist3.jpg",
                },
            ],
        },
        {
            header: {
                explication: "",
                topicName: "",
                image: "./assets/image/tabRadio/specialPlaylists/headerAvatars/playlistList1.jpg",
            },
            playlists: [
                {
                    name: "",
                    artists: ["", "", ""],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist1.jpg",
                },
                {
                    name: "",
                    artists: ["", "", ""],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist2.jpg",
                },
                {
                    name: "",
                    artists: ["", "", ""],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist3.jpg",
                },
                {
                    name: "",
                    artists: ["", "", ""],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist4.jpg",
                },
                {
                    name: "",
                    artists: ["", "", ""],
                    image: "./assets/image/tabRadio/specialPlaylists/playlistSongs/playlistList1/playlist5.jpg",
                },
            ],
        },
    ],

    normalPlaylists: [
        {
            header: "Có Thể Bạn Muốn Nghe",
            playlists: [
                {
                    name: "Mở Đầu Hoàn Hảo",
                    artists: ["AMEE", "ERIK", "Hoàng Duyên"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList1/playlist1.jpg",
                },
                {
                    name: "V-Pop: The A-List",
                    artists: ["Bích Phương", "Hoàng Thùy Linh", "ERIK"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList1/playlist2.jpg",
                },
                {
                    name: "Tỏ Tình Nhẹ Nhàng Thôi",
                    artists: ["Quân A.P", "Changg", "Hoàng Duyên"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList1/playlist3.jpg",
                },
                {
                    name: "Nhạc Trẻ Gây Nghiện",
                    artists: ["AMEE", "Quân A.P", "ERIK"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList1/playlist4.jpg",
                },
                {
                    name: "HIT-MAKER: Nổi Bật",
                    artists: ["LyLy", "RIN9", "Vương Anh Tú"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList1/playlist5.jpg",
                },
            ],
        },
        {
            header: "Lựa chọn hôm nay",
            playlists: [
                {
                    name: "Đóa Hồng Nhạc Việt",
                    artists: ["Những đóa hồng tạo nên dấu ấn trên thị trường âm nhạc Việt hiện nay"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList2/playlist1.jpg",
                },
                {
                    name: "V-Pop Rising",
                    artists: ["Những tài năng Gen Z của V-Pop đáng nghe nhất hôm nay"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList2/playlist2.jpg",
                },
                {
                    name: "Everyday EDM",
                    artists: ["Khởi động mỗi ngày với những ca khúc EDM sôi động"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList2/playlist3.jpg",
                },
                {
                    name: "K-Pop Newbie",
                    artists: ["Những hạt giống tiềm năng của K-Pop thế hệ mới"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList2/playlist4.jpg",
                },
                {
                    name: "Anime Now",
                    artists: ["Nhạc Anime hot nhất ở thời điểm hiện tại có ngay tại đây"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList2/playlist5.jpg",
                },
            ],
        },
        {
            header: "XONE's CORNER",
            playlists: [
                {
                    name: "New Releases",
                    artists: ["Những ca khúc tạo nên xu hướng âm nhạc mới!"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList3/playlist1.jpg",
                },
                {
                    name: "Today's Electronic",
                    artists: ["Cuồng nhiệt, đầy mê hoặc với giai điệu Electronic"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList3/playlist2.jpg",
                },
                {
                    name: "XONE's Picks",
                    artists: ["Top ca khúc XONE chọn riêng cho hôm nay"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList3/playlist3.jpg",
                },
                {
                    name: "Lany's Flavour",
                    artists: ["Thưởng thức âm nhạc từ nghệ sỹ bạn yêu thích"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList3/playlist4.jpg",
                },
                {
                    name: "Asia Tune",
                    artists: ["Bài hát tuyển chọn cho người chơi hệ châu Á"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList3/playlist5.jpg",
                },
            ],
        },
        {
            header: "Mixtape Yêu Thích",
            playlists: [
                {
                    name: "",
                    artists: ["SOOBIN", "Binz", "MCK"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList4/playlist1.jfif",
                },
                {
                    name: "",
                    artists: ["Jack", "Uyên Linh", "Tino"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList4/playlist2.jfif",
                },
                {
                    name: "",
                    artists: ["MCK", "tlinh", "Khắc Hưng"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList4/playlist3.jfif",
                },
                {
                    name: "",
                    artists: ["Rhymastic", "Phương Ly", "Touliver"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList4/playlist4.jfif",
                },
                {
                    name: "",
                    artists: ["Hương Ly", "Huy Nam (A#)", "Trúc Nhân"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList4/playlist5.jfif",
                },
            ],
        },
        {
            header: "Nhạc mới mỗi ngày",
            playlists: [
                {
                    name: "Nhạc Việt Tháng 10/2021",
                    artists: ["Nguyên Hà", "Đức Phúc", "Bích Phương"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList5/playlist1.jpg",
                },
                {
                    name: "Nhạc Âu Mỹ Tháng 10/2021",
                    artists: ["Jeremy Zucker", "Lil Nas X", "Nicki Minaj"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList5/playlist2.jpg",
                },
                {
                    name: "Nhạc Hàn Tháng 10/2021",
                    artists: ["CL", "aespa", "Key"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList5/playlist3.jpg",
                },
                {
                    name: "Nhạc Hoa Tháng 10/2021",
                    artists: ["Trình Hưởng", "PANTHEPACK", "Sunnee Dương Vân Tình"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList5/playlist4.jpg",
                },
                {
                    name: "Indie Việt Tháng 10/2021",
                    artists: ["Duongg", "Starry Night", "Charles Huỳnh"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList5/playlist5.jpg",
                },
            ],
        },
        {
            header: "Top 100",
            playlists: [
                {
                    name: "Top 100 Nhạc Dance Việt Nam Hay Nhất",
                    artists: [],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList6/playlist1.jpg",
                },
                {
                    name: "Top 100 Bài Hát Nhạc Trẻ Hay Nhất",
                    artists: [],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList6/playlist2.jpg",
                },
                {
                    name: "Top 100 Pop Âu Mỹ Hay Nhất",
                    artists: [],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList6/playlist3.jpg",
                },
                {
                    name: "Top 100 Nhạc Electronic/Dance Âu Mỹ Hay Nhất",
                    artists: [],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList6/playlist4.jpg",
                },
                {
                    name: "Top 100 Nhạc Hàn Quốc Hay Nhất",
                    artists: [],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList6/playlist5.jpg",
                },
            ],
        },
        {
            header: "",
            playlists: [
                {
                    name: "Ta Thương Người, Người Chẳng Thương Ta (Single)",
                    artists: ["Huy Vạc"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList7/playlist1.jpg",
                },
                {
                    name: "Ôm Trọn Nỗi Đau (Single)",
                    artists: ["Tino", "Lưu Hiền Trinh"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList7/playlist2.jpg",
                },
                {
                    name: "Bao Lâu Ta Lại Yêu Một Người (Lofi Version) (Single)",
                    artists: ["Doãn Hiếu"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList7/playlist3.jpg",
                },
                {
                    name: "vâng anh đi đi (liu riu version) (Single)",
                    artists: ["Bích Phương"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList7/playlist4.jpg",
                },
                {
                    name: "Đêm Mưa (Single)",
                    artists: ["Duy Ngọc"],
                    image: "./assets/image/tabExplore/normalPlaylists/playlistList7/playlist5.jpg",
                },
            ],
        },
        {
            header: "Khám phá Podcast",
            playlists: [
                {
                    name: "the finding audio",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist1.jpg",
                },
                {
                    name: "Oddly Normal",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist2.jpg",
                },
                {
                    name: "Amateur Psychology - Tay mơ học đời bằng Tâm lý học",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist3.jpg",
                },
                {
                    name: "Hà Nội FM",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist4.jpg",
                },
                {
                    name: "Ghi-đông Radio",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist5.jpg",
                },
                {
                    name: "Trạm Radio",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist6.jpg",
                },
                {
                    name: "Chàng-Ngốc-Già",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist7.jpg",
                },
                {
                    name: "Lam's Story",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist8.jpg",
                },
                {
                    name: "Luyện Nghe Tiếng Anh Hàng Ngày - Ms Thuỷ KISS English",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist9.jpg",
                },
                {
                    name: "Nằm nghe đọc truyện - Hathaya Audio",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist10.jpg",
                },
                {
                    name: "Cạn Ly",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist11.jpg",
                },
                {
                    name: "Nghe Lỏm",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist12.jpg",
                },
                {
                    name: "Tóm Tắt Sách Cùng Tanya",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist13.jpg",
                },
                {
                    name: "Career Success | Take Away Series",
                    artists: [],
                    image: "./assets/image/tabRadio/normalPlaylists/playlist14.jpg",
                },
            ],
        },
    ],

    listSongCharts: [
        {
            name: "Chưa Bao Giờ Em Quên",
            rank: "1",
            singers: ["Hương Ly"],
            time: "05:11",
            path: "./assets/music/listSong1/song1.mp3",
            image: "./assets/image/tabCharts/song1.jpg",
        },
        {
            name: "Yêu Là Cưới",
            rank: "2",
            singers: ["Phát Hồ", "X2X"],
            time: "02:59",
            path: "./assets/music/listSong1/song2.mp3",
            image: "./assets/image/tabCharts/song2.jpg",
        },
        {
            name: "Em Là Con Thuyền Cô Đơn",
            rank: "3",
            singers: ["Thái Học"],
            time: "05:04",
            path: "./assets/music/listSong1/song3.mp3",
            image: "./assets/image/tabCharts/song3.jpg",
        },
        {
            name: "Khuê Mộc Lang",
            rank: "4",
            singers: ["Hương Ly", "Jombie"],
            time: "03:26",
            path: "./assets/music/listSong1/song4.flac",
            image: "./assets/image/tabCharts/song4.jpg",
        },
        {
            name: "Yêu Là Cưới (Remix)",
            rank: "5",
            singers: ["Phát Hồ", "DinhLong", "X2X"],
            time: "03:50",
            path: "./assets/music/listSong1/song5.mp3",
            image: "./assets/image/tabCharts/song5.jpg",
        },
        {
            name: "Thay Lòng",
            rank: "6",
            singers: ["DIMZ", "TVk", "NH4T"],
            time: "04:36",
            path: "./assets/music/listSong1/song6.mp3",
            image: "./assets/image/tabCharts/song6.jpg",
        },
        {
            name: "Rồi Tới Luôn",
            rank: "7",
            singers: ["Nal"],
            time: "04:07",
            path: "./assets/music/listSong1/song7.mp3",
            image: "./assets/image/tabCharts/song7.jpg",
        },
        {
            name: "Có Một Tình Yêu Gọi Là Chia Tay",
            rank: "8",
            singers: ["Tăng Phúc", "Trương Thảo Nhi"],
            time: "04:18",
            path: "./assets/music/listSong1/song8.mp3",
            image: "./assets/image/tabCharts/song8.jpg",
        },
        {
            name: "Cưới Luôn Được Không?",
            rank: "9",
            singers: ["YuniBoo", "Goctoi Mixer"],
            time: "04:02",
            path: "./assets/music/listSong1/song9.mp3",
            image: "./assets/image/tabCharts/song9.jpg",
        },
        {
            name: "Bao Lâu Ta Lại Yêu Một Người",
            rank: "10",
            singers: ["Doãn Hiếu", "B."],
            time: "03:51",
            path: "./assets/music/listSong1/song10.flac",
            image: "./assets/image/tabCharts/song10.jpg",
        },
        {
            name: "Thương Nhau Tới Bến",
            rank: "11",
            singers: ["Nal"],
            time: "04:55",
            path: "./assets/music/listSong1/song11.mp3",
            image: "./assets/image/tabCharts/song11.jpg",
        },
        {
            name: "Đông Phai Mờ Dáng Ai",
            rank: "12",
            singers: ["DatKaa", "QT Beatz"],
            time: "04:40",
            path: "./assets/music/listSong1/song12.mp3",
            image: "./assets/image/tabCharts/song12.jpg",
        },
        {
            name: "Nhắn Rằng Anh Nhớ Em",
            rank: "13",
            singers: ["Đình Dũng", "ACV"],
            time: "05:12",
            path: "./assets/music/listSong1/song13.mp3",
            image: "./assets/image/tabCharts/song13.jpg",
        },
        {
            name: "Dịu Dàng Em Đến",
            rank: "14",
            singers: ["ERIK", "NinjaZ"],
            time: "03:05",
            path: "./assets/music/listSong1/song14.mp3",
            image: "./assets/image/tabCharts/song14.jpg",
        },
        {
            name: "Em Hát Ai Nghe",
            rank: "15",
            singers: ["Orange"],
            time: "04:39",
            path: "./assets/music/listSong1/song15.mp3",
            image: "./assets/image/tabCharts/song15.jpg",
        },
        {
            name: "Vậy Là Ta Mất Nhau",
            rank: "16",
            singers: ["Khải Đăng"],
            time: "04:15",
            path: "./assets/music/listSong1/song16.mp3",
            image: "./assets/image/tabCharts/song16.jpg",
        },
        {
            name: "vâng anh đi đi (liu riu version)",
            rank: "17",
            singers: ["Bích Phương"],
            time: "03:39",
            path: "./assets/music/listSong1/song17.mp3",
            image: "./assets/image/tabCharts/song17.jpg",
        },
        {
            name: "Nếu Lúc Trước Em Đừng Tới",
            rank: "18",
            singers: ["Phạm Đình Thái Ngân", "Hino"],
            time: "03:35",
            path: "./assets/music/listSong1/song18.mp3",
            image: "./assets/image/tabCharts/song18.jpg",
        },
        {
            name: "Cô Đơn Dành Cho Ai",
            rank: "19",
            singers: ["Lee Ken", "Nal"],
            time: "03:51",
            path: "./assets/music/listSong1/song19.mp3",
            image: "./assets/image/tabCharts/song19.jpg",
        },
        {
            name: "MONEY",
            rank: "20",
            singers: ["LISA"],
            time: "02:48",
            path: "./assets/music/listSong1/song20.mp3",
            image: "./assets/image/tabCharts/song20.jpg",
        },
        {
            name: "Yêu Mà Chưa Dám Nói",
            rank: "21",
            singers: ["Thanh Hưng"],
            time: "04:25",
            path: "./assets/music/listSong1/song21.mp3",
            image: "./assets/image/tabCharts/song21.jpg",
        },
        {
            name: "Độ Tộc 2",
            rank: "22",
            singers: ["Độ Mixi", "Pháo", "Phúc Du", "Masew"],
            time: "03:21",
            path: "./assets/music/listSong1/song22.mp3",
            image: "./assets/image/tabCharts/song22.jpg",
        },
        {
            name: "Chiều Đồng Quê",
            rank: "23",
            singers: ["H2K"],
            time: "03:20",
            path: "./assets/music/listSong1/song23.mp3",
            image: "./assets/image/tabCharts/song23.jpg",
        },
        {
            name: "Túp Lều Vàng",
            rank: "24",
            singers: ["Nguyễn Đình Vũ", "ACV"],
            time: "03:31",
            path: "./assets/music/listSong1/song24.mp3",
            image: "./assets/image/tabCharts/song24.jpg",
        },
        {
            name: "LALISA",
            rank: "25",
            singers: ["LISA"],
            time: "03:21",
            path: "./assets/music/listSong1/song25.mp3",
            image: "./assets/image/tabCharts/song25.jpg",
        },
        {
            name: "Sai Cách Yêu",
            rank: "26",
            singers: ["Lê Bảo Bình"],
            time: "05:42",
            path: "./assets/music/listSong1/song26.mp3",
            image: "./assets/image/tabCharts/song26.jpg",
        },
        {
            name: "có hẹn với thanh xuân",
            rank: "27",
            singers: ["MONSTAR"],
            time: "03:38",
            path: "./assets/music/listSong1/song27.mp3",
            image: "./assets/image/tabCharts/song27.jpg",
        },
        {
            name: "Em Nào Có Tội",
            rank: "28",
            singers: ["Thương Võ", "ACV"],
            time: "04:51",
            path: "./assets/music/listSong1/song28.mp3",
            image: "./assets/image/tabCharts/song28.jpg",
        },
        {
            name: "Nhắn Tới Khoảng Trời Em",
            rank: "29",
            singers: ["Quân A.P"],
            time: "03:55",
            path: "./assets/music/listSong1/song29.mp3",
            image: "./assets/image/tabCharts/song29.jpg",
        },
        {
            name: "Em Hứa Thế Nào",
            rank: "30",
            singers: ["Như Việt", "ACV"],
            time: "04:25",
            path: "./assets/music/listSong1/song30.mp3",
            image: "./assets/image/tabCharts/song30.jpg",
        },
    ],

    listPost: [
        [
            {
                name: "Jang Mi",
                time: "14 tháng 10 lúc 11:07",
                content: "Hoa Nào Không Phai (Cover by JangMi)",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist1.jpg",
                image: "./assets/image/tabFollowing/posts/artist1.jpg",
            },
            {
                name: "BlackBi",
                time: "14 tháng 10 lúc 00:40",
                content: "CÁC EM ĐỪNG DIỄN TRƯỚC MẶT CHỊ NỮA - Chị chỉ vui đùa các em giải trí thôi =))",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist2.jpg",
                image: "./assets/image/tabFollowing/posts/artist2.jpg",
            },
            {
                name: "Yến Tatoo",
                time: "14 tháng 10 lúc 00:37",
                content: "Nhìn như này ai biết đanh đá đâu",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist3.jpg",
                image: "./assets/image/tabFollowing/posts/artist3.jpg",
            },
            {
                name: "Quang Hùng MasterD",
                time: "14 tháng 10 lúc 00:36",
                content: "😚",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist4.jpg",
                image: "./assets/image/tabFollowing/posts/artist4.jpg",
            },
            {
                name: "Chi Pu",
                time: "14 tháng 10 lúc 00:36",
                content: "Sự thật thì luôn luôn đơn giản nhưng people make it complicated, nên là mình cứ enjoy cái moment này",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist5.jpg",
                image: "./assets/image/tabFollowing/posts/artist5.jpg",
            },
        ],
        [
            {
                name: "Lăng LD",
                time: "14 tháng 10 lúc 00:35",
                content: "Tươm tất vậy đó để đi mua cà phê take away chứ chưa được ngồi lại nghen😁",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist6.jpg",
                image: "./assets/image/tabFollowing/posts/artist6.jpg",
            },
            {
                name: "Sơn Tùng M-TP",
                time: "14 tháng 10 lúc 00:33",
                content: "Anh đoán tên em là Google. </br>Bởi vì em có mọi thứ mà anh đang tìm kiếm ❤️",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist7.jpg",
                image: "./assets/image/tabFollowing/posts/artist7.jpg",
            },
            {
                name: "JayKii",
                time: "14 tháng 10 lúc 00:31",
                content: "Lưới trời lồng lộng </br>Chạy đâu cho thoát 😎",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist8.jpg",
                image: "./assets/image/tabFollowing/posts/artist8.jpg",
            },
            {
                name: "Ninh Dương Lan Ngọc",
                time: "14 tháng 10 lúc 14:36",
                content:
                        "Ở nhà có photo Rio chụp dì sửa mệt nghỉ luôn 🤣🤣🤣 chỉnh qài ko đẹp được luôn. Xin nhờ 500 anh em chỉnh dùm Ngọc tấm hình này sao mà coa thể đẹp đươc nhỉ",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist9.jpg",
                image: "./assets/image/tabFollowing/posts/artist9.jpg",
            },
            {
                name: "Bích Phương",
                time: "14 tháng 10 lúc 14:35",
                content: "Tối nay lại liu riu 1 tí nhé 😘",
                authorAvatar: "./assets/image/tabFollowing/avatars/artist10.jpg",
                image: "./assets/image/tabFollowing/posts/artist10.jpg",
            },
        ],
    ],

    listExploreSlide: [
        {
            image: "./assets/image/tabExplore/slides/slide1.jpg",
        },
        {
            image: "./assets/image/tabExplore/slides/slide2.jpg",
        },
        {
            image: "./assets/image/tabExplore/slides/slide3.jpg",
        },
        {
            image: "./assets/image/tabExplore/slides/slide4.jpg",
        },
        {
            image: "./assets/image/tabExplore/slides/slide5.jpg",
        },
        {
            image: "./assets/image/tabExplore/slides/slide6.jpg",
        },
        {
            image: "./assets/image/tabExplore/slides/slide7.jpg",
        },
        {
            image: "./assets/image/tabExplore/slides/slide8.jpg",
        },
    ],

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
        this.songs = this.listSong[this.currentPlaylist];
        songLists.forEach((songList, songIndex) => {
            const songListHTML = this.songs.map((song, index) => {
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
                        ${song.singer.map((singer, index) => {
                    return ` <a href="#" class="is-ghost">${singer}</a>`;
                })}
                    </p>
                  </div>
                </div>
                <span class="playlist__song-time">${song.duration}</span>
                <div class="playlist__song-option ${songIndex === 1 && "song--tab"}">
                    <div class="playlist__song-btn btn--mic option-btn hide-on-mobile">
                        <i class="btn--icon song__icon bi bi-mic-fill"></i>
                    </div>
                    <div class="playlist__song-btn btn--heart option-btn">
                        <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                    </div>
                    <div class="playlist__song-btn option-btn ${songIndex === 0 && "hide-on-tablet"}">
                        <i class="btn--icon bi bi-three-dots"></i>
                    </div>
                </div>
              </div>
                `;
            });
            songList.innerHTML = songListHTML.join("");
        });
    },

    renderTapSong() {
        this.songs = this.listSong[this.currentPlaylist];
        tapsongLists.forEach((songList, songIndex) => {
            const songListHTML = this.songs.map((song, index) => {
                return `
                <div class="playlist__list-song ${this.currentIndex === index ? "active" : ""}" data-index="${index}">
                <div class="playlist__song-info">
                    ${`
                        <div class="playlist__song-check">
                            <input type="checkbox" name="" id="playlist__check-${index}" class="mr-10" style="display: none">
                            <label for="playlist__check-${index}"></label>
                        </div>
                        <i class="bi bi-music-note-beamed mr-10"></i>
                    `}
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
                        ${song.singer.map((singer, index) => {
                    return ` <a href="#" class="is-ghost">${singer}</a>`;
                })}
                    </p>
                  </div>
                </div>
                <span class="playlist__song-time">${song.duration}</span>
                <div class="playlist__song-option song--tab">
                    <div class="playlist__song-btn btn--mic option-btn hide-on-mobile">
                        <i class="btn--icon song__icon bi bi-mic-fill"></i>
                    </div>
                    <div class="playlist__song-btn btn--heart option-btn">
                        <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                    </div>
                    <div class="playlist__song-btn option-btn">
                        <i class="btn--icon bi bi-three-dots"></i>
                    </div>
                </div>
              </div>
                `;
            });
            songList.innerHTML = songListHTML.join("");
        });
    },

    renderPlaylist() {
        playlistLists.forEach((playlistList, playlistIndex) => {
            // const createNewPlaylistHTML = `
            //   <div class="col col-lg-2-4 col-md-3 col-4 mb-30">
            //     <div class="row__item  playlist--create item--playlist">
            //       <div class="row__item-container create--new-playlist">
            //         <i class="bi bi-plus-lg"></i>
            //         <span>Tạo playlist mới</span>
            //       </div>
            //     </div>
            //   </div>
            // `
            const playlistHTML = this.listPlaylist.map((song, index) => {
                return `
                <div class="col col-lg-2-4 col-md-3 col-4 mb-30">
                    <div class="row__item item--playlist">
                        <div class="row__item-container">
                            <div class="row__item-display br-5">
                            <div class="row__item-img" style="background: url('${song.image}') no-repeat center center / cover"></div>
                            <div class="row__item-actions">
                                <div class="playlist__song-btn btn--heart option-btn">
                                    <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                                </div>
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
                            <a href="#" class="row__info-name is-active">${song.name}</a>
                            <h3 class="row__info-creator">${song.creator}</h3>
                            </div>
                        </div>
                    </div>
                </div>
                `;
            });
            //const HTMLs = createNewPlaylistHTML.concat(playlistHTML);
            playlistList.innerHTML = playlistHTML.join("");
        });
    },

    renderAlbum() {
        albumLists.forEach((albumList, albumIndex) => {
            const albumtHTML = this.listAlbum.map((song, index) => {
                return `
            <div class="col col-lg-2-4 col-md-3 col-4 mb-30">
                <div class="row__item item--playlist">
                    <div class="row__item-container">
                        <div class="row__item-display br-5">
                        <div class="row__item-img" style="background: url('${song.image}') no-repeat center center / cover"></div>
                        <div class="row__item-actions">
                            <div class="playlist__song-btn btn--heart option-btn">
                                <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                            </div>
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
                        <a href="#" class="row__info-name is-active">${song.name}</a>
                        </div>
                    </div>
                </div>
            </div>
            `;
            });
            albumList.innerHTML = albumtHTML.join("");
        });
    },

    renderMV() {
        mvLists.forEach((mvList, mvlistIndex) => {
            const mvlistHTML = this.listMV.map((mv, index) => {
                return `
                <div class="col col-lg-4 col-md-6 col-12 mb-30">
                <div class="row__item item--mv">
                  <div class="row__item-container">
                    <div class="row__item-display br-5">
                      <div class="row__item-img img--mv" style="background: url('${
                        mv.image
                        }') no-repeat center center / cover"></div>
                      <div class="row__item-actions">
                        <div class="action-btn mv--btn-close">
                          <i class="bi bi-x-lg btn--icon"></i>
                        </div>
                        <div class="btn--play-playlist">
                          <div class="control-btn btn-toggle-play">
                            <i class="bi bi-play-circle"></i>
                          </div>
                        </div>
                      </div>
                      <div class="overlay"></div>
                      <div class="mv__time">${mv.time}</div>
                    </div>
                    <div class="row__item-info">
                      <div class="media__left">
                        <div class="media__thumb" style="background: url('${
                        mv.authorAvatar
                        }') no-repeat center center / cover"></div>
                        <div class="media__info">
                          <a href="#" class="row__info-name is-active">${mv.name}</a>
                          <h3 class="row__info-creator">
                            ${mv.author.map((author, index) => {
                            return ` <a href="#" class="is-ghost">${author}</a>`;
                        })}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `;
            });
            mvList.innerHTML = mvlistHTML.join("");
        });
    },

    renderArtist() {
        artistLists.forEach((artistList, artistIndex) => {
            const artistlistHTML = this.listArtist.map((artist, index) => {
                return `
                <div class="col col-lg-2-4 col-md-3 col-6 mb-30">
                <div class="row__item item--artist">
                  <div class="row__item-container">
                    <div class="row__item-display">
                      <div class="row__item-img" style="background: url('${artist.image}') no-repeat center center / cover"></div>
                      <div class="row__item-actions">
                        <div class="btn--play-playlist">
                          <div class="control-btn btn-toggle-play">
                            <i class="bi bi-play-circle"></i>
                          </div>
                        </div>
                      </div>
                      <div class="overlay"></div>
                    </div>
                    <div class="row__item-info artist--info">
                      <div href="#" class="row__info-name is-ghost text-center is-oneline">
                      ${artist.name} &#9733;
                      </div>
                      <div class="row__info-creator text-center">${artist.followers} quan tâm</div>
                      <div class="row__item-btn">
                        <div class="button button-primary">
                          <i class="bi bi-check2"></i>
                          <span>ĐÃ QUAN TÂM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                `;
            });
            artistList.innerHTML = artistlistHTML.join("");
        });
    },

    renderExploreSlide() {
        exploreSlideLists.forEach((exploreSlideList, slideIndex) => {
            const exploreSlideListHTML = `
        <div class="explore__slide-move">
            <div class="slide__move-btn btn--prev">
                <i class="bi bi-chevron-left"></i>
            </div>
            <div class="slide__move-btn btn--next">
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>
        ${this.listExploreSlide.map((exploreSlide, index) => {
                return `
              <div class="col col-lg-4 col-md-4 col-6 explore__slide-item
                  ${index === 0 && "first next"}
                  ${index === 1 && "second"}
                  ${index === 2 && "third"}
                  ${index === 3 && "fourth"}
                  ${index > 3 && index < app.listExploreSlide.length - 1 && "fifth"}
                  ${index === app.listExploreSlide.length - 1 && "sixth prev"} ">
                  <div class="row__item-display">
                      <div class="explore__slide-img row__item-img img--rec" style="background: url('${
                        exploreSlide.image
                        }') no-repeat center center / cover"></div>
                  </div>
              </div>
            `;
            })}
      `;
            exploreSlideList.innerHTML = exploreSlideListHTML;
        });
    },

    renderRadios() {
        radioLists.forEach((radioList, radioIndex) => {
            const radioListHTML = this.listRadio.map((radio, index) => {
                return `
                <div class="col col-lg-1-7 col-md-2-4 col-3">
                <div class="row__item item--radio">
                  <div class="row__item-container">
                    <div class="item--has-attach">
                      <svg class="svg row__item-frame" fill="transparent" width="100%" height="100%" viewBox="0 0 100 100">
                        <circle class="svg-circle-bg" stroke="rgba(255, 255, 255, 0.2)" cx="50" cy="50" r="48.75" stroke-width="2.5"></circle>
                        <circle class="svg-circle" stroke="#ff4b4a" cx="50" cy="50" r="48.75" stroke-width="2.5" stroke-dasharray="306.3052837250048" stroke-dashoffset="249.81174688257516" style="transition: stroke-dashoffset 850ms ease-in-out 0s;"></circle>
                      </svg>
                      <div class="row__item-display is-rounded">
                        <div class="row__item-img img--square is-rounded" style="background: url('${radio.image}') no-repeat center center / contain"></div>
                        <div class="row__item-actions">
                          <div class="btn--play-playlist">
                            <div class="control-btn btn-toggle-play">
                              <i class="bi bi-play-circle"></i>
                            </div>
                          </div>
                        </div>
                        <div class="overlay"></div>
                      </div>
                      <div class="radio__label">
                        LIVE
                      </div>
                      <div class="radio__logo is-rounded">
                        <div class="radio__logo-img" style="background: url('${radio.logo}') no-repeat center center / cover"></div>
                      </div>
                    </div>
                    <div class="row__item-info radio--info">
                      <div class="info__title is-active is-oneline">
                      ${radio.name}
                      </div>
                      <div class="row__info-creator">${radio.viewers} đang nghe</div>
                    </div>
                  </div>
                </div>
              </div>
                `;
            });
            radioList.innerHTML = radioListHTML.join("");
        });
    },

    renderLabel() {
        labelLists.forEach((labelList, labelIndex) => {
            const labelListHTML = this.listLabel.map((label, index) => {
                return `
          <div class="col col-lg-4 col-md-6 col-6 mb-30">
          <div class="row__item item--label">
            <div class="row__item-container">
              <div class="row__item-display br-5">
                <div class="row__item-img img--label" style="background: url('${label.image}') no-repeat center center / cover"></div>
              </div>
            </div>
          </div>
        </div>
          `;
            });
            labelList.innerHTML = labelListHTML.join("");
        });
    },

    renderSingerSlide() {
        singerLists.forEach((singerList, singerIndex) => {
            const singerListHTML = `
        <div class="singer__slide-move hide-on-mobile">
          <div class="slide__move-btn btn--prev button--disabled">
              <i class="bi bi-chevron-left"></i>
          </div>
          <div class="slide__move-btn btn--next">
              <i class="bi bi-chevron-right"></i>
          </div>
        </div>
        ${app.listSingerSlide.map((singerSlide, index) => {
                return `
                <div class="col col-lg-2-4 col-md-3 col-4 singer__slide-item">
                    <div class="row__item-display">
                        <div class="singer__slide-img img--singer-slide" style="background: url('${singerSlide.image}') no-repeat center center / cover"></div>
                    </div>
                </div>
            `;
            })}
        `;
            singerList.innerHTML = singerListHTML;
        });
    },

    renderEvent() {
        eventLists.forEach((eventList, eventIndex) => {
            const eventListHTML = this.listEvent.map((event, index) => {
                return `
        <div class="col col-lg-4 col-md-6 col-12">
            <div class="row__item item--event">
              <div class="row__item-container">
                <div class="row__item-display br-5">
                  <div class="row__item-img img--mv" style="background: url('${
                        event.image
                        }') no-repeat center center / cover"></div>
                  <div class="blur"></div>
                  <div class="row__item-display-content">
                    <div class="display__content-label">Sự Kiện</div>
                    <h3 class="display__content-title">Sinh Nhật Sao x ${event.name}</h3>
                    <p class="display__content-time">${event.time}</p>
                </div>
                </div>
                <div class="row__item-info media">
                  <div class="media__left">
                    <div class="media__info">
                      <span class="info__title event--title is-active">Lượt chúc mừng</span>
                      <div class="info__avatar">
                        ${event.fans.map((fan) => {
                            return `
                            <div class="info__avatar-item">
                                <div class="info__avatar-img" style="background: url('${fan}') no-repeat center center / cover"></div>
                            </div>
                        `;
                        })}
                        <div class="info__avatar-item">
                            <p class="info__avatar-text">${event.fanAmount}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="media__content">
                    <button class="button button-primary event__button">
                      <span>${event.action}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
            });
            eventList.innerHTML = eventListHTML.join("");
        });
    },

    renderNewPlaylist() {
        newPlaylistLists.forEach((newPlaylistList, newPlaylistIndex) => {
            const newPlaylistHTML = this.listNewPlaylist.map((newPlaylist, index) => {
                return `
            <div class="col col-lg-4 col-md-6 col-12">
            <div class="row__item item--new-playlist">
              <div class="row__item-container">
                <div class="row__item-display br-5">
                  <div class="row__item-img" style="background: url('${
                        newPlaylist.image
                        }') no-repeat center center / cover"></div>
                  <div class="row__item-actions">
                        <div class="btn--play-playlist">
                          <div class="control-btn btn-toggle-play">
                            <i class="bi bi-play-circle"></i>
                          </div>
                        </div>
                      </div>
                  <div class="overlay"></div>
                </div>
                <div class="row__item-info new-playlist--info">
                  <a href="#" class="row__info-name is-twoline">${newPlaylist.name}</a>
                  <h3 class="row__info-creator">
                    ${newPlaylist.singer.map((singer, index) => {
                            return `
                            <a href="#" class="is-ghost">${singer}</a>
                        `;
                        })}
                  </h3>
                  <div class="row__item-detail">
                    <div class="info__detail-order">#${newPlaylist.order}</div>
                    <div class="info__detail-time">${newPlaylist.time}</div>
                  </div>
              </div>
              </div>
            </div>
          </div>
            `;
            });
            newPlaylistList.innerHTML = newPlaylistHTML.join("");
        });
    },

    renderFavArtist() {
        favArtistLists.forEach((favArtistList, favArtistIndex) => {
            const favArtistHTML = this.listFavArtist.map((favArtist, index) => {
                return `
                <div class="col col-lg-4 col-md-6 col-6">
                  <div class="row__item item--fav-artist">
                      <div class="row__item-container flex--top-left">
                          <div class="row__item-display br-5">
                              <div class="row__item-img img--square" style="background: url('${
                        favArtist.image
                        }') no-repeat center center / cover"></div>
                              <div class="row__item-actions">
                                  <div class="btn--fav-artist">
                                      <div class="control-btn btn-toggle-play">
                                          <i class="bi bi-play-circle"></i>
                                      </div>
                                  </div>
                              </div>
                              <div class="overlay"></div>
                              <div class="blur"></div>
                              <div class="row__item-display-content">
                                  <h3 class="display__content-explication is-oneline">${favArtist.explication}</h3>
                                  <p class="display__content-artist is-oneline">${favArtist.name}</p>
                                  <div class="display__content-list">
                                    ${favArtist.songs.map((song, index) => {
                            return `
                                            <div class="display__content-list-song">
                                                <div class="display__content-song-img" style="background: url('${song}') no-repeat center center / cover"></div>
                                            </div>
                                        `;
                        })}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;
            });
            favArtistList.innerHTML = favArtistHTML.join("");
        });
    },

    renderBrand() {
        brandLists.forEach((brandList, brandListIndex) => {
            const brandListHTML = this.listBrand.map((brand, index) => {
                return `
          <div class="col col-lg-1-5 col-md-3 col-4 container__footer-brand-item mb-30">
              <div class="footer__brand-container">
                  <div class="container__footer-brand-background img--rec"></div>
                  <img src="${brand.image}" alt="brand" class="container__footer-brand-img">
              </div>
          </div>
          `;
            });
            brandList.innerHTML = brandListHTML.join("");
        });
    },

    renderSpecialPlaylist() {
        specialPlaylistLists.forEach((specialPlaylistList, playlistListIndex) => {
            const specialPlaylistListHTML = `
                <div class="col col-lg-12 col-md-12 col-12">
                    <div class="container__header special__playlist-header">
                        <div class="special__header-display">
                            <img src="${app.specialPlaylists[playlistListIndex].header.image}" alt="">
                        </div>
                        <div class="special__header-info">
                            <div class="info__explication">${
                    app.specialPlaylists[playlistListIndex].header.explication
                    }</div>
                            <div class="info__topic-name is-active">${
                    app.specialPlaylists[playlistListIndex].header.topicName
                    }</div>
                        </div>
                    </div>
                </div>
                <div class="col col-lg-12 col-md-12 col-12">
                    <div class="row no-wrap special-playlist--container">
                        ${app.specialPlaylists[playlistListIndex].playlists.map((playlist, index) => {
                return `
                            <div class="col col-lg-2-4 col-md-3 col-4">
                            <div class="row__item item--playlist">
                                <div class="row__item-container">
                                    <div class="row__item-display br-5">
                                        <div class="row__item-img" style="background: url('${
                        playlist.image
                        }') no-repeat center center / cover"></div>
                                        <div class="row__item-actions">
                                            <div class="playlist__song-btn btn--heart option-btn">
                                                <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                                            </div>
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
                                    <div class="row__item-info explore--playlist-info">
                                        <a href="#" class="row__info-name ${
                        (playlistListIndex < 2 && "is-oneline") | "is-twoline"
                        }">${playlist.name}</a>
                                        <p class="info__artist">
                                        ${playlist.artists.map((artist, artistIndex) => {
                            return ` <a href="#" class="is-ghost">${artist}</a>`;
                        })}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            `;
            })}
                    </div>
                </div>
            `;
            specialPlaylistList.innerHTML = specialPlaylistListHTML;
        });
    },

    renderNormalPlaylist() {
        normalPlaylistLists.forEach((normalPlaylistList, playlistListIndex) => {
            const normalPlaylistListHTML = `
        ${
                    playlistListIndex != 6 &&
                    `
          <div class="col col-lg-12 col-md-12 col-12">
            <div class="container__header">
              <a href="#" class="container__header-title">
                <h3>${app.normalPlaylists[playlistListIndex].header}</h3>
              </a>
              <h3 class="container__header-subtitle">${app.normalPlaylists[playlistListIndex].header}</h3>
            </div>
          </div>
        `
                    }
        <div class="col col-lg-12 col-md-12 col-12">
          <div class="row ${playlistListIndex !== 7 && "no-wrap"} normal-playlist--container">
            ${app.normalPlaylists[playlistListIndex].playlists.map((playlist, index) => {
                return `
                  <div class="col col-lg-2-4 col-md-3 col-4 ${playlistListIndex === 7 && "mb-30"}">
                      <div class="row__item item--playlist">
                          <div class="row__item-container">
                              <div class="row__item-display br-5">
                                  <div class="row__item-img" style="background: url('${
                        playlist.image
                        }') no-repeat center center / cover"></div>
                                  <div class="row__item-actions">
                                      <div class="playlist__song-btn btn--heart option-btn">
                                          <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                                      </div>
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
                              <div class="row__item-info explore-playlist--info">
                                  ${
                        playlistListIndex != 3 &&
                        ` <a href="#" class="row__info-name ${
                        (playlistListIndex != 5 && playlistListIndex != 7 && "is-oneline") || "is-twoline"
                        }">${playlist.name}</a>`
                        }
                                  ${
                        playlistListIndex != 5 &&
                        `
                                    <p class="info__artist">
                                      ${playlist.artists.map((artist, artistIndex) => {
                            return ` <a href="#" class="${
                                    (playlistListIndex != 1 && playlistListIndex != 2 && "is-ghost") ||
                                    "is-description"
                                    }">${artist}</a>`;
                        })}
                                    </p>
                                  `
                        }
                              </div>
                          </div>
                      </div>
                  </div>
              `;
            })}
          </div>
        </div>
      `;
            normalPlaylistList.innerHTML = normalPlaylistListHTML;
        });
    },

    renderTabCharts() {
        const listChartHTML = this.listSongCharts.map((song, index) => {
            return `
            <div class="col col-lg-12 col-md-12 col-12">
            <div class="container__playlist">
              <div class="playlist__list-charts overflow-visible">
                <div class="playlist__list-song ${index > 9 && "song--not-expand"}">
                  <div class="playlist__song-info">
                    <div class="playlist__song-rank">
                      <div class="playlist__rank-number
                        ${index === 0 && "is-outline--blue"}
                        ${index === 1 && "is-outline--green"}
                        ${index === 2 && "is-outline--red"}
                        ${index > 2 && "is-outline--text"}
                      ">
                        ${song.rank}
                      </div>
                      <div class="playlist__rank-icon">
                        <i class="bi bi-dash-lg"></i>
                      </div>
                    </div>
                    <div class="playlist__song-thumb">
                        <img src="${song.image}">
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
                        ${song.singers.map((singer, index) => {
                return (app.innerHTML = ` <a href="#" class="is-ghost">${singer}</a>`);
            })}
                      </p>
                    </div>
                  </div>
                  <span class="playlist__song-time">${song.time}</span>
                  <div class="playlist__song-option song--tab media__right hide-on-mobile">
                    <div class="playlist__song-btn btn--mic option-btn">
                        <i class="btn--icon song__icon bi bi-mic-fill"></i>
                    </div>
                    <div class="playlist__song-btn btn--heart option-btn">
                        <i class="btn--icon song__icon icon--heart bi bi-heart-fill primary"></i>
                    </div>
                    <div class="playlist__song-btn option-btn">
                        <i class="btn--icon bi bi-three-dots"></i>
                    </div>
                </div>
                </div>
              </div>
            </div>
        </div>
            `;
        });
        tabChartLists.innerHTML = listChartHTML.join("");
    },

    renderPost() {
        postLists.forEach((postList, postIndex) => {
            const postListHTML = this.listPost[postIndex].map((post, index) => {
                return `
                <div class="story__item mb-30">
                    <div class="story__item-container">
                    <div class="story__item-header">
                        <div class="row__item-info media story__header-info">
                        <div class="media__left">
                            <div class="media__thumb is-rounded" style="background: url('${
                        post.authorAvatar
                        }') no-repeat center center / cover"></div>
                            <div class="media-info">
                            <div class="media__info-header">
                                <div class="info__title is-active is-oneline">${post.name}</div>
                                <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
                                <span class="follow-btn">Quan tâm</span>
                            </div>
                            <p class="info__time">
                                <a href="#" class="is-active">${post.time}</a>
                            </p>
                            </div>
                        </div>
                        </div>
                        <div class="story__header-content">
                        <span>${post.content}</span>
                        </div>
                    </div>
                    <div class="row__item-display br-5 story__item-display">
                        <div class="story__item-img
                            ${postIndex === 0 && index < 2 && "img--rec"}
                            ${postIndex === 0 && index === 2 && "img--rec-vertical"}
                            ${postIndex === 0 && index === 3 && "img--square"}
                            ${postIndex === 0 && index === 4 && "img--rec"}
                            ${postIndex === 1 && index < 4 && "img--square"}
                            ${postIndex === 1 && index === 4 && "img--rec"}
                        " style="background: url('${post.image}') no-repeat center center / cover"></div>
                    </div>
                    <div class="story__item-action">
                        <div class="action-btn story-btn--heart">
                            <i class="btn--icon icon--heart bi bi-heart"></i>
                            <span class="action__number">${Math.floor(Math.random() * 1000)}</span>
                        </div>
                        <div class="action-btn story-btn--comment">
                            <i class="btn--icon icon--comment bi bi-chat-dots"></i>
                            <span class="action__number">${Math.floor(Math.random() * 1000)}</span>
                        </div>
                    </div>
                    </div>
                </div>
                `;
            });
            postList.innerHTML = postListHTML.join("");
        });
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
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            },
        });
    },

    render: function () {
        this.renderSong();
        this.renderTapSong();
        this.renderPlaylist();
        this.renderAlbum();
        this.renderMV();
        this.renderArtist();
        this.renderRadios();
        this.renderLabel();
        this.renderSingerSlide();
        this.renderEvent();
        this.renderNewPlaylist();
        this.renderFavArtist();
        this.renderBrand();
        this.renderSpecialPlaylist();
        this.renderNormalPlaylist();
        this.renderTabCharts();
        this.renderPost();
        this.renderExploreSlide();
        this.renderModalTheme();
    },

    handleEvents: function () {
        const _this = this;
        const playBtns = Array.from($$(".btn-toggle-play.btn--play-song"));
        const listThemes = Array.from($$(".theme__container .theme__list"));
        const singerSlideMove = $(".tab--explore .singer-slide--container .singer__slide-move");
        const followingSingerSlideMove = $(".tab--following .singer-slide--container .singer__slide-move");
        const listSingersBtns = $$(".tab--explore .singer__slide-move .slide__move-btn");
        const followingListSingerBtns = $$(".tab--following .singer__slide-move .slide__move-btn");
        const slideMove = $(".explore__slide--container .explore__slide-move");
        const newPlaylistMove = $(".container__header-actions.new-playlist--move");
        const favArtistMove = $(".container__header-actions.fav-artist--move");
        const chartExpandBtn = $(".button.charts__expand-btn");
        const chartSongContainer = $(".row.chart--container");
        const storyActions = Array.from($$(".story__item-action"));

        // Handle shadow of sidebar
        sidebarSubnav.onscroll = function () {
            const scrollTop = sidebarSubnav.scrollY || sidebarSubnav.scrollTop;
            if (scrollTop > 10) {
                sidebarSubnav.classList.add("is-mask");
            } else {
                sidebarSubnav.classList.remove("is-mask");
            }
        };

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
                _this.renderSong();
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
                _this.renderSong();
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
                const heartIconBtn = e.target.closest(".btn--heart");
                const micIconBtn = e.target.closest(".btn--mic");

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

                //Handle when click on icons micro
                if (micIconBtn) {
                    const micIcon = micIconBtn.firstElementChild;
                    micIcon.classList.toggle("primary");
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

        // Handle when click on header search history
        searchHistory.onmousedown = (e) => {
            e.preventDefault();
        };

        // Handle when click navbar
        navbarItems.forEach((navbarItem, index) => {
            navbarItem.onclick = function () {
                $(".content__navbar-item.active").classList.remove("active");
                navbarItem.classList.add("active");

                $(".container__tab.active").classList.remove("active");
                containerTabs[index].classList.add("active");
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

        // Handle when click on expand sidebar button on tablet
        sidebarExpandBtn.onclick = (e) => {
            sidebar.classList.add("expand");
        };
        sidebarShrinkBtn.onclick = (e) => {
            sidebar.classList.remove("expand");
        };

        // Handle when click on icons heart
        const heartIconBtns = $$(".btn--heart");
        Array.from(heartIconBtns).forEach((heartIconBtn) => {
            heartIconBtn.onclick = (e) => {
                const heartIcon = heartIconBtn.firstElementChild;
                if (heartIcon.classList.contains("primary"))
                    heartIcon.classList.replace("bi-heart-fill", "bi-heart");
                else
                    heartIcon.classList.replace("bi-heart", "bi-heart-fill");
                heartIcon.classList.toggle("primary");
                e.stopPropagation();
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

        // Album
        albumScrollBtns[0].onclick = function () {
            _this.showSlides(-5, 1, albumLists[0], albumScrollBtns);
        };

        albumScrollBtns[1].onclick = function () {
            _this.showSlides(5, 1, albumLists[0], albumScrollBtns);
        };

        // MV
        mvScrollBtns[0].onclick = function () {
            _this.showSlides(-3, 2, mvLists[0], mvScrollBtns);
        };

        mvScrollBtns[1].onclick = function () {
            _this.showSlides(3, 2, mvLists[0], mvScrollBtns);
        };

        // Artist
        artistScrollBtns[0].onclick = function () {
            _this.showSlides(-5, 3, artistLists[0], artistScrollBtns);
        };

        artistScrollBtns[1].onclick = function () {
            _this.showSlides(5, 3, artistLists[0], artistScrollBtns);
        };

        // Explore radio
        exploreRadioMoveBtns[0].onclick = function () {
            _this.showSlides(-7, 4, radioLists[0], exploreRadioMoveBtns);
        };

        exploreRadioMoveBtns[1].onclick = function () {
            _this.showSlides(7, 4, radioLists[0], exploreRadioMoveBtns);
        };

        // Radio in tab Radio
        radioTabMoveBtns[0].onclick = function () {
            _this.showSlides(-7, 8, radioLists[1], radioTabMoveBtns);
        };

        radioTabMoveBtns[1].onclick = function () {
            _this.showSlides(7, 8, radioLists[1], radioTabMoveBtns);
        };

        // Handle when click on playlist item
        const playlistItems = $$(".tab-home .playlist--container .row__item.item--playlist");
        Array.from(playlistItems).forEach((playlist, index) => {
            playlist.onclick = function (e) {
                const playlistBtn = e.target.closest(".btn--play-playlist");
                _this.loadCurrentPlaylist(playlistBtn, index);
            };
        });

        const tabPlaylistItems = $$(".tab-playlist .playlist--container .row__item.item--playlist");
        Array.from(tabPlaylistItems).forEach((playlist, index) => {
            playlist.onclick = (e) => {
                const playlistBtn = e.target.closest(".btn--play-playlist");
                _this.loadCurrentPlaylist(playlistBtn, index);
            };
        });

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

        // Handle when click on explore slide show move buttons
        function exploreSlideShow() {
            _this.nextSlide();
            let autoMoveSlideId = setTimeout(exploreSlideShow, 4000);
            slideMove.onclick = (e) => {
                const prevBtn = e.target.closest(".slide__move-btn.btn--prev");
                const nextBtn = e.target.closest(".slide__move-btn.btn--next");

                if (prevBtn) {
                    _this.prevSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000);
                }

                if (nextBtn) {
                    _this.nextSlide();
                    clearTimeout(autoMoveSlideId);
                    autoMoveSlideId = setTimeout(exploreSlideShow, 4000);
                }
            };
        }
        exploreSlideShow();

        // Singer slide on explore tab
        function singerSlideShow(step, order, index, listBtns) {
            // Automatic slide
            if (_this.scrollToRight[order] === true) {
                _this.showSlides(step, order, singerSlideContainers[index], listBtns);
            } else {
                _this.showSlides(-step, order, singerSlideContainers[index], listBtns);
            }
            let singerSlideId = setTimeout(function () {
                singerSlideShow(step, order, index, listBtns);
            }, 4000);

            singerSlideContainers.forEach((singerSlideContainer) => {
                singerSlideContainer.ontouchmove = (e) => {
                    clearTimeout(singerSlideId);
                    singerSlideId = setTimeout(function () {
                        singerSlideShow(step, order, index, listBtns);
                    }, 4000);
                };
            });
            // Handle when click on singer slide move buttons
            if (order === 5) {
                singerSlideMove.onclick = (e) => {
                    const prevBtn = e.target.closest(".slide__move-btn.btn--prev");
                    const nextBtn = e.target.closest(".slide__move-btn.btn--next");
                    if (nextBtn) {
                        _this.showSlides(step, order, singerSlideContainers[index], listBtns);
                        clearTimeout(singerSlideId);
                        singerSlideId = setTimeout(function () {
                            singerSlideShow(step, order, index, listBtns);
                        }, 4000);
                    }
                    if (prevBtn) {
                        _this.showSlides(-step, order, singerSlideContainers[index], listBtns);
                        clearTimeout(singerSlideId);
                        singerSlideId = setTimeout(function () {
                            singerSlideShow(step, order, index, listBtns);
                        }, 4000);
                    }
                };
            }

            if (order === 9) {
                followingSingerSlideMove.onclick = (e) => {
                    const prevBtn = e.target.closest(".slide__move-btn.btn--prev");
                    const nextBtn = e.target.closest(".slide__move-btn.btn--next");
                    if (nextBtn) {
                        _this.showSlides(step, order, singerSlideContainers[index], listBtns);
                        clearTimeout(singerSlideId);
                        singerSlideId = setTimeout(function () {
                            singerSlideShow(step, order, index, listBtns);
                        }, 4000);
                    }
                    if (prevBtn) {
                        _this.showSlides(-step, order, singerSlideContainers[index], listBtns);
                        clearTimeout(singerSlideId);
                        singerSlideId = setTimeout(function () {
                            singerSlideShow(step, order, index, listBtns);
                        }, 4000);
                    }
                };
            }
        }

        // Depend on width of the screen
        if (App.offsetWidth >= 1024) {
            singerSlideShow(5, 5, 0, listSingersBtns);
            singerSlideShow(5, 9, 1, followingListSingerBtns);
        } else if (App.offsetWidth >= 740 && App.offsetWidth < 1024) {
            singerSlideShow(4, 5, 0, listSingersBtns);
            singerSlideShow(4, 9, 1, followingListSingerBtns);
        } else {
            singerSlideShow(3, 5, 0, listSingersBtns);
            singerSlideShow(3, 9, 1, followingListSingerBtns);
        }

        // Favorite artist slide
        function favArtistSlideShow(step) {
            // Automatic slide
            if (_this.scrollToRight[7] === true) {
                _this.showSlides(step, 7, favArtistLists[0], favArtistMoveBtns);
            } else {
                _this.showSlides(-step, 7, favArtistLists[0], favArtistMoveBtns);
            }
            let favArtistId = setTimeout(function () {
                favArtistSlideShow(step);
            }, 4000);

            favArtistLists.forEach((favArtist) => {
                favArtist.ontouchmove = (e) => {
                    clearTimeout(favArtistId);
                    favArtistId = setTimeout(function () {
                        favArtistSlideShow(step);
                    }, 4000);
                };
            });

            // Handle when click on new playlist slide move buttons
            favArtistMove.onclick = (e) => {
                const prevBtn = e.target.closest(".move-btn--fav-artist.btn--prev");
                const nextBtn = e.target.closest(".move-btn--fav-artist.btn--next");
                if (nextBtn) {
                    _this.showSlides(step, 7, favArtistLists[0], favArtistMoveBtns);
                    clearTimeout(favArtistId);
                    favArtistId = setTimeout(function () {
                        favArtistSlideShow(step);
                    }, 4000);
                }
                if (prevBtn) {
                    _this.showSlides(-step, 7, favArtistLists[0], favArtistMoveBtns);
                    clearTimeout(favArtistId);
                    favArtistId = setTimeout(function () {
                        favArtistSlideShow(step);
                    }, 5000);
                }
            };
        }

        // Depend on width of the screen
        if (App.offsetWidth >= 1024) {
            favArtistSlideShow(3);
        } else {
            favArtistSlideShow(2);
        }

        // New playlist slide
        function newPlaylistSlideShow(step) {
            // Automatic slide
            if (_this.scrollToRight[6] === true) {
                _this.showSlides(step, 6, newPlaylistLists[0], newPlaylistMoveBtns);
            } else {
                _this.showSlides(-step, 6, newPlaylistLists[0], newPlaylistMoveBtns);
            }
            let newPlaylistId = setTimeout(function () {
                newPlaylistSlideShow(step);
            }, 4000);

            newPlaylistLists.forEach((newPlaylistList) => {
                newPlaylistList.ontouchmove = (e) => {
                    clearTimeout(newPlaylistId);
                    newPlaylistId = setTimeout(function () {
                        newPlaylistSlideShow(step);
                    }, 4000);
                };
            });

            // Handle when click on new playlist slide move buttons
            newPlaylistMove.onclick = (e) => {
                const prevBtn = e.target.closest(".move-btn--new-playlist.btn--prev");
                const nextBtn = e.target.closest(".move-btn--new-playlist.btn--next");
                if (nextBtn) {
                    _this.showSlides(step, 6, newPlaylistLists[0], newPlaylistMoveBtns);
                    clearTimeout(newPlaylistId);
                    newPlaylistId = setTimeout(function () {
                        newPlaylistSlideShow(step);
                    }, 4000);
                }
                if (prevBtn) {
                    _this.showSlides(-step, 6, newPlaylistLists[0], newPlaylistMoveBtns);
                    clearTimeout(newPlaylistId);
                    newPlaylistId = setTimeout(function () {
                        newPlaylistSlideShow(step);
                    }, 4000);
                }
            };
        }

        // Depend on width of the screen
        if (App.offsetWidth >= 1024) {
            newPlaylistSlideShow(3);
        } else if (App.offsetWidth >= 740 && App.offsetWidth < 1024) {
            newPlaylistSlideShow(2);
        } else {
            newPlaylistSlideShow(1);
        }

        //****** Tab charts
        // Handle when click on expand btn
        chartExpandBtn.onclick = (e) => {
            chartSongContainer.classList.add("expand-song");
        };

        // ****** Tab following
        storyActions.forEach((storyAction) => {
            storyAction.onclick = (e) => {
                const btnHeart = e.target.closest(".story-btn--heart .btn--icon.icon--heart");
                const btnComment = e.target.closest(".story-btn--comment .btn--icon.icon--comment");
                if (btnHeart) {
                    const numberNode = btnHeart.parentElement.querySelector(".action__number");
                    const numberLike = numberNode.innerText;
                    if (btnHeart.classList.contains("primary")) {
                        btnHeart.classList.remove("primary");
                        btnHeart.classList.replace("bi-heart-fill", "bi-heart");
                        numberNode.innerText = Number(numberLike) - 1;
                    } else {
                        btnHeart.classList.add("primary");
                        btnHeart.classList.replace("bi-heart", "bi-heart-fill");
                        numberNode.innerText = Number(numberLike) + 1;
                    }
                }
                if (btnComment) {
                }
            };
        });
    },

    loadCurrentSong: function () {
        songTitles.forEach((songTitle) => {
            songTitle.textContent = this.currentSong.name;
        });
        durationTimes.forEach((durationTime) => {
            durationTime.textContent = this.currentSong.duration;
        });
        cdThumbs.forEach((cdThumb) => {
            cdThumb.innerHTML = `
                <img src="${this.currentSong.image}" class="thump-img" alt="">
            `;
        });
        authors.forEach((author) => {
            author.innerHTML = `
                ${this.currentSong.singer.map((singer, index) => {
                return ` <a href="#" class="is-ghost">${singer}</a>`;
            })}
            `;
        });

        audio.src = this.currentSong.path;
        this.setConfig("currentIndex", this.currentIndex);
    },

    loadCurrentSongPlaylist(index) {
        this.songs = this.listSong[index];
        this.currentIndex = 0;
        this.loadCurrentSong();
        this.renderSong();
        audio.play();
    },

    loadCurrentPlaylist(playlistBtn, index) {
        if (playlistBtn) {
            if (index < 4) {
                this.currentPlaylist = index;
                this.loadCurrentSongPlaylist(this.currentPlaylist);
                this.setConfig("currentPlaylist", this.currentPlaylist);
                this.scrollUpActiveSong();
            } else {
            }
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

    prevSlide: function () {
        const slideMoveItems = Array.from($$(".explore__slide--container .explore__slide-item"));
        $(".explore__slide-item.next").classList.remove("next");
        $(".explore__slide-item.prev").classList.remove("prev");
        const firstSlide = $(".explore__slide-item.first");
        const secondSlide = $(".explore__slide-item.second");
        const thirdSlide = $(".explore__slide-item.third");
        const fourthSlide = $(".explore__slide-item.fourth");
        const sixthSlide = $(".explore__slide-item.sixth");
        const fifthSlideIndex =
                slideMoveItems.indexOf(sixthSlide) === 0 ? slideMoveItems.length - 1 : slideMoveItems.indexOf(sixthSlide) - 1;
        const fifthSlide = slideMoveItems[fifthSlideIndex];

        firstSlide.classList.replace("first", "second");
        secondSlide.classList.replace("second", "third");
        thirdSlide.classList.add("prev");
        thirdSlide.classList.replace("third", "fourth");
        fourthSlide.classList.replace("fourth", "fifth");
        fifthSlide.classList.replace("fifth", "sixth");
        sixthSlide.classList.add("next");
        sixthSlide.classList.replace("sixth", "first");
    },

    nextSlide: function () {
        const slideMoveItems = Array.from($$(".explore__slide--container .explore__slide-item"));
        $(".explore__slide-item.next").classList.remove("next");
        $(".explore__slide-item.prev").classList.remove("prev");
        const firstSlide = $(".explore__slide-item.first");
        const secondSlide = $(".explore__slide-item.second");
        const thirdSlide = $(".explore__slide-item.third");
        const fourthSlide = $(".explore__slide-item.fourth");
        const sixthSlide = $(".explore__slide-item.sixth");
        const fifthSlideIndex =
                slideMoveItems.indexOf(fourthSlide) === slideMoveItems.length - 1 ? 0 : slideMoveItems.indexOf(fourthSlide) + 1;
        const fifthSlide = slideMoveItems[fifthSlideIndex];

        firstSlide.classList.add("prev");
        firstSlide.classList.replace("first", "sixth");
        secondSlide.classList.replace("second", "first");
        thirdSlide.classList.replace("third", "second");
        fourthSlide.classList.add("next");
        fourthSlide.classList.replace("fourth", "third");
        fifthSlide.classList.replace("fifth", "fourth");
        sixthSlide.classList.replace("sixth", "fifth");
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
        this.currentPlaylist = this.config.currentPlaylist || 0;
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