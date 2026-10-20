const questions = [
{topic:"Aljabar",text:"Sebuah bilangan positif x memenuhi x + 1/x = 5. Nilai x² + 1/x² adalah ...",options:["21","23","25","27","29"],answer:1,explain:"Kuadratkan: (x + 1/x)² = x² + 2 + 1/x² = 25, sehingga x² + 1/x² = 23."},
{topic:"Fungsi",text:"Fungsi kuadrat f(x)=x²−6x+k memiliki nilai minimum −4. Jika grafiknya memotong sumbu-x di dua titik berbeda, nilai k yang memenuhi adalah ...",options:["k < 5","k = 5","k = 9","k > 9","semua bilangan real"],answer:0,explain:"Nilai minimum x²−6x+k adalah k−9. Karena k−9=−4, diperoleh k=5. Namun diskriminan pada k=5 adalah 36−20=16>0. Jadi nilai k tepat 5. (Pilihan yang benar: B).",overrideAnswer:1},
{topic:"Peluang",text:"Dalam kotak terdapat 4 bola merah dan 3 bola biru. Dua bola diambil sekaligus secara acak tanpa pengembalian. Peluang kedua bola berwarna sama adalah ...",options:["2/7","3/7","5/14","1/2","4/7"],answer:2,explain:"Banyak pasangan seluruhnya C(7,2)=21. Pasangan sama warna: C(4,2)+C(3,2)=6+3=9. Peluang = 9/21 = 3/7. (Pilihan yang benar: B).",overrideAnswer:1},
{topic:"Geometri",text:"Sebuah taman berbentuk persegi panjang memiliki keliling 40 m. Luas maksimum taman tersebut adalah ...",options:["64 m²","80 m²","90 m²","100 m²","120 m²"],answer:3,explain:"Jika panjang p dan lebar l, p+l=20. Luas maksimum untuk jumlah tetap terjadi saat p=l=10, sehingga luas 100 m²."},
{topic:"Trigonometri",text:"Jika sin θ = 3/5 dan θ berada di kuadran II, nilai tan θ adalah ...",options:["−4/3","−3/4","3/4","4/3","5/3"],answer:1,explain:"Di kuadran II, cos θ negatif. Dari sin θ=3/5 diperoleh cos θ=−4/5. Maka tan θ=(3/5)/(−4/5)=−3/4."},
{topic:"Statistika",text:"Rata-rata 8 data adalah 12. Setelah satu data bernilai 20 dihapus, rata-rata data yang tersisa menjadi ...",options:["10","10 6/7","11","11 1/7","12"],answer:3,explain:"Jumlah awal = 8×12=96. Setelah 20 dihapus, jumlah 76 untuk 7 data. Rata-rata = 76/7 = 10 6/7. (Pilihan yang benar: B).",overrideAnswer:1},
{topic:"Barisan",text:"Barisan aritmetika memiliki suku ke-3 sebesar 11 dan suku ke-8 sebesar 31. Jumlah 10 suku pertamanya adalah ...",options:["180","200","210","220","230"],answer:2,explain:"Beda d=(31−11)/(8−3)=4. Suku pertama a=11−2(4)=3. S10=10/2[2(3)+9(4)]=210."},
{topic:"Pemodelan",text:"Tarif taksi terdiri atas biaya awal Rp8.000 dan Rp4.000 per kilometer. Jika seseorang memiliki anggaran paling banyak Rp44.000, jarak maksimum yang dapat ditempuh adalah ...",options:["7 km","8 km","9 km","10 km","11 km"],answer:2,explain:"8.000+4.000x≤44.000, sehingga 4.000x≤36.000 dan x≤9."},
{topic:"Persamaan",text:"Sistem x+y=7 dan x²+y²=25 memiliki pasangan nilai (x,y). Nilai xy adalah ...",options:["8","10","12","14","16"],answer:1,explain:"(x+y)²=x²+y²+2xy. Maka 49=25+2xy, sehingga xy=12. (Pilihan yang benar: C).",overrideAnswer:2},
{topic:"Eksponen",text:"Jika 2^(x+1)=16^(x−1), nilai x adalah ...",options:["1","4/3","5/3","2","3"],answer:2,explain:"16=2⁴, sehingga x+1=4x−4. Maka 3x=5 dan x=5/3."},
{topic:"Geometri Analitik",text:"Jarak titik A(2,−1) ke titik B(8,7) adalah ...",options:["8","9","10","12","14"],answer:2,explain:"Jarak = √[(8−2)²+(7+1)²] = √(36+64)=10."},
{topic:"Peluang",text:"Sebuah dadu bersisi enam dilempar dua kali. Peluang jumlah mata dadu sama dengan 8 adalah ...",options:["1/6","5/36","1/4","7/36","1/3"],answer:1,explain:"Pasangan berjumlah 8: (2,6),(3,5),(4,4),(5,3),(6,2), ada 5 dari 36 kemungkinan. Peluang 5/36."},
{topic:"Fungsi",text:"Diketahui f(x)=2x−3 dan g(x)=x²+1. Nilai (g∘f)(2) adalah ...",options:["1","2","3","4","5"],answer:2,explain:"f(2)=1, lalu g(1)=1²+1=2. (Pilihan yang benar: B).",overrideAnswer:1},
{topic:"Trigonometri",text:"Sebuah tangga sepanjang 5 m bersandar pada dinding. Kaki tangga berjarak 3 m dari dinding. Tinggi ujung tangga pada dinding adalah ...",options:["2 m","3 m","4 m","√34 m","5 m"],answer:2,explain:"Dengan Teorema Pythagoras, tinggi²=5²−3²=16, sehingga tinggi 4 m."},
{topic:"Data",text:"Nilai lima siswa adalah 60, 70, 70, 80, dan x. Jika rata-ratanya 72, nilai x adalah ...",options:["75","80","85","90","95"],answer:2,explain:"Jumlah seluruh nilai = 5×72=360. Jumlah empat nilai yang diketahui 280, jadi x=80. (Pilihan yang benar: B).",overrideAnswer:1},
{topic:"Inequality",text:"Untuk bilangan real x, pertidaksamaan (x−2)(x+3) < 0 memiliki himpunan penyelesaian ...",options:["x < −3 atau x > 2","−3 < x < 2","x < 2","x > −3","semua bilangan real"],answer:1,explain:"Hasil kali dua faktor linear negatif di antara akar-akarnya, yaitu −3 < x < 2."},
{topic:"Transformasi",text:"Titik P(−2,3) dicerminkan terhadap sumbu-y, kemudian ditranslasi oleh vektor (4,−1). Koordinat akhirnya adalah ...",options:["(−6,2)","(−2,2)","(2,2)","(6,4)","(2,4)"],answer:2,explain:"Pencerminan terhadap sumbu-y mengubah (x,y) menjadi (−x,y), sehingga P menjadi (2,3). Ditambah (4,−1) menghasilkan (6,2). Tidak ada pilihan yang sesuai; jawaban benar semestinya (6,2).",overrideOptions:["(−6,2)","(−2,2)","(2,2)","(6,2)","(2,4)"],overrideAnswer:3},
{topic:"Pemodelan",text:"Sebuah produk diberi diskon 20%, lalu dikenai pajak 10% dari harga setelah diskon. Jika harga awal Rp250.000, harga akhir adalah ...",options:["Rp200.000","Rp210.000","Rp220.000","Rp225.000","Rp230.000"],answer:1,explain:"Setelah diskon: 250.000×0,8=200.000. Setelah pajak: 200.000×1,1=220.000. (Pilihan yang benar: C).",overrideAnswer:2},
{topic:"Aljabar",text:"Jika x dan y adalah akar-akar persamaan t²−7t+10=0, nilai x²+y² adalah ...",options:["19","21","25","29","49"],answer:3,explain:"x+y=7 dan xy=10. Maka x²+y²=(x+y)²−2xy=49−20=29."},
{topic:"Optimasi",text:"Sebuah persegi panjang memiliki luas 48 cm². Jika panjang dan lebarnya bilangan bulat positif, keliling terkecil yang mungkin adalah ...",options:["24 cm","26 cm","28 cm","32 cm","40 cm"],answer:0,explain:"Pasangan faktor 48 yang paling dekat adalah 6 dan 8. Keliling = 2(6+8)=28 cm. (Pilihan yang benar: C).",overrideAnswer:2}
];

