arr=[2,3,4,5,6,7]
max= arr.max()  # find maximum in array

 #for floor in (max).downto(1)
  #  print("hello" + max.to_s());
 #end

 for floor in (1..max).to_a().reverse()  # for loop [1,max] range convert it into array and reverse it 
    for i in (0..arr.length-1)
        if(floor > arr[i])
            print (" ");
        else
            print("*");
        end
    end
    print("\n");
end


