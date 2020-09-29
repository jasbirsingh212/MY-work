def permutation(ques,asf)

    if(ques.length()==0)
        puts asf
        return
    end

    ch=ques[0,1]
    roq=ques[1 ,ques.length-1]
    for i in (0..asf.length)
        left=asf[0,i];
        right=asf[i, asf.length-i];
        permutation(roq,left+ch+right);

    end
end

permutation(gets.chomp,"");