// Normalisasi beberapa opsi yang dikoreksi agar kunci dan pembahasan konsisten.
questions.forEach(q => {
  if (q.overrideOptions) q.options = q.overrideOptions;
  if (Number.isInteger(q.overrideAnswer)) q.answer = q.overrideAnswer;
});
let current = 0, answers = Array(questions.length).fill(null), secondsLeft = 3600, timerInterval = null, student = {name:"",className:""};
const $ = id => document.getElementById(id);
const letters = ["A","B","C","D","E"];
const attemptKey = "tka_math_sma_2026_attempt_v1";

$("startForm").addEventListener("submit", e => {
  e.preventDefault();
  if (localStorage.getItem(attemptKey)) {
    alert("Ujian pada browser ini sudah pernah dikumpulkan. Untuk menjaga kejujuran latihan, percobaan baru tidak tersedia pada browser ini.");
    return;
  }
  student.name = $("studentName").value.trim();
  student.className = $("studentClass").value.trim();
  if (!student.name || !student.className) return;
  $("welcome").classList.add("hidden");
  $("exam").classList.remove("hidden");
  $("greeting").textContent = "Semangat, " + student.name + "!";
  renderGrid(); renderQuestion(); startTimer();
  window.scrollTo({top:0,behavior:"smooth"});
});

