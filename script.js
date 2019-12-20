var topic = {};

var answer = [];
//題目
topic.list = [
    {
        num: "| 第ㄧ題 ｜",
        issue: "Q1.海峽對岸的強國主張九二共識、和平統一台灣，並實施一國兩制，我回應...",
        ans1: "捍衛中華民國主權<br>主張一中各表的「九二共識」",
        ans2: "拒絕一國兩制<br>「中華民國台灣」是最大共識",
        ans3: "請正視中華民國存在<br>在對岸未實現自由民主法治前，主張維持現狀",
        res1: "0",
        res2: "1",
        res3: "2"
    },
    {
        num: "| 第二題 ｜",
        issue: "Q2.我國生育率持續下降，許多人不想生或不敢生，我主張...",
        ans1: "0到6歲國家幫忙養<br>推行666育兒政策",
        ans2: "育兒津貼再加碼<br>0到6歲國家跟你一起養",
        ans3: "育兒不只補助<br>幼兒園應納入國民義務教育",
        res1: "3",
        res2: "4",
        res3: "5"
    },
    {
        num: "| 第三題 ｜",
        issue: "Q3.退休金應該「世世代代領得到，長長久久領到老」，關於年改議題，我主張...",
        ans1: "年金暴政留殘局<br>千億預算撥補勞保基金",
        ans2: "年金改革非做不可<br>感謝軍公教體諒",
        ans3: "年金改格胡亂暴衝<br>上任後重新檢討",
        res1: "6",
        res2: "7",
        res3: "8"
    },
    {
        num: "| 第四題 ｜",
        issue: "Q4.照顧台灣勞工，讓他們有力氣繼續賺錢，我主張...",
        ans1: "聽方丈的話修改一例一休<br>再拋「勞動三箭」",
        ans2: "一例一休執行給予企業彈性<br>減稅加薪顧勞工",
        ans3: "維持一例一休的精神<br>但調整為「異業異法」",
        res1: "9",
        res2: "10",
        res3: "11"
    },
    {
        num: "| 第五題 ｜",
        issue: "Q5.要有足夠用電，也要有身體健康，關於台灣能源政策，我主張...",
        ans1: "反對用肺發電<br>兩個前提下重啟核四",
        ans2: "沒人想把核廢料放家裡<br>目標2025年綠電達20%",
        ans3: "反對「拼裝車」核四<br>但不輕言廢核",
        res1: "12",
        res2: "13",
        res3: "14"
    },
    {
        num: "| 第六題 ｜",
        issue: "Q6.「人進來，發大財」不只是口號，對於好好拚觀光，我主張...",
        ans1: "觀光行銷我最會<br>五大主張拚2028年旅客破2千萬人",
        ans2: "觀光不能只依靠中國<br>修法升格拚觀光立國",
        ans3: "中國處罰觀光業不公平<br>我當選後親自處理",
        res1: "15",
        res2: "16",
        res3: "17"
    },
    {
        num: "| 第七題 ｜",
        issue: "Q7.我國新移民日漸增加，他們都是鳳凰，我主張...",
        ans1: "成立新移民委員會<br>懷孕新移民來台即納健保",
        ans2: "擴大補助、母語入校園<br>多面向照顧「台灣新驕傲」",
        ans3: "設立新住民委員會<br>協住新住民子女教育就業",
        res1: "18",
        res2: "19",
        res3: "20"
    },
    {
        num: "| 第八題 ｜",
        issue: "Q8.現代青年壓力大，被生活逼到失去戰鬥力，我主張...",
        ans1: "學貸免息、雙語教育<br>免費出國交換一年",
        ans2: "學貸減壓再活化<br>政府幫你補房租",
        ans3: "學貸免息、凍漲公立大學學費<br>兩桶金助買房",
        res1: "21",
        res2: "22",
        res3: "23"
    },
    {
        num: "| 第九題 ｜",
        issue: "Q9.政府拚經濟，人民才能活下去，我主張...",
        ans1: "推動自貿區<br>擦亮庶民經濟招牌",
        ans2: "推動投資台灣三方案<br>打造亞洲高階製研中心",
        ans3: "制定專法厚植台灣經濟<br>扶植新創產業",
        res1: "24",
        res2: "25",
        res3: "26"
    },
    {
        num: "| 第十題 ｜",
        issue: "Q10.台灣房價高，青年不吃不喝幾十年也買不起，為了落實居住正義，我主張...",
        ans1: "推動青銀共居<br>給你自立成家基金",
        ans2: "社會住宅繼續蓋<br>包租代管大力推",
        ans3: "推動「工者有其屋」<br>企業與政府合作興建住宅",
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
        slogan: "台灣安全，人民有錢<br>韓粉們請隨我一起出征！"
    },
    {
        path: "https://i.imgur.com/gBUWPmJ.png",
        name: "蔡英文",
        slogan: "2020台灣要贏<br>一同加入辣台派守護台灣！"
    },
    {
        path: "https://i.imgur.com/6YjJzx3.png",
        name: "宋楚瑜",
        slogan: "藍綠推兩邊，人民擺中間<br>終局之戰中我是獨孤求敗！"
    },
];


