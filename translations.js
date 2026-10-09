/* ==========================================================================
   TRANSLATIONS — Docklands Flood Safety
   --------------------------------------------------------------------------
   ⚠️  IMPORTANT: ALL NON-ENGLISH TRANSLATIONS WERE DRAFTED WITHOUT A NATIVE
   SPEAKER AND MUST BE REVIEWED BY A NATIVE SPEAKER BEFORE GOING LIVE.
   Safety wording matters: an awkward or wrong translation could confuse
   someone in an emergency.
   --------------------------------------------------------------------------
   How it works
   - Every language is keyed by its code ("en", "zh", ...). The codes must
     match the LANGUAGES list in script.js.
   - English ("en") is the master copy. If a key is missing in another
     language, the English text is shown instead.
   - To add a language: copy the whole "en" block, change the key, translate
     the text, then add the language to LANGUAGES in script.js.
   - Lists (items: [...]) can have any number of bullet points.
   - Phone numbers are NOT in this file; they are in safety.html.

   TODO (fact check against current VicSES / VicEmergency advice):
   - during.items "Keep away from underground car parks, basements and
     underpasses" — sensible for Docklands but confirm VicSES wording.
   - emergency.interpreter — TIS National 131 450 is listed by VicEmergency
     for interpreter help; confirm it is still current.
   ========================================================================== */