function renderGrid(){
  const grid=$("questionGrid"); grid.innerHTML="";
  questions.forEach((q,i)=>{
    const b=document.createElement("button"); b.type="button"; b.className="q-number";
    b.textContent=i+1; b.setAttribute("aria-label","Buka soal "+(i+1));
    if(i===current)b.classList.add("current");
    if(answers[i]!==null)b.classList.add("answered");
    b.addEventListener("click",()=>{current=i;renderGrid();renderQuestion();});
    grid.appendChild(b);
  });
}
function renderQuestion(){
  const q=questions[current];
  $("questionTopic").textContent=q.topic.toUpperCase();
  $("questionNumber").textContent="SOAL "+String(current+1).padStart(2,"0");
  $("questionText").textContent=q.text;
  $("options").innerHTML="";
  q.options.forEach((option,i)=>{
    const label=document.createElement("label"); label.className="option"+(answers[current]===i?" selected":"");
    const radio=document.createElement("input");radio.type="radio";radio.name="answer";radio.value=i;radio.checked=answers[current]===i;
    radio.addEventListener("change",()=>{answers[current]=i;renderGrid();renderQuestion();});
    const letter=document.createElement("span");letter.className="option-letter";letter.textContent=letters[i];
    const text=document.createElement("span");text.textContent=option;
    label.append(radio,letter,text);$("options").appendChild(label);
  });
  $("progressText").textContent=`Soal ${current+1} dari ${questions.length}`;
  $("answeredText").textContent=answers.filter(a=>a!==null).length+" terjawab";
  $("progressBar").style.width=((current+1)/questions.length*100)+"%";
  $("prevBtn").disabled=current===0;$("prevBtn").style.opacity=current===0?".45":"1";
  $("nextBtn").textContent=current===questions.length-1?"Kembali ke soal 1":"Berikutnya →";
}
$("prevBtn").addEventListener("click",()=>{if(current>0){current--;renderGrid();renderQuestion();}});
$("nextBtn").addEventListener("click",()=>{current=current===questions.length-1?0:current+1;renderGrid();renderQuestion();});
$("finishBtn").addEventListener("click",()=>{
  const blank=answers.filter(a=>a===null).length;
  $("modalMessage").textContent=blank?`Masih ada ${blank} soal yang belum dijawab. Anda tetap dapat mengumpulkan ujian sekarang.`:"Semua soal telah dijawab. Apakah Anda yakin ingin mengumpulkan?";
  $("confirmModal").classList.remove("hidden");
});
$("cancelFinish").addEventListener("click",()=>$("confirmModal").classList.add("hidden"));
$("confirmFinish").addEventListener("click",()=>{ $("confirmModal").classList.add("hidden"); finishExam(); });
function startTimer(){
  updateTimer();
  timerInterval=setInterval(()=>{secondsLeft--;updateTimer();if(secondsLeft<=0){clearInterval(timerInterval);finishExam(true);}},1000);
}
function updateTimer(){
  const m=Math.floor(secondsLeft/60),s=secondsLeft%60;
  $("timer").textContent=String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");
  if(secondsLeft<=300)$("timer").parentElement.classList.add("warning");
}
function finishExam(auto=false){
  if(timerInterval)clearInterval(timerInterval);
  let correct=0;
  answers.forEach((a,i)=>{if(a===questions[i].answer)correct++;});
  const blank=answers.filter(a=>a===null).length, wrong=questions.length-correct-blank, score=Math.round(correct/questions.length*100);
  const result={name:student.name,className:student.className,score,correct,wrong,blank,submittedAt:new Date().toISOString()};
  try{localStorage.setItem(attemptKey,JSON.stringify(result));}catch(e){}
  $("exam").classList.add("hidden");$("result").classList.remove("hidden");
  $("resultName").textContent=student.name+" • "+student.className+(auto?" • Waktu habis":"");
  $("score").textContent=score;$("correctCount").textContent=correct;$("wrongCount").textContent=wrong;$("blankCount").textContent=blank;
  $("scoreMessage").textContent=score>=85?"Sangat baik! Terus pertahankan penalaran Anda.":score>=70?"Bagus! Tinjau kembali soal yang belum tepat.":"Jadikan hasil ini sebagai bahan belajar dan latihan lanjutan.";
  const list=$("reviewList");list.innerHTML="";
  questions.forEach((q,i)=>{
    const ok=answers[i]===q.answer, item=document.createElement("div");item.className="review-item "+(ok?"correct":"incorrect");
    const h=document.createElement("h4");h.textContent=`${i+1}. ${q.text}`;
    const yours=document.createElement("p");yours.textContent="Jawaban Anda: "+(answers[i]===null?"Tidak dijawab":letters[answers[i]]+". "+q.options[answers[i]]);
    const right=document.createElement("p");right.className="right-answer";right.textContent="Kunci: "+letters[q.answer]+". "+q.options[q.answer];
    const exp=document.createElement("p");exp.textContent="Pembahasan: "+q.explain;
    item.append(h,yours,right,exp);list.appendChild(item);
  });
  window.scrollTo({top:0,behavior:"smooth"});
}
$("printBtn").addEventListener("click",()=>window.print());
