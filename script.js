var topic = {};

var answer = [];
//題目
topic.list = [
    {
        num: "| 第ㄧ題 ｜",
        issue: "兩岸政策",
        ans1: "主張一中各表的「九二共識」",
        ans2: "拒絕一國兩制，「中華民國台灣」是社會最大共識",
        ans3: "宋楚瑜的政見",
        res1: "0",
        res2: "1",
        res3: "2"
    },
    {
        num: "| 第二題 ｜",
        issue: "外交政策",
        ans1: "發展「裡子外交」三部曲，用經貿讓人民過好日子",
        ans2: "跟國際共享普世價值，在相同價值之下結交更多朋友",
        ans3: "宋楚瑜的政見",
        res1: "3",
        res2: "4",
        res3: "5"
    },
    {
        num: "| 第三題 ｜",
        issue: "觀光政策",
        ans1: "觀光局升級為「觀光部」，5個主張拚2028年來台旅客破2千萬人",
        ans2: "觀光局升格為「觀光署」，制定白皮書和召開全國觀光會議，拚2030年來台旅客破2千萬人",
        ans3: "宋楚瑜的政見",
        res1: "6",
        res2: "7",
        res3: "8"
    },
    {
        num: "| 第四題 ｜",
        issue: "能源政策",
        ans1: "在「安全無虞」和「人民同意」的前提下，讓核四電廠完工運轉",
        ans2: "能源轉型（2025年離岸風電完工）、非核家園",
        ans3: "宋楚瑜的政見",
        res1: "9",
        res2: "10",
        res3: "11"
    },
    {
        num: "| 第五題 ｜",
        issue: "經濟政策",
        ans1: "發大財",
        ans2: "打造有利的投資環境，與南亞和東南亞市場建立更強勁的經貿連結",
        ans3: "宋楚瑜的政見",
        res1: "12",
        res2: "13",
        res3: "14"
    },
    {
        num: "| 第六題 ｜",
        issue: "國防政策",
        ans1: "發大財",
        ans2: "「國防自主！自己的領空自己顧」 推動國機國造政策",
        ans3: "宋楚瑜的政見",
        res1: "15",
        res2: "16",
        res3: "17"
    },
    {
        num: "| 第七題 ｜",
        issue: "社會福利政策",
        ans1: "解決青年貧窮感之撐腰三策，包括第一桶金、老青共居、留才補助",
        ans2: "辣台妹的政見",
        ans3: "宋楚瑜的政見",
        res1: "18",
        res2: "19",
        res3: "20"
    },
    {
        num: "| 第八題 ｜",
        issue: "體育政策",
        ans1: "優秀選手出得去，國際賽事進得來，運動產業發大財",
        ans2: "辣台妹的政見",
        ans3: "宋楚瑜的政見",
        res1: "21",
        res2: "22",
        res3: "23"
    },
    {
        num: "| 第九題 ｜",
        issue: "勞動政策",
        ans1: "「一例一休」無法符合多元勞動狀態需求，當選後會廢除",
        ans2: "辣台妹的政見",
        ans3: "宋楚瑜的政見",
        res1: "24",
        res2: "25",
        res3: "26"
    },
    {
        num: "| 第十題 ｜",
        issue: "未決定",
        ans1: "發大財",
        ans2: "辣台妹的政見",
        ans3: "宋楚瑜的政見",
        res1: "27",
        res2: "28",
        res3: "29"
    }

];

//結果
topic.result = [
    {
        path: "https://i.imgur.com/HS9CTJa.png",
        name: "韓國瑜",
        slogan: "兩岸關係你儂我儂，而誰不喜歡愛情呢？",
        ps: "你韓粉？"
    },
    {
        path: "https://i.imgur.com/gBUWPmJ.png",
        name: "蔡英文",
        slogan: "當年反對我們的人，現在都享受改革的成果。",
        ps: "繼續支持辣台妹！"
    },
    {
        path: "",
        name: "宋楚瑜",
        slogan: "你好我金平啦。",
        ps: "陪榜？"
    },
];