// 每題詳解
topic.detail = [
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q1.海峽對岸的強國主張九二共識、和平統一台灣，並實施一國兩制，我回應...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019A13W0006",
        date: " <i class='far fa-clock'></i> 2019/10/13",
        detail: "韓國瑜公布兩岸政策白皮書，包括四大主張：<br>一、要在捍衛中華民國的主權下，堅持「一中各表」的「九二共識」；<br>二、兩岸恢復互信，重建兩岸對話的架構；<br>三、建立朝野、台灣內部對話機制，形成內部共識；<br>四、以台灣民主化的成功經驗，為中國政治改革提供借鑑，只有中國民主化，才能真正確保兩岸和平發展。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q1.海峽對岸的強國主張九二共識、和平統一台灣，並實施一國兩制，我回應...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019A10P01M1",
        date: " <i class='far fa-clock'></i> 2019/10/10",
        detail: "總統蔡英文於2019年雙十國慶時發表談話，除了提到香港一國兩制的失敗，對於習近平提出「一國兩制台灣方案」，蔡總統也喊出「拒絕一國兩制」、「中華民國台灣」，就是目前台灣社會最大共識。<br>蔡總統表示「當自由民主受到挑戰，當中華民國的生存發展受到威脅，我們就必須站出來捍衛，拒絕一國兩制，是2300萬台灣人民不分黨派、不分立場，彼此間最大的共識」。<br>也提到「中華民國不是誰的專利，台灣也不是誰可以獨佔，中華民國台灣六個字，絕對不是藍色，也不會是綠色，這就是整個社會最大的共識」。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q1.海峽對岸的強國主張九二共識、和平統一台灣，並實施一國兩制，我回應...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B13W0012",
        date: " <i class='far fa-clock'></i> 2019/11/13",
        detail: "宋楚瑜公布的十大政見當中，在兩岸政策方面主張「對岸必須正視中華民國的存在事實，我們主張對等分治、兩岸對話、和平發展。<br>在中國大陸還未完全實現自由民主法治前，台灣絕對主張維持現狀」。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q2.我國生育率持續下降，許多人不想生或不敢生，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B25P05M1",
        date: " <i class='far fa-clock'></i> 2019/11/25",
        detail: "為了搶新手爸媽選票，國民黨副總統參選人張善政召開育兒政策記者會，宣布加碼第一胎補助到3萬，第二胎補助6萬，逐年領6萬直到6歲，所以是「666育兒」。<br>至於財源來源，張善政表示要取自前瞻計畫的預算，並砲轟蔡政府發想政策0分，抄襲撒幣100分。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q2.我國生育率持續下降，許多人不想生或不敢生，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B23P10M1",
        date: " <i class='far fa-clock'></i> 2019/11/23",
        detail: "為了鼓勵年輕人敢生敢養，總統蔡英文宣布「0到6歲國家跟你一起養」政策，育兒津貼將從現在每個月2500元，四年增加到5000元，補助年齡從4歲延伸到6歲。<br>由於口號聽起來類似鴻海創辦人郭台銘喊出的「0到6歲國家養」，還被韓國瑜陣營質疑「拿香跟著拜」，蔡總統回應沒有較勁的意思。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q2.我國生育率持續下降，許多人不想生或不敢生，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/overview/POL",
        date: "",
        detail: "針對總統蔡英文提出「0到6歲國家一起養」，承諾育兒津貼將加倍，親民黨在臉書發文，表示「灑錢補助方案只是變相的政策買票」。<br>親民黨提出，應該將國民義務教育向下紮根三年，小班、中班、大班，將幼兒提前納入國民義務教育體制內，由國家統一接手協助負責，不要錯過最黃金的幼兒學習，除了避免各地方政府補助金額不一，造成家長無所適從，也可以避免政黨輪替後，面臨換一個政府就換一種養法的困境。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q3.退休金應該「世世代代領得到，長長久久領到老」，關於年改議題，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C07P12M1",
        date: " <i class='far fa-clock'></i> 2019/12/07",
        detail: "國民黨總統參選人韓國瑜，先前談到年金改革時表示，只要政府不貪汙、不腐敗，一定有足夠的錢。而副總統候選人張善政也在臉書發文，怒嗆「年金暴政殘局，我們來幫蔡英文善後」。張善政指出，年改已經扣錯第一個釦子，需要新政府來懸崖勒馬。政府必須履行政府最後支付原則，對於即將破產的勞保基金，2年內編列1000億預算撥補。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q3.退休金應該「世世代代領得到，長長久久領到老」，關於年改議題，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019823W0024",
        date: " <i class='far fa-clock'></i> 2019/08/23",
        detail: "年金改革釋憲結果先前出爐，包括法律不溯及既往原則、信賴保護原則、比例原則、誠信原則、平等原則及正當法律程序等條例都合憲，只有「禁領雙薪」違憲。<br>對此，總統蔡英文特別發文感謝軍公教諒解，並強調年改是為了讓現職和退休的軍公教人員，不必擔心退撫基金破產，「世世代代領得到，長長久久領到老」。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q3.退休金應該「世世代代領得到，長長久久領到老」，關於年改議題，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C18W0068",
        date: " <i class='far fa-clock'></i> 2019/12/18",
        detail: "宋楚瑜在2020首場總統政見發表會上提到，改革需要魄力，但更需要方法，「了解溝通」就是必要手段。<br>而政府過去三年提出許多改革，但行政和立法脫鉤，沒有協調好，所以引起許多抗爭，就是「改革胡亂爆衝」。<br>宋楚瑜舉例，不當黨產委員會讓國民黨繳出很多錢，但這些錢沒有好好運用，拿去補貼年金改革，讓過去為台灣國防奮鬥的老兵難以安。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q4.照顧台灣勞工，讓他們有力氣繼續賺錢，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B07W0044",
        date: " <i class='far fa-clock'></i> 2019/11/07",
        detail: "韓國瑜先前參加中市各工業區座談會，當中許多企業都反映一例一休造成困擾，對此韓國瑜表示，他之前拜拜時問過方丈，連方丈都說要修改，他選上之後一定會改。<br>而韓陣營也推出「勞動三箭」：就保、勞退、勞保，將修法障勞工在無薪假期間，仍能獲得保險支付投保薪資的6成；政府同額補貼低薪青年勞工自提退休金，以及2年內編新台幣1000億元撥補勞保基金。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q4.照顧台灣勞工，讓他們有力氣繼續賺錢，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019A25W0005",
        date: " <i class='far fa-clock'></i> 2019/10/20",
        detail: "對於韓國瑜指「一例一休」連方丈都看不下去，蔡英文回應，在法律執行中，都有給予一定彈性，如果有企業受到影響，會給予方案協助。<br>針對勞工議題，蔡總統也曾表示執政三年以來，基本工資調漲4次，是第一個敢年年漲基本工資的政府，會讓辛苦打拚的人民得到最多的照顧。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q4.照顧台灣勞工，讓他們有力氣繼續賺錢，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B13W0012",
        date: " <i class='far fa-clock'></i> 2019/11/13",
        detail: "宋楚瑜公布的十大政見當中，在勞工政策方面主張，為了保障勞工權益，維持一例一休的精神，但調整為「異業異法」，我們需要一套兼顧彈性與保障的勞動法，重新找回和諧勞資關係。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q5.要有足夠用電，也要有身體健康，關於台灣能源政策，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B13P19M1",
        date: " <i class='far fa-clock'></i> 2019/11/13",
        detail: "韓國瑜先前召開能源記者會，批評蔡政府能源政策方向錯誤，引發空氣污染惡化，讓人民「用肺發電」。<br>還點出台灣不是全世界第一個用核能的國家，也不是全世界用核能發電最多的國家，在「人民同意」、「安全無虞」的情況下就會重啟核四，決心十分堅定。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q5.要有足夠用電，也要有身體健康，關於台灣能源政策，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019A12P02M1",
        date: " <i class='far fa-clock'></i> 2019/10/12",
        detail: "總統蔡英文在「青聽我們說─2020總統大選青年論壇」，針對蘭嶼核廢料議題，表示「核廢料要放哪裡」是台灣發展核電最大的挑戰，大家都不願意將核廢料放在家裡附近，也是為何要推動再生能源、非核家園政策。而蔡政府也協助國內業者推綠能建設，預計2025年，綠能供電可以達到20%。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q5.要有足夠用電，也要有身體健康，關於台灣能源政策，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/overview/POL",
        date: "",
        detail: "宋楚瑜在2016年參選總統時提出的能源政策，指出在沒有充足替代能源之前，暫時不廢核電，但因為安全問題堪慮，他反對核四。而本屆選舉，他也再度重提核四是因為不同利益團體分贓，才產生「拼裝車」問題。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q6.「人進來，發大財」不只是口號，對於好好拚觀光，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019A21L02M1",
        date: " <i class='far fa-clock'></i> 2019/10/21",
        detail: "韓國瑜在2020首場總統政見發表會上，質疑蔡政府將轉機人數納入觀光人次，有灌水嫌疑，不過交通部長林佳龍隨後否認，並呼籲韓國瑜不要誤導民眾。<br>而在本屆政見裡頭，韓國瑜陣營再提出觀光「大升級」、「大建設」、「大開發」、「大落實」、「大目標」等5個新主張，不只要成立觀光部，還喊出數據拚2028來台觀光，每年衝上2000萬人次，觀光外匯收1兆元以上。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q6.「人進來，發大財」不只是口號，對於好好拚觀光，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C16P11M1",
        date: " <i class='far fa-clock'></i> 2019/12/16",
        detail: "根據觀光局統計，今年來台國際旅客超過1111萬人次，突破歷史新高！而總統蔡英文日前參加「Tourism 2030 全國觀光政策發展會議」時也提到，執政三年多來，確實把觀光客來源的結構改變了，不再僅是依賴中國。另外，交通部也提出「觀光三箭」計畫，包含加速觀光局升格為觀光署，提出2030年觀光政策白皮書，目標是2030年來台國際觀光客達2000萬人次。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q6.「人進來，發大財」不只是口號，對於好好拚觀光，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C16W0018",
        date: " <i class='far fa-clock'></i> 2019/12/11",
        detail: "宋楚瑜日前與不分區立委候選人合體，參加「觀光產業座談會」，和旅遊業者進行交流。宋楚瑜提到，北京政府對民進黨有意見，卻拿最希望兩岸交流的觀光產業出氣，是不公平的，也承諾當選總統後，會親自處理兩岸旅遊問題。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q7.我國新移民日漸增加，他們都是鳳凰，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C17W0071",
        date: " <i class='far fa-clock'></i> 2019/11/22",
        detail: "韓國瑜先前談到高階人才外流問題時，脫口「鳳凰都飛走了，進來一大堆雞」，被認為歧視新住民與外籍移工。為了挽救新移民選票，張善政召開政策記者會，表示為了落實照顧新住民，將成立直屬行政院的「新移民委員會」，並邀請來自柬埔寨的林麗蟬擔任召集人。<br>然而張善政先前談到新住民健保問題時，提到懷孕新移民來台應該立即納入健保，還說蔡英文沒有生過小孩，不知道為人父母的心，又遭外界批評歧視女性。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q7.我國新移民日漸增加，他們都是鳳凰，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C1611001",
        date: " <i class='far fa-clock'></i> 2019/12/16",
        detail: "總統蔡英文日前推出最新競選廣告「台灣新驕傲」，用6種語言述說新住民逐漸撕掉外在標籤，也感謝新住民為台灣帶來新的文化、新的體驗。<br>記者會上民進黨不分區立委參選人、新住民代表羅美玲，也細數蔡總統任內推動的新住民政績，大讚「絕對是最照顧新住民的總統」。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q7.我國新移民日漸增加，他們都是鳳凰，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/overview/POL",
        date: "",
        detail: "宋楚瑜公布的十大政見當中，在新住民政策方面，主張設立新住民委員會，協助新住民融入台灣社會，照顧其新住民子女教育及就業。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q8.現代青年壓力大，被生活逼到失去戰鬥力，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B07P13M1",
        date: " <i class='far fa-clock'></i> 2019/11/07",
        detail: "為了拚青年選票，韓國瑜日前提出青年政策，除了主張學貸免息政策，只還本金。另外，為了讓教育要和國際接軌，因此韓國瑜也要推動全台小學一年級雙語教育、補助大學生及碩士生出國交換一年。<br>而全國45歲以下的軍公教警消人員，韓國瑜也規劃未來只要申請到學校，每人能夠「帶職、帶薪水」出國進修一年。至於所有費用，他一定想辦法幫忙解決。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q8.現代青年壓力大，被生活逼到失去戰鬥力，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B27W0073",
        date: " <i class='far fa-clock'></i> 2019/11/23",
        detail: "瞄準31.8萬名首投族，總統蔡英文近來除了和網紅合作，衝高網路聲量，也提出不少青年政策，要積極搶攻年輕選票。<br>蔡英文「2020台灣要贏」競總官網上列出多項政策，包括「職涯好發展，學貸減壓再活化」，也針對單身青年、新婚夫妻及育有未成年子女家庭提出「租金補貼」。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q8.現代青年壓力大，被生活逼到失去戰鬥力，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/overview/POL",
        date: "",
        detail: "宋楚瑜在2016年參選總統時，曾經提到中央政府編列上百億給台北市舉辦世大運、花博，卻讓學生背負一年2億到3億元的學貸，因此若他當選將會全面取消學貸利息，並給「青年兩桶金」。而今年11月5日，親民黨曾在官網發布該篇訊息，並表示「好的政策歡迎採用」。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q9.政府拚經濟，人民才能活下去，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C02W0055",
        date: " <i class='far fa-clock'></i> 2019/11/29",
        detail: "選舉以來總是「庶民」不離口的韓國瑜，在經濟政策部分，也主張「創造繁榮與均富的社會，打造庶民經濟的希望工程」，並成立1000億庶民經濟希望工程基金。<br>另外，韓陣營也主張建立自由開放的經貿環境，和周遭國家簽洽雙邊FTA；支持推動自由貿易經濟特區，鬆綁自貿區相關規範。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q9.政府拚經濟，人民才能活下去，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C20W0007",
        date: " <i class='far fa-clock'></i> 2019/12/20",
        detail: "台灣今年前三季經濟成長強勁，經濟成長率預估表現將居亞洲四小龍之首；另外台股指數也突破12000點，站上29年新高。對於經濟表現亮眼，總統蔡英文提出下一階段財經目標與政策，將落實投資台灣三大投資方案，建構台灣成為亞洲高階製造及研發中心等，重新擦亮MIT的招牌。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q9.政府拚經濟，人民才能活下去，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B13W0012",
        date: " <i class='far fa-clock'></i> 2019/11/13",
        detail: "宋楚瑜公布的十大政見當中，在經濟政策方面主張，厚植台灣經濟，制定專法支援台商建立海外產業聚落；鼓勵新創研發，扶植新創產業；持續用力推動簽署CPTPP及RCEP等區域經濟協議。"
    },
    {
        path: "https://i.imgur.com/8fJwWBe.png",
        issue: "Q10.台灣房價高，青年不吃不喝幾十年也買不起，為了落實居住正義，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C11W0054",
        date: " <i class='far fa-clock'></i> 2019/12/09",
        detail: "為了爭取年輕人認同，韓國瑜陣營推出青年政策三箭，包括「高薪就業，全球創業；人人有屋住，置產有機會；參與國家建設，重返國際舞台」，並承諾在行政院下設置青年發展委員會。<br>韓陣營主張打造「幼青銀共同生活」的公共空間，也將擴大青年租屋補貼、社會住宅包租代管等多元方式，減輕青年居住的負擔，並提供「自立成家基金」。"
    },
    {
        path: "https://i.imgur.com/aADsiHp.png",
        issue: "Q10.台灣房價高，青年不吃不喝幾十年也買不起，為了落實居住正義，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019B22I17M1",
        date: " <i class='far fa-clock'></i> 2019/11/22",
        detail: "關於居住正義議題，總統蔡英文四年前提出「安心住宅計畫」，目標8年20萬戶社會住宅，包括直接興建12萬戶及包租代管8萬戶。而下個任期，蔡陣營也喊出「社會住宅繼續蓋」，除了目前可入住與施工中的社會住宅已經有3萬戶，2020年預計動工1萬5千戶，2021至2024年每年再動工2萬戶，達成興建12萬戶社會住宅目標。<br>「包租代管大力推」部分，目前已協助5000多戶家庭，2020年從6都擴大至12縣市辦理2萬戶，2021至2024年將以每年1萬5000戶的速度累積，達成8萬戶目標。"
    },
    {
        path: "https://i.imgur.com/pLgckHJ.png",
        issue: "Q10.台灣房價高，青年不吃不喝幾十年也買不起，為了落實居住正義，我主張...",
        source: "<i class='fas fa-feather-alt'></i> 新聞連結",
        newsrc: "https://www.ftvnews.com.tw/news/detail/2019C11W0058",
        date: " <i class='far fa-clock'></i> 2019/12/04",
        detail: "親民黨先前合體郭家軍，提出進軍國會六大政見，其中之一包括「人人買得起，工者有其屋」。<br>本次大選進入親民黨不分區立委第三名的宣明智，先前發出公開信提到，「工者有其屋」透過修改現行法令，由政府提供土地、企業部分出資、建商營造，於企業週邊興建生活機能完善、科技化智慧住宅，滿足進入職場國人擁有平價購屋、換屋權之基本生存權。"
    }

];

