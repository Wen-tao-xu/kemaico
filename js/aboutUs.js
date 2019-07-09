    // ABOUT US视频播放
    var myVideo = document.getElementById("media");
$(".video_play_img").click(function () {
    $("#media").css('height', '3.64rem');
    myVideo.play();
})
myVideo.addEventListener('play', function () {
    $('.videoBox').css('height', '0');
    $("#media").css('height', '3.64rem');
});
myVideo.addEventListener('pause', function () {
    $('.videoBox').css('height', '3.64rem');
    $("#media").css('height', '0');
})
    // 手机端文字改变
    var windowsH = $(window).width();
    if( windowsH< 415){
        $(".use_less").css("display","none")
    }
if (windowsH < 768) {
    if(Cookies.get("lang")=="ch"){
        $(".textIntroductionCon").removeAttr("data-trn-key").text('贵阳科迈机械设备有限公司，自2005年成立以来，是集研发、生产、销售为一体的集团化公司，致力于向矿山、工程、水利等公司提供设备、工具、服务，通过不断积累凿岩钎具的设计和制造经验，同时通过引进欧洲先进的钎具制造技术和不断的技术改造，提升了企业的钎具制造水平、产品质量和综合配套能力。');
        $('.imgText_text_con1').removeAttr("data-trn-key").text('迈锐钻探也稳步发展和壮大，2011年更全新投入资金建设占地约30亩的新厂区用于扩大生产，工厂新址地处贵阳市修文县，占地20000余平方米，并聚集了一支实力较强的科研队伍，建立了相应的研发部门，设立新产品研发技术中心，为客户提供更好的节能，经济、高效的凿岩钻具。');
        $('.imgText_text_con2').removeAttr("data-trn-key").text('为更好服务全球客户，2013年我们成立了美国分公司。作为ISO9001：2008认证公司; 我们的产品质量始终如一。此外，我们的销售和营销团队网络致力于以及时和专业的方式为客户提供服务。 Kemaico产品遍布应用在北美，南美，欧洲，非洲，亚洲和澳大利亚。');
    }else{
         $(".textIntroductionCon").text('Kemaico is a overseas sales department of rock tools starting operations in 2005.With strong network of sales and marketing teams strives to service our clients in a timely and professional manner to sell goods all over the world.');
        $('.imgText_text_con1').text('To expand the scale of production in 2010, covers an area of more than 20000 square, specializing in the production of drill bit, drill rod and coupling, shank adaptor and DTH hammer and bit.');
        $('.imgText_text_con2').text('our network of sales and marketing teams strives to service our clients in a timely and professional manner. Kemaico products are used consistently in North America, South America, Europe.');
    }
} else {
    if(Cookies.get("lang")=="ch"){
        $(".textIntroductionCon").removeAttr("data-trn-key").text('贵阳科迈机械设备有限公司，是集研发、生产、销售为一体的集团化公司，致力于建立完善的服务体系，是专业的进出口贸易并拥有自己实体的集团式公司，致力于向矿山、工程、水利等提供设备、工具、服务等，公司自2005年成立以来，不断积累凿岩钎具的设计和制造经验，同时通过引进欧洲先进的钎具制造技术和不断的技术改造，提升了企业的钎具制造水平和企业实力，产品质量和综合配套能力在中国钎具行业一直处于“排头兵”位置。');
        $('.imgText_text_con1').removeAttr("data-trn-key").text('随着集团公司的贸易范围及进出口业务不断扩大，迈锐钻探同时也在稳步发展和壮大，2011年更全新投入资金建设占地约30亩的新厂区用于扩大生产，工厂新址地处贵阳市修文县，占地20000余平方米。在新厂区的规划中，有数幢标准化厂房，科研大楼、员工宿舍等齐全的设施，并聚集了一支实力较强的科研队伍，建立了相应的研发部门，同时聘请了国内钎具行业的知名专家、教授为顾问。设立新产品研发技术中心，负责钎具新材料、新技术、新产品的开发、试验、推广工作。同时与各高等院校及科研单位建立科研联合体或项目合作，共同研究并开发钎具新技术，并为客户提供节能（Energy-saving），经济（Economic）、高效（Effective）的凿岩钻具。与总公司共同努力打造一个国际钻具品牌和钻具生产基地，为全球凿岩领域客户减少购买成本和使用成本。');
        $('.imgText_text_con2').removeAttr("data-trn-key").text('为更好服务全球客户，2013年我们成立了美国分公司. 我们使用高品质的原材料和最新的生产技术，确保我们的产品即使在最恶劣的条件下也能承受。作为ISO9001：2008认证公司; 我们的产品质量始终如一。此外，我们的销售和营销团队网络致力于以及时和专业的方式为客户提供服务。 Kemaico产品遍布应用在北美，南美，欧洲，非洲，亚洲和澳大利亚。');
    }else{
        $(".textIntroductionCon").text('Kemaico has a strong research team, and engages the famous experts and pro-fessor as technical advisor, who are in charge of the development, test and pro-motion for new material, new technique and new products. At the same time, we keep the close cooperation relationship with the universities and institutes of scientific research, and have developed many new products which are well received from our end users.');
        $('.imgText_text_con1').text('Since 2005, Maxdrill Rock Tools has been striving to ma-nufacture high quality rock drilling tools and rock anch-oring for globe customers in mineral exploration, unde-rground mining in soft and hard rock, surface mining a-nd construction, tunneling, slope stabilization industry and etc. And we gradually become one of the most cre-dible Chinese manufacturers in the industry.');
        $('.imgText_text_con2').text('Kemaico is a leading manufacturer of rock tools starting operations in 2005. Our main areas of operation include research, development and production of tophammer, DTH, self-drilling and taphole drilling tools.We use high quality raw materials and the latest production techno-logies to ensure our products withstand even the tough-est conditions. As an ISO9001:2008 certified company; we maintain consistent quality for our products. More-over our network of sales and marketing teams strives to service our clients in a timely and professional manner. Kemaico products are used consistently in North Amer-ica, South America, Europe, Africa, Asia and Australia.');
    }
}
$(window).resize(function () {
    var windowsH = $(window).width();
    if( windowsH< 415){
        $(".use_less").css("display","none")
    }else{
        $(".use_less").css("display","block")
    }
    if (windowsH < 768) {
        if(Cookies.get("lang")=="ch"){
            $(".textIntroductionCon").removeAttr("data-trn-key").text('贵阳科迈机械设备有限公司，自2005年成立以来，是集研发、生产、销售为一体的集团化公司，致力于向矿山、工程、水利等公司提供设备、工具、服务，通过不断积累凿岩钎具的设计和制造经验，同时通过引进欧洲先进的钎具制造技术和不断的技术改造，提升了企业的钎具制造水平、产品质量和综合配套能力。');
            $('.imgText_text_con1').removeAttr("data-trn-key").text('迈锐钻探也稳步发展和壮大，2011年更全新投入资金建设占地约30亩的新厂区用于扩大生产，工厂新址地处贵阳市修文县，占地20000余平方米，并聚集了一支实力较强的科研队伍，建立了相应的研发部门，设立新产品研发技术中心，为客户提供更好的节能，经济、高效的凿岩钻具。');
            $('.imgText_text_con2').removeAttr("data-trn-key").text('为更好服务全球客户，2013年我们成立了美国分公司。作为ISO9001：2008认证公司; 我们的产品质量始终如一。此外，我们的销售和营销团队网络致力于以及时和专业的方式为客户提供服务。 Kemaico产品遍布应用在北美，南美，欧洲，非洲，亚洲和澳大利亚。');
        }else{
             $(".textIntroductionCon").text('Kemaico is a overseas sales department of rock tools starting operations in 2005.With strong network of sales and marketing teams strives to service our clients in a timely and professional manner to sell goods all over the world.');
            $('.imgText_text_con1').text('To expand the scale of production in 2010, covers an area of more than 20000 square, specializing in the production of drill bit, drill rod and coupling, shank adaptor and DTH hammer and bit.');
            $('.imgText_text_con2').text('our network of sales and marketing teams strives to service our clients in a timely and professional manner. Kemaico products are used consistently in North America, South America, Europe.');
        }
    } else {
        if(Cookies.get("lang")=="ch"){
            $(".textIntroductionCon").removeAttr("data-trn-key").text('贵阳科迈机械设备有限公司，是集研发、生产、销售为一体的集团化公司，致力于建立完善的服务体系，是专业的进出口贸易并拥有自己实体的集团式公司，致力于向矿山、工程、水利等提供设备、工具、服务等，公司自2005年成立以来，不断积累凿岩钎具的设计和制造经验，同时通过引进欧洲先进的钎具制造技术和不断的技术改造，提升了企业的钎具制造水平和企业实力，产品质量和综合配套能力在中国钎具行业一直处于“排头兵”位置。');
            $('.imgText_text_con1').removeAttr("data-trn-key").text('随着集团公司的贸易范围及进出口业务不断扩大，迈锐钻探同时也在稳步发展和壮大，2011年更全新投入资金建设占地约30亩的新厂区用于扩大生产，工厂新址地处贵阳市修文县，占地20000余平方米。在新厂区的规划中，有数幢标准化厂房，科研大楼、员工宿舍等齐全的设施，并聚集了一支实力较强的科研队伍，建立了相应的研发部门，同时聘请了国内钎具行业的知名专家、教授为顾问。设立新产品研发技术中心，负责钎具新材料、新技术、新产品的开发、试验、推广工作。同时与各高等院校及科研单位建立科研联合体或项目合作，共同研究并开发钎具新技术，并为客户提供节能（Energy-saving），经济（Economic）、高效（Effective）的凿岩钻具。与总公司共同努力打造一个国际钻具品牌和钻具生产基地，为全球凿岩领域客户减少购买成本和使用成本。');
            $('.imgText_text_con2').removeAttr("data-trn-key").text('为更好服务全球客户，2013年我们成立了美国分公司. 我们使用高品质的原材料和最新的生产技术，确保我们的产品即使在最恶劣的条件下也能承受。作为ISO9001：2008认证公司; 我们的产品质量始终如一。此外，我们的销售和营销团队网络致力于以及时和专业的方式为客户提供服务。 Kemaico产品遍布应用在北美，南美，欧洲，非洲，亚洲和澳大利亚。');
        }else{
            $(".textIntroductionCon").text('Kemaico has a strong research team, and engages the famous experts and pro-fessor as technical advisor, who are in charge of the development, test and pro-motion for new material, new technique and new products. At the same time, we keep the close cooperation relationship with the universities and institutes of scientific research, and have developed many new products which are well received from our end users.');
            $('.imgText_text_con1').text('Since 2005, Maxdrill Rock Tools has been striving to ma-nufacture high quality rock drilling tools and rock anch-oring for globe customers in mineral exploration, unde-rground mining in soft and hard rock, surface mining a-nd construction, tunneling, slope stabilization industry and etc. And we gradually become one of the most cre-dible Chinese manufacturers in the industry.');
            $('.imgText_text_con2').text('Kemaico is a leading manufacturer of rock tools starting operations in 2005. Our main areas of operation include research, development and production of tophammer, DTH, self-drilling and taphole drilling tools.We use high quality raw materials and the latest production techno-logies to ensure our products withstand even the tough-est conditions. As an ISO9001:2008 certified company; we maintain consistent quality for our products. More-over our network of sales and marketing teams strives to service our clients in a timely and professional manner. Kemaico products are used consistently in North Amer-ica, South America, Europe, Africa, Asia and Australia.');
        }
    }
})
new WOW().init();
$('.counter').countUp();