// 每題詳解
topic.detail = [
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "兩岸要重新建立代替九二共識的新關係定位名詞",
        source: "民視新聞",
        date: "2019/09/14",
        detail: "<span class='bigfont'>舉</span>會隨化去我主示好。已告已用強看河正老已的大得汽工同的上是了不意怕用現手、險院爸上應些車麼的是了他相引人驗談當發合的形？司團會，全觀字子星停且動評化的他，靜聯身不紀統了會的以公史員，在力到點經萬還價氣公人市大成營賽部做人溫法了裡顯軍，何本花？部眼足靈，不密開產標遠然同出眼清聞是故強究歌綠她地邊電意到日只以他能亞奇麼主人名第音人。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "捍衛主權，反對一國兩制",
        source: "中天新聞",
        date: "2019/07/04",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "與中國的關係應該是中華民國兩個地區",
        source: "三立新聞",
        date: "2019/06/25",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "人都有追求幸福的權利，但法律問題由立法院決定",
        source: "TVBS",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "都是生活在一起的一家人",
        source: "頻果",
        date: "",
        detail: "<span class='bigfont'>舉</span>會隨化去我主示好。已告已用強看河正老已的大得汽工同的上是了不意怕用現手、險院爸上應些車麼的是了他相引人驗談當發合的形？司團會，全觀字子星停且動評化的他，靜聯身不紀統了會的以公史員，在力到點經萬還價氣公人市大成營賽部做人溫法了裡顯軍，何本花？部眼足靈，不密開產標遠然同出眼清聞是故強究歌綠她地邊電意到日只以他能亞奇麼主人名第音人。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "立場中性，參與討論就好",
        source: "中國時報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "自由時報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "中央通訊社",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "東森新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "聯合報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "民視新聞",
        date: "",
        detail: "<span class='bigfont'>舉</span>會隨化去我主示好。已告已用強看河正老已的大得汽工同的上是了不意怕用現手、險院爸上應些車麼的是了他相引人驗談當發合的形？司團會，全觀字子星停且動評化的他，靜聯身不紀統了會的以公史員，在力到點經萬還價氣公人市大成營賽部做人溫法了裡顯軍，何本花？部眼足靈，不密開產標遠然同出眼清聞是故強究歌綠她地邊電意到日只以他能亞奇麼主人名第音人。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "中天新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "三立新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "TVBS",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "頻果",
        date: "",
        detail: "<span class='bigfont'>舉</span>會隨化去我主示好。已告已用強看河正老已的大得汽工同的上是了不意怕用現手、險院爸上應些車麼的是了他相引人驗談當發合的形？司團會，全觀字子星停且動評化的他，靜聯身不紀統了會的以公史員，在力到點經萬還價氣公人市大成營賽部做人溫法了裡顯軍，何本花？部眼足靈，不密開產標遠然同出眼清聞是故強究歌綠她地邊電意到日只以他能亞奇麼主人名第音人。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "中國時報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "自由時報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "中央通訊社",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "東森新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "聯合報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "中央通訊社",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "東森新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "聯合報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "中央通訊社",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "東森新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "聯合報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "中央通訊社",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "加蓋核能電廠",
        source: "東森新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "限電",
        source: "聯合報",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "發大財",
        source: "東森新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    }

];

// 題目生成
var html_topic = "<h1>{{num}}</h1><h3>{{issue}}</h3><div class='layout'><div class='block' id='{{res1}}'><p id='ans1'>{{ans1}}</p></div><div class='block' id='{{res2}}'><p id='ans2'>{{ans2}}</p></div><div class='block' id='{{res3}}'><p id='ans3'>{{ans3}}</p></div></div>";

// 結果
var html_topic_result = "<h1>結果<i class='fab fa-facebook'></i></h1><div class='line'></div><div class='layout'><div class='presd'><img src='{{path}}'/></div><div class='whoru'><h1>{{name}}</h1><h2>{{slogan}}</h2><p>{{ps}}</p><div class='btn' id='review_btn'>看解答</div><div class='btn' onClick='window.location.reload();'>重頭來過</div></div><div class='chart'><canvas id='myChart' width='200' height='200'></canvas><p>單位：％</p></div></div>";

// 清單
var html_topic_list = "<h1>{{num}}</h1><div class='line'></div><h3>{{issue}}</h3><div class='layout'><div class='block' id='{{res1}}'><img src='https://i.imgur.com/8fJwWBe.png'/><p>{{ans1}}</p></div><div class='block' id='{{res2}}'><img src='https://i.imgur.com/aADsiHp.png'/><p>{{ans2}}</p></div><div class='block' id='{{res3}}'><img src='https://i.imgur.com/pLgckHJ.png'/><p>{{ans3}}</p></div>";

