var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);

    //ANSWER 1:
    var res=data.filter((ele)=>ele.region==="Asia");
    console.log(res);

    //ANSWER 2:

    var cpop=data.filter((ele)=>ele.population<200000);
    console.log(cpop);

    //ANSWER 3:
    let cusd=data.filter((ele)=>{
        for(var i in ele.currencies){
            if(ele.currencies[i].code==="USD"){
                return true;
            }
        }
        
    });
    console.log(cusd);



    //ANSWER 4:
     var tpop=data.reduce((ele)=>Acc,ele);
     console.log(tpop);

}