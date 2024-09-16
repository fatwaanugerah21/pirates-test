import SearchInputComponent from "@/components/search-input.component";
import SearchPageNavComponent from "@/components/search-page-nav/search-page-nav.component";
import CardComponent from "@/components/card.component";
import BottomBarComponent from "@/components/bottom-bar/bottom-bar.component";
import NavbarComponent from "@/components/navbar/navbar.component";
import SEOComponent from "@/components/seo.component";

const items = [
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
    ratingPoint: 4.8,
    reviewAmt: 2,
  },
  {
    imgSrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    title: "스시하루",
    location: "오사카 나카노시마• 야키토리",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
    ratingPoint: 4.8,
    reviewAmt: 2,
  },
  {
    imgSrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    title: "스시하루",
    location: "오사카 나카노시마• 야키토리",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
    ratingPoint: 4.8,
    reviewAmt: 2,
  },
  {
    imgSrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    title: "스시하루",
    location: "오사카 나카노시마• 야키토리",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
    ratingPoint: 4.8,
    reviewAmt: 2,
  },
  {
    imgSrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    title: "스시하루",
    location: "오사카 나카노시마• 야키토리",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
    ratingPoint: 4.8,
    reviewAmt: 2,
  },
  {
    imgSrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    title: "스시하루",
    location: "오사카 나카노시마• 야키토리",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
    ratingPoint: 4.8,
    reviewAmt: 2,
  },
  {
    imgSrc: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    title: "스시하루",
    location: "오사카 나카노시마• 야키토리",
  },
  {
    imgSrc: "/sushi-photo.jpg",
    title: "카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마",
    description: "최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수",
    location: "오사카 나카노시마•야키토리•4~6만원",
    tagLine: "나카노시마×야키토리 상위 맛",
  },
];

export default function Home() {
  return (
    <>
      <SEOComponent title="Pirates Test" description="This is the best website you will find" />
      <NavbarComponent />

      <main className={`min-h-screen p-7 pb-20 sm:px-14 space-y-5`}>
        <SearchInputComponent />
        <SearchPageNavComponent />

        <div className={`space-y-5 sm:space-y-0 !items-start sm:grid sm:grid-cols-2 sm:gap-4 sm:place-items-center lg:place-items-stretch lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-14 2xl:grid-cols-6 2xl:gap-x-5 max-w-full`}>
          {items.map((i) => {
            return (
              <CardComponent
                key={i.imgSrc + i.title}
                imgSrc={i.imgSrc}
                title={i.title}
                description={i.description}
                rating={{
                  point: i.ratingPoint,
                  reviewAmt: i.reviewAmt,
                }}
                location={i.location}
                tagLine={i.tagLine}
              />
            );
          })}
        </div>
      </main>

      <BottomBarComponent />
    </>
  );
}
