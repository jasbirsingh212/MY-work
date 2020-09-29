m=gets.chomp.to_i();
n=gets.chomp.to_i();

arr=[];

for  i in (0..m-1) 
    row=[];
    for j in (0..n-1)

        val=gets.chomp.to_i();
        row.push(val);

    end
    arr.push(row);

end


def display(arr)
    
    for i in (0..arr.length-1)
        for j in (0..arr[0].length-1)
            
            print(arr[i][j].to_s()+" ");
            
        end
        puts
    end
end

def wavetravel(arr)

    for j in (0..arr[0].length-1)

        if(j%2==0)

            for i in (0..arr.length-1)
                print(arr[i][j].to_s()+" ");
            end

        else

            for i in (0..arr.length-1).to_a().reverse();
                print(arr[i][j].to_s+" ");
            end
        end

    end

end

display(arr);
wavetravel(arr);