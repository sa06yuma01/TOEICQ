let QArray = [
	// 名詞:1, 動詞:2, 副詞:3, 形容詞:4
	['~sion', 1],
	['~tion', 1],
	['~ance', 1],
	['~ence', 1],
	['~ment', 1],
	['~dom', 1],
	['~ty', 1],
	['~cy', 1],
	['~th', 1],
	['~ive', 1],
	['~or', 1],
	['~ist', 1],
	['~ee', 1],
	['~er', 1],
	['~fy', 2],
	['~en', 2],
	['~ize', 2],
	['~ly', 3],
	['~ant', 4],
	['~ent', 4],
	['~ful', 4],
	['~able', 4],
	['~ess', 4],
	['~y', 4],
	['~ive', 4],
	['~ous', 4]
];

var dispedQnumArray = new Array(QArray.length);
var retryArray1 = new Array();
var retryArray2 = new Array();
var Qcnt = 0;
var Qnum = 0;

// 正解不正解数
var correct = 0;
var incorrect = 0;

let startButton = document.getElementById('startButton');
startButton.addEventListener('click', StartQ);

function Ans1_s() {
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(1, 0);
}
function Ans2_s() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(2, 0);
}
function Ans3_s() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(3, 0);
}
function Ans4_s() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	CheckAnswer(4, 0);
}
function Ans1_r1() {
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(1, 1);
}
function Ans2_r1() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(2, 1);
}
function Ans3_r1() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(3, 1);
}
function Ans4_r1() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	CheckAnswer(4, 1);
}
function Ans1_r2() {
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(1, 2);
}
function Ans2_r2() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(2, 2);
}
function Ans3_r2() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(3, 2);
}
function Ans4_r2() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	CheckAnswer(4, 2);
}
function CallDispQ0() {
	DispQ(0)
}
function CallDispQ1() {
	DispQ(1)
}
function CallDispQ2() {
	DispQ(2)
}
function CallRetry1() {
	Retry(1);
}
function CallRetry2() {
	Retry(2);
}

function StartQ() {
	Qcnt = 0;
	Qnum = 0;
	correct = 0;
	incorrect = 0;
	dispedQnumArray.length = 0;
	retryArray1.length = 0;
	retryArray2.length = 0;

	// スタートボタン非表示
	let id_startQ = document.getElementById('startQ');
	id_startQ.style.display = 'none';
	// スコア非表示
	let id_score = document.getElementById('score');
	id_score.style.display = 'none';

	// 選択肢表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'block';

	// 復習ボタン非表示
	let id_retryButton = document.getElementById('retryButton');
	id_retryButton.removeEventListener('click', Retry);
	let id_retry = document.getElementById('retry');
	id_retry.style.display = 'none';

	let id_option1 = document.getElementById('option1');
	id_option1.addEventListener('click', Ans1_s);
	let id_option2 = document.getElementById('option2');
	id_option2.addEventListener('click', Ans2_s);
	let id_option3 = document.getElementById('option3');
	id_option3.addEventListener('click', Ans3_s);
	let id_option4 = document.getElementById('option4');
	id_option4.addEventListener('click', Ans4_s);

	DispQ(0);
}

function DispQ(status) {
	// result非表示
	let id_result = document.getElementById('result');
	id_result.innerHTML = "";

	// 次へボタン非表示
	let id_next = document.getElementById('next');
	id_next.style.display = 'none';

	// 問題番号表示
	Qcnt = Qcnt + 1;
	let id_Qcnt = document.getElementById('Qcnt');
	id_Qcnt.innerHTML = 'Q' + Qcnt + '.';

	if(status == 0){
		if(Qcnt > QArray.length){
			Finish(0);
		}
		else{
			// 問題文表示
			Qnum = SelectQ(0);
			let id_Qsentence = document.getElementById('Qsentence');
			id_Qsentence.innerHTML = QArray[Qnum][0];
		}
	}
	else if(status == 1){
		if(Qcnt > retryArray1.length){
			Finish(1);
		}
		else{
			// 問題文表示
			let id_Qsentence = document.getElementById('Qsentence');
			id_Qsentence.innerHTML = QArray[retryArray1[Qcnt - 1]][0];
		}
	}
	else if(status == 2){
		if(Qcnt > retryArray2.length){
			Finish(2);
		}
		else{
			// 問題文表示
			let id_Qsentence = document.getElementById('Qsentence');
			id_Qsentence.innerHTML = QArray[retryArray2[Qcnt - 1]][0];
		}
	}

	// 選択ボタン有効化
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = null;
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = null;
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = null;
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = null;

}