window.TRANSLATIONS = {
  /* ------------------------------------------------------------------ EN */
  en: {
    appName: "Docklands Flood Safety",
    tagline: "Know what to do if it floods.",
    skip: "Skip to main content",
    emergencyShort: "Emergency? Call 000",
    noscript: "This page works best with JavaScript turned on.",

    // index.html
    whereAreYou: "Where are you?",
    scannedAt: "You scanned the sign at",
    notHere: "Not here? Change location",
    whereHint: "Choose the sign nearest to you.",
    langQuestion: "Which language do you prefer?",
    continue: "Continue",

    // safety.html
    locationLabel: "Location",
    defaultLocation: "Docklands, Melbourne",
    changeLink: "Change location or language",
    languageLabel: "Language",
    call000: "Call 000",

    emergency: {
      title: "Emergency contacts",
      lifeThreat: "Life-threatening emergency",
      ses: "VicSES flood and storm help",
      hotline: "VicEmergency Hotline",
      interpreter: "Need an interpreter? TIS National",
      warnings: "Live warnings: VicEmergency website and app"
    },

    prepare: {
      title: "Prepare before a flood",
      items: [
        "Know where your nearest higher ground is and how to get there.",
        "Keep an emergency kit: drinking water, torch, phone charger, medications and important documents.",
        "Add a first aid kit and a battery-powered radio with spare batteries.",
        "Sign up for warnings: download the VicEmergency app.",
        "Move valuables, electrical items and chemicals up high.",
        "Make a plan with your family: where to meet and who to call."
      ]
    },

    during: {
      title: "What to do during a flood",
      items: [
        "Move to higher ground straight away.",
        "Follow official warnings and instructions from emergency services.",
        "If you are told to evacuate, leave immediately.",
        "Stay away from the river edge, drains and stormwater channels.",
        "Keep away from underground car parks, basements and underpasses.",
        "Check VicEmergency for updates and listen to local ABC radio.",
        "If you are trapped by floodwater, call 000."
      ]
    },

    dont: {
      title: "What NOT to do",
      items: [
        "Never walk, ride or drive through floodwater. If it's flooded, forget it.",
        "Don't let children play in or near floodwater.",
        "Don't touch fallen powerlines or electrical equipment in water. Stay well away.",
        "Don't eat food that has touched floodwater."
      ]
    },

    hazards: {
      title: "Hazards to watch for",
      intro: "Floodwater can be more dangerous than it looks.",
      fast: { t: "Fast-moving water", d: "It can sweep you off your feet, even when it looks shallow." },
      debris: { t: "Hidden debris", d: "Branches, rubbish and other objects can be hidden under the water." },
      drains: { t: "Open drains and manholes", d: "Covers can lift off, leaving holes you can't see." },
      contaminated: { t: "Contaminated water", d: "Floodwater may contain sewage and chemicals. Wash your hands after contact." },
      slippery: { t: "Slippery surfaces", d: "Mud and wet paths, ramps and steps can be very slippery." },
      electrical: { t: "Electrical hazards", d: "Water and electricity together are deadly. Stay away from powerlines." }
    },

    footer: {
      text: "Information based on VicSES flood safety advice. This is a student project, always follow official emergency instructions.",
      link: "VicSES website"
    }
  },

  /* ------------------------------------------------------------------ ZH (Simplified Chinese) — NEEDS NATIVE REVIEW */
  zh: {
    appName: "达克兰兹洪水安全",
    tagline: "了解洪水来临时该怎么做。",
    skip: "跳到主要内容",
    emergencyShort: "紧急情况？请拨打 000",
    noscript: "请开启 JavaScript 以获得最佳体验。",

    whereAreYou: "您在哪里？",
    scannedAt: "您扫描的标识位于",
    notHere: "不在这里？更改地点",
    whereHint: "请选择离您最近的标识。",
    langQuestion: "您希望使用哪种语言？",
    continue: "继续",

    locationLabel: "地点",
    defaultLocation: "墨尔本达克兰兹",
    changeLink: "更改地点或语言",
    languageLabel: "语言",
    call000: "拨打 000",

    emergency: {
      title: "紧急联系方式",
      lifeThreat: "危及生命的紧急情况",
      ses: "VicSES 洪水和风暴求助",
      hotline: "VicEmergency 热线",
      interpreter: "需要口译员？请致电 TIS National",
      warnings: "实时预警：VicEmergency 网站和应用程序"
    },

    prepare: {
      title: "洪水前做好准备",
      items: [
        "了解离您最近的高地在哪里，以及如何前往。",
        "准备应急包：饮用水、手电筒、手机充电器、药品和重要文件。",
        "再加上急救箱，以及带备用电池的电池收音机。",
        "订阅预警：下载 VicEmergency 应用程序。",
        "把贵重物品、电器和化学品放到高处。",
        "与家人制定计划：在哪里会合、联系谁。"
      ]
    },

    during: {
      title: "洪水期间该怎么做",
      items: [
        "立即转移到高地。",
        "遵循官方预警和紧急服务人员的指示。",
        "如果被要求撤离，请立即离开。",
        "远离河边、排水沟和雨水渠。",
        "远离地下停车场、地下室和地下通道。",
        "通过 VicEmergency 和 ABC 本地电台获取最新信息。",
        "如果被洪水困住，请拨打 000。"
      ]
    },

    dont: {
      title: "切勿这样做",
      items: [
        "切勿步行、骑车或驾车穿越洪水。If it's flooded, forget it——遇到积水，切勿通过。",
        "不要让儿童在洪水中或洪水附近玩耍。",
        "不要触碰倒下的电线或水中的电器设备，请远离。",
        "不要食用接触过洪水的食物。"
      ]
    },

    hazards: {
      title: "注意以下危险",
      intro: "洪水往往比看起来更危险。",
      fast: { t: "湍急的水流", d: "即使看起来很浅，也可能把人冲倒。" },
      debris: { t: "隐藏的杂物", d: "树枝、垃圾等物体可能藏在水下。" },
      drains: { t: "敞开的排水口和检修井", d: "井盖可能被冲开，留下看不见的洞。" },
      contaminated: { t: "受污染的水", d: "洪水可能含有污水和化学品。接触后请洗手。" },
      slippery: { t: "湿滑的地面", d: "泥泞和潮湿的道路、坡道和台阶可能非常滑。" },
      electrical: { t: "触电危险", d: "水和电在一起会致命。请远离电线。" }
    },

    footer: {
      text: "信息基于 VicSES 洪水安全建议。这是一个学生项目，请始终遵循官方紧急指示。",
      link: "VicSES 网站"
    }
  },

  /* ------------------------------------------------------------------ VI (Vietnamese) — NEEDS NATIVE REVIEW */
  vi: {
    appName: "An toàn lũ lụt Docklands",
    tagline: "Biết cần làm gì khi có lũ.",
    skip: "Chuyển đến nội dung chính",
    emergencyShort: "Khẩn cấp? Gọi 000",
    noscript: "Trang này hoạt động tốt nhất khi bật JavaScript.",

    whereAreYou: "Bạn đang ở đâu?",
    scannedAt: "Bạn đã quét biển báo tại",
    notHere: "Không phải ở đây? Đổi địa điểm",
    whereHint: "Chọn biển báo gần bạn nhất.",
    langQuestion: "Bạn muốn dùng ngôn ngữ nào?",
    continue: "Tiếp tục",

    locationLabel: "Địa điểm",
    defaultLocation: "Docklands, Melbourne",
    changeLink: "Đổi địa điểm hoặc ngôn ngữ",
    languageLabel: "Ngôn ngữ",
    call000: "Gọi 000",

    emergency: {
      title: "Số liên lạc khẩn cấp",
      lifeThreat: "Trường hợp khẩn cấp đe dọa tính mạng",
      ses: "VicSES hỗ trợ khi có lũ và bão",
      hotline: "Đường dây nóng VicEmergency",
      interpreter: "Cần thông dịch viên? Gọi TIS National",
      warnings: "Cảnh báo trực tiếp: trang web và ứng dụng VicEmergency"
    },

    prepare: {
      title: "Chuẩn bị trước khi có lũ",
      items: [
        "Biết nơi đất cao gần nhất và cách đến đó.",
        "Chuẩn bị túi khẩn cấp: nước uống, đèn pin, sạc điện thoại, thuốc men và giấy tờ quan trọng.",
        "Thêm hộp sơ cứu và radio chạy pin cùng pin dự phòng.",
        "Đăng ký nhận cảnh báo: tải ứng dụng VicEmergency.",
        "Để đồ có giá trị, đồ điện và hóa chất lên cao.",
        "Lập kế hoạch với gia đình: gặp nhau ở đâu và gọi cho ai."
      ]
    },

    during: {
      title: "Cần làm gì khi có lũ",
      items: [
        "Di chuyển ngay lên chỗ đất cao.",
        "Làm theo cảnh báo chính thức và hướng dẫn của lực lượng khẩn cấp.",
        "Nếu được yêu cầu sơ tán, hãy rời đi ngay.",
        "Tránh xa bờ sông, cống rãnh và kênh thoát nước mưa.",
        "Tránh xa bãi đậu xe ngầm, tầng hầm và đường hầm.",
        "Theo dõi cập nhật trên VicEmergency và nghe đài ABC địa phương.",
        "Nếu bị nước lũ vây, hãy gọi 000."
      ]
    },

    dont: {
      title: "Những điều KHÔNG được làm",
      items: [
        "Không bao giờ đi bộ, đạp xe hoặc lái xe qua nước lũ. If it's flooded, forget it — đường ngập thì đừng đi.",
        "Không để trẻ em chơi trong hoặc gần nước lũ.",
        "Không chạm vào dây điện bị đứt hoặc thiết bị điện trong nước. Hãy tránh xa.",
        "Không ăn thực phẩm đã tiếp xúc với nước lũ."
      ]
    },

    hazards: {
      title: "Những mối nguy cần chú ý",
      intro: "Nước lũ có thể nguy hiểm hơn vẻ bề ngoài.",
      fast: { t: "Nước chảy xiết", d: "Có thể cuốn bạn ngã, ngay cả khi nước trông có vẻ nông." },
      debris: { t: "Vật cản bị che khuất", d: "Cành cây, rác và đồ vật có thể nằm ẩn dưới nước." },
      drains: { t: "Cống và hố ga mở", d: "Nắp có thể bị bật ra, để lại hố mà bạn không thấy." },
      contaminated: { t: "Nước bị ô nhiễm", d: "Nước lũ có thể chứa nước thải và hóa chất. Rửa tay sau khi tiếp xúc." },
      slippery: { t: "Bề mặt trơn trượt", d: "Bùn, lối đi, dốc và bậc thang ướt có thể rất trơn." },
      electrical: { t: "Nguy hiểm về điện", d: "Nước và điện kết hợp có thể gây tử vong. Tránh xa dây điện." }
    },

    footer: {
      text: "Thông tin dựa trên lời khuyên an toàn lũ lụt của VicSES. Đây là dự án của sinh viên, hãy luôn làm theo hướng dẫn khẩn cấp chính thức.",
      link: "Trang web VicSES"
    }
  },

  /* ------------------------------------------------------------------ HI (Hindi) — NEEDS NATIVE REVIEW */
  hi: {
    appName: "डॉकलैंड्स बाढ़ सुरक्षा",
    tagline: "जानें कि बाढ़ आने पर क्या करना है।",
    skip: "मुख्य सामग्री पर जाएँ",
    emergencyShort: "आपात स्थिति? 000 पर कॉल करें",
    noscript: "यह पेज JavaScript चालू होने पर सबसे अच्छा काम करता है।",

    whereAreYou: "आप कहाँ हैं?",
    scannedAt: "आपने इस जगह का साइन स्कैन किया है:",
    notHere: "आप यहाँ नहीं हैं? स्थान बदलें",
    whereHint: "अपने सबसे नज़दीकी साइन को चुनें।",
    langQuestion: "आप कौन सी भाषा पसंद करते हैं?",
    continue: "आगे बढ़ें",

    locationLabel: "स्थान",
    defaultLocation: "डॉकलैंड्स, मेलबर्न",
    changeLink: "स्थान या भाषा बदलें",
    languageLabel: "भाषा",
    call000: "000 पर कॉल करें",

    emergency: {
      title: "आपातकालीन संपर्क",
      lifeThreat: "जानलेवा आपात स्थिति",
      ses: "बाढ़ और तूफ़ान में VicSES सहायता",
      hotline: "VicEmergency हॉटलाइन",
      interpreter: "दुभाषिया चाहिए? TIS National को कॉल करें",
      warnings: "लाइव चेतावनियाँ: VicEmergency वेबसाइट और ऐप"
    },

    prepare: {
      title: "बाढ़ से पहले तैयारी करें",
      items: [
        "जानें कि सबसे नज़दीकी ऊँची जगह कहाँ है और वहाँ कैसे पहुँचें।",
        "आपातकालीन किट रखें: पीने का पानी, टॉर्च, फ़ोन चार्जर, दवाइयाँ और ज़रूरी दस्तावेज़।",
        "प्राथमिक चिकित्सा किट और अतिरिक्त बैटरियों के साथ बैटरी वाला रेडियो भी रखें।",
        "चेतावनियाँ पाएँ: VicEmergency ऐप डाउनलोड करें।",
        "कीमती सामान, बिजली के उपकरण और रसायन ऊँचाई पर रखें।",
        "परिवार के साथ योजना बनाएँ: कहाँ मिलना है और किसे कॉल करना है।"
      ]
    },

    during: {
      title: "बाढ़ के दौरान क्या करें",
      items: [
        "तुरंत ऊँची जगह पर जाएँ।",
        "आधिकारिक चेतावनियों और आपातकालीन सेवाओं के निर्देशों का पालन करें।",
        "अगर आपको जगह खाली करने को कहा जाए, तो तुरंत निकल जाएँ।",
        "नदी के किनारे, नालियों और बरसाती नालों से दूर रहें।",
        "भूमिगत कार पार्क, बेसमेंट और अंडरपास से दूर रहें।",
        "ताज़ा जानकारी के लिए VicEmergency देखें और स्थानीय ABC रेडियो सुनें।",
        "अगर आप बाढ़ के पानी में फँस जाएँ, तो 000 पर कॉल करें।"
      ]
    },

    dont: {
      title: "क्या नहीं करना है",
      items: [
        "बाढ़ के पानी में से कभी पैदल न चलें, साइकिल न चलाएँ या गाड़ी न चलाएँ। If it's flooded, forget it — पानी भरा हो तो उधर न जाएँ।",
        "बच्चों को बाढ़ के पानी में या उसके पास खेलने न दें।",
        "गिरी हुई बिजली की तारों या पानी में पड़े बिजली के उपकरणों को न छुएँ। उनसे दूर रहें।",
        "बाढ़ के पानी के संपर्क में आया खाना न खाएँ।"
      ]
    },

    hazards: {
      title: "इन खतरों से सावधान रहें",
      intro: "बाढ़ का पानी दिखने से ज़्यादा खतरनाक हो सकता है।",
      fast: { t: "तेज़ बहता पानी", d: "यह आपको गिराकर बहा सकता है, भले ही पानी कम गहरा दिखे।" },
      debris: { t: "छिपा हुआ मलबा", d: "पेड़ की डालियाँ, कचरा और दूसरी चीज़ें पानी के नीचे छिपी हो सकती हैं।" },
      drains: { t: "खुली नालियाँ और मैनहोल", d: "ढक्कन हट सकते हैं, जिससे ऐसे गड्ढे बन जाते हैं जो दिखाई नहीं देते।" },
      contaminated: { t: "दूषित पानी", d: "बाढ़ के पानी में सीवेज और रसायन हो सकते हैं। संपर्क के बाद हाथ धोएँ।" },
      slippery: { t: "फिसलन भरी सतहें", d: "कीचड़ और गीले रास्ते, ढलान और सीढ़ियाँ बहुत फिसलन भरी हो सकती हैं।" },
      electrical: { t: "बिजली के खतरे", d: "पानी और बिजली साथ में जानलेवा हैं। बिजली की तारों से दूर रहें।" }
    },

    footer: {
      text: "यह जानकारी VicSES की बाढ़ सुरक्षा सलाह पर आधारित है। यह एक छात्र परियोजना है, हमेशा आधिकारिक आपातकालीन निर्देशों का पालन करें।",
      link: "VicSES वेबसाइट"
    }
  },

  /* ------------------------------------------------------------------ AR (Arabic, right-to-left) — NEEDS NATIVE REVIEW */
  ar: {
    appName: "السلامة من الفيضانات في دوكلاندز",
    tagline: "اعرف ماذا تفعل عند حدوث فيضان.",
    skip: "انتقل إلى المحتوى الرئيسي",
    emergencyShort: "حالة طوارئ؟ اتصل بالرقم 000",
    noscript: "تعمل هذه الصفحة بشكل أفضل عند تفعيل JavaScript.",

    whereAreYou: "أين أنت؟",
    scannedAt: "لقد مسحت اللافتة الموجودة في",
    notHere: "لست هنا؟ غيّر الموقع",
    whereHint: "اختر اللافتة الأقرب إليك.",
    langQuestion: "ما اللغة التي تفضلها؟",
    continue: "متابعة",

    locationLabel: "الموقع",
    defaultLocation: "دوكلاندز، ملبورن",
    changeLink: "تغيير الموقع أو اللغة",
    languageLabel: "اللغة",
    call000: "اتصل بالرقم 000",

    emergency: {
      title: "أرقام الطوارئ",
      lifeThreat: "حالة طوارئ تهدد الحياة",
      ses: "مساعدة VicSES في الفيضانات والعواصف",
      hotline: "الخط الساخن VicEmergency",
      interpreter: "تحتاج إلى مترجم؟ اتصل بـ TIS National",
      warnings: "تحذيرات مباشرة: موقع وتطبيق VicEmergency"
    },

    prepare: {
      title: "استعد قبل الفيضان",
      items: [
        "اعرف أقرب مكان مرتفع إليك وكيف تصل إليه.",
        "احتفظ بحقيبة طوارئ: مياه للشرب، مصباح يدوي، شاحن للهاتف، أدوية ووثائق مهمة.",
        "أضف حقيبة إسعافات أولية وراديو يعمل بالبطاريات مع بطاريات احتياطية.",
        "اشترك في التحذيرات: نزّل تطبيق VicEmergency.",
        "ارفع الأشياء الثمينة والأجهزة الكهربائية والمواد الكيميائية إلى مكان مرتفع.",
        "ضع خطة مع عائلتك: أين تلتقون وبمن تتصلون."
      ]
    },

    during: {
      title: "ماذا تفعل أثناء الفيضان",
      items: [
        "انتقل إلى مكان مرتفع فورًا.",
        "اتبع التحذيرات الرسمية وتعليمات خدمات الطوارئ.",
        "إذا طُلب منك الإخلاء، فغادر فورًا.",
        "ابتعد عن ضفة النهر وفتحات التصريف وقنوات مياه الأمطار.",
        "ابتعد عن مواقف السيارات تحت الأرض والأقبية والأنفاق.",
        "تابع آخر المستجدات على VicEmergency واستمع إلى إذاعة ABC المحلية.",
        "إذا حاصرتك مياه الفيضان، اتصل بالرقم 000."
      ]
    },

    dont: {
      title: "ما يجب ألّا تفعله",
      items: [
        "لا تمشِ أو تركب دراجة أو تقد سيارة عبر مياه الفيضان أبدًا. \u2068If it's flooded, forget it\u2069 — إذا كان الطريق مغمورًا بالمياه، فلا تعبره.",
        "لا تدع الأطفال يلعبون في مياه الفيضان أو بالقرب منها.",
        "لا تلمس خطوط الكهرباء الساقطة أو الأجهزة الكهربائية الموجودة في الماء. ابتعد عنها.",
        "لا تأكل الطعام الذي لامس مياه الفيضان."
      ]
    },

    hazards: {
      title: "مخاطر يجب الانتباه إليها",
      intro: "قد تكون مياه الفيضان أخطر مما تبدو.",
      fast: { t: "المياه سريعة الجريان", d: "قد تجرفك وتُسقطك حتى لو بدت ضحلة." },
      debris: { t: "الحطام المخفي", d: "قد تكون الأغصان والنفايات وأشياء أخرى مخفية تحت الماء." },
      drains: { t: "فتحات التصريف والمجاري المكشوفة", d: "قد ترتفع الأغطية وتترك حفرًا لا يمكنك رؤيتها." },
      contaminated: { t: "المياه الملوثة", d: "قد تحتوي مياه الفيضان على مياه الصرف الصحي ومواد كيميائية. اغسل يديك بعد ملامستها." },
      slippery: { t: "الأسطح الزلقة", d: "قد يكون الطين والممرات والمنحدرات والسلالم المبللة زلقة جدًا." },
      electrical: { t: "مخاطر كهربائية", d: "اجتماع الماء والكهرباء قاتل. ابتعد عن خطوط الكهرباء." }
    },

    footer: {
      text: "المعلومات مستندة إلى نصائح VicSES للسلامة من الفيضانات. هذا مشروع طلابي، اتبع دائمًا تعليمات الطوارئ الرسمية.",
      link: "موقع VicSES"
    }
  },

  /* ------------------------------------------------------------------ ID (Bahasa Indonesia) — NEEDS NATIVE REVIEW */
  id: {
    appName: "Keselamatan Banjir Docklands",
    tagline: "Ketahui apa yang harus dilakukan saat banjir.",
    skip: "Langsung ke konten utama",
    emergencyShort: "Darurat? Telepon 000",
    noscript: "Halaman ini berfungsi paling baik dengan JavaScript aktif.",

    whereAreYou: "Anda di mana?",
    scannedAt: "Anda memindai papan di",
    notHere: "Bukan di sini? Ganti lokasi",
    whereHint: "Pilih papan yang paling dekat dengan Anda.",
    langQuestion: "Bahasa apa yang Anda inginkan?",
    continue: "Lanjut",

    locationLabel: "Lokasi",
    defaultLocation: "Docklands, Melbourne",
    changeLink: "Ganti lokasi atau bahasa",
    languageLabel: "Bahasa",
    call000: "Telepon 000",

    emergency: {
      title: "Kontak darurat",
      lifeThreat: "Keadaan darurat yang mengancam jiwa",
      ses: "Bantuan banjir dan badai VicSES",
      hotline: "Hotline VicEmergency",
      interpreter: "Perlu juru bahasa? Telepon TIS National",
      warnings: "Peringatan langsung: situs web dan aplikasi VicEmergency"
    },

    prepare: {
      title: "Bersiap sebelum banjir",
      items: [
        "Ketahui di mana tempat tinggi terdekat dan cara menuju ke sana.",
        "Siapkan tas darurat: air minum, senter, pengisi daya ponsel, obat-obatan, dan dokumen penting.",
        "Tambahkan kotak P3K dan radio bertenaga baterai dengan baterai cadangan.",
        "Daftar untuk peringatan: unduh aplikasi VicEmergency.",
        "Pindahkan barang berharga, peralatan listrik, dan bahan kimia ke tempat tinggi.",
        "Buat rencana bersama keluarga: tempat berkumpul dan siapa yang harus dihubungi."
      ]
    },

    during: {
      title: "Apa yang harus dilakukan saat banjir",
      items: [
        "Segera pindah ke tempat yang lebih tinggi.",
        "Ikuti peringatan resmi dan instruksi dari layanan darurat.",
        "Jika Anda diminta mengungsi, segera pergi.",
        "Jauhi tepi sungai, selokan, dan saluran air hujan.",
        "Jauhi tempat parkir bawah tanah, ruang bawah tanah, dan terowongan.",
        "Pantau informasi terbaru di VicEmergency dan dengarkan radio ABC setempat.",
        "Jika Anda terjebak air banjir, telepon 000."
      ]
    },

    dont: {
      title: "Yang TIDAK boleh dilakukan",
      items: [
        "Jangan pernah berjalan, bersepeda, atau mengemudi melewati air banjir. If it's flooded, forget it — kalau banjir, jangan lewat.",
        "Jangan biarkan anak-anak bermain di dalam atau di dekat air banjir.",
        "Jangan sentuh kabel listrik yang jatuh atau peralatan listrik di dalam air. Menjauhlah.",
        "Jangan makan makanan yang terkena air banjir."
      ]
    },

    hazards: {
      title: "Bahaya yang perlu diwaspadai",
      intro: "Air banjir bisa lebih berbahaya daripada kelihatannya.",
      fast: { t: "Air yang mengalir deras", d: "Bisa menyeret Anda, bahkan saat terlihat dangkal." },
      debris: { t: "Puing tersembunyi", d: "Ranting, sampah, dan benda lain bisa tersembunyi di bawah air." },
      drains: { t: "Selokan dan lubang got terbuka", d: "Penutupnya bisa terangkat dan meninggalkan lubang yang tidak terlihat." },
      contaminated: { t: "Air tercemar", d: "Air banjir bisa mengandung limbah dan bahan kimia. Cuci tangan setelah terkena." },
      slippery: { t: "Permukaan licin", d: "Lumpur serta jalan, landaian, dan tangga yang basah bisa sangat licin." },
      electrical: { t: "Bahaya listrik", d: "Air dan listrik bersama-sama bisa mematikan. Jauhi kabel listrik." }
    },

    footer: {
      text: "Informasi berdasarkan saran keselamatan banjir VicSES. Ini adalah proyek mahasiswa, selalu ikuti instruksi darurat resmi.",
      link: "Situs web VicSES"
    }
  }
};
