// Simple dashboard interactivity and demo AI-powered mood analyzer (heuristic)
document.addEventListener('DOMContentLoaded',()=>{
  // Navigation: simple show/hide for home and user sections
  const navLinks = document.querySelectorAll('.navlink');
  const homeSection = document.getElementById('home-section');
  const userSection = document.getElementById('user-section');
  let chart = null; // Chart.js instance

  function setActive(targetId){
    // show/hide the two top-level sections explicitly
    if(targetId === 'home-section'){
      homeSection.hidden = false;
      userSection.hidden = true;
    } else if(targetId === 'user-section'){
      homeSection.hidden = true;
      userSection.hidden = false;
      // initialize chart on first reveal to avoid rendering issues when canvas is hidden
      initChart();
    }
    navLinks.forEach(btn=>btn.classList.toggle('active', btn.dataset.target===targetId));
  }
  navLinks.forEach(btn=>btn.addEventListener('click',()=> setActive(btn.dataset.target)));
  // default to home on load
  if(document.readyState === 'complete' || document.readyState === 'interactive'){
    setActive('home-section');
  }
  // chart data (kept outside so initChart can reference)
  const labels = ['2025-10-18','2025-10-19','2025-10-20','2025-10-21','2025-10-22','2025-10-23'];
  const engagement = [120,140,180,160,190,210];
  const mood = [0.2,0.35,0.5,0.45,0.6,0.55];

  function initChart(){
    if(chart) return; // already initialized
    const canvas = document.getElementById('trendChart');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    chart = new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Engagement (actions/day)',data:engagement,borderColor:'#6dd3d0',backgroundColor:'rgba(109,211,208,0.08)',yAxisID:'y1'},{label:'Avg mood (0-1)',data:mood,borderColor:'#ffd36d',backgroundColor:'rgba(255,211,109,0.08)',yAxisID:'y2'}]},options:{responsive:true,interaction:{mode:'index',intersect:false},scales:{y1:{type:'linear',position:'left'},y2:{type:'linear',position:'right',min:0,max:1}}}});
  }

  // basic sentiment analyzer (demo only) — counts positive/negative words
  const positives = ['good','happy','calm','better','well','great','hopeful'];
  const negatives = ['sad','anxious','hurt','depressed','bad','tired','angry','lonely'];

  function analyzeText(text){
    const t=text.toLowerCase();
    let p=0,n=0;
    for(const w of positives) if(t.includes(w)) p++;
    for(const w of negatives) if(t.includes(w)) n++;
    // score between -1 and 1
    const score = (p - n) / Math.max(1, p + n);
    return {p,n,score};
  }

  const analyzeBtn=document.getElementById('analyzeBtn');
  if(analyzeBtn){
    analyzeBtn.addEventListener('click',()=>{
      handleAnalyzeClick();
    });
  }

  function handleAnalyzeClick(){
  const moodInputEl = document.getElementById('moodInput');
  const out = document.getElementById('analysisResult');
  const txt = moodInputEl ? moodInputEl.value.trim() : '';
  if(!txt){ if(out) out.textContent='Please enter a short note to analyze.'; return; }
  const res = analyzeText(txt);
    let label='Neutral';
    if(res.score>0.2) label='Positive';
    else if(res.score<-0.2) label='Negative';
    else label='Mixed/Neutral';
    out.innerHTML=`<strong>${label}</strong> — score ${res.score.toFixed(2)} ( +${res.p} / -${res.n} )`;

    // update chart with a new point (demo)
    const now=new Date().toISOString().slice(0,10);
    // ensure chart exists and update it
    initChart();
    if(chart){
      chart.data.labels.push(now);
      chart.data.datasets[0].data.push(Math.max(50, Math.round(150 + Math.random()*80)));
      chart.data.datasets[1].data.push(Math.max(0, Math.min(1, (res.score+1)/2)));
      chart.update();
    }

    // append log row
    const tbody=document.querySelector('#logsTable tbody');
    if(tbody){
      const tr=document.createElement('tr');
      const time=new Date().toISOString().slice(0,16).replace('T',' ');
      tr.innerHTML=`<td>${time}</td><td>analyze</td><td>${label} (score ${res.score.toFixed(2)})</td>`;
      tbody.prepend(tr);
    }
  }
  // end handleAnalyzeClick
});
