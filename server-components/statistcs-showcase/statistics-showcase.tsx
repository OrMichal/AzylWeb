import Image from "next/image";

export async function StatisticsShowcase() {
  return (
    <div className="w-full flex flex-col gap-16">
      {/* Emotivní úvod */}
      <article className="flex flex-wrap justify-between items-center gap-8">
        <div className="relative w-full md:w-[480px] h-[300px] md:h-[400px]">
          <Image
            src="/images/sad-cat.jpg"
            alt="Smutná kočka v útulku"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="max-w-xl text-justify font-extralight text-2xl">
          <p>
            Každý den tisíce zvířat trpí kvůli lidské lhostejnosti. Jsou
            vyhozená jako nepotřebné věci, ponechána svému osudu v zimě, hladu,
            bez lásky. Některá z nich nikdy nepoznala pohlazení, bezpečí ani
            plnou misku.
          </p>
          <p className="mt-4">
            My v našem azylu věříme, že každé zvíře si zaslouží šanci – druhou,
            třetí, klidně desátou. Zachraňujeme ty, které jiní odepsali. Každý
            zachráněný život je pro nás vítězstvím, každá adopce důkazem, že i v
            tomhle světě je stále místo pro soucit, lásku a naději.
          </p>
        </div>
      </article>

      {/* Statistický apel */}
      <article className="flex flex-wrap justify-between items-center gap-8">
        <div className="max-w-xl flex flex-col gap-6 text-justify">
          <h2 className="font-semibold text-3xl">
            🐾 Proč naše práce existuje
          </h2>
          <p>
            Každý den se na světě odehrává něco, co by nemělo být nikdy
            samozřejmostí – tichá bolest těch, kteří nemohou mluvit. Psi a
            kočky, kteří měli být milovanými společníky, končí v krutých
            podmínkách – opuštění, hladoví, zranění.
          </p>
          <p>
            Jen v samotném New Yorku bylo za poslední dekádu nahlášeno téměř{" "}
            <strong>2 800 případů týrání zvířat</strong>, z toho více než{" "}
            <strong>2 200 psů</strong> a přes <strong>400 koček</strong>.{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nypost.com/2025/05/03/us-news/nearly-3000-reports-of-animal-cruelty-in-nyc-aspca-report"
              className="text-blue-700 hover:underline"
            >
              (ASPCA, 2025)
            </a>{" "}
            A to jsou jen známé případy – tisíce dalších zůstávají nepovšimnuty.
            V Británii vzrostly útoky na domácí mazlíčky o{" "}
            <strong>23 % za jediný rok</strong>, často šířené online jako
            zvrácená zábava.{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.theguardian.com/world/article/2024/aug/11/rise-in-animal-abuse-in-england-and-wales-fuelled-by-social-media-finds-rspca"
              className="text-blue-700 hover:underline"
            >
              (The Guardian, 2024)
            </a>
          </p>
          <p>
            Právě proto tu jsme. Náš azyl je bezpečným místem pro ty, kteří byli
            zklamáni lidmi. Bojujeme za jejich druhou šanci – srdcem, časem i
            prostředky. Každý zachráněný život je pro nás důkazem, že to má
            smysl. A díky lidem, jako jste vy, jim můžeme dát víc než jen
            přístřeší – můžeme jim vrátit důvěru, klid a lásku.
          </p>
        </div>
        <div className="relative w-full md:w-[420px] h-[300px] md:h-[420px]">
          <Image
            src="/images/statistics.jpg"
            alt="Statistika týraných zvířat"
            fill
            className="rounded-3xl object-cover"
          />
        </div>
      </article>
    </div>
  );
}
