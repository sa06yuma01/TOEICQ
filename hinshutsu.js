let QArray = [50];

var dispedQnumArray = new Array(QArray.length);
var dispedAnsArray = new Array(QArray.length);
var retryArray1 = new Array();
var retryArray2 = new Array();
var Qcnt = 0;
var word = 0;	// 0:英語->日本語 1:日本語->英語

// 正解不正解数
var correct = 0;
var incorrect = 0;

function Ans1_s() {
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(0, 0);
}
function Ans2_s() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(1, 0);
}
function Ans3_s() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(2, 0);
}
function Ans4_s() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	CheckAnswer(3, 0);
}
function Ans1_r1() {
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(0, 1);
}
function Ans2_r1() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(1, 1);
}
function Ans3_r1() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(2, 1);
}
function Ans4_r1() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	CheckAnswer(3, 1);
}
function Ans1_r2() {
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(0, 2);
}
function Ans2_r2() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(1, 2);
}
function Ans3_r2() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option4 = document.getElementById('option4');
	id_option4.disabled = "disabled";
	CheckAnswer(2, 2);
}
function Ans4_r2() {
	let id_option1 = document.getElementById('option1');
	id_option1.disabled = "disabled";
	let id_option2 = document.getElementById('option2');
	id_option2.disabled = "disabled";
	let id_option3 = document.getElementById('option3');
	id_option3.disabled = "disabled";
	CheckAnswer(3, 2);
}
function CallDispQ0() {
	console.log("a:" + Qcnt);
	DispQ(0);
	console.log("c:" + Qcnt);
	CallHiddenOption0();
}
function CallDispQ1() {
	DispQ(1);
	CallHiddenOption1();
}
function CallDispQ2() {
	DispQ(2);
	CallHiddenOption2();
}
function CallRetry1() {
	Retry(1);
}
function CallRetry2() {
	Retry(2);
}
function CallSpeak0() {
	let dispNumInOption = dispedQnumArray[Qcnt - 1][4];
	// id_Qsentence.innerHTML = QArray[retryArray2[Qcnt - 1][dispNumInOption]][0];
	var sentents = QArray[dispedQnumArray[Qcnt - 1][dispNumInOption]][0];
	sentents = sentents.replace("~", "");
	Speak(sentents);
}
function CallSpeak1() {
	let dispNumInOption = retryArray1[Qcnt - 1][4];
	var sentents = QArray[retryArray1[Qcnt - 1][dispNumInOption]][0];
	sentents = sentents.replace("~", "");
	Speak(sentents);
}
function CallSpeak2() {
	let dispNumInOption = retryArray2[Qcnt - 1][4];
	var sentents = QArray[retryArray2[Qcnt - 1][dispNumInOption]][0];
	sentents = sentents.replace("~", "");
	Speak(sentents);
}

function CallDispOption0() {
	// 選択肢表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'block';
	// 選択肢表示ボタンを非表示
	let id_dispOptionButton = document.getElementById('dispOptionButton');
	id_dispOptionButton.removeEventListener('click', CallDispOption0);
	id_dispOptionButton.removeEventListener('click', DispOption(0));
	id_dispOptionButton.style.display = 'none';
}

function CallHiddenOption0() {
	// 選択肢非表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'none';
	// 選択肢表示ボタンを表示
	let id_dispOptionButton = document.getElementById('dispOptionButton');
	id_dispOptionButton.addEventListener('click', CallDispOption0);
	id_dispOptionButton.addEventListener('click', DispOption(0));
	id_dispOptionButton.style.display = 'block';
}

function CallDispOption1() {
	// 選択肢表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'block';
	// 選択肢表示ボタンを非表示
	let id_dispOptionButton = document.getElementById('dispOptionButton');
	id_dispOptionButton.removeEventListener('click', CallDispOption1);
	id_dispOptionButton.removeEventListener('click', DispOption(1));
	id_dispOptionButton.style.display = 'none';
}

