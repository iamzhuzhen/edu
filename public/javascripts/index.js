$(function(){

    init();
    function init() {
        eventBinding()
    }

    function eventBinding() {
        $('#login_submit').on('click',function(){
            // formSubmit();
            $('#login_form').submit();
       
        })
    }

    // function formSubmit() {
    //     let data = $('#login_form').serialize();
    //     let submitData=decodeURIComponent(data,true);

    //     $.ajax({
    //         url:'/authenticate',
    //         type:'post',
    //         data:submitData,
    //         cache:false,//false是不缓存，true为缓存
    //         async:true,//true为异步，false为同步
    //         beforeSend:function(){
    //             console.log('beforesend');
    //         },
    //         success:function(result){
    //             console.log('success');
    //         },
    //         complete:function(){
    //             console.log('complete');
    //         },
    //         error:function(){
    //             console.log('error');
    //         }
    //     })
    // }
})