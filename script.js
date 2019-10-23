var topic = {};

var answer = [];
//題目
topic.list = [
    {
        num: "| 第ㄧ題 ｜",
        issue: "Ｑ1.你對於兩岸關係，抱持著什麼樣的想法？",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "兩岸要重新建立代替九二共識的新關係定位名詞",
        ans2: "捍衛主權，反對一國兩制",
        ans3: "與中國的關係應該是中華民國兩個地區",
        res1: "0",
        res2: "1",
        res3: "2"
    },
    {
        num: "| 第二題 ｜",
        issue: "Ｑ2.你對於同性婚姻通過的看法？",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "人都有追求幸福的權利，但法律問題由立法院決定",
        ans2: "都是生活在一起的一家人",
        ans3: "立場中性，參與討論就好",
        res1: "3",
        res2: "4",
        res3: "5"
    },
    {
        num: "| 第三題 ｜",
        issue: "Ｑ3.年金改革對國家的幫助",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
        res1: "6",
        res2: "7",
        res3: "8"
    },
    {
        num: "| 第四題 ｜",
        issue: "Ｑ4.對於轉型正義的看法",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
        res1: "9",
        res2: "10",
        res3: "11"
    },
    {
        num: "| 第五題 ｜",
        issue: "Ｑ5.你的能源政策",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
        res1: "12",
        res2: "13",
        res3: "14"
    },
    {
        num: "| 第六題 ｜",
        issue: "Ｑ6.空氣品質惡化和頻頻斷電，你要選擇什麼方式拯救台灣電力？",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
        res1: "15",
        res2: "16",
        res3: "17"
    },
    {
        num: "| 第七題 ｜",
        issue: "Ｑ7.空氣品質惡化和頻頻斷電，你要選擇什麼方式拯救台灣電力？",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
        res1: "18",
        res2: "19",
        res3: "20"
    },
    {
        num: "| 第八題 ｜",
        issue: "Ｑ8.空氣品質惡化和頻頻斷電，你要選擇什麼方式拯救台灣電力？",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
        res1: "21",
        res2: "22",
        res3: "23"
    },
    {
        num: "| 第九題 ｜",
        issue: "Ｑ9.空氣品質惡化和頻頻斷電，你要選擇什麼方式拯救台灣電力？",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
        res1: "24",
        res2: "25",
        res3: "26"
    },
    {
        num: "| 第十題 ｜",
        issue: "Ｑ10.空氣品質惡化和頻頻斷電，你要選擇什麼方式拯救台灣電力？",
        name1: "蔡英文",
        name2: "韓國瑜",
        name3: "王金平",
        ans1: "加蓋核能電廠",
        ans2: "限電",
        ans3: "發大財",
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
        slogan: "兩岸關係你儂我儂，而誰不喜歡愛情呢？"
    },
    {
        path: "https://i.imgur.com/gBUWPmJ.png",
        name: "蔡英文",
        slogan: "當年反對我們的人，現在都享受改革的成果。"
    },
    {
        path: "",
        name: "王金平",
        slogan: "你好我金平啦。"
    }
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
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
        path: "https://i.imgur.com/vdMZVDA.png",
        issue: "發大財",
        source: "東森新聞",
        date: "",
        detail: "<span class='bigfont'>要</span>可中的美語飯考，天決臺：華望我有居引一服出色覺排車有還自有兩天調地而：死強座預升。留哥別出對報了子境大間然子用，立著月當室她馬著位標成士無一的，顧士什近文點意可局再子光卻該；有經一簡竟口速假世推場境市不輪……民他下臉對歡不不到？靜費工幾腳全公裡麼信白開列多色布值的導器算作，斯她一戰的大電再感馬的麼請度年特界界法意行！的書兒會手場詩學中得所列，家金新集查這快、是一以級要止，樂都列縣公被？西阿兒況個務卻花市，民你苦學後們在格市系不基所包道方續。"
    }

];