// 題目生成
var html_topic = "<h1>{{num}}</h1><h3>{{issue}}</h3><div class='layout'><div class='block' id='{{res1}}'><p id='ans1'>{{ans1}}</p></div><div class='block' id='{{res2}}'><p id='ans2'>{{ans2}}</p></div><div class='block' id='{{res3}}'><p id='ans3'>{{ans3}}</p></div></div>";

// 結果
var html_topic_result = "<h1>結果<i class='fab fa-facebook'></i></h1><div class='line'></div><div class='layout'><div class='presd'><img src='{{path}}'/></div><div class='whoru'><h1>{{name}}</h1><h2>{{slogan}}</h2><div class='btn' id='review_btn'>看政見</div><div class='btn' onClick='window.location.reload();'>再選一次</div></div><div class='chart'><canvas id='myChart' width='200' height='200'></canvas><p>單位：％</p></div></div>";

// 清單
var html_topic_list = "<h1>{{num}}</h1><div class='line'></div><h3>{{issue}}</h3><div class='layout'><div class='block' id='{{res1}}'><img src='https://i.imgur.com/8fJwWBe.png'/><p>{{ans1}}</p></div><div class='block' id='{{res2}}'><img src='https://i.imgur.com/aADsiHp.png'/><p>{{ans2}}</p></div><div class='block' id='{{res3}}'><img src='https://i.imgur.com/pLgckHJ.png'/><p>{{ans3}}</p></div>";

