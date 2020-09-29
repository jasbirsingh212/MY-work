# nothing -> local, @val -> class/object member ,@@val-> static,$val-> gloabal variable
class Item
    attr_accessor :val, :wt ,:ratio
    def initialize(val,wt)
        @val=val
        @wt=wt
        @ratio=val * 1.0 /wt
    end

    def to_s
        return val.to_s+ " "+wt.to_s+" "+ratio.to_s();
    end

    def <=>(other)

        if(@ratio>other.ratio)
            return 1
        elsif (@ratio<other.ratio)
            return -1
        else
            return 0
        end
    end

end

prices=[15,14,10,45,30 ]
wts=[2,5,1,3,4]
items=[]

for i in (0..prices.length-1)
    pair=Item.new(prices[i],wts[i])
    items.push(pair)
end


items=items.sort
puts items;

vib=0;
rc=7;

idx=items.length-1;

while(idx>=0)

    if(rc>=items[idx].wt)
        vib=vib+items[idx].val;
        rc=rc-items[idx].wt;
    else
        vib=vib+ (rc*items[idx].ratio);
        rc=0;
        break;
    end
    idx=idx-1;
end

puts (vib.to_s+ " " +rc.to_s);
