// script.js - populate books list from books.json
async function loadBooks(){
  try{
    const res = await fetch('assets/books/books.json');
    if(!res.ok) throw new Error('books.json not found');
    const data = await res.json();
    const ul = document.getElementById('books-list');
    if(!ul) return;
    ul.innerHTML = '';
    data.forEach(item=>{
      const li = document.createElement('li');
      const left = document.createElement('div');
      left.innerHTML = `<strong>${item.title}</strong><br><small>${item.author || ''}</small>`;
      const right = document.createElement('div');
      const open = document.createElement('a');
      open.href = item.url;
      open.target = '_blank';
      open.className = 'btn-small';
      open.textContent = 'فتح';
      const down = document.createElement('a');
      down.href = item.url;
      down.download = '';
      down.className = 'btn-small';
      down.style.marginLeft = '8px';
      down.textContent = 'تحميل';
      right.appendChild(open);
      right.appendChild(down);
      li.appendChild(left);
      li.appendChild(right);
      ul.appendChild(li);
    });
  }catch(e){
    console.error(e);
    const ul = document.getElementById('books-list');
    if(ul) ul.innerHTML = '<li>لا توجد كتب. ارفع ملفات داخل /assets/books وحرّر books.json</li>';
  }
}
document.addEventListener('DOMContentLoaded', loadBooks);
