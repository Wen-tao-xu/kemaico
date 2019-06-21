(function flexible(window, document) {
    var docEl = document.documentElement
    var dpr = window.devicePixelRatio || 1

    // adjust body font size
    function setBodyFontSize() {
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            document.addEventListener('DOMContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();

    // set 1rem = viewWidth / 10
    function setRemUnit() {
        var rem = docEl.clientWidth / 10
        docEl.style.fontSize = rem + 'px';
        // 固定手机端导航相对位置
        navPosation()
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })

    // detect 0.5px supports
    if (dpr >= 2) {
        var fakeBody = document.createElement('body')
        var testElement = document.createElement('div')
        testElement.style.border = '.5px solid transparent'
        fakeBody.appendChild(testElement)
        docEl.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            docEl.classList.add('hairlines')
        }
        docEl.removeChild(fakeBody)
    };
}(window, document))

// 手机端顶部菜单展开与收起
    $(".more").click(function(){
        $(".nav_mobile").toggle();
    })
    // 手机端顶部菜单位置
    function navPosation(){
        $(".nav_mobile").css("top",$(".nav").innerHeight()+'px')
    }
    navPosation()
    // 产品页手机端分类菜单展开按钮
    $(".ph_class_btn").click(function(){
        $(".ph_classification").toggle();
    })
    // 产品页手机端分类二级菜单
    $(".ph_classification_title").click(function(){
        $(this).next(".subTitle").toggle().siblings(".subTitle").hide()
    })
    $(".secondNav li").click(function(){
        $(this).addClass("underline")
    })
    // 中英文切换
    var dict = {
        "Home": {
            en:"HOME",
            ch: "首　页"
        },
        "Product":{
            en:"PRODUCT",
            ch:"产　品"
        },
        "Industry":{
            en:"INDUSTRY",
            ch:"行　业"
        },
        "Information":{
            en:"INFORMATION",
            ch:"消　息"
        },
        "Case":{
            en:"CASE",
            ch:"案　例"
        },
        "Aboutus":{
            en:"ABOUT US",
            ch:"关于我们"
        },
        "Contact":{
            en:"CONTACT US",
            ch:"联系我们"
        },
        "Address":{
            en:"9/F, Fuzhong International Plaza, No.72 XinHua Road,Nanming District, Guiyang, Guizhou,China, 550001",
            ch:"地址：贵州省贵阳市南明区新华路72号富中国际广场9楼F座"
        },
        "Toptools":{
            en:"Top Hammer Drilling Tools",
            ch:"顶锤式凿岩钻具"
        },
            "Drifting":{
                en:"Drifting and Tunneling",
                ch:"掘进和隧道"
            },
            "Bench":{
                en:"Bench Drilling",
                ch:"中深孔钻具"
            },
            "Shank":{
                en:"Shank Adaptor",
                ch:"钎尾"
            },
            "H-thread":{
                en:"H-Thread Drilling Tools",
                ch:"H 螺纹钻具"
            },
            "Tapered":{
                en:"Tapered Drilling Tools",
                ch:"锥度钻具"
            },
            "Integral":{
                en:"Integral Drill Rod",
                ch:"整体钎"
            },
        "Dthtools":{
            en:"DTH Drilling Tools",
            ch:"潜孔钻具"
        },
            "Downhammer":{
                en:"Down the Hole Hammer",
                ch:"潜孔冲击器"
            },
            "Downbit":{
                en:"Down The Hole Bit",
                ch:"潜孔钻头"
            },
            "Dthpipes":{
                en:"DTH Drill Pipes",
                ch:"钻杆"
            },
            "Reverse":{
                en:"Reverse Circulation Hammer and Bits",
                ch:"反循环冲击器"
            },
        "Overburden":{
            en:"Overburden Drilling System",
            ch:"跟管钻具"
        },
            "Eccentric":{
                en:"Eccentric Overburden Drilling System",
                ch:"偏心钻具"
            },
            "Concentric":{
                en:"Concentric Overburden Drilling System",
                ch:"同心钻具"
            },
            "Casing":{
                en:"Casing Tubes",
                ch:"管靴"
            },
        "Self-drilling":{
            en:"Self-Drilling Anchor System",
            ch:"锚固钻具"
        },
        "Tapholetools":{
            en:"Taphole Drilling Tools",
            ch:"高炉开口钻具"
        },
            "Tapholebit":{
                en:"Taphole Drill Bit",
                ch:"高炉开口钻头"
            },
            "Tapholerod":{
                en:"Taphole Drill Rod",
                ch:"高炉开口钻杆"
            },
        "Marbletools":{
            en:"Marble and Granite Drilling Tools",
            ch:"大理石和花岗岩凿岩工具"
        },
            "Rock":{
                en:"Rock Drills",
                ch:"凿岩机"
            },
            "Otherstone":{
                en:"Other Stone Breaking Tools",
                ch:"石材破碎工具"
            },
        "Others":{
            en:"Others",
            ch:"其他"
        },
        "Impregnated":{
            en:"Impregnated Diamond Bits",
            ch:"金刚石钻具"
        },
        "HDDpipe":{
            en:"HDD drill pipe",
            ch:"非开挖钻具"
        },
        "Recommed":{
            en:"RECOMMENDED PRODUCTS",
            ch:"产品推荐"
        },
        "Expand":{
            en:"Expand",
            ch:"展开"
        },
        "Mining":{
            en:"MINING",
            ch:"矿山"
        },
        "Mining_txt":{
            en:"For Mining Industry,there are various of tools suitable in this area as below:Tapered Drilling toolsBench DrillingShank AdaptorDrifting & TunnelingDTH Drilling Tools",
            ch:"对于采矿业，将会使用到以下钻具：锥度钻具 中深孔钻具 钎尾掘进和隧道钻具 潜孔钻具"
        },
        "Pilling":{
            en:"PILLING",
            ch:"打桩"
        },
        "Pilling_txt":{
            en:"For Pilling Industry,there are various of tools suitable in this area as below: DTH Drilling ToolsOverburden Drilling System Self-Drilling Anchor System",
            ch:"对于打桩项目，将会使用到以下钻具：潜孔钻具 跟管钻具 锚固钻具"
        },
        "Quarry":{
            en:"QUARRY AND AGGREGATE",
            ch:"采石"
        },
        "Quarry_txt":{
            en:"For Quarry and Aggregate Industry,there are various of tools suitable in this area as below:Tapered drilling toolsH-Thread Drilling ToolsBench DrillingDTH Drilling ToolsOverburden Drilling System",
            ch:"对于采石项目，将会使用到以下钻具：锥度钻具 H螺纹钻具中深孔钻具 潜孔钻具 跟管钻具"
        },
        "Tunneling":{
            en:"TUNNELING",
            ch:"隧道"
        },
        "Tunneling_txt":{
            en:"For Tunneling Industry,there are various of tools suitable in this area as below:Drifting & TunnelingDTH Drilling ToolsOverburden Drilling SystemSelf-Drilling Anchor System",
            ch:"对于隧道项目，将会使用到如下钻具：掘进和隧道钻具 跟管钻具 锚固钻具"
        },
        "Water":{
            en:"WATER WELL DRILLING",
            ch:"水井"
        },
        "Water_txt":{
            en:"For Water Well Industry,there are various of tools suitable in this area as below:DTH Drilling Tools Overburden Drilling System",
            ch:"对于水井项目，将会使用到如下钻具：潜孔钻具 跟管钻具"
        },
        "Construction":{
            en:"CONSTRUCTION",
            ch:"建筑"
        },
        "Construction_txt":{
            en:"For Construction Industry,there are various of tools suitable in this area as below:DTH Drilling ToolsTapered Drilling Tools H-Thread Drilling Tools Bench Drilling Shank Adapter Self-Drilling AnchorSystem HDD Drill Pipe",
            ch:"对于建筑项目，将会使用到如下钻具：潜孔钻具 锥度钻具 H螺纹钻具 中深孔钻具 钎尾 锚固钻具 非开挖钻具"
        },
        "Enterrrise":{
            en:"ENTERPRISE NEWS",
            ch:"公司新闻"
        },
        "Exhibition":{
            en:"EXHIBITION",
            ch:"展会行程"
        },
        "Industry":{
            en:"INDUSTRY NEWS",
            ch:"行业信息"
        },
        "Details":{
            en:"Details",
            ch:"详情"
        },
        "Kemaico":{
            en:"KEMAICO GROUP",
            ch:"科迈集团"
        },
        "Establish":{
            en:"ESTABLISH",
            ch:"建立"
        },
        "Kemaico_txt":{
            en:"Kemaico has a strong research team, and engages the famous experts and pro-fessor as technical advisor, who are in charge of the development, test and pro-motion for new material, new technique and new products. At the same time, we keep the close cooperation relationship with the universities and institutes of scientific research, and have developed many new products which are well received from our end users.",
            ch:"贵阳科迈机械设备有限公司，是集研发、生产、销售为一体的集团化公司，致力于建立完善的服务体系，是专业的进出口贸易并拥有自己实体的集团式公司，致力于向矿山、工程、水利等提供设备、工具、服务等，公司自2005年成立以来，不断积累凿岩钎具的设计和制造经验，同时通过引进欧洲先进的钎具制造技术和不断的技术改造，提升了企业的钎具制造水平和企业实力，产品质量和综合配套能力在中国钎具行业一直处于“排头兵”位置。"
        },
        "Maxdrilltools":{
            en:"MAXDRILL ROCK TOOLS",
            ch:"迈锐钻探工厂"
        },
        "Maxdrilltools_txt":{
            en:"Since 2005, Maxdrill Rock Tools has been striving to ma-nufacture high quality rock drilling tools and rock anch-oring for globe customers in mineral exploration, unde-rground mining in soft and hard rock, surface mining a-nd construction, tunneling, slope stabilization industry and etc. And we gradually become one of the most cre-dible Chinese manufacturers in the industry.",
            ch:"随着集团公司的贸易范围及进出口业务不断扩大，迈锐钻探同时也在稳步发展和壮大，2011年更全新投入资金建设占地约30亩的新厂区用于扩大生产，工厂新址地处贵阳市修文县，占地20000余平方米。在新厂区的规划中，有数幢标准化厂房，科研大楼、员工宿舍等齐全的设施，并聚集了一支实力较强的科研队伍，建立了相应的研发部门，同时聘请了国内钎具行业的知名专家、教授为顾问。设立新产品研发技术中心，负责钎具新材料、新技术、新产品的开发、试验、推广工作。同时与各高等院校及科研单位建立科研联合体或项目合作，共同研究并开发钎具新技术，并为客户提供节能（Energy-saving），经济（Economic）、高效（Effective）的凿岩钻具。与总公司共同努力打造一个国际钻具品牌和钻具生产基地，为全球凿岩领域客户减少购买成本和使用成本。"
        },
        "Kemaicousa":{
            en:"KEMAICO USA CORPORATION ",
            ch:"美国分公司"
        },
        "Kemaicousa_txt":{
            en:"In order to better serve our global customers, we established the US branch in 2013. We use high quality raw materials and the latest production technologies to ensure our products withstand even the toughest conditions. As an ISO9001:2008 certified company; we maintain consistent quality for our products. Moreover our network of sales and marketing teams strives to service our clients in a timely and professional manner. Kemaico products are used consistently in North America, South America, Europe, Africa, Asia and Australia.",
            ch:"为更好服务全球客户，2013年我们成立了美国分公司. 我们使用高品质的原材料和最新的生产技术，确保我们的产品即使在最恶劣的条件下也能承受。作为ISO9001：2008认证公司; 我们的产品质量始终如一。此外，我们的销售和营销团队网络致力于以及时和专业的方式为客户提供服务。 Kemaico产品遍布应用在北美，南美，欧洲，非洲，亚洲和澳大利亚。"
        },
        "Jobfield":{
            en:"JOB FIELD",
            ch:"工作领域"
        },
        "Partner":{
            en:"PARTNER",
            ch:"合作伙伴"
        },
        "Exports":{
            en:"EXPORTS",
            ch:"出口商品"
        },
        "Certificate":{
            en:"CERTIFICATE",
            ch:"证书"
        },
        "Intellectual":{
            en:"INTELLECTUAL PROPERTY MANAGEMENT SYSTEM CERTIFICATE",
            ch:"知识产权管理体系"
        },
        "Intellectual_txt":{
            en:"The intellectual property management system certification is to standardize intellectual property certification activities, improve their effectiveness.",
            ch:"知识产权管理体系爱认证是为了规范知识产权认证活动，提高其有效性。"
        },
        "Iso":{
            en:"ISO CERTIFICATE",
            ch:"ISO证书"
        },
        "Iso_txt":{
            en:"Our company passed the standard of quality management system of ISO 90012008 approval.",
            ch:"公司通过iso9001-2008质量管理体系认证标准"
        },
        "Ourfactory":{
            en:"OUR FACTORY",
            ch:"我们的工厂"
        },
        "Ourfactory_txt":{
            en:"Maxdrill Rock Tools Company is a prof-essional drilling tools manufacturer and supplier based on international leading technology，qulified imported material and advanced production process.",
            ch:"迈锐钻具有限公司是一家以国际领先的技术、优质的进口材料和先进的生产工艺为基础的专业钻具制造商和供应商。"
        },
        "CompanyAdd":{
            en:"COMPANY ADDRESS",
            ch:"公司地址"
        },
        "Kadd":{
            en:"ADD:",
            ch:"地址:"
        },
        "Kadd_txt":{
            en:"9/F, Fuzhong International Plaza, No.72 Xinhua Road, Nanming District, Guiyang, China (550001)",
            ch:"贵州省贵阳市南明区新华路72号富中国际广场9楼F座"
        },
        "Tel":{
            en:"TEL:",
            ch:"电话:"
        },
        "Add2":{
            en:" ",
            ch:"贵州工厂地址："
        },
        "Add2_txt":{
            en:" ",
            ch:"贵州省贵阳市修文县久长镇上寨村"
        },
        "Add3":{
            en:" ",
            ch:"辽宁工厂地址："
        },
        "Add3_txt":{
            en:" ",
            ch:"辽宁省葫芦岛市连山区打渔山园区渔山路51号"
        },
        "Email":{
            en:"EMAIL:",
            ch:"邮箱:"
        },
        "yougei":{
            en:"You give us how much trust we will give you how much surprise",
            ch:"你给我们多少信任，我们就会给你多少惊喜"
        },
        "Send":{
            en:"SEND",
            ch:"发送"
        }
    }

    var _t=$("body").translate({
        lang:"en",
        t:dict
    })

    var str = _t.g("translate");
    // console.log(str);
    $(".change_lang").click(function(ev){
        var lang = $(this).attr("data-value");
        localStorage.setItem("lang",lang)
        _t.lang(lang);

        // switch map
        if(lang=="ch"){
            $("#baiduMap").css("display","block")
            $(".address_img").css("display","none")
        }else{
            $("#baiduMap").css("display","none")
            $(".address_img").css("display","block")
        }
    })
    if(localStorage.getItem("lang")){
        var lang=localStorage.getItem("lang")
        _t.lang(lang);
        if(lang=="ch"){
            $(".name_input").attr("placeholder","你的名字")
            $(".email_input").attr("placeholder","邮箱");
            $(".phone_input").attr("placeholder","电话")
            $(".company_input").attr("placeholder","公司")
            $(".title_input").attr("placeholder","标题")
            $(".content_input").attr("placeholder","内容")
            // switch map
            $("#baiduMap").css("display","block")
            $(".address_img").css("display","none")
        }else{
            $(".name_input").attr("placeholder","Your Name")
            $(".email_input").attr("placeholder","Email");
            $(".phone_input").attr("placeholder","Phone")
            $(".company_input").attr("placeholder","Company")
            $(".title_input").attr("placeholder","Title")
            $(".content_input").attr("placeholder","Content")
            // switch map
            $("#baiduMap").css("display","none")
            $(".address_img").css("display","block")
        }
    }
    