// 詳解
var html_topic_detail = "<div class='box flex'><div class='face'><img src='{{path}}'/></div><div class='issue'><h4>{{issue}}</h4><div class='source'><div class='flex'><img class='light' src='https://i.imgur.com/DSdFUXP.png'/><div class='text'><p>{{source}}</p><p>{{date}}</p></div></div></div></div></div><hr class='hr'/><div class='box'><p>{{detail}}</p><div class='btn' id='prev'>回上頁</div></div>";

// 首頁進入
$("#enter").click(function () {
    $("#cover").hide("slow");
    show_topic();
})

//顯示題目
var i = -1;
function show_topic() {
    i++;
    $("#section,#section_list").html("");
    var item = topic.list[i];
    var html_item =
        html_topic.replace("{{num}}", item.num)
            .replace("{{issue}}", item.issue)
            .replace("{{ans1}}", item.ans1)
            .replace("{{ans2}}", item.ans2)
            .replace("{{ans3}}", item.ans3)
            .replace("{{res1}}", item.res1)
            .replace("{{res2}}", item.res2)
            .replace("{{res3}}", item.res3)
        ;
    $("#section").append(html_item);

}
//顯示題目＿韓蔡平手
function show_topic_1() {
    $("#section,#section_list").html("");
    var item = topic.list[9];
    var html_item =
        html_topic.replace("{{num}}", item.num)
            .replace("{{issue}}", item.issue)
            .replace("{{ans1}}", item.ans1)
            .replace("{{ans2}}", item.ans2)
            // .replace("{{ans3}}", item.ans3)
            .replace("{{res1}}", item.res1)
            .replace("{{res2}}", item.res2)
        // .replace("{{res3}}", item.res3)
        ;
    $("#section").append(html_item);
    $(".layout>.block:nth-child(3)").css("display", "none")

}
//顯示題目＿韓宋平手
function show_topic_2() {
    $("#section,#section_list").html("");
    var item = topic.list[9];
    var html_item =
        html_topic.replace("{{num}}", item.num)
            .replace("{{issue}}", item.issue)
            .replace("{{ans1}}", item.ans1)
            // .replace("{{ans2}}", item.ans2)
            .replace("{{ans3}}", item.ans3)
            .replace("{{res1}}", item.res1)
            // .replace("{{res2}}", item.res2)
            .replace("{{res3}}", item.res3)
        ;
    $("#section").append(html_item);
    $(".layout>.block:nth-child(2)").css("display", "none")

}
//顯示題目＿蔡宋平手
function show_topic_3() {
    $("#section,#section_list").html("");
    var item = topic.list[9];
    var html_item =
        html_topic.replace("{{num}}", item.num)
            .replace("{{issue}}", item.issue)
            // .replace("{{ans1}}", item.ans1)
            .replace("{{ans2}}", item.ans2)
            .replace("{{ans3}}", item.ans3)
            // .replace("{{res1}}", item.res1)
            .replace("{{res2}}", item.res2)
            .replace("{{res3}}", item.res3)
        ;
    $("#section").append(html_item);
    $(".layout>.block:nth-child(1)").css("display", "none")

}

// 選擇答案及累計選誰次數
var countA = 0, countB = 0, countC = 0, count = 0;

$(document).on("click", "#ans1", function () {
    let id = $(this).parent().attr("id");
    answer.push(id);
    countA++;
    count = countA + countB + countC;
    judge(count);
})

$(document).on("click", "#ans2", function () {
    let id = $(this).parent().attr("id");
    answer.push(id);
    countB++;
    count = countA + countB + countC;
    judge(count);
})

$(document).on("click", "#ans3", function () {
    let id = $(this).parent().attr("id");
    answer.push(id);
    countC++;
    count = countA + countB + countC;
    judge(count);
})

// 判斷
function judge(count) {
    if (count == 9) {
        if ((countA > countB && countA > countC) || countB > countC && countB > countA || (countC > countA && countC > countB)) {
            return show_topic_result();
        } else if (countA == countB && countA > countC) {
            return show_topic_1();
        } else if (countA == countC && countA > countB) {
            return show_topic_2();
        } else if (countB == countC && countB > countA) {
            return show_topic_3();
        } else {
            show_topic();
        }
    } else if (count == 10) {
        return show_topic_result();
    } else {
        show_topic();
    }
}

