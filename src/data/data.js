import telegram from "../Assets/Images/telegram.svg";
import whatsapp from "../Assets/Images/whatsapp.svg";
import instagram from "../Assets/Images/instagram.svg";
import email from "../Assets/Images/email.svg";
import brand from "../Assets/Images/brand.webp";
import art from "../Assets/Images/art.webp";
import media from "../Assets/Images/media.webp";
import web from "../Assets/Images/web.webp";

export const footerContacts = [
  {
    title: "Telegram",
    link: "https://t.me/pictdesign",
  },
  {
    title: "WhatsApp",
    link: "https://t.me/pictdesign",
  },
  {
    title: "Instagram",
    link: "https://t.me/pictdesign",
  },
  {
    title: "E-mail",
    link: "https://t.me/pictdesign",
  },
];

export const contacts = [
  {
    icon: whatsapp,
    link: "https://wa.link/ur25zn",
  },
  {
    icon: telegram,
    link: "https://t.me/pictdesign",
  },
  {
    icon: instagram,
    link: "https://instagram.com/pict.agency",
  },
  {
    icon: email,
    link: "mailto:ask@pict.design",
  },
];

export const inputs = [
  {
    id: "name",
    name: "name",
    type: "text",
    placeholder: {
      ru: "Ваше имя",
      en: "Your name",
    },
    required: true,
    minLength: 2,
    pattern: "^([а-яА-Яa-zA-Z]|s)*$",
  },
  {
    id: "phone",
    name: "phone",
    type: "mobile",
    placeholder: { ru: "Номер телефона", en: "Your phone number" },
    pattern: "(d)",
    required: true,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: {ru: "E-mail", en: "E-mail" },
    required: true,
    minLength: 6,
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
  },
];

