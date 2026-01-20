import avatarAvif from "@shared/assets/images/avatar/avatar.avif";
import avatarJpg from "@shared/assets/images/avatar/avatar.jpg";
import avatarWebp from "@shared/assets/images/avatar/avatar.webp";

export const Header = () => {
  return (
    <header>
      <h1>Artem Varivonchik</h1>
      <p>Frontend Engineer</p>
      <hr />
      <picture>
        <source srcSet={avatarAvif} type="image/avif" />
        <source srcSet={avatarWebp} type="image/webp" />
        <img src={avatarJpg} alt="Varivonchik Artem" height="180" width="140" />
      </picture>

      <address>
        <ul>
          <li>
            Email:&nbsp;<a href="mailto:varivonchikartem@gmail.com">varivonchikartem@gmail.com</a>
          </li>
          <li>
            Telegram:&nbsp;
            <a href="https://t.me/varivonchikartem" target="_blank" rel="noopener noreferrer">
              https://t.me/varivonchikartem
            </a>
          </li>
          <li>
            Phone:&nbsp;<a href="tel:+375256168444">+375256168444</a>
          </li>
        </ul>
      </address>
    </header>
  );
};
