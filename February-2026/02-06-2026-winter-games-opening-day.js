/*
2026 Winter Games Day 1: Opening Day
Today marks the start of the 2026 Winter Games. The next 17 days will bring you coding challenges inspired by them.

For the first one, you are given a two-letter country code and need to return the flag emoji for that country.

Use this list:

Country	Code	Flag
Albania	"AL"	"🇦🇱"
Andorra	"AD"	"🇦🇩"
Argentina	"AR"	"🇦🇷"
Armenia	"AM"	"🇦🇲"
Australia	"AU"	"🇦🇺"
Austria	"AT"	"🇦🇹"
Azerbaijan	"AZ"	"🇦🇿"
Belgium	"BE"	"🇧🇪"
Benin	"BJ"	"🇧🇯"
Bolivia	"BO"	"🇧🇴"
Bosnia and Herzegovina	"BA"	"🇧🇦"
Brazil	"BR"	"🇧🇷"
Bulgaria	"BG"	"🇧🇬"
Canada	"CA"	"🇨🇦"
Chile	"CL"	"🇨🇱"
China	"CN"	"🇨🇳"
Colombia	"CO"	"🇨🇴"
Croatia	"HR"	"🇭🇷"
Cyprus	"CY"	"🇨🇾"
Czech Republic	"CZ"	"🇨🇿"
Denmark	"DK"	"🇩🇰"
Ecuador	"EC"	"🇪🇨"
Eritrea	"ER"	"🇪🇷"
Estonia	"EE"	"🇪🇪"
Finland	"FI"	"🇫🇮"
France	"FR"	"🇫🇷"
Georgia	"GE"	"🇬🇪"
Germany	"DE"	"🇩🇪"
Great Britain	"GB"	"🇬🇧"
Greece	"GR"	"🇬🇷"
Guinea-Bissau	"GW"	"🇬🇼"
Haiti	"HT"	"🇭🇹"
Hong Kong	"HK"	"🇭🇰"
Hungary	"HU"	"🇭🇺"
Iceland	"IS"	"🇮🇸"
India	"IN"	"🇮🇳"
Iran	"IR"	"🇮🇷"
Ireland	"IE"	"🇮🇪"
Israel	"IL"	"🇮🇱"
Italy	"IT"	"🇮🇹"
Jamaica	"JM"	"🇯🇲"
Japan	"JP"	"🇯🇵"
Kazakhstan	"KZ"	"🇰🇿"
Kenya	"KE"	"🇰🇪"
Kosovo	"XK"	"🇽🇰"
Kyrgyzstan	"KG"	"🇰🇬"
Latvia	"LV"	"🇱🇻"
Lebanon	"LB"	"🇱🇧"
Liechtenstein	"LI"	"🇱🇮"
Lithuania	"LT"	"🇱🇹"
Luxembourg	"LU"	"🇱🇺"
Madagascar	"MG"	"🇲🇬"
Malaysia	"MY"	"🇲🇾"
Malta	"MT"	"🇲🇹"
Mexico	"MX"	"🇲🇽"
Moldova	"MD"	"🇲🇩"
Monaco	"MC"	"🇲🇨"
Mongolia	"MN"	"🇲🇳"
Montenegro	"ME"	"🇲🇪"
Morocco	"MA"	"🇲🇦"
Netherlands	"NL"	"🇳🇱"
New Zealand	"NZ"	"🇳🇿"
Nigeria	"NG"	"🇳🇬"
North Macedonia	"MK"	"🇲🇰"
Norway	"NO"	"🇳🇴"
Pakistan	"PK"	"🇵🇰"
Philippines	"PH"	"🇵🇭"
Poland	"PL"	"🇵🇱"
Portugal	"PT"	"🇵🇹"
Puerto Rico	"PR"	"🇵🇷"
Romania	"RO"	"🇷🇴"
San Marino	"SM"	"🇸🇲"
Saudi Arabia	"SA"	"🇸🇦"
Serbia	"RS"	"🇷🇸"
Singapore	"SG"	"🇸🇬"
Slovakia	"SK"	"🇸🇰"
Slovenia	"SI"	"🇸🇮"
South Africa	"ZA"	"🇿🇦"
South Korea	"KR"	"🇰🇷"
Spain	"ES"	"🇪🇸"
Sweden	"SE"	"🇸🇪"
Switzerland	"CH"	"🇨🇭"
Thailand	"TH"	"🇹🇭"
Trinidad & Tobago	"TT"	"🇹🇹"
Turkey	"TR"	"🇹🇷"
Ukraine	"UA"	"🇺🇦"
United Arab Emirates	"AE"	"🇦🇪"
United States	"US"	"🇺🇸"
Uruguay	"UY"	"🇺🇾"
Uzbekistan	"UZ"	"🇺🇿"
Venezuela	"VE"	"🇻🇪"
*/

