def isprime(num)
    div=2;
    while((div*div) <=num)
        if (num%div==0)
            return false;
        end
        div=div+1;
    end
    return true;                                #semicolon brackets are not neccessery
end


def printallprime(num)  #function
    #for loop from [2,num]
    for i in (2..num)       #to increment i by some value use ".step(value ++ by)"
        isstatus=isprime(i);
        if(isstatus)
            puts(i.to_s())  # .to_s()  -> converts i into string to display number
        end

    end
end

printallprime(50);