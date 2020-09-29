const $=require('jquery');
const { dialog } = require('electron').remote;

$(document).ready(function(){

    $('#Content-container').on('scroll',function(){
        $('#first-row').css('top',$('#Content-container').scrollTop());
        $('#first-col').css('left',$('#Content-container').scrollLeft());
        $('#tl-cell').css('top',$('#Content-container').scrollTop());
        $('#tl-cell').css('left',$('#Content-container').scrollLeft());

    });

    $('#New').on('click',function(){
        $('#grid').find('.row').each(function (){
            $(this).find('.cell').each(function(){
                $(this).html(" ");
            });
        });
    });

    $('#Open').on('click',function(){
        dialog.showOpenDialog();
    });

    
    $('#Save').on('click',function(){
        dialog.showSaveDialog();
    });
    
    
});