export const works = [
  {
    title: {
      ru: "Фирменный стиль",
      en: "Branding",
    },
    link: "/branding",
    image: brand,
    color: "#000",
    text: [
      {
        ru: "Удачно разработанные логотип и фирменный стиль делают продукты компании отличающимися от конкурентов, узнаваемыми при одном взгляде. Целостный образ вашей компании, получивший визуальное воплощение в фирменном стиле, поможет укреплению деловой репутации, повысит престиж среди партнеров, клиентов и конкурентов. При вашем желании результатом разработки станет гайд-лайн/брендук с графическими изображениями и правилами их использования, что станет эффективным инструментом в руках маркетинговой службы.",
      },
    ],
    stages: [
      {
        icon: "icon-hands",
        text: {ru: "Заполнение брифа заказчиком, предоплата 50%", en: "Prepayment 50%"},
      },
      {
        icon: "icon-shield",
        text: {ru: "Подбор референсов, разработка стратегии", en: "References, strategy"},
      },
      {
        icon: "icon-pencil",
        text: {ru: "Создание логотипа с нуля, без использования стоковой графики", en: "Logo creation"},
      },
      {
        icon: "icon-eye",
        text: {ru: "3 варианта исполнения с примерами использования", en: "3 logo variants with examples of using"}
      },
      {
        icon: "icon-pen",
        text: {ru: "Доработка выбранного заказчиком направления", en: "Finalizing of logo and brand"}
      },
    ],
  },
  {
    title: {
      ru: "Полиграфия",
      en: "Polygraphy",
    },
    link: "/polygraphy",
    color: "#000",
    image: art,
    text: [
      {
        ru: "Реклама в интернете вытесняет рекламу в прессе. Но полиграфический дизайн остается востребованным. Необходимость в годовых очетах, вывесках, билбордах, фирменной упаковке товаров, выпуске скидочных карт, рассылке праздничных подарков клиентам и партнерам, организации выставок и других мероприятий остается до сих пор.",
      },
      {
        ru: "Наши дизайнеры имеют профильное полиграфическое образование, и обладают редкими для современных реалий плюсами — любят бумагу, буквы, внимательны в верстке многостраничных изданий, также могут подготовить макет для печати.",
      },
    ],
    stages: [
      {
        icon: "icon-hands",
        text: {ru: "Предоставление текстов и фото-изображений заказчиком, предоплата 50%", en: "Choosing text and images, prepayment 50%"}
      },
      {
        icon: "icon-shield",
        text: {ru: "Подбор референсов, обсуждение деталей работы", en: "References, details"}
      },
      {
        icon: "icon-pencil",
        text: {ru: "Подготовка 1-2 концепций макета", en: "Creating 1-2 concepts"}
      },
      {
        icon: "icon-maket",
        text: {ru: "Верстка утвержденного заказчиком варианта", en: "Markup"}
      },
      {
        icon: "icon-paper",
        text: {ru: "Верстка утвержденного заказчиком варианта", en: "Markup"}
      },
    ],
  },
  {
    title: {
      ru: "Презентация",
      en: "Presentation",
    },
    link: "/presentation",
    image: media,
    color: "#fff",
    text: [
      {
        ru: "Основное предназначение презентации — структурировать информацию, дополнить рассказ визуальными образами, статистикой и тезисами.",
      },
      {
        ru: "Менеджеры по продажам, директоры, спикеры используют слайды, чтобы сделать предложение убедительным и продающим. Продающий материал, расскажет о компании, покажет ее конкурентные преимущества, объяснит суть бизнеса. Для таких документов разрабатывается профессиональный дизайн, каждый элемент которого работает на создание у клиента или партнера положительного образа фирмы. ",
      },
    ],
    stages: [
      {
        icon: "icon-hands",
        text: {ru: "Предоставление текстов и фото-изображений заказчиком, предоплата 50%", en: "Choosing text and images, prepayment 50%"}
      },
      {
        icon: "icon-shield",
        text: {ru: "Подбор референсов, разработка структуры и стратегии", en: "References, structure, strategy"},
      },
      {
        icon: "icon-pencil",
        text: {ru: "Подготовка 2 концепций макета", en: "Creating 2 concepts"}
      },
      {
        icon: "icon-maket",
        text: {ru: "Верстка утвержденного заказчиком варианта", en: "Markup"}
      },
      {
        icon: "icon-web",
        text: {ru: "Верстка утвержденного заказчиком варианта и электронной версии", en: "Markup and e-version"}
      },
    ],
  },
  {
    title: {
      ru: "Веб дизайн",
      en: "Web design",
    },
    link: "/web",
    image: web,
    color: "#000",
    text: [
      {
        ru: "Качественный дизайн, понятный интерфейс, удобство пользования, корректное отображение на каждом устройстве – все это слагаемые успеха любой компании, факторы, от которых напрямую зависит посещаемость сайта. Мы создаем уникальный и конкурентоспособный визуал, который становится отличным помощником в ведении бизнеса. Мы можем сделать дизайн лендинга или полноценного сайта и сверстать его",
      },
    ],
    stages: [
      {
        icon: "icon-hands",
        text: {ru: "Предоставление текстов и фото-изображений заказчиком, предоплата 50%", en: "Choosing text and images, prepayment 50%"}
      },
      {
        icon: "icon-shield",
        text: {ru: "Прототипирование (разработка структуры) опционально", en: "Prototype (optional)"},
      },
      {
        icon: "icon-pencil",
        text: {ru: "Дизайн главной страницы сайта", en: "Design of concept"}
      },
      {
        icon: "icon-maket",
        text: {ru: "Дизайн остальных страниц/экранов лендинга", en: "Design of web-pages"}
      },
      {
        icon: "icon-web",
        text: {ru: "Верстка сайта веб-разработчиком опционально", en: "HTML-coding (optional)"}
      },
    ],
  },
];

export const facts = [
  {
    number: "100+",
    fact: {
      ru: "реализованных проектов",
      en: "completed projects",
    },
  },
  {
    number: "10+",
    fact: {
      ru: "лет в сфере графического дизайна",
      en: "years in graphic design",
    },
  },
  {
    number: "50+",
    fact: {
      ru: "довольных заказчиков",
      en: "satisfied customers",
    },
  },
];
