import NavBar from "@/client-components/Nav-bar/nav-bar";
import { HeaderWrapper } from "@/elements/app-header/app-header";
import { NavBarItemDetail } from "@/elements/nav-bar-item-detail/nav-bar-item-detail";
import { NavBarItem } from "@/elements/nav-bar-item/nav-bar-item";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <HeaderWrapper>
        <div>
          <p>haha</p>
        </div>
        <div>
          <p>chcete nás podpořit ?</p>
        </div>
        <div>
          <p>účet</p>
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
    </div>
  );
}
