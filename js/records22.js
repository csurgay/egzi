const records = [
  {
    "id": "001",
    "date": "2025-05-24",
    "currency": "HUF",
    "amount": 12900.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 12900.0,
    "type": "Helyi közlekedés",
    "item": "Bp reptéri transzfer",
    "details": ["Minibud"],
    "receipt_texts": [
      "Számla"
    ],
    "receipt_links": [
      "BSH-0561.pdf"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev001.pdf"
    ]
  },
  {
    "id": "002",
    "date": "2025-05-25",
    "currency": "HUF",
    "amount": 632.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 651.26,
    "type": "Vendéglátás",
    "item": "Ásványvíz",
    "details": ["Ferihegy taxfree"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "002.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev002.pdf"
    ]
  },
  {
    "id": "003",
    "date": "2025-05-25",
    "currency": "TRY",
    "amount": 1342.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 12445.83,
    "type": "Vendéglátás",
    "item": "Ebéd",
    "details": ["Isztambul reptér"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "003.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev003.pdf"
    ]
  },
  {
    "id": "004",
    "date": "2025-05-25",
    "currency": "USD",
    "amount": 6.64,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 2391.05,
    "type": "IT Rsz.használat",
    "item": "eSIM",
    "details": ["Isztambul"],
    "receipt_texts": [
      "Számla"
    ],
    "receipt_links": [
      "004.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev004.pdf"
    ]
  },
  {
    "id": "005",
    "date": "2025-05-25",
    "currency": "TRY",
    "amount": 85.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 778.3,
    "type": "Vendéglátás",
    "item": "Ásványvíz",
    "details": ["Isztambul"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "005.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev005.pdf"
    ]
  },
  {
    "id": "006",
    "date": "2025-05-26",
    "currency": "UZS",
    "amount": 71050.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 1983.9,
    "type": "IT Rsz.használat",
    "item": "eSIM",
    "details": ["Tashkent"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "006.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev006.pdf"
    ]
  },
  {
    "id": "007",
    "date": "2025-05-26",
    "currency": "UZS",
    "amount": 110500.0,
    "channel": "KP",
    "paid_currency": "UZS",
    "paid_amount": 217000.0,
    "type": "Taxi",
    "item": "Tashkent",
    "details": ["Airport - Hotel Palace"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "007.jpg"
    ],
    "accounting_note_texts": [
	"Azt mondták a",
	"reptéren, hogy 200",
	"ezer lesz a hotelig"
    ],
    "accounting_note_links": [
      "",
      ""
    ]
  },
  {
    "id": "008",
    "date": "2025-05-26",
    "currency": "USD",
    "amount": 675.12,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 240779.63,
    "type": "Szállás",
    "item": "Tashkent, Hotel Palace",
    "details": ["vasárnap-péntek"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "008.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev008.pdf"
    ]
  },
  {
    "id": "009",
    "date": "2025-05-26",
    "currency": "UZS",
    "amount": 798805.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 22264.91,
    "type": "Vendéglátás",
    "item": "Tashkent, munkaebéd",
    "details": ["Oleg Abbos Feruza", "Abdullo Timur Hojik"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "009.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev009.pdf"
    ]
  },
  {
    "id": "010",
    "date": "2025-05-26",
    "currency": "UZS",
    "amount": 60000.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 1697.06,
    "type": "Vendéglátás",
    "item": "Tashkent, kavé",
    "details": ["Attila Péter"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "010.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev010.pdf"
    ]
  },
  {
    "id": "011",
    "date": "2025-05-26",
    "currency": "UZS",
    "amount": 395300.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 11068.15,
    "type": "Vendéglátás",
    "item": "Tashkent, vacsora",
    "details": ["Péter"],
    "receipt_texts": [
      "Közös cech",
      "Nyugta"
    ],
    "receipt_links": [
      "011blur.jpg",
      "011visa.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev011.pdf"
    ]
  },
  {
    "id": "012",
    "date": "2025-05-27",
    "currency": "UZS",
    "amount": 538100.0,
    "channel": "KP",
    "paid_currency": "EUR",
    "paid_amount": 40.0,
    "type": "Vendéglátás",
    "item": "Tashkent, munkaebéd",
    "details": ["Oleg Abbos", "Abdullo Feruza"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "012.jpg"
    ],
    "accounting_note_texts": [
	"Abdullo rendelte",
	"az irodába és KP-",
	"ban adtam neki oda"
    ],
    "accounting_note_links": [
      ""
    ]
  },
  {
    "id": "013",
    "date": "2025-05-27",
    "currency": "UZS",
    "amount": 60900.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 1690.78,
    "type": "Vendéglátás",
    "item": "Tashkent, kávé",
    "details": ["Attila Péter"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "013.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev013.pdf"
    ]
  },
  {
    "id": "014",
    "date": "2025-05-27",
    "currency": "UZS",
    "amount": 60900.0,
    "channel": "KP",
    "paid_currency": "EUR",
    "paid_amount": 10.0,
    "type": "Taxi",
    "item": "Taskent, vacsorához",
    "details": ["Hotel - Citi Mall - Hotel"],
    "receipt_texts": [
      "Nyugta",
      "Nyugta",
      "Nyugta"
    ],
    "receipt_links": [
      "014a.jpg",
      "014b.jpg",
      "014c.jpg"
    ],
    "accounting_note_texts": [
      "Abdullo fizette",
      "KP adtam neki"
    ],
    "accounting_note_links": [
      "",
      ""
    ]
  },
  {
    "id": "015",
    "date": "2025-05-27",
    "currency": "UZS",
    "amount": 772415.0,
    "channel": "KP",
    "paid_currency": "EUR",
    "paid_amount": 55.0,
    "type": "Vendéglátás",
    "item": "Taskent, vacsora",
    "details": ["Abdullo József", "Attila Péter"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "015.jpg"
    ],
    "accounting_note_texts": [
	"Nem működött",
	"a kártyám"
    ],
    "accounting_note_links": [
      ""
    ]
  },
  {
    "id": "016",
    "date": "2025-05-28",
    "currency": "UZS",
    "amount": 123000.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 3413.82,
    "type": "Vendéglátás",
    "item": "Taskent, ebéd",
    "details": ["Péter"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "016.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev016.pdf"
    ]
  },
  {
    "id": "017",
    "date": "2025-05-28",
    "currency": "UZS",
    "amount": 123000.0,
    "channel": "KP",
    "paid_currency": "EUR",
    "paid_amount": 10.0,
    "type": "Taxi",
    "item": "Taskent, vacsorához",
    "details": ["Hotel - Jumanji - Hotel"],
    "receipt_texts": [
      "Nyugta",
      "Nyugta"
    ],
    "receipt_links": [
      "017a.jpg",
      "017b.jpg"
    ],
    "accounting_note_texts": [
      "Abdullo fizette",
      "KP adtam neki"
    ],
    "accounting_note_links": [
      "",
      ""
    ]
  },
  {
    "id": "018",
    "date": "2025-05-28",
    "currency": "UZS",
    "amount": 2619600.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 74124.0,
    "type": "Vendéglátás",
    "item": "Taskent, vacsora",
    "details": ["Oleg Abbos Abdullo", "Feruza Péter"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "018.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev018.pdf"
    ]
  },
  {
    "id": "019",
    "date": "2025-05-29",
    "currency": "UZS",
    "amount": 261000.0,
    "channel": "KP",
    "paid_currency": "EUR",
    "paid_amount": 20.0,
    "type": "Vendéglátás",
    "item": "Taskent, ebéd",
    "details": ["Feruza Péter"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "019.jpg"
    ],
    "accounting_note_texts": [
      "Feruza fizetett",
      "KP adtam neki"
    ],
    "accounting_note_links": [
      "",
      ""
    ]
  },
  {
    "id": "020",
    "date": "2025-05-29",
    "currency": "UZS",
    "amount": 99000.0,
    "channel": "Revolut",
    "paid_currency": "HUF",
    "paid_amount": 2763.69,
    "type": "Vendéglátás",
    "item": "Taskent, vacsora",
    "details": ["Péter"],
    "receipt_texts": [
      "Nyugta"
    ],
    "receipt_links": [
      "020.jpg"
    ],
    "accounting_note_texts": [
      "Statement"
    ],
    "accounting_note_links": [
      "rev020.pdf"
    ]
  },
  {
    "id": "021",
    "date": "2025-05-29",
    "currency": "EUR",
    "amount": 10.0,
    "channel": "KP",
    "paid_currency": "EUR",
    "paid_amount": 10.0,
    "type": "Taxi",
    "item": "TAS reptérre",
    "details": ["Hotel Palace - TAS Airport"],
    "receipt_texts": [
      "Taxisofőrnek"
    ],
    "receipt_links": [
      ""
    ],
    "accounting_note_texts": [
      "KP EUR"
    ],
    "accounting_note_links": [
      ""
    ]
  },
  {
    "id": "022",
    "date": "2025-05-30",
    "currency": "HUF",
    "amount": 2400.0,
    "channel": "KP",
    "paid_currency": "HUF",
    "paid_amount": 2400.0,
    "type": "Helyi közlekedés",
    "item": "Bp reptérről haza",
    "details": ["200E Metro 1 118"],
    "receipt_texts": [
      "4db buszjegy"
    ],
    "receipt_links": [
      "Feljegyzés számlával nem igazolt költségről.docx"
    ],
    "accounting_note_texts": [
      "buszvezetőtől"
    ],
    "accounting_note_links": [
      "022.jpg"
    ]
  }
];