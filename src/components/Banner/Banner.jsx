import logo from '../../img/logo.png';
import girl from '../../img/girl.png';

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__wrapper">
        <div className="banner__content">
          <img src={logo} alt="logo" className="banner__logo" />
          <h3 className="banner__title">
            Get unlimited access to exclusive articles
          </h3>
          <p className="banner__subtitle">
            Get rid of limits and read everything you wish
          </p>
          <button
            className="banner__button"
            type="button"
          >
            Try For Free
          </button>
          <img className="banner__image" src={girl} alt="girl with plants"></img>
        </div>
      </div>
    </section>
  )
}
