import centralAndWesternDistrictView1 from "../images/CentralAndWesternDistrict/view1.jpg";
import eastDistrictView1 from "../images/EastDistrict/view1.jpg";
import islandsDistrictView1 from "../images/IslandsDistrict/view1.jpeg";
import kowloonCityDistrictView1 from "../images/KowloonCityDistrict/view1.jpeg";
import kwunTongDistrictView1 from "../images/KwunTongDistrict/view1.jpg";
import nYView1 from "../images/NT/view1.jpeg";
import shamShuiPoView1 from "../images/ShamShuiPo/view1.jpeg";
import southDistrictView1 from "../images/SouthDistrict/view1.jpg";
import tsimShaTsuiView1 from "../images/YauTsimMongDistrict/view1.jpg";
import wanChaiView1 from "../images/WanChai/view1.jpg";
import wongTaiSinView1 from "../images/WongTaiSin/view1.jpeg";
function importAll(r) {
  return r.keys().map(r);
}
const FourSeasonsHotelHongKongViews = importAll(require.context("../images/CentralAndWesternDistrict/hotel-images/FourSeasonsHotelHongKong", false, /\.(png|jpe?g|svg)$/));
const JWMarriottHotelViews = importAll(require.context("../images/CentralAndWesternDistrict/hotel-images/J.W.MarriottHotel", false, /\.(png|jpe?g|svg)$/));
const TravelodgeCentralHollywoodRoadViews = importAll(require.context("../images/CentralAndWesternDistrict/hotel-images/TravelodgeCentralHollywoodRoad", false, /\.(png|jpe?g|svg)$/));
const CourtyardbyMarriottHongKongViews = importAll(require.context("../images/CentralAndWesternDistrict/hotel-images/CourtyardbyMarriottHongKong", false, /\.(png|jpe?g|svg)$/));

const GrandHyattHongKongViews = importAll(require.context("../images/WanChai/hotel-images/GrandHyattHongKong", false, /\.(png|jpe?g|svg)$/));
const RegalHongKongHotelViews = importAll(require.context("../images/WanChai/hotel-images/L'hotelCausewayBayHarbourView", false, /\.(png|jpe?g|svg)$/));
const LhotelCausewayBayHarbourViews = importAll(require.context("../images/WanChai/hotel-images/RegalHongKongHotel", false, /\.(png|jpe?g|svg)$/));

const EastHotelViews = importAll(require.context("../images/EastDistrict/hotel-images/EastHotel", false, /\.(png|jpe?g|svg)$/));

const BluejayResidencesViews = importAll(require.context("../images/SouthDistrict/hotel-images/BluejayResidences", false, /\.(png|jpe?g|svg)$/));
const CaritasOswaldCheungInternationalHouseViews = importAll(require.context("../images/SouthDistrict/hotel-images/CaritasOswaldCheungInternationalHouse", false, /\.(png|jpe?g|svg)$/));
const HongKongOceanParkMarriottHotelViews = importAll(require.context("../images/SouthDistrict/hotel-images/HongKongOceanParkMarriottHotel", false, /\.(png|jpe?g|svg)$/));
const LeMéridienCyberportViews = importAll(require.context("../images/SouthDistrict/hotel-images/LeMéridienCyberport", false, /\.(png|jpe?g|svg)$/));
const StanleyOrientalHotelViews = importAll(require.context("../images/SouthDistrict/hotel-images/StanleyOrientalHotel", false, /\.(png|jpe?g|svg)$/));

const CordisHongKongViews = importAll(require.context("../images/YauTsimMongDistrict/hotel-images/CordisHongKong", false, /\.(png|jpe?g|svg)$/));
const DorsettMongkokHongKongViews = importAll(require.context("../images/YauTsimMongDistrict/hotel-images/DorsettMongkokHongKong", false, /\.(png|jpe?g|svg)$/));
const EatonHKViews = importAll(require.context("../images/YauTsimMongDistrict/hotel-images/EatonHK", false, /\.(png|jpe?g|svg)$/));
const KowloonShangrilaHotelViews = importAll(require.context("../images/YauTsimMongDistrict/hotel-images/KowloonShangri-laHotel", false, /\.(png|jpe?g|svg)$/));
const TheCityviewHotelViews = importAll(require.context("../images/YauTsimMongDistrict/hotel-images/TheCity-viewHotel", false, /\.(png|jpe?g|svg)$/));
const ThePeninsulaHongKongViews = importAll(require.context("../images/YauTsimMongDistrict/hotel-images/ThePeninsulaHongKong", false, /\.(png|jpe?g|svg)$/));

const VPHotelViews = importAll(require.context("../images/ShamShuiPo/hotel-images/VPHotel", false, /\.(png|jpe?g|svg)$/));
const YHAMeiHoHouseYouthHostelViews = importAll(require.context("../images/ShamShuiPo/hotel-images/YHAMeiHoHouseYouthHostel", false, /\.(png|jpe?g|svg)$/));

const HarbourGrandKowloonViews = importAll(require.context("../images/KowloonCityDistrict/hotel-images/HarbourGrandKowloon", false, /\.(png|jpe?g|svg)$/));
const HarbourPlaza8DegreesViews = importAll(require.context("../images/KowloonCityDistrict/hotel-images/HarbourPlaza8Degrees", false, /\.(png|jpe?g|svg)$/));
const MetroparkHotelKowloonViews = importAll(require.context("../images/KowloonCityDistrict/hotel-images/MetroparkHotelKowloon", false, /\.(png|jpe?g|svg)$/));
const RegalOrientalHotelViews = importAll(require.context("../images/KowloonCityDistrict/hotel-images/RegalOrientalHotel", false, /\.(png|jpe?g|svg)$/));
const TheTenHotelViews = importAll(require.context("../images/KowloonCityDistrict/hotel-images/TheTenHotel", false, /\.(png|jpe?g|svg)$/));

const PentahotelHongKongKowloonViews = importAll(require.context("../images/WongTaiSin/hotel-images/PentahotelHongKongKowloon", false, /\.(png|jpe?g|svg)$/));

const LhotelelanViews = importAll(require.context("../images/KwunTongDistrict/hotel-images/L'hotelelan", false, /\.(png|jpe?g|svg)$/));

const CourtyardHongKongShaTinViews = importAll(require.context("../images/NT/hotel-images/CourtyardHongKongShaTin", false, /\.(png|jpe?g|svg)$/));
const CrownePlazaHongKongKowloonEastViews = importAll(require.context("../images/NT/hotel-images/CrownePlazaHongKongKowloonEast", false, /\.(png|jpe?g|svg)$/));
const GoldCoastHotelViews = importAll(require.context("../images/NT/hotel-images/GoldCoastHotel", false, /\.(png|jpe?g|svg)$/));
const HarbourPlazaResortCityViews = importAll(require.context("../images/NT/hotel-images/HarbourPlazaResortCity", false, /\.(png|jpe?g|svg)$/));
const LhotelNinaetConventionCentreViews = importAll(require.context("../images/NT/hotel-images/L'hotelNinaetConventionCentre", false, /\.(png|jpe?g|svg)$/));