// 詳解
var html_topic_detail = "<div class='box flex'><div class='face'><img src='{{path}}'/></div><div class='issue'><h4>{{issue}}</h4><a href='{{newsrc}}' target='_blank' class='source'><div class='flex'><div class='text'><p>{{source}}</p><p>{{date}}</p></div></div></a></div></div><hr class='hr' /><div class='box'><p>{{detail}}</p><div class='btn' id='prev'>回上頁</div></div>";

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
            backgroundColor: ["rgba(53, 85, 132, 1)", "rgba(94, 153, 118, 1)", "rgba(198, 124, 74, 1)"]
        }],
        labels: ["韓國瑜", "蔡英文", "宋楚瑜"]
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
            var html_item = html_topic_list.replace("{{num}}", "各領域政見")
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
            var html_item = html_topic_list.replace("{{num}}", "各領域政見")
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
    $("#section_list").append("<div class='btn' id='news_btn' target='_blank'>看更多新聞</div><div class='btn' id='prev_res'>回上頁</div>");
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
        .replace("{{newsrc}}", item.newsrc)
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
    // html_topic_list();
    show_detail_list();
})

$(document).on("click", "#prev_res", function () {
    show_topic_result();
})

// 相關新聞聯結
$(document).on("click", "#news_btn", function () {
    window.open('https://www.ftvnews.com.tw/news/overview/POL');

})
