	const table = document.createElement("table");

const currencies = ["HUF","EUR","USD","UZS"];
const advances = {"USD":1700,"EUR":700,"UZS":217000};
const sums = {};
const returns = {"EUR":650,"USD":1700};
const settled = {"HUF":391380, "EUR": 95}


function currFormat(amount) {
	let sign = Math.sign(amount)==-1?"-":"";
	amount = Math.abs(amount);
	let frac = (amount % 1).toFixed(2).toString().substring(2);
	let int = Math.trunc(amount);
	let curr = "";
	let counter = 3;
	if (int==0) curr="0";
	while (int > 0) {
		if (counter==0) { curr = "." + curr; counter = 3; }
		curr = (int % 10) + curr;
		int = Math.trunc(int / 10);
		counter--;
	}
	return curr==""?"0.00":sign+curr+","+frac;
}

function renderTable(records) {
	const table = document.createElement("table");
	table.border = "1px solid #000";
	table.style.border = "3px solid #000";
	table.cellPadding = "4px";
	table.style.borderCollapse = "collapse";

	const headers = [
		"Sorsz", "Dátum", "Pnem", "Összeg", "Schleifni", "Csatorna", "Fiz.Pnem",
		"Fiz.Összeg", "Könyvelendő", "Típus", "Tétel", "Részletek"
	];
	const keys = [
		"id", "date", "currency", "amount", "receipt_texts", "channel", "paid_currency",
		"paid_amount", "accounting_note_texts", "type", "item", "details"
	];

	const thead = table.createTHead();
	const headerRow = thead.insertRow();
	headers.forEach(h => {
		const th = document.createElement("th");
		th.textContent = h;
		headerRow.appendChild(th);
	});

	const tbody = document.createElement("tbody");
	records.forEach((record, index) => {
		const tr = document.createElement("tr");
		keys.forEach((key, i) => {
			const td = document.createElement("td");
			if (key === "receipt_texts" || key === "accounting_note_texts") {
				const baseKey = key.replace("_texts", "");
				const texts = record[`${baseKey}_texts`] || [];
				const links = record[`${baseKey}_links`] || [];
				texts.forEach((text, idx) => {
					if (links[idx]) {
						const a = document.createElement("a");
						a.href = "docs/"+links[idx];
						a.textContent = text;
						a.target = "_blank";
						td.appendChild(a);
					} else {
						td.appendChild(document.createTextNode(text));
					}
					if (idx < texts.length - 1) td.appendChild(document.createElement("br"));
				});
			} else if (key === "details") {
				const texts = record[key] || [];
				texts.forEach((text, idx) => {
					td.appendChild(document.createTextNode(text));
					if (idx < texts.length - 1) td.appendChild(document.createElement("br"));
				});
			} else if (key === "amount" || key === "paid_amount") {
				td.textContent = currFormat(record[key]);
				td.align="right";
			} else {
				td.textContent = record[key];
			}
			tr.appendChild(td);
		});

		tbody.appendChild(tr);
	});
	table.appendChild(tbody);
	return(table);
}

function advanceTable(records) {
	const table = document.createElement("table");
	table.border = "1px solid #000";
	table.style.border = "3px solid #000";
	table.cellPadding = "4px";
	table.style.borderCollapse = "collapse";

	// fill advTable with currencies[]
	for (let key in currencies) {
		advances[currencies[key]] = advances[currencies[key]]?advances[currencies[key]]:0;
		returns[currencies[key]] = returns[currencies[key]]?returns[currencies[key]]:0;
		settled[currencies[key]] = settled[currencies[key]]?settled[currencies[key]]:0;
	} 
	const adv = {};
	for (let key in advances) {
		adv[key] = advances[key];
	} 
	// header row
	const thead = table.createTHead();
	const headerRow = thead.insertRow();
	for (let key in adv) {
		const th = document.createElement("th");
		th.textContent = key;
		th.style.width="100px";
		headerRow.appendChild(th);
	}
	// data row
	tbody = document.createElement("tbody");
	const tr = document.createElement("tr");
	for (let key in adv) {
		const td = document.createElement("td");
		td.textContent = currFormat(adv[key]);
		td.align="right";
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	table.appendChild(tbody);
	return(table);
}

function sumTable(records) {
	const table = document.createElement("table");
	table.border = "1px solid #000";
	table.style.border = "3px solid #000";
	table.cellPadding = "4px";
	table.style.borderCollapse = "collapse";

	// calculate sums
	records.forEach((record, index) => {
		const curr = record["paid_currency"];
		if (sums[curr]) {
			sums[curr]+=record["paid_amount"];
		}
		else {
			sums[curr]=record["paid_amount"];
		}
	});
	// header row
	const thead = table.createTHead();
	const headerRow = thead.insertRow();
	headerRow.appendChild(document.createElement("th"));
	for (let key in currencies) {
		const th = document.createElement("th");
		th.textContent = currencies[key];
		th.style.width="100px";
		headerRow.appendChild(th);
	}
	const tbody = document.createElement("tbody");
	// advances row
	tr = document.createElement("tr");
	td = document.createElement("td");
	td.textContent = "Előleg";
	tr.appendChild(td);
	for (let key in currencies) {
		const td = document.createElement("td");
		td.textContent = currFormat(advances[currencies[key]]);
		td.align="right";
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	// sums row
	tr = document.createElement("tr");
	td = document.createElement("td");
	td.textContent = "Elköltött";
	tr.appendChild(td);
	for (let key in currencies) {
		const td = document.createElement("td");
		td.textContent = currFormat(sums[currencies[key]]);
		td.align="right";
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	// returns row
	tr = document.createElement("tr");
	td = document.createElement("td");
	td.textContent = "Visszafizetett";
	tr.appendChild(td);
	for (let key in currencies) {
		const td = document.createElement("td");
		td.textContent = currFormat(returns[currencies[key]]);
		td.align="right";
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	// settled row
	tr = document.createElement("tr");
	td = document.createElement("td");
	td.textContent = "Rendezett";
	tr.appendChild(td);
	for (let key in currencies) {
		const td = document.createElement("td");
		td.textContent = currFormat(settled[currencies[key]]);
		td.align="right";
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	// totals row
	tr = document.createElement("tr");
	td = document.createElement("td");
	td.textContent = "Egyenleg";
	td.style.fontWeight = 'bold';
	tr.appendChild(td);
	for (let key in currencies) {
		const td = document.createElement("td");
		td.textContent = currFormat(advances[currencies[key]]
						- returns[currencies[key]]
						- sums[currencies[key]]
						+ settled[currencies[key]]);
		td.align="right";
		td.style.fontWeight = 'bold';
		tr.appendChild(td);
	}
	tbody.appendChild(tr);
	table.appendChild(tbody);
	return(table);
}