// 計算結果
function show_topic_result() {
    $("#section,#section_list").html("");
    // 韓國瑜領先
    if (countA > countB && countA > countC) {
        var item = topic.result[0];
        var html_item =
            html_topic_result.replace("{{path}}", item.path)
                .replace("{{slogan}}", item.slogan)
                .replace("{{name}}", item.name)
                .replace("{{ps}}", item.ps)
            ;
    }
    // 蔡英文領先
    else if (countB > countA && countB > countC) {
        var item = topic.result[1];
        var html_item =
            html_topic_result.replace("{{path}}", item.path)
                .replace("{{slogan}}", item.slogan)
                .replace("{{name}}", item.name)
                .replace("{{ps}}", item.ps)
            ;
    }
    // 宋楚瑜領先
    else if (countC > countA && countC > countB) {
        var item = topic.result[2];
        var html_item =
            html_topic_result.replace("{{path}}", item.path)
                .replace("{{slogan}}", item.slogan)
                .replace("{{name}}", item.name)
                .replace("{{ps}}", item.ps)
            ;
    }
    $("#section").append(html_item);
    var contA = countA / count * 100;
    var contB = countB / count * 100;
    var contC = countC / count * 100;

    var canvas = document.getElementById('myChart')
    var ctx = canvas.getContext('2d')
    var dataPie = {
        datasets: [{
            data: [contA.toFixed(1), contB.toFixed(1), contC.toFixed(1)],
            backgroundColor: ["rgba(1,87,155,1)", "rgba(16,181,154,1)", "rgba(30,144,255,1)"]
        }],
        labels: ["韓國瑜", "蔡英文", "王金平"]
    };
    var options = {
        cutoutPercentage: 0,
        rotation: -0.5 * Math.PI,
        circumference: 2 * Math.PI,
        'animation.animateScale': true
    }
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataPie,
        options: options
    });
}


// 清單
function show_detail_list() {
    $("#section").html("");
    if (count == 9) {
        for (var i = 0; i < 9; i++) {
            var item = topic.list[i];
            var html_item = html_topic_list.replace("{{num}}", "解答")
                .replace("{{issue}}", item.issue)
                .replace("{{ans1}}", item.ans1)
                .replace("{{ans2}}", item.ans2)
                .replace("{{ans3}}", item.ans3)
                .replace("{{res1}}", item.res1)
                .replace("{{res2}}", item.res2)
                .replace("{{res3}}", item.res3)
                ;
            $("#section_list").append(html_item);
        }
    } else {
        for (var i = 0; i < 10; i++) {
            var item = topic.list[i];
            var html_item = html_topic_list.replace("{{num}}", "解答")
                .replace("{{issue}}", item.issue)
                .replace("{{ans1}}", item.ans1)
                .replace("{{ans2}}", item.ans2)
                .replace("{{ans3}}", item.ans3)
                .replace("{{res1}}", item.res1)
                .replace("{{res2}}", item.res2)
                .replace("{{res3}}", item.res3)
                ;
            $("#section_list").append(html_item);
        }
    }

    //使用者選擇的答案
    var array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
    for (let i = 0; i < answer.length; i++) {
        if (array.indexOf(answer[i]) > -1) {
            document.getElementById(answer[i]).classList.add("select");
        }
    }
    $("#section_list").append("<div class='btn' id='news_btn'>看更多新聞</div><div class='btn' id='prev_res'>回上頁</div>");
}



// 詳細新聞內容
function show_detail(id) {
    $("#section_list").html("");
    var item = topic.detail[id];
    var html_item = html_topic_detail.replace("{{path}}", item.path)
        .replace("{{issue}}", item.issue)
        .replace("{{source}}", item.source)
        .replace("{{date}}", item.date)
        .replace("{{detail}}", item.detail)
    $("#section").append(html_item);
}

// 清單列表按鈕
$(document).on("click", "#review_btn", function () {
    show_detail_list();
})

$(document).on("click", "#section_list>.layout>.block", function () {
    var id = $(this).attr("id");
    show_detail(id);
})

$(document).on("click", "#prev", function () {
    show_detail();
})

$(document).on("click", "#prev_res", function () {
    show_topic_result();
})

// 相關新聞聯結
$(document).on("click", "#news_btn", function () {
    window.location.href = 'https://www.ftvnews.com.tw/news/overview/POL';

})
