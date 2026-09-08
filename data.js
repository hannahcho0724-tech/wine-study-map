const ZONES = {
  "beaujolais": {
    "n": 1,
    "name": "보졸레",
    "en": "Beaujolais",
    "country": "France",
    "flag": "🇫🇷",
    "group": "프랑스",
    "lat": "약 46°N",
    "core": "부르고뉴 남쪽, Saône 계곡 서쪽의 구릉지. 북부 Cru 지역이 더 높은 품질과 구조를 보이기 쉽다.",
    "climate": "온화한 대륙성. 남쪽으로 갈수록 조금 더 따뜻해지고, 빈티지에 따라 우박·서리 위험이 있다.",
    "influences": "화강암·편암질 구릉(특히 북부 Cru), 사면의 일조와 배수가 품질에 중요.",
    "grapes": [
      "Gamay"
    ],
    "reason": "Gamay + 비교적 따뜻한 구릉 → 밝은 붉은 과실·높은 산도·낮은~중간 탄닌. 반탄산/탄산침용을 쓰면 바나나·캔디·선명한 과실 향이 두드러질 수 있다.",
    "labels": [
      "Beaujolais",
      "Beaujolais-Villages",
      "Brouilly",
      "Fleurie",
      "Morgon",
      "Moulin-à-Vent",
      "Nouveau"
    ],
    "regions": [
      {
        "name": "Beaujolais / Beaujolais-Villages",
        "grapes": "Gamay",
        "style": "가볍고 과실 중심, 높은 산도, 낮은 탄닌.",
        "why": "평지/완만한 지역 비중이 높고 빠른 소비 스타일이 많음."
      },
      {
        "name": "Brouilly",
        "grapes": "Gamay",
        "style": "신선한 붉은 과실, 비교적 부드러운 Cru.",
        "why": "Cru Beaujolais 중 접근성 좋은 스타일."
      },
      {
        "name": "Fleurie",
        "grapes": "Gamay",
        "style": "꽃향, 딸기·라즈베리, 섬세한 탄닌.",
        "why": "화강암 구릉과 비교적 우아한 스타일로 연결."
      },
      {
        "name": "Morgon",
        "grapes": "Gamay",
        "style": "더 구조적이고 숙성 가능, 붉은·검은 과실.",
        "why": "농축도와 탄닌이 더 높아질 수 있음."
      },
      {
        "name": "Moulin-à-Vent",
        "grapes": "Gamay",
        "style": "Cru 중 강한 구조와 숙성 잠재력.",
        "why": "낮은 수확량과 구조적인 스타일로 기억."
      }
    ],
    "quiz": "라벨에 'Morgon'이 보일 때 품종과 예상 스타일을 설명해보세요.",
    "answer": "Morgon은 Beaujolais의 Cru이며 Gamay가 핵심입니다. 일반 Beaujolais보다 더 농축되고 구조적이며, 높은 산도와 비교적 뚜렷한 탄닌, 붉고 검은 과실을 예상할 수 있습니다.",
    "officialPlaces": [
      "Beaujolais",
      "Beaujolais Villages",
      "Brouilly",
      "Fleurie",
      "Morgon",
      "Moulin-à-Vent"
    ],
    "law": [
      "AOC",
      "Nouveau"
    ],
    "tasting": [
      "Beaujolais / Beaujolais Villages / Cru Beaujolais"
    ],
    "labelTip": "Cru 이름(Brouilly, Fleurie, Morgon, Moulin-à-Vent)이 보이면 'Beaujolais' 단어가 없어도 Gamay와 더 높은 품질·구조를 추론할 수 있습니다.",
    "syllabusCount": 6
  },
  "burgundy": {
    "n": 2,
    "name": "부르고뉴",
    "en": "Burgundy",
    "country": "France",
    "flag": "🇫🇷",
    "group": "프랑스",
    "lat": "약 47°N",
    "core": "프랑스 동부의 길고 좁은 산지. 포도밭의 사면·고도·토양 차이가 매우 짧은 거리에서도 품질과 스타일을 바꾼다.",
    "climate": "대륙성. 봄 서리, 우박, 여름 강우와 빈티지 변동이 핵심 위험.",
    "influences": "동·남동향 사면은 아침 햇빛을 받아 숙성을 돕고, 석회질+점토 토양의 비율과 배수가 중요.",
    "grapes": [
      "Pinot Noir",
      "Chardonnay"
    ],
    "reason": "서늘한 대륙성 + Pinot Noir/Chardonnay → 높은 산도와 섬세한 향. 좋은 사면/낮은 수확량/정교한 양조가 농축도와 숙성 잠재력을 높인다.",
    "labels": [
      "Bourgogne",
      "Chablis",
      "Gevrey-Chambertin",
      "Vosne-Romanée",
      "Nuits-Saint-Georges",
      "Pommard",
      "Volnay",
      "Meursault",
      "Puligny-Montrachet",
      "Chassagne-Montrachet",
      "Pouilly-Fuissé",
      "Premier Cru",
      "Grand Cru"
    ],
    "regions": [
      {
        "name": "Chablis",
        "grapes": "Chardonnay",
        "style": "높은 산도, 레몬·청사과, 가벼움~중간 바디.",
        "why": "부르고뉴 최북단의 서늘한 기후. Premier/Grand Cru는 더 농축되고 숙성 가능."
      },
      {
        "name": "Côte de Nuits – Gevrey-Chambertin",
        "grapes": "Pinot Noir",
        "style": "구조적, 붉은·검은 과실, 흙·향신료, 탄닌 뚜렷.",
        "why": "Côte de Nuits의 대표적인 힘 있는 Pinot Noir."
      },
      {
        "name": "Côte de Nuits – Vosne-Romanée",
        "grapes": "Pinot Noir",
        "style": "꽃·향신료·붉은 과실, 정교한 탄닌.",
        "why": "Grand Cru 밀집 지역으로 매우 높은 품질 잠재력."
      },
      {
        "name": "Côte de Nuits – Nuits-Saint-Georges",
        "grapes": "Pinot Noir",
        "style": "탄닌과 구조가 비교적 뚜렷, 숙성 가능.",
        "why": "마을 위치·사면에 따라 스타일 차이가 큼."
      },
      {
        "name": "Côte de Beaune – Pommard",
        "grapes": "Pinot Noir",
        "style": "Côte de Beaune 레드 중 비교적 힘 있고 탄닌감 있음.",
        "why": "Volnay보다 구조적인 대비로 기억."
      },
      {
        "name": "Côte de Beaune – Volnay",
        "grapes": "Pinot Noir",
        "style": "우아하고 향기로운 붉은 과실, 더 부드러운 탄닌.",
        "why": "Pommard와 대비."
      },
      {
        "name": "Côte de Beaune – Meursault",
        "grapes": "Chardonnay",
        "style": "핵과류·견과·버터/오크, 풍부한 질감.",
        "why": "농축된 드라이 Chardonnay의 대표 마을."
      },
      {
        "name": "Côte de Beaune – Puligny-Montrachet",
        "grapes": "Chardonnay",
        "style": "높은 산도, 시트러스·미네랄, 정교한 오크.",
        "why": "긴장감·정교함으로 기억."
      },
      {
        "name": "Côte de Beaune – Chassagne-Montrachet",
        "grapes": "Chardonnay + Pinot Noir",
        "style": "화이트는 풍부함과 구조, 일부 레드도 생산.",
        "why": "Montrachet 주변 핵심 마을."
      },
      {
        "name": "Mâconnais – Pouilly-Fuissé",
        "grapes": "Chardonnay",
        "style": "더 익은 사과·복숭아, 중간~풍부한 바디.",
        "why": "더 남쪽·따뜻한 위치."
      }
    ],
    "vineyards": [
      {
        "name": "Chablis Grand Crus: Les Clos, Vaudésir, Valmur, Grenouilles, Blanchot, Bougros, Les Preuses",
        "type": "DEEP DIVE",
        "area": "Chablis",
        "note": "개별 climat은 WSET Level 3 공식 지명 암기 범위를 넘는 심화. 라벨 이해용."
      },
      {
        "name": "Chambertin / Chambertin-Clos de Bèze",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Gevrey-Chambertin",
        "note": "Gevrey-Chambertin의 상징적 Grand Cru."
      },
      {
        "name": "Clos Saint-Denis / Clos de la Roche",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Morey-Saint-Denis",
        "note": "Côte de Nuits 대표 Grand Cru 예시."
      },
      {
        "name": "Bonnes-Mares",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Chambolle-Musigny / Morey-Saint-Denis",
        "note": "두 commune에 걸친 Grand Cru."
      },
      {
        "name": "Clos de Vougeot",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Vougeot",
        "note": "큰 단일 Clos. 내부 위치와 생산자에 따른 편차가 큼."
      },
      {
        "name": "Échezeaux / Grands Échezeaux",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Flagey-Échezeaux / Vosne-Romanée 인근",
        "note": "Vosne권 라벨에서 자주 접하는 Grand Cru."
      },
      {
        "name": "Romanée-Conti",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Vosne-Romanée",
        "note": "상징적 monopole Grand Cru."
      },
      {
        "name": "La Tâche",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Vosne-Romanée",
        "note": "DRC monopole. 시험 핵심보다는 라벨 심화."
      },
      {
        "name": "Richebourg / Romanée-Saint-Vivant",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Vosne-Romanée",
        "note": "Vosne-Romanée의 대표 Grand Cru."
      },
      {
        "name": "Corton",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Aloxe-Corton 등",
        "note": "Côte de Beaune의 대형 Grand Cru, 주로 Pinot Noir."
      },
      {
        "name": "Corton-Charlemagne",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Aloxe-Corton / Pernand-Vergelesses / Ladoix",
        "note": "Chardonnay Grand Cru."
      },
      {
        "name": "Montrachet",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Puligny-Montrachet / Chassagne-Montrachet",
        "note": "세계적 Chardonnay Grand Cru."
      },
      {
        "name": "Chevalier-Montrachet",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Puligny-Montrachet",
        "note": "Montrachet 상부의 Grand Cru."
      },
      {
        "name": "Bâtard-Montrachet / Bienvenues-Bâtard-Montrachet",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Puligny / Chassagne",
        "note": "풍부하고 강한 Chardonnay 스타일로 유명."
      },
      {
        "name": "Criots-Bâtard-Montrachet",
        "type": "Grand Cru · DEEP DIVE",
        "area": "Chassagne-Montrachet",
        "note": "작은 면적의 Montrachet 계열 Grand Cru."
      }
    ],
    "quiz": "Gevrey-Chambertin과 Volnay의 Pinot Noir 스타일 차이를 어떻게 설명할까요?",
    "answer": "둘 다 Pinot Noir와 대륙성 기후가 핵심이지만, Gevrey-Chambertin은 일반적으로 더 구조적이고 탄닌이 뚜렷한 반면 Volnay는 더 향기롭고 섬세한 스타일로 설명하기 좋습니다.",
    "officialPlaces": [
      "Bourgogne",
      "Chablis",
      "Bourgogne Côte d’Or",
      "Bourgogne Hautes Côtes de Nuits",
      "Côte de Nuits-Villages",
      "Gevrey-Chambertin",
      "Vougeot",
      "Vosne-Romanée",
      "Nuits-Saint-Georges",
      "Bourgogne Hautes Côtes de Beaune",
      "Côte de Beaune-Villages",
      "Aloxe-Corton",
      "Beaune",
      "Pommard",
      "Volnay",
      "Meursault",
      "Puligny-Montrachet",
      "Chassagne-Montrachet",
      "Bourgogne Côte Chalonnaise",
      "Rully",
      "Mercurey",
      "Givry",
      "Montagny",
      "Mâcon",
      "Mâcon Villages",
      "Pouilly-Fuissé",
      "Saint-Véran"
    ],
    "law": [
      "AOC",
      "Premier Cru",
      "Grand Cru"
    ],
    "tasting": [
      "Bourgogne Rouge",
      "Côte d’Or Village/Premier Cru Pinot Noir",
      "Village/Premier Cru Chablis",
      "Côte d’Or Village/Premier Cru Chardonnay",
      "Mâcon or Mâcon-Villages"
    ],
    "labelTip": "Burgundy는 생산자명보다 '지명 계층' 읽기가 핵심입니다. Bourgogne → Village → Premier Cru → Grand Cru 순으로 범위가 좁아집니다. Premier Cru는 보통 마을명 + climat, Grand Cru는 밭 이름 자체가 Appellation입니다.",
    "extraCards": [
      {
        "name": "Bourgogne Côte d’Or / Hautes Côtes",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "regional보다 특정 지역성이 강하지만 village보다 넓은 범위.",
        "why": "Côte d’Or 및 고지대 포도밭을 묶는 지리 표시."
      },
      {
        "name": "Côte de Nuits-Villages",
        "grapes": "Pinot Noir",
        "style": "중간~높은 산도·탄닌, 붉은/검은 과실.",
        "why": "Côte de Nuits의 여러 마을 포도를 사용."
      },
      {
        "name": "Vougeot",
        "grapes": "Pinot Noir",
        "style": "구조적 Pinot Noir, 위치/생산자 편차 큼.",
        "why": "Clos de Vougeot로 유명한 작은 commune."
      },
      {
        "name": "Aloxe-Corton / Beaune",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "구조적 레드부터 일부 화이트까지.",
        "why": "Côte de Beaune 중심부/북부의 핵심 지명."
      },
      {
        "name": "Rully / Mercurey / Givry / Montagny",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "Côte Chalonnaise의 비교적 접근성 좋은 고품질 와인.",
        "why": "Mercurey/Givry는 레드, Montagny는 화이트 비중이 핵심."
      },
      {
        "name": "Mâcon / Mâcon-Villages / Saint-Véran",
        "grapes": "Chardonnay",
        "style": "더 익은 사과·복숭아, 부드러운 산도와 중간 바디.",
        "why": "남쪽의 따뜻한 기후."
      }
    ],
    "sparkling": [
      {
        "name": "Champagne",
        "grapes": "Chardonnay, Pinot Noir, Meunier",
        "style": "높은 산도, 섬세한 기포, 효모·빵·시트러스. 전통 방식.",
        "notes": "WSET 스파클링 핵심. 지도 23포인트는 유지하되 프랑스 스파클링 보충으로 이 패널에 수록."
      },
      {
        "name": "Montagne de Reims",
        "grapes": "Pinot Noir 중심",
        "style": "구조와 바디 기여.",
        "notes": "Champagne 주요 sub-region."
      },
      {
        "name": "Côte des Blancs",
        "grapes": "Chardonnay 중심",
        "style": "높은 산도, 시트러스, 정교함.",
        "notes": "Blanc de Blancs 핵심."
      },
      {
        "name": "Vallée de la Marne",
        "grapes": "Meunier 비중 높음",
        "style": "과실감과 접근성.",
        "notes": "서리 위험 지역에서 Meunier 장점."
      },
      {
        "name": "Côte des Bar / Côte de Sézanne",
        "grapes": "Pinot Noir / Chardonnay 중심",
        "style": "남쪽 위치로 상대적으로 더 익은 과실.",
        "notes": "Champagne 공식 학습 sub-region."
      },
      {
        "name": "Crémant de Bourgogne",
        "grapes": "지역 허용 품종",
        "style": "전통 방식 프랑스 스파클링.",
        "notes": "Champagne 외 Crémant 예시."
      }
    ],
    "syllabusCount": 27
  },
  "bordeaux": {
    "n": 3,
    "name": "보르도",
    "en": "Bordeaux",
    "country": "France",
    "flag": "🇫🇷",
    "group": "프랑스",
    "lat": "약 45°N",
    "core": "프랑스 남서부. Gironde 하구와 Dordogne·Garonne 강을 중심으로 좌안/우안의 토양과 품종 구성이 달라진다.",
    "climate": "해양성. 대서양의 완화 효과가 있지만 성장기 강우와 빈티지 변동, 곰팡이 위험이 중요.",
    "influences": "좌안 자갈은 배수와 열 축적에 유리해 Cabernet Sauvignon 숙성을 도움. 우안의 점토·석회는 Merlot/Cabernet Franc과 잘 연결.",
    "grapes": [
      "Cabernet Sauvignon",
      "Merlot",
      "Cabernet Franc",
      "Petit Verdot",
      "Sauvignon Blanc",
      "Sémillon"
    ],
    "reason": "좌안: 자갈+따뜻한 토양 → 늦게 익는 Cabernet Sauvignon. 우안: 점토+Merlot → 더 이른 숙성과 풍부한 자두 과실. Sauternes: 강 안개+건조한 오후 → noble rot.",
    "labels": [
      "Médoc",
      "Haut-Médoc",
      "Saint-Estèphe",
      "Pauillac",
      "Saint-Julien",
      "Margaux",
      "Pessac-Léognan",
      "Saint-Émilion",
      "Saint-Émilion Grand Cru",
      "Pomerol",
      "Sauternes",
      "Barsac",
      "Cru Classé",
      "Cru Bourgeois"
    ],
    "regions": [
      {
        "name": "Médoc / Haut-Médoc",
        "grapes": "Cabernet Sauvignon 중심 블렌드",
        "style": "검은 과실, 높은 탄닌, 중~높은 산도, 오크·삼나무.",
        "why": "좌안 자갈 + 배수 + 열 축적."
      },
      {
        "name": "Pauillac",
        "grapes": "Cabernet Sauvignon 중심",
        "style": "카시스, 삼나무/연필심, 강한 구조와 숙성 잠재력.",
        "why": "좌안 핵심 commune."
      },
      {
        "name": "Margaux",
        "grapes": "Cabernet Sauvignon 중심",
        "style": "꽃·검은 과실, 향이 섬세하고 탄닌이 정교한 경향.",
        "why": "Pauillac보다 향기롭고 우아한 대비."
      },
      {
        "name": "Saint-Julien",
        "grapes": "Cabernet Sauvignon 중심",
        "style": "구조와 세련됨의 균형.",
        "why": "작지만 Classed Growth가 밀집."
      },
      {
        "name": "Saint-Estèphe",
        "grapes": "Cabernet Sauvignon + Merlot",
        "style": "견고한 탄닌과 구조, 비교적 서늘한 성격.",
        "why": "점토 비중과 북쪽 위치."
      },
      {
        "name": "Pessac-Léognan",
        "grapes": "Cabernet blend / Sauvignon Blanc + Sémillon",
        "style": "레드: 검은 과실·훈연·오크. 화이트: 시트러스·허브·오크.",
        "why": "Graves의 자갈과 보르도 드라이 화이트 핵심."
      },
      {
        "name": "Saint-Émilion",
        "grapes": "Merlot, Cabernet Franc",
        "style": "자두·블랙체리, 중~높은 탄닌, 석회/점토에 따른 차이.",
        "why": "우안 핵심 산지."
      },
      {
        "name": "Pomerol",
        "grapes": "Merlot 중심",
        "style": "풍부한 자두·블랙체리, 농축도 높고 부드러운 질감.",
        "why": "점토와 Merlot."
      },
      {
        "name": "Sauternes / Barsac",
        "grapes": "Sémillon, Sauvignon Blanc",
        "style": "꿀·살구·마멀레이드, 높은 단맛과 충분한 산도.",
        "why": "Ciron 강의 차가운 물과 Garonne의 만남 → 아침 안개 → Botrytis."
      }
    ],
    "quiz": "Pauillac과 Pomerol 라벨만 보고 품종 중심과 토양 논리를 설명해보세요.",
    "answer": "Pauillac은 좌안 자갈 토양과 Cabernet Sauvignon 중심 블렌드가 핵심입니다. Pomerol은 우안의 점토 토양과 Merlot 중심 스타일로 연결하면 됩니다.",
    "officialPlaces": [
      "Bordeaux",
      "Bordeaux Supérieur",
      "Côtes de Bordeaux",
      "Entre-Deux-Mers",
      "Médoc",
      "Haut-Médoc",
      "Saint-Estèphe",
      "Pauillac",
      "Margaux",
      "Saint-Julien",
      "Graves",
      "Pessac-Léognan",
      "Saint-Émilion",
      "Saint-Émilion Grand Cru",
      "Pomerol",
      "Sauternes",
      "Barsac",
      "Bergerac",
      "Monbazillac",
      "Cahors",
      "Madiran",
      "Jurançon",
      "Côtes de Gascogne"
    ],
    "law": [
      "AOC",
      "IGP",
      "Vin de France",
      "Cru bourgeois",
      "Cru classé"
    ],
    "tasting": [
      "Generic Bordeaux red",
      "Cru Bourgeois or Haut-Médoc Cru Classé",
      "Saint-Émilion Grand Cru or Pomerol",
      "Sauternes or Barsac",
      "Oak-matured Graves/Pessac-Léognan white"
    ],
    "labelTip": "Bordeaux 라벨은 품종명보다 Appellation/Château가 앞에 오는 경우가 많습니다. 좌안 commune(Pauillac 등)인지 우안(Saint-Émilion/Pomerol)인지 먼저 읽고 품종 비중을 추론하세요.",
    "extraCards": [
      {
        "name": "Bordeaux / Bordeaux Supérieur",
        "grapes": "Merlot 중심 블렌드가 흔함",
        "style": "중간 바디, 붉고 검은 과실, 비교적 접근성 좋은 스타일.",
        "why": "넓은 지역에서 생산되며 commune급보다 규정과 테루아가 덜 엄격."
      },
      {
        "name": "Côtes de Bordeaux",
        "grapes": "Merlot 중심 Bordeaux blend",
        "style": "중간 바디~구조적 레드.",
        "why": "우안·주변 구릉지의 여러 Côtes appellation을 묶어 이해."
      },
      {
        "name": "Entre-Deux-Mers",
        "grapes": "Sauvignon Blanc, Sémillon",
        "style": "드라이, 높은 산도, 시트러스·허브.",
        "why": "Garonne와 Dordogne 사이의 드라이 화이트."
      },
      {
        "name": "Bergerac / Monbazillac",
        "grapes": "Bordeaux varieties",
        "style": "Bergerac은 레드/화이트, Monbazillac은 귀부/스위트 화이트.",
        "why": "Dordogne 동쪽의 South West France."
      },
      {
        "name": "Cahors",
        "grapes": "Malbec",
        "style": "검은 과실, 높은 탄닌, 구조적 레드.",
        "why": "Malbec의 대표 프랑스 산지."
      },
      {
        "name": "Madiran",
        "grapes": "Tannat",
        "style": "매우 높은 탄닌, 검은 과실, 숙성 잠재력.",
        "why": "Tannat의 두꺼운 껍질과 높은 페놀."
      },
      {
        "name": "Jurançon",
        "grapes": "Petit Manseng 중심",
        "style": "드라이~스위트, 높은 산도, 열대/감귤 향.",
        "why": "남서부 사면과 당 농축."
      },
      {
        "name": "Côtes de Gascogne",
        "grapes": "Ugni Blanc 등",
        "style": "가볍고 향긋한 드라이 화이트.",
        "why": "IGP 스타일의 신선한 화이트로 이해."
      }
    ],
    "deepDive": [
      {
        "name": "Château vs Appellation",
        "type": "Label reading",
        "note": "Château 이름은 생산자/estate, Pauillac·Margaux·Saint-Émilion 등은 Appellation입니다. 둘을 구분해서 읽기."
      },
      {
        "name": "1855 / Cru Classé",
        "type": "Context",
        "note": "WSET는 'Cru classé' 용어를 알아야 하지만 모든 château 명단 암기가 필수는 아닙니다."
      }
    ],
    "syllabusCount": 23
  },
  "germany": {
    "n": 4,
    "name": "독일",
    "en": "Germany",
    "country": "Germany",
    "flag": "🇩🇪",
    "group": "중부유럽",
    "lat": "약 49°–51°N 주요 산지",
    "core": "높은 위도의 서늘한 기후. 강, 남향 사면, 사면 각도와 토양이 충분한 숙도를 확보하는 핵심 장치.",
    "climate": "서늘한 대륙성/해양성 전이. 빈티지에 따라 숙도 편차가 큼.",
    "influences": "Mosel·Rhine 강의 열 반사와 가파른 남향 사면, 높은 일조 확보가 중요.",
    "grapes": [
      "Riesling",
      "Spätburgunder (Pinot Noir)",
      "Silvaner",
      "Müller-Thurgau",
      "Dornfelder"
    ],
    "reason": "높은 위도 → 산도 유지·숙성 위험 ↑ → 좋은 사면과 강 주변이 일조를 극대화 → Riesling의 높은 산도와 긴 숙성 잠재력.",
    "labels": [
      "Mosel",
      "Bernkastel",
      "Wehlen",
      "Piesport",
      "Nahe",
      "Schlossböckelheim",
      "Rheingau",
      "Rüdesheim",
      "Johannisberg",
      "Rheinhessen",
      "Nierstein",
      "Pfalz",
      "Forst",
      "Deidesheim",
      "Kabinett",
      "Spätlese",
      "Auslese",
      "Trocken",
      "GG"
    ],
    "regions": [
      {
        "name": "Mosel – Bernkastel / Wehlen / Piesport",
        "grapes": "Riesling",
        "style": "가벼운 바디, 매우 높은 산도, 라임·사과·꽃, 잔당 가능.",
        "why": "매우 가파른 강변 사면과 서늘한 기후."
      },
      {
        "name": "Nahe – Schlossböckelheim",
        "grapes": "Riesling",
        "style": "높은 산도와 다양한 토양에서 오는 풍미 다양성.",
        "why": "작지만 지질 다양성이 큼."
      },
      {
        "name": "Rheingau – Rüdesheim / Johannisberg",
        "grapes": "Riesling, Spätburgunder",
        "style": "조금 더 구조적인 Riesling과 드라이 스타일.",
        "why": "Rhine 강과 남향 사면."
      },
      {
        "name": "Rheinhessen – Nierstein",
        "grapes": "Riesling",
        "style": "드라이 Riesling과 보다 풍부한 바디 가능.",
        "why": "따뜻한 핵심 포도밭과 좋은 사면."
      },
      {
        "name": "Pfalz – Forst / Deidesheim",
        "grapes": "Riesling, Spätburgunder",
        "style": "독일 내 비교적 익고 드라이한 스타일.",
        "why": "Vosges/Haardt의 Rain Shadow로 더 건조하고 따뜻."
      },
      {
        "name": "Baden / Franken",
        "grapes": "Spätburgunder / Silvaner",
        "style": "Baden은 독일 내 따뜻한 Pinot Noir, Franken은 드라이 Silvaner로 기억.",
        "why": "지역별 기후와 품종 차이."
      }
    ],
    "quiz": "Mosel Riesling이 높은 산도를 유지하면서도 익을 수 있는 이유를 설명해보세요.",
    "answer": "높은 위도와 서늘한 기후 때문에 산도는 잘 유지되고, 가파른 남향 강변 사면과 강의 반사열이 일조와 열을 보충해 숙성을 돕습니다.",
    "officialPlaces": [
      "Mosel – Bernkastel, Wehlen, Piesport",
      "Nahe – Schlossböckelheim",
      "Rheingau – Rüdesheim, Johannisberg",
      "Rheinhessen – Nierstein",
      "Pfalz – Forst, Deidesheim",
      "Baden",
      "Franken"
    ],
    "law": [
      "Prädikatswein",
      "Kabinett",
      "Spätlese",
      "Auslese",
      "Beerenauslese",
      "Trockenbeerenauslese",
      "Eiswein",
      "Qualitätswein",
      "VDP",
      "VDP.Grosses Gewächs (GG)"
    ],
    "tasting": [
      "Riesling with residual sugar e.g. Kabinett/Spätlese",
      "VDP dry Riesling",
      "Optional Auslese/Beerenauslese",
      "Eiswein"
    ],
    "labelTip": "독일 라벨은 '마을+밭' 구조를 자주 봅니다. 예: Wehlener Sonnenuhr = Wehlen 마을 + Sonnenuhr 포도밭. Kabinett/Spätlese/Auslese는 포도 수확 시의 must weight 범주이며 완성 와인의 당도를 직접 보장하지 않습니다. Trocken이면 드라이.",
    "deepDive": [
      {
        "name": "Wehlener Sonnenuhr",
        "type": "Label deep dive",
        "note": "Mosel의 유명 vineyard 예시. WSET 공식 시험 지명은 Wehlen까지가 핵심."
      },
      {
        "name": "Bernkasteler Doctor",
        "type": "Label deep dive",
        "note": "Bernkastel의 상징적 vineyard 예시."
      },
      {
        "name": "Piesporter Goldtröpfchen",
        "type": "Label deep dive",
        "note": "Piesport의 유명 vineyard 예시."
      },
      {
        "name": "Rüdesheimer Berg Schlossberg",
        "type": "Label deep dive",
        "note": "Rheingau의 유명 steep vineyard 예시."
      }
    ],
    "sparkling": [
      {
        "name": "Sekt / Deutscher Sekt",
        "grapes": "Riesling 등",
        "style": "독일 스파클링. Deutscher Sekt는 독일산 포도 사용.",
        "notes": "Tank/traditional 등 다양한 방식 가능."
      }
    ],
    "syllabusCount": 7
  },
  "rhone": {
    "n": 5,
    "name": "론",
    "en": "Rhône Valley",
    "country": "France",
    "flag": "🇫🇷",
    "group": "프랑스",
    "lat": "약 44°–46°N",
    "core": "북부와 남부를 나눠서 외우는 것이 핵심. 북부는 좁고 가파른 대륙성 계곡, 남부는 넓고 따뜻한 지중해성.",
    "climate": "북부: 대륙성 / 남부: 지중해성.",
    "influences": "Mistral은 남부에서 강하고 건조한 북풍으로 포도밭을 식히고 말린다. 북부는 Rhône 강을 따라 가파른 남향 사면이 중요.",
    "grapes": [
      "Syrah",
      "Grenache",
      "Mourvèdre",
      "Viognier",
      "Marsanne",
      "Roussanne",
      "Cinsault"
    ],
    "reason": "북부의 서늘한 사면 → Syrah의 후추·검은 과실·높은 산도. 남부의 더운 건조 기후 → Grenache의 익은 과실·높은 알코올, GSM 블렌드.",
    "labels": [
      "Côte-Rôtie",
      "Condrieu",
      "Saint-Joseph",
      "Hermitage",
      "Crozes-Hermitage",
      "Cornas",
      "Côtes du Rhône",
      "Côtes du Rhône Villages",
      "Châteauneuf-du-Pape",
      "Gigondas",
      "Vacqueyras",
      "Lirac",
      "Tavel"
    ],
    "regions": [
      {
        "name": "Côte-Rôtie",
        "grapes": "Syrah (+ Viognier 가능)",
        "style": "향기롭고 우아한 Syrah, 검은 과실·후추·훈연.",
        "why": "가파른 남향 사면과 북부의 서늘함."
      },
      {
        "name": "Condrieu",
        "grapes": "Viognier",
        "style": "살구·복숭아·꽃, 낮~중 산도, 풍부한 바디.",
        "why": "향기로운 Viognier의 대표 산지."
      },
      {
        "name": "Hermitage",
        "grapes": "Syrah / Marsanne, Roussanne",
        "style": "강한 구조·농축도·장기 숙성.",
        "why": "남향 화강암 사면의 낮은 수확량."
      },
      {
        "name": "Crozes-Hermitage / Saint-Joseph",
        "grapes": "Syrah",
        "style": "보다 접근성 있는 북부 Rhône Syrah.",
        "why": "더 넓은 범위와 다양한 위치."
      },
      {
        "name": "Cornas",
        "grapes": "Syrah",
        "style": "강한 탄닌과 농축도, 어둡고 강건한 스타일.",
        "why": "따뜻한 남향 amphitheatre."
      },
      {
        "name": "Châteauneuf-du-Pape",
        "grapes": "Grenache 중심 GSM",
        "style": "익은 붉은·검은 과실, 허브, 높은 알코올, 풍부한 바디.",
        "why": "남부의 강한 일조·건조함·galets roulés."
      },
      {
        "name": "Gigondas / Vacqueyras",
        "grapes": "Grenache, Syrah, Mourvèdre",
        "style": "구조적이고 농축된 남부 Rhône 레드.",
        "why": "고도와 사면이 균형을 도움."
      }
    ],
    "quiz": "Côte-Rôtie와 Châteauneuf-du-Pape의 품종과 기후를 대비해 설명해보세요.",
    "answer": "Côte-Rôtie는 북부 Rhône의 대륙성·가파른 사면에서 Syrah가 중심이고, Châteauneuf-du-Pape는 더 따뜻한 지중해성 남부 Rhône에서 Grenache 중심 블렌드가 핵심입니다.",
    "officialPlaces": [
      "Côtes du Rhône",
      "Côtes du Rhône Villages",
      "Côte Rôtie",
      "Condrieu",
      "Saint-Joseph",
      "Hermitage",
      "Crozes-Hermitage",
      "Cornas",
      "Châteauneuf-du-Pape",
      "Gigondas",
      "Vacqueyras",
      "Lirac",
      "Tavel",
      "Pays d’Oc",
      "Languedoc",
      "Minervois",
      "Fitou",
      "Corbières",
      "Picpoul de Pinet",
      "Côtes du Roussillon",
      "Côtes du Roussillon Villages",
      "Bandol",
      "Côtes de Provence"
    ],
    "law": [
      "AOC",
      "IGP / Pays d’Oc"
    ],
    "tasting": [
      "Premium Northern Rhône Syrah",
      "Châteauneuf-du-Pape or Gigondas",
      "Côtes du Rhône / Villages",
      "Condrieu",
      "Southern France Corbières/Fitou/Minervois",
      "Côtes de Provence rosé"
    ],
    "labelTip": "Northern Rhône는 지명만 보고 Syrah/Viognier를, Southern Rhône는 Grenache 중심 블렌드를 떠올리세요. 이 패널에는 WSET의 Southern France도 함께 포함해 23개 지도 포인트를 유지했습니다.",
    "extraCards": [
      {
        "name": "Côtes du Rhône / Côtes du Rhône Villages",
        "grapes": "Grenache, Syrah, Mourvèdre 등",
        "style": "중간~풍부한 바디, 붉은/검은 과실, 허브·향신료.",
        "why": "Southern Rhône의 넓은 기본/상위 지리 계층."
      },
      {
        "name": "Saint-Joseph",
        "grapes": "Syrah / 일부 Marsanne, Roussanne",
        "style": "검은 과실, 후추, 중간~높은 산도.",
        "why": "북부 Rhône의 긴 서안 appellation."
      },
      {
        "name": "Lirac",
        "grapes": "Grenache 중심 블렌드",
        "style": "레드·화이트·로제, 남부 Rhône의 풍부한 과실.",
        "why": "Châteauneuf 맞은편 서안."
      },
      {
        "name": "Tavel",
        "grapes": "Grenache 등",
        "style": "드라이, 색이 짙고 구조적인 로제.",
        "why": "로제 전문 appellation."
      },
      {
        "name": "Languedoc / Minervois / Fitou / Corbières",
        "grapes": "Syrah, Grenache, Carignan, Mourvèdre",
        "style": "따뜻한 지중해성의 익은 과실·허브·향신료.",
        "why": "Southern France 핵심 레드 산지."
      },
      {
        "name": "Picpoul de Pinet",
        "grapes": "Piquepoul",
        "style": "높은 산도, 레몬·그린 과실, 가벼운 바디.",
        "why": "지중해 연안의 신선한 화이트."
      },
      {
        "name": "Côtes du Roussillon / Villages",
        "grapes": "Grenache, Carignan, Syrah 등",
        "style": "더 따뜻하고 농축된 레드.",
        "why": "스페인 국경 인접의 건조·고온."
      },
      {
        "name": "Bandol",
        "grapes": "Mourvèdre 중심",
        "style": "높은 탄닌·바디, 검은 과실·허브, 숙성 잠재력.",
        "why": "따뜻한 Provence와 늦게 익는 Mourvèdre."
      },
      {
        "name": "Côtes de Provence",
        "grapes": "Grenache, Cinsault, Syrah 등",
        "style": "창백한 드라이 로제, 붉은 과실·허브.",
        "why": "해양성 지중해 기후와 로제 중심 생산."
      }
    ],
    "fortified": [
      {
        "name": "Muscat de Beaumes-de-Venise",
        "grapes": "Muscat",
        "style": "달콤하고 향기로운 fortified Muscat.",
        "notes": "발효 중 주정 강화로 천연 당을 보존."
      }
    ],
    "syllabusCount": 23
  },
  "alsace": {
    "n": 6,
    "name": "알자스",
    "en": "Alsace",
    "country": "France",
    "flag": "🇫🇷",
    "group": "프랑스",
    "lat": "약 48°N",
    "core": "프랑스 동북부, 보주산맥 동쪽. Rain Shadow 덕분에 프랑스에서 매우 건조한 편.",
    "climate": "서늘~온화한 대륙성, 긴 건조한 가을.",
    "influences": "Vosges가 서쪽의 습한 바람을 차단 → 낮은 강수. 동·남동향 사면과 긴 가을이 향기로운 품종의 숙성을 도움.",
    "grapes": [
      "Riesling",
      "Gewürztraminer",
      "Pinot Gris",
      "Muscat",
      "Pinot Blanc"
    ],
    "reason": "서늘한 대륙성 + 건조하고 긴 가을 → 높은 향 집중도와 산도 유지. 포도 품종명이 라벨에 자주 표시되는 프랑스의 예외적 지역.",
    "labels": [
      "Alsace",
      "Alsace Grand Cru",
      "Riesling",
      "Gewürztraminer",
      "Pinot Gris",
      "Vendanges Tardives",
      "Sélection de Grains Nobles"
    ],
    "regions": [
      {
        "name": "Alsace AOC",
        "grapes": "Riesling, Gewürztraminer, Pinot Gris 등",
        "style": "드라이~오프드라이, 향이 선명하고 산도가 높음.",
        "why": "건조하고 긴 성장기."
      },
      {
        "name": "Alsace Grand Cru",
        "grapes": "주요 향기 품종",
        "style": "더 농축되고 숙성 잠재력이 높은 스타일.",
        "why": "특정 우수 포도밭의 사면·토양."
      },
      {
        "name": "Vendanges Tardives / SGN",
        "grapes": "향기 품종",
        "style": "늦수확/귀부로 더 농축되고 단맛 가능.",
        "why": "건조한 가을과 선택 수확."
      }
    ],
    "vineyards": [
      {
        "name": "Schlossberg",
        "type": "Grand Cru 예시",
        "area": "Kaysersberg 인근",
        "note": "Riesling로 자주 언급되는 유명 Grand Cru. WSET 보충."
      },
      {
        "name": "Rangen",
        "type": "Grand Cru 예시",
        "area": "Thann",
        "note": "가파른 화산성 사면으로 유명. WSET 보충."
      }
    ],
    "quiz": "Alsace가 프랑스에서 비교적 건조한 이유와 그 결과를 설명해보세요.",
    "answer": "Vosges 산맥의 Rain Shadow 때문에 강수량이 낮습니다. 건조하고 긴 가을은 포도의 향과 당 성숙을 돕고, Riesling·Gewürztraminer 같은 향기 품종의 선명한 스타일을 가능하게 합니다.",
    "officialPlaces": [
      "Alsace",
      "Alsace Grand Cru"
    ],
    "law": [
      "AOC",
      "Vendanges Tardives",
      "Sélection de Grains Nobles"
    ],
    "tasting": [
      "Alsace Riesling",
      "Gewürztraminer",
      "Pinot Gris",
      "Optional: Vendanges Tardives / Sélection de Grains Nobles"
    ],
    "labelTip": "Alsace는 프랑스에서 품종명이 라벨에 직접 나오는 경우가 매우 흔합니다. Grand Cru + 품종 + VT/SGN 여부를 순서대로 읽어 스타일을 추론하세요.",
    "sparkling": [
      {
        "name": "Crémant d’Alsace",
        "grapes": "여러 허용 품종",
        "style": "전통 방식, 높은 산도와 과실 중심.",
        "notes": "WSET 주요 Crémant."
      }
    ],
    "deepDive": [
      {
        "name": "Schlossberg / Rangen",
        "type": "Grand Cru examples · DEEP DIVE",
        "note": "Alsace Grand Cru 예시. 개별 Grand Cru명은 WSET 공식 지명 암기 범위를 넘는 보충."
      }
    ],
    "syllabusCount": 2
  },
  "portugal": {
    "n": 7,
    "name": "포르투갈",
    "en": "Portugal",
    "country": "Portugal",
    "flag": "🇵🇹",
    "group": "이베리아",
    "lat": "약 37°–42°N",
    "core": "서쪽 대서양 영향이 강하고 내륙으로 갈수록 더 덥고 건조해진다.",
    "climate": "서부 해양성 → 내륙 대륙성/건조.",
    "influences": "대서양, 산맥, Douro 계곡의 내륙성. 강수는 북서부에서 많고 내륙 남동쪽으로 갈수록 적어진다.",
    "grapes": [
      "Alvarinho",
      "Loureiro",
      "Arinto",
      "Touriga Nacional",
      "Touriga Franca",
      "Tinta Roriz (Aragonês)",
      "Baga",
      "Trincadeira",
      "Alicante Bouschet"
    ],
    "reason": "해안 Vinho Verde는 서늘·습윤 → 높은 산도. Douro/Alentejo는 내륙·고온 → 농축도와 알코올↑. 포트는 Douro의 높은 숙도와 주정강화.",
    "labels": [
      "Vinho Verde",
      "Douro",
      "Dão",
      "Bairrada",
      "Alentejo",
      "Lisboa",
      "Port",
      "LBV",
      "Vintage Port",
      "Tawny"
    ],
    "regions": [
      {
        "name": "Vinho Verde",
        "grapes": "Alvarinho, Loureiro",
        "style": "가벼운 바디, 높은 산도, 시트러스·청사과.",
        "why": "대서양에 가까운 서늘하고 습한 북서부."
      },
      {
        "name": "Douro",
        "grapes": "Touriga Nacional, Touriga Franca, Tinta Roriz",
        "style": "농축된 레드와 Port, 검은 과실·높은 탄닌.",
        "why": "산맥 뒤 덥고 건조한 계곡, 가파른 사면."
      },
      {
        "name": "Dão",
        "grapes": "Touriga Nacional 등",
        "style": "산도와 향이 비교적 선명한 구조적 레드.",
        "why": "고도와 산맥의 영향."
      },
      {
        "name": "Bairrada",
        "grapes": "Baga",
        "style": "높은 산도·탄닌, 장기 숙성 가능.",
        "why": "대서양 영향과 늦게 익는 Baga."
      },
      {
        "name": "Alentejo",
        "grapes": "Aragonês, Trincadeira, Alicante Bouschet",
        "style": "익은 과실, 높은 알코올, 부드럽고 풍부.",
        "why": "따뜻하고 건조한 남부 내륙."
      }
    ],
    "quiz": "Vinho Verde와 Douro의 스타일 차이를 지리로 설명해보세요.",
    "answer": "Vinho Verde는 대서양의 영향을 강하게 받아 서늘하고 습해 높은 산도와 가벼운 스타일을 보입니다. Douro는 내륙의 덥고 건조한 계곡이라 더 농축되고 숙도 높은 레드와 Port 생산에 적합합니다.",
    "officialPlaces": [
      "Vinho Verde",
      "Douro",
      "Dão",
      "Bairrada",
      "Alentejo",
      "Lisboa",
      "Alentejano"
    ],
    "law": [],
    "tasting": [
      "Optional Douro / Dão / Alentejo red",
      "LBV or Vintage Port",
      "Age-Indicated Tawny Port"
    ],
    "labelTip": "Portugal은 토착 품종명이 낯설기 때문에 지명부터 잡는 것이 효율적입니다. Port가 보이면 Douro 포도 + 발효 중 주정강화 + 숙성 방식(Ruby/Tawny/LBV/Vintage)을 연결하세요.",
    "extraCards": [
      {
        "name": "Lisboa",
        "grapes": "여러 토착·국제 품종",
        "style": "해양 영향의 다양한 드라이 와인.",
        "why": "대서양에 가까운 서부."
      },
      {
        "name": "Alentejano",
        "grapes": "Aragonês, Trincadeira, Alicante Bouschet 등",
        "style": "Alentejo 지역의 유연한 IGP 스타일.",
        "why": "지역 appellation보다 규정 유연."
      }
    ],
    "fortified": [
      {
        "name": "Ruby / Reserve Ruby",
        "grapes": "Touriga Franca, Tinta Roriz, Touriga Nacional, Tinto Cão, Tinta Barroca",
        "style": "젊은 검은 과실, 진한 색, 과실 중심.",
        "notes": "대형 용기에서 짧은 숙성."
      },
      {
        "name": "Late Bottled Vintage (LBV)",
        "grapes": "Port blend",
        "style": "특정 빈티지, 농축된 검은 과실, Vintage보다 병입 전 더 오래 숙성.",
        "notes": "접근성 높은 빈티지 스타일."
      },
      {
        "name": "Vintage Port",
        "grapes": "Port blend",
        "style": "매우 농축, 높은 탄닌·단맛, 장기 병 숙성.",
        "notes": "우수한 해에 선언."
      },
      {
        "name": "Tawny / Age-Indicated Tawny",
        "grapes": "Port blend",
        "style": "견과·캐러멜·말린 과실, 갈색/황갈색.",
        "notes": "산화적 목재 숙성."
      }
    ],
    "syllabusCount": 7
  },
  "spain": {
    "n": 8,
    "name": "스페인",
    "en": "Spain",
    "country": "Spain",
    "flag": "🇪🇸",
    "group": "이베리아",
    "lat": "약 36°–43°N",
    "core": "대서양성 북서부, 높은 고원의 대륙성 중부, 따뜻한 지중해성 동남부를 구분하면 전체가 정리된다.",
    "climate": "해양성 / 대륙성 / 지중해성.",
    "influences": "Meseta 고원의 높은 고도와 큰 일교차, 대서양·지중해의 영향, 산맥에 의한 차단 효과.",
    "grapes": [
      "Tempranillo",
      "Garnacha",
      "Graciano",
      "Cariñena",
      "Albariño",
      "Mencía",
      "Verdejo",
      "Monastrell",
      "Airén"
    ],
    "reason": "고도 높은 내륙 → 강한 일조 + 차가운 밤 → 농축도와 산도 공존. 북서부 해양성 → 높은 산도 화이트. 동남부 → 높은 숙도와 알코올.",
    "labels": [
      "Rioja",
      "Navarra",
      "Priorat",
      "Ribera del Duero",
      "Toro",
      "Rueda",
      "Rías Baixas",
      "Bierzo",
      "Jumilla",
      "Yecla",
      "La Mancha",
      "Crianza",
      "Reserva",
      "Gran Reserva",
      "Cava",
      "Sherry"
    ],
    "regions": [
      {
        "name": "Rioja",
        "grapes": "Tempranillo, Garnacha, Graciano",
        "style": "붉은 과실, 높은 산도, 오크 숙성 향.",
        "why": "Upper Ebro의 대서양·대륙성·지중해 전이."
      },
      {
        "name": "Priorat",
        "grapes": "Garnacha, Cariñena",
        "style": "농축된 검은 과실, 높은 알코올·탄닌.",
        "why": "가파른 슬레이트(Llicorella) 사면과 따뜻한 기후."
      },
      {
        "name": "Ribera del Duero",
        "grapes": "Tempranillo",
        "style": "검은 과실, 높은 탄닌·산도, 오크, 장기 숙성.",
        "why": "높은 Meseta 고도와 큰 일교차."
      },
      {
        "name": "Rueda",
        "grapes": "Verdejo, Sauvignon Blanc",
        "style": "시트러스·허브, 높은 산도, 드라이.",
        "why": "높은 고도와 차가운 밤."
      },
      {
        "name": "Rías Baixas",
        "grapes": "Albariño",
        "style": "높은 산도, 레몬·복숭아·꽃.",
        "why": "서늘하고 습한 대서양 기후."
      },
      {
        "name": "Bierzo",
        "grapes": "Mencía",
        "style": "붉은 과실·꽃·허브, 중간 바디.",
        "why": "북서부 전이지대와 고도."
      },
      {
        "name": "Jumilla / Yecla",
        "grapes": "Monastrell",
        "style": "익은 검은 과실, 높은 알코올, 강한 구조.",
        "why": "덥고 건조한 Levante."
      },
      {
        "name": "La Mancha / Valdepeñas",
        "grapes": "Airén, Tempranillo",
        "style": "대량 생산부터 숙도 높은 레드까지.",
        "why": "넓고 건조한 중앙 고원."
      }
    ],
    "quiz": "Rías Baixas와 Ribera del Duero를 기후·품종·스타일로 대비해보세요.",
    "answer": "Rías Baixas는 대서양의 서늘하고 습한 영향 아래 Albariño 중심의 높은 산도 화이트가 핵심입니다. Ribera del Duero는 높은 내륙 고원의 대륙성 기후에서 Tempranillo가 중심이며, 농축된 검은 과실과 높은 탄닌의 레드를 생산합니다.",
    "officialPlaces": [
      "Rioja",
      "Navarra",
      "Calatayud",
      "Cariñena",
      "Priorat",
      "Catalunya",
      "Penedès",
      "Ribera del Duero",
      "Toro",
      "Rueda",
      "Rías Baixas",
      "Bierzo",
      "Valencia",
      "Jumilla",
      "Yecla",
      "La Mancha",
      "Valdepeñas",
      "Castilla y León VdlT"
    ],
    "law": [
      "DO",
      "DOCa / DOQ",
      "Vino de la Tierra (VdlT)",
      "Vinos de Pago",
      "Joven",
      "Crianza",
      "Reserva",
      "Gran Reserva"
    ],
    "tasting": [
      "Rioja Reserva / Gran Reserva",
      "Ribera del Duero",
      "Priorat",
      "Rías Baixas or Rueda",
      "Optional Monastrell e.g. Jumilla"
    ],
    "labelTip": "Spain은 지명 + 숙성 용어를 함께 읽습니다. Rioja/Ribera처럼 산지를 먼저 잡고 Joven/Crianza/Reserva/Gran Reserva가 있으면 숙성 수준을 추가로 해석하세요.",
    "extraCards": [
      {
        "name": "Navarra",
        "grapes": "Tempranillo, Garnacha 등",
        "style": "레드·로제, 전통/국제 품종 혼합.",
        "why": "Upper Ebro에서 Rioja와 인접."
      },
      {
        "name": "Calatayud / Cariñena",
        "grapes": "Garnacha 중심",
        "style": "익은 붉은/검은 과실, 높은 알코올, 오래된 vines 가능.",
        "why": "고도 높은 건조한 내륙 Aragón."
      },
      {
        "name": "Catalunya / Penedès",
        "grapes": "Garnacha, Cariñena, 국제 품종",
        "style": "다양한 스틸 와인, Penedès는 Cava와도 연관.",
        "why": "지중해 + 고도 차이."
      },
      {
        "name": "Toro",
        "grapes": "Tempranillo (Tinta de Toro)",
        "style": "농축된 검은 과실, 높은 탄닌·알코올.",
        "why": "Duero의 더 덥고 건조한 서쪽."
      },
      {
        "name": "Valencia",
        "grapes": "Monastrell 등",
        "style": "익은 과실과 높은 숙도.",
        "why": "Levante의 따뜻한 지중해성."
      },
      {
        "name": "La Mancha / Valdepeñas / Castilla y León VdlT",
        "grapes": "Airén, Tempranillo 등",
        "style": "대량 생산부터 품질 지향 와인까지 폭넓음.",
        "why": "넓은 고원과 규정 유연성."
      }
    ],
    "sparkling": [
      {
        "name": "Cava",
        "grapes": "Macabeo, Xarel·lo, Parellada",
        "style": "높은 산도, 사과·시트러스, lees 숙성의 효모 향.",
        "notes": "전통 방식."
      }
    ],
    "fortified": [
      {
        "name": "Sherry – Fino / Manzanilla",
        "grapes": "Palomino",
        "style": "매우 드라이, 아몬드·빵·효모, 가벼운 바디.",
        "notes": "Flor 아래 biological ageing."
      },
      {
        "name": "Amontillado",
        "grapes": "Palomino",
        "style": "드라이, flor + oxidative ageing, 견과·캐러멜 복합성.",
        "notes": "두 숙성 단계."
      },
      {
        "name": "Oloroso",
        "grapes": "Palomino",
        "style": "드라이, 풀 바디, 견과·토피·산화 풍미.",
        "notes": "17%+ fortification → flor 없음."
      },
      {
        "name": "Palo Cortado",
        "grapes": "Palomino",
        "style": "Amontillado의 향 + Oloroso의 바디로 설명되는 희귀 스타일.",
        "notes": "WSET 법적 스타일명."
      },
      {
        "name": "Pedro Ximénez (PX)",
        "grapes": "Pedro Ximénez",
        "style": "매우 달고 건포도·무화과·당밀.",
        "notes": "포도 건조 후 주정 강화."
      },
      {
        "name": "Pale Cream / Medium / Cream",
        "grapes": "Blended sweetened Sherry",
        "style": "드라이 와인에 sweet component를 블렌딩.",
        "notes": "당도 수준에 따라 명칭 차이."
      }
    ],
    "syllabusCount": 18
  },
  "southafrica": {
    "n": 9,
    "name": "남아프리카공화국",
    "en": "South Africa",
    "country": "South Africa",
    "flag": "🇿🇦",
    "group": "신세계",
    "lat": "약 32°–35°S",
    "core": "Western Cape 중심. 차가운 Benguela Current가 서해안을 냉각하고 산맥·해풍이 다양한 미기후를 만든다.",
    "climate": "지중해성 중심, 해안은 더 서늘.",
    "influences": "Benguela Current, Cape Doctor(강한 남동풍), 산맥·해안 거리.",
    "grapes": [
      "Chenin Blanc",
      "Chardonnay",
      "Sauvignon Blanc",
      "Pinotage",
      "Cabernet Sauvignon",
      "Syrah",
      "Pinot Noir",
      "Merlot"
    ],
    "reason": "따뜻한 위도지만 차가운 해류+해풍+고도 → 과열 억제·산도 유지. 내륙은 더 따뜻하고 농축된 스타일.",
    "labels": [
      "Western Cape",
      "Stellenbosch",
      "Paarl",
      "Constantia",
      "Durbanville",
      "Swartland",
      "Robertson",
      "Walker Bay",
      "Hemel-en-Aarde",
      "Elgin"
    ],
    "regions": [
      {
        "name": "Stellenbosch",
        "grapes": "Cabernet Sauvignon, Chenin Blanc, Syrah",
        "style": "구조적 레드와 농축된 화이트.",
        "why": "산악 지형과 해풍의 조합."
      },
      {
        "name": "Paarl / Swartland",
        "grapes": "Chenin Blanc, Syrah, Pinotage",
        "style": "더 따뜻하고 농축된 과실, 오래된 Chenin도 중요.",
        "why": "내륙성과 건조함 증가."
      },
      {
        "name": "Constantia / Durbanville",
        "grapes": "Sauvignon Blanc, Chardonnay",
        "style": "더 서늘하고 산도 선명.",
        "why": "Cape Town 및 해양 영향."
      },
      {
        "name": "Robertson",
        "grapes": "Chardonnay, Shiraz 등",
        "style": "따뜻하고 건조하며 관개 중요.",
        "why": "Breede River Valley."
      },
      {
        "name": "Walker Bay / Hemel-en-Aarde",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "서늘한 기후, 높은 산도, 섬세한 스타일.",
        "why": "강한 해양 냉각."
      },
      {
        "name": "Elgin",
        "grapes": "Sauvignon Blanc, Chardonnay, Pinot Noir",
        "style": "매우 서늘하고 향·산도가 선명.",
        "why": "고도와 바다의 영향."
      }
    ],
    "quiz": "Stellenbosch Cabernet이 따뜻한 위도에서도 균형을 유지하는 이유는?",
    "answer": "차가운 Benguela Current와 해풍, 산악 지형이 포도밭을 냉각해 과도한 숙성을 억제하고 산도를 유지하기 때문입니다.",
    "officialPlaces": [
      "Western Cape",
      "Coastal Region – Stellenbosch, Paarl, Constantia, Durbanville, Swartland",
      "Breede River Valley – Worcester, Robertson",
      "Cape South Coast – Walker Bay, Hemel-en-Aarde Wards, Elim, Elgin"
    ],
    "law": [
      "Wine of Origin",
      "region",
      "district",
      "ward",
      "estate"
    ],
    "tasting": [
      "Premium Pinotage e.g. Stellenbosch/Paarl/Swartland",
      "Premium oaked Chenin Blanc e.g. Swartland",
      "Optional Stellenbosch Cabernet Sauvignon"
    ],
    "labelTip": "South Africa는 Wine of Origin의 지리 계층을 읽습니다: region → district → ward. Ward가 가장 세밀한 지리 단위 중 하나.",
    "extraCards": [
      {
        "name": "Worcester",
        "grapes": "Chenin Blanc 등",
        "style": "따뜻한 내륙, 대량 생산과 브랜디용 포도도 중요.",
        "why": "Breede River Valley의 따뜻하고 건조한 조건."
      },
      {
        "name": "Elim",
        "grapes": "Sauvignon Blanc 등",
        "style": "바람이 강하고 서늘해 높은 산도·허브 향.",
        "why": "Cape Agulhas 인근 해양 영향."
      }
    ],
    "sparkling": [
      {
        "name": "Cap Classique",
        "grapes": "Chardonnay, Pinot Noir 등",
        "style": "전통 방식, 높은 산도·효모 향.",
        "notes": "South Africa의 전통 방식 스파클링 법적 용어."
      }
    ],
    "syllabusCount": 4
  },
  "greece": {
    "n": 10,
    "name": "그리스",
    "en": "Greece",
    "country": "Greece",
    "flag": "🇬🇷",
    "group": "지중해",
    "lat": "약 35°–41°N",
    "core": "따뜻하고 건조한 지중해성 국가. 섬의 강풍, 고도와 토착 품종이 핵심.",
    "climate": "지중해성.",
    "influences": "에게해의 해풍과 강풍, 산악 고도. Santorini는 매우 건조하고 바람이 강함.",
    "grapes": [
      "Xinomavro",
      "Agiorgitiko",
      "Assyrtiko"
    ],
    "reason": "따뜻한 기후에서도 고도·해풍·품종 특성으로 산도를 유지. 각 대표 산지를 품종과 1:1로 연결하면 쉽다.",
    "labels": [
      "Naoussa",
      "Nemea",
      "Santorini"
    ],
    "regions": [
      {
        "name": "Naoussa",
        "grapes": "Xinomavro",
        "style": "높은 산도·탄닌, 붉은 과실·토마토·올리브, 숙성 가능.",
        "why": "북부 고도와 대륙성 영향."
      },
      {
        "name": "Nemea",
        "grapes": "Agiorgitiko",
        "style": "붉은·검은 과실, 중간 산도·탄닌부터 구조적 스타일.",
        "why": "Peloponnese의 고도 차이."
      },
      {
        "name": "Santorini",
        "grapes": "Assyrtiko",
        "style": "매우 높은 산도, 레몬·돌·염분감, 드라이.",
        "why": "강풍·건조함·화산성 토양과 품종의 산도 유지 능력."
      }
    ],
    "quiz": "Naoussa, Nemea, Santorini를 각각 어떤 품종과 연결하나요?",
    "answer": "Naoussa=Xinomavro, Nemea=Agiorgitiko, Santorini=Assyrtiko로 연결하면 됩니다.",
    "officialPlaces": [
      "Naoussa",
      "Nemea",
      "Santorini"
    ],
    "law": [],
    "tasting": [
      "Optional Naoussa or Nemea"
    ],
    "labelTip": "그리스는 3개 지명-품종을 1:1로 외우면 효율적입니다: Naoussa=Xinomavro, Nemea=Agiorgitiko, Santorini=Assyrtiko.",
    "syllabusCount": 3
  },
  "loire": {
    "n": 11,
    "name": "루아르",
    "en": "Loire Valley",
    "country": "France",
    "flag": "🇫🇷",
    "group": "프랑스",
    "lat": "약 47°N",
    "core": "대서양에서 프랑스 내륙으로 길게 이어지는 강 유역. 서쪽에서 동쪽으로 갈수록 해양성 영향이 약해진다.",
    "climate": "서부 해양성 → 중부 전이 → 동부 대륙성.",
    "influences": "Loire 강과 지류, 대서양과의 거리, 사면·석회질/부싯돌/화강암 토양.",
    "grapes": [
      "Melon",
      "Chenin Blanc",
      "Cabernet Franc",
      "Sauvignon Blanc"
    ],
    "reason": "서쪽의 서늘·습윤 해양성 → 가볍고 높은 산도. 중부 Chenin은 높은 산도 덕분에 드라이~스위트/스파클링 모두 가능. 동부 Sauvignon은 서늘한 대륙성에서 향과 산도 유지.",
    "labels": [
      "Muscadet",
      "Muscadet Sèvre et Maine",
      "Sur Lie",
      "Anjou",
      "Coteaux du Layon",
      "Savennières",
      "Saumur",
      "Saumur-Champigny",
      "Vouvray",
      "Touraine",
      "Bourgueil",
      "Chinon",
      "Sancerre",
      "Pouilly-Fumé",
      "Menetou-Salon"
    ],
    "regions": [
      {
        "name": "Muscadet Sèvre et Maine",
        "grapes": "Melon",
        "style": "가벼운 바디, 높은 산도, 레몬·청사과, Sur Lie 질감.",
        "why": "대서양과 가까운 서늘한 해양성."
      },
      {
        "name": "Anjou / Coteaux du Layon",
        "grapes": "Chenin Blanc",
        "style": "드라이~스위트, 높은 산도, 사과·모과·꿀.",
        "why": "Chenin의 산도와 귀부 가능성."
      },
      {
        "name": "Savennières",
        "grapes": "Chenin Blanc",
        "style": "드라이, 높은 산도, 구조적이고 숙성 가능.",
        "why": "좋은 사면과 낮은 수확량."
      },
      {
        "name": "Saumur / Saumur-Champigny",
        "grapes": "Chenin Blanc / Cabernet Franc",
        "style": "스파클링·화이트 / 붉은 과실·허브 레드.",
        "why": "석회질 tuffeau."
      },
      {
        "name": "Vouvray",
        "grapes": "Chenin Blanc",
        "style": "드라이~스위트·스파클링, 높은 산도.",
        "why": "빈티지와 수확 시점에 따라 폭넓은 스타일."
      },
      {
        "name": "Chinon / Bourgueil",
        "grapes": "Cabernet Franc",
        "style": "붉은 과실·허브·피망, 중간 바디, 높은 산도.",
        "why": "서늘한 기후에서 Cabernet Franc."
      },
      {
        "name": "Sancerre",
        "grapes": "Sauvignon Blanc",
        "style": "높은 산도, 시트러스·풋사과·허브/플린티.",
        "why": "동부의 서늘한 대륙성."
      },
      {
        "name": "Pouilly-Fumé",
        "grapes": "Sauvignon Blanc",
        "style": "Sancerre와 유사, 훈연/플린티 이미지.",
        "why": "Loire 동부의 석회·부싯돌 토양."
      }
    ],
    "quiz": "Vouvray와 Sancerre 라벨만 보고 품종과 스타일을 각각 설명해보세요.",
    "answer": "Vouvray는 Chenin Blanc으로 드라이부터 스위트·스파클링까지 가능하고 높은 산도가 핵심입니다. Sancerre는 Sauvignon Blanc 중심으로 높은 산도와 시트러스·허브 풍미가 대표적입니다.",
    "officialPlaces": [
      "Muscadet",
      "Muscadet Sèvre et Maine",
      "Anjou",
      "Coteaux du Layon",
      "Savennières",
      "Saumur",
      "Saumur-Champigny",
      "Vouvray",
      "Touraine",
      "Bourgueil",
      "Chinon",
      "Sancerre",
      "Pouilly-Fumé",
      "Menetou-Salon",
      "Rosé d’Anjou",
      "Cabernet d’Anjou",
      "Rosé de Loire"
    ],
    "law": [
      "AOC",
      "Sur lie"
    ],
    "tasting": [
      "Premium dry Chenin Blanc",
      "Sancerre or Pouilly-Fumé",
      "Premium Cabernet Franc",
      "Muscadet / Muscadet Sur Lie"
    ],
    "labelTip": "Loire는 강을 따라 서→동으로 품종이 바뀝니다. Muscadet=Melon, Vouvray/Savennières=C̄henin, Chinon/Bourgueil=Cabernet Franc, Sancerre/Pouilly-Fumé=Sauvignon Blanc.",
    "extraCards": [
      {
        "name": "Touraine",
        "grapes": "Sauvignon Blanc, Chenin Blanc, Cabernet Franc 등",
        "style": "다양한 드라이 화이트·레드·로제.",
        "why": "중부 Loire의 넓은 appellation."
      },
      {
        "name": "Menetou-Salon",
        "grapes": "Sauvignon Blanc, Pinot Noir",
        "style": "Sancerre와 유사한 높은 산도와 시트러스/허브.",
        "why": "Central Vineyards의 인접 산지."
      },
      {
        "name": "Rosé d’Anjou / Cabernet d’Anjou / Rosé de Loire",
        "grapes": "Grolleau / Cabernet Franc·Cabernet Sauvignon 등",
        "style": "오프드라이~드라이 로제, 높은 산도와 붉은 과실.",
        "why": "잔당과 품종 구성으로 스타일 차이."
      }
    ],
    "sparkling": [
      {
        "name": "Crémant de Loire",
        "grapes": "Chenin Blanc 중심 등",
        "style": "전통 방식, 높은 산도.",
        "notes": "WSET 주요 Crémant."
      },
      {
        "name": "Saumur / Vouvray sparkling",
        "grapes": "Chenin Blanc 중심",
        "style": "전통 방식, 높은 산도와 사과·효모 향.",
        "notes": "Loire 스파클링 핵심."
      }
    ],
    "syllabusCount": 17
  },
  "chile": {
    "n": 12,
    "name": "칠레",
    "en": "Chile",
    "country": "Chile",
    "flag": "🇨🇱",
    "group": "신세계",
    "lat": "주요 산지 약 30°–38°S",
    "core": "태평양의 차가운 Humboldt Current와 Andes 사이의 길고 좁은 국가. 해안↔내륙↔Andes 방향으로 기후가 달라진다.",
    "climate": "지중해성 중심, 해안은 서늘하고 내륙은 더 따뜻.",
    "influences": "Humboldt Current, 해안 안개, Coast Range의 틈, Andes 고도.",
    "grapes": [
      "Cabernet Sauvignon",
      "Merlot",
      "Carmenère",
      "Syrah",
      "Pinot Noir",
      "Chardonnay",
      "Sauvignon Blanc"
    ],
    "reason": "Costa: 차가운 해류 → Sauvignon/Chardonnay/Pinot Noir. Entre Cordilleras: 더 따뜻 → Cabernet/Carmenère. Andes: 고도 → 큰 일교차.",
    "labels": [
      "Elqui Valley",
      "Limarí Valley",
      "Casablanca Valley",
      "San Antonio Valley",
      "Leyda Valley",
      "Aconcagua Valley",
      "Maipo Valley",
      "Cachapoal Valley",
      "Colchagua Valley",
      "Curicó Valley",
      "Maule Valley",
      "Costa",
      "Entre Cordilleras",
      "Andes"
    ],
    "regions": [
      {
        "name": "Elqui / Limarí",
        "grapes": "Syrah, Chardonnay, Sauvignon Blanc",
        "style": "건조하고 밝은 일조, 해양/고도에 따라 신선함.",
        "why": "Coquimbo의 북쪽 위치지만 해류와 고도 영향."
      },
      {
        "name": "Casablanca / San Antonio / Leyda",
        "grapes": "Sauvignon Blanc, Chardonnay, Pinot Noir",
        "style": "높은 산도, 시트러스·허브·섬세한 붉은 과실.",
        "why": "Humboldt Current와 해안 안개."
      },
      {
        "name": "Maipo",
        "grapes": "Cabernet Sauvignon",
        "style": "익은 카시스, 중~높은 탄닌, 구조적.",
        "why": "따뜻한 내륙 + Andes의 냉각."
      },
      {
        "name": "Cachapoal / Colchagua",
        "grapes": "Carmenère, Cabernet Sauvignon, Syrah",
        "style": "익은 검은 과실, 향신료, Carmenère의 허브 뉘앙스.",
        "why": "따뜻한 Central Valley."
      },
      {
        "name": "Curicó / Maule",
        "grapes": "다양한 국제·토착 품종",
        "style": "따뜻한 기후, 대량 생산부터 오래된 포도나무까지.",
        "why": "넓은 중앙/남부 계곡."
      }
    ],
    "quiz": "Casablanca와 Maipo를 품종과 해류 영향으로 대비해보세요.",
    "answer": "Casablanca는 Humboldt Current의 냉각 영향이 강해 Sauvignon Blanc, Chardonnay, Pinot Noir 같은 서늘한 기후 품종이 적합합니다. Maipo는 더 내륙이라 따뜻해 Cabernet Sauvignon이 잘 익습니다.",
    "officialPlaces": [
      "Coquimbo – Elqui Valley, Limarí Valley",
      "Aconcagua – Casablanca Valley, San Antonio Valley, Leyda Valley, Aconcagua Valley",
      "Central Valley – Cachapoal Valley, Colchagua Valley, Maipo Valley, Curicó Valley, Maule Valley",
      "Southern Region"
    ],
    "law": [
      "DO",
      "Costa",
      "Entre Cordilleras",
      "Andes"
    ],
    "tasting": [
      "Premium Carmenère e.g. Cachapoal/Colchagua",
      "Premium Cabernet Sauvignon e.g. Maipo/Cachapoal/Colchagua",
      "Chardonnay/Sauvignon Blanc e.g. Casablanca/San Antonio"
    ],
    "labelTip": "Chile 라벨의 Costa / Entre Cordilleras / Andes는 서→동 위치를 알려줍니다. Costa는 해류 냉각, Entre Cordilleras는 더 따뜻한 중앙 계곡, Andes는 고도 효과를 연결하세요.",
    "extraCards": [
      {
        "name": "Aconcagua Valley",
        "grapes": "Cabernet Sauvignon, Syrah 등",
        "style": "내륙은 따뜻하고 구조적인 레드.",
        "why": "해안보다 내륙 숙도 높음."
      },
      {
        "name": "Southern Region",
        "grapes": "Pinot Noir, Chardonnay, Sauvignon Blanc 등",
        "style": "더 서늘하고 높은 산도.",
        "why": "남쪽 위도와 강수 증가."
      }
    ],
    "syllabusCount": 4
  },
  "northitaly": {
    "n": 13,
    "name": "이탈리아 북부",
    "en": "Northern Italy",
    "country": "Italy",
    "flag": "🇮🇹",
    "group": "이탈리아",
    "lat": "약 44°–46°N",
    "core": "알프스, 호수, Po 평원, 아드리아해의 영향이 복합적. Piemonte·Veneto·Alto Adige/Trentino·Friuli가 핵심.",
    "climate": "대륙성 중심, 알프스 고도·호수·아드리아 완화.",
    "influences": "Alps의 Rain Shadow/고도, Lake Garda의 완화, 산악 계곡의 큰 일교차.",
    "grapes": [
      "Nebbiolo",
      "Barbera",
      "Dolcetto",
      "Cortese",
      "Corvina",
      "Garganega",
      "Pinot Grigio",
      "Merlot",
      "Chardonnay"
    ],
    "reason": "Piemonte: 대륙성+구릉 → Nebbiolo의 높은 산도/탄닌. Veneto: 호수·평야 → 다양한 스타일. Alps: 고도 → 화이트의 향과 산도 유지.",
    "labels": [
      "Barolo",
      "Barbaresco",
      "Barbera d'Asti",
      "Gavi",
      "Valpolicella",
      "Amarone della Valpolicella",
      "Soave",
      "Pinot Grigio",
      "Alto Adige",
      "Trentino",
      "Friuli-Venezia Giulia",
      "Prosecco"
    ],
    "regions": [
      {
        "name": "Barolo / Barbaresco",
        "grapes": "Nebbiolo",
        "style": "높은 산도·탄닌, 장미·체리·타르, 긴 숙성.",
        "why": "Piemonte 구릉과 늦게 익는 Nebbiolo."
      },
      {
        "name": "Barbera d'Asti / d'Alba",
        "grapes": "Barbera",
        "style": "높은 산도, 낮~중 탄닌, 붉은·검은 과실.",
        "why": "Nebbiolo와 구조 대비."
      },
      {
        "name": "Gavi",
        "grapes": "Cortese",
        "style": "높은 산도, 레몬·사과, 가벼움~중간 바디.",
        "why": "Piemonte 동쪽의 서늘한 화이트 산지."
      },
      {
        "name": "Valpolicella",
        "grapes": "Corvina 중심",
        "style": "체리, 중간 산도·탄닌, 가벼움~중간 바디.",
        "why": "Veneto 서부."
      },
      {
        "name": "Amarone della Valpolicella",
        "grapes": "Corvina 중심, 건조 포도",
        "style": "말린 체리·건포도, 높은 알코올·바디·농축도.",
        "why": "Appassimento."
      },
      {
        "name": "Soave",
        "grapes": "Garganega",
        "style": "레몬·배·아몬드, 중~높은 산도.",
        "why": "구릉지 Classico가 더 높은 품질 가능."
      },
      {
        "name": "Alto Adige / Trentino / Friuli",
        "grapes": "Pinot Grigio, Chardonnay, Sauvignon Blanc 등",
        "style": "드라이, 높은 산도, 향이 선명.",
        "why": "알프스 고도와 큰 일교차."
      }
    ],
    "quiz": "Barolo와 Amarone의 구조가 강한 이유를 각각 다른 방식으로 설명해보세요.",
    "answer": "Barolo는 Nebbiolo 자체의 높은 산도·탄닌과 구릉지의 긴 숙성기 때문에 구조가 강합니다. Amarone는 포도를 말리는 Appassimento로 당·풍미·알코올이 농축되어 풍부하고 강한 구조가 생깁니다.",
    "officialPlaces": [
      "Trentino",
      "Alto Adige",
      "Collio",
      "Colli Orientali",
      "Friuli Grave",
      "Pinot Grigio delle Venezie",
      "Veneto",
      "Valpolicella",
      "Valpolicella Classico",
      "Amarone della Valpolicella",
      "Recioto della Valpolicella",
      "Valpolicella Ripasso",
      "Soave",
      "Soave Classico",
      "Barolo",
      "Barbaresco",
      "Barbera d’Asti",
      "Dolcetto d’Alba",
      "Gavi"
    ],
    "law": [
      "DOC",
      "DOCG",
      "IGT",
      "Classico",
      "Riserva"
    ],
    "tasting": [
      "Barolo or Barbaresco",
      "Valpolicella / Classico",
      "Amarone",
      "Veneto Pinot Grigio",
      "Optional Alto Adige/Trentino/Friuli Pinot Grigio",
      "Soave / Classico"
    ],
    "labelTip": "Italy는 DOC/DOCG/IGT + 지역명 + Classico/Riserva를 읽습니다. Classico는 전통적 중심 구역, Riserva는 추가 숙성 규정과 연관.",
    "extraCards": [
      {
        "name": "Trentino / Alto Adige",
        "grapes": "Pinot Grigio",
        "style": "드라이, 높은 산도, 시트러스·사과, 고도에서 향 선명.",
        "why": "알프스 고도와 큰 일교차."
      },
      {
        "name": "Collio / Colli Orientali / Friuli Grave",
        "grapes": "Pinot Grigio 등",
        "style": "향이 선명한 드라이 화이트, Collio/Colli Orientali은 더 농축 가능.",
        "why": "Friuli의 고도·아드리아 완화."
      },
      {
        "name": "Pinot Grigio delle Venezie / Veneto",
        "grapes": "Pinot Grigio",
        "style": "가벼움~중간 바디, 신선한 산도, 중성~은은한 과실.",
        "why": "넓은 생산 지역과 높은 수확량 가능."
      },
      {
        "name": "Valpolicella Classico / Ripasso / Recioto",
        "grapes": "Corvina 중심",
        "style": "Classico=중심구역, Ripasso=더 풍부한 바디, Recioto=스위트.",
        "why": "Appassimento 및 재발효/접촉 방식 차이."
      },
      {
        "name": "Dolcetto d’Alba",
        "grapes": "Dolcetto",
        "style": "낮~중 산도, 중간 탄닌, 검은 과실, 일찍 마시는 스타일.",
        "why": "Nebbiolo보다 일찍 익는 품종."
      }
    ],
    "sparkling": [
      {
        "name": "Asti",
        "grapes": "Muscat Blanc à Petits Grains",
        "style": "달콤하고 향기로운 복숭아·포도·꽃, 낮은 알코올.",
        "notes": "Asti method."
      },
      {
        "name": "Prosecco / Conegliano-Valdobbiadene",
        "grapes": "Glera",
        "style": "드라이~오프드라이, 배·사과·꽃, 가벼운 바디.",
        "notes": "Tank method가 핵심."
      }
    ],
    "syllabusCount": 19
  },
  "southitaly": {
    "n": 14,
    "name": "이탈리아 중·남부",
    "en": "Central & Southern Italy",
    "country": "Italy",
    "flag": "🇮🇹",
    "group": "이탈리아",
    "lat": "약 37°–44°N",
    "core": "Tuscany부터 남부와 섬까지. 따뜻한 지중해성 기후지만 구릉·고도·해풍이 산도 유지에 중요.",
    "climate": "지중해성 중심, 내륙/고도에서 더 서늘.",
    "influences": "Apennines, Tyrrhenian/Adriatic/Ionian 해풍, 높은 구릉, Etna 고도.",
    "grapes": [
      "Sangiovese",
      "Cabernet Sauvignon",
      "Montepulciano",
      "Aglianico",
      "Greco",
      "Fiano",
      "Primitivo",
      "Negroamaro",
      "Nero d'Avola"
    ],
    "reason": "강한 일조 → 충분한 숙도. 고도·해풍 → 산도 보존. 토착 품종의 산도/탄닌 특성이 지역 스타일을 결정.",
    "labels": [
      "Chianti",
      "Chianti Classico",
      "Brunello di Montalcino",
      "Vino Nobile di Montepulciano",
      "Montepulciano d'Abruzzo",
      "Taurasi",
      "Fiano di Avellino",
      "Greco di Tufo",
      "Salice Salentino",
      "Aglianico del Vulture",
      "Etna"
    ],
    "regions": [
      {
        "name": "Chianti / Chianti Classico",
        "grapes": "Sangiovese 중심",
        "style": "체리·붉은 자두·허브, 높은 산도, 중~높은 탄닌.",
        "why": "Tuscany 구릉과 고도."
      },
      {
        "name": "Brunello di Montalcino",
        "grapes": "Sangiovese",
        "style": "더 농축, 높은 산도·탄닌, 장기 숙성.",
        "why": "따뜻하지만 고도가 있고 긴 숙성."
      },
      {
        "name": "Montepulciano d'Abruzzo",
        "grapes": "Montepulciano",
        "style": "검은 체리·자두, 중~높은 탄닌.",
        "why": "Adriatic 쪽 따뜻한 구릉."
      },
      {
        "name": "Taurasi",
        "grapes": "Aglianico",
        "style": "높은 산도·탄닌, 검은 과실·가죽·향신료.",
        "why": "Campania 고도 + 늦게 익는 Aglianico."
      },
      {
        "name": "Fiano di Avellino / Greco di Tufo",
        "grapes": "Fiano / Greco",
        "style": "높은 산도, 핵과류·견과/시트러스·미네랄.",
        "why": "Campania 내륙 고도."
      },
      {
        "name": "Puglia / Salice Salentino",
        "grapes": "Negroamaro, Primitivo",
        "style": "익은 검은 과실, 높은 알코올, 풍부한 바디.",
        "why": "더운 남부 지중해성."
      },
      {
        "name": "Basilicata – Aglianico del Vulture",
        "grapes": "Aglianico",
        "style": "높은 산도·탄닌, 화산성 뉘앙스와 숙성 잠재력.",
        "why": "Vulture 화산 고도."
      },
      {
        "name": "Sicily / Etna",
        "grapes": "Nero d'Avola / Nerello Mascalese",
        "style": "저지대는 풍부하고 익은 스타일, Etna는 더 높은 산도와 섬세함.",
        "why": "Etna의 높은 고도와 화산성 토양."
      }
    ],
    "quiz": "Brunello와 Taurasi의 공통점과 차이를 설명해보세요.",
    "answer": "둘 다 높은 산도와 탄닌, 숙성 잠재력이 큰 구조적 레드입니다. Brunello는 Tuscany의 Sangiovese, Taurasi는 Campania의 Aglianico가 핵심입니다.",
    "officialPlaces": [
      "Toscana",
      "Chianti",
      "Chianti Classico",
      "Bolgheri",
      "Brunello di Montalcino",
      "Vino Nobile di Montepulciano",
      "Verdicchio dei Castelli di Jesi",
      "Orvieto",
      "Frascati",
      "Montepulciano d’Abruzzo",
      "Taurasi",
      "Fiano di Avellino",
      "Greco di Tufo",
      "Puglia",
      "Salice Salentino",
      "Aglianico del Vulture",
      "Sicilia",
      "Terre di Sicilia / Terre Siciliane",
      "Etna"
    ],
    "law": [
      "DOC",
      "DOCG",
      "IGT",
      "Classico",
      "Riserva"
    ],
    "tasting": [
      "Chianti",
      "Chianti Classico Riserva or Brunello di Montalcino",
      "Southern Italian red e.g. Taurasi"
    ],
    "labelTip": "중·남부 Italy는 지역명과 토착 품종 연결이 핵심입니다. Tuscany=Sangiovese, Abruzzo=Montepulciano, Campania/Basilicata=Aglianico, Puglia=Negroamaro/Primitivo, Sicily=Nero d’Avola.",
    "extraCards": [
      {
        "name": "Toscana / Bolgheri",
        "grapes": "Sangiovese / Cabernet Sauvignon 등",
        "style": "Toscana IGT는 규정 유연, Bolgheri는 국제 품종의 구조적 레드.",
        "why": "IGT와 해안 Tuscany의 국제 품종."
      },
      {
        "name": "Verdicchio dei Castelli di Jesi",
        "grapes": "Verdicchio",
        "style": "높은 산도, 레몬·사과·허브, 약간의 아몬드.",
        "why": "Marche 대표 화이트."
      },
      {
        "name": "Orvieto",
        "grapes": "Grechetto, Trebbiano",
        "style": "가벼움~중간 바디의 드라이 화이트.",
        "why": "Umbria 대표 화이트."
      },
      {
        "name": "Frascati",
        "grapes": "Malvasia, Trebbiano",
        "style": "가볍고 신선한 화이트.",
        "why": "Lazio 대표 지명."
      },
      {
        "name": "Puglia / Salice Salentino",
        "grapes": "Primitivo / Negroamaro",
        "style": "익은 검은 과실, 높은 알코올, 풍부한 바디.",
        "why": "뜨겁고 건조한 남부."
      },
      {
        "name": "Sicilia / Terre Siciliane",
        "grapes": "Nero d’Avola, Syrah, Chardonnay",
        "style": "넓은 IGT/DOC 범위, 풍부한 과실 중심.",
        "why": "강한 일조와 건조한 기후."
      }
    ],
    "syllabusCount": 19
  },
  "california": {
    "n": 15,
    "name": "캘리포니아",
    "en": "California",
    "country": "USA",
    "flag": "🇺🇸",
    "group": "미국",
    "lat": "약 32°–42°N",
    "core": "차가운 California Current, 해안 안개, Coast Ranges의 틈이 기후를 결정한다. 해안 가까이는 서늘하고 내륙은 훨씬 따뜻.",
    "climate": "지중해성 중심, 강한 해양 냉각.",
    "influences": "California Current, Pacific fog, San Pablo Bay, 산맥·동서 방향 계곡.",
    "grapes": [
      "Cabernet Sauvignon",
      "Merlot",
      "Pinot Noir",
      "Zinfandel",
      "Chardonnay",
      "Sauvignon Blanc"
    ],
    "reason": "해안/안개 → Pinot Noir·Chardonnay. 내륙/따뜻한 계곡 → Cabernet·Zinfandel. 고도와 밤 냉각이 산도 유지.",
    "labels": [
      "Napa Valley",
      "Rutherford",
      "Oakville",
      "Stags Leap District",
      "Howell Mountain",
      "Mount Veeder",
      "Los Carneros",
      "Saint Helena",
      "Calistoga",
      "Sonoma County",
      "Russian River Valley",
      "Alexander Valley",
      "Dry Creek Valley",
      "Sonoma Coast",
      "Mendocino",
      "Santa Cruz Mountains",
      "Monterey",
      "Paso Robles",
      "Santa Barbara",
      "Lodi"
    ],
    "regions": [
      {
        "name": "Napa Valley – Oakville / Rutherford",
        "grapes": "Cabernet Sauvignon",
        "style": "익은 카시스·블랙체리, 구조적 탄닌, 오크.",
        "why": "따뜻한 계곡 중심부와 밤 냉각."
      },
      {
        "name": "Napa – Stags Leap District",
        "grapes": "Cabernet Sauvignon",
        "style": "익은 과실과 세련된 탄닌의 균형.",
        "why": "지형·Bay 영향."
      },
      {
        "name": "Napa – Howell Mountain / Mount Veeder",
        "grapes": "Cabernet Sauvignon",
        "style": "더 구조적이고 탄닌이 강한 산지 Cabernet.",
        "why": "고도, 얇은 토양, 낮은 수확량."
      },
      {
        "name": "Los Carneros",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "높은 산도, 서늘한 기후 스타일, 스파클링에도 적합.",
        "why": "San Pablo Bay의 강한 냉각."
      },
      {
        "name": "Russian River Valley / Sonoma Coast",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "높은 산도, 붉은 과실·시트러스, 섬세함.",
        "why": "Pacific fog와 해양 공기."
      },
      {
        "name": "Alexander Valley",
        "grapes": "Cabernet Sauvignon",
        "style": "더 익고 풍부한 검은 과실.",
        "why": "내륙으로 갈수록 따뜻."
      },
      {
        "name": "Dry Creek Valley / Lodi",
        "grapes": "Zinfandel",
        "style": "블랙베리·잼·향신료, 높은 알코올 가능.",
        "why": "따뜻하고 건조한 조건."
      },
      {
        "name": "Santa Barbara / Monterey",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "서늘하고 산도 높은 스타일.",
        "why": "해안과 동서 방향 계곡으로 차가운 공기 유입."
      },
      {
        "name": "Paso Robles",
        "grapes": "Cabernet Sauvignon, Rhône varieties",
        "style": "익은 검은 과실, 높은 알코올, 큰 일교차.",
        "why": "낮은 따뜻하고 밤은 차가움."
      }
    ],
    "quiz": "Napa의 Los Carneros와 Oakville이 다른 품종으로 유명한 이유를 설명해보세요.",
    "answer": "Los Carneros는 San Pablo Bay의 냉각을 강하게 받아 Pinot Noir와 Chardonnay에 적합하고, Oakville은 더 따뜻한 계곡 중심부라 Cabernet Sauvignon이 충분히 숙성합니다.",
    "officialPlaces": [
      "California",
      "Napa County",
      "Napa Valley",
      "Rutherford",
      "Oakville",
      "Stags Leap District",
      "Howell Mountain",
      "Mount Veeder",
      "Los Carneros",
      "Saint Helena",
      "Calistoga",
      "Sonoma County",
      "Russian River Valley",
      "Alexander Valley",
      "Dry Creek Valley",
      "Sonoma Coast",
      "Mendocino County",
      "Santa Cruz Mountains",
      "Monterey",
      "San Luis Obispo County",
      "Paso Robles",
      "Santa Barbara County",
      "Santa Maria Valley",
      "Lodi",
      "New York – Finger Lakes"
    ],
    "law": [
      "AVA"
    ],
    "tasting": [
      "Premium California Cabernet Sauvignon/Merlot",
      "Zinfandel e.g. Dry Creek/Lodi",
      "Premium California Chardonnay",
      "Optional premium California Pinot Noir",
      "White Zinfandel"
    ],
    "labelTip": "미국 AVA는 '원산지' 표시이지 품질 등급이 아닙니다. Napa Valley → sub-AVA(Oakville 등)로 갈수록 지리 범위가 좁아질 뿐, 자동으로 품질이 보장되지는 않습니다.",
    "extraCards": [
      {
        "name": "Mendocino County",
        "grapes": "Pinot Noir, Chardonnay, Zinfandel 등",
        "style": "해안은 서늘, 내륙은 더 따뜻.",
        "why": "태평양과 지형의 차이."
      },
      {
        "name": "Santa Cruz Mountains",
        "grapes": "Pinot Noir, Chardonnay, Cabernet Sauvignon",
        "style": "고도와 해양 영향으로 산도·구조 유지.",
        "why": "Bay Area 남쪽 산악 AVA."
      },
      {
        "name": "Santa Maria Valley",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "높은 산도, 섬세한 과실.",
        "why": "동서 방향 계곡의 해양 냉각."
      },
      {
        "name": "New York – Finger Lakes",
        "grapes": "Riesling",
        "style": "높은 산도, 라임·사과, 드라이~스위트.",
        "why": "깊은 호수가 추위를 완화. 23포인트 유지 때문에 USA 보충으로 California 패널에 수록."
      }
    ],
    "sparkling": [
      {
        "name": "Anderson Valley",
        "grapes": "Chardonnay, Pinot Noir",
        "style": "서늘한 기후 전통 방식 스파클링.",
        "notes": "WSET USA sparkling 핵심 지명."
      },
      {
        "name": "Los Carneros",
        "grapes": "Chardonnay, Pinot Noir",
        "style": "높은 산도와 전통 방식 스파클링.",
        "notes": "Napa/Sonoma 남쪽의 Bay cooling."
      }
    ],
    "syllabusCount": 25
  },
  "washington": {
    "n": 16,
    "name": "워싱턴",
    "en": "Washington State",
    "country": "USA",
    "flag": "🇺🇸",
    "group": "미국",
    "lat": "약 46°–47°N",
    "core": "Cascade 산맥 동쪽의 건조한 내륙 와인 산지. 높은 위도지만 긴 여름 일조와 큰 일교차가 중요.",
    "climate": "건조한 대륙성.",
    "influences": "Cascade Rain Shadow, Columbia River Basin, 관개.",
    "grapes": [
      "Cabernet Sauvignon",
      "Merlot",
      "Syrah",
      "Riesling",
      "Chardonnay"
    ],
    "reason": "Rain Shadow → 매우 건조·병해 적음, 관개 필요. 긴 낮 → 충분한 숙도, 차가운 밤 → 산도 유지.",
    "labels": [
      "Columbia Valley",
      "Yakima Valley"
    ],
    "regions": [
      {
        "name": "Columbia Valley",
        "grapes": "Cabernet Sauvignon, Merlot, Syrah, Riesling",
        "style": "잘 익은 과실과 산도 공존, 레드·화이트 모두.",
        "why": "큰 일교차와 건조함."
      },
      {
        "name": "Yakima Valley",
        "grapes": "Riesling, Chardonnay, Cabernet Sauvignon, Syrah",
        "style": "다양한 고도와 긴 성장기.",
        "why": "Columbia Valley 안의 핵심 AVA."
      }
    ],
    "quiz": "워싱턴이 높은 위도인데도 Cabernet Sauvignon을 충분히 익힐 수 있는 이유는?",
    "answer": "여름 낮 길이가 길고 일조가 강해 충분한 숙도를 얻을 수 있습니다. 동시에 건조한 대륙성 기후와 큰 일교차로 산도도 유지됩니다.",
    "officialPlaces": [
      "Columbia Valley",
      "Yakima Valley"
    ],
    "law": [
      "AVA"
    ],
    "tasting": [],
    "labelTip": "Washington는 Cascade Rain Shadow를 먼저 떠올리세요. Columbia Valley가 큰 우산 AVA이고 Yakima Valley가 그 안의 핵심 지역 중 하나입니다.",
    "syllabusCount": 2
  },
  "oregon": {
    "n": 17,
    "name": "오리건",
    "en": "Oregon",
    "country": "USA",
    "flag": "🇺🇸",
    "group": "미국",
    "lat": "약 45°N",
    "core": "Willamette Valley가 핵심. California보다 훨씬 서늘하며 Pinot Noir 중심.",
    "climate": "서늘한 해양성 영향.",
    "influences": "Pacific Ocean, Coast Range, Cascade Range, 긴 성장기와 가을 강우 위험.",
    "grapes": [
      "Pinot Noir",
      "Chardonnay",
      "Pinot Gris"
    ],
    "reason": "서늘하고 긴 성장기 → Pinot Noir가 천천히 익어 산도와 향을 유지. 빈티지에 따라 강우·숙도 위험.",
    "labels": [
      "Willamette Valley"
    ],
    "regions": [
      {
        "name": "Willamette Valley",
        "grapes": "Pinot Noir",
        "style": "붉은 체리·딸기·꽃, 높은 산도, 중간 탄닌.",
        "why": "서늘한 기후와 긴 성장기."
      }
    ],
    "quiz": "오리건 Pinot Noir와 캘리포니아 따뜻한 지역 Pinot Noir의 일반적 차이는?",
    "answer": "오리건은 더 서늘해 산도가 높고 붉은 과실과 섬세한 스타일이 두드러지기 쉽습니다. 따뜻한 캘리포니아 지역은 더 익은 과실과 높은 알코올이 나타날 수 있습니다.",
    "officialPlaces": [
      "Willamette Valley"
    ],
    "law": [
      "AVA"
    ],
    "tasting": [
      "Optional Willamette Valley Pinot Noir"
    ],
    "labelTip": "Oregon 핵심은 Willamette Valley + Pinot Noir. AVA는 원산지 표시이며 품질 hierarchy가 아닙니다.",
    "syllabusCount": 1
  },
  "argentina": {
    "n": 18,
    "name": "아르헨티나",
    "en": "Argentina",
    "country": "Argentina",
    "flag": "🇦🇷",
    "group": "신세계",
    "lat": "주요 산지 약 24°–40°S",
    "core": "Andes 동쪽의 고지대·건조 기후. 고도가 낮은 위도의 강한 햇빛을 보완하는 핵심 요소.",
    "climate": "건조한 대륙성.",
    "influences": "Andes Rain Shadow, 높은 고도, 눈 녹은 물 관개, 우박.",
    "grapes": [
      "Malbec",
      "Cabernet Sauvignon",
      "Bonarda",
      "Torrontés",
      "Chardonnay"
    ],
    "reason": "강한 태양 → 색·탄닌·풍미 숙성. 높은 고도 → 밤 기온↓·UV↑ → 산도 유지와 색 발달. 건조함 → 관개 필수.",
    "labels": [
      "Salta",
      "Cafayate",
      "San Juan",
      "Mendoza",
      "Uco Valley",
      "Luján de Cuyo",
      "Maipú",
      "Patagonia"
    ],
    "regions": [
      {
        "name": "Salta – Cafayate",
        "grapes": "Torrontés, Malbec",
        "style": "향기로운 Torrontés, 강한 일조와 높은 산도.",
        "why": "극단적인 고도."
      },
      {
        "name": "Mendoza – Uco Valley",
        "grapes": "Malbec, Cabernet Sauvignon",
        "style": "농축된 검은 과실, 선명한 산도와 탄닌.",
        "why": "높은 고도와 큰 일교차."
      },
      {
        "name": "Mendoza – Luján de Cuyo / Maipú",
        "grapes": "Malbec",
        "style": "익은 자두·블랙베리, 중~높은 탄닌, 풍부한 바디.",
        "why": "전통적 Mendoza 핵심 산지."
      },
      {
        "name": "San Juan",
        "grapes": "Syrah, Bonarda 등",
        "style": "더 따뜻하고 숙도 높은 스타일.",
        "why": "Mendoza보다 북쪽·따뜻."
      },
      {
        "name": "Patagonia",
        "grapes": "Pinot Noir, Malbec",
        "style": "더 서늘하고 산도 선명.",
        "why": "남쪽 위도와 강풍."
      }
    ],
    "quiz": "Mendoza Malbec가 익은 과실과 높은 산도를 동시에 가질 수 있는 이유는?",
    "answer": "낮에는 강한 일조로 과실과 색이 충분히 익고, 높은 고도 때문에 밤에는 기온이 크게 떨어져 산도를 유지하기 때문입니다.",
    "officialPlaces": [
      "Salta – Cafayate",
      "San Juan",
      "Mendoza – Uco Valley, Luján de Cuyo, Maipú",
      "Patagonia"
    ],
    "law": [],
    "tasting": [
      "Mid-priced Malbec",
      "Premium Torrontés e.g. Cafayate",
      "Premium Malbec e.g. Uco Valley/Luján de Cuyo",
      "Premium Cabernet Sauvignon or blend"
    ],
    "labelTip": "Argentina 라벨에서 Mendoza 다음에 Uco Valley / Luján de Cuyo / Maipú가 보이면 고도와 숙도 차이를 생각하세요. Salta/Cafayate는 극고도 Torrontés로 연결.",
    "syllabusCount": 4
  },
  "austria": {
    "n": 19,
    "name": "오스트리아",
    "en": "Austria",
    "country": "Austria",
    "flag": "🇦🇹",
    "group": "중부유럽",
    "lat": "약 47°–48°N",
    "core": "동부에 포도밭이 집중. 다뉴브강 주변의 서늘한 지역과 Burgenland의 더 따뜻한 지역을 구분.",
    "climate": "대륙성, 큰 일교차.",
    "influences": "Danube, Alps, Pannonian plain의 따뜻한 공기, Neusiedlersee의 습도.",
    "grapes": [
      "Grüner Veltliner",
      "Riesling",
      "Welschriesling",
      "Blaufränkisch",
      "Zweigelt",
      "Saint Laurent"
    ],
    "reason": "서늘한 밤+충분한 낮 일조 → Grüner/Riesling의 높은 산도와 향. Burgenland는 더 따뜻하고 호수 습도로 귀부 가능.",
    "labels": [
      "Niederösterreich",
      "Wachau",
      "Weinviertel",
      "Burgenland",
      "DAC"
    ],
    "regions": [
      {
        "name": "Wachau",
        "grapes": "Grüner Veltliner, Riesling",
        "style": "드라이, 높은 산도, 농축된 시트러스·핵과류·후추.",
        "why": "Danube의 가파른 테라스와 큰 일교차."
      },
      {
        "name": "Weinviertel",
        "grapes": "Grüner Veltliner",
        "style": "신선한 산도, 시트러스·백후추.",
        "why": "오스트리아의 대표 Grüner 산지."
      },
      {
        "name": "Burgenland",
        "grapes": "Blaufränkisch, Zweigelt, Welschriesling",
        "style": "구조적인 레드와 귀부 스위트 와인 모두.",
        "why": "더 따뜻한 대륙성 + Neusiedlersee 습도."
      }
    ],
    "quiz": "Wachau와 Burgenland의 기후·스타일 차이를 설명해보세요.",
    "answer": "Wachau는 다뉴브강의 가파른 테라스와 큰 일교차로 드라이하고 높은 산도의 Grüner Veltliner/Riesling이 핵심입니다. Burgenland는 더 따뜻하며 Neusiedlersee의 습도로 레드와 귀부 스위트 와인이 중요합니다.",
    "officialPlaces": [
      "Niederösterreich – Wachau, Weinviertel",
      "Burgenland"
    ],
    "law": [
      "Qualitätswein",
      "Prädikat",
      "DAC"
    ],
    "tasting": [
      "Grüner Veltliner"
    ],
    "labelTip": "DAC는 특정 지역의 대표 스타일/품종 규정을 나타냅니다. Wachau/Weinviertel/Burgenland를 먼저 읽고 Grüner Veltliner/Riesling/Blaufränkisch 등의 품종을 연결하세요.",
    "extraCards": [
      {
        "name": "Niederösterreich",
        "grapes": "Grüner Veltliner, Riesling",
        "style": "드라이, 높은 산도, 시트러스·사과·후추.",
        "why": "Danube 주변과 대륙성의 큰 일교차."
      },
      {
        "name": "Wachau",
        "grapes": "Grüner Veltliner, Riesling",
        "style": "농축된 드라이 화이트, 높은 산도와 긴 숙성 잠재력.",
        "why": "가파른 Danube 테라스와 고도."
      },
      {
        "name": "Weinviertel",
        "grapes": "Grüner Veltliner",
        "style": "신선한 산도, 시트러스·백후추.",
        "why": "Weinviertel DAC의 대표 품종."
      },
      {
        "name": "Burgenland",
        "grapes": "Blaufränkisch, Zweigelt, Welschriesling",
        "style": "구조적 레드 + noble rot sweet wine.",
        "why": "Pannonian warm air와 Neusiedlersee 습도."
      }
    ],
    "deepDive": [
      {
        "name": "Ried",
        "type": "Label term",
        "note": "오스트리아 라벨에서 단일 포도밭(vineyard)을 뜻하는 용어로 자주 보입니다. WSET 공식 범위보다 한 단계 심화."
      }
    ],
    "syllabusCount": 2
  },
  "tokaj": {
    "n": 20,
    "name": "토카이",
    "en": "Tokaj",
    "country": "Hungary",
    "flag": "🇭🇺",
    "group": "중부유럽",
    "lat": "약 48°N",
    "core": "헝가리 북동부. Bodrog·Tisza 강이 만드는 가을 아침 안개와 건조한 오후가 noble rot 형성에 이상적.",
    "climate": "대륙성, 따뜻한 여름과 긴 가을.",
    "influences": "두 강의 습도·안개, 화산성 구릉과 좋은 사면.",
    "grapes": [
      "Furmint",
      "Hárslevelű",
      "Sárga Muskotály"
    ],
    "reason": "아침 안개 → Botrytis 감염, 건조한 오후 → 포도 수분 증발 → 당·산·향 농축. Furmint의 높은 산도가 단맛과 균형.",
    "labels": [
      "Tokaji",
      "Aszú",
      "Eszencia",
      "Furmint"
    ],
    "regions": [
      {
        "name": "Tokaji Aszú",
        "grapes": "Furmint 중심 + Hárslevelű 등",
        "style": "높은 단맛·높은 산도, 살구·오렌지 껍질·꿀·사프란.",
        "why": "noble rot 과실을 이용."
      },
      {
        "name": "Eszencia",
        "grapes": "귀부 포도의 자연 유출액",
        "style": "극도로 높은 당도와 매우 낮은 알코올, 희귀.",
        "why": "Aszú 베리에서 자연스럽게 나온 농축 즙."
      }
    ],
    "quiz": "Tokaji Aszú가 단맛이 높아도 무겁게만 느껴지지 않는 이유는?",
    "answer": "Furmint가 높은 산도를 유지하기 때문에 높은 잔당과 균형을 이루며, 귀부가 복합적인 향을 더합니다.",
    "officialPlaces": [
      "Tokaj – sweet wines only"
    ],
    "law": [
      "Tokaji Aszú",
      "Eszencia"
    ],
    "tasting": [
      "Tokaji Aszú"
    ],
    "labelTip": "Tokaji Aszú는 귀부 포도의 농축과 Furmint의 높은 산도를 연결하세요. Eszencia는 극도로 농축된 귀부 포도 자연 유출액에서 만드는 매우 희귀한 스타일.",
    "syllabusCount": 1
  },
  "canada": {
    "n": 21,
    "name": "캐나다 (BC 중심)",
    "en": "Canada – British Columbia",
    "country": "Canada",
    "flag": "🇨🇦",
    "group": "신세계",
    "lat": "약 49°N",
    "core": "원본 지도는 BC를 강조. WSET Level 3에서는 Okanagan Valley와 함께 Ontario의 Niagara Peninsula도 알아두면 좋다.",
    "climate": "BC: 건조한 대륙성/반건조, Ontario: 서늘한 대륙성+호수 완화.",
    "influences": "BC는 산맥 Rain Shadow와 Okanagan Lake, Ontario는 Great Lakes.",
    "grapes": [
      "Vidal",
      "Riesling",
      "Pinot Noir",
      "Chardonnay",
      "Merlot",
      "Cabernet Franc"
    ],
    "reason": "높은 위도 → 추위 위험. 호수는 온도 완화, BC Rain Shadow는 건조함 제공. 겨울 추위는 Icewine 생산에도 활용.",
    "labels": [
      "Okanagan Valley",
      "Niagara Peninsula",
      "VQA",
      "Icewine"
    ],
    "regions": [
      {
        "name": "Okanagan Valley (BC)",
        "grapes": "Pinot Noir, Chardonnay, Merlot, Riesling 등",
        "style": "큰 일교차, 신선한 산도부터 익은 레드까지 남북 차이 큼.",
        "why": "Rain Shadow + 호수 + 긴 여름 일조."
      },
      {
        "name": "Niagara Peninsula (Ontario)",
        "grapes": "Riesling, Vidal, Chardonnay, Cabernet Franc",
        "style": "서늘한 기후 화이트와 Icewine.",
        "why": "Lake Ontario의 완화 효과와 겨울 동결."
      }
    ],
    "quiz": "Okanagan Valley가 높은 위도인데도 포도를 충분히 익힐 수 있는 이유는?",
    "answer": "Rain Shadow로 비교적 건조하고 여름 낮이 길며, 호수가 온도를 완화합니다. 큰 일교차도 산도를 유지하는 데 도움을 줍니다.",
    "officialPlaces": [
      "Ontario – Niagara Peninsula",
      "British Columbia – Okanagan Valley"
    ],
    "law": [
      "VQA"
    ],
    "tasting": [
      "Optional Icewine"
    ],
    "labelTip": "Canada는 VQA + 지역명을 확인하세요. Icewine이면 포도가 vine에서 얼어 있는 상태로 수확/압착되어 당·산이 농축됩니다.",
    "syllabusCount": 2
  },
  "australia": {
    "n": 22,
    "name": "호주",
    "en": "Australia",
    "country": "Australia",
    "flag": "🇦🇺",
    "group": "오세아니아",
    "lat": "주요 산지 약 30°–43°S",
    "core": "대륙 규모가 커서 '호주=더움'으로 외우면 틀리기 쉽다. 남쪽 바다, 해안 거리, 고도 차이를 먼저 본다.",
    "climate": "따뜻한 지중해성부터 서늘한 해양성까지 매우 다양.",
    "influences": "Southern Ocean, Indian Ocean, Great Dividing Range, 고도.",
    "grapes": [
      "Shiraz",
      "Cabernet Sauvignon",
      "Grenache",
      "Pinot Noir",
      "Chardonnay",
      "Semillon",
      "Riesling",
      "Sauvignon Blanc"
    ],
    "reason": "따뜻한 Barossa/McLaren Vale → 풍부한 Shiraz/Grenache. 해양성 Margaret River → Cabernet/Chardonnay. 고도·남쪽 Yarra/Tasmania → Pinot/Chardonnay.",
    "labels": [
      "Barossa Valley",
      "Eden Valley",
      "Clare Valley",
      "Adelaide Hills",
      "McLaren Vale",
      "Coonawarra",
      "Yarra Valley",
      "Mornington Peninsula",
      "Heathcote",
      "Hunter Valley",
      "Tasmania",
      "Margaret River",
      "Great Southern",
      "Riverland",
      "Riverina",
      "Murray-Darling"
    ],
    "regions": [
      {
        "name": "Barossa Valley",
        "grapes": "Shiraz",
        "style": "익은 검은 과실, 높은 알코올, 풍부한 바디, 오크.",
        "why": "따뜻하고 건조한 South Australia."
      },
      {
        "name": "Eden / Clare Valley",
        "grapes": "Riesling, Shiraz",
        "style": "Riesling은 높은 산도·라임 향, Shiraz는 더 신선한 구조.",
        "why": "고도와 큰 일교차."
      },
      {
        "name": "Adelaide Hills",
        "grapes": "Chardonnay, Pinot Noir, Sauvignon Blanc",
        "style": "더 서늘하고 산도 선명.",
        "why": "높은 고도."
      },
      {
        "name": "McLaren Vale",
        "grapes": "Shiraz, Grenache",
        "style": "풍부한 과실과 높은 숙도, 해풍으로 균형.",
        "why": "따뜻한 지중해성+바다."
      },
      {
        "name": "Coonawarra",
        "grapes": "Cabernet Sauvignon",
        "style": "카시스·민트/유칼립투스, 구조적 탄닌.",
        "why": "남쪽 해양 영향 + Terra Rossa."
      },
      {
        "name": "Yarra Valley / Mornington Peninsula",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "높은 산도, 섬세한 붉은 과실·시트러스.",
        "why": "남쪽 위도·고도·해양성."
      },
      {
        "name": "Hunter Valley",
        "grapes": "Semillon, Shiraz",
        "style": "Semillon은 낮은 알코올·높은 산도, 병 숙성 시 토스트·꿀.",
        "why": "덥고 습하지만 이른 수확과 독특한 양조."
      },
      {
        "name": "Tasmania",
        "grapes": "Pinot Noir, Chardonnay",
        "style": "서늘한 스파클링·Pinot, 높은 산도.",
        "why": "가장 남쪽의 강한 해양성."
      },
      {
        "name": "Margaret River",
        "grapes": "Cabernet Sauvignon, Chardonnay",
        "style": "균형 좋은 Cabernet과 고품질 Chardonnay.",
        "why": "Indian/Southern Ocean의 강한 해양 완화."
      },
      {
        "name": "Riverland / Riverina / Murray-Darling",
        "grapes": "다양",
        "style": "대량 생산, 높은 수확량, 관개 중심.",
        "why": "덥고 건조한 내륙."
      }
    ],
    "quiz": "Barossa Valley와 Tasmania를 같은 호주 안에서 어떻게 대비할까요?",
    "answer": "Barossa는 따뜻하고 건조해 풍부하고 높은 알코올의 Shiraz가 대표적입니다. Tasmania는 훨씬 남쪽의 서늘한 해양성이라 Pinot Noir, Chardonnay와 스파클링 와인에 적합합니다.",
    "officialPlaces": [
      "South Eastern Australia – Murray-Darling, Riverina, Riverland",
      "South Australia – Barossa, Barossa Valley, Eden Valley, Clare Valley, Adelaide Hills, McLaren Vale, Coonawarra",
      "Victoria – Yarra Valley, Geelong, Mornington Peninsula, Heathcote, Goulburn Valley",
      "New South Wales – Hunter Valley",
      "Tasmania",
      "Western Australia – Margaret River, Great Southern"
    ],
    "law": [
      "Zone",
      "region",
      "sub-region"
    ],
    "tasting": [
      "Premium Barossa/McLaren Vale Shiraz",
      "Coonawarra or Margaret River Cabernet",
      "McLaren Vale Grenache/blend",
      "Eden/Clare Riesling",
      "Hunter Valley Semillon",
      "Yarra/Mornington/Tasmania Chardonnay",
      "Optional Pinot Noir"
    ],
    "labelTip": "Australia는 Zone → Region → Sub-region 구조를 확인하세요. 지역명이 넓을수록 일반화된 스타일, 좁을수록 해당 terroir 설명이 쉬워집니다.",
    "extraCards": [
      {
        "name": "Geelong",
        "grapes": "Pinot Noir, Chardonnay, Shiraz",
        "style": "서늘~온화, 산도와 향이 선명.",
        "why": "Victoria 남부 해양 영향."
      },
      {
        "name": "Heathcote",
        "grapes": "Shiraz",
        "style": "농축된 검은 과실과 구조, 산도 유지.",
        "why": "내륙이지만 고도·토양 영향."
      },
      {
        "name": "Goulburn Valley",
        "grapes": "Shiraz, Marsanne 등",
        "style": "따뜻하고 익은 과실.",
        "why": "Victoria 내륙."
      },
      {
        "name": "Great Southern",
        "grapes": "Riesling, Cabernet Sauvignon, Shiraz",
        "style": "서늘하고 높은 산도, 정교한 레드/화이트.",
        "why": "Western Australia 남부의 해양 영향."
      }
    ],
    "sparkling": [
      {
        "name": "Tasmania",
        "grapes": "Chardonnay, Pinot Noir",
        "style": "매우 높은 산도, 정교한 전통 방식.",
        "notes": "호주 premium sparkling 핵심."
      },
      {
        "name": "Yarra Valley / Adelaide Hills",
        "grapes": "Chardonnay, Pinot Noir",
        "style": "서늘한 기후 premium sparkling.",
        "notes": "고도/남쪽 위치."
      }
    ],
    "fortified": [
      {
        "name": "Rutherglen Muscat",
        "grapes": "Muscat",
        "style": "매우 달고 농축, 건포도·캐러멜·토피, 산화적 숙성.",
        "notes": "Victoria Rutherglen의 fortified Muscat."
      }
    ],
    "syllabusCount": 6
  },
  "newzealand": {
    "n": 23,
    "name": "뉴질랜드",
    "en": "New Zealand",
    "country": "New Zealand",
    "flag": "🇳🇿",
    "group": "오세아니아",
    "lat": "약 34°–47°S",
    "core": "길고 좁은 섬나라라 해양 영향이 매우 강하다. 산맥의 Rain Shadow로 동부 주요 산지가 상대적으로 건조.",
    "climate": "서늘~온화한 해양성.",
    "influences": "Pacific Ocean, Southern Alps, 강한 편서풍, 높은 일조량.",
    "grapes": [
      "Sauvignon Blanc",
      "Pinot Noir",
      "Chardonnay",
      "Pinot Gris",
      "Riesling",
      "Syrah",
      "Merlot",
      "Cabernet Sauvignon"
    ],
    "reason": "해양성 → 극단적 고온 억제. 산맥 동쪽 Rain Shadow → 건조하고 맑은 성장기. 긴 성장기 → 향 발달 + 높은 산도.",
    "labels": [
      "Gisborne",
      "Hawke's Bay",
      "Martinborough",
      "Marlborough",
      "Nelson",
      "Canterbury",
      "Central Otago"
    ],
    "regions": [
      {
        "name": "Marlborough",
        "grapes": "Sauvignon Blanc",
        "style": "매우 선명한 향, 패션프루트·구스베리·허브, 높은 산도.",
        "why": "강한 일조 + 서늘한 밤 + Rain Shadow."
      },
      {
        "name": "Central Otago",
        "grapes": "Pinot Noir",
        "style": "익은 체리·자두, 높은 산도, 중간 탄닌.",
        "why": "뉴질랜드에서 가장 대륙성·건조한 편 + 큰 일교차."
      },
      {
        "name": "Hawke's Bay",
        "grapes": "Syrah, Merlot/Cabernet blends, Chardonnay",
        "style": "뉴질랜드 내 비교적 따뜻한 스타일.",
        "why": "북섬 동부 Rain Shadow와 자갈 토양."
      },
      {
        "name": "Martinborough",
        "grapes": "Pinot Noir",
        "style": "향기롭고 구조적인 Pinot Noir.",
        "why": "건조한 동부와 큰 일교차."
      },
      {
        "name": "Gisborne",
        "grapes": "Chardonnay",
        "style": "익은 과실과 비교적 풍부한 바디.",
        "why": "북섬 동부의 따뜻하고 햇빛 많은 지역."
      },
      {
        "name": "Nelson / Canterbury",
        "grapes": "Sauvignon Blanc, Pinot Noir, Riesling 등",
        "style": "서늘하고 산도 높은 다양한 스타일.",
        "why": "남섬의 해양성·고도 차이."
      }
    ],
    "quiz": "Marlborough Sauvignon Blanc의 강한 향과 높은 산도를 지리로 설명해보세요.",
    "answer": "남섬의 서늘한 해양성 기후와 차가운 밤이 산도를 유지하고, Southern Alps의 Rain Shadow로 일조량과 건조한 성장기를 확보해 향 성분이 충분히 발달합니다.",
    "officialPlaces": [
      "North Island – Gisborne, Hawke’s Bay, Martinborough",
      "South Island – Marlborough, Nelson, Canterbury, Central Otago"
    ],
    "law": [],
    "tasting": [
      "Central Otago/Martinborough/Marlborough Pinot Noir",
      "Marlborough Sauvignon Blanc",
      "Optional Hawke’s Bay Bordeaux blend/Syrah",
      "Premium Chardonnay e.g. Marlborough/Gisborne",
      "Oaked Sauvignon Blanc"
    ],
    "labelTip": "NZ는 North Island / South Island를 먼저 나누세요. Hawke’s Bay는 더 따뜻, Marlborough는 Sauvignon Blanc, Central Otago는 가장 대륙성에 가까운 Pinot Noir 핵심.",
    "sparkling": [
      {
        "name": "Marlborough",
        "grapes": "Chardonnay, Pinot Noir",
        "style": "높은 산도와 선명한 과실의 premium sparkling.",
        "notes": "WSET premium New Zealand sparkling 핵심 지역."
      }
    ],
    "syllabusCount": 2
  }
};
const POINTS = [
  {
    "id": "beaujolais",
    "x": 42.2,
    "y": 28.2
  },
  {
    "id": "burgundy",
    "x": 41.2,
    "y": 25.3
  },
  {
    "id": "bordeaux",
    "x": 39.6,
    "y": 29.2
  },
  {
    "id": "germany",
    "x": 41.8,
    "y": 23.3
  },
  {
    "id": "rhone",
    "x": 41.0,
    "y": 32.5
  },
  {
    "id": "alsace",
    "x": 43.1,
    "y": 34.8
  },
  {
    "id": "portugal",
    "x": 32.3,
    "y": 33.4
  },
  {
    "id": "spain",
    "x": 35.4,
    "y": 35.3
  },
  {
    "id": "southafrica",
    "x": 41.5,
    "y": 58.9
  },
  {
    "id": "greece",
    "x": 45.2,
    "y": 37.8
  },
  {
    "id": "loire",
    "x": 38.3,
    "y": 27.4
  },
  {
    "id": "chile",
    "x": 20.0,
    "y": 57.3
  },
  {
    "id": "northitaly",
    "x": 48.0,
    "y": 31.7
  },
  {
    "id": "southitaly",
    "x": 47.8,
    "y": 35.2
  },
  {
    "id": "california",
    "x": 15.0,
    "y": 31.6
  },
  {
    "id": "washington",
    "x": 14.8,
    "y": 25.4
  },
  {
    "id": "oregon",
    "x": 14.2,
    "y": 28.0
  },
  {
    "id": "argentina",
    "x": 25.2,
    "y": 61.0
  },
  {
    "id": "austria",
    "x": 49.2,
    "y": 26.4
  },
  {
    "id": "tokaj",
    "x": 50.7,
    "y": 29.6
  },
  {
    "id": "canada",
    "x": 16.7,
    "y": 21.9
  },
  {
    "id": "australia",
    "x": 61.2,
    "y": 57.1
  },
  {
    "id": "newzealand",
    "x": 69.8,
    "y": 63.7
  }
];