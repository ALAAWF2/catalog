const oldData = [
  {
    code: "20890",
    name: "#(SPECIAL OFFER) GARDEN MEADOW KING COMFORTET 12 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "17542",
    name: "#7 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "30-Tala Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2022-12-13"
  },
  {
    code: "17542",
    name: "#7 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-27"
  },
  {
    code: "10607",
    name: "(SPECIAL OFFER) 4PCS RUG SET FANCY ORANGE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2020-01-05"
  },
  {
    code: "21309",
    name: "(SPECIAL OFFER) AID JEFFEREY GREY KING COMFORTER 3 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-05-08"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "52-Al_Baha Mall",
    quantity: 42,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "54-THE VILLAGE",
    quantity: 2,
    lastSaleDate: "2024-09-01"
  },
  {
    code: "23193",
    name: "(SPECIAL OFFER) BECKHAM GELL STANDARD PILLOW",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "22957",
    name: "(SPECIAL OFFER) BIG DANDELION CLOCK OMBER FULL COMFORTER 9 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "22957",
    name: "(SPECIAL OFFER) BIG DANDELION CLOCK OMBER FULL COMFORTER 9 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "21657",
    name: "(SPECIAL OFFER) BOLL & BRANCH NAVY COMFOTER KING 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-04-03"
  },
  {
    code: "21657",
    name: "(SPECIAL OFFER) BOLL & BRANCH NAVY COMFOTER KING 3 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-10-08"
  },
  {
    code: "21657",
    name: "(SPECIAL OFFER) BOLL & BRANCH NAVY COMFOTER KING 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "16343",
    name: "(SPECIAL OFFER) BROWAN CASSINA GOLD KING COMFORTER 5 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "12166",
    name: "(SPECIAL OFFER) CHAMPAIN 6 PCS KING SILK",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20796",
    name: "(SPECIAL OFFER) CRUSHED VELVET TWIN COMFORTER 8 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "20796",
    name: "(SPECIAL OFFER) CRUSHED VELVET TWIN COMFORTER 8 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2024-11-23"
  },
  {
    code: "20796",
    name: "(SPECIAL OFFER) CRUSHED VELVET TWIN COMFORTER 8 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "20796",
    name: "(SPECIAL OFFER) CRUSHED VELVET TWIN COMFORTER 8 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20796",
    name: "(SPECIAL OFFER) CRUSHED VELVET TWIN COMFORTER 8 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-11"
  },
  {
    code: "20796",
    name: "(SPECIAL OFFER) CRUSHED VELVET TWIN COMFORTER 8 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-03"
  },
  {
    code: "20796",
    name: "(SPECIAL OFFER) CRUSHED VELVET TWIN COMFORTER 8 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-11-12"
  },
  {
    code: "21582",
    name: "(SPECIAL OFFER) DIAGONAL SHIBORI BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "19856",
    name: "(SPECIAL OFFER) EUCALIPTUS SCENTED CARD COCODOR",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "19856",
    name: "(SPECIAL OFFER) EUCALIPTUS SCENTED CARD COCODOR",
    mall: "19-Hail Othaim Mall",
    quantity: 12,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "19856",
    name: "(SPECIAL OFFER) EUCALIPTUS SCENTED CARD COCODOR",
    mall: "20-Sitten Street Makkah",
    quantity: 19,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "19856",
    name: "(SPECIAL OFFER) EUCALIPTUS SCENTED CARD COCODOR",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "19856",
    name: "(SPECIAL OFFER) EUCALIPTUS SCENTED CARD COCODOR",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 14,
    lastSaleDate: "2022-12-24"
  },
  {
    code: "16342",
    name: "(SPECIAL OFFER) FLORAL VELVET TEAL KING COMFORTER 5 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "16342",
    name: "(SPECIAL OFFER) FLORAL VELVET TEAL KING COMFORTER 5 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "16342",
    name: "(SPECIAL OFFER) FLORAL VELVET TEAL KING COMFORTER 5 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2023-09-15"
  },
  {
    code: "14922",
    name: "(SPECIAL OFFER) FLORENTINE CANVAS WINTER FULL COMFORTER 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "14922",
    name: "(SPECIAL OFFER) FLORENTINE CANVAS WINTER FULL COMFORTER 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-02"
  },
  {
    code: "21583",
    name: "(SPECIAL OFFER) FOREST STRIPE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "21583",
    name: "(SPECIAL OFFER) FOREST STRIPE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "21583",
    name: "(SPECIAL OFFER) FOREST STRIPE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "21583",
    name: "(SPECIAL OFFER) FOREST STRIPE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "11893",
    name: "(SPECIAL OFFER) GEO MEDALLION 2 PCS TWIN",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2022-07-02"
  },
  {
    code: "11893",
    name: "(SPECIAL OFFER) GEO MEDALLION 2 PCS TWIN",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2019-06-18"
  },
  {
    code: "21580",
    name: "(SPECIAL OFFER) GEO TANGERINE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "21580",
    name: "(SPECIAL OFFER) GEO TANGERINE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "21580",
    name: "(SPECIAL OFFER) GEO TANGERINE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "11-Jouri Mall",
    quantity: 18,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "17-Arar Othaim Mall",
    quantity: 10,
    lastSaleDate: "2025-04-22"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 12,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "22-Tabuk Park",
    quantity: 5,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "45- Riyadh Gallery Mall",
    quantity: 4,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 31,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "47-Al-Nakheel Plaza",
    quantity: 32,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "21363",
    name: "(SPECIAL OFFER) GLASS FRUIT BOWL",
    mall: "57-Sauq7",
    quantity: 52,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "13897",
    name: "(SPECIAL OFFER) HAMMAM MAT ABODE MY HOME 51*86",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2021-05-25"
  },
  {
    code: "13897",
    name: "(SPECIAL OFFER) HAMMAM MAT ABODE MY HOME 51*86",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "13902",
    name: "(SPECIAL OFFER) HAMMAM MAT PEACOOK MY HOME 51*86",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-07-15"
  },
  {
    code: "13902",
    name: "(SPECIAL OFFER) HAMMAM MAT PEACOOK MY HOME 51*86",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-09-29"
  },
  {
    code: "13902",
    name: "(SPECIAL OFFER) HAMMAM MAT PEACOOK MY HOME 51*86",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-06-05"
  },
  {
    code: "13902",
    name: "(SPECIAL OFFER) HAMMAM MAT PEACOOK MY HOME 51*86",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "13903",
    name: "(SPECIAL OFFER) HAMMAM MAT PLUM MY HOME 51*86",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-08-01"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-18"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-10-31"
  },
  {
    code: "20878",
    name: "(SPECIAL OFFER) HG BUTTERFLY COTON QUILT 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-09-06"
  },
  {
    code: "21574",
    name: "(SPECIAL OFFER) HG JUDY GARDEN COTTON QUILT 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2024-08-23"
  },
  {
    code: "21574",
    name: "(SPECIAL OFFER) HG JUDY GARDEN COTTON QUILT 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 7,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "21574",
    name: "(SPECIAL OFFER) HG JUDY GARDEN COTTON QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "21574",
    name: "(SPECIAL OFFER) HG JUDY GARDEN COTTON QUILT 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20876",
    name: "(SPECIAL OFFER) HG MARINA CIRCLES COTON QUILT 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-10-28"
  },
  {
    code: "20876",
    name: "(SPECIAL OFFER) HG MARINA CIRCLES COTON QUILT 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "20876",
    name: "(SPECIAL OFFER) HG MARINA CIRCLES COTON QUILT 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "21573",
    name: "(SPECIAL OFFER) HG ORRIS BEIGE RED COTTON QUILT 3 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "21575",
    name: "(SPECIAL OFFER) HG PEONY WINE COTTON QUILT 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 3,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "21575",
    name: "(SPECIAL OFFER) HG PEONY WINE COTTON QUILT 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "20877",
    name: "(SPECIAL OFFER) HG PLUME COTON QUILT 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "20877",
    name: "(SPECIAL OFFER) HG PLUME COTON QUILT 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "20877",
    name: "(SPECIAL OFFER) HG PLUME COTON QUILT 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-02-17"
  },
  {
    code: "20877",
    name: "(SPECIAL OFFER) HG PLUME COTON QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2024-07-20"
  },
  {
    code: "20877",
    name: "(SPECIAL OFFER) HG PLUME COTON QUILT 3 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-07-18"
  },
  {
    code: "21585",
    name: "(SPECIAL OFFER) IE-DYE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "21585",
    name: "(SPECIAL OFFER) IE-DYE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "21585",
    name: "(SPECIAL OFFER) IE-DYE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "21585",
    name: "(SPECIAL OFFER) IE-DYE BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "21576",
    name: "(SPECIAL OFFER) JASON CHECK BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "21576",
    name: "(SPECIAL OFFER) JASON CHECK BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "21576",
    name: "(SPECIAL OFFER) JASON CHECK BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "21576",
    name: "(SPECIAL OFFER) JASON CHECK BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "21311",
    name: "(SPECIAL OFFER) JOYLAND GARDEN FLORAL KING COMFORTER 3 PCS",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-05-25"
  },
  {
    code: "21311",
    name: "(SPECIAL OFFER) JOYLAND GARDEN FLORAL KING COMFORTER 3 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2024-04-02"
  },
  {
    code: "21311",
    name: "(SPECIAL OFFER) JOYLAND GARDEN FLORAL KING COMFORTER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-27"
  },
  {
    code: "21739",
    name: "(SPECIAL OFFER) JULES BLUE KING COMFORTER 8 PCS KIT",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "21252",
    name: "(SPECIAL OFFER) JULIANA NAVY TWIN COMFORTER 2 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "21252",
    name: "(SPECIAL OFFER) JULIANA NAVY TWIN COMFORTER 2 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "21252",
    name: "(SPECIAL OFFER) JULIANA NAVY TWIN COMFORTER 2 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-09-08"
  },
  {
    code: "21252",
    name: "(SPECIAL OFFER) JULIANA NAVY TWIN COMFORTER 2 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-08-12"
  },
  {
    code: "21252",
    name: "(SPECIAL OFFER) JULIANA NAVY TWIN COMFORTER 2 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "21252",
    name: "(SPECIAL OFFER) JULIANA NAVY TWIN COMFORTER 2 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-05"
  },
  {
    code: "21252",
    name: "(SPECIAL OFFER) JULIANA NAVY TWIN COMFORTER 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "21981",
    name: "(SPECIAL OFFER) LA VITA BLUE KING QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "21244",
    name: "(SPECIAL OFFER) MAEVE FLORAL BLUE KING COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-30"
  },
  {
    code: "21244",
    name: "(SPECIAL OFFER) MAEVE FLORAL BLUE KING COMFORTER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-06"
  },
  {
    code: "21249",
    name: "(SPECIAL OFFER) MAEVE FLORAL BLUE TWIN COMFORTER 2 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-06-29"
  },
  {
    code: "21249",
    name: "(SPECIAL OFFER) MAEVE FLORAL BLUE TWIN COMFORTER 2 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "21249",
    name: "(SPECIAL OFFER) MAEVE FLORAL BLUE TWIN COMFORTER 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "21245",
    name: "(SPECIAL OFFER) MAEVE FLORAL PINK KING COMFORTER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "21250",
    name: "(SPECIAL OFFER) MAEVE FLORAL PINK TWIN COMFORTER 2 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "21250",
    name: "(SPECIAL OFFER) MAEVE FLORAL PINK TWIN COMFORTER 2 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "21250",
    name: "(SPECIAL OFFER) MAEVE FLORAL PINK TWIN COMFORTER 2 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "21250",
    name: "(SPECIAL OFFER) MAEVE FLORAL PINK TWIN COMFORTER 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "21250",
    name: "(SPECIAL OFFER) MAEVE FLORAL PINK TWIN COMFORTER 2 PCS",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "21251",
    name: "(SPECIAL OFFER) MAEVE FLORAL YELLOW TWIN COMFORTER 2 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-22"
  },
  {
    code: "21251",
    name: "(SPECIAL OFFER) MAEVE FLORAL YELLOW TWIN COMFORTER 2 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-10-06"
  },
  {
    code: "21251",
    name: "(SPECIAL OFFER) MAEVE FLORAL YELLOW TWIN COMFORTER 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-01"
  },
  {
    code: "21251",
    name: "(SPECIAL OFFER) MAEVE FLORAL YELLOW TWIN COMFORTER 2 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-05"
  },
  {
    code: "21251",
    name: "(SPECIAL OFFER) MAEVE FLORAL YELLOW TWIN COMFORTER 2 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "21251",
    name: "(SPECIAL OFFER) MAEVE FLORAL YELLOW TWIN COMFORTER 2 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "21251",
    name: "(SPECIAL OFFER) MAEVE FLORAL YELLOW TWIN COMFORTER 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "19859",
    name: "(SPECIAL OFFER) MAGNOLIA SCENTED CARD COCODOR",
    mall: "19-Hail Othaim Mall",
    quantity: 8,
    lastSaleDate: "2022-08-20"
  },
  {
    code: "19859",
    name: "(SPECIAL OFFER) MAGNOLIA SCENTED CARD COCODOR",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-08-19"
  },
  {
    code: "19859",
    name: "(SPECIAL OFFER) MAGNOLIA SCENTED CARD COCODOR",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 11,
    lastSaleDate: "2022-12-27"
  },
  {
    code: "11971",
    name: "(SPECIAL OFFER) MAT SET 3 PCS   WAVES FUSHIA",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "11967",
    name: "(SPECIAL OFFER) MAT SET 3 PCS   WAVES PLUM",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-19"
  },
  {
    code: "14431",
    name: "(SPECIAL OFFER) MATRESS PAD SEALY HOTEL LUXURY KING SIZE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2020-09-23"
  },
  {
    code: "14431",
    name: "(SPECIAL OFFER) MATRESS PAD SEALY HOTEL LUXURY KING SIZE",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2020-10-31"
  },
  {
    code: "14431",
    name: "(SPECIAL OFFER) MATRESS PAD SEALY HOTEL LUXURY KING SIZE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2021-07-21"
  },
  {
    code: "21074",
    name: "(SPECIAL OFFER) MEDALLION EMB KING QUILT 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "19862",
    name: "(SPECIAL OFFER) MEDALLION MATELASSE MINT ASH KING COMFORTER 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "19862",
    name: "(SPECIAL OFFER) MEDALLION MATELASSE MINT ASH KING COMFORTER 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-09-06"
  },
  {
    code: "21312",
    name: "(SPECIAL OFFER) NEW GEO NAVY KING COMFORTER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "21312",
    name: "(SPECIAL OFFER) NEW GEO NAVY KING COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "21312",
    name: "(SPECIAL OFFER) NEW GEO NAVY KING COMFORTER 3 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "21312",
    name: "(SPECIAL OFFER) NEW GEO NAVY KING COMFORTER 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "20012",
    name: "(SPECIAL OFFER) OUI MADELINE KING COMFORTER 10 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "20012",
    name: "(SPECIAL OFFER) OUI MADELINE KING COMFORTER 10 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "15059",
    name: "(SPECIAL OFFER) PARIS BLOOMS PINK WINTER KING COMFORTER 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "20777",
    name: "(SPECIAL OFFER) PATCHWORK TIEDYE T/TXL TWIN COMFORTER 6 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-10-20"
  },
  {
    code: "20777",
    name: "(SPECIAL OFFER) PATCHWORK TIEDYE T/TXL TWIN COMFORTER 6 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-18"
  },
  {
    code: "20777",
    name: "(SPECIAL OFFER) PATCHWORK TIEDYE T/TXL TWIN COMFORTER 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-09-30"
  },
  {
    code: "22132",
    name: "(SPECIAL OFFER) PEBBLE KING COMFORTER 5 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "22132",
    name: "(SPECIAL OFFER) PEBBLE KING COMFORTER 5 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "20565",
    name: "(SPECIAL OFFER) PINTUCK GREY KING COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "20566",
    name: "(SPECIAL OFFER) PINTUCK TEAL KING COMFORTER 3 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-07-18"
  },
  {
    code: "20566",
    name: "(SPECIAL OFFER) PINTUCK TEAL KING COMFORTER 3 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "20566",
    name: "(SPECIAL OFFER) PINTUCK TEAL KING COMFORTER 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-02"
  },
  {
    code: "20566",
    name: "(SPECIAL OFFER) PINTUCK TEAL KING COMFORTER 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-01"
  },
  {
    code: "20566",
    name: "(SPECIAL OFFER) PINTUCK TEAL KING COMFORTER 3 PCS",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "20566",
    name: "(SPECIAL OFFER) PINTUCK TEAL KING COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-05-04"
  },
  {
    code: "21581",
    name: "(SPECIAL OFFER) PLAID BIGONE WINTER KING COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-13"
  },
  {
    code: "21984",
    name: "(SPECIAL OFFER) PRIA BLUSH KING QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "12350",
    name: "(SPECIAL OFFER) QUILT EMMELINE KING 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-10-31"
  },
  {
    code: "12347",
    name: "(SPECIAL OFFER) QUILT TRELLIS KING 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "20908",
    name: "(SPECIAL OFFER) ROLLED KING COMFORTER 1 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "20908",
    name: "(SPECIAL OFFER) ROLLED KING COMFORTER 1 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "20908",
    name: "(SPECIAL OFFER) ROLLED KING COMFORTER 1 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-06-09"
  },
  {
    code: "20908",
    name: "(SPECIAL OFFER) ROLLED KING COMFORTER 1 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "20908",
    name: "(SPECIAL OFFER) ROLLED KING COMFORTER 1 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-06-22"
  },
  {
    code: "20908",
    name: "(SPECIAL OFFER) ROLLED KING COMFORTER 1 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-13"
  },
  {
    code: "20908",
    name: "(SPECIAL OFFER) ROLLED KING COMFORTER 1 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-25"
  },
  {
    code: "22134",
    name: "(SPECIAL OFFER) SCROLLS KING COMFORTER 5 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-07-23"
  },
  {
    code: "20933",
    name: "(SPECIAL OFFER) SEERSUCKER RED/BLUE T/TXL 2 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2024-03-03"
  },
  {
    code: "20933",
    name: "(SPECIAL OFFER) SEERSUCKER RED/BLUE T/TXL 2 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "20933",
    name: "(SPECIAL OFFER) SEERSUCKER RED/BLUE T/TXL 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-01-26"
  },
  {
    code: "10511",
    name: "(SPECIAL OFFER) SHEET 4 PCS LUX HOME FULL 200 STITSH",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2020-08-30"
  },
  {
    code: "10511",
    name: "(SPECIAL OFFER) SHEET 4 PCS LUX HOME FULL 200 STITSH",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2020-09-05"
  },
  {
    code: "15542",
    name: "(SPECIAL OFFER) SHEET SET KING 250TH SOLD 4 PCS KING",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2021-05-29"
  },
  {
    code: "14883",
    name: "(SPECIAL OFFER) SHINNY LONG FUR WINTER FULL COMFORTER 2 PCS RED",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-11-27"
  },
  {
    code: "23216",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL GRAY 76*137 DUET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "23217",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL INDIGO 76*137 DUET",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-09-02"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "25-Rabwa Othaim Mall",
    quantity: 6,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "43-Mujan Park",
    quantity: 56,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "16-Ehsa Othaim Mall",
    quantity: 7,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "36-Al jubail Mall",
    quantity: 9,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "23218",
    name: "(SPECIAL OFFER) SOLID BATH TOWEL WHITE 76*137 DUET",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "21982",
    name: "(SPECIAL OFFER) SURI FLORAL KING QUILT 3 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-04-20"
  },
  {
    code: "20928",
    name: "(SPECIAL OFFER) TEXTURE LEAVES KING COMFORTER 8 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-11-23"
  },
  {
    code: "21020",
    name: "(SPECIAL OFFER) TH LANTANA BROZE BROWN FULL COMFORTER 7 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "21020",
    name: "(SPECIAL OFFER) TH LANTANA BROZE BROWN FULL COMFORTER 7 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "21020",
    name: "(SPECIAL OFFER) TH LANTANA BROZE BROWN FULL COMFORTER 7 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-23"
  },
  {
    code: "21020",
    name: "(SPECIAL OFFER) TH LANTANA BROZE BROWN FULL COMFORTER 7 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "21019",
    name: "(SPECIAL OFFER) TH LANTANA TEAL BLUE FULL COMFORTER 7 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-11"
  },
  {
    code: "18881",
    name: "(SPECIAL OFFER) ULTRA LUXURY BLUSH 100% COTON BLANKET",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-11-16"
  },
  {
    code: "18881",
    name: "(SPECIAL OFFER) ULTRA LUXURY BLUSH 100% COTON BLANKET",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "18880",
    name: "(SPECIAL OFFER) ULTRA LUXURY IVORY 100% COTON BLANKET",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-06-18"
  },
  {
    code: "18880",
    name: "(SPECIAL OFFER) ULTRA LUXURY IVORY 100% COTON BLANKET",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-14"
  },
  {
    code: "18880",
    name: "(SPECIAL OFFER) ULTRA LUXURY IVORY 100% COTON BLANKET",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-07-08"
  },
  {
    code: "21068",
    name: "(SPECIAL OFFER) WAVERLY GIIULIETTA NIGHT KING COMFORTER 10 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "16367",
    name: "(SPECIAL OFFER) WEIGHTED BLANKET SET STONE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-10-14"
  },
  {
    code: "16367",
    name: "(SPECIAL OFFER) WEIGHTED BLANKET SET STONE",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-11-14"
  },
  {
    code: "16368",
    name: "(SPECIAL OFFER) WEIGHTED BLANKET SET WINDS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-06-10"
  },
  {
    code: "16368",
    name: "(SPECIAL OFFER) WEIGHTED BLANKET SET WINDS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2020-11-03"
  },
  {
    code: "20757",
    name: "(SPECIAL OFFER)(106) MATRESPAD NAUTICA LUXURY COTON 400 STITCH KING",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20757",
    name: "(SPECIAL OFFER)(106) MATRESPAD NAUTICA LUXURY COTON 400 STITCH KING",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "20753",
    name: "(SPECIAL OFFER)(140) MATRESPAD NAUTICA WICKING FULL",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "20755",
    name: "(SPECIAL OFFER)(142) MATRESPAD MAUTICA WICKING KING",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-10-09"
  },
  {
    code: "20755",
    name: "(SPECIAL OFFER)(142) MATRESPAD MAUTICA WICKING KING",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "20755",
    name: "(SPECIAL OFFER)(142) MATRESPAD MAUTICA WICKING KING",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "20755",
    name: "(SPECIAL OFFER)(142) MATRESPAD MAUTICA WICKING KING",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20754",
    name: "(SPECIAL OFFER)(147) MATRESPAD NAUTICA ANCHOR COTON 200 STITCH KING",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-06-05"
  },
  {
    code: "20754",
    name: "(SPECIAL OFFER)(147) MATRESPAD NAUTICA ANCHOR COTON 200 STITCH KING",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-26"
  },
  {
    code: "20754",
    name: "(SPECIAL OFFER)(147) MATRESPAD NAUTICA ANCHOR COTON 200 STITCH KING",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2023-10-22"
  },
  {
    code: "14489",
    name: "(SPECIAL OFFER)@HELEN CREAM L/XL BATHROBE",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-06-27"
  },
  {
    code: "14489",
    name: "(SPECIAL OFFER)@HELEN CREAM L/XL BATHROBE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2021-08-30"
  },
  {
    code: "19879",
    name: "(SPECIAL OFFER)BIG ONE MILITARY OLIVE TWIN QUILT 2 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "19287",
    name: "(SPECIAL OFFER)LIDO MULTI KING DUVET COVER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 14,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "19287",
    name: "(SPECIAL OFFER)LIDO MULTI KING DUVET COVER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 10,
    lastSaleDate: "2023-08-25"
  },
  {
    code: "19287",
    name: "(SPECIAL OFFER)LIDO MULTI KING DUVET COVER 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 7,
    lastSaleDate: "2023-08-07"
  },
  {
    code: "19287",
    name: "(SPECIAL OFFER)LIDO MULTI KING DUVET COVER 3 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "19287",
    name: "(SPECIAL OFFER)LIDO MULTI KING DUVET COVER 3 PCS",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2024-04-02"
  },
  {
    code: "16679",
    name: "(SPECIAL OFFER)PERSIA TWIN COMFORTER 6 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-07-29"
  },
  {
    code: "16679",
    name: "(SPECIAL OFFER)PERSIA TWIN COMFORTER 6 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "16679",
    name: "(SPECIAL OFFER)PERSIA TWIN COMFORTER 6 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "16679",
    name: "(SPECIAL OFFER)PERSIA TWIN COMFORTER 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2022-08-27"
  },
  {
    code: "16793",
    name: "(SPECIAL OFFER)RACHEL ROY DAYBREAK BLUE QUEEN COMFORTER 1 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2023-05-26"
  },
  {
    code: "16793",
    name: "(SPECIAL OFFER)RACHEL ROY DAYBREAK BLUE QUEEN COMFORTER 1 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-06-08"
  },
  {
    code: "22594",
    name: "*(SPECIAL OFFER) ADLER WHITE KING COMFORTER 8 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-21"
  },
  {
    code: "19798",
    name: "*(SPECIAL OFFER) ANI BLUSH KING COMFORTER 11 PCS KIT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-11-27"
  },
  {
    code: "20094",
    name: "*(SPECIAL OFFER) DOREEN ROSE KING COMFORTER 11 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "20094",
    name: "*(SPECIAL OFFER) DOREEN ROSE KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "22427",
    name: "*(SPECIAL OFFER) ELLA GREEN KING COMFORTER 11 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-04-12"
  },
  {
    code: "22427",
    name: "*(SPECIAL OFFER) ELLA GREEN KING COMFORTER 11 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "22423",
    name: "*(SPECIAL OFFER) ELLA GREY KING COMFORTER 11 PCS KIT",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-07-16"
  },
  {
    code: "22423",
    name: "*(SPECIAL OFFER) ELLA GREY KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "22423",
    name: "*(SPECIAL OFFER) ELLA GREY KING COMFORTER 11 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "15294",
    name: "*(SPECIAL OFFER) ELM COTON FULL COMFOFRTER 5 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "15294",
    name: "*(SPECIAL OFFER) ELM COTON FULL COMFOFRTER 5 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "18736",
    name: "*(SPECIAL OFFER) EVIE FULL COMFORTER 5 PCS KIT.",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "18736",
    name: "*(SPECIAL OFFER) EVIE FULL COMFORTER 5 PCS KIT.",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-06-09"
  },
  {
    code: "18735",
    name: "*(SPECIAL OFFER) EVIE FULL COMFORTER 5 PCS.",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "21008",
    name: "*(SPECIAL OFFER) FOSSILE ISLAND FULL COMFORTER 8 PCS KIT",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "19672",
    name: "*(SPECIAL OFFER) HOLLINS GREY KING COMFORTER 8 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-03-18"
  },
  {
    code: "20547",
    name: "*(SPECIAL OFFER) HOTEL BALFOUR NAVY KING COMFORTER 6 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "20547",
    name: "*(SPECIAL OFFER) HOTEL BALFOUR NAVY KING COMFORTER 6 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "19816",
    name: "*(SPECIAL OFFER) INTERVAL BLUE KING COMFORTER 11 PCS KIT",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-12-26"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-03"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2023-12-18"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "19755",
    name: "*(SPECIAL OFFER) JOLENE SILVER KING COMFORTER 11 PCS KIT",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-08"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-02-27"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-10-06"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-06-07"
  },
  {
    code: "17209",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS KIT.",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2023-07-25"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-08-02"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "17208",
    name: "*(SPECIAL OFFER) KYRA FULL COMFORTER 5 PCS.",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-10-06"
  },
  {
    code: "18473",
    name: "*(SPECIAL OFFER) MAE MINT FULL COMFORTER 5 PCS KIT.",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-01"
  },
  {
    code: "19751",
    name: "*(SPECIAL OFFER) MARGOT GRAY KING COMFORTER 11 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-10-24"
  },
  {
    code: "19737",
    name: "*(SPECIAL OFFER) MARGOT-CORRYN MIST KING COMFORTER 11 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-10-24"
  },
  {
    code: "21664",
    name: "*(SPECIAL OFFER) MEADOW FLOWER KING COMFORTER 11 PCS KIT",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2023-11-08"
  },
  {
    code: "21664",
    name: "*(SPECIAL OFFER) MEADOW FLOWER KING COMFORTER 11 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-21"
  },
  {
    code: "20860",
    name: "*(SPECIAL OFFER) MORA ECRU KING COMFORTER 11 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-06-22"
  },
  {
    code: "20860",
    name: "*(SPECIAL OFFER) MORA ECRU KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-06-19"
  },
  {
    code: "22054",
    name: "*(SPECIAL OFFER) MORA PEACH KING COMFORTER 11 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "22054",
    name: "*(SPECIAL OFFER) MORA PEACH KING COMFORTER 11 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "19301",
    name: "*(SPECIAL OFFER) NICOLETTE  BLUSH  KING COMFORTER 11 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "19509",
    name: "*(SPECIAL OFFER) NICOLETTE BLUE KING COMFROTER 11 PCS KIT",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "19509",
    name: "*(SPECIAL OFFER) NICOLETTE BLUE KING COMFROTER 11 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-07-05"
  },
  {
    code: "19509",
    name: "*(SPECIAL OFFER) NICOLETTE BLUE KING COMFROTER 11 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-11-02"
  },
  {
    code: "19509",
    name: "*(SPECIAL OFFER) NICOLETTE BLUE KING COMFROTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-03"
  },
  {
    code: "19509",
    name: "*(SPECIAL OFFER) NICOLETTE BLUE KING COMFROTER 11 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "19962",
    name: "*(SPECIAL OFFER) NIGHT SHADOW BLUE KING COMFORTER 8 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "19962",
    name: "*(SPECIAL OFFER) NIGHT SHADOW BLUE KING COMFORTER 8 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "19962",
    name: "*(SPECIAL OFFER) NIGHT SHADOW BLUE KING COMFORTER 8 PCS KIT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "19962",
    name: "*(SPECIAL OFFER) NIGHT SHADOW BLUE KING COMFORTER 8 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "19962",
    name: "*(SPECIAL OFFER) NIGHT SHADOW BLUE KING COMFORTER 8 PCS KIT",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "19962",
    name: "*(SPECIAL OFFER) NIGHT SHADOW BLUE KING COMFORTER 8 PCS KIT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "19962",
    name: "*(SPECIAL OFFER) NIGHT SHADOW BLUE KING COMFORTER 8 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-07-20"
  },
  {
    code: "19423",
    name: "*(SPECIAL OFFER) NIMA WHITE KING COMFORTER 6 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-07-06"
  },
  {
    code: "21741",
    name: "*(SPECIAL OFFER) NORA TAUPE KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-12"
  },
  {
    code: "21741",
    name: "*(SPECIAL OFFER) NORA TAUPE KING COMFORTER 11 PCS KIT",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-06-11"
  },
  {
    code: "19966",
    name: "*(SPECIAL OFFER) OLD COIN IVORY KING COMFORTER 8 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-09-13"
  },
  {
    code: "19968",
    name: "*(SPECIAL OFFER) OLD COIN SILVER KING COMFORTER 8 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-08-19"
  },
  {
    code: "19968",
    name: "*(SPECIAL OFFER) OLD COIN SILVER KING COMFORTER 8 PCS KIT",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "19968",
    name: "*(SPECIAL OFFER) OLD COIN SILVER KING COMFORTER 8 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-19"
  },
  {
    code: "19802",
    name: "*(SPECIAL OFFER) OLIVIA FLORAL SPICE KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2023-09-05"
  },
  {
    code: "19802",
    name: "*(SPECIAL OFFER) OLIVIA FLORAL SPICE KING COMFORTER 11 PCS KIT",
    mall: "45- Riyadh Gallery Mall",
    quantity: 3,
    lastSaleDate: "2024-09-30"
  },
  {
    code: "15305",
    name: "*(SPECIAL OFFER) PIPER COTON FULL COMFOFRTER 8 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2022-05-16"
  },
  {
    code: "15305",
    name: "*(SPECIAL OFFER) PIPER COTON FULL COMFOFRTER 8 PCS KIT",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "20915",
    name: "*(SPECIAL OFFER) SAMMIE PINK FULL COMFORTER 5 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "20916",
    name: "*(SPECIAL OFFER) SAMMIE PINK FULL COMFORTER 5 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "21081",
    name: "*(SPECIAL OFFER) TRUCK FULL COMFORTER 9 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-07-07"
  },
  {
    code: "21933",
    name: "*(SPECIAL OFFER) ZOELLE BLUE KING COMFORTER 11 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "21933",
    name: "*(SPECIAL OFFER) ZOELLE BLUE KING COMFORTER 11 PCS KIT",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "17217",
    name: "*(SPECIAL OFFER) ZORA FULL COMFORTER 5 PCS KIT.",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "17217",
    name: "*(SPECIAL OFFER) ZORA FULL COMFORTER 5 PCS KIT.",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-07-14"
  },
  {
    code: "17216",
    name: "*(SPECIAL OFFER) ZORA FULL COMFORTER 5 PCS.",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-08"
  },
  {
    code: "19869",
    name: "*(SPECIAL OFFER)CASSIOPEIA LAVENDER FULL COMFORTER 5 PCS KIT.",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "19869",
    name: "*(SPECIAL OFFER)CASSIOPEIA LAVENDER FULL COMFORTER 5 PCS KIT.",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-07"
  },
  {
    code: "15309",
    name: "*(SPECIAL OFFER)ELM COTON FULL COMFOFRTER 5 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "15309",
    name: "*(SPECIAL OFFER)ELM COTON FULL COMFOFRTER 5 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2023-02-15"
  },
  {
    code: "15309",
    name: "*(SPECIAL OFFER)ELM COTON FULL COMFOFRTER 5 PCS KIT",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "16704",
    name: "*ABOTT HEART FULL COMFORTER 8 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-06-17"
  },
  {
    code: "22058",
    name: "*AMAYA SAGE KING COMFORTER 8 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 6,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "22058",
    name: "*AMAYA SAGE KING COMFORTER 8 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-06-23"
  },
  {
    code: "22058",
    name: "*AMAYA SAGE KING COMFORTER 8 PCS KIT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "22058",
    name: "*AMAYA SAGE KING COMFORTER 8 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2023-11-27"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-06-20"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-01-11"
  },
  {
    code: "22060",
    name: "*AMAYA YELLOW KING COMFORTER 8 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 7,
    lastSaleDate: "2024-11-02"
  },
  {
    code: "22028",
    name: "*AMILIA KING COMFORTER 11 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "22028",
    name: "*AMILIA KING COMFORTER 11 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-09-29"
  },
  {
    code: "22431",
    name: "*ANDREYA SAND KING COMFORTER 11 PCS KIT",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2023-11-10"
  },
  {
    code: "18734",
    name: "*ANNABELLE PINK FULL COMFORTER 8 PCS KIT",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-13"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-09-08"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2023-08-07"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 5,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "21887",
    name: "*ARDEN MULTI FULL COMFORTER 8 PCS KIT",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-29"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-10-31"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "05-Haifa Mall",
    quantity: 4,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-11-28"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "21420",
    name: "*ARIELLE KING COMFORTER 6 PCS KIT",
    mall: "54-THE VILLAGE",
    quantity: 2,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "21883",
    name: "*ASHER BLUE FULL COMFORTER 8 PCS KIT",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "17093",
    name: "*AUGUSTUS FULL COMFORTER 8 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "17093",
    name: "*AUGUSTUS FULL COMFORTER 8 PCS KIT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-04-26"
  },
  {
    code: "17093",
    name: "*AUGUSTUS FULL COMFORTER 8 PCS KIT",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-08-27"
  },
  {
    code: "17093",
    name: "*AUGUSTUS FULL COMFORTER 8 PCS KIT",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2021-09-05"
  },
  {
    code: "21975",
    name: "*BLOCK EMBROIDERY KING COMFORTER 8 PCS KIT",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-03-01"
  },
  {
    code: "21975",
    name: "*BLOCK EMBROIDERY KING COMFORTER 8 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "23188",
    name: "*BLOOMFIELD PINK KING COMFORTER 11 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-15"
  },
  {
    code: "19928",
    name: "*BLOSSOM KING COMFORTER 11 PCS KIT",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-05-25"
  },
  {
    code: "22932",
    name: "*COZY STRIPE BISCUIT PRINTED KING COMFORTER 3 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "23423",
    name: "*COZY STRIPE BISCUIT PRINTED KING COMFORTER 6 PCS KIT",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "23423",
    name: "*COZY STRIPE BISCUIT PRINTED KING COMFORTER 6 PCS KIT",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "23423",
    name: "*COZY STRIPE BISCUIT PRINTED KING COMFORTER 6 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "23423",
    name: "*COZY STRIPE BISCUIT PRINTED KING COMFORTER 6 PCS KIT",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "50-Meem Plaza Riyadh",
    quantity: 8,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "23428",
    name: "*COZY STRIPE BLUE LOYAL KING COMFORTER 6 PCS KIT",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "23430",
    name: "*COZY STRIPE CHOCOLATE KING COMFORTER 6 PCS KIT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "23430",
    name: "*COZY STRIPE CHOCOLATE KING COMFORTER 6 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "23430",
    name: "*COZY STRIPE CHOCOLATE KING COMFORTER 6 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "23430",
    name: "*COZY STRIPE CHOCOLATE KING COMFORTER 6 PCS KIT",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "23426",
    name: "*COZY STRIPE COMET KING COMFORTER 6 PCS KIT",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "22933",
    name: "*COZY STRIPE GREY PRINTED KING COMFORTER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "16452",
    name: "*DAWN BLUE KING COMFORTER 12 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "21919",
    name: "*DEVA GRAY KING COMFORTER 11 PCS KIT",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-07-05"
  },
  {
    code: "20096",
    name: "*DOREEN GRAY KING COMFORTER 11 PCS  KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "20096",
    name: "*DOREEN GRAY KING COMFORTER 11 PCS  KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20096",
    name: "*DOREEN GRAY KING COMFORTER 11 PCS  KIT",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "19455",
    name: "*EDENTON STRIPE KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2022-05-14"
  },
  {
    code: "19455",
    name: "*EDENTON STRIPE KING COMFORTER 11 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-03-21"
  },
  {
    code: "23841",
    name: "*ELEEN BLUSH KING COMFORTER 5 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "23101",
    name: "*ELLA PUROLE KING COMFORTER 9 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-07-14"
  },
  {
    code: "23101",
    name: "*ELLA PUROLE KING COMFORTER 9 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-24"
  },
  {
    code: "23101",
    name: "*ELLA PUROLE KING COMFORTER 9 PCS KIT",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "23101",
    name: "*ELLA PUROLE KING COMFORTER 9 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "19277",
    name: "*EMILE KING COMFORTER 11 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "19277",
    name: "*EMILE KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2022-09-21"
  },
  {
    code: "21635",
    name: "*ESME BORDER KING COMFORTER 12 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "21635",
    name: "*ESME BORDER KING COMFORTER 12 PCS KIT",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "21635",
    name: "*ESME BORDER KING COMFORTER 12 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-10-18"
  },
  {
    code: "21635",
    name: "*ESME BORDER KING COMFORTER 12 PCS KIT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "19343",
    name: "*ESME PINK KING COMFORTER 9 PCS KIT.",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "15252",
    name: "*ESTELLE KING COMFORTER 11 PCS KIT",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "19571",
    name: "*FARIA KING COMFORTER 11 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "19571",
    name: "*FARIA KING COMFORTER 11 PCS KIT",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-11-19"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "21755",
    name: "*FINLEY FULL COMFORTER 8 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-11-10"
  },
  {
    code: "20638",
    name: "*FLAMINGO MULTI TWIN COMFORTER 5 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-05-15"
  },
  {
    code: "22030",
    name: "*FLAVIA KING COMFORTER 11 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "21298",
    name: "*FLOWER BORDER BLUE FULL COMFORTER 11 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "21298",
    name: "*FLOWER BORDER BLUE FULL COMFORTER 11 PCS KIT",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "22705",
    name: "*GRACIE MULTIE FULL COMFORTER 8 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-03-14"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-10-25"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-07-08"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-21"
  },
  {
    code: "21010",
    name: "*HAPPINESS RAINBOW FULL COMFORTER 9 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "21012",
    name: "*HAPPY SUN FULL COMFORTER 9 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-09-22"
  },
  {
    code: "21012",
    name: "*HAPPY SUN FULL COMFORTER 9 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "21012",
    name: "*HAPPY SUN FULL COMFORTER 9 PCS KIT",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-06-24"
  },
  {
    code: "21012",
    name: "*HAPPY SUN FULL COMFORTER 9 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "20901",
    name: "*HG CROSSED GRID COMFORTER KING 8 PCS KIT",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-09-30"
  },
  {
    code: "20901",
    name: "*HG CROSSED GRID COMFORTER KING 8 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-11-06"
  },
  {
    code: "19459",
    name: "*HOLLINS WHITE KING COMFORTER 5 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2021-10-07"
  },
  {
    code: "21014",
    name: "*ISIA KING COMFORTER 12 PCS KIT",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-07-08"
  },
  {
    code: "14308",
    name: "*JOVIE FULL COMFORTER 8 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2021-05-08"
  },
  {
    code: "17097",
    name: "*JUNIPER AQUA FULL COMFORTER 8 PCS KIT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "17097",
    name: "*JUNIPER AQUA FULL COMFORTER 8 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "17097",
    name: "*JUNIPER AQUA FULL COMFORTER 8 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "17095",
    name: "*JUNIPER PINK FULL COMFORTER 8 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2020-11-07"
  },
  {
    code: "20014",
    name: "*KATTIE GOLD KING COMFORTER 11 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2022-12-07"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-06"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2023-09-25"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-08-04"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-03-20"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-10-14"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-05-06"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-15"
  },
  {
    code: "20016",
    name: "*KATTIE SILVER KING COMFORTER 11 PCS KIT",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-19"
  },
  {
    code: "16915",
    name: "*LEXY YELLOW KING COMFORTER 8 PCS KIT",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "16915",
    name: "*LEXY YELLOW KING COMFORTER 8 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-10"
  },
  {
    code: "16915",
    name: "*LEXY YELLOW KING COMFORTER 8 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "16915",
    name: "*LEXY YELLOW KING COMFORTER 8 PCS KIT",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "21327",
    name: "*LIANA FULL COMFORTER 11 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-01-27"
  },
  {
    code: "19285",
    name: "*LIDO MULTI KING COMFORTER 7 PCS KIT",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "19285",
    name: "*LIDO MULTI KING COMFORTER 7 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "21085",
    name: "*LILOU FULL COMFORTER 8 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "21085",
    name: "*LILOU FULL COMFORTER 8 PCS KIT",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "17712",
    name: "*LOLA AQUA KING COMFORTER 10 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "19743",
    name: "*LUKE MINT FULL COMFORTER 8 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-12-20"
  },
  {
    code: "16678",
    name: "*MAISIE TWIN COMFORTER 8 PCS KIT",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2022-09-23"
  },
  {
    code: "19926",
    name: "*MARGARET SILVER KING COMFORTER 11 PCS KIT",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-07-16"
  },
  {
    code: "19926",
    name: "*MARGARET SILVER KING COMFORTER 11 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-11-03"
  },
  {
    code: "19926",
    name: "*MARGARET SILVER KING COMFORTER 11 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "19926",
    name: "*MARGARET SILVER KING COMFORTER 11 PCS KIT",
    mall: "24-Yanbu Dana Mall",
    quantity: 4,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20070",
    name: "*MARVE ROSE SMOCKY KING COMFORTER 11 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "20020",
    name: "*MARVE YELLOW KING COMFORTER 11 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "19344",
    name: "*MEADOW KING COMFORTER 9 PCS KIT.",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-01-15"
  },
  {
    code: "14914",
    name: "*MIDNIGHT GARDEN TEAL FULL COMFORTER 8 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-01-09"
  },
  {
    code: "19839",
    name: "*MIRAGE KING COMFORTER 12 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-10-31"
  },
  {
    code: "23103",
    name: "*MONTROSE BLUE KING COMFORTER 9 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "23107",
    name: "*MONTROSE ROSE KING COMFORTER 9 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2024-06-23"
  },
  {
    code: "23107",
    name: "*MONTROSE ROSE KING COMFORTER 9 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "23107",
    name: "*MONTROSE ROSE KING COMFORTER 9 PCS KIT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "21929",
    name: "*MORA AQUA KING COMFORTER 11 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-01-12"
  },
  {
    code: "21929",
    name: "*MORA AQUA KING COMFORTER 11 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "20862",
    name: "*MORA NAVY KING COMFORTER 11 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "16934",
    name: "*NISHA YELLOW KING COMFORTER 10 PCS KIT",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-09-29"
  },
  {
    code: "16934",
    name: "*NISHA YELLOW KING COMFORTER 10 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-10-09"
  },
  {
    code: "17213",
    name: "*OPHELIA FULL COMFORTER 8 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-06-10"
  },
  {
    code: "17213",
    name: "*OPHELIA FULL COMFORTER 8 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "17213",
    name: "*OPHELIA FULL COMFORTER 8 PCS KIT",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-05-13"
  },
  {
    code: "21943",
    name: "*OPHELIA UPC FULL COMFORTER 8 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "19918",
    name: "*PARIS TRAVEL FULL COMFORTER 9 PCS KIT",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2022-06-10"
  },
  {
    code: "16692",
    name: "*PARSIA LACE FULL COMFORTER 8 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "16692",
    name: "*PARSIA LACE FULL COMFORTER 8 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-08-13"
  },
  {
    code: "19964",
    name: "*PLANTATION BRIGHT WHITE KING COMFORTER 8 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-06-05"
  },
  {
    code: "14301",
    name: "*POE FULL COMFORTER 8 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2021-02-07"
  },
  {
    code: "14301",
    name: "*POE FULL COMFORTER 8 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2020-06-02"
  },
  {
    code: "20791",
    name: "*QUILT OMBRE MEDALLION GREY FULL 2 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-01-04"
  },
  {
    code: "20791",
    name: "*QUILT OMBRE MEDALLION GREY FULL 2 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-09-26"
  },
  {
    code: "20791",
    name: "*QUILT OMBRE MEDALLION GREY FULL 2 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2023-10-25"
  },
  {
    code: "20789",
    name: "*QUILT OMBRE MEDALLION GREY KING 3 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "21352",
    name: "*RED FULL WAMSUTTA COMFORTER 9 PCS KIT",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "21346",
    name: "*RED KING WAMSUTTA COMFORTER 9 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-03-19"
  },
  {
    code: "19279",
    name: "*REIGER BLUSH KING COMFORTER 11 PCS KIT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-06-27"
  },
  {
    code: "17182",
    name: "*RHEA KING COMFORTER 8 PCS KIT",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-05-08"
  },
  {
    code: "17182",
    name: "*RHEA KING COMFORTER 8 PCS KIT",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "23169",
    name: "*ROSICA MULTI KING COMFORTER 11 PCS KIT",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "23169",
    name: "*ROSICA MULTI KING COMFORTER 11 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-21"
  },
  {
    code: "23169",
    name: "*ROSICA MULTI KING COMFORTER 11 PCS KIT",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "17611",
    name: "*ROXIE GREY FULL COMOFORTER 8 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-03-20"
  },
  {
    code: "16688",
    name: "*RUBIE CHEVRON FULL COMFORTER 9 PCS KIT",
    mall: "27-Dhahran Mall khobar",
    quantity: 5,
    lastSaleDate: "2021-08-25"
  },
  {
    code: "21091",
    name: "*SHARKS FULL COMFORTER 8 PCS KIT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "14614",
    name: "*SHEEPZZ COTTON FULL COMFORTER 8 PCS_KIT",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "20583",
    name: "*SOLENE KING COMFORTER 11 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "20583",
    name: "*SOLENE KING COMFORTER 11 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-13"
  },
  {
    code: "16336",
    name: "*SOREN LILAC 8 PCS FULL COMFORTER KIT",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2020-12-18"
  },
  {
    code: "21923",
    name: "*SPENCER NAVY KING COMFORTER 11 PCS KIT",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-07-24"
  },
  {
    code: "22437",
    name: "*SUKI TEAL FULL COMFORTER 8 PCS KIT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "22437",
    name: "*SUKI TEAL FULL COMFORTER 8 PCS KIT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "22437",
    name: "*SUKI TEAL FULL COMFORTER 8 PCS KIT",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "22437",
    name: "*SUKI TEAL FULL COMFORTER 8 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "22437",
    name: "*SUKI TEAL FULL COMFORTER 8 PCS KIT",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "20597",
    name: "*TABATHA TAUPE KING COMFORTER 11 PCS KIT",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "20597",
    name: "*TABATHA TAUPE KING COMFORTER 11 PCS KIT",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "17623",
    name: "*TALYSSA KING COMFORTER 8 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-04-08"
  },
  {
    code: "14840",
    name: "*TARA PLUM KING COMFORTER 11 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-08-16"
  },
  {
    code: "15395",
    name: "*TRAVEL DIARIES LILAC FULL COMFORTER 9 PCS KIT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2021-09-23"
  },
  {
    code: "18738",
    name: "*TUCKER FULL COMFORTER 8 PCS KIT",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "17617",
    name: "*WATERLILY DARK BLUE KING COMFORTER 6 PCS KIT",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-03-22"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-28"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "48 - Jeddah Park",
    quantity: 3,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "21931",
    name: "*WILLA BLUE KING COMFORTER 11 PCS KIT",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22378",
    name: "008 VM TUMBER WITH STRAW 24 OZ",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "22378",
    name: "008 VM TUMBER WITH STRAW 24 OZ",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "22378",
    name: "008 VM TUMBER WITH STRAW 24 OZ",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "23713",
    name: "1034 PP TRAVEL BAG LARGE SIZE",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "23715",
    name: "150-162-156 PP TRAVEL BAG SMALL SIZE",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "15872",
    name: "1PCS BEDSKIRT KING SIZE BEIGE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-05-13"
  },
  {
    code: "15873",
    name: "1PCS BEDSKIRT KING SIZE BROWN",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "15871",
    name: "1PCS BEDSKIRT KING SIZE PINK",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 16,
    lastSaleDate: "2023-07-06"
  },
  {
    code: "15874",
    name: "1PCS BEDSKIRT KING SIZE WHITE",
    mall: "11-Jouri Mall",
    quantity: 4,
    lastSaleDate: "2021-06-19"
  },
  {
    code: "15874",
    name: "1PCS BEDSKIRT KING SIZE WHITE",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2021-09-25"
  },
  {
    code: "15874",
    name: "1PCS BEDSKIRT KING SIZE WHITE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-09-12"
  },
  {
    code: "15874",
    name: "1PCS BEDSKIRT KING SIZE WHITE",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2020-11-21"
  },
  {
    code: "23695",
    name: "2102 CLASSY TROLLEY BAG WITH A LAPTOP BOX L SIZE",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "15424",
    name: "230TC DOWN ALT JEST RELAX KING PILLOW",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-08-11"
  },
  {
    code: "15424",
    name: "230TC DOWN ALT JEST RELAX KING PILLOW",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2022-05-25"
  },
  {
    code: "15535",
    name: "3PCS TOWEL SET BENTONNE",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-06-30"
  },
  {
    code: "16178",
    name: "3PCS TOWEL SET NIKI-GRAY",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2023-05-04"
  },
  {
    code: "15524",
    name: "3PCS TOWEL SET WAVE 2",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-03-13"
  },
  {
    code: "12822",
    name: "4740IVORY HONEY RALISON 50*86 RUG",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-12-08"
  },
  {
    code: "14877",
    name: "774 SHINNY LONG FUR WINTER KING COMFORTER 3 PCS BROWN",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2023-11-12"
  },
  {
    code: "22485",
    name: "90*50 KITCH TOWEL BTP-243",
    mall: "16-Ehsa Othaim Mall",
    quantity: 30,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "22485",
    name: "90*50 KITCH TOWEL BTP-243",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "22452",
    name: "90*50 KITCH TOWEL BTP-550",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "23131",
    name: "90*50 KITCH TOWEL LUSTROUS LAVENDER BTP-802",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "23131",
    name: "90*50 KITCH TOWEL LUSTROUS LAVENDER BTP-802",
    mall: "15-Riyadh Othaim Mall",
    quantity: 8,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "23131",
    name: "90*50 KITCH TOWEL LUSTROUS LAVENDER BTP-802",
    mall: "30-Tala Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "23131",
    name: "90*50 KITCH TOWEL LUSTROUS LAVENDER BTP-802",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23131",
    name: "90*50 KITCH TOWEL LUSTROUS LAVENDER BTP-802",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "23131",
    name: "90*50 KITCH TOWEL LUSTROUS LAVENDER BTP-802",
    mall: "48 - Jeddah Park",
    quantity: 5,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "23131",
    name: "90*50 KITCH TOWEL LUSTROUS LAVENDER BTP-802",
    mall: "57-Sauq7",
    quantity: 5,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "09-Al-Salam Mall",
    quantity: 5,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "13-Al-Yasmin Mall",
    quantity: 4,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "15-Riyadh Othaim Mall",
    quantity: 8,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-03-02"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "23133",
    name: "90*50 KITCH TOWEL LUSTROUS PINK BTP-802",
    mall: "57-Sauq7",
    quantity: 10,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "23137",
    name: "90*50 KITCH TOWEL ORANGE BTP-666",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-11-08"
  },
  {
    code: "23137",
    name: "90*50 KITCH TOWEL ORANGE BTP-666",
    mall: "16-Ehsa Othaim Mall",
    quantity: 8,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "23137",
    name: "90*50 KITCH TOWEL ORANGE BTP-666",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-22"
  },
  {
    code: "23137",
    name: "90*50 KITCH TOWEL ORANGE BTP-666",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "23137",
    name: "90*50 KITCH TOWEL ORANGE BTP-666",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "23139",
    name: "90*50 KITCH TOWEL ROSE BTP-666",
    mall: "16-Ehsa Othaim Mall",
    quantity: 24,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "23139",
    name: "90*50 KITCH TOWEL ROSE BTP-666",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "23139",
    name: "90*50 KITCH TOWEL ROSE BTP-666",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "23151",
    name: "90*50 KITCH TOWEL SPECIAL BROWN BTP-8082",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-05-19"
  },
  {
    code: "23151",
    name: "90*50 KITCH TOWEL SPECIAL BROWN BTP-8082",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "23149",
    name: "90*50 KITCH TOWEL SPECIAL GREEN BTP-8082",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "23147",
    name: "90*50 KITCH TOWEL SPECIAL GREY BTP-8082",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-17"
  },
  {
    code: "23147",
    name: "90*50 KITCH TOWEL SPECIAL GREY BTP-8082",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "23147",
    name: "90*50 KITCH TOWEL SPECIAL GREY BTP-8082",
    mall: "20-Sitten Street Makkah",
    quantity: 29,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23148",
    name: "90*50 KITCH TOWEL SPECIAL SKY BLUE BTP-8082",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "23150",
    name: "90*50 KITCH TOWEL SPECIAL TITANUM BTP-8082",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-05-11"
  },
  {
    code: "23150",
    name: "90*50 KITCH TOWEL SPECIAL TITANUM BTP-8082",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "23146",
    name: "90*50 KITCH TOWEL SPECIAL WHITE BTP-8082",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "23134",
    name: "90*50 KITCH TOWEL YELLOW BTP-666",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "15273",
    name: "@*QUILA KING COMFORTER 11 PCS KIT",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-12-15"
  },
  {
    code: "13640",
    name: "@ACCESS SET 5 PCS NZ90-624",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-01-31"
  },
  {
    code: "13641",
    name: "@ACCESS SET 5 PCS NZ90-625",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2021-01-16"
  },
  {
    code: "13720",
    name: "@ACCESS SET 5 PCS NZ90-627",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-10-09"
  },
  {
    code: "13720",
    name: "@ACCESS SET 5 PCS NZ90-627",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2020-10-30"
  },
  {
    code: "13581",
    name: "@BASHA BASH JACK 1 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2021-05-20"
  },
  {
    code: "13135",
    name: "@DINING SET 19 PCS ARK 01",
    mall: "27-Dhahran Mall khobar",
    quantity: 3,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "13135",
    name: "@DINING SET 19 PCS ARK 01",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2020-12-20"
  },
  {
    code: "13135",
    name: "@DINING SET 19 PCS ARK 01",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-05-03"
  },
  {
    code: "13135",
    name: "@DINING SET 19 PCS ARK 01",
    mall: "22-Tabuk Park",
    quantity: 11,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "13135",
    name: "@DINING SET 19 PCS ARK 01",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "13567",
    name: "@DINNER SET 28 PCS DS10",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2019-01-10"
  },
  {
    code: "13569",
    name: "@DINNER SET 28 PCS DS14",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2020-05-12"
  },
  {
    code: "14407",
    name: "@DINNER SET 28 PCS OBB DS 16",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2020-10-04"
  },
  {
    code: "14408",
    name: "@DINNER SET 28 PCS OBB DS 17",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2021-07-03"
  },
  {
    code: "14410",
    name: "@DINNER SET 28 PCS OBB DS 19",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "14020",
    name: "@DINNER SET ARK",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-01-15"
  },
  {
    code: "12163",
    name: "@FINEST KING 6 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-01-17"
  },
  {
    code: "14411",
    name: "@FORK AND SPOONS FREINCH FOOD SET",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2021-09-28"
  },
  {
    code: "14411",
    name: "@FORK AND SPOONS FREINCH FOOD SET",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2019-11-11"
  },
  {
    code: "14411",
    name: "@FORK AND SPOONS FREINCH FOOD SET",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2021-01-07"
  },
  {
    code: "14486",
    name: "@HELEN CREAM S/M BATHROBE",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2021-04-13"
  },
  {
    code: "14490",
    name: "@HELEN PINK L/XL BATHROBE",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-08-18"
  },
  {
    code: "14491",
    name: "@HELEN STONE L/XL BATHROBE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-06-15"
  },
  {
    code: "13587",
    name: "@JUCI CUPS 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2022-08-16"
  },
  {
    code: "16282",
    name: "@JUCJ AND GLASSES 7 PCS N9665/7",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-10-01"
  },
  {
    code: "16279",
    name: "@JUCJ AND GLASSES 7 PCS N9666/7",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2023-01-05"
  },
  {
    code: "12308",
    name: "@LUMINARC DINING SET 26 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 2,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "12308",
    name: "@LUMINARC DINING SET 26 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-24"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2020-12-27"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "24-Yanbu Dana Mall",
    quantity: 5,
    lastSaleDate: "2019-11-21"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2021-09-12"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2020-06-21"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "12-Al_Hamra Mall",
    quantity: 6,
    lastSaleDate: "2023-05-23"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2023-04-15"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 8,
    lastSaleDate: "2024-04-14"
  },
  {
    code: "11831",
    name: "@META 5 PCS ACCESS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-08-15"
  },
  {
    code: "13033",
    name: "@NEW BONE CHINA ROUND DINNER SET 28 PCS DS-17A252",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2021-03-05"
  },
  {
    code: "14197",
    name: "@RAMADAN LANTERN DYXL181016L",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-01-12"
  },
  {
    code: "14197",
    name: "@RAMADAN LANTERN DYXL181016L",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2020-05-16"
  },
  {
    code: "14204",
    name: "@RAMADAN LANTERN DYYT17360",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2020-06-21"
  },
  {
    code: "12164",
    name: "@SILK QUILT 4 PCS F/Q",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-01-24"
  },
  {
    code: "12164",
    name: "@SILK QUILT 4 PCS F/Q",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2021-01-16"
  },
  {
    code: "12162",
    name: "@SILVER LEAF KING 6 PCS",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2020-09-07"
  },
  {
    code: "12162",
    name: "@SILVER LEAF KING 6 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2021-06-16"
  },
  {
    code: "14121",
    name: "@STAINLESS CUITLERY SET 30 PCS FULL GOLD FINISH B160",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "14119",
    name: "@STAINLESS CUITLERY SET 30 PCS MIRROR FINISH ONLY B117",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "14117",
    name: "@STAINLESS CUITLERY SET 30 PCS MIRROR+GOLD FINISH A288",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "14117",
    name: "@STAINLESS CUITLERY SET 30 PCS MIRROR+GOLD FINISH A288",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-27"
  },
  {
    code: "14118",
    name: "@STAINLESS CUITLERY SET 30 PCS MIRROR+GOLD FINISH B117",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2020-09-24"
  },
  {
    code: "14120",
    name: "@STAINLESS CUITLERY SET 30 PCS MIRROR+GOLD FINISH B181",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2020-06-13"
  },
  {
    code: "14120",
    name: "@STAINLESS CUITLERY SET 30 PCS MIRROR+GOLD FINISH B181",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-03-19"
  },
  {
    code: "13931",
    name: "@TEA CUP ARC  6 PCS",
    mall: "11-Jouri Mall",
    quantity: 4,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "14463",
    name: "@TRANSPARENT CUPS 12 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2021-05-27"
  },
  {
    code: "15174",
    name: "@TURKISH COFFEE 12 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "15174",
    name: "@TURKISH COFFEE 12 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2024-05-14"
  },
  {
    code: "11223",
    name: "@UNIFORM",
    mall: "20-Sitten Street Makkah",
    quantity: 7,
    lastSaleDate: "2021-04-20"
  },
  {
    code: "13338",
    name: "@VENESSA PUDRA BED COVER",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-01-20"
  },
  {
    code: "13580",
    name: "@WATER JACK BLUE COVER",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2022-04-08"
  },
  {
    code: "20474",
    name: "A KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-17"
  },
  {
    code: "20436",
    name: "A KITCHEN TOWEL IVORY 28*16",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-12-13"
  },
  {
    code: "20436",
    name: "A KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "23731",
    name: "A28 FABRIC TRAVEL BAG LARGE SIZE",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "23729",
    name: "A28 FABRIC TRAVEL BAG SMALL SIZE",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "21562",
    name: "ADA BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "21308",
    name: "AFA CORA FLORA-PURPLE KING COMFORTER 3 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-06-21"
  },
  {
    code: "11823",
    name: "AGATE 5 PCS ACCESS NZ90-412",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-04-17"
  },
  {
    code: "19318",
    name: "AIR-RICH BURGANDY  70X140 BATH TOWEL",
    mall: "51-Park Avenue Riyadh",
    quantity: 4,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "19318",
    name: "AIR-RICH BURGANDY  70X140 BATH TOWEL",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "19318",
    name: "AIR-RICH BURGANDY  70X140 BATH TOWEL",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-19"
  },
  {
    code: "19318",
    name: "AIR-RICH BURGANDY  70X140 BATH TOWEL",
    mall: "47-Al-Nakheel Plaza",
    quantity: 9,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "19318",
    name: "AIR-RICH BURGANDY  70X140 BATH TOWEL",
    mall: "50-Meem Plaza Riyadh",
    quantity: 9,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "19318",
    name: "AIR-RICH BURGANDY  70X140 BATH TOWEL",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "19318",
    name: "AIR-RICH BURGANDY  70X140 BATH TOWEL",
    mall: "53-Al Basateen Mall",
    quantity: 6,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "19347",
    name: "AIR-RICH LAVENDER 70X140 BATH TOWEL",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "19347",
    name: "AIR-RICH LAVENDER 70X140 BATH TOWEL",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "19347",
    name: "AIR-RICH LAVENDER 70X140 BATH TOWEL",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "19319",
    name: "AIR-RICH P.BLUE 70X140 BATH TOWEL",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "19286",
    name: "AIRLIE MINT KING DUVET COVER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-09-01"
  },
  {
    code: "19097",
    name: "AL ANOUD REFRIGERATOR",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-02-23"
  },
  {
    code: "19098",
    name: "AL JAWAHER REFRIGERATOR",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-04-28"
  },
  {
    code: "19098",
    name: "AL JAWAHER REFRIGERATOR",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2021-04-27"
  },
  {
    code: "20921",
    name: "ALLISON FULL COMFORTER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-25"
  },
  {
    code: "20921",
    name: "ALLISON FULL COMFORTER 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "20921",
    name: "ALLISON FULL COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2023-06-26"
  },
  {
    code: "17638",
    name: "ANDY DAHLIA 5 PCS ACCESS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-07-17"
  },
  {
    code: "18343",
    name: "ANTI-FATIGUE 20X36 INCH MAT",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-09-20"
  },
  {
    code: "18500",
    name: "ANTI-FATIGUE MAT 20X42 INCH",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "18499",
    name: "ANTI-FATIGUE MAT 20X60 INCH",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "18499",
    name: "ANTI-FATIGUE MAT 20X60 INCH",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-11-28"
  },
  {
    code: "18499",
    name: "ANTI-FATIGUE MAT 20X60 INCH",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "18499",
    name: "ANTI-FATIGUE MAT 20X60 INCH",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-07-30"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-03-15"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2024-11-11"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-01-26"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 18,
    lastSaleDate: "2023-11-18"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-10-28"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20854",
    name: "AQUA SAVON FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-07-13"
  },
  {
    code: "14339",
    name: "AQUA SHEET (QUEEN) SET 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2020-09-23"
  },
  {
    code: "23478",
    name: "ARABI TUB 0100105",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "21666",
    name: "ARABIC COFFE 6 PCS.",
    mall: "43-Mujan Park",
    quantity: 18,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "19241",
    name: "ARABIC COFFE CUPS 6 PCS 1567GR-21YGB-6",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-08-27"
  },
  {
    code: "19241",
    name: "ARABIC COFFE CUPS 6 PCS 1567GR-21YGB-6",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-01-14"
  },
  {
    code: "19241",
    name: "ARABIC COFFE CUPS 6 PCS 1567GR-21YGB-6",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2021-12-16"
  },
  {
    code: "21724",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-026",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "21727",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-029",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "21727",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-029",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-05-12"
  },
  {
    code: "21727",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-029",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "21727",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-029",
    mall: "43-Mujan Park",
    quantity: 7,
    lastSaleDate: "2024-05-01"
  },
  {
    code: "21729",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-031",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-05-14"
  },
  {
    code: "21729",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-031",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "21729",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-031",
    mall: "42-Dareen Mall Dammam",
    quantity: 6,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "20-Sitten Street Makkah",
    quantity: 6,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "21730",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-032",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "21731",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-033",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-30"
  },
  {
    code: "21731",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-033",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-11-16"
  },
  {
    code: "21732",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-034",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "21732",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-034",
    mall: "42-Dareen Mall Dammam",
    quantity: 10,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "21732",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-034",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "21732",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-034",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2024-07-13"
  },
  {
    code: "21733",
    name: "ARABIC COFFEE SET 6 PCS 90 ML CS-035",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "16513",
    name: "ARCTIC MEMORY FOAM STANDARD PILLOW",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2023-06-17"
  },
  {
    code: "16513",
    name: "ARCTIC MEMORY FOAM STANDARD PILLOW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-06-02"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-08"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-04-28"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-11-23"
  },
  {
    code: "19899",
    name: "ARK DINING SET 40 PCS P758/40",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-03-04"
  },
  {
    code: "19904",
    name: "AROOGA BATH ACCESS SET 5 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-08-26"
  },
  {
    code: "19904",
    name: "AROOGA BATH ACCESS SET 5 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-08-29"
  },
  {
    code: "19331",
    name: "ARTISTIC GREY KING QUILT 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-17"
  },
  {
    code: "17939",
    name: "AS IS 119",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "16503",
    name: "AS IS 129 S.R",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "17941",
    name: "AS IS 169",
    mall: "57-Sauq7",
    quantity: 4,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "14182",
    name: "AS IS 2 SR",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "14182",
    name: "AS IS 2 SR",
    mall: "57-Sauq7",
    quantity: 16,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "19074",
    name: "AS IS 349 S.R",
    mall: "57-Sauq7",
    quantity: 3,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "19946",
    name: "ASHBY PAISLEY-DENIM POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "19946",
    name: "ASHBY PAISLEY-DENIM POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "23503",
    name: "ASHER PLAI NAVY FULL COMFORTER 8 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "23503",
    name: "ASHER PLAI NAVY FULL COMFORTER 8 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "23503",
    name: "ASHER PLAI NAVY FULL COMFORTER 8 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "23503",
    name: "ASHER PLAI NAVY FULL COMFORTER 8 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "15541",
    name: "ASSORTED 3 PCS KING",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-07-10"
  },
  {
    code: "23181",
    name: "ASSORTED BATH ROBE BRID 6 PCS",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "23181",
    name: "ASSORTED BATH ROBE BRID 6 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "23181",
    name: "ASSORTED BATH ROBE BRID 6 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "14833",
    name: "AVANTI TOWEL 3 PCS #110",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2021-08-14"
  },
  {
    code: "14834",
    name: "AVANTI TOWEL 3 PCS #111",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-03-25"
  },
  {
    code: "16232",
    name: "AVANTI TOWEL 3 PCS #129",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-19"
  },
  {
    code: "16238",
    name: "AVANTI TOWEL 3 PCS #133",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-01-07"
  },
  {
    code: "16244",
    name: "AVANTI TOWEL 3 PCS #139",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-10-24"
  },
  {
    code: "23180",
    name: "AYSEL BATH ROBE BRID BEIGE - CREAM 6 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23180",
    name: "AYSEL BATH ROBE BRID BEIGE - CREAM 6 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "22124",
    name: "AZURE JUICE CUPS 3 PCS 420055/3",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "22124",
    name: "AZURE JUICE CUPS 3 PCS 420055/3",
    mall: "17-Arar Othaim Mall",
    quantity: 11,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "20481",
    name: "B KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-15"
  },
  {
    code: "20443",
    name: "B KITCHEN TOWEL IVORY 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-05"
  },
  {
    code: "20443",
    name: "B KITCHEN TOWEL IVORY 28*16",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "20443",
    name: "B KITCHEN TOWEL IVORY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-15"
  },
  {
    code: "20443",
    name: "B KITCHEN TOWEL IVORY 28*16",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2023-12-26"
  },
  {
    code: "20443",
    name: "B KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "20462",
    name: "B KITCHEN TOWEL WHITE 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-17"
  },
  {
    code: "20462",
    name: "B KITCHEN TOWEL WHITE 28*16",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "23724",
    name: "B290 BARREL BAG SIZE 30",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "23725",
    name: "B290 BARREL BAG SIZE 36",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "23726",
    name: "BAB-30 BARREL BAG SIZE 30",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-12-01"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-26"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-17"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-06-26"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "24-Yanbu Dana Mall",
    quantity: 33,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "27-Dhahran Mall khobar",
    quantity: 2,
    lastSaleDate: "2024-02-28"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2024-06-11"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-07-14"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "47-Al-Nakheel Plaza",
    quantity: 49,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-03-23"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 6,
    lastSaleDate: "2024-12-09"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2024-08-10"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-08-10"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-07-20"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-06-10"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2024-06-19"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "43-Mujan Park",
    quantity: 9,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-05-01"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "54-THE VILLAGE",
    quantity: 4,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "20852",
    name: "BALSAM & CEDAR FRESHENER WHITE 200 ML",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "23767",
    name: "BASKET BALL SMALL",
    mall: "55- Jabl Omar",
    quantity: 10,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-11-19"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "19-Hail Othaim Mall",
    quantity: 8,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "19405",
    name: "BATH MAT 17X24IN BLUE HAZE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2024-10-08"
  },
  {
    code: "19392",
    name: "BATH MAT 21X34IN BLUE HAZE",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2023-04-18"
  },
  {
    code: "19392",
    name: "BATH MAT 21X34IN BLUE HAZE",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "19392",
    name: "BATH MAT 21X34IN BLUE HAZE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-04-17"
  },
  {
    code: "19394",
    name: "BATH MAT 21X34IN P.BLUE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "19394",
    name: "BATH MAT 21X34IN P.BLUE",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "19379",
    name: "BATH MAT 24X60IN BLUE HAZE",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "19379",
    name: "BATH MAT 24X60IN BLUE HAZE",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "19379",
    name: "BATH MAT 24X60IN BLUE HAZE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "19379",
    name: "BATH MAT 24X60IN BLUE HAZE",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "19375",
    name: "BATH MAT 24X60IN CHINO GREEN",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2022-03-19"
  },
  {
    code: "19375",
    name: "BATH MAT 24X60IN CHINO GREEN",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2022-12-22"
  },
  {
    code: "19375",
    name: "BATH MAT 24X60IN CHINO GREEN",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "04-Andalos Mall",
    quantity: 8,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "07-Arab Mall",
    quantity: 6,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "08-Makkah Mall",
    quantity: 4,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "09-Al-Salam Mall",
    quantity: 5,
    lastSaleDate: "2024-09-24"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "11-Jouri Mall",
    quantity: 12,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "13-Al-Yasmin Mall",
    quantity: 12,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "14-Al Kamal Mall",
    quantity: 9,
    lastSaleDate: "2024-11-19"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "18-Al_Khayyat Center",
    quantity: 6,
    lastSaleDate: "2024-11-03"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 8,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "48 - Jeddah Park",
    quantity: 8,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "54-THE VILLAGE",
    quantity: 6,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "56- Aziz Mall 2",
    quantity: 8,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22278",
    name: "BATH MAT 24X60IN NAVY",
    mall: "57-Sauq7",
    quantity: 2,
    lastSaleDate: "2024-05-19"
  },
  {
    code: "19380",
    name: "BATH MAT 24X60IN OYESTER MUSHROON",
    mall: "06-Red Sea Mall",
    quantity: 5,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "19380",
    name: "BATH MAT 24X60IN OYESTER MUSHROON",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "19380",
    name: "BATH MAT 24X60IN OYESTER MUSHROON",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "19384",
    name: "BATH MAT 24X60IN TITANIUM",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-04-03"
  },
  {
    code: "19384",
    name: "BATH MAT 24X60IN TITANIUM",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "19384",
    name: "BATH MAT 24X60IN TITANIUM",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "16473",
    name: "BATH MAT 5 SMALL SIZE 50*80",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2020-08-20"
  },
  {
    code: "19364",
    name: "BATH MAT SET 2 PCS LINEN",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-27"
  },
  {
    code: "19364",
    name: "BATH MAT SET 2 PCS LINEN",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-04-17"
  },
  {
    code: "19369",
    name: "BATH MAT SET 2 PCS P.BLUE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-16"
  },
  {
    code: "19369",
    name: "BATH MAT SET 2 PCS P.BLUE",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-14"
  },
  {
    code: "19369",
    name: "BATH MAT SET 2 PCS P.BLUE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-03-17"
  },
  {
    code: "19939",
    name: "BATH ROBE BLUE HAZ XS/S",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-04-29"
  },
  {
    code: "19939",
    name: "BATH ROBE BLUE HAZ XS/S",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "19939",
    name: "BATH ROBE BLUE HAZ XS/S",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-06"
  },
  {
    code: "19939",
    name: "BATH ROBE BLUE HAZ XS/S",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-28"
  },
  {
    code: "19939",
    name: "BATH ROBE BLUE HAZ XS/S",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-05-11"
  },
  {
    code: "14312",
    name: "BATH ROBE BLUE HAZE L/XL",
    mall: "07-Arab Mall",
    quantity: 6,
    lastSaleDate: "2023-10-10"
  },
  {
    code: "14315",
    name: "BATH ROBE BLUE HAZE S/M",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-19"
  },
  {
    code: "14315",
    name: "BATH ROBE BLUE HAZE S/M",
    mall: "44-Al-Jouf Center",
    quantity: 7,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "14315",
    name: "BATH ROBE BLUE HAZE S/M",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "16841",
    name: "BATH ROBE CHINO GREEN L/XL",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-12-18"
  },
  {
    code: "16841",
    name: "BATH ROBE CHINO GREEN L/XL",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-09-13"
  },
  {
    code: "16841",
    name: "BATH ROBE CHINO GREEN L/XL",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "16841",
    name: "BATH ROBE CHINO GREEN L/XL",
    mall: "09-Al-Salam Mall",
    quantity: 12,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "16841",
    name: "BATH ROBE CHINO GREEN L/XL",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2023-06-06"
  },
  {
    code: "21766",
    name: "BATH ROBE GRAPE WINE L/XL",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "21766",
    name: "BATH ROBE GRAPE WINE L/XL",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "21766",
    name: "BATH ROBE GRAPE WINE L/XL",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "21766",
    name: "BATH ROBE GRAPE WINE L/XL",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "21766",
    name: "BATH ROBE GRAPE WINE L/XL",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "21762",
    name: "BATH ROBE GRAPE WINE S/M",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-11-13"
  },
  {
    code: "21762",
    name: "BATH ROBE GRAPE WINE S/M",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "20945",
    name: "BATH ROBE HAZEL STRIPE S/M FIELD GREEN",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-20"
  },
  {
    code: "20945",
    name: "BATH ROBE HAZEL STRIPE S/M FIELD GREEN",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-02-04"
  },
  {
    code: "20934",
    name: "BATH ROBE HAZEL STRIPE X/S COSMIC CORAL",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-10-15"
  },
  {
    code: "20939",
    name: "BATH ROBE HAZEL STRIPE X/S FIELD GREEN",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20939",
    name: "BATH ROBE HAZEL STRIPE X/S FIELD GREEN",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-14"
  },
  {
    code: "20939",
    name: "BATH ROBE HAZEL STRIPE X/S FIELD GREEN",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-19"
  },
  {
    code: "20939",
    name: "BATH ROBE HAZEL STRIPE X/S FIELD GREEN",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-03-10"
  },
  {
    code: "20939",
    name: "BATH ROBE HAZEL STRIPE X/S FIELD GREEN",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-01-16"
  },
  {
    code: "20939",
    name: "BATH ROBE HAZEL STRIPE X/S FIELD GREEN",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "20939",
    name: "BATH ROBE HAZEL STRIPE X/S FIELD GREEN",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "20936",
    name: "BATH ROBE HAZEL STRIPE X/S NAVY BLUES",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-10-30"
  },
  {
    code: "20938",
    name: "BATH ROBE HAZEL STRIPE X/S STRIKING BLUE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "20320",
    name: "BATH ROBE HOOD L/XL IVORY",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20320",
    name: "BATH ROBE HOOD L/XL IVORY",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "20312",
    name: "BATH ROBE HOOD L/XL NAVY",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "20303",
    name: "BATH ROBE HOOD L/XL WHITE",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "20303",
    name: "BATH ROBE HOOD L/XL WHITE",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-09"
  },
  {
    code: "20303",
    name: "BATH ROBE HOOD L/XL WHITE",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "20303",
    name: "BATH ROBE HOOD L/XL WHITE",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "20303",
    name: "BATH ROBE HOOD L/XL WHITE",
    mall: "56- Aziz Mall 2",
    quantity: 5,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "20298",
    name: "BATH ROBE HOOD S/M BLUE HAZE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "20309",
    name: "BATH ROBE HOOD S/M IVORY",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "20309",
    name: "BATH ROBE HOOD S/M IVORY",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-23"
  },
  {
    code: "20309",
    name: "BATH ROBE HOOD S/M IVORY",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "20309",
    name: "BATH ROBE HOOD S/M IVORY",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "20309",
    name: "BATH ROBE HOOD S/M IVORY",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "20309",
    name: "BATH ROBE HOOD S/M IVORY",
    mall: "20-Sitten Street Makkah",
    quantity: 4,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "20300",
    name: "BATH ROBE HOOD S/M NAVY",
    mall: "14-Al Kamal Mall",
    quantity: 6,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "20300",
    name: "BATH ROBE HOOD S/M NAVY",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "22871",
    name: "BATH ROBE HOOD S/M ROSE TAN",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "20314",
    name: "BATH ROBE HOOD X/S OYS MASHROOM",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "20314",
    name: "BATH ROBE HOOD X/S OYS MASHROOM",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-10-22"
  },
  {
    code: "20314",
    name: "BATH ROBE HOOD X/S OYS MASHROOM",
    mall: "09-Al-Salam Mall",
    quantity: 5,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "20314",
    name: "BATH ROBE HOOD X/S OYS MASHROOM",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-29"
  },
  {
    code: "20315",
    name: "BATH ROBE HOOD X/S P.BLUE",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "20315",
    name: "BATH ROBE HOOD X/S P.BLUE",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20315",
    name: "BATH ROBE HOOD X/S P.BLUE",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "20315",
    name: "BATH ROBE HOOD X/S P.BLUE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "20315",
    name: "BATH ROBE HOOD X/S P.BLUE",
    mall: "09-Al-Salam Mall",
    quantity: 8,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20315",
    name: "BATH ROBE HOOD X/S P.BLUE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "20315",
    name: "BATH ROBE HOOD X/S P.BLUE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20293",
    name: "BATH ROBE HOOD X/S ROSE",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-01-01"
  },
  {
    code: "21763",
    name: "BATH ROBE INFINITY S/M",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "21763",
    name: "BATH ROBE INFINITY S/M",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-01-21"
  },
  {
    code: "21763",
    name: "BATH ROBE INFINITY S/M",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "21763",
    name: "BATH ROBE INFINITY S/M",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "20325",
    name: "BATH ROBE IVORY WAFFLE PIPING X/S",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-20"
  },
  {
    code: "20325",
    name: "BATH ROBE IVORY WAFFLE PIPING X/S",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-06-22"
  },
  {
    code: "20325",
    name: "BATH ROBE IVORY WAFFLE PIPING X/S",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "21768",
    name: "BATH ROBE L.WREATH L/XL",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "21768",
    name: "BATH ROBE L.WREATH L/XL",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "21768",
    name: "BATH ROBE L.WREATH L/XL",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "21768",
    name: "BATH ROBE L.WREATH L/XL",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "21768",
    name: "BATH ROBE L.WREATH L/XL",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "14311",
    name: "BATH ROBE LAVENDER L/XL",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "20326",
    name: "BATH ROBE LAVENDER WAFFLE PIPING X/S",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-02-22"
  },
  {
    code: "20326",
    name: "BATH ROBE LAVENDER WAFFLE PIPING X/S",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-29"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-01-01"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-08-12"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2023-03-04"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-10-16"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-10-15"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "50-Meem Plaza Riyadh",
    quantity: 11,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-11-08"
  },
  {
    code: "20331",
    name: "BATH ROBE LINEN WAFFLE PIPING X/S",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "19959",
    name: "BATH ROBE NAVY L/XL",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-05-11"
  },
  {
    code: "19960",
    name: "BATH ROBE NAVY S/M",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "19960",
    name: "BATH ROBE NAVY S/M",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "19530",
    name: "BATH ROBE NAVY WAFFLE PIPING L/XL",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "19529",
    name: "BATH ROBE OYSTER MUSHROOM WAFFLE PIPING L/XL",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-12-10"
  },
  {
    code: "20327",
    name: "BATH ROBE OYSTER MUSHROOM WAFFLE PIPING X/S",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "14010",
    name: "BATH ROBE SKY BLUE L/XL",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "14009",
    name: "BATH ROBE SKY BLUE S/M",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "20235",
    name: "BATH ROBE WHITE & BROWN FUR ( LARGE )",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20234",
    name: "BATH ROBE WHITE & BROWN FUR ( MEDUIM )",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-07-27"
  },
  {
    code: "20234",
    name: "BATH ROBE WHITE & BROWN FUR ( MEDUIM )",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20234",
    name: "BATH ROBE WHITE & BROWN FUR ( MEDUIM )",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-01-15"
  },
  {
    code: "20234",
    name: "BATH ROBE WHITE & BROWN FUR ( MEDUIM )",
    mall: "52-Al_Baha Mall",
    quantity: 9,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-01"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "52-Al_Baha Mall",
    quantity: 5,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "20233",
    name: "BATH ROBE WHITE & BROWN FUR ( SMALL )",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "20231",
    name: "BATH ROBE WHITE & GREY FUR ( MEDUIM )",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-12-13"
  },
  {
    code: "20231",
    name: "BATH ROBE WHITE & GREY FUR ( MEDUIM )",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "20231",
    name: "BATH ROBE WHITE & GREY FUR ( MEDUIM )",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "20231",
    name: "BATH ROBE WHITE & GREY FUR ( MEDUIM )",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "20230",
    name: "BATH ROBE WHITE & GREY FUR ( SMALL )",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-09"
  },
  {
    code: "20230",
    name: "BATH ROBE WHITE & GREY FUR ( SMALL )",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20230",
    name: "BATH ROBE WHITE & GREY FUR ( SMALL )",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-12-31"
  },
  {
    code: "20230",
    name: "BATH ROBE WHITE & GREY FUR ( SMALL )",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-05"
  },
  {
    code: "20230",
    name: "BATH ROBE WHITE & GREY FUR ( SMALL )",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-10-27"
  },
  {
    code: "20230",
    name: "BATH ROBE WHITE & GREY FUR ( SMALL )",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-10-30"
  },
  {
    code: "20230",
    name: "BATH ROBE WHITE & GREY FUR ( SMALL )",
    mall: "57-Sauq7",
    quantity: 4,
    lastSaleDate: "2025-04-23"
  },
  {
    code: "13626",
    name: "BATH SHEET 164*76 CM ARABESQUE NO (2)",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "14896",
    name: "BATH SHEET 165*81 CM (B) PREMIUM",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "13444",
    name: "BATH SHEET 76.164 CM WAFFLE NO (2)",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-05-13"
  },
  {
    code: "16061",
    name: "BATH SHEET AIR-RICH CHINO GREEN",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2023-11-29"
  },
  {
    code: "16061",
    name: "BATH SHEET AIR-RICH CHINO GREEN",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-07-30"
  },
  {
    code: "16061",
    name: "BATH SHEET AIR-RICH CHINO GREEN",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-06-19"
  },
  {
    code: "14420",
    name: "BATH SHEET AIR-RICH LIVING CORAL",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-30"
  },
  {
    code: "16062",
    name: "BATH SHEET AIR-RICH ROSE DUST",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "16062",
    name: "BATH SHEET AIR-RICH ROSE DUST",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-09"
  },
  {
    code: "14014",
    name: "BATH SHEET AIR-RICH SKY BLUE",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-05-29"
  },
  {
    code: "12321",
    name: "BATH SHEET WAVES 89*178 L.BLUE",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2023-08-22"
  },
  {
    code: "12328",
    name: "BATH SHEET WAVES 89*178 SILVER",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2019-07-22"
  },
  {
    code: "15523",
    name: "BATH SHEET ZERO TWIST 1 PCS 170*85",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "14844",
    name: "BATH TOWEL 118*60 CM OMBRE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "14844",
    name: "BATH TOWEL 118*60 CM OMBRE",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-10-05"
  },
  {
    code: "21092",
    name: "BATH TOWEL 90X150 CM AZUL",
    mall: "30-Tala Mall Riyadh",
    quantity: 11,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "21092",
    name: "BATH TOWEL 90X150 CM AZUL",
    mall: "50-Meem Plaza Riyadh",
    quantity: 6,
    lastSaleDate: "2022-11-12"
  },
  {
    code: "21094",
    name: "BATH TOWEL 90X150 CM MENTA",
    mall: "40-Hayat Mall Riyad",
    quantity: 4,
    lastSaleDate: "2024-06-30"
  },
  {
    code: "21094",
    name: "BATH TOWEL 90X150 CM MENTA",
    mall: "47-Al-Nakheel Plaza",
    quantity: 9,
    lastSaleDate: "2022-11-12"
  },
  {
    code: "21097",
    name: "BATH TOWEL 90X150 CM WHITE",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2022-11-12"
  },
  {
    code: "21362",
    name: "BATH TOWEL 90X150 CM.",
    mall: "36-Al jubail Mall",
    quantity: 6,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "21362",
    name: "BATH TOWEL 90X150 CM.",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "23371",
    name: "BATH TOWEL AIR-RICH 70X140 CM PINK CARN",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "23371",
    name: "BATH TOWEL AIR-RICH 70X140 CM PINK CARN",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "23371",
    name: "BATH TOWEL AIR-RICH 70X140 CM PINK CARN",
    mall: "44-Al-Jouf Center",
    quantity: 8,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "23371",
    name: "BATH TOWEL AIR-RICH 70X140 CM PINK CARN",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "14484",
    name: "BATH TOWEL NO(1)PREMIUM 61*122 CM",
    mall: "30-Tala Mall Riyadh",
    quantity: 21,
    lastSaleDate: "2023-01-04"
  },
  {
    code: "14485",
    name: "BATH TOWEL PREMIUM 61*122 CM NO(2)",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-05-30"
  },
  {
    code: "14485",
    name: "BATH TOWEL PREMIUM 61*122 CM NO(2)",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2022-11-17"
  },
  {
    code: "15120",
    name: "BATHROBE ( JMC ) WINTER WHITE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2020-12-16"
  },
  {
    code: "15120",
    name: "BATHROBE ( JMC ) WINTER WHITE",
    mall: "18-Al_Khayyat Center",
    quantity: 2,
    lastSaleDate: "2021-06-01"
  },
  {
    code: "22366",
    name: "BE-75 WHITE BEAR WRAP HOODED 124*180",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "22366",
    name: "BE-75 WHITE BEAR WRAP HOODED 124*180",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-11-15"
  },
  {
    code: "22294",
    name: "BE-79 MAN SLIPPER GREY 40/41",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "22294",
    name: "BE-79 MAN SLIPPER GREY 40/41",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "22294",
    name: "BE-79 MAN SLIPPER GREY 40/41",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "22294",
    name: "BE-79 MAN SLIPPER GREY 40/41",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "22294",
    name: "BE-79 MAN SLIPPER GREY 40/41",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "22289",
    name: "BE-79 WOMAN SLIPPER GREY 38/39",
    mall: "18-Al_Khayyat Center",
    quantity: 3,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22289",
    name: "BE-79 WOMAN SLIPPER GREY 38/39",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22289",
    name: "BE-79 WOMAN SLIPPER GREY 38/39",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "22292",
    name: "BE-79 WOMAN SLIPPER LIGHT BROWN 38/39",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22292",
    name: "BE-79 WOMAN SLIPPER LIGHT BROWN 38/39",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "22292",
    name: "BE-79 WOMAN SLIPPER LIGHT BROWN 38/39",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "22293",
    name: "BE-79 WOMAN SLIPPER LIGHT BROWN 40/41",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "22293",
    name: "BE-79 WOMAN SLIPPER LIGHT BROWN 40/41",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22293",
    name: "BE-79 WOMAN SLIPPER LIGHT BROWN 40/41",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "22293",
    name: "BE-79 WOMAN SLIPPER LIGHT BROWN 40/41",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22321",
    name: "BE-81 MAN SLIPPER BLACK 40/41",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "22352",
    name: "BE-81 MAN SLIPPER BONE 42/43",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "22348",
    name: "BE-81 MAN SLIPPER DESERT SAND 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "22348",
    name: "BE-81 MAN SLIPPER DESERT SAND 40/41",
    mall: "27-Dhahran Mall khobar",
    quantity: 2,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "22324",
    name: "BE-81 MAN SLIPPER EARTH BROWN 40/41",
    mall: "24-Yanbu Dana Mall",
    quantity: 4,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "22330",
    name: "BE-81 MAN SLIPPER NAVY 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "22330",
    name: "BE-81 MAN SLIPPER NAVY 40/41",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-10-08"
  },
  {
    code: "22327",
    name: "BE-81 MAN SLIPPER ORANGE 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "22327",
    name: "BE-81 MAN SLIPPER ORANGE 40/41",
    mall: "27-Dhahran Mall khobar",
    quantity: 3,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "22327",
    name: "BE-81 MAN SLIPPER ORANGE 40/41",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "22345",
    name: "BE-81 WOMEN SLIPPER BLACK 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "22345",
    name: "BE-81 WOMEN SLIPPER BLACK 36/37",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "22344",
    name: "BE-81 WOMEN SLIPPER BONE 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-23"
  },
  {
    code: "22344",
    name: "BE-81 WOMEN SLIPPER BONE 40/41",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-24"
  },
  {
    code: "22339",
    name: "BE-81 WOMEN SLIPPER DESER SAND 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "22312",
    name: "BE-81 WOMEN SLIPPER EARTH BROWN 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "22314",
    name: "BE-81 WOMEN SLIPPER EARTH BROWN 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-07-06"
  },
  {
    code: "22318",
    name: "BE-81 WOMEN SLIPPER NAVY 36/37",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "22319",
    name: "BE-81 WOMEN SLIPPER NAVY 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-06-21"
  },
  {
    code: "22334",
    name: "BE-82 WOMEN SLIPPER PINK 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "22334",
    name: "BE-82 WOMEN SLIPPER PINK 38/39",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "22334",
    name: "BE-82 WOMEN SLIPPER PINK 38/39",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "22334",
    name: "BE-82 WOMEN SLIPPER PINK 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-09-01"
  },
  {
    code: "22335",
    name: "BE-82 WOMEN SLIPPER PINK 40/41",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22337",
    name: "BE-82 WOMEN SLIPPER PURPLE 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 14,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "22337",
    name: "BE-82 WOMEN SLIPPER PURPLE 38/39",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "22337",
    name: "BE-82 WOMEN SLIPPER PURPLE 38/39",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "22337",
    name: "BE-82 WOMEN SLIPPER PURPLE 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 10,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "22338",
    name: "BE-82 WOMEN SLIPPER PURPLE 40/41",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "22209",
    name: "BE-83 MAN SLIPPER BRIGHT GREEN 40/41",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "22209",
    name: "BE-83 MAN SLIPPER BRIGHT GREEN 40/41",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "22209",
    name: "BE-83 MAN SLIPPER BRIGHT GREEN 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-08-22"
  },
  {
    code: "22203",
    name: "BE-83 MAN SLIPPER YELLOW 40/41",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "22203",
    name: "BE-83 MAN SLIPPER YELLOW 40/41",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "22226",
    name: "BE-83 WOMEN SLIPPER NAVY 40/41",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "22200",
    name: "BE-83 WOMEN SLIPPER YELLOW 36/37",
    mall: "27-Dhahran Mall khobar",
    quantity: 11,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "22200",
    name: "BE-83 WOMEN SLIPPER YELLOW 36/37",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "22200",
    name: "BE-83 WOMEN SLIPPER YELLOW 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "22201",
    name: "BE-83 WOMEN SLIPPER YELLOW 38/39",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "22240",
    name: "BE-85 MAN SLIPPER WHIE&BLUE 42/43",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "22240",
    name: "BE-85 MAN SLIPPER WHIE&BLUE 42/43",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22263",
    name: "BE-86 MAN SLIPPER BIEGE 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "22263",
    name: "BE-86 MAN SLIPPER BIEGE 40/41",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "22263",
    name: "BE-86 MAN SLIPPER BIEGE 40/41",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "22252",
    name: "BE-86 MAN SLIPPER BLACK 42/43",
    mall: "15-Riyadh Othaim Mall",
    quantity: 10,
    lastSaleDate: "2024-10-15"
  },
  {
    code: "22252",
    name: "BE-86 MAN SLIPPER BLACK 42/43",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-04-23"
  },
  {
    code: "22252",
    name: "BE-86 MAN SLIPPER BLACK 42/43",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "22257",
    name: "BE-86 MAN SLIPPER NAVY 40/41",
    mall: "24-Yanbu Dana Mall",
    quantity: 7,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "22257",
    name: "BE-86 MAN SLIPPER NAVY 40/41",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "22257",
    name: "BE-86 MAN SLIPPER NAVY 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "22258",
    name: "BE-86 MAN SLIPPER NAVY 42/43",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "22258",
    name: "BE-86 MAN SLIPPER NAVY 42/43",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "22258",
    name: "BE-86 MAN SLIPPER NAVY 42/43",
    mall: "24-Yanbu Dana Mall",
    quantity: 11,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22258",
    name: "BE-86 MAN SLIPPER NAVY 42/43",
    mall: "52-Al_Baha Mall",
    quantity: 13,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "22259",
    name: "BE-86 MAN SLIPPER NAVY 44/45",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "22259",
    name: "BE-86 MAN SLIPPER NAVY 44/45",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "22259",
    name: "BE-86 MAN SLIPPER NAVY 44/45",
    mall: "52-Al_Baha Mall",
    quantity: 9,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "13-Al-Yasmin Mall",
    quantity: 8,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "27-Dhahran Mall khobar",
    quantity: 8,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "40-Hayat Mall Riyad",
    quantity: 4,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "22363",
    name: "BE-86 MAN SLIPPER NEON GREEN 40/41",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "22711",
    name: "BE-87 MAN SLIPPER BLACK 40/41",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "22711",
    name: "BE-87 MAN SLIPPER BLACK 40/41",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-06-18"
  },
  {
    code: "22711",
    name: "BE-87 MAN SLIPPER BLACK 40/41",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "22711",
    name: "BE-87 MAN SLIPPER BLACK 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22711",
    name: "BE-87 MAN SLIPPER BLACK 40/41",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "22712",
    name: "BE-87 MAN SLIPPER BLACK 42/43",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "22713",
    name: "BE-87 MAN SLIPPER BLACK 44/45",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22713",
    name: "BE-87 MAN SLIPPER BLACK 44/45",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 9,
    lastSaleDate: "2025-04-06"
  },
  {
    code: "22713",
    name: "BE-87 MAN SLIPPER BLACK 44/45",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "22713",
    name: "BE-87 MAN SLIPPER BLACK 44/45",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "22713",
    name: "BE-87 MAN SLIPPER BLACK 44/45",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "22714",
    name: "BE-87 MAN SLIPPER CAMEL 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "22715",
    name: "BE-87 MAN SLIPPER CAMEL 42/43",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "22716",
    name: "BE-87 MAN SLIPPER CAMEL 44/45",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "22716",
    name: "BE-87 MAN SLIPPER CAMEL 44/45",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "22716",
    name: "BE-87 MAN SLIPPER CAMEL 44/45",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 4,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "22708",
    name: "BE-87 MAN SLIPPER NAVY 40/41",
    mall: "16-Ehsa Othaim Mall",
    quantity: 7,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22708",
    name: "BE-87 MAN SLIPPER NAVY 40/41",
    mall: "19-Hail Othaim Mall",
    quantity: 13,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22708",
    name: "BE-87 MAN SLIPPER NAVY 40/41",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22708",
    name: "BE-87 MAN SLIPPER NAVY 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22708",
    name: "BE-87 MAN SLIPPER NAVY 40/41",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22709",
    name: "BE-87 MAN SLIPPER NAVY 42/43",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22709",
    name: "BE-87 MAN SLIPPER NAVY 42/43",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-04-27"
  },
  {
    code: "22710",
    name: "BE-87 MAN SLIPPER NAVY 44/45",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22710",
    name: "BE-87 MAN SLIPPER NAVY 44/45",
    mall: "23-Alia Mall Madinah",
    quantity: 3,
    lastSaleDate: "2025-01-14"
  },
  {
    code: "22710",
    name: "BE-87 MAN SLIPPER NAVY 44/45",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "22720",
    name: "BE-89 MAN SLIPPER DARK GREY 40/41",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22720",
    name: "BE-89 MAN SLIPPER DARK GREY 40/41",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "22720",
    name: "BE-89 MAN SLIPPER DARK GREY 40/41",
    mall: "14-Al Kamal Mall",
    quantity: 15,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22720",
    name: "BE-89 MAN SLIPPER DARK GREY 40/41",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22720",
    name: "BE-89 MAN SLIPPER DARK GREY 40/41",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "22720",
    name: "BE-89 MAN SLIPPER DARK GREY 40/41",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22720",
    name: "BE-89 MAN SLIPPER DARK GREY 40/41",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "22721",
    name: "BE-89 MAN SLIPPER DARK GREY 42/43",
    mall: "44-Al-Jouf Center",
    quantity: 11,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "22722",
    name: "BE-89 MAN SLIPPER DARK GREY 44/45",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "22722",
    name: "BE-89 MAN SLIPPER DARK GREY 44/45",
    mall: "14-Al Kamal Mall",
    quantity: 28,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "22722",
    name: "BE-89 MAN SLIPPER DARK GREY 44/45",
    mall: "44-Al-Jouf Center",
    quantity: 9,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "22722",
    name: "BE-89 MAN SLIPPER DARK GREY 44/45",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22732",
    name: "BE-91 WOMAN SLIPPER CAMEL 36/37",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "22732",
    name: "BE-91 WOMAN SLIPPER CAMEL 36/37",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "22733",
    name: "BE-91 WOMAN SLIPPER CAMEL 38/39",
    mall: "20-Sitten Street Makkah",
    quantity: 6,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22733",
    name: "BE-91 WOMAN SLIPPER CAMEL 38/39",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "22733",
    name: "BE-91 WOMAN SLIPPER CAMEL 38/39",
    mall: "48 - Jeddah Park",
    quantity: 4,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22733",
    name: "BE-91 WOMAN SLIPPER CAMEL 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "22733",
    name: "BE-91 WOMAN SLIPPER CAMEL 38/39",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "22733",
    name: "BE-91 WOMAN SLIPPER CAMEL 38/39",
    mall: "55- Jabl Omar",
    quantity: 8,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22735",
    name: "BE-91 WOMAN SLIPPER PINK 36/37",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "22735",
    name: "BE-91 WOMAN SLIPPER PINK 36/37",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "22735",
    name: "BE-91 WOMAN SLIPPER PINK 36/37",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "22735",
    name: "BE-91 WOMAN SLIPPER PINK 36/37",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "22736",
    name: "BE-91 WOMAN SLIPPER PINK 38/39",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "22736",
    name: "BE-91 WOMAN SLIPPER PINK 38/39",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22736",
    name: "BE-91 WOMAN SLIPPER PINK 38/39",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22736",
    name: "BE-91 WOMAN SLIPPER PINK 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "22736",
    name: "BE-91 WOMAN SLIPPER PINK 38/39",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "22736",
    name: "BE-91 WOMAN SLIPPER PINK 38/39",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "22736",
    name: "BE-91 WOMAN SLIPPER PINK 38/39",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "04-Andalos Mall",
    quantity: 7,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "18-Al_Khayyat Center",
    quantity: 4,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 8,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "43-Mujan Park",
    quantity: 8,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "48 - Jeddah Park",
    quantity: 5,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-02"
  },
  {
    code: "22730",
    name: "BE-91 WOMAN SLIPPER PURPLE 38/39",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22812",
    name: "BE-92 WOMEN SLIPPER BLACK 36/37",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-04-16"
  },
  {
    code: "22812",
    name: "BE-92 WOMEN SLIPPER BLACK 36/37",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "22812",
    name: "BE-92 WOMEN SLIPPER BLACK 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "22812",
    name: "BE-92 WOMEN SLIPPER BLACK 36/37",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "22814",
    name: "BE-92 WOMEN SLIPPER BLACK 40/41",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "22814",
    name: "BE-92 WOMEN SLIPPER BLACK 40/41",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22815",
    name: "BE-92 WOMEN SLIPPER CAMEL 36/37",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "22815",
    name: "BE-92 WOMEN SLIPPER CAMEL 36/37",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 8,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22815",
    name: "BE-92 WOMEN SLIPPER CAMEL 36/37",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22815",
    name: "BE-92 WOMEN SLIPPER CAMEL 36/37",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 8,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 8,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "22816",
    name: "BE-92 WOMEN SLIPPER CAMEL 38/39",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "22830",
    name: "BE-93 WOMEN SLIPPER WHITE-BLACK 36/37",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22830",
    name: "BE-93 WOMEN SLIPPER WHITE-BLACK 36/37",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "22832",
    name: "BE-93 WOMEN SLIPPER WHITE-BLACK 40/41",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22832",
    name: "BE-93 WOMEN SLIPPER WHITE-BLACK 40/41",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22832",
    name: "BE-93 WOMEN SLIPPER WHITE-BLACK 40/41",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "22832",
    name: "BE-93 WOMEN SLIPPER WHITE-BLACK 40/41",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22821",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 36/37",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "22821",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 36/37",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22821",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22822",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 38/39",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "22822",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 38/39",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22823",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 40/41",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "22823",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 40/41",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22823",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 40/41",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22823",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 40/41",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22823",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 40/41",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22823",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22823",
    name: "BE-93 WOMEN SLIPPER WHITE-CAMEL 40/41",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-09-02"
  },
  {
    code: "22827",
    name: "BE-93 WOMEN SLIPPER WHITE-GREY 36/37",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "22829",
    name: "BE-93 WOMEN SLIPPER WHITE-GREY 40/41",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22829",
    name: "BE-93 WOMEN SLIPPER WHITE-GREY 40/41",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22829",
    name: "BE-93 WOMEN SLIPPER WHITE-GREY 40/41",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "22824",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22825",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 38/39",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "22825",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 38/39",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22825",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 38/39",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "22825",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 38/39",
    mall: "48 - Jeddah Park",
    quantity: 3,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "22825",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 38/39",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22825",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 38/39",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "22826",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 40/41",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "22826",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 40/41",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22826",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 40/41",
    mall: "09-Al-Salam Mall",
    quantity: 3,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "22826",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 40/41",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-04-06"
  },
  {
    code: "22826",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 40/41",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22826",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 40/41",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22826",
    name: "BE-93 WOMEN SLIPPER WHITE-PINK 40/41",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "22766",
    name: "BE-94 WOMAN SLIPPER GREEN 38/39",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22766",
    name: "BE-94 WOMAN SLIPPER GREEN 38/39",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "22766",
    name: "BE-94 WOMAN SLIPPER GREEN 38/39",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "22766",
    name: "BE-94 WOMAN SLIPPER GREEN 38/39",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "22766",
    name: "BE-94 WOMAN SLIPPER GREEN 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "22767",
    name: "BE-94 WOMAN SLIPPER GREEN 40/41",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "22772",
    name: "BE-94 WOMAN SLIPPER GREY 38/39",
    mall: "38-Al_Riyadh Park",
    quantity: 3,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "22768",
    name: "BE-94 WOMAN SLIPPER NAVY 36/37",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "22768",
    name: "BE-94 WOMAN SLIPPER NAVY 36/37",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "22768",
    name: "BE-94 WOMAN SLIPPER NAVY 36/37",
    mall: "50-Meem Plaza Riyadh",
    quantity: 6,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22768",
    name: "BE-94 WOMAN SLIPPER NAVY 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "22769",
    name: "BE-94 WOMAN SLIPPER NAVY 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-06-03"
  },
  {
    code: "22770",
    name: "BE-94 WOMAN SLIPPER NAVY 40/41",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "22762",
    name: "BE-94 WOMAN SLIPPER WHITE 36/37",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "22762",
    name: "BE-94 WOMAN SLIPPER WHITE 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "22762",
    name: "BE-94 WOMAN SLIPPER WHITE 36/37",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "22809",
    name: "BE-95 WOMEN SLIPPER BEIGE 36/37",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "22809",
    name: "BE-95 WOMEN SLIPPER BEIGE 36/37",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22809",
    name: "BE-95 WOMEN SLIPPER BEIGE 36/37",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "22809",
    name: "BE-95 WOMEN SLIPPER BEIGE 36/37",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "22809",
    name: "BE-95 WOMEN SLIPPER BEIGE 36/37",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "22809",
    name: "BE-95 WOMEN SLIPPER BEIGE 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "22810",
    name: "BE-95 WOMEN SLIPPER BEIGE 38/39",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "22810",
    name: "BE-95 WOMEN SLIPPER BEIGE 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "22811",
    name: "BE-95 WOMEN SLIPPER BEIGE 40/41",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "22811",
    name: "BE-95 WOMEN SLIPPER BEIGE 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22811",
    name: "BE-95 WOMEN SLIPPER BEIGE 40/41",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "22833",
    name: "BE-95 WOMEN SLIPPER BLACK 36/37",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "22833",
    name: "BE-95 WOMEN SLIPPER BLACK 36/37",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22833",
    name: "BE-95 WOMEN SLIPPER BLACK 36/37",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "22833",
    name: "BE-95 WOMEN SLIPPER BLACK 36/37",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "22834",
    name: "BE-95 WOMEN SLIPPER BLACK 38/39",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "22834",
    name: "BE-95 WOMEN SLIPPER BLACK 38/39",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "22834",
    name: "BE-95 WOMEN SLIPPER BLACK 38/39",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "22835",
    name: "BE-95 WOMEN SLIPPER BLACK 40/41",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22806",
    name: "BE-95 WOMEN SLIPPER BROWN 36/37",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22806",
    name: "BE-95 WOMEN SLIPPER BROWN 36/37",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "22806",
    name: "BE-95 WOMEN SLIPPER BROWN 36/37",
    mall: "51-Park Avenue Riyadh",
    quantity: 4,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22807",
    name: "BE-95 WOMEN SLIPPER BROWN 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "22807",
    name: "BE-95 WOMEN SLIPPER BROWN 38/39",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "22807",
    name: "BE-95 WOMEN SLIPPER BROWN 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "22807",
    name: "BE-95 WOMEN SLIPPER BROWN 38/39",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "22807",
    name: "BE-95 WOMEN SLIPPER BROWN 38/39",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "22807",
    name: "BE-95 WOMEN SLIPPER BROWN 38/39",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-11-13"
  },
  {
    code: "22807",
    name: "BE-95 WOMEN SLIPPER BROWN 38/39",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "22808",
    name: "BE-95 WOMEN SLIPPER BROWN 40/41",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "22808",
    name: "BE-95 WOMEN SLIPPER BROWN 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "22808",
    name: "BE-95 WOMEN SLIPPER BROWN 40/41",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "22837",
    name: "BE-95 WOMEN SLIPPER GREY 38/39",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "22838",
    name: "BE-95 WOMEN SLIPPER GREY 40/41",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22838",
    name: "BE-95 WOMEN SLIPPER GREY 40/41",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "22838",
    name: "BE-95 WOMEN SLIPPER GREY 40/41",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "22838",
    name: "BE-95 WOMEN SLIPPER GREY 40/41",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "22838",
    name: "BE-95 WOMEN SLIPPER GREY 40/41",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "22840",
    name: "BE-95 WOMEN SLIPPER PINK 38/39",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "22840",
    name: "BE-95 WOMEN SLIPPER PINK 38/39",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "22840",
    name: "BE-95 WOMEN SLIPPER PINK 38/39",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22840",
    name: "BE-95 WOMEN SLIPPER PINK 38/39",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "22840",
    name: "BE-95 WOMEN SLIPPER PINK 38/39",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "22840",
    name: "BE-95 WOMEN SLIPPER PINK 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "22840",
    name: "BE-95 WOMEN SLIPPER PINK 38/39",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "22841",
    name: "BE-95 WOMEN SLIPPER PINK 40/41",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-11-27"
  },
  {
    code: "22841",
    name: "BE-95 WOMEN SLIPPER PINK 40/41",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "22841",
    name: "BE-95 WOMEN SLIPPER PINK 40/41",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "22803",
    name: "BE-95 WOMEN SLIPPER WHITE 36/37",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22803",
    name: "BE-95 WOMEN SLIPPER WHITE 36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "22803",
    name: "BE-95 WOMEN SLIPPER WHITE 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22803",
    name: "BE-95 WOMEN SLIPPER WHITE 36/37",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "22804",
    name: "BE-95 WOMEN SLIPPER WHITE 38/39",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "22804",
    name: "BE-95 WOMEN SLIPPER WHITE 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22804",
    name: "BE-95 WOMEN SLIPPER WHITE 38/39",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "22804",
    name: "BE-95 WOMEN SLIPPER WHITE 38/39",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "22804",
    name: "BE-95 WOMEN SLIPPER WHITE 38/39",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "22804",
    name: "BE-95 WOMEN SLIPPER WHITE 38/39",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "22805",
    name: "BE-95 WOMEN SLIPPER WHITE 40/41",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "22805",
    name: "BE-95 WOMEN SLIPPER WHITE 40/41",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "22805",
    name: "BE-95 WOMEN SLIPPER WHITE 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22738",
    name: "BE-96 WOMAN SLIPPER BEIGE 36/37",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-12-22"
  },
  {
    code: "22738",
    name: "BE-96 WOMAN SLIPPER BEIGE 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22723",
    name: "BE-96 WOMAN SLIPPER HOT PINK 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "22723",
    name: "BE-96 WOMAN SLIPPER HOT PINK 36/37",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "22723",
    name: "BE-96 WOMAN SLIPPER HOT PINK 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22723",
    name: "BE-96 WOMAN SLIPPER HOT PINK 36/37",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22724",
    name: "BE-96 WOMAN SLIPPER HOT PINK 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "22724",
    name: "BE-96 WOMAN SLIPPER HOT PINK 38/39",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "06-Red Sea Mall",
    quantity: 3,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "13-Al-Yasmin Mall",
    quantity: 3,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22725",
    name: "BE-96 WOMAN SLIPPER HOT PINK 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "22774",
    name: "BE-96 WOMAN SLIPPER PINK 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22774",
    name: "BE-96 WOMAN SLIPPER PINK 36/37",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "22774",
    name: "BE-96 WOMAN SLIPPER PINK 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "22775",
    name: "BE-96 WOMAN SLIPPER PINK 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22775",
    name: "BE-96 WOMAN SLIPPER PINK 38/39",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22775",
    name: "BE-96 WOMAN SLIPPER PINK 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22775",
    name: "BE-96 WOMAN SLIPPER PINK 38/39",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22726",
    name: "BE-96 WOMAN SLIPPER PURPLE 36/37",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "22726",
    name: "BE-96 WOMAN SLIPPER PURPLE 36/37",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-14"
  },
  {
    code: "22726",
    name: "BE-96 WOMAN SLIPPER PURPLE 36/37",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "22726",
    name: "BE-96 WOMAN SLIPPER PURPLE 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "22726",
    name: "BE-96 WOMAN SLIPPER PURPLE 36/37",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "22726",
    name: "BE-96 WOMAN SLIPPER PURPLE 36/37",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "22727",
    name: "BE-96 WOMAN SLIPPER PURPLE 38/39",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "22727",
    name: "BE-96 WOMAN SLIPPER PURPLE 38/39",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-11-17"
  },
  {
    code: "22728",
    name: "BE-96 WOMAN SLIPPER PURPLE 40/41",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "22728",
    name: "BE-96 WOMAN SLIPPER PURPLE 40/41",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "22728",
    name: "BE-96 WOMAN SLIPPER PURPLE 40/41",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22783",
    name: "BE-97 WOMAN SLIPPER BEIGE 36/37",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22783",
    name: "BE-97 WOMAN SLIPPER BEIGE 36/37",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22783",
    name: "BE-97 WOMAN SLIPPER BEIGE 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22784",
    name: "BE-97 WOMAN SLIPPER BEIGE 38/39",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22784",
    name: "BE-97 WOMAN SLIPPER BEIGE 38/39",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "22784",
    name: "BE-97 WOMAN SLIPPER BEIGE 38/39",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22784",
    name: "BE-97 WOMAN SLIPPER BEIGE 38/39",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22784",
    name: "BE-97 WOMAN SLIPPER BEIGE 38/39",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22785",
    name: "BE-97 WOMAN SLIPPER BEIGE 40/41",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "22788",
    name: "BE-97 WOMAN SLIPPER BROWN 40/41",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22788",
    name: "BE-97 WOMAN SLIPPER BROWN 40/41",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "22788",
    name: "BE-97 WOMAN SLIPPER BROWN 40/41",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "22788",
    name: "BE-97 WOMAN SLIPPER BROWN 40/41",
    mall: "48 - Jeddah Park",
    quantity: 3,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22788",
    name: "BE-97 WOMAN SLIPPER BROWN 40/41",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22777",
    name: "BE-97 WOMAN SLIPPER GREY 36/37",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "22777",
    name: "BE-97 WOMAN SLIPPER GREY 36/37",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22777",
    name: "BE-97 WOMAN SLIPPER GREY 36/37",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22777",
    name: "BE-97 WOMAN SLIPPER GREY 36/37",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22777",
    name: "BE-97 WOMAN SLIPPER GREY 36/37",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "22778",
    name: "BE-97 WOMAN SLIPPER GREY 38/39",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "22778",
    name: "BE-97 WOMAN SLIPPER GREY 38/39",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22778",
    name: "BE-97 WOMAN SLIPPER GREY 38/39",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "22779",
    name: "BE-97 WOMAN SLIPPER GREY 40/41",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22779",
    name: "BE-97 WOMAN SLIPPER GREY 40/41",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22779",
    name: "BE-97 WOMAN SLIPPER GREY 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22779",
    name: "BE-97 WOMAN SLIPPER GREY 40/41",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "22779",
    name: "BE-97 WOMAN SLIPPER GREY 40/41",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22741",
    name: "BE-97 WOMAN SLIPPER HOT PINK 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "22741",
    name: "BE-97 WOMAN SLIPPER HOT PINK 36/37",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "22741",
    name: "BE-97 WOMAN SLIPPER HOT PINK 36/37",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "22742",
    name: "BE-97 WOMAN SLIPPER HOT PINK 38/39",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22742",
    name: "BE-97 WOMAN SLIPPER HOT PINK 38/39",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22742",
    name: "BE-97 WOMAN SLIPPER HOT PINK 38/39",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "22742",
    name: "BE-97 WOMAN SLIPPER HOT PINK 38/39",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22742",
    name: "BE-97 WOMAN SLIPPER HOT PINK 38/39",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "22743",
    name: "BE-97 WOMAN SLIPPER HOT PINK 40/41",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22743",
    name: "BE-97 WOMAN SLIPPER HOT PINK 40/41",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "22743",
    name: "BE-97 WOMAN SLIPPER HOT PINK 40/41",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22743",
    name: "BE-97 WOMAN SLIPPER HOT PINK 40/41",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "22743",
    name: "BE-97 WOMAN SLIPPER HOT PINK 40/41",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "22780",
    name: "BE-97 WOMAN SLIPPER PINK 36/37",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "22781",
    name: "BE-97 WOMAN SLIPPER PINK 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-05-30"
  },
  {
    code: "22781",
    name: "BE-97 WOMAN SLIPPER PINK 38/39",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22781",
    name: "BE-97 WOMAN SLIPPER PINK 38/39",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22781",
    name: "BE-97 WOMAN SLIPPER PINK 38/39",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22782",
    name: "BE-97 WOMAN SLIPPER PINK 40/41",
    mall: "09-Al-Salam Mall",
    quantity: 4,
    lastSaleDate: "2024-06-05"
  },
  {
    code: "22782",
    name: "BE-97 WOMAN SLIPPER PINK 40/41",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22782",
    name: "BE-97 WOMAN SLIPPER PINK 40/41",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22782",
    name: "BE-97 WOMAN SLIPPER PINK 40/41",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "22745",
    name: "BE-97 WOMAN SLIPPER WHITE 38/39",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "22745",
    name: "BE-97 WOMAN SLIPPER WHITE 38/39",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22745",
    name: "BE-97 WOMAN SLIPPER WHITE 38/39",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22745",
    name: "BE-97 WOMAN SLIPPER WHITE 38/39",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22745",
    name: "BE-97 WOMAN SLIPPER WHITE 38/39",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "22746",
    name: "BE-97 WOMAN SLIPPER WHITE 40/41",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22746",
    name: "BE-97 WOMAN SLIPPER WHITE 40/41",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-21"
  },
  {
    code: "22746",
    name: "BE-97 WOMAN SLIPPER WHITE 40/41",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22747",
    name: "BE-98 WOMAN SLIPPER BLACK 36/37",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "22747",
    name: "BE-98 WOMAN SLIPPER BLACK 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "22748",
    name: "BE-98 WOMAN SLIPPER BLACK 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22748",
    name: "BE-98 WOMAN SLIPPER BLACK 38/39",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22749",
    name: "BE-98 WOMAN SLIPPER BLACK 40/41",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "22750",
    name: "BE-98 WOMAN SLIPPER GREY 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "22750",
    name: "BE-98 WOMAN SLIPPER GREY 36/37",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "22750",
    name: "BE-98 WOMAN SLIPPER GREY 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22751",
    name: "BE-98 WOMAN SLIPPER GREY 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22751",
    name: "BE-98 WOMAN SLIPPER GREY 38/39",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-11-17"
  },
  {
    code: "22753",
    name: "BE-98 WOMAN SLIPPER HOT PINK 36/37",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "22753",
    name: "BE-98 WOMAN SLIPPER HOT PINK 36/37",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "22753",
    name: "BE-98 WOMAN SLIPPER HOT PINK 36/37",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "22753",
    name: "BE-98 WOMAN SLIPPER HOT PINK 36/37",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "22754",
    name: "BE-98 WOMAN SLIPPER HOT PINK 38/39",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "22755",
    name: "BE-98 WOMAN SLIPPER HOT PINK 40/41",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "22755",
    name: "BE-98 WOMAN SLIPPER HOT PINK 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "22755",
    name: "BE-98 WOMAN SLIPPER HOT PINK 40/41",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "22756",
    name: "BE-98 WOMAN SLIPPER PINK 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "22757",
    name: "BE-98 WOMAN SLIPPER PINK 38/39",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "22757",
    name: "BE-98 WOMAN SLIPPER PINK 38/39",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22758",
    name: "BE-98 WOMAN SLIPPER PINK 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "22758",
    name: "BE-98 WOMAN SLIPPER PINK 40/41",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "22758",
    name: "BE-98 WOMAN SLIPPER PINK 40/41",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22758",
    name: "BE-98 WOMAN SLIPPER PINK 40/41",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "22758",
    name: "BE-98 WOMAN SLIPPER PINK 40/41",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "22760",
    name: "BE-98 WOMAN SLIPPER WHITE 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "22760",
    name: "BE-98 WOMAN SLIPPER WHITE 38/39",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "22760",
    name: "BE-98 WOMAN SLIPPER WHITE 38/39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "22760",
    name: "BE-98 WOMAN SLIPPER WHITE 38/39",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "22760",
    name: "BE-98 WOMAN SLIPPER WHITE 38/39",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-11-17"
  },
  {
    code: "22760",
    name: "BE-98 WOMAN SLIPPER WHITE 38/39",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-22"
  },
  {
    code: "22761",
    name: "BE-98 WOMAN SLIPPER WHITE 40/41",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "22761",
    name: "BE-98 WOMAN SLIPPER WHITE 40/41",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "22790",
    name: "BE-99 WOMAN SLIPPER BROWN 38/39",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "22790",
    name: "BE-99 WOMAN SLIPPER BROWN 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22790",
    name: "BE-99 WOMAN SLIPPER BROWN 38/39",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "22790",
    name: "BE-99 WOMAN SLIPPER BROWN 38/39",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22790",
    name: "BE-99 WOMAN SLIPPER BROWN 38/39",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "22790",
    name: "BE-99 WOMAN SLIPPER BROWN 38/39",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "22790",
    name: "BE-99 WOMAN SLIPPER BROWN 38/39",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "22791",
    name: "BE-99 WOMAN SLIPPER BROWN 40/41",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22791",
    name: "BE-99 WOMAN SLIPPER BROWN 40/41",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "22791",
    name: "BE-99 WOMAN SLIPPER BROWN 40/41",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22791",
    name: "BE-99 WOMAN SLIPPER BROWN 40/41",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22791",
    name: "BE-99 WOMAN SLIPPER BROWN 40/41",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "22794",
    name: "BE-99 WOMAN SLIPPER IVORY 40/41",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22794",
    name: "BE-99 WOMAN SLIPPER IVORY 40/41",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22794",
    name: "BE-99 WOMAN SLIPPER IVORY 40/41",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22794",
    name: "BE-99 WOMAN SLIPPER IVORY 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22794",
    name: "BE-99 WOMAN SLIPPER IVORY 40/41",
    mall: "56- Aziz Mall 2",
    quantity: 5,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "22686",
    name: "BE88- MAN SLIPPER GREY 40/41",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-04-06"
  },
  {
    code: "22686",
    name: "BE88- MAN SLIPPER GREY 40/41",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "22686",
    name: "BE88- MAN SLIPPER GREY 40/41",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "22686",
    name: "BE88- MAN SLIPPER GREY 40/41",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "22686",
    name: "BE88- MAN SLIPPER GREY 40/41",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22686",
    name: "BE88- MAN SLIPPER GREY 40/41",
    mall: "55- Jabl Omar",
    quantity: 7,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "22687",
    name: "BE88- MAN SLIPPER GREY 42/43",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "22687",
    name: "BE88- MAN SLIPPER GREY 42/43",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22687",
    name: "BE88- MAN SLIPPER GREY 42/43",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22690",
    name: "BE88- MAN SLIPPER NAVY 42/43",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "22690",
    name: "BE88- MAN SLIPPER NAVY 42/43",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "22690",
    name: "BE88- MAN SLIPPER NAVY 42/43",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-19"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 12,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 11,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "24-Yanbu Dana Mall",
    quantity: 4,
    lastSaleDate: "2025-03-02"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "27-Dhahran Mall khobar",
    quantity: 12,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "27-Dhahran Mall khobar",
    quantity: 7,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "22691",
    name: "BE88- MAN SLIPPER NAVY 44/45",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 7,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "22693",
    name: "BE89- MAN SLIPPER NAVY 42/43",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "22693",
    name: "BE89- MAN SLIPPER NAVY 42/43",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "22693",
    name: "BE89- MAN SLIPPER NAVY 42/43",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22694",
    name: "BE89- MAN SLIPPER NAVY 44/45",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "22694",
    name: "BE89- MAN SLIPPER NAVY 44/45",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "22694",
    name: "BE89- MAN SLIPPER NAVY 44/45",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "22695",
    name: "BE90- MAN SLIPPER BLACK 40/41",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22695",
    name: "BE90- MAN SLIPPER BLACK 40/41",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "22695",
    name: "BE90- MAN SLIPPER BLACK 40/41",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-11"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22696",
    name: "BE90- MAN SLIPPER BLACK 42/43",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "27-Dhahran Mall khobar",
    quantity: 5,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "22701",
    name: "BE90- MAN SLIPPER GREY 40/41",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "22698",
    name: "BE90- MAN SLIPPER NAVY 40/41",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "22698",
    name: "BE90- MAN SLIPPER NAVY 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "22698",
    name: "BE90- MAN SLIPPER NAVY 40/41",
    mall: "27-Dhahran Mall khobar",
    quantity: 8,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "22698",
    name: "BE90- MAN SLIPPER NAVY 40/41",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22698",
    name: "BE90- MAN SLIPPER NAVY 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "22699",
    name: "BE90- MAN SLIPPER NAVY 42/43",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "22699",
    name: "BE90- MAN SLIPPER NAVY 42/43",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22699",
    name: "BE90- MAN SLIPPER NAVY 42/43",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "22700",
    name: "BE90- MAN SLIPPER NAVY 44/45",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "22700",
    name: "BE90- MAN SLIPPER NAVY 44/45",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "22700",
    name: "BE90- MAN SLIPPER NAVY 44/45",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "14945",
    name: "BEACH SHEET 160*70 ( BOUYANT ) STRIPE",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "14945",
    name: "BEACH SHEET 160*70 ( BOUYANT ) STRIPE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-08-18"
  },
  {
    code: "21626",
    name: "BEACH TOWEL PRINT 70*140 CM",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-04-01"
  },
  {
    code: "22456",
    name: "BEACH TOWEL TURTLE CORAL SWI 101X183 CM",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "22456",
    name: "BEACH TOWEL TURTLE CORAL SWI 101X183 CM",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-10-27"
  },
  {
    code: "22638",
    name: "BEAR FOREST GREEN FULL COMFORTER 7 PCS WM YZ BIAB",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "19958",
    name: "BEIGE POLYSTER KING SHEET 6 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-11-12"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-08-01"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-04-23"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2024-07-05"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-02-14"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2023-09-05"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-02-14"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2023-08-26"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "19901",
    name: "BERMUDA BATH ACCESS SET 5 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-06-08"
  },
  {
    code: "23720",
    name: "BG-02 CHEST SLING BAGS",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "23787",
    name: "BG52105 BAG",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "22956",
    name: "BIG BLOCK PRINT WATERCOLOR FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-04-25"
  },
  {
    code: "22963",
    name: "BIG BLOCK PRINT WATERCOLOR KING COMFORTER 9 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "22963",
    name: "BIG BLOCK PRINT WATERCOLOR KING COMFORTER 9 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-02"
  },
  {
    code: "22963",
    name: "BIG BLOCK PRINT WATERCOLOR KING COMFORTER 9 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "21541",
    name: "BIG DAPHNIE FULL COMFORTER 9 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-09-16"
  },
  {
    code: "21541",
    name: "BIG DAPHNIE FULL COMFORTER 9 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "21541",
    name: "BIG DAPHNIE FULL COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "21541",
    name: "BIG DAPHNIE FULL COMFORTER 9 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-19"
  },
  {
    code: "21551",
    name: "BIG DAPHNIE KING COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "21535",
    name: "BIG DITSY FLORAL FULL COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "21545",
    name: "BIG DITSY FLORAL KING COMFORTER 9 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-11"
  },
  {
    code: "23283",
    name: "BIG EMILIY FULL COMFORTER 9 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "19268",
    name: "BIG FLORAL MEALLION KING COMFORTER 9 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22953",
    name: "BIG FLORES ROSE FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "22953",
    name: "BIG FLORES ROSE FULL COMFORTER 9 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "20869",
    name: "BIG GEMMA KING COMFORTER 9 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "20869",
    name: "BIG GEMMA KING COMFORTER 9 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "20869",
    name: "BIG GEMMA KING COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 7,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "20869",
    name: "BIG GEMMA KING COMFORTER 9 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 7,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20869",
    name: "BIG GEMMA KING COMFORTER 9 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 7,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "20869",
    name: "BIG GEMMA KING COMFORTER 9 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22958",
    name: "BIG HERONSBILL MULT FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "23288",
    name: "BIG JASON CHECK FULL COMFORTER 9 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "23288",
    name: "BIG JASON CHECK FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "19970",
    name: "BIG KARITA KING COMFORTER 9 PCS",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2024-02-20"
  },
  {
    code: "19970",
    name: "BIG KARITA KING COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-03-03"
  },
  {
    code: "21537",
    name: "BIG MAJESTIC PEACOCK FULL COMFORTER 9 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-07-20"
  },
  {
    code: "21537",
    name: "BIG MAJESTIC PEACOCK FULL COMFORTER 9 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "21537",
    name: "BIG MAJESTIC PEACOCK FULL COMFORTER 9 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-04-29"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-12-08"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-09-10"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2023-09-24"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "22-Tabuk Park",
    quantity: 5,
    lastSaleDate: "2024-07-05"
  },
  {
    code: "21547",
    name: "BIG MAJESTIC PEACOCK KING COMFORTER 9 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "23285",
    name: "BIG MARBLE INK FULL COMFORTER 9 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "23285",
    name: "BIG MARBLE INK FULL COMFORTER 9 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 5,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "23285",
    name: "BIG MARBLE INK FULL COMFORTER 9 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "23285",
    name: "BIG MARBLE INK FULL COMFORTER 9 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "23285",
    name: "BIG MARBLE INK FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "19265",
    name: "BIG MELISSA KING COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22959",
    name: "BIG NACY TURQUOISE FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-04-25"
  },
  {
    code: "22959",
    name: "BIG NACY TURQUOISE FULL COMFORTER 9 PCS",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2024-07-18"
  },
  {
    code: "22951",
    name: "BIG NACY TURQUOISE KING COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "22960",
    name: "BIG NASCENT PLAID FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2024-04-18"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 5,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "22966",
    name: "BIG NASCENT PLAID KING COMFORTER 9 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-25"
  },
  {
    code: "20502",
    name: "BIG ONE ANITA BERRY FULL QUILT 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2024-10-14"
  },
  {
    code: "19881",
    name: "BIG ONE BLUE ASHES KING QUILT 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "22095",
    name: "BIG ONE CARLTON KING QUILT 3 PCS R06",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "22095",
    name: "BIG ONE CARLTON KING QUILT 3 PCS R06",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "22863",
    name: "BIG ONE DESHAWN KING QUILT 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "22863",
    name: "BIG ONE DESHAWN KING QUILT 3 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "22863",
    name: "BIG ONE DESHAWN KING QUILT 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2024-11-08"
  },
  {
    code: "22855",
    name: "BIG ONE DINO FULL QUILT 2 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-04-28"
  },
  {
    code: "22855",
    name: "BIG ONE DINO FULL QUILT 2 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "22855",
    name: "BIG ONE DINO FULL QUILT 2 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "22855",
    name: "BIG ONE DINO FULL QUILT 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 8,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "19876",
    name: "BIG ONE DUST PINK TWIN QUILT 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-25"
  },
  {
    code: "15133",
    name: "BIG ONE ELEPHANT KING 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-08-27"
  },
  {
    code: "20880",
    name: "BIG ONE ELOWIN FULL QUILT 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-29"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2024-04-26"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "20884",
    name: "BIG ONE FINN QUILT KING 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2023-11-22"
  },
  {
    code: "20882",
    name: "BIG ONE GEMMA FULL QUILT 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "18897",
    name: "BIG ONE GINA NEUTRAL KING 3 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 4,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "18897",
    name: "BIG ONE GINA NEUTRAL KING 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-05-24"
  },
  {
    code: "21054",
    name: "BIG ONE LATTICE FULL QUILT 2 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "21054",
    name: "BIG ONE LATTICE FULL QUILT 2 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "21054",
    name: "BIG ONE LATTICE FULL QUILT 2 PCS",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "22096",
    name: "BIG ONE LIAM KING QUILT 3 PCS A09",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "22096",
    name: "BIG ONE LIAM KING QUILT 3 PCS A09",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "22096",
    name: "BIG ONE LIAM KING QUILT 3 PCS A09",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-10-10"
  },
  {
    code: "21064",
    name: "BIG ONE LZAE BLOCK KING QUILT 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "19883",
    name: "BIG ONE MILITARY OLIVE KING QUILT 3 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "19883",
    name: "BIG ONE MILITARY OLIVE KING QUILT 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "19883",
    name: "BIG ONE MILITARY OLIVE KING QUILT 3 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "21046",
    name: "BIG ONE OVERSCALE MEDALLION FULL QUILT 2 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "21046",
    name: "BIG ONE OVERSCALE MEDALLION FULL QUILT 2 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "21057",
    name: "BIG ONE OVERSCALE MEDALLION KING QUILT 3 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "21057",
    name: "BIG ONE OVERSCALE MEDALLION KING QUILT 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "15346",
    name: "BIG ONE SOLID BLUE KING 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-30"
  },
  {
    code: "22104",
    name: "BIG ONE SPRING KING QUILT 3 PCS R28",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-06-28"
  },
  {
    code: "20500",
    name: "BIG ONE STARRY FULL QUILT 2 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-06-26"
  },
  {
    code: "22845",
    name: "BIG ONE SUNNY TANGERINE FULL QUILT 2 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "18902",
    name: "BIG ONE SWEET FLORAL FULL QUILT 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-20"
  },
  {
    code: "15339",
    name: "BIG ONE TAYLOR KING 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-30"
  },
  {
    code: "22110",
    name: "BIG ONE TEXTURED HEARTS FULL QUILT 2 PCS X11",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-07-23"
  },
  {
    code: "22852",
    name: "BIG ONE TRIANGLE PATCH KING QUILT 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "22852",
    name: "BIG ONE TRIANGLE PATCH KING QUILT 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22852",
    name: "BIG ONE TRIANGLE PATCH KING QUILT 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "23393",
    name: "BIG ONE VINTAGE STRIPE FULL QUILT 2 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "23393",
    name: "BIG ONE VINTAGE STRIPE FULL QUILT 2 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "23393",
    name: "BIG ONE VINTAGE STRIPE FULL QUILT 2 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "22853",
    name: "BIG ONE WILDFLOWER LT.BROWN KING QUILT 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22961",
    name: "BIG PASILEY BROWN FULL COMFORTER 9 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-07-08"
  },
  {
    code: "22961",
    name: "BIG PASILEY BROWN FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "22967",
    name: "BIG PASILEY BROWN KING COMFORTER 9 PCS",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2024-06-28"
  },
  {
    code: "22967",
    name: "BIG PASILEY BROWN KING COMFORTER 9 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22962",
    name: "BIG PATCHWORK FULL COMFORTER 9 PCS",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "22968",
    name: "BIG PATCHWORK KING COMFORTER 9 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22968",
    name: "BIG PATCHWORK KING COMFORTER 9 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "21549",
    name: "BIG STANFORD PLAID KING COMFORTER 9 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "21549",
    name: "BIG STANFORD PLAID KING COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-02-02"
  },
  {
    code: "21549",
    name: "BIG STANFORD PLAID KING COMFORTER 9 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "20768",
    name: "BIG STITCHED MEDALLION FULL COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "20768",
    name: "BIG STITCHED MEDALLION FULL COMFORTER 9 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "20768",
    name: "BIG STITCHED MEDALLION FULL COMFORTER 9 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "20773",
    name: "BIG TWYLA FULL COMFORTER 9 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "20773",
    name: "BIG TWYLA FULL COMFORTER 9 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-06"
  },
  {
    code: "16352",
    name: "BIG UNICORN FULL COMFORTER 9 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-15"
  },
  {
    code: "20770",
    name: "BIG VINTAGE STRIPE FULL COMFORTER 9 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-09-14"
  },
  {
    code: "21716",
    name: "BLACK BLOSSOM TURKISH COFFEE SET 6 PCS 90 ML CS-024",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-06"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2023-10-05"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-10-20"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2023-12-03"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2023-10-14"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "20846",
    name: "BLACK CHERRY FRESHENER WHITE 200 ML",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-12-16"
  },
  {
    code: "22515",
    name: "BLACK SO-SOFT KING COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-07"
  },
  {
    code: "22515",
    name: "BLACK SO-SOFT KING COMFORTER 3 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "22515",
    name: "BLACK SO-SOFT KING COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "22515",
    name: "BLACK SO-SOFT KING COMFORTER 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-23"
  },
  {
    code: "22509",
    name: "BLACK STRAW DOORMAT WELCOME 45*75 CM",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "22502",
    name: "BLANKET BLACK KING CORDUROY",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "22502",
    name: "BLANKET BLACK KING CORDUROY",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22502",
    name: "BLANKET BLACK KING CORDUROY",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "22502",
    name: "BLANKET BLACK KING CORDUROY",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "22502",
    name: "BLANKET BLACK KING CORDUROY",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22505",
    name: "BLANKET BLACK KING WAVE",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22505",
    name: "BLANKET BLACK KING WAVE",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "22505",
    name: "BLANKET BLACK KING WAVE",
    mall: "53-Al Basateen Mall",
    quantity: 2,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20930",
    name: "BLANKET FULL QUEEN PRINTED PLUSH WITH SHERPA 229 * 229",
    mall: "09-Al-Salam Mall",
    quantity: 3,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "20930",
    name: "BLANKET FULL QUEEN PRINTED PLUSH WITH SHERPA 229 * 229",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "20930",
    name: "BLANKET FULL QUEEN PRINTED PLUSH WITH SHERPA 229 * 229",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-01-11"
  },
  {
    code: "20930",
    name: "BLANKET FULL QUEEN PRINTED PLUSH WITH SHERPA 229 * 229",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2022-12-05"
  },
  {
    code: "22495",
    name: "BLANKET GREY FULL CORDUROY",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-01-07"
  },
  {
    code: "22504",
    name: "BLANKET GREY KING WAVE",
    mall: "57-Sauq7",
    quantity: 4,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "21477",
    name: "BLANKET LUXURY CHERRY BLOOSOM SET FULL 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "21469",
    name: "BLANKET LUXURY CRIMSON SET FULL 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "21469",
    name: "BLANKET LUXURY CRIMSON SET FULL 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-12-14"
  },
  {
    code: "21470",
    name: "BLANKET LUXURY GREY SET FULL 2 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-05-10"
  },
  {
    code: "21467",
    name: "BLANKET LUXURY ROSE PINK SET FULL 2 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "21467",
    name: "BLANKET LUXURY ROSE PINK SET FULL 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 7,
    lastSaleDate: "2024-11-11"
  },
  {
    code: "21458",
    name: "BLANKET LUXURY ROSE PINK SET KING 3 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-08-20"
  },
  {
    code: "21458",
    name: "BLANKET LUXURY ROSE PINK SET KING 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-18"
  },
  {
    code: "21458",
    name: "BLANKET LUXURY ROSE PINK SET KING 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "21458",
    name: "BLANKET LUXURY ROSE PINK SET KING 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "14072",
    name: "BLANKET MBROOM KING PACIFIC OCEAN",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-08-01"
  },
  {
    code: "21709",
    name: "BLOOM TURKISH COFFEE SET 6 PCS 90 ML CS-011",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "20066",
    name: "BLOSSOM CRYSTAL KING DUVET COVER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-03"
  },
  {
    code: "20066",
    name: "BLOSSOM CRYSTAL KING DUVET COVER 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-09-27"
  },
  {
    code: "20595",
    name: "BLOSSOM MIST KING DUVET COVER 3 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-12-03"
  },
  {
    code: "20595",
    name: "BLOSSOM MIST KING DUVET COVER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-03-25"
  },
  {
    code: "20065",
    name: "BLOSSOM WHITE KING DUVET COVER 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-02-02"
  },
  {
    code: "23421",
    name: "BLUE ALANIS KING COMFORTER 8 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22925",
    name: "BLUE OMBRE WM TUMBER WITH STRAW 24 OZ",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "22925",
    name: "BLUE OMBRE WM TUMBER WITH STRAW 24 OZ",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-08-17"
  },
  {
    code: "19954",
    name: "BLUE POLYSTER KING SHEET 6 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "19954",
    name: "BLUE POLYSTER KING SHEET 6 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-05-01"
  },
  {
    code: "19954",
    name: "BLUE POLYSTER KING SHEET 6 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "19954",
    name: "BLUE POLYSTER KING SHEET 6 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "14870",
    name: "BLUE SILKY MICRO CHANNEL 91*61 CM /",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "21563",
    name: "BLUE TAUPE STRIPE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-09"
  },
  {
    code: "21563",
    name: "BLUE TAUPE STRIPE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "19043",
    name: "BLUE WATERCOLOR FLOWER COTON QUILT 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-11-19"
  },
  {
    code: "21858",
    name: "BLUSH GUAZE QUILT TWIN 1 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-04-13"
  },
  {
    code: "21858",
    name: "BLUSH GUAZE QUILT TWIN 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-05-15"
  },
  {
    code: "19957",
    name: "BLUSH POLYSTER KING SHEET 6 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-10-12"
  },
  {
    code: "16547",
    name: "BLUSH VELVET QUILT KING 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-14"
  },
  {
    code: "22274",
    name: "BODY PINK SO-SOFT KING COMFORTER 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22274",
    name: "BODY PINK SO-SOFT KING COMFORTER 3 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22274",
    name: "BODY PINK SO-SOFT KING COMFORTER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "22274",
    name: "BODY PINK SO-SOFT KING COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 7,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "22274",
    name: "BODY PINK SO-SOFT KING COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "21660",
    name: "BOLL & BRANCH WHITE COMFORTER KING 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-07-26"
  },
  {
    code: "21654",
    name: "BOLL & BRANCH WHITE COMFOTER FULL 3 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-22"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-07-20"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "18-Al_Khayyat Center",
    quantity: 2,
    lastSaleDate: "2024-08-04"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-09-17"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2024-08-26"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-02"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "20286",
    name: "BOMB SHELL FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "22645",
    name: "BOTANICAL GARDEN PRINTED DUVET COVER FULL 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "22645",
    name: "BOTANICAL GARDEN PRINTED DUVET COVER FULL 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-15"
  },
  {
    code: "22645",
    name: "BOTANICAL GARDEN PRINTED DUVET COVER FULL 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "22645",
    name: "BOTANICAL GARDEN PRINTED DUVET COVER FULL 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "22645",
    name: "BOTANICAL GARDEN PRINTED DUVET COVER FULL 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-12-01"
  },
  {
    code: "20735",
    name: "BRIDGET PAISLEY GREY PRINTED KING COMFORTER 3 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "22137",
    name: "BRUSHED EMBROIDERY KING COMFORTER 5 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "14338",
    name: "BURGANDY SHEET (QUEEN) SET 3PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2023-12-29"
  },
  {
    code: "14338",
    name: "BURGANDY SHEET (QUEEN) SET 3PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2021-10-16"
  },
  {
    code: "14338",
    name: "BURGANDY SHEET (QUEEN) SET 3PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-26"
  },
  {
    code: "14338",
    name: "BURGANDY SHEET (QUEEN) SET 3PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 8,
    lastSaleDate: "2021-11-07"
  },
  {
    code: "14338",
    name: "BURGANDY SHEET (QUEEN) SET 3PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-01-20"
  },
  {
    code: "14338",
    name: "BURGANDY SHEET (QUEEN) SET 3PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 16,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "19524",
    name: "BURGANDY WAFFLE PIPING L/XL",
    mall: "30-Tala Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "19524",
    name: "BURGANDY WAFFLE PIPING L/XL",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "19515",
    name: "BURGANDY WAFFLE PIPING S/M",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-07-25"
  },
  {
    code: "19515",
    name: "BURGANDY WAFFLE PIPING S/M",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-06-16"
  },
  {
    code: "14287",
    name: "BURGUNDY WAVE MAT SIZ 51*86",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2021-02-27"
  },
  {
    code: "14287",
    name: "BURGUNDY WAVE MAT SIZ 51*86",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2021-03-04"
  },
  {
    code: "21435",
    name: "BUTTERFLY KITCHEN SET TOWLS 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 6,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "21435",
    name: "BUTTERFLY KITCHEN SET TOWLS 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-15"
  },
  {
    code: "21435",
    name: "BUTTERFLY KITCHEN SET TOWLS 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "21435",
    name: "BUTTERFLY KITCHEN SET TOWLS 4 PCS",
    mall: "43-Mujan Park",
    quantity: 11,
    lastSaleDate: "2023-10-30"
  },
  {
    code: "21435",
    name: "BUTTERFLY KITCHEN SET TOWLS 4 PCS",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "20153",
    name: "CAPE COD-NAVY POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "20153",
    name: "CAPE COD-NAVY POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "20153",
    name: "CAPE COD-NAVY POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "20153",
    name: "CAPE COD-NAVY POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 4,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "22065",
    name: "CARS PRINTED THROW KIDS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-19"
  },
  {
    code: "13923",
    name: "CEDAR QUILT FULL 5 PC",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2019-07-13"
  },
  {
    code: "20677",
    name: "CERAMIC MUG.",
    mall: "30-Tala Mall Riyadh",
    quantity: 18,
    lastSaleDate: "2023-09-12"
  },
  {
    code: "20677",
    name: "CERAMIC MUG.",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 26,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "21667",
    name: "CERAMIC TEA CUP 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-07-19"
  },
  {
    code: "19690",
    name: "CHARCOAL COTTON TUFTED WAVE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-03-25"
  },
  {
    code: "16486",
    name: "CHATEA RED KING QUILT 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-03-10"
  },
  {
    code: "16486",
    name: "CHATEA RED KING QUILT 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "16486",
    name: "CHATEA RED KING QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "16486",
    name: "CHATEA RED KING QUILT 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-28"
  },
  {
    code: "16486",
    name: "CHATEA RED KING QUILT 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "13790",
    name: "CHERRY BLOSSOM BALNKET KHAROUF KING 3PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-05-27"
  },
  {
    code: "23330",
    name: "CHILDREN PRINTED PRAYER SET 3 PCS 893",
    mall: "55- Jabl Omar",
    quantity: 120,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23328",
    name: "CHINESE PRAYER SET 3 PCS 1301",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "15176",
    name: "CITADEL ULTRASONIC /FULL/ COMFORTER 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-25"
  },
  {
    code: "15176",
    name: "CITADEL ULTRASONIC /FULL/ COMFORTER 2 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-24"
  },
  {
    code: "14433",
    name: "CITADEL ULTRASONIC WINTER COMFORTER (KING) 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-07-10"
  },
  {
    code: "14433",
    name: "CITADEL ULTRASONIC WINTER COMFORTER (KING) 3 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "14433",
    name: "CITADEL ULTRASONIC WINTER COMFORTER (KING) 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-10-24"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2024-10-14"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "08-Makkah Mall",
    quantity: 8,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "11-Jouri Mall",
    quantity: 8,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-10-09"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "18-Al_Khayyat Center",
    quantity: 2,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 6,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "22-Tabuk Park",
    quantity: 7,
    lastSaleDate: "2024-10-19"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-11-11"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-10-01"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "53-Al Basateen Mall",
    quantity: 16,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "55- Jabl Omar",
    quantity: 6,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "16893",
    name: "CLEAN COTTON FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "16857",
    name: "CLOUD BLISS BLUE DUVET COVER FULL 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-03-13"
  },
  {
    code: "16858",
    name: "CLOUD BLISS PINK DUVET COVER FULL 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2021-04-03"
  },
  {
    code: "16858",
    name: "CLOUD BLISS PINK DUVET COVER FULL 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-05-06"
  },
  {
    code: "16858",
    name: "CLOUD BLISS PINK DUVET COVER FULL 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-12-09"
  },
  {
    code: "17470",
    name: "COCODOR 200 ML ANTI-B DIFFUSER ROSE GARDEN",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-04-07"
  },
  {
    code: "17470",
    name: "COCODOR 200 ML ANTI-B DIFFUSER ROSE GARDEN",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-02-07"
  },
  {
    code: "17467",
    name: "COCODOR 200 ML CHIPMUNK DIFFUSER IN THE COFFE",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2022-09-19"
  },
  {
    code: "17467",
    name: "COCODOR 200 ML CHIPMUNK DIFFUSER IN THE COFFE",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-18"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 3,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-20"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-04-19"
  },
  {
    code: "22798",
    name: "COCODOR FRESHENER APRIL FRESH 200 ML LAVENDER EDITION",
    mall: "54-THE VILLAGE",
    quantity: 3,
    lastSaleDate: "2024-04-23"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-04-21"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-03-10"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "14-Al Kamal Mall",
    quantity: 7,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "22-Tabuk Park",
    quantity: 5,
    lastSaleDate: "2024-03-21"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "24-Yanbu Dana Mall",
    quantity: 4,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-05-21"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "52-Al_Baha Mall",
    quantity: 12,
    lastSaleDate: "2024-05-03"
  },
  {
    code: "16895",
    name: "COCODOR FRESHENER BLACK CHERRY 200 ML LAVENDER EDITION",
    mall: "54-THE VILLAGE",
    quantity: 6,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "16897",
    name: "COCODOR FRESHENER ENGLISH PEARFREE 200 ML LAVENDER EDITION",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2024-04-27"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-04-16"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-03-03"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-06-17"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-03-18"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-03-09"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-03-29"
  },
  {
    code: "16898",
    name: "COCODOR FRESHENER GARDEN LAVENDER 200 ML LAVENDER EDITION",
    mall: "54-THE VILLAGE",
    quantity: 6,
    lastSaleDate: "2024-05-04"
  },
  {
    code: "16461",
    name: "COCODOR FRESHENER HERBARIUM 220 ML BLACK CHERRY",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-12-01"
  },
  {
    code: "16461",
    name: "COCODOR FRESHENER HERBARIUM 220 ML BLACK CHERRY",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-03-12"
  },
  {
    code: "16461",
    name: "COCODOR FRESHENER HERBARIUM 220 ML BLACK CHERRY",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2022-12-11"
  },
  {
    code: "16461",
    name: "COCODOR FRESHENER HERBARIUM 220 ML BLACK CHERRY",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-02-10"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-11-28"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-06-20"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-06-28"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "18-Al_Khayyat Center",
    quantity: 3,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2023-04-19"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2024-05-05"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-03-07"
  },
  {
    code: "16463",
    name: "COCODOR FRESHENER HERBARIUM 220 ML FLORAL BOUQUEST",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-03-21"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-03-10"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "14-Al Kamal Mall",
    quantity: 5,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-03-13"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2024-03-13"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "22-Tabuk Park",
    quantity: 4,
    lastSaleDate: "2024-05-21"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-05-23"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "16896",
    name: "COCODOR FRESHENER LITTLE FOREST 200 ML LAVENDER EDITION",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-05-10"
  },
  {
    code: "16455",
    name: "COCODOR FRESHENER TULIP EDITION 200 ML ENGLISH PEARFREE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-08-29"
  },
  {
    code: "16455",
    name: "COCODOR FRESHENER TULIP EDITION 200 ML ENGLISH PEARFREE",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-03-09"
  },
  {
    code: "16455",
    name: "COCODOR FRESHENER TULIP EDITION 200 ML ENGLISH PEARFREE",
    mall: "22-Tabuk Park",
    quantity: 4,
    lastSaleDate: "2022-05-28"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-03-30"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-05-19"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 3,
    lastSaleDate: "2024-03-31"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 7,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "54-THE VILLAGE",
    quantity: 4,
    lastSaleDate: "2024-05-04"
  },
  {
    code: "22800",
    name: "COCODOR FRESHENER WHITE JASMINE 200 ML LAVENDER EDITION",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-04-15"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-06-12"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-04-03"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 3,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-03-23"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-05-10"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "52-Al_Baha Mall",
    quantity: 5,
    lastSaleDate: "2024-06-18"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2024-07-16"
  },
  {
    code: "22799",
    name: "COCODOR FRESHENER WHITE MUSK 200 ML LAVENDER EDITION",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "19790",
    name: "COCODOR PERFUME 200 ML MONET",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-08"
  },
  {
    code: "19790",
    name: "COCODOR PERFUME 200 ML MONET",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-01"
  },
  {
    code: "19790",
    name: "COCODOR PERFUME 200 ML MONET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-06-10"
  },
  {
    code: "19790",
    name: "COCODOR PERFUME 200 ML MONET",
    mall: "24-Yanbu Dana Mall",
    quantity: 6,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "19790",
    name: "COCODOR PERFUME 200 ML MONET",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-05-25"
  },
  {
    code: "19790",
    name: "COCODOR PERFUME 200 ML MONET",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-05-17"
  },
  {
    code: "19790",
    name: "COCODOR PERFUME 200 ML MONET",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2022-10-19"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2022-07-06"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "24-Yanbu Dana Mall",
    quantity: 4,
    lastSaleDate: "2024-10-10"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-05-15"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2022-10-24"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-06-27"
  },
  {
    code: "19788",
    name: "COCODOR PERFUME 200 ML RENOIR",
    mall: "47-Al-Nakheel Plaza",
    quantity: 7,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2023-07-06"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "14-Al Kamal Mall",
    quantity: 4,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "17-Arar Othaim Mall",
    quantity: 12,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-10-15"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "22-Tabuk Park",
    quantity: 12,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "24-Yanbu Dana Mall",
    quantity: 12,
    lastSaleDate: "2024-12-02"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-09-16"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "43-Mujan Park",
    quantity: 9,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "44-Al-Jouf Center",
    quantity: 26,
    lastSaleDate: "2022-07-26"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "47-Al-Nakheel Plaza",
    quantity: 7,
    lastSaleDate: "2022-08-06"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "19789",
    name: "COCODOR PERFUME 200 ML SEURAT",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "16453",
    name: "COCODOR PERFUME TULIP EDITION 200 ML MANGO JASMINE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-09-13"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-09-17"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "14-Al Kamal Mall",
    quantity: 5,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-11-05"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-09-09"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-22"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "30-Tala Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "38-Al_Riyadh Park",
    quantity: 3,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "23254",
    name: "COCODOR ROSE FLOWER 200 ML DIFFUSER GARDEN LAVENDER",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "20336",
    name: "COFFEE SET 6 PCS 90 ML CS 03",
    mall: "30-Tala Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "20336",
    name: "COFFEE SET 6 PCS 90 ML CS 03",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2023-03-03"
  },
  {
    code: "20336",
    name: "COFFEE SET 6 PCS 90 ML CS 03",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-08-15"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "07-Arab Mall",
    quantity: 4,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "09-Al-Salam Mall",
    quantity: 6,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "11-Jouri Mall",
    quantity: 12,
    lastSaleDate: "2023-12-21"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "18-Al_Khayyat Center",
    quantity: 5,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "23-Alia Mall Madinah",
    quantity: 5,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "30-Tala Mall Riyadh",
    quantity: 8,
    lastSaleDate: "2024-08-10"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "43-Mujan Park",
    quantity: 8,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "48 - Jeddah Park",
    quantity: 7,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "20338",
    name: "COFFEE SET 6 PCS 90 ML CS 05",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "16960",
    name: "COFFEE TEA PORCELAIN GLASS 18 PCS  DS-19A064-6/18",
    mall: "11-Jouri Mall",
    quantity: 6,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "16960",
    name: "COFFEE TEA PORCELAIN GLASS 18 PCS  DS-19A064-6/18",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-11-04"
  },
  {
    code: "14462",
    name: "COLORED CUPS 12 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 8,
    lastSaleDate: "2021-05-22"
  },
  {
    code: "15021",
    name: "COMET SO-SOFT F/Q COMFORTER 2 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-20"
  },
  {
    code: "17183",
    name: "COOL -0 KING PILLOW",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-01"
  },
  {
    code: "17183",
    name: "COOL -0 KING PILLOW",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-01-17"
  },
  {
    code: "17183",
    name: "COOL -0 KING PILLOW",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "17183",
    name: "COOL -0 KING PILLOW",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-04-27"
  },
  {
    code: "17183",
    name: "COOL -0 KING PILLOW",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-01-07"
  },
  {
    code: "19419",
    name: "COOL MAX 40931 PILLOW",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-02-16"
  },
  {
    code: "19419",
    name: "COOL MAX 40931 PILLOW",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-12-06"
  },
  {
    code: "19419",
    name: "COOL MAX 40931 PILLOW",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-08-20"
  },
  {
    code: "17569",
    name: "CORAL DASHSUND 91*183 CM MSH BEACH TOWEL",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "17569",
    name: "CORAL DASHSUND 91*183 CM MSH BEACH TOWEL",
    mall: "44-Al-Jouf Center",
    quantity: 11,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "21986",
    name: "COSTCO GEO MULTI BRIGHT KING COMFORTER 6 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "21986",
    name: "COSTCO GEO MULTI BRIGHT KING COMFORTER 6 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-08"
  },
  {
    code: "21987",
    name: "COSTCO GEO MULTI NEUTRAL KING COMFORTER 6 PCS",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "21559",
    name: "COSTCO MONTEREY BURGUNDY KING COMFORTER 6 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-03-14"
  },
  {
    code: "23062",
    name: "COSTCO TUMBLERS 24OZ BLACK",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "23066",
    name: "COSTCO TUMBLERS 24OZ PINK",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "23066",
    name: "COSTCO TUMBLERS 24OZ PINK",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23066",
    name: "COSTCO TUMBLERS 24OZ PINK",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "14138",
    name: "COTON QUILT CLIMBING BLOSSOM 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-06-02"
  },
  {
    code: "14995",
    name: "COTON QUILT DAMASK BLUSH 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-08-24"
  },
  {
    code: "15188",
    name: "COTTON QUILT BRUSH SCROLL BLUSH FULL 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-04-20"
  },
  {
    code: "10610",
    name: "COVER PILLOW",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2020-11-28"
  },
  {
    code: "22675",
    name: "COZY SLEEP LOUNGER L/XL CASTLE ROCK",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "22671",
    name: "COZY SLEEP LOUNGER L/XL GRAPE PURPLE",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-05"
  },
  {
    code: "22672",
    name: "COZY SLEEP LOUNGER L/XL MARSHMALLOW",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "22672",
    name: "COZY SLEEP LOUNGER L/XL MARSHMALLOW",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22672",
    name: "COZY SLEEP LOUNGER L/XL MARSHMALLOW",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "22672",
    name: "COZY SLEEP LOUNGER L/XL MARSHMALLOW",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22672",
    name: "COZY SLEEP LOUNGER L/XL MARSHMALLOW",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22672",
    name: "COZY SLEEP LOUNGER L/XL MARSHMALLOW",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22672",
    name: "COZY SLEEP LOUNGER L/XL MARSHMALLOW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "22666",
    name: "COZY SLEEP LOUNGER S/M GRAPE PURPLE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-01-30"
  },
  {
    code: "22666",
    name: "COZY SLEEP LOUNGER S/M GRAPE PURPLE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "22666",
    name: "COZY SLEEP LOUNGER S/M GRAPE PURPLE",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "22666",
    name: "COZY SLEEP LOUNGER S/M GRAPE PURPLE",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22666",
    name: "COZY SLEEP LOUNGER S/M GRAPE PURPLE",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-11-12"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-02-04"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-04-14"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "22669",
    name: "COZY SLEEP LOUNGER S/M PLUM",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "23518",
    name: "COZY STRIPE BISCUIT FULL COMFORTER 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-04-28"
  },
  {
    code: "23432",
    name: "COZY STRIPE COMET FULL COMFORTER 2 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "23432",
    name: "COZY STRIPE COMET FULL COMFORTER 2 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "23432",
    name: "COZY STRIPE COMET FULL COMFORTER 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "13907",
    name: "CRIMSOM SO-SOFT KING COMFORTER 3PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "13907",
    name: "CRIMSOM SO-SOFT KING COMFORTER 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "13907",
    name: "CRIMSOM SO-SOFT KING COMFORTER 3PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "13907",
    name: "CRIMSOM SO-SOFT KING COMFORTER 3PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "13907",
    name: "CRIMSOM SO-SOFT KING COMFORTER 3PCS",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "13907",
    name: "CRIMSOM SO-SOFT KING COMFORTER 3PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "13907",
    name: "CRIMSOM SO-SOFT KING COMFORTER 3PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "13791",
    name: "CRIMSON BALNKET KHAROUF KING 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-30"
  },
  {
    code: "12634",
    name: "CROSCILL PILLOW KING",
    mall: "42-Dareen Mall Dammam",
    quantity: 15,
    lastSaleDate: "2022-10-23"
  },
  {
    code: "12634",
    name: "CROSCILL PILLOW KING",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-27"
  },
  {
    code: "12634",
    name: "CROSCILL PILLOW KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-10-01"
  },
  {
    code: "12634",
    name: "CROSCILL PILLOW KING",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "12634",
    name: "CROSCILL PILLOW KING",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-10"
  },
  {
    code: "15427",
    name: "CUBAN SAND POLAR BEAR FULL COMFORTER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "15427",
    name: "CUBAN SAND POLAR BEAR FULL COMFORTER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-12-19"
  },
  {
    code: "16626",
    name: "CUP OF TEA WITH PORCELAIN COVER AND SPOON 1896-1",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2020-10-21"
  },
  {
    code: "16628",
    name: "CUP OF TEA WITH PORCELAIN COVER AND SPOON 1896-3",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2020-10-16"
  },
  {
    code: "16627",
    name: "CUP OF TEA WITH PORCELAIN COVER AND SPOON 1896-4",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2020-09-22"
  },
  {
    code: "11546",
    name: "CUPS BIRLA JUICE IVORY / GOLD 3 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2019-11-17"
  },
  {
    code: "16903",
    name: "CUPS WITH CERAMIC DISH 28-21",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2023-08-23"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-04-23"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-10-19"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-04-23"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22284",
    name: "CYPRESS COPPER 3 PCS BATH ACCESS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "20487",
    name: "D KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "20449",
    name: "D KITCHEN TOWEL IVORY 28*16",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2023-12-25"
  },
  {
    code: "20449",
    name: "D KITCHEN TOWEL IVORY 28*16",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "20449",
    name: "D KITCHEN TOWEL IVORY 28*16",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "20449",
    name: "D KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "20468",
    name: "D KITCHEN TOWEL WHITE 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-16"
  },
  {
    code: "20468",
    name: "D KITCHEN TOWEL WHITE 28*16",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2023-01-11"
  },
  {
    code: "20468",
    name: "D KITCHEN TOWEL WHITE 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2023-01-27"
  },
  {
    code: "17639",
    name: "DAHLIA 5 PCS ACCESS.",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-25"
  },
  {
    code: "17639",
    name: "DAHLIA 5 PCS ACCESS.",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-02-18"
  },
  {
    code: "17639",
    name: "DAHLIA 5 PCS ACCESS.",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-10-22"
  },
  {
    code: "17639",
    name: "DAHLIA 5 PCS ACCESS.",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-11-20"
  },
  {
    code: "16522",
    name: "DALTON KING COMFORTER 10 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "15426",
    name: "DARK GREY POLAR BEAR FULL COMFORTER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-12-22"
  },
  {
    code: "14236",
    name: "DARK PURPLE DAMASK  FULL COMFORTER 4 PCS 500 STITSH",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "14236",
    name: "DARK PURPLE DAMASK  FULL COMFORTER 4 PCS 500 STITSH",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-12-03"
  },
  {
    code: "19903",
    name: "DEBBIE BATH ACCESS SET 5 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2022-09-27"
  },
  {
    code: "19903",
    name: "DEBBIE BATH ACCESS SET 5 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-06-10"
  },
  {
    code: "19903",
    name: "DEBBIE BATH ACCESS SET 5 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-01-27"
  },
  {
    code: "22640",
    name: "DEER BLACK GREY FULL COMFORTER 7 PCS WM YZ BIAB",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "16980",
    name: "DENIM CHINDI 76*126 CM RUG",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2022-04-19"
  },
  {
    code: "21712",
    name: "DIANA TURKISH COFFEE SET 6 PCS 90 ML CS-016",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "21712",
    name: "DIANA TURKISH COFFEE SET 6 PCS 90 ML CS-016",
    mall: "24-Yanbu Dana Mall",
    quantity: 5,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "21712",
    name: "DIANA TURKISH COFFEE SET 6 PCS 90 ML CS-016",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "13132",
    name: "DINING SET 19 PCS ARK 06",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2020-07-10"
  },
  {
    code: "13131",
    name: "DINING SET ARK 05",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2021-02-10"
  },
  {
    code: "13131",
    name: "DINING SET ARK 05",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2021-01-16"
  },
  {
    code: "13565",
    name: "DINNER SET 28 PCS (G4)",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2022-01-19"
  },
  {
    code: "13565",
    name: "DINNER SET 28 PCS (G4)",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "13565",
    name: "DINNER SET 28 PCS (G4)",
    mall: "11-Jouri Mall",
    quantity: 4,
    lastSaleDate: "2021-01-30"
  },
  {
    code: "13565",
    name: "DINNER SET 28 PCS (G4)",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2019-06-30"
  },
  {
    code: "13565",
    name: "DINNER SET 28 PCS (G4)",
    mall: "24-Yanbu Dana Mall",
    quantity: 5,
    lastSaleDate: "2020-02-14"
  },
  {
    code: "13565",
    name: "DINNER SET 28 PCS (G4)",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2020-08-06"
  },
  {
    code: "13565",
    name: "DINNER SET 28 PCS (G4)",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "13564",
    name: "DINNER SET 28 PCS DS13",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2021-02-11"
  },
  {
    code: "11955",
    name: "DINNER SET 28 PCS.",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "22467",
    name: "DINO NAVY TWIN COMFORTER 5 PCS WM YZ BIAB",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-30"
  },
  {
    code: "22467",
    name: "DINO NAVY TWIN COMFORTER 5 PCS WM YZ BIAB",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-11-15"
  },
  {
    code: "22467",
    name: "DINO NAVY TWIN COMFORTER 5 PCS WM YZ BIAB",
    mall: "44-Al-Jouf Center",
    quantity: 6,
    lastSaleDate: "2024-10-13"
  },
  {
    code: "22467",
    name: "DINO NAVY TWIN COMFORTER 5 PCS WM YZ BIAB",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "22067",
    name: "DINOSAUR PRINTED THROW KIDS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 10,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "22067",
    name: "DINOSAUR PRINTED THROW KIDS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "22067",
    name: "DINOSAUR PRINTED THROW KIDS",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "14791",
    name: "DISHES SET 16 PCS COLOR MEDITERRANEO",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-11-25"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2023-08-19"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2023-03-09"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-02-10"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 7,
    lastSaleDate: "2022-07-06"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2023-01-18"
  },
  {
    code: "14790",
    name: "DISHES SET 16 PCS WHITE MEDITERRANEO",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-07-15"
  },
  {
    code: "21832",
    name: "DOG3 KIDS HOODED TOWEL BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "21832",
    name: "DOG3 KIDS HOODED TOWEL BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2023-10-29"
  },
  {
    code: "18452",
    name: "DOORMAT #1 SIZE 45X75 CM",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "18452",
    name: "DOORMAT #1 SIZE 45X75 CM",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "18452",
    name: "DOORMAT #1 SIZE 45X75 CM",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "18452",
    name: "DOORMAT #1 SIZE 45X75 CM",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2024-03-10"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "27-Dhahran Mall khobar",
    quantity: 5,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "22147",
    name: "DOORMAT #10 SIZE 60X90 CM",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "22149",
    name: "DOORMAT #12 SIZE 60X90 CM",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "22149",
    name: "DOORMAT #12 SIZE 60X90 CM",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22149",
    name: "DOORMAT #12 SIZE 60X90 CM",
    mall: "27-Dhahran Mall khobar",
    quantity: 5,
    lastSaleDate: "2025-04-23"
  },
  {
    code: "22149",
    name: "DOORMAT #12 SIZE 60X90 CM",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "18453",
    name: "DOORMAT #2 SIZE 60X90 CM",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2021-09-12"
  },
  {
    code: "18453",
    name: "DOORMAT #2 SIZE 60X90 CM",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-10-07"
  },
  {
    code: "18454",
    name: "DOORMAT #3 SIZE 45X75 CM",
    mall: "36-Al jubail Mall",
    quantity: 5,
    lastSaleDate: "2022-04-03"
  },
  {
    code: "18454",
    name: "DOORMAT #3 SIZE 45X75 CM",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "18456",
    name: "DOORMAT #5 SIZE 45X75 CM",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-08-09"
  },
  {
    code: "18457",
    name: "DOORMAT #6 SIZE 60X90 CM",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2021-10-02"
  },
  {
    code: "18457",
    name: "DOORMAT #6 SIZE 60X90 CM",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "18458",
    name: "DOORMAT #7 SIZE 45X75 CM",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-12-11"
  },
  {
    code: "22146",
    name: "DOORMAT #9 SIZE 60X90 CM",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2024-03-26"
  },
  {
    code: "22146",
    name: "DOORMAT #9 SIZE 60X90 CM",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "21002",
    name: "DOUBLOON MEDALLION KING COMFORTER 12 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "17480",
    name: "DOWN LIKE KING PILLOW",
    mall: "20-Sitten Street Makkah",
    quantity: 4,
    lastSaleDate: "2022-04-18"
  },
  {
    code: "12352",
    name: "DUVET BLUEBELL WOODS 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2020-05-20"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2025-01-21"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-16"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-12-07"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2023-11-17"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-15"
  },
  {
    code: "20810",
    name: "DUVET COVER BORDER STRIPE FOREST GREY QUEEN 4 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-01-19"
  },
  {
    code: "20376",
    name: "DUVET COVER BORDER STRIPE NAVY 4 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-09-02"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "05-Haifa Mall",
    quantity: 3,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "07-Arab Mall",
    quantity: 9,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2024-05-21"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2024-01-05"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 3,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-01-05"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-03-09"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 4,
    lastSaleDate: "2024-05-24"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "20809",
    name: "DUVET COVER BORDER STRIPE NAVY QUEEN 4 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "04-Andalos Mall",
    quantity: 4,
    lastSaleDate: "2024-01-08"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2023-10-21"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-02-24"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-05-28"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "20808",
    name: "DUVET COVER BORDER STRIPE SILVER QUEEN 4 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "20807",
    name: "DUVET COVER BORDER STRIPE WHITE QUEEN 4 PCS",
    mall: "11-Jouri Mall",
    quantity: 7,
    lastSaleDate: "2023-04-17"
  },
  {
    code: "20807",
    name: "DUVET COVER BORDER STRIPE WHITE QUEEN 4 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "20807",
    name: "DUVET COVER BORDER STRIPE WHITE QUEEN 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-06-10"
  },
  {
    code: "20807",
    name: "DUVET COVER BORDER STRIPE WHITE QUEEN 4 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-01-15"
  },
  {
    code: "20807",
    name: "DUVET COVER BORDER STRIPE WHITE QUEEN 4 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-09-01"
  },
  {
    code: "16320",
    name: "DUVET COVER CHENILLE STRIPE GREY KING 3 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2021-09-15"
  },
  {
    code: "16319",
    name: "DUVET COVER CHENILLE STRIPE WHITE KING 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2021-11-22"
  },
  {
    code: "16393",
    name: "DUVET COVER JAYDA FULL 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "16389",
    name: "DUVET COVER JOVIE FULL 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2022-04-08"
  },
  {
    code: "16389",
    name: "DUVET COVER JOVIE FULL 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-05-12"
  },
  {
    code: "20373",
    name: "DUVET COVER KING ESTELLE CREAM 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-31"
  },
  {
    code: "20373",
    name: "DUVET COVER KING ESTELLE CREAM 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-05-29"
  },
  {
    code: "16388",
    name: "DUVET COVER MANHATTAN FULL 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-08-06"
  },
  {
    code: "20372",
    name: "DUVET COVER NEDIE DUSTY 3 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "13101",
    name: "DUVET FLORRIE 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2020-07-30"
  },
  {
    code: "15154",
    name: "DUVET FUITON KING 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-09-30"
  },
  {
    code: "11473",
    name: "DUVET FUSHIA 3 PCS 300 STITCH",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2017-04-13"
  },
  {
    code: "11473",
    name: "DUVET FUSHIA 3 PCS 300 STITCH",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2019-07-19"
  },
  {
    code: "11475",
    name: "DUVET GREN TEA 3 PCS 300 STITCH",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2017-05-22"
  },
  {
    code: "11472",
    name: "DUVET MARALA 3 PCS 300 STITCH",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-26"
  },
  {
    code: "11476",
    name: "DUVET TURQUOSE 3 PCS 300 STITCH",
    mall: "16-Ehsa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2017-06-21"
  },
  {
    code: "20490",
    name: "E KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2023-05-10"
  },
  {
    code: "20452",
    name: "E KITCHEN TOWEL IVORY 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-16"
  },
  {
    code: "20452",
    name: "E KITCHEN TOWEL IVORY 28*16",
    mall: "30-Tala Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "20452",
    name: "E KITCHEN TOWEL IVORY 28*16",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "20452",
    name: "E KITCHEN TOWEL IVORY 28*16",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-05-30"
  },
  {
    code: "20452",
    name: "E KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "20471",
    name: "E KITCHEN TOWEL WHITE 28*16",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-15"
  },
  {
    code: "20471",
    name: "E KITCHEN TOWEL WHITE 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-05"
  },
  {
    code: "23036",
    name: "EGYPTIAN MIHRAB PRAYER RUG (101398)",
    mall: "55- Jabl Omar",
    quantity: 14,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "21688",
    name: "ELEGANT BATH ROBE BRIDE BAIGE-CREAM 7 PCS",
    mall: "04-Andalos Mall",
    quantity: 3,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "21686",
    name: "ELENOR BATH ROBE BRIDE BAIGE-CREAM 7 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "19303",
    name: "ELYSON BLUE KING COMFORTER 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-13"
  },
  {
    code: "20242",
    name: "EMBROIDERE TOWEL 64*32 IVORY A",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "20243",
    name: "EMBROIDERE TOWEL 64*32 IVORY B",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "20243",
    name: "EMBROIDERE TOWEL 64*32 IVORY B",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "20243",
    name: "EMBROIDERE TOWEL 64*32 IVORY B",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "19602",
    name: "EMBROIDERE TOWEL 64*32 IVORY D",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-01-19"
  },
  {
    code: "19602",
    name: "EMBROIDERE TOWEL 64*32 IVORY D",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "19602",
    name: "EMBROIDERE TOWEL 64*32 IVORY D",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "19602",
    name: "EMBROIDERE TOWEL 64*32 IVORY D",
    mall: "30-Tala Mall Riyadh",
    quantity: 9,
    lastSaleDate: "2021-12-09"
  },
  {
    code: "19602",
    name: "EMBROIDERE TOWEL 64*32 IVORY D",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-01-08"
  },
  {
    code: "20241",
    name: "EMBROIDERE TOWEL 64*32 IVORY E",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-01-13"
  },
  {
    code: "20241",
    name: "EMBROIDERE TOWEL 64*32 IVORY E",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-09"
  },
  {
    code: "20244",
    name: "EMBROIDERE TOWEL 64*32 IVORY F",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2023-05-22"
  },
  {
    code: "20244",
    name: "EMBROIDERE TOWEL 64*32 IVORY F",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2024-04-16"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "20-Sitten Street Makkah",
    quantity: 6,
    lastSaleDate: "2024-01-01"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "25-Rabwa Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "30-Tala Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-02-02"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-04-29"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-30"
  },
  {
    code: "20245",
    name: "EMBROIDERE TOWEL 64*32 IVORY G",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-12-21"
  },
  {
    code: "20246",
    name: "EMBROIDERE TOWEL 64*32 IVORY H",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2022-05-04"
  },
  {
    code: "20248",
    name: "EMBROIDERE TOWEL 64*32 IVORY K",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-12-21"
  },
  {
    code: "20248",
    name: "EMBROIDERE TOWEL 64*32 IVORY K",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-12-31"
  },
  {
    code: "20248",
    name: "EMBROIDERE TOWEL 64*32 IVORY K",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20249",
    name: "EMBROIDERE TOWEL 64*32 IVORY L",
    mall: "14-Al Kamal Mall",
    quantity: 4,
    lastSaleDate: "2024-01-29"
  },
  {
    code: "20249",
    name: "EMBROIDERE TOWEL 64*32 IVORY L",
    mall: "20-Sitten Street Makkah",
    quantity: 4,
    lastSaleDate: "2023-05-21"
  },
  {
    code: "20249",
    name: "EMBROIDERE TOWEL 64*32 IVORY L",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "20249",
    name: "EMBROIDERE TOWEL 64*32 IVORY L",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-06"
  },
  {
    code: "20249",
    name: "EMBROIDERE TOWEL 64*32 IVORY L",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "20249",
    name: "EMBROIDERE TOWEL 64*32 IVORY L",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-07-16"
  },
  {
    code: "19600",
    name: "EMBROIDERE TOWEL 64*32 IVORY N",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2022-05-08"
  },
  {
    code: "19601",
    name: "EMBROIDERE TOWEL 64*32 IVORY O",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "19601",
    name: "EMBROIDERE TOWEL 64*32 IVORY O",
    mall: "14-Al Kamal Mall",
    quantity: 8,
    lastSaleDate: "2024-07-07"
  },
  {
    code: "19601",
    name: "EMBROIDERE TOWEL 64*32 IVORY O",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-09-07"
  },
  {
    code: "19601",
    name: "EMBROIDERE TOWEL 64*32 IVORY O",
    mall: "23-Alia Mall Madinah",
    quantity: 3,
    lastSaleDate: "2022-10-27"
  },
  {
    code: "20237",
    name: "EMBROIDERE TOWEL 64*32 IVORY R",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "20238",
    name: "EMBROIDERE TOWEL 64*32 IVORY S",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2022-11-23"
  },
  {
    code: "20239",
    name: "EMBROIDERE TOWEL 64*32 IVORY T",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "20239",
    name: "EMBROIDERE TOWEL 64*32 IVORY T",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-04-26"
  },
  {
    code: "20239",
    name: "EMBROIDERE TOWEL 64*32 IVORY T",
    mall: "30-Tala Mall Riyadh",
    quantity: 8,
    lastSaleDate: "2023-05-20"
  },
  {
    code: "20239",
    name: "EMBROIDERE TOWEL 64*32 IVORY T",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-02-01"
  },
  {
    code: "20239",
    name: "EMBROIDERE TOWEL 64*32 IVORY T",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-08-29"
  },
  {
    code: "20239",
    name: "EMBROIDERE TOWEL 64*32 IVORY T",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-04-25"
  },
  {
    code: "20239",
    name: "EMBROIDERE TOWEL 64*32 IVORY T",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-27"
  },
  {
    code: "20240",
    name: "EMBROIDERE TOWEL 64*32 IVORY W",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-04-30"
  },
  {
    code: "20240",
    name: "EMBROIDERE TOWEL 64*32 IVORY W",
    mall: "30-Tala Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2022-08-01"
  },
  {
    code: "20240",
    name: "EMBROIDERE TOWEL 64*32 IVORY W",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "19355",
    name: "EMBROIDERE TOWEL 64*32 K",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-01-02"
  },
  {
    code: "19356",
    name: "EMBROIDERE TOWEL 64*32 L",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2022-10-12"
  },
  {
    code: "19604",
    name: "EMBROIDERE TOWEL 64*32 LINEN O",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2022-08-12"
  },
  {
    code: "19604",
    name: "EMBROIDERE TOWEL 64*32 LINEN O",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-02"
  },
  {
    code: "19358",
    name: "EMBROIDERE TOWEL 64*32 R",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2021-11-14"
  },
  {
    code: "19360",
    name: "EMBROIDERE TOWEL 64*32 T",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-02-05"
  },
  {
    code: "19361",
    name: "EMBROIDERE TOWEL 64*32 W",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-02-04"
  },
  {
    code: "19607",
    name: "EMBROIDERE TOWEL 64*32 WHITE B",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-10-02"
  },
  {
    code: "19607",
    name: "EMBROIDERE TOWEL 64*32 WHITE B",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-07-27"
  },
  {
    code: "19607",
    name: "EMBROIDERE TOWEL 64*32 WHITE B",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2021-10-01"
  },
  {
    code: "19621",
    name: "EMBROIDERE TOWEL 64*32 WHITE D",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "19621",
    name: "EMBROIDERE TOWEL 64*32 WHITE D",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-12-14"
  },
  {
    code: "19621",
    name: "EMBROIDERE TOWEL 64*32 WHITE D",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "19621",
    name: "EMBROIDERE TOWEL 64*32 WHITE D",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "19608",
    name: "EMBROIDERE TOWEL 64*32 WHITE F",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "19609",
    name: "EMBROIDERE TOWEL 64*32 WHITE G",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "19609",
    name: "EMBROIDERE TOWEL 64*32 WHITE G",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2022-04-30"
  },
  {
    code: "19609",
    name: "EMBROIDERE TOWEL 64*32 WHITE G",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "19609",
    name: "EMBROIDERE TOWEL 64*32 WHITE G",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "19609",
    name: "EMBROIDERE TOWEL 64*32 WHITE G",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "19609",
    name: "EMBROIDERE TOWEL 64*32 WHITE G",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "19609",
    name: "EMBROIDERE TOWEL 64*32 WHITE G",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2022-12-20"
  },
  {
    code: "19611",
    name: "EMBROIDERE TOWEL 64*32 WHITE J",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-01-30"
  },
  {
    code: "19611",
    name: "EMBROIDERE TOWEL 64*32 WHITE J",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "19611",
    name: "EMBROIDERE TOWEL 64*32 WHITE J",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2022-04-26"
  },
  {
    code: "19611",
    name: "EMBROIDERE TOWEL 64*32 WHITE J",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "19611",
    name: "EMBROIDERE TOWEL 64*32 WHITE J",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "19611",
    name: "EMBROIDERE TOWEL 64*32 WHITE J",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "19611",
    name: "EMBROIDERE TOWEL 64*32 WHITE J",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-04-19"
  },
  {
    code: "19612",
    name: "EMBROIDERE TOWEL 64*32 WHITE K",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-04-10"
  },
  {
    code: "19613",
    name: "EMBROIDERE TOWEL 64*32 WHITE L",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2022-07-31"
  },
  {
    code: "19613",
    name: "EMBROIDERE TOWEL 64*32 WHITE L",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2022-08-04"
  },
  {
    code: "19613",
    name: "EMBROIDERE TOWEL 64*32 WHITE L",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-07-10"
  },
  {
    code: "19613",
    name: "EMBROIDERE TOWEL 64*32 WHITE L",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2022-08-25"
  },
  {
    code: "19619",
    name: "EMBROIDERE TOWEL 64*32 WHITE N",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-02-01"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-02-16"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-07-02"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-09-20"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-04-10"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-04-21"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "42-Dareen Mall Dammam",
    quantity: 4,
    lastSaleDate: "2023-12-07"
  },
  {
    code: "19620",
    name: "EMBROIDERE TOWEL 64*32 WHITE O",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-01"
  },
  {
    code: "19616",
    name: "EMBROIDERE TOWEL 64*32 WHITE S",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2023-03-29"
  },
  {
    code: "19617",
    name: "EMBROIDERE TOWEL 64*32 WHITE T",
    mall: "14-Al Kamal Mall",
    quantity: 4,
    lastSaleDate: "2023-07-25"
  },
  {
    code: "19617",
    name: "EMBROIDERE TOWEL 64*32 WHITE T",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "19618",
    name: "EMBROIDERE TOWEL 64*32 WHITE W",
    mall: "14-Al Kamal Mall",
    quantity: 4,
    lastSaleDate: "2023-10-17"
  },
  {
    code: "19618",
    name: "EMBROIDERE TOWEL 64*32 WHITE W",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-02-24"
  },
  {
    code: "20389",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS A",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-05-15"
  },
  {
    code: "20389",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS A",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-26"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-19"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-11-23"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2023-12-24"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2023-09-15"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-07-05"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2023-06-30"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2023-12-19"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2024-11-23"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "20395",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS B",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "17-Arar Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-08-05"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-14"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "36-Al jubail Mall",
    quantity: 6,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2023-09-05"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-03-02"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "51-Park Avenue Riyadh",
    quantity: 5,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "09-Al-Salam Mall",
    quantity: 4,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "11-Jouri Mall",
    quantity: 6,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "20405",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS E",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "20394",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS F",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2022-09-22"
  },
  {
    code: "20394",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS F",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "20394",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS F",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2022-09-09"
  },
  {
    code: "20394",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS F",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-04"
  },
  {
    code: "20394",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS F",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "20394",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS F",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "20391",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS H",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "20391",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS H",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-01-22"
  },
  {
    code: "20391",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS H",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-11-27"
  },
  {
    code: "20391",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS H",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "20391",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS H",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "20391",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS H",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-10-19"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2023-06-14"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-09-29"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "20-Sitten Street Makkah",
    quantity: 6,
    lastSaleDate: "2022-11-30"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-24"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-09-06"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2023-03-15"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "45- Riyadh Gallery Mall",
    quantity: 6,
    lastSaleDate: "2023-04-06"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2024-06-28"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2024-07-11"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2024-12-01"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20401",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS K",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "17-Arar Othaim Mall",
    quantity: 6,
    lastSaleDate: "2022-11-19"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-11-17"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "36-Al jubail Mall",
    quantity: 6,
    lastSaleDate: "2023-12-07"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-12-28"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2023-08-09"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-07-11"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2022-11-22"
  },
  {
    code: "20399",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS L",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "20390",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS M",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "20390",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS M",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-01"
  },
  {
    code: "20396",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS N",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-06-18"
  },
  {
    code: "20396",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS N",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "20396",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS N",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-23"
  },
  {
    code: "20393",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS R",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2023-05-18"
  },
  {
    code: "20393",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS R",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-03-15"
  },
  {
    code: "20392",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS S",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-20"
  },
  {
    code: "20392",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS S",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-12-29"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "09-Al-Salam Mall",
    quantity: 5,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "13-Al-Yasmin Mall",
    quantity: 6,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-16"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "20-Sitten Street Makkah",
    quantity: 7,
    lastSaleDate: "2023-10-06"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2022-09-21"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-13"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-02-20"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-10-30"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-01-27"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2023-05-16"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2023-07-27"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-03-19"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2024-07-11"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-09-28"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "20403",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS T",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-04-17"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2022-12-11"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-12-01"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "36-Al jubail Mall",
    quantity: 6,
    lastSaleDate: "2023-12-02"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "38-Al_Riyadh Park",
    quantity: 4,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2023-11-08"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "49-AlAhsa Mall",
    quantity: 6,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "20398",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS W",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-12"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2023-08-27"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-08-04"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-04-30"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-09-17"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "21232",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Y",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "08-Makkah Mall",
    quantity: 4,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2022-12-27"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "36-Al jubail Mall",
    quantity: 8,
    lastSaleDate: "2023-11-24"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-05"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "40-Hayat Mall Riyad",
    quantity: 4,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-12-13"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-24"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2024-07-06"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "49-AlAhsa Mall",
    quantity: 7,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "21233",
    name: "EMBROIDERED GREY TOWEL SET WAVES 3 PCS Z",
    mall: "43-Mujan Park",
    quantity: 6,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "17113",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS A",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-09-20"
  },
  {
    code: "17113",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS A",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "17115",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS F",
    mall: "23-Alia Mall Madinah",
    quantity: 10,
    lastSaleDate: "2023-10-03"
  },
  {
    code: "17115",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS F",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-01-31"
  },
  {
    code: "17117",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS H",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "17117",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS H",
    mall: "23-Alia Mall Madinah",
    quantity: 10,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "17117",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS H",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-01"
  },
  {
    code: "17117",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS H",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-23"
  },
  {
    code: "17117",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS H",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-10-28"
  },
  {
    code: "17121",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS M",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2023-06-13"
  },
  {
    code: "17121",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS M",
    mall: "23-Alia Mall Madinah",
    quantity: 3,
    lastSaleDate: "2023-06-13"
  },
  {
    code: "17121",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS M",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "17121",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS M",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-11-15"
  },
  {
    code: "17121",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS M",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "17121",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS M",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-07-31"
  },
  {
    code: "17122",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS R",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-12-05"
  },
  {
    code: "17122",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS R",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-02-21"
  },
  {
    code: "17122",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS R",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-03-18"
  },
  {
    code: "17122",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS R",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-08-10"
  },
  {
    code: "17122",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS R",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-06-08"
  },
  {
    code: "17122",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS R",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "17122",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS R",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "17123",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS S",
    mall: "38-Al_Riyadh Park",
    quantity: 6,
    lastSaleDate: "2024-01-21"
  },
  {
    code: "17123",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS S",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "17123",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS S",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "17123",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS S",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-19"
  },
  {
    code: "17123",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS S",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-08-26"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "16-Ehsa Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-11-19"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2023-04-19"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-03-31"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-10-26"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "36-Al jubail Mall",
    quantity: 4,
    lastSaleDate: "2024-04-24"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "38-Al_Riyadh Park",
    quantity: 5,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-23"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-02-16"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "45- Riyadh Gallery Mall",
    quantity: 4,
    lastSaleDate: "2024-10-20"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-06"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2022-11-19"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "48 - Jeddah Park",
    quantity: 6,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "49-AlAhsa Mall",
    quantity: 6,
    lastSaleDate: "2023-05-27"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "50-Meem Plaza Riyadh",
    quantity: 7,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-26"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "05-Haifa Mall",
    quantity: 3,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "14-Al Kamal Mall",
    quantity: 6,
    lastSaleDate: "2023-01-01"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "20-Sitten Street Makkah",
    quantity: 4,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "22-Tabuk Park",
    quantity: 6,
    lastSaleDate: "2023-01-27"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "23-Alia Mall Madinah",
    quantity: 17,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "24-Yanbu Dana Mall",
    quantity: 6,
    lastSaleDate: "2024-08-23"
  },
  {
    code: "17124",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS T",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 5,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "04-Andalos Mall",
    quantity: 5,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "05-Haifa Mall",
    quantity: 5,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "08-Makkah Mall",
    quantity: 6,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "23-Alia Mall Madinah",
    quantity: 3,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-04-22"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "38-Al_Riyadh Park",
    quantity: 5,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "42-Dareen Mall Dammam",
    quantity: 4,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-06-15"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2023-12-01"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "51-Park Avenue Riyadh",
    quantity: 5,
    lastSaleDate: "2024-06-20"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "07-Arab Mall",
    quantity: 8,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "20-Sitten Street Makkah",
    quantity: 5,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "17125",
    name: "EMBROIDERED IVORY TOWEL SET WAVES 3 PCS W",
    mall: "56- Aziz Mall 2",
    quantity: 5,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "19599",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS D",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2022-07-20"
  },
  {
    code: "19599",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS D",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-09-23"
  },
  {
    code: "19599",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS D",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2023-09-16"
  },
  {
    code: "19599",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS D",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "19599",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS D",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-06-01"
  },
  {
    code: "19597",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS N",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2023-05-21"
  },
  {
    code: "19597",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS N",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-12-16"
  },
  {
    code: "19598",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS O",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-11-27"
  },
  {
    code: "19598",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS O",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "19598",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS O",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-08-24"
  },
  {
    code: "19598",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS O",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "19598",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS O",
    mall: "38-Al_Riyadh Park",
    quantity: 3,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "19598",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS O",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-06-06"
  },
  {
    code: "19598",
    name: "EMBROIDERED LINEN TOWEL SET WAVES 3 PCS O",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-01-25"
  },
  {
    code: "23327",
    name: "EMBROIDERED PLAIN PRAYER RUG 344",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "23332",
    name: "EMBROIDERED PLAIN PRAYER SET 3 PCS 1561",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "20681",
    name: "EMBROIDERED TOWEL SET 3 PCS #1",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2023-11-11"
  },
  {
    code: "20690",
    name: "EMBROIDERED TOWEL SET 3 PCS #10",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "20690",
    name: "EMBROIDERED TOWEL SET 3 PCS #10",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "20690",
    name: "EMBROIDERED TOWEL SET 3 PCS #10",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "20690",
    name: "EMBROIDERED TOWEL SET 3 PCS #10",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-06-05"
  },
  {
    code: "20691",
    name: "EMBROIDERED TOWEL SET 3 PCS #11",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-06-22"
  },
  {
    code: "20691",
    name: "EMBROIDERED TOWEL SET 3 PCS #11",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "20691",
    name: "EMBROIDERED TOWEL SET 3 PCS #11",
    mall: "44-Al-Jouf Center",
    quantity: 11,
    lastSaleDate: "2022-10-25"
  },
  {
    code: "20691",
    name: "EMBROIDERED TOWEL SET 3 PCS #11",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "20682",
    name: "EMBROIDERED TOWEL SET 3 PCS #2",
    mall: "19-Hail Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-02-10"
  },
  {
    code: "20682",
    name: "EMBROIDERED TOWEL SET 3 PCS #2",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 9,
    lastSaleDate: "2024-01-26"
  },
  {
    code: "20682",
    name: "EMBROIDERED TOWEL SET 3 PCS #2",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "20682",
    name: "EMBROIDERED TOWEL SET 3 PCS #2",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-06-09"
  },
  {
    code: "20682",
    name: "EMBROIDERED TOWEL SET 3 PCS #2",
    mall: "44-Al-Jouf Center",
    quantity: 13,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "20682",
    name: "EMBROIDERED TOWEL SET 3 PCS #2",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-10-19"
  },
  {
    code: "20682",
    name: "EMBROIDERED TOWEL SET 3 PCS #2",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "20683",
    name: "EMBROIDERED TOWEL SET 3 PCS #3",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-04-16"
  },
  {
    code: "20683",
    name: "EMBROIDERED TOWEL SET 3 PCS #3",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2022-08-11"
  },
  {
    code: "20683",
    name: "EMBROIDERED TOWEL SET 3 PCS #3",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-12-02"
  },
  {
    code: "20684",
    name: "EMBROIDERED TOWEL SET 3 PCS #4",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-08-21"
  },
  {
    code: "20684",
    name: "EMBROIDERED TOWEL SET 3 PCS #4",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-08-14"
  },
  {
    code: "20684",
    name: "EMBROIDERED TOWEL SET 3 PCS #4",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "20684",
    name: "EMBROIDERED TOWEL SET 3 PCS #4",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "20684",
    name: "EMBROIDERED TOWEL SET 3 PCS #4",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2023-12-28"
  },
  {
    code: "20684",
    name: "EMBROIDERED TOWEL SET 3 PCS #4",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-06-01"
  },
  {
    code: "20685",
    name: "EMBROIDERED TOWEL SET 3 PCS #5",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2022-12-30"
  },
  {
    code: "20686",
    name: "EMBROIDERED TOWEL SET 3 PCS #6",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-02-06"
  },
  {
    code: "20686",
    name: "EMBROIDERED TOWEL SET 3 PCS #6",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "20687",
    name: "EMBROIDERED TOWEL SET 3 PCS #7",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-19"
  },
  {
    code: "20687",
    name: "EMBROIDERED TOWEL SET 3 PCS #7",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "20687",
    name: "EMBROIDERED TOWEL SET 3 PCS #7",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2024-05-25"
  },
  {
    code: "20687",
    name: "EMBROIDERED TOWEL SET 3 PCS #7",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2024-02-08"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-10-24"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "49-AlAhsa Mall",
    quantity: 6,
    lastSaleDate: "2024-07-07"
  },
  {
    code: "20688",
    name: "EMBROIDERED TOWEL SET 3 PCS #8",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "20689",
    name: "EMBROIDERED TOWEL SET 3 PCS #9",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "20827",
    name: "EMBROIDERED TOWEL SET 3 PCS D #1",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "20827",
    name: "EMBROIDERED TOWEL SET 3 PCS D #1",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "20827",
    name: "EMBROIDERED TOWEL SET 3 PCS D #1",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2023-04-25"
  },
  {
    code: "20827",
    name: "EMBROIDERED TOWEL SET 3 PCS D #1",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-07-16"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2024-12-01"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "15-Riyadh Othaim Mall",
    quantity: 7,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 4,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-08-24"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "39-Salam Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "40-Hayat Mall Riyad",
    quantity: 4,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-07-21"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2023-11-22"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "51-Park Avenue Riyadh",
    quantity: 8,
    lastSaleDate: "2024-07-10"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "14-Al Kamal Mall",
    quantity: 8,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "55- Jabl Omar",
    quantity: 10,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20836",
    name: "EMBROIDERED TOWEL SET 3 PCS D #10",
    mall: "56- Aziz Mall 2",
    quantity: 5,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "20838",
    name: "EMBROIDERED TOWEL SET 3 PCS D #12",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-10-11"
  },
  {
    code: "20828",
    name: "EMBROIDERED TOWEL SET 3 PCS D #2",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "20828",
    name: "EMBROIDERED TOWEL SET 3 PCS D #2",
    mall: "14-Al Kamal Mall",
    quantity: 6,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "20828",
    name: "EMBROIDERED TOWEL SET 3 PCS D #2",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "20828",
    name: "EMBROIDERED TOWEL SET 3 PCS D #2",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-05-11"
  },
  {
    code: "20828",
    name: "EMBROIDERED TOWEL SET 3 PCS D #2",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2023-11-30"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-10-21"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-07-16"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2023-09-02"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "39-Salam Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2022-08-12"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "20829",
    name: "EMBROIDERED TOWEL SET 3 PCS D #3",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-21"
  },
  {
    code: "20830",
    name: "EMBROIDERED TOWEL SET 3 PCS D #4",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "20830",
    name: "EMBROIDERED TOWEL SET 3 PCS D #4",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-06-25"
  },
  {
    code: "20830",
    name: "EMBROIDERED TOWEL SET 3 PCS D #4",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "20831",
    name: "EMBROIDERED TOWEL SET 3 PCS D #5",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "20831",
    name: "EMBROIDERED TOWEL SET 3 PCS D #5",
    mall: "39-Salam Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "20831",
    name: "EMBROIDERED TOWEL SET 3 PCS D #5",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-07-05"
  },
  {
    code: "20831",
    name: "EMBROIDERED TOWEL SET 3 PCS D #5",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "20831",
    name: "EMBROIDERED TOWEL SET 3 PCS D #5",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2024-05-24"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2023-09-26"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "12-Al_Hamra Mall",
    quantity: 5,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "36-Al jubail Mall",
    quantity: 4,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "38-Al_Riyadh Park",
    quantity: 3,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "39-Salam Mall Riyadh",
    quantity: 10,
    lastSaleDate: "2023-10-10"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "20833",
    name: "EMBROIDERED TOWEL SET 3 PCS D #7",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 10,
    lastSaleDate: "2024-11-16"
  },
  {
    code: "17126",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN A",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2022-01-25"
  },
  {
    code: "17127",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN B",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-05-28"
  },
  {
    code: "17128",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN F",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "17129",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN G",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-03-09"
  },
  {
    code: "17129",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN G",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2023-04-15"
  },
  {
    code: "17129",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN G",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-03-08"
  },
  {
    code: "17129",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN G",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "17130",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN H",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-11-22"
  },
  {
    code: "17131",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN J",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2021-12-20"
  },
  {
    code: "17131",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN J",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-11-11"
  },
  {
    code: "17131",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN J",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2022-12-26"
  },
  {
    code: "17131",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN J",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2022-04-28"
  },
  {
    code: "17131",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN J",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-01-30"
  },
  {
    code: "17131",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN J",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2023-10-06"
  },
  {
    code: "17131",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN J",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2022-11-07"
  },
  {
    code: "17132",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN K",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-11-20"
  },
  {
    code: "17133",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN L",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2023-03-11"
  },
  {
    code: "17133",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN L",
    mall: "23-Alia Mall Madinah",
    quantity: 4,
    lastSaleDate: "2021-12-16"
  },
  {
    code: "17133",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN L",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-08-30"
  },
  {
    code: "17133",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN L",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-05-25"
  },
  {
    code: "17134",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN M",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-04-06"
  },
  {
    code: "17134",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN M",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "17134",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN M",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "17135",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN R",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2022-05-26"
  },
  {
    code: "17135",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN R",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-08-12"
  },
  {
    code: "17136",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN S",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-05-05"
  },
  {
    code: "17136",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN S",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2023-06-21"
  },
  {
    code: "17137",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN T",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "17137",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN T",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-12"
  },
  {
    code: "17137",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN T",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-02-01"
  },
  {
    code: "17137",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN T",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-09-04"
  },
  {
    code: "17137",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN T",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-10-14"
  },
  {
    code: "17137",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN T",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-12-04"
  },
  {
    code: "17138",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN W",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2022-01-15"
  },
  {
    code: "17138",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN W",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-30"
  },
  {
    code: "17138",
    name: "EMBROIDERED TOWEL SET WAVES 3 PCS LINEN W",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-08-16"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-05-12"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "15-Riyadh Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-02-25"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-06-10"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "47-Al-Nakheel Plaza",
    quantity: 7,
    lastSaleDate: "2024-07-31"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "19582",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS B",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-02-18"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "14-Al Kamal Mall",
    quantity: 5,
    lastSaleDate: "2023-11-23"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-03-29"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-05-15"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-08-12"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 8,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "36-Al jubail Mall",
    quantity: 5,
    lastSaleDate: "2023-10-02"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "43-Mujan Park",
    quantity: 13,
    lastSaleDate: "2023-10-23"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-06-25"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "49-AlAhsa Mall",
    quantity: 6,
    lastSaleDate: "2024-07-11"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-06-02"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "19596",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS D",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2022-05-24"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-06-16"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-03"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2022-11-13"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-12-18"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "20388",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS E",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2023-10-28"
  },
  {
    code: "19583",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS F",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "19583",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS F",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "19583",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS F",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "19583",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS F",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-09-20"
  },
  {
    code: "19583",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS F",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "19583",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS F",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2023-05-28"
  },
  {
    code: "19583",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS F",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "19585",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS H",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-30"
  },
  {
    code: "19585",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS H",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-23"
  },
  {
    code: "19585",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS H",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-02-11"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-05-10"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "17-Arar Othaim Mall",
    quantity: 6,
    lastSaleDate: "2024-04-15"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-08-20"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "25-Rabwa Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-05-12"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2023-10-29"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-01-10"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2023-10-06"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "19586",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS J",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-09-17"
  },
  {
    code: "19587",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS K",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-10-03"
  },
  {
    code: "19587",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS K",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "19587",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS K",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "19587",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS K",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-24"
  },
  {
    code: "19587",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS K",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2024-03-30"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-07-18"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "36-Al jubail Mall",
    quantity: 5,
    lastSaleDate: "2023-05-28"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-11-20"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-09-05"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "45- Riyadh Gallery Mall",
    quantity: 3,
    lastSaleDate: "2024-01-03"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-01-29"
  },
  {
    code: "19588",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS L",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "19589",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS M",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-05-05"
  },
  {
    code: "19589",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS M",
    mall: "49-AlAhsa Mall",
    quantity: 15,
    lastSaleDate: "2024-10-18"
  },
  {
    code: "19594",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS N",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2023-11-17"
  },
  {
    code: "19594",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS N",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "19594",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS N",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "19594",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS N",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "19594",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS N",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-10-03"
  },
  {
    code: "19594",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS N",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "19590",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS R",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-07-17"
  },
  {
    code: "19590",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS R",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-05-21"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-01-18"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-25"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 7,
    lastSaleDate: "2023-12-16"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-06-03"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-01-27"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "45- Riyadh Gallery Mall",
    quantity: 3,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-28"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "19592",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS T",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-04-02"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-08-20"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "25-Rabwa Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-05-08"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-12-15"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "36-Al jubail Mall",
    quantity: 6,
    lastSaleDate: "2024-02-11"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-08-01"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-08-18"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-01-01"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-03-05"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-09-17"
  },
  {
    code: "19593",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS W",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-09-19"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-18"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "36-Al jubail Mall",
    quantity: 7,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-26"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2023-06-24"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-12-12"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-29"
  },
  {
    code: "21230",
    name: "EMBROIDERED WHITE TOWEL SET WAVES 3 PCS Y",
    mall: "56- Aziz Mall 2",
    quantity: 4,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "16939",
    name: "EMILY LUCY FULL DUVET COVER 3 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 3,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "16939",
    name: "EMILY LUCY FULL DUVET COVER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-01-08"
  },
  {
    code: "16939",
    name: "EMILY LUCY FULL DUVET COVER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "18873",
    name: "ENTANGLED FLORAL PRINTED WINTER FULL COMFORTER 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2023-09-22"
  },
  {
    code: "18873",
    name: "ENTANGLED FLORAL PRINTED WINTER FULL COMFORTER 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "21037",
    name: "ENVOGUE ABBERLY KITCHEN TOWEL 5 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-01-22"
  },
  {
    code: "21037",
    name: "ENVOGUE ABBERLY KITCHEN TOWEL 5 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "21039",
    name: "ENVOGUE LEMON SCRIPE KITCHEN TOWEL 5 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-11-25"
  },
  {
    code: "21039",
    name: "ENVOGUE LEMON SCRIPE KITCHEN TOWEL 5 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "21039",
    name: "ENVOGUE LEMON SCRIPE KITCHEN TOWEL 5 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "21039",
    name: "ENVOGUE LEMON SCRIPE KITCHEN TOWEL 5 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "21039",
    name: "ENVOGUE LEMON SCRIPE KITCHEN TOWEL 5 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "21038",
    name: "ENVOGUE RENA MEDALLION KITCHEN TOWEL 5 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "21038",
    name: "ENVOGUE RENA MEDALLION KITCHEN TOWEL 5 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "14279",
    name: "ESPRESSO CUPS SET 6 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2019-10-31"
  },
  {
    code: "14424",
    name: "EUR TOWEL AIR-RICH LAVENDER",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-12-07"
  },
  {
    code: "14424",
    name: "EUR TOWEL AIR-RICH LAVENDER",
    mall: "08-Makkah Mall",
    quantity: 4,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "14424",
    name: "EUR TOWEL AIR-RICH LAVENDER",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-02"
  },
  {
    code: "14424",
    name: "EUR TOWEL AIR-RICH LAVENDER",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "14424",
    name: "EUR TOWEL AIR-RICH LAVENDER",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "14424",
    name: "EUR TOWEL AIR-RICH LAVENDER",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "14424",
    name: "EUR TOWEL AIR-RICH LAVENDER",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "20444",
    name: "F KITCHEN TOWEL IVORY 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-18"
  },
  {
    code: "20444",
    name: "F KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2022-09-14"
  },
  {
    code: "20463",
    name: "F KITCHEN TOWEL WHITE 28*16",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2022-07-06"
  },
  {
    code: "16428",
    name: "FABRIC FRESHENER FLORAL 500 ML",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-04-12"
  },
  {
    code: "16428",
    name: "FABRIC FRESHENER FLORAL 500 ML",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2023-04-13"
  },
  {
    code: "16428",
    name: "FABRIC FRESHENER FLORAL 500 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-16"
  },
  {
    code: "16428",
    name: "FABRIC FRESHENER FLORAL 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-04-14"
  },
  {
    code: "16428",
    name: "FABRIC FRESHENER FLORAL 500 ML",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-04-12"
  },
  {
    code: "16428",
    name: "FABRIC FRESHENER FLORAL 500 ML",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2023-10-03"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2023-04-12"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "11-Jouri Mall",
    quantity: 14,
    lastSaleDate: "2023-04-18"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-14"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2024-02-13"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2023-05-28"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-07-11"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-01-04"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2023-05-02"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-05-15"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 10,
    lastSaleDate: "2023-09-28"
  },
  {
    code: "16427",
    name: "FABRIC FRESHENER GOLDEN SAND 500 ML",
    mall: "52-Al_Baha Mall",
    quantity: 31,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2020-12-02"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-11-02"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2020-12-23"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2020-10-31"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 21,
    lastSaleDate: "2024-04-18"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2020-12-30"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2020-11-04"
  },
  {
    code: "16778",
    name: "FABRIC FRESHENER JULIANA 500 ML",
    mall: "22-Tabuk Park",
    quantity: 18,
    lastSaleDate: "2023-04-10"
  },
  {
    code: "16431",
    name: "FABRIC FRESHENER LORA 500 ML",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-04-10"
  },
  {
    code: "16431",
    name: "FABRIC FRESHENER LORA 500 ML",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-04-09"
  },
  {
    code: "16431",
    name: "FABRIC FRESHENER LORA 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-04-14"
  },
  {
    code: "16431",
    name: "FABRIC FRESHENER LORA 500 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-04-11"
  },
  {
    code: "16431",
    name: "FABRIC FRESHENER LORA 500 ML",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "16425",
    name: "FABRIC FRESHENER MOONSTONE 500 ML",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2021-05-04"
  },
  {
    code: "16426",
    name: "FABRIC FRESHENER OUD & AMBER 500 ML",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "16426",
    name: "FABRIC FRESHENER OUD & AMBER 500 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-08"
  },
  {
    code: "16426",
    name: "FABRIC FRESHENER OUD & AMBER 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-08-23"
  },
  {
    code: "16426",
    name: "FABRIC FRESHENER OUD & AMBER 500 ML",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2023-09-12"
  },
  {
    code: "16426",
    name: "FABRIC FRESHENER OUD & AMBER 500 ML",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "16433",
    name: "FABRIC FRESHENER RUBY 500 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-18"
  },
  {
    code: "16433",
    name: "FABRIC FRESHENER RUBY 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-04-14"
  },
  {
    code: "16433",
    name: "FABRIC FRESHENER RUBY 500 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2023-04-12"
  },
  {
    code: "16433",
    name: "FABRIC FRESHENER RUBY 500 ML",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-04-13"
  },
  {
    code: "16433",
    name: "FABRIC FRESHENER RUBY 500 ML",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2023-07-26"
  },
  {
    code: "16433",
    name: "FABRIC FRESHENER RUBY 500 ML",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-04-15"
  },
  {
    code: "16433",
    name: "FABRIC FRESHENER RUBY 500 ML",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-02-02"
  },
  {
    code: "16432",
    name: "FABRIC FRESHENER SEA WAVES 500 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-04-16"
  },
  {
    code: "16432",
    name: "FABRIC FRESHENER SEA WAVES 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-04-04"
  },
  {
    code: "16432",
    name: "FABRIC FRESHENER SEA WAVES 500 ML",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-04-09"
  },
  {
    code: "19906",
    name: "FEATHER BREEZE COCNUT MILK KING COMFORTER 7 CS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-03-22"
  },
  {
    code: "19770",
    name: "FIRE FIGHTER BATH ROBE KIDS PONCHO",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "22158",
    name: "FLAVIANA BERRY KING COMFORTER 8 PCS",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-09-18"
  },
  {
    code: "12402",
    name: "FLOOR TOWEL AIR-RICH FERN",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "12401",
    name: "FLOOR TOWEL AIR-RICH LINEN",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2020-11-20"
  },
  {
    code: "12407",
    name: "FLOOR TOWEL AIR-RICH PINK",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2022-09-29"
  },
  {
    code: "13231",
    name: "FLOPSY FULL COMFORTER 9 PCS",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2021-10-21"
  },
  {
    code: "14915",
    name: "FLORENTINE CANVAS WINTER KING COMFORTER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-01-15"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "09-Al-Salam Mall",
    quantity: 7,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-09-09"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "27-Dhahran Mall khobar",
    quantity: 3,
    lastSaleDate: "2024-06-28"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-04"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-10-26"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "47-Al-Nakheel Plaza",
    quantity: 48,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-07-31"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "14-Al Kamal Mall",
    quantity: 5,
    lastSaleDate: "2024-10-02"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-07-08"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 16,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-07-19"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 4,
    lastSaleDate: "2024-06-14"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "43-Mujan Park",
    quantity: 34,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-07-05"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "52-Al_Baha Mall",
    quantity: 18,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "54-THE VILLAGE",
    quantity: 2,
    lastSaleDate: "2024-08-10"
  },
  {
    code: "20849",
    name: "FLOWER MARKET FRESHENER WHITE 200 ML",
    mall: "55- Jabl Omar",
    quantity: 22,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "20342",
    name: "FLOWERS COFFEE SET 6 PCS 90 ML CS 09",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-02-21"
  },
  {
    code: "21567",
    name: "FOREST STRIPE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "21567",
    name: "FOREST STRIPE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "16460",
    name: "FRESHENER AQUA EDITION 120 ML AQUA MARINE",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2023-01-02"
  },
  {
    code: "16459",
    name: "FRESHENER AQUA EDITION 120 ML ENGLISH PEARFREE",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2021-08-29"
  },
  {
    code: "16459",
    name: "FRESHENER AQUA EDITION 120 ML ENGLISH PEARFREE",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2021-08-09"
  },
  {
    code: "16459",
    name: "FRESHENER AQUA EDITION 120 ML ENGLISH PEARFREE",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "20142",
    name: "FRESHENER BALSAM&CEDAR BLACK 500 ML",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-03-28"
  },
  {
    code: "20142",
    name: "FRESHENER BALSAM&CEDAR BLACK 500 ML",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-03-01"
  },
  {
    code: "20142",
    name: "FRESHENER BALSAM&CEDAR BLACK 500 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2022-04-27"
  },
  {
    code: "20142",
    name: "FRESHENER BALSAM&CEDAR BLACK 500 ML",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2022-05-30"
  },
  {
    code: "14856",
    name: "FRESHENER FLOWER DIFFUSER 200 ML APRIL FRESH",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2022-02-19"
  },
  {
    code: "14856",
    name: "FRESHENER FLOWER DIFFUSER 200 ML APRIL FRESH",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2022-04-13"
  },
  {
    code: "14856",
    name: "FRESHENER FLOWER DIFFUSER 200 ML APRIL FRESH",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-03-18"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2022-04-28"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-11-25"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-02-13"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2023-06-17"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2022-11-02"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 6,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "20143",
    name: "FRESHENER HEALING FOUGERE BLACK ESITION 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "08-Makkah Mall",
    quantity: 5,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-07-27"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-05-30"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 8,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-24"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2023-03-10"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "22-Tabuk Park",
    quantity: 11,
    lastSaleDate: "2024-10-02"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "30-Tala Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "43-Mujan Park",
    quantity: 31,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 14,
    lastSaleDate: "2024-08-19"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-11-13"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "47-Al-Nakheel Plaza",
    quantity: 21,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-14"
  },
  {
    code: "20144",
    name: "FRESHENER LEMON EUCALYPTIS BLACK ESITION 200 ML",
    mall: "52-Al_Baha Mall",
    quantity: 14,
    lastSaleDate: "2024-07-18"
  },
  {
    code: "21830",
    name: "FROG3 KIDS HOODED TOWEL BATH ROBE",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-05"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-06-13"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-26"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2024-09-19"
  },
  {
    code: "22522",
    name: "FROG4 KIDS HOODED TOWEL BATH ROBE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-05-19"
  },
  {
    code: "14281",
    name: "FROST PILLOW MEMORY",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2019-08-18"
  },
  {
    code: "17584",
    name: "FUR BOOTS BE-1868 RED&IVORY SMALL",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-04-10"
  },
  {
    code: "17584",
    name: "FUR BOOTS BE-1868 RED&IVORY SMALL",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-05-19"
  },
  {
    code: "17589",
    name: "FUR BOOTS BE-1869 BLUE&IVORY MIDUME",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-04-04"
  },
  {
    code: "17585",
    name: "FUR BOOTS BE-1869 BLUE&IVORY SMALL",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-05-19"
  },
  {
    code: "17592",
    name: "FUR BOOTS BE-1870 BLACK&IVORY LARGE",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2021-05-14"
  },
  {
    code: "17586",
    name: "FUR BOOTS BE-1870 BLACK&IVORY SMALL",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-04-29"
  },
  {
    code: "21217",
    name: "FUR SLIPPER BE 31 GREY 36-37",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "21217",
    name: "FUR SLIPPER BE 31 GREY 36-37",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-04"
  },
  {
    code: "21218",
    name: "FUR SLIPPER BE 31 GREY 38-39",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-12-31"
  },
  {
    code: "20227",
    name: "FUR SLIPPER BE-31 GREY 36/37",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-17"
  },
  {
    code: "20227",
    name: "FUR SLIPPER BE-31 GREY 36/37",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-04-07"
  },
  {
    code: "20215",
    name: "FUR SLIPPER BR-40 WHITE WITH BROWN 37/38",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-12-31"
  },
  {
    code: "20215",
    name: "FUR SLIPPER BR-40 WHITE WITH BROWN 37/38",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "20216",
    name: "FUR SLIPPER BR-40 WHITE WITH BROWN 39/40",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-10-13"
  },
  {
    code: "20212",
    name: "FUR SLIPPER BR-40 WHITE WITH GREY 37/38",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "20480",
    name: "G KITCHEN TOWEL GREY 28*16",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-12-21"
  },
  {
    code: "20480",
    name: "G KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-03-20"
  },
  {
    code: "20442",
    name: "G KITCHEN TOWEL IVORY 28*16",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "20442",
    name: "G KITCHEN TOWEL IVORY 28*16",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-24"
  },
  {
    code: "20442",
    name: "G KITCHEN TOWEL IVORY 28*16",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "20442",
    name: "G KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "20442",
    name: "G KITCHEN TOWEL IVORY 28*16",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "20461",
    name: "G KITCHEN TOWEL WHITE 28*16",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2023-11-15"
  },
  {
    code: "18732",
    name: "GA2955-P TEA SET",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-09-30"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-07-19"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2024-02-06"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2023-11-02"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-01"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-28"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-02-25"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-10-09"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "20848",
    name: "GARDEN LAVENDER FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-04-14"
  },
  {
    code: "13138",
    name: "GEL COOL 2 IN 1 QUEEN PILLOW",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "13138",
    name: "GEL COOL 2 IN 1 QUEEN PILLOW",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-06-10"
  },
  {
    code: "13138",
    name: "GEL COOL 2 IN 1 QUEEN PILLOW",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "13138",
    name: "GEL COOL 2 IN 1 QUEEN PILLOW",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "13138",
    name: "GEL COOL 2 IN 1 QUEEN PILLOW",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-02"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 4,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 12,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-01-03"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 6,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 5,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "22518",
    name: "GENNA WINTER DARK GREY KING COMFORTER 8 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2025-04-06"
  },
  {
    code: "21414",
    name: "GENNA WINTER KING COMFORTER 8 PCS",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "21414",
    name: "GENNA WINTER KING COMFORTER 8 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "21564",
    name: "GEO TANGERINE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "21564",
    name: "GEO TANGERINE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-11-27"
  },
  {
    code: "21564",
    name: "GEO TANGERINE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-08"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 8,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "22934",
    name: "GILDED BIRDS - IVORY EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "23174",
    name: "GIZEM BATH ROBE BRID BEIGE - CREAM 6 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "23173",
    name: "GIZEM BATH ROBE BRID CREAM - CREAM 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "21357",
    name: "GLASS CUP CAT DECOR",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-03-08"
  },
  {
    code: "20714",
    name: "GLASS TAMRYA",
    mall: "38-Al_Riyadh Park",
    quantity: 28,
    lastSaleDate: "2022-06-12"
  },
  {
    code: "21353",
    name: "GLASS TEA AND ARABIC COFFE SET 18 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-11-18"
  },
  {
    code: "20713",
    name: "GLASS TYPSE",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2022-06-16"
  },
  {
    code: "14952",
    name: "GOAT KIDS BATH ROBE",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-05-13"
  },
  {
    code: "17658",
    name: "GRAY RUCHED KING COMFORTER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2022-06-24"
  },
  {
    code: "17664",
    name: "GRAY RUCHED KING DUVET COVER 3 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "17662",
    name: "GRAY RUCHED QUEEN DUVET COVER 3 PCS",
    mall: "04-Andalos Mall",
    quantity: 4,
    lastSaleDate: "2023-06-17"
  },
  {
    code: "17662",
    name: "GRAY RUCHED QUEEN DUVET COVER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "17662",
    name: "GRAY RUCHED QUEEN DUVET COVER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 6,
    lastSaleDate: "2021-07-17"
  },
  {
    code: "17662",
    name: "GRAY RUCHED QUEEN DUVET COVER 3 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 7,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "17662",
    name: "GRAY RUCHED QUEEN DUVET COVER 3 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2022-07-05"
  },
  {
    code: "17662",
    name: "GRAY RUCHED QUEEN DUVET COVER 3 PCS",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2022-03-20"
  },
  {
    code: "18504",
    name: "GREEN LEAVES COTON QUILT 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "18504",
    name: "GREEN LEAVES COTON QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "22935",
    name: "GREEN WOOD EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-02-04"
  },
  {
    code: "22935",
    name: "GREEN WOOD EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "22935",
    name: "GREEN WOOD EMBROIDERED TOWEL WAVE SET 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "16664",
    name: "GREY DAMASK FULL 500 STITCH DUVET COVER 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-30"
  },
  {
    code: "20632",
    name: "GREY HOTEL CROSSILL 1A KING DUVET COVER 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "07-Arab Mall",
    quantity: 12,
    lastSaleDate: "2024-04-21"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-12-24"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 11,
    lastSaleDate: "2022-07-04"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "12-Al_Hamra Mall",
    quantity: 6,
    lastSaleDate: "2022-08-20"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "13-Al-Yasmin Mall",
    quantity: 3,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2021-09-14"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2023-04-02"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "23-Alia Mall Madinah",
    quantity: 5,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 3,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2021-12-07"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "42-Dareen Mall Dammam",
    quantity: 8,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 7,
    lastSaleDate: "2022-02-03"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-26"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2025-01-19"
  },
  {
    code: "19854",
    name: "GREY SHEET 4 PCS 400 STITSH KING",
    mall: "51-Park Avenue Riyadh",
    quantity: 6,
    lastSaleDate: "2022-11-13"
  },
  {
    code: "20441",
    name: "H KITCHEN TOWEL IVORY 28*16",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2023-10-30"
  },
  {
    code: "17489",
    name: "HAS SKY KING BLANKET BUTTER MILK",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "15033",
    name: "HAS SKY SO-SOFT KING COMFORTER 3PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "10870",
    name: "HASBAHCE BED COVER SET 10 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2017-09-13"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-14"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 4,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-11"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22680",
    name: "HEAD ACCESSORIES SLUMBER CREAM 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "22679",
    name: "HEAD ACCESSORIES SLUMBER WHITE 4 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2024-11-08"
  },
  {
    code: "22679",
    name: "HEAD ACCESSORIES SLUMBER WHITE 4 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "22679",
    name: "HEAD ACCESSORIES SLUMBER WHITE 4 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 17,
    lastSaleDate: "2024-10-21"
  },
  {
    code: "22679",
    name: "HEAD ACCESSORIES SLUMBER WHITE 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2023-08-05"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-08"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-29"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-08-27"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-08-10"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-02-26"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2023-09-12"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-08-11"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-12-01"
  },
  {
    code: "20850",
    name: "HEALING FOUGERE FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-03-15"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-08-25"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2023-05-13"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2022-10-16"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2022-10-27"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-12-18"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2023-11-27"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2022-08-27"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2025-04-23"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "19853",
    name: "HEATHER SHEET 4 PCS 400 STITSH KING",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2022-12-17"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-04-16"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-03-12"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "11-Jouri Mall",
    quantity: 5,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 3,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-03-04"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-11-01"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 5,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-08-15"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-07-14"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2023-04-02"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-07-31"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-08-28"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-04-03"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-03-10"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "19911",
    name: "HELENA BATH ACCESS SET 5 PCS",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-08-19"
  },
  {
    code: "10926",
    name: "HELENA BATHMAT SET 4 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "21432",
    name: "HERB STAMP KITCHEN SET TOWLS 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "21432",
    name: "HERB STAMP KITCHEN SET TOWLS 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "21432",
    name: "HERB STAMP KITCHEN SET TOWLS 4 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "21432",
    name: "HERB STAMP KITCHEN SET TOWLS 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "21432",
    name: "HERB STAMP KITCHEN SET TOWLS 4 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "21431",
    name: "HERBS KITCHEN SET TOWLS 4 PCS",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "21431",
    name: "HERBS KITCHEN SET TOWLS 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-10-12"
  },
  {
    code: "21431",
    name: "HERBS KITCHEN SET TOWLS 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2024-05-30"
  },
  {
    code: "21431",
    name: "HERBS KITCHEN SET TOWLS 4 PCS",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2024-01-09"
  },
  {
    code: "21431",
    name: "HERBS KITCHEN SET TOWLS 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 7,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "19900",
    name: "HEXAGEO BATH ACCESS SET 5 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-07-10"
  },
  {
    code: "19900",
    name: "HEXAGEO BATH ACCESS SET 5 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-08-21"
  },
  {
    code: "19900",
    name: "HEXAGEO BATH ACCESS SET 5 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-01-19"
  },
  {
    code: "19900",
    name: "HEXAGEO BATH ACCESS SET 5 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-02-26"
  },
  {
    code: "19900",
    name: "HEXAGEO BATH ACCESS SET 5 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "21639",
    name: "HG JUVI BIRD DAMASK TWIN COMFORTER 6 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-08-22"
  },
  {
    code: "21639",
    name: "HG JUVI BIRD DAMASK TWIN COMFORTER 6 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-21"
  },
  {
    code: "21639",
    name: "HG JUVI BIRD DAMASK TWIN COMFORTER 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "21646",
    name: "HG JUVI SAIL AWAY FULL COMFORTER 8 PCS",
    mall: "22-Tabuk Park",
    quantity: 4,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "21646",
    name: "HG JUVI SAIL AWAY FULL COMFORTER 8 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "21646",
    name: "HG JUVI SAIL AWAY FULL COMFORTER 8 PCS",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-04-03"
  },
  {
    code: "21837",
    name: "HIPO3 KIDS HOODED TOWEL BATH ROBE",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-03"
  },
  {
    code: "14953",
    name: "HIPPO KIDS BATH ROBE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-11-17"
  },
  {
    code: "18489",
    name: "HKL9701 BATH MAT 50X80",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "18489",
    name: "HKL9701 BATH MAT 50X80",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-07"
  },
  {
    code: "18489",
    name: "HKL9701 BATH MAT 50X80",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-27"
  },
  {
    code: "18489",
    name: "HKL9701 BATH MAT 50X80",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "18489",
    name: "HKL9701 BATH MAT 50X80",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-10-13"
  },
  {
    code: "18490",
    name: "HKL9702 BATH MAT 50X80",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "18490",
    name: "HKL9702 BATH MAT 50X80",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "18490",
    name: "HKL9702 BATH MAT 50X80",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-07-22"
  },
  {
    code: "18491",
    name: "HKL9703 BATH MAT 50X80",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "18491",
    name: "HKL9703 BATH MAT 50X80",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "18492",
    name: "HKL9704 BATH MAT 50X80",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-13"
  },
  {
    code: "18492",
    name: "HKL9704 BATH MAT 50X80",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "18493",
    name: "HKL9705 BATH MAT 50X80",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "18493",
    name: "HKL9705 BATH MAT 50X80",
    mall: "23-Alia Mall Madinah",
    quantity: 5,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "18493",
    name: "HKL9705 BATH MAT 50X80",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-11-28"
  },
  {
    code: "18493",
    name: "HKL9705 BATH MAT 50X80",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-10-28"
  },
  {
    code: "18493",
    name: "HKL9705 BATH MAT 50X80",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "18493",
    name: "HKL9705 BATH MAT 50X80",
    mall: "43-Mujan Park",
    quantity: 6,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "18493",
    name: "HKL9705 BATH MAT 50X80",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "18497",
    name: "HKL9709 BATH MAT 50X80",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-16"
  },
  {
    code: "18497",
    name: "HKL9709 BATH MAT 50X80",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "18497",
    name: "HKL9709 BATH MAT 50X80",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-10-29"
  },
  {
    code: "18497",
    name: "HKL9709 BATH MAT 50X80",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "18497",
    name: "HKL9709 BATH MAT 50X80",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "18497",
    name: "HKL9709 BATH MAT 50X80",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "18498",
    name: "HKL9710 BATH MAT 50X80",
    mall: "25-Rabwa Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-02-08"
  },
  {
    code: "18498",
    name: "HKL9710 BATH MAT 50X80",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "21442",
    name: "HOLIDAY PLAID RED FULL COMFORTER 3 PCS",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-07-23"
  },
  {
    code: "21442",
    name: "HOLIDAY PLAID RED FULL COMFORTER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "21442",
    name: "HOLIDAY PLAID RED FULL COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2023-11-07"
  },
  {
    code: "21442",
    name: "HOLIDAY PLAID RED FULL COMFORTER 3 PCS",
    mall: "57-Sauq7",
    quantity: 3,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "19461",
    name: "HOLLINS WHITE QUEEN COMFORTER 5 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-06-27"
  },
  {
    code: "18128",
    name: "IIIUSTRATION FLORAL PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "18128",
    name: "IIIUSTRATION FLORAL PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "17242",
    name: "ISLAND KIDS HOODED TOWEL BATH ROBE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2022-05-05"
  },
  {
    code: "16666",
    name: "IVORY DAMASK FULL 500 STITCH DUVET COVER 3 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2021-07-29"
  },
  {
    code: "11986",
    name: "IVORY EYELASH SHAGE RUG 67*107",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2021-09-29"
  },
  {
    code: "11986",
    name: "IVORY EYELASH SHAGE RUG 67*107",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2023-12-03"
  },
  {
    code: "21866",
    name: "IVORY GUAZE QUILT FULL 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-04-08"
  },
  {
    code: "21866",
    name: "IVORY GUAZE QUILT FULL 1 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-06-22"
  },
  {
    code: "21859",
    name: "IVORY GUAZE QUILT TWIN 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "21859",
    name: "IVORY GUAZE QUILT TWIN 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2023-04-10"
  },
  {
    code: "20485",
    name: "J KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "20447",
    name: "J KITCHEN TOWEL IVORY 28*16",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-06-01"
  },
  {
    code: "20447",
    name: "J KITCHEN TOWEL IVORY 28*16",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2023-08-05"
  },
  {
    code: "20447",
    name: "J KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "20447",
    name: "J KITCHEN TOWEL IVORY 28*16",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "20466",
    name: "J KITCHEN TOWEL WHITE 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-10-13"
  },
  {
    code: "20466",
    name: "J KITCHEN TOWEL WHITE 28*16",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-10-27"
  },
  {
    code: "20466",
    name: "J KITCHEN TOWEL WHITE 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "18460",
    name: "J1929 GARDEN CORAL 21X34 INCH BATH MAT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "18460",
    name: "J1929 GARDEN CORAL 21X34 INCH BATH MAT",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "18460",
    name: "J1929 GARDEN CORAL 21X34 INCH BATH MAT",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "18460",
    name: "J1929 GARDEN CORAL 21X34 INCH BATH MAT",
    mall: "43-Mujan Park",
    quantity: 6,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "18460",
    name: "J1929 GARDEN CORAL 21X34 INCH BATH MAT",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2024-03-31"
  },
  {
    code: "18460",
    name: "J1929 GARDEN CORAL 21X34 INCH BATH MAT",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 7,
    lastSaleDate: "2023-03-18"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-05-12"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-03"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-29"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-02"
  },
  {
    code: "18461",
    name: "J1929 GARDEN CORAL 27X45 INCH BATH MAT",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "18462",
    name: "J1932 BELLA BLUE 21X34 INCH BATH MAT",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "13301",
    name: "JACK SET",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2018-11-25"
  },
  {
    code: "21838",
    name: "JAMAICA BATH ROBE BRIDE BAIGE-WHITE 6 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2023-07-31"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 10,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 8,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 7,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 10,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 8,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 7,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-03-04"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 11,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2025-05-10"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "21560",
    name: "JASON CHECK BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "22090",
    name: "JCP BIAB MULTI STRIPE FULL COMFORTER 7 PCS L10",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "22090",
    name: "JCP BIAB MULTI STRIPE FULL COMFORTER 7 PCS L10",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "22090",
    name: "JCP BIAB MULTI STRIPE FULL COMFORTER 7 PCS L10",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "22090",
    name: "JCP BIAB MULTI STRIPE FULL COMFORTER 7 PCS L10",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-06-10"
  },
  {
    code: "22083",
    name: "JCP BIAB MULTI STRIPE TWIN COMFORTER 5 PCS L09",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-07"
  },
  {
    code: "22083",
    name: "JCP BIAB MULTI STRIPE TWIN COMFORTER 5 PCS L09",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-10-07"
  },
  {
    code: "22087",
    name: "JCP BIAB NAVY STRIPE FULL COMFORTER 7 PCS R04",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "22080",
    name: "JCP BIAB NAVY STRIPE TWIN COMFORTER 5 PCS R03",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "22091",
    name: "JCP BIAB PURPLE SOLID FULL COMFORTER 7 PCS R12",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "22091",
    name: "JCP BIAB PURPLE SOLID FULL COMFORTER 7 PCS R12",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-06"
  },
  {
    code: "22091",
    name: "JCP BIAB PURPLE SOLID FULL COMFORTER 7 PCS R12",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "22084",
    name: "JCP BIAB PURPLE SOLID TWIN COMFORTER 5 PCS R11",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-04-12"
  },
  {
    code: "21738",
    name: "JULES BLUE KING COMFORTER 8 PCS.",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-07"
  },
  {
    code: "21247",
    name: "JULIANA NAVY KING COMFORTER 3 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22955",
    name: "JUST RELAX 90X191 CM TWIN MATRESPAD",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "22955",
    name: "JUST RELAX 90X191 CM TWIN MATRESPAD",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "22955",
    name: "JUST RELAX 90X191 CM TWIN MATRESPAD",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "22955",
    name: "JUST RELAX 90X191 CM TWIN MATRESPAD",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "20448",
    name: "K KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2022-11-10"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 8,
    lastSaleDate: "2023-08-05"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-05-24"
  },
  {
    code: "21428",
    name: "KENZIA BLESS KITCHEN SET TOWLS 4 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-29"
  },
  {
    code: "13938",
    name: "KIDS BATH ROBE",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2019-11-08"
  },
  {
    code: "13938",
    name: "KIDS BATH ROBE",
    mall: "09-Al-Salam Mall",
    quantity: 3,
    lastSaleDate: "2022-07-31"
  },
  {
    code: "23325",
    name: "KIDS PRAYER RUG 351",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22032",
    name: "KIDS SPACE EXPLORER FULL SHEET 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-24"
  },
  {
    code: "22032",
    name: "KIDS SPACE EXPLORER FULL SHEET 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "22032",
    name: "KIDS SPACE EXPLORER FULL SHEET 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "22035",
    name: "KIDS SPACE EXPLORER TWIN SHEET 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "22035",
    name: "KIDS SPACE EXPLORER TWIN SHEET 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "22033",
    name: "KIDS UNICORN BUSTS FULL SHEET 4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "22033",
    name: "KIDS UNICORN BUSTS FULL SHEET 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "22033",
    name: "KIDS UNICORN BUSTS FULL SHEET 4 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-10-01"
  },
  {
    code: "22033",
    name: "KIDS UNICORN BUSTS FULL SHEET 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2024-08-03"
  },
  {
    code: "22287",
    name: "KNIT WHITE 3 PCS BATH ACCESS",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "22287",
    name: "KNIT WHITE 3 PCS BATH ACCESS",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22287",
    name: "KNIT WHITE 3 PCS BATH ACCESS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2024-07-10"
  },
  {
    code: "22287",
    name: "KNIT WHITE 3 PCS BATH ACCESS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-10-24"
  },
  {
    code: "22287",
    name: "KNIT WHITE 3 PCS BATH ACCESS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "22287",
    name: "KNIT WHITE 3 PCS BATH ACCESS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "23926",
    name: "KUCUK KABEALTIN-55",
    mall: "55- Jabl Omar",
    quantity: 10,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "22877",
    name: "KUFUNNY HOODEI PONCHO 85X70CM PINK",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "22877",
    name: "KUFUNNY HOODEI PONCHO 85X70CM PINK",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22877",
    name: "KUFUNNY HOODEI PONCHO 85X70CM PINK",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "22877",
    name: "KUFUNNY HOODEI PONCHO 85X70CM PINK",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "22877",
    name: "KUFUNNY HOODEI PONCHO 85X70CM PINK",
    mall: "45- Riyadh Gallery Mall",
    quantity: 4,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22877",
    name: "KUFUNNY HOODEI PONCHO 85X70CM PINK",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "12-Al_Hamra Mall",
    quantity: 8,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "22879",
    name: "KUFUNNY HOODEI PONCHO 85X70CM RED",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "21964",
    name: "KYLLINGTON COTON TWIN COMFORTER 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-09"
  },
  {
    code: "21964",
    name: "KYLLINGTON COTON TWIN COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-24"
  },
  {
    code: "21964",
    name: "KYLLINGTON COTON TWIN COMFORTER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "20483",
    name: "L KITCHEN TOWEL GREY 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-06"
  },
  {
    code: "20445",
    name: "L KITCHEN TOWEL IVORY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20445",
    name: "L KITCHEN TOWEL IVORY 28*16",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "20445",
    name: "L KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-17"
  },
  {
    code: "20464",
    name: "L KITCHEN TOWEL WHITE 28*16",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2022-10-05"
  },
  {
    code: "20464",
    name: "L KITCHEN TOWEL WHITE 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-12-26"
  },
  {
    code: "20464",
    name: "L KITCHEN TOWEL WHITE 28*16",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2022-09-17"
  },
  {
    code: "20464",
    name: "L KITCHEN TOWEL WHITE 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "20464",
    name: "L KITCHEN TOWEL WHITE 28*16",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2023-08-12"
  },
  {
    code: "16667",
    name: "L.BLUE DAMASK FULL 500 STITCH DUVET COVER 3 PCS",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2021-04-21"
  },
  {
    code: "12368",
    name: "L.MARBLE SHEET (QUEEN)SET 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-01-15"
  },
  {
    code: "12368",
    name: "L.MARBLE SHEET (QUEEN)SET 3PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 11,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "12368",
    name: "L.MARBLE SHEET (QUEEN)SET 3PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-04-25"
  },
  {
    code: "17947",
    name: "L/XL IVORY SHAWL JACQUARD BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "17949",
    name: "L/XL LINEN SHAWL JACQUARD BATH ROBE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "17928",
    name: "L/XL PINK SHAWL JACQUARD BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "17928",
    name: "L/XL PINK SHAWL JACQUARD BATH ROBE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-06-29"
  },
  {
    code: "17923",
    name: "L/XL TITANIUM SHAWL JACQUARD BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-06-10"
  },
  {
    code: "17923",
    name: "L/XL TITANIUM SHAWL JACQUARD BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2023-03-09"
  },
  {
    code: "17948",
    name: "L/XL WHITE SHAWL JACQUARD BATH ROBE",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2023-04-19"
  },
  {
    code: "20731",
    name: "LARGE SIMPLE DIAGONAL TARTAN BABY BLUE PRINTED KING COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-11-28"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2021-02-19"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "16505",
    name: "LATTICE LEAF KING QUILT 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "15048",
    name: "LAVENDER DAMASK KING COMFORTER 500 TC 6 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2020-11-26"
  },
  {
    code: "15048",
    name: "LAVENDER DAMASK KING COMFORTER 500 TC 6 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-17"
  },
  {
    code: "19950",
    name: "LEA-LINENPOLYSTER PRINTED KING SHEET 6 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-07-28"
  },
  {
    code: "11830",
    name: "LEAF 5 PCS ACCESS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2019-09-13"
  },
  {
    code: "17534",
    name: "LEOPARD GLAM SILVER 5 PCS ACCESS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-04-28"
  },
  {
    code: "17534",
    name: "LEOPARD GLAM SILVER 5 PCS ACCESS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "17534",
    name: "LEOPARD GLAM SILVER 5 PCS ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "17534",
    name: "LEOPARD GLAM SILVER 5 PCS ACCESS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-01-28"
  },
  {
    code: "17534",
    name: "LEOPARD GLAM SILVER 5 PCS ACCESS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-06-23"
  },
  {
    code: "21489",
    name: "LIGHT GREY S/M ROBE FEATHER YARN",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-03-26"
  },
  {
    code: "21489",
    name: "LIGHT GREY S/M ROBE FEATHER YARN",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-01-22"
  },
  {
    code: "19813",
    name: "LILA ROSE KING COMFORTER 8 PCS.",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2023-07-12"
  },
  {
    code: "21568",
    name: "LILAC FLORAL BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 3,
    lastSaleDate: "2024-09-28"
  },
  {
    code: "21568",
    name: "LILAC FLORAL BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-11-03"
  },
  {
    code: "21568",
    name: "LILAC FLORAL BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "21860",
    name: "LILAC GUAZE QUILT FULL 1 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-05-02"
  },
  {
    code: "19849",
    name: "LILAC MARBLE SHEET 4 PCS 400 STITSH KING",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "19849",
    name: "LILAC MARBLE SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "19849",
    name: "LILAC MARBLE SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2022-10-21"
  },
  {
    code: "19849",
    name: "LILAC MARBLE SHEET 4 PCS 400 STITSH KING",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-04-29"
  },
  {
    code: "19849",
    name: "LILAC MARBLE SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 7,
    lastSaleDate: "2023-05-22"
  },
  {
    code: "19849",
    name: "LILAC MARBLE SHEET 4 PCS 400 STITSH KING",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2023-10-27"
  },
  {
    code: "16542",
    name: "LILAC VELVET QUILT KING 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "15091",
    name: "LILAC.M SHEET  TENCEL KING  4 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2020-08-13"
  },
  {
    code: "19523",
    name: "LINEN WAFFLE PIPING S/M",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2022-12-30"
  },
  {
    code: "18874",
    name: "LITTLE FLORAL ORANGE PRINTED WINTER FULL COMFORTER 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "18874",
    name: "LITTLE FLORAL ORANGE PRINTED WINTER FULL COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "18876",
    name: "LITTLE FLORAL ORANGE PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "18876",
    name: "LITTLE FLORAL ORANGE PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "18876",
    name: "LITTLE FLORAL ORANGE PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "18876",
    name: "LITTLE FLORAL ORANGE PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "19339",
    name: "LIVIA KING DUVET COVER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2023-05-19"
  },
  {
    code: "13848",
    name: "LORETTA KING QUILT 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-08-06"
  },
  {
    code: "13827",
    name: "LT GREY VELVET QUILT KING 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-25"
  },
  {
    code: "12367",
    name: "LT.BLUE SHEET (QUEEN) SET 3PCS",
    mall: "11-Jouri Mall",
    quantity: 6,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-05-23"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-03-14"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-01"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2024-04-29"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-11"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "27-Dhahran Mall khobar",
    quantity: 2,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 5,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-07-23"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 4,
    lastSaleDate: "2022-06-11"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2021-12-31"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 5,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-04-26"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-09-20"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "51-Park Avenue Riyadh",
    quantity: 4,
    lastSaleDate: "2024-01-26"
  },
  {
    code: "17637",
    name: "LUSSO GREY 5 PCS ACCESS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2022-09-22"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2021-12-16"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-06-18"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-04-27"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "27-Dhahran Mall khobar",
    quantity: 2,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-16"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2021-07-01"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-09-29"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 3,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "17535",
    name: "LUSSO WHITE 5 PCS ACCESS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-04-08"
  },
  {
    code: "22410",
    name: "LZ2 BLOOMING ROSE YELLOW PRINTED KING COMFORTER 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "22410",
    name: "LZ2 BLOOMING ROSE YELLOW PRINTED KING COMFORTER 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "20701",
    name: "M IVORY BATH MAT 21X34 IN HI-LOW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-06-18"
  },
  {
    code: "16163",
    name: "M-BATH RUGS WAVE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2020-11-03"
  },
  {
    code: "21246",
    name: "MAEVE FLORAL YELLOW KING COMFORTER 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "21246",
    name: "MAEVE FLORAL YELLOW KING COMFORTER 3 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "20166",
    name: "MAGIC STRIPE NATURAL KING COMFORTER 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-03"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-09-29"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-06"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-08-27"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-07-21"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-09-09"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-07-02"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-03-01"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-03"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2022-03-21"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-11-22"
  },
  {
    code: "17531",
    name: "MALIBU BLUSH 5 PCS ACCESS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-30"
  },
  {
    code: "17529",
    name: "MALIBU GOLD 5 PCS ACCESS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-18"
  },
  {
    code: "17529",
    name: "MALIBU GOLD 5 PCS ACCESS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-09-15"
  },
  {
    code: "17529",
    name: "MALIBU GOLD 5 PCS ACCESS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-07-16"
  },
  {
    code: "17529",
    name: "MALIBU GOLD 5 PCS ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-04-29"
  },
  {
    code: "17529",
    name: "MALIBU GOLD 5 PCS ACCESS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-03-01"
  },
  {
    code: "17529",
    name: "MALIBU GOLD 5 PCS ACCESS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-09-30"
  },
  {
    code: "17529",
    name: "MALIBU GOLD 5 PCS ACCESS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-08-28"
  },
  {
    code: "17530",
    name: "MALIBU GOLD PEARLESCENT 5 PCS ACCESS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2022-02-19"
  },
  {
    code: "17530",
    name: "MALIBU GOLD PEARLESCENT 5 PCS ACCESS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-10-15"
  },
  {
    code: "17532",
    name: "MALIBU WHITE SILVER 5 PCS ACCESS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-06-12"
  },
  {
    code: "17532",
    name: "MALIBU WHITE SILVER 5 PCS ACCESS",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "17532",
    name: "MALIBU WHITE SILVER 5 PCS ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2021-11-25"
  },
  {
    code: "17532",
    name: "MALIBU WHITE SILVER 5 PCS ACCESS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-03-31"
  },
  {
    code: "17532",
    name: "MALIBU WHITE SILVER 5 PCS ACCESS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-07-29"
  },
  {
    code: "20855",
    name: "MANGO JASMINE FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-07-17"
  },
  {
    code: "20855",
    name: "MANGO JASMINE FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-05-31"
  },
  {
    code: "20855",
    name: "MANGO JASMINE FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-04-11"
  },
  {
    code: "20855",
    name: "MANGO JASMINE FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20855",
    name: "MANGO JASMINE FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2023-09-01"
  },
  {
    code: "21361",
    name: "MARBLE AND WOOD DESSERT STAND CIRCULAR",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "21361",
    name: "MARBLE AND WOOD DESSERT STAND CIRCULAR",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "21361",
    name: "MARBLE AND WOOD DESSERT STAND CIRCULAR",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2023-03-26"
  },
  {
    code: "21359",
    name: "MARBLE AND WOOD DESSERT STAND LARGE",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "21359",
    name: "MARBLE AND WOOD DESSERT STAND LARGE",
    mall: "22-Tabuk Park",
    quantity: 5,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "21359",
    name: "MARBLE AND WOOD DESSERT STAND LARGE",
    mall: "27-Dhahran Mall khobar",
    quantity: 5,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "21359",
    name: "MARBLE AND WOOD DESSERT STAND LARGE",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "21359",
    name: "MARBLE AND WOOD DESSERT STAND LARGE",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "21359",
    name: "MARBLE AND WOOD DESSERT STAND LARGE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "21359",
    name: "MARBLE AND WOOD DESSERT STAND LARGE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2024-04-03"
  },
  {
    code: "21360",
    name: "MARBLE AND WOOD DESSERT STAND MEDIUM",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "21360",
    name: "MARBLE AND WOOD DESSERT STAND MEDIUM",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-05"
  },
  {
    code: "21360",
    name: "MARBLE AND WOOD DESSERT STAND MEDIUM",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-10-10"
  },
  {
    code: "21360",
    name: "MARBLE AND WOOD DESSERT STAND MEDIUM",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-08-29"
  },
  {
    code: "21360",
    name: "MARBLE AND WOOD DESSERT STAND MEDIUM",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-09-04"
  },
  {
    code: "21360",
    name: "MARBLE AND WOOD DESSERT STAND MEDIUM",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2024-04-28"
  },
  {
    code: "21358",
    name: "MARBLE AND WOOD DESSERT STAND SMALL",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "21358",
    name: "MARBLE AND WOOD DESSERT STAND SMALL",
    mall: "16-Ehsa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "21358",
    name: "MARBLE AND WOOD DESSERT STAND SMALL",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "21358",
    name: "MARBLE AND WOOD DESSERT STAND SMALL",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "21358",
    name: "MARBLE AND WOOD DESSERT STAND SMALL",
    mall: "22-Tabuk Park",
    quantity: 6,
    lastSaleDate: "2024-10-08"
  },
  {
    code: "21358",
    name: "MARBLE AND WOOD DESSERT STAND SMALL",
    mall: "42-Dareen Mall Dammam",
    quantity: 4,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "21358",
    name: "MARBLE AND WOOD DESSERT STAND SMALL",
    mall: "47-Al-Nakheel Plaza",
    quantity: 9,
    lastSaleDate: "2024-02-24"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2023-11-30"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-06-29"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-09-28"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "22283",
    name: "MARCEL WHITE/GOLD 3 PCS BATH ACCESS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "20082",
    name: "MARCHMALLOW STANDARD PILLOW CASES",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "13038",
    name: "MARCHMALOW SHEET 3 PCS 300 STITSH KING",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "13038",
    name: "MARCHMALOW SHEET 3 PCS 300 STITSH KING",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-07-09"
  },
  {
    code: "13038",
    name: "MARCHMALOW SHEET 3 PCS 300 STITSH KING",
    mall: "17-Arar Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-11-15"
  },
  {
    code: "13038",
    name: "MARCHMALOW SHEET 3 PCS 300 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-24"
  },
  {
    code: "13038",
    name: "MARCHMALOW SHEET 3 PCS 300 STITSH KING",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-06"
  },
  {
    code: "21714",
    name: "MARIYE TURKISH COFFEE SET 6 PCS 90 ML CS-018",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "06-Red Sea Mall",
    quantity: 7,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-01-21"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "13-Al-Yasmin Mall",
    quantity: 7,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "25-Rabwa Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "40-Hayat Mall Riyad",
    quantity: 6,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "48 - Jeddah Park",
    quantity: 11,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "21722",
    name: "MARRAKESH TURKISH COFFEE SET 6 PCS 90 ML CS-022",
    mall: "55- Jabl Omar",
    quantity: 16,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "53-Al Basateen Mall",
    quantity: 2,
    lastSaleDate: "2024-03-14"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-23"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-06"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-12-07"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-03-13"
  },
  {
    code: "11634",
    name: "MARSHMALLOW SHEET ( FULL ) SET 3PCS",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2023-11-17"
  },
  {
    code: "20026",
    name: "MARSHMELLOW PILLOW CASES KING 2 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-21"
  },
  {
    code: "20054",
    name: "MARSHMELLOW SHEET 3 PCS 300 STITSH FULL",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-02-12"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "08-Makkah Mall",
    quantity: 9,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "12-Al_Hamra Mall",
    quantity: 7,
    lastSaleDate: "2023-08-21"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-11-21"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2023-01-16"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-29"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 13,
    lastSaleDate: "2024-09-30"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-04-03"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2023-10-28"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2023-01-12"
  },
  {
    code: "19842",
    name: "MARSHMELLOW SHEET 4 PCS 400 STITSH KING",
    mall: "54-THE VILLAGE",
    quantity: 2,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2023-06-26"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-06-06"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "52-Al_Baha Mall",
    quantity: 9,
    lastSaleDate: "2025-05-10"
  },
  {
    code: "12735",
    name: "MAT 76*116 AMETHYSIST",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "14150",
    name: "MAT ANDLUSIA /BLUE HOME",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2021-04-23"
  },
  {
    code: "14153",
    name: "MAT ANDLUSIA /CRANBERY HOME",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 7,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "14153",
    name: "MAT ANDLUSIA /CRANBERY HOME",
    mall: "36-Al jubail Mall",
    quantity: 4,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "14153",
    name: "MAT ANDLUSIA /CRANBERY HOME",
    mall: "42-Dareen Mall Dammam",
    quantity: 5,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "12-Al_Hamra Mall",
    quantity: 7,
    lastSaleDate: "2021-11-09"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-03-05"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2022-04-27"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2022-09-23"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "11-Jouri Mall",
    quantity: 5,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 18,
    lastSaleDate: "2021-11-28"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "24-Yanbu Dana Mall",
    quantity: 5,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "14152",
    name: "MAT ANDLUSIA /RED HOME",
    mall: "36-Al jubail Mall",
    quantity: 4,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "14154",
    name: "MAT ANDLUSIA /STEEL HOME",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2019-07-13"
  },
  {
    code: "13906",
    name: "MAT ASPEN  OATMENT",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-03-28"
  },
  {
    code: "12998",
    name: "MAT CYNTHIA 50*86 BUTTERCUP",
    mall: "11-Jouri Mall",
    quantity: 4,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "12998",
    name: "MAT CYNTHIA 50*86 BUTTERCUP",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "12733",
    name: "MAT KHAROUF 76*116 PINK",
    mall: "11-Jouri Mall",
    quantity: 4,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "12733",
    name: "MAT KHAROUF 76*116 PINK",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "12733",
    name: "MAT KHAROUF 76*116 PINK",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2022-09-02"
  },
  {
    code: "12733",
    name: "MAT KHAROUF 76*116 PINK",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "12868",
    name: "MAT MAYFAIR 50*86 BUTTERCUP",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "12868",
    name: "MAT MAYFAIR 50*86 BUTTERCUP",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2020-12-05"
  },
  {
    code: "12868",
    name: "MAT MAYFAIR 50*86 BUTTERCUP",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-10-18"
  },
  {
    code: "12868",
    name: "MAT MAYFAIR 50*86 BUTTERCUP",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-06-13"
  },
  {
    code: "12868",
    name: "MAT MAYFAIR 50*86 BUTTERCUP",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-07-17"
  },
  {
    code: "12868",
    name: "MAT MAYFAIR 50*86 BUTTERCUP",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-08-06"
  },
  {
    code: "12868",
    name: "MAT MAYFAIR 50*86 BUTTERCUP",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "12877",
    name: "MAT MAYFAIR 50*86 STONE",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "15197",
    name: "MAT PRINTED OCTOBER76*116 CM 13177",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-07-28"
  },
  {
    code: "13058",
    name: "MAT SET 3 PCS  BERRY STRIPE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "13058",
    name: "MAT SET 3 PCS  BERRY STRIPE",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "13063",
    name: "MAT SET 3 PCS  JAFFA ORNGE STRIPE",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-10"
  },
  {
    code: "13051",
    name: "MAT SET 3 PCS AMRTHYSIST TRELLIS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "13051",
    name: "MAT SET 3 PCS AMRTHYSIST TRELLIS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2020-01-15"
  },
  {
    code: "13051",
    name: "MAT SET 3 PCS AMRTHYSIST TRELLIS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "13060",
    name: "MAT SET 3 PCS GOTHIC GRAPE STRIPE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "13056",
    name: "MAT SET 3 PCS RUBARD TRELLIS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-03-07"
  },
  {
    code: "11668",
    name: "MATELASSE KING 3 PCS QUILT",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2022-08-31"
  },
  {
    code: "20709",
    name: "MATRESPAD COSTCO BEAUTYREST 400 ST COTON BLACK KING",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "20740",
    name: "MATRESPAD DREAM GUARD COOLMAX QUEEN SIZE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "20748",
    name: "MATRESPAD DREAM GUARD WATERPROOF TWIN SIZE",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "20748",
    name: "MATRESPAD DREAM GUARD WATERPROOF TWIN SIZE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-03-26"
  },
  {
    code: "21624",
    name: "MATRESPAD KING NOBEL EXELLENCE ULTIMATE",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "14788",
    name: "MATRESPAD KING SIZE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-07-01"
  },
  {
    code: "14788",
    name: "MATRESPAD KING SIZE",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2022-07-04"
  },
  {
    code: "20865",
    name: "MATRESPAD NESTWELL COTON 100% KING",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-01-01"
  },
  {
    code: "20865",
    name: "MATRESPAD NESTWELL COTON 100% KING",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "20865",
    name: "MATRESPAD NESTWELL COTON 100% KING",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-13"
  },
  {
    code: "20170",
    name: "MATTRESS TOPPER KING 200X203+15 CM",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "13849",
    name: "MEDALLION CAMEL KING QUILT 3 PCS",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2020-11-10"
  },
  {
    code: "13850",
    name: "MEDALLION PEACOCK KING QUILT 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2021-02-15"
  },
  {
    code: "13850",
    name: "MEDALLION PEACOCK KING QUILT 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "13850",
    name: "MEDALLION PEACOCK KING QUILT 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "23667",
    name: "MEMORY FOAM CURVE PRAYER MAT",
    mall: "55- Jabl Omar",
    quantity: 61,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "19978",
    name: "MEMORY RUG 50*90CM GREY",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-02"
  },
  {
    code: "19978",
    name: "MEMORY RUG 50*90CM GREY",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "23931",
    name: "MESCID I HARAM ALTIN-115",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "23931",
    name: "MESCID I HARAM ALTIN-115",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "23929",
    name: "MESCID I NEBEVI ALTIN-105",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "23925",
    name: "MESCID I NEBEVI ALTIN-107",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "19913",
    name: "MINCY BATH ACCESS SET 5 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2022-05-26"
  },
  {
    code: "19913",
    name: "MINCY BATH ACCESS SET 5 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-06-26"
  },
  {
    code: "19913",
    name: "MINCY BATH ACCESS SET 5 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-05-09"
  },
  {
    code: "19913",
    name: "MINCY BATH ACCESS SET 5 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2022-06-11"
  },
  {
    code: "19913",
    name: "MINCY BATH ACCESS SET 5 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2022-08-20"
  },
  {
    code: "19913",
    name: "MINCY BATH ACCESS SET 5 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-02-17"
  },
  {
    code: "19913",
    name: "MINCY BATH ACCESS SET 5 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "21874",
    name: "MINERAL DYED KING SHEET SET 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "12609",
    name: "MINET BATHROOM CURTAIN",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-20"
  },
  {
    code: "21831",
    name: "MONKEY3 KIDS HOODED TOWEL BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "21831",
    name: "MONKEY3 KIDS HOODED TOWEL BATH ROBE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "21831",
    name: "MONKEY3 KIDS HOODED TOWEL BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-03"
  },
  {
    code: "21831",
    name: "MONKEY3 KIDS HOODED TOWEL BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-07-31"
  },
  {
    code: "19694",
    name: "MONO GREY COTTON TUFTED WAVE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "23564",
    name: "MORICA TAUPE KING COMFORTER 10 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "23564",
    name: "MORICA TAUPE KING COMFORTER 10 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "23564",
    name: "MORICA TAUPE KING COMFORTER 10 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "23564",
    name: "MORICA TAUPE KING COMFORTER 10 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "16786",
    name: "MULTI SHELLS KING QUILT 9 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-06-21"
  },
  {
    code: "17265",
    name: "MULTI STRIPE AQUA 2 PCS WAVE BATH MAT SET",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-19"
  },
  {
    code: "20477",
    name: "N KITCHEN TOWEL GREY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "20439",
    name: "N KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "20568",
    name: "NAKIA ORANGE COTON QUILT KING 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "20569",
    name: "NAKIA YELLOW COTON QUILT KING 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "20569",
    name: "NAKIA YELLOW COTON QUILT KING 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "20571",
    name: "NAKIA ZURI COTON QUILT KING 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-08-12"
  },
  {
    code: "20571",
    name: "NAKIA ZURI COTON QUILT KING 3 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "13607",
    name: "NAVY DAMASK  FULL COMFORTER 4 PCS 500 STITSH",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-04-18"
  },
  {
    code: "16668",
    name: "NAVY DAMASK FULL 500 STITCH DUVET COVER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2022-01-13"
  },
  {
    code: "16668",
    name: "NAVY DAMASK FULL 500 STITCH DUVET COVER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2022-02-19"
  },
  {
    code: "16668",
    name: "NAVY DAMASK FULL 500 STITCH DUVET COVER 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2022-04-29"
  },
  {
    code: "17672",
    name: "NAVY STARRY TWIN SET WINTER 2 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-02-01"
  },
  {
    code: "17672",
    name: "NAVY STARRY TWIN SET WINTER 2 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "17672",
    name: "NAVY STARRY TWIN SET WINTER 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "23176",
    name: "NEHIR BATH ROBE BRID LIGHT GREY - CREAM 6 PCS",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "23178",
    name: "NERVE BATH ROBE LIGHT BROWN - CREAM 6 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "23178",
    name: "NERVE BATH ROBE LIGHT BROWN - CREAM 6 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "13031",
    name: "NEW BONE CHINA ROUND DINNER SET 28 PCS DS-16O019",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2020-07-22"
  },
  {
    code: "20083",
    name: "NEW BURGANDY STANDARD PILLOW CASES",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "20083",
    name: "NEW BURGANDY STANDARD PILLOW CASES",
    mall: "44-Al-Jouf Center",
    quantity: 7,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20083",
    name: "NEW BURGANDY STANDARD PILLOW CASES",
    mall: "47-Al-Nakheel Plaza",
    quantity: 16,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20083",
    name: "NEW BURGANDY STANDARD PILLOW CASES",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "20083",
    name: "NEW BURGANDY STANDARD PILLOW CASES",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "20083",
    name: "NEW BURGANDY STANDARD PILLOW CASES",
    mall: "52-Al_Baha Mall",
    quantity: 16,
    lastSaleDate: "2024-10-12"
  },
  {
    code: "20055",
    name: "NEW BURGUNDY SHEET 3 PCS 300 STITSH FULL",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-06-25"
  },
  {
    code: "20055",
    name: "NEW BURGUNDY SHEET 3 PCS 300 STITSH FULL",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20049",
    name: "NEW BURGUNDY SHEET 3 PCS 300 STITSH QUEEN",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-04-30"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "09-Al-Salam Mall",
    quantity: 3,
    lastSaleDate: "2022-03-30"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 4,
    lastSaleDate: "2021-10-16"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2023-09-22"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2021-11-25"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2023-09-05"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2024-03-16"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2022-11-04"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2022-06-19"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "19852",
    name: "NEW BURGUNDY SHEET 4 PCS 400 STITSH KING",
    mall: "47-Al-Nakheel Plaza",
    quantity: 10,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "14282",
    name: "NEW IVORY WAVE MAT SIZ 51*86",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2022-04-09"
  },
  {
    code: "14282",
    name: "NEW IVORY WAVE MAT SIZ 51*86",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "20841",
    name: "NEW PONCHANIA CUP",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "20841",
    name: "NEW PONCHANIA CUP",
    mall: "22-Tabuk Park",
    quantity: 8,
    lastSaleDate: "2023-06-13"
  },
  {
    code: "16938",
    name: "NISHA YELLOW KING DUVET COVER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "18217",
    name: "NO-1203-GR ARABIC COFFE",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-07-05"
  },
  {
    code: "20909",
    name: "NOYA FROSTED DUNE FULL COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-10-06"
  },
  {
    code: "20489",
    name: "O KITCHEN TOWEL GREY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-11-05"
  },
  {
    code: "20489",
    name: "O KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "20451",
    name: "O KITCHEN TOWEL IVORY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "20451",
    name: "O KITCHEN TOWEL IVORY 28*16",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-02-07"
  },
  {
    code: "20451",
    name: "O KITCHEN TOWEL IVORY 28*16",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-03-16"
  },
  {
    code: "20451",
    name: "O KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2024-03-20"
  },
  {
    code: "20451",
    name: "O KITCHEN TOWEL IVORY 28*16",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "20451",
    name: "O KITCHEN TOWEL IVORY 28*16",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "20470",
    name: "O KITCHEN TOWEL WHITE 28*16",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2022-10-06"
  },
  {
    code: "20470",
    name: "O KITCHEN TOWEL WHITE 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-22"
  },
  {
    code: "20470",
    name: "O KITCHEN TOWEL WHITE 28*16",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-03-27"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-10-10"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-05-05"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-11-03"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-11-10"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-02"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "17958",
    name: "OBB DS 20 ROUND DINNER SET 28 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "17959",
    name: "OBB DS 21 ROUND DINNER SET 28 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "17959",
    name: "OBB DS 21 ROUND DINNER SET 28 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "17959",
    name: "OBB DS 21 ROUND DINNER SET 28 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-10-21"
  },
  {
    code: "17960",
    name: "OBB DS 22 ROUND DINNER SET 28 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "17960",
    name: "OBB DS 22 ROUND DINNER SET 28 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2022-06-16"
  },
  {
    code: "17960",
    name: "OBB DS 22 ROUND DINNER SET 28 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-01-07"
  },
  {
    code: "17960",
    name: "OBB DS 22 ROUND DINNER SET 28 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "17961",
    name: "OBB DS 23 ROUND DINNER SET 28 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2021-08-19"
  },
  {
    code: "17961",
    name: "OBB DS 23 ROUND DINNER SET 28 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-12-30"
  },
  {
    code: "17961",
    name: "OBB DS 23 ROUND DINNER SET 28 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-03-29"
  },
  {
    code: "17962",
    name: "OBB DS 24 VICTORIA DINNER SET 28 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "17963",
    name: "OBB DS 25 VICTORIA DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-05-01"
  },
  {
    code: "17964",
    name: "OBB DS 26 VICTORIA DINNER SET 28 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2023-06-21"
  },
  {
    code: "17964",
    name: "OBB DS 26 VICTORIA DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2022-02-06"
  },
  {
    code: "17964",
    name: "OBB DS 26 VICTORIA DINNER SET 28 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-07-18"
  },
  {
    code: "17964",
    name: "OBB DS 26 VICTORIA DINNER SET 28 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "17964",
    name: "OBB DS 26 VICTORIA DINNER SET 28 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 6,
    lastSaleDate: "2025-01-19"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2021-03-14"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-10-17"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-03"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "17965",
    name: "OBB DS 27 NEWFLIWER DINNER SET 28 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-01-19"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-04-02"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-26"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "20352",
    name: "OBB DS 32 MAYA DINNER SET 28 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "20291",
    name: "OBB DS 33 LAYLA DINNER SET 28 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-23"
  },
  {
    code: "20291",
    name: "OBB DS 33 LAYLA DINNER SET 28 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "20291",
    name: "OBB DS 33 LAYLA DINNER SET 28 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-10-16"
  },
  {
    code: "20290",
    name: "OBB DS 35 ZIMMER DINNER SET 28 PCS",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-11-03"
  },
  {
    code: "20290",
    name: "OBB DS 35 ZIMMER DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "20290",
    name: "OBB DS 35 ZIMMER DINNER SET 28 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "20290",
    name: "OBB DS 35 ZIMMER DINNER SET 28 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "20290",
    name: "OBB DS 35 ZIMMER DINNER SET 28 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "20288",
    name: "OBB DS 37 LUXE DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-06-13"
  },
  {
    code: "20288",
    name: "OBB DS 37 LUXE DINNER SET 28 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "20288",
    name: "OBB DS 37 LUXE DINNER SET 28 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 17,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "20351",
    name: "OBB DS 40 TAYLOR DINNER SET 28 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-28"
  },
  {
    code: "20351",
    name: "OBB DS 40 TAYLOR DINNER SET 28 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-10-14"
  },
  {
    code: "20287",
    name: "OBB DS 41 POPILLON DINNER SET 28 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "20348",
    name: "OBB DS 42 BLOOM DINNER SET 28 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-01"
  },
  {
    code: "20348",
    name: "OBB DS 42 BLOOM DINNER SET 28 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-06-23"
  },
  {
    code: "20349",
    name: "OBB DS 43 TULIP DINNER SET 28 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-10-05"
  },
  {
    code: "20349",
    name: "OBB DS 43 TULIP DINNER SET 28 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-11-07"
  },
  {
    code: "20349",
    name: "OBB DS 43 TULIP DINNER SET 28 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-05"
  },
  {
    code: "21427",
    name: "ODESSA KITCHEN SET TOWLS 4 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-11-15"
  },
  {
    code: "21427",
    name: "ODESSA KITCHEN SET TOWLS 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "21427",
    name: "ODESSA KITCHEN SET TOWLS 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "21427",
    name: "ODESSA KITCHEN SET TOWLS 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "21427",
    name: "ODESSA KITCHEN SET TOWLS 4 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "21427",
    name: "ODESSA KITCHEN SET TOWLS 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "21303",
    name: "OLIE DINO JUVI TWIN COMFORTER 5 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-04-13"
  },
  {
    code: "11491",
    name: "OMBRE 5 PCS ACCESS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2019-01-27"
  },
  {
    code: "20792",
    name: "OMBRE MEDALLION KING PILLOW CASE",
    mall: "43-Mujan Park",
    quantity: 8,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "20792",
    name: "OMBRE MEDALLION KING PILLOW CASE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-06-08"
  },
  {
    code: "17568",
    name: "OMBRE PINK 91*183 CM MSH BEACH TOWEL",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-07-07"
  },
  {
    code: "17513",
    name: "ONTARION GREY KING COMFORTER 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-14"
  },
  {
    code: "21844",
    name: "OZGE BATH ROBE BRIDE CREAM-CREAM 6 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "19088",
    name: "P#10 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-09-03"
  },
  {
    code: "19430",
    name: "P#18 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-11"
  },
  {
    code: "19431",
    name: "P#19  AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-02-02"
  },
  {
    code: "19431",
    name: "P#19  AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-09-19"
  },
  {
    code: "19080",
    name: "P#2 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2021-04-29"
  },
  {
    code: "19080",
    name: "P#2 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-07-18"
  },
  {
    code: "19432",
    name: "P#20 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-11-10"
  },
  {
    code: "19432",
    name: "P#20 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-12-31"
  },
  {
    code: "19435",
    name: "P#23 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-17"
  },
  {
    code: "19084",
    name: "P#6 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-19"
  },
  {
    code: "19084",
    name: "P#6 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-10-30"
  },
  {
    code: "19085",
    name: "P#7 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-10-28"
  },
  {
    code: "19085",
    name: "P#7 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-02"
  },
  {
    code: "19087",
    name: "P#9 AVANTI TOWEL 3 PCS WAVE STYLE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-11-28"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2023-07-27"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2023-07-22"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-04-17"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2022-03-17"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2021-11-20"
  },
  {
    code: "19851",
    name: "P.BLUE SHEET 4 PCS 400 STITSH KING",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "19517",
    name: "P.BLUE WAFFLE PIPING S/M",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-11-11"
  },
  {
    code: "14288",
    name: "P.BLUE WAVE MAT SIZ 51*86",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2021-05-09"
  },
  {
    code: "14288",
    name: "P.BLUE WAVE MAT SIZ 51*86",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "14288",
    name: "P.BLUE WAVE MAT SIZ 51*86",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2021-07-04"
  },
  {
    code: "21683",
    name: "PARIS BATH ROBE BRIDE CREAM-CREAM 7 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-07-26"
  },
  {
    code: "20778",
    name: "PATCHWORK TIEDYE FULL COMFORTER 8 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "20778",
    name: "PATCHWORK TIEDYE FULL COMFORTER 8 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2023-09-16"
  },
  {
    code: "20056",
    name: "PEACH SHEET 3 PCS 300 STITSH FULL",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "19846",
    name: "PEACH SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2022-10-18"
  },
  {
    code: "20086",
    name: "PEACH STANDARD PILLOW CASES",
    mall: "44-Al-Jouf Center",
    quantity: 11,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "16894",
    name: "PEACH TREE FRESHENER COCODOR 500 ML ROOM SPRAY",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2022-06-11"
  },
  {
    code: "21450",
    name: "PENGUIN 2 KIDS HOODED TOWEL BATH ROBE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-07-21"
  },
  {
    code: "14859",
    name: "PERFUME FLOWER DIFFUSER 200 ML FRENCH LAVENDER",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2022-03-19"
  },
  {
    code: "15321",
    name: "PERFUME TROPICAL EDITION 200ML ENGLISH PEARFREE",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2020-12-31"
  },
  {
    code: "16782",
    name: "PILLOW 90 X 50",
    mall: "44-Al-Jouf Center",
    quantity: 8,
    lastSaleDate: "2022-08-17"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "08-Makkah Mall",
    quantity: 4,
    lastSaleDate: "2024-10-08"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-05-14"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-02"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "21227",
    name: "PILLOW FAUX FUR BROWN 61X61 CM",
    mall: "55- Jabl Omar",
    quantity: 6,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "21226",
    name: "PILLOW FAUX FUR WHITE 61X61 CM",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-05-11"
  },
  {
    code: "21226",
    name: "PILLOW FAUX FUR WHITE 61X61 CM",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "21226",
    name: "PILLOW FAUX FUR WHITE 61X61 CM",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "21077",
    name: "PILLOW KING COOLING TALAY LATEX",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2023-06-23"
  },
  {
    code: "21077",
    name: "PILLOW KING COOLING TALAY LATEX",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-03-31"
  },
  {
    code: "21077",
    name: "PILLOW KING COOLING TALAY LATEX",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-03-15"
  },
  {
    code: "21077",
    name: "PILLOW KING COOLING TALAY LATEX",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-12-19"
  },
  {
    code: "14440",
    name: "PILLOW PENINSULA FEATHER KING",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-10-02"
  },
  {
    code: "21075",
    name: "PILLOW STANDARD BEYOND CALL 2 PACK",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-08"
  },
  {
    code: "21075",
    name: "PILLOW STANDARD BEYOND CALL 2 PACK",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-26"
  },
  {
    code: "21075",
    name: "PILLOW STANDARD BEYOND CALL 2 PACK",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "23419",
    name: "PINK ALANIS KING COMFORTER 8 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "23419",
    name: "PINK ALANIS KING COMFORTER 8 PCS",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "23419",
    name: "PINK ALANIS KING COMFORTER 8 PCS",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "23419",
    name: "PINK ALANIS KING COMFORTER 8 PCS",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "19472",
    name: "PINK RAINBOW TWIN COMFORTER 2 PCS",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "19472",
    name: "PINK RAINBOW TWIN COMFORTER 2 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "19472",
    name: "PINK RAINBOW TWIN COMFORTER 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2023-08-20"
  },
  {
    code: "21487",
    name: "PINK S/M ROBE FEATHER YARN",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "21487",
    name: "PINK S/M ROBE FEATHER YARN",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "21487",
    name: "PINK S/M ROBE FEATHER YARN",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-12-05"
  },
  {
    code: "21487",
    name: "PINK S/M ROBE FEATHER YARN",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-10-11"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "11-Jouri Mall",
    quantity: 6,
    lastSaleDate: "2023-04-19"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "19-Hail Othaim Mall",
    quantity: 13,
    lastSaleDate: "2025-05-10"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-13"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-03-29"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2023-06-23"
  },
  {
    code: "17004",
    name: "PINK SHEET ( QUEEN) SET 3PCS .",
    mall: "44-Al-Jouf Center",
    quantity: 15,
    lastSaleDate: "2023-08-07"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-07-19"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-10"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-20"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-13"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2022-02-01"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-05-05"
  },
  {
    code: "19845",
    name: "PINK SHEET 4 PCS 400 STITSH KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "19468",
    name: "PINK SOLID KING COMFORTER 3 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2023-04-17"
  },
  {
    code: "17671",
    name: "PINK STARRY TWIN SET WINTER 2 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "17671",
    name: "PINK STARRY TWIN SET WINTER 2 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-02-06"
  },
  {
    code: "14286",
    name: "PINK WAVE MAT SIZ 51*86",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "14286",
    name: "PINK WAVE MAT SIZ 51*86",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "14286",
    name: "PINK WAVE MAT SIZ 51*86",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-11"
  },
  {
    code: "14286",
    name: "PINK WAVE MAT SIZ 51*86",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "21492",
    name: "PINK XL/L ROBE FEATHER YARN",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-11-15"
  },
  {
    code: "16655",
    name: "PINSONIC WHITE KING COMFORTER 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2020-11-28"
  },
  {
    code: "20560",
    name: "PINTUCK GREY FULL COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-06-08"
  },
  {
    code: "15088",
    name: "PLAIN AIR SHEET  TENCEL KING  4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-10-20"
  },
  {
    code: "15088",
    name: "PLAIN AIR SHEET  TENCEL KING  4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2020-12-27"
  },
  {
    code: "16998",
    name: "PLATINUM GREY SHEET  ( FULL )SET 3PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-05-01"
  },
  {
    code: "16998",
    name: "PLATINUM GREY SHEET  ( FULL )SET 3PCS",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2023-11-06"
  },
  {
    code: "16998",
    name: "PLATINUM GREY SHEET  ( FULL )SET 3PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-02-16"
  },
  {
    code: "16998",
    name: "PLATINUM GREY SHEET  ( FULL )SET 3PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 11,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "17002",
    name: "PLATINUM GREY SHEET (QUEEN) SET 3PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-19"
  },
  {
    code: "17002",
    name: "PLATINUM GREY SHEET (QUEEN) SET 3PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-28"
  },
  {
    code: "19844",
    name: "PLATINUM GREY SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "19844",
    name: "PLATINUM GREY SHEET 4 PCS 400 STITSH KING",
    mall: "39-Salam Mall Riyadh",
    quantity: 8,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "19844",
    name: "PLATINUM GREY SHEET 4 PCS 400 STITSH KING",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "19985",
    name: "PLUM SHADOW ULTRASONIC  WINTER KING COMFORTER 3 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-01-05"
  },
  {
    code: "19985",
    name: "PLUM SHADOW ULTRASONIC  WINTER KING COMFORTER 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "20532",
    name: "PONCHO BETSEY`S LEOPARD GOLD THROW",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "20532",
    name: "PONCHO BETSEY`S LEOPARD GOLD THROW",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "20532",
    name: "PONCHO BETSEY`S LEOPARD GOLD THROW",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-29"
  },
  {
    code: "20532",
    name: "PONCHO BETSEY`S LEOPARD GOLD THROW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-01-29"
  },
  {
    code: "20532",
    name: "PONCHO BETSEY`S LEOPARD GOLD THROW",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "20532",
    name: "PONCHO BETSEY`S LEOPARD GOLD THROW",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "20532",
    name: "PONCHO BETSEY`S LEOPARD GOLD THROW",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-09-02"
  },
  {
    code: "20528",
    name: "PONCHO CHEVRON SHIBORI FOSSIL THROW",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "20528",
    name: "PONCHO CHEVRON SHIBORI FOSSIL THROW",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-11-25"
  },
  {
    code: "20528",
    name: "PONCHO CHEVRON SHIBORI FOSSIL THROW",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-27"
  },
  {
    code: "20528",
    name: "PONCHO CHEVRON SHIBORI FOSSIL THROW",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-02-15"
  },
  {
    code: "16875",
    name: "PONCHO CRIMSON THROW",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-22"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "12-Al_Hamra Mall",
    quantity: 5,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "15-Riyadh Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-10-08"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-14"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-01-15"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2023-08-15"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "40-Hayat Mall Riyad",
    quantity: 4,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "45- Riyadh Gallery Mall",
    quantity: 7,
    lastSaleDate: "2024-01-27"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-10-31"
  },
  {
    code: "20529",
    name: "PONCHO DENSE ROSES SOFT ROSE THROW",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "16878",
    name: "PONCHO DOE SKIN THROW",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-11-30"
  },
  {
    code: "20533",
    name: "PONCHO FURRY FRIENDS WHITE THROW",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "20533",
    name: "PONCHO FURRY FRIENDS WHITE THROW",
    mall: "25-Rabwa Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "20533",
    name: "PONCHO FURRY FRIENDS WHITE THROW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-06-09"
  },
  {
    code: "20527",
    name: "PONCHO L.L. DUSTY TURQUOISE THROW",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-29"
  },
  {
    code: "20527",
    name: "PONCHO L.L. DUSTY TURQUOISE THROW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-06-09"
  },
  {
    code: "20526",
    name: "PONCHO L.L. STRIPE DARK DENIM THROW",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "20526",
    name: "PONCHO L.L. STRIPE DARK DENIM THROW",
    mall: "23-Alia Mall Madinah",
    quantity: 5,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "20526",
    name: "PONCHO L.L. STRIPE DARK DENIM THROW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-12-29"
  },
  {
    code: "20526",
    name: "PONCHO L.L. STRIPE DARK DENIM THROW",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "20526",
    name: "PONCHO L.L. STRIPE DARK DENIM THROW",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "16877",
    name: "PONCHO ROSE PINK THROW",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-20"
  },
  {
    code: "16877",
    name: "PONCHO ROSE PINK THROW",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-19"
  },
  {
    code: "20530",
    name: "PONCHO WATER LEOPARD NATURAL THROW",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-01-12"
  },
  {
    code: "20531",
    name: "PONCHO WATER LEOPARD SMOKE THROW",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-13"
  },
  {
    code: "20531",
    name: "PONCHO WATER LEOPARD SMOKE THROW",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-04-02"
  },
  {
    code: "20531",
    name: "PONCHO WATER LEOPARD SMOKE THROW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2022-12-28"
  },
  {
    code: "20531",
    name: "PONCHO WATER LEOPARD SMOKE THROW",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-12-13"
  },
  {
    code: "20531",
    name: "PONCHO WATER LEOPARD SMOKE THROW",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "20531",
    name: "PONCHO WATER LEOPARD SMOKE THROW",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "20531",
    name: "PONCHO WATER LEOPARD SMOKE THROW",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "16882",
    name: "PONCHO YELLOW THROW",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-07-03"
  },
  {
    code: "20616",
    name: "PORCELAIN ARABIC COFFE SET 6 PCS C013-PP",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-05-14"
  },
  {
    code: "20616",
    name: "PORCELAIN ARABIC COFFE SET 6 PCS C013-PP",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "21851",
    name: "PORCELAIN CUP WITH DISH",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "21851",
    name: "PORCELAIN CUP WITH DISH",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-01"
  },
  {
    code: "21851",
    name: "PORCELAIN CUP WITH DISH",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "21848",
    name: "PORCELAIN CUP WITH WOOD LID",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-02-08"
  },
  {
    code: "21848",
    name: "PORCELAIN CUP WITH WOOD LID",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2023-12-11"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-05-19"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "38-Al_Riyadh Park",
    quantity: 36,
    lastSaleDate: "2024-12-01"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "40-Hayat Mall Riyad",
    quantity: 44,
    lastSaleDate: "2025-04-07"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "43-Mujan Park",
    quantity: 32,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "45- Riyadh Gallery Mall",
    quantity: 35,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "20806",
    name: "PORCELAIN CUP.",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "23344",
    name: "PRAYER RUG WITH MIHRAB DESIGN 16302",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "23329",
    name: "PRAYER SET 2 PCS 336",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "23076",
    name: "PRAYER SHEET SET 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "23084",
    name: "PRAYER SHEETS MEDIUM COTTON.",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "22277",
    name: "PRINT L BAMBOO LAUDRY BASKET",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "22277",
    name: "PRINT L BAMBOO LAUDRY BASKET",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-04-17"
  },
  {
    code: "22277",
    name: "PRINT L BAMBOO LAUDRY BASKET",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-05-28"
  },
  {
    code: "14272",
    name: "PRINTED BATH ROBE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-06-16"
  },
  {
    code: "14272",
    name: "PRINTED BATH ROBE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-10-01"
  },
  {
    code: "14272",
    name: "PRINTED BATH ROBE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-17"
  },
  {
    code: "14272",
    name: "PRINTED BATH ROBE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-06-23"
  },
  {
    code: "14272",
    name: "PRINTED BATH ROBE",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2023-09-16"
  },
  {
    code: "14272",
    name: "PRINTED BATH ROBE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2023-06-07"
  },
  {
    code: "14272",
    name: "PRINTED BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2023-07-07"
  },
  {
    code: "22411",
    name: "PT7 CHLOE FLORA MULTI PRINTED KING COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-01"
  },
  {
    code: "22411",
    name: "PT7 CHLOE FLORA MULTI PRINTED KING COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "11365",
    name: "PURPLE IKAT TWIN 6 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22920",
    name: "PURPLE OMBRE WM LEAK PROOF WATER BOTTEL 20 OZ",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "17490",
    name: "PURPLE PLUM KING BLANKET BUTTER MILK",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-12-22"
  },
  {
    code: "17490",
    name: "PURPLE PLUM KING BLANKET BUTTER MILK",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-12-02"
  },
  {
    code: "20048",
    name: "PURPLE SHEET 3 PCS 300 STITSH QUEEN",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "20048",
    name: "PURPLE SHEET 3 PCS 300 STITSH QUEEN",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-06-20"
  },
  {
    code: "20089",
    name: "PURPLE STANDARD PILLOW CASES",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "20089",
    name: "PURPLE STANDARD PILLOW CASES",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-10-02"
  },
  {
    code: "20089",
    name: "PURPLE STANDARD PILLOW CASES",
    mall: "42-Dareen Mall Dammam",
    quantity: 9,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "20089",
    name: "PURPLE STANDARD PILLOW CASES",
    mall: "44-Al-Jouf Center",
    quantity: 25,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "20089",
    name: "PURPLE STANDARD PILLOW CASES",
    mall: "47-Al-Nakheel Plaza",
    quantity: 13,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "20089",
    name: "PURPLE STANDARD PILLOW CASES",
    mall: "52-Al_Baha Mall",
    quantity: 13,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "10400",
    name: "QUILT AUDREY F/Q 3 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2016-10-03"
  },
  {
    code: "13425",
    name: "QUILT CHOCOLATE F/Q 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-12"
  },
  {
    code: "13442",
    name: "QUILT CHOCOLATE KING 4 PCS",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "13442",
    name: "QUILT CHOCOLATE KING 4 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-01-01"
  },
  {
    code: "10454",
    name: "QUILT DASH KING 3 PCS",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2022-10-14"
  },
  {
    code: "21098",
    name: "QUILT DENVER KING 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "15354",
    name: "QUILT FUDGE CAMBER KING 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-03-05"
  },
  {
    code: "15354",
    name: "QUILT FUDGE CAMBER KING 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "15354",
    name: "QUILT FUDGE CAMBER KING 3 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2022-08-13"
  },
  {
    code: "15354",
    name: "QUILT FUDGE CAMBER KING 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "10478",
    name: "QUILT PIERCE 3 PCS KING",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2017-01-24"
  },
  {
    code: "23674",
    name: "QUM PURE SILK PRAYER MAT 70*110 ASSORTED",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "20478",
    name: "R KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-18"
  },
  {
    code: "20440",
    name: "R KITCHEN TOWEL IVORY 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-29"
  },
  {
    code: "20440",
    name: "R KITCHEN TOWEL IVORY 28*16",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "20440",
    name: "R KITCHEN TOWEL IVORY 28*16",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-12-02"
  },
  {
    code: "20440",
    name: "R KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "19560",
    name: "RABIT KIDS HOODED TOWEL BATH ROBE",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "19560",
    name: "RABIT KIDS HOODED TOWEL BATH ROBE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-07-18"
  },
  {
    code: "16794",
    name: "RACHEL ROY BILLIE JEAN BLUE QUEEN COMFORTER 1 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-12-22"
  },
  {
    code: "22521",
    name: "RAINBOW HEART KIDS HOODED TOWEL BATH ROBE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-04-30"
  },
  {
    code: "22521",
    name: "RAINBOW HEART KIDS HOODED TOWEL BATH ROBE",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2023-12-24"
  },
  {
    code: "23004",
    name: "RAMADAN LANTERN B5243",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "23004",
    name: "RAMADAN LANTERN B5243",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "23004",
    name: "RAMADAN LANTERN B5243",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "23005",
    name: "RAMADAN LANTERN B5244",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 5,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "23006",
    name: "RAMADAN LANTERN B6360",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "23006",
    name: "RAMADAN LANTERN B6360",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "23006",
    name: "RAMADAN LANTERN B6360",
    mall: "23-Alia Mall Madinah",
    quantity: 8,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "23006",
    name: "RAMADAN LANTERN B6360",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 3,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "23006",
    name: "RAMADAN LANTERN B6360",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-04-20"
  },
  {
    code: "23006",
    name: "RAMADAN LANTERN B6360",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "23006",
    name: "RAMADAN LANTERN B6360",
    mall: "57-Sauq7",
    quantity: 2,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "23008",
    name: "RAMADAN LANTERN B6381",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "23008",
    name: "RAMADAN LANTERN B6381",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "23008",
    name: "RAMADAN LANTERN B6381",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-05-07"
  },
  {
    code: "23008",
    name: "RAMADAN LANTERN B6381",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "22998",
    name: "RAMADAN LANTERN CIRCULAR STEEL PY084-L",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "22998",
    name: "RAMADAN LANTERN CIRCULAR STEEL PY084-L",
    mall: "54-THE VILLAGE",
    quantity: 2,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "23000",
    name: "RAMADAN LANTERN CIRCULAR STEEL PY084-S",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "23010",
    name: "RAMADAN LANTERN GOLDEN STAR M (DYTF1285-S/2)",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22995",
    name: "RAMADAN LANTERN RECTANGLE STEEL PY077-S",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "22996",
    name: "RAMADAN LANTERN RECTANGLE STEEL PY079-L",
    mall: "04-Andalos Mall",
    quantity: 3,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "22996",
    name: "RAMADAN LANTERN RECTANGLE STEEL PY079-L",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "22996",
    name: "RAMADAN LANTERN RECTANGLE STEEL PY079-L",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "22997",
    name: "RAMADAN LANTERN RECTANGLE STEEL PY079-S",
    mall: "06-Red Sea Mall",
    quantity: 3,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "22997",
    name: "RAMADAN LANTERN RECTANGLE STEEL PY079-S",
    mall: "13-Al-Yasmin Mall",
    quantity: 4,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "22992",
    name: "RAMADAN LANTERN SQUARE STEEL PY075-L",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "22992",
    name: "RAMADAN LANTERN SQUARE STEEL PY075-L",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "22993",
    name: "RAMADAN LANTERN SQUARE STEEL PY075-S",
    mall: "23-Alia Mall Madinah",
    quantity: 3,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "22993",
    name: "RAMADAN LANTERN SQUARE STEEL PY075-S",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 6,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "22979",
    name: "RAMADAN LANTERN STEEL L (DYXL191001-S/3)",
    mall: "23-Alia Mall Madinah",
    quantity: 6,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "22979",
    name: "RAMADAN LANTERN STEEL L (DYXL191001-S/3)",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "22979",
    name: "RAMADAN LANTERN STEEL L (DYXL191001-S/3)",
    mall: "54-THE VILLAGE",
    quantity: 3,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "22979",
    name: "RAMADAN LANTERN STEEL L (DYXL191001-S/3)",
    mall: "57-Sauq7",
    quantity: 2,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22991",
    name: "RAMADAN LANTERN STEEL PY066",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "23775",
    name: "RAWDAH MADINA ASSORTED 4MM (70*110)",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "23212",
    name: "RAWDAH PRAYER MATT 70*110",
    mall: "55- Jabl Omar",
    quantity: 17,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "19467",
    name: "RED SOLID KING COMFORTER 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-15"
  },
  {
    code: "19485",
    name: "RED SOLID TWIN COMFORTER 2 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "19485",
    name: "RED SOLID TWIN COMFORTER 2 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "19485",
    name: "RED SOLID TWIN COMFORTER 2 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-11-15"
  },
  {
    code: "19485",
    name: "RED SOLID TWIN COMFORTER 2 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "19485",
    name: "RED SOLID TWIN COMFORTER 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "20575",
    name: "REFRESHERS BLACK GOLDEN 200 ML BABY POWDER",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2022-05-26"
  },
  {
    code: "20575",
    name: "REFRESHERS BLACK GOLDEN 200 ML BABY POWDER",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2022-07-14"
  },
  {
    code: "20575",
    name: "REFRESHERS BLACK GOLDEN 200 ML BABY POWDER",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-12-08"
  },
  {
    code: "20576",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUE SEA SALT",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-08-03"
  },
  {
    code: "20576",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUE SEA SALT",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2022-11-21"
  },
  {
    code: "20576",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUE SEA SALT",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-08-07"
  },
  {
    code: "20576",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUE SEA SALT",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2023-07-07"
  },
  {
    code: "20576",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUE SEA SALT",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2024-05-10"
  },
  {
    code: "20577",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUEBELL",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2022-11-29"
  },
  {
    code: "20577",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUEBELL",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-12-19"
  },
  {
    code: "20577",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUEBELL",
    mall: "30-Tala Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "20577",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUEBELL",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "20577",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUEBELL",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-05-15"
  },
  {
    code: "20577",
    name: "REFRESHERS BLACK GOLDEN 200 ML BLUEBELL",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2023-07-14"
  },
  {
    code: "20578",
    name: "REFRESHERS BLACK GOLDEN 200 ML DARK VAMILLA&SANDALWOOD",
    mall: "18-Al_Khayyat Center",
    quantity: 2,
    lastSaleDate: "2022-10-13"
  },
  {
    code: "20578",
    name: "REFRESHERS BLACK GOLDEN 200 ML DARK VAMILLA&SANDALWOOD",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-10-11"
  },
  {
    code: "20578",
    name: "REFRESHERS BLACK GOLDEN 200 ML DARK VAMILLA&SANDALWOOD",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-10-20"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2023-02-26"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2022-11-24"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-04-13"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "20579",
    name: "REFRESHERS BLACK GOLDEN 200 ML OSMANTHUS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 8,
    lastSaleDate: "2023-11-26"
  },
  {
    code: "20600",
    name: "REFRESHERS BLACK GOLDEN 200 ML WHITE JASMINE",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2022-11-06"
  },
  {
    code: "20600",
    name: "REFRESHERS BLACK GOLDEN 200 ML WHITE JASMINE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-10-12"
  },
  {
    code: "21834",
    name: "REINDEER3 KIDS HOODED TOWEL BATH ROBE",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2023-05-28"
  },
  {
    code: "21834",
    name: "REINDEER3 KIDS HOODED TOWEL BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "21834",
    name: "REINDEER3 KIDS HOODED TOWEL BATH ROBE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "21834",
    name: "REINDEER3 KIDS HOODED TOWEL BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-28"
  },
  {
    code: "21834",
    name: "REINDEER3 KIDS HOODED TOWEL BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-11-24"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "22273",
    name: "RHAPSODY SO-SOFT KING COMFORTER 3 PCS",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "11-Jouri Mall",
    quantity: 10,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "16-Ehsa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 9,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-08-28"
  },
  {
    code: "17276",
    name: "RI-2222 AQUA 2 PCS WAVE BATH MAT SET",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "17277",
    name: "RI-2222 NAVY 2 PCS WAVE BATH MAT SET",
    mall: "11-Jouri Mall",
    quantity: 5,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "17277",
    name: "RI-2222 NAVY 2 PCS WAVE BATH MAT SET",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-21"
  },
  {
    code: "17278",
    name: "RI-2222 TEAL 2 PCS WAVE BATH MAT SET",
    mall: "11-Jouri Mall",
    quantity: 4,
    lastSaleDate: "2023-08-22"
  },
  {
    code: "17278",
    name: "RI-2222 TEAL 2 PCS WAVE BATH MAT SET",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-11-09"
  },
  {
    code: "17278",
    name: "RI-2222 TEAL 2 PCS WAVE BATH MAT SET",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-09-29"
  },
  {
    code: "17278",
    name: "RI-2222 TEAL 2 PCS WAVE BATH MAT SET",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-27"
  },
  {
    code: "17278",
    name: "RI-2222 TEAL 2 PCS WAVE BATH MAT SET",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "17278",
    name: "RI-2222 TEAL 2 PCS WAVE BATH MAT SET",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "17273",
    name: "RI-2262 BLUE 2 PCS WAVE BATH MAT SET",
    mall: "11-Jouri Mall",
    quantity: 10,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "17273",
    name: "RI-2262 BLUE 2 PCS WAVE BATH MAT SET",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-25"
  },
  {
    code: "17275",
    name: "RI-2262 TEAL 2 PCS WAVE BATH MAT SET",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "17269",
    name: "RIE-2424 BLUE 2 PCS WAVE BATH MAT SET",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-09-29"
  },
  {
    code: "17269",
    name: "RIE-2424 BLUE 2 PCS WAVE BATH MAT SET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "17264",
    name: "RIE-2744 AQUA  2 PCS WAVE BATH MAT SET",
    mall: "11-Jouri Mall",
    quantity: 12,
    lastSaleDate: "2024-06-02"
  },
  {
    code: "17264",
    name: "RIE-2744 AQUA  2 PCS WAVE BATH MAT SET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "17264",
    name: "RIE-2744 AQUA  2 PCS WAVE BATH MAT SET",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "17264",
    name: "RIE-2744 AQUA  2 PCS WAVE BATH MAT SET",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "17261",
    name: "RIE-2744 BLUE  2 PCS WAVE BATH MAT SET",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "17261",
    name: "RIE-2744 BLUE  2 PCS WAVE BATH MAT SET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "17261",
    name: "RIE-2744 BLUE  2 PCS WAVE BATH MAT SET",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "17261",
    name: "RIE-2744 BLUE  2 PCS WAVE BATH MAT SET",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-10-14"
  },
  {
    code: "17262",
    name: "RIE-2744 LT PINK 2 PCS WAVEBATH MAT SET",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-21"
  },
  {
    code: "12798",
    name: "ROBE BURGENDY L/XL",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-22"
  },
  {
    code: "12784",
    name: "ROBE BURGENDY S/M",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "14036",
    name: "ROBE IVORY/ROSE VELVET BEST FEELING",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2023-07-03"
  },
  {
    code: "14036",
    name: "ROBE IVORY/ROSE VELVET BEST FEELING",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "12779",
    name: "ROBE JASPER BLUE S/M",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2019-09-22"
  },
  {
    code: "12787",
    name: "ROBE ROSE S/M",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-10-06"
  },
  {
    code: "12787",
    name: "ROBE ROSE S/M",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "12787",
    name: "ROBE ROSE S/M",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "53-Al Basateen Mall",
    quantity: 2,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "12800",
    name: "ROBE TITANIUM L/XL",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "16859",
    name: "ROCHELLE DUVET COVER FULL 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-05-21"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-07-11"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-17"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-06"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-19"
  },
  {
    code: "20907",
    name: "ROLLED QUEEN COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-05"
  },
  {
    code: "20906",
    name: "ROLLED T/TXL COMFORTER 1 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "19438",
    name: "ROM. ROSE ULTRASONIC  WINTER KING COMFORTER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-14"
  },
  {
    code: "10929",
    name: "ROSE BATHMAT SET 4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2020-03-15"
  },
  {
    code: "19518",
    name: "ROSE DUST WAFFLE PIPING S/M",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2021-08-24"
  },
  {
    code: "14819",
    name: "ROSE PINK BALNKET KHAROUF KING 3PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "14819",
    name: "ROSE PINK BALNKET KHAROUF KING 3PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "14808",
    name: "ROSE PINK BLANKET KHAROUF FULL 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-01-03"
  },
  {
    code: "16986",
    name: "ROSE PINK BUTTER MILK FULL BLANKET",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "13780",
    name: "ROSE PINK SO-SOFT KING COMFORTER 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-01-05"
  },
  {
    code: "13780",
    name: "ROSE PINK SO-SOFT KING COMFORTER 3PCS",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2024-09-01"
  },
  {
    code: "11972",
    name: "RUBARB WAVES RUG SET 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2019-10-30"
  },
  {
    code: "21801",
    name: "RUG 150*210 CM 02",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "21804",
    name: "RUG 150*210 CM 05",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "21804",
    name: "RUG 150*210 CM 05",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-20"
  },
  {
    code: "21807",
    name: "RUG 150*210 CM 08",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "21808",
    name: "RUG 240*300 CM 01",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-28"
  },
  {
    code: "21809",
    name: "RUG 240*300 CM 02",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-03"
  },
  {
    code: "21815",
    name: "RUG 240*300 CM 08",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "21815",
    name: "RUG 240*300 CM 08",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "21776",
    name: "RUG 60*120 CM 01",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "21777",
    name: "RUG 60*120 CM 02",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "21778",
    name: "RUG 60*120 CM 03",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-10-31"
  },
  {
    code: "21780",
    name: "RUG 60*120 CM 05",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "21783",
    name: "RUG 60*120 CM 08",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "21783",
    name: "RUG 60*120 CM 08",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-20"
  },
  {
    code: "21783",
    name: "RUG 60*120 CM 08",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "21783",
    name: "RUG 60*120 CM 08",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-11-01"
  },
  {
    code: "21784",
    name: "RUG 60*180 CM 01",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "21784",
    name: "RUG 60*180 CM 01",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "21786",
    name: "RUG 60*180 CM 03",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "21786",
    name: "RUG 60*180 CM 03",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-06"
  },
  {
    code: "21787",
    name: "RUG 60*180 CM 04",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "21788",
    name: "RUG 60*180 CM 05",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "21788",
    name: "RUG 60*180 CM 05",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "21788",
    name: "RUG 60*180 CM 05",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "21788",
    name: "RUG 60*180 CM 05",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-09"
  },
  {
    code: "21789",
    name: "RUG 60*180 CM 06",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-02-27"
  },
  {
    code: "21789",
    name: "RUG 60*180 CM 06",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "21790",
    name: "RUG 60*180 CM 07",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "21790",
    name: "RUG 60*180 CM 07",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "21790",
    name: "RUG 60*180 CM 07",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "21790",
    name: "RUG 60*180 CM 07",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "21790",
    name: "RUG 60*180 CM 07",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "21791",
    name: "RUG 60*180 CM 08",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "21791",
    name: "RUG 60*180 CM 08",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-14"
  },
  {
    code: "21791",
    name: "RUG 60*180 CM 08",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "21791",
    name: "RUG 60*180 CM 08",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "21792",
    name: "RUG 90*150 CM 01",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "21792",
    name: "RUG 90*150 CM 01",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-11-02"
  },
  {
    code: "21793",
    name: "RUG 90*150 CM 02",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "21793",
    name: "RUG 90*150 CM 02",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "21793",
    name: "RUG 90*150 CM 02",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "21795",
    name: "RUG 90*150 CM 04",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "21797",
    name: "RUG 90*150 CM 06",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-12-22"
  },
  {
    code: "21797",
    name: "RUG 90*150 CM 06",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "21798",
    name: "RUG 90*150 CM 07",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "21798",
    name: "RUG 90*150 CM 07",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "21798",
    name: "RUG 90*150 CM 07",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-12"
  },
  {
    code: "21798",
    name: "RUG 90*150 CM 07",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "21798",
    name: "RUG 90*150 CM 07",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "21798",
    name: "RUG 90*150 CM 07",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-10-09"
  },
  {
    code: "21799",
    name: "RUG 90*150 CM 08",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-07"
  },
  {
    code: "21799",
    name: "RUG 90*150 CM 08",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-11-17"
  },
  {
    code: "10587",
    name: "RUG COVER SMALL EXE WELCOME",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-02-16"
  },
  {
    code: "21488",
    name: "RUST S/M ROBE FEATHER YARN",
    mall: "25-Rabwa Othaim Mall",
    quantity: 4,
    lastSaleDate: "2023-11-28"
  },
  {
    code: "21488",
    name: "RUST S/M ROBE FEATHER YARN",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-07"
  },
  {
    code: "20476",
    name: "S KITCHEN TOWEL GREY 28*16",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-04-08"
  },
  {
    code: "20476",
    name: "S KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-03"
  },
  {
    code: "13810",
    name: "S.SET 300 TC DAMASK KING  4 PCS SAGE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2019-10-26"
  },
  {
    code: "17933",
    name: "S/M BURGUNDY SHAWL JACQUARD BATH ROBE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-08-01"
  },
  {
    code: "17933",
    name: "S/M BURGUNDY SHAWL JACQUARD BATH ROBE",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-06-19"
  },
  {
    code: "17933",
    name: "S/M BURGUNDY SHAWL JACQUARD BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-15"
  },
  {
    code: "17932",
    name: "S/M LINEN SHAWL JACQUARD BATH ROBE",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2023-11-08"
  },
  {
    code: "17932",
    name: "S/M LINEN SHAWL JACQUARD BATH ROBE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-12-01"
  },
  {
    code: "17932",
    name: "S/M LINEN SHAWL JACQUARD BATH ROBE",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "17932",
    name: "S/M LINEN SHAWL JACQUARD BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "17932",
    name: "S/M LINEN SHAWL JACQUARD BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 6,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "17932",
    name: "S/M LINEN SHAWL JACQUARD BATH ROBE",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "17955",
    name: "S/M OYSTER MASHROOM SHAWL JACQUARD BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "17934",
    name: "S/M P.BLUE SHAWL JACQUARD BATH ROBE",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-03-21"
  },
  {
    code: "17934",
    name: "S/M P.BLUE SHAWL JACQUARD BATH ROBE",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-12-05"
  },
  {
    code: "17934",
    name: "S/M P.BLUE SHAWL JACQUARD BATH ROBE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-29"
  },
  {
    code: "17934",
    name: "S/M P.BLUE SHAWL JACQUARD BATH ROBE",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-12-18"
  },
  {
    code: "17934",
    name: "S/M P.BLUE SHAWL JACQUARD BATH ROBE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-03"
  },
  {
    code: "17934",
    name: "S/M P.BLUE SHAWL JACQUARD BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "17951",
    name: "S/M TITANIUM SHAWL JACQUARD BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "23718",
    name: "S245-1 BACKPACK TRAVEL BAGS",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "23728",
    name: "S675-2BACKPACK TRAVEL BAGS",
    mall: "55- Jabl Omar",
    quantity: 9,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "12109",
    name: "SAFIR PUDRA BED COVER SET 9 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2018-04-09"
  },
  {
    code: "20146",
    name: "SAGE KING BLANKET BUTTER MILK",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-23"
  },
  {
    code: "12602",
    name: "SAMARA  BATHROOM CURTAIN",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2022-02-01"
  },
  {
    code: "17068",
    name: "SAMIRAH GOLD  KING DUVET COVE 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-04-24"
  },
  {
    code: "20522",
    name: "SCROLL DAMASK GLUE RESIST GOLD PRINTED KING COMFORTER 3 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "16789",
    name: "SEA BRIGHT TWIN QUILT 7 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2021-11-22"
  },
  {
    code: "16789",
    name: "SEA BRIGHT TWIN QUILT 7 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-12-07"
  },
  {
    code: "17571",
    name: "SEASIDE STRIPE GREEN 91*183 CM MSH BEACH TOWEL",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-09-03"
  },
  {
    code: "17571",
    name: "SEASIDE STRIPE GREEN 91*183 CM MSH BEACH TOWEL",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-05-24"
  },
  {
    code: "21355",
    name: "SERVING PLATE 10673",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 6,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "16971",
    name: "SET OF COFFEE CUPS 19S033-2",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-06-07"
  },
  {
    code: "19999",
    name: "SET TOWEL 3 PCS DESIGN 1",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-01-26"
  },
  {
    code: "20008",
    name: "SET TOWEL 3 PCS DESIGN 10",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20008",
    name: "SET TOWEL 3 PCS DESIGN 10",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2023-12-16"
  },
  {
    code: "20008",
    name: "SET TOWEL 3 PCS DESIGN 10",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "20008",
    name: "SET TOWEL 3 PCS DESIGN 10",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2022-06-02"
  },
  {
    code: "20008",
    name: "SET TOWEL 3 PCS DESIGN 10",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-11-02"
  },
  {
    code: "20009",
    name: "SET TOWEL 3 PCS DESIGN 11",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-01-25"
  },
  {
    code: "20009",
    name: "SET TOWEL 3 PCS DESIGN 11",
    mall: "17-Arar Othaim Mall",
    quantity: 9,
    lastSaleDate: "2024-11-20"
  },
  {
    code: "20009",
    name: "SET TOWEL 3 PCS DESIGN 11",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-10-01"
  },
  {
    code: "20009",
    name: "SET TOWEL 3 PCS DESIGN 11",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-12-17"
  },
  {
    code: "20009",
    name: "SET TOWEL 3 PCS DESIGN 11",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-03-05"
  },
  {
    code: "20009",
    name: "SET TOWEL 3 PCS DESIGN 11",
    mall: "47-Al-Nakheel Plaza",
    quantity: 7,
    lastSaleDate: "2023-07-15"
  },
  {
    code: "20010",
    name: "SET TOWEL 3 PCS DESIGN 12",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "20010",
    name: "SET TOWEL 3 PCS DESIGN 12",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2024-09-06"
  },
  {
    code: "20000",
    name: "SET TOWEL 3 PCS DESIGN 2",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20001",
    name: "SET TOWEL 3 PCS DESIGN 3",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-09-06"
  },
  {
    code: "20001",
    name: "SET TOWEL 3 PCS DESIGN 3",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-01-13"
  },
  {
    code: "20001",
    name: "SET TOWEL 3 PCS DESIGN 3",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "20001",
    name: "SET TOWEL 3 PCS DESIGN 3",
    mall: "49-AlAhsa Mall",
    quantity: 6,
    lastSaleDate: "2022-11-22"
  },
  {
    code: "20002",
    name: "SET TOWEL 3 PCS DESIGN 4",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-04-17"
  },
  {
    code: "20002",
    name: "SET TOWEL 3 PCS DESIGN 4",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2022-04-22"
  },
  {
    code: "20004",
    name: "SET TOWEL 3 PCS DESIGN 6",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-08-31"
  },
  {
    code: "20005",
    name: "SET TOWEL 3 PCS DESIGN 7",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-01-07"
  },
  {
    code: "20005",
    name: "SET TOWEL 3 PCS DESIGN 7",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2023-10-13"
  },
  {
    code: "20005",
    name: "SET TOWEL 3 PCS DESIGN 7",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2022-05-06"
  },
  {
    code: "20005",
    name: "SET TOWEL 3 PCS DESIGN 7",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-11-12"
  },
  {
    code: "20006",
    name: "SET TOWEL 3 PCS DESIGN 8",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "20006",
    name: "SET TOWEL 3 PCS DESIGN 8",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-27"
  },
  {
    code: "20006",
    name: "SET TOWEL 3 PCS DESIGN 8",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-11-30"
  },
  {
    code: "20006",
    name: "SET TOWEL 3 PCS DESIGN 8",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "20006",
    name: "SET TOWEL 3 PCS DESIGN 8",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-06-13"
  },
  {
    code: "20007",
    name: "SET TOWEL 3 PCS DESIGN 9",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "20007",
    name: "SET TOWEL 3 PCS DESIGN 9",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "20007",
    name: "SET TOWEL 3 PCS DESIGN 9",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-06-16"
  },
  {
    code: "20007",
    name: "SET TOWEL 3 PCS DESIGN 9",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2023-06-07"
  },
  {
    code: "21833",
    name: "SHEEP3 KIDS HOODED TOWEL BATH ROBE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-08-09"
  },
  {
    code: "21833",
    name: "SHEEP3 KIDS HOODED TOWEL BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-07-06"
  },
  {
    code: "10525",
    name: "SHEET 3 PCS 230 STITSH QUEEN",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2019-09-13"
  },
  {
    code: "10525",
    name: "SHEET 3 PCS 230 STITSH QUEEN",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2019-11-03"
  },
  {
    code: "13044",
    name: "SHEET 3 PCS 300 STITSH KING P BLUE",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "13044",
    name: "SHEET 3 PCS 300 STITSH KING P BLUE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "10515",
    name: "SHEET 300 STITSH DOBBY QUEEN LINER",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2021-05-04"
  },
  {
    code: "10518",
    name: "SHEET 4 PCCS  FULL",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2019-10-02"
  },
  {
    code: "10518",
    name: "SHEET 4 PCCS  FULL",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2021-01-07"
  },
  {
    code: "10503",
    name: "SHEET 4 PCS 250 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2020-09-12"
  },
  {
    code: "10500",
    name: "SHEET 4 PCS 300 STITSH  KING",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2021-07-30"
  },
  {
    code: "10500",
    name: "SHEET 4 PCS 300 STITSH  KING",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2021-05-20"
  },
  {
    code: "10500",
    name: "SHEET 4 PCS 300 STITSH  KING",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-11-29"
  },
  {
    code: "19761",
    name: "SHEET 4 PCS 300 STITSH KING LINEN",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "10507",
    name: "SHEET 4 PCS 300 STITSH KING MATPO",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2021-08-11"
  },
  {
    code: "10507",
    name: "SHEET 4 PCS 300 STITSH KING MATPO",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2020-05-07"
  },
  {
    code: "10507",
    name: "SHEET 4 PCS 300 STITSH KING MATPO",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-04-04"
  },
  {
    code: "19757",
    name: "SHEET 4 PCS 300 STITSH KING OFF WHITE",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "19757",
    name: "SHEET 4 PCS 300 STITSH KING OFF WHITE",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-05-18"
  },
  {
    code: "19757",
    name: "SHEET 4 PCS 300 STITSH KING OFF WHITE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "19757",
    name: "SHEET 4 PCS 300 STITSH KING OFF WHITE",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-04-27"
  },
  {
    code: "19757",
    name: "SHEET 4 PCS 300 STITSH KING OFF WHITE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-05-13"
  },
  {
    code: "19757",
    name: "SHEET 4 PCS 300 STITSH KING OFF WHITE",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "19763",
    name: "SHEET 4 PCS 300 STITSH KING P.BLUE",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "19763",
    name: "SHEET 4 PCS 300 STITSH KING P.BLUE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "19763",
    name: "SHEET 4 PCS 300 STITSH KING P.BLUE",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "19763",
    name: "SHEET 4 PCS 300 STITSH KING P.BLUE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "19763",
    name: "SHEET 4 PCS 300 STITSH KING P.BLUE",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2022-12-01"
  },
  {
    code: "19763",
    name: "SHEET 4 PCS 300 STITSH KING P.BLUE",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "19763",
    name: "SHEET 4 PCS 300 STITSH KING P.BLUE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "19764",
    name: "SHEET 4 PCS 300 STITSH KING PURBLE",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "19764",
    name: "SHEET 4 PCS 300 STITSH KING PURBLE",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "19764",
    name: "SHEET 4 PCS 300 STITSH KING PURBLE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "19764",
    name: "SHEET 4 PCS 300 STITSH KING PURBLE",
    mall: "19-Hail Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-04-28"
  },
  {
    code: "19764",
    name: "SHEET 4 PCS 300 STITSH KING PURBLE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-21"
  },
  {
    code: "19764",
    name: "SHEET 4 PCS 300 STITSH KING PURBLE",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "19764",
    name: "SHEET 4 PCS 300 STITSH KING PURBLE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "14564",
    name: "SHEET 4 PCS 610 STITSH KING IVORY",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2021-03-03"
  },
  {
    code: "14563",
    name: "SHEET 4 PCS 610 STITSH KING WHITE",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-01-10"
  },
  {
    code: "11895",
    name: "SHEET 4 PCS KING LIGHT BLUE",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "11895",
    name: "SHEET 4 PCS KING LIGHT BLUE",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "14155",
    name: "SHEET 4 PCS KING PR 20",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-06-13"
  },
  {
    code: "10497",
    name: "SHEET 4 PCS QUEEN",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-05-14"
  },
  {
    code: "10497",
    name: "SHEET 4 PCS QUEEN",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2021-05-11"
  },
  {
    code: "11905",
    name: "SHEET KING 3 PCS ROSE",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2021-05-12"
  },
  {
    code: "11905",
    name: "SHEET KING 3 PCS ROSE",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-03-11"
  },
  {
    code: "14077",
    name: "SHEET KING 3 PCS.",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2020-09-05"
  },
  {
    code: "14077",
    name: "SHEET KING 3 PCS.",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-03-15"
  },
  {
    code: "14077",
    name: "SHEET KING 3 PCS.",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-08"
  },
  {
    code: "13518",
    name: "SHEET KING 4 PCS 750 STITSH LILAC",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-03-19"
  },
  {
    code: "13507",
    name: "SHEET KING 4 PCS 750 STITSH WHITE",
    mall: "19-Hail Othaim Mall",
    quantity: 6,
    lastSaleDate: "2019-02-03"
  },
  {
    code: "11897",
    name: "SHEET KING 4 PCS ENGLSHROSE",
    mall: "11-Jouri Mall",
    quantity: 21,
    lastSaleDate: "2022-11-25"
  },
  {
    code: "11897",
    name: "SHEET KING 4 PCS ENGLSHROSE",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2021-01-01"
  },
  {
    code: "11897",
    name: "SHEET KING 4 PCS ENGLSHROSE",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "11897",
    name: "SHEET KING 4 PCS ENGLSHROSE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2020-11-21"
  },
  {
    code: "21374",
    name: "SHEET KING 4 PCS PRINTED RAE DUNN DOUBLE STRIPE",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "21374",
    name: "SHEET KING 4 PCS PRINTED RAE DUNN DOUBLE STRIPE",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "21374",
    name: "SHEET KING 4 PCS PRINTED RAE DUNN DOUBLE STRIPE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-07-31"
  },
  {
    code: "21374",
    name: "SHEET KING 4 PCS PRINTED RAE DUNN DOUBLE STRIPE",
    mall: "51-Park Avenue Riyadh",
    quantity: 4,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 4,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2022-10-15"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2023-07-02"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2023-08-15"
  },
  {
    code: "20382",
    name: "SHEET KING 400 TC DOVE SILKY 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-09-30"
  },
  {
    code: "20387",
    name: "SHEET KING 400 TC EGRET SILKY COOL 4 PCS",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "20387",
    name: "SHEET KING 400 TC EGRET SILKY COOL 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-02-26"
  },
  {
    code: "20387",
    name: "SHEET KING 400 TC EGRET SILKY COOL 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-20"
  },
  {
    code: "20387",
    name: "SHEET KING 400 TC EGRET SILKY COOL 4 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-09-08"
  },
  {
    code: "20387",
    name: "SHEET KING 400 TC EGRET SILKY COOL 4 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2023-02-27"
  },
  {
    code: "20387",
    name: "SHEET KING 400 TC EGRET SILKY COOL 4 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-05-22"
  },
  {
    code: "20387",
    name: "SHEET KING 400 TC EGRET SILKY COOL 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-06-13"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 6,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-02-10"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-07-06"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-19"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-05-15"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 4,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-11"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "36-Al jubail Mall",
    quantity: 4,
    lastSaleDate: "2023-06-02"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 7,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 4,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2024-11-13"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 3,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 7,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 9,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-10-16"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-02-17"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 5,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "20826",
    name: "SHEET KING 400 TC ILLUSION BLUE COOL 4 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2024-07-03"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "13-Al-Yasmin Mall",
    quantity: 11,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 4,
    lastSaleDate: "2024-06-11"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2024-02-25"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2023-07-13"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-05-11"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "48 - Jeddah Park",
    quantity: 8,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20383",
    name: "SHEET KING 400 TC SHARKSKIN SILKY 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-06-14"
  },
  {
    code: "20811",
    name: "SHEET KING INDIAN SUMMER 220 STITCH 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-08-10"
  },
  {
    code: "20811",
    name: "SHEET KING INDIAN SUMMER 220 STITCH 3 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2023-04-08"
  },
  {
    code: "20811",
    name: "SHEET KING INDIAN SUMMER 220 STITCH 3 PCS",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "20811",
    name: "SHEET KING INDIAN SUMMER 220 STITCH 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "20811",
    name: "SHEET KING INDIAN SUMMER 220 STITCH 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2024-06-02"
  },
  {
    code: "20720",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE3",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-04-18"
  },
  {
    code: "20720",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE3",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-11-26"
  },
  {
    code: "20721",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE4",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20721",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE4",
    mall: "09-Al-Salam Mall",
    quantity: 6,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20721",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE4",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-06-09"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-06"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "23-Alia Mall Madinah",
    quantity: 6,
    lastSaleDate: "2024-07-20"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-10-13"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2024-09-02"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "48 - Jeddah Park",
    quantity: 4,
    lastSaleDate: "2023-04-18"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "20722",
    name: "SHEET KING JACQUARD 300 STITSH 4 PCS WHITE STYLE5",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-04-23"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-07-20"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 10,
    lastSaleDate: "2025-02-19"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-25"
  },
  {
    code: "20823",
    name: "SHEET KING JERSEY HEATHER BLUE 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 9,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "20819",
    name: "SHEET KING JERSEY HEATHER WHITE SWAN 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 8,
    lastSaleDate: "2024-02-03"
  },
  {
    code: "20819",
    name: "SHEET KING JERSEY HEATHER WHITE SWAN 4 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 5,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 6,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2024-02-03"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-08-05"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 12,
    lastSaleDate: "2025-01-14"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 8,
    lastSaleDate: "2024-08-28"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2022-09-22"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-18"
  },
  {
    code: "20820",
    name: "SHEET KING JERSEY STRIPE BLACK 4 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "20822",
    name: "SHEET KING JERSEY STRIPE OATMEAL 4 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-04-03"
  },
  {
    code: "20822",
    name: "SHEET KING JERSEY STRIPE OATMEAL 4 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "20822",
    name: "SHEET KING JERSEY STRIPE OATMEAL 4 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "20822",
    name: "SHEET KING JERSEY STRIPE OATMEAL 4 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "20822",
    name: "SHEET KING JERSEY STRIPE OATMEAL 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "20822",
    name: "SHEET KING JERSEY STRIPE OATMEAL 4 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "20822",
    name: "SHEET KING JERSEY STRIPE OATMEAL 4 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 7,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20812",
    name: "SHEET KING SANNA BAY 220 STITCH 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "20812",
    name: "SHEET KING SANNA BAY 220 STITCH 3 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2023-09-22"
  },
  {
    code: "20812",
    name: "SHEET KING SANNA BAY 220 STITCH 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-18"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "06-Red Sea Mall",
    quantity: 6,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "07-Arab Mall",
    quantity: 5,
    lastSaleDate: "2024-04-02"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-07-22"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2022-11-15"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "13-Al-Yasmin Mall",
    quantity: 5,
    lastSaleDate: "2022-11-14"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "16-Ehsa Othaim Mall",
    quantity: 7,
    lastSaleDate: "2023-11-07"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-03-31"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "22-Tabuk Park",
    quantity: 21,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "23-Alia Mall Madinah",
    quantity: 3,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 3,
    lastSaleDate: "2023-05-28"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2025-01-18"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-19"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "38-Al_Riyadh Park",
    quantity: 4,
    lastSaleDate: "2024-06-18"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2023-06-17"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-10-19"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2024-10-11"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-08-04"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "08-Makkah Mall",
    quantity: 4,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "20726",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE10",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2023-03-06"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-08-06"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "16-Ehsa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-07-17"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-02-09"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "20724",
    name: "SHEET KING SATEEN STRIPE 300 STITSH 4 PCS WHITE STYLE7",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2024-03-21"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "07-Arab Mall",
    quantity: 5,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 5,
    lastSaleDate: "2022-04-16"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2022-08-09"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2022-11-16"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-02-03"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "45- Riyadh Gallery Mall",
    quantity: 3,
    lastSaleDate: "2023-06-08"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "48 - Jeddah Park",
    quantity: 3,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "20422",
    name: "SHEET KING SOLID DAMASK KING AQUA 4 PCS 500 TC",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-08-02"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "04-Andalos Mall",
    quantity: 2,
    lastSaleDate: "2023-05-22"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "06-Red Sea Mall",
    quantity: 8,
    lastSaleDate: "2025-01-14"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 4,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "16-Ehsa Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-07-13"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 2,
    lastSaleDate: "2022-11-11"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2024-05-20"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2022-06-29"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-03-26"
  },
  {
    code: "20420",
    name: "SHEET KING SOLID DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "48 - Jeddah Park",
    quantity: 3,
    lastSaleDate: "2022-07-15"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 4,
    lastSaleDate: "2023-01-12"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-11-20"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 5,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2022-09-30"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-04-11"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "42-Dareen Mall Dammam",
    quantity: 7,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2023-08-30"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2023-10-10"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2025-04-16"
  },
  {
    code: "20423",
    name: "SHEET KING SOLID DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-24"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "06-Red Sea Mall",
    quantity: 8,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "07-Arab Mall",
    quantity: 4,
    lastSaleDate: "2025-03-03"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 3,
    lastSaleDate: "2022-09-21"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2023-11-01"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2022-11-19"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2025-04-04"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2024-07-08"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-03-22"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 3,
    lastSaleDate: "2024-10-30"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "27-Dhahran Mall khobar",
    quantity: 2,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 13,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "36-Al jubail Mall",
    quantity: 7,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-07-09"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "40-Hayat Mall Riyad",
    quantity: 6,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-03-14"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2023-07-23"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-19"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "20419",
    name: "SHEET KING SOLID DAMASK KING GREY 4 PCS 500 TC",
    mall: "48 - Jeddah Park",
    quantity: 4,
    lastSaleDate: "2024-10-25"
  },
  {
    code: "20418",
    name: "SHEET KING SOLID DAMASK KING HUSHED VIOLET 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2023-02-02"
  },
  {
    code: "20418",
    name: "SHEET KING SOLID DAMASK KING HUSHED VIOLET 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 3,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20418",
    name: "SHEET KING SOLID DAMASK KING HUSHED VIOLET 4 PCS 500 TC",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "20418",
    name: "SHEET KING SOLID DAMASK KING HUSHED VIOLET 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 5,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "05-Haifa Mall",
    quantity: 2,
    lastSaleDate: "2023-06-13"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 7,
    lastSaleDate: "2022-11-26"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-07-23"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-10-27"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-11-12"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-07"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-01-29"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "39-Salam Mall Riyadh",
    quantity: 5,
    lastSaleDate: "2023-05-09"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2023-10-18"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 6,
    lastSaleDate: "2025-04-14"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-02-21"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-06-07"
  },
  {
    code: "20417",
    name: "SHEET KING SOLID DAMASK KING SILVER 4 PCS 500 TC",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-01-02"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2023-08-18"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 3,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-13"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "20421",
    name: "SHEET KING SOLID DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "20415",
    name: "SHEET KING SOLID DAMASK KING WHITE 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-08-26"
  },
  {
    code: "20415",
    name: "SHEET KING SOLID DAMASK KING WHITE 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-06-28"
  },
  {
    code: "20415",
    name: "SHEET KING SOLID DAMASK KING WHITE 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-16"
  },
  {
    code: "20415",
    name: "SHEET KING SOLID DAMASK KING WHITE 4 PCS 500 TC",
    mall: "39-Salam Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-06-02"
  },
  {
    code: "20415",
    name: "SHEET KING SOLID DAMASK KING WHITE 4 PCS 500 TC",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2025-03-11"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "07-Arab Mall",
    quantity: 5,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-05-14"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-02-20"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-01-31"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 16,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-12-07"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-04-11"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "42-Dareen Mall Dammam",
    quantity: 6,
    lastSaleDate: "2023-12-16"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20411",
    name: "SHEET KING STRIPE DAMASK KING BURGUNDY 4 PCS 500 TC",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-06-18"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-03-23"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2022-04-26"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-04-05"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 4,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2023-01-29"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "36-Al jubail Mall",
    quantity: 4,
    lastSaleDate: "2023-12-26"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2024-10-28"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-07-04"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-07-03"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2022-04-15"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-17"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "51-Park Avenue Riyadh",
    quantity: 4,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-08-15"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "20414",
    name: "SHEET KING STRIPE DAMASK KING C.STONE 4 PCS 500 TC",
    mall: "53-Al Basateen Mall",
    quantity: 3,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "07-Arab Mall",
    quantity: 3,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2023-03-17"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-01-29"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "18-Al_Khayyat Center",
    quantity: 5,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-03-28"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-03-07"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 4,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-08"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2022-11-02"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "40-Hayat Mall Riyad",
    quantity: 6,
    lastSaleDate: "2024-04-19"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2023-03-17"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "45- Riyadh Gallery Mall",
    quantity: 7,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2022-11-28"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "48 - Jeddah Park",
    quantity: 4,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "49-AlAhsa Mall",
    quantity: 5,
    lastSaleDate: "2024-06-29"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "50-Meem Plaza Riyadh",
    quantity: 6,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "51-Park Avenue Riyadh",
    quantity: 5,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "53-Al Basateen Mall",
    quantity: 2,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "20410",
    name: "SHEET KING STRIPE DAMASK KING GREY 4 PCS 500 TC",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2024-09-12"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-04-27"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 4,
    lastSaleDate: "2024-01-12"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 3,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "16-Ehsa Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-04-22"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2023-07-29"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-09-10"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2023-10-27"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "50-Meem Plaza Riyadh",
    quantity: 5,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "51-Park Avenue Riyadh",
    quantity: 9,
    lastSaleDate: "2025-04-09"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "20408",
    name: "SHEET KING STRIPE DAMASK KING SILVER 4 PCS 500 TC",
    mall: "23-Alia Mall Madinah",
    quantity: 2,
    lastSaleDate: "2025-04-03"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-02-14"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "12-Al_Hamra Mall",
    quantity: 2,
    lastSaleDate: "2023-03-27"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2023-10-20"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-07-07"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2023-01-18"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "19-Hail Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2023-03-30"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "25-Rabwa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-11-17"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-08-12"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-04-20"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-08-08"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "20412",
    name: "SHEET KING STRIPE DAMASK KING TAUPE 4 PCS 500 TC",
    mall: "51-Park Avenue Riyadh",
    quantity: 4,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "20409",
    name: "SHEET KING STRIPE DAMASK KING VIOLET 4 PCS 500 TC",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "20409",
    name: "SHEET KING STRIPE DAMASK KING VIOLET 4 PCS 500 TC",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-05-05"
  },
  {
    code: "20409",
    name: "SHEET KING STRIPE DAMASK KING VIOLET 4 PCS 500 TC",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2022-10-17"
  },
  {
    code: "20409",
    name: "SHEET KING STRIPE DAMASK KING VIOLET 4 PCS 500 TC",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "20814",
    name: "SHEET KING TETURY M.DUCKEGG 220 STITCH 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-07-22"
  },
  {
    code: "20814",
    name: "SHEET KING TETURY M.DUCKEGG 220 STITCH 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-01-30"
  },
  {
    code: "20813",
    name: "SHEET KING TRANSAY 220 STITCH 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-10-30"
  },
  {
    code: "20813",
    name: "SHEET KING TRANSAY 220 STITCH 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "20813",
    name: "SHEET KING TRANSAY 220 STITCH 3 PCS",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "20813",
    name: "SHEET KING TRANSAY 220 STITCH 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "15112",
    name: "SHEET SS-4 LILAC KING 4 PCS",
    mall: "36-Al jubail Mall",
    quantity: 4,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "07-Arab Mall",
    quantity: 6,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "18-Al_Khayyat Center",
    quantity: 8,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2022-06-01"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-19"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-11-19"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20164",
    name: "SHEET SUPIMA ALLOY GREY 800 TC 6 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2023-07-10"
  },
  {
    code: "20162",
    name: "SHEET SUPIMA PEARL BLUE 800 TC 6 PCS",
    mall: "07-Arab Mall",
    quantity: 5,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "20162",
    name: "SHEET SUPIMA PEARL BLUE 800 TC 6 PCS",
    mall: "18-Al_Khayyat Center",
    quantity: 2,
    lastSaleDate: "2024-09-10"
  },
  {
    code: "20162",
    name: "SHEET SUPIMA PEARL BLUE 800 TC 6 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "20162",
    name: "SHEET SUPIMA PEARL BLUE 800 TC 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-05-29"
  },
  {
    code: "20162",
    name: "SHEET SUPIMA PEARL BLUE 800 TC 6 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "20163",
    name: "SHEET SUPIMA TAN 800 TC 6 PCS",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20163",
    name: "SHEET SUPIMA TAN 800 TC 6 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-06-07"
  },
  {
    code: "20163",
    name: "SHEET SUPIMA TAN 800 TC 6 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2024-06-19"
  },
  {
    code: "20161",
    name: "SHEET SUPIMA WHITE 800 TC 6 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "14232",
    name: "SHIDIORI FULL COMFORTER 7 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "21878",
    name: "SHORE DYED KING SHEET SET 4 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-09-22"
  },
  {
    code: "21878",
    name: "SHORE DYED KING SHEET SET 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-08-21"
  },
  {
    code: "21878",
    name: "SHORE DYED KING SHEET SET 4 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "21878",
    name: "SHORE DYED KING SHEET SET 4 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-08-08"
  },
  {
    code: "10828",
    name: "SHOWER CURTAIN.",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2020-02-21"
  },
  {
    code: "10828",
    name: "SHOWER CURTAIN.",
    mall: "18-Al_Khayyat Center",
    quantity: 2,
    lastSaleDate: "2021-06-05"
  },
  {
    code: "10828",
    name: "SHOWER CURTAIN.",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-09-09"
  },
  {
    code: "19902",
    name: "SILVA BATH ACCESS SET 5 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-08-21"
  },
  {
    code: "19902",
    name: "SILVA BATH ACCESS SET 5 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-02-14"
  },
  {
    code: "19902",
    name: "SILVA BATH ACCESS SET 5 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2022-12-16"
  },
  {
    code: "11633",
    name: "SILVER SHEET ( FULL )  SET 3PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-11-22"
  },
  {
    code: "11633",
    name: "SILVER SHEET ( FULL )  SET 3PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "11633",
    name: "SILVER SHEET ( FULL )  SET 3PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "11633",
    name: "SILVER SHEET ( FULL )  SET 3PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 16,
    lastSaleDate: "2024-02-12"
  },
  {
    code: "12366",
    name: "SILVER SHEET (QUEEN)SET 3PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2023-01-17"
  },
  {
    code: "12366",
    name: "SILVER SHEET (QUEEN)SET 3PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-04-13"
  },
  {
    code: "20524",
    name: "SIMPLE DAYDREAM STRIPE CORAL PRINTED KING COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-28"
  },
  {
    code: "20524",
    name: "SIMPLE DAYDREAM STRIPE CORAL PRINTED KING COMFORTER 3 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "18127",
    name: "SIMPLE ROSE PRINTED WINTER FULL COMFORTER 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 10,
    lastSaleDate: "2023-07-13"
  },
  {
    code: "21588",
    name: "SLIPER BE-65 MINT 44/45",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-26"
  },
  {
    code: "20952",
    name: "SLIPPER BE - 51 BLACK 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-07-15"
  },
  {
    code: "20952",
    name: "SLIPPER BE - 51 BLACK 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-11-08"
  },
  {
    code: "20955",
    name: "SLIPPER BE - 51 IVORY 36/37",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-29"
  },
  {
    code: "20955",
    name: "SLIPPER BE - 51 IVORY 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-04-18"
  },
  {
    code: "20956",
    name: "SLIPPER BE - 51 IVORY 38/39",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-03-21"
  },
  {
    code: "20958",
    name: "SLIPPER BE - 51 PINK 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-06-29"
  },
  {
    code: "20959",
    name: "SLIPPER BE - 51 PINK 38/39",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-12-03"
  },
  {
    code: "20960",
    name: "SLIPPER BE - 51 PINK 40/41",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-12-15"
  },
  {
    code: "20964",
    name: "SLIPPER BE - 52 BLUE 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-03-26"
  },
  {
    code: "20964",
    name: "SLIPPER BE - 52 BLUE 36/37",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "20967",
    name: "SLIPPER BE - 52 BROWN 36/37",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "20962",
    name: "SLIPPER BE - 52 GREEN 38/39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "20962",
    name: "SLIPPER BE - 52 GREEN 38/39",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "20962",
    name: "SLIPPER BE - 52 GREEN 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-10-09"
  },
  {
    code: "20963",
    name: "SLIPPER BE - 52 GREEN 40/41",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "20970",
    name: "SLIPPER BE - 52 ORANGE 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "20970",
    name: "SLIPPER BE - 52 ORANGE 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "20970",
    name: "SLIPPER BE - 52 ORANGE 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-15"
  },
  {
    code: "20970",
    name: "SLIPPER BE - 52 ORANGE 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "20970",
    name: "SLIPPER BE - 52 ORANGE 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-07-03"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-06-09"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-04-26"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-02-05"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "20979",
    name: "SLIPPER BE - 53 BROWN 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2022-11-23"
  },
  {
    code: "20976",
    name: "SLIPPER BE - 53 IVORY 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-02-18"
  },
  {
    code: "20976",
    name: "SLIPPER BE - 53 IVORY 36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "20976",
    name: "SLIPPER BE - 53 IVORY 36/37",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-09-24"
  },
  {
    code: "20976",
    name: "SLIPPER BE - 53 IVORY 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "20976",
    name: "SLIPPER BE - 53 IVORY 36/37",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "20976",
    name: "SLIPPER BE - 53 IVORY 36/37",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-17"
  },
  {
    code: "20976",
    name: "SLIPPER BE - 53 IVORY 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-02-06"
  },
  {
    code: "20995",
    name: "SLIPPER BE - 54 BLACK 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-10-18"
  },
  {
    code: "20988",
    name: "SLIPPER BE - 54 GREEN 36/37",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-10"
  },
  {
    code: "20988",
    name: "SLIPPER BE - 54 GREEN 36/37",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-04-17"
  },
  {
    code: "20989",
    name: "SLIPPER BE - 54 GREEN 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-02-28"
  },
  {
    code: "20982",
    name: "SLIPPER BE - 54 IVORY 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-01-05"
  },
  {
    code: "20982",
    name: "SLIPPER BE - 54 IVORY 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20984",
    name: "SLIPPER BE - 54 IVORY 40/41",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-09"
  },
  {
    code: "20987",
    name: "SLIPPER BE - 54 PINK 40/41",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2022-12-15"
  },
  {
    code: "21214",
    name: "SLIPPER BE 31 LIGHT PINK 36-37",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "21214",
    name: "SLIPPER BE 31 LIGHT PINK 36-37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-03-15"
  },
  {
    code: "21215",
    name: "SLIPPER BE 31 LIGHT PINK 38-39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-09-23"
  },
  {
    code: "21223",
    name: "SLIPPER BE 32 GREY 36-37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-03-13"
  },
  {
    code: "21225",
    name: "SLIPPER BE 32 GREY 40-41",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-08-24"
  },
  {
    code: "21206",
    name: "SLIPPER BE 35 IVORY+GREEN+NAVY 38-39",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "21193",
    name: "SLIPPER BE 55 BROWN 36-37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-02"
  },
  {
    code: "21193",
    name: "SLIPPER BE 55 BROWN 36-37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-04-27"
  },
  {
    code: "21195",
    name: "SLIPPER BE 55 BROWN 40-41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-07-29"
  },
  {
    code: "21190",
    name: "SLIPPER BE 55 IVORY 36-37",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "21190",
    name: "SLIPPER BE 55 IVORY 36-37",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "21191",
    name: "SLIPPER BE 55 IVORY 38-39",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "21191",
    name: "SLIPPER BE 55 IVORY 38-39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "21192",
    name: "SLIPPER BE 55 IVORY 40-41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-30"
  },
  {
    code: "21196",
    name: "SLIPPER BE 56 BROWN 36-37",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-08-27"
  },
  {
    code: "21197",
    name: "SLIPPER BE 56 BROWN 38-39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "21198",
    name: "SLIPPER BE 56 BROWN 40-41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "21199",
    name: "SLIPPER BE 57 PEACH 36-37",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-29"
  },
  {
    code: "17514",
    name: "SLIPPER BE-15 WHITE+PINK 36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "17514",
    name: "SLIPPER BE-15 WHITE+PINK 36/37",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-04"
  },
  {
    code: "17515",
    name: "SLIPPER BE-15 WHITE+PINK 38/39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-02"
  },
  {
    code: "17515",
    name: "SLIPPER BE-15 WHITE+PINK 38/39",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "17516",
    name: "SLIPPER BE-15 WHITE+PINK 40/41",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "17523",
    name: "SLIPPER BE-19 IVORY 36/37",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-11-28"
  },
  {
    code: "18348",
    name: "SLIPPER BE-22 G/I SIZE 38",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2022-05-18"
  },
  {
    code: "18040",
    name: "SLIPPER BE-24 BROWN SIZE 36",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "18041",
    name: "SLIPPER BE-24 BROWN SIZE 38",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-01-06"
  },
  {
    code: "20111",
    name: "SLIPPER BE-28 BLACK SIZE 40",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-11-01"
  },
  {
    code: "20104",
    name: "SLIPPER BE-28 IVORY SIZE 38",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-11-03"
  },
  {
    code: "20106",
    name: "SLIPPER BE-28 PINK SIZE 36",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-06-13"
  },
  {
    code: "20107",
    name: "SLIPPER BE-28 PINK SIZE 38",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-03-21"
  },
  {
    code: "20108",
    name: "SLIPPER BE-28 PINK SIZE 40",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-03-12"
  },
  {
    code: "20118",
    name: "SLIPPER BE-29 LIGHT PINK SIZE 36",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2022-04-28"
  },
  {
    code: "20118",
    name: "SLIPPER BE-29 LIGHT PINK SIZE 36",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "20121",
    name: "SLIPPER BE-29 OFF WHITE SIZE 36",
    mall: "14-Al Kamal Mall",
    quantity: 2,
    lastSaleDate: "2023-08-12"
  },
  {
    code: "20121",
    name: "SLIPPER BE-29 OFF WHITE SIZE 36",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "20121",
    name: "SLIPPER BE-29 OFF WHITE SIZE 36",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-10-30"
  },
  {
    code: "20121",
    name: "SLIPPER BE-29 OFF WHITE SIZE 36",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-08-14"
  },
  {
    code: "20121",
    name: "SLIPPER BE-29 OFF WHITE SIZE 36",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "20122",
    name: "SLIPPER BE-29 OFF WHITE SIZE 38",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-06"
  },
  {
    code: "20123",
    name: "SLIPPER BE-29 OFF WHITE SIZE 40",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-08-07"
  },
  {
    code: "20127",
    name: "SLIPPER BE-30 OFF WHITE SIZE 36",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-08-07"
  },
  {
    code: "20128",
    name: "SLIPPER BE-30 OFF WHITE SIZE 38",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-03-14"
  },
  {
    code: "20128",
    name: "SLIPPER BE-30 OFF WHITE SIZE 38",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-07-08"
  },
  {
    code: "20128",
    name: "SLIPPER BE-30 OFF WHITE SIZE 38",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-18"
  },
  {
    code: "20129",
    name: "SLIPPER BE-30 OFF WHITE SIZE 40",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-07-06"
  },
  {
    code: "20190",
    name: "SLIPPER BE-33 MEN BROWN 42/43",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-09-20"
  },
  {
    code: "20184",
    name: "SLIPPER BE-33 MEN GREY 42/43",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-04-07"
  },
  {
    code: "20203",
    name: "SLIPPER BE-37 GREY 40/41",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-01-13"
  },
  {
    code: "20201",
    name: "SLIPPER BE-37 GREY36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "20201",
    name: "SLIPPER BE-37 GREY36/37",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "20202",
    name: "SLIPPER BE-37 GREY38/39",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "20204",
    name: "SLIPPER BE-38 BEIGE36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "20207",
    name: "SLIPPER BE-39 BROWN36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "20207",
    name: "SLIPPER BE-39 BROWN36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-12-29"
  },
  {
    code: "20208",
    name: "SLIPPER BE-39 BROWN38/39",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-02-26"
  },
  {
    code: "20221",
    name: "SLIPPER BE-41 NAVY 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "20218",
    name: "SLIPPER BE-41 TAN 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-01"
  },
  {
    code: "20218",
    name: "SLIPPER BE-41 TAN 36/37",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2024-09-04"
  },
  {
    code: "20253",
    name: "SLIPPER BE-42 GRAY 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-12"
  },
  {
    code: "20256",
    name: "SLIPPER BE-43 GREY 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-01-02"
  },
  {
    code: "20257",
    name: "SLIPPER BE-43 GREY 38/39",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-01-02"
  },
  {
    code: "20260",
    name: "SLIPPER BE-43 PURPLE 38/39",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-08-03"
  },
  {
    code: "20267",
    name: "SLIPPER BE-44 BEIGE 40/41",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-08-02"
  },
  {
    code: "20262",
    name: "SLIPPER BE-44 BLUE 36/37",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-21"
  },
  {
    code: "20262",
    name: "SLIPPER BE-44 BLUE 36/37",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-27"
  },
  {
    code: "20262",
    name: "SLIPPER BE-44 BLUE 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2022-09-22"
  },
  {
    code: "20263",
    name: "SLIPPER BE-44 BLUE 38/39",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2023-12-24"
  },
  {
    code: "20268",
    name: "SLIPPER BE-45 BROWN 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "20268",
    name: "SLIPPER BE-45 BROWN 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "20271",
    name: "SLIPPER BE-45 GREY 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "20224",
    name: "SLIPPER BE-46 BEIGE 36/37",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-02"
  },
  {
    code: "20224",
    name: "SLIPPER BE-46 BEIGE 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-10-06"
  },
  {
    code: "20277",
    name: "SLIPPER BE-48 BROWN 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2022-12-30"
  },
  {
    code: "20280",
    name: "SLIPPER BE-49 BROWN 36/37",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "20280",
    name: "SLIPPER BE-49 BROWN 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 2,
    lastSaleDate: "2023-10-07"
  },
  {
    code: "20280",
    name: "SLIPPER BE-49 BROWN 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-30"
  },
  {
    code: "20281",
    name: "SLIPPER BE-49 BROWN 38/39",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-06-08"
  },
  {
    code: "21263",
    name: "SLIPPER BE-59 PINK 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-05-26"
  },
  {
    code: "21264",
    name: "SLIPPER BE-59 PINK 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-04-29"
  },
  {
    code: "21266",
    name: "SLIPPER BE-60 LIGHT BROWN 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "21269",
    name: "SLIPPER BE-60 PINK 36/37",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-17"
  },
  {
    code: "21269",
    name: "SLIPPER BE-60 PINK 36/37",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-02-05"
  },
  {
    code: "21269",
    name: "SLIPPER BE-60 PINK 36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-14"
  },
  {
    code: "21269",
    name: "SLIPPER BE-60 PINK 36/37",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-12-24"
  },
  {
    code: "21269",
    name: "SLIPPER BE-60 PINK 36/37",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-01-03"
  },
  {
    code: "21269",
    name: "SLIPPER BE-60 PINK 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "21270",
    name: "SLIPPER BE-60 PINK 38/39",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2023-11-21"
  },
  {
    code: "21270",
    name: "SLIPPER BE-60 PINK 38/39",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-26"
  },
  {
    code: "21270",
    name: "SLIPPER BE-60 PINK 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-08-23"
  },
  {
    code: "21273",
    name: "SLIPPER BE-61 GREY 38/39",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "21275",
    name: "SLIPPER BE-62 GREEN 36/37",
    mall: "43-Mujan Park",
    quantity: 4,
    lastSaleDate: "2024-12-23"
  },
  {
    code: "21275",
    name: "SLIPPER BE-62 GREEN 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "21276",
    name: "SLIPPER BE-62 GREEN 38/39",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 6,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "21276",
    name: "SLIPPER BE-62 GREEN 38/39",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-01-03"
  },
  {
    code: "21276",
    name: "SLIPPER BE-62 GREEN 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "21277",
    name: "SLIPPER BE-62 GREEN 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-12-08"
  },
  {
    code: "21278",
    name: "SLIPPER BE-63 NAVY 36/37",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-08-29"
  },
  {
    code: "21278",
    name: "SLIPPER BE-63 NAVY 36/37",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "21281",
    name: "SLIPPER BE-64 IVORY 36/37",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-18"
  },
  {
    code: "21282",
    name: "SLIPPER BE-64 IVORY 38/39",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2023-12-08"
  },
  {
    code: "21284",
    name: "SLIPPER BE-65 BROWN 40/41",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-09-09"
  },
  {
    code: "21589",
    name: "SLIPPER BE-65 GREEN 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 7,
    lastSaleDate: "2023-11-01"
  },
  {
    code: "21288",
    name: "SLIPPER BE-65 GREY 42/43",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-06-08"
  },
  {
    code: "21604",
    name: "SLIPPER BE-69 IVORY 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 6,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "21606",
    name: "SLIPPER BE-69 IVORY 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-09"
  },
  {
    code: "21606",
    name: "SLIPPER BE-69 IVORY 40/41",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "21607",
    name: "SLIPPER BE-69 TAN 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "21607",
    name: "SLIPPER BE-69 TAN 36/37",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-05-13"
  },
  {
    code: "21607",
    name: "SLIPPER BE-69 TAN 36/37",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "21607",
    name: "SLIPPER BE-69 TAN 36/37",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "21607",
    name: "SLIPPER BE-69 TAN 36/37",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-28"
  },
  {
    code: "21607",
    name: "SLIPPER BE-69 TAN 36/37",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "21607",
    name: "SLIPPER BE-69 TAN 36/37",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "21608",
    name: "SLIPPER BE-69 TAN 38/39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2024-04-15"
  },
  {
    code: "21608",
    name: "SLIPPER BE-69 TAN 38/39",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-01"
  },
  {
    code: "21608",
    name: "SLIPPER BE-69 TAN 38/39",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-20"
  },
  {
    code: "21608",
    name: "SLIPPER BE-69 TAN 38/39",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "21609",
    name: "SLIPPER BE-69 TAN 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-04-13"
  },
  {
    code: "21609",
    name: "SLIPPER BE-69 TAN 40/41",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "21609",
    name: "SLIPPER BE-69 TAN 40/41",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "21609",
    name: "SLIPPER BE-69 TAN 40/41",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "21593",
    name: "SLIPPER BE-70 TAN 38/39",
    mall: "49-AlAhsa Mall",
    quantity: 7,
    lastSaleDate: "2023-12-24"
  },
  {
    code: "21594",
    name: "SLIPPER BE-70 TAN 40/41",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-02-04"
  },
  {
    code: "21595",
    name: "SLIPPER BE-71 BEIGE 36/37",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2023-04-19"
  },
  {
    code: "21610",
    name: "SLIPPER BE-72 IVORY 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "21610",
    name: "SLIPPER BE-72 IVORY 36/37",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2025-03-07"
  },
  {
    code: "21598",
    name: "SLIPPER BE-73 PINK 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "21598",
    name: "SLIPPER BE-73 PINK 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "21599",
    name: "SLIPPER BE-73 PINK 38/39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 8,
    lastSaleDate: "2024-03-13"
  },
  {
    code: "21600",
    name: "SLIPPER BE-73 PINK 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 5,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "21601",
    name: "SLIPPER BE-73 TAN 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "21601",
    name: "SLIPPER BE-73 TAN 36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "21601",
    name: "SLIPPER BE-73 TAN 36/37",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-06-07"
  },
  {
    code: "21602",
    name: "SLIPPER BE-73 TAN 38/39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-03-30"
  },
  {
    code: "21602",
    name: "SLIPPER BE-73 TAN 38/39",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "21603",
    name: "SLIPPER BE-73 TAN 40/41",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "21603",
    name: "SLIPPER BE-73 TAN 40/41",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "21603",
    name: "SLIPPER BE-73 TAN 40/41",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "21616",
    name: "SLIPPER BE-74 GREY 36/37",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-12-06"
  },
  {
    code: "21616",
    name: "SLIPPER BE-74 GREY 36/37",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "21616",
    name: "SLIPPER BE-74 GREY 36/37",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "21617",
    name: "SLIPPER BE-74 GREY 38/39",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-12-07"
  },
  {
    code: "21617",
    name: "SLIPPER BE-74 GREY 38/39",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "21618",
    name: "SLIPPER BE-74 GREY 40/41",
    mall: "55- Jabl Omar",
    quantity: 6,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "21615",
    name: "SLIPPER BE-74 PINK 40/41",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-01-20"
  },
  {
    code: "17005",
    name: "SLIPPER BE-X-5019 SIZE 36/37",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-06-10"
  },
  {
    code: "17011",
    name: "SLIPPER BR-2020-37 SIZE 36/37",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2021-11-24"
  },
  {
    code: "17026",
    name: "SLIPPER BR-2020-78 WHITE SIZE 36/37",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-09-14"
  },
  {
    code: "17017",
    name: "SLIPPER BR-2020-86 WHITE SIZE 36/37",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-04-16"
  },
  {
    code: "17019",
    name: "SLIPPER BR-2020-86 WHITE SIZE 40/41",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2020-11-16"
  },
  {
    code: "17024",
    name: "SLIPPER BR-2020-88 BEIGE SIZE 38/39",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-03-13"
  },
  {
    code: "21155",
    name: "SLIPPER KD 1 BLUE 26-27",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "21155",
    name: "SLIPPER KD 1 BLUE 26-27",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 10,
    lastSaleDate: "2024-05-28"
  },
  {
    code: "21155",
    name: "SLIPPER KD 1 BLUE 26-27",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-25"
  },
  {
    code: "21155",
    name: "SLIPPER KD 1 BLUE 26-27",
    mall: "40-Hayat Mall Riyad",
    quantity: 11,
    lastSaleDate: "2024-08-18"
  },
  {
    code: "21155",
    name: "SLIPPER KD 1 BLUE 26-27",
    mall: "45- Riyadh Gallery Mall",
    quantity: 4,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "21155",
    name: "SLIPPER KD 1 BLUE 26-27",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-10-24"
  },
  {
    code: "21156",
    name: "SLIPPER KD 1 BLUE 28-29",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-27"
  },
  {
    code: "21156",
    name: "SLIPPER KD 1 BLUE 28-29",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2025-03-02"
  },
  {
    code: "21160",
    name: "SLIPPER KD 1 GREY 24-25",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "21160",
    name: "SLIPPER KD 1 GREY 24-25",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-12-12"
  },
  {
    code: "21160",
    name: "SLIPPER KD 1 GREY 24-25",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "21161",
    name: "SLIPPER KD 1 GREY 26-27",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-11-07"
  },
  {
    code: "21161",
    name: "SLIPPER KD 1 GREY 26-27",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "21161",
    name: "SLIPPER KD 1 GREY 26-27",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "21161",
    name: "SLIPPER KD 1 GREY 26-27",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "21161",
    name: "SLIPPER KD 1 GREY 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 10,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "21161",
    name: "SLIPPER KD 1 GREY 26-27",
    mall: "45- Riyadh Gallery Mall",
    quantity: 4,
    lastSaleDate: "2023-12-08"
  },
  {
    code: "21157",
    name: "SLIPPER KD 1 PINK 24-25",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-08-15"
  },
  {
    code: "21181",
    name: "SLIPPER KD 10 BROWN 24-25",
    mall: "52-Al_Baha Mall",
    quantity: 2,
    lastSaleDate: "2023-12-28"
  },
  {
    code: "21182",
    name: "SLIPPER KD 10 BROWN 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "21182",
    name: "SLIPPER KD 10 BROWN 26-27",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-01-02"
  },
  {
    code: "21178",
    name: "SLIPPER KD 10 GREY 24-25",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "21178",
    name: "SLIPPER KD 10 GREY 24-25",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "21178",
    name: "SLIPPER KD 10 GREY 24-25",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "21178",
    name: "SLIPPER KD 10 GREY 24-25",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "21178",
    name: "SLIPPER KD 10 GREY 24-25",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-07-19"
  },
  {
    code: "21178",
    name: "SLIPPER KD 10 GREY 24-25",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "21185",
    name: "SLIPPER KD 10 LIGHT PINK 26-27",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-26"
  },
  {
    code: "21188",
    name: "SLIPPER KD 10 PINK 26-27",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-08-04"
  },
  {
    code: "21167",
    name: "SLIPPER KD 2 BROWN 26-27",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-11-02"
  },
  {
    code: "21167",
    name: "SLIPPER KD 2 BROWN 26-27",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-10-30"
  },
  {
    code: "21167",
    name: "SLIPPER KD 2 BROWN 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "21164",
    name: "SLIPPER KD 2 GREY 26-27",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "21164",
    name: "SLIPPER KD 2 GREY 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-04-29"
  },
  {
    code: "21106",
    name: "SLIPPER KD 2 YELLOW 24-25",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-20"
  },
  {
    code: "21106",
    name: "SLIPPER KD 2 YELLOW 24-25",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-10"
  },
  {
    code: "21106",
    name: "SLIPPER KD 2 YELLOW 24-25",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "21107",
    name: "SLIPPER KD 2 YELLOW 26-27",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-20"
  },
  {
    code: "21107",
    name: "SLIPPER KD 2 YELLOW 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 7,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "21108",
    name: "SLIPPER KD 2 YELLOW 28-29",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-09-05"
  },
  {
    code: "21108",
    name: "SLIPPER KD 2 YELLOW 28-29",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "21108",
    name: "SLIPPER KD 2 YELLOW 28-29",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-11-07"
  },
  {
    code: "21116",
    name: "SLIPPER KD 3 CORAL+IVORY 26-27",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-16"
  },
  {
    code: "21116",
    name: "SLIPPER KD 3 CORAL+IVORY 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "21116",
    name: "SLIPPER KD 3 CORAL+IVORY 26-27",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-10-28"
  },
  {
    code: "21117",
    name: "SLIPPER KD 3 CORAL+IVORY 28-29",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-02-04"
  },
  {
    code: "21110",
    name: "SLIPPER KD 3 PINK+IVORY 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "21112",
    name: "SLIPPER KD 3 YELLOW+IVORY 24-25",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2023-12-18"
  },
  {
    code: "21113",
    name: "SLIPPER KD 3 YELLOW+IVORY 26-27",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "21118",
    name: "SLIPPER KD 4 BLUE 24-25",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-10"
  },
  {
    code: "21118",
    name: "SLIPPER KD 4 BLUE 24-25",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-27"
  },
  {
    code: "21118",
    name: "SLIPPER KD 4 BLUE 24-25",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-06"
  },
  {
    code: "21119",
    name: "SLIPPER KD 4 BLUE 26-27",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-09-17"
  },
  {
    code: "21120",
    name: "SLIPPER KD 4 BLUE 28-29",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2023-11-02"
  },
  {
    code: "21120",
    name: "SLIPPER KD 4 BLUE 28-29",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "21169",
    name: "SLIPPER KD 4 GREEN 24-25",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-10"
  },
  {
    code: "21169",
    name: "SLIPPER KD 4 GREEN 24-25",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-02-20"
  },
  {
    code: "21169",
    name: "SLIPPER KD 4 GREEN 24-25",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-09-03"
  },
  {
    code: "21170",
    name: "SLIPPER KD 4 GREEN 26-27",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-10-08"
  },
  {
    code: "21170",
    name: "SLIPPER KD 4 GREEN 26-27",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-04-20"
  },
  {
    code: "21170",
    name: "SLIPPER KD 4 GREEN 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 10,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "21171",
    name: "SLIPPER KD 4 GREEN 28-29",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "21171",
    name: "SLIPPER KD 4 GREEN 28-29",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-11-27"
  },
  {
    code: "21121",
    name: "SLIPPER KD 4 YELLOW 24-25",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-12-19"
  },
  {
    code: "21122",
    name: "SLIPPER KD 4 YELLOW 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 6,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "21123",
    name: "SLIPPER KD 4 YELLOW 28-29",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-06-30"
  },
  {
    code: "21123",
    name: "SLIPPER KD 4 YELLOW 28-29",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-11-10"
  },
  {
    code: "21124",
    name: "SLIPPER KD 5 CORAL 24-25",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-08-03"
  },
  {
    code: "21125",
    name: "SLIPPER KD 5 CORAL 26-27",
    mall: "04-Andalos Mall",
    quantity: 1,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "21125",
    name: "SLIPPER KD 5 CORAL 26-27",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "21125",
    name: "SLIPPER KD 5 CORAL 26-27",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "21125",
    name: "SLIPPER KD 5 CORAL 26-27",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "21125",
    name: "SLIPPER KD 5 CORAL 26-27",
    mall: "40-Hayat Mall Riyad",
    quantity: 19,
    lastSaleDate: "2024-08-24"
  },
  {
    code: "21125",
    name: "SLIPPER KD 5 CORAL 26-27",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "21125",
    name: "SLIPPER KD 5 CORAL 26-27",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-08-17"
  },
  {
    code: "21126",
    name: "SLIPPER KD 5 CORAL 28-29",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-06-03"
  },
  {
    code: "21126",
    name: "SLIPPER KD 5 CORAL 28-29",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-09"
  },
  {
    code: "21128",
    name: "SLIPPER KD 5 YELLOW 26-27",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2024-04-04"
  },
  {
    code: "21128",
    name: "SLIPPER KD 5 YELLOW 26-27",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "21129",
    name: "SLIPPER KD 5 YELLOW 28-29",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-11"
  },
  {
    code: "21132",
    name: "SLIPPER KD 6 PINK 28-29",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-01-09"
  },
  {
    code: "21132",
    name: "SLIPPER KD 6 PINK 28-29",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-10-26"
  },
  {
    code: "21134",
    name: "SLIPPER KD 6 YELLOW 26-27",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "21136",
    name: "SLIPPER KD 7 GREY 24-25",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-12-17"
  },
  {
    code: "21137",
    name: "SLIPPER KD 7 GREY 26-27",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "21137",
    name: "SLIPPER KD 7 GREY 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 9,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "21137",
    name: "SLIPPER KD 7 GREY 26-27",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "21138",
    name: "SLIPPER KD 7 GREY 28-29",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-16"
  },
  {
    code: "21172",
    name: "SLIPPER KD 8 BLUE 24-25",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "21174",
    name: "SLIPPER KD 8 BLUE 28-29",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-01-12"
  },
  {
    code: "21176",
    name: "SLIPPER KD 8 ORANGE 26-27",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-06-21"
  },
  {
    code: "21146",
    name: "SLIPPER KD 9 GREY 26-27",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 7,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "21148",
    name: "SLIPPER KD 9 ORANGE 24-25",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-01-23"
  },
  {
    code: "21149",
    name: "SLIPPER KD 9 ORANGE 26-27",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "21149",
    name: "SLIPPER KD 9 ORANGE 26-27",
    mall: "52-Al_Baha Mall",
    quantity: 5,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "21150",
    name: "SLIPPER KD 9 ORANGE 28-29",
    mall: "52-Al_Baha Mall",
    quantity: 5,
    lastSaleDate: "2024-11-21"
  },
  {
    code: "21143",
    name: "SLIPPER KD 9 PINK 26-27",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-02-14"
  },
  {
    code: "21145",
    name: "SLIPPER KD ?9 GREY 24-25",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2024-04-28"
  },
  {
    code: "16549",
    name: "SLIPPER STYLE 1 BX-5013 TAUPE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2020-12-03"
  },
  {
    code: "20058",
    name: "SLIT SHEET 3 PCS 300 STITSH FULL",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-03-10"
  },
  {
    code: "20050",
    name: "SLIT SHEET 3 PCS 300 STITSH QUEEN",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-08-04"
  },
  {
    code: "20050",
    name: "SLIT SHEET 3 PCS 300 STITSH QUEEN",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-06-23"
  },
  {
    code: "19847",
    name: "SLIT SHEET 4 PCS 400 STITSH KING",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2023-07-06"
  },
  {
    code: "19847",
    name: "SLIT SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-05-23"
  },
  {
    code: "19847",
    name: "SLIT SHEET 4 PCS 400 STITSH KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "19847",
    name: "SLIT SHEET 4 PCS 400 STITSH KING",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-08-26"
  },
  {
    code: "19847",
    name: "SLIT SHEET 4 PCS 400 STITSH KING",
    mall: "39-Salam Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-27"
  },
  {
    code: "19847",
    name: "SLIT SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-12-08"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 2,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2025-03-14"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-02-10"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "22883",
    name: "SO SOFT OMBRE FROM IVORY TO DARK CRIMSON KING COMFORTER 3 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22802",
    name: "SO SOFT OMBRE FROM WHITE TO DARK GREY KING COMFORTER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-11-19"
  },
  {
    code: "15436",
    name: "SO-SOFT KING COMFORTER 3 PCS MIX",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-06-16"
  },
  {
    code: "15436",
    name: "SO-SOFT KING COMFORTER 3 PCS MIX",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-06-23"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-07"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 7,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "22676",
    name: "SO-SOFT OMBER FROM LIGHT PINK TO PINK F/Q COMFORTER 3 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "22885",
    name: "SO-SOFT OMBER FROM WHITE TO DARK GREY F/Q COMFORTER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "22885",
    name: "SO-SOFT OMBER FROM WHITE TO DARK GREY F/Q COMFORTER 3 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "22678",
    name: "SO-SOFT OMBER FROM WHITE TO YELLOW F/Q COMFORTER 3 PCS",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "22678",
    name: "SO-SOFT OMBER FROM WHITE TO YELLOW F/Q COMFORTER 3 PCS",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "22678",
    name: "SO-SOFT OMBER FROM WHITE TO YELLOW F/Q COMFORTER 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-02-21"
  },
  {
    code: "21454",
    name: "SOFTCELL LITE KING PILLOW",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-05-30"
  },
  {
    code: "21454",
    name: "SOFTCELL LITE KING PILLOW",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-01-06"
  },
  {
    code: "21454",
    name: "SOFTCELL LITE KING PILLOW",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-04-05"
  },
  {
    code: "22276",
    name: "SOILD S BAMBOO LAUDRY BASKET",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-15"
  },
  {
    code: "22915",
    name: "SOLID BLACK WM LEAK PROOF WATER BOTTEL 20 OZ",
    mall: "52-Al_Baha Mall",
    quantity: 5,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22915",
    name: "SOLID BLACK WM LEAK PROOF WATER BOTTEL 20 OZ",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "22922",
    name: "SOLID BLACK WM TUMBER WITH STRAW 24 OZ",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-07-30"
  },
  {
    code: "20557",
    name: "SOLID GREEN KING COMFORTER 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-10-23"
  },
  {
    code: "20557",
    name: "SOLID GREEN KING COMFORTER 3 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-06-26"
  },
  {
    code: "20557",
    name: "SOLID GREEN KING COMFORTER 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "23060",
    name: "SOLID NAVY WM TUMBER WITH STRAW 24 OZ",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-08-20"
  },
  {
    code: "23059",
    name: "SOLID PINK WM TUMBER WITH STRAW 24 OZ",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "22924",
    name: "SOLID WHITE WM TUMBER WITH STRAW 24 OZ",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-08-31"
  },
  {
    code: "22135",
    name: "SPATIAL KING COMFORTER 5 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "20355",
    name: "SPOONS BAG 18 PCS DC-003",
    mall: "19-Hail Othaim Mall",
    quantity: 4,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "20355",
    name: "SPOONS BAG 18 PCS DC-003",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-02-16"
  },
  {
    code: "20355",
    name: "SPOONS BAG 18 PCS DC-003",
    mall: "43-Mujan Park",
    quantity: 3,
    lastSaleDate: "2024-06-14"
  },
  {
    code: "20355",
    name: "SPOONS BAG 18 PCS DC-003",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-05"
  },
  {
    code: "20355",
    name: "SPOONS BAG 18 PCS DC-003",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-02"
  },
  {
    code: "20357",
    name: "SPOONS BAG 18 PCS DC-005",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "20357",
    name: "SPOONS BAG 18 PCS DC-005",
    mall: "43-Mujan Park",
    quantity: 6,
    lastSaleDate: "2024-05-02"
  },
  {
    code: "20357",
    name: "SPOONS BAG 18 PCS DC-005",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-02-25"
  },
  {
    code: "20361",
    name: "SPOONS BAG 18 PCS DC-009",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "20361",
    name: "SPOONS BAG 18 PCS DC-009",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-04"
  },
  {
    code: "20361",
    name: "SPOONS BAG 18 PCS DC-009",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2025-04-22"
  },
  {
    code: "20361",
    name: "SPOONS BAG 18 PCS DC-009",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-09-02"
  },
  {
    code: "20361",
    name: "SPOONS BAG 18 PCS DC-009",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-29"
  },
  {
    code: "20361",
    name: "SPOONS BAG 18 PCS DC-009",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "20361",
    name: "SPOONS BAG 18 PCS DC-009",
    mall: "52-Al_Baha Mall",
    quantity: 6,
    lastSaleDate: "2025-03-09"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "19-Hail Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "06-Red Sea Mall",
    quantity: 3,
    lastSaleDate: "2025-04-08"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "09-Al-Salam Mall",
    quantity: 10,
    lastSaleDate: "2023-09-30"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "11-Jouri Mall",
    quantity: 5,
    lastSaleDate: "2023-03-07"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "20-Sitten Street Makkah",
    quantity: 6,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2023-05-23"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-30"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "43-Mujan Park",
    quantity: 17,
    lastSaleDate: "2023-03-22"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2023-06-25"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2025-02-22"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "51-Park Avenue Riyadh",
    quantity: 8,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "52-Al_Baha Mall",
    quantity: 10,
    lastSaleDate: "2024-03-10"
  },
  {
    code: "20363",
    name: "SPOONS BAG 18 PCS GOLD DC-011",
    mall: "54-THE VILLAGE",
    quantity: 13,
    lastSaleDate: "2025-04-10"
  },
  {
    code: "20353",
    name: "SPOONS BAG 18 PCS SILVER DC-001",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "20353",
    name: "SPOONS BAG 18 PCS SILVER DC-001",
    mall: "11-Jouri Mall",
    quantity: 6,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "20353",
    name: "SPOONS BAG 18 PCS SILVER DC-001",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-20"
  },
  {
    code: "20353",
    name: "SPOONS BAG 18 PCS SILVER DC-001",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "20353",
    name: "SPOONS BAG 18 PCS SILVER DC-001",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2022-09-10"
  },
  {
    code: "20353",
    name: "SPOONS BAG 18 PCS SILVER DC-001",
    mall: "47-Al-Nakheel Plaza",
    quantity: 5,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "20353",
    name: "SPOONS BAG 18 PCS SILVER DC-001",
    mall: "52-Al_Baha Mall",
    quantity: 9,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20356",
    name: "SPOONS BAG 30 PCS DC-004",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2024-06-18"
  },
  {
    code: "20356",
    name: "SPOONS BAG 30 PCS DC-004",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-01"
  },
  {
    code: "20358",
    name: "SPOONS BAG 30 PCS DC-006",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2024-03-21"
  },
  {
    code: "20362",
    name: "SPOONS BAG 30 PCS DC-010",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-06-26"
  },
  {
    code: "20362",
    name: "SPOONS BAG 30 PCS DC-010",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "20362",
    name: "SPOONS BAG 30 PCS DC-010",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2025-02-14"
  },
  {
    code: "20362",
    name: "SPOONS BAG 30 PCS DC-010",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20360",
    name: "SPOONS BAG 30 PCS GOLD DC-008",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-03-13"
  },
  {
    code: "20360",
    name: "SPOONS BAG 30 PCS GOLD DC-008",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2022-10-30"
  },
  {
    code: "20360",
    name: "SPOONS BAG 30 PCS GOLD DC-008",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-24"
  },
  {
    code: "20360",
    name: "SPOONS BAG 30 PCS GOLD DC-008",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-02-28"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "09-Al-Salam Mall",
    quantity: 2,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-06-08"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 9,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-11-15"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-01-24"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-02-01"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "43-Mujan Park",
    quantity: 5,
    lastSaleDate: "2025-02-12"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2023-02-22"
  },
  {
    code: "20364",
    name: "SPOONS BAG 30 PCS GOLD DC-012",
    mall: "52-Al_Baha Mall",
    quantity: 5,
    lastSaleDate: "2022-10-24"
  },
  {
    code: "20354",
    name: "SPOONS BAG 30 PCS SILVER DC-002",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-01-07"
  },
  {
    code: "20354",
    name: "SPOONS BAG 30 PCS SILVER DC-002",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-12-21"
  },
  {
    code: "20354",
    name: "SPOONS BAG 30 PCS SILVER DC-002",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "20354",
    name: "SPOONS BAG 30 PCS SILVER DC-002",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-09-01"
  },
  {
    code: "20781",
    name: "SPRAY CHERRY FRESHENER COCODOR 500 ML ROOM 2",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2023-09-13"
  },
  {
    code: "14422",
    name: "SQUARE TOWELS AIR-RICH BLUE HAZE",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2022-09-21"
  },
  {
    code: "12392",
    name: "SQUARE TOWELS AIR-RICH BURGUNDY",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "12392",
    name: "SQUARE TOWELS AIR-RICH BURGUNDY",
    mall: "53-Al Basateen Mall",
    quantity: 14,
    lastSaleDate: "2025-03-24"
  },
  {
    code: "21678",
    name: "SQUISHMALLOW TOY-BULL",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-23"
  },
  {
    code: "21679",
    name: "SQUISHMALLOW TOY-DOG",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-03-30"
  },
  {
    code: "21671",
    name: "SQUISHMALLOW TOY-FROG",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-09-15"
  },
  {
    code: "21669",
    name: "SQUISHMALLOW TOY-SUMMER BUTTERFLY",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-18"
  },
  {
    code: "17003",
    name: "ST.BLUE SHEET(QUEEN) SET 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 13,
    lastSaleDate: "2023-09-29"
  },
  {
    code: "17003",
    name: "ST.BLUE SHEET(QUEEN) SET 3PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 23,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "17003",
    name: "ST.BLUE SHEET(QUEEN) SET 3PCS",
    mall: "44-Al-Jouf Center",
    quantity: 9,
    lastSaleDate: "2023-09-13"
  },
  {
    code: "17003",
    name: "ST.BLUE SHEET(QUEEN) SET 3PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-03-17"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "13-Al-Yasmin Mall",
    quantity: 1,
    lastSaleDate: "2024-03-09"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-29"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-14"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "52-Al_Baha Mall",
    quantity: 4,
    lastSaleDate: "2024-10-06"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-02-18"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-09-26"
  },
  {
    code: "22520",
    name: "STAR KIDS HOODED TOWEL BATH ROBE",
    mall: "23-Alia Mall Madinah",
    quantity: 8,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "22165",
    name: "STARFISH DUO TOTE BAG BEACH",
    mall: "15-Riyadh Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "22165",
    name: "STARFISH DUO TOTE BAG BEACH",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2024-06-27"
  },
  {
    code: "22165",
    name: "STARFISH DUO TOTE BAG BEACH",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-02-02"
  },
  {
    code: "22165",
    name: "STARFISH DUO TOTE BAG BEACH",
    mall: "52-Al_Baha Mall",
    quantity: 12,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "19848",
    name: "STERLING SHEET 4 PCS 400 STITSH KING",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-10-22"
  },
  {
    code: "19848",
    name: "STERLING SHEET 4 PCS 400 STITSH KING",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-26"
  },
  {
    code: "19848",
    name: "STERLING SHEET 4 PCS 400 STITSH KING",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-09-24"
  },
  {
    code: "13680",
    name: "STNWSHED CORAL KING COMFORTER 3 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2025-02-20"
  },
  {
    code: "21877",
    name: "STONE DYED KING SHEET SET 4 PCS",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2024-11-28"
  },
  {
    code: "21877",
    name: "STONE DYED KING SHEET SET 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-08-05"
  },
  {
    code: "21877",
    name: "STONE DYED KING SHEET SET 4 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-11-29"
  },
  {
    code: "21877",
    name: "STONE DYED KING SHEET SET 4 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 3,
    lastSaleDate: "2024-03-30"
  },
  {
    code: "22513",
    name: "STRAW DOORMAT HOME 45*75 CM",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-09"
  },
  {
    code: "22889",
    name: "STRAWBERRY KIDS HOODED TOWEL BATH ROBE",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-09-02"
  },
  {
    code: "16999",
    name: "STRILLING BLUE SHEET ( FULL ) SET 3PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 5,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "16999",
    name: "STRILLING BLUE SHEET ( FULL ) SET 3PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-05-26"
  },
  {
    code: "16999",
    name: "STRILLING BLUE SHEET ( FULL ) SET 3PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-12-29"
  },
  {
    code: "16999",
    name: "STRILLING BLUE SHEET ( FULL ) SET 3PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-12"
  },
  {
    code: "16999",
    name: "STRILLING BLUE SHEET ( FULL ) SET 3PCS",
    mall: "44-Al-Jouf Center",
    quantity: 11,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "16999",
    name: "STRILLING BLUE SHEET ( FULL ) SET 3PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "16999",
    name: "STRILLING BLUE SHEET ( FULL ) SET 3PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-04-29"
  },
  {
    code: "20555",
    name: "STRIPE BLUE KING COMFORTER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-11-30"
  },
  {
    code: "20555",
    name: "STRIPE BLUE KING COMFORTER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-28"
  },
  {
    code: "20555",
    name: "STRIPE BLUE KING COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "20552",
    name: "STRIPE BLUE TWIN COMFORTER 2 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "20552",
    name: "STRIPE BLUE TWIN COMFORTER 2 PCS",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-09-15"
  },
  {
    code: "20554",
    name: "STRIPE BLUSH KING COMFORTER 3 PCS",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-11-12"
  },
  {
    code: "20554",
    name: "STRIPE BLUSH KING COMFORTER 3 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-18"
  },
  {
    code: "17162",
    name: "SUGARY 1 PCS TB012-1C",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-10-08"
  },
  {
    code: "16954",
    name: "SUGARY GLASS SP483/BI",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 24,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2023-11-30"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-09-13"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-06-02"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2023-07-29"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-01-24"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-06-02"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-02-03"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-08-24"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-08-07"
  },
  {
    code: "20853",
    name: "SUNSET ROSE FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-05-24"
  },
  {
    code: "17184",
    name: "SUPER COOL KING COMFORTER PILLOW",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2021-11-19"
  },
  {
    code: "17481",
    name: "SUPER COOL KING MATRESPAD",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-23"
  },
  {
    code: "23259",
    name: "SUPER SOFT BEE AND FLORA PRINTED THROW",
    mall: "06-Red Sea Mall",
    quantity: 3,
    lastSaleDate: "2024-11-23"
  },
  {
    code: "23259",
    name: "SUPER SOFT BEE AND FLORA PRINTED THROW",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "23259",
    name: "SUPER SOFT BEE AND FLORA PRINTED THROW",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2025-03-26"
  },
  {
    code: "23259",
    name: "SUPER SOFT BEE AND FLORA PRINTED THROW",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2024-11-09"
  },
  {
    code: "22975",
    name: "SUPER SOFT BRAIDED ROPE GREY PRINTED THROW",
    mall: "08-Makkah Mall",
    quantity: 2,
    lastSaleDate: "2024-05-22"
  },
  {
    code: "23262",
    name: "SUPER SOFT BUTTERFLY AND FLORA PRINTED THROW",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "23262",
    name: "SUPER SOFT BUTTERFLY AND FLORA PRINTED THROW",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "22651",
    name: "SUPER SOFT BUTTERFLY PRINTED THROW",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-11-22"
  },
  {
    code: "22665",
    name: "SUPER SOFT CAT AND FLORA PRINTED THROW",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-01-25"
  },
  {
    code: "23266",
    name: "SUPER SOFT COLOURFUL SHELL PRINTED THROW",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-10-16"
  },
  {
    code: "23266",
    name: "SUPER SOFT COLOURFUL SHELL PRINTED THROW",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-11-28"
  },
  {
    code: "23265",
    name: "SUPER SOFT GAMING PRINTED THROW",
    mall: "04-Andalos Mall",
    quantity: 10,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "23265",
    name: "SUPER SOFT GAMING PRINTED THROW",
    mall: "06-Red Sea Mall",
    quantity: 5,
    lastSaleDate: "2024-11-24"
  },
  {
    code: "22969",
    name: "SUPER SOFT MOON & HEART PRINTED THROW",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "22663",
    name: "SUPER SOFT MOON PRINTED THROW",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-11-14"
  },
  {
    code: "22654",
    name: "SUPER SOFT MUSHROOM PRINTED THROW",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2025-01-28"
  },
  {
    code: "22654",
    name: "SUPER SOFT MUSHROOM PRINTED THROW",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22074",
    name: "SUPER SOFT RABBIT & SPRING PRINTED THROW",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-07-28"
  },
  {
    code: "22978",
    name: "SUPER SOFT SPACE & ROCKET PRINTED THROW",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2024-05-22"
  },
  {
    code: "23264",
    name: "SUPER SOFT SPACE AND DOGGY PRINTED THROW",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-10-01"
  },
  {
    code: "22973",
    name: "SUPER SOFT STRAWBERRY PRINTED THROW",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-06-24"
  },
  {
    code: "22652",
    name: "SUPER SOFT SUNSFLOWER PRINTED THROW",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-10-30"
  },
  {
    code: "22652",
    name: "SUPER SOFT SUNSFLOWER PRINTED THROW",
    mall: "54-THE VILLAGE",
    quantity: 1,
    lastSaleDate: "2024-10-29"
  },
  {
    code: "21410",
    name: "SUPER SOFT WATERCOLOR FLORA PRINTED THROW",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-05"
  },
  {
    code: "23263",
    name: "SUPER SOFT WATERCOLOR ROSE PRINTED THROW",
    mall: "06-Red Sea Mall",
    quantity: 4,
    lastSaleDate: "2024-11-15"
  },
  {
    code: "23335",
    name: "SYRIAN SILK PRAYER MIHRAB CARPET 2770",
    mall: "55- Jabl Omar",
    quantity: 10,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "20488",
    name: "T KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "20450",
    name: "T KITCHEN TOWEL IVORY 28*16",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-10-02"
  },
  {
    code: "20450",
    name: "T KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "20469",
    name: "T KITCHEN TOWEL WHITE 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "13506",
    name: "TAMARA KING COMFORTER 7 PCS",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2018-08-30"
  },
  {
    code: "15225",
    name: "TARA PLUM KING COMFORTER 8 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-04-01"
  },
  {
    code: "16997",
    name: "TAUPE SHEET ( FULL )SET 3PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-02-27"
  },
  {
    code: "16997",
    name: "TAUPE SHEET ( FULL )SET 3PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2025-04-24"
  },
  {
    code: "16797",
    name: "TEA AND COFFEE SET PORCELAIN GLASS 6029 GM",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-04-07"
  },
  {
    code: "22123",
    name: "TEA CUPS SET 6 PCS B-55411/GB",
    mall: "51-Park Avenue Riyadh",
    quantity: 6,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "21484",
    name: "TEAL S/M ROBE FEATHER YARN",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-11-08"
  },
  {
    code: "21484",
    name: "TEAL S/M ROBE FEATHER YARN",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-05-15"
  },
  {
    code: "21484",
    name: "TEAL S/M ROBE FEATHER YARN",
    mall: "45- Riyadh Gallery Mall",
    quantity: 3,
    lastSaleDate: "2024-10-19"
  },
  {
    code: "21484",
    name: "TEAL S/M ROBE FEATHER YARN",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 3,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2024-06-04"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-04-01"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 5,
    lastSaleDate: "2024-04-17"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 5,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "43-Mujan Park",
    quantity: 7,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-04-30"
  },
  {
    code: "22646",
    name: "TETBURY PRINTED DUVET COVER FULL 3 PCS",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-02-13"
  },
  {
    code: "20927",
    name: "TEXTURE LEAVES QUEEN COMFORTER 8 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-09"
  },
  {
    code: "20927",
    name: "TEXTURE LEAVES QUEEN COMFORTER 8 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-11-01"
  },
  {
    code: "20927",
    name: "TEXTURE LEAVES QUEEN COMFORTER 8 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-10-19"
  },
  {
    code: "20926",
    name: "TEXTURE LEAVES T/TXL COMFORTER 6 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-12-01"
  },
  {
    code: "20926",
    name: "TEXTURE LEAVES T/TXL COMFORTER 6 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-03"
  },
  {
    code: "20926",
    name: "TEXTURE LEAVES T/TXL COMFORTER 6 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-19"
  },
  {
    code: "20926",
    name: "TEXTURE LEAVES T/TXL COMFORTER 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2024-08-28"
  },
  {
    code: "20926",
    name: "TEXTURE LEAVES T/TXL COMFORTER 6 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2023-06-22"
  },
  {
    code: "21017",
    name: "TH LANTANA BLUSH FULL COMFORTER 7 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-10-25"
  },
  {
    code: "19236",
    name: "THAMES WHITE KING DUVET COVER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-27"
  },
  {
    code: "21892",
    name: "THERMOS 1 LITTER",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2023-08-03"
  },
  {
    code: "21892",
    name: "THERMOS 1 LITTER",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2023-11-04"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-03-30"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-11-13"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "25-Rabwa Othaim Mall",
    quantity: 6,
    lastSaleDate: "2024-08-07"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-11-13"
  },
  {
    code: "20664",
    name: "THROW CHENILLE 50X60",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-10-17"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-03-08"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "30-Tala Mall Riyadh",
    quantity: 3,
    lastSaleDate: "2024-09-16"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "36-Al jubail Mall",
    quantity: 5,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-12-06"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-01-16"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-12-02"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "49-AlAhsa Mall",
    quantity: 3,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "20997",
    name: "THROW CHENILLE CHUNKY WHITE",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2024-09-13"
  },
  {
    code: "17228",
    name: "THROW COZY PLUSH WARP YELLOW",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2022-11-12"
  },
  {
    code: "21243",
    name: "THROW MOONBEAN LASERCUT RABBIT FUR",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-01-22"
  },
  {
    code: "21243",
    name: "THROW MOONBEAN LASERCUT RABBIT FUR",
    mall: "52-Al_Baha Mall",
    quantity: 3,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "21243",
    name: "THROW MOONBEAN LASERCUT RABBIT FUR",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "21067",
    name: "THROW PRINTED PLUSH 152X182 CM",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-04-11"
  },
  {
    code: "21067",
    name: "THROW PRINTED PLUSH 152X182 CM",
    mall: "48 - Jeddah Park",
    quantity: 2,
    lastSaleDate: "2024-12-22"
  },
  {
    code: "20931",
    name: "THROW PRINTED PLUSH WITH SHERPA",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-09"
  },
  {
    code: "20931",
    name: "THROW PRINTED PLUSH WITH SHERPA",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-01-19"
  },
  {
    code: "20931",
    name: "THROW PRINTED PLUSH WITH SHERPA",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2024-02-21"
  },
  {
    code: "20931",
    name: "THROW PRINTED PLUSH WITH SHERPA",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "20931",
    name: "THROW PRINTED PLUSH WITH SHERPA",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-02-03"
  },
  {
    code: "22929",
    name: "THROW SLEEP DAWN COZY 130*160 CM SILVER",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-07"
  },
  {
    code: "22929",
    name: "THROW SLEEP DAWN COZY 130*160 CM SILVER",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "22929",
    name: "THROW SLEEP DAWN COZY 130*160 CM SILVER",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-07-31"
  },
  {
    code: "21239",
    name: "THROW SMOKE LASERCUT RABBIT FUR",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-07-02"
  },
  {
    code: "21240",
    name: "THROW STRING LASERCUT RABBIT FUR",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 2,
    lastSaleDate: "2025-01-15"
  },
  {
    code: "21240",
    name: "THROW STRING LASERCUT RABBIT FUR",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-11-28"
  },
  {
    code: "21240",
    name: "THROW STRING LASERCUT RABBIT FUR",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-02-02"
  },
  {
    code: "21569",
    name: "TIE-DYE BIGONE WINTER TWIN COMFORTER 1 PCS",
    mall: "50-Meem Plaza Riyadh",
    quantity: 2,
    lastSaleDate: "2023-01-25"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "07-Arab Mall",
    quantity: 2,
    lastSaleDate: "2025-03-19"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2022-07-25"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-07-26"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2022-07-27"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-01-26"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "43-Mujan Park",
    quantity: 12,
    lastSaleDate: "2023-07-17"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2024-12-21"
  },
  {
    code: "19514",
    name: "TITANIUM WAFFLE PIPING S/M",
    mall: "49-AlAhsa Mall",
    quantity: 2,
    lastSaleDate: "2022-09-14"
  },
  {
    code: "17533",
    name: "TITUS BLACK WHITE 5 PCS ACCESS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2023-05-05"
  },
  {
    code: "17533",
    name: "TITUS BLACK WHITE 5 PCS ACCESS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-06-03"
  },
  {
    code: "17533",
    name: "TITUS BLACK WHITE 5 PCS ACCESS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-01-11"
  },
  {
    code: "17533",
    name: "TITUS BLACK WHITE 5 PCS ACCESS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2022-03-26"
  },
  {
    code: "17533",
    name: "TITUS BLACK WHITE 5 PCS ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-06-16"
  },
  {
    code: "17533",
    name: "TITUS BLACK WHITE 5 PCS ACCESS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-07-03"
  },
  {
    code: "16409",
    name: "TOTEM DARK GREY KING QUILT 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "16409",
    name: "TOTEM DARK GREY KING QUILT 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "16410",
    name: "TOTEM IVORY KING QUILT 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2020-09-28"
  },
  {
    code: "10528",
    name: "TOWEL 3 PCS MTARAZ",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2025-03-10"
  },
  {
    code: "10528",
    name: "TOWEL 3 PCS MTARAZ",
    mall: "47-Al-Nakheel Plaza",
    quantity: 4,
    lastSaleDate: "2023-10-07"
  },
  {
    code: "10528",
    name: "TOWEL 3 PCS MTARAZ",
    mall: "51-Park Avenue Riyadh",
    quantity: 5,
    lastSaleDate: "2024-02-06"
  },
  {
    code: "10528",
    name: "TOWEL 3 PCS MTARAZ",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-10-08"
  },
  {
    code: "10528",
    name: "TOWEL 3 PCS MTARAZ",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-09-09"
  },
  {
    code: "10528",
    name: "TOWEL 3 PCS MTARAZ",
    mall: "14-Al Kamal Mall",
    quantity: 4,
    lastSaleDate: "2021-11-05"
  },
  {
    code: "10528",
    name: "TOWEL 3 PCS MTARAZ",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2021-05-11"
  },
  {
    code: "21328",
    name: "TOWEL SET MASC 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-11-01"
  },
  {
    code: "21328",
    name: "TOWEL SET MASC 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2023-01-31"
  },
  {
    code: "13248",
    name: "TOWEL SKIRT AND HEAD CAP IVORY",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2021-07-22"
  },
  {
    code: "13248",
    name: "TOWEL SKIRT AND HEAD CAP IVORY",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2023-12-30"
  },
  {
    code: "13250",
    name: "TOWEL SKIRT AND HEAD CAP LINEN",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2023-04-08"
  },
  {
    code: "13258",
    name: "TOWEL SKIRT AND HEAD CAP METAL",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2021-04-23"
  },
  {
    code: "13257",
    name: "TOWEL SKIRT AND HEAD CAP TERQUAZ",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-08-30"
  },
  {
    code: "13257",
    name: "TOWEL SKIRT AND HEAD CAP TERQUAZ",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "13697",
    name: "TOWELS SET 3 PCS IVORY 1",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 4,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "13698",
    name: "TOWELS SET 3 PCS IVORY 2",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-06-20"
  },
  {
    code: "13698",
    name: "TOWELS SET 3 PCS IVORY 2",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2024-06-03"
  },
  {
    code: "13884",
    name: "TOWELS SHAHI WAVES #39",
    mall: "15-Riyadh Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "23757",
    name: "TOYS ARABIC AND ENGLISH LEARNING TABLE 889-2",
    mall: "55- Jabl Omar",
    quantity: 11,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "23742",
    name: "TOYS BLENDER YH129-6B",
    mall: "55- Jabl Omar",
    quantity: 12,
    lastSaleDate: "2025-05-03"
  },
  {
    code: "23763",
    name: "TOYS BLOCK SMALL 601",
    mall: "55- Jabl Omar",
    quantity: 23,
    lastSaleDate: "2025-04-22"
  },
  {
    code: "23755",
    name: "TOYS BUTTERFLY DRONE CV8818-84",
    mall: "55- Jabl Omar",
    quantity: 19,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "23762",
    name: "TOYS CLAY BEADS",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "23749",
    name: "TOYS CLAY BUCKET TK383/348 (24PCS)",
    mall: "55- Jabl Omar",
    quantity: 6,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "23750",
    name: "TOYS CLAY BUCKET TK383/K5094 (36PCS)",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "23746",
    name: "TOYS DOLL HOUSEWIFE JX300-34",
    mall: "55- Jabl Omar",
    quantity: 8,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "23764",
    name: "TOYS ENGINEERING VEHICLE 9947-10",
    mall: "55- Jabl Omar",
    quantity: 18,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "23748",
    name: "TOYS FASHIN DOLL WITH TROJAN HORSE JX300-10",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-05-09"
  },
  {
    code: "23751",
    name: "TOYS FRUITS PAIRING HE0290",
    mall: "55- Jabl Omar",
    quantity: 10,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "23738",
    name: "TOYS HUILI CAR 10 PCS KZ957-000",
    mall: "55- Jabl Omar",
    quantity: 6,
    lastSaleDate: "2025-04-11"
  },
  {
    code: "23736",
    name: "TOYS JUNGLE ANIMALS YS714-5",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "23765",
    name: "TOYS KITCHEN TOOLS CLAY SET SM8075E",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "23771",
    name: "TOYS MACHINE TRAIN D400-24",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-04-17"
  },
  {
    code: "23774",
    name: "TOYS MAGNETIC SLATE NEW 1974-2/909",
    mall: "55- Jabl Omar",
    quantity: 12,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23766",
    name: "TOYS PLAY DOUGH CLAY 9 PCS ULBA 5838-196",
    mall: "55- Jabl Omar",
    quantity: 19,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "23768",
    name: "TOYS POLICE CAR D500-07",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "23739",
    name: "TOYS POLICE RACING CAR 9814-3C",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23740",
    name: "TOYS RACING CAR 9816-1",
    mall: "55- Jabl Omar",
    quantity: 8,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "23744",
    name: "TOYS SPORTS CAR 9050-1E",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "23769",
    name: "TOYS SPORTS CAR D500",
    mall: "55- Jabl Omar",
    quantity: 7,
    lastSaleDate: "2025-05-06"
  },
  {
    code: "23753",
    name: "TOYS WRITING TABLET 10.5 INCH 8851/8850",
    mall: "55- Jabl Omar",
    quantity: 10,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "23754",
    name: "TOYS WRITING TABLET 8.5 INCH 8802",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-05-07"
  },
  {
    code: "20611",
    name: "TRAYS SET 3 PCS STEEL T1271/1S",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2023-07-01"
  },
  {
    code: "19944",
    name: "TRELLIS GREY POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-09-08"
  },
  {
    code: "19944",
    name: "TRELLIS GREY POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2023-07-08"
  },
  {
    code: "19944",
    name: "TRELLIS GREY POLYSTER PRINTED KING SHEET 6 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "23017",
    name: "TROLLY BAG SIZE 24",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2024-07-03"
  },
  {
    code: "23018",
    name: "TROLLY BAG SIZE 28",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2024-06-07"
  },
  {
    code: "21680",
    name: "TUAL BATH ROBE BRIDE CREAM-CREAM 7 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-04-16"
  },
  {
    code: "23341",
    name: "TURKISH CHANEL PRINTED FOAM PRAYER RUG 3049",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-03-21"
  },
  {
    code: "19896",
    name: "TURKISH COFFE CUPS SET TX01A",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2022-11-25"
  },
  {
    code: "19895",
    name: "TURKISH COFFE CUPS SET TX01C",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2023-10-15"
  },
  {
    code: "19728",
    name: "TURKISH COFFE SET WITH GOLDEN PATTERN",
    mall: "05-Haifa Mall",
    quantity: 1,
    lastSaleDate: "2022-09-15"
  },
  {
    code: "19248",
    name: "TURKISH COFFEE CUPS 1567P-21ST-12",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-06-27"
  },
  {
    code: "19249",
    name: "TURKISH COFFEE CUPS 15S-21ST-12",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-31"
  },
  {
    code: "19250",
    name: "TURKISH COFFEE CUPS 919-21ST-12",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "19250",
    name: "TURKISH COFFEE CUPS 919-21ST-12",
    mall: "47-Al-Nakheel Plaza",
    quantity: 2,
    lastSaleDate: "2025-05-05"
  },
  {
    code: "19251",
    name: "TURKISH COFFEE CUPS 919P-21ST-12",
    mall: "30-Tala Mall Riyadh",
    quantity: 8,
    lastSaleDate: "2022-07-13"
  },
  {
    code: "16567",
    name: "TURKISH COFFEE PORCELAIN PINK COLOR XC1-C",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "23340",
    name: "TURKISH SILK FOAM PRAYER RUG 3047",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-01-24"
  },
  {
    code: "17562",
    name: "TURQUISE DASHSUND STP 91*183 CM MSH BEACH TOWEL",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2024-06-25"
  },
  {
    code: "17562",
    name: "TURQUISE DASHSUND STP 91*183 CM MSH BEACH TOWEL",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2025-03-01"
  },
  {
    code: "17564",
    name: "TURQUISE RUGBY STP 91*183 CM MSH BEACH TOWEL",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2023-10-07"
  },
  {
    code: "21927",
    name: "TWIN SHARPER IMAGE MATRESS PAD",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "12755",
    name: "TYPCE WOOD WT27",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2018-05-25"
  },
  {
    code: "18883",
    name: "ULTRA LUXURY HIGERISE 100% COTON BLANKET",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-04-19"
  },
  {
    code: "18882",
    name: "ULTRA LUXURY SEAFOAM 100% COTON BLANKET",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "18882",
    name: "ULTRA LUXURY SEAFOAM 100% COTON BLANKET",
    mall: "36-Al jubail Mall",
    quantity: 2,
    lastSaleDate: "2023-09-21"
  },
  {
    code: "18882",
    name: "ULTRA LUXURY SEAFOAM 100% COTON BLANKET",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-08-28"
  },
  {
    code: "18882",
    name: "ULTRA LUXURY SEAFOAM 100% COTON BLANKET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 3,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "18879",
    name: "ULTRA LUXURY TAUPE 100% COTON BLANKET",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2025-02-16"
  },
  {
    code: "18878",
    name: "ULTRA LUXURY WHITE 100% COTON BLANKET",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "18878",
    name: "ULTRA LUXURY WHITE 100% COTON BLANKET",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2023-11-08"
  },
  {
    code: "18878",
    name: "ULTRA LUXURY WHITE 100% COTON BLANKET",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2025-03-15"
  },
  {
    code: "18878",
    name: "ULTRA LUXURY WHITE 100% COTON BLANKET",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2025-05-01"
  },
  {
    code: "22892",
    name: "UNICORN 3 KIDS HOODED TOWEL BATH ROBE",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "22892",
    name: "UNICORN 3 KIDS HOODED TOWEL BATH ROBE",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "22892",
    name: "UNICORN 3 KIDS HOODED TOWEL BATH ROBE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-17"
  },
  {
    code: "22892",
    name: "UNICORN 3 KIDS HOODED TOWEL BATH ROBE",
    mall: "36-Al jubail Mall",
    quantity: 3,
    lastSaleDate: "2024-09-30"
  },
  {
    code: "22892",
    name: "UNICORN 3 KIDS HOODED TOWEL BATH ROBE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-08-02"
  },
  {
    code: "22892",
    name: "UNICORN 3 KIDS HOODED TOWEL BATH ROBE",
    mall: "42-Dareen Mall Dammam",
    quantity: 2,
    lastSaleDate: "2024-09-07"
  },
  {
    code: "22892",
    name: "UNICORN 3 KIDS HOODED TOWEL BATH ROBE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "19473",
    name: "UNICORN LAVANDER TWIN COMFORTER 2 PCS",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2025-03-16"
  },
  {
    code: "19563",
    name: "UNICORN N KIDS HOODED TOWEL BATH ROBE",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-08"
  },
  {
    code: "19563",
    name: "UNICORN N KIDS HOODED TOWEL BATH ROBE",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-09-17"
  },
  {
    code: "19563",
    name: "UNICORN N KIDS HOODED TOWEL BATH ROBE",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-06-08"
  },
  {
    code: "19563",
    name: "UNICORN N KIDS HOODED TOWEL BATH ROBE",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-10-05"
  },
  {
    code: "19563",
    name: "UNICORN N KIDS HOODED TOWEL BATH ROBE",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "19562",
    name: "UNICORN PINK KIDS HOODED TOWEL BATH ROBE",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2021-11-13"
  },
  {
    code: "22064",
    name: "UNICORN PRINTED THROW KIDS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-08-14"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-03-29"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-06-16"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 3,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-06-07"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 4,
    lastSaleDate: "2024-02-10"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-06-02"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-24"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 2,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-05-23"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 2,
    lastSaleDate: "2024-06-03"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-03-29"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "24-Yanbu Dana Mall",
    quantity: 2,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-06-30"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "30-Tala Mall Riyadh",
    quantity: 4,
    lastSaleDate: "2024-11-04"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-09-05"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-04-02"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2024-04-17"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-05-12"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-29"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2024-06-06"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-03-28"
  },
  {
    code: "20845",
    name: "VANILLA & SANDAL WOOD FRESHENER WHITE 200 ML",
    mall: "54-THE VILLAGE",
    quantity: 3,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "14052",
    name: "VELVET MAT SMALL SIZE IVORY WAVES",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-03-25"
  },
  {
    code: "21715",
    name: "VICTORIA TURKISH COFFEE SET 6 PCS 90 ML CS-020",
    mall: "30-Tala Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-12-03"
  },
  {
    code: "23014",
    name: "VIOLANTE MULTI KING COMFORTER 8 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-05-16"
  },
  {
    code: "21486",
    name: "VIOLET S/M ROBE FEATHER YARN",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2023-08-17"
  },
  {
    code: "21486",
    name: "VIOLET S/M ROBE FEATHER YARN",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "21486",
    name: "VIOLET S/M ROBE FEATHER YARN",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-06-21"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "24-Yanbu Dana Mall",
    quantity: 5,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "11-Jouri Mall",
    quantity: 9,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "13-Al-Yasmin Mall",
    quantity: 2,
    lastSaleDate: "2023-08-10"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "14-Al Kamal Mall",
    quantity: 16,
    lastSaleDate: "2025-04-20"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "16-Ehsa Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-04-12"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "19-Hail Othaim Mall",
    quantity: 7,
    lastSaleDate: "2024-04-07"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 20,
    lastSaleDate: "2025-05-02"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-12-05"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 2,
    lastSaleDate: "2025-04-15"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-12"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-04-14"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "39-Salam Mall Riyadh",
    quantity: 10,
    lastSaleDate: "2024-10-01"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "42-Dareen Mall Dammam",
    quantity: 5,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "43-Mujan Park",
    quantity: 8,
    lastSaleDate: "2025-04-13"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-02-09"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "48 - Jeddah Park",
    quantity: 9,
    lastSaleDate: "2025-05-04"
  },
  {
    code: "14285",
    name: "VIOLET SKY WAVE MAT SIZ 51*86",
    mall: "49-AlAhsa Mall",
    quantity: 4,
    lastSaleDate: "2025-02-08"
  },
  {
    code: "21491",
    name: "VIOLET XL/L ROBE FEATHER YARN",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2023-12-20"
  },
  {
    code: "21491",
    name: "VIOLET XL/L ROBE FEATHER YARN",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-16"
  },
  {
    code: "20484",
    name: "W KITCHEN TOWEL GREY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-07-23"
  },
  {
    code: "20446",
    name: "W KITCHEN TOWEL IVORY 28*16",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-09-22"
  },
  {
    code: "20446",
    name: "W KITCHEN TOWEL IVORY 28*16",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "20446",
    name: "W KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2024-08-18"
  },
  {
    code: "20446",
    name: "W KITCHEN TOWEL IVORY 28*16",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2024-09-11"
  },
  {
    code: "20465",
    name: "W KITCHEN TOWEL WHITE 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-06"
  },
  {
    code: "20465",
    name: "W KITCHEN TOWEL WHITE 28*16",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-04"
  },
  {
    code: "17686",
    name: "WAMSUTTA FIBERBED 300TC MTRESPAD",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2022-09-12"
  },
  {
    code: "17686",
    name: "WAMSUTTA FIBERBED 300TC MTRESPAD",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2023-06-19"
  },
  {
    code: "17686",
    name: "WAMSUTTA FIBERBED 300TC MTRESPAD",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2022-06-21"
  },
  {
    code: "17686",
    name: "WAMSUTTA FIBERBED 300TC MTRESPAD",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-07-12"
  },
  {
    code: "12899",
    name: "WATER CUP 3 PCS M57890",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2020-05-10"
  },
  {
    code: "13595",
    name: "WATER CUPS 6 PCS 52752",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 8,
    lastSaleDate: "2020-06-27"
  },
  {
    code: "13598",
    name: "WATER CUPS BLACK FLOWER 6 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2020-01-30"
  },
  {
    code: "22529",
    name: "WATER MALON KIDS HOODED TOWEL BATH ROBE",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "17914",
    name: "WATERCOLOR FLORAL ORANGE PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "17914",
    name: "WATERCOLOR FLORAL ORANGE PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2024-01-09"
  },
  {
    code: "17914",
    name: "WATERCOLOR FLORAL ORANGE PRINTED WINTER KING COMFORTER 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "17700",
    name: "WATERCOLOR ROSE PRINTED WINTER FULL COMFORTER 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2021-12-05"
  },
  {
    code: "20517",
    name: "WATERCOLOR STRIPE OMBRE RUST PRINTED FULL COMFORTER 3 PCS",
    mall: "06-Red Sea Mall",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "20521",
    name: "WATERCOLOR STRIPE OMBRE RUST PRINTED KING COMFORTER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 3,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "20521",
    name: "WATERCOLOR STRIPE OMBRE RUST PRINTED KING COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-10"
  },
  {
    code: "20521",
    name: "WATERCOLOR STRIPE OMBRE RUST PRINTED KING COMFORTER 3 PCS",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "20521",
    name: "WATERCOLOR STRIPE OMBRE RUST PRINTED KING COMFORTER 3 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-12-19"
  },
  {
    code: "20521",
    name: "WATERCOLOR STRIPE OMBRE RUST PRINTED KING COMFORTER 3 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-13"
  },
  {
    code: "11009",
    name: "WATERFALL LILAC FULL 9 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2019-04-15"
  },
  {
    code: "22141",
    name: "WAVERLY GIANNIA MULTI FUSHIA KING COMFORTER 10 PCS",
    mall: "29-Al Nakheel Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-03-08"
  },
  {
    code: "21069",
    name: "WAVERLY GIIULIETTA PURPLE KING COMFORTER 10 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-03-02"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-07-04"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2021-11-29"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-04-29"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "28-Al Nakheel Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-08-31"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-04-11"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-11-02"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2022-01-25"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "42-Dareen Mall Dammam",
    quantity: 3,
    lastSaleDate: "2022-06-11"
  },
  {
    code: "19676",
    name: "WAVES 5 PCS ACCESS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2023-07-03"
  },
  {
    code: "20631",
    name: "WHITE HOTEL CROSSILL 1A KING DUVET COVER 3 PCS",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2023-04-18"
  },
  {
    code: "20634",
    name: "WHITE HOTEL CROSSILL 2A KING DUVET COVER 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2022-11-25"
  },
  {
    code: "20851",
    name: "WHITE JASMINE FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-09-07"
  },
  {
    code: "20851",
    name: "WHITE JASMINE FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 1,
    lastSaleDate: "2024-04-11"
  },
  {
    code: "20851",
    name: "WHITE JASMINE FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 6,
    lastSaleDate: "2023-11-27"
  },
  {
    code: "20851",
    name: "WHITE JASMINE FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-10-19"
  },
  {
    code: "20851",
    name: "WHITE JASMINE FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2023-10-23"
  },
  {
    code: "20851",
    name: "WHITE JASMINE FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-04-09"
  },
  {
    code: "20851",
    name: "WHITE JASMINE FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-06-15"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-03-13"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "53-Al Basateen Mall",
    quantity: 1,
    lastSaleDate: "2024-04-06"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "08-Makkah Mall",
    quantity: 5,
    lastSaleDate: "2024-09-27"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "11-Jouri Mall",
    quantity: 1,
    lastSaleDate: "2024-07-07"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "17-Arar Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-09-08"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "18-Al_Khayyat Center",
    quantity: 1,
    lastSaleDate: "2024-07-01"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-07-11"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "20-Sitten Street Makkah",
    quantity: 3,
    lastSaleDate: "2024-07-11"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-05-09"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "22-Tabuk Park",
    quantity: 3,
    lastSaleDate: "2024-02-27"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "23-Alia Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-04-02"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-01-12"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2024-03-02"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2025-03-18"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "44-Al-Jouf Center",
    quantity: 2,
    lastSaleDate: "2024-06-12"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "52-Al_Baha Mall",
    quantity: 14,
    lastSaleDate: "2024-08-08"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "54-THE VILLAGE",
    quantity: 3,
    lastSaleDate: "2024-06-03"
  },
  {
    code: "20847",
    name: "WHITE MUSK FRESHENER WHITE 200 ML",
    mall: "55- Jabl Omar",
    quantity: 4,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2025-01-08"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "09-Al-Salam Mall",
    quantity: 1,
    lastSaleDate: "2024-07-01"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-03-06"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "20-Sitten Street Makkah",
    quantity: 1,
    lastSaleDate: "2024-06-10"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "25-Rabwa Othaim Mall",
    quantity: 10,
    lastSaleDate: "2024-09-23"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-04-26"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "36-Al jubail Mall",
    quantity: 1,
    lastSaleDate: "2025-01-04"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-12-24"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "40-Hayat Mall Riyad",
    quantity: 5,
    lastSaleDate: "2025-05-08"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "45- Riyadh Gallery Mall",
    quantity: 2,
    lastSaleDate: "2024-11-26"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "51-Park Avenue Riyadh",
    quantity: 3,
    lastSaleDate: "2025-03-05"
  },
  {
    code: "21485",
    name: "WHITE S/M ROBE FEATHER YARN",
    mall: "57-Sauq7",
    quantity: 1,
    lastSaleDate: "2024-05-03"
  },
  {
    code: "12370",
    name: "WHITE SHEET (QUEEN) SET  3PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2023-05-05"
  },
  {
    code: "22510",
    name: "WHITE STRAW DOORMAT WELCOME 45*75 CM",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-09-21"
  },
  {
    code: "22510",
    name: "WHITE STRAW DOORMAT WELCOME 45*75 CM",
    mall: "50-Meem Plaza Riyadh",
    quantity: 1,
    lastSaleDate: "2024-07-03"
  },
  {
    code: "21490",
    name: "WHITE XL/L ROBE FEATHER YARN",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "21456",
    name: "WILD DOVE BLANKET LUXURY SET KING 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-02-15"
  },
  {
    code: "21456",
    name: "WILD DOVE BLANKET LUXURY SET KING 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-03-25"
  },
  {
    code: "16548",
    name: "WINE VELVET QUILT KING 3 PCS",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2023-01-27"
  },
  {
    code: "16548",
    name: "WINE VELVET QUILT KING 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-03-27"
  },
  {
    code: "17674",
    name: "WINTER SHEET LINEN FULL 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 5,
    lastSaleDate: "2025-05-11"
  },
  {
    code: "17674",
    name: "WINTER SHEET LINEN FULL 2 PCS",
    mall: "16-Ehsa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "17674",
    name: "WINTER SHEET LINEN FULL 2 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2025-01-17"
  },
  {
    code: "18488",
    name: "WINTER SHEET LINEN KING 3 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-25"
  },
  {
    code: "18488",
    name: "WINTER SHEET LINEN KING 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "17595",
    name: "WINTER SHEET LINEN QUEEN 3 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 3,
    lastSaleDate: "2025-01-29"
  },
  {
    code: "17595",
    name: "WINTER SHEET LINEN QUEEN 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 3,
    lastSaleDate: "2025-04-25"
  },
  {
    code: "18486",
    name: "WINTER SHEET MARSHMALLOW KING 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-10-03"
  },
  {
    code: "18486",
    name: "WINTER SHEET MARSHMALLOW KING 3 PCS",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-07-25"
  },
  {
    code: "18486",
    name: "WINTER SHEET MARSHMALLOW KING 3 PCS",
    mall: "22-Tabuk Park",
    quantity: 1,
    lastSaleDate: "2024-05-31"
  },
  {
    code: "14814",
    name: "WINTER SHEET MARSHMALLOW VELVET FULL 2 PCS",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2020-08-11"
  },
  {
    code: "14049",
    name: "WINTER SHEET ROSE QUARTZ VELVET KING 4 PCS",
    mall: "17-Arar Othaim Mall",
    quantity: 2,
    lastSaleDate: "2021-02-16"
  },
  {
    code: "17675",
    name: "WINTER SHEET SILVER FULL 2 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 1,
    lastSaleDate: "2024-12-12"
  },
  {
    code: "17675",
    name: "WINTER SHEET SILVER FULL 2 PCS",
    mall: "11-Jouri Mall",
    quantity: 2,
    lastSaleDate: "2025-02-03"
  },
  {
    code: "17675",
    name: "WINTER SHEET SILVER FULL 2 PCS",
    mall: "46-Khaleej Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-07"
  },
  {
    code: "17675",
    name: "WINTER SHEET SILVER FULL 2 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-02-15"
  },
  {
    code: "17596",
    name: "WINTER SHEET SILVER QUEEN 3 PCS",
    mall: "44-Al-Jouf Center",
    quantity: 4,
    lastSaleDate: "2024-11-28"
  },
  {
    code: "22414",
    name: "WQ3 MADELINE DAMASK BLUE ART PRINTED KING COMFORTER 3 PCS",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-14"
  },
  {
    code: "22414",
    name: "WQ3 MADELINE DAMASK BLUE ART PRINTED KING COMFORTER 3 PCS",
    mall: "49-AlAhsa Mall",
    quantity: 1,
    lastSaleDate: "2024-12-04"
  },
  {
    code: "22414",
    name: "WQ3 MADELINE DAMASK BLUE ART PRINTED KING COMFORTER 3 PCS",
    mall: "51-Park Avenue Riyadh",
    quantity: 1,
    lastSaleDate: "2025-01-27"
  },
  {
    code: "20148",
    name: "WRAP C1 PLAID RED THROW",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2022-12-07"
  },
  {
    code: "20150",
    name: "WRAP C3  LEOPARD PRINT THROW",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2022-11-28"
  },
  {
    code: "20150",
    name: "WRAP C3  LEOPARD PRINT THROW",
    mall: "40-Hayat Mall Riyad",
    quantity: 3,
    lastSaleDate: "2024-12-18"
  },
  {
    code: "20150",
    name: "WRAP C3  LEOPARD PRINT THROW",
    mall: "47-Al-Nakheel Plaza",
    quantity: 3,
    lastSaleDate: "2022-12-01"
  },
  {
    code: "20150",
    name: "WRAP C3  LEOPARD PRINT THROW",
    mall: "52-Al_Baha Mall",
    quantity: 7,
    lastSaleDate: "2022-12-06"
  },
  {
    code: "20430",
    name: "XS LAVENDER SHAWL JACQUARD BATH ROBE",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2024-03-22"
  },
  {
    code: "20430",
    name: "XS LAVENDER SHAWL JACQUARD BATH ROBE",
    mall: "32-Atyaf Mall Riyadh",
    quantity: 2,
    lastSaleDate: "2024-04-17"
  },
  {
    code: "20427",
    name: "XS WHITE SHAWL JACQUARD BATH ROBE",
    mall: "42-Dareen Mall Dammam",
    quantity: 1,
    lastSaleDate: "2023-11-17"
  },
  {
    code: "20492",
    name: "Y KITCHEN TOWEL GREY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-03-04"
  },
  {
    code: "20454",
    name: "Y KITCHEN TOWEL IVORY 28*16",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2024-12-26"
  },
  {
    code: "20454",
    name: "Y KITCHEN TOWEL IVORY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-12-02"
  },
  {
    code: "20454",
    name: "Y KITCHEN TOWEL IVORY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-03-05"
  },
  {
    code: "20454",
    name: "Y KITCHEN TOWEL IVORY 28*16",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2025-01-12"
  },
  {
    code: "20473",
    name: "Y KITCHEN TOWEL WHITE 28*16",
    mall: "07-Arab Mall",
    quantity: 1,
    lastSaleDate: "2024-12-10"
  },
  {
    code: "20473",
    name: "Y KITCHEN TOWEL WHITE 28*16",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2022-12-28"
  },
  {
    code: "20473",
    name: "Y KITCHEN TOWEL WHITE 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2024-08-13"
  },
  {
    code: "22419",
    name: "YE8 WATERCOLOR CHEVRON MULTI PRINTED FULL COMFORTER 3 PCS",
    mall: "12-Al_Hamra Mall",
    quantity: 1,
    lastSaleDate: "2024-12-20"
  },
  {
    code: "22413",
    name: "YE8 WATERCOLOR CHEVRON MULTI PRINTED KING COMFORTER 3 PCS",
    mall: "52-Al_Baha Mall",
    quantity: 1,
    lastSaleDate: "2024-12-27"
  },
  {
    code: "22413",
    name: "YE8 WATERCOLOR CHEVRON MULTI PRINTED KING COMFORTER 3 PCS",
    mall: "56- Aziz Mall 2",
    quantity: 1,
    lastSaleDate: "2024-12-31"
  },
  {
    code: "22413",
    name: "YE8 WATERCOLOR CHEVRON MULTI PRINTED KING COMFORTER 3 PCS",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2024-12-05"
  },
  {
    code: "23791",
    name: "YH420 KIDS BAG",
    mall: "55- Jabl Omar",
    quantity: 3,
    lastSaleDate: "2025-03-31"
  },
  {
    code: "23793",
    name: "YH433 KIDS BAG",
    mall: "55- Jabl Omar",
    quantity: 2,
    lastSaleDate: "2025-03-29"
  },
  {
    code: "23792",
    name: "YH434 KIDS BAG",
    mall: "55- Jabl Omar",
    quantity: 1,
    lastSaleDate: "2025-04-18"
  },
  {
    code: "23922",
    name: "YUMURTA MEDIUM NKBY-170-3",
    mall: "55- Jabl Omar",
    quantity: 10,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "12583",
    name: "YVEET RED 3 PCS KING",
    mall: "14-Al Kamal Mall",
    quantity: 1,
    lastSaleDate: "2020-12-04"
  },
  {
    code: "20797",
    name: "YZ METALLIC BLUSH FULL COMFORTER 4 PCS",
    mall: "40-Hayat Mall Riyad",
    quantity: 2,
    lastSaleDate: "2024-02-05"
  },
  {
    code: "20797",
    name: "YZ METALLIC BLUSH FULL COMFORTER 4 PCS",
    mall: "45- Riyadh Gallery Mall",
    quantity: 1,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "20491",
    name: "Z KITCHEN TOWEL GREY 28*16",
    mall: "38-Al_Riyadh Park",
    quantity: 1,
    lastSaleDate: "2023-07-07"
  },
  {
    code: "20491",
    name: "Z KITCHEN TOWEL GREY 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 4,
    lastSaleDate: "2022-10-13"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-06-13"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 1,
    lastSaleDate: "2023-07-26"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 1,
    lastSaleDate: "2023-12-02"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "27-Dhahran Mall khobar",
    quantity: 1,
    lastSaleDate: "2023-12-27"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "30-Tala Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-11-06"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "40-Hayat Mall Riyad",
    quantity: 1,
    lastSaleDate: "2024-01-23"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "47-Al-Nakheel Plaza",
    quantity: 1,
    lastSaleDate: "2023-08-01"
  },
  {
    code: "20453",
    name: "Z KITCHEN TOWEL IVORY 28*16",
    mall: "56- Aziz Mall 2",
    quantity: 2,
    lastSaleDate: "2024-09-20"
  },
  {
    code: "20472",
    name: "Z KITCHEN TOWEL WHITE 28*16",
    mall: "25-Rabwa Othaim Mall",
    quantity: 2,
    lastSaleDate: "2023-08-08"
  },
  {
    code: "20472",
    name: "Z KITCHEN TOWEL WHITE 28*16",
    mall: "39-Salam Mall Riyadh",
    quantity: 1,
    lastSaleDate: "2024-01-24"
  },
  {
    code: "20472",
    name: "Z KITCHEN TOWEL WHITE 28*16",
    mall: "43-Mujan Park",
    quantity: 2,
    lastSaleDate: "2022-10-18"
  },
  {
    code: "20472",
    name: "Z KITCHEN TOWEL WHITE 28*16",
    mall: "50-Meem Plaza Riyadh",
    quantity: 3,
    lastSaleDate: "2022-12-21"
  },
  {
    code: "23927",
    name: "ZEMZEM KABELI ALTIN-103",
    mall: "55- Jabl Omar",
    quantity: 5,
    lastSaleDate: "2025-03-22"
  },
  {
    code: "22415",
    name: "ZM7 LARGR ABIGAIL FLORAL WHITE PRINTED KING COMFORTER 3 PCS",
    mall: "24-Yanbu Dana Mall",
    quantity: 1,
    lastSaleDate: "2024-06-01"
  },
  {
    code: "22415",
    name: "ZM7 LARGR ABIGAIL FLORAL WHITE PRINTED KING COMFORTER 3 PCS",
    mall: "15-Riyadh Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-06"
  },
  {
    code: "22415",
    name: "ZM7 LARGR ABIGAIL FLORAL WHITE PRINTED KING COMFORTER 3 PCS",
    mall: "43-Mujan Park",
    quantity: 1,
    lastSaleDate: "2024-12-11"
  },
  {
    code: "22415",
    name: "ZM7 LARGR ABIGAIL FLORAL WHITE PRINTED KING COMFORTER 3 PCS",
    mall: "19-Hail Othaim Mall",
    quantity: 1,
    lastSaleDate: "2025-01-02"
  },
  {
    code: "19237",
    name: "ZOLA KING DUVET COVER 3 PCS",
    mall: "14-Al Kamal Mall",
    quantity: 3,
    lastSaleDate: "2024-06-09"
  },
  {
    code: "21447",
    name: "ZUMBI 2 KIDS HOODED TOWEL BATH ROBE",
    mall: "07-Arab Mall",
    quantity: 4,
    lastSaleDate: "2024-10-04"
  },
  {
    code: "21447",
    name: "ZUMBI 2 KIDS HOODED TOWEL BATH ROBE",
    mall: "21-Abha Al_Rashid Mall New",
    quantity: 13,
    lastSaleDate: "2024-08-06"
  },
  {
    code: "21447",
    name: "ZUMBI 2 KIDS HOODED TOWEL BATH ROBE",
    mall: "26-Al-Noor Mall Madinah",
    quantity: 1,
    lastSaleDate: "2024-12-25"
  },
  {
    code: "21447",
    name: "ZUMBI 2 KIDS HOODED TOWEL BATH ROBE",
    mall: "48 - Jeddah Park",
    quantity: 1,
    lastSaleDate: "2024-08-05"
  },
  {
    code: "21447",
    name: "ZUMBI 2 KIDS HOODED TOWEL BATH ROBE",
    mall: "51-Park Avenue Riyadh",
    quantity: 2,
    lastSaleDate: "2024-07-11"
  },
];