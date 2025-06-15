import NavBar from "@/client-components/Nav-bar/nav-bar";
import { UserBox } from "@/client-components/user-box/user-box";
import { AppFooter } from "@/elements/app-footer/app-footer";
import { HeaderWrapper } from "@/elements/app-header/app-header";
import { NavBarItemDetail } from "@/elements/nav-bar-item-detail/nav-bar-item-detail";
import { NavBarItem } from "@/elements/nav-bar-item/nav-bar-item";
import { SocialsLink } from "@/elements/socials-link/socials-link";
import { SupportButton } from "@/elements/support-button/support-button";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="">
      <HeaderWrapper>
        <div className="flex gap-1">
          <SocialsLink src="https://www.facebook.com/daisyazyl/?locale=cs_CZ">
            <FontAwesomeIcon icon={faFacebookF} />
          </SocialsLink>
        </div>
        <SupportButton text="❤️ Jak nás můžete podpořit?" href="support" />
        <div>
          <UserBox/>
        </div>
      </HeaderWrapper>

      <NavBar>
        <NavBarItem href="animals" title="zvířátka">
          <NavBarItemDetail>
            <p>haha</p>
          </NavBarItemDetail>
          <NavBarItemDetail>
            <p>lajfkla </p>
          </NavBarItemDetail>
        </NavBarItem>
      </NavBar>

      <AppFooter>
        <div>
            Daisy a. z.
        </div>
      </AppFooter>
    </div>
  );
}