function SelectQ(status) {
	if(status == 0){
		var random = Math.floor(Math.random() * (QArray.length));
		
		while (dispedQnumArray.indexOf(random) != -1) {
			random = Math.floor(Math.random() * (QArray.length));
		}
		
		dispedQnumArray[dispedQnumArray.length] = random;	
		return random;
	}
}

function CheckAnswer(Anum, status) {
	let id_result = document.getElementById('result');
	if(status == 0){
		if(QArray[Qnum][1] == Anum){
			correct++;
			id_result.innerHTML = "<img src=\"maru.png\" width=\"10%\">";
		}
		else{
			incorrect++;
			retryArray1[retryArray1.length] = Qnum;
			id_result.innerHTML = "<img src=\"batsu.png\" width=\"10%\">";
		}
	}
	else if(status == 1){
		if(QArray[retryArray1[Qcnt - 1]][1] == Anum){
			correct++;
			id_result.innerHTML = "<img src=\"maru.png\" width=\"10%\">";
		}
		else{
			incorrect++;
			retryArray2[retryArray2.length] = retryArray1[Qcnt - 1];
			id_result.innerHTML = "<img src=\"batsu.png\" width=\"10%\">";
		}
	}
	else if(status == 2){
		if(QArray[retryArray2[Qcnt - 1]][1] == Anum){
			correct++;
			id_result.innerHTML = "<img src=\"maru.png\" width=\"10%\">";
		}
		else{
			incorrect++;
			retryArray1[retryArray1.length] = retryArray2[Qcnt - 1];
			id_result.innerHTML = "<img src=\"batsu.png\" width=\"10%\">";
		}
	}

	let id_next = document.getElementById('next');
	id_next.style.display = 'block';
	let id_nextButton = document.getElementById('nextButton');
	if(status == 0){
		id_nextButton.removeEventListener('click', CallDispQ1)
		id_nextButton.removeEventListener('click', CallDispQ2)
		id_nextButton.addEventListener('click', CallDispQ0);
	}
	else if(status == 1){
		id_nextButton.removeEventListener('click', CallDispQ0)
		id_nextButton.removeEventListener('click', CallDispQ2)
		id_nextButton.addEventListener('click', CallDispQ1);
	}
	else if(status == 2){
		id_nextButton.removeEventListener('click', CallDispQ0)
		id_nextButton.removeEventListener('click', CallDispQ1)
		id_nextButton.addEventListener('click', CallDispQ2);
	}
}

