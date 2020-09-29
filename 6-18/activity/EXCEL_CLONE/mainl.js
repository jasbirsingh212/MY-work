const $=require('jquery');
const { parse } = require('path');
const { dialog } = require('electron').remote;
const fsp=require('fs').promises;
$(document).ready(function(){

    let row=[];

    function getdefaultcell(){
        let cell={
            val :'',
            fontFamily:'Georgia',
            fontSize:14,
            bold:false,
            italic : false,
            underline : false,
            bgColor : '#FFFFFF',
            textColor:'#000000',
            valign :'middle',
            halign :'center',
            formula:'',
            upstream:[],
            downstream :[]
        };

        return cell;
    }
    function preparecelldiv(cdiv,cobj)
    {
        $(cdiv).html(cobj.val);
        $(cdiv).css('Font-Family',cobj.fontFamily);
        $(cdiv).css('font-size',cobj.fontSize +'px');
        $(cdiv).css('font-weight',cobj.bold?'bold':'normal');
        $(cdiv).css('font-style',cobj.italic? 'italic':'normal');
        $(cdiv).css('text-decoration',cobj.underline ? 'underline':'none');
        $(cdiv).css('background-color',cobj.bgColor);
        $(cdiv).css('color',cobj.textColor);
        $(cdiv).css('text-align',cobj.halign);
    }

    $('#Content-container').on('scroll',function(){
        $('#first-row').css('top',$('#Content-container').scrollTop());
        $('#first-col').css('left',$('#Content-container').scrollLeft());
        $('#tl-cell').css('top',$('#Content-container').scrollTop());
        $('#tl-cell').css('left',$('#Content-container').scrollLeft());

    });

    $('#New').on('click',function(){
        row=[];
        $('#grid').find('.row').each(function (){
            let cells=[];
            $(this).find('.cell').each(function(){
                let cell=getdefaultcell();
                cells.push(cell);

                preparecelldiv(this,cell);
               
            });
            row.push(cells);
        });
        $('#grid .cell:first').click();
        $('#Home-Menu').click();
    });

    $('#Open').on('click', async function(){
        let dobj= await dialog.showOpenDialog();
        let data=await fsp.readFile(dobj.filePaths[0]);
         row=JSON.parse(data);

        let i=0;
        $('#grid').find('.row').each(function(){
                 let j=0;
                 $(this).find('.cell').each(function(){
                     let cell=row[i][j];
                     preparecelldiv(this,cell);
                     j++;
                 })
                 i++;
             })
             $('#grid .cell:first').click();
             $('#Home-Menu').click();
    });

    
    $('#Save').on('click', async function(){
        let dobj=await dialog.showSaveDialog();
        await fsp.writeFile(dobj.filePath,JSON.stringify(row));
        alert('Saved Successfully');
        $('#Home-Menu').click();
    })
    
    $('#Menu-Bar> div').on('click',function(){
        $('#Menu-Bar > div').removeClass('selected');
        $(this).addClass('selected');

        let menucontainerid=$(this).attr('data-content');
        $('#Menu-Content-container > div').css('display','none');
        $('#'+menucontainerid).css('display','flex');

    })
    
    $('#Font-Family').on('change',function(){
        let fontfamily=$(this).val();
        $('#grid .cell.selected').each(function(){
            $(this).css('font-family',fontfamily);
            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.fontFamily=fontfamily;
        })
    })

    $('#Font-Size').on('change',function(){
        let fontsize=$(this).val();
        $('#grid .cell.selected').each(function(){
            $(this).css('font-size',fontsize +'px' );
            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.fontSize=fontsize;
        })
    })


    $('#bold').on('click',function(){
        $(this).toggleClass('selected');
        let bold=$(this).hasClass('selected');

        $('#grid .cell.selected').each(function(){
            $(this).css('font-weight',bold ? 'bold' :'normal');

            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.bold=bold;
        })
    })
    
    $('#italic').on('click',function(){
        $(this).toggleClass('selected');
        let italic=$(this).hasClass('selected');

        $('#grid .cell.selected').each(function(){
            $(this).css('font-style',italic ? 'italic' :'normal');

            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.italic=italic;
        })
    })
    
    $('#underline').on('click',function(){
        $(this).toggleClass('selected');
        let underline=$(this).hasClass('selected');

        $('#grid .cell.selected').each(function(){
            $(this).css('text-decoration',underline ? 'underline' :'none');

            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.underline=underline;
        })
    })
        
    $('#bg-color').on('change',function(){
        let bgcolor=$(this).val();
        $('#grid .cell.selected').each(function(){
            $(this).css('background-color',bgcolor);
            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.bgColor=bgcolor;
        })
    })

    $('#text-color').on('change',function(){
        let textcolor=$(this).val();
        $('#grid .cell.selected').each(function(){
            $(this).css('color',textcolor);
            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.textColor=textcolor;
        })
    })

    $('.valign').on('click',function(){
        $('.valign').removeClass('selected');
        $(this).addClass('selected');
    })
    
    $('.halign').on('click',function(){
        $('.halign').removeClass('selected');
        $(this).addClass('selected');

        let halign=$(this).attr('prop-val');
        $('#grid .cell.selected').each(function(){

            $(this).css('text-align',halign);
            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];
            cobj.halign=halign;

        })
    })
    
    $('#grid .cell').on('click',function(e){
        if(e.ctrlKey)
        {
            $(this).addClass('selected');
        }
        else{
            $('#grid .cell').removeClass('selected');
            $(this).addClass('selected');
        }
        let rid=parseInt($(this).attr('rid'));
        let cid=parseInt($(this).attr('cid'));
        let cobj=row[rid][cid];

        if(cobj.bold)
        {
            $('#bold').addClass('selected');
        }
        else
        {
            $('#bold').removeClass('selected');
        }

        if(cobj.italic)
        {
            $('#italic').addClass('selected');
        }
        else
        {
            $('#italic').removeClass('selected');
        }

        if(cobj.underline)
        {
            $('#underline').addClass('selected');
        }
        else
        {
            $('#underline').removeClass('selected');
        }

        $('#Font-Family').val(cobj.fontFamily);
        $('#Font-Size').val(cobj.fontSize);
        $('#bg-color').val(cobj.bgColor);
        $('#text-color').val(cobj.textColor);
        $('.halign').removeClass('selected');
        $('.halign[prop-val='+ cobj.halign + ']').addClass('selected');

        $('#CellFormula').val(String.fromCharCode(cid+65)+(rid+1));
        $('#TxtFormula').val(cobj.formula);

    });

    function evaluateformula(cobj)
    {
        let formula=cobj.formula;
        for(let i=0;i<cobj.upstream.length;i++)
        {
            let uso=cobj.upstream[i];
            let fuso=row[uso.rid][uso.cid];
            let cellname= String.fromCharCode('A'.charCodeAt(0)+uso.cid)+(uso.rid+1);
            formula=formula.replace(cellname,fuso.val || 0);
        }

        let nval = eval(formula);
        return nval;
    }

    function updateval(rid,cid,val,render)
    {
        let cobj=row[rid][cid];
        cobj.val=val;
        if(render)
        {
            $('.cell[rid=' +rid +'][cid='+cid +']').html(val);
        }

        for(let i=0;i<cobj.downstream.length;i++)
        {
           let dso=cobj.downstream[i];
           let fdso=row[dso.rid][dso.cid];
           let nval=evaluateformula(fdso);
           updateval(dso.rid,dso.cid,nval,true); 
        }

    }

    function deleteformula(rid,cid)
    {
        let cobj=row[rid][cid];
        cobj.formula='';

        for(let i=0;i<cobj.upstream.length;i++)
        {
            let uso=cobj.upstream[i];
            let fuso=row[uso.rid][uso.cid];

            for(let j=0;j<fuso.downstream.length;j++)
            {
                let dso=fuso.downstream[i];
                if(dso.rid==rid && dso.cid==cid)
                {
                    fuso.downstream.splice(j,1);
                    break;
                }

            }
        }

        cobj.upstream=[];
    }

    function setupformula(rid,cid,formula){
        let cobj=row[rid][cid];
        cobj.formula=formula;
        //set upstream-downstream
        formula=formula.replace('(','').replace(')','');
        let comps=formula.split(' ');

        for(let i=0;i<comps.length;i++)
        {
            if(comps[i].charCodeAt(0)>='A'.charCodeAt(0)&& comps[i].charCodeAt(0)<= 'Z'.charCodeAt(0))
            {
                let urid=parseInt(comps[i].substr(1))-1;
                let ucid=comps[i].charCodeAt(0)-'A'.charCodeAt(0);
                cobj.upstream.push({
                    rid:urid,
                    cid:ucid
                })

                let fuso=row[urid][ucid];

                fuso.downstream.push({

                    rid:rid,
                    cid:cid

                })
            }
        }
    }


    $('#grid .cell').on('keyup',function(e){
        let rid=parseInt($(this).attr('rid'));
        let cid=parseInt($(this).attr('cid'));
        let cobj=row[rid][cid];
        if(cobj.fomula)
        {
            $('#TxtFormula').val('');
            deleteformula(rid, cid);
        }

        updateval(rid,cid,$(this).html(),false)

            
    });

    $('#TxtFormula').on('blur',function(){
        let formula =$(this).val();

        $('#grid .cell.selected').each(function(){

            let rid=parseInt($(this).attr('rid'));
            let cid=parseInt($(this).attr('cid'));
            let cobj=row[rid][cid];

            if(cobj.formula)
            {
                deleteformula(rid,cid);
            }

            setupformula(rid,cid,formula);
            let nval=evaluateformula(cobj);
            updateval(rid,cid,nval,true);
        });
    });




    $('#New').click();
});

