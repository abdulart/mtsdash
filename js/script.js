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
                {region:'Россия', cluster: '', mr:'', reg_id:0, cl_id:0, sort_id:0, ter_id: 0, folder: 'Отчетность КЦ', path:''},
                {region:'Кластер «Растущий»', cluster: '', mr:'', reg_id:1, cl_id:0, sort_id:1, ter_id: 0, folder: 'Отчетность по Кластеру', path:'Кластер_Регионы роста'},
                {region:'Кластер «Сильный»', cluster: '', mr:'', reg_id:2, cl_id:0, sort_id:2, ter_id: 0, folder: 'Отчетность по Кластеру', path:'Кластер_Сильный'},
                {region:'Кластер «Лидер»', cluster: '', mr:'', reg_id:3, cl_id:0, sort_id:3, ter_id: 0, folder: 'Отчетность по Кластеру', path:'Кластер_Лидер'},
                {region:'Кластер «Эффективный»', cluster: '', mr:'', reg_id:4, cl_id:0, sort_id:4, ter_id: 0, folder: 'Отчетность по Кластеру', path:'Кластер_Эффективный'},
                {region:'Территория Крупные', cluster: '', mr:'', reg_id:5, cl_id:0, sort_id:5, ter_id: 0, folder: 'Отчетность Территории', path:'Тер_КРУПНЫЕ'},
                {region:'Территория Лидер', cluster: '', mr:'', reg_id:6, cl_id:0, sort_id:6, ter_id: 0, folder: 'Отчетность Территории', path:'Тер_ЛИДЕР'},
                {region:'Территория Роста', cluster: '', mr:'', reg_id:7, cl_id:0, sort_id:7, ter_id: 0, folder: 'Отчетность Территории', path:'Тер_РОСТА'},
                {region:'Территория Сильный', cluster: '', mr:'', reg_id:8, cl_id:0, sort_id:8, ter_id: 0, folder: 'Отчетность Территории', path:'Тер_СИЛЬНЫЙ'},
                {region:'Территория ТОП', cluster: '', mr:'', reg_id:9, cl_id:0, sort_id:9, ter_id: 0, folder: 'Отчетность Территории', path:'Тер_ТОП'},
                {region:'Территория Эффективный»', cluster: '', mr:'', reg_id:10, cl_id:0, sort_id:10, ter_id: 0, folder: 'Отчетность Территории', path:'Тер_ЭФФЕКТИВНЫЙ'},
                {region:'Алтайский край', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Сибирь', reg_id:11, cl_id:2, sort_id:31, ter_id: 3, folder: 'Отчетность Регионы', path:'Алтайский край'},
                {region:'Амурская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Дальний Восток', reg_id:12, cl_id:3, sort_id:48, ter_id: 4, folder: 'Отчетность Регионы', path:'Амурская область'},
                {region:'Архангельская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Северо-Запад', reg_id:13, cl_id:4, sort_id:11, ter_id: 2, folder: 'Отчетность Регионы', path:'Архангельская область'},
                {region:'Астраханская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Юг', reg_id:14, cl_id:5, sort_id:70, ter_id: 6, folder: 'Отчетность Регионы', path:'Астраханская область'},
                {region:'Белгородская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Центр', reg_id:15, cl_id:3, sort_id:49, ter_id: 4, folder: 'Отчетность Регионы', path:'Белгородская область'},
                {region:'Брянская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Центр', reg_id:16, cl_id:4, sort_id:12, ter_id: 2, folder: 'Отчетность Регионы', path:'Брянская область'},
                {region:'Владимирская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Центр', reg_id:17, cl_id:2, sort_id:32, ter_id: 3, folder: 'Отчетность Регионы', path:'Владимирская область'},
                {region:'Волгоградская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Юг', reg_id:18, cl_id:5, sort_id:71, ter_id: 6, folder: 'Отчетность Регионы', path:'Волгоградская область'},
                {region:'Вологодская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Северо-Запад', reg_id:19, cl_id:2, sort_id:33, ter_id: 3, folder: 'Отчетность Регионы', path:'Вологодская область'},
                {region:'Воронежская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr:'МР Центр', reg_id:20, cl_id:2, sort_id:34, ter_id: 1, folder: 'Отчетность Регионы', path:'Воронежская область'},
                {region:'Забайкальский край', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Дальний Восток', reg_id:21, cl_id:3, sort_id:50, ter_id: 4, folder: 'Отчетность Регионы', path:'Забайкальский край'},
                {region:'Ивановская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Центр', reg_id:22, cl_id:4, sort_id:13, ter_id: 2, folder: 'Отчетность Регионы', path:'Ивановская область'},
                {region:'Иркутская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr:'МР Дальний Восток', reg_id:23, cl_id:2, sort_id:35, ter_id: 1, folder: 'Отчетность Регионы', path:'Иркутская область'},
                {region:'Кабардино-Балкарская', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Юг', reg_id:24, cl_id:5, sort_id:72, ter_id: 6, folder: 'Отчетность Регионы', path:'Кабардино-Балкарская Республика'},
                {region:'Калининградская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Северо-Запад', reg_id:25, cl_id:5, sort_id:73, ter_id: 6, folder: 'Отчетность Регионы', path:'Калининградская область'},
                {region:'Калужская область', cluster: 'Лидер', territory: 'Тер_КРУПНЫЕ', mr:'МР Центр', reg_id:26, cl_id:4, sort_id:14, ter_id: 1, folder: 'Отчетность Регионы', path:'Калужская область'},
                {region:'Камчатский край', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Дальний Восток', reg_id:27, cl_id:3, sort_id:51, ter_id: 4, folder: 'Отчетность Регионы', path:'Камчатский край'},
                {region:'Карачаево-Черкесская', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Юг', reg_id:28, cl_id:5, sort_id:74, ter_id: 6, folder: 'Отчетность Регионы', path:'Карачаево-Черкесская Республика'},
                {region:'Кемеровская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Сибирь', reg_id:29, cl_id:5, sort_id:75, ter_id: 6, folder: 'Отчетность Регионы', path:'Кемеровская область'},
                {region:'Кировская область', cluster: 'Сильный', territory: 'Тер_КРУПНЫЕ', mr:'МР Поволжье', reg_id:30, cl_id:3, sort_id:52, ter_id: 1, folder: 'Отчетность Регионы', path:'Кировская область'},
                {region:'Костромская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Центр', reg_id:31, cl_id:4, sort_id:15, ter_id: 2, folder: 'Отчетность Регионы', path:'Костромская область'},
                {region:'Краснодарский край', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Юг', reg_id:32, cl_id:3, sort_id:53, ter_id: 5, folder: 'Отчетность Регионы', path:'Краснодарский край'},
                {region:'Красноярский край', cluster: 'Лидер', territory: 'Тер_ТОП', mr:'МР Сибирь', reg_id:33, cl_id:4, sort_id:16, ter_id: 5, folder: 'Отчетность Регионы', path:'Красноярский край'},
                {region:'Курганская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Урал', reg_id:34, cl_id:2, sort_id:34, ter_id: 3, folder: 'Отчетность Регионы', path:'Курганская область'},
                {region:'Курская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Центр', reg_id:35, cl_id:5, sort_id:76, ter_id: 6, folder: 'Отчетность Регионы', path:'Курская область'},
                {region:'Липецкая область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Центр', reg_id:36, cl_id:5, sort_id:77, ter_id: 6, folder: 'Отчетность Регионы', path:'Липецкая область'},
                {region:'Магаданская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Дальний Восток', reg_id:37, cl_id:3, sort_id:54, ter_id: 4, folder: 'Отчетность Регионы', path:'Магаданская область'},
                {region:'Москва и МО', cluster: 'Москва', territory: 'Тер_РОСТА', mr:'МР Москва', reg_id:38, cl_id:1, sort_id:11, ter_id: 3, folder: 'Отчетность Регионы', path:'Москва и Московская область'},
                {region:'Мурманская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Северо-Запад', reg_id:39, cl_id:5, sort_id:78, ter_id: 6, folder: 'Отчетность Регионы', path:'Мурманская область'},
                {region:'Нижегородская область', cluster: 'Эффективный', territory: 'Тер_ТОП', mr:'МР Поволжье', reg_id:40, cl_id:5, sort_id:79, ter_id: 5, folder: 'Отчетность Регионы', path:'Нижегородская область'},
                {region:'Новгородская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Северо-Запад', reg_id:41, cl_id:4, sort_id:17, ter_id: 2, folder: 'Отчетность Регионы', path:'Новгородская область'},
                {region:'Новороссийск', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Центр', reg_id:42, cl_id:3, sort_id:55, ter_id: 5, folder: 'Отчетность Регионы', path:'Новороссийск'},
                {region:'Новосибирская область', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Сибирь', reg_id:43, cl_id:3, sort_id:56, ter_id: 5, folder: 'Отчетность Регионы', path:'Новосибирская область'},
                {region:'Омская область', cluster: 'Растущий', territory: 'Тер_ТОП', mr:'МР Сибирь', reg_id:44, cl_id:2, sort_id:37, ter_id: 5, folder: 'Отчетность Регионы', path:'Омская область'},
                {region:'Оренбургская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Поволжье', reg_id:45, cl_id:2, sort_id:38, ter_id: 3, folder: 'Отчетность Регионы', path:'Оренбургская область'},
                {region:'Орловская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Центр', reg_id:46, cl_id:4, sort_id:18, ter_id: 2, folder: 'Отчетность Регионы', path:'Орловская область'},
                {region:'Пензенская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Поволжье', reg_id:47, cl_id:5, sort_id:80, ter_id: 6, folder: 'Отчетность Регионы', path:'Пензенская область'},
                {region:'Пермский край', cluster: 'Лидер', territory: 'Тер_КРУПНЫЕ', mr:'МР Урал', reg_id:48, cl_id:4, sort_id:19, ter_id: 1, folder: 'Отчетность Регионы', path:'Пермский край'},
                {region:'Приморский край', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Дальний Восток', reg_id:49, cl_id:3, sort_id:57, ter_id: 5, folder: 'Отчетность Регионы', path:'Приморский край'},
                {region:'Псковская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Северо-Запад', reg_id:50, cl_id:3, sort_id:58, ter_id: 4, folder: 'Отчетность Регионы', path:'Псковская область'},
                {region:'Республика Алтай', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Сибирь', reg_id:51, cl_id:3, sort_id:59, ter_id: 4, folder: 'Отчетность Регионы', path:'Республика Алтай'},
                {region:'Республика Башкортостан', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Поволжье', reg_id:52, cl_id:3, sort_id:60, ter_id: 5, folder: 'Отчетность Регионы', path:'Республика Башкортостан'},
                {region:'Республика Бурятия', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Дальний Восток', reg_id:53, cl_id:4, sort_id:20, ter_id: 2, folder: 'Отчетность Регионы', path:'Республика Бурятия'},
                {region:'Республика Дагестан', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Юг', reg_id:54, cl_id:2, sort_id:39, ter_id: 3, folder: 'Отчетность Регионы', path:'Республика Дагестан'},
                {region:'Республика Ингушетия', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Юг', reg_id:55, cl_id:5, sort_id:81, ter_id: 6, folder: 'Отчетность Регионы', path:'Республика Ингушетия'},
                {region:'Республика Карелия', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Северо-Запад', reg_id:56, cl_id:4, sort_id:21, ter_id: 2, folder: 'Отчетность Регионы', path:'Республика Карелия'},
                {region:'Республика Коми', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Северо-Запад', reg_id:57, cl_id:3, sort_id:61, ter_id: 4, folder: 'Отчетность Регионы', path:'Республика Коми'},
                {region:'Республика Марий Эл', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Поволжье', reg_id:58, cl_id:4, sort_id:22, ter_id: 2, folder: 'Отчетность Регионы', path:'Республика Марий Эл'},
                {region:'Республика Мордовия', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Поволжье', reg_id:59, cl_id:5, sort_id:82, ter_id: 6, folder: 'Отчетность Регионы', path:'Республика Мордовия'},
                {region:'Республика Саха (Якутия)', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Дальний Восток', reg_id:60, cl_id:4, sort_id:23, ter_id: 2, folder: 'Отчетность Регионы', path:'Республика Саха (Якутия)'},
                {region:'Республика Северная Осетия', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Юг', reg_id:61, cl_id:3, sort_id:62, ter_id: 4, folder: 'Отчетность Регионы', path:'Республика Северная Осетия-Алания'},
                {region:'Республика Татарстан', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Поволжье', reg_id:62, cl_id:3, sort_id:63, ter_id: 5, folder: 'Отчетность Регионы', path:'Республика Татарстан'},
                {region:'Республика Тыва', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Сибирь', reg_id:63, cl_id:5, sort_id:83, ter_id: 6, folder: 'Отчетность Регионы', path:'Республика Тыва'},
                {region:'Республика Хакасия', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Сибирь', reg_id:64, cl_id:2, sort_id:40, ter_id: 3, folder: 'Отчетность Регионы', path:'Республика Хакасия'},
                {region:'Ростовская область', cluster: 'Лидер', territory: 'Тер_ТОП', mr:'МР Юг', reg_id:65, cl_id:4, sort_id:24, ter_id: 5, folder: 'Отчетность Регионы', path:'Ростовская область'},
                {region:'Рязанская область', cluster: 'Сильный', territory: 'Тер_КРУПНЫЕ', mr:'МР Центр', reg_id:66, cl_id:3, sort_id:64, ter_id: 1, folder: 'Отчетность Регионы', path:'Рязанская область'},
                {region:'Самарская область', cluster: 'Растущий', territory: 'Тер_ТОП', mr:'МР Поволжье', reg_id:67, cl_id:2, sort_id:41, ter_id: 5, folder: 'Отчетность Регионы', path:'Самарская область'},
                {region:'Санкт-Петербург', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Северо-Запад', reg_id:68, cl_id:2, sort_id:42, ter_id: 3, folder: 'Отчетность Регионы', path:'Санкт-Петербург и Ленинградская область'},
                {region:'Саратовская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr:'МР Поволжье', reg_id:69, cl_id:2, sort_id:43, ter_id: 1, folder: 'Отчетность Регионы', path:'Саратовская область'},
                {region:'Сахалинская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Дальний Восток', reg_id:70, cl_id:3, sort_id:65, ter_id: 4, folder: 'Отчетность Регионы', path:'Сахалинская область'},
                {region:'Свердловская область', cluster: 'Лидер', territory: 'Тер_ТОП', mr:'МР Урал', reg_id:71, cl_id:4, sort_id:25, ter_id: 5, folder: 'Отчетность Регионы', path:'Свердловская область'},
                {region:'Смоленская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Центр', reg_id:72, cl_id:4, sort_id:26, ter_id: 2, folder: 'Отчетность Регионы', path:'Смоленская область'},
                {region:'Сочи', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Центр', reg_id:73, cl_id:3, sort_id:66, ter_id: 0, folder: 'Отчетность Регионы', path:'Сочи'},
                {region:'Ставропольский край', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Юг', reg_id:74, cl_id:2, sort_id:44, ter_id: 3, folder: 'Отчетность Регионы', path:'Ставропольский край'},
                {region:'Тамбовская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Центр', reg_id:75, cl_id:3, sort_id:67, ter_id: 4, folder: 'Отчетность Регионы', path:'Тамбовская область'},
                {region:'Тверская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Центр', reg_id:76, cl_id:4, sort_id:27, ter_id: 2, folder: 'Отчетность Регионы', path:'Тверская область'},
                {region:'Томская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr:'МР Сибирь', reg_id:77, cl_id:4, sort_id:28, ter_id: 2, folder: 'Отчетность Регионы', path:'Томская область'},
                {region:'Тульская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr:'МР Центр', reg_id:78, cl_id:2, sort_id:45, ter_id: 3, folder: 'Отчетность Регионы', path:'Тульская область'},
                {region:'Тюменская область', cluster: 'Сильный', territory: 'Тер_КРУПНЫЕ', mr:'МР Урал', reg_id:79, cl_id:3, sort_id:68, ter_id: 1, folder: 'Отчетность Регионы', path:'Тюменская область'},
                {region:'Удмуртская Республика', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr:'МР Поволжье', reg_id:80, cl_id:3, sort_id:69, ter_id: 4, folder: 'Отчетность Регионы', path:'Удмуртская Республика'},
                {region:'Ульяновская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Поволжье', reg_id:81, cl_id:5, sort_id:84, ter_id: 6, folder: 'Отчетность Регионы', path:'Ульяновская область'},
                {region:'Хабаровский край', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr:'МР Дальний Восток', reg_id:82, cl_id:2, sort_id:46, ter_id: 1, folder: 'Отчетность Регионы', path:'Хабаровский край'},
                {region:'Ханты-Мансийский округ', cluster: 'Лидер', territory: 'Тер_ТОП', mr:'МР Урал', reg_id:83, cl_id:4, sort_id:29, ter_id: 5, folder: 'Отчетность Регионы', path:'Ханты-Мансийский авт.округ'},
                {region:'Челябинская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr:'МР Урал', reg_id:84, cl_id:2, sort_id:47, ter_id: 1, folder: 'Отчетность Регионы', path:'Челябинская область'},
                {region:'Чеченская Республика', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Юг', reg_id:85, cl_id:5, sort_id:85, ter_id: 6, folder: 'Отчетность Регионы', path:'Чеченская Республика'},
                {region:'Чувашская республика', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Поволжье', reg_id:86, cl_id:5, sort_id:86, ter_id: 6, folder: 'Отчетность Регионы', path:'Чувашская республика'},
                {region:'Ямало-Ненецкий округ', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr:'МР Урал', reg_id:87, cl_id:5, sort_id:87, ter_id: 6, folder: 'Отчетность Регионы', path:'Ямало-Ненецкий авт.округ'},
                {region:'Ярославская область', cluster: 'Лидер', territory: 'Тер_КРУПНЫЕ', mr:'МР Центр', reg_id:88, cl_id:4, sort_id:30, ter_id: 1, folder: 'Отчетность Регионы', path:'Ярославская область'}
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
            StatusButton: 'Cluster',
            //---------------Added---------------//
            list_reports: [
                {id: 0, name: 'ИНН и Контракты', indicators: ['Абоненты', 'Контракты', 'ИНН'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true,true,false,true], detail_level: 'Регион [Level 3]', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-user-o fa-3x', description: 'Отчет B2B, который содержит абонентскую базу(ПО), контракты, ИНН мобильного и фиксированного бизнеса в разрезе сегменов', basic_folder: '09.ИНН', file_name: 'con_inn_Report', year: '', month: '', file_extension: '.xlsm', file_postfix: 0, rating: 10},
                {id: 1, name: 'Миграции B2B', indicators: ['Миграции'], aggregation: ['РФ', 'Регионы'], available: [true,false,false,true], detail_level: 'Регион [Level 3]', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Иванова Светлана Николаевна', dash: '', format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-exchange fa-3x', description: 'Отчет по миграциям B2B между сегментами массового и корпоративного рынка в доходах и абонентах', basic_folder: '11.Миграции', file_name: 'Migration_report', year: '', month: '', file_extension: '.xlsx', file_postfix: 0, rating: 10},
                {id: 2, name: 'Модель RN и RL', indicators: ['RN', 'RL'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true,true,false,true], detail_level: 'Регион [Level 3]', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-group fa-3x', description: 'Отчет содержит динамику новых доходов (RN) и упущенных доходов (RL) в разрезе терифных планов, сегментов и подсегментов B2B', basic_folder: '06.RN_RL_model', file_name: 'RN_Model', year: '_2018', month: '', file_extension: '.xlsb', file_postfix: ['_РФ','_Регионы Роста','_Сильный','_Лидер','_Эффективный'], rating: 8},
                {id: 3, name: 'MNP B2B', indicators: ['MNP'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true,true,false,true], detail_level: 'Регион [Level 3]', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-bar-chart fa-3x', description: 'Отчет показывает отток и приток абонентов и доходов B2B в результате MNP (Смена оператора с сохранением номера)', basic_folder: '15.MNP', file_name: 'MNP_B2B', year: '_2018', month: '', file_extension: '.xlsb', file_postfix: 0, rating: 4},
                {id: 4, name: 'MNP B2B (Детальный)', indicators: ['MNP'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true,true,false,true], detail_level: 'Регион [Level 3]', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', format: 'Выгрузка', period: 'Месяц', business: 'B2B', iclass: 'fa fa-search-plus fa-3x', description: 'Детальная выгрузка показывает отток и приток абонентов и доходов B2B в результате MNP (Смена оператора с сохранением номера)', basic_folder: '15.MNP/MNP_B2B_DETAL', file_name: 'MNP_B2B_DETAL', year: '', month: '', file_extension: '.xlsb', file_postfix: ['','_Регионы Роста','_Сильный','_Лидер','_Эффективный'], rating: 7},
                {id: 5, name: 'Дебиторская задолжность', indicators: ['Дебиторская задолжность'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true,true,false,true], detail_level: 'Регион [Level 3]', update_date: 'now', update_type: 'Версионное', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-thumb-tack fa-3x', description: 'Динамика и структура дебиторской задолжности в сегментах корпоративного рынка для мобильного и фиксированного бизнеса', basic_folder: '17.ДЗ', file_name: 'DEBT', year: '_2018', month: '03', file_extension: '.xlsx', file_postfix: 0, rating: 3},
                {id: 6, name: 'Абонентское оборудование', indicators: ['Оборудование'], aggregation: ['Регионы'], available: [false,false,false,true], detail_level: 'Регион [Level 3]', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-fax fa-3x', description: 'Распределение доходов, абонентской базы B2B и B2C по оборудованию, стандарту связи, OS', basic_folder: '27.Абонентское_оборудование', file_name: 'АО', year: '', month: '', file_extension: '.xlsb', file_postfix: 0, rating: 3},
                {id: 7, name: 'Эффективность продаж B2B', indicators: ['Эффективность'], aggregation: ['РФ'], available: [true,false,false,false], detail_level: 'Сотрудник [Level 1]', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Квартал', main_user: 'Тараканов Александр', dash: '', format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-line-chart fa-3x', description: 'Отчет эффективности сотрудников продаж B2B', basic_folder: '31. Эффективность сотурдников продаж', file_name: 'Эффективность v3', year: '', month: '', file_extension: '.xlsx', file_postfix: 0, rating: 3},
                {id: 8, name: 'Еженедельный MOB (детализированный)', indicators: ['Портфель', 'RN', 'RL'], aggregation: ['Территории'], available: [false,false,true,false], detail_level: 'Сотрудник [Level 1]', update_date: 'now', update_type: 'Версионное', update_period: 'Неделя', main_user: 'Моторико Андрей', dash: '', format: 'Электронная таблица', period: 'Неделя', business: 'B2B', iclass: 'fa fa-mobile-phone fa-3x', description: 'Отчет с основными бизнес-показателями мобильного бизнеса B2B с детализацией до каналов продаж, отделов и сотрудников', basic_folder: 'WD', file_name: 'WD', year: '_2018', month: '04', file_extension: '.xlsb', file_postfix: ['','','','','','_Тер_КРУПНЫЕ','_Тер_ЛИДЕР','_Тер_РОСТА','_Тер_СИЛЬНЫЙ','Тер_ТОП','Тер_ЭФФЕКТИВНЫЙ'], rating: 3},
                {id: 9, name: 'Еженедельный FIX (детализированный)', indicators: ['Портфель', 'RN'], aggregation: ['Территории'], available: [false,false,true,false], detail_level: 'Сотрудник [Level 1]', update_date: 'now', update_type: 'Версионное', update_period: 'Неделя', main_user: 'Моторико Андрей', dash: '', format: 'Электронная таблица', period: 'Неделя', business: 'B2B', iclass: 'fa fa-phone fa-3x', description: 'Отчет с основными бизнес-показателями фиксированого бизнеса B2B с детализацией до каналов продаж, отделов и сотрудников', basic_folder: 'WD', file_name: 'WD_FIX', year: '_2018', month: '04', file_extension: '.xlsx', file_postfix: ['','','','','','_Тер_КРУПНЫЕ','_Тер_ЛИДЕР','_Тер_РОСТА','_Тер_СИЛЬНЫЙ','Тер_ТОП','Тер_ЭФФЕКТИВНЫЙ'], rating: 3}
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
            rating: {min: 0, max:  10},
            BasicReports: [
                {id: 0, name: 'ИНН и Контракты', basic_folder: '09.ИНН', file_name: 'con_inn_Report.xlsm', rating: 10}
            ]
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
            let { business , period } = this.activeFilters
            var obj_filters = {business , period}
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
            let { period, business} = this.filters
            return {
                period: Object.keys(period).filter(c => period[c]),
                business: Object.keys(business).filter(c => business[c]),
                // online: Object.keys(online).filter(c => online[c])
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
            this.ActiveIndexRegion = index+11;
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


            var basicurl = '';
            var availableid = -1;

            switch (rep_id) {
                default:
                    if (this.list_reports[rep_id].file_postfix == 0) {
                        if (reg_id == 0) {
                            availableid = 0;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        } else if (reg_id > 0 && reg_id < 5) {
                            availableid = 1;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        } else if (reg_id >= 5 && reg_id < 11) {
                            availableid = 2;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        } else {
                            availableid = 3;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        }
                    } else {
                        if (reg_id == 0) {
                            availableid = 0;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        } else if (reg_id > 0 && reg_id < 5) {
                            availableid = 1;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        } else if (reg_id >= 5 && reg_id < 11) {
                            availableid = 2;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        } else {
                            availableid = 3;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + '_' + this.RegionData[reg_id].path + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension
                        }
                    }
                    break;

            }

                //alert(url);
                if (this.list_reports[rep_id].available[availableid]) {window.open(basicurl,"_self")}
                else {alert('К сожалению, такого отчета нет в выбранном Вами регионе/кластере')}
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
            // var online = []
            for(var p in this.list_reports){
                business.push(this.list_reports[p].business)
                period.push(this.list_reports[p].period)
                // online.push(this.list_reports[p].online)
            }
            var business_unique = business.filter(this.onlyUnique)
            var period_unique = period.filter(this.onlyUnique)
            // var online_unique = online.filter(this.onlyUnique)

            period_unique.forEach(e=>{
                this.$set(this.filters.period, e, false)
            })

            business_unique.forEach(e=>{
                this.$set(this.filters.business, e, false)
            })

            // online_unique.forEach(e=>{
            //     this.$set(this.filters.online, e, false)
            // })
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