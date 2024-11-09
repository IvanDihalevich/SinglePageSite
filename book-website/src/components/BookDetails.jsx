import React from "react";
import "../css/BookDetails.css";
import MusicPlayer from "../hooks/MusicPlayer";
import bookImage1 from "../iconsBody/rectangle-1.png";
import bookImage2 from "../iconsBody/rectangle-2.png";
import bookImage3 from "../iconsBody/rectangle-3.png";
import bookImage4 from "../iconsBody/rectangle-4.png";
import bookImage5 from "../iconsBody/rectangle-5.png";
import bookImage6 from "../iconsBody/rectangle-6.png";
import bookImage7 from "../iconsBody/rectangle-7.png";
import bookImage8 from "../iconsBody/rectangle-8.png";
import authorImage from "../iconsBody/jk-rowling.png";

import character1 from "../iconsBody/harry.png";
import character2 from "../iconsBody/hermione.png";
import character3 from "../iconsBody/ron.png";
import character4 from "../iconsBody/dumbledore.png";
import character5 from "../iconsBody/snape.png";
import character6 from "../iconsBody/hagrid.png";
import character7 from "../iconsBody/voldemort.png";
import character8 from "../iconsBody/draco.png";
import character9 from "../iconsBody/sivirus.png";
import character10 from "../iconsBody/dobby.png";
import character11 from "../iconsBody/bellatrix.png";
import character12 from "../iconsBody/ollivander.png";
import character13 from "../iconsBody/lsaacs.png";
import character14 from "../iconsBody/ordemdafenix.png";
import character15 from "../iconsBody/ginny.png";
import character16 from "../iconsBody/mcgonagall.png";

import websiteAuthorImage from "../iconsBody/website-author.png";
import FaTiktok from "../icons/FaTiktok.png";
import FaTelegram from "../icons/FaTelegram.png";
import FaInstagram from "../icons/FaInstagram.png";