const HongKongDisneylandHotelViews = importAll(require.context("../images/IslandsDistrict/hotel-images/HongKongDisneylandHotel", false, /\.(png|jpe?g|svg)$/));
const HongKongSkyCityMarriottHotelViews = importAll(require.context("../images/IslandsDistrict/hotel-images/HongKongSkyCityMarriottHotel", false, /\.(png|jpe?g|svg)$/));
const NovotelCitygateHongKongHotelViews = importAll(require.context("../images/IslandsDistrict/hotel-images/NovotelCitygateHongKongHotel", false, /\.(png|jpe?g|svg)$/));
const WarwickHotelCheungChauViews = importAll(require.context("../images/IslandsDistrict/hotel-images/WarwickHotelCheungChau", false, /\.(png|jpe?g|svg)$/));

export const districts = [
  {
    key: "中西區",
    url: centralAndWesternDistrictView1,
    title: "中西區",
    height: 300,
    width: 500,
  },
  {
    key: "東區",
    url: eastDistrictView1,
    title: "東區",
    height: 300,
    width: 500,
  },
  {
    key: "離島區",
    url: islandsDistrictView1,
    title: "離島區",
    height: 300,
    width: 500,
  },
  {
    key: "九龍城區",
    url: kowloonCityDistrictView1,
    title: "九龍城區",
    height: 300,
    width: 500,
  },
  {
    key: "觀塘區",
    url: kwunTongDistrictView1,
    title: "觀塘區",
    height: 300,
    width: 500,
  },
  {
    key: "新界",
    url: nYView1,
    title: "新界",
    height: 300,
    width: 500,
  },
  {
    key: "深水埗區",
    url: shamShuiPoView1,
    title: "深水埗區",
    height: 300,
    width: 500,
  },
  {
    key: "南區",
    url: southDistrictView1,
    title: "南區",
    height: 300,
    width: 500,
  },
  {
    key: "灣仔區",
    url: wanChaiView1,
    title: "灣仔區",
    height: 300,
    width: 500,
  },
  {
    key: "黃大仙區",
    url: wongTaiSinView1,
    title: "黃大仙區",
    height: 300,
    width: 500,
  },
  {
    key: "油尖旺區",
    url: tsimShaTsuiView1,
    title: "油尖旺區",
    height: 300,
    width: 500,
  },
];
export const hotels = [
  {
    images: FourSeasonsHotelHongKongViews,
    titleChi: "香港四季酒店",
    titleEn: "Four Seasons Hotel Hong Kong",
    address: "中環金融街8號",
    intro: [
      "富麗堂皇的香港四季酒店位在香港島上，客房及套房內均設有落地窗可一覽維多利亞港、太平山及九龍全景，並附有免費 WiFi。館內附設 2 家米其林星級餐廳。",
      "所有客房均裝有空調，室內空間寬敞，並擁有融合中西方設計元素的內飾。房內配有 42 吋平面電視、DVD 播放機及 iPod 基座。部分客房則配有 Nespresso 咖啡機或來自巴黎的特製香氛盥洗用品。附設的大理石浴室內配有深浸式浴缸及獨立步入式花灑淋浴間。",
      "飯店距離蘭桂坊及蘇活區均有 15 分鐘步行路程，此區設有多家時髦的餐廳及酒吧。距離中環碼頭有不到 10 分鐘的步行路程，客人可至此搭乘渡輪前往尖沙咀及其他周邊島嶼。客人步行穿越與飯店相連的國際金融中心（IFC）僅需 10 分鐘即可抵達香港地鐵站。",
      "附設的 SPA 中心提供舒緩的按摩療程、蒸汽浴及桑拿浴。客人可於 24 小時開放的健身中心鍛煉身體，或至 24 小時開放的商務中心查看電子郵件。飯店亦提供洗衣及托育服務。",
      "龍景軒（Lung King Heen）供應道地的粵菜，Caprice 餐廳則供應法式美食，並設有開放式廚房。Blue Bar 酒廊每日供應早餐。客人可於晚間至 Caprice 酒吧享用起司搭配葡萄酒帶來的極致味蕾饗宴。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "中西區",
    star: "5",
    lat: 22.286577,
    long: 114.15695,
  },
  {
    images: JWMarriottHotelViews,
    titleChi: "香港JW萬豪酒店",
    titleEn: "J.W. Marriott Hotel",
    address: "中環金融街8號",
    intro: [
      "香港 JW 萬豪飯店坐落在著名的太古廣場大樓頂層，可直達金鐘地鐵站和太古廣場購物中心。除室外游泳池外，客房還提供免費有線和無線網路，大廳提供免費 WiFi。",
      "飯店距離海洋公園站僅有 1 站地鐵車程，僅需 4 分鐘地鐵車程。距離香港會議展覽中心不到 1 公里。距離香港國際機場為 35 分鐘車程。",
      "客房設有大片窗戶，可見香港市、維多利亞港或附近群山的美景。所有客房均配有專門設計的 7 層床墊，以提供客人完美的睡眠品質，亦有各種枕頭供客人選擇，同時配有附免費膠囊的優質咖啡機及高科技的娛樂系統。典雅的大理石衛浴裡設有浴缸和獨立淋浴間，並配有浴袍和盥洗用品。",
      "客人可在室外游泳池放鬆身心，冬天時為溫水游泳池。健康俱樂部設備齊全，提供三溫暖、蒸汽室和按摩服務。",
      "屢獲殊榮的萬豪中餐廳供應道地的粵菜，魚吧餐廳則供應新鮮現撈海鮮。其他用餐選擇包括 Dolce 88 的招牌咖啡和 JW 咖啡室的創意自助餐。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "中西區",
    star: "5",
    lat: 22.277577,
    long: 114.166328,
  },
  {
    images: TravelodgeCentralHollywoodRoadViews,
    titleChi: "中環荷李活道彩鴻酒店",
    titleEn: "Travelodge Central Hollywood Road",
    address: "上環荷李活道263號",
    intro: [
      "中環荷李活道彩鴻酒店位於中環蘇豪區附近的荷里活道上，步行即可到達歷史悠久的文武廟以及蘇豪區的餐飲娛樂場所。飯店提供禁菸客房。為了客人旅途的便利，飯店提供智慧型手機供客人於入住期間使用，除了可隨時隨地上網，還可免費無限撥打本地和國際長途電話電話至 7 個指定國家（澳洲、中國、新加坡、南韓、台灣、英國和美國）。",
      "客房擁有時尚設計，並設有適用智慧型裝置的多媒體基座和液晶電視。私人衛浴內配有吹風機和免費盥洗用品。",
      "飯店提供 24 小時櫃台和外幣兌換服務。親切的工作人員可為客人安排觀光行程。",
      "從香港國際機場搭乘機場快線到香港站需時 10 分鐘。飯店距離港鐵上環站和蘭桂坊步行均不到 7 分鐘，距離港澳碼頭步行 8 分鐘，距離摩羅上街（古董街）步行 5 分鐘，距離元創方步行 8 分鐘。",
    ],
    price: 600 * 3,
    roomKey: true,
    district: "中西區",
    star: "3-4",
    lat: 22.285667,
    long: 114.147919,
  },
  {
    images: CourtyardbyMarriottHongKongViews,
    titleChi: "香港萬怡酒店",
    titleEn: "Courtyard by Marriott Hong Kong",
    address: "西營盤干諾道西66-168號",
    intro: [
      "萬怡酒店位於西區，俯瞰著美麗的維多利亞港。飯店的 24 小時健身中心設有各種心肺喝肌力訓練設施，並設有個人狀況監測系統。所有客房均提供免費 WiFi，公共區域亦提供免費 WiFi。",
      "飯店距離香港大學地鐵站（西港島線）約 6 分鐘步行路程，提供免費班車前往主要港島商業區。附近的景點和地標包括摩天輪、創意和設計中心 PMQ 元創方（前已婚警察宿舍）以及蘇豪區（南荷李活道） 。",
      "飯店的客房設計精巧，入住可享有海港或城市的全景。房內設有平面有線電視、室內安全保險箱和浴袍。",
      "寬敞的海港行政酒廊設有會議室和 WiFi。大廳的互動式屏為客人提供最新的天氣預報和當地新聞。",
      "屢獲殊榮的 MoMo Café 咖啡廳供應各式國際美食。MoMo2 Go 提供飲料和簡餐。客房服務於限定時間供應。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "中西區",
    star: "3-4",
    lat: 22.287995,
    long: 114.139089,
  },
  {
    images: GrandHyattHongKongViews,
    titleChi: "香港君悅酒店",
    titleEn: "Grand Hyatt Hong Kong",
    address: "灣仔港灣道1號",
    intro: [
      "香港君悅酒店與香港會議展覽中心直接相連，距離港鐵灣仔站和天星碼頭步行皆為 5 分鐘。此奢華的飯店設有 50 公尺室外溫水游泳池和 SPA。典雅的客房設有落地窗，可俯瞰維多利亞港。飯店提供全館免費 WiFi。",
      "飯店距離太古廣場、時代廣場、蘭桂坊和蘇豪區皆不到 1 公里。距離香港國際機場 40 分鐘車程。",
      "現代化的客房設有 42 吋平面有線／衛星電視、迷你吧和茶／咖啡沖泡設備。大理石衛浴內配有獨立浴缸，客人可在此放鬆地泡澡。",
      "設備齊全的健康俱樂部設有網球場、壁球場和 24 小時健身房。觀光旅遊櫃台提供行程安排和租車服務。",
      "港灣壹號供應粵菜，Grissini 則供應義大利美食。飯店的其他餐廳供應國際和日本料理。香檳吧提供飲品和夜間現場娛樂表演。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "灣仔區",
    star: "5",
    lat: 22.281437,
    long: 114.172149,
  },
  {
    images: RegalHongKongHotelViews,
    titleChi: "富豪香港酒店",
    titleEn: "Regal HongKong Hotel",
    address: "銅鑼灣怡和街88號",
    intro: [
      "富豪香港酒店位於銅鑼灣，距離港鐵銅鑼灣站 5 分鐘步行路程。這家五星級飯店擁有頂樓游泳池、設備先進的健身房，可欣賞壯觀的城市景色。飯店提供 20 個活動場地，包括一間配備 LED 螢幕牆的大型宴會廳，以及可滿足特定商務需求的會議中心。",
      "富豪香港酒店距離香港會議展覽中心 5 分鐘車程，距離香港赤鱲角國際機場約 28 公里。",
      "飯店內豪華的客房採光良好，設有大型窗戶和典雅的家具。房內設有平面有線電視等娛樂設備。",
      "頂樓游泳池可眺望迷人的海港景緻，池邊的日光浴設施讓您遠離都市生活的喧囂繁忙。觀光旅遊櫃台可為客人安排觀光行程。為了您的方便，飯店提供洗衣服務。",
      "富豪金殿餐廳供應道地的中式美食，風情畫餐廳供應精緻的義式餐點，御花園咖啡室則提供多國料理。其他用餐場所還包括大廳休息室和蛋糕店。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "灣仔區",
    star: "5",
    lat: 22.279162,
    long: 114.186837,
  },
  {
    images: LhotelCausewayBayHarbourViews,
    titleChi: "如心銅鑼灣海景酒店",
    titleEn: "L'hotel Causeway Bay Harbour View",
    address: "天后英皇道18號",
    intro: [
      "L'hotel Causeway Bay Harbour View 飯店距離天后地鐵站僅 3 分鐘步行路程，距離天后廟僅 5 分鐘步行路程，距離維多利亞公園有 10 分鐘步行路程。飯店設有季節性開放之頂樓室外游泳池、桑拿與健身中心。",
      "每間現代化的客房均附有空調、有線／衛星電視、個人保險箱與沏茶／咖啡設備，房內飾以風格典雅的木作家具，浴室內配有浴缸。",
      "客人可享西式與東方美食。",
      "距離時髦的蘭桂坊與知名的星光大道均有 20 分鐘車程，距離香港迪士尼樂園有 50 分鐘車程，距離香港國際機場有 1 小時車程。",
      "館方可安排須額外付費的租車服務，另提供乾洗服務、24 小時接待櫃台與每日客房清潔服務。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "灣仔區",
    star: "3-4",
    lat: 22.283294,
    long: 114.192849,
  },
  {
    images: EastHotelViews,
    titleChi: "東隅",
    titleEn: "East Hotel",
    address: "太古城太古城道29號",
    intro: [
      "東隅酒店位於鰂魚涌，就在太古地鐵站旁邊，裝潢時尚且禁菸。設有 24 小時健身房、免費 WiFi、提倡空氣清淨。客房設有 37 吋平面電視和膠囊咖啡機等設施。",
      "東隅酒店就在太古城中心旁邊。距離香港赤鱲角國際機場 45 分鐘車程。",
      "客房設有空調和玻璃落地窗，可享維多利亞港或天際線無與倫比的美景。此外也設有平面衛星／有線電視。部分客房設有互動式 Apple TV®。附設衛浴包含步入式花灑淋浴間。",
      "客人可在戶外游泳池悠游，或在 Beast 健身房使用健身器材。此外也提供洗衣服務和 24 小時接待櫃台。",
      "Davis Laris 大廚開設的 Feast Café 供應各種西式和亞洲料理。頂樓酒吧 Sugar 則供應各種美味的小吃和雞尾酒，並享城市全景。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "東區",
    star: "3-4",
    lat: 22.283158,
    long: 114.221015,
  },
  {
    images: CaritasOswaldCheungInternationalHouseViews,
    titleChi: "明愛張奧偉國際賓館",
    titleEn: "Caritas Oswald Cheung International House",
    address: "田灣田灣街20號",
    intro: ["···沒有簡介···"],
    price: 600 * 3,
    roomKey: true,
    district: "南區",
    star: "3-4",
    lat: 22.249632,
    long: 114.149657,
  },
  {
    images: HongKongOceanParkMarriottHotelViews,
    titleChi: "香港海洋公園萬豪酒店",
    titleEn: "Hong Kong Ocean Park Marriott Hotel",
    address: "黃竹坑道180號",
    intro: [
      "香港海洋公園萬豪酒店坐落在南港島，緊鄰港鐵海洋公園站，提供度假村風格的住宿，並在溫馨的大廳設有 16 公尺高的水族缸。",
      "飯店距離海洋公園僅幾分鐘路程。住客可搭乘大眾運輸工具輕鬆到達市區和主要景點。",
      "館內 469 間客房和套房結合了現代設計和自然風格裝潢，包括海洋公園主題連通客房，並配有海洋公園的吉祥物。房內亦提供高速網路和寬敞的辦公桌。",
      "香港海洋公園萬豪酒店設有寬敞的無柱宴會廳，可用於舉辦活動。其他休閒設施包括室外礁湖游泳池、SPA 浴缸、兒童游泳池和健身中心。",
      "餐廳提供各種餐飲選擇，供應中式、西式和其他國際料理，享有鬱鬱蔥蔥的花園和礁湖游泳池景觀，並設有戶外用餐區和兒童區。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "南區",
    star: "3-4",
    lat: 22.247711,
    long: 114.175744,
  },
  {
    images: LeMéridienCyberportViews,
    titleChi: "數碼港艾美酒店",
    titleEn: "Le Méridien Cyberport",
    address: "數碼港數碼港道100號",
    intro: [
      "數碼港艾美酒店位於香港南部的海濱都會度假村，四周環繞綠意的薄扶林水塘和太平山，可一覽蔥鬱綠地和鋼綫灣全景。本飯店是度假、住宿或輕鬆差旅的理想選擇，設有室外游泳池、5 間餐廳和酒吧，每小時亦提供前往中環的便利接駁巴士服務。",
      "飯店距離淺水灣泳灘 2 公里，距離港澳碼頭 4 公里。",
      "170 間客房設計時尚簡約，設有落地窗引入充足的自然光，並配有高級設備。客人可使用免費高速網路與外界保持聯繫。",
      "裝潢奢華的會議室自然採光充足，設有多媒體面板、智慧型會議和娛樂空間，適合舉辦客製化會議和各種大小活動。飯店亦設有多功能戶外場地，是舉辦社交聚會、婚禮和創意活動的理想地點。",
      "南坊餐廳供應粵式及飲茶料理，Umami 餐廳供應獨特壽司。其他用餐選擇包括 Podium 酒吧和 Prompt 餐廳供應點心。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "南區",
    star: "5",
    lat: 22.262034,
    long: 114.129411,
  },
  {
    images: StanleyOrientalHotelViews,
    titleChi: "赤柱東方酒店",
    titleEn: "Stanley Oriental Hotel",
    address: "赤柱赤柱大街90B號",
    intro: [
      "赤柱東方酒店位於香港，距離赤柱正灘 350 公尺，享有湖景。住宿提供 24 小時櫃台、禮賓服務及全館免費 WiFi 等設施。館內提供報紙可供住客閱覽；亦設有傳真機和影印機可供住客使用。",
      "館內客房均設有空調、休息區、平面衛星電視、廚房和用餐區，私人衛浴附吹風機、淋浴設施和免費盥洗用品。赤柱東方酒店的所有客房均設有書桌和共用衛浴。",
      "住客可在香港及附近地區享受健行、滑雪和浮潛等活動的樂趣。",
      "附近的熱門景點包括聖士提反灣泳灘、舂坎角海灘與赤柱市集。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "南區",
    star: "3-4",
    lat: 22.218791,
    long: 114.211194,
  },
  {
    images: BluejayResidencesViews,
    titleChi: "冠藍軒",
    titleEn: "Bluejay Residences",
    address: "鴨脷洲鴨脷洲大街95號",
    intro: ["冠藍軒距離佔地超過 870,000 平方公尺的海洋生物主題公園—海洋公園 6 分鐘車程。飯店設有 24 小時櫃台和免費 WiFi。", "客房設有空調、電視、迷你吧和冰箱。私人衛浴內配有淋浴。", "飯店距離太平山頂 20 分鐘車程，距離香港國際機場 40 分鐘車程。"],
    price: 600 * 3,
    roomKey: true,
    district: "南區",
    star: "3-4",
    lat: 22.32478,
    long: 114.178729,
  },
  {
    images: ThePeninsulaHongKongViews,
    titleChi: "半島酒店",
    titleEn: "The Peninsula Hong Kong",
    address: "尖沙咀梳士巴利道22號",
    intro: [
      "香港半島酒店於 1928 年開幕，位於尖沙咀維多利亞港邊，提供 5 星級服務和雋永璀璨的舊年代魅力。這間豪華飯店設有羅馬風格室內游泳池、佔地廣達 1115 平方公尺（12000 平方英尺）的 SPA 以及 8 間屢獲殊榮的餐廳和酒吧。",
      "客房融合了東方優雅與現代奢華，可俯瞰飯店庭院、維多利亞港或九龍景觀。大理石浴室內配有 SPA 浴缸。客房設有藍光播放器、可收看免費高畫質電影的 LED 旋轉電視、免費 WiFi、床邊互動式數位控制面板、牆上 LED 觸控式控制台以及無線 VOIP 網路電話（免費長途電話）。",
      "香港半島酒店距離尖沙咀渡輪碼頭步行 5 分鐘。從機場前往飯店的客人可搭乘飯店的勞斯萊斯豪華轎車、MINI Cooper S Clubman 或私人直升機。",
      "客人可在半島水療中心享受全身按摩，或浸泡在熱水浴缸中放鬆抒壓。館內還設有購物商場和設備齊全的多功能廳。客人也可在健身中心鍛煉身體，或在商務中心享受專業服務。",
      "位於頂樓的 Felix 餐廳供應現代歐洲美饌。大堂茶座提供英式下午茶。其他用餐選項還包括法式、中式、瑞士和日式料理。半島酒吧供應各式雞尾酒和飲品。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "油尖旺區",
    star: "5",
    lat: 22.295182,
    long: 114.171897,
  },
  {
    images: KowloonShangrilaHotelViews,
    titleChi: "九龍香格里拉大酒店",
    titleEn: "Kowloon Shangri-la Hotel",
    address: "尖東麼地道64號",
    intro: [
      "九龍香格里拉大酒店位於熱鬧的尖沙咀，距離港鐵尖東站僅咫尺之遙，俯瞰維多利亞港，裝潢豪華，設有室內游泳池和 7 間餐飲場所，客房配備免費有線網路，且全館提供免費 WiFi。",
      "飯店距離香港國際機場約 35 分鐘車程，距離啟德郵輪碼頭約 20 分鐘車程，距離天星碼頭、海運大廈、香港藝術館和香港太空館步行均約 15 分鐘，距離香港迪士尼樂園約 23 公里。",
      "客房空間寬敞、裝潢典雅，設有落地窗，享有市區或海港的美景，且均配備衛星電視、大型辦公桌和茶／咖啡沖泡設備。",
      "館內健體中心設有 24 小時健身中心和游泳池，並提供按摩服務。館內其他設施包括設備齊全的商務中心。",
      "館內設有 7 間高級主題餐廳，包括獲得米其林星級美譽的香宮中餐廳。住客還可於 Tapas Bar 酒吧品嚐葡萄酒，或在大廳酒廊享用清涼的雞尾酒。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "油尖旺區",
    star: "5",
    lat: 22.297157,
    long: 114.177084,
  },
  {
    images: EatonHKViews,
    titleChi: "逸東酒店",
    titleEn: "Eaton HK",
    address: "佐敦彌敦道380號",
    intro: [
      "香港逸東酒店距離港鐵佐敦站步行僅 5 分鐘，提供全館免費 WiFi。住客可參加各式各樣的文化節目和在地市場小旅行。館內設有全年無休的 24 小時櫃台以及開放式辦公空間 Eaton House（額外收費）。",
      "現代化客房享有九龍城區全景，並配有經典的深色木家具、有線電視頻道和沏茶、咖啡沖泡用具。每層樓都有製冰機。",
      "飯店距離熱門的廟街僅 200 公尺，距離香港國際機場 45 分鐘車程。",
      "館內提供各種用餐選擇。米其林星級粵菜餐廳逸東軒供應中式美食和港式飲茶。您也可在花樣年華放鬆地享用清涼飲品。其他餐廳還有普慶餐廳和逸東美食廣場。",
      "Terrible Baby 是飯店的第 2 家酒吧，洋溢著輕鬆的藝術和音樂氛圍，提供創新的永續概念雞尾酒。酒吧設有獨立公共出入口與特別設計的現場音樂場地，還可通往寬敞的露台，可眺望佐敦地區景觀。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "油尖旺區",
    star: "3-4",
    lat: 22.308049,
    long: 114.171816,
  },
  {
    images: DorsettMongkokHongKongViews,
    titleChi: "香港旺角帝盛酒店",
    titleEn: "Dorsett Mongkok Hong Kong",
    address: "大角咀大角咀道88號",
    intro: [
      "屢獲殊榮的香港旺角帝盛酒店是家 4 星級飯店，距離港鐵奧運站步行僅 7 分鐘。飯店距離女人街、廟街、尖沙咀鐘樓、朗豪坊、星光大道、尖沙咀海濱花園和海港城等熱門旅遊景點皆為 10～15 分鐘車程。",
      "飯店設有 24 小時健身中心和 24 小時櫃台。此外也提供全館免費 WiFi。",
      "客房設有空調和鏡面牆。每間客房均設有免費高速 WiFi，可供高達 10 台裝置連線。客房還提供免費智慧型手機供客人使用，搭載無限 4G 上網和 WiFi 熱點功能，更可免費撥打本地電話及國際長途電話至 8 個指定國家（中國大陸、美國、加拿大、新加坡、韓國、英國、澳洲和泰國）。該智慧型手機在飯店內外皆可使用。客房配有儲備豐富的迷你吧、私人保險箱和沏茶、咖啡沖泡用具。",
      "觀光旅遊櫃台可為住客安排香港一日遊行程。飯店提供洗衣服務和外幣兌換服務。飯店也提供 24 小時健身房等其他設施。",
      "壹壹漁一融合料理餐廳於晚餐時段供應特色火鍋，每日早餐和午餐時段則供應自助式餐點。想要在客房內用餐的住客也可使用客房服務。每星期五舉辦夜間帝盛葡萄酒時光，而每天晚上都有帝盛甜點吧活動。為提供更舒適的住宿體驗，飯店每日供應花草茶。每間客房均配有洗手液。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "油尖旺區",
    star: "3-4",
    lat: 22.321283,
    long: 114.162146,
  },
  {
    images: TheCityviewHotelViews,
    titleChi: "城景國際",
    titleEn: "The City-view Hotel",
    address: "油麻地窩打老道23號",
    intro: [
      "城景國際為 4 星級飯店，毗鄰位於九龍中央的彌敦道，距離油麻地站僅為 1 分鐘的步行路程，飯店為「地球評測」（EarthCheck）評為生態友好飯店，館內設有 1 個健身中心和 3 個餐飲場所。",
      "時尚的客房配有空調、大窗戶、平面電視、迷你吧和沏茶／泡咖啡用具。個人衛浴備有淋浴和免費盥洗用品。",
      "從飯店步行至受歡迎的女人街、水果批發市場、戲曲中心僅需 5 分鐘即可抵達。飯店距離香港國際機場則是 45 分鐘的開車車程。",
      "樂雅軒供應粵菜，城景閣則供應國際自助料理。AMAZING 餐廳供應流行的正宗泰式美食，包括道地的泰式菜餚、各式燒烤、咖哩及油炸料理。",
      "觀光旅遊櫃檯可協助客人安排 1 日遊，而館內商務中心可供客人查看電子郵件。飯店也提供洗衣服務和 24 小時開放的櫃檯。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "油尖旺區",
    star: "3-4",
    lat: 22.313752,
    long: 114.171665,
  },
  {
    images: CordisHongKongViews,
    titleChi: "香港康得思酒店",
    titleEn: "Cordis, Hong Kong",
    address: "旺角上海街555號",
    intro: [
      "五星級的香港康得思酒店矗立於繁華的九龍中心地段，與港鐵旺角站和朗豪坊購物中心相連。飯店擁有全香港最頂級的會議和活動設施，包括九龍最高的宴會廳星願亭，以及可容納 600 人的宴會廳，廳內設有 7 公尺 x 4 公尺的大型 LED 螢幕牆。",
      "所有客房和套房均配有高速 WiFi 和 LED 電視；豪華的大理石衛浴配有獨立浴缸和花灑淋浴。",
      "飯店距離香港國際機場須 45 分鐘車程，距離女人街、廟街夜市和花墟均不到 1 公里。",
      "館內的健康養生設施包括 1 間設備全面的健身中心、2 間健身室、1 座室外溫水游泳池以及提供超過 60 種獨特療程的川水療中心。飯店設有各式餐廳，包括當代粵菜餐廳明閣、時尚歐式餐廳酒吧 Alibi - 酒吧 餐廳 聚薈、全新室外餐車酒吧 The Garage Bar 以及全天供餐的 The Place 自助餐廳。",
      "若客人希望更升級入住體驗，可前往寬敞舒適的貴賓會，享受多種尊貴禮遇和服務。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "油尖旺區",
    star: "5",
    lat: 22.318205,
    long: 114.168133,
  },
  {
    images: VPHotelViews,
    titleChi: "雲浦酒店",
    titleEn: "VP Hotel",
    address: "深水埗荔枝角道149號",
    intro: ["··沒有簡介··"],
    price: 600 * 2,
    roomKey: true,
    district: "深水埗區",
    star: "1-2",
    lat: 22.325569,
    long: 114.164081,
  },
  {
    images: YHAMeiHoHouseYouthHostelViews,
    titleChi: "YHA美荷樓青年旅舍",
    titleEn: "YHA Mei Ho House Youth Hostel ",
    address: "石硤尾石硤尾邨美荷樓",
    intro: [
      "YHA Mei Ho House 提供舒適、具現代化風格的客房。設有雙床房、雙人房、家庭房和宿舍房。此旅館位於深水埗，交通便利。接待櫃檯為 24 小時開放，全館提供免費 ＷiFi 。",
      "YHA Mei Ho House 距離地鐵深水埗站步行 5 分鐘；距離香港國際機場 35 分鐘車程。距離蘭桂坊 6 公里；距離淺水灣 11.3 公里。",
      "客房均設有空調，獨立衛浴內附淋浴設施。部分客房配有電熱水壺、電視和吹風機。宿舍房則配有置物櫃和電源插座。",
      "住客可於 The Hub 、休閒娛樂區或設有懶骨頭沙發的戶外露台放鬆身心。館內廚房可供自炊，另提供自助式洗衣設施。",
      "1 樓咖啡廳每日供應早餐，設有露天後院。亦有復古風格的小店可供您購物。",
    ],
    price: 600 * 3,
    roomKey: true,
    district: "深水埗區",
    star: "3-4",
    lat: 22.334072,
    long: 114.163689,
  },
  {
    images: HarbourGrandKowloonViews,
    titleChi: "九龍海逸君綽酒店",
    titleEn: "Harbour Grand Kowloon",
    address: "紅磡德豐街20號",
    intro: [
      "九龍海逸君綽酒店享有維多利亞港無與倫比的美景，位於九龍海濱，交通便利，距離黃埔地鐵站 D2 出口僅幾步之遙。搭乘免費接駁車前往尖沙咀約需 8 分鐘，且鄰近可前往北角的碼頭。飯店提供寬敞的客房，房內均設有免費 WiFi。",
      "所有客房均配有衛星電視、私人保險箱和迷你吧。私人衛浴配有免費盥洗用品、拖鞋和吹風機。",
      "飯店附設具有玻璃邊框的頂樓游泳池、舒緩的 SPA、美容服務，以及配備最先進健身器材的 24 小時頂樓健身中心。飯店擁有雄偉的大廳和大理石階梯，可從兩層樓高的窗戶觀賞碼頭全景。",
      "飯店設有 6 間餐廳，提供各種餐飲選擇，包括經過認證的清真食品（需提前預訂）。海港俱樂部樓層供應早餐、下午餐和晚間點心。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "九龍城區",
    star: "5",
    lat: 22.302747,
    long: 114.192342,
  },
  {
    images: HarbourPlaza8DegreesViews,
    titleChi: "8度海逸酒店",
    titleEn: "Harbour Plaza 8 Degrees",
    address: "土瓜灣九龍城道199號",
    intro: [
      "8 度海逸飯店鄰近啓德郵輪碼頭和旺角地區，提供現代化客房。免費接駁車停靠地鐵黃埔站、地鐵紅磡站以及尖沙咀區。",
      "飯店的客房享有市景。每間客房均設有 32 英寸平面電視、迷你吧和沏茶／咖啡設備。部分客房設有附浴缸和淋浴設施的浴室。",
      "該飯店設有設備齊全的健身中心，提供各種服務的商務中心、紓壓的桑拿浴室和形狀獨特的室外游泳池。商務中心提供影印、列印和快遞等全方位服務。飯店提供貨幣兌換、租車和禮賓服務。",
      "8 度餐廳供應國際與其他風味美食，例如亞洲、清真和印度佳餚，並提供自選及自助菜式。住客可在花園茶座享用輕食，欣賞花園及瀑布的景色，令人放鬆身心；亦可以在池畔廊享用點心。",
      "飯店距離九龍城碼頭僅幾步之遙，距離旺角購物區和 MegaBox 購物中心有 10 分鐘的車程，距離香港國際機場有 45 分鐘車程。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "九龍城區",
    star: "3-4",
    lat: 22.322972,
    long: 114.190689,
  },
  {
    images: RegalOrientalHotelViews,
    titleChi: "富豪東方酒店",
    titleEn: "Regal Oriental Hotel",
    address: "九龍城沙浦道30-38號",
    intro: [
      "四星級富豪東方酒店坐擁九龍東和維多利亞港的美景，設有 5 間餐廳，並提供 24 小時客房服務。全館均提供免費 WiFi。飯店位於香港歷史悠久的九龍城中心，距離九龍寨城公園僅 600 公尺，距離黃大仙祠則有 1.5 公里。",
      "寬敞而現代化客房均設有空調、雙層玻璃窗、平面電視和私人保險箱。私人衛浴附有浴缸和吹風機。",
      "富豪東方酒店距離旺角女人街 15 分鐘車程，距離星光大道不到 5 公里。飯店的接駁車可載客前往機場快線九龍站和港鐵紅磡站，需額外收費。大廳外另提供前往旺角的小型巴士服務。",
      "位於 3 樓的健身中心設備齊全，提供重訓器材、跑步機和有氧運動設備。飯店也設有商務中心和完整宴會設施。亦提供自助式洗衣設施，需額外收費。",
      "儷廊咖啡室供應亞洲和西方美食，包括令人驚豔的香港特色佳餚。華岸酒吧餐廳專門提供各式漢堡及大份量的經典美式餐點。富豪坊中餐廳以粵菜聞名，富豪餅店供應各式自製蛋糕、糕點、沙拉、三明治和麵包。意廊則供應各式道地的義大利料理。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "九龍城區",
    star: "3-4",
    lat: 22.329957,
    long: 114.193047,
  },
  {
    images: MetroparkHotelKowloonViews,
    titleChi: "香港九龍維景酒店",
    titleEn: "Metropark Hotel Kowloon",
    address: "何文田窩打老道75號",
    intro: [
      "九龍維景酒店是 4 星級飯店，提供完善的設施，屋頂游泳池可飽覽城市美景、免費市區接駁服務和菜色豐富的自助餐。飯店位置交通便利，步行約 10 分鐘即可抵達著名的油麻地站及旺角站。",
      "此飯店距離旺角東站步行約 8 分鐘，距離女人街步行約 10 分鐘。此飯店位於市中心，住客可輕鬆前往附近旅遊景點，如朗豪坊，且步行約 15 分鐘處就有一棟 15 層樓高的購物中心。館內提供往返朗豪坊的免費接駁服務。",
      "客房均設有空調、有線電視、保險箱和冰箱，並提供吹風機、茶／咖啡沖泡用具、免費 WiFi，以及每日免費瓶裝水。所有客房均附一支手機，提供網路吃到飽，可免費撥打當地電話和部分國家／地區的國際電話。",
      "館內提供設備齊全的健身中心，住客也可以在觀光旅遊櫃台預訂觀光活動及使用租車服務。",
      "唐宮中餐廳由得獎名廚掌廚，供應精心準備的中式料理。棕櫚閣供應國際自助餐，適式吧則有各式啤酒任君挑選。館內也附設麵包店。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "九龍城區",
    star: "3-4",
    lat: 22.319522,
    long: 114.175863,
  },
  {
    images: TheTenHotelViews,
    titleChi: "陶庭酒店",
    titleEn: "The Ten Hotel",
    address: "九龍塘羅福道10號",
    intro: ["··沒有簡介··"],
    price: 600 * 3,
    roomKey: true,
    district: "九龍城區",
    star: "3-4",
    lat: 22.33512,
    long: 114.176971,
  },
  {
    images: PentahotelHongKongKowloonViews,
    titleChi: "香港九龍貝爾特酒店",
    titleEn: "Pentahotel Hong Kong, Kowloon",
    address: "新蒲崗六合街19號",
    intro: [
      "香港九龍貝爾特酒店為九龍東著名啟德地段首家國際級品牌酒店，專為富個性的旅客及追求數碼化生活一族提供高科技及舒適親切的住宿服務。",
      "酒店設計型格時尚，加入富玩味色彩的香港文化元素，讓您體驗貝爾特風格。貝爾特酒廊糅合酒店大堂、接待處、酒吧與咖啡廳功能於一身，為旅客及本地顧客提供舒適的聚會場所。大夥兒可於提供230個座位的潮食街品嘗地道美食及精選佳餚美酒﹔酒店房客與本地顧客可相約於遊戲室內專享美式桌球及足球機等耍樂設施、於互聯網區盡情上網，又或是於貝爾特樂趣音樂區瀏覽流行曲清單。",
      "香港九龍貝爾特酒店提供695間集趣味與功能、舒適與創意，以及時尚與簡約於一身的客房。房間面積由22平方米至44平方米不等，舒適簡潔的客房設備為您帶來優質的睡眠。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "黃大仙區",
    star: "3-4",
    lat: 22.337345,
    long: 114.199633,
  },
  {
    images: LhotelelanViews,
    titleChi: "如心艾朗酒店",
    titleEn: "L'hotel elan",
    address: "觀塘創業街38號",
    intro: [
      "如心艾朗酒店距離牛頭角港鐵站步行僅需 5 分鐘，提供配備最新科技的豪華住宿。所有客房和套房均設有 iPad 和平面有線電視。飯店於 35 樓設有 24 小時健身房、季節性屋頂游泳池和戶外露台。全館提供免費 WiFi。",
      "客房舖有木質地板，設有 DVD 播放機、無線電話和私人衛浴，並備有免費盥洗用品。房內另設有 iPod／iPad 基座，並提供枕頭目錄和免費迷你吧飲品。",
      "健身房配備有氧和重訓器材，並可一覽市區美景。跑步機可搭配 iPod 和 iPhone 使用。另可提供專人指導。",
      "如心艾朗酒店距離 apm 購物商場步行約 5 分鐘，搭乘計程車前往 MegaBox 購物中心約需 5 分鐘，搭乘地鐵前往位於尖沙咀的中國客運碼頭僅需 25 分鐘，搭乘大眾運輸前往香港國際機場約需 1 小時。",
      "forte 餐廳提供義大利和亞洲特色美食，供應新鮮海鮮和自製義大利麵，並設有牡蠣吧和壽司櫃檯。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "觀塘區",
    star: "3-4",
    lat: 22.314187,
    long: 114.21908,
  },
  {
    images: CrownePlazaHongKongKowloonEastViews,
    titleChi: "香港九龍東皇冠假日酒店",
    titleEn: "Crowne Plaza Hong Kong Kowloon East",
    address: "將軍澳唐德街3號",
    intro: [
      "香港九龍東皇冠假日酒店位於將軍澳地鐵站和 PopCorn 購物中心之上。飯店設有可俯瞰市景的豪華時尚客房，提供 4 間餐飲場所，包括 1 間屋頂餐廳。",
      "館內客房配有空調、附音響系統的平面有線電視、迷你吧和保險箱，並配有熨燙設備、私人衛浴、免費盥洗用品和浴缸。",
      "客人可以在游泳池玩樂、在健身房鍛煉身體或在 SPA 養身會館放鬆身心。館內設有會議設施和商務中心，亦可應要求提供洗衣、乾洗和行李寄存服務。",
      "尚廚餐廳提供國際自助餐以及東西方單點菜餚。梓悅軒中餐廳則提供供應粵式點心和傳統中式美食。星幕牛排館位於飯店頂樓，設有 1 間酒吧和 1 個戶外休憩區，替住客提供美味佳餚。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "新界",
    star: "5",
    lat: 22.308554,
    long: 114.26013,
  },
  {
    images: CourtyardHongKongShaTinViews,
    titleChi: "香港沙田萬怡酒店",
    titleEn: "Courtyard Hong Kong Sha Tin",
    address: "沙田石門安平街1號",
    intro: [
      "香港沙田萬怡酒店直通新城市廣場，提供往返沙田地鐵站的免費接駁服務。客房和公共區域均提供免費 WiFi，設有寬敞的室外游泳池和 3 個餐飲場所。",
      "飯店鄰近 A41P 機場巴士站，距離車公廟和香港文化博物館為 10 分鐘的開車車程，距離香港國際機場 38 公里。",
      "客房佈置典雅，並配有空調、休息區、平面有線電視和 iPod 基座。衛浴鋪有大理石地板，空間寬敞，並配有頂噴式淋浴和柔軟的浴袍。",
      "客人可在健身中心運動。24 小時接待櫃台可提供行李寄存、洗衣／熨燙服務和客房服務。館內提供接駁服務，並設有付費商務中心。",
      "MoMoCafé 和大廳酒廊餐廳供應各式多國料理、中式料理和歐陸美食。位於頂樓的 LEVELthirty Lounge＆Bar 可一覽海港和山脈景緻。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "新界",
    star: "3-4",
    lat: 22.390698,
    long: 114.20643,
  },
  {
    images: LhotelNinaetConventionCentreViews,
    titleChi: "如心海景酒店暨會議中心",
    titleEn: "L'hotel Nina et Convention Centre",
    address: "荃灣楊屋道8號如心廣場",
    intro: [
      "豪華的香港如心海景酒店暨會議中心矗立在荃灣區，提供現代化的住宿空間，客房分佈在 2 座以玻璃天橋相連的塔樓內。館內設有季節性開放的室外游泳池、室內溫水游泳池及健身房。",
      "客房均裝有空調，房內設有大型玻璃窗可俯瞰城市或維多利亞港，亦配有 32 吋平面電視、私人保險箱及迷你吧。透明的玻璃浴室內配有浴缸及免費盥洗用品。",
      "飯店距離荃灣公園僅 2 分鐘步行路程，距離如心廣場有 3 分鐘步行路程。距離萬景峰－荃新天地則有 5 分鐘步行路程。距離香港國際機場有 30 分鐘車程。",
      "位在 10 樓的商務中心提供電腦作業區、列表機及秘書服務。飯店亦提供前往尖沙咀的固定班次接駁服務，且須額外付費。",
      "Café Circles 咖啡廳供應多國自助式餐點，客人可於休閒且時尚的環境中用餐。如粵滬中餐廳則供應粵菜及上海菜。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "新界",
    star: "5",
    lat: 22.368819,
    long: 114.112688,
  },
  {
    images: GoldCoastHotelViews,
    titleChi: "黃金海岸酒店",
    titleEn: "Gold Coast Hotel",
    address: "屯門青山公路青山灣段1號",
    intro: [
      "香港黃金海岸酒店距離機場僅約 35 分鐘計程車車程，為客人提供遠離都市喧囂的放鬆去處。飯店提供定期往返此海濱飯店和九龍尖沙咀市中心的接駁巴士。",
      "飯店距離中環約 30 分鐘車程，距離尖沙咀約 25 分鐘車程。",
      "飯店提供寬敞的客房，房內均附空調，並可俯瞰南海。每間客房均提供平面有線／衛星電視、迷你吧和免費瓶裝水。時尚的大理石衛浴配有浴缸。",
      "飯店設有室外游泳池、水上樂園、兒童遊戲區、戲沙池、健身中心和汽車充電站。飯店設有歐式婚禮花園，也可以協助安排團隊建立活動。",
      "聆渢咖啡廳供應美味的燒烤海鮮和自助餐。沙嗲軒提供來自新加坡和馬來西亞的東南亞風味餐。其他用餐場所包括粵中菜廳和大堂酒吧。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "新界",
    star: "5",
    lat: 22.371817,
    long: 113.989467,
  },
  {
    images: HarbourPlazaResortCityViews,
    titleChi: "嘉湖海逸酒店",
    titleEn: "Harbour Plaza Resort City",
    address: "天水圍天恩路12、18號",
    intro: [
      "嘉湖海逸酒店位於香港新界，距離港鐵天水圍站 E2 出口銀座站 3 分鐘步行路程。館內享有山景，設有季節性開放的室外游泳池和 3 間餐飲場所，搭乘地鐵可輕鬆抵達 V city 購物中心和屯門市廣場。",
      "嘉湖海逸酒店距離尖沙咀市區 30 分鐘車程，距離香港國際機場 40 分鐘車程，距離元朗舊墟僅 5 分鐘車程。",
      "嘉湖海逸酒店的時尚客房均配有平面電視、保險箱和電熱水壺。私人衛浴提供浴缸和免費盥洗用品。",
      "附設健身中心設備齊全，並設有室內跑道。其他休閒娛樂設施包括網球場、SPA 和桑拿。館內並提供會議／宴會設施和商務中心，可供舉辦活動或臨時處理公事。",
      "紐約紐約酒吧和餐廳以每日國際自助式早餐、週末自助式午餐和國際自助式晚餐而知名。富臨提供舒適的用餐環境，供應海鮮、點心、火鍋和各式粵菜。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "新界",
    star: "3-4",
    lat: 22.458117,
    long: 114.002991,
  },
  {
    images: NovotelCitygateHongKongHotelViews,
    titleChi: "諾富特東薈城酒店",
    titleEn: "Novotel Citygate Hong Kong Hotel",
    address: "東涌文東路51號",
    intro: [
      "香港諾富特東薈城酒店提供寬敞的住宿，距離東涌站和昂坪 360 僅幾步之遙。此飯店為 4 星級飯店，提供前往香港國際機場的免費接駁車服務。",
      "客人可輕鬆前往當地的景點，如天壇大佛、亞洲國際博覽館、香港迪士尼樂園、國泰城。距離東薈城名品倉約 300 公尺。",
      "客房均裝飾典雅，並配有平面有線電視。房內可享大海或游池景色。亦備有吹風機、熨燙設施和浴袍。",
      "館內設有設備齊全的 24 小時健身房、室外游泳池和公共澡堂。客人也可在游泳池旁的躺椅上放鬆身心。館內另設有美麗的花園。",
      "Essence 餐廳供應豐盛的多國自助餐，Olea 餐廳供應地中海料理。大廳酒吧不僅舉辦現場娛樂表演，也放映體育賽事。",
    ],
    price: 600 * 4,
    roomKey: true,
    district: "離島區",
    star: "3-4",
    lat: 22.291186,
    long: 113.942377,
  },
  {
    images: HongKongDisneylandHotelViews,
    titleChi: "香港迪士尼樂園酒店",
    titleEn: "Hong Kong Disneyland Hotel",
    address: "大嶼山香港迪士尼樂園度假區",
    intro: [
      "迪士尼樂園飯店南海沿岸，融合海濱度假村的復古風格和迪士尼魔法般的魅力。豪華的住宿擁有現代化設施、2 座主題游泳池和米奇迷宮。客人有機會在飯店與最喜愛的迪士尼角色見面。",
      "由飯店步行 10 分鐘即可抵達香港迪士尼樂園正門，住宿提供免費接駁服務。住宿距離 MTR 迪士尼站需步行 14 分鐘，距離香港國際機場 30 分鐘地鐵車程或 20 分鐘的計程車車程。",
      "飯店擁有 400 間客房，客房包含標準房、豪華房、海景客房、海景客房－附陽台和王國俱樂部（行政樓層）客房。寬敞的客房備有經典的維多利亞風格木製傢俱、空調、平面電視和冰箱。大部分的客房最多可接待 4 人入住，設有 2 張雙人床。每間客房均設有私人衛浴，衛浴備有淋浴設施和浴缸。住宿供客人選購額外的主題客房佈置方案，為全家提供驚喜的住宿體驗。",
      "住宿設有宏偉的 6 層樓大廳，大廳提供迪士尼音樂現場表演，客人也可使用設備齊全的健身中心、室內溫水游泳池和室外游泳池，室外游泳池設有滑水道，供客人在度假時也能維持健康體態。住宿設有戶外兒童遊樂場和主題童話天地，童話天地為兒童提供各種迪士尼主題活動，需額外付費。飯店的主要大廳供客人選購各式商品。",
      "高級的晶荷軒中式餐廳提供獲獎佳餚及可愛的迪士尼點心，翠樂庭自助式餐廳隨時有迪士尼人物出現陪同用餐。華特餐廳供應豐盛的國際美食。季節性開放的池畔海風吧有迷人的海景，提供歐式輕食餐點或各式特色雞尾酒。",
      "所有客房、飯店的公共區域和主題樂園內均提供免費無線網路。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "離島區",
    star: "5",
    lat: 22.308393,
    long: 114.04397,
  },
  {
    images: HongKongSkyCityMarriottHotelViews,
    titleChi: "香港天際萬豪酒店",
    titleEn: "Hong Kong SkyCity Marriott Hotel",
    address: "赤鱲角航天城東路1號",
    intro: [
      "香港天際萬豪酒店位於中國南海沿岸，提供寬敞的客房，可直接通往亞洲國際博覽館。其他設施包括屢獲殊榮的 SPA 中心，以及設備齊全 24 小時開放的健身中心。",
      "香港天際萬豪酒店毗鄰香港國際機場，靠近香港迪士尼樂園、昂坪 360 和天壇大佛等觀光景點。飯店提供前往機場、地鐵東涌站和香港迪士尼樂園的免費接駁服務。從飯店可直接搭乘機場快線前往中央商務區，車程需 28 分鐘。",
      "舒適的客房附設超大窗戶，可眺望大海或機場，亦設有平面電視和寬敞的辦公區。為提供舒適的住宿體驗，房內設有沙發，並備有浴袍和拖鞋。",
      "住客可使用桑拿浴室、蒸汽浴室和按摩浴缸，亦可在室內游泳池度過悠閒時光。工作人員提供禮賓服務和商務服務，讓您賓至如歸。",
      "飯店設有 5 間餐廳，供應中式、西式和異國料理，特色餐飲包括 SkyCity Bistro 餐廳內豐盛的國際自助餐，以及 Velocity Bar＆Grill 酒吧的晚間啤酒。",
    ],
    price: 600 * 5,
    roomKey: true,
    district: "離島區",
    star: "5",
    lat: 22.319127,
    long: 113.943715,
  },
  {
    images: WarwickHotelCheungChauViews,
    titleChi: "長洲華威酒店",
    titleEn: "Warwick Hotel Cheung Chau",
    address: "長洲東灣第1147號地段",
    intro: [
      "長洲華威酒店提供海景客房，距離東灣的白沙灘僅 1 分鐘步行路程，距離長洲渡輪碼頭 5 分鐘步行路程。館內設有 2 處餐飲場所和季節性開放的室外游泳池。",
      "館內的海景粵菜廳供應粵式點心和精選經典粵菜。露臺咖啡廳則提供三明治、點心和各式飲品，並可欣賞海景。",
      "客房設有落地窗、私人衛浴、電視、冰箱和私人保險箱。部分客房設有私人陽台。",
      "飯店提供燒烤區、卡拉 OK 設施和遊戲室，亦設有會議室和觀光旅遊櫃台。",
      "客人如欲從飯店前往香港國際機場，需先乘坐 30 分鐘高速渡輪前往中環碼頭，再轉乘機場快線，需 30 分鐘車程。中環碼頭距離港鐵香港站和國際金融中心商場 5 分鐘步行路程。",
    ],
    price: 600 * 3,
    roomKey: true,
    district: "離島區",
    star: "3-4",
    lat: 22.207763,
    long: 114.032224,
  },
];
