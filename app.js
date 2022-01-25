
const devs_form = document.querySelector('#devs_form');
const rowbox = document.querySelector('.rowbox');

devs_form.addEventListener('submit',function(e){
    e.preventDefault();

    let name = this.querySelector('input[name="name"]');
    let skills = this.querySelectorAll('input[name="skill"]:checked');
    let gender = this.querySelector('input[name="gender"]:checked');
    let photo = this.querySelector('input[name="photo"]');

    let devs_arr = [];

   for(let i = 0; i < skills.length; i++){
       devs_arr.push(skills[i].value);
   }
    


   let devs_dec;
   if(dataget('devs')){
       devs_dec = dataget('devs');
   }else{
       devs_dec = [];
   }

   devs_dec.push({
      

    name  : name.value,
    Gender : gender.value,
    skill : skills,
   
    photo : photo.value,


   });

   dataset('devs',devs_dec);


    alldevs();




});


 alldevs();

function alldevs(){


    let all_data = dataget('devs')
    let data = '';
    
    

    all_data.map(d=>{

        

        // let lists = '';
        // d.skill.map(list=>{
        //     lists.innerHTML =  '<li  class="list-group-item">' + list + '</li>'

        // });

        data += `    
        <div class="col-lg-4">
        <div class="card piccard">
            <img style="object-fit: cover;" src="${d.photo}" alt="">
            <div class="card-body text-center">
                <h3> ${d.name}</h3>
                <p>Gender : ${d.Gender}</p>
                <ul id="list" class="list-group">
                    <label for="">Skill</label>
                    
                    <li  class="list-group-item">Mearn developer</li>
                    <li  class="list-group-item">Laravel developer</li>
                   
                </ul>

            </div>
        </div>
    </div>`


    });

    rowbox.innerHTML = data;
   






};





//      //================== product box====================>





const product_form = document.querySelector('#product_form');
const productOut = document.querySelector('.productOut');
const probutton = document.querySelector('#probutton');




product_form.addEventListener('submit', function(e){

    e.preventDefault();


    let product_name = this.querySelector('input[name="product_name"]').value;
    let regular_price = this.querySelector('input[name="regular_price"]').value;
    let sale_price = this.querySelector('input[name="sale_price"]').value;
    let product_photo = this.querySelector('input[name="product_photo"]').value;

    
    let product_arr = '';

    if(dataget('products')){
      
        product_arr = dataget('products');
    }else{
        product_arr = [];
    }


    product_arr.push({
        product_name : product_name,
        regular_price : regular_price,
        sale_price : sale_price,
        product_photo : product_photo,




    });

   dataset('products',product_arr);
   allproductsdata();



});

allproductsdata();

function allproductsdata (){

    let allproData = dataget('products');

    let alldata;

    allproData.map(datapro=>{

        alldata += `  <div class="col-lg-4">
        <div class="card sobjicard">
           <div class="proimg">
            <img class="torkari_img" src="${datapro.product_photo}" alt="">
           </div>
            <div class="card-body">
                <h3>product: ${datapro.product_name}</h3>
                <p class="price">regular price :${datapro.regular_price}</p>
                <p class="sale">sale price :${datapro.sale_price}</p>

            </div>
        </div>
    </div>`


    





    });
    productOut.innerHTML = alldata;

    probutton.addEventListener('click', function(){

        alldata.innerHTML = '';

    })

  

   
};





//            <=================== age-form======================>



const age_form = document.querySelector('#age_form');
const outputAge = document.querySelector('.outputAge');


age_form.addEventListener('submit', function(e){

    e.preventDefault();

    let date = this.querySelector('input[type="date"]').value;
    let time = this.querySelector('input[type="time"]').value;

   let start_time = new Date();
   let end_time = new Date(date + ' ' + time);

   let time_diff = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()));

   let total_sec = Math.floor(time_diff/1000);
   let total_min = Math.floor(total_sec/60);
   let total_hours = Math.floor(total_min/60);
   let total_day = Math.floor(total_hours/24);
   let total_weak = Math.floor(total_day/7);
   let total_month = Math.floor(total_day/30);
   let total_year = Math.floor(total_month/12);





   let month = total_month - (total_year * 12 );
   let day = total_day - (total_year * 12 * 30) - (month * 30);





   outputAge.innerHTML = `${total_year} year , ${month} month <br> ${day} day , ${total_weak} Weak <br> ${total_hours} hours <br> ${total_min} minit <br> ${ total_sec} second` ;









   






});
