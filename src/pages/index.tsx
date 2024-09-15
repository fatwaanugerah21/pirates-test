import SearchInputComponent from "@/components/search-input.component";
import NavbarComponent from "@/components/navbar/navbar.component";
import CardComponent from "@/components/card.component";
import BottomBarComponent from "@/components/bottom-bar/bottom-bar.component";

export default function Home() {
  return (
    <>
      <div className={`min-h-screen p-7 pb-20 gap-16 sm:p-20 space-y-5`}>
        <SearchInputComponent />
        <NavbarComponent />

        <div className={`space-y-5`}>
          <CardComponent
            imgSrc="/sushi-photo.jpg"
            title="카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마"
            description="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수"
            rating={{
              point: 4.8,
              reviewAmt: 2,
            }}
            location="오사카 나카노시마•야키토리•4~6만원"
            tagLine="나카노시마×야키토리 상위 맛"
          />
          <CardComponent imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" title="스시하루" location="오사카 나카노시마• 야키토리" />
          <CardComponent
            imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            title="카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마"
            description="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수"
            rating={{
              point: 4.8,
              reviewAmt: 2,
            }}
            location="오사카 나카노시마•야키토리•4~6만원"
          />
          <CardComponent
            imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            title="카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마"
            description="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수"
            rating={{
              point: 4.8,
              reviewAmt: 2,
            }}
            location="오사카 나카노시마•야키토리•4~6만원"
          />
          <CardComponent
            imgSrc="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            title="카구라자카 이시카와 스시하루 나카노시마 스나카노시마나카노시마"
            description="최고급 오마카세를 합리적인 가격에 무제한 사케와 함께 즐길 수"
            rating={{
              point: 4.8,
              reviewAmt: 2,
            }}
            location="오사카 나카노시마•야키토리•4~6만원"
            tagLine="나카노시마×야키토리 상위 맛"
          />
        </div>
      </div>
      <BottomBarComponent />
    </>
  );
}
