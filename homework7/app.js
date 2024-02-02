Array.prototype.skip = function (count){
    return this.slice(count)
}
Array.prototype.take = function (count){
    return this.slice(0, count);
}
//JSON - JavaScript Object Notation

const quotesJson = `[{"author":"Наполеон Хилл","text":"Что разум человека может постигнуть и во что он может поверить, того он способен достичь"},{"author":"Альберт Эйнштейн","text":"Стремитесь не к успеху, а к ценностям, которые он дает"},{"author":"Флоренс Найтингейл","text":"Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других."},{"author":"Майкл Джордан","text":"За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр. 26 раз мне доверяли сделать финальный победный бросок, и я промахивался. Я терпел поражения снова, и снова, и снова. И именно поэтому я добился успеха."},{"author":"Амелия Эрхарт","text":"Сложнее всего начать действовать, все остальное зависит только от упорства."},{"author":"Федор Достоевский","text":"Надо любить жизнь больше, чем смысл жизни."},{"author":"Джон Леннон","text":"Жизнь - это то, что с тобой происходит, пока ты строишь планы."},{"author":"Альберт Эйнштейн","text":"Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно."},{"author":"Марк Твен","text":" Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали. Так отчальте от тихой пристани. Почувствуйте попутный ветер в вашем парусе. Двигайтесь вперед, действуйте, открывайте!"},{"author":"Борис Стругацкий","text":"Начинать всегда стоит с того, что сеет сомнения."},{"author":"Фазиль Искандер","text":"Настоящая ответственность бывает только личной. "},{"author":"Сократ","text":"Неосмысленная жизнь не стоит того, чтобы жить."},{"author":"Вуди Аллен","text":"80% успеха - это появиться в нужном месте в нужное время."},{"author":"Стив Джобс","text":"Ваше время ограничено, не тратьте его, живя чужой жизнью"},{"author":"Винс Ломбарди, тренер по американскому футболу","text":"Победа - это еще не все, все - это постоянное желание побеждать."},{"author":"Иммануил Кант","text":"Наука — это организованные знания, мудрость — это организованная жизнь."},{"author":"Наполеон Бонапарт","text":"В моем словаре нет слова «невозможно»."}]`;
const quotes = JSON.parse(quotesJson);
const store = {
    pagination: {
        currentPage: 1,
        pageSize: 3,
        items: quotes
    }
}

window.__store = store;

// function expression
const Quote = function (props){
    return `<div class="quote">
                <img >
                <p class="quote-text">${props.text}</p>
                <p class="quote-author">${props.author}</p>
            </div>`;
}


const Page = function (props) {
    return `<div class="page ${props.currentPage === props.page && "selected"}">${props.page}</div>`;
}

const Pagination = function (props){
    return props.pages.map(function (page){
        return Page({currentPage: props.currentPage, page: page})
    }).join("");
}

// props = properties
function QuotesList(props){ // function declaration
    return props.quotes.map(function (quote){
        return Quote({text: quote.text, author: quote.author});
    }).join("");
}


function renderPagination(){
    const pagination = document.querySelector(".pagination");

    const {pageSize, items, currentPage} = {...window.__store.pagination};
    const pagesCount = Math.ceil(items.length / pageSize);
    const pages = Array.from({length: pagesCount}, function(_, i){
        return i + 1;
    });
    pagination.innerHTML = Pagination({pages, currentPage});

    const pagesElements = pagination.querySelectorAll(".page");
    for (const page of pagesElements) {
        page.addEventListener("click", function (){
            const pageNumber = Number(page.textContent);
            window.__store.pagination.currentPage = pageNumber;
            renderPagination();
            renderQuotes();
        })
    }
}

function renderQuotes() {
    const quotesList = document.querySelector(".quotesList");

    const {pageSize, items, currentPage} = {...window.__store.pagination};

    const itemsOnPage = items
        .skip((currentPage - 1) * pageSize)
        .take(pageSize);

    quotesList.innerHTML = QuotesList({quotes: itemsOnPage});
}

renderPagination();
renderQuotes();


function changeQuotesPerPage(value) {
    const newSize = parseInt(value);
    window.__store.pagination.pageSize = newSize;
    window.__store.pagination.currentPage = 1;

    renderPagination();
    renderQuotes();
}


const pagesCount = Math.ceil(items.length / pageSize);
const pages = Array.from({ length: pagesCount }, function (_, i) {
    return i + 1;
});

window.__store.pagination.pageSize = pageSize;

pagination.innerHTML = Pagination({ pages, currentPage });

const { pageSize, items, currentPage } = { ...window.__store.pagination };