// 題目生成
var html_topic = "<h1>{{num}}</h1><h3>{{issue}}</h3><div class='layout'><div class='block' id='{{res1}}'><p id='ans1'>{{ans1}}</p></div><div class='block' id='{{res2}}'><p id='ans2'>{{ans2}}</p></div><div class='block' id='{{res3}}'><p id='ans3'>{{ans3}}</p></div></div>";

// 結果
var html_topic_result = "<h1>結果<i class='fab fa-facebook'></i></h1><div class='line'></div><div class='layout'><div class='presd'><img src='{{path}}'/></div><div class='whoru'><h1>{{name}}</h1><h2>{{slogan}}</h2><div class='btn' id='review_btn'>看解答</div></div><div class='chart'><canvas id='myChart' width='200' height='200'></canvas><p>單位：％</p></div></div>";

// 清單
var html_topic_list = "<h1>{{num}}</h1><div class='line'></div><h3>{{issue}}</h3><div class='layout'><div class='block' id='{{res1}}'><img src='https://i.imgur.com/8fJwWBe.png'/><p>{{ans1}}</p></div><div class='block' id='{{res2}}'><img src='https://i.imgur.com/aADsiHp.png'/><p>{{ans2}}</p></div><div class='block' id='{{res3}}'><img src='https://i.imgur.com/vdMZVDA.png'/><p>{{ans3}}</p></div>";

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


// 選擇答案及累計選誰次數
var countA = 0, countB = 0, countC = 0, count = 0;

$(document).on("click", "#ans1", function () {
    let id = $(this).parent().attr("id");
    answer.push(id);
    countA++;
    count = countA + countB + countC;
    if (count == 10) {
        show_topic_result();
    } else {
        show_topic();
    }
})

$(document).on("click", "#ans2", function () {
    let id = $(this).parent().attr("id");
    answer.push(id);
    countB++;
    count = countA + countB + countC;
    if (count == 10) {
        show_topic_result();
    } else {
        show_topic();
    }
})

$(document).on("click", "#ans3", function () {
    let id = $(this).parent().attr("id");
    answer.push(id);
    countC++;
    count = countA + countB + countC;
    if (count == 10) {
        show_topic_result();
    } else {
        show_topic();
    }
})

// 結果
function show_topic_result() {
    $("#section,#section_list").html("");
    if (countA > countB && countA > countC) {
        var item = topic.result[0];
        var html_item =
            html_topic_result.replace("{{path}}", item.path)
                .replace("{{slogan}}", item.slogan)
                .replace("{{name}}", item.name)
            ;
    } else if (countB > countA && countB > countC) {
        var item = topic.result[1];
        var html_item =
            html_topic_result.replace("{{path}}", item.path)
                .replace("{{slogan}}", item.slogan)
                .replace("{{name}}", item.name)
            ;
    } else {
        var item = topic.result[2];
        var html_item =
            html_topic_result.replace("{{path}}", item.path)
                .replace("{{slogan}}", item.slogan)
                .replace("{{name}}", item.name)
            ;
    }
    $("#section").append(html_item);
    countA = countA * 10;
    countB = countB * 10;
    countC = countC * 10;

    var canvas = document.getElementById('myChart')
    var ctx = canvas.getContext('2d')
    var dataPie = {
        datasets: [{
            data: [countA, countB, countC],
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
    //使用者選擇的答案
    var array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
    for (let i = 0; i < answer.length; i++) {
        if (array.indexOf(answer[i]) > -1) {
            document.getElementById(answer[i]).classList.add("select");
        }
    }
    $("#section_list").append("<div class='btn' id='news_btn'>看更多新聞</div>");
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
    show_detail_list();
})

// 相關新聞聯結
$(document).on("click", "#news_btn", function () {
    window.location.href = 'https://www.ftvnews.com.tw/news/overview/POL';

})
