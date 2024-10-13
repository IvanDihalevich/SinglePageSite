import React from 'react';
import "../css/BookDetails.css";
import bookImage1 from '../iconsHeader/rectangle-1.png';
import bookImage2 from '../iconsHeader/rectangle-2.png';
import bookImage3 from '../iconsHeader/rectangle-3.png';
import bookImage4 from '../iconsHeader/rectangle-4.png';
import bookImage5 from '../iconsHeader/rectangle-5.png';
import bookImage6 from '../iconsHeader/rectangle-6.png';
import bookImage7 from '../iconsHeader/rectangle-7.png';
import bookImage8 from '../iconsHeader/rectangle-8.png';

const BookDetails = () => (
    <div className="book-details">
        <h2>Про книги</h2>
        <div className="book-content">
            <div className="book-item">
                <img src={bookImage1} alt="Книга 1" className="book-image" />
                <p className="book-description">Harry Potter and the Philosopher's Stone</p>
                <a href="#section1" className="section-link">Детальніше</a>
            </div>
            <div className="book-item">
                <img src={bookImage2} alt="Книга 2" className="book-image" />
                <p className="book-description">Harry Potter and the Chamber of Secrets</p>
                <a href="#section2" className="section-link">Детальніше</a>
            </div>
            <div className="book-item">
                <img src={bookImage3} alt="Книга 3" className="book-image" />
                <p className="book-description">Harry Potter and the Prisoner of Azkaban</p>
                <a href="#section3" className="section-link">Детальніше</a>
            </div>
            <div className="book-item">
                <img src={bookImage4} alt="Книга 4" className="book-image" />
                <p className="book-description">Harry Potter and the Goblet of Fire</p>
                <a href="#section4" className="section-link">Детальніше</a>
            </div>
            <div className="book-item">
                <img src={bookImage5} alt="Книга 5" className="book-image" />
                <p className="book-description">Harry Potter and the Order of the Phoenix</p>
                <a href="#section5" className="section-link">Детальніше</a>
            </div>
            <div className="book-item">
                <img src={bookImage6} alt="Книга 6" className="book-image" />
                <p className="book-description">Harry Potter and the Half-Blood Prince</p>
                <a href="#section6" className="section-link">Детальніше</a>
            </div>
            <div className="book-item">
                <img src={bookImage7} alt="Книга 7" className="book-image" />
                <p className="book-description">Harry Potter and the Deathly Hallows</p>
                <a href="#section7" className="section-link">Детальніше</a>
            </div>
            <div className="book-item">
                <img src={bookImage8} alt="Книга 8" className="book-image" />
                <p className="book-description">Harry Potter and the Cursed Child - Parts One and Two</p>
                <a href="#section8" className="section-link">Детальніше</a>
            </div>
        </div>

        {/* Розділ з рискою */}
        <hr className="divider" />

        <div className="section-content">
            <div id="section1" className="section-item">
                <img src={bookImage1} alt="Розділ 1" className="section-image" />
                <div className="section-text">
                    <p>Гаррі Поттер ніколи навіть не чув про Гоґвортс, коли листи починають падати на дверний килимок під номером чотири, Прайвіт-драйв. Написані зеленим чорнилом на жовтуватому пергаменті з фіолетовою печаткою, їх швидко конфіскують його жахливі тітка й дядько. Потім, на одинадцятий день народження Гаррі, великий жукоокий велетень на ім’я Рубеус Гегрід вривається з дивовижною новиною: Гаррі Поттер — чарівник, і йому належить місце в Гоґвортській школі чаклунства та чаклунства. Неймовірна пригода ось-ось почнеться!</p>
                </div>
            </div>
            <div id="section2" className="section-item">
                <img src={bookImage2} alt="Розділ 2" className="section-image" />
                <div className="section-text">
                    <p>Літо Гаррі Поттера включало найгірший день народження в історії, страшні попередження від домашнього ельфа на ім’я Доббі та порятунок від Дурслів його другом Роном Візлі на чарівній літаючій машині! Повернувшись до школи чаклунства Гоґвортс на другий рік навчання, Гаррі чує дивний шепіт, що відлунює порожніми коридорами, а потім починаються напади. Студентів знаходять, наче скам’яніли… Здається, зловісні передбачення Доббі збуваються.</p>
                </div>
            </div>
            <div id="section3" className="section-item">
                <img src={bookImage3} alt="Розділ 3" className="section-image" />
                <div className="section-text">
                    <p>Коли лицарський автобус проноситься в темряві й з скрипом зупиняється перед ним, це означає початок ще одного зовсім не звичайного року в Гоґвортсі для Гаррі Поттера. Сіріус Блек, масовий убивця, що втік, і послідовник Лорда Волдеморта, утікає, і кажуть, що він збирається за Гаррі. На своєму першому в історії уроці з ворожіння професор Трелоні бачить передвістя смерті в чайному листі Гаррі... Але, мабуть, найжахливішими з усіх є дементори, які патрулюють шкільну територію з їхнім душевним поцілунком.</p>
                </div>
            </div>
            <div id="section4" className="section-item">
                <img src={bookImage4} alt="Розділ 4" className="section-image" />
                <div className="section-text">
                    <p>Турнір трьох чаклунів відбудеться в Гоґвортсі. До участі допускаються лише чарівники старше сімнадцяти років, але це не заважає Гаррі мріяти, що він виграє змагання. Потім на Хеллоуїн, коли Кубок Вогню робить свій вибір, Гаррі з подивом дізнається, що його ім’я одне з тих, які вибирає чарівна чаша. Йому доведеться зіткнутися зі смертельними завданнями, драконами та темними чарівниками, але за допомогою своїх найкращих друзів, Рона та Герміони, він, можливо, впорається — залишиться живим!</p>
                </div>
            </div>
            <div id="section5" className="section-item">
                <img src={bookImage5} alt="Розділ 5" className="section-image" />
                <div className="section-text">
                    <p>У Гоґвортсі настали темні часи. Після нападу дементорів на його двоюрідного брата Дадлі Гаррі Поттер знає, що Волдеморт не зупиниться ні перед чим, щоб знайти його. Є багато тих, хто заперечує повернення Темного Лорда, але Гаррі не самотній: таємний Орден збирається на площі Ґріммо, щоб боротися проти темних сил. Гаррі повинен дозволити професору Снейпу навчити його, як захиститися від жорстоких нападів Волдеморта на його розум. Але з кожним днем ​​вони стають сильнішими, і Гаррі не вистачає часу.</p>
                </div>
            </div>
            <div id="section6" className="section-item">
                <img src={bookImage6} alt="Розділ 6" className="section-image" />
                <div className="section-text">
                    <p>Коли Дамблдор одного літнього вечора прибуває на Прівіт-Драйв, щоб забрати Гаррі Поттера, рука його чарівної палички почорніла й зморщена, але він не розповідає, чому. Таємниці та підозри поширюються чарівним світом, і сам Гоґвортс не є безпечним. Гаррі переконаний, що Мелфой несе темну мітку: серед них є смертежер. Гаррі знадобиться потужна магія та справжні друзі, коли він досліджуватиме найтемніші таємниці Волдеморта, а Дамблдор готує його зустрітися зі своєю долею.</p>
                </div>
            </div>
            <div id="section7" className="section-item">
                <img src={bookImage7} alt="Розділ 7" className="section-image" />
                <div className="section-text">
                    <p>Коли Гаррі Поттер сідає в коляску Геґрідового мотоцикла й піднімається в небо, востаннє покидаючи Прівет Драйв, він знає, що Лорд Волдеморт і смертежери не відстають. Захисне закляття, яке дотепер захищало Гаррі, зламано, але він не може ховатися. Темний Лорд вдихає страх у все, що любить Гаррі, і щоб зупинити його, Гаррі доведеться знайти та знищити залишки горокраксів. Остання битва має розпочатися – Гаррі має встати й протистояти своєму ворогу.</p>
                </div>
            </div>
            <div id="section8" className="section-item">
                <img src={bookImage8} alt="Розділ 8" className="section-image" />
                <div className="section-text">
                    <p>Офіційний сценарій оригінальної постановки Вест-Енду «Гаррі Поттер і прокляте дитя». Завжди було важко бути Гаррі Поттером, і це не набагато легше зараз, коли він перевантажений роботою співробітник Міністерства магії, чоловік і батько трьох дітей шкільного віку. Поки Гаррі бореться з минулим, яке відмовляється залишатися там, де йому належить, його молодшому синові Альбусу доводиться боротися з вагою сімейної спадщини, яку він ніколи не хотів. Коли минуле й сьогодення зловісно зливаються, батько й син дізнаються незручну правду: інколи темрява приходить із несподіваних місць. Сценарій фільму «Гаррі Поттер і прокляте дитя» спочатку був випущений як «спеціальне репетиційне видання» разом із прем’єрою п’єси Джека Торна в лондонському Вест-Енді влітку 2016 року. На основі оригінальної історії Дж.К. Роулінг, Джона Тіффані та Джека Торна, п’єса викликала захоплені рецензії театралів і критиків, а офіційний сценарій одразу став світовим бестселером. Це виправлене видання в м’якій обкладинці оновлює «спеціальне репетиційне видання» заключним і останнім діалогом із п’єси, який дещо змінився після репетицій, а також уривком розмови між режисером Джоном Тіффані та письменником Джеком Торном, які діляться історіями та думками про читання сценаріїв. Це видання також містить корисну довідкову інформацію, включаючи генеалогічне дерево Поттерів і хронологію подій зі світу чарівників до початку «Гаррі Поттера і проклятого дитини».</p>
                </div>
            </div>
        </div>
    </div>
);

export default BookDetails;