const BookDetails = () => (
  <div className="book-details">
    <h2>Про книги</h2>
    <div className="book-content" id="books">
      <div className="book-item">
        <img src={bookImage1} alt="Книга 1" className="book-image" />
        <p className="book-description">
          Harry Potter and the Philosopher's Stone
        </p>
        <a href="#section1" className="section-link">
          Детальніше
        </a>
      </div>
      <div className="book-item">
        <img src={bookImage2} alt="Книга 2" className="book-image" />
        <p className="book-description">
          Harry Potter and the Chamber of Secrets
        </p>
        <a href="#section2" className="section-link">
          Детальніше
        </a>
      </div>
      <div className="book-item">
        <img src={bookImage3} alt="Книга 3" className="book-image" />
        <p className="book-description">
          Harry Potter and the Prisoner of Azkaban
        </p>
        <a href="#section3" className="section-link">
          Детальніше
        </a>
      </div>
      <div className="book-item">
        <img src={bookImage4} alt="Книга 4" className="book-image" />
        <p className="book-description">Harry Potter and the Goblet of Fire</p>
        <a href="#section4" className="section-link">
          Детальніше
        </a>
      </div>
      <div className="book-item">
        <img src={bookImage5} alt="Книга 5" className="book-image" />
        <p className="book-description">
          Harry Potter and the Order of the Phoenix
        </p>
        <a href="#section5" className="section-link">
          Детальніше
        </a>
      </div>
      <div className="book-item">
        <img src={bookImage6} alt="Книга 6" className="book-image" />
        <p className="book-description">
          Harry Potter and the Half-Blood Prince
        </p>
        <a href="#section6" className="section-link">
          Детальніше
        </a>
      </div>
      <div className="book-item">
        <img src={bookImage7} alt="Книга 7" className="book-image" />
        <p className="book-description">Harry Potter and the Deathly Hallows</p>
        <a href="#section7" className="section-link">
          Детальніше
        </a>
      </div>
      <div className="book-item">
        <img src={bookImage8} alt="Книга 8" className="book-image" />
        <p className="book-description">
          Harry Potter and the Cursed Child - Parts One and Two
        </p>
        <a href="#section8" className="section-link">
          Детальніше
        </a>
      </div>
    </div>

    <hr className="divider" />

    <div className="author-section" id="authorOfBooks">
      <img src={authorImage} alt="Author" className="author-image" />
      <div className="author-description">
        <h3>Автор Дж.К. Роулінг</h3>
        <p>
          Дж.К. Роулінг — британська письменниця, відома як автор серії книг про
          Гаррі Поттера. Її творчість захопила мільйони читачів по всьому світу
          та книги стали справжніми бестселерами, перетворивши її на одну з
          найбільш впливових літературних постатей сучасності.
        </p>
      </div>
    </div>

    <hr className="divider" />

    <div className="music-section" id="soundTrecs">
      <div className="music-player-section" id="musicPlayer">
        <MusicPlayer />
        <p>Прослухайте саундтрек або атмосферну музику для кращого занурення у чарівний світ.</p>
      </div>
    </div>


    <hr className="divider" />

    <div className="section-content" id="detailsOfBook">
      <div id="section1" className="section-item">
        <img src={bookImage1} alt="Розділ 1" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і філософський камінь</h3>
          <p>
            Гаррі Поттер ніколи навіть не чув про Гоґвортс, коли листи починають
            падати на дверний килимок під номером чотири, Прайвіт-драйв.
            Написані зеленим чорнилом на жовтуватому пергаменті з фіолетовою
            печаткою, їх швидко конфіскують його жахливі тітка й дядько. Потім,
            на одинадцятий день народження Гаррі, великий жукоокий велетень на
            ім’я Рубеус Гегрід вривається з дивовижною новиною: Гаррі Поттер —
            чарівник, і йому належить місце в Гоґвортській школі чаклунства та
            чаклунства. Неймовірна пригода ось-ось почнеться!
          </p>
        </div>
      </div>

      <div id="section2" className="section-item">
        <img src={bookImage2} alt="Розділ 2" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і таємна кімната</h3>
          <p>
            Літо Гаррі Поттера включало найгірший день народження в історії,
            страшні попередження від домашнього ельфа на ім’я Доббі та порятунок
            від Дурслів його другом Роном Візлі на чарівній літаючій машині!
            Повернувшись до школи чаклунства Гоґвортс на другий рік навчання,
            Гаррі чує дивний шепіт, що відлунює порожніми коридорами, а потім
            починаються напади. Студентів знаходять, наче скам’яніли… Здається,
            зловісні передбачення Доббі збуваються.
          </p>
        </div>
      </div>

      <div id="section3" className="section-item">
        <img src={bookImage3} alt="Розділ 3" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і в'язень Азкабану</h3>
          <p>
            Коли лицарський автобус проноситься в темряві й з скрипом
            зупиняється перед ним, це означає початок ще одного зовсім не
            звичайного року в Гоґвортсі для Гаррі Поттера. Сіріус Блек, масовий
            убивця, що втік, і послідовник Лорда Волдеморта, утікає, і кажуть,
            що він збирається за Гаррі. На своєму першому в історії уроці з
            ворожіння професор Трелоні бачить передвістя смерті в чайному листі
            Гаррі... Але, мабуть, найжахливішими з усіх є дементори, які
            патрулюють шкільну територію з їхнім душевним поцілунком.
          </p>
        </div>
      </div>

      <div id="section4" className="section-item">
        <img src={bookImage4} alt="Розділ 4" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і Кубок вогню</h3>
          <p>
            Турнір трьох чаклунів відбудеться в Гоґвортсі. До участі
            допускаються лише чарівники старше сімнадцяти років, але це не
            заважає Гаррі мріяти, що він виграє змагання. Потім на Хеллоуїн,
            коли Кубок Вогню робить свій вибір, Гаррі з подивом дізнається, що
            його ім’я одне з тих, які вибирає чарівна чаша. Йому доведеться
            зіткнутися зі смертельними завданнями, драконами та темними
            чарівниками, але за допомогою своїх найкращих друзів, Рона та
            Герміони, він, можливо, впорається — залишиться живим!
          </p>
        </div>
      </div>

      <div id="section5" className="section-item">
        <img src={bookImage5} alt="Розділ 5" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і Орден Фенікса</h3>
          <p>
            У Гоґвортсі настали темні часи. Після нападу дементорів на його
            двоюрідного брата Дадлі Гаррі Поттер знає, що Волдеморт не
            зупиниться ні перед чим, щоб знайти його. Є багато тих, хто
            заперечує повернення Темного Лорда, але Гаррі не самотній: таємний
            Орден збирається на площі Ґріммо, щоб боротися проти темних сил.
            Гаррі повинен дозволити професору Снейпу навчити його, як
            захиститися від жорстоких нападів Волдеморта на його розум. Але з
            кожним днем ​​вони стають сильнішими, і Гаррі не вистачає часу.
          </p>
        </div>
      </div>

      <div id="section6" className="section-item">
        <img src={bookImage6} alt="Розділ 6" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і напівкровний принц</h3>
          <p>
            Коли Дамблдор одного літнього вечора прибуває на Прівіт-Драйв, щоб
            забрати Гаррі Поттера, рука його чарівної палички почорніла й
            зморщена, але він не розповідає, чому. Таємниці та підозри
            поширюються чарівним світом, і сам Гоґвортс не є безпечним. Гаррі
            переконаний, що Мелфой несе темну мітку: серед них є смертежер.
            Гаррі знадобиться потужна магія та справжні друзі, коли він
            досліджуватиме найтемніші таємниці Волдеморта, а Дамблдор готує його
            зустрітися зі своєю долею.
          </p>
        </div>
      </div>

      <div id="section7" className="section-item">
        <img src={bookImage7} alt="Розділ 7" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і смертельні реліквії</h3>
          <p>
            Коли Гаррі Поттер сідає в коляску Геґрідового мотоцикла й
            піднімається в небо, востаннє покидаючи Прівет Драйв, він знає, що
            Лорд Волдеморт і смертежери не відстають. Захисне закляття, яке
            дотепер захищало Гаррі, зламано, але він не може ховатися. Темний
            Лорд вдихає страх у все, що любить Гаррі, і щоб зупинити його, Гаррі
            доведеться знайти та знищити залишки горокраксів. Остання битва має
            розпочатися – Гаррі має встати й протистояти своєму ворогу.
          </p>
        </div>
      </div>

      <div id="section8" className="section-item">
        <img src={bookImage8} alt="Розділ 8" className="section-image" />
        <div className="section-text">
          <h3>Гаррі Поттер і прокляте дитя</h3>
          <p>
            Бути Гаррі Поттером завжди було важко, і зараз, коли він є
            перевантаженим роботою співробітником Міністерства магії, чоловіком
            і батьком трьох дітей шкільного віку, для нього стало не набагато
            легше. Поки Гаррі бореться з минулим, яке відмовляється залишатися
            там, де йому місце, його молодший син Альбус повинен боротися з
            вагою сімейної спадщини, якої він ніколи не бажав. Минуле й майбутнє
            зловісно зливаються воєдино, і батько з сином дізнаються незручну
            правду: іноді темрява приходить з найнесподіваніших місць.
          </p>
        </div>
      </div>
    </div>
    <hr className="divider" />

    <h2>Персонажі</h2>
    <div className="characters-section" id="characters">
      <div className="character-item">
        <img src={character1} alt="Harry Potter" className="character-image" />
        <p className="character-name">Harry Potter</p>
      </div>
      <div className="character-item">
        <img
          src={character2}
          alt="Hermione Granger"
          className="character-image"
        />
        <p className="character-name">Hermione Granger</p>
      </div>
      <div className="character-item">
        <img src={character3} alt="Ron Weasley" className="character-image" />
        <p className="character-name">Ron Weasley</p>
      </div>
      <div className="character-item">
        <img
          src={character4}
          alt="Albus Dumbledore"
          className="character-image"
        />
        <p className="character-name">Albus Dumbledore</p>
      </div>
      <div className="character-item">
        <img src={character5} alt="Severus Snape" className="character-image" />
        <p className="character-name">Severus Snape</p>
      </div>
      <div className="character-item">
        <img src={character6} alt="Rubeus Hagrid" className="character-image" />
        <p className="character-name">Rubeus Hagrid</p>
      </div>
      <div className="character-item">
        <img
          src={character7}
          alt="Lord Voldemort"
          className="character-image"
        />
        <p className="character-name">Lord Voldemort</p>
      </div>
      <div className="character-item">
        <img src={character8} alt="Draco Malfoy" className="character-image" />
        <p className="character-name">Draco Malfoy</p>
      </div>
      <div className="character-item">
        <img src={character9} alt="Regulus Black" className="character-image" />
        <p className="character-name">Regulus Black</p>
      </div>
      <div className="character-item">
        <img src={character10} alt="Dobby" className="character-image" />
        <p className="character-name">Dobby</p>
      </div>
      <div className="character-item">
        <img
          src={character11}
          alt="Bellatrix Lestrange"
          className="character-image"
        />
        <p className="character-name">Bellatrix Lestrange</p>
      </div>
      <div className="character-item">
        <img
          src={character12}
          alt="Garrick Ollivander"
          className="character-image"
        />
        <p className="character-name">Garrick Ollivander</p>
      </div>
      <div className="character-item">
        <img
          src={character13}
          alt="Lucius Malfoy"
          className="character-image"
        />
        <p className="character-name">Lucius Malfoy</p>
      </div>
      <div className="character-item">
        <img
          src={character14}
          alt="Vernon Dursley"
          className="character-image"
        />
        <p className="character-name">Vernon Dursley</p>
      </div>
      <div className="character-item">
        <img
          src={character15}
          alt="Ginevra Weasley"
          className="character-image"
        />
        <p className="character-name">Ginevra Weasley</p>
      </div>
      <div className="character-item">
        <img
          src={character16}
          alt="Minerva McGonagall"
          className="character-image"
        />
        <p className="character-name">Minerva McGonagall</p>
      </div>
    </div>

    <hr className="divider" />

    <div className="website-author-section" id="websiteAuthor">
      <div className="website-author-description">
        <h3>Dihalevych Ivan</h3>
        <p>
          Це сайт, створений для шанувальників серії книг про Гаррі Поттера. Тут
          ви знайдете інформацію про книги, персонажів та багато іншого, що
          стосується чарівного світу, створеного Дж.К. Роулінг.
        </p>

        <div className="social-media-links">
          <a
            href="https://www.instagram.com/ivandihalevych/" aria-label="Instagram">
            <img src={FaInstagram} alt="Instagram" />
          </a>
          <a href="https://t.me/okk_ivan" aria-label="Telegram">
            <img src={FaTelegram} alt="Telegram" />
          </a>
          <a href="https://www.tiktok.com/@ivan_dihalevich" aria-label="Tiktok">
            <img src={FaTiktok} alt="Tiktok" />
          </a>
        </div>
      </div>
      <img
        src={websiteAuthorImage}
        alt="Website Author"
        className="website-author-image"
      />
    </div>
  </div>
);

export default BookDetails;
