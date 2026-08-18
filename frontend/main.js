async function loadLessons(){
  const res = await fetch('/api/lessons');
  const data = await res.json();
  const list = document.getElementById('list');
  list.innerHTML = '';
  data.lessons.forEach(lesson => {
    const div = document.createElement('div');
    div.className = 'lesson';
    const btn = document.createElement('button');
    btn.textContent = `Bài ${lesson.id}: ${lesson.title}`;
    btn.onclick = () => showDetail(lesson);
    div.appendChild(btn);
    list.appendChild(div);
  });
}

function showDetail(lesson){
  const d = document.getElementById('detail');
  d.innerHTML = `<h2>Bài ${lesson.id}: ${lesson.title}</h2>` +
    (lesson.phonetics ? `<p><strong>Ngữ âm:</strong> ${lesson.phonetics.join(', ')}</p>` : '') +
    (lesson.functions ? `<p><strong>Chức năng:</strong> ${lesson.functions.join(', ')}</p>` : '') +
    (lesson.notes ? `<p><strong>Ghi chú chữ Hán:</strong> ${lesson.notes.join('; ')}</p>` : '');
}

loadLessons().catch(err=>{
  document.getElementById('list').textContent = 'Không thể tải dữ liệu.';
  console.error(err);
});