function CallHiddenOption1() {
	// 選択肢非表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'none';
	// 選択肢表示ボタンを表示
	let id_dispOptionButton = document.getElementById('dispOptionButton');
	id_dispOptionButton.addEventListener('click', CallDispOption1);
	id_dispOptionButton.addEventListener('click', DispOption(1));
	id_dispOptionButton.style.display = 'block';
}
function CallDispOption2() {
	// 選択肢表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'block';
	// 選択肢表示ボタンを非表示
	let id_dispOptionButton = document.getElementById('dispOptionButton');
	id_dispOptionButton.removeEventListener('click', CallDispOption2);
	id_dispOptionButton.removeEventListener('click', DispOption(2));
	id_dispOptionButton.style.display = 'none';
}

function CallHiddenOption2() {
	// 選択肢非表示
	let id_options = document.getElementById('options');
	id_options.style.display = 'none';
	// 選択肢表示ボタンを表示
	let id_dispOptionButton = document.getElementById('dispOptionButton');
	id_dispOptionButton.addEventListener('click', CallDispOption2);
	id_dispOptionButton.addEventListener('click', DispOption(2));
	id_dispOptionButton.style.display = 'block';
}

function SelectWordPart(inputWord, inputPart) {
	word = inputWord;
	if(inputPart == 5){
		QArray = [
			['achieve', '達成する'],
			['acquire', '獲得する'],
			['acknowledge', '確認する'],
			['aim', '~狙う'],
			['approve', '承認する'],
			['complete', '完成する，書き込む'],
			['describe', '描写する'],
			['enable', '可能にする'],
			['evaluate', '評価する'],
			['express', '表す'],
			['purchase', '購入する'],
			['recognize', '表彰する，評価する'],
			['reveal', '明らかにする'],
			['satisfy', '満足させる'],
			['submit', '提出する'],
			['vary', '変動する'],
			['competition', '競争'],
			['efficiency', '効率'],
			['efforts', '努力'],
			['regulations', '規制'],
			['relocation', '移転'],
			['resident', '住民'],
			['respondent', '回答者'],
			['accomplished', '熟達した'],
			['accurately', '正確に'],
			['avoidable', '避けることができる'],
			['considerable', 'かなりの'],
			['effective', '効果的な'],
			['equipped', '装備が整った'],
			['extensive', '広範囲の・大がかりな'],
			['immediate', '直属の'],
			['individual', '個々の'],
			['predictable', '予見できる'],
			['recent', '最近の'],
			['regional', '地域'],
			['relatively', '比較的'],
			['reliable', '信頼できる'],
			['significant', '目立った・重要な'],
			['strictly', '厳格に'],
			['temporary', '一時的な'],
			['adhere', '守る'],
			['adjacent', '隣接'],
			['enormous', '多大な'],
			['innovative', '革新的な'],
			['mandatory', '出席が義務付けられた'],
			['mutually', '相互に'],
			['reluctant', '気が進まない'],
			['specific', '具体的な'],
			['thoroughly', '完ぺきに'],
			['ultimate', '究極の'],
		];
	}
	else if(inputPart == 6){
		QArray = [
			['accordingly', 'それに従って'],
			['as a result', '結果として'],
			['anyway', 'とにかく'],
			['besides', 'それに加えて'],
			['consequently', '結果的に'],
			['eventually', '最終的には'],
			['furthermore', 'さらに'],
			['however', 'しかしながら'],
			['in addition', '加えて'],
			['in conclusion', '結論として'],
			['in fact', '実際'],
			['in the meantime', 'その間は'],
			['indeed', '実に'],
			['instead', 'その代わりに'],
			['likewise', '同様に'],
			['meanwhile', '一方的に'],
			['moreover', 'さらに'],
			['naturally', '当然のことだが'],
			['nevertheless', 'それにも関わらず'],
			['on the  contrary', '反対に'],
			['on the other hand', 'かたや'],
			['otherwise', 'さもなければ'],
			['similarly', '同様に'],
			['still', 'それでもなお'],
			['therefore', 'それゆえに'],
			['thus', 'このように'],
			['unfortunately', '残念ながら'],
			['yet', 'しかしそれでも'],
			['although', '(…が)～するにもかかわらず'],
			['unless', '(…が)しない限り'],
			['whereas', '(…が)～する一方で'],
			['provided', '(…が)～するとして'],
			['in case', '(…が)～するといけないので'],
			['so that', '(…が)～するという目的で'],
			['concerning', '～に関して'],
			['despite', '～にもかかわらず'],
			['following', '～のあとで'],
			['in spite of ~', '～にもかかわらず'],
			['prior to ~', '～に先立って'],
			['regarding', '～に関して'],
			['unlike', '～とは違って'],
			['for example', '例えば'],
			['for instance', '例えば'],
			['regardless of ~', '～は関係なく'],
			['such as ~', '～など'],
			['alternatively', 'その代わりに'],
			['hence', 'それゆえに'],
			['subsequently', 'その後に続いて'],
			['nonetheless', 'それにも関わらず'],
			['notwithstanding', 'それにも関わらず'],
		];
	}
	else if(inputPart == 7){
		QArray = [
			['accordingly', 'それに従って'],
			['as a result', '結果として'],
			['anyway', 'とにかく'],
			['besides', 'それに加えて'],
			['consequently', '結果的に'],
			['eventually', '最終的には'],
			['furthermore', 'さらに'],
			['however', 'しかしながら'],
			['in addition', '加えて'],
			['in conclusion', '結論として'],
			['in fact', '実際'],
			['in the meantime', 'その間は'],
			['indeed', '実に'],
			['instead', 'その代わりに'],
			['likewise', '同様に'],
			['meanwhile', '一方的に'],
			['moreover', 'さらに'],
			['naturally', '当然のことだが'],
			['nevertheless', 'それにも関わらず'],
			['on the  contrary', '反対に'],
			['on the other hand', 'かたや'],
			['otherwise', 'さもなければ'],
			['similarly', '同様に'],
			['still', 'それでもなお'],
			['therefore', 'それゆえに'],
			['thus', 'このように'],
			['unfortunately', '残念ながら'],
			['yet', 'しかしそれでも'],
			['although', '(…が)～するにもかかわらず'],
			['unless', '(…が)しない限り'],
			['whereas', '(…が)～する一方で'],
			['provided', '(…が)～するとして'],
			['in case', '(…が)～するといけないので'],
			['so that', '(…が)～するという目的で'],
			['concerning', '～に関して'],
			['despite', '～にもかかわらず'],
			['following', '～のあとで'],
			['in spite of ~', '～にもかかわらず'],
			['prior to ~', '～に先立って'],
			['regarding', '～に関して'],
			['unlike', '～とは違って'],
			['for example', '例えば'],
			['for instance', '例えば'],
			['regardless of ~', '～は関係なく'],
			['such as ~', '～など'],
			['alternatively', 'その代わりに'],
			['hence', 'それゆえに'],
			['subsequently', 'その後に続いて'],
			['nonetheless', 'それにも関わらず'],
			['notwithstanding', 'それにも関わらず'],
		];
	}
	StartQ();
}