function Finish(status) {
	// スタートボタン表示
	let id_startQ = document.getElementById('startQ');
	id_startQ.style.display = 'block';
	// 問題番号非表示
	let id_Qcnt = document.getElementById('Qcnt');
	id_Qcnt.innerHTML = "";
	// 問題文非表示
	let id_Qsentence = document.getElementById('Qsentence');
	id_Qsentence.innerHTML = "";

	// 選択ボタン非表示
	if(status == 0){
		let id_option1 = document.getElementById('option1');
		id_option1.removeEventListener('click', Ans1_s);
		let id_option2 = document.getElementById('option2');
		id_option2.removeEventListener('click', Ans2_s);
		let id_option3 = document.getElementById('option3');
		id_option3.removeEventListener('click', Ans3_s);
		let id_option4 = document.getElementById('option4');
		id_option4.removeEventListener('click', Ans4_s);
	}
	else if(status == 1){
		let id_option1 = document.getElementById('option1');
		id_option1.removeEventListener('click', Ans1_r1);
		let id_option2 = document.getElementById('option2');
		id_option2.removeEventListener('click', Ans2_r1);
		let id_option3 = document.getElementById('option3');
		id_option3.removeEventListener('click', Ans3_r1);
		let id_option4 = document.getElementById('option4');
		id_option4.removeEventListener('click', Ans4_r1);
	}
	else if(status == 2){
		let id_option1 = document.getElementById('option1');
		id_option1.removeEventListener('click', Ans1_r2);
		let id_option2 = document.getElementById('option2');
		id_option2.removeEventListener('click', Ans2_r2);
		let id_option3 = document.getElementById('option3');
		id_option3.removeEventListener('click', Ans3_r2);
		let id_option4 = document.getElementById('option4');
		id_option4.removeEventListener('click', Ans4_r2);
	}
	let id_options = document.getElementById('options');
	id_options.style.display = 'none';

	// スコア表示
	let id_score = document.getElementById('score');
	id_score.style.display = 'block';
	let id_scoreNum = document.getElementById('scoreNum');
	if(status == 0){
		id_scoreNum.innerHTML = correct + "/" + QArray.length;
	}
	else if(status == 1){
		id_scoreNum.innerHTML = correct + "/" + retryArray1.length;
	}
	else if(status == 2){
		id_scoreNum.innerHTML = correct + "/" + retryArray2.length;
	}

	// 復習ボタン表示
	if(incorrect != 0){
		let id_retry = document.getElementById('retry');
		id_retry.style.display = 'block';
		let id_retryButton = document.getElementById('retryButton');
		if(status == 0 || status == 2){
			id_retryButton.addEventListener('click', CallRetry1);
		}
		else if(status == 1){
			id_retryButton.addEventListener('click', CallRetry2);
		}
	}
}

function Retry(status) {
	Qcnt = 0;
	Qnum = 0;
	correct = 0;
	incorrect = 0;
	dispedQnumArray.length = 0;
	if(status == 1){
		retryArray2.length = 0;
	}
	else if(status == 2){
		retryArray1.length = 0;
	}

	// スタートボタン非表示
	let id_startQ = document.getElementById('startQ');
	id_startQ.style.display = 'none';

	// スコア非表示
	let id_score = document.getElementById('score');
	id_score.style.display = 'none';

	// 選択肢表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'block';

	if(status == 1){
		// 復習ボタン非表示
		let id_retryButton = document.getElementById('retryButton');
		id_retryButton.removeEventListener('click', CallRetry1);
		let id_retry = document.getElementById('retry');
		id_retry.style.display = 'none';

		let id_option1 = document.getElementById('option1');
		id_option1.addEventListener('click', Ans1_r1);
		let id_option2 = document.getElementById('option2');
		id_option2.addEventListener('click', Ans2_r1);
		let id_option3 = document.getElementById('option3');
		id_option3.addEventListener('click', Ans3_r1);
		let id_option4 = document.getElementById('option4');
		id_option4.addEventListener('click', Ans4_r1);
		
		DispQ(1);
	}
	else if(status == 2){
		// 復習ボタン非表示
		let id_retryButton = document.getElementById('retryButton');
		id_retryButton.removeEventListener('click', CallRetry2);
		let id_retry = document.getElementById('retry');
		id_retry.style.display = 'none';

		let id_option1 = document.getElementById('option1');
		id_option1.addEventListener('click', Ans1_r2);
		let id_option2 = document.getElementById('option2');
		id_option2.addEventListener('click', Ans2_r2);
		let id_option3 = document.getElementById('option3');
		id_option3.addEventListener('click', Ans3_r2);
		let id_option4 = document.getElementById('option4');
		id_option4.addEventListener('click', Ans4_r2);
		
		DispQ(2);
	}
}

