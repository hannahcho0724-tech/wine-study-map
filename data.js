const WINE_DATA = {
  "france": {
    "name": "프랑스",
    "en": "France",
    "flag": "🇫🇷",
    "group": "유럽",
    "lat": "약 42°–51°N",
    "mapCore": "대서양·대륙·지중해의 영향이 지역별로 달라지는 대표적인 구세계 와인 국가.",
    "climate": [
      "해양성",
      "대륙성",
      "지중해성"
    ],
    "currents": "북대서양 해류의 간접적인 온화화 효과와 대서양의 영향이 서부 산지에 중요.",
    "winds": "남부 론과 프로방스에서는 Mistral이 중요. 차고 건조한 바람이 병해 압력을 줄일 수 있음.",
    "topography": "강, 구릉, 사면 방향, 배수성 좋은 토양이 중요. 알자스는 보주산맥 Rain Shadow 영향.",
    "grapes": [
      "Cabernet Sauvignon",
      "Merlot",
      "Pinot Noir",
      "Chardonnay",
      "Syrah",
      "Grenache",
      "Sauvignon Blanc",
      "Chenin Blanc",
      "Riesling"
    ],
    "style": "지역명 중심 라벨 체계. 같은 나라 안에서도 기후·품종·스타일 차이가 매우 큼.",
    "label": [
      "Bordeaux",
      "Pauillac",
      "Saint-Émilion",
      "Bourgogne",
      "Chablis",
      "Meursault",
      "Beaujolais",
      "Côte-Rôtie",
      "Châteauneuf-du-Pape",
      "Sancerre",
      "Alsace"
    ],
    "chain": "지역명 확인 → 프랑스 내 위치 추정 → 해양성/대륙성/지중해성 판별 → 대표 품종 추론 → 산도·탄닌·알코올·향 스타일 예상",
    "prompt": "라벨에 'Pauillac'이 보인다면, 위치·기후·주요 품종·예상 구조를 연결해서 설명해보세요.",
    "answer": "Pauillac은 Bordeaux 좌안 Médoc에 있으며 해양성 기후의 영향을 받습니다. 배수가 좋은 자갈 토양이 Cabernet Sauvignon 숙성을 돕고, 일반적으로 Cabernet Sauvignon 중심 블렌드가 만들어집니다. 검은 과실, 높은 탄닌, 비교적 높은 산도와 긴 숙성 잠재력을 예상할 수 있습니다.",
    "regions": [
      {
        "name": "Champagne",
        "climate": "서늘한 대륙성 + 해양 영향",
        "grapes": "Chardonnay, Pinot Noir, Meunier",
        "key": "높은 산도와 낮은 잠재 알코올이 전통 방식 스파클링에 적합. 봄 서리와 빈티지 변동 위험.",
        "subregions": [
          {
            "place": "Montagne de Reims / Reims",
            "grapes": "Pinot Noir 중심",
            "style": "구조와 바디를 더하는 Pinot Noir. 북향이 많지만 백악질 토양과 미기후가 중요.",
            "label": "Champagne, Reims, Grand Cru village names"
          },
          {
            "place": "Vallée de la Marne",
            "grapes": "Meunier 중심",
            "style": "서리 위험이 있는 계곡에서 비교적 안정적으로 익으며 과실감을 더함.",
            "label": "Champagne / grower village"
          },
          {
            "place": "Côte des Blancs / Épernay 남쪽",
            "grapes": "Chardonnay",
            "style": "높은 산도, 시트러스·꽃, 정교하고 긴 숙성 잠재력.",
            "label": "Blanc de Blancs, Avize, Cramant, Le Mesnil-sur-Oger"
          }
        ]
      },
      {
        "name": "Bordeaux",
        "climate": "해양성",
        "grapes": "Cabernet Sauvignon, Merlot, Cabernet Franc, Petit Verdot / Sauvignon Blanc, Sémillon",
        "key": "대서양·Gironde 하구의 완화 효과. 빈티지 강우와 곰팡이 위험. 좌안=자갈+Cabernet, 우안=점토/석회+Merlot·Cabernet Franc.",
        "subregions": [
          {
            "place": "Médoc / Haut-Médoc",
            "grapes": "Cabernet Sauvignon 중심 블렌드",
            "style": "검은 과실, 높은 탄닌, 중~높은 산도, 오크·삼나무, 장기 숙성.",
            "label": "Médoc, Haut-Médoc"
          },
          {
            "place": "Pauillac",
            "grapes": "Cabernet Sauvignon 중심",
            "style": "강한 구조, 카시스, 삼나무/연필심, 높은 탄닌과 숙성 잠재력.",
            "label": "Pauillac"
          },
          {
            "place": "Margaux",
            "grapes": "Cabernet Sauvignon 중심",
            "style": "향이 섬세하고 꽃·검은 과실이 두드러지며 탄닌이 비교적 정교.",
            "label": "Margaux"
          },
          {
            "place": "Saint-Julien",
            "grapes": "Cabernet Sauvignon 중심",
            "style": "Pauillac의 구조와 Margaux의 세련됨 사이로 자주 설명되는 균형형.",
            "label": "Saint-Julien"
          },
          {
            "place": "Saint-Estèphe",
            "grapes": "Cabernet Sauvignon + Merlot",
            "style": "점토 비중과 서늘한 위치의 영향으로 탄탄하고 견고한 스타일.",
            "label": "Saint-Estèphe"
          },
          {
            "place": "Pessac-Léognan / Graves",
            "grapes": "Cabernet blend / Sauvignon Blanc + Sémillon",
            "style": "레드는 검은 과실·오크·훈연, 화이트는 시트러스·허브·오크 숙성 가능.",
            "label": "Pessac-Léognan, Graves"
          },
          {
            "place": "Saint-Émilion",
            "grapes": "Merlot, Cabernet Franc",
            "style": "붉고 검은 자두, 중~높은 탄닌, 석회질/점토 사면에 따라 우아함과 구조 차이.",
            "label": "Saint-Émilion, Saint-Émilion Grand Cru"
          },
          {
            "place": "Pomerol",
            "grapes": "Merlot 중심",
            "style": "풍부한 자두·블랙체리, 부드럽지만 농축된 탄닌, 점토 토양과 연관.",
            "label": "Pomerol"
          },
          {
            "place": "Sauternes / Barsac",
            "grapes": "Sémillon, Sauvignon Blanc",
            "style": "귀부로 꿀·살구·마멀레이드, 높은 단맛과 충분한 산도.",
            "label": "Sauternes, Barsac"
          }
        ]
      },
      {
        "name": "Burgundy",
        "climate": "대륙성",
        "grapes": "Pinot Noir, Chardonnay",
        "key": "봄 서리·우박·빈티지 변동. 포도밭 위치, 사면, 배수, 석회질·점토 비율이 스타일 차이를 크게 만듦.",
        "subregions": [
          {
            "place": "Chablis",
            "grapes": "Chardonnay",
            "style": "높은 산도, 레몬·청사과, 가벼움~중간 바디. Premier/Grand Cru는 더 농축되고 숙성 가능.",
            "label": "Chablis, Chablis Premier Cru, Chablis Grand Cru"
          },
          {
            "place": "Gevrey-Chambertin",
            "grapes": "Pinot Noir",
            "style": "구조적이고 탄닌이 뚜렷하며 붉은/검은 과실과 흙·향신료.",
            "label": "Gevrey-Chambertin"
          },
          {
            "place": "Vosne-Romanée",
            "grapes": "Pinot Noir",
            "style": "향신료·꽃·붉은 과실이 복합적이고 세련된 탄닌.",
            "label": "Vosne-Romanée"
          },
          {
            "place": "Nuits-Saint-Georges",
            "grapes": "Pinot Noir",
            "style": "탄닌과 구조가 비교적 뚜렷하고 숙성 잠재력 있음.",
            "label": "Nuits-Saint-Georges"
          },
          {
            "place": "Pommard",
            "grapes": "Pinot Noir",
            "style": "Côte de Beaune의 레드 중 비교적 힘 있고 탄닌감 있는 스타일.",
            "label": "Pommard"
          },
          {
            "place": "Volnay",
            "grapes": "Pinot Noir",
            "style": "향이 섬세하고 우아하며 탄닌이 더 부드러운 경향.",
            "label": "Volnay"
          },
          {
            "place": "Meursault",
            "grapes": "Chardonnay",
            "style": "농축된 핵과류·견과·버터/오크 뉘앙스, 중~높은 바디.",
            "label": "Meursault"
          },
          {
            "place": "Puligny-Montrachet",
            "grapes": "Chardonnay",
            "style": "높은 산도와 긴장감, 시트러스·미네랄·정교한 오크.",
            "label": "Puligny-Montrachet"
          },
          {
            "place": "Chassagne-Montrachet",
            "grapes": "Chardonnay + Pinot Noir",
            "style": "화이트는 풍부함과 구조, 레드는 일부 마을에서 생산.",
            "label": "Chassagne-Montrachet"
          },
          {
            "place": "Mâconnais / Pouilly-Fuissé",
            "grapes": "Chardonnay",
            "style": "더 따뜻한 남부 위치로 익은 사과·핵과류와 더 풍부한 바디.",
            "label": "Mâcon, Pouilly-Fuissé"
          }
        ]
      },
      {
        "name": "Beaujolais",
        "climate": "온화한 대륙성",
        "grapes": "Gamay",
        "key": "북부 Cru는 화강암질 구릉이 많고 구조가 더 강함. 탄산침용/반탄산침용으로 밝은 과실과 낮은 탄닌 스타일도 흔함.",
        "subregions": [
          {
            "place": "Beaujolais / Beaujolais-Villages",
            "grapes": "Gamay",
            "style": "가볍고 신선한 딸기·라즈베리, 낮은 탄닌.",
            "label": "Beaujolais, Beaujolais-Villages"
          },
          {
            "place": "Morgon",
            "grapes": "Gamay",
            "style": "Cru 중 비교적 구조적이고 숙성 가능한 스타일.",
            "label": "Morgon"
          },
          {
            "place": "Fleurie",
            "grapes": "Gamay",
            "style": "꽃향과 붉은 과실, 섬세하고 향기로운 스타일.",
            "label": "Fleurie"
          }
        ]
      },
      {
        "name": "Northern Rhône",
        "climate": "대륙성",
        "grapes": "Syrah / Viognier, Marsanne, Roussanne",
        "key": "가파른 남향 사면과 Rhône 강. Syrah의 후추·검은 과실·훈연·올리브 특성이 핵심.",
        "subregions": [
          {
            "place": "Côte-Rôtie",
            "grapes": "Syrah (+ Viognier 허용)",
            "style": "향기롭고 우아한 Syrah, 검은 과실·후추·훈연.",
            "label": "Côte-Rôtie"
          },
          {
            "place": "Condrieu",
            "grapes": "Viognier",
            "style": "낮~중 산도, 살구·복숭아·꽃, 풍부한 바디.",
            "label": "Condrieu"
          },
          {
            "place": "Hermitage",
            "grapes": "Syrah / Marsanne, Roussanne",
            "style": "강한 구조와 농축도, 장기 숙성 가능한 Syrah.",
            "label": "Hermitage"
          },
          {
            "place": "Crozes-Hermitage",
            "grapes": "Syrah",
            "style": "Hermitage보다 접근성 있고 과실 중심인 경우가 많음.",
            "label": "Crozes-Hermitage"
          }
        ]
      },
      {
        "name": "Southern Rhône",
        "climate": "지중해성",
        "grapes": "Grenache, Syrah, Mourvèdre",
        "key": "더운 여름·건조함·Mistral. Grenache 중심 GSM 블렌드와 큰 자갈이 유명.",
        "subregions": [
          {
            "place": "Châteauneuf-du-Pape",
            "grapes": "Grenache 중심 블렌드",
            "style": "익은 붉은/검은 과실, 높은 알코올, 허브·향신료, 풍부한 바디.",
            "label": "Châteauneuf-du-Pape"
          },
          {
            "place": "Gigondas",
            "grapes": "Grenache, Syrah, Mourvèdre",
            "style": "농축되고 구조적인 남부 Rhône 레드.",
            "label": "Gigondas"
          }
        ]
      },
      {
        "name": "Loire",
        "climate": "서쪽 해양성 → 동쪽 대륙성 증가",
        "grapes": "Melon, Chenin Blanc, Cabernet Franc, Sauvignon Blanc",
        "key": "강을 따라 서→동으로 이동할수록 해양 영향이 감소.",
        "subregions": [
          {
            "place": "Muscadet Sèvre et Maine",
            "grapes": "Melon",
            "style": "가볍고 높은 산도, 레몬·사과, sur lie로 질감 추가.",
            "label": "Muscadet Sèvre et Maine, Sur Lie"
          },
          {
            "place": "Vouvray",
            "grapes": "Chenin Blanc",
            "style": "드라이~스위트/스파클링, 높은 산도와 사과·모과·꿀.",
            "label": "Vouvray"
          },
          {
            "place": "Sancerre",
            "grapes": "Sauvignon Blanc",
            "style": "높은 산도, 시트러스·풋사과·허브/플린티 뉘앙스.",
            "label": "Sancerre"
          },
          {
            "place": "Pouilly-Fumé",
            "grapes": "Sauvignon Blanc",
            "style": "Sancerre와 유사하나 훈연/플린티 이미지가 자주 강조.",
            "label": "Pouilly-Fumé"
          },
          {
            "place": "Chinon",
            "grapes": "Cabernet Franc",
            "style": "붉은 과실, 허브/피망, 중간 바디와 높은 산도.",
            "label": "Chinon"
          }
        ]
      },
      {
        "name": "Alsace",
        "climate": "건조한 대륙성",
        "grapes": "Riesling, Gewürztraminer, Pinot Gris, Muscat",
        "key": "보주산맥 Rain Shadow로 프랑스에서 매우 건조한 편. 향기로운 품종과 긴 성장기.",
        "subregions": [
          {
            "place": "Colmar 주변 / Alsace Grand Cru",
            "grapes": "Riesling, Gewürztraminer, Pinot Gris",
            "style": "향이 강하고 드라이~스위트. Grand Cru는 지정 포도밭·품종 규정 확인.",
            "label": "Alsace, Alsace Grand Cru, Vendanges Tardives"
          }
        ]
      }
    ],
    "dense": true,
    "denseNote": "핵심국가 보강판: 산지 → 세부산지/도시 → 품종 → 예상 스타일 → 라벨 단서까지 확장"
  },
  "germany": {
    "name": "독일",
    "en": "Germany",
    "flag": "🇩🇪",
    "group": "유럽",
    "lat": "약 47°–55°N",
    "mapCore": "높은 위도와 서늘한 대륙성 환경. 강과 남향 사면이 포도 숙성에 중요.",
    "climate": [
      "서늘한 대륙성"
    ],
    "currents": "직접적인 해류보다 높은 위도와 강 계곡 미기후가 핵심.",
    "winds": "강의 열 반사·안개·사면 방향이 숙도 확보에 중요.",
    "topography": "Mosel, Rhine 등 강 계곡의 가파른 남향 사면은 일조량을 늘리고 서늘한 기후에서 숙성을 도움.",
    "grapes": [
      "Riesling",
      "Spätburgunder (Pinot Noir)"
    ],
    "style": "높은 산도, 섬세한 향, 드라이부터 스위트까지 폭넓은 Riesling 스타일.",
    "label": [
      "Mosel",
      "Rheingau",
      "Pfalz",
      "Nahe",
      "Kabinett",
      "Spätlese",
      "Auslese",
      "Trocken"
    ],
    "chain": "높은 위도 → 숙성 위험 → 강·남향 사면이 열 확보 → Riesling의 높은 산도 유지 → 당도/숙도/Trocken 여부로 스타일 판단",
    "prompt": "Mosel Riesling Spätlese 라벨을 보고 예상되는 산도와 과실 성숙도를 설명해보세요.",
    "answer": "Mosel은 높은 위도의 서늘한 기후와 가파른 강변 사면이 특징입니다. Riesling은 높은 산도를 유지하며, Spätlese는 Kabinett보다 더 높은 포도 숙도를 의미합니다.",
    "regions": [
      {
        "name": "Mosel",
        "climate": "서늘한 대륙성",
        "grapes": "Riesling",
        "key": "가파른 강변 사면, 높은 산도, 섬세한 향."
      },
      {
        "name": "Rheingau",
        "climate": "서늘한 대륙성",
        "grapes": "Riesling, Spätburgunder",
        "key": "라인강과 남향 사면의 영향."
      },
      {
        "name": "Pfalz",
        "climate": "독일 내 비교적 따뜻하고 건조",
        "grapes": "Riesling, Spätburgunder",
        "key": "보다 높은 숙도와 드라이한 스타일."
      }
    ]
  },
  "austria": {
    "name": "오스트리아",
    "en": "Austria",
    "flag": "🇦🇹",
    "group": "유럽",
    "lat": "약 46°–49°N",
    "mapCore": "대륙성 기후와 큰 일교차. 다뉴브강 주변 산지와 동부 평야가 중요.",
    "climate": [
      "대륙성"
    ],
    "currents": "해류 영향은 작고 내륙성 기후가 핵심.",
    "winds": "동쪽의 따뜻한 공기와 북쪽·서쪽의 서늘한 영향이 만나는 위치.",
    "topography": "Wachau 등 다뉴브강 주변의 가파른 사면과 테라스가 유명.",
    "grapes": [
      "Grüner Veltliner",
      "Riesling",
      "Zweigelt",
      "Blaufränkisch"
    ],
    "style": "드라이하고 높은 산도를 가진 화이트가 핵심.",
    "label": [
      "Wachau",
      "Kamptal",
      "Kremstal",
      "Burgenland",
      "Grüner Veltliner"
    ],
    "chain": "내륙 대륙성 → 큰 일교차 → 산도 유지 + 충분한 숙성 → 드라이하고 선명한 화이트",
    "prompt": "Wachau의 고도와 사면이 화이트 와인 스타일에 어떤 도움을 주는지 설명해보세요.",
    "answer": "Wachau는 다뉴브강을 따라 가파른 테라스와 다양한 고도를 갖습니다. 일조를 확보하면서도 밤에는 기온이 내려가 산도를 유지할 수 있어, 농축감과 신선함을 동시에 가진 화이트 생산에 유리합니다.",
    "regions": [
      {
        "name": "Wachau",
        "climate": "대륙성",
        "grapes": "Grüner Veltliner, Riesling",
        "key": "다뉴브강, 가파른 테라스, 높은 품질의 드라이 화이트."
      },
      {
        "name": "Burgenland",
        "climate": "따뜻한 대륙성",
        "grapes": "Blaufränkisch, Zweigelt",
        "key": "Neusiedlersee 주변 귀부 와인 가능성까지 연결."
      }
    ]
  },
  "hungary": {
    "name": "헝가리",
    "en": "Hungary",
    "flag": "🇭🇺",
    "group": "유럽",
    "lat": "약 45°–49°N",
    "mapCore": "내륙 대륙성. Tokaj에서는 강이 만드는 습도와 가을 안개가 귀부 발생에 중요.",
    "climate": [
      "대륙성"
    ],
    "currents": "해류 영향은 거의 없음.",
    "winds": "Tokaj의 Bodrog·Tisza 강 주변 안개가 Botrytis 형성에 기여.",
    "topography": "화산성 구릉과 강의 조합.",
    "grapes": [
      "Furmint",
      "Hárslevelű",
      "Sárga Muskotály"
    ],
    "style": "Tokaji Aszú의 높은 산도·농축된 단맛·귀부 향이 핵심.",
    "label": [
      "Tokaj",
      "Tokaji",
      "Aszú",
      "Furmint",
      "Puttonyos"
    ],
    "chain": "강 주변 습도/안개 → Botrytis → 당·산·향 농축 → 높은 산도와 단맛이 공존",
    "prompt": "Tokaji Aszú가 단순히 '따뜻해서 단 와인'이 아닌 이유를 설명해보세요.",
    "answer": "Tokaji Aszú의 핵심은 귀부입니다. 가을 안개가 Botrytis를 돕고 이후 건조한 조건에서 포도 수분이 증발하며 당·산·향이 농축됩니다. Furmint의 높은 산도가 잔당과 균형을 이룹니다.",
    "regions": [
      {
        "name": "Tokaj",
        "climate": "대륙성 + 가을 안개",
        "grapes": "Furmint, Hárslevelű",
        "key": "Botrytis, Aszú, 높은 산도와 단맛의 균형."
      }
    ]
  },
  "italy": {
    "name": "이탈리아",
    "en": "Italy",
    "flag": "🇮🇹",
    "group": "유럽",
    "lat": "약 36°–47°N",
    "mapCore": "북부는 알프스·고도의 영향, 남부는 지중해성의 따뜻하고 건조한 조건이 뚜렷.",
    "climate": [
      "북부 대륙성/고도",
      "중·남부 지중해성"
    ],
    "currents": "지중해가 반도 전반의 기온을 완화.",
    "winds": "해륙풍과 산악 바람이 다양. 고도와 노출이 산도 유지에 중요.",
    "topography": "알프스·아펜니노 산맥, 구릉, 화산 토양 등 지형 다양성이 큼.",
    "grapes": [
      "Nebbiolo",
      "Sangiovese",
      "Corvina",
      "Garganega",
      "Aglianico",
      "Nero d'Avola"
    ],
    "style": "토착 품종과 지명 중심 라벨이 많아 지역-품종 연결 암기가 중요.",
    "label": [
      "Barolo",
      "Barbaresco",
      "Chianti Classico",
      "Brunello di Montalcino",
      "Valpolicella",
      "Soave",
      "Etna"
    ],
    "chain": "이탈리아 내 위치 확인 → 북부 고도/대륙성 vs 남부 지중해성 → 토착 품종 연결 → 스타일 예상",
    "prompt": "Barolo 라벨만 보고 기후·품종·구조를 설명해보세요.",
    "answer": "Barolo는 Piemonte의 구릉 산지에서 Nebbiolo로 생산됩니다. 알프스와 대륙성 환경의 영향을 받으며, 높은 산도와 높은 탄닌, 붉은 과실·꽃·타르 계열의 향과 긴 숙성 잠재력을 예상할 수 있습니다.",
    "regions": [
      {
        "name": "Piemonte",
        "climate": "대륙성 + 알프스 영향",
        "grapes": "Nebbiolo, Barbera, Dolcetto, Moscato",
        "key": "안개·구릉·고도. Nebbiolo는 늦게 익고 높은 산도·탄닌.",
        "subregions": [
          {
            "place": "Barolo",
            "grapes": "Nebbiolo",
            "style": "높은 산도·탄닌, 장미·체리·타르·향신료, 긴 숙성 잠재력.",
            "label": "Barolo DOCG"
          },
          {
            "place": "Barbaresco",
            "grapes": "Nebbiolo",
            "style": "Barolo보다 약간 더 이른 접근성이 흔하지만 여전히 높은 산도·탄닌.",
            "label": "Barbaresco DOCG"
          },
          {
            "place": "Asti / Moscato d'Asti",
            "grapes": "Moscato Bianco",
            "style": "향기로운 꽃·포도·복숭아. Moscato d'Asti는 낮은 알코올과 가벼운 스파클.",
            "label": "Moscato d'Asti DOCG, Asti DOCG"
          },
          {
            "place": "Barbera d'Asti / d'Alba",
            "grapes": "Barbera",
            "style": "높은 산도, 낮~중 탄닌, 붉고 검은 과실.",
            "label": "Barbera d'Asti, Barbera d'Alba"
          }
        ]
      },
      {
        "name": "Veneto",
        "climate": "대륙성~완화된 기후",
        "grapes": "Corvina, Rondinella, Garganega, Glera",
        "key": "알프스·아드리아해·Lake Garda의 완화 영향. 건조 포도(Appassimento) 스타일 중요.",
        "subregions": [
          {
            "place": "Valpolicella",
            "grapes": "Corvina 중심",
            "style": "붉은 체리, 중간 산도·탄닌, 가벼움~중간 바디.",
            "label": "Valpolicella DOC"
          },
          {
            "place": "Amarone della Valpolicella",
            "grapes": "Corvina 중심, 건조 포도",
            "style": "건포도·말린 체리·높은 알코올·풍부한 바디·높은 농축도.",
            "label": "Amarone della Valpolicella DOCG"
          },
          {
            "place": "Soave",
            "grapes": "Garganega",
            "style": "레몬·배·아몬드, 중~높은 산도. Classico는 구릉지 중심.",
            "label": "Soave, Soave Classico"
          },
          {
            "place": "Prosecco / Conegliano-Valdobbiadene",
            "grapes": "Glera",
            "style": "탱크 방식, 사과·배·꽃, 가벼운 바디와 산뜻함.",
            "label": "Prosecco DOC, Conegliano Valdobbiadene Prosecco Superiore DOCG"
          }
        ]
      },
      {
        "name": "Trentino-Alto Adige / Friuli",
        "climate": "북부 고도·대륙성 / 아드리아 완화",
        "grapes": "Pinot Grigio, Pinot Bianco, Chardonnay, Sauvignon Blanc",
        "key": "알프스 고도와 큰 일교차로 향·산도 유지.",
        "subregions": [
          {
            "place": "Alto Adige",
            "grapes": "Pinot Grigio, Pinot Bianco, Gewürztraminer",
            "style": "높은 산도, 선명한 향, 드라이하고 정교한 화이트.",
            "label": "Alto Adige DOC"
          },
          {
            "place": "Friuli-Venezia Giulia",
            "grapes": "Pinot Grigio, Sauvignon Blanc, Friulano",
            "style": "향이 선명하고 농축된 드라이 화이트.",
            "label": "Friuli, Collio, Colli Orientali"
          }
        ]
      },
      {
        "name": "Tuscany",
        "climate": "따뜻한 지중해성 + 고도",
        "grapes": "Sangiovese, Cabernet Sauvignon, Merlot",
        "key": "구릉과 고도 덕분에 따뜻한 기후에서도 산도 유지.",
        "subregions": [
          {
            "place": "Chianti / Chianti Classico",
            "grapes": "Sangiovese 중심",
            "style": "체리·붉은 자두·허브, 높은 산도, 중~높은 탄닌.",
            "label": "Chianti DOCG, Chianti Classico DOCG"
          },
          {
            "place": "Brunello di Montalcino",
            "grapes": "Sangiovese (Brunello)",
            "style": "더 농축되고 높은 탄닌·산도, 숙성 잠재력 큼.",
            "label": "Brunello di Montalcino DOCG"
          },
          {
            "place": "Vino Nobile di Montepulciano",
            "grapes": "Sangiovese (Prugnolo Gentile)",
            "style": "체리·허브·가죽, 구조적이고 숙성 가능.",
            "label": "Vino Nobile di Montepulciano DOCG"
          },
          {
            "place": "Bolgheri",
            "grapes": "Cabernet Sauvignon, Merlot 등",
            "style": "익은 검은 과실, 오크, 구조적인 국제 품종 블렌드.",
            "label": "Bolgheri DOC"
          }
        ]
      },
      {
        "name": "Central & Southern Italy",
        "climate": "따뜻한 지중해성",
        "grapes": "Montepulciano, Aglianico, Primitivo, Nero d'Avola, Fiano, Greco",
        "key": "강한 일조·건조함. 고도와 해풍이 산도 유지에 중요.",
        "subregions": [
          {
            "place": "Montepulciano d'Abruzzo",
            "grapes": "Montepulciano",
            "style": "검은 체리·자두, 중~높은 탄닌, 풍부한 과실.",
            "label": "Montepulciano d'Abruzzo DOC"
          },
          {
            "place": "Taurasi / Campania",
            "grapes": "Aglianico",
            "style": "높은 산도·탄닌, 검은 과실·가죽·향신료, 장기 숙성.",
            "label": "Taurasi DOCG"
          },
          {
            "place": "Puglia / Primitivo di Manduria",
            "grapes": "Primitivo",
            "style": "익은 검은 과실, 높은 알코올, 부드럽고 풍부.",
            "label": "Primitivo di Manduria"
          },
          {
            "place": "Sicilia / Etna",
            "grapes": "Nero d'Avola / Nerello Mascalese",
            "style": "시칠리아 저지대는 더 익고 풍부, Etna는 고도·화산 토양으로 더 높은 산도와 섬세함.",
            "label": "Sicilia DOC, Etna DOC"
          }
        ]
      }
    ],
    "dense": true,
    "denseNote": "핵심국가 보강판: 산지 → 세부산지/도시 → 품종 → 예상 스타일 → 라벨 단서까지 확장"
  },
  "greece": {
    "name": "그리스",
    "en": "Greece",
    "flag": "🇬🇷",
    "group": "유럽",
    "lat": "약 35°–41°N",
    "mapCore": "따뜻한 지중해성 기후. 바람과 고도, 섬의 해양 영향이 과도한 열을 완화.",
    "climate": [
      "지중해성"
    ],
    "currents": "에게해와 지중해의 해양 영향.",
    "winds": "에게해의 강한 바람은 증산과 병해 압력에 큰 영향을 줌.",
    "topography": "섬과 산악 지형이 많아 고도·노출·화산 토양 등 지역차가 큼.",
    "grapes": [
      "Assyrtiko",
      "Agiorgitiko",
      "Xinomavro"
    ],
    "style": "Assyrtiko는 따뜻하고 건조한 환경에서도 높은 산도를 유지하는 것으로 유명.",
    "label": [
      "Santorini",
      "Assyrtiko",
      "Nemea",
      "Naoussa"
    ],
    "chain": "강한 일조·건조 → 완숙도↑ → 해풍/고도/품종 특성으로 산도 유지",
    "prompt": "Santorini Assyrtiko가 더운 지역인데도 높은 산도를 가질 수 있는 이유를 설명해보세요.",
    "answer": "Santorini는 따뜻하고 건조하지만 해양 영향, 강한 바람, 그리고 Assyrtiko 자체의 높은 산도 유지 능력이 결합됩니다.",
    "regions": [
      {
        "name": "Santorini",
        "climate": "건조한 지중해성",
        "grapes": "Assyrtiko",
        "key": "강풍, 낮은 강수, 화산성 토양, 높은 산도."
      }
    ]
  },
  "portugal": {
    "name": "포르투갈",
    "en": "Portugal",
    "flag": "🇵🇹",
    "group": "유럽",
    "lat": "약 37°–42°N",
    "mapCore": "서쪽은 대서양 영향이 강하고 내륙으로 갈수록 더 덥고 건조해짐.",
    "climate": [
      "해양성 → 내륙 대륙성/건조"
    ],
    "currents": "대서양의 차가운 해양 영향이 서부 해안의 기온을 낮춤.",
    "winds": "대서양의 습한 공기와 해풍이 서부 지역에 영향.",
    "topography": "Douro의 가파른 계곡과 내륙의 고온·건조 조건이 핵심.",
    "grapes": [
      "Touriga Nacional",
      "Touriga Franca",
      "Tinta Roriz",
      "Alvarinho"
    ],
    "style": "Port와 Douro 레드, Vinho Verde의 가볍고 높은 산도 스타일을 대비해서 기억.",
    "label": [
      "Douro",
      "Porto",
      "Vinho Verde",
      "Alvarinho"
    ],
    "chain": "대서양과의 거리 확인 → 서부는 서늘·습윤 / 내륙은 덥고 건조 → 품종과 스타일 차이 추론",
    "prompt": "Douro와 Vinho Verde가 같은 포르투갈인데 스타일이 크게 다른 이유를 설명해보세요.",
    "answer": "Vinho Verde는 대서양에 가까워 더 서늘하고 습해 높은 산도와 가벼운 스타일이 나타납니다. Douro는 더 내륙이라 훨씬 덥고 건조하며 농축된 레드와 Port에 적합합니다.",
    "regions": [
      {
        "name": "Douro",
        "climate": "더운 내륙성·건조",
        "grapes": "Touriga Nacional 등",
        "key": "가파른 계곡, 강한 일조, Port와 농축된 레드."
      },
      {
        "name": "Vinho Verde",
        "climate": "서늘한 해양성",
        "grapes": "Alvarinho, Loureiro",
        "key": "높은 산도, 가벼운 바디, 신선한 스타일."
      }
    ]
  },
  "spain": {
    "name": "스페인",
    "en": "Spain",
    "flag": "🇪🇸",
    "group": "유럽",
    "lat": "약 36°–43°N",
    "mapCore": "대서양·대륙성·지중해성이라는 세 가지 기후 축으로 이해하면 쉬움.",
    "climate": [
      "북서부 해양성",
      "중부 대륙성",
      "동·남부 지중해성"
    ],
    "currents": "대서양과 지중해의 영향이 지역별로 다름.",
    "winds": "해풍과 지역풍이 고온을 완화. 내륙 고원은 일교차가 큼.",
    "topography": "Meseta 고원, 산맥, 강 계곡, 높은 고도가 핵심.",
    "grapes": [
      "Tempranillo",
      "Garnacha",
      "Albariño",
      "Verdejo",
      "Monastrell"
    ],
    "style": "Rioja/Ribera del Duero의 Tempranillo, Rías Baixas의 Albariño를 연결.",
    "label": [
      "Rioja",
      "Ribera del Duero",
      "Rías Baixas",
      "Priorat",
      "Cava",
      "Jerez"
    ],
    "chain": "위치 + 고도 확인 → 기후 유형 판별 → 대표 품종 → 숙도·산도·바디 추론",
    "prompt": "Ribera del Duero가 비교적 낮은 위도인데도 산도를 유지할 수 있는 이유를 설명해보세요.",
    "answer": "Ribera del Duero는 높은 고도에 있어 밤 기온이 크게 떨어지는 큰 일교차를 가집니다. 충분한 일조로 포도를 익히면서도 산도를 유지하는 데 도움이 됩니다.",
    "regions": [
      {
        "name": "Rioja",
        "climate": "대서양·대륙성·지중해 영향의 전이지대",
        "grapes": "Tempranillo, Garnacha, Graciano / Viura",
        "key": "서쪽 Rioja Alta/Alavesa는 더 서늘, 동쪽 Rioja Oriental은 더 따뜻. 숙성 등급과 오크 스타일을 함께 봄.",
        "subregions": [
          {
            "place": "Rioja Alta",
            "grapes": "Tempranillo 중심",
            "style": "높은 산도와 균형 잡힌 붉은 과실, 전통 오크 숙성에 적합.",
            "label": "Rioja, Crianza, Reserva, Gran Reserva"
          },
          {
            "place": "Rioja Alavesa",
            "grapes": "Tempranillo",
            "style": "상대적으로 서늘하고 석회질 토양, 향과 산도가 선명한 스타일.",
            "label": "Rioja Alavesa"
          },
          {
            "place": "Rioja Oriental",
            "grapes": "Garnacha 비중 증가",
            "style": "더 따뜻하고 건조해 높은 숙도와 바디.",
            "label": "Rioja Oriental"
          }
        ]
      },
      {
        "name": "Ribera del Duero",
        "climate": "대륙성 + 높은 고도",
        "grapes": "Tempranillo (Tinto Fino/Tinta del País)",
        "key": "낮의 강한 일조 + 차가운 밤 = 농축도와 산도의 균형.",
        "subregions": [
          {
            "place": "Duero 고원 / 주요 마을권",
            "grapes": "Tempranillo",
            "style": "검은 과실, 높은 탄닌, 높은 산도, 오크 숙성, 장기 숙성.",
            "label": "Ribera del Duero DO"
          }
        ]
      },
      {
        "name": "Galicia",
        "climate": "서늘하고 습한 해양성",
        "grapes": "Albariño, Godello, Mencía",
        "key": "대서양 강우와 병해 위험. 높은 산도와 향을 살리는 화이트가 핵심.",
        "subregions": [
          {
            "place": "Rías Baixas",
            "grapes": "Albariño",
            "style": "높은 산도, 레몬·복숭아·살구, 때때로 약간의 염분감.",
            "label": "Rías Baixas DO"
          },
          {
            "place": "Valdeorras",
            "grapes": "Godello",
            "style": "시트러스·핵과류, 중간~높은 바디와 산도.",
            "label": "Valdeorras DO"
          },
          {
            "place": "Bierzo",
            "grapes": "Mencía",
            "style": "붉은 과실·꽃·허브, 중간 바디, 비교적 신선한 레드.",
            "label": "Bierzo DO"
          }
        ]
      },
      {
        "name": "Rueda & Castilla y León",
        "climate": "대륙성 + 높은 고도",
        "grapes": "Verdejo, Sauvignon Blanc",
        "key": "강한 낮 일조와 차가운 밤. Verdejo는 허브·시트러스·약간의 쌉쌀함.",
        "subregions": [
          {
            "place": "Rueda",
            "grapes": "Verdejo",
            "style": "시트러스·허브·복숭아, 높은 산도, 드라이.",
            "label": "Rueda DO"
          }
        ]
      },
      {
        "name": "Catalunya",
        "climate": "지중해성 + 고도",
        "grapes": "Garnacha, Cariñena, Macabeo, Xarel-lo, Parellada",
        "key": "지중해의 따뜻함과 산악 고도가 공존.",
        "subregions": [
          {
            "place": "Priorat",
            "grapes": "Garnacha, Cariñena",
            "style": "농축된 검은 과실, 높은 알코올, 높은 탄닌, 슬레이트(Llicorella) 토양.",
            "label": "Priorat DOCa"
          },
          {
            "place": "Penedès / Cava",
            "grapes": "Macabeo, Xarel-lo, Parellada (+ Chardonnay, Pinot Noir)",
            "style": "전통 방식 스파클링, 높은 산도와 숙성 효모 향.",
            "label": "Cava DO"
          }
        ]
      },
      {
        "name": "Jerez / Sherry",
        "climate": "따뜻하고 건조, 대서양 영향",
        "grapes": "Palomino, Pedro Ximénez, Moscatel",
        "key": "Albariza 토양, Flor, Solera 시스템이 스타일을 결정.",
        "subregions": [
          {
            "place": "Jerez de la Frontera",
            "grapes": "Palomino",
            "style": "Fino: 매우 드라이, 높은 산도 느낌, 아몬드·빵/효모, 낮은 산화 풍미.",
            "label": "Fino, Manzanilla, Amontillado, Oloroso, PX"
          },
          {
            "place": "Sanlúcar de Barrameda",
            "grapes": "Palomino",
            "style": "Manzanilla: 해안의 Flor가 두껍게 유지되며 가볍고 짭짤한 뉘앙스.",
            "label": "Manzanilla"
          }
        ]
      }
    ],
    "dense": true,
    "denseNote": "핵심국가 보강판: 산지 → 세부산지/도시 → 품종 → 예상 스타일 → 라벨 단서까지 확장"
  },
  "switzerland": {
    "name": "스위스",
    "en": "Switzerland",
    "flag": "🇨🇭",
    "group": "유럽",
    "lat": "약 46°–47°N",
    "mapCore": "알프스와 호수의 영향을 받는 작은 산지 국가. 고도와 사면 방향이 매우 중요.",
    "climate": [
      "대륙성",
      "고도 영향"
    ],
    "currents": "해류보다 알프스·호수의 영향이 핵심.",
    "winds": "산악 바람과 계곡 미기후가 중요.",
    "topography": "가파른 테라스와 호반 포도밭, 강한 고도 차이가 특징.",
    "grapes": [
      "Chasselas",
      "Pinot Noir",
      "Gamay",
      "Merlot"
    ],
    "style": "국내 소비가 많고 지역성이 강함. 서늘하고 섬세한 스타일의 와인이 많음.",
    "label": [
      "Valais",
      "Vaud",
      "Geneva",
      "Ticino",
      "Chasselas"
    ],
    "chain": "알프스/호수 → 미기후 형성 → 고도와 일조 균형 → 섬세한 스타일 추론",
    "prompt": "스위스 와인에서 호수와 고도가 중요한 이유를 설명해보세요.",
    "answer": "호수는 온도를 완화하고 빛을 반사해 숙성을 돕습니다. 동시에 고도는 야간 기온을 낮춰 산도 유지에 도움을 줍니다.",
    "regions": [
      {
        "name": "Valais",
        "climate": "건조한 내륙성 + 고도",
        "grapes": "Chasselas, Pinot Noir",
        "key": "알프스 계곡, 일조량이 많고 비교적 건조."
      },
      {
        "name": "Vaud",
        "climate": "호수 영향",
        "grapes": "Chasselas",
        "key": "레만호 주변의 온도 완화 효과."
      }
    ]
  },
  "england": {
    "name": "영국",
    "en": "England",
    "flag": "🇬🇧",
    "group": "유럽",
    "lat": "약 50°–52°N",
    "mapCore": "매우 서늘한 해양성 기후지만 최근 스파클링 와인 생산으로 주목.",
    "climate": [
      "서늘한 해양성"
    ],
    "currents": "대서양과 북대서양 해류의 온화화 영향으로 극단적 한랭이 완화.",
    "winds": "해양 바람이 강하고 병해 압력 및 빈티지 변동이 큼.",
    "topography": "완만한 구릉과 석회질 토양 지역이 중요.",
    "grapes": [
      "Chardonnay",
      "Pinot Noir",
      "Pinot Meunier"
    ],
    "style": "샴페인 품종을 이용한 높은 산도의 스파클링 와인이 대표적.",
    "label": [
      "Sussex",
      "Kent",
      "Hampshire",
      "English Sparkling Wine"
    ],
    "chain": "높은 위도 + 서늘한 해양성 → 완숙은 어렵지만 높은 산도 확보 → 스파클링 적합",
    "prompt": "영국이 스파클링 와인에 적합한 이유를 설명해보세요.",
    "answer": "영국은 매우 서늘한 해양성 기후로 산도가 잘 유지됩니다. 이는 스파클링 와인 베이스 와인에 이상적인 조건입니다.",
    "regions": [
      {
        "name": "Sussex / Kent",
        "climate": "서늘한 해양성",
        "grapes": "Chardonnay, Pinot Noir, Pinot Meunier",
        "key": "영국 스파클링의 중심지."
      }
    ]
  },
  "slovenia": {
    "name": "슬로베니아",
    "en": "Slovenia",
    "flag": "🇸🇮",
    "group": "유럽",
    "lat": "약 45°–47°N",
    "mapCore": "알프스, 아드리아해, 판노니아 평원의 영향이 만나는 교차지대.",
    "climate": [
      "대륙성",
      "해양성",
      "고도 영향"
    ],
    "currents": "아드리아해의 완화 영향이 서부 일부에 작용.",
    "winds": "산악 바람과 해풍이 복합적으로 작용.",
    "topography": "구릉과 테라스, 산악 지형이 많아 배수와 일조 확보가 좋음.",
    "grapes": [
      "Rebula",
      "Sauvignon Blanc",
      "Merlot",
      "Refosco"
    ],
    "style": "동서남북의 영향이 섞여 화이트부터 오렌지 와인까지 다양.",
    "label": [
      "Brda",
      "Vipava",
      "Podravje"
    ],
    "chain": "위치상 교차지대 → 다양한 기후/스타일 공존",
    "prompt": "슬로베니아 와인이 다양한 스타일을 보이는 이유는?",
    "answer": "슬로베니아는 알프스·아드리아해·내륙 평원의 영향이 만나는 교차지대이기 때문에 다양한 품종과 스타일이 공존합니다.",
    "regions": [
      {
        "name": "Brda",
        "climate": "완화된 해양성 + 구릉",
        "grapes": "Rebula, Merlot",
        "key": "이탈리아 국경 인접, 고품질 화이트와 오렌지 와인."
      }
    ]
  },
  "croatia": {
    "name": "크로아티아",
    "en": "Croatia",
    "flag": "🇭🇷",
    "group": "유럽",
    "lat": "약 42°–46°N",
    "mapCore": "아드리아해 연안의 지중해성 산지와 내륙 대륙성 산지가 공존.",
    "climate": [
      "해안 지중해성",
      "내륙 대륙성"
    ],
    "currents": "아드리아해가 해안 지역을 완화.",
    "winds": "Bora 같은 지역풍이 건조하고 선선한 조건을 만들 수 있음.",
    "topography": "해안의 섬과 가파른 사면, 내륙 구릉지.",
    "grapes": [
      "Plavac Mali",
      "Graševina",
      "Malvazija Istarska"
    ],
    "style": "해안은 햇빛이 풍부한 지중해 스타일, 내륙은 더 서늘하고 산도 높은 스타일.",
    "label": [
      "Dalmatia",
      "Istria",
      "Slavonia"
    ],
    "chain": "해안 vs 내륙 구분 → 기후 차이 → 품종과 스타일 차이 추론",
    "prompt": "Dalmatia와 Slavonia의 와인 스타일이 다른 이유는?",
    "answer": "Dalmatia는 아드리아해 연안의 따뜻한 지중해성 기후이며, Slavonia는 더 내륙의 대륙성 기후라 산도와 품종 구성이 달라집니다.",
    "regions": [
      {
        "name": "Dalmatia",
        "climate": "지중해성",
        "grapes": "Plavac Mali",
        "key": "섬, 햇빛, 강한 풍미의 레드."
      },
      {
        "name": "Istria",
        "climate": "완화된 해양성",
        "grapes": "Malvazija Istarska",
        "key": "향기로운 화이트와 올리브 오일 지역으로도 유명."
      }
    ]
  },
  "romania": {
    "name": "루마니아",
    "en": "Romania",
    "flag": "🇷🇴",
    "group": "유럽",
    "lat": "약 43°–48°N",
    "mapCore": "대륙성 기후와 흑해의 완화 영향이 함께 작용하는 동유럽 주요 와인 생산국.",
    "climate": [
      "대륙성"
    ],
    "currents": "흑해 인접 지역은 일부 온도 완화 혜택을 받음.",
    "winds": "대륙성 바람과 분지 지형의 미기후가 중요.",
    "topography": "카르파티아 산맥과 구릉지, 강 유역이 다양.",
    "grapes": [
      "Fetească Neagră",
      "Fetească Albă",
      "Merlot",
      "Chardonnay"
    ],
    "style": "토착 품종과 국제 품종이 공존하며, 가격 대비 우수한 와인이 많음.",
    "label": [
      "Dealu Mare",
      "Murfatlar",
      "Transylvania"
    ],
    "chain": "대륙성 기본 + 흑해/고도 완화 → 토착 품종 연결",
    "prompt": "루마니아 와인에서 토착 품종을 보는 이유는?",
    "answer": "루마니아는 오랜 와인 역사와 다양한 기후대를 가져 Fetească 계열 같은 토착 품종 전통이 강하게 남아 있습니다.",
    "regions": [
      {
        "name": "Dealu Mare",
        "climate": "따뜻한 대륙성",
        "grapes": "Fetească Neagră, Merlot",
        "key": "레드 와인 중심."
      },
      {
        "name": "Transylvania",
        "climate": "서늘한 대륙성",
        "grapes": "화이트 품종 중심",
        "key": "좀 더 산도 높은 스타일."
      }
    ]
  },
  "moldova": {
    "name": "몰도바",
    "en": "Moldova",
    "flag": "🇲🇩",
    "group": "유럽",
    "lat": "약 45°–48°N",
    "mapCore": "작지만 와인 비중이 매우 큰 동유럽 생산국. 대륙성 기후와 흑해의 부분적 영향.",
    "climate": [
      "대륙성"
    ],
    "currents": "흑해 인접성으로 일부 완화 효과.",
    "winds": "내륙 대륙성 바람이 우세.",
    "topography": "완만한 구릉과 흑토, 석회질 토양이 분포.",
    "grapes": [
      "Fetească Albă",
      "Fetească Neagră",
      "Rara Neagră",
      "Cabernet Sauvignon"
    ],
    "style": "스틸 와인과 전통 방식 스파클링 모두 생산.",
    "label": [
      "Codru",
      "Ștefan Vodă",
      "Valul lui Traian"
    ],
    "chain": "대륙성 기본 → 흑해 접근성/구릉지 → 토착 + 국제 품종 공존",
    "prompt": "몰도바가 와인 산지로 유리한 이유를 설명해보세요.",
    "answer": "몰도바는 대륙성 기후, 비교적 완만한 구릉, 비옥한 토양을 바탕으로 오래된 와인 전통을 유지해왔습니다.",
    "regions": [
      {
        "name": "Codru",
        "climate": "완화된 대륙성",
        "grapes": "스파클링·화이트 중심",
        "key": "수도 주변 핵심 산지."
      }
    ]
  },
  "georgia": {
    "name": "조지아",
    "en": "Georgia",
    "flag": "🇬🇪",
    "group": "중동/캅카스",
    "lat": "약 41°–43°N",
    "mapCore": "캅카스 산맥과 흑해 영향이 만나는 매우 오래된 와인 생산지.",
    "climate": [
      "대륙성",
      "흑해 완화 영향"
    ],
    "currents": "흑해가 서부 지역 기온을 완화.",
    "winds": "캅카스 산악 지형이 바람과 강수 분포를 바꿈.",
    "topography": "계곡·구릉·산악 지형이 다양하며 Kakheti가 핵심.",
    "grapes": [
      "Saperavi",
      "Rkatsiteli"
    ],
    "style": "크베브리(qvevri) 전통, 오렌지 와인, 토착 품종이 핵심.",
    "label": [
      "Kakheti",
      "Kartli",
      "Imereti",
      "Qvevri"
    ],
    "chain": "오랜 전통 + 토착 품종 + 캅카스 지형 → 독특한 양조 스타일과 지역성",
    "prompt": "조지아 와인을 설명할 때 품종 외에 꼭 언급할 수 있는 요소는?",
    "answer": "조지아는 크베브리라는 전통적인 항아리 발효·숙성 방식과 오렌지 와인 전통을 함께 설명할 수 있습니다.",
    "regions": [
      {
        "name": "Kakheti",
        "climate": "대륙성",
        "grapes": "Saperavi, Rkatsiteli",
        "key": "조지아 최대 핵심 산지."
      }
    ]
  },
  "turkey": {
    "name": "튀르키예",
    "en": "Türkiye",
    "flag": "🇹🇷",
    "group": "중동/캅카스",
    "lat": "약 36°–40°N",
    "mapCore": "넓은 국토와 다양한 고도 덕분에 지중해성부터 대륙성까지 폭넓은 조건을 가짐.",
    "climate": [
      "지중해성",
      "대륙성",
      "고도 영향"
    ],
    "currents": "해안은 지중해와 에게해, 흑해의 완화 영향을 받음.",
    "winds": "해풍과 고원성 대륙풍이 공존.",
    "topography": "내륙 고원과 해안 산지의 차이가 크다.",
    "grapes": [
      "Kalecik Karası",
      "Öküzgözü",
      "Boğazkere",
      "Narince"
    ],
    "style": "토착 품종 비중이 높고 지역차가 큼.",
    "label": [
      "Aegean",
      "Central Anatolia",
      "Cappadocia"
    ],
    "chain": "해안 vs 고원 내륙 구분 → 기후/고도 차이 → 토착 품종과 스타일 추론",
    "prompt": "튀르키예 와인을 볼 때 먼저 봐야 할 지리 요소는?",
    "answer": "해안 산지인지 내륙 고원 산지인지가 가장 중요합니다. 같은 나라 안에서도 기후 차이가 크기 때문입니다.",
    "regions": [
      {
        "name": "Aegean",
        "climate": "따뜻한 지중해성",
        "grapes": "국제 품종 + 토착 품종",
        "key": "상업적 와인 생산 비중이 큰 지역."
      }
    ]
  },
  "israel": {
    "name": "이스라엘",
    "en": "Israel",
    "flag": "🇮🇱",
    "group": "중동/캅카스",
    "lat": "약 31°–33°N",
    "mapCore": "따뜻하고 건조하지만 고도와 야간 기온 하강이 중요한 산지.",
    "climate": [
      "따뜻한 지중해성",
      "건조"
    ],
    "currents": "지중해의 일부 완화 영향.",
    "winds": "해풍과 고지대 밤 기온 하강이 품질 유지에 도움.",
    "topography": "Galilee, Golan Heights, Judean Hills 등 고도가 중요한 산지.",
    "grapes": [
      "Cabernet Sauvignon",
      "Merlot",
      "Syrah",
      "Chardonnay"
    ],
    "style": "건조한 기후 속에서도 고도 덕분에 균형 잡힌 국제 품종 와인 생산.",
    "label": [
      "Galilee",
      "Golan Heights",
      "Judean Hills"
    ],
    "chain": "더운 기후 → 고도와 야간 냉각 중요 → 산도 유지 여부로 스타일 차이",
    "prompt": "이스라엘 와인에서 왜 고도가 중요한가요?",
    "answer": "따뜻한 기후에서 지나친 열 축적을 줄이고 야간 기온을 낮춰 산도와 향을 유지하는 데 고도가 중요합니다.",
    "regions": [
      {
        "name": "Galilee / Golan Heights",
        "climate": "고도 영향이 있는 따뜻한 지중해성",
        "grapes": "Cabernet Sauvignon, Chardonnay",
        "key": "이스라엘 고품질 산지 중심."
      }
    ]
  },
  "lebanon": {
    "name": "레바논",
    "en": "Lebanon",
    "flag": "🇱🇧",
    "group": "중동/캅카스",
    "lat": "약 33°–34°N",
    "mapCore": "Bekaa Valley의 고도와 건조한 기후가 핵심인 역사 깊은 산지.",
    "climate": [
      "따뜻한 지중해성",
      "건조"
    ],
    "currents": "해안은 지중해 영향을 받지만 주요 산지는 내륙 고지대.",
    "winds": "건조한 공기와 고도 덕분에 병해 압력이 낮아질 수 있음.",
    "topography": "Bekaa Valley는 고도가 높아 더운 위도 대비 산도 유지에 유리.",
    "grapes": [
      "Cabernet Sauvignon",
      "Cinsault",
      "Carignan",
      "Syrah",
      "Obeidi"
    ],
    "style": "풍부한 태양광, 건조한 조건, 고도에서 오는 균형이 특징.",
    "label": [
      "Bekaa Valley"
    ],
    "chain": "따뜻한 위도 + 고도 → 완숙도 확보 + 산도 보존",
    "prompt": "Bekaa Valley가 왜 와인 생산에 유리한가요?",
    "answer": "높은 고도와 건조한 조건 덕분에 더운 지역임에도 포도 품질을 안정적으로 확보할 수 있습니다.",
    "regions": [
      {
        "name": "Bekaa Valley",
        "climate": "따뜻하나 고도 영향",
        "grapes": "Cinsault, Cabernet Sauvignon, Syrah",
        "key": "레바논 핵심 산지."
      }
    ]
  },
  "usa": {
    "name": "미국",
    "en": "United States",
    "flag": "🇺🇸",
    "group": "아메리카",
    "lat": "주요 서부 산지 약 32°–47°N",
    "mapCore": "서부 와인 산지는 태평양, 차가운 해류, 산맥과 Rain Shadow로 이해.",
    "climate": [
      "California 다양",
      "Oregon 서늘",
      "Washington 건조한 대륙성"
    ],
    "currents": "California Current가 서해안을 따라 북쪽에서 남쪽으로 흐르며 해안을 냉각.",
    "winds": "차가운 해양 공기와 안개가 해안 틈을 통해 유입.",
    "topography": "Coast Ranges, Sierra Nevada, Cascade 등 산맥이 해양 영향과 강수량을 좌우.",
    "grapes": [
      "Cabernet Sauvignon",
      "Chardonnay",
      "Pinot Noir",
      "Zinfandel",
      "Syrah",
      "Merlot"
    ],
    "style": "California의 따뜻한 지역부터 Oregon의 Pinot Noir, Washington의 건조한 내륙까지 차이가 큼.",
    "label": [
      "Napa Valley",
      "Sonoma",
      "Russian River Valley",
      "Willamette Valley",
      "Columbia Valley"
    ],
    "chain": "태평양과의 거리 + 산맥의 틈 + 고도 확인 → 해양 냉각/안개 여부 판단 → 품종과 숙도 추론",
    "prompt": "Napa와 Sonoma Coast가 가까운데도 와인 스타일이 달라질 수 있는 이유를 설명해보세요.",
    "answer": "차가운 California Current의 영향은 같지만 해양 공기가 내륙으로 들어가는 정도는 산맥과 지형에 따라 달라집니다. 해안 가까운 Sonoma Coast는 더 서늘하고, Napa 일부는 더 따뜻해 Cabernet Sauvignon의 높은 숙도를 얻기 쉽습니다.",
    "regions": [
      {
        "name": "California – Napa Valley",
        "climate": "따뜻한 지중해성, 해양 영향이 남쪽에서 유입",
        "grapes": "Cabernet Sauvignon, Merlot, Chardonnay, Sauvignon Blanc",
        "key": "San Pablo Bay에서 들어오는 차가운 공기·안개와 고도 차이로 AVA별 스타일 차이가 큼.",
        "subregions": [
          {
            "place": "Carneros",
            "grapes": "Pinot Noir, Chardonnay",
            "style": "Bay 영향으로 서늘. 높은 산도, 스파클링과 서늘한 품종에 적합.",
            "label": "Los Carneros / Carneros"
          },
          {
            "place": "Oakville / Rutherford",
            "grapes": "Cabernet Sauvignon",
            "style": "익은 카시스·블랙체리, 구조적인 탄닌, 오크 숙성.",
            "label": "Oakville AVA, Rutherford AVA"
          },
          {
            "place": "Stags Leap District",
            "grapes": "Cabernet Sauvignon",
            "style": "잘 익은 과실과 비교적 세련된 탄닌의 균형.",
            "label": "Stags Leap District AVA"
          },
          {
            "place": "Howell Mountain / Mount Veeder",
            "grapes": "Cabernet Sauvignon",
            "style": "고도와 얇은 토양으로 더 구조적이고 강한 탄닌, 높은 농축도.",
            "label": "Howell Mountain AVA, Mount Veeder AVA"
          }
        ]
      },
      {
        "name": "California – Sonoma County",
        "climate": "해양성 영향의 강도가 지역별로 크게 다름",
        "grapes": "Pinot Noir, Chardonnay, Cabernet Sauvignon, Zinfandel, Sauvignon Blanc",
        "key": "Pacific Ocean, 안개, 산맥의 틈이 핵심. 같은 Sonoma 안에서도 매우 다양한 기후.",
        "subregions": [
          {
            "place": "Russian River Valley",
            "grapes": "Pinot Noir, Chardonnay",
            "style": "안개 영향으로 서늘. 높은 산도와 붉은 과실/시트러스.",
            "label": "Russian River Valley AVA"
          },
          {
            "place": "Sonoma Coast",
            "grapes": "Pinot Noir, Chardonnay",
            "style": "강한 해양 영향, 더 선명한 산도와 섬세한 과실.",
            "label": "Sonoma Coast AVA"
          },
          {
            "place": "Alexander Valley",
            "grapes": "Cabernet Sauvignon",
            "style": "더 따뜻한 내륙 조건, 익은 검은 과실과 풍부한 바디.",
            "label": "Alexander Valley AVA"
          },
          {
            "place": "Dry Creek Valley",
            "grapes": "Zinfandel",
            "style": "익은 블랙베리·향신료, 높은 알코올 가능.",
            "label": "Dry Creek Valley AVA"
          }
        ]
      },
      {
        "name": "California – Central Coast",
        "climate": "태평양의 냉각 + 동서 방향 계곡",
        "grapes": "Pinot Noir, Chardonnay, Syrah, Cabernet Sauvignon",
        "key": "차가운 공기가 계곡을 통해 깊게 들어오며 서늘한 품종 산지가 형성.",
        "subregions": [
          {
            "place": "Santa Barbara / Sta. Rita Hills",
            "grapes": "Pinot Noir, Chardonnay",
            "style": "서늘하고 바람이 강해 높은 산도, 선명한 과실.",
            "label": "Sta. Rita Hills AVA"
          },
          {
            "place": "Paso Robles",
            "grapes": "Cabernet Sauvignon, Rhône varieties",
            "style": "낮은 더 따뜻하지만 밤은 차가워 큰 일교차. 풍부하고 숙도 높은 레드.",
            "label": "Paso Robles AVA"
          }
        ]
      },
      {
        "name": "California – Other key areas",
        "climate": "내륙은 더 따뜻하고 건조",
        "grapes": "Zinfandel, Cabernet Sauvignon, Chardonnay 등",
        "key": "Central Valley는 대량 생산, Sierra Foothills는 고도·오래된 Zinfandel로 유명.",
        "subregions": [
          {
            "place": "Lodi",
            "grapes": "Zinfandel",
            "style": "익은 과실, 부드러운 탄닌, 풍부한 바디.",
            "label": "Lodi AVA"
          },
          {
            "place": "Sierra Foothills",
            "grapes": "Zinfandel",
            "style": "고도·오래된 포도나무, 농축된 과실과 향신료.",
            "label": "Sierra Foothills AVA"
          }
        ]
      },
      {
        "name": "Oregon – Willamette Valley",
        "climate": "서늘한 해양성",
        "grapes": "Pinot Noir, Chardonnay, Pinot Gris",
        "key": "Cascade와 Coast Range 사이. 긴 성장기와 가을 강우 위험.",
        "subregions": [
          {
            "place": "Dundee Hills",
            "grapes": "Pinot Noir",
            "style": "붉은 체리·딸기·꽃, 산도 선명, 섬세한 탄닌.",
            "label": "Dundee Hills AVA"
          },
          {
            "place": "Eola-Amity Hills",
            "grapes": "Pinot Noir, Chardonnay",
            "style": "Van Duzer Corridor를 통한 차가운 바람으로 더 선명한 산도.",
            "label": "Eola-Amity Hills AVA"
          }
        ]
      },
      {
        "name": "Washington State",
        "climate": "건조한 대륙성, 큰 일교차",
        "grapes": "Cabernet Sauvignon, Merlot, Syrah, Riesling, Chardonnay",
        "key": "Cascade Rain Shadow 때문에 매우 건조하여 관개가 핵심. 긴 여름 일조와 차가운 밤.",
        "subregions": [
          {
            "place": "Columbia Valley",
            "grapes": "Cabernet Sauvignon, Merlot, Riesling",
            "style": "잘 익은 과실 + 산도 유지, 건조한 기후로 병해 압력 낮음.",
            "label": "Columbia Valley AVA"
          },
          {
            "place": "Walla Walla Valley",
            "grapes": "Cabernet Sauvignon, Syrah",
            "style": "구조적이고 농축된 레드, Syrah도 중요.",
            "label": "Walla Walla Valley AVA"
          },
          {
            "place": "Yakima Valley",
            "grapes": "Riesling, Chardonnay, Cabernet Sauvignon",
            "style": "다양한 고도와 비교적 긴 성장기.",
            "label": "Yakima Valley AVA"
          }
        ]
      },
      {
        "name": "New York – Finger Lakes",
        "climate": "서늘한 대륙성, 호수 완화",
        "grapes": "Riesling, Chardonnay, Cabernet Franc",
        "key": "깊은 호수가 겨울 추위를 완화하고 성장기를 연장.",
        "subregions": [
          {
            "place": "Finger Lakes",
            "grapes": "Riesling",
            "style": "높은 산도, 라임·사과·꽃, 드라이~스위트.",
            "label": "Finger Lakes AVA"
          }
        ]
      }
    ],
    "dense": true,
    "denseNote": "핵심국가 보강판: 산지 → 세부산지/도시 → 품종 → 예상 스타일 → 라벨 단서까지 확장"
  },
  "canada": {
    "name": "캐나다",
    "en": "Canada",
    "flag": "🇨🇦",
    "group": "아메리카",
    "lat": "주요 산지 약 43°–50°N",
    "mapCore": "높은 위도와 큰 일교차. BC와 Ontario 중심.",
    "climate": [
      "서늘한 대륙성/반건조"
    ],
    "currents": "직접적인 해류보다 산맥·호수의 영향이 중요.",
    "winds": "산악 지형과 호수·계곡의 국지 기후가 중요.",
    "topography": "Okanagan Valley는 Rain Shadow로 예상보다 건조하고 일조가 충분.",
    "grapes": [
      "Pinot Noir",
      "Riesling",
      "Chardonnay",
      "Merlot",
      "Cabernet Franc"
    ],
    "style": "높은 위도에도 불구하고 계곡과 호수의 온도 완화, 긴 일조시간으로 다양한 품종 숙성 가능.",
    "label": [
      "Okanagan Valley",
      "Niagara Peninsula",
      "Icewine"
    ],
    "chain": "높은 위도 → 추위 위험 → 호수/계곡/산맥 미기후 확인 → 산도 높은 스타일",
    "prompt": "Okanagan Valley가 캐나다임에도 포도 재배가 가능한 이유를 설명해보세요.",
    "answer": "산맥의 Rain Shadow로 비교적 건조하고, 여름 긴 일조시간과 큰 일교차를 활용할 수 있습니다. 호수는 국지적으로 온도를 완화해 포도 재배를 돕습니다.",
    "regions": [
      {
        "name": "Okanagan Valley",
        "climate": "건조한 대륙성·큰 일교차",
        "grapes": "Pinot Noir, Chardonnay, Merlot",
        "key": "Rain Shadow, 호수, 높은 위도와 긴 일조."
      },
      {
        "name": "Niagara Peninsula",
        "climate": "호수 완화 효과가 있는 서늘한 기후",
        "grapes": "Riesling, Chardonnay, Cabernet Franc",
        "key": "Icewine와 서늘한 기후 품종."
      }
    ]
  },
  "mexico": {
    "name": "멕시코",
    "en": "Mexico",
    "flag": "🇲🇽",
    "group": "아메리카",
    "lat": "주요 산지 약 30°–32°N",
    "mapCore": "낮은 위도지만 해양 영향과 고도로 포도 재배가 가능한 산지.",
    "climate": [
      "건조",
      "해양 완화",
      "고도 영향"
    ],
    "currents": "Baja California는 태평양의 냉각 영향을 받음.",
    "winds": "해풍이 고온을 완화.",
    "topography": "Valle de Guadalupe 등은 해양과 사막성 기후가 만나는 지역.",
    "grapes": [
      "Cabernet Sauvignon",
      "Tempranillo",
      "Nebbiolo",
      "Chenin Blanc"
    ],
    "style": "따뜻하고 건조하지만 해풍으로 균형을 얻는 레드 중심.",
    "label": [
      "Valle de Guadalupe",
      "Baja California"
    ],
    "chain": "낮은 위도 → 과열 위험 → 해풍·고도 확인 → 품종과 구조 판단",
    "prompt": "멕시코 와인에서 해풍이 중요한 이유는?",
    "answer": "낮은 위도의 더운 조건에서 해풍은 포도밭을 식히고 산도 유지에 도움을 줍니다.",
    "regions": [
      {
        "name": "Valle de Guadalupe",
        "climate": "따뜻하고 건조, 해풍 영향",
        "grapes": "Cabernet Sauvignon, Tempranillo",
        "key": "멕시코 대표 산지."
      }
    ]
  },
  "chile": {
    "name": "칠레",
    "en": "Chile",
    "flag": "🇨🇱",
    "group": "아메리카",
    "lat": "주요 산지 약 30°–38°S",
    "mapCore": "서쪽 Humboldt Current와 동쪽 Andes 사이의 길고 좁은 국가.",
    "climate": [
      "지중해성 중심",
      "해안 서늘",
      "내륙 더 따뜻"
    ],
    "currents": "Humboldt Current가 태평양 연안을 냉각.",
    "winds": "차가운 해양 공기와 안개가 해안 산맥의 틈을 통해 유입.",
    "topography": "서쪽 Coast Range, 동쪽 Andes. 고도와 해안 거리로 기후가 달라짐.",
    "grapes": [
      "Cabernet Sauvignon",
      "Carménère",
      "Sauvignon Blanc",
      "Chardonnay",
      "Pinot Noir",
      "Syrah"
    ],
    "style": "해안은 Sauvignon Blanc/Chardonnay/Pinot Noir, 따뜻한 내륙은 Cabernet Sauvignon/Carménère.",
    "label": [
      "Casablanca Valley",
      "San Antonio",
      "Maipo Valley",
      "Colchagua Valley"
    ],
    "chain": "Humboldt Current → 해안 냉각 → 산맥 틈으로 찬 공기 유입 → 해안은 산도 높고 내륙은 숙도 높음",
    "prompt": "Casablanca와 Maipo의 품종 선택이 다른 이유를 Humboldt Current와 지형으로 설명해보세요.",
    "answer": "Casablanca는 태평양과 가까워 Humboldt Current 냉각 영향이 강해 Chardonnay, Sauvignon Blanc, Pinot Noir에 적합합니다. Maipo는 더 내륙이라 따뜻해 Cabernet Sauvignon 숙성에 유리합니다.",
    "regions": [
      {
        "name": "Casablanca / San Antonio",
        "climate": "서늘한 해양성 영향",
        "grapes": "Sauvignon Blanc, Chardonnay, Pinot Noir",
        "key": "Humboldt Current와 해안 안개."
      },
      {
        "name": "Maipo",
        "climate": "따뜻한 지중해성",
        "grapes": "Cabernet Sauvignon",
        "key": "내륙, Andes의 영향, 숙도 높은 레드."
      },
      {
        "name": "Colchagua",
        "climate": "따뜻한 지중해성",
        "grapes": "Carménère, Cabernet Sauvignon, Syrah",
        "key": "따뜻한 내륙 레드 산지."
      }
    ]
  },
  "argentina": {
    "name": "아르헨티나",
    "en": "Argentina",
    "flag": "🇦🇷",
    "group": "아메리카",
    "lat": "주요 산지 약 28°–40°S",
    "mapCore": "Andes 동쪽의 고지대·건조 기후. 고도가 강한 일조와 낮은 야간 기온을 동시에 만듦.",
    "climate": [
      "건조한 대륙성"
    ],
    "currents": "대서양 해류보다 Andes의 Rain Shadow와 고도가 훨씬 중요.",
    "winds": "건조한 조건과 산악 바람. 우박이 중요한 위험 요소인 지역도 있음.",
    "topography": "Mendoza, Salta 등 높은 고도. 눈 녹은 물을 이용한 관개가 핵심.",
    "grapes": [
      "Malbec",
      "Cabernet Sauvignon",
      "Torrontés"
    ],
    "style": "강한 일조 + 높은 고도 = 익은 과실과 산도 균형.",
    "label": [
      "Mendoza",
      "Uco Valley",
      "Luján de Cuyo",
      "Salta",
      "Cafayate"
    ],
    "chain": "Andes Rain Shadow → 매우 건조 → 관개 필요 + 높은 고도 → 큰 일교차 → 익은 과실과 산도 균형",
    "prompt": "Mendoza Malbec가 높은 색과 풍미를 가지면서도 산도를 유지하는 이유를 설명해보세요.",
    "answer": "Mendoza는 강한 일조를 받는 건조한 고지대입니다. 낮에는 충분한 열과 빛으로 Malbec의 색·탄닌·풍미가 발달하지만, 밤에는 기온이 크게 떨어져 산도 유지에 도움이 됩니다.",
    "regions": [
      {
        "name": "Mendoza",
        "climate": "건조한 대륙성",
        "grapes": "Malbec, Cabernet Sauvignon",
        "key": "Andes, 고도, 큰 일교차, 관개."
      },
      {
        "name": "Salta / Cafayate",
        "climate": "매우 높은 고도·건조",
        "grapes": "Torrontés, Malbec",
        "key": "극단적인 고도와 강한 일조."
      }
    ]
  },
  "uruguay": {
    "name": "우루과이",
    "en": "Uruguay",
    "flag": "🇺🇾",
    "group": "아메리카",
    "lat": "약 30°–35°S",
    "mapCore": "대서양과 Río de la Plata의 해양 영향이 있는 남미 산지.",
    "climate": [
      "완화된 해양성",
      "온난 습윤"
    ],
    "currents": "대서양의 영향으로 극단적 열이 완화.",
    "winds": "해풍이 습도와 온도를 조절.",
    "topography": "완만한 지형이 많고 극단적 고도는 적다.",
    "grapes": [
      "Tannat",
      "Albariño",
      "Merlot"
    ],
    "style": "Tannat의 구조감이 대표적이지만 해양 영향으로 예상보다 신선한 스타일 가능.",
    "label": [
      "Canelones",
      "Maldonado",
      "Garzón"
    ],
    "chain": "대서양 인접 → 습도/온도 완화 → Tannat의 구조와 산도의 균형",
    "prompt": "우루과이 Tannat를 아르헨티나 Malbec와 다르게 설명하려면?",
    "answer": "우루과이 Tannat는 대서양의 해양 영향 속에서 더 구조적이고 탄닌감 있는 스타일로 설명할 수 있으며, 적절한 신선함도 함께 나타날 수 있습니다.",
    "regions": [
      {
        "name": "Canelones",
        "climate": "온난한 해양성 영향",
        "grapes": "Tannat",
        "key": "우루과이 생산의 중심."
      }
    ]
  },
  "brazil": {
    "name": "브라질",
    "en": "Brazil",
    "flag": "🇧🇷",
    "group": "아메리카",
    "lat": "주요 산지 약 29°–31°S",
    "mapCore": "열대 국가 이미지와 달리 남부 고도·위도 조건에서 와인을 생산.",
    "climate": [
      "온난 습윤",
      "고도 영향"
    ],
    "currents": "직접적인 해류보다 남부 고지대와 계절성이 중요.",
    "winds": "고지대 바람과 강수 관리가 중요.",
    "topography": "Serra Gaúcha 등 구릉·고지대가 중심.",
    "grapes": [
      "Merlot",
      "Moscato",
      "Chardonnay",
      "Cabernet Sauvignon"
    ],
    "style": "스파클링과 남부 서늘한 기후 와인이 점점 주목받음.",
    "label": [
      "Serra Gaúcha",
      "Vale dos Vinhedos",
      "Campanha"
    ],
    "chain": "남부 위도 + 고도 → 브라질 내 상대적 서늘함 확보",
    "prompt": "브라질 와인을 설명할 때 흔한 오해는?",
    "answer": "브라질 전체가 덥다고만 보는 것입니다. 실제 주요 산지는 남부의 더 서늘한 위도와 고도 조건을 활용합니다.",
    "regions": [
      {
        "name": "Serra Gaúcha",
        "climate": "온난 습윤",
        "grapes": "Merlot, Chardonnay",
        "key": "스파클링과 스틸 와인의 핵심 지역."
      }
    ]
  },
  "southafrica": {
    "name": "남아프리카공화국",
    "en": "South Africa",
    "flag": "🇿🇦",
    "group": "아프리카",
    "lat": "주요 산지 약 32°–35°S",
    "mapCore": "서쪽의 차가운 Benguela Current와 동쪽의 따뜻한 Agulhas Current가 대비됨.",
    "climate": [
      "지중해성 중심"
    ],
    "currents": "Benguela Current가 서해안을 냉각. 남동쪽은 더 따뜻한 Agulhas Current 영향.",
    "winds": "Cape Doctor로 불리는 강한 남동풍은 여름 더위를 완화하고 포도밭을 건조시키는 역할.",
    "topography": "산맥과 해안의 가까운 거리로 미기후가 다양.",
    "grapes": [
      "Chenin Blanc",
      "Cabernet Sauvignon",
      "Syrah",
      "Pinotage",
      "Sauvignon Blanc",
      "Chardonnay"
    ],
    "style": "해안 가까운 지역은 더 신선한 스타일 가능.",
    "label": [
      "Stellenbosch",
      "Swartland",
      "Walker Bay",
      "Constantia"
    ],
    "chain": "Benguela Current + 남동풍 → 서늘한 해안 영향 → 산지·고도에 따라 숙도 조절",
    "prompt": "Stellenbosch가 따뜻한 위도에 있으면서도 균형 잡힌 Cabernet을 만들 수 있는 이유를 설명해보세요.",
    "answer": "차가운 Benguela Current의 냉각 효과와 해풍, 다양한 산악 지형이 미기후를 만들어 포도가 충분히 익으면서도 산도를 유지할 수 있습니다.",
    "regions": [
      {
        "name": "Stellenbosch",
        "climate": "따뜻한 지중해성 + 해양 완화",
        "grapes": "Cabernet Sauvignon, Chenin Blanc, Syrah",
        "key": "산악 지형, 해풍, 고품질 레드."
      },
      {
        "name": "Walker Bay",
        "climate": "더 서늘한 해양성 영향",
        "grapes": "Pinot Noir, Chardonnay",
        "key": "해안 냉각으로 서늘한 품종에 적합."
      }
    ]
  },
  "australia": {
    "name": "호주",
    "en": "Australia",
    "flag": "🇦🇺",
    "group": "오세아니아",
    "lat": "주요 산지 약 28°–43°S",
    "mapCore": "매우 큰 국가라 '호주=더움'으로 외우면 안 됨. 남쪽 바다, 고도, 해안 거리 차이가 핵심.",
    "climate": [
      "따뜻한 지중해성",
      "해양성",
      "일부 서늘한 고지대"
    ],
    "currents": "남쪽 해안은 Southern Ocean의 차가운 영향. 동쪽은 East Australian Current의 영향도 존재.",
    "winds": "해안 바람과 남쪽 바다의 차가운 공기가 남부 산지를 냉각.",
    "topography": "Great Dividing Range와 고도, 해안 거리 차이로 기후가 크게 달라짐.",
    "grapes": [
      "Shiraz",
      "Cabernet Sauvignon",
      "Chardonnay",
      "Pinot Noir",
      "Riesling",
      "Sémillon"
    ],
    "style": "Barossa의 풍부한 Shiraz부터 Tasmania의 서늘한 스파클링까지 스펙트럼이 큼.",
    "label": [
      "Barossa Valley",
      "Clare Valley",
      "Coonawarra",
      "Margaret River",
      "Yarra Valley",
      "Tasmania",
      "Hunter Valley"
    ],
    "chain": "지역 위치 확인 → 남쪽 바다/해양 영향/고도 확인 → 따뜻한 내륙 vs 서늘한 해안 구분",
    "prompt": "Barossa Valley와 Tasmania가 같은 호주인데 완전히 다른 스타일을 보이는 이유를 설명해보세요.",
    "answer": "Barossa Valley는 따뜻하고 건조한 내륙성 조건으로 풍부한 Shiraz를 만들기 쉽습니다. Tasmania는 훨씬 남쪽에 있고 해양 영향이 강해 서늘하며 Pinot Noir, Chardonnay와 스파클링에 적합합니다.",
    "regions": [
      {
        "name": "Barossa Valley",
        "climate": "따뜻하고 건조",
        "grapes": "Shiraz",
        "key": "농축된 검은 과실, 높은 알코올, 풍부한 바디."
      },
      {
        "name": "Clare / Eden Valley",
        "climate": "고도·일교차로 비교적 서늘",
        "grapes": "Riesling, Shiraz",
        "key": "높은 산도를 가진 Riesling."
      },
      {
        "name": "Coonawarra",
        "climate": "남쪽 해양 영향",
        "grapes": "Cabernet Sauvignon",
        "key": "Terra Rossa 토양과 Cabernet."
      },
      {
        "name": "Margaret River",
        "climate": "해양성",
        "grapes": "Cabernet Sauvignon, Chardonnay",
        "key": "인도양·남쪽 바다의 완화."
      },
      {
        "name": "Yarra Valley",
        "climate": "서늘한 해양성",
        "grapes": "Pinot Noir, Chardonnay",
        "key": "고도와 남쪽 위치로 서늘."
      },
      {
        "name": "Tasmania",
        "climate": "서늘한 해양성",
        "grapes": "Pinot Noir, Chardonnay",
        "key": "스파클링, 높은 산도."
      }
    ]
  },
  "newzealand": {
    "name": "뉴질랜드",
    "en": "New Zealand",
    "flag": "🇳🇿",
    "group": "오세아니아",
    "lat": "약 34°–47°S",
    "mapCore": "강한 해양성, 편서풍, 남극해의 영향. 긴 남북 거리 때문에 지역 차이가 큼.",
    "climate": [
      "해양성"
    ],
    "currents": "차가운 남쪽 바다와 태평양의 강한 해양 영향으로 극단적 고온이 제한됨.",
    "winds": "강한 편서풍이 주요 기후 요소. 산맥의 동쪽에는 Rain Shadow가 생길 수 있음.",
    "topography": "Southern Alps가 강수 분포를 바꾸고, 동쪽 주요 산지를 더 건조하게 만듦.",
    "grapes": [
      "Sauvignon Blanc",
      "Pinot Noir",
      "Chardonnay",
      "Riesling",
      "Syrah"
    ],
    "style": "Marlborough Sauvignon Blanc의 강한 향과 높은 산도, Central Otago Pinot Noir가 대표적.",
    "label": [
      "Marlborough",
      "Central Otago",
      "Hawke's Bay",
      "Martinborough"
    ],
    "chain": "해양성 + 편서풍 → 산맥 Rain Shadow → 동부 주요 산지의 건조한 성장기 → 높은 산도와 선명한 향",
    "prompt": "Marlborough가 해양성 국가에 있으면서도 비교적 건조하고 향이 강한 Sauvignon Blanc을 만드는 이유를 설명해보세요.",
    "answer": "Marlborough는 산맥의 Rain Shadow 영향으로 비교적 건조하고 일조량이 충분합니다. 서늘한 야간 기온은 산도를 유지하고 긴 성장기는 Sauvignon Blanc의 강한 향 성분 발달을 돕습니다.",
    "regions": [
      {
        "name": "Marlborough",
        "climate": "서늘한 해양성 + 비교적 건조",
        "grapes": "Sauvignon Blanc",
        "key": "강한 향, 높은 산도, Rain Shadow."
      },
      {
        "name": "Central Otago",
        "climate": "뉴질랜드 내 비교적 대륙성·건조",
        "grapes": "Pinot Noir",
        "key": "남쪽 위도 + 내륙 + 큰 일교차."
      },
      {
        "name": "Hawke's Bay",
        "climate": "비교적 따뜻한 해양성",
        "grapes": "Syrah, Chardonnay",
        "key": "뉴질랜드 내 따뜻한 산지."
      }
    ]
  },
  "japan": {
    "name": "일본",
    "en": "Japan",
    "flag": "🇯🇵",
    "group": "오세아니아",
    "lat": "주요 산지 약 34°–39°N",
    "mapCore": "비가 많고 습하지만 산지·고도·지역 차이를 활용하는 동아시아 산지.",
    "climate": [
      "습윤한 해양성/몬순",
      "일부 서늘한 고지대"
    ],
    "currents": "주변 해양이 크고 계절풍의 영향이 강함.",
    "winds": "장마와 태풍, 계절풍이 중요한 재배 리스크.",
    "topography": "분지와 고지대가 미기후 형성에 도움.",
    "grapes": [
      "Koshu",
      "Muscat Bailey A",
      "Chardonnay",
      "Merlot"
    ],
    "style": "Koshu의 섬세한 화이트, Yamanashi와 Nagano 등의 산지 차이를 기억.",
    "label": [
      "Yamanashi",
      "Nagano",
      "Hokkaido",
      "Koshu"
    ],
    "chain": "습윤·강우 위험 → 배수/수형/고도 중요 → 섬세한 스타일 추론",
    "prompt": "일본 와인에서 기후적으로 가장 큰 리스크는 무엇인가요?",
    "answer": "높은 강수와 습도, 장마와 태풍이 포도 재배에 큰 리스크가 됩니다.",
    "regions": [
      {
        "name": "Yamanashi",
        "climate": "내륙 분지성 + 습윤",
        "grapes": "Koshu, Muscat Bailey A",
        "key": "일본 대표 산지."
      },
      {
        "name": "Hokkaido",
        "climate": "더 서늘함",
        "grapes": "Pinot Noir, Chardonnay",
        "key": "일본 내 서늘한 기후 산지."
      }
    ]
  }
};

