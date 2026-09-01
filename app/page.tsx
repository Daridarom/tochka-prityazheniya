import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

export const dynamic = "force-static";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const directions = [
  {
    number: "01",
    title: "Территории",
    text: "Комплексные сценарии развития: жильё, общественные пространства, инфраструктура и экономика места.",
    image: "/media/hero-crimea.webp",
    alt: "Панорама побережья восточного Крыма",
  },
  {
    number: "02",
    title: "Гостеприимство",
    text: "Туризм, wellness, рекреация и форматы отдыха, которые раскрывают природный характер восточного Крыма.",
    image: "/media/projects/horizon45/spa.webp",
    alt: "Ландшафтная SPA-зона у моря",
  },
  {
    number: "03",
    title: "Агро и производство",
    text: "Растениеводство, переработка локальной продукции, современные тепличные и лабораторные решения.",
    image: "/media/projects/blagodar.webp",
    alt: "Сельская территория проекта Благодар",
  },
  {
    number: "04",
    title: "Культура и образование",
    text: "Исторические маршруты, музеи, события, семейные программы и образовательные инициативы.",
    image: "/media/projects/mithridat.webp",
    alt: "Гора Митридат и исторический ландшафт Керчи",
  },
  {
    number: "05",
    title: "Медиа и сообщества",
    text: "Контент, публичные площадки и партнёрские коммуникации, способные собирать людей вокруг общего дела.",
    image: "/media/projects/horizon45/events.webp",
    alt: "Событие в природном амфитеатре",
  },
  {
    number: "06",
    title: "Социальное развитие",
    text: "Рабочие места, проекты для молодёжи, ветеранов и семей, реабилитационные и общественно полезные практики.",
    image: "/media/projects/horizon45/cafe.webp",
    alt: "Общественное пространство с видом на море",
  },
];

