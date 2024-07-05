import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../common/Container";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="mt-auto py-3">
      <Container>
        <div className="md:px-10 flex text-sm">
          <div>© 2024 James Plant</div>
          <div className="ml-auto flex gap-4">
            <a
              href="https://www.linkedin.com/in/james-plant-7ab317b/"
              rel="noreferrer"
              title="Linkedin"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="inline-block w-6 h-6"
              />
            </a>
            <a
              href="https://www.github.com/NetworkMonk/"
              rel="noreferrer"
              title="Linkedin"
            >
<FontAwesomeIcon icon={faGithub} className="inline-block w-6 h-6" /></a>
<a
              href="https://www.instagram.com/networkmonkey/"
              rel="noreferrer"
              title="Linkedin"
            >
<FontAwesomeIcon
              icon={faInstagram}
              className="inline-block w-6 h-6"
            /></a>
                        <a
              href="https://www.facebook.com/james.plant.31/"
              rel="noreferrer"
              title="Linkedin"
            >
<FontAwesomeIcon
              icon={faFacebook}
              className="inline-block w-6 h-6"
            /></a>
          </div>
        </div>
      </Container>
    </section>
  );
}
