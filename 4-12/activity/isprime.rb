def isprime(num)
    div=2;
    while((div*div) <=num)
        if (num%div==0)
            return false;
        end
        div=div+1;
    end
    return true;
end

a=isprime(29)
b=isprime(38)
puts("29 is prime :"+ a.to_s());
puts("38 is prime :"+ b.to_s());