const projects = [
  {
    number: "01",
    name: "Благодар",
    location: "Челядиновское сельское поселение",
    area: "более 150 га*",
    type: "комплексное развитие",
    image: "/media/projects/blagodar.webp",
    alt: "Территория проекта Благодар в восточном Крыму",
    lead: "Многофункциональная территория для жилой, социальной, культурной, оздоровительной и производственной инфраструктуры.",
    functions: [
      "жилые зоны и общественные пространства",
      "образовательные, спортивные и семейные объекты",
      "агропереработка и создание рабочих мест",
      "wellness, SPA и активный отдых",
    ],
    registry: "90:07:260301:2121 · 90:07:260301:2255",
    note: "* Земельный контур группы собственников, указанный в презентационных материалах.",
    wide: true,
  },
  {
    number: "02",
    name: "Элиос",
    location: "п. Подмаячный · мыс Фонарь",
    area: "6,3 га · два контура",
    type: "экотуризм и наследие",
    image: "/media/projects/elios.webp",
    alt: "Побережье у посёлка Подмаячный в районе проекта Элиос",
    lead: "Туристический и оздоровительный кластер на первой береговой линии рядом с античным городом Парфениум.",
    concept: "Проект соединяет два смежных земельных контура площадью 3 и 3,3 га. Близость моря, разрешённое использование для туристического обслуживания и историко-природное окружение позволяют развивать здесь круглогодичный центр гостеприимства.",
    facts: [
      { value: "50 м", label: "до моря" },
      { value: "3 + 3,3 га", label: "два контура" },
      { value: "400 м", label: "до остановки" },
    ],
    functions: [
      "курортно-оздоровительный комплекс, SPA и программы восстановления",
      "гостиничные форматы, кафе и экскурсионный центр",
      "конгрессные, деловые, событийные и ретрит-программы",
      "пляжная инфраструктура, экотропы и маршруты к объектам наследия",
    ],
    registry: "90:07:090501:92",
    note: "В презентационных материалах 2026 года показаны основной участок 3 га и смежный контур 3,3 га. Электричество, вода и газ указаны по границе территории; параметры подлежат подтверждению на стадии проектирования.",
    gallery: [
      {
        image: "/media/projects/elios/landscape.webp",
        alt: "Открытый ландшафт участка Элиос с видом на море",
        caption: "Ландшафт территории",
      },
      {
        image: "/media/projects/elios/shoreline.webp",
        alt: "Береговая линия рядом с территорией проекта Элиос",
        caption: "Первая береговая линия",
      },
      {
        image: "/media/projects/elios/bay.webp",
        alt: "Природная бухта в районе проекта Элиос",
        caption: "Природное окружение",
      },
    ],
  },
  {
    number: "03",
    name: "Митридат",
    location: "Керчь · гора Митридат",
    area: "30 соток",
    type: "история и медиа",
    image: "/media/projects/mithridat.webp",
    alt: "Гора Митридат и панорама Керченского пролива",
    lead: "Исторически значимая территория с панорамой Керченского пролива и потенциалом современного культурного центра.",
    functions: [
      "интерактивный музей истории региона",
      "смотровые площадки и маршруты",
      "кафе и культурные события",
      "медиацентр и производство контента",
    ],
    registry: "90:19:010109:28288 · 90:19:010109:28095",
  },
  {
    number: "04",
    name: "Боспор",
    location: "Керченский полуостров · 10 км от Керчи",
    area: "12 га",
    type: "событийный и рекреационный кластер",
    image: "/media/projects/bospor.webp",
    alt: "Территория проекта Боспор на Керченском полуострове",
    lead: "Многофункциональная площадка рядом с Героевским: клубный жилой контур, гостеприимство, события, спорт и восстановление объединены в единую среду.",
    concept: "Миссия проекта — создать современную площадку для искусства, бизнеса, саморазвития и спорта, дополнив её инфраструктурой для проживания, отдыха, продуктивной работы и восстановления.",
    functions: [
      "купол для массовых мероприятий и открытая сцена",
      "панорамный ресторан, деловые и культурные программы",
      "гостиничный контур, модульные отели, гостевые и террасные дома",
      "SPA, спортивный комплекс и семейная инфраструктура",
      "общественные пространства и зона проката",
    ],
    registry: "90:07:260301:11",
    note: "До посёлка Героевское — около 1,5 км. Состав и параметры объектов отражают концептуальные материалы и уточняются проектированием.",
    stages: [
      "общественное ядро и базовая инфраструктура",
      "поэтапное строительство гостевого и жилого контура",
      "масштабирование событийной и сервисной программы",
    ],
    gallery: [
      {
        image: "/media/projects/bospor/masterplan.webp",
        alt: "Концептуальный генеральный план проекта Боспор",
        caption: "Концептуальный генплан",
      },
      {
        image: "/media/projects/bospor/zoning.webp",
        alt: "Функциональное зонирование общественного ядра проекта Боспор",
        caption: "Общественное ядро",
      },
      {
        image: "/media/projects/bospor/event-dome.webp",
        alt: "Архитектурный образ купола для событий",
        caption: "Купол событий · референс",
      },
    ],
  },
  {
    number: "05",
    name: "Мысовое",
    location: "Азовское побережье",
    area: "5 га",
    type: "экологическая рекреация",
    image: "/media/projects/mysovoe.webp",
    alt: "Скалистая бухта и чистое море у Мысового",
    lead: "Природная рекреационная зона для экологического и пляжного туризма, жизни и оздоровительного отдыха.",
    functions: [
      "пляжные и рекреационные зоны",
      "SPA и wellness",
      "природные маршруты и активный отдых",
      "комфортные дома для проживания",
    ],
    registry: "90:07:260301:2254",
  },
  {
    number: "06",
    name: "Горизонт 45",
    location: "Бухта Космонавтов · Керченский полуостров",
    area: "2,4 га",
    type: "проект ООО «СЗ „АЗГАРД“»",
    image: "/media/projects/horizon45/hero.webp",
    alt: "Бухта Космонавтов и территория ландшафтного комплекса Горизонт 45",
    lead: "Проект ООО «СЗ „АЗГАРД“»: компактный ландшафтный комплекс у Бухты Космонавтов, где архитектура следует рельефу, а берег сохраняется свободным.",
    functions: [
      "30 гостевых домов по 30 м² на внутреннем склоне",
      "панорамное кафе «Орбита» площадью 200 м²",
      "SPA, природный амфитеатр и событийная программа",
      "экотропы и открытый проход к берегу",
    ],
    registry: "45.394202° N · 36.627198° E",
    registryLabel: "Координаты территории",
    note: "Концептуальные параметры уточняются после ДПТ, изысканий и проектирования.",
    wide: true,
    gallery: [
      {
        image: "/media/projects/horizon45/houses.webp",
        alt: "Гостевые дома, встроенные в рельеф",
        caption: "Архитектура следует склону",
      },
      {
        image: "/media/projects/horizon45/cafe.webp",
        alt: "Панорамное кафе Орбита",
        caption: "Кафе «Орбита»",
      },
      {
        image: "/media/projects/horizon45/spa.webp",
        alt: "Ландшафтная SPA-зона",
        caption: "SPA и восстановление",
      },
    ],
    links: [
      {
        href: "https://daridarom.github.io/gorizont-45/",
        label: "Открыть сайт проекта",
      },
      {
        href: "https://azgard-crimea.ru/",
        label: "Исследовать 3D-обзор",
      },
    ],
  },
  {
    number: "07",
    name: "СКИФ",
    location: "Керченский полуостров · 2 км от Щёлкино",
    area: "участки по 6 соток",
    type: "клубный посёлок и рекреация",
    image: "/media/projects/skif/hero.webp",
    alt: "Азовское побережье рядом с территорией клубного посёлка СКИФ",
    lead: "Клубный посёлок у Азовского моря, объединяющий частные участки, лёгкую архитектуру, общественные зоны и сервис управляющей компании.",
    concept: "Миссия проекта — создать современное пространство для отдыха и жизни, где приватность участков сочетается с общей инфраструктурой, безопасностью и сообществом людей со схожими ценностями.",
    facts: [
      { value: "2 км", label: "до Щёлкино" },
      { value: "6 соток", label: "формат участков" },
      { value: "3", label: "категории участков" },
    ],
    functions: [
      "лёгкие дома, вписанные в природный ландшафт",
      "банный комплекс, небольшие бассейны и зоны отдыха",
      "детская и спортивная площадки для разных возрастов",
      "благоустройство, охрана, видеонаблюдение и обслуживание территории",
      "сопровождение строительства и управление арендой объектов",
    ],
    registryLabel: "Формат территории",
    registry: "частные участки · общественное ядро · управляющая компания",
    note: "Категории участков и образы архитектуры отражают концептуальную презентацию. Конкретные параметры объектов и очередность реализации уточняются.",
    wide: true,
    gallery: [
      {
        image: "/media/projects/skif/hero.webp",
        alt: "Побережье Азовского моря рядом с посёлком СКИФ",
        caption: "Природный контекст",
      },
      {
        image: "/media/projects/skif/architecture.webp",
        alt: "Референс лёгкого гостевого дома для проекта СКИФ",
        caption: "Лёгкая архитектура · референс",
      },
      {
        image: "/media/projects/skif/wellness.webp",
        alt: "Референс банного комплекса для проекта СКИФ",
        caption: "Банный комплекс · референс",
      },
    ],
  },
];

