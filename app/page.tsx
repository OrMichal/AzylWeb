import NavBar from "@/client-components/Nav-bar/nav-bar";
import { HeaderWrapper } from "@/elements/app-header/app-header";
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
          <p></p>
        </div>
      </HeaderWrapper>
      <NavBar>
        <NavBarItem href="animals" title="zvířátka" />
      </NavBar>
    </div>
  );
}