function getFlag(code) {
  const countryFlags = {
    AL: "🇦🇱",
    AD: "🇦🇩",
    AR: "🇦🇷",
    AM: "🇦🇲",
    AU: "🇦🇺",
    AT: "🇦🇹",
    AZ: "🇦🇿",
    BE: "🇧🇪",
    BJ: "🇧🇯",
    BO: "🇧🇴",
    BA: "🇧🇦",
    BR: "🇧🇷",
    BG: "🇧🇬",
    CA: "🇨🇦",
    CL: "🇨🇱",
    CN: "🇨🇳",
    CO: "🇨🇴",
    HR: "🇭🇷",
    CY: "🇨🇾",
    CZ: "🇨🇿",
    DK: "🇩🇰",
    EC: "🇪🇨",
    ER: "🇪🇷",
    EE: "🇪🇪",
    FI: "🇫🇮",
    FR: "🇫🇷",
    GE: "🇬🇪",
    DE: "🇩🇪",
    GB: "🇬🇧",
    GR: "🇬🇷",
    GW: "🇬🇼",
    HT: "🇭🇹",
    HK: "🇭🇰",
    HU: "🇭🇺",
    IS: "🇮🇸",
    IN: "🇮🇳",
    IR: "🇮🇷",
    IE: "🇮🇪",
    IL: "🇮🇱",
    IT: "🇮🇹",
    JM: "🇯🇲",
    JP: "🇯🇵",
    KZ: "🇰🇿",
    KE: "🇰🇪",
    XK: "🇽🇰",
    KG: "🇰🇬",
    LV: "🇱🇻",
    LB: "🇱🇧",
    LI: "🇱🇮",
    LT: "🇱🇹",
    LU: "🇱🇺",
    MG: "🇲🇬",
    MY: "🇲🇾",
    MT: "🇲🇹",
    MX: "🇲🇽",
    MD: "🇲🇩",
    MC: "🇲🇨",
    MN: "🇲🇳",
    ME: "🇲🇪",
    MA: "🇲🇦",
    NL: "🇳🇱",
    NZ: "🇳🇿",
    NG: "🇳🇬",
    MK: "🇲🇰",
    NO: "🇳🇴",
    PK: "🇵🇰",
    PH: "🇵🇭",
    PL: "🇵🇱",
    PT: "🇵🇹",
    PR: "🇵🇷",
    RO: "🇷🇴",
    SM: "🇸🇲",
    SA: "🇸🇦",
    RS: "🇷🇸",
    SG: "🇸🇬",
    SK: "🇸🇰",
    SI: "🇸🇮",
    ZA: "🇿🇦",
    KR: "🇰🇷",
    ES: "🇪🇸",
    SE: "🇸🇪",
    CH: "🇨🇭",
    TH: "🇹🇭",
    TT: "🇹🇹",
    TR: "🇹🇷",
    UA: "🇺🇦",
    AE: "🇦🇪",
    US: "🇺🇸",
    UY: "🇺🇾",
    UZ: "🇺🇿",
    VE: "🇻🇪",
  };

  return countryFlags[code];
}

function testCases() {
  console.log(getFlag("AL"));
  console.log(getFlag("AD"));
  console.log(getFlag("AR"));
  console.log(getFlag("AM"));
  console.log(getFlag("AU"));
  console.log(getFlag("AT"));
  console.log(getFlag("AZ"));
  console.log(getFlag("BE"));
  console.log(getFlag("BJ"));
  console.log(getFlag("BO"));
  console.log(getFlag("BA"));
  console.log(getFlag("BR"));
  console.log(getFlag("BG"));
  console.log(getFlag("CA"));
  console.log(getFlag("CL"));
  console.log(getFlag("CN"));
  console.log(getFlag("CO"));
  console.log(getFlag("HR"));
  console.log(getFlag("CY"));
  console.log(getFlag("CZ"));
  console.log(getFlag("DK"));
  console.log(getFlag("EC"));
  console.log(getFlag("ER"));
  console.log(getFlag("EE"));
  console.log(getFlag("FI"));
  console.log(getFlag("FR"));
  console.log(getFlag("GE"));
  console.log(getFlag("DE"));
  console.log(getFlag("GB"));
  console.log(getFlag("GR"));
  console.log(getFlag("GW"));
  console.log(getFlag("HT"));
  console.log(getFlag("HK"));
  console.log(getFlag("HU"));
  console.log(getFlag("IS"));
  console.log(getFlag("IN"));
  console.log(getFlag("IR"));
  console.log(getFlag("IE"));
  console.log(getFlag("IL"));
  console.log(getFlag("IT"));
  console.log(getFlag("JM"));
  console.log(getFlag("JP"));
  console.log(getFlag("KZ"));
  console.log(getFlag("KE"));
  console.log(getFlag("XK"));
  console.log(getFlag("KG"));
  console.log(getFlag("LV"));
  console.log(getFlag("LB"));
  console.log(getFlag("LI"));
  console.log(getFlag("LT"));
  console.log(getFlag("LU"));
  console.log(getFlag("MG"));
  console.log(getFlag("MY"));
  console.log(getFlag("MT"));
  console.log(getFlag("MX"));
  console.log(getFlag("MD"));
  console.log(getFlag("MC"));
  console.log(getFlag("MN"));
  console.log(getFlag("ME"));
  console.log(getFlag("MA"));
  console.log(getFlag("NL"));
  console.log(getFlag("NZ"));
  console.log(getFlag("NG"));
  console.log(getFlag("MK"));
  console.log(getFlag("NO"));
  console.log(getFlag("PK"));
  console.log(getFlag("PH"));
  console.log(getFlag("PL"));
  console.log(getFlag("PT"));
  console.log(getFlag("PR"));
  console.log(getFlag("RO"));
  console.log(getFlag("SM"));
  console.log(getFlag("SA"));
  console.log(getFlag("RS"));
  console.log(getFlag("SG"));
  console.log(getFlag("SK"));
  console.log(getFlag("SI"));
  console.log(getFlag("ZA"));
  console.log(getFlag("KR"));
  console.log(getFlag("ES"));
  console.log(getFlag("SE"));
  console.log(getFlag("CH"));
  console.log(getFlag("TH"));
  console.log(getFlag("TT"));
  console.log(getFlag("TR"));
  console.log(getFlag("UA"));
  console.log(getFlag("AE"));
  console.log(getFlag("US"));
  console.log(getFlag("UY"));
  console.log(getFlag("UZ"));
  console.log(getFlag("VE"));
}

testCases();
