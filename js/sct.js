"use strict";

$(function () {
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });
});

var STORAGE_KEY = 'mts-dash-region-P7oZi9sL';

Vue.component('modal', {
    template: '#modal-template'
});

var RegionStorage = {
    fetch: function fetch() {
        var select_region = localStorage.getItem(STORAGE_KEY);
        return select_region;
    },
    save: function save(select_region) {
        localStorage.setItem(STORAGE_KEY, select_region);
        shake();
    }
};

Array.prototype.contains = function (array) {
    return array.some(function (item) {
        return this.indexOf(item) !== -1;
    }, this);
};

function shake() {
    var box = document.getElementById("menu");
    box.style.animationName = null;
    box.offsetHeight; /* trigger reflow */
    box.style.animationName = "tada";
}

Vue.use(VueSmoothScroll);

new Vue({
    el: '#app',
    data: function data() {
        return {
            RegionData: [{ region: 'Россия', cluster: '', mr: '', reg_id: 0, cl_id: 0, sort_id: 0, ter_id: 0, folder: 'Отчетность КЦ', path: '', reg_type: 0 }, { region: 'Кластер «Растущий»', cluster: '', mr: '', reg_id: 1, cl_id: 0, sort_id: 1, ter_id: 0, folder: 'Отчетность по Кластеру', path: 'Кластер_Регионы роста', reg_type: 1 }, { region: 'Кластер «Сильный»', cluster: '', mr: '', reg_id: 2, cl_id: 0, sort_id: 2, ter_id: 0, folder: 'Отчетность по Кластеру', path: 'Кластер_Сильный', reg_type: 1 }, { region: 'Кластер «Лидер»', cluster: '', mr: '', reg_id: 3, cl_id: 0, sort_id: 3, ter_id: 0, folder: 'Отчетность по Кластеру', path: 'Кластер_Лидер', reg_type: 1 }, { region: 'Кластер «Эффективный»', cluster: '', mr: '', reg_id: 4, cl_id: 0, sort_id: 4, ter_id: 0, folder: 'Отчетность по Кластеру', path: 'Кластер_Эффективный', reg_type: 1 }, { region: 'Территория Крупные', cluster: '', mr: '', reg_id: 5, cl_id: 0, sort_id: 5, ter_id: 0, folder: 'Отчетность Территории', path: 'Тер_КРУПНЫЕ', reg_type: 2 }, { region: 'Территория Лидер', cluster: '', mr: '', reg_id: 6, cl_id: 0, sort_id: 6, ter_id: 0, folder: 'Отчетность Территории', path: 'Тер_ЛИДЕР', reg_type: 2 }, { region: 'Территория Роста', cluster: '', mr: '', reg_id: 7, cl_id: 0, sort_id: 7, ter_id: 0, folder: 'Отчетность Территории', path: 'Тер_РОСТА', reg_type: 2 }, { region: 'Территория Сильный', cluster: '', mr: '', reg_id: 8, cl_id: 0, sort_id: 8, ter_id: 0, folder: 'Отчетность Территории', path: 'Тер_СИЛЬНЫЙ', reg_type: 2 }, { region: 'Территория ТОП', cluster: '', mr: '', reg_id: 9, cl_id: 0, sort_id: 9, ter_id: 0, folder: 'Отчетность Территории', path: 'Тер_ТОП', reg_type: 2 }, { region: 'Территория Эффективный»', cluster: '', mr: '', reg_id: 10, cl_id: 0, sort_id: 10, ter_id: 0, folder: 'Отчетность Территории', path: 'Тер_ЭФФЕКТИВНЫЙ', reg_type: 2 }, { region: 'Алтайский край', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Сибирь', reg_id: 11, cl_id: 2, sort_id: 32, ter_id: 3, folder: 'Отчетность Регионы', path: 'Алтайский край', reg_type: 3 }, { region: 'Амурская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Дальний Восток', reg_id: 12, cl_id: 3, sort_id: 49, ter_id: 4, folder: 'Отчетность Регионы', path: 'Амурская область', reg_type: 3 }, { region: 'Архангельская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Северо-Запад', reg_id: 13, cl_id: 4, sort_id: 12, ter_id: 2, folder: 'Отчетность Регионы', path: 'Архангельская область', reg_type: 3 }, { region: 'Астраханская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Юг', reg_id: 14, cl_id: 5, sort_id: 71, ter_id: 6, folder: 'Отчетность Регионы', path: 'Астраханская область', reg_type: 3 }, { region: 'Белгородская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Центр', reg_id: 15, cl_id: 3, sort_id: 50, ter_id: 4, folder: 'Отчетность Регионы', path: 'Белгородская область', reg_type: 3 }, { region: 'Брянская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Центр', reg_id: 16, cl_id: 4, sort_id: 13, ter_id: 2, folder: 'Отчетность Регионы', path: 'Брянская область', reg_type: 3 }, { region: 'Владимирская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Центр', reg_id: 17, cl_id: 2, sort_id: 33, ter_id: 3, folder: 'Отчетность Регионы', path: 'Владимирская область', reg_type: 3 }, { region: 'Волгоградская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Юг', reg_id: 18, cl_id: 5, sort_id: 72, ter_id: 6, folder: 'Отчетность Регионы', path: 'Волгоградская область', reg_type: 3 }, { region: 'Вологодская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Северо-Запад', reg_id: 19, cl_id: 2, sort_id: 34, ter_id: 3, folder: 'Отчетность Регионы', path: 'Вологодская область', reg_type: 3 }, { region: 'Воронежская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr: 'МР Центр', reg_id: 20, cl_id: 2, sort_id: 35, ter_id: 1, folder: 'Отчетность Регионы', path: 'Воронежская область', reg_type: 3 }, { region: 'Забайкальский край', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Дальний Восток', reg_id: 21, cl_id: 3, sort_id: 51, ter_id: 4, folder: 'Отчетность Регионы', path: 'Забайкальский край', reg_type: 3 }, { region: 'Ивановская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Центр', reg_id: 22, cl_id: 4, sort_id: 14, ter_id: 2, folder: 'Отчетность Регионы', path: 'Ивановская область', reg_type: 3 }, { region: 'Иркутская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr: 'МР Дальний Восток', reg_id: 23, cl_id: 2, sort_id: 36, ter_id: 1, folder: 'Отчетность Регионы', path: 'Иркутская область', reg_type: 3 }, { region: 'Кабардино-Балкарская', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Юг', reg_id: 24, cl_id: 5, sort_id: 73, ter_id: 6, folder: 'Отчетность Регионы', path: 'Кабардино-Балкарская Республика', reg_type: 3 }, { region: 'Калининградская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Северо-Запад', reg_id: 25, cl_id: 5, sort_id: 74, ter_id: 6, folder: 'Отчетность Регионы', path: 'Калининградская область', reg_type: 3 }, { region: 'Калужская область', cluster: 'Лидер', territory: 'Тер_КРУПНЫЕ', mr: 'МР Центр', reg_id: 26, cl_id: 4, sort_id: 15, ter_id: 1, folder: 'Отчетность Регионы', path: 'Калужская область', reg_type: 3 }, { region: 'Камчатский край', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Дальний Восток', reg_id: 27, cl_id: 3, sort_id: 52, ter_id: 4, folder: 'Отчетность Регионы', path: 'Камчатский край', reg_type: 3 }, { region: 'Карачаево-Черкесская', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Юг', reg_id: 28, cl_id: 5, sort_id: 75, ter_id: 6, folder: 'Отчетность Регионы', path: 'Карачаево-Черкесская Республика', reg_type: 3 }, { region: 'Кемеровская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Сибирь', reg_id: 29, cl_id: 5, sort_id: 76, ter_id: 6, folder: 'Отчетность Регионы', path: 'Кемеровская область', reg_type: 3 }, { region: 'Кировская область', cluster: 'Сильный', territory: 'Тер_КРУПНЫЕ', mr: 'МР Поволжье', reg_id: 30, cl_id: 3, sort_id: 53, ter_id: 1, folder: 'Отчетность Регионы', path: 'Кировская область', reg_type: 3 }, { region: 'Костромская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Центр', reg_id: 31, cl_id: 4, sort_id: 16, ter_id: 2, folder: 'Отчетность Регионы', path: 'Костромская область', reg_type: 3 }, { region: 'Краснодарский край', cluster: 'Сильный', territory: 'Тер_ТОП', mr: 'МР Юг', reg_id: 32, cl_id: 3, sort_id: 54, ter_id: 5, folder: 'Отчетность Регионы', path: 'Краснодарский край', reg_type: 3 }, { region: 'Красноярский край', cluster: 'Лидер', territory: 'Тер_ТОП', mr: 'МР Сибирь', reg_id: 33, cl_id: 4, sort_id: 17, ter_id: 5, folder: 'Отчетность Регионы', path: 'Красноярский край', reg_type: 3 }, { region: 'Курганская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Урал', reg_id: 34, cl_id: 2, sort_id: 35, ter_id: 3, folder: 'Отчетность Регионы', path: 'Курганская область', reg_type: 3 }, { region: 'Курская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Центр', reg_id: 35, cl_id: 5, sort_id: 77, ter_id: 6, folder: 'Отчетность Регионы', path: 'Курская область', reg_type: 3 }, { region: 'Липецкая область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Центр', reg_id: 36, cl_id: 5, sort_id: 78, ter_id: 6, folder: 'Отчетность Регионы', path: 'Липецкая область', reg_type: 3 }, { region: 'Магаданская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Дальний Восток', reg_id: 37, cl_id: 3, sort_id: 55, ter_id: 4, folder: 'Отчетность Регионы', path: 'Магаданская область', reg_type: 3 }, { region: 'Москва и МО', cluster: 'Москва', territory: 'Тер_РОСТА', mr: 'МР Москва', reg_id: 38, cl_id: 1, sort_id: 11, ter_id: 3, folder: 'Отчетность Регионы', path: 'Москва и Московская область', reg_type: 3 }, { region: 'Мурманская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Северо-Запад', reg_id: 39, cl_id: 5, sort_id: 79, ter_id: 6, folder: 'Отчетность Регионы', path: 'Мурманская область', reg_type: 3 }, { region: 'Нижегородская область', cluster: 'Эффективный', territory: 'Тер_ТОП', mr: 'МР Поволжье', reg_id: 40, cl_id: 5, sort_id: 80, ter_id: 5, folder: 'Отчетность Регионы', path: 'Нижегородская область', reg_type: 3 }, { region: 'Новгородская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Северо-Запад', reg_id: 41, cl_id: 4, sort_id: 18, ter_id: 2, folder: 'Отчетность Регионы', path: 'Новгородская область', reg_type: 3 },
                // {region:'Новороссийск', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Центр', reg_id:42, cl_id:3, sort_id:56, ter_id: 5, folder: 'Отчетность Регионы', path:'Новороссийск', reg_type: 3},
                { region: 'Новосибирская область', cluster: 'Сильный', territory: 'Тер_ТОП', mr: 'МР Сибирь', reg_id: 43, cl_id: 3, sort_id: 57, ter_id: 5, folder: 'Отчетность Регионы', path: 'Новосибирская область', reg_type: 3 }, { region: 'Омская область', cluster: 'Растущий', territory: 'Тер_ТОП', mr: 'МР Сибирь', reg_id: 44, cl_id: 2, sort_id: 38, ter_id: 5, folder: 'Отчетность Регионы', path: 'Омская область', reg_type: 3 }, { region: 'Оренбургская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Поволжье', reg_id: 45, cl_id: 2, sort_id: 39, ter_id: 3, folder: 'Отчетность Регионы', path: 'Оренбургская область', reg_type: 3 }, { region: 'Орловская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Центр', reg_id: 46, cl_id: 4, sort_id: 19, ter_id: 2, folder: 'Отчетность Регионы', path: 'Орловская область', reg_type: 3 }, { region: 'Пензенская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Поволжье', reg_id: 47, cl_id: 5, sort_id: 81, ter_id: 6, folder: 'Отчетность Регионы', path: 'Пензенская область', reg_type: 3 }, { region: 'Пермский край', cluster: 'Лидер', territory: 'Тер_КРУПНЫЕ', mr: 'МР Урал', reg_id: 48, cl_id: 4, sort_id: 20, ter_id: 1, folder: 'Отчетность Регионы', path: 'Пермский край', reg_type: 3 }, { region: 'Приморский край', cluster: 'Сильный', territory: 'Тер_ТОП', mr: 'МР Дальний Восток', reg_id: 49, cl_id: 3, sort_id: 58, ter_id: 5, folder: 'Отчетность Регионы', path: 'Приморский край', reg_type: 3 }, { region: 'Псковская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Северо-Запад', reg_id: 50, cl_id: 3, sort_id: 59, ter_id: 4, folder: 'Отчетность Регионы', path: 'Псковская область', reg_type: 3 }, { region: 'Республика Алтай', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Сибирь', reg_id: 51, cl_id: 3, sort_id: 60, ter_id: 4, folder: 'Отчетность Регионы', path: 'Республика Алтай', reg_type: 3 }, { region: 'Республика Башкортостан', cluster: 'Сильный', territory: 'Тер_ТОП', mr: 'МР Поволжье', reg_id: 52, cl_id: 3, sort_id: 61, ter_id: 5, folder: 'Отчетность Регионы', path: 'Республика Башкортостан', reg_type: 3 }, { region: 'Республика Бурятия', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Дальний Восток', reg_id: 53, cl_id: 4, sort_id: 21, ter_id: 2, folder: 'Отчетность Регионы', path: 'Республика Бурятия', reg_type: 3 }, { region: 'Республика Дагестан', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Юг', reg_id: 54, cl_id: 2, sort_id: 40, ter_id: 3, folder: 'Отчетность Регионы', path: 'Республика Дагестан', reg_type: 3 }, { region: 'Республика Ингушетия', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Юг', reg_id: 55, cl_id: 5, sort_id: 82, ter_id: 6, folder: 'Отчетность Регионы', path: 'Республика Ингушетия', reg_type: 3 }, { region: 'Республика Карелия', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Северо-Запад', reg_id: 56, cl_id: 4, sort_id: 22, ter_id: 2, folder: 'Отчетность Регионы', path: 'Республика Карелия', reg_type: 3 }, { region: 'Республика Коми', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Северо-Запад', reg_id: 57, cl_id: 3, sort_id: 62, ter_id: 4, folder: 'Отчетность Регионы', path: 'Республика Коми', reg_type: 3 }, { region: 'Республика Марий Эл', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Поволжье', reg_id: 58, cl_id: 4, sort_id: 23, ter_id: 2, folder: 'Отчетность Регионы', path: 'Республика Марий Эл', reg_type: 3 }, { region: 'Республика Мордовия', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Поволжье', reg_id: 59, cl_id: 5, sort_id: 83, ter_id: 6, folder: 'Отчетность Регионы', path: 'Республика Мордовия', reg_type: 3 }, { region: 'Республика Саха (Якутия)', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Дальний Восток', reg_id: 60, cl_id: 4, sort_id: 24, ter_id: 2, folder: 'Отчетность Регионы', path: 'Республика Саха (Якутия)', reg_type: 3 }, { region: 'Республика Северная Осетия', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Юг', reg_id: 61, cl_id: 3, sort_id: 63, ter_id: 4, folder: 'Отчетность Регионы', path: 'Республика Северная Осетия-Алания', reg_type: 3 }, { region: 'Республика Татарстан', cluster: 'Сильный', territory: 'Тер_ТОП', mr: 'МР Поволжье', reg_id: 62, cl_id: 3, sort_id: 64, ter_id: 5, folder: 'Отчетность Регионы', path: 'Республика Татарстан', reg_type: 3 }, { region: 'Республика Тыва', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Сибирь', reg_id: 63, cl_id: 5, sort_id: 84, ter_id: 6, folder: 'Отчетность Регионы', path: 'Республика Тыва', reg_type: 3 }, { region: 'Республика Хакасия', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Сибирь', reg_id: 64, cl_id: 2, sort_id: 41, ter_id: 3, folder: 'Отчетность Регионы', path: 'Республика Хакасия', reg_type: 3 }, { region: 'Ростовская область', cluster: 'Лидер', territory: 'Тер_ТОП', mr: 'МР Юг', reg_id: 65, cl_id: 4, sort_id: 25, ter_id: 5, folder: 'Отчетность Регионы', path: 'Ростовская область', reg_type: 3 }, { region: 'Рязанская область', cluster: 'Сильный', territory: 'Тер_КРУПНЫЕ', mr: 'МР Центр', reg_id: 66, cl_id: 3, sort_id: 65, ter_id: 1, folder: 'Отчетность Регионы', path: 'Рязанская область', reg_type: 3 }, { region: 'Самарская область', cluster: 'Растущий', territory: 'Тер_ТОП', mr: 'МР Поволжье', reg_id: 67, cl_id: 2, sort_id: 42, ter_id: 5, folder: 'Отчетность Регионы', path: 'Самарская область', reg_type: 3 }, { region: 'Санкт-Петербург', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Северо-Запад', reg_id: 68, cl_id: 2, sort_id: 43, ter_id: 3, folder: 'Отчетность Регионы', path: 'Санкт-Петербург и Ленинградская область', reg_type: 3 }, { region: 'Саратовская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr: 'МР Поволжье', reg_id: 69, cl_id: 2, sort_id: 44, ter_id: 1, folder: 'Отчетность Регионы', path: 'Саратовская область', reg_type: 3 }, { region: 'Сахалинская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Дальний Восток', reg_id: 70, cl_id: 3, sort_id: 66, ter_id: 4, folder: 'Отчетность Регионы', path: 'Сахалинская область', reg_type: 3 }, { region: 'Свердловская область', cluster: 'Лидер', territory: 'Тер_ТОП', mr: 'МР Урал', reg_id: 71, cl_id: 4, sort_id: 26, ter_id: 5, folder: 'Отчетность Регионы', path: 'Свердловская область', reg_type: 3 }, { region: 'Смоленская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Центр', reg_id: 72, cl_id: 4, sort_id: 27, ter_id: 2, folder: 'Отчетность Регионы', path: 'Смоленская область', reg_type: 3 },
                // {region:'Сочи', cluster: 'Сильный', territory: 'Тер_ТОП', mr:'МР Центр', reg_id:73, cl_id:3, sort_id:67, ter_id: 0, folder: 'Отчетность Регионы', path:'Сочи', reg_type: 3},
                { region: 'Ставропольский край', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Юг', reg_id: 74, cl_id: 2, sort_id: 45, ter_id: 3, folder: 'Отчетность Регионы', path: 'Ставропольский край', reg_type: 3 }, { region: 'Тамбовская область', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Центр', reg_id: 75, cl_id: 3, sort_id: 68, ter_id: 4, folder: 'Отчетность Регионы', path: 'Тамбовская область', reg_type: 3 }, { region: 'Тверская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Центр', reg_id: 76, cl_id: 4, sort_id: 28, ter_id: 2, folder: 'Отчетность Регионы', path: 'Тверская область', reg_type: 3 }, { region: 'Томская область', cluster: 'Лидер', territory: 'Тер_ЛИДЕР', mr: 'МР Сибирь', reg_id: 77, cl_id: 4, sort_id: 29, ter_id: 2, folder: 'Отчетность Регионы', path: 'Томская область', reg_type: 3 }, { region: 'Тульская область', cluster: 'Растущий', territory: 'Тер_РОСТА', mr: 'МР Центр', reg_id: 78, cl_id: 2, sort_id: 46, ter_id: 3, folder: 'Отчетность Регионы', path: 'Тульская область', reg_type: 3 }, { region: 'Тюменская область', cluster: 'Сильный', territory: 'Тер_КРУПНЫЕ', mr: 'МР Урал', reg_id: 79, cl_id: 3, sort_id: 69, ter_id: 1, folder: 'Отчетность Регионы', path: 'Тюменская область', reg_type: 3 }, { region: 'Удмуртская Республика', cluster: 'Сильный', territory: 'Тер_СИЛЬНЫЙ', mr: 'МР Поволжье', reg_id: 80, cl_id: 3, sort_id: 70, ter_id: 4, folder: 'Отчетность Регионы', path: 'Удмуртская Республика', reg_type: 3 }, { region: 'Ульяновская область', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Поволжье', reg_id: 81, cl_id: 5, sort_id: 85, ter_id: 6, folder: 'Отчетность Регионы', path: 'Ульяновская область', reg_type: 3 }, { region: 'Хабаровский край', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr: 'МР Дальний Восток', reg_id: 82, cl_id: 2, sort_id: 47, ter_id: 1, folder: 'Отчетность Регионы', path: 'Хабаровский край', reg_type: 3 }, { region: 'Ханты-Мансийский округ', cluster: 'Лидер', territory: 'Тер_ТОП', mr: 'МР Урал', reg_id: 83, cl_id: 4, sort_id: 30, ter_id: 5, folder: 'Отчетность Регионы', path: 'Ханты-Мансийский авт.округ', reg_type: 3 }, { region: 'Челябинская область', cluster: 'Растущий', territory: 'Тер_КРУПНЫЕ', mr: 'МР Урал', reg_id: 84, cl_id: 2, sort_id: 48, ter_id: 1, folder: 'Отчетность Регионы', path: 'Челябинская область', reg_type: 3 }, { region: 'Чеченская Республика', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Юг', reg_id: 85, cl_id: 5, sort_id: 86, ter_id: 6, folder: 'Отчетность Регионы', path: 'Чеченская Республика', reg_type: 3 }, { region: 'Чувашская республика', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Поволжье', reg_id: 86, cl_id: 5, sort_id: 87, ter_id: 6, folder: 'Отчетность Регионы', path: 'Чувашская республика', reg_type: 3 }, { region: 'Ямало-Ненецкий округ', cluster: 'Эффективный', territory: 'Тер_ЭФФЕКТИВНЫЙ', mr: 'МР Урал', reg_id: 87, cl_id: 5, sort_id: 88, ter_id: 6, folder: 'Отчетность Регионы', path: 'Ямало-Ненецкий авт.округ', reg_type: 3 }, { region: 'Ярославская область', cluster: 'Лидер', territory: 'Тер_КРУПНЫЕ', mr: 'МР Центр', reg_id: 88, cl_id: 4, sort_id: 31, ter_id: 1, folder: 'Отчетность Регионы', path: 'Ярославская область', reg_type: 3 }],
            Reports: [{ name: 'WEEK', path: '12.Еженедельный_отчет', file: 'Week_КЦ_', extension: '.xlsb', file_cluster: 'Week_КЦ', prefix: ['_РФ', '_Регионы Роста', '_Сильный', '_Лидер', '_Эффективный'] }, { name: 'BOPOS', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster: 'BOPOS', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'DFIN', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster: 'DFIN', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'FIX', path: '03.Фиксированный_Бизнес', file: 'FIX_FIB', extension: '.xlsb', file_cluster: '03.FIX_FIB', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'WEEK', path: '12.Еженедельный_отчет', file: 'Week_КЦ_', extension: '.xlsb', file_cluster: 'Week_КЦ', prefix: ['_РФ', '_Регионы Роста', '_Сильный', '_Лидер', '_Эффективный'] }, { name: 'BOPOS', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster: 'BOPOS', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'DFIN', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster: 'DFIN', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'FIX', path: '03.Фиксированный_Бизнес', file: 'FIX_FIB', extension: '.xlsb', file_cluster: '03.FIX_FIB', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'WEEK', path: '12.Еженедельный_отчет', file: 'Week_КЦ_', extension: '.xlsb', file_cluster: 'Week_КЦ', prefix: ['_РФ', '_Регионы Роста', '_Сильный', '_Лидер', '_Эффективный'] }, { name: 'BOPOS', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster: 'BOPOS', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'DFIN', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster: 'DFIN', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'FIX', path: '03.Фиксированный_Бизнес', file: 'FIX_FIB', extension: '.xlsb', file_cluster: '03.FIX_FIB', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'WEEK', path: '12.Еженедельный_отчет', file: 'Week_КЦ_', extension: '.xlsb', file_cluster: 'Week_КЦ', prefix: ['_РФ', '_Регионы Роста', '_Сильный', '_Лидер', '_Эффективный'] }, { name: 'BOPOS', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (BOPOS)', extension: '.xlsb', file_cluster: 'BOPOS', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'DFIN', path: '02.Мобильный_Бизнес', file: 'Мобильный бизнес (DFIN)', extension: '.xlsb', file_cluster: 'DFIN', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'FIX', path: '03.Фиксированный_Бизнес', file: 'FIX_FIB', extension: '.xlsb', file_cluster: '03.FIX_FIB', prefix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'] }, { name: 'WEEK', path: '12.Еженедельный_отчет', file: 'Week_КЦ_', extension: '.xlsb', file_cluster: 'Week_КЦ', prefix: ['_РФ', '_Регионы Роста', '_Сильный', '_Лидер', '_Эффективный'] }],
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
            list_reports: [{ id: 0, name: 'ИНН и Контракты', indicators: ['Абоненты', 'Контракты', 'ИНН'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true, true, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-user-o fa-3x', description: 'Отчет B2B, который содержит абонентскую базу(ПО), контракты, ИНН мобильного и фиксированного бизнеса в разрезе сегменов', basic_folder: '09.ИНН', file_name: 'con_inn_Report', year: '', month: '', file_extension: '.xlsm', file_prefix: '', file_postfix: 0, rating: 10, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 1, name: 'Миграции B2B', indicators: ['Миграции'], aggregation: ['РФ', 'Регионы'], available: [true, false, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Иванова Светлана Николаевна', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-exchange fa-3x', description: 'Отчет по миграциям B2B между сегментами массового и корпоративного рынка в доходах и абонентах', basic_folder: '11.Миграции', file_name: 'Migration_report', year: '', month: '', file_extension: '.xlsx', file_prefix: '', file_postfix: 0, rating: 10, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 2, name: 'Модель RN и RL', indicators: ['RN', 'RL'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true, true, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-group fa-3x', description: 'Отчет содержит динамику новых доходов (RN) и упущенных доходов (RL) в разрезе терифных планов, сегментов и подсегментов B2B', basic_folder: '06.RN_RL_model', file_name: 'RN_Model', year: '_2018', month: '', file_extension: '.xlsb', file_prefix: '06.', file_postfix: ['_РФ', '_Растущий', '_Сильный', '_Лидер', '_Эффективный'], rating: 8, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 3, name: 'MNP B2B', indicators: ['MNP'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true, true, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-bar-chart fa-3x', description: 'Отчет показывает отток и приток абонентов и доходов B2B в результате MNP (Смена оператора с сохранением номера)', basic_folder: '15.MNP', file_name: 'MNP_B2B', year: '_2018', month: '', file_extension: '.xlsb', file_prefix: '', file_postfix: 0, rating: 4, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 4, name: 'MNP B2B (Детальный)', indicators: ['MNP'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true, true, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', report_format: 'Выгрузка', period: 'Месяц', business: 'B2B', iclass: 'fa fa-search-plus fa-3x', description: 'Детальная выгрузка показывает отток и приток абонентов и доходов B2B в результате MNP (Смена оператора с сохранением номера)', basic_folder: '15.MNP', file_name: 'MNP_B2B_DETAL', year: '', month: '', file_extension: '.xlsb', file_prefix: '', file_postfix: ['', '_Кластер_Регионы роста', '_Сильный', '_Лидер', '_Эффективный'], rating: 7, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 5, name: 'Дебиторская задолжность', indicators: ['Дебиторская задолжность'], aggregation: ['РФ', 'Кластеры', 'Регионы'], available: [true, true, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Версионное', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-thumb-tack fa-3x', description: 'Динамика и структура дебиторской задолжности в сегментах корпоративного рынка для мобильного и фиксированного бизнеса', basic_folder: '17.ДЗ', file_name: 'DEBT', year: '_2018', month: '03', file_extension: '.xlsx', file_prefix: '', file_postfix: 0, rating: 3, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 6, name: 'Абонентское оборудование', indicators: ['Оборудование'], aggregation: ['Регионы'], available: [false, false, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-fax fa-3x', description: 'Распределение доходов, абонентской базы B2B и B2C по оборудованию, стандарту связи, OS', basic_folder: '27.Абонентское_оборудование', file_name: 'АО', year: '', month: '', file_extension: '.xlsb', file_prefix: '', file_postfix: 0, rating: 3, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 7, name: 'Эффективность продаж B2B', indicators: ['Эффективность'], aggregation: ['РФ'], available: [true, false, false, false], detail_level: 'Сотрудник', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Квартал', main_user: 'Тараканов Александр', dash: '', report_format: 'Электронная таблица', period: 'Квартал', business: 'B2B', iclass: 'fa fa-line-chart fa-3x', description: 'Отчет эффективности сотрудников продаж B2B', basic_folder: '31. Эффективность сотурдников продаж', file_name: 'Эффективность v3', year: '', month: '', file_extension: '.xlsx', file_prefix: '', file_postfix: 0, rating: 3, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 8, name: 'Еженедельный MOB (Детальный)', indicators: ['Портфель', 'RN', 'RL'], aggregation: ['Территории'], available: [false, false, true, false], detail_level: 'Сотрудник', update_date: 'now', update_type: 'Версионное', update_period: 'Неделя', main_user: 'Моторико Андрей', dash: '', report_format: 'Электронная таблица', period: 'Неделя', business: 'B2B', iclass: 'fa fa-mobile-phone fa-3x', description: 'Отчет с основными бизнес-показателями мобильного бизнеса B2B с детализацией до каналов продаж, отделов и сотрудников', basic_folder: 'WD', file_name: 'WD', year: '_2018', month: '04', file_extension: '.xlsb', file_prefix: '', file_postfix: ['', '', '', '', '', '_Тер_КРУПНЫЕ', '_Тер_ЛИДЕР', '_Тер_РОСТА', '_Тер_СИЛЬНЫЙ', 'Тер_ТОП', 'Тер_ЭФФЕКТИВНЫЙ'], rating: 3, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 9, name: 'Еженедельный FIX (Детальный)', indicators: ['Портфель', 'RN'], aggregation: ['Территории'], available: [false, false, true, false], detail_level: 'Сотрудник', update_date: 'now', update_type: 'Версионное', update_period: 'Неделя', main_user: 'Моторико Андрей', dash: '', report_format: 'Электронная таблица', period: 'Неделя', business: 'B2B', iclass: 'fa fa-phone fa-3x', description: 'Отчет с основными бизнес-показателями фиксированого бизнеса B2B с детализацией до каналов продаж, отделов и сотрудников', basic_folder: 'WD', file_name: 'WD_FIX', year: '_2018', month: '04', file_extension: '.xlsx', file_prefix: '', file_postfix: ['', '', '', '', '', '_Тер_КРУПНЫЕ', '_Тер_ЛИДЕР', '_Тер_РОСТА', '_Тер_СИЛЬНЫЙ', 'Тер_ТОП', 'Тер_ЭФФЕКТИВНЫЙ'], rating: 3, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 10, name: 'Еженедельный отчет WEEK', indicators: ['Портфель', 'RN', 'RL', 'VAS', 'Cloud', 'ioT', 'Системная интеграция', 'Привлечение', 'Развитие'], aggregation: ['РФ', 'Кластеры'], available: [true, true, false, false], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Неделя', main_user: 'Манукян Виктория', dash: '', report_format: 'Электронная таблица', period: 'Неделя', business: 'B2B', iclass: 'fa fa-bolt fa-3x', description: 'Оперативный отчет с основными показателями мобильного и фиксированного бизнеса', basic_folder: '12.Еженедельный_отчет', file_name: 'Week_КЦ', year: '', month: '', file_extension: '.xlsb', file_prefix: '', file_postfix: ['_РФ', '_Растущий', '_Сильный', '_Лидер', '_Эффективный'], rating: 10, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 11, name: 'Mобильный бизнес BOPOS', indicators: ['Доходы', 'База', 'Трафик'], aggregation: ['РФ', 'Кластеры'], available: [true, true, false, false], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Гладков Владимир', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-mobile fa-3x', description: 'Отчет содержит основные показатели мобильного бизнеса: выручка, база, трафик', basic_folder: '02.Мобильный_Бизнес', file_name: 'BOPOS', year: '', month: '', file_extension: '.xlsb', file_prefix: '', file_postfix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'], rating: 10, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 12, name: 'Mобильный бизнес DFIN', indicators: ['Доходы', 'База', 'Трафик', 'm2m', 'Активация'], aggregation: ['РФ', 'Кластеры'], available: [true, true, false, false], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Гладков Владимир', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-mobile fa-3x', description: 'Отчет содержит основные показатели мобильного бизнеса: выручка, база, трафик', basic_folder: '02.Мобильный_Бизнес', file_name: 'DFIN', year: '', month: '', file_prefix: '', file_extension: '.xlsb', file_postfix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'], rating: 10, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 13, name: 'Фиксированный бизнec FIB', indicators: ['Доходы', 'Услуги', 'База'], aggregation: ['РФ', 'Кластеры'], available: [true, true, false, false], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Гладков Владимир', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-phone fa-3x', description: 'Отчет содержит основные показатели фиксированного бизнеса: выручка, база, трафик', basic_folder: '03.Фиксированный_Бизнес', file_name: 'FIX_FIB', year: '', month: '', file_extension: '.xlsb', file_prefix: '03.', file_postfix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'], rating: 10, online: 'Offline', fa_color: '#555', reg_delimiter: '_' }, { id: 14, name: 'Power Perfomance', indicators: ['OIBDA', 'Capex', 'OPEX', 'Рейтинг', 'Доходы', 'CDR', '3m База', '3m Отток', '1m База', '7D', 'Активации', 'RN', 'Миграции', 'm2m', 'Cloud', 'IoT', 'СИ', 'SAT', 'Базовые Станции', 'VLR'], aggregation: ['РФ', 'Кластеры'], available: [true, true, true, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивное', update_period: 'Месяц', main_user: 'Моторико Андрей', dash: '', report_format: 'Онлайн отчет', period: 'Месяц', business: 'Смешанное', iclass: 'fa fa-window-restore fa-3x', description: 'Онлайн отчет по основными финансовыми и маркетинговыми показателями компании с выделением направлений B2B, B2C, СИ и драйверов бизнеса', basic_folder: '03.Фиксированный_Бизнес', file_name: 'FIX_FIB', year: '', month: '', file_extension: '.xlsb', file_prefix: '', file_postfix: ['_РОССИЯ', '_РЕГИОНЫ РОСТА', '_СИЛЬНЫЙ', '_ЛИДЕР', '_ЭФФЕКТИВНЫЙ'], rating: 10, online: 'Online', fa_color: '#555', reg_delimiter: '_' }, { id: 15, name: 'Отчет по VAS-услугам', indicators: ['VAS'], aggregation: ['Регионы'], available: [false, false, false, true], detail_level: 'Регион', update_date: 'now', update_type: 'Кумулятивнoe', update_period: 'Неделя', main_user: 'Шевченко Наталья', dash: '', report_format: 'Электронная таблица', period: 'Месяц', business: 'B2B', iclass: 'fa fa-phone fa-3x', description: 'Региональный отчет с портфелем, базой и контрактами VAS', basic_folder: '07.VAS', file_name: 'VAS', year: '_2018', month: '04', file_extension: '.xlsb', file_prefix: '', file_postfix: 1, rating: 3, online: 'Offline', fa_color: '#555', reg_delimiter: ' ' }],
            menus: { period: false, business: false, indicators: false, detail_level: false, report_format: false },
            filters: {
                period: {},
                business: {},
                indicators: {},
                detail_level: {},
                report_format: {},
                rating: { min: 10, max: 0 }
            },
            dropdown: { height: 0 },
            rating: { min: 0, max: 10
                //-----------------------------------//
            } };
    },

    watch: {
        select_region: {
            handler: function handler(select_region) {
                RegionStorage.save(select_region);
            }
        },
        showModal: function showModal() {
            if (this.showModal == false) {
                if (this.select_region !== null && this.request_report !== null) {
                    var rep_id = this.request_report;
                    this.request_report = null;
                    this.OpenReport(rep_id);
                } else {
                    this.request_report = null;
                }
            }
        },
        activeMenu: function activeMenu(index, from) {
            var _this = this;

            if (index === from) return;

            this.$nextTick(function () {
                if (!_this.$refs.menu || !_this.$refs.menu[index]) {
                    _this.dropdown.height = 0;
                } else {
                    _this.dropdown.height = _this.$refs.menu[index].clientHeight + 10 + 'px';
                }
            });
        }
    },
    computed: {
        filteredAndSortedData: function filteredAndSortedData() {
            var result = this.RegionData;
            var ascDesc = this.sortAsc ? 1 : -1;

            if (this.sortAsc == true) {
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
        activeMenu: function activeMenu() {
            var _this2 = this;

            return Object.keys(this.menus).reduce(function ($$, set, i) {
                return _this2.menus[set] ? i : $$;
            }, -1);
        },
        list: function list() {
            var counter_filters = 0;
            var _activeFilters = this.activeFilters,
                business = _activeFilters.business,
                period = _activeFilters.period,
                indicators = _activeFilters.indicators,
                detail_level = _activeFilters.detail_level,
                report_format = _activeFilters.report_format;

            var obj_filters = { business: business, period: period, indicators: indicators, detail_level: detail_level, report_format: report_format };
            for (var n in obj_filters) {
                obj_filters[n].length !== 0 ? counter_filters += 1 : counter_filters = counter_filters;
            }
            return this.list_reports.filter(function (e) {
                var counter_instance = 0;
                for (var m in obj_filters) {
                    if (obj_filters[m].length !== 0) {
                        if ($.isArray(e[m]) && e[m].contains(obj_filters[m])) {
                            counter_instance += 1;
                        } else if (!$.isArray(e[m]) && obj_filters[m].indexOf(e[m]) !== -1) {
                            counter_instance += 1;
                        }
                    }
                }
                if (counter_instance == counter_filters) {
                    return e;
                } else {
                    return false;
                }
            });
        },
        activeFilters: function activeFilters() {
            var _filters = this.filters,
                period = _filters.period,
                business = _filters.business,
                indicators = _filters.indicators,
                detail_level = _filters.detail_level,
                report_format = _filters.report_format;

            return {
                period: Object.keys(period).filter(function (c) {
                    return period[c];
                }),
                business: Object.keys(business).filter(function (c) {
                    return business[c];
                }),
                indicators: Object.keys(indicators).filter(function (c) {
                    return indicators[c];
                }),
                detail_level: Object.keys(detail_level).filter(function (c) {
                    return detail_level[c];
                }),
                report_format: Object.keys(report_format).filter(function (c) {
                    return report_format[c];
                })
            };
        }
        //------------------------//

    },
    methods: {
        InvertSort: function InvertSort() {
            this.sortAsc = !this.sortAsc;
        },
        ReturnClass: function ReturnClass(item, index) {
            var cl = "";
            var find_substtring = item.region.toLowerCase().indexOf(this.FilterRegion.toLowerCase()) != -1;
            var find_cluster = this.FilterCluster == item.cl_id || this.FilterCluster == 0;
            if (find_substtring && find_cluster) {
                cl = "finditem";
            } else {
                cl = "nofinditem";
            }
            return cl + " cl_" + item.cl_id;
        },
        SetClusterFilter: function SetClusterFilter(filter_id) {
            this.FilterCluster = filter_id;
        },
        ClickRegion: function ClickRegion(reg_id) {
            this.select_region = reg_id;
            this.showModal = false;
        },
        SetActiveIndexRegion: function SetActiveIndexRegion(index) {
            this.ActiveIndexRegion = index + 11;
        },
        ClearActiveIndexRegion: function ClearActiveIndexRegion() {
            this.ActiveIndexRegion = -1;
        },
        OpenReport: function OpenReport(rep_id) {

            var reg = this.select_region;
            var url = '';
            var delimiter = '';
            var domen = '';

            if (reg === null) {
                this.request_report = rep_id;
                this.showModal = true;
            } else {
                // Ищем индекс текущего региона и сохраняем в reg_id
                var reg_id = this.RegionData.map(function (element) {
                    return element.region;
                }).indexOf(reg);
                //let reg_id = this.RegionData.findIndex(function(element) { return element.region == reg; });

                if (this.RegionData[reg_id].path) {
                    delimiter = "/";
                };

                var basicurl = '';
                var availableid = -1;
                var version = '';
                rep_id == 9 ? version = '2' : version = '';
                if (this.list_reports[rep_id].online === 'Offline') {
                    domen = 'http://skr13.mts.ru/bpo/d/drbr/DocLib1/';
                } else {
                    domen = 'http://mtsdash.ru:8088/superset/dashboard/';
                }

                switch (rep_id) {
                    //------------Unique reports-------//
                    case 8:
                        if (reg_id >= 5 && reg_id < 11) {
                            availableid = 2;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + version + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                        } else if (reg_id >= 11 && (this.RegionData[reg_id].region == 'Санкт-Петербург' || this.RegionData[reg_id].region == 'Москва и МО')) {
                            availableid = 2; //Actually, it's 3, but in case of satisfying the validation conditions
                            if (this.RegionData[reg_id].region == 'Санкт-Петербург') {
                                basicurl = 'http://skr13.mts.ru/bpo/d/drbr/DocLib1/Отчетность Территории/Москва/WD/WD_Питер_201804.xlsb';
                            } else if (this.RegionData[reg_id].region == 'Москва и МО') {
                                basicurl = 'http://skr13.mts.ru/bpo/d/drbr/DocLib1/Отчетность Территории/Москва/WD/WD_Москва_201804.xlsb';
                            }
                        }
                        break;
                    case 9:
                        if (reg_id >= 5 && reg_id < 11) {
                            availableid = 2;
                            basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + version + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                        } else if (reg_id >= 11 && (this.RegionData[reg_id].region == 'Санкт-Петербург' || this.RegionData[reg_id].region == 'Москва и МО')) {
                            availableid = 2; //Actually, it's 3, but in case of satisfying the validation conditions
                            if (this.RegionData[reg_id].region == 'Санкт-Петербург') {
                                basicurl = 'http://skr13.mts.ru/bpo/d/drbr/DocLib1/Отчетность Территории/Москва/WD/WD_FIX_Питер_201804.xlsb';
                            } else if (this.RegionData[reg_id].region == 'Москва и МО') {
                                basicurl = 'http://skr13.mts.ru/bpo/d/drbr/DocLib1/Отчетность Территории/Москва/WD/WD_FIX_Москва_201804.xlsb';
                            }
                        }
                        break;
                    //------Default path settings-----//
                    default:
                        if (this.list_reports[rep_id].file_postfix == 0) {
                            if (reg_id == 0) {
                                availableid = 0;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            } else if (reg_id > 0 && reg_id < 5) {
                                availableid = 1;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            } else if (reg_id >= 5 && reg_id < 11) {
                                availableid = 2;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            } else {
                                availableid = 3;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            }
                        } else {
                            if (reg_id == 0) {
                                availableid = 0;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            } else if (reg_id > 0 && reg_id < 5) {
                                availableid = 1;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            } else if (reg_id >= 5 && reg_id < 11) {
                                availableid = 2;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].file_postfix[reg_id] + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            } else {
                                availableid = 3;
                                basicurl = domen + this.RegionData[reg_id].folder + '/' + this.RegionData[reg_id].path + '/' + this.list_reports[rep_id].basic_folder + '/' + this.list_reports[rep_id].file_name + this.list_reports[rep_id].reg_delimiter + this.RegionData[reg_id].path + this.list_reports[rep_id].year + this.list_reports[rep_id].month + this.list_reports[rep_id].file_extension;
                            }
                        }
                        break;

                }

                //alert(url);
                if (this.list_reports[rep_id].available[availableid] && basicurl !== '') {
                    window.open(basicurl, "_self");
                } else {
                    alert('К сожалению, такого отчета нет в выбранном Вами регионе/кластере');
                }
            }
        }
        //---------------Added---------------//

        ,
        setMenu: function setMenu(menu, active) {
            var _this3 = this;

            Object.keys(this.menus).forEach(function (tab) {
                _this3.menus[tab] = !active && tab === menu;
            });
        },

        setFilter: function setFilter(filter, option) {
            this.filters[filter][option] = !this.filters[filter][option];

            $(function () {
                $('[data-toggle="popover"]').popover({
                    container: 'body'
                });
            });
            // setTimeout(() => {
            //     this.clearFilter(filter, option, this.filters[filter][option])
            // }, 100)
        },
        clearFilter: function clearFilter(filter, except, active) {
            var _this4 = this;

            if (filter === 'rating') {
                this.filters[filter] = this.rating.min;
            } else {
                Object.keys(this.filters[filter]).forEach(function (option) {
                    _this4.filters[filter][option] = except === option && !active;
                });
            }
        },
        clearAllFilters: function clearAllFilters() {
            Object.keys(this.filters).forEach(this.clearFilter);
        },
        setMinRating: function setMinRating() {
            var min = 100000000000000000000;
            for (var m in this.list_reports) {
                this.list_reports[m].rating < min ? min = this.list_reports[m].rating : min = min;
            }
            this.rating.min = min;
        },
        setMaxRating: function setMaxRating() {
            var max = 0;
            for (var m in this.list_reports) {
                this.list_reports[m].rating > max ? max = this.list_reports[m].rating : max = max;
            }
            this.rating.max = max;
        },
        onlyUnique: function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        },


        //Находим уникальные значения из свойств-фильтров объекта list_reports и передаем их в качестве фильтров в объект filters//
        setUniqueProperties: function setUniqueProperties() {
            var _this5 = this;

            var business = [];
            var period = [];
            var indicators = [];
            var report_format = [];
            var detail_level = [];

            for (var p = 0; p < this.list_reports.length; p++) {
                business.push(this.list_reports[p].business);
                period.push(this.list_reports[p].period);
                indicators = indicators.concat(this.list_reports[p].indicators);
                report_format.push(this.list_reports[p].report_format);
                detail_level.push(this.list_reports[p].detail_level);
            }
            var business_unique = business.filter(this.onlyUnique);
            var period_unique = period.filter(this.onlyUnique);
            var indicators_unique = indicators.filter(this.onlyUnique);
            var report_format_unique = report_format.filter(this.onlyUnique);
            var detail_level_unique = detail_level.filter(this.onlyUnique);

            period_unique.forEach(function (e) {
                _this5.$set(_this5.filters.period, e, false);
            });

            business_unique.forEach(function (e) {
                _this5.$set(_this5.filters.business, e, false);
            });

            indicators_unique.forEach(function (e) {
                _this5.$set(_this5.filters.indicators, e, false);
            });

            report_format_unique.forEach(function (e) {
                _this5.$set(_this5.filters.report_format, e, false);
            });

            detail_level_unique.forEach(function (e) {
                _this5.$set(_this5.filters.detail_level, e, false);
            });
        },
        dictionary: function dictionary(word) {
            switch (word) {
                case 'period':
                    return 'Период';
                    break;
                case 'business':
                    return 'Бизнес';
                    break;
                case 'indicators':
                    return 'Индикаторы';
                    break;
                case 'online':
                    return 'Онлайн';
                    break;
                case 'detail_level':
                    return 'Детализация';
                    break;
                case 'report_format':
                    return 'Формат';
                    break;
                default:
                    return word;
                    break;
            }
        }
        //-----------------------------------//

    },

    beforeMount: function beforeMount() {
        this.setMinRating();
        this.setMaxRating();
        this.filters.rating = this.rating.min;
        this.setUniqueProperties();
    }
});