const HOTSPOTS = [
  {
    "id": "france",
    "x": 39.2,
    "y": 30.2,
    "label": "FR"
  },
  {
    "id": "england",
    "x": 37.0,
    "y": 22.7,
    "label": "UK"
  },
  {
    "id": "portugal",
    "x": 32.2,
    "y": 33.6,
    "label": "PT"
  },
  {
    "id": "spain",
    "x": 35.2,
    "y": 35.0,
    "label": "ES"
  },
  {
    "id": "germany",
    "x": 41.2,
    "y": 24.5,
    "label": "DE"
  },
  {
    "id": "switzerland",
    "x": 40.5,
    "y": 29.2,
    "label": "CH"
  },
  {
    "id": "austria",
    "x": 46.0,
    "y": 27.8,
    "label": "AT"
  },
  {
    "id": "hungary",
    "x": 48.0,
    "y": 28.8,
    "label": "HU"
  },
  {
    "id": "slovenia",
    "x": 44.2,
    "y": 30.8,
    "label": "SI"
  },
  {
    "id": "croatia",
    "x": 45.6,
    "y": 32.6,
    "label": "HR"
  },
  {
    "id": "romania",
    "x": 50.2,
    "y": 29.6,
    "label": "RO"
  },
  {
    "id": "moldova",
    "x": 51.4,
    "y": 29.6,
    "label": "MD"
  },
  {
    "id": "italy",
    "x": 42.4,
    "y": 33.2,
    "label": "IT"
  },
  {
    "id": "greece",
    "x": 45.0,
    "y": 37.3,
    "label": "GR"
  },
  {
    "id": "georgia",
    "x": 54.3,
    "y": 31.8,
    "label": "GE"
  },
  {
    "id": "turkey",
    "x": 53.2,
    "y": 35.4,
    "label": "TR"
  },
  {
    "id": "lebanon",
    "x": 47.2,
    "y": 38.0,
    "label": "LB"
  },
  {
    "id": "israel",
    "x": 47.2,
    "y": 39.4,
    "label": "IL"
  },
  {
    "id": "canada",
    "x": 16.6,
    "y": 22.2,
    "label": "CA"
  },
  {
    "id": "usa",
    "x": 15.1,
    "y": 30.5,
    "label": "US"
  },
  {
    "id": "mexico",
    "x": 11.6,
    "y": 39.6,
    "label": "MX"
  },
  {
    "id": "chile",
    "x": 20.0,
    "y": 57.4,
    "label": "CL"
  },
  {
    "id": "argentina",
    "x": 24.8,
    "y": 61.2,
    "label": "AR"
  },
  {
    "id": "uruguay",
    "x": 27.0,
    "y": 65.1,
    "label": "UY"
  },
  {
    "id": "brazil",
    "x": 28.6,
    "y": 61.8,
    "label": "BR"
  },
  {
    "id": "southafrica",
    "x": 41.3,
    "y": 59.6,
    "label": "ZA"
  },
  {
    "id": "australia",
    "x": 61.0,
    "y": 57.0,
    "label": "AU"
  },
  {
    "id": "newzealand",
    "x": 69.6,
    "y": 63.9,
    "label": "NZ"
  },
  {
    "id": "japan",
    "x": 66.6,
    "y": 30.3,
    "label": "JP"
  }
];