function StartQ() {
	Qcnt = 0;
	correct = 0;
	incorrect = 0;
	dispedQnumArray.length = 0;
	dispedAnsArray.length = 0;
	retryArray1.length = 0;
	retryArray2.length = 0;

	// スタートボタン非表示
	let id_startQ = document.getElementById('startQ');
	id_startQ.style.display = 'none';
	// スコア非表示
	let id_score = document.getElementById('score');
	id_score.style.display = 'none';

	// 選択肢表示ボタンを表示
	let id_dispOptionButton = document.getElementById('dispOptionButton');
	id_dispOptionButton.style.display = 'block';
	id_dispOptionButton.addEventListener('click', CallDispOption0);

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

	if (status == 0) {
		if (Qcnt > QArray.length) {
			Finish(0);
			return;
		}
		else {
			// 問題文表示
			SelectQ(0);
			if(word == 0){
				console.log("b:" + dispedQnumArray[Qcnt - 1]);
				let id_Qsentence = document.getElementById('Qsentence');
				let dispNumInOption = dispedQnumArray[Qcnt - 1][4];
				id_Qsentence.innerHTML = QArray[dispedQnumArray[Qcnt - 1][dispNumInOption]][0];	
				// 聞くボタン表示
				let id_speak = document.getElementById('speak');
				id_speak.style.display = 'block';
				id_speak.removeEventListener('click', CallSpeak0);
				id_speak.addEventListener('click', CallSpeak0);
			}
			if(word == 1){
				let id_Qsentence = document.getElementById('Qsentence');
				let dispNumInOption = dispedQnumArray[Qcnt - 1][4];
				id_Qsentence.innerHTML = QArray[dispedQnumArray[Qcnt - 1][dispNumInOption]][1];	
			}
		}
	}
	else if (status == 1) {
		if (Qcnt > retryArray1.length) {
			Finish(1);
		}
		else {
			// 問題文表示
			if(word == 0){
				let id_Qsentence = document.getElementById('Qsentence');
				let dispNumInOption = retryArray1[Qcnt - 1][4];
				id_Qsentence.innerHTML = QArray[retryArray1[Qcnt - 1][dispNumInOption]][0];
				
				// 聞くボタン表示
				let id_speak = document.getElementById('speak');
				id_speak.style.display = 'block';
				id_speak.removeEventListener('click', CallSpeak1);
				id_speak.addEventListener('click', CallSpeak1);
			}
			if(word == 1){
				let id_Qsentence = document.getElementById('Qsentence');
				let dispNumInOption = retryArray1[Qcnt - 1][4];
				id_Qsentence.innerHTML = QArray[retryArray1[Qcnt - 1][dispNumInOption]][1];
			}
		}
	}
	else if (status == 2) {
		if (Qcnt > retryArray2.length) {
			Finish(2);
		}
		else {
			// 問題文表示
			if(word == 0){
				let id_Qsentence = document.getElementById('Qsentence');
				let dispNumInOption = retryArray2[Qcnt - 1][4];
				id_Qsentence.innerHTML = QArray[retryArray2[Qcnt - 1][dispNumInOption]][0];
				
				// 聞くボタン表示
				let id_speak = document.getElementById('speak');
				id_speak.style.display = 'block';
				id_speak.removeEventListener('click', CallSpeak2);
				id_speak.addEventListener('click', CallSpeak2);
			}
			if(word == 1){
				let id_Qsentence = document.getElementById('Qsentence');
				let dispNumInOption = retryArray2[Qcnt - 1][4];
				id_Qsentence.innerHTML = QArray[retryArray2[Qcnt - 1][dispNumInOption]][1];
				
				// 聞くボタン表示
				let id_speak = document.getElementById('speak');
				id_speak.style.display = 'block';
				id_speak.removeEventListener('click', CallSpeak2);
				id_speak.addEventListener('click', CallSpeak2);
			}
		}
	}
}

function DispOption(status) {
	if (status == 0) {
		if (Qcnt > QArray.length) {
			Finish(0);
		}
		else {
			// 問題文表示
			// SelectQ(0);
			if (word == 0) {
				// 選択肢表示
				let id_option1 = document.getElementById('option1');
				id_option1.innerHTML = QArray[dispedQnumArray[Qcnt - 1][0]][1];
				let id_option2 = document.getElementById('option2');
				id_option2.innerHTML = QArray[dispedQnumArray[Qcnt - 1][1]][1];
				let id_option3 = document.getElementById('option3');
				id_option3.innerHTML = QArray[dispedQnumArray[Qcnt - 1][2]][1];
				let id_option4 = document.getElementById('option4');
				id_option4.innerHTML = QArray[dispedQnumArray[Qcnt - 1][3]][1];
			}
			if (word == 1) {
				// 選択肢表示
				let id_option1 = document.getElementById('option1');
				id_option1.innerHTML = QArray[dispedQnumArray[Qcnt - 1][0]][0];
				let id_option2 = document.getElementById('option2');
				id_option2.innerHTML = QArray[dispedQnumArray[Qcnt - 1][1]][0];
				let id_option3 = document.getElementById('option3');
				id_option3.innerHTML = QArray[dispedQnumArray[Qcnt - 1][2]][0];
				let id_option4 = document.getElementById('option4');
				id_option4.innerHTML = QArray[dispedQnumArray[Qcnt - 1][3]][0];
			}
		}
	}
	else if (status == 1) {
		if (Qcnt > retryArray1.length) {
			Finish(1);
		}
		else {
			// 問題文表示
			if (word == 0) {
				// 選択肢表示
				let id_option1 = document.getElementById('option1');
				id_option1.innerHTML = QArray[retryArray1[Qcnt - 1][0]][1];
				let id_option2 = document.getElementById('option2');
				id_option2.innerHTML = QArray[retryArray1[Qcnt - 1][1]][1];
				let id_option3 = document.getElementById('option3');
				id_option3.innerHTML = QArray[retryArray1[Qcnt - 1][2]][1];
				let id_option4 = document.getElementById('option4');
				id_option4.innerHTML = QArray[retryArray1[Qcnt - 1][3]][1];
			}
			if (word == 1) {
				// 選択肢表示
				let id_option1 = document.getElementById('option1');
				id_option1.innerHTML = QArray[retryArray1[Qcnt - 1][0]][0];
				let id_option2 = document.getElementById('option2');
				id_option2.innerHTML = QArray[retryArray1[Qcnt - 1][1]][0];
				let id_option3 = document.getElementById('option3');
				id_option3.innerHTML = QArray[retryArray1[Qcnt - 1][2]][0];
				let id_option4 = document.getElementById('option4');
				id_option4.innerHTML = QArray[retryArray1[Qcnt - 1][3]][0];
			}
		}
	}
	else if (status == 2) {
		if (Qcnt > retryArray2.length) {
			Finish(2);
		}
		else {
			// 問題文表示
			if (word == 0) {
				// 選択肢表示
				let id_option1 = document.getElementById('option1');
				id_option1.innerHTML = QArray[retryArray2[Qcnt - 1][0]][1];
				let id_option2 = document.getElementById('option2');
				id_option2.innerHTML = QArray[retryArray2[Qcnt - 1][1]][1];
				let id_option3 = document.getElementById('option3');
				id_option3.innerHTML = QArray[retryArray2[Qcnt - 1][2]][1];
				let id_option4 = document.getElementById('option4');
				id_option4.innerHTML = QArray[retryArray2[Qcnt - 1][3]][1];
			}
			if (word == 1) {
				// 選択肢表示
				let id_option1 = document.getElementById('option1');
				id_option1.innerHTML = QArray[retryArray2[Qcnt - 1][0]][0];
				let id_option2 = document.getElementById('option2');
				id_option2.innerHTML = QArray[retryArray2[Qcnt - 1][1]][0];
				let id_option3 = document.getElementById('option3');
				id_option3.innerHTML = QArray[retryArray2[Qcnt - 1][2]][0];
				let id_option4 = document.getElementById('option4');
				id_option4.innerHTML = QArray[retryArray2[Qcnt - 1][3]][0];
			}
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
	if (status == 0) {
		var ansRandom = Math.floor(Math.random() * (QArray.length));
		
		while (dispedAnsArray.indexOf(ansRandom) != -1) {
			ansRandom = Math.floor(Math.random() * (QArray.length));
			console.log("d");
		}
		dispedAnsArray[dispedAnsArray.length] = ansRandom;
		
		var optionRandom = Math.floor(Math.random() * 4);
		var option = new Array(4);
		for(let i = 0; i < 4; i++){
			if(i == optionRandom){
				option[i] = ansRandom;
			}
			else{
				var fakeRandom = Math.floor(Math.random() * (QArray.length));
				var samefrag = 1;
				while (fakeRandom == ansRandom || option.indexOf(fakeRandom) != -1 || samefrag == 1) {
					console.log("e");
					fakeRandom = Math.floor(Math.random() * (QArray.length));
					samefrag = 1;
					for(let k = 0; k < 4; k++){
						if(QArray[fakeRandom][1] != QArray[k][1]){
							samefrag = 0;
						}
						else{
							samefrag = 1;
						}
					}
					if(QArray[ansRandom][1] == QArray[fakeRandom][1]){
						samefrag = 1;
					}
				}
				option[i] = fakeRandom;
			}
		}
		option[4] = optionRandom;
		dispedQnumArray[dispedQnumArray.length] = option;
		return;
	}
}

function CheckAnswer(Anum, status) {
	let id_result = document.getElementById('result');
	if (status == 0) {
		if (dispedQnumArray[Qcnt - 1][4] == Anum) {
			correct++;
			id_result.innerHTML = "<br><img src=\"maru.png\" width=\"10%\">";
		}
		else {
			incorrect++;
			retryArray1[retryArray1.length] = dispedQnumArray[Qcnt - 1];
			id_result.innerHTML = "<br><img src=\"batsu.png\" width=\"10%\">";
		}
	}
	else if (status == 1) {
		if (retryArray1[Qcnt - 1][4] == Anum) {
			correct++;
			id_result.innerHTML = "<br><img src=\"maru.png\" width=\"10%\">";
		}
		else {
			incorrect++;
			retryArray2[retryArray2.length] = retryArray1[Qcnt - 1];
			id_result.innerHTML = "<br><img src=\"batsu.png\" width=\"10%\">";
		}
	}
	else if (status == 2) {
		if (retryArray2[Qcnt - 1][4] == Anum) {
			correct++;
			id_result.innerHTML = "<br><img src=\"maru.png\" width=\"10%\">";
		}
		else {
			incorrect++;
			retryArray1[retryArray1.length] = retryArray2[Qcnt - 1];
			id_result.innerHTML = "<br><img src=\"batsu.png\" width=\"10%\">";
		}
	}

	let id_next = document.getElementById('next');
	id_next.style.display = 'block';
	let id_nextButton = document.getElementById('nextButton');
	if (status == 0) {
		id_nextButton.removeEventListener('click', CallDispQ1)
		id_nextButton.removeEventListener('click', CallDispQ2)
		id_nextButton.addEventListener('click', CallDispQ0);
	}
	else if (status == 1) {
		id_nextButton.removeEventListener('click', CallDispQ0)
		id_nextButton.removeEventListener('click', CallDispQ2)
		id_nextButton.addEventListener('click', CallDispQ1);
	}
	else if (status == 2) {
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

	// 聞くボタン非表示
	let id_speak = document.getElementById('speak');
	id_speak.removeEventListener('click', CallSpeak0);
	id_speak.removeEventListener('click', CallSpeak1);
	id_speak.removeEventListener('click', CallSpeak2);
	id_speak.style.display = 'none';

	// 選択ボタン非表示
	if (status == 0) {
		let id_option1 = document.getElementById('option1');
		id_option1.removeEventListener('click', Ans1_s);
		let id_option2 = document.getElementById('option2');
		id_option2.removeEventListener('click', Ans2_s);
		let id_option3 = document.getElementById('option3');
		id_option3.removeEventListener('click', Ans3_s);
		let id_option4 = document.getElementById('option4');
		id_option4.removeEventListener('click', Ans4_s);
		// 選択肢表示ボタンを表示
		let id_dispOptionButton = document.getElementById('dispOptionButton');
		id_dispOptionButton.style.display = 'block';
		id_dispOptionButton.removeEventListener('click', CallDispOption0);
	}
	else if (status == 1) {
		let id_option1 = document.getElementById('option1');
		id_option1.removeEventListener('click', Ans1_r1);
		let id_option2 = document.getElementById('option2');
		id_option2.removeEventListener('click', Ans2_r1);
		let id_option3 = document.getElementById('option3');
		id_option3.removeEventListener('click', Ans3_r1);
		let id_option4 = document.getElementById('option4');
		id_option4.removeEventListener('click', Ans4_r1);
		// 選択肢表示ボタンを表示
		let id_dispOptionButton = document.getElementById('dispOptionButton');
		id_dispOptionButton.style.display = 'block';
		id_dispOptionButton.removeEventListener('click', CallDispOption1);
	}
	else if (status == 2) {
		let id_option1 = document.getElementById('option1');
		id_option1.removeEventListener('click', Ans1_r2);
		let id_option2 = document.getElementById('option2');
		id_option2.removeEventListener('click', Ans2_r2);
		let id_option3 = document.getElementById('option3');
		id_option3.removeEventListener('click', Ans3_r2);
		let id_option4 = document.getElementById('option4');
		id_option4.removeEventListener('click', Ans4_r2);
		// 選択肢表示ボタンを表示
		let id_dispOptionButton = document.getElementById('dispOptionButton');
		id_dispOptionButton.style.display = 'block';
		id_dispOptionButton.removeEventListener('click', CallDispOption2);
	}
	let id_options = document.getElementById('options');
	id_options.style.display = 'none';

	// スコア表示
	let id_score = document.getElementById('score');
	id_score.style.display = 'block';
	let id_scoreNum = document.getElementById('scoreNum');
	if (status == 0) {
		id_scoreNum.innerHTML = correct + "/" + QArray.length;
	}
	else if (status == 1) {
		id_scoreNum.innerHTML = correct + "/" + retryArray1.length;
	}
	else if (status == 2) {
		id_scoreNum.innerHTML = correct + "/" + retryArray2.length;
	}

	// 復習ボタン表示
	if (incorrect != 0) {
		let id_retry = document.getElementById('retry');
		id_retry.style.display = 'block';
		let id_retryButton = document.getElementById('retryButton');
		if (status == 0 || status == 2) {
			id_retryButton.addEventListener('click', CallRetry1);
		}
		else if (status == 1) {
			id_retryButton.addEventListener('click', CallRetry2);
		}
	}
}

function Retry(status) {
	Qcnt = 0;
	correct = 0;
	incorrect = 0;
	dispedQnumArray.length = 0;
	dispedAnsArray.length = 0;
	if (status == 1) {
		retryArray2.length = 0;
	}
	else if (status == 2) {
		retryArray1.length = 0;
	}

	// スタートボタン非表示
	let id_startQ = document.getElementById('startQ');
	id_startQ.style.display = 'none';

	// スコア非表示
	let id_score = document.getElementById('score');
	id_score.style.display = 'none';

	
	if (status == 1) {
		// 選択肢表示ボタンを表示
		let id_dispOptionButton = document.getElementById('dispOptionButton');
		id_dispOptionButton.style.display = 'block';
		id_dispOptionButton.addEventListener('click', CallDispOption1);

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
	else if (status == 2) {
		// 選択肢表示ボタンを表示
		let id_dispOptionButton = document.getElementById('dispOptionButton');
		id_dispOptionButton.style.display = 'block';
		id_dispOptionButton.addEventListener('click', CallDispOption2);

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

function Speak(sentents) {
	var synthes = new SpeechSynthesisUtterance();
	synthes.voiceURI = 'native';
	synthes.volume = 1;
	synthes.rate = 1;
	synthes.pitch = 2;
	synthes.text = sentents;
	synthes.lang = 'en-US';
	speechSynthesis.speak(synthes);
}