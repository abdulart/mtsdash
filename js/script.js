"use strict";

var STORAGE_KEY = 'mts-dash-region-P7oZi9sL'

Vue.component('modal', {
    template: '#modal-template'
})

var RegionStorage = {
  fetch: function () {
    var select_region = localStorage.getItem(STORAGE_KEY);
    return select_region;
  },
  save: function (select_region) {
    localStorage.setItem(STORAGE_KEY, select_region);
    shake ();
  }
};

function shake() {
    var box = document.getElementById("menu");
    box.style.animationName = null;
    box.offsetHeight; /* trigger reflow */
    box.style.animationName = "shake";
  }

  Vue.use(VueSmoothScroll)

new Vue({
    el: '#app',
    data() {
        return {
            RegionData: [
                {region:'Россия', cluster: '', mr:'', reg_id:0, cl_id:0, sort_id:0, folder: 'Отчетность КЦ', path:''},
                {region:'Кластер «Растущий»', cluster: '', mr:'', reg_id:1, cl_id:0, sort_id:1, folder: 'Отчетность по Кластеру', path:'Кластер_Регионы роста'},
                {region:'Кластер «Сильный»', cluster: '', mr:'', reg_id:2, cl_id:0, sort_id:2, folder: 'Отчетность по Кластеру', path:'Кластер_Сильный'},
                {region:'Кластер «Лидер»', cluster: '', mr:'', reg_id:3, cl_id:0, sort_id:3, folder: 'Отчетность по Кластеру', path:'Кластер_Лидер'},
                {region:'Кластер «Эффективный»', cluster: '', mr:'', reg_id:4, cl_id:0, sort_id:4, folder: 'Отчетность по Кластеру', path:'Кластер_Эффективный'},
                {region:'Алтайский край', cluster: 'Растущий', mr:'МР Сибирь', reg_id:5, cl_id:2, sort_id:6, folder: 'Отчетность Регионы', path:'Алтайский край'},
                {region:'Амурская область', cluster: 'Сильный', mr:'МР Дальний Восток', reg_id:6, cl_id:3, sort_id:25, folder: 'Отчетность Регионы', path:'Амурская область'},
                {region:'Архангельская область', cluster: 'Лидер', mr:'МР Северо-Запад', reg_id:7, cl_id:4, sort_id:43, folder: 'Отчетность Регионы', path:'Архангельская область'},
                {region:'Астраханская область', cluster: 'Эффективный', mr:'МР Юг', reg_id:8, cl_id:5, sort_id:64, folder: 'Отчетность Регионы', path:'Астраханская область'},
                {region:'Белгородская область', cluster: 'Сильный', mr:'МР Центр', reg_id:9, cl_id:3, sort_id:26, folder: 'Отчетность Регионы', path:'Белгородская область'},
                {region:'Брянская область', cluster: 'Лидер', mr:'МР Центр', reg_id:10, cl_id:4, sort_id:44, folder: 'Отчетность Регионы', path:'Брянская область'},
                {region:'Владимирская область', cluster: 'Растущий', mr:'МР Центр', reg_id:11, cl_id:2, sort_id:7, folder: 'Отчетность Регионы', path:'Владимирская область'},
                {region:'Волгоградская область', cluster: 'Эффективный', mr:'МР Юг', reg_id:12, cl_id:5, sort_id:65, folder: 'Отчетность Регионы', path:'Волгоградская область'},
                {region:'Вологодская область', cluster: 'Растущий', mr:'МР Северо-Запад', reg_id:13, cl_id:2, sort_id:8, folder: 'Отчетность Регионы', path:'Вологодская область'},
                {region:'Воронежская область', cluster: 'Растущий', mr:'МР Центр', reg_id:14, cl_id:2, sort_id:9, folder: 'Отчетность Регионы', path:'Воронежская область'},
                {region:'Забайкальский край', cluster: 'Сильный', mr:'МР Дальний Восток', reg_id:15, cl_id:3, sort_id:27, folder: 'Отчетность Регионы', path:'Забайкальский край'},
                {region:'Ивановская область', cluster: 'Лидер', mr:'МР Центр', reg_id:16, cl_id:4, sort_id:45, folder: 'Отчетность Регионы', path:'Ивановская область'},
                {region:'Иркутская область', cluster: 'Растущий', mr:'МР Дальний Восток', reg_id:17, cl_id:2, sort_id:10, folder: 'Отчетность Регионы', path:'Иркутская область'},
                {region:'Кабардино-Балкарская', cluster: 'Эффективный', mr:'МР Юг', reg_id:18, cl_id:5, sort_id:66, folder: 'Отчетность Регионы', path:'Кабардино-Балкарская Республика'},
                {region:'Калининградская область', cluster: 'Растущий', mr:'МР Северо-Запад', reg_id:19, cl_id:2, sort_id:11, folder: 'Отчетность Регионы', path:'Калининградская область'},
                {region:'Калужская область', cluster: 'Лидер', mr:'МР Центр', reg_id:20, cl_id:4, sort_id:46, folder: 'Отчетность Регионы', path:'Калужская область'},
                {region:'Камчатский край', cluster: 'Сильный', mr:'МР Дальний Восток', reg_id:21, cl_id:3, sort_id:28, folder: 'Отчетность Регионы', path:'Камчатский край'},
                {region:'Карачаево-Черкесская', cluster: 'Эффективный', mr:'МР Юг', reg_id:22, cl_id:5, sort_id:67, folder: 'Отчетность Регионы', path:'Карачаево-Черкесская Республика'},
                {region:'Кемеровская область', cluster: 'Эффективный', mr:'МР Сибирь', reg_id:23, cl_id:5, sort_id:68, folder: 'Отчетность Регионы', path:'Кемеровская область'},
                {region:'Кировская область', cluster: 'Сильный', mr:'МР Поволжье', reg_id:24, cl_id:3, sort_id:29, folder: 'Отчетность Регионы', path:'Кировская область'},
                {region:'Костромская область', cluster: 'Лидер', mr:'МР Центр', reg_id:25, cl_id:4, sort_id:47, folder: 'Отчетность Регионы', path:'Костромская область'},
                {region:'Краснодарский край', cluster: 'Сильный', mr:'МР Юг', reg_id:26, cl_id:3, sort_id:30, folder: 'Отчетность Регионы', path:'Краснодарский край'},
                {region:'Красноярский край', cluster: 'Лидер', mr:'МР Сибирь', reg_id:27, cl_id:4, sort_id:48, folder: 'Отчетность Регионы', path:'Красноярский край'},
                {region:'Курганская область', cluster: 'Растущий', mr:'МР Урал', reg_id:28, cl_id:2, sort_id:12, folder: 'Отчетность Регионы', path:'Курганская область'},
                {region:'Курская область', cluster: 'Лидер', mr:'МР Центр', reg_id:29, cl_id:4, sort_id:49, folder: 'Отчетность Регионы', path:'Курская область'},
                {region:'Липецкая область', cluster: 'Лидер', mr:'МР Центр', reg_id:30, cl_id:4, sort_id:50, folder: 'Отчетность Регионы', path:'Липецкая область'},
                {region:'Магаданская область', cluster: 'Сильный', mr:'МР Дальний Восток', reg_id:31, cl_id:3, sort_id:31, folder: 'Отчетность Регионы', path:'Магаданская область'},
                {region:'Москва и МО', cluster: 'Москва', mr:'МР Москва', reg_id:32, cl_id:1, sort_id:5, folder: 'Отчетность Регионы', path:'Москва и Московская область'},
                {region:'Мурманская область', cluster: 'Эффективный', mr:'МР Северо-Запад', reg_id:33, cl_id:5, sort_id:69, folder: 'Отчетность Регионы', path:'Мурманская область'},
                {region:'Нижегородская область', cluster: 'Эффективный', mr:'МР Поволжье', reg_id:34, cl_id:5, sort_id:70, folder: 'Отчетность Регионы', path:'Нижегородская область'},
                {region:'Новгородская область', cluster: 'Лидер', mr:'МР Северо-Запад', reg_id:35, cl_id:4, sort_id:51, folder: 'Отчетность Регионы', path:'Новгородская область'},
                {region:'Новосибирская область', cluster: 'Сильный', mr:'МР Сибирь', reg_id:36, cl_id:3, sort_id:32, folder: 'Отчетность Регионы', path:'Новосибирская область'},
                {region:'Омская область', cluster: 'Эффективный', mr:'МР Сибирь', reg_id:37, cl_id:5, sort_id:71, folder: 'Отчетность Регионы', path:'Омская область'},
                {region:'Оренбургская область', cluster: 'Растущий', mr:'МР Поволжье', reg_id:38, cl_id:2, sort_id:13, folder: 'Отчетность Регионы', path:'Оренбургская область'},
                {region:'Орловская область', cluster: 'Лидер', mr:'МР Центр', reg_id:39, cl_id:4, sort_id:52, folder: 'Отчетность Регионы', path:'Орловская область'},
                {region:'Пензенская область', cluster: 'Эффективный', mr:'МР Поволжье', reg_id:40, cl_id:5, sort_id:72, folder: 'Отчетность Регионы', path:'Пензенская область'},
                {region:'Пермский край', cluster: 'Лидер', mr:'МР Урал', reg_id:41, cl_id:4, sort_id:53, folder: 'Отчетность Регионы', path:'Пермский край'},
                {region:'Приморский край', cluster: 'Сильный', mr:'МР Дальний Восток', reg_id:42, cl_id:3, sort_id:33, folder: 'Отчетность Регионы', path:'Приморский край'},
                {region:'Псковская область', cluster: 'Сильный', mr:'МР Северо-Запад', reg_id:43, cl_id:3, sort_id:34, folder: 'Отчетность Регионы', path:'Псковская область'},
                {region:'Республика Алтай', cluster: 'Сильный', mr:'МР Сибирь', reg_id:44, cl_id:3, sort_id:35, folder: 'Отчетность Регионы', path:'Республика Алтай'},
                {region:'Республика Башкортостан', cluster: 'Сильный', mr:'МР Поволжье', reg_id:45, cl_id:3, sort_id:36, folder: 'Отчетность Регионы', path:'Республика Башкортостан'},
                {region:'Республика Бурятия', cluster: 'Лидер', mr:'МР Дальний Восток', reg_id:46, cl_id:4, sort_id:54, folder: 'Отчетность Регионы', path:'Республика Бурятия'},
                {region:'Республика Дагестан', cluster: 'Растущий', mr:'МР Юг', reg_id:47, cl_id:2, sort_id:14, folder: 'Отчетность Регионы', path:'Республика Дагестан'},
                {region:'Республика Ингушетия', cluster: 'Эффективный', mr:'МР Юг', reg_id:48, cl_id:5, sort_id:73, folder: 'Отчетность Регионы', path:'Республика Ингушетия'},
                {region:'Республика Карелия', cluster: 'Эффективный', mr:'МР Северо-Запад', reg_id:49, cl_id:5, sort_id:74, folder: 'Отчетность Регионы', path:'Республика Карелия'},
                {region:'Республика Коми', cluster: 'Сильный', mr:'МР Северо-Запад', reg_id:50, cl_id:3, sort_id:37, folder: 'Отчетность Регионы', path:'Республика Коми'},
                {region:'Республика Марий Эл', cluster: 'Лидер', mr:'МР Поволжье', reg_id:51, cl_id:4, sort_id:55, folder: 'Отчетность Регионы', path:'Республика Марий Эл'},
                {region:'Республика Мордовия', cluster: 'Эффективный', mr:'МР Поволжье', reg_id:52, cl_id:5, sort_id:75, folder: 'Отчетность Регионы', path:'Республика Мордовия'},
                {region:'Республика Саха (Якутия)', cluster: 'Лидер', mr:'МР Дальний Восток', reg_id:53, cl_id:4, sort_id:56, folder: 'Отчетность Регионы', path:'Республика Саха (Якутия)'},
                {region:'Республика Северная Осетия', cluster: 'Растущий', mr:'МР Юг', reg_id:54, cl_id:2, sort_id:15, folder: 'Отчетность Регионы', path:'Республика Северная Осетия-Алания'},
                {region:'Республика Татарстан', cluster: 'Сильный', mr:'МР Поволжье', reg_id:55, cl_id:3, sort_id:38, folder: 'Отчетность Регионы', path:'Республика Татарстан'},
                {region:'Республика Тыва', cluster: 'Эффективный', mr:'МР Сибирь', reg_id:56, cl_id:5, sort_id:76, folder: 'Отчетность Регионы', path:'Республика Тыва'},
                {region:'Республика Хакасия', cluster: 'Растущий', mr:'МР Сибирь', reg_id:57, cl_id:2, sort_id:16, folder: 'Отчетность Регионы', path:'Республика Хакасия'},
                {region:'Ростовская область', cluster: 'Лидер', mr:'МР Юг', reg_id:58, cl_id:4, sort_id:57, folder: 'Отчетность Регионы', path:'Ростовская область'},
                {region:'Рязанская область', cluster: 'Растущий', mr:'МР Центр', reg_id:59, cl_id:2, sort_id:17, folder: 'Отчетность Регионы', path:'Рязанская область'},
                {region:'Самарская область', cluster: 'Растущий', mr:'МР Поволжье', reg_id:60, cl_id:2, sort_id:18, folder: 'Отчетность Регионы', path:'Самарская область'},
                {region:'Санкт-Петербург', cluster: 'Растущий', mr:'МР Северо-Запад', reg_id:61, cl_id:2, sort_id:19, folder: 'Отчетность Регионы', path:'Санкт-Петербург и Ленинградская область'},
                {region:'Саратовская область', cluster: 'Растущий', mr:'МР Поволжье', reg_id:62, cl_id:2, sort_id:20, folder: 'Отчетность Регионы', path:'Саратовская область'},
                {region:'Сахалинская область', cluster: 'Сильный', mr:'МР Дальний Восток', reg_id:63, cl_id:3, sort_id:39, folder: 'Отчетность Регионы', path:'Сахалинская область'},
                {region:'Свердловская область', cluster: 'Лидер', mr:'МР Урал', reg_id:64, cl_id:4, sort_id:58, folder: 'Отчетность Регионы', path:'Свердловская область'},
                {region:'Смоленская область', cluster: 'Лидер', mr:'МР Центр', reg_id:65, cl_id:4, sort_id:59, folder: 'Отчетность Регионы', path:'Смоленская область'},
                {region:'Ставропольский край', cluster: 'Растущий', mr:'МР Юг', reg_id:66, cl_id:2, sort_id:21, folder: 'Отчетность Регионы', path:'Ставропольский край'},
                {region:'Тамбовская область', cluster: 'Сильный', mr:'МР Центр', reg_id:67, cl_id:3, sort_id:40, folder: 'Отчетность Регионы', path:'Тамбовская область'},
                {region:'Тверская область', cluster: 'Лидер', mr:'МР Центр', reg_id:68, cl_id:4, sort_id:60, folder: 'Отчетность Регионы', path:'Тверская область'},
                {region:'Томская область', cluster: 'Лидер', mr:'МР Сибирь', reg_id:69, cl_id:4, sort_id:61, folder: 'Отчетность Регионы', path:'Томская область'},
                {region:'Тульская область', cluster: 'Растущий', mr:'МР Центр', reg_id:70, cl_id:2, sort_id:22, folder: 'Отчетность Регионы', path:'Тульская область'},
                {region:'Тюменская область', cluster: 'Сильный', mr:'МР Урал', reg_id:71, cl_id:3, sort_id:41, folder: 'Отчетность Регионы', path:'Тюменская область'},
                {region:'Удмуртская Республика', cluster: 'Сильный', mr:'МР Поволжье', reg_id:72, cl_id:3, sort_id:42, folder: 'Отчетность Регионы', path:'Удмуртская Республика'},
                {region:'Ульяновская область', cluster: 'Эффективный', mr:'МР Поволжье', reg_id:73, cl_id:5, sort_id:77, folder: 'Отчетность Регионы', path:'Ульяновская область'},
                {region:'Хабаровский край', cluster: 'Растущий', mr:'МР Дальний Восток', reg_id:74, cl_id:2, sort_id:23, folder: 'Отчетность Регионы', path:'Хабаровский край'},
                {region:'Ханты-Мансийский округ', cluster: 'Лидер', mr:'МР Урал', reg_id:75, cl_id:4, sort_id:62, folder: 'Отчетность Регионы', path:'Ханты-Мансийский авт.округ'},
                {region:'Челябинская область', cluster: 'Растущий', mr:'МР Урал', reg_id:76, cl_id:2, sort_id:24, folder: 'Отчетность Регионы', path:'Челябинская область'},
                {region:'Чеченская Республика', cluster: 'Эффективный', mr:'МР Юг', reg_id:77, cl_id:5, sort_id:78, folder: 'Отчетность Регионы', path:'Чеченская Республика'},
                {region:'Чувашская республика', cluster: 'Эффективный', mr:'МР Поволжье', reg_id:78, cl_id:5, sort_id:79, folder: 'Отчетность Регионы', path:'Чувашская республика'},
                {region:'Ямало-Ненецкий округ', cluster: 'Эффективный', mr:'МР Урал', reg_id:79, cl_id:5, sort_id:80, folder: 'Отчетность Регионы', path:'Ямало-Ненецкий авт.округ'},
                {region:'Ярославская область', cluster: 'Лидер', mr:'МР Центр', reg_id:80, cl_id:4, sort_id:63, folder: 'Отчетность Регионы', path:'Ярославская область'}
            ],
            Reports: [
                {name:'WEEK', path: '12.Еженедельный_отчет', file:'Week_КЦ_', extension: '.xlsb', file_cluster:'Week_КЦ', prefix:['_РФ','_Регионы Роста','_Сильный','_Лидер','_Эффективный']},
                {name:'BOPOS', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster:'BOPOS', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'DFIN', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster:'DFIN', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'FIX', path: '03.Фиксированный_Бизнес', file:'FIX_FIB', extension: '.xlsb', file_cluster:'03.FIX_FIB', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'WEEK', path: '12.Еженедельный_отчет', file:'Week_КЦ_', extension: '.xlsb', file_cluster:'Week_КЦ', prefix:['_РФ','_Регионы Роста','_Сильный','_Лидер','_Эффективный']},
                {name:'BOPOS', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster:'BOPOS', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'DFIN', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster:'DFIN', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'FIX', path: '03.Фиксированный_Бизнес', file:'FIX_FIB', extension: '.xlsb', file_cluster:'03.FIX_FIB', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'WEEK', path: '12.Еженедельный_отчет', file:'Week_КЦ_', extension: '.xlsb', file_cluster:'Week_КЦ', prefix:['_РФ','_Регионы Роста','_Сильный','_Лидер','_Эффективный']},
                {name:'BOPOS', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster:'BOPOS', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'DFIN', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster:'DFIN', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'FIX', path: '03.Фиксированный_Бизнес', file:'FIX_FIB', extension: '.xlsb', file_cluster:'03.FIX_FIB', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'WEEK', path: '12.Еженедельный_отчет', file:'Week_КЦ_', extension: '.xlsb', file_cluster:'Week_КЦ', prefix:['_РФ','_Регионы Роста','_Сильный','_Лидер','_Эффективный']},
                {name:'BOPOS', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster:'BOPOS', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'DFIN', path: '02.Мобильный_Бизнес', file:'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster:'DFIN', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'FIX', path: '03.Фиксированный_Бизнес', file:'FIX_FIB', extension: '.xlsb', file_cluster:'03.FIX_FIB', prefix:['_РОССИЯ','_РЕГИОНЫ РОСТА','_СИЛЬНЫЙ','_ЛИДЕР','_ЭФФЕКТИВНЫЙ']},
                {name:'WEEK', path: '12.Еженедельный_отчет', file:'Week_КЦ_', extension: '.xlsb', file_cluster:'Week_КЦ', prefix:['_РФ','_Регионы Роста','_Сильный','_Лидер','_Эффективный']}
            ],
            FilterRegion: '',
            FilterCluster: 0,
            ActiveIndexRegion: -1,
            select_region: RegionStorage.fetch(),
            request_report: null,
            showModal: false,
            showCluster: true,
            sortAsc: false,
            //---------------Added---------------//
            list_reports: [
                { report_name: 'Еженедельный отчет WEEK', report_description: 'Оперативный отчет с основными показателями мобильного и фиксированного бизнеса', iclass: 'fa fa-bolt fa-3x',id: 0, business: 'b2b', period: 'Неделя', rating: 1, online: 'Online', url: 'google.com'},
                { report_name: 'Mобильный бизнес BOPOS', report_description: 'Отчет содержит основные показатели мобильного бизнеса: выручка, база, трафик', iclass: 'fa fa-mobile fa-3x',id: 1, business: 'b2b', period: 'Месяц', rating: 2, online: 'Offline', url: ''},
                { report_name: 'Mобильный бизнес DFIN', report_description: 'Отчет содержит основные показатели мобильного бизнеса: выручка, база, трафик', iclass: 'fa fa-mobile fa-3x',id: 2, business: 'b2b', period: 'Месяц', rating: 3, online: 'Online', url: 'github.com'},
                { report_name: 'Фиксированный бизнec FIB', report_description: 'Отчет содержит основные показатели фиксированного бизнеса: выручка, база, трафик', iclass: 'fa fa-phone fa-3x',id: 3, business: 'b2b', period: 'Месяц', rating: 4, online: 'Offline', url: ''}
            ],
            menus: { period: false, business: false, rating: false, indicators: false , online: false},
            filters: {
                period: {},
                business: {},
                rating: 0,
                indicators: {},
                online: {}
            },
            dropdown: { height: 0 },
            rating: {min: 0, max:  10}
            //-----------------------------------//
        };
    },
    watch: {
        select_region: {
            handler: function(select_region) {
                RegionStorage.save(select_region);
          }
        },
        showModal: function(){
            if (this.showModal == false) {
                if ( this.select_region !== null && this.request_report !== null ) {
                    let rep_id = this.request_report;
                    this.request_report = null;
                    this.OpenReport (rep_id);
                } else {
                    this.request_report = null;
                }
            }
        },
        activeMenu: function(index, from) {
            if (index === from) return;

            this.$nextTick(() => {
                if (!this.$refs.menu || !this.$refs.menu[index]) {
                    this.dropdown.height = 0
                } else {
                    this.dropdown.height = `${this.$refs.menu[index].clientHeight + 10}px`
                }
            })
        }
      },
    computed: {
        filteredAndSortedData() {
            let result = this.RegionData;
            let ascDesc = this.sortAsc ? 1 : -1;

            if ( this.sortAsc == true ) {
                return result.sort(function (a, b) {
                    return a.reg_id - b.reg_id;
                });
                //return result.sort((a, b) => a.reg_id - b.reg_id );
            } else {
                return result.sort(function (a, b) {
                    return a.sort_id - b.sort_id;
                });
                //return result.sort((a, b) => a.sort_id - b.sort_id );
                //return result.sort((a, b) => ascDesc * a.region.localeCompare(b.region));
            }
        }
        //--------- added --------//
        ,
        activeMenu() {
            return Object.keys(this.menus).reduce(($$, set, i) => (this.menus[set]) ? i : $$, -1)
        },
        list() {
            var counter_filters = 0
            let { business , period , online} = this.activeFilters
            var obj_filters = {business , period, online}
            for (var n in obj_filters) {
                (obj_filters[n].length !== 0) ? counter_filters += 1 : counter_filters = counter_filters
            }

            return this.list_reports.filter(function(e){
                var counter_instance = 0
                for (var m in obj_filters) {
                    if (obj_filters[m].length !== 0) {
                        if (obj_filters[m].indexOf(e[m]) !== -1){
                            counter_instance += 1
                        }
                    }
                }
                if (counter_instance == counter_filters) {
                    return e
                } else {
                    return false
                }
            })
        },
        activeFilters() {
            let { period, business, online} = this.filters
            return {
                period: Object.keys(period).filter(c => period[c]),
                business: Object.keys(business).filter(c => business[c]),
                online: Object.keys(online).filter(c => online[c])
            }
        }
        //------------------------//
    },
    methods: {
        InvertSort() {
            this.sortAsc = !this.sortAsc;


        },
        ReturnClass(item,index) {
            let cl = "";
            let find_substtring = item.region.toLowerCase().indexOf(this.FilterRegion.toLowerCase()) != -1;
            let find_cluster = this.FilterCluster == item.cl_id || this.FilterCluster == 0;
            if (find_substtring && find_cluster) { cl = "finditem"; }
            else { cl = "nofinditem"; }
            return cl + " cl_" + item.cl_id;
        },
        SetClusterFilter (filter_id) {
            this.FilterCluster = filter_id;
        },
        ClickRegion (reg_id) {
            this.select_region = reg_id;
            this.showModal = false;
        },
        SetActiveIndexRegion (index) {
            this.ActiveIndexRegion = index+5;
        },
        ClearActiveIndexRegion () {
            this.ActiveIndexRegion = -1;
        },
        OpenReport (rep_id) {


            var reg = this.select_region;
            var url ='';
            var delimiter = '';
            let domen = 'http://skr13.mts.ru/bpo/d/drbr/DocLib1/';

            if (reg === null) {
                this.request_report = rep_id;
                this.showModal = true;
            } else {
                // Ищем индекс текущего региона и сохраняем в reg_id
                let reg_id = this.RegionData.map(function (element) { return element.region; }).indexOf(reg);
                //let reg_id = this.RegionData.findIndex(function(element) { return element.region == reg; });

                if ( this.RegionData[reg_id].path ) {delimiter = "/"};

                // Обрабатываем кластера или Россию
                if (reg_id < 5) {
                    url = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + delimiter + this.Reports[rep_id].path + '/' + this.Reports[rep_id].file_cluster + this.Reports[rep_id].prefix[reg_id] + this.Reports[rep_id].extension;
                } else {
                    // Обрабатываем регионы
                    if (this.Reports[rep_id].name == 'WEEK') {
                        url = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + delimiter + this.Reports[rep_id].path + '/' + this.Reports[rep_id].file + this.RegionData[reg_id].path + this.Reports[rep_id].extension;
                    } else {
                        url = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + delimiter + this.Reports[rep_id].path + '/' + this.Reports[rep_id].file + this.Reports[rep_id].extension;
                    }
                }


                //alert(url);
                window.open(url,"_self")
            }

        }
        //---------------Added---------------//
        ,
        setMenu: function(menu, active){
            Object.keys(this.menus).forEach(tab => {
                this.menus[tab] = !active && tab === menu
            })
        },

        setFilter(filter, option) {
            this.filters[filter][option] = !this.filters[filter][option]

            // setTimeout(() => {
            //     this.clearFilter(filter, option, this.filters[filter][option])
            // }, 100)
        },

        clearFilter(filter, except, active) {
            if (filter === 'rating') {
                this.filters[filter] = this.rating.min
            } else {
                Object.keys(this.filters[filter]).forEach(option => {
                    this.filters[filter][option] = except === option && !active
                })
            }
        },

        clearAllFilters() {
            Object.keys(this.filters).forEach(this.clearFilter)
        },
        setMinRating() {
            var min = 100000000000000000000;
            for(var m in this.list_reports){
                ( this.list_reports[m].rating < min ) ? min = this.list_reports[m].rating : min = min
            }
            this.rating.min = min
        },

        setMaxRating() {
            var max = 0;
            for(var m in this.list_reports){
                ( this.list_reports[m].rating > max ) ? max = this.list_reports[m].rating : max = max
            }
            this.rating.max = max
        },

        onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        },

        //Находим уникальные значения из свойств-фильтров объекта list_reports и передаем их в качестве фильтров в объект filters//
        setUniqueProperties() {
            var business = []
            var period = []
            var online = []
            for(var p in this.list_reports){
                business.push(this.list_reports[p].business)
                period.push(this.list_reports[p].period)
                online.push(this.list_reports[p].online)
            }
            var business_unique = business.filter(this.onlyUnique)
            var period_unique = period.filter(this.onlyUnique)
            var online_unique = online.filter(this.onlyUnique)

            period_unique.forEach(e=>{
                this.$set(this.filters.period, e, false)
            })

            business_unique.forEach(e=>{
                this.$set(this.filters.business, e, false)
            })

            online_unique.forEach(e=>{
                this.$set(this.filters.online, e, false)
            })
        }
        //-----------------------------------//
    },

    beforeMount() {
        this.setMinRating()
        this.setMaxRating()
        this.filters.rating = this.rating.min
        this.setUniqueProperties()
    }
});