import Image from 'next/image';

const telegram = 'https://t.me/ViktoriaPowerenova';

const telegramLink = (text: string) =>
  `${telegram}?text=${encodeURIComponent(`Вика, привет! 🛟 ${text}`)}`;

const faqs = [
  {
    q: 'Можно обратиться только с одним небольшим вопросом?',
    a: 'Да. Не обязательно заказывать сопровождение всего процесса. Можно обратиться с конкретной задачей: сходить в банк или МУП, уточнить информацию в учреждении или разобраться с отдельным документом.',
  },
  {
    q: 'Вы всё сделаете за меня?',
    a: 'Зависит от задачи. Всё, что можно подготовить или сделать без вашего личного присутствия, я возьму на себя. Если ваше присутствие необходимо, мы заранее подготовимся. А если понадобится помощь на месте, я пойду вместе с вами.',
  },
  {
    q: 'Можно обратиться, если я уже начала или начал всё делать самостоятельно?',
    a: 'Конечно. Я могу подключиться на любом этапе: проверить, что уже собрано, помочь с оставшимися документами или разобраться с возникшей проблемой.',
  },
  {
    q: 'Вы можете сходить со мной в банк, МУП или другое учреждение?',
    a: 'Да, это отдельная услуга. Я могу сопровождать вас в Нови-Саде, помочь объяснить ситуацию на сербском и разобраться с ответом сотрудников.',
  },
  {
    q: 'Я знаю английский. Этого достаточно?',
    a: 'Иногда — да, особенно если вопрос простой. Но в государственных учреждениях основной язык общения — сербский, и рассчитывать на английский получается не всегда. Если нужно объяснить нестандартную ситуацию, уточнить детали или точно понять требования, знание сербского значительно упрощает процесс. В таких случаях я могу пойти с вами и взять общение на себя.',
  },
  {
    q: 'Вы работаете только в Нови-Саде?',
    a: 'Пока я работаю только в Нови-Саде и лично сопровождаю клиентов здесь. Но если вам нужна консультация по общему процессу, можно обращаться и из других городов Сербии.',
  },
  {
    q: 'Вы гарантируете получение ВНЖ?',
    a: 'Нет. Решение о выдаче ВНЖ принимает государственный орган, поэтому гарантировать результат я не могу. Моя задача — помочь вам подготовиться, собрать необходимые документы и избежать лишних ошибок и походов по учреждениям.',
  },
  {
    q: 'Сколько стоят ваши услуги?',
    a: 'Стоимость зависит от задачи. Напишите, что именно вам нужно, — я уточню детали и заранее назову стоимость.',
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Вика поможет — в начало страницы">
          <span>Вика поможет</span>
          <Image className="brand-mark" src="/brand-mark.svg" alt="" width={32} height={32} unoptimized />
        </a>
        <nav aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#about">Обо мне</a>
          <a href="#faq">Вопросы</a>
          <a className="nav-cta" href={telegramLink('Пишу с сайта и хочу уточнить: ')} target="_blank" rel="noreferrer">Написать Вике</a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Помощь с бюрократией в Сербии</p>
          <h1>Разберусь за вас с сербской бюрократией</h1>
          <p className="intro">Привет! Меня зовут Вика. Я живу в Нови-Саде больше трёх лет и помогаю другим проходить через сербскую бюрократию проще и спокойнее.</p>
          <p>Помогу открыть ИП, подготовиться к подаче на ВНЖ или решить отдельный вопрос в банке, МУПе и другом учреждении.</p>
          <div className="hero-actions">
            <a className="button primary" href={telegramLink('Мне нужна помощь с документами или бюрократией в Сербии. Моя ситуация: ')} target="_blank" rel="noreferrer">Рассказать о своей ситуации</a>
          </div>
          <p className="place-note"><span className="dot" />Ваш человек на месте</p>
        </div>
        <figure className="hero-photo">
          <Image src="/vika-portrait.jpeg" alt="Вика в Нови-Саде" width={959} height={1280} priority />
          <figcaption>Ваш человек на месте</figcaption>
        </figure>
      </section>

      <section className="quick-help section-shell" aria-labelledby="quick-title">
        <h2 id="quick-title">Что вам нужно сделать?</h2>
        <div className="quick-links">
          <a href="#ip">Открыть, заморозить или разморозить ИП</a>
          <a href="#residence">Подготовиться к подаче на ВНЖ</a>
          <a href="#support">Сходить в банк, МУП или другое учреждение</a>
          <a href="#unsure">Пока не знаю — хочу описать ситуацию</a>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">С чем могу помочь</p>
            <h2>Помощь без лишней суеты</h2>
          </div>

          <div className="service-grid">
            <article className="service-card green" id="ip">
              <h3>Помощь с ИП</h3>
              <p>Помогу открыть ИП, временно приостановить его работу или возобновить деятельность.</p>
              <p>Подготовлю необходимые документы, объясню порядок действий и заранее расскажу, что потребуется от вас.</p>
              <p>Всё, что можно сделать без вашего личного участия, возьму на себя — с учётом ваших пожеланий и под вашим контролем.</p>
              <a className="button secondary" href={telegramLink('Мне нужна помощь с ИП в Сербии. Моя ситуация: ')} target="_blank" rel="noreferrer">Помощь с ИП</a>
            </article>

            <article className="service-card" id="residence">
              <h3>Подготовка к подаче на ВНЖ</h3>
              <p>Помогу разобраться в процессе подачи и подготовить необходимые документы.</p>
              <p>Вместе проверим, что нужно собрать, в каком виде всё подготовить и что потребуется непосредственно при подаче.</p>
              <p>Всё, что можно собрать без вашего участия, я возьму на себя. Если потребуется ваше личное присутствие, заранее подготовимся, а при необходимости я пойду вместе с вами как помощник и переводчик.</p>
              <a className="button secondary" href={telegramLink('Мне нужна помощь с подготовкой к подаче на ВНЖ. Моя ситуация: ')} target="_blank" rel="noreferrer">Нужна помощь с ВНЖ</a>
            </article>

            <article className="service-card" id="support">
              <h3>Сопровождение в банк, МУП и другие учреждения</h3>
              <p>Обратиться ко мне можно не только для сопровождения полного процесса легализации.</p>
              <p>Если вам нужно сходить в банк, МУП или другое учреждение, что-то уточнить, объяснить нестандартную ситуацию или разобраться с документом — я могу пойти вместе с вами.</p>
              <p>Поговорю с сотрудниками на сербском, задам нужные вопросы, помогу понять ответ и разобраться, что делать дальше.</p>
              <a className="button secondary" href={telegramLink('Мне нужно сопровождение в учреждение. Моя ситуация: ')} target="_blank" rel="noreferrer">Нужно сопровождение</a>
            </article>
          </div>

          <div className="service-notes" aria-label="Важная информация об услугах">
            <p><span aria-hidden="true">*</span> Стоимость рассчитывается индивидуально в зависимости от задачи и объёма работы. Почасовая ставка за административную и организационную поддержку — 6 000 RSD. <span aria-hidden="true">/</span>{' '}
              <span lang="sr">Konačna cena se određuje individualno, u zavisnosti od vrste zadatka i obima potrebnog rada. Satnica za administrativnu i organizacionu podršku iznosi 6.000 RSD.</span>
            </p>
            <p><strong>Важно:</strong> решения по вопросам регистрации и выдачи ВНЖ принимают государственные органы.</p>
          </div>

          <aside className="unsure" id="unsure">
            <div>
              <p className="eyebrow">Не знаете, какая помощь нужна?</p>
              <h2>Начните с пары слов о ситуации</h2>
            </div>
            <div>
              <p>Не нужно заранее разбираться в процессе или выбирать услугу. Просто опишите ситуацию своими словами — я скажу, смогу ли помочь и в каком формате.</p>
              <a className="button primary" href={telegramLink('Не совсем понимаю, какая именно помощь мне нужна, поэтому просто опишу ситуацию: ')} target="_blank" rel="noreferrer">Описать свою ситуацию</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="why section-shell">
        <div className="why-photo">
          <Image src="/novi-sad-street.jpeg" alt="Уютная улица Нови-Сада осенью" width={959} height={1280} />
        </div>
        <div className="why-copy">
          <p className="eyebrow">Почему со мной проще</p>
          <h2>Знаю процессы не только по инструкциям, но и на практике</h2>
          <p>Когда я переехала в Сербию, во всём, что касается документов и легализации, я разбиралась самостоятельно.</p>
          <p>Здесь я открыла ИП, получила на его основании ВНЖ и с самого начала сама проходила через банки, МУП и другие учреждения.</p>
          <ul>
            <li>Понять, куда и в каком порядке обращаться</li>
            <li>Собрать документы без лишней работы</li>
            <li>Разобраться в заявлениях и формах</li>
            <li>Поговорить с сотрудниками на сербском</li>
            <li>Сориентироваться, если что-то пошло не по плану</li>
          </ul>
          <a className="button secondary" href={telegramLink('Хочу обсудить помощь с бюрократией в Сербии. Моя ситуация: ')} target="_blank" rel="noreferrer">Написать Вике</a>
        </div>
      </section>

      <section className="reviews">
        <div className="section-shell">
          <div className="section-heading">
            <p className="eyebrow">Отзывы</p>
            <h2>Что говорят люди, которым я уже помогала</h2>
          </div>
          <section className="review-list" aria-label="Отзывы клиентов. Прокручивайте горизонтально, чтобы увидеть остальные">
            <article className="review-row">
              <div className="review-story">
                <p>Клиентке нужно было собрать документы и податься на ВНЖ. Она не говорит ни по-сербски, ни по-английски, поэтому я помогала на всех этапах: сопровождала её, общалась с сотрудниками и переводила.</p>
              </div>
              <figure className="review-quote">
                <Image src="/review-residence-banking.png" alt="Отзыв клиентки о помощи с документами, банковскими счетами и подачей на ВНЖ" width={608} height={374} />
              </figure>
            </article>

            <article className="review-row">
              <div className="review-story">
                <p>ИП уже было открыто, но для ВНЖ не хватало части документов. Я дособрала их, помогла с онлайн-подачей, рассказала, как и когда платить налоги, и подсказала заранее заменить паспорт. Сейчас документы на проверке — ждём вызова на биометрию.</p>
              </div>
              <figure className="review-quote">
                <Image src="/review-residence-ip.png" alt="Отзыв о помощи с документами и подачей на ВНЖ по ИП" width={626} height={496} />
              </figure>
            </article>
          </section>
          <a className="button primary reviews-cta" href={telegramLink('Мне тоже нужна помощь с документами и бюрократией в Сербии. Моя ситуация: ')} target="_blank" rel="noreferrer">Обсудить мою ситуацию</a>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-copy">
          <p className="eyebrow">Немного обо мне</p>
          <h2>Нови-Сад уже стал для меня своим</h2>
          <p>В Сербии я живу больше трёх лет. Мне здесь очень нравится, особенно в Нови-Саде, где за это время многое уже стало знакомым и своим.</p>
          <p>Мне близок сербский менталитет, а людей здесь я искренне люблю за открытость и гостеприимство. Думаю, если вы решите осесть в этой стране, у неё есть все шансы стать для вас домом.</p>
          <p>Я хорошо помню, каково это — только переехать и не понимать, куда идти, что спрашивать и правильно ли ты вообще всё делаешь.</p>
          <p>Со временем я со всем разобралась, а моего сербского хватает, чтобы самостоятельно решать вопросы в банках и государственных учреждениях.</p>
          <p>Теперь я могу делиться этим опытом с теми, кто пока только осваивается в Сербии.</p>
          <a className="button primary" href={telegramLink('Хочу обратиться к вам за помощью. Моя ситуация: ')} target="_blank" rel="noreferrer">Написать Вике</a>
        </div>
        <div className="about-gallery">
          <Image className="about-main" src="/vika-city.jpeg" alt="Вика в центре Нови-Сада" width={960} height={1280} />
          <Image className="about-small" src="/novi-sad-view.jpeg" alt="Вид на Нови-Сад и Дунай" width={960} height={1280} />
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="section-shell faq-layout">
          <div className="faq-heading">
            <p className="eyebrow">Частые вопросы</p>
            <h2>Можно спросить напрямую</h2>
            <p>Если вашего вопроса здесь нет, просто напишите мне.</p>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>{item.q}<span aria-hidden="true">+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section">
        <div className="final-cta section-shell">
          <div>
            <p className="eyebrow">Не знаете, с чего начать?</p>
            <h2>Расскажите, какая у вас ситуация</h2>
            <p>Необязательно заранее разбираться в процессе и понимать, какая именно услуга вам нужна. Дальше разберёмся вместе.</p>
          </div>
          <a className="button primary" href={telegramLink('Хочу проконсультироваться по своей ситуации в Сербии: ')} target="_blank" rel="noreferrer">Написать Вике</a>
        </div>
      </section>

      <footer>
        <div className="section-shell footer-inner">
          <p className="footer-heading">
            <strong>Вика поможет</strong>
            <Image className="brand-mark" src="/brand-mark.svg" alt="" width={24} height={24} unoptimized />
            <span>Помощь с бюрократией в Сербии · Нови-Сад</span>
          </p>
          <div className="footer-columns">
            <div className="footer-details">
              <p><strong>Poslovno ime:</strong> Viktoriia Poverenova PR Konsultantske aktivnosti u vezi s poslovanjem i ostalim upravljanjem Novi Sad</p>
              <p><strong>Sedište:</strong> Mite Ružića 2, sprat 2, stan 3, Novi Sad, Srbija</p>
              <p><strong>MB:</strong> 67034627</p>
              <p><strong>PIB:</strong> 113723573</p>
              <p><strong>E-mail:</strong> <a href="mailto:powerenova@gmail.com">powerenova@gmail.com</a></p>
            </div>
            <div className="footer-links">
              <a href={telegramLink('Пишу с сайта и хочу уточнить: ')} target="_blank" rel="noreferrer"><strong>Telegram</strong></a>
              <a href="/pravne-informacije.pdf" target="_blank" rel="noreferrer">Pravne informacije</a>
              <a href="/politika-konfidencialnosti.pdf" target="_blank" rel="noreferrer">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
