import _ from "lodash";

const main = () => {
  const tests = [
    {
      input: [
        {
          width: 1484,
          height: 236,
          filename: "5k9ko6a8k7fpoj3olvugffpocczf87fl.gif",
          alt: "Whiskers: A classic name for a cat with long, elegant whiskers.",
        },
        {
          width: 377,
          height: 1130,
          filename: "p27ks3f399.jpeg",
          alt: "Midnight: A sleek black cat with eyes that gleam like the night sky.",
        },
        {
          width: 649,
          height: 1204,
          filename: "n02zjpm4w40e.jpeg",
          alt: "Luna: A graceful feline with a crescent moon-shaped marking on her forehead.",
        },
        {
          width: 727,
          height: 1742,
          filename: "7fpyegvbg9twqyhs7qck0dndet.JPEG",
          alt: "Oliver: A chubby tabby cat who loves to nap in sunny spots.",
        },
        {
          width: 251,
          height: 1110,
          filename: "q7s2b4d3p5590u4uu.JPEG",
          alt: "Misty: A gray cat with a mysterious aura, as if she’s always hiding secrets.",
        },
        {
          width: 1875,
          height: 1542,
          filename: "uv0p1get5fdgveidssa2xqri.JPE",
          alt: "Simba: A regal orange tabby, reminiscent of the lion king himself.",
        },
        {
          width: 469,
          height: 874,
          filename: "e21bt82btpavqn50k2f5qqz6jez7etp3em.JPE",
          alt: "Cleo: A Siamese cat with striking blue almond-shaped eyes.",
        },
        {
          width: 1663,
          height: 212,
          filename: "7hjwvalre7f8gdecqa8j0yv4fly1z6v8a2.gif",
          alt: "Tiger: A bold and striped cat who prowls around like a mini jungle predator.",
        },
        {
          width: 1563,
          height: 1153,
          filename: "0ul52eq51uxvpwa.gif",
          alt: "Snowball: A fluffy white cat who leaves a trail of soft paw prints.",
        },
        {
          width: 822,
          height: 799,
          filename: "xhg6maavjgtoo59cqiqinijl.JPE",
          alt: "Salem: A mischievous black cat with an affinity for witchy adventures.",
        },
        {
          width: 394,
          height: 243,
          filename: "10p8vxgst3vopfgpza.BMP",
          alt: "Whisper: A delicate, pale-gray cat who moves silently through the house.",
        },
        {
          width: 1949,
          height: 730,
          filename: "iqan26rosl48.JPE",
          alt: "Jasper: A ginger cat with a playful personality and a penchant for climbing trees.",
        },
        {
          width: 1239,
          height: 601,
          filename: "7icylfbqqqclvkxthgdmmlm.jpg",
          alt: "Mocha: A chocolate-brown cat with eyes like warm coffee.",
        },
        {
          width: 191,
          height: 667,
          filename: "2ar5bh6qyzpsu79q9we58eeiyusqogs3814.jpeg",
          alt: "Ziggy: A quirky tabby with zigzag patterns on his fur.",
        },
        {
          width: 1449,
          height: 1165,
          filename: "q3vuxrz2waq5cu7u18ml2vadpkwh3e.gif",
          alt: "Pumpkin: An orange cat who brightens up any room.",
        },
        {
          width: 2038,
          height: 1087,
          filename: "v2hyx39qit8c75j3p651c.BMP",
          alt: "Sylvester: A tuxedo cat with a dapper black-and-white coat.",
        },
        {
          width: 1725,
          height: 995,
          filename: "wlq5a5s2zlomrp85gl6shb75r2xx7m.BMP",
          alt: "Willow: A slender, graceful cat who loves to perch on windowsills.",
        },
        {
          width: 1299,
          height: 166,
          filename: "xmkzw652mcu677hvmamuiikfr3n.gif",
          alt: "Cinnamon: A reddish-brown cat with a sweet disposition.",
        },
        {
          width: 1068,
          height: 2037,
          filename: "ng5thdd1x7q3e02vunv.BMP",
          alt: "Gizmo: A curious cat who investigates every nook and cranny.",
        },
        {
          width: 1304,
          height: 1765,
          filename: "strhy7hsx7q3q3uib.gif",
          alt: "Pearl: A white cat with a shimmering, pearly coat.",
        },
        {
          width: 167,
          height: 2073,
          filename: "qqzxsi9b53gaozx1h28gut9bxke12fri.JPEG",
          alt: "Whiskers: A classic name for a cat with long, elegant whiskers.",
        },
        {
          width: 1228,
          height: 1723,
          filename: "azjy9jxejn3xq7sc55qkz.JPEG",
          alt: "Midnight: A sleek black cat with eyes that gleam like the night sky.",
        },
        {
          width: 424,
          height: 209,
          filename: "cmlz05o8k04sepdzq9yq5eemq7gw.jpg",
          alt: "Luna: A graceful feline with a crescent moon-shaped marking on her forehead.",
        },
        {
          width: 1974,
          height: 1830,
          filename: "wcpqxsbkc4julrr7t9gtx6bjk7knlfh8nn.jpg",
          alt: "Oliver: A chubby tabby cat who loves to nap in sunny spots.",
        },
        {
          width: 1012,
          height: 512,
          filename: "jmtwmdqn0sadidytkw1la2q875zrwd.jpeg",
          alt: "Misty: A gray cat with a mysterious aura, as if she’s always hiding secrets.",
        },
        {
          width: 1930,
          height: 1389,
          filename: "mcwshjxusrab2atzv30bsd5usuqhe.JPE",
          alt: "Simba: A regal orange tabby, reminiscent of the lion king himself.",
        },
        {
          width: 1184,
          height: 1797,
          filename: "7f886su0y3tj.png",
          alt: "Cleo: A Siamese cat with striking blue almond-shaped eyes.",
        },
        {
          width: 1456,
          height: 1372,
          filename: "apva84vt6lmsl9we7.jpeg",
          alt: "Tiger: A bold and striped cat who prowls around like a mini jungle predator.",
        },
        {
          width: 1166,
          height: 1122,
          filename: "ip22g8xqb00h1myfqlqfm4xe.BMP",
          alt: "Snowball: A fluffy white cat who leaves a trail of soft paw prints.",
        },
        {
          width: 564,
          height: 814,
          filename: "40zt4ps6bslmdc2h.JPEG",
          alt: "Salem: A mischievous black cat with an affinity for witchy adventures.",
        },
        {
          width: 522,
          height: 629,
          filename: "xhiytj4xlvnal8nli4.JPEG",
          alt: "Mittens: A white cat with adorable black paws that resemble mittens.",
        },
        {
          width: 440,
          height: 575,
          filename: "juu34ee2af2ejq6wr.jpeg",
          alt: "Coco: A chocolate-brown cat with a glossy coat and bright eyes.",
        },
        {
          width: 1945,
          height: 772,
          filename: "bh2fklc6mp50t6xcj.jpg",
          alt: "Oreo: A tuxedo cat with a perfect split of black and white on its face.",
        },
        {
          width: 1094,
          height: 907,
          filename: "w671kq4gm5ce.png",
          alt: "Pebbles: A small, gray tabby cat who loves to explore rocky terrain.",
        },
        {
          width: 1156,
          height: 625,
          filename: "hmyy7sb7p5q4fog2woecqj251ttl.JPEG",
          alt: "Ginger: An orange cat with a fiery personality and a fluffy tail.",
        },
        {
          width: 1161,
          height: 1296,
          filename: "4zc61frj735htbm2d0dzzk51z6.jpeg",
          alt: "Sapphire: A blue-gray cat with eyes that sparkle like precious gems.",
        },
        {
          width: 1637,
          height: 1637,
          filename: "l9r6gfacv84f99eurcyyicdth15i56zoa2.jpeg",
          alt: "Harley: A sleek black cat with a rebellious streak.",
        },
        {
          width: 340,
          height: 1779,
          filename: "x8up7c8l26rqswpt8.png",
          alt: "Daisy: A delicate white cat with a yellow flower-shaped marking on her back.",
        },
        {
          width: 202,
          height: 422,
          filename: "0p8ba98l8v9tiltm.JPEG",
          alt: "Rocky: A muscular cat with a rugged appearance, as if he’s been climbing mountains.",
        },
        {
          width: 1657,
          height: 797,
          filename: "kjtdgww3b3cx0ygbces56gz8qysu8kn.jpeg",
          alt: "Hazel: A tortoiseshell cat with a mix of brown, black, and orange patches.",
        },
        {
          width: 339,
          height: 449,
          filename: "8hbmicz0t5pavxwpf4gd862hcb78gwphkls.png",
          alt: "Leo: A confident cat with a majestic lion-like mane.",
        },
        {
          width: 1921,
          height: 1240,
          filename: "mghxixxwlc4wydzbpjvay3ij.BMP",
          alt: "Mango: An orange tabby cat who radiates warmth and sweetness.",
        },
        {
          width: 1414,
          height: 1970,
          filename: "8ub5tlr5bign.jpeg",
          alt: "Cupcake: A small, round cat with a playful demeanor.",
        },
        {
          width: 416,
          height: 830,
          filename: "ryj0iuo4ucnmg6huwh6a3i.png",
          alt: "Jinx: A black cat with an air of mystery and superstition.",
        },
        {
          width: 1683,
          height: 260,
          filename: "wl5hzv3didi.JPEG",
          alt: "Willow: A long-haired cat with a flowing coat that sways like a willow tree.",
        },
        {
          width: 1589,
          height: 276,
          filename: "ry0i97atoila.jpeg",
          alt: "Panda: A black-and-white cat with large, expressive eyes.",
        },
        {
          width: 1065,
          height: 290,
          filename: "arj5hbgdcmdkq6qf.JPEG",
          alt: "Biscuit: A cream-colored cat who’s as comforting as a freshly baked biscuit.",
        },
        {
          width: 1446,
          height: 2002,
          filename: "k5l86j34ac1q.webp",
          alt: "Cosmo: A cosmic-looking cat with speckled fur that resembles distant stars.",
        },
        {
          width: 1316,
          height: 839,
          filename: "mze7zjwc1f9j.jpg",
          alt: "Maple: An autumnal cat with reddish-brown fur like fallen leaves.",
        },
        {
          width: 473,
          height: 517,
          filename: "40iglxdhhinco4x8.png",
          alt: "Zara: A Siamese cat with striking blue eyes and a slender build.",
        },
        {
          width: 635,
          height: 1213,
          filename: "fh1ywh3gluibq8awoqw7fih.jpg",
          alt: "Mittens: A white cat with adorable black paws that resemble mittens.",
        },
        {
          width: 278,
          height: 244,
          filename: "pmroebnazb2s.JPE",
          alt: "Coco: A chocolate-brown cat with a glossy coat and bright eyes.",
        },
        {
          width: 603,
          height: 750,
          filename: "0f5d125ilbolia9qt37m1ffb40ibli0jda.jpg",
          alt: "Oreo: A tuxedo cat with a perfect split of black and white on its face.",
        },
        {
          width: 121,
          height: 1987,
          filename: "7zo3rnh80bifwoxg8achd5pi9dulr7xti2f.png",
          alt: "Pebbles: A small, gray tabby cat who loves to explore rocky terrain.",
        },
        {
          width: 1861,
          height: 330,
          filename: "0eroaiudvqordhxkzv0eg5jqqzq8z2mx2p.JPEG",
          alt: "Ginger: An orange cat with a fiery personality and a fluffy tail.",
        },
        {
          width: 1921,
          height: 1830,
          filename: "3xx0zab56fbthyzon4l2928p6flfd6klh8r.BMP",
          alt: "Sapphire: A blue-gray cat with eyes that sparkle like precious gems.",
        },
        {
          width: 520,
          height: 520,
          filename: "4gdf9cskvz3b.BMP",
          alt: "Harley: A sleek black cat with a rebellious streak.",
        },
        {
          width: 146,
          height: 1730,
          filename: "ry49hmvvqrlfvqq9kr2xxpi.gif",
          alt: "Daisy: A delicate white cat with a yellow flower-shaped marking on her back.",
        },
        {
          width: 1563,
          height: 1831,
          filename: "5ly1cgv9ehff1nprn2r22bula76t73y5ja.JPE",
          alt: "Rocky: A muscular cat with a rugged appearance, as if he’s been climbing mountains.",
        },
        {
          width: 821,
          height: 1435,
          filename: "p51gqh8ajtkfsxiejd0y66w4d8j23izilmkg.JPEG",
          alt: "Hazel: A tortoiseshell cat with a mix of brown, black, and orange patches.",
        },
        {
          width: 1573,
          height: 200,
          filename: "3mfzsrdh9rlozqfnhcl9aor.JPEG",
          alt: "Leo: A confident cat with a majestic lion-like mane.",
        },
        {
          width: 1961,
          height: 2089,
          filename: "k6d3o3iaz1m.jpeg",
          alt: "Mango: An orange tabby cat who radiates warmth and sweetness.",
        },
        {
          width: 1379,
          height: 678,
          filename: "u5uiggae1trdb8nmscqoad0gnx7nt.png",
          alt: "Cupcake: A small, round cat with a playful demeanor.",
        },
        {
          width: 328,
          height: 284,
          filename: "vxfpvlpqb2tezd0sfr7sxpa.JPEG",
          alt: "Jinx: A black cat with an air of mystery and superstition.",
        },
        {
          width: 727,
          height: 442,
          filename: "2ehju5lumixlenn1kxo2k050xvaon.JPE",
          alt: "Willow: A long-haired cat with a flowing coat that sways like a willow tree.",
        },
        {
          width: 2009,
          height: 1473,
          filename: "jc33wm13deaf2t0psm.jpeg",
          alt: "Panda: A black-and-white cat with large, expressive eyes.",
        },
        {
          width: 941,
          height: 876,
          filename: "7zzx6omomvbp.JPEG",
          alt: "Biscuit: A cream-colored cat who’s as comforting as a freshly baked biscuit.",
        },
        {
          width: 1424,
          height: 1087,
          filename: "80eshl41seqi1ybmjr2xj8vr63e4mg9ve6hd.JPEG",
          alt: "Cosmo: A cosmic-looking cat with speckled fur that resembles distant stars.",
        },
        {
          width: 681,
          height: 1914,
          filename: "9x0lcre62je.JPEG",
          alt: "Maple: An autumnal cat with reddish-brown fur like fallen leaves.",
        },
        {
          width: 638,
          height: 1615,
          filename: "fb6ppgd6ri0v3un2xdfgopsfr2gf145ym3jh.jpg",
          alt: "Zara: A Siamese cat with striking blue eyes and a slender build.",
        },
        {
          width: 1184,
          height: 1011,
          filename: "ca90zkivyq8crtx834mxe4hk45wv3r8xx4k.png",
          alt: "Finn: A playful tabby cat who loves chasing after imaginary mice.",
        },
        {
          width: 2065,
          height: 993,
          filename: "b3vtdkv90zks99ojue.JPE",
          alt: "Velvet: A black cat with fur so soft it feels like velvet to the touch.",
        },
        {
          width: 1871,
          height: 136,
          filename: "lx0zglpj69be.gif",
          alt: "Mochi: A small, round cat with a sweet and squishy appearance.",
        },
        {
          width: 504,
          height: 392,
          filename: "bmrc7sl6mzodt1kre.gif",
          alt: "Cleo: An Egyptian-looking cat with regal eyes and a mysterious air.",
        },
        {
          width: 713,
          height: 1072,
          filename: "9xeoalmqsypfb18gs4m3j4.JPE",
          alt: "Rusty: An orange cat with patches of darker fur, like rusted metal.",
        },
        {
          width: 1698,
          height: 1247,
          filename: "a5ge6lb7i55g2b6whx19urimozbce.webp",
          alt: "Nala: A lioness-like cat with golden fur and a strong, independent spirit.",
        },
        {
          width: 802,
          height: 1871,
          filename: "gzi6uxtxzbdk8zkk.JPEG",
          alt: "Snickers: A caramel-colored cat who’s always up for a treat.",
        },
        {
          width: 471,
          height: 1714,
          filename: "tncs5rwml46luwvawq.JPEG",
          alt: "Ziggy: A quirky cat with zigzag patterns on its coat.",
        },
        {
          width: 1920,
          height: 1324,
          filename: "ccvpnrotv8xwehzo3n.JPEG",
          alt: "Pippin: A mischievous kitten who bounces around like a little apple seed.",
        },
        {
          width: 742,
          height: 1565,
          filename: "ju7zpl5ar8ufs5ycob.webp",
          alt: "Mittens: A white cat with black-tipped paws, as if wearing mittens.",
        },
        {
          width: 887,
          height: 1394,
          filename: "qnm1c8l4amsm11qbkqn626jmn16x8.jpg",
          alt: "Casper: A ghostly white cat who appears silently in unexpected places.",
        },
        {
          width: 1561,
          height: 256,
          filename: "8q9p5c38mmnlo15hscmw3jbl.jpeg",
          alt: "Pumpkin: An orange cat with a round, pumpkin-shaped body.",
        },
        {
          width: 619,
          height: 1887,
          filename: "7ags8wwsg6d9ouoktor7bbxj05kc.jpeg",
          alt: "Misty: A gray cat who blends into misty mornings.",
        },
        {
          width: 109,
          height: 474,
          filename: "n0j9g8l6y9k382hjnud8rb3.JPEG",
          alt: "Tux: A dapper black-and-white cat who’s always ready for a formal occasion.",
        },
        {
          width: 650,
          height: 1395,
          filename: "4jpslj34t2zfybr00v.JPE",
          alt: "Salem: A sleek black cat with an air of mystery, like a witch’s familiar.",
        },
        {
          width: 980,
          height: 1277,
          filename: "supxg85ojao.JPEG",
          alt: "Whiskers: A classic name for a cat with long, elegant whiskers.",
        },
        {
          width: 796,
          height: 1393,
          filename: "ad7gcd0z81mvqys62z6w5fy1oy8op9d7rpj.jpg",
          alt: "Midnight: A sleek black cat with eyes that gleam like the night sky.",
        },
        {
          width: 1774,
          height: 1692,
          filename: "6ns8khe2ml1olw3h7oc53l9l7e5hne.JPEG",
          alt: "Luna: A graceful feline with a crescent moon-shaped marking on her forehead.",
        },
        {
          width: 629,
          height: 873,
          filename: "crplvwj08f2qd5gghahtrb7be9lndw8pyioa.JPEG",
          alt: "Oliver: A chubby tabby cat who loves to nap in sunny spots.",
        },
        {
          width: 1537,
          height: 959,
          filename: "whnccjbz8ind7xxsfb19nme5y77xgv3gx.webp",
          alt: "Misty: A gray cat with a mysterious aura, as if she’s always hiding secrets.",
        },
        {
          width: 1221,
          height: 909,
          filename: "0azwe6ssqcka.BMP",
          alt: "Simba: A regal orange tabby, reminiscent of the lion king himself.",
        },
        {
          width: 776,
          height: 403,
          filename: "l0d2l4pjp0ocbeohs0cgn8pmarp8osajxp.png",
          alt: "Cleo: A Siamese cat with striking blue almond-shaped eyes.",
        },
        {
          width: 1637,
          height: 1509,
          filename: "vty1zmgjg7tj95p7m7o.JPE",
          alt: "Tiger: A bold and striped cat who prowls around like a mini jungle predator.",
        },
        {
          width: 1846,
          height: 1605,
          filename: "2zxdbr7onv7ljpq1r01kro.jpg",
          alt: "Snowball: A fluffy white cat who leaves a trail of soft paw prints.",
        },
        {
          width: 2076,
          height: 341,
          filename: "jh4n9pfljurakjvdmj2bxzk8qamgwcm9c622.JPE",
          alt: "Salem: A mischievous black cat with an affinity for witchy adventures.",
        },
        {
          width: 2051,
          height: 803,
          filename: "ssxdr9cuhwz.JPEG",
          alt: "Whisper: A delicate, pale-gray cat who moves silently through the house.",
        },
        {
          width: 1922,
          height: 127,
          filename: "jsuslc6rvvyn991l6n.webp",
          alt: "Jasper: A ginger cat with a playful personality and a penchant for climbing trees.",
        },
        {
          width: 1402,
          height: 1402,
          filename: "muu8imnkuctpcxr4v8b8lqp77cqsnbtmgynl.gif",
          alt: "Mocha: A chocolate-brown cat with eyes like warm coffee.",
        },
        {
          width: 1219,
          height: 1131,
          filename: "oxktq5vog2r10dwtfbhx2f.png",
          alt: "Ziggy: A quirky tabby with zigzag patterns on his fur.",
        },
        {
          width: 1669,
          height: 1746,
          filename: "y1optmnmhwbeoi7fyjlc81ig86prugp4fi.jpeg",
          alt: "Pumpkin: An orange cat who brightens up any room.",
        },
        {
          width: 1323,
          height: 2010,
          filename: "l2z1swsme0ts9c63lkp01nk1et23quspq.jpg",
          alt: "Sylvester: A tuxedo cat with a dapper black-and-white coat.",
        },
        {
          width: 419,
          height: 1687,
          filename: "plzbmojnydndfdnnlarthm.BMP",
          alt: "Willow: A slender, graceful cat who loves to perch on windowsills.",
        },
        {
          width: 2047,
          height: 1030,
          filename: "7oguv4efwkhx.JPE",
          alt: "Cinnamon: A reddish-brown cat with a sweet disposition.",
        },
        {
          width: 1950,
          height: 632,
          filename: "9sk6y96wg0upbuli8.JPE",
          alt: "Gizmo: A curious cat who investigates every nook and cranny.",
        },
        {
          width: 1141,
          height: 791,
          filename: "m3h5jhxvi2.JPEG",
          alt: "Pearl: A white cat with a shimmering, pearly coat.",
        },
        {
          width: 172,
          height: 2070,
          filename: "jdcz091i2hr8rxcmyenpd3f.JPE",
          alt: "Finn: A playful tabby cat who loves chasing after imaginary mice.",
        },
        {
          width: 307,
          height: 1312,
          filename: "54k5noyx758m5iq3f67vb58mc4th2.jpeg",
          alt: "Velvet: A black cat with fur so soft it feels like velvet to the touch.",
        },
        {
          width: 2005,
          height: 1512,
          filename: "2zzcnpaynm0r4s4p18kcm2p.png",
          alt: "Mochi: A small, round cat with a sweet and squishy appearance.",
        },
        {
          width: 1232,
          height: 1554,
          filename: "51ga37wh19crt9srcu.webp",
          alt: "Cleo: An Egyptian-looking cat with regal eyes and a mysterious air.",
        },
        {
          width: 1981,
          height: 752,
          filename: "5bs2l8phi8mlapq4kw4xltuir6ozn.png",
          alt: "Rusty: An orange cat with patches of darker fur, like rusted metal.",
        },
        {
          width: 1379,
          height: 132,
          filename: "rryzw76ns1ygooowcc9vuosenbf84epdrog7f.JPE",
          alt: "Nala: A lioness-like cat with golden fur and a strong, independent spirit.",
        },
        {
          width: 192,
          height: 1342,
          filename: "qyupnjowkxdue7at40sykq.png",
          alt: "Snickers: A caramel-colored cat who’s always up for a treat.",
        },
        {
          width: 1323,
          height: 1776,
          filename: "cl6itkvsr76r8a2n5.jpg",
          alt: "Ziggy: A quirky cat with zigzag patterns on its coat.",
        },
        {
          width: 1375,
          height: 415,
          filename: "bnrdxvsn80kq6ad7eykv6p5g8rk07r7fch3.BMP",
          alt: "Pippin: A mischievous kitten who bounces around like a little apple seed.",
        },
        {
          width: 1679,
          height: 1206,
          filename: "mfem143monosysn31qz26vs.BMP",
          alt: "Mittens: A white cat with black-tipped paws, as if wearing mittens.",
        },
        {
          width: 1225,
          height: 231,
          filename: "7ygkifoarkoo65pxxjxeds78.JPE",
          alt: "Casper: A ghostly white cat who appears silently in unexpected places.",
        },
        {
          width: 1222,
          height: 929,
          filename: "kg7su2cp83a9.JPEG",
          alt: "Pumpkin: An orange cat with a round, pumpkin-shaped body.",
        },
        {
          width: 1082,
          height: 695,
          filename: "fs1s9m3wfk5qseeudljc46okbgyhcdgvpblb.BMP",
          alt: "Misty: A gray cat who blends into misty mornings.",
        },
        {
          width: 2071,
          height: 1861,
          filename: "fbqmai6yvxa.gif",
          alt: "Tux: A dapper black-and-white cat who’s always ready for a formal occasion.",
        },
        {
          width: 931,
          height: 1173,
          filename: "vf2l8avxhgpcsvyibg97rtmnby3elfi.webp",
          alt: "Salem: A sleek black cat with an air of mystery, like a witch’s familiar.",
        },
        {
          width: 2070,
          height: 345,
          filename: "d00zvu80jdj58rktn.jpeg",
          alt: "Basil: A green-eyed cat with a fresh, herb-like presence.",
        },
        {
          width: 1197,
          height: 1600,
          filename: "9kp7ocqzv3gvemysvsgokekecovgg.JPEG",
          alt: "Cocoa: A warm brown cat who loves to curl up by the fireplace.",
        },
        {
          width: 716,
          height: 638,
          filename: "8p573e9zrjc632m46miu1fcfbsnf.png",
          alt: "Zara: A Siamese cat with striking blue eyes and a slender build.",
        },
        {
          width: 334,
          height: 999,
          filename: "h67aes6qujsoxqj3c0lwi691qbo7aeggsh.png",
          alt: "Gingerbread: An orange cat with a sweet and spicy personality.",
        },
        {
          width: 1937,
          height: 1041,
          filename: "v304wh1ea7pvnnhqinbc4cs.BMP",
          alt: "Muffin: A fluffy cat who’s as comforting as a freshly baked muffin.",
        },
        {
          width: 1592,
          height: 816,
          filename: "50qyljv1x846vwst03ut6h.jpeg",
          alt: "Shadow: A mysterious black cat who disappears into the shadows.",
        },
        {
          width: 1545,
          height: 1951,
          filename: "eeq9nr3go2r8zyvqx8bvoj5cai8ap28o.JPE",
          alt: "Peaches: A peach-colored cat with a gentle demeanor.",
        },
        {
          width: 1503,
          height: 1177,
          filename: "mtzq67jdaqkmuxldd.gif",
          alt: "Olive: A gray cat with a hint of green in her eyes.",
        },
        {
          width: 1691,
          height: 1220,
          filename: "ew38x03pc2rrrx15g.jpg",
          alt: "Caramel: A cat with a caramel-colored coat that’s soft to the touch.",
        },
        {
          width: 1349,
          height: 1608,
          filename: "8vg7h8ojquzewvzjdvq0whdgad5fqs.png",
          alt: "Binx: A mischievous cat who loves playing tricks on unsuspecting humans.",
        },
      ],
      expected: {
        uniquenames: 57,
        widest: 2076,
        tallest: 2089,
        formats: {
          gif: 12,
          jpeg: 19,
          JPEG: 28,
          JPE: 19,
          BMP: 14,
          jpg: 14,
          png: 17,
          webp: 7,
        },
      },
    },
  ];

  for (let i = 0; i < tests.length; ++i) {
    const { input, expected } = tests[i];
    const result = f(input);
    _.isEqual(result, expected)
      ? console.log("PASS")
      : console.log("FAIL: ", result, expected);
  }
};

const f = (input) => {
  const formats = {};
  const names = new Set();
  let widest = 0;
  let tallest = 0;

  for (let i = 0; i < input.length; ++i) {
    const { width, height, filename, alt } = input[i];
    if (width > widest) {
      widest = width;
    }

    if (height > tallest) {
      tallest = height;
    }

    const name = alt.split(":")[0].toLowerCase();
    names.add(name);

    const filenameParts = filename.split(".");
    const format = filenameParts[filenameParts.length - 1];
    if (!formats[format]) {
      formats[format] = 0;
    }

    formats[format]++;
  }

  return {
    uniquenames: names.size,
    widest,
    tallest,
    formats,
  };
};

main();
