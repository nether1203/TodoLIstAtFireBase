$(document).ready(function () {
getAllTask();

   let level = '';

   $('.addTask').click(function () {
      addTask();
   });

   $('.lowLevel').click(function () {
      level = 'lowLevel';
      $('.level').css('border', 'none');
      $(this).css('border', 'solid 3px #000');
   });
   $('.mediumLevel').click(function () {
      level = 'mediumLevel';
      $('.level').css('border', 'none');
      $(this).css('border', 'solid 3px #000');
   });
   $('.highLevel').click(function () {
      level = 'highLevel';
      $('.level').css('border', 'none');
      $(this).css('border', 'solid 3px #000');
   });






   function addTask() {
      let taskName = $('.inputText').val();
      if (taskName) {
         let taskItem = $('<li class="task"></li>').text(taskName).addClass(level);


         $('.taskList').append(taskItem);
         console.log(taskName, level);
         saveTask(taskName, level);
      }
      $('.task').click(function () {
         $(this).fadeOut(1600, "linear");
         $(this).remove();
      })
      $('.inputText').val('')
   }
})




const dbUrl = 'https://todo-list-461ca-default-rtdb.europe-west1.firebasedatabase.app/todoList.json';

function saveTask (taskName, level){
   fetch(dbUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         taskName:taskName,
         level:level
      })
   })
.then(response => response.json())
.then(data => console.log('Дані збереженно під ID', data.name))
.catch(error => console.error(error))
}

function getAllTask () {
   fetch(dbUrl)
   .then(response => response.json())
   .then(data => {

      for(let id in data){

      

      let taskItem =$('<li class="task"> </li>').text(data[id].taskName).addClass(data[id].level);
      $('.taskList').append(taskItem);
      }
   })
   .catch(error => console.error(error))
}