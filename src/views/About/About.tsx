import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">О НАС</h2>
      <div className="about__container">
        <div className="vertical-line"></div>
        <div className="about__content">
          <p className="about__text">
            Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым
            днем все больше людей заказывают жд билеты через интернет.
          </p>
          <p className="about__text">
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это
            делать? Мы расскажем о преимуществах заказа через интернет.
          </p>
          <p className="about__text text_bold">
            Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря
            динамическому ценообразованию цена на билеты в это время самая низкая.
          </p>
        </div>
      </div>
    </section>
  );
}