const team = [
  {
    name: "Александр Благов",
    role: "Основатель и генеральный директор",
    text: "Стратегия развития, инвестиционная логика и партнёрства.",
    image: "/media/team/alexander-blagov.webp",
  },
  {
    name: "Владимир Древс",
    role: "Стратегический медиапартнёр",
    text: "Медийная стратегия, коммуникации и развитие личных брендов.",
    image: "/media/team/vladimir-drevs.webp",
  },
  {
    name: "Татьяна Пинчук",
    role: "Координатор проектов",
    text: "Управление процессами и интеграция образовательных, культурных и бизнес-программ.",
    image: "/media/team/tatyana-pinchuk.webp",
  },
  {
    name: "Юрий Торохов",
    role: "Партнёр · медиаэксперт",
    text: "Режиссура, кинопроизводство и культурно-образовательные инициативы.",
    image: "/media/team/yuri-torokhov.webp",
  },
  {
    name: "Евгений Максимов",
    role: "Эксперт по градостроительству",
    text: "Комплексное развитие территорий, малоэтажная застройка и государственно-частное партнёрство.",
    image: "/media/team/evgeny-maksimov.webp",
  },
  {
    name: "Вячеслав Задорнов",
    role: "Почётный архитектор России",
    text: "Градостроительство, общественные здания и реновация территорий.",
    image: "/media/team/vyacheslav-zadornov.webp",
  },
  {
    name: "Илья Дёмин",
    role: "Эксперт по развитию территорий",
    text: "Экотуризм, растениеводство, тепличные и лабораторные комплексы.",
    image: "/media/team/ilya-demin.webp",
  },
  {
    name: "Алексей Горшков",
    role: "Руководитель по связям с общественностью",
    text: "Общественные, экологические, ветеранские и молодёжные проекты.",
    image: "/media/team/alexey-gorshkov.webp",
  },
  {
    name: "Николай Винокуров",
    role: "Эксперт по историческому наследию",
    text: "Археология, исторические маршруты и образовательные программы.",
    image: "/media/team/nikolay-vinokurov.webp",
  },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={["brand", compact ? "brand-compact" : ""].join(" ")}>
      <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="20" />
        <ellipse cx="24" cy="24" rx="20" ry="8.5" />
        <circle className="brand-core" cx="24" cy="24" r="4.5" />
      </svg>
      {!compact && (
        <span className="brand-type">
          <span>Точка</span>
          <span>притяжения</span>
        </span>
      )}
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <a className="skip-link" href="#content">
        Перейти к содержанию
      </a>

      <header className="site-header">
        <a className="header-brand" href="#top" aria-label="Точка притяжения — наверх">
          <BrandMark />
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#about">Суть</a>
          <a href="#directions">Направления</a>
          <a href="#projects">Проекты</a>
          <a href="#team">Команда</a>
        </nav>

        <a className="header-cta" href="#contact">
          Связаться <ArrowUpRight size={17} aria-hidden="true" />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Открыть меню">
            <span />
            <span />
          </summary>
          <nav aria-label="Мобильная навигация">
            <a href="#about">Суть</a>
            <a href="#directions">Направления</a>
            <a href="#projects">Проекты</a>
            <a href="#team">Команда</a>
            <a href="#contact">Контакты</a>
          </nav>
        </details>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-field" aria-hidden="true">
          <span className="field-ring field-ring-one" />
          <span className="field-ring field-ring-two" />
          <span className="field-ring field-ring-three" />
          <span className="field-dot field-dot-one" />
          <span className="field-dot field-dot-two" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Восточный Крым · проектная экосистема</p>
          <h1 id="hero-title">
            <span className="hero-line">Территории,</span>
            <span className="hero-line hero-line-offset">
              которые <em>притягивают</em>
            </span>
            <span className="hero-line">будущее.</span>
          </h1>
          <p className="hero-intro">
            Соединяем землю, архитектуру, туризм, культуру, производство и
            сильные сообщества, чтобы создавать живые пространства с долгим
            смыслом.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Исследовать проекты <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href="mailto:info@alexblagov.ru?subject=Партнерство%20с%20Точкой%20притяжения"
            >
              Предложить партнёрство <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src={`${basePath}/media/hero-crimea.webp`}
              alt="Панорама крымского побережья на закате"
              width="1800"
              height="875"
              fetchPriority="high"
            />
            <div className="hero-orbit" aria-hidden="true">
              <span />
              <i />
            </div>
            <div className="image-caption">
              <span>45° северной широты</span>
              <span>Крым · Россия</span>
            </div>
          </div>
        </div>

        <div className="hero-metrics" aria-label="Ключевые факты">
          <div><strong>07</strong><span>территориальных концепций</span></div>
          <div><strong>06</strong><span>направлений развития</span></div>
          <div><strong>09</strong><span>отраслевых экспертов</span></div>
          <div><strong>2023</strong><span>год основания компании</span></div>
        </div>
      </section>

      <div id="content">
        <section className="manifest section" id="about">
          <div className="section-kicker">
            <span>01</span>
            <p>Суть проекта</p>
          </div>
          <div className="manifest-body">
            <p className="manifest-small">Не просто квадратные метры.</p>
            <h2>
              Мы проектируем <em>связи</em> между местом, человеком и
              возможностью.
            </h2>
            <div className="manifest-grid">
              <p>
                «Точка притяжения» — проектная экосистема комплексного развития
                территорий восточного Крыма. В одной системе работают
                девелопмент, гостеприимство, агронаправление, культура,
                образование, медиа и социальные инициативы.
              </p>
              <p>
                Задача — раскрыть потенциал каждой локации, сохранить её
                природный и исторический характер и создать устойчивую модель,
                полезную жителям, гостям, партнёрам и региону.
              </p>
            </div>
          </div>
          <div className="manifest-words" aria-hidden="true">
            <span>Сохранить</span>
            <span>Соединить</span>
            <span>Развить</span>
          </div>
        </section>

        <section className="directions section section-dark" id="directions">
          <div className="section-heading">
            <div className="section-kicker section-kicker-light">
              <span>02</span>
              <p>Направления</p>
            </div>
            <div>
              <p className="overline">Одна экосистема</p>
              <h2>Шесть слоёв развития</h2>
            </div>
          </div>
          <div className="direction-grid">
            {directions.map((direction) => (
              <article className="direction-card" key={direction.number}>
                <div className="direction-media">
                  <img
                    src={`${basePath}${direction.image}`}
                    alt={direction.alt}
                    width="900"
                    height="600"
                    loading="lazy"
                  />
                  <span className="direction-index">{direction.number}</span>
                </div>
                <div className="direction-copy">
                  <h3>{direction.title}</h3>
                  <p>{direction.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-heading projects-heading">
            <div className="section-kicker">
              <span>03</span>
              <p>Портфель</p>
            </div>
            <div>
              <p className="overline">География возможностей</p>
              <h2>Семь территорий.<br />Семь характеров.</h2>
            </div>
            <p className="heading-note">
              Концепции находятся на разных стадиях проработки. Представленные
              параметры отражают материалы проекта и не являются публичной
              офертой.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-card${project.wide ? " project-card-wide" : ""}`}
                key={project.name}
              >
                <div className="project-media">
                  <img
                    src={`${basePath}${project.image}`}
                    alt={project.alt}
                    width="1500"
                    height="600"
                    loading="lazy"
                  />
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>
                <div className="project-content">
                  <div className="project-topline">
                    <span><MapPin size={16} aria-hidden="true" /> {project.location}</span>
                    <span>{project.area}</span>
                  </div>
                  <h3>{project.name}</h3>
                  <p className="project-lead">{project.lead}</p>
                  <details className="project-details">
                    <summary>
                      Раскрыть концепцию
                      <span aria-hidden="true">+</span>
                    </summary>
                    <div className="project-details-body">
                      {project.concept && <p className="project-concept">{project.concept}</p>}
                      {project.facts && (
                        <div className="project-facts" aria-label={`Ключевые параметры проекта ${project.name}`}>
                          {project.facts.map((fact) => (
                            <div key={`${fact.value}-${fact.label}`}>
                              <strong>{fact.value}</strong>
                              <span>{fact.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <ul>
                        {project.functions.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      {project.stages && (
                        <div className="project-stages">
                          <span>Логика реализации</span>
                          <ol>
                            {project.stages.map((stage, index) => (
                              <li key={stage}>
                                <b>{String(index + 1).padStart(2, "0")}</b>
                                {stage}
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                      <p className="registry">
                        <span>{project.registryLabel ?? "Кадастровые номера"}</span>
                        {project.registry}
                      </p>
                      {project.note && <p className="project-note">{project.note}</p>}
                      {project.gallery && (
                        <div className="project-gallery">
                          {project.gallery.map((item) => (
                            <figure key={item.image}>
                              <img
                                src={`${basePath}${item.image}`}
                                alt={item.alt}
                                width="900"
                                height="600"
                                loading="lazy"
                              />
                              <figcaption>{item.caption}</figcaption>
                            </figure>
                          ))}
                        </div>
                      )}
                      {project.links && (
                        <div className="project-links">
                          {project.links.map((link) => (
                            <a
                              href={link.href}
                              key={link.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {link.label} <ArrowUpRight size={16} aria-hidden="true" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="method section section-method">
          <div className="section-kicker">
            <span>04</span>
            <p>Метод</p>
          </div>
          <div className="method-title">
            <p className="overline">От территории — к работающей системе</p>
            <h2>Проектируем целое,<br />а не сумму объектов.</h2>
          </div>
          <ol className="method-steps">
            <li>
              <span>01</span>
              <div><h3>Считываем место</h3><p>Правовой контур, ландшафт, история, инфраструктура и запрос территории.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><h3>Собираем сценарий</h3><p>Функции, аудитории, экономика, общественная ценность и образ будущего.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><h3>Соединяем компетенции</h3><p>Архитектура, девелопмент, культура, медиа, агро и социальные практики.</p></div>
            </li>
            <li>
              <span>04</span>
              <div><h3>Формируем партнёрство</h3><p>Роли, ресурсы, этапы, точки контроля и ясный формат взаимодействия.</p></div>
            </li>
          </ol>
        </section>

        <section className="team section section-dark" id="team">
          <div className="section-heading team-heading">
            <div className="section-kicker section-kicker-light">
              <span>05</span>
              <p>Команда</p>
            </div>
            <div>
              <p className="overline">Разные оптики · единый замысел</p>
              <h2>Люди, которые<br />усиливают место.</h2>
            </div>
            <p className="heading-note heading-note-light">
              Междисциплинарная команда объединяет девелопмент, архитектуру,
              историю, образование, медиа и общественную работу.
            </p>
          </div>

          <div className="team-grid">
            {team.map((person, index) => (
              <article className="person-card" key={person.name}>
                <div className="person-image">
                  <img
                    src={`${basePath}${person.image}`}
                    alt={person.name}
                    width="720"
                    height="900"
                    loading="lazy"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="person-copy">
                  <h3>{person.name}</h3>
                  <p className="person-role">{person.role}</p>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-field" aria-hidden="true">
            <span /><span /><i />
          </div>
          <div className="contact-main">
            <p className="overline">Открыты к диалогу</p>
            <h2>Создадим новую<br /><em>точку притяжения?</em></h2>
            <p>
              Приглашаем к сотрудничеству государственные структуры,
              инвесторов, операторов гостеприимства, проектные команды,
              экспертов и общественные организации.
            </p>
            <div className="contact-actions">
              <a
                className="button button-light"
                href="mailto:info@alexblagov.ru?subject=Предложение%20о%20сотрудничестве"
              >
                Написать нам <Mail size={18} aria-hidden="true" />
              </a>
              <a className="button button-outline-light" href="tel:+79117690535">
                Позвонить <Phone size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="contact-panel">
            <div className="contact-item">
              <span>Электронная почта</span>
              <a href="mailto:info@alexblagov.ru">info@alexblagov.ru</a>
            </div>
            <div className="contact-item">
              <span>Телефон</span>
              <a href="tel:+79117690535">+7 911 769-05-35</a>
            </div>
            <div className="contact-item">
              <span>Telegram основателя</span>
              <a href="https://t.me/blagovstyle" target="_blank" rel="noreferrer">
                @blagovstyle <Send size={16} aria-hidden="true" />
              </a>
            </div>
            <div className="contact-item">
              <span>Юридический адрес</span>
              <a
                href="https://yandex.ru/maps/?text=Керчь%2C%20улица%20Театральная%2C%2037"
                target="_blank"
                rel="noreferrer"
              >
                Республика Крым, Керчь,<br />ул. Театральная, 37
                <MapPin size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <div className="footer-brand">
            <BrandMark />
            <p>Проектная экосистема комплексного развития территорий восточного Крыма.</p>
          </div>
          <div className="footer-legal">
            <p>ООО «Точка Притяжения»</p>
            <p>ИНН 9111030208 · ОГРН 1239100010731 · КПП 911101001</p>
            <p>Генеральный директор — Александр Леонидович Благов</p>
            <a href="https://egrul.nalog.ru/index.html" target="_blank" rel="noreferrer">
              Проверить в ЕГРЮЛ <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Точка притяжения</p>
            <p>Материалы сайта не являются публичной офертой.</p>
            <a href="#top">Наверх <ArrowUpRight size={14} aria-hidden="true" /></a>
          </div>
        </footer>
      </div>
    </main>
  );
}
