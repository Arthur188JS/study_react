const root = document.getElementById('root');
const pageData = {
    phone: '7(962)556-1234',
    name: 'Артур',
    company: 'Название компании',
    main: {
        mainHead: 'Заголовок c уникальным торговым предложение по системе 4U',
        mainSmall: 'Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более.'
    },
    features: {
        featuresHead: 'Уникальный заголовок для преимущества компании',
        featuresSubhead: 'О нас',
        featuresDescription: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.',
        items: {
            item1: {
                title: 'Первое целевое преимущество',
                style: {
                    backgroundImage: 'url(./images/1.svg)'
                }
            },
            item2: {
                title: 'Второе целевое преимущество',
                style: {
                    backgroundImage: 'url(./images/2.svg)'
                }
            },
            item3: {
                title: 'Третье целевое преимущество',
                style: {
                    backgroundImage: 'url(./images/3.svg)'
                }
            },
            item4: {
                title: 'Четвертое целевое преимущество',
                style: {
                    backgroundImage: 'url(./images/4.svg)'
                }
            },
        }
    },
};

const btnAlert = () => {
    alert('Подробнее');
}

const btnMailer = (event) => {
    event.preventDefault();

    const formElem = new FormData(event.target);
    const url = './mailer.php';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: formElem
    }).then((data) => {
        console.log(data);
    }).catch(() => console.log('error'));
}

const Header = (props) => {
    return (
        <header>
            <div className="wrapper">
                <div className="header">
                    <a href="/">
                        <div className="header-logo"></div>
                    </a>
                    <a href={`tel:${props.phone}`} className="header-phone"></a>
                    <div className="header-phonelink">
                        <a href={`tel:${props.phone}`}>+{props.phone}</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Main = (props) => {
    return (
        <main>
            <div className="wrapper">
                <div className="main">
                    <h1 className="main-head">{props.main.mainHead}</h1>
                    <div className="main-small">{props.main.mainSmall}</div>
                    <button className="btn main-btn" onClick={btnAlert}>
                        <span>Подробнее</span>
                    </button>
                </div>
            </div>
        </main>
    );
};

const Features = (props) => {
    const FeaturesSliderItem = (props) => {
        return (
            <div className="features-slider_item">
                <div className="features-img" style={props.item.style}></div>
                <div className="features-feature">{props.item.title}</div>
            </div>
        );
    }

    return (
        <section className="features">
            <div className="wrapper">
                <div className="features-wrapper">
                    <h2 className="features-head">{props.features.featuresHead}</h2>
                    <div className="features-subhead">{props.features.featuresSubhead}</div>
                    <div className="features-description">{props.features.featuresDescription}</div>
                    <div className="features-slider">
                        <div className="features-slider_items">
                            <FeaturesSliderItem item={pageData.features.items.item1}/>
                            <FeaturesSliderItem item={pageData.features.items.item2}/>
                            <FeaturesSliderItem item={pageData.features.items.item3}/>
                            <FeaturesSliderItem item={pageData.features.items.item4}/>
                        </div>
                        <button className="features-slider-arrow features-slider-prev">
                            <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                        <button className="features-slider-arrow features-slider-next">
                            <svg width="9" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    return (
        <section className="contact">
            <div className="wrapper">
                <div className="contact-wrapper">
                    <h2 className="contact-title">Остались вопросы?</h2>
                    <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                    <form className="contact-form" onSubmit={btnMailer}>
                        <input type="text" placeholder="Ваше имя"/>
                        <input type="tel" placeholder="Телефон"/>
                        <input type="email" placeholder="E-mail"/>
                        <button className="btn contact-btn">
                            <span>Позвоните мне</span>
                        </button>
                    </form>
                    <div className="contact-personal">
                        Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
                    </div>
                </div>
            </div>
        </section>
    );
};

const Footer = (props) => {

    const [phone, name, company] = props.data;

    return (
        <footer>
            <div className="footer">
                <div className="footer-logo"></div>
                <div className="footer-company"><span>© {new Date().getFullYear()} {company}. Все права защищены.</span></div>
                <a href="tel:{`tel:${phone}`}" className="footer-phone"></a>
                <div className="footer-websurfer">
                    <span className="footer-websurfer_build">Сделано</span>
                    <a href="#">{name}</a>
                </div>
                <div className="footer-phonelink"><a href={`tel:${phone}`}>+{phone}</a></div>
            </div>
        </footer>
    );
};

const RenderJSX = () => {
    return (
        <div>
            <Header phone={pageData.phone}/>
            <Main main={pageData.main}/>
            <Features features={pageData.features}/>
            <Contact/>
            <Footer data={[pageData.phone, pageData.name, pageData.company]}/>
        </div>
    );
};

ReactDOM.render(<RenderJSX